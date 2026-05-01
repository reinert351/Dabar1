
const BOOK_MAP: Record<string, string> = {
  "GENESIS": "GEN", "GN": "GEN", "EXODO": "EXO", "EX": "EXO", "LEVITICO": "LEV", "LV": "LEV",
  "NUMEROS": "NUM", "NM": "NUM", "DEUTERONOMIO": "DEU", "DT": "DEU", "JOSUE": "JOS", "JS": "JOS",
  "JUIZES": "JDG", "JZ": "JDG", "RUTE": "RUT", "RT": "RUT", "1SAMUEL": "1SA", "1SM": "1SA",
  "2SAMUEL": "2SA", "2SM": "2SA", "1REIS": "1KI", "1RS": "1KI", "2REIS": "2KI", "2RS": "2KI",
  "1CRONICAS": "1CH", "1CR": "1CH", "2CRONICAS": "2CH", "2CR": "2CH", "ESDRAS": "EZR", "ED": "EZR",
  "NEEMIAS": "NEH", "NE": "NEH", "ESTER": "EST", "ET": "EST", "JÓ": "JOB", "JOB": "JOB", "JO": "JOB",
  "SALMO": "PSA", "SALMOS": "PSA", "SL": "PSA", "PROVERBIOS": "PRO", "PV": "PRO", "ECLESIASTES": "ECC",
  "EC": "ECC", "CANTARES": "SNG", "CT": "SNG", "ISAIAS": "ISA", "IS": "ISA", "JEREMIAS": "JER",
  "JR": "JER", "LAMENTACOES": "LAM", "LM": "LAM", "EZEQUIEL": "EZE", "EZ": "EZE", "DANIEL": "DAN",
  "DN": "DAN", "OSEIAS": "HOS", "OS": "HOS", "JOEL": "JOE", "JL": "JOE", "AMOS": "AMO", "AM": "AMO",
  "OBADIAS": "OBA", "OB": "OBA", "JONAS": "JON", "JN": "JON", "MIQUEIAS": "MIC", "MQ": "MIC",
  "NAUM": "NAH", "NA": "NAH", "HABACUQUE": "HAB", "HC": "HAB", "SOFONIAS": "ZEP", "SF": "ZEP",
  "AGEU": "HAG", "AG": "HAG", "ZACARIAS": "ZEC", "ZC": "ZEC", "MALAQUIAS": "MAL", "ML": "MAL",
  "MATEUS": "MAT", "MT": "MAT", "MARCOS": "MRK", "MC": "MRK", "LUCAS": "LUK", "LC": "LUK",
  "JOAO": "JHN", "JOÃO": "JHN", "ATOS": "ACT", "AT": "ACT", "ROMANOS": "ROM", "RM": "ROM",
  "1CORINTIOS": "1CO", "2CORINTIOS": "2CO", "GALATAS": "GAL", "GL": "GAL", "EFESIOS": "EPH",
  "EF": "EPH", "FILIPENSES": "PHI", "FP": "PHI", "COLOSSENSES": "COL", "CL": "COL",
  "1TESSALONICENSES": "1TH", "1TS": "1TH", "2TESSALONICENSES": "2TH", "2TS": "2TH",
  "1TIMOTEO": "1TI", "2TIMOTEO": "2TI", "TITO": "TIT", "TT": "TIT", "FILEMOM": "PHM", "FM": "PHM",
  "HEBREUS": "HEB", "HB": "HEB", "TIAGO": "JAM", "TG": "JAM", "1PEDRO": "1PE", "2PEDRO": "2PE",
  "1JOAO": "1JN", "2JOAO": "2JN", "3JOAO": "3JN", "JUDAS": "JUD", "JD": "JUD", "APOCALIPSE": "REV", "AP": "REV"
};

export const normalizeRefToOsis = (ref: string): string => {
  if (!ref) return "";
  let clean = ref.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[—–]/g, "-").replace(/[().]/g, "").trim();
  clean = clean.replace(/^([1-3]?[A-Z]+)(\d+)/, "$1 $2");
  const parts = clean.split(/\s+/);
  let bookPart = parts[0];
  let rest = parts.slice(1).join(" ");
  if (/^[1-3]$/.test(bookPart) && parts[1]) {
    bookPart = bookPart + parts[1];
    rest = parts.slice(2).join(" ");
  }
  const osisBook = BOOK_MAP[bookPart] || bookPart;
  return `${osisBook} ${rest}`.trim();
};
