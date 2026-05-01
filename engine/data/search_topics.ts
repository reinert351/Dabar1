export interface SearchTopic {
  id: string;
  title: string;
  keywords: string[];
}

export const SEARCH_TOPICS: SearchTopic[] = [
  { id: "faith", title: "Fé e Confiança", keywords: ["fé", "crer", "acreditar", "confiar", "confiança", "fiel"] },
  { id: "prayer", title: "Oração e Intercessão", keywords: ["orar", "oração", "clamar", "intercessão", "súplica", "pedir"] },
  { id: "repentance", title: "Arrependimento", keywords: ["arrepender", "arrependimento", "conversão", "mudança", "metanoia"] },
  { id: "holiness", title: "Santidade e Pureza", keywords: ["santo", "santidade", "purificação", "limpo", "puro", "consagrado"] },
  { id: "christ_cross", title: "Cruz e Sacrifício", keywords: ["cruz", "sacrifício", "sangue", "cordeiro", "morte", "calvário"] },
  { id: "forgiveness", title: "Perdão e Reconciliação", keywords: ["perdão", "perdoar", "reconciliação", "absolver", "remissão"] },
  { id: "suffering", title: "Sofrimento e Tribulação", keywords: ["aflição", "sofrimento", "tribulação", "dor", "prova", "angústia"] },
  { id: "hope", title: "Esperança e Futuro", keywords: ["esperança", "esperar", "promessa", "futuro", "porvir"] },
  { id: "grace", title: "Graça e Misericórdia", keywords: ["graça", "favor", "misericórdia", "benignidade", "bondade"] },
  { id: "salvation", title: "Salvação e Redenção", keywords: ["salvação", "salvo", "redenção", "resgate", "libertação"] },
  { id: "love", title: "Amor (Ágape)", keywords: ["amor", "amar", "caridade", "afeição", "amado"] },
  { id: "sovereignty", title: "Soberania de Deus", keywords: ["soberano", "rei", "trono", "governo", "vontade", "decreto"] },
  { id: "wisdom", title: "Sabedoria e Temor", keywords: ["sabedoria", "sábio", "conhecimento", "temor", "prudência"] },
  { id: "law", title: "Lei e Mandamentos", keywords: ["lei", "mandamento", "estatuto", "preceito", "torá"] },
  { id: "spirit", title: "Espírito Santo", keywords: ["espírito", "unção", "consolador", "poder", "fogo"] },
  { id: "creation", title: "Criação e Origens", keywords: ["criar", "criação", "princípio", "início", "mundo", "terra"] },
  { id: "judgment", title: "Juízo e Justiça", keywords: ["juízo", "julgar", "justiça", "tribunal", "condenação"] },
  { id: "church", title: "Igreja e Comunhão", keywords: ["igreja", "corpo", "comunhão", "irmãos", "assembleia"] },
  { id: "warfare", title: "Batalha Espiritual", keywords: ["batalha", "luta", "armadura", "inimigo", "vencer", "vitória"] },
  { id: "eternity", title: "Eternidade e Reino", keywords: ["eterno", "eternidade", "reino", "céu", "vida eterna"] }
];
