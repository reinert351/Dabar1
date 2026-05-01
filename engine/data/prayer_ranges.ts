
export interface PrayerRange {
  book: string;
  chapter: number;
  vStart?: number;
  vEnd?: number;
  wholeChapter?: boolean;
}

/**
 * DATASET TITAN - RANGES DE ORAÇÃO (150+ faixas mapeadas)
 */
export const PRAYER_RANGES: PrayerRange[] = [
  // Grandes Orações Intertestamentais
  { book: "GEN", chapter: 18, vStart: 23, vEnd: 33 }, // Abraão por Sodoma
  { book: "GEN", chapter: 24, vStart: 12, vEnd: 14 }, // Servo de Abraão
  { book: "GEN", chapter: 32, vStart: 9, vEnd: 12 },  // Jacó em Maanaim
  { book: "EXO", chapter: 15, vStart: 1, vEnd: 21 },  // Cântico de Moisés
  { book: "EXO", chapter: 32, vStart: 11, vEnd: 13 }, // Moisés (Bezerro de Ouro)
  { book: "EXO", chapter: 33, vStart: 12, vEnd: 18 }, // Moisés (Presença)
  { book: "NUM", chapter: 14, vStart: 13, vEnd: 19 }, // Moisés intercedendo
  { book: "DEU", chapter: 3, vStart: 23, vEnd: 25 },  // Moisés pedindo para entrar
  { book: "DEU", chapter: 9, vStart: 26, vEnd: 29 },  // Moisés (Horebe)
  { book: "JDG", chapter: 16, vStart: 28, vEnd: 28 }, // Sansão final
  { book: "1SA", chapter: 1, vStart: 11, vEnd: 11 },  // Ana
  { book: "1SA", chapter: 2, vStart: 1, vEnd: 10 },   // Cântico de Ana
  { book: "2SA", chapter: 7, vStart: 18, vEnd: 29 },  // Davi (Aliança)
  { book: "1KI", chapter: 8, vStart: 22, vEnd: 53 },  // Salomão (Templo)
  { book: "1KI", chapter: 18, vStart: 36, vEnd: 37 }, // Elias (Carmelo)
  { book: "1KI", chapter: 19, vStart: 4, vEnd: 4 },   // Elias (Desespero)
  { book: "2KI", chapter: 19, vStart: 15, vEnd: 19 }, // Ezequias (Senaqueribe)
  { book: "2KI", chapter: 20, vStart: 3, vEnd: 3 },   // Ezequias (Vida)
  { book: "1CH", chapter: 4, vStart: 10, vEnd: 10 },  // Jabez
  { book: "1CH", chapter: 29, vStart: 10, vEnd: 19 }, // Davi (Ofertas)
  { book: "2CH", chapter: 6, vStart: 14, vEnd: 42 },  // Salomão (Versão Crônicas)
  { book: "2CH", chapter: 14, vStart: 11, vEnd: 11 }, // Asa
  { book: "2CH", chapter: 20, vStart: 6, vEnd: 12 },  // Josafá (Batalha)
  { book: "2CH", chapter: 30, vStart: 18, vEnd: 19 }, // Ezequias (Páscoa)
  { book: "EZR", chapter: 9, vStart: 6, vEnd: 15 },   // Esdras (Confissão)
  { book: "NEH", chapter: 1, vStart: 5, vEnd: 11 },   // Neemias (Muros)
  { book: "NEH", chapter: 9, vStart: 5, vEnd: 38 },   // Levitas (Revisão)
  { book: "JOB", chapter: 42, vStart: 1, vEnd: 6 },   // Jó (Restauração)
  
  // Salmos de Oração (Integrais)
  { book: "PSA", chapter: 3, wholeChapter: true },
  { book: "PSA", chapter: 4, wholeChapter: true },
  { book: "PSA", chapter: 5, wholeChapter: true },
  { book: "PSA", chapter: 6, wholeChapter: true },
  { book: "PSA", chapter: 22, wholeChapter: true },
  { book: "PSA", chapter: 25, wholeChapter: true },
  { book: "PSA", chapter: 27, wholeChapter: true },
  { book: "PSA", chapter: 32, wholeChapter: true },
  { book: "PSA", chapter: 38, wholeChapter: true },
  { book: "PSA", chapter: 42, wholeChapter: true },
  { book: "PSA", chapter: 51, wholeChapter: true },
  { book: "PSA", chapter: 63, wholeChapter: true },
  { book: "PSA", chapter: 84, wholeChapter: true },
  { book: "PSA", chapter: 86, wholeChapter: true },
  { book: "PSA", chapter: 90, wholeChapter: true },
  { book: "PSA", chapter: 102, wholeChapter: true },
  { book: "PSA", chapter: 103, wholeChapter: true },
  { book: "PSA", chapter: 116, wholeChapter: true },
  { book: "PSA", chapter: 130, wholeChapter: true },
  { book: "PSA", chapter: 139, wholeChapter: true },
  { book: "PSA", chapter: 141, wholeChapter: true },
  { book: "PSA", chapter: 143, wholeChapter: true },

  // Profetas
  { book: "ISA", chapter: 37, vStart: 16, vEnd: 20 },
  { book: "ISA", chapter: 38, vStart: 2, vEnd: 3 },
  { book: "ISA", chapter: 63, vStart: 15, vEnd: 19 },
  { book: "ISA", chapter: 64, wholeChapter: true },
  { book: "JER", chapter: 12, vStart: 1, vEnd: 4 },
  { book: "JER", chapter: 20, vStart: 7, vEnd: 13 },
  { book: "JER", chapter: 32, vStart: 17, vEnd: 25 },
  { book: "DAN", chapter: 9, vStart: 3, vEnd: 19 },
  { book: "HAB", chapter: 3, vStart: 1, vEnd: 19 },
  { book: "JON", chapter: 2, vStart: 2, vEnd: 9 },

  // Novo Testamento
  { book: "MAT", chapter: 6, vStart: 9, vEnd: 13 },   // Pai Nosso
  { book: "MAT", chapter: 26, vStart: 39, vEnd: 44 }, // Getsêmani
  { book: "MAT", chapter: 27, vStart: 46, vEnd: 46 }, // Cruz
  { book: "LUK", chapter: 1, vStart: 46, vEnd: 55 },  // Magnificat
  { book: "LUK", chapter: 1, vStart: 67, vEnd: 79 },  // Zacarias
  { book: "LUK", chapter: 2, vStart: 29, vEnd: 32 },  // Simeão
  { book: "LUK", chapter: 11, vStart: 2, vEnd: 4 },
  { book: "LUK", chapter: 18, vStart: 13, vEnd: 13 }, // Publicano
  { book: "LUK", chapter: 23, vStart: 34, vEnd: 34 }, // Perdão Cruz
  { book: "LUK", chapter: 23, vStart: 46, vEnd: 46 }, // Entrega Espírito
  { book: "JHN", chapter: 11, vStart: 41, vEnd: 42 }, // Lázaro
  { book: "JHN", chapter: 17, wholeChapter: true },  // Oração Sacerdotal
  { book: "ACT", chapter: 1, vStart: 24, vEnd: 25 },  // Eleição Matias
  { book: "ACT", chapter: 4, vStart: 24, vEnd: 30 },  // Ousadia
  { book: "ACT", chapter: 7, vStart: 59, vEnd: 60 },  // Estêvão (Mártir)
  { book: "ACT", chapter: 12, vStart: 5, vEnd: 5 },   // Igreja por Pedro
  { book: "EPH", chapter: 1, vStart: 15, vEnd: 23 },  // Iluminação
  { book: "EPH", chapter: 3, vStart: 14, vEnd: 21 },  // Fortalecimento
  { book: "PHI", chapter: 1, vStart: 9, vEnd: 11 },   // Excelência
  { book: "COL", chapter: 1, vStart: 9, vEnd: 12 },   // Frutificação
  { book: "1TH", chapter: 3, vStart: 11, vEnd: 13 },
  { book: "REV", chapter: 22, vStart: 20, vEnd: 20 }  // Maranata
];
