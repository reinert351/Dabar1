
import { GoogleGenAI, Type } from "@google/genai";
import { StrongEntry, StrongToken } from "../types";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function withRetry<T>(fn: () => Promise<T>, maxRetries = 3): Promise<T> {
  let retries = 0;
  while (true) {
    try {
      return await fn();
    } catch (error: any) {
      const errorStr = JSON.stringify(error) + (error?.message || '');
      if (errorStr.toLowerCase().includes('quota')) {
        console.error("Cota da API Gemini excedida. Verifique seu plano.");
        throw error;
      }
      if (errorStr.includes('429') || errorStr.includes('RESOURCE_EXHAUSTED')) {
        retries++;
        if (retries >= maxRetries) {
          throw error;
        }
        const delay = 5000 * Math.pow(2, retries - 1); // 5s, 10s
        console.warn(`Gemini API rate limit (429). Retrying in ${delay}ms... (Attempt ${retries}/${maxRetries})`);
        await sleep(delay);
      } else {
        throw error;
      }
    }
  }
}

export async function fetchStrongFromGemini(id: string): Promise<StrongEntry | null> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY não encontrada.");
    return null;
  }
  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await withRetry(() => ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Forneça a definição léxica completa para o número de Strong: ${id}. 
      Se este for um número de Strong não padrão, estendido ou específico de algum software léxico (como a série H9000 para partículas hebraicas), forneça a função gramatical ou o significado mais provável com base no uso bíblico.
      Responda estritamente em JSON.`,
      config: {
        systemInstruction: "Você é um lexicógrafo bíblico especialista. Forneça definições precisas e concisas para números de Strong em português.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            original: { type: Type.STRING },
            transliteration: { type: Type.STRING },
            definition: { type: Type.STRING },
            pronunciation: { type: Type.STRING },
            occurrences: { type: Type.NUMBER }
          },
          required: ["id", "original", "transliteration", "definition"]
        }
      }
    }));

    const text = response.text;
    if (!text) {
      console.warn(`Gemini retornou texto vazio para Strong ${id}`);
      return null;
    }
    
    try {
      const data = JSON.parse(text);
      return data as StrongEntry;
    } catch (parseError) {
      console.error(`Erro ao parsear JSON do Gemini para Strong ${id}:`, parseError, text);
      return null;
    }
  } catch (error) {
    console.error("Erro ao buscar Strong via Gemini:", error);
    return null;
  }
}

export async function fetchVerseTokensFromGemini(verseId: string, text: string): Promise<StrongToken[] | null> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY não encontrada.");
    return null;
  }
  const ai = new GoogleGenAI({ apiKey });

  try {
    const isOldTestament = /^[A-Z0-9]{3}/.test(verseId) && !['MAT', 'MAR', 'LUK', 'JHN', 'ACT', 'ROM', '1CO', '2CO', 'GAL', 'EPH', 'PHP', 'COL', '1TH', '2TH', '1TI', '2TI', 'TIT', 'PHM', 'HEB', 'JAS', '1PE', '2PE', '1JO', '2JO', '3JO', 'JUD', 'REV'].includes(verseId.split(' ')[0]);
    const prefix = isOldTestament ? 'H' : 'G';

    const response = await withRetry(() => ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analise o versículo [${verseId}]: ${text}.
      Forneça os números de Strong (${isOldTestament ? 'Hebraico' : 'Grego'}), lemma e morfologia para cada palavra.
      Responda estritamente em JSON.`,
      config: {
        systemInstruction: "Você é um especialista em línguas bíblicas. Sua tarefa é analisar versículos e fornecer os metadados linguísticos precisos em formato JSON. Seja conciso e evite repetições desnecessárias. Use apenas o número de Strong com o prefixo (ex: G3972), sem explicações adicionais ou texto extra dentro dos arrays.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              text: { type: Type.STRING, description: "A palavra original do texto." },
              strong: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "Array de números de Strong (ex: ['G3972']). Não inclua texto extra ou repetições."
              },
              lemma: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "Array de lemmas originais (ex: ['λόγος']). Não inclua texto extra ou repetições."
              },
              morph: { 
                type: Type.ARRAY, 
                items: { type: Type.STRING },
                description: "Array de morfologias (ex: ['N-NSM']). Não inclua texto extra ou repetições."
              }
            },
            required: ["text", "strong", "lemma", "morph"]
          }
        }
      }
    }));

    const result = response.text;
    if (!result) {
      console.warn(`Gemini retornou texto vazio para tokens de ${verseId}`);
      return null;
    }
    
    // Proteção contra loops (respostas excessivamente longas para um versículo)
    if (result.length > 50000) {
      console.error(`Resposta do Gemini para ${verseId} é excessivamente longa (${result.length} bytes), provável loop.`, result.substring(0, 500));
      return null;
    }
    
    try {
      return JSON.parse(result) as StrongToken[];
    } catch (parseError) {
      console.error(`Erro ao parsear JSON do Gemini para tokens de ${verseId}:`, parseError, result.substring(0, 500));
      return null;
    }
  } catch (error: any) {
    const errorStr = JSON.stringify(error) + (error?.message || '');
    if (errorStr.toLowerCase().includes('quota')) {
      console.error(`Cota da API Gemini excedida ao buscar tokens para ${verseId}. Verifique seu plano.`);
    } else {
      console.error("Erro ao gerar tokens Strong via Gemini:", error);
    }
    return null;
  }
}
