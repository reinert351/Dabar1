import { HistoricalPeriod } from '../types';

export const HISTORICAL_PERIODS_DATA: HistoricalPeriod[] = [
  {
    id: "hp1",
    title: "Período Primordial",
    icon: "🌍",
    reference: "Gn 1-11",
    period: "~4000-2091 a.C.",
    summary: "O Período Primordial abrange os eventos desde a criação do universo até o chamado de Abraão, cobrindo os onze primeiros capítulos de Gênesis. Este é o alicerce sobre o qual toda a narrativa bíblica se constrói. Deus criou os céus e a terra em seis dias, formando um cosmos ordenado a partir do caos, culminando na criação do homem à Sua imagem e semelhança. Adão e Eva foram colocados no Jardim do Éden, um paraíso de perfeição e comunhão com Deus. A Queda trouxe consequências catastróficas: morte espiritual imediata, morte física eventual, maldição sobre a terra e ruptura da comunhão com o Criador. O pecado se multiplicou rapidamente — Caim matou Abel, Lameque glorificou a violência, e a corrupção moral atingiu tal ponto que 'toda a imaginação dos pensamentos do coração do homem era só má continuamente'. O Dilúvio de Noé foi o juízo divino global que purificou a terra, preservando apenas 8 pessoas e representantes de cada espécie animal na Arca. Após o Dilúvio, Deus estabeleceu o pacto noaico com o arco-íris como sinal. A humanidade, porém, se rebelou novamente na Torre de Babel, tentando construir uma civilização unificada contra Deus. A confusão das línguas e dispersão dos povos preparou o cenário para Deus escolher um homem — Abraão — através de quem todas as nações da terra seriam abençoadas.",
    events: [
      { year: "~4000 a.C.", title: "Criação do universo e do homem" },
      { year: "—", title: "Queda de Adão e Eva no Éden" },
      { year: "~3900 a.C.", title: "Caim mata Abel; nasce Sete" },
      { year: "~3400 a.C.", title: "Enoque trasladado ao céu" },
      { year: "~2348 a.C.", title: "Dilúvio de Noé — juízo global" },
      { year: "~2242 a.C.", title: "Torre de Babel — confusão das línguas" }
    ],
    characters: ["Adão", "Eva", "Caim", "Abel", "Sete", "Enoque", "Matusalém", "Noé", "Nimrode"],
    books: "Gênesis 1-11"
  },
  {
    id: "hp2",
    title: "Período Patriarcal",
    icon: "👤",
    reference: "Gn 12-50",
    period: "2166-1876 a.C.",
    summary: "O Período Patriarcal marca o início da história de Israel como um povo escolhido. Começa com o chamado de Abrão em Ur dos Caldeus e a promessa de Deus de torná-lo uma grande nação. Este período foca em quatro grandes patriarcas: Abraão, Isaque, Jacó e José. Abraão exemplifica a fé ao obedecer a Deus sem saber para onde ia. Isaque é o filho da promessa, através de quem a linhagem continuaria. Jacó, cujo nome foi mudado para Israel, teve doze filhos que se tornaram as doze tribos. José, vendido como escravo para o Egito, foi usado por Deus para preservar sua família durante uma fome severa. O período termina com a família de Jacó estabelecida no Egito, sob a proteção de José, preparando o cenário para o crescimento da nação e a futura escravidão.",
    events: [
      { year: "2166 a.C.", title: "Nascimento de Abraão" },
      { year: "2091 a.C.", title: "Abraão entra em Canaã" },
      { year: "2066 a.C.", title: "Nascimento de Isaque" },
      { year: "2006 a.C.", title: "Nascimento de Jacó e Esaú" },
      { year: "1915 a.C.", title: "Nascimento de José" },
      { year: "1876 a.C.", title: "Jacó e sua família descem para o Egito" }
    ],
    characters: ["Abraão", "Sara", "Isaque", "Rebeca", "Jacó", "Raquel", "Lia", "José", "Melquisedeque"],
    books: "Gênesis 12-50, Jó"
  },
  {
    id: "hp3",
    title: "Êxodo e Conquista",
    icon: "⛓️",
    reference: "Êxodo a Josué",
    period: "1446-1375 a.C.",
    summary: "Este período abrange a libertação de Israel da escravidão egípcia, a peregrinação pelo deserto e a entrada na Terra Prometida. Sob a liderança de Moisés, Deus enviou as dez pragas sobre o Egito e dividiu o Mar Vermelho. No Monte Sinai, Israel recebeu a Lei e o Tabernáculo, tornando-se uma nação teocrática. Devido à incredulidade, a geração do Êxodo vagou por 40 anos no deserto. Após a morte de Moisés, Josué assumiu a liderança e guiou o povo na conquista de Canaã, começando com a queda de Jericó. O período termina com a divisão da terra entre as tribos e a morte de Josué, estabelecendo Israel em sua herança prometida.",
    events: [
      { year: "1446 a.C.", title: "O Êxodo do Egito" },
      { year: "1445 a.C.", title: "Entrega da Lei no Sinai" },
      { year: "1445-1406 a.C.", title: "Peregrinação no deserto" },
      { year: "1406 a.C.", title: "Morte de Moisés; entrada em Canaã" },
      { year: "1406-1399 a.C.", title: "Conquista principal de Canaã" },
      { year: "1375 a.C.", title: "Morte de Josué" }
    ],
    characters: ["Moisés", "Arão", "Miriã", "Josué", "Calebe", "Raabe", "Eleazar"],
    books: "Êxodo, Levítico, Números, Deuteronômio, Josué"
  },
  {
    id: "hp4",
    title: "Monarquia Unida e Dividida",
    icon: "👑",
    reference: "1 Samuel a 2 Crônicas",
    period: "1050-586 a.C.",
    summary: "A era monárquica começa com o pedido de Israel por um rei, resultando na unção de Saul. Davi, o segundo rei, estabelece Jerusalém como capital e recebe a promessa de um reino eterno. Salomão, seu filho, constrói o Templo e leva Israel ao seu auge de esplendor. Após Salomão, o reino se divide em dois: o Reino do Norte (Israel) e o Reino do Sul (Judá). O Reino do Norte mergulha na idolatria e cai diante da Assíria em 722 a.C. O Reino do Sul alterna entre reis bons e maus, mas eventualmente é levado ao cativeiro pela Babilônia em 586 a.C., resultando na destruição de Jerusalém e do Templo.",
    events: [
      { year: "1050 a.C.", title: "Saul torna-se o primeiro rei" },
      { year: "1010 a.C.", title: "Davi começa a reinar" },
      { year: "970 a.C.", title: "Salomão começa a reinar" },
      { year: "930 a.C.", title: "Divisão do Reino (Roboão e Jeroboão)" },
      { year: "722 a.C.", title: "Queda de Samaria (Reino do Norte)" },
      { year: "586 a.C.", title: "Destruição de Jerusalém e do Templo" }
    ],
    characters: ["Samuel", "Saul", "Davi", "Salomão", "Elias", "Eliseu", "Isaías", "Jeremias", "Ezequias", "Josias"],
    books: "1 e 2 Samuel, 1 e 2 Reis, 1 e 2 Crônicas, Salmos, Provérbios, Eclesiastes, Cantares, Profetas Pré-exílicos"
  },
  {
    id: "hp5",
    title: "Exílio e Restauração",
    icon: "🏛️",
    reference: "Esdras a Malaquias",
    period: "586-400 a.C.",
    summary: "Durante o exílio na Babilônia, o povo de Deus foi purificado da idolatria. Após 70 anos, sob o decreto de Ciro, o Persa, um remanescente retornou a Jerusalém em três ondas principais. Zorobabel liderou a reconstrução do Templo; Esdras liderou o reavivamento espiritual e o ensino da Lei; e Neemias liderou a reconstrução dos muros de Jerusalém. Profetas como Ageu, Zacarias e Malaquias encorajaram o povo. Este período encerra o Antigo Testamento, com o povo estabelecido na terra, mas sob domínio estrangeiro, aguardando o Messias prometido durante os '400 anos de silêncio' que se seguiriam.",
    events: [
      { year: "538 a.C.", title: "Decreto de Ciro e primeiro retorno" },
      { year: "516 a.C.", title: "Conclusão do Segundo Templo" },
      { year: "478 a.C.", title: "Ester torna-se rainha da Pérsia" },
      { year: "458 a.C.", title: "Retorno de Esdras a Jerusalém" },
      { year: "444 a.C.", title: "Retorno de Neemias e reconstrução dos muros" },
      { year: "400 a.C.", title: "Ministério de Malaquias" }
    ],
    characters: ["Daniel", "Ezequiel", "Ester", "Esdras", "Neemias", "Zorobabel", "Ageu", "Zacarias", "Malaquias"],
    books: "Esdras, Neemias, Ester, Daniel, Ezequiel, Ageu, Zacarias, Malaquias"
  },
  {
    id: "hp6",
    title: "Período do Novo Testamento",
    icon: "✝️",
    reference: "Mateus a Apocalipse",
    period: "6 a.C. – 95 d.C.",
    summary: "Este período central da história da redenção começa com o nascimento de Jesus Cristo, o cumprimento de todas as promessas do Antigo Testamento. Sua vida, morte e ressurreição proveem a base para a Nova Aliança. Após Sua ascensão, o Espírito Santo desce no Pentecostes, dando início à Igreja. O evangelho se espalha de Jerusalém para todo o mundo romano, impulsionado pelas viagens missionárias de Paulo e o testemunho dos apóstolos. O período termina com a escrita do Apocalipse pelo apóstolo João na ilha de Patmos, revelando a vitória final de Cristo e o estabelecimento do Seu reino eterno.",
    events: [
      { year: "~6 a.C.", title: "Nascimento de Jesus Cristo" },
      { year: "27-30 d.C.", title: "Ministério terreno de Jesus" },
      { year: "30 d.C.", title: "Morte, Ressurreição e Pentecostes" },
      { year: "~34 d.C.", title: "Conversão de Paulo" },
      { year: "47-67 d.C.", title: "Viagens missionárias de Paulo e Epístolas" },
      { year: "95 d.C.", title: "Escrita do Apocalipse em Patmos" }
    ],
    characters: ["Jesus Cristo", "João Batista", "Pedro", "João", "Paulo", "Estevão", "Lucas", "Timóteo", "Maria"],
    books: "Mateus a Apocalipse"
  }
];
