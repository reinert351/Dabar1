
export interface ThemeNode {
  id: string;
  title: string;
  keywords: string[];
}

export const THEME_TAXONOMY: ThemeNode[] = [
  { id: "god_attributes", title: "Atributos de Deus", keywords: ["santo", "justo", "misericord", "bondade", "fiel", "verdade", "onipotent", "eterno", "gloria", "majestade"] },
  { id: "god_sovereignty", title: "Soberania de Deus", keywords: ["reina", "reinar", "trono", "dominio", "governa", "determina", "decreto", "poder", "autoridade"] },
  { id: "god_providence", title: "Providência e cuidado", keywords: ["guarda", "protege", "livra", "socorro", "ajuda", "pastor", "suprir", "cuidar", "sustenta"] },
  { id: "god_judgment", title: "Juízo e justiça", keywords: ["juizo", "julga", "ira", "condena", "castigo", "vinganca", "tribunal"] },
  { id: "grace_mercy", title: "Graça e misericórdia", keywords: ["graca", "misericord", "perdao", "compaix", "piedade", "favor"] },
  { id: "covenant_promises", title: "Aliança e promessas", keywords: ["alianca", "pacto", "promessa", "juramento", "heranca"] },
  { id: "salvation", title: "Salvação", keywords: ["salvacao", "salvar", "redenc", "resgate", "justific", "novo nascimento"] },
  { id: "christology", title: "Cristologia", keywords: ["jesus", "cristo", "messias", "senhor", "filho", "cruz", "ressurreic", "cordeiro"] },
  { id: "holy_spirit", title: "Espírito Santo", keywords: ["espirito", "consolador", "unçao", "dons", "selo"] },
  { id: "prayer", title: "Oração", keywords: ["orar", "oracao", "clamor", "suplic", "intercess", "rogo"] },
  { id: "faith", title: "Fé e confiança", keywords: ["fe", "crer", "confiar", "esperar", "seguro", "refugio"] },
  { id: "obedience", title: "Obediência", keywords: ["obedec", "mandamento", "guardar", "andar", "fiel"] },
  { id: "church", title: "Igreja", keywords: ["igreja", "corpo", "comunhao", "santos", "assembleia"] },
  { id: "missions", title: "Missão e testemunho", keywords: ["evangel", "pregar", "testemunh", "nacoes", "discípulos"] },
  { id: "suffering", title: "Sofrimento e perseverança", keywords: ["aflic", "sofr", "tribul", "persegu", "lagr", "prova"] },
  { id: "wisdom", title: "Sabedoria", keywords: ["sabedoria", "prud", "entendimento", "insensato"] },
  { id: "life_christian", title: "Vida cristã", keywords: ["amor", "humild", "serv", "familia", "pureza", "caridade"] }
];
