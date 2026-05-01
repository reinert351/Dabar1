import { GoogleGenAI, Type } from "@google/genai";
import fs from 'fs';
import path from 'path';

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("ERRO: A variável de ambiente GEMINI_API_KEY não está definida.");
  console.error("Por favor, execute o script passando a chave: GEMINI_API_KEY=sua_chave npx tsx generate_strongs.ts");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function processBook(bookId: string, fileNum: number) {
  // console.log(`Processing ${bookId}...`);
  
  // Read the verses
  const content = fs.readFileSync('data/bible_profetas_menores.ts', 'utf8');
  const verses = [];
  const regex = new RegExp(`\\{\\s*id:\\s*"${bookId} \\d+:\\d+",\\s*bookId:\\s*"${bookId}",\\s*book:\\s*"[^"]+",\\s*chapter:\\s*\\d+,\\s*verse:\\s*\\d+,\\s*text:\\s*"([^"]+)"\\s*\\}`, 'g');
  
  let match;
  while ((match = regex.exec(content)) !== null) {
    const idMatch = match[0].match(/id:\s*"([^"]+)"/);
    if (idMatch) {
      verses.push({ id: idMatch[1], text: match[1] });
    }
  }
  
  console.log(`Found ${verses.length} verses for ${bookId}`);
  
  const strongTokens: Record<string, any[]> = {};
  
  // Process in batches of 2 verses
  const batchSize = 2;
  for (let i = 0; i < verses.length; i += batchSize) {
    await sleep(5000); // Increased delay to 5s to stay within 12 RPM
    const batch = verses.slice(i, i + batchSize);
    // console.log(`Processing batch ${i / batchSize + 1} of ${Math.ceil(verses.length / batchSize)}...`);
    
    const prompt = `
For each of the following Bible verses in Portuguese, provide the Strong's Hebrew numbers, lemma, and morphology for each word.
The output MUST be a JSON object where the keys are the verse IDs and the values are arrays of objects.
Each object in the array must have these properties:
- "text": The word in Portuguese (excluding punctuation).
- "strong": An array of Strong's Hebrew numbers (e.g., ["H1234"]).
- "lemma": An array of the original Hebrew lemma(s) (e.g., ["ברא"]).
- "morph": An array of morphology codes (e.g., ["verb.qal.perf.p3.m.sg"]).

Ensure that EVERY word in the Portuguese text is included in the array, in the exact same order as the text.
If a word doesn't have a direct Strong's number, use the number of the root word or a related word, or use ["H0000"] if absolutely necessary.

Verses:
${batch.map(v => `${v.id}: ${v.text}`).join('\n')}
`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            description: "A map of verse IDs to arrays of Strong's tokens",
            additionalProperties: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  text: { type: Type.STRING, description: "The word in Portuguese" },
                  strong: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Array of Strong's numbers" },
                  lemma: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Array of lemmas" },
                  morph: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Array of morphology codes" }
                },
                required: ["text", "strong", "lemma", "morph"]
              }
            }
          }
        }
      });
      
      const result = JSON.parse(response.text || '{}');
      Object.assign(strongTokens, result);
    } catch (e: any) {
      console.error(`Error processing batch: ${e.message}`);
      // Retry with longer delay if it's a rate limit error
      try {
        const isRateLimit = e.message?.includes('429') || e.message?.includes('RESOURCE_EXHAUSTED');
        await sleep(isRateLimit ? 15000 : 5000); 
        console.log("Retrying...");
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: prompt,
          config: {
            responseMimeType: "application/json",
          }
        });
        const result = JSON.parse(response.text || '{}');
        Object.assign(strongTokens, result);
      } catch (e2: any) {
        console.error(`Retry failed: ${e2.message}`);
      }
    }
  }
  
  // Generate the output file
  let output = `import { VerseStrongData } from '../types';\n\nexport const STRONG_TOKENS_SEED_${fileNum}: VerseStrongData = {\n`;
  for (const [id, tokens] of Object.entries(strongTokens)) {
    output += `  "${id}": ${JSON.stringify(tokens, null, 2).split('\n').map((line, idx) => idx === 0 ? line : '  ' + line).join('\n')},\n`;
  }
  output += `};\n`;
  
  fs.writeFileSync(`data/strong_tokens_${fileNum}.ts`, output);
  console.log(`Saved data/strong_tokens_${fileNum}.ts`);
}

async function run() {
  await processBook("JOE", 23);
  await processBook("AMO", 24);
  await processBook("JON", 25);
  await processBook("HOS", 26);
  await processBook("MIC", 27);
  await processBook("ZEC", 28);
  await processBook("MAL", 29);
}

run().catch(console.error);
