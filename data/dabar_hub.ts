import { 
  BookIntroduction, HistoricalContext, DictionaryEntry, 
  TheologicalTopic, SermonOutline, DevotionalReflection, 
  CommonError, TimelineEvent, DetailedDispensation,
  ThematicPrayer, BiblicalProfile, NT_OT_Connection,
  IntertestamentalContext, BibleQuote, ReadingPlan, TimelineGlobalEvent
} from '../types';

export const BOOK_INTRODUCTIONS: Record<string, BookIntroduction> = {
  "GEN": {
    bookId: "Gênesis", abbreviation: "GN", author: "Moisés", date: "c. 1445-1405 a.C.", audience: "Israelitas no Deserto", genre: "Narrativa histórica / Lei", theme: "Origens — criação, queda, promessa e eleição",
    description: "Gênesis é o livro das origens: do universo, da humanidade, do pecado, da graça e do povo de Deus. Narra desde a criação até José no Egito, cobrindo cerca de 2.300 anos de história.",
    location: "Deserto do Sinai",
    chapters: 50, verses: 1533, usualOrder: 1, chronologicalOrder: 2,
    outline: [
      {title: "Criação", range: "1-2"},
      {title: "Queda e consequências", range: "3-5"},
      {title: "Dilúvio e recomeço", range: "6-9"},
      {title: "Torre de Babel e dispersão", range: "10-11"},
      {title: "Abraão — chamado e aliança", range: "12-23"},
      {title: "Isaque e Jacó", range: "24-36"},
      {title: "José no Egito", range: "37-50"}
    ],
    fulfilledPromises: ["Multiplicação da descendência de Abraão", "Ida ao Egito (15:13)", "Nascimento de Isaque"],
    unfulfilledPromises: ["Posse plena de Canaã (15:18-21)", "Bênção a todas as nações (12:3) — cumprida em Cristo"],
    keyVerse: "\"No princípio, criou Deus os céus e a terra.\" (Gênesis 1:1)",
    christType: "Semente da mulher (3:15); Cordeiro de Deus prefigurado em Isaque (22); Shiloh da tribo de Judá (49:10)"
  },
  "EXO": {
    bookId: "Êxodo", abbreviation: "EX", author: "Moisés", date: "c. 1445-1405 a.C.", audience: "Israelitas", genre: "Narrativa histórica / Lei", theme: "Redenção — libertação, lei e tabernáculo",
    description: "Êxodo narra o nascimento da nação de Israel. Mostra a transição de um grupo de escravos oprimidos no Egito para uma nação teocrática redimida por Deus, recebendo a Lei no Sinai e construindo o Tabernáculo para a habitação divina.",
    location: "Deserto do Sinai",
    chapters: 40, verses: 1213, usualOrder: 2, chronologicalOrder: 3,
    outline: [
      {title: "Opressão no Egito e chamado de Moisés", range: "1-4"},
      {title: "As dez pragas", range: "5-11"},
      {title: "A Páscoa e o êxodo", range: "12-15"},
      {title: "Jornada até o Sinai", range: "16-18"},
      {title: "A entrega da Lei e a Aliança", range: "19-24"},
      {title: "Instruções do Tabernáculo", range: "25-31"},
      {title: "O bezerro de ouro e a renovação", range: "32-34"},
      {title: "Construção do Tabernáculo", range: "35-40"}
    ],
    fulfilledPromises: ["Libertação da escravidão egípcia (Gn 15:14)", "A descida da Glória no Tabernáculo", "Estabelecimento da Aliança Mosaica"],
    unfulfilledPromises: ["O descanso pleno na Canaã Celestial", "A habitação definitiva de Deus com os homens (Ap 21:3)"],
    keyVerse: "\"Agora, pois, se diligentemente ouvirdes a minha voz e guardardes a minha aliança, então sereis a minha propriedade peculiar dentre todos os povos...\" (Êxodo 19:5)",
    christType: "O Cordeiro Pascal (12); O Pão do Céu (16); A Rocha Ferida (17); O Sumo Sacerdote e o próprio Tabernáculo."
  },
  "LEV": {
    bookId: "Levítico", abbreviation: "LV", author: "Moisés", date: "c. 1445-1405 a.C.", audience: "Sacerdotes e Povo de Israel", genre: "Lei / Manual de Adoração", theme: "Santidade — expiação, pureza e adoração",
    description: "Levítico é o manual de adoração e santidade de Israel. Enquanto Êxodo mostra como Deus tirou Israel do Egito, Levítico mostra como Deus tirou o 'Egito' de Israel, ensinando um povo pecador a conviver com um Deus Santo através do sistema sacrificial.",
    location: "Deserto do Sinai (Sopé do Monte)",
    chapters: 27, verses: 859, usualOrder: 3, chronologicalOrder: 4,
    outline: [
      {title: "As cinco ofertas principais", range: "1-7"},
      {title: "Consagração do sacerdócio", range: "8-10"},
      {title: "Leis de pureza e impureza", range: "11-15"},
      {title: "O Dia da Expiação (Yom Kippur)", range: "16"},
      {title: "O Código de Santidade", range: "17-22"},
      {title: "As festas fixas do Senhor", range: "23-25"},
      {title: "Bênçãos, maldições e votos", range: "26-27"}
    ],
    fulfilledPromises: ["Aceitação do sacrifício vicário", "Instituição do Dia da Expiação", "Presença contínua de Deus no meio do acampamento"],
    unfulfilledPromises: ["O sacrifício perfeito e definitivo (cumprido na cruz)", "O Sacerdócio Eterno segundo a ordem de Melquisedeque"],
    keyVerse: "\"Sereis santos para mim, porque eu, o Senhor, sou santo, e vos separei dos povos, para serdes meus.\" (Levítico 20:26)",
    christType: "O Sumo Sacerdote perfeito (8); O sacrifício sem mácula; O bode expiatório (16); O cumprimento de todas as festas (23)."
  },
  "NUM": {
    bookId: "Números", abbreviation: "NM", author: "Moisés", date: "c. 1445-1405 a.C.", audience: "Israelitas no Deserto", genre: "Narrativa histórica / Lei", theme: "Peregrinação — disciplina, incredulidade e fidelidade divina",
    description: "Números relata a trágica história de uma geração que, por incredulidade, perdeu a Terra Prometida. O livro narra os 40 anos de peregrinação no deserto, os censos militares e a transição da velha geração rebelde para a nova geração que entraria em Canaã.",
    location: "Do Sinai às Planícies de Moabe",
    chapters: 36, verses: 1288, usualOrder: 4, chronologicalOrder: 5,
    outline: [
      {title: "Preparação no Sinai (Censo e Organização)", range: "1-10"},
      {title: "A jornada e a rebelião em Cades-Barneia", range: "11-14"},
      {title: "Anos de peregrinação e disciplina no deserto", range: "15-19"},
      {title: "A jornada para Moabe e novos desafios", range: "20-25"},
      {title: "Novo censo e preparação da nova geração", range: "26-36"}
    ],
    fulfilledPromises: ["Sustento divino por 40 anos no deserto", "Derrota dos reis amorreus (Seom e Ogue)", "Preservação da nação apesar da rebelião"],
    unfulfilledPromises: ["A estrela que procederá de Jacó (24:17) — cumprida em Cristo", "A entrada definitiva no descanso de Deus"],
    keyVerse: "\"O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e te conceda graça...\" (Números 6:24-25)",
    christType: "A Rocha ferida que dá água (20); A Serpente de Bronze levantada no deserto (21); A Estrela de Jacó (24:17); A Cidade de Refúgio (35)."
  },
  "DEU": {
    bookId: "Deuteronômio", abbreviation: "DT", author: "Moisés", date: "c. 1405 a.C.", audience: "A Nova Geração de Israel", genre: "Discurso / Lei / Tratado de Aliança", theme: "Recapitulação — lembrança, obediência e renovação",
    description: "Deuteronômio (a 'Segunda Lei') consiste em três discursos de despedida de Moisés à nova geração de Israel, pouco antes de entrarem em Canaã. É um apelo apaixonado à obediência, ao amor a Deus e à lembrança da aliança, preparando-os para a vida na Terra Prometida.",
    location: "Planícies de Moabe",
    chapters: 34, verses: 959, usualOrder: 5, chronologicalOrder: 6,
    outline: [
      {title: "Primeiro Discurso: O que Deus fez (História)", range: "1-4"},
      {title: "Segundo Discurso: O que Deus espera (A Lei)", range: "5-26"},
      {title: "Terceiro Discurso: O que Deus fará (Profecia e Aliança)", range: "27-30"},
      {title: "Transição de liderança e morte de Moisés", range: "31-34"}
    ],
    fulfilledPromises: ["A transição bem-sucedida de liderança para Josué", "As maldições do exílio por desobediência (28)", "Bênçãos por obediência inicial"],
    unfulfilledPromises: ["O levantamento de um Profeta como Moisés (18:15) — cumprida em Cristo", "Restauração final e circuncisão do coração de Israel (30:6)"],
    keyVerse: "\"Ouve, Israel, o Senhor, nosso Deus, é o único Senhor. Amarás, pois, o Senhor, teu Deus, de todo o teu coração, de toda a tua alma e de toda a tua força.\" (Deuteronômio 6:4-5)",
    christType: "O Profeta semelhante a Moisés (18:15); O verdadeiro refúgio; Aquele que cumpre perfeitamente a Lei."
  },
  "JOS": {
    bookId: "Josué", abbreviation: "JS", author: "Josué", date: "c. 1405-1385 a.C.", audience: "Israel", genre: "Narrativa histórica", theme: "Conquista — fé, obediência e herança",
    description: "Josué narra a entrada triunfal de Israel na Terra Prometida após 40 anos no deserto. Demonstra que a vitória vem pela fé e obediência à Palavra de Deus, detalhando as campanhas militares e a divisão das terras entre as tribos.",
    location: "Canaã",
    chapters: 24, verses: 658, usualOrder: 6, chronologicalOrder: 7,
    outline: [
      {title: "Preparação para a conquista", range: "1-5"},
      {title: "Campanhas militares (Centro, Sul e Norte)", range: "6-12"},
      {title: "Divisão da terra entre as tribos", range: "13-21"},
      {title: "Despedida de Josué e renovação da aliança", range: "22-24"}
    ],
    fulfilledPromises: ["Queda de Jericó (6)", "Paralisação do sol e lua em Gibeão (10)", "Posse inicial da terra prometida aos patriarcas"],
    unfulfilledPromises: ["Posse de todo o território prometido a Abraão (do Nilo ao Eufrates)"],
    keyVerse: "\"Não to mandei eu? Sê forte e corajoso; não temas, nem te espantes, porque o Senhor, teu Deus, é contigo por onde quer que andares.\" (Josué 1:9)",
    christType: "O Capitão do Exército do Senhor (5:14); O verdadeiro Josué (Yeshua) que nos leva ao descanso (Hb 4:8)."
  },
  "JDG": {
    bookId: "Juízes", abbreviation: "JZ", author: "Samuel (tradição)", date: "c. 1050-1000 a.C.", audience: "Israel", genre: "Narrativa histórica", theme: "Apostasia — ciclo de pecado, opressão e libertação",
    description: "Juízes cobre o período sombrio entre a morte de Josué e o início da monarquia. Mostra o ciclo contínuo de rebelião de Israel, o juízo de Deus através de nações inimigas, o clamor do povo e a misericórdia divina ao levantar libertadores (juízes).",
    location: "Canaã",
    chapters: 21, verses: 618, usualOrder: 7, chronologicalOrder: 8,
    outline: [
      {title: "Fracasso na conquista completa", range: "1-2"},
      {title: "Os ciclos dos juízes (Otniel a Sansão)", range: "3-16"},
      {title: "Anarquia moral e religiosa (Apêndices)", range: "17-21"}
    ],
    fulfilledPromises: ["Livramento através de juízes como Gideão e Sansão", "Juízo divino sobre a idolatria (conforme Dt 28)"],
    unfulfilledPromises: ["A vinda do Rei Perfeito que governará com justiça plena"],
    keyVerse: "\"Naqueles dias, não havia rei em Israel; cada um fazia o que parecia direito aos seus olhos.\" (Juízes 21:25)",
    christType: "O Libertador e Juiz perfeito que quebra definitivamente o ciclo do pecado."
  },
  "RUT": {
    bookId: "Rute", abbreviation: "RT", author: "Samuel (tradição)", date: "c. 1000 a.C.", audience: "Israel", genre: "Narrativa histórica", theme: "Redenção — lealdade, providência e o parente-resgatador",
    description: "Um oásis de graça no tempo caótico dos Juízes. Narra a história de uma viúva moabita que escolhe o Deus de Israel e é redimida por Boaz, tornando-se bisavó do rei Davi e entrando na linhagem do Messias.",
    location: "Moabe e Belém",
    chapters: 4, verses: 85, usualOrder: 8, chronologicalOrder: 9,
    outline: [
      {title: "A tragédia em Moabe e o retorno amargo", range: "1"},
      {title: "Rute respigando nos campos de Boaz", range: "2"},
      {title: "O pedido ousado na eira", range: "3"},
      {title: "A redenção, o casamento e a genealogia", range: "4"}
    ],
    fulfilledPromises: ["Preservação da linhagem de Davi", "Inclusão de gentios na linhagem messiânica e no plano de Deus"],
    unfulfilledPromises: ["A reunião de todas as nações sob o Redentor final"],
    keyVerse: "\"Disse, porém, Rute: Não me instes para que te deixe e me obrigue a não seguir-te; porque, aonde quer que fores, irei eu... o teu povo é o meu povo, o teu Deus é o meu Deus.\" (Rute 1:16)",
    christType: "O Parente-Resgatador (Goel) que compra a noiva gentia."
  },
  "1SA": {
    bookId: "1 Samuel", abbreviation: "1SM", author: "Samuel / Gade / Natã", date: "c. 930 a.C.", audience: "Israel", genre: "Narrativa histórica", theme: "Transição — de juízes para reis",
    description: "Marca a transição da teocracia (liderada por juízes) para a monarquia. Narra o ministério do último juiz (Samuel), o reinado fracassado do primeiro rei (Saul) e a unção e preparação do maior rei de Israel (Davi).",
    location: "Israel",
    chapters: 31, verses: 810, usualOrder: 9, chronologicalOrder: 10,
    outline: [
      {title: "O ministério de Samuel (último juiz)", range: "1-7"},
      {title: "O reinado de Saul (o rei segundo o povo)", range: "8-15"},
      {title: "A ascensão de Davi e o declínio de Saul", range: "16-31"}
    ],
    fulfilledPromises: ["Nascimento milagroso de Samuel", "Unção de Davi como rei", "Queda da casa sacerdotal de Eli"],
    unfulfilledPromises: ["O estabelecimento do Trono Eterno de Davi (consumação)"],
    keyVerse: "\"Porém o Senhor disse a Samuel: Não atentes para a sua aparência... o homem vê o que está diante dos olhos, porém o Senhor olha para o coração.\" (1 Samuel 16:7)",
    christType: "O Ungido (Messias) escolhido segundo o coração de Deus, que sofre antes de reinar."
  },
  "2SA": {
    bookId: "2 Samuel", abbreviation: "2SM", author: "Natã / Gade", date: "c. 930 a.C.", audience: "Israel", genre: "Narrativa histórica", theme: "Monarquia — o reinado e a aliança de Davi",
    description: "Foca exclusivamente no reinado de Davi, suas vitórias militares, a expansão do reino, o estabelecimento de Jerusalém como capital, mas também expõe seus graves pecados morais e as trágicas consequências em sua família.",
    location: "Israel (Jerusalém)",
    chapters: 24, verses: 695, usualOrder: 10, chronologicalOrder: 11,
    outline: [
      {title: "Triunfos de Davi (expansão e aliança)", range: "1-10"},
      {title: "Transgressões de Davi (Bate-Seba)", range: "11-12"},
      {title: "Transtornos na família e rebelião de Absalão", range: "13-20"},
      {title: "Apêndices (cânticos, valentes e o censo)", range: "21-24"}
    ],
    fulfilledPromises: ["Estabelecimento da Aliança Davídica (2 Sm 7)", "Conquista de Jerusalém (Sião)"],
    unfulfilledPromises: ["O reinado universal, físico e visível do Filho de Davi na terra"],
    keyVerse: "\"A tua casa e o teu reino serão firmados para sempre diante de ti; teu trono será estabelecido para sempre.\" (2 Samuel 7:16)",
    christType: "O Rei de Israel; O Filho de Davi que reinará para sempre em justiça."
  },
  "1KI": {
    bookId: "1 Reis", abbreviation: "1RS", author: "Jeremias (tradição)", date: "c. 560-550 a.C.", audience: "Exilados na Babilônia", genre: "Narrativa histórica", theme: "Divisão — glória, cisma e declínio",
    description: "Começa com o apogeu de Israel sob Salomão e a construção do Templo, mas rapidamente desce para a divisão do reino (Norte/Israel e Sul/Judá) devido à idolatria. Introduz o ministério profético de Elias em meio à apostasia.",
    location: "Israel e Judá",
    chapters: 22, verses: 816, usualOrder: 11, chronologicalOrder: 12,
    outline: [
      {title: "O reinado de Salomão e a construção do Templo", range: "1-11"},
      {title: "A divisão do reino (Roboão e Jeroboão)", range: "12-16"},
      {title: "O ministério de Elias e o confronto com Acabe", range: "17-22"}
    ],
    fulfilledPromises: ["Construção do Templo de Jerusalém", "Divisão do reino como juízo pelo pecado de Salomão"],
    unfulfilledPromises: ["A restauração da unidade das 12 tribos sob um único Rei"],
    keyVerse: "\"E o coração de Salomão não foi inteiramente do Senhor seu Deus, como o coração de Davi, seu pai.\" (1 Reis 11:4)",
    christType: "Maior que Salomão em sabedoria e glória (Mt 12:42); O verdadeiro Templo."
  },
  "2KI": {
    bookId: "2 Reis", abbreviation: "2RS", author: "Jeremias (tradição)", date: "c. 560-550 a.C.", audience: "Exilados na Babilônia", genre: "Narrativa histórica", theme: "Exílio — julgamento, profetas e cativeiro",
    description: "Continua a história dos reinos divididos, marcados por reis iníquos e advertências proféticas (Eliseu). Culmina com a queda de Israel para a Assíria (722 a.C.) e de Judá para a Babilônia (586 a.C.) devido à quebra da aliança.",
    location: "Israel, Judá, Assíria e Babilônia",
    chapters: 25, verses: 719, usualOrder: 12, chronologicalOrder: 13,
    outline: [
      {title: "O ministério de Eliseu (milagres e juízos)", range: "1-8"},
      {title: "O declínio e queda de Israel (Norte)", range: "9-17"},
      {title: "O declínio e queda de Judá (Sul)", range: "18-25"}
    ],
    fulfilledPromises: ["Queda de Samaria (Assíria)", "Queda de Jerusalém e destruição do Templo (Babilônia)", "Preservação da linhagem de Davi (Joaquim)"],
    unfulfilledPromises: ["O retorno glorioso e o julgamento definitivo de todas as nações opressoras"],
    keyVerse: "\"O Senhor advertiu a Israel e a Judá... mas não ouviram, antes endureceram a sua cerviz, como fizeram seus pais, que não creram no Senhor, seu Deus.\" (2 Reis 17:13-14)",
    christType: "O Profeta de milagres (Eliseu prefigura Cristo curando, multiplicando pães e ressuscitando mortos)."
  },
  "1CH": {
    bookId: "1 Crônicas", abbreviation: "1CR", author: "Esdras (tradição)", date: "c. 450-425 a.C.", audience: "Remanescente Pós-Exílio", genre: "Narrativa histórica / Genealogia", theme: "Adoração — genealogias e o preparo do Templo",
    description: "Escrito após o exílio, reconta a história de Israel com foco na linhagem davídica e no aspecto sacerdotal/espiritual do reinado de Davi, especialmente seus preparativos para a construção do Templo e a organização da adoração.",
    location: "Jerusalém",
    chapters: 29, verses: 942, usualOrder: 13, chronologicalOrder: 14,
    outline: [
      {title: "Genealogias (de Adão a Davi)", range: "1-9"},
      {title: "A ascensão de Davi e seus valentes", range: "10-12"},
      {title: "O reinado, a arca e as vitórias", range: "13-21"},
      {title: "Preparativos para o Templo e organização levítica", range: "22-29"}
    ],
    fulfilledPromises: ["Preservação da linhagem real e sacerdotal através do exílio", "Organização do culto levítico"],
    unfulfilledPromises: ["A edificação do Templo Espiritual e Eterno (A Igreja)"],
    keyVerse: "\"Tributai ao Senhor a glória devida ao seu nome; trazei oferendas e entrai nos seus átrios; adorai o Senhor na beleza da sua santidade.\" (1 Crônicas 16:29)",
    christType: "O Rei-Sacerdote; O construtor do verdadeiro Templo."
  },
  "2CH": {
    bookId: "2 Crônicas", abbreviation: "2CR", author: "Esdras (tradição)", date: "c. 450-425 a.C.", audience: "Remanescente Pós-Exílio", genre: "Narrativa histórica", theme: "Restauração — avivamento, templo e cativeiro",
    description: "Continua a narrativa de 1 Crônicas, cobrindo de Salomão até o decreto de Ciro. Foca nos reis de Judá, destacando os momentos de avivamento e reforma espiritual sob reis piedosos como Josafá, Ezequias e Josias.",
    location: "Judá",
    chapters: 36, verses: 822, usualOrder: 14, chronologicalOrder: 15,
    outline: [
      {title: "O reinado de Salomão e a glória do Templo", range: "1-9"},
      {title: "Os reis de Judá (reformas e declínios)", range: "10-35"},
      {title: "A queda de Jerusalém e o decreto de Ciro", range: "36"}
    ],
    fulfilledPromises: ["Retorno do Exílio (Decreto de Ciro no final do livro)", "Respostas às orações de arrependimento nacional"],
    unfulfilledPromises: ["A glória final de Deus enchendo a terra como as águas cobrem o mar"],
    keyVerse: "\"Se o meu povo, que se chama pelo meu nome, se humilhar, e orar, e buscar a minha face, e se converter dos seus maus caminhos, então, eu ouvirei dos céus, perdoarei os seus pecados e sararei a sua terra.\" (2 Crônicas 7:14)",
    christType: "O Rei que traz verdadeiro avivamento e restauração."
  },
  "EZR": {
    bookId: "Esdras", abbreviation: "ED", author: "Esdras", date: "c. 450-440 a.C.", audience: "Comunidade Restaurada em Jerusalém", genre: "Narrativa histórica", theme: "Retorno — reconstrução do Templo e da comunidade",
    description: "Narra o retorno dos judeus do exílio babilônico em duas levas. A primeira, sob Zorobabel, foca na reconstrução do Templo. A segunda, sob Esdras, foca na restauração espiritual e moral do povo através da Palavra de Deus.",
    location: "Babilônia e Jerusalém",
    chapters: 10, verses: 280, usualOrder: 15, chronologicalOrder: 16,
    outline: [
      {title: "O primeiro retorno (Zorobabel) e a reconstrução do Templo", range: "1-6"},
      {title: "O segundo retorno (Esdras) e a reforma espiritual", range: "7-10"}
    ],
    fulfilledPromises: ["Fim dos 70 anos de cativeiro profetizados por Jeremias", "Restauração do Altar e do Templo (Segundo Templo)"],
    unfulfilledPromises: ["A glória do último Templo sendo maior que a do primeiro (Ageu 2:9)"],
    keyVerse: "\"Porque Esdras tinha preparado o seu coração para buscar a lei do Senhor, e para a cumprir, e para ensinar em Israel os seus estatutos e os seus juízos.\" (Esdras 7:10)",
    christType: "O Restaurador da adoração e do Templo; O Mestre da Palavra."
  },
  "NEH": {
    bookId: "Neemias", abbreviation: "NE", author: "Neemias", date: "c. 445-425 a.C.", audience: "Comunidade Restaurada em Jerusalém", genre: "Narrativa histórica / Memórias", theme: "Reconstrução — os muros e a identidade nacional",
    description: "O último livro histórico cronologicamente. Neemias, copeiro do rei persa, lidera a terceira leva de exilados para reconstruir os muros de Jerusalém. Destaca a liderança piedosa, a oração e a superação de oposição externa e interna.",
    location: "Susã (Pérsia) e Jerusalém",
    chapters: 13, verses: 406, usualOrder: 16, chronologicalOrder: 17,
    outline: [
      {title: "O retorno de Neemias e a reconstrução dos muros", range: "1-7"},
      {title: "A renovação da aliança com Esdras (avivamento)", range: "8-10"},
      {title: "A consolidação, dedicação e reformas finais", range: "11-13"}
    ],
    fulfilledPromises: ["Restauração das portas e muros de Jerusalém em 52 dias", "Restabelecimento da identidade nacional judaica"],
    unfulfilledPromises: ["A segurança eterna e os muros inexpugnáveis da Nova Jerusalém"],
    keyVerse: "\"O Deus dos céus é quem nos fará prosperar; e nós, seus servos, nos levantaremos e edificaremos.\" (Neemias 2:20)",
    christType: "O Construtor e Protetor da Cidade de Deus; O Intercessor que chora pela ruína do Seu povo."
  },
  "EST": {
    bookId: "Ester", abbreviation: "ET", author: "Desconhecido (Mardoqueu?)", date: "c. 465 a.C.", audience: "Judeus na Pérsia e em Israel", genre: "Narrativa histórica", theme: "Providência — a mão invisível de Deus",
    description: "O único livro da Bíblia que não menciona o nome de Deus, mas onde Sua providência é vista em cada página. Narra como uma órfã judia se torna rainha da Pérsia e é usada para salvar seu povo do extermínio planejado por Hamã.",
    location: "Império Persa (Susã)",
    chapters: 10, verses: 167, usualOrder: 17, chronologicalOrder: 18,
    outline: [
      {title: "A ascensão de Ester a rainha", range: "1-2"},
      {title: "A conspiração de Hamã contra os judeus", range: "3-4"},
      {title: "A coragem de Ester e a queda de Hamã", range: "5-7"},
      {title: "O livramento dos judeus e a Festa de Purim", range: "8-10"}
    ],
    fulfilledPromises: ["Preservação do povo judeu contra a aniquilação total (promessa a Abraão)"],
    unfulfilledPromises: ["A vitória final e definitiva contra o espírito do Anticristo (Antitipo de Hamã)"],
    keyVerse: "\"Porque, se de todo te calares neste tempo, socorro e livramento de outra parte sairá para os judeus... E quem sabe se para tal tempo como este não chegaste a este reino?\" (Ester 4:14)",
    christType: "O Advogado e Intercessor do Seu povo diante do Rei; Aquele que se coloca na brecha para salvar Sua noiva."
  },
  "JOB": {
    bookId: "Jó", abbreviation: "JÓ", author: "Desconhecido (Moisés ou Eliú?)", date: "c. 2000-1800 a.C. (período patriarcal)", audience: "Universal", genre: "Poesia sapiencial", theme: "Soberania — sofrimento, justiça e a grandeza de Deus",
    description: "Possivelmente o livro mais antigo da Bíblia. Aborda o profundo mistério do sofrimento humano e a soberania divina. Através da tragédia de Jó e dos debates com seus amigos, o livro destrói a teologia da retribuição simples (sofrimento = pecado) e culmina com a revelação da majestade insondável de Deus.",
    location: "Terra de Uz (provavelmente Edom/Arábia)",
    chapters: 42, verses: 1070, usualOrder: 18, chronologicalOrder: 1,
    outline: [
      {title: "Prólogo: O desafio celestial e a ruína de Jó", range: "1-2"},
      {title: "Os três ciclos de debate com os amigos", range: "3-31"},
      {title: "Os discursos do jovem Eliú", range: "32-37"},
      {title: "A resposta de Deus no redemoinho", range: "38-41"},
      {title: "Epílogo: Arrependimento e restauração", range: "42"}
    ],
    fulfilledPromises: ["Restauração de Jó em dobro", "Vindicação do justo perante seus acusadores"],
    unfulfilledPromises: ["A ressurreição física final e a visão de Deus face a face (Jó 19:25-27)"],
    keyVerse: "\"Porque eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra. E depois de consumida a minha pele, contudo, em minha carne verei a Deus.\" (Jó 19:25-26)",
    christType: "O Redentor Vivo (19:25); O Mediador/Árbitro desejado por Jó (9:33); O Sofredor Inocente."
  },
  "PSA": {
    bookId: "Salmos", abbreviation: "SL", author: "Davi, Asafe, Coré, Salomão, Moisés, etc.", date: "c. 1440-450 a.C.", audience: "Adoradores de Israel", genre: "Poesia lírica / Hinos", theme: "Adoração — louvor, lamento, messianismo e oração",
    description: "O hinário e livro de orações do antigo Israel. Uma coleção de 150 poemas que expressam toda a gama das emoções humanas diante de Deus — da mais profunda depressão e lamento à mais alta exaltação e louvor. É o livro mais citado no Novo Testamento.",
    location: "Principalmente Jerusalém (Templo)",
    chapters: 150, verses: 2461, usualOrder: 19, chronologicalOrder: 19,
    outline: [
      {title: "Livro I (Foco no homem e na criação)", range: "1-41"},
      {title: "Livro II (Foco em Israel e redenção)", range: "42-72"},
      {title: "Livro III (Foco no Santuário)", range: "73-89"},
      {title: "Livro IV (Foco na Terra e no Reino)", range: "90-106"},
      {title: "Livro V (Foco na Palavra e no Louvor final)", range: "107-150"}
    ],
    fulfilledPromises: ["Traição por um amigo (41:9)", "Crucificação e sofrimento (22)", "Ressurreição (16:10)", "Ascensão e sacerdócio (110)"],
    unfulfilledPromises: ["O Reino Milenar de Cristo sobre todas as nações da terra (Sl 2; Sl 72)"],
    keyVerse: "\"Tudo quanto tem fôlego louve ao Senhor. Louvai ao Senhor.\" (Salmos 150:6)",
    christType: "O Messias Adorado; O Rei Ungido (2); O Bom Pastor (23); A Pedra Angular (118)."
  },
  "PRO": {
    bookId: "Provérbios", abbreviation: "PV", author: "Salomão, Agur, Lemuel", date: "c. 970-700 a.C.", audience: "Jovens e o povo de Israel", genre: "Poesia sapiencial", theme: "Sabedoria — temor ao Senhor e vida prática",
    description: "Um manual de sabedoria prática para a vida diária. Ensina que a verdadeira inteligência não é apenas acúmulo de conhecimento, mas a aplicação moral da verdade baseada no 'temor do Senhor'. Contrasta continuamente o caminho do sábio com o do tolo.",
    location: "Jerusalém",
    chapters: 31, verses: 915, usualOrder: 20, chronologicalOrder: 20,
    outline: [
      {title: "O valor e o apelo da Sabedoria", range: "1-9"},
      {title: "Os provérbios de Salomão (contraste moral)", range: "10-24"},
      {title: "Provérbios de Salomão copiados pelos homens de Ezequias", range: "25-29"},
      {title: "As palavras de Agur e Lemuel (A mulher virtuosa)", range: "30-31"}
    ],
    fulfilledPromises: ["Bênção, proteção e longevidade sobre a diligência e o temor ao Senhor"],
    unfulfilledPromises: ["A justiça plena governando toda a terra e a erradicação total da impiedade"],
    keyVerse: "\"O temor do Senhor é o princípio do conhecimento; os loucos desprezam a sabedoria e a instrução.\" (Provérbios 1:7)",
    christType: "A Sabedoria de Deus encarnada (1Co 1:24); O Criador que estava lá desde o princípio (Pv 8)."
  },
  "ECC": {
    bookId: "Eclesiastes", abbreviation: "EC", author: "Salomão (O Pregador)", date: "c. 935 a.C.", audience: "Buscadores da verdade", genre: "Poesia sapiencial / Filosófico", theme: "Vaidade — a futilidade da vida 'debaixo do sol'",
    description: "O diário de um homem brilhante e rico que buscou sentido em tudo 'debaixo do sol' (sabedoria humana, prazer, trabalho, riqueza) e descobriu que tudo é 'vaidade' (sopro, vazio). A conclusão é que a vida só tem propósito quando vivida em reverência ao Criador.",
    location: "Jerusalém",
    chapters: 12, verses: 222, usualOrder: 21, chronologicalOrder: 21,
    outline: [
      {title: "A tese: Tudo é vaidade debaixo do sol", range: "1:1-11"},
      {title: "A experiência: A busca frustrada por sentido", range: "1:12-6:12"},
      {title: "A observação: Conselhos práticos em um mundo caído", range: "7:1-11:6"},
      {title: "A conclusão: Teme a Deus na juventude e na velhice", range: "11:7-12:14"}
    ],
    fulfilledPromises: ["A demonstração histórica da futilidade das coisas terrenas sem Deus"],
    unfulfilledPromises: ["O juízo final de todas as obras, até as ocultas (Ec 12:14)"],
    keyVerse: "\"De tudo o que se tem ouvido, o fim é: Teme a Deus, e guarda os seus mandamentos; porque isto é o dever de todo o homem.\" (Eclesiastes 12:13)",
    christType: "O único e verdadeiro Sentido da Vida; O Único Pastor que dá as palavras de sabedoria (12:11)."
  },
  "SNG": {
    bookId: "Cantares", abbreviation: "CT", author: "Salomão", date: "c. 965 a.C.", audience: "Amantes e o povo de Deus", genre: "Poesia lírica / Cântico nupcial", theme: "Amor — a beleza do casamento e a intimidade divina",
    description: "O 'Cântico dos Cânticos' (o melhor de todos). Literalmente, celebra a beleza, a pureza e a paixão do amor conjugal entre um homem e uma mulher. Tipologicamente, ilustra o amor ardente, exclusivo e inquebrável entre Deus e Seu povo (Cristo e a Igreja).",
    location: "Jerusalém e arredores",
    chapters: 8, verses: 117, usualOrder: 22, chronologicalOrder: 22,
    outline: [
      {title: "O início do amor e o desejo (Cortejo)", range: "1-2"},
      {title: "O casamento e a união", range: "3-4"},
      {title: "Conflito, separação temporária e reconciliação", range: "5-6"},
      {title: "O amadurecimento e a força invencível do amor", range: "7-8"}
    ],
    fulfilledPromises: ["A beleza e a santidade da união pactual estabelecida no Éden"],
    unfulfilledPromises: ["A consumação final nas Bodas do Cordeiro com Sua Igreja glorificada (Ap 19)"],
    keyVerse: "\"Eu sou do meu amado, e o meu amado é meu... Põe-me como selo sobre o teu coração... porque o amor é forte como a morte.\" (Cantares 6:3; 8:6)",
    christType: "O Noivo Amado, totalmente desejável, que busca e se deleita em Sua Noiva."
  },
  "ISA": {
    bookId: "Isaías", abbreviation: "IS", author: "Isaías", date: "c. 740-680 a.C.", audience: "Judá (Reino do Sul)", genre: "Profecia", theme: "Salvação — juízo, consolo e o Messias sofredor",
    description: "Conhecido como a 'Bíblia em miniatura' (66 capítulos divididos em 39 de juízo e 27 de consolo). Isaías é o profeta messiânico por excelência, revelando a santidade de Deus, o juízo sobre as nações e a gloriosa redenção através do Servo Sofredor.",
    location: "Jerusalém",
    chapters: 66, verses: 1292, usualOrder: 23, chronologicalOrder: 23,
    outline: [
      {title: "Juízo e purificação (O Livro do Juízo)", range: "1-39"},
      {title: "Consolo e o Servo (O Livro do Consolo)", range: "40-55"},
      {title: "Glória futura e Novos Céus (O Livro da Glória)", range: "56-66"}
    ],
    fulfilledPromises: ["Nascimento virginal (7:14)", "Ministério na Galileia (9:1-2)", "Morte vicária e ressurreição (53)"],
    unfulfilledPromises: ["Novos Céus e Nova Terra (65-66)", "O lobo pastando com o cordeiro em perfeita paz (11)"],
    keyVerse: "\"Porque um menino nos nasceu, um filho se nos deu... e o seu nome será: Maravilhoso, Conselheiro, Deus Forte, Pai da Eternidade, Príncipe da Paz.\" (Isaías 9:6)",
    christType: "O Servo Sofredor (53); O Príncipe da Paz (9); O Renovo de Jessé (11); O Cordeiro mudo."
  },
  "JER": {
    bookId: "Jeremias", abbreviation: "JR", author: "Jeremias", date: "c. 627-580 a.C.", audience: "Judá (Reino do Sul)", genre: "Profecia", theme: "Juízo — arrependimento, queda e a Nova Aliança",
    description: "O 'profeta chorão' que ministrou durante os últimos dias de Judá. Ele advertiu incansavelmente sobre a iminente invasão babilônica, sofreu rejeição contínua e, em meio às trevas do juízo, profetizou a gloriosa Nova Aliança.",
    location: "Jerusalém e Egito",
    chapters: 52, verses: 1364, usualOrder: 24, chronologicalOrder: 24,
    outline: [
      {title: "Chamado e advertências a Judá", range: "1-25"},
      {title: "Conflitos, oposição e a Nova Aliança", range: "26-33"},
      {title: "A queda de Jerusalém e o remanescente", range: "34-45"},
      {title: "Juízo sobre as nações gentílicas", range: "46-52"}
    ],
    fulfilledPromises: ["Cativeiro exato de 70 anos na Babilônia (25:11)", "Nova Aliança inaugurada no sangue de Cristo (31:31)"],
    unfulfilledPromises: ["Israel e Judá reunificados definitivamente em sua terra em paz absoluta (33)"],
    keyVerse: "\"Eis aí vêm dias, diz o Senhor, em que firmarei nova aliança com a casa de Israel e com a casa de Judá.\" (Jeremias 31:31)",
    christType: "O Renovo Justo (23:5); O Senhor Nossa Justiça (Yahweh Tsidkenu - 23:6)."
  },
  "LAM": {
    bookId: "Lamentações", abbreviation: "LM", author: "Jeremias (tradição)", date: "c. 586 a.C.", audience: "Exilados e remanescente", genre: "Poesia de lamento", theme: "Luto — choro, castigo e a fidelidade de Deus",
    description: "Uma série de cinco poemas fúnebres (acrósticos em hebraico) expressando a profunda angústia pela destruição de Jerusalém e do Templo em 586 a.C. No centro do livro, brilha a esperança inabalável na misericórdia de Deus.",
    location: "Ruínas de Jerusalém",
    chapters: 5, verses: 154, usualOrder: 25, chronologicalOrder: 25,
    outline: [
      {title: "A cidade desolada como viúva", range: "1"},
      {title: "A ira de Deus sobre Sião", range: "2"},
      {title: "O profeta aflito e a esperança renovada", range: "3"},
      {title: "O cerco terrível e a ruína", range: "4"},
      {title: "A oração final por restauração", range: "5"}
    ],
    fulfilledPromises: ["A destruição completa de Jerusalém conforme profetizado por Moisés e Jeremias"],
    unfulfilledPromises: ["A restauração final do trono de Deus sobre o monte Sião"],
    keyVerse: "\"As misericórdias do Senhor são a causa de não sermos consumidos... renovam-se cada manhã; grande é a tua fidelidade.\" (Lamentações 3:22-23)",
    christType: "O Homem de Dores, que chora sobre Jerusalém (Mt 23:37)."
  },
  "EZE": {
    bookId: "Ezequiel", abbreviation: "EZ", author: "Ezequiel", date: "c. 593-571 a.C.", audience: "Exilados na Babilônia", genre: "Profecia Apocalíptica", theme: "Glória — exílio, restauração e o novo Templo",
    description: "Profeta e sacerdote exilado na Babilônia. Seu ministério é marcado por visões dramáticas, atos proféticos e a revelação da glória de Deus que deixa o Templo profanado, mas promete retornar a um coração de carne e a um novo Templo.",
    location: "Babilônia (junto ao rio Quebar)",
    chapters: 48, verses: 1273, usualOrder: 26, chronologicalOrder: 26,
    outline: [
      {title: "O chamado e a glória de Deus", range: "1-3"},
      {title: "Sinais de juízo e a partida da Glória", range: "4-24"},
      {title: "Juízo sobre as nações vizinhas", range: "25-32"},
      {title: "Restauração física e espiritual de Israel", range: "33-39"},
      {title: "O Novo Templo e o retorno da Glória", range: "40-48"}
    ],
    fulfilledPromises: ["Queda de Jerusalém", "Ressurreição nacional de Israel (Vale de Ossos Secos - 37)"],
    unfulfilledPromises: ["A invasão de Gogue e Magogue (38-39)", "O Templo Milenar e o rio de águas vivas (40-48)"],
    keyVerse: "\"Dar-vos-ei coração novo e porei dentro de vós espírito novo; tirarei de vós o coração de pedra e vos darei coração de carne.\" (Ezequiel 36:26)",
    christType: "O Filho do Homem (título usado 93 vezes); O Verdadeiro Pastor que apascenta as ovelhas (34)."
  },
  "DAN": {
    bookId: "Daniel", abbreviation: "DN", author: "Daniel", date: "c. 605-530 a.C.", audience: "Exilados e todas as nações", genre: "Narrativa / Profecia Apocalíptica", theme: "Soberania — reinos humanos e o Reino Eterno",
    description: "Um estadista judeu na corte babilônica e persa. O livro combina narrativas históricas de fidelidade no exílio com visões apocalípticas abrangentes que traçam o curso dos impérios mundiais até a instauração do Reino do Messias.",
    location: "Babilônia e Susã (Pérsia)",
    chapters: 12, verses: 357, usualOrder: 27, chronologicalOrder: 27,
    outline: [
      {title: "Fidelidade na corte babilônica", range: "1-6"},
      {title: "Visões dos impérios mundiais (Animais)", range: "7-8"},
      {title: "As setenta semanas e o Messias", range: "9"},
      {title: "O conflito final e a ressurreição", range: "10-12"}
    ],
    fulfilledPromises: ["Ascensão e queda da Babilônia, Medo-Pérsia e Grécia", "A primeira vinda e morte do Messias (as 70 semanas - 9:24-27)"],
    unfulfilledPromises: ["A 70ª semana (Tribulação)", "A Pedra que esmaga a estátua e o Reino Eterno do Filho do Homem (2 e 7)"],
    keyVerse: "\"Mas, nos dias destes reis, o Deus do céu suscitará um reino que não será jamais destruído... ele esmiuçará e consumirá todos estes reinos, mas ele mesmo subsistirá para sempre.\" (Daniel 2:44)",
    christType: "O Quarto Homem na fornalha (3:25); A Pedra cortada sem mãos (2); O Filho do Homem vindo nas nuvens (7:13)."
  },
  "HOS": {
    bookId: "Oseias", abbreviation: "OS", author: "Oseias", date: "c. 755-715 a.C.", audience: "Israel (Reino do Norte)", genre: "Profecia", theme: "Fidelidade — o amor inesgotável de Deus",
    description: "Deus ordena que Oseias se case com uma prostituta (Gômer) para ilustrar o amor fiel de Deus por uma nação adúltera e idólatra. O livro é um clamor apaixonado para que Israel volte ao seu primeiro amor antes que o juízo assírio caia.",
    location: "Israel (Reino do Norte / Efraim)",
    chapters: 14, verses: 197, usualOrder: 28, chronologicalOrder: 28,
    outline: [
      {title: "A tragédia familiar de Oseias (Símbolo)", range: "1-3"},
      {title: "A acusação contra a nação adúltera", range: "4-7"},
      {title: "O juízo iminente sobre Israel", range: "8-10"},
      {title: "O amor triunfante e a restauração final", range: "11-14"}
    ],
    fulfilledPromises: ["Queda de Samaria e exílio pela Assíria", "O chamado do Filho do Egito (11:1 cumprido em Mt 2:15)"],
    unfulfilledPromises: ["A cura final da apostasia nacional e o florescimento de Israel como o lírio (14)"],
    keyVerse: "\"Conheçamos e prossigamos em conhecer ao Senhor; como a alva, a sua vinda é certa; e ele descerá sobre nós como a chuva, como chuva serôdia que rega a terra.\" (Oseias 6:3)",
    christType: "O Marido Fiel que compra de volta Sua noiva caída; O Filho chamado do Egito."
  },
  "JOE": {
    bookId: "Joel", abbreviation: "JL", author: "Joel", date: "c. 835-800 a.C.", audience: "Judá (Reino do Sul)", genre: "Profecia", theme: "O Dia do Senhor — juízo e o derramamento do Espírito",
    description: "Usando uma praga devastadora de gafanhotos como ilustração, Joel profetiza sobre o grande e terrível 'Dia do Senhor'. Ele chama a nação ao jejum e arrependimento, culminando com a promessa gloriosa do derramamento do Espírito Santo.",
    location: "Jerusalém",
    chapters: 3, verses: 73, usualOrder: 29, chronologicalOrder: 29,
    outline: [
      {title: "A praga de gafanhotos (Juízo histórico)", range: "1"},
      {title: "O exército invasor (O Dia do Senhor iminente)", range: "2:1-11"},
      {title: "O chamado ao arrependimento", range: "2:12-17"},
      {title: "A promessa do Espírito e a restauração (O Dia do Senhor futuro)", range: "2:18-3:21"}
    ],
    fulfilledPromises: ["O derramamento do Espírito Santo no Pentecostes (2:28-32 cumprido em Atos 2)"],
    unfulfilledPromises: ["O julgamento final das nações no Vale de Josafá (Armagedom)"],
    keyVerse: "\"E acontecerá que todo aquele que invocar o nome do Senhor será salvo.\" (Joel 2:32)",
    christType: "O Restaurador dos anos consumidos; Aquele que batiza com o Espírito Santo."
  },
  "AMO": {
    bookId: "Amós", abbreviation: "AM", author: "Amós", date: "c. 760-750 a.C.", audience: "Israel (Reino do Norte)", genre: "Profecia", theme: "Justiça — retidão social e o prumo de Deus",
    description: "Um pastor e cultivador de sicômoros de Judá enviado para profetizar contra a rica, complacente e injusta nação de Israel (Norte). Amós ruge como um leão contra a religiosidade vazia que ignora a opressão dos pobres.",
    location: "Betel (Israel)",
    chapters: 9, verses: 146, usualOrder: 30, chronologicalOrder: 30,
    outline: [
      {title: "Juízos contra as nações vizinhas e Israel", range: "1-2"},
      {title: "Três sermões de condenação contra Israel", range: "3-6"},
      {title: "Cinco visões de juízo (Gafanhotos, Fogo, Prumo, Frutos, Altar)", range: "7-9:10"},
      {title: "A promessa de restauração do Tabernáculo de Davi", range: "9:11-15"}
    ],
    fulfilledPromises: ["Exílio de Israel para além de Damasco", "A inclusão dos gentios (Atos 15:16-17)"],
    unfulfilledPromises: ["A restauração física e permanente de Israel em sua terra (9:15)"],
    keyVerse: "\"Corra, porém, o juízo como as águas, e a justiça, como ribeiro perene.\" (Amós 5:24)",
    christType: "O Restaurador do Tabernáculo caído de Davi; O Juiz que exige retidão."
  },
  "OBA": {
    bookId: "Obadias", abbreviation: "OB", author: "Obadias", date: "c. 840 ou 586 a.C.", audience: "Edom (descendentes de Esaú)", genre: "Profecia", theme: "Retribuição — o juízo sobre o orgulho de Edom",
    description: "O livro mais curto do Antigo Testamento. É uma profecia de juízo contra a nação de Edom por seu orgulho e por ter se alegrado e participado da destruição de Jerusalém. Demonstra que Deus julga aqueles que tocam em Seu povo.",
    location: "Judá (profetizando contra Edom/Petra)",
    chapters: 1, verses: 21, usualOrder: 31, chronologicalOrder: 31,
    outline: [
      {title: "A condenação do orgulho de Edom", range: "1:1-9"},
      {title: "Os crimes de Edom contra o irmão Jacó", range: "1:10-14"},
      {title: "O Dia do Senhor e a vitória de Sião", range: "1:15-21"}
    ],
    fulfilledPromises: ["A extinção histórica completa dos edomitas como nação"],
    unfulfilledPromises: ["O estabelecimento final do Reino: 'E o reino será do Senhor' (v. 21)"],
    keyVerse: "\"Como tu fizeste, assim se fará contigo; o teu feito tornará sobre a tua cabeça.\" (Obadias 1:15)",
    christType: "O Juiz das Nações; O Salvador no Monte Sião."
  },
  "JON": {
    bookId: "Jonas", abbreviation: "JN", author: "Jonas", date: "c. 760 a.C.", audience: "Nínive (Assíria) e Israel", genre: "Narrativa profética", theme: "Misericórdia — a graça de Deus aos gentios",
    description: "A história do profeta relutante que fugiu do chamado de Deus para pregar aos cruéis assírios. Mostra que a misericórdia de Deus não se limita a Israel, mas se estende a todas as nações que se arrependem, contrastando com o nacionalismo egoísta do profeta.",
    location: "Mar Mediterrâneo e Nínive",
    chapters: 4, verses: 48, usualOrder: 32, chronologicalOrder: 32,
    outline: [
      {title: "A fuga de Jonas e a grande tempestade", range: "1"},
      {title: "A oração de Jonas no ventre do grande peixe", range: "2"},
      {title: "A pregação de Jonas e o arrependimento de Nínive", range: "3"},
      {title: "A ira de Jonas e a repreensão misericordiosa de Deus", range: "4"}
    ],
    fulfilledPromises: ["O arrependimento histórico de Nínive", "O 'Sinal de Jonas' (3 dias e 3 noites na sepultura - Mt 12:40)"],
    unfulfilledPromises: ["A evangelização completa de todas as nações gentílicas"],
    keyVerse: "\"Ao Senhor pertence a salvação!\" (Jonas 2:9)",
    christType: "O Sinal de Jonas (Ressurreição); Aquele que é maior que Jonas (Mt 12:41)."
  },
  "MIC": {
    bookId: "Miqueias", abbreviation: "MQ", author: "Miqueias", date: "c. 735-700 a.C.", audience: "Judá e Israel", genre: "Profecia", theme: "Controvérsia — juízo, perdão e o Rei de Belém",
    description: "Contemporâneo de Isaías, Miqueias profetiza tanto para Samaria quanto para Jerusalém. Ele expõe a corrupção dos líderes, sacerdotes e falsos profetas, mas oferece uma das mais claras profecias sobre o local de nascimento do Messias.",
    location: "Judá (Moresete)",
    chapters: 7, verses: 105, usualOrder: 33, chronologicalOrder: 33,
    outline: [
      {title: "O juízo iminente sobre Samaria e Jerusalém", range: "1-3"},
      {title: "A glória futura e o Rei nascido em Belém", range: "4-5"},
      {title: "A controvérsia de Deus e a promessa de perdão", range: "6-7"}
    ],
    fulfilledPromises: ["Queda de Samaria", "O nascimento do Messias exatamente em Belém-Efrata (5:2)"],
    unfulfilledPromises: ["As nações convertendo espadas em relhas de arado (paz mundial)"],
    keyVerse: "\"Ele te declarou, ó homem, o que é bom e que é o que o Senhor pede de ti: que pratiques a justiça, e ames a misericórdia, e andes humildemente com o teu Deus.\" (Miqueias 6:8)",
    christType: "O Governador nascido em Belém, cujas origens são desde a eternidade (5:2); O Deus que perdoa (7:18)."
  },
  "NAH": {
    bookId: "Naum", abbreviation: "NA", author: "Naum", date: "c. 630 a.C.", audience: "Judá e Nínive", genre: "Profecia", theme: "Vingança — o juízo final sobre Nínive",
    description: "Cerca de 100 anos após o arrependimento nos dias de Jonas, Nínive voltou à sua extrema crueldade. Naum profetiza a destruição total e irreversível da capital assíria, trazendo consolo a Judá de que Deus é o justo vingador dos oprimidos.",
    location: "Judá (Elcós)",
    chapters: 3, verses: 47, usualOrder: 34, chronologicalOrder: 34,
    outline: [
      {title: "O caráter do Deus vingador e misericordioso", range: "1"},
      {title: "A descrição vívida do cerco e queda de Nínive", range: "2"},
      {title: "A causa da ruína: a cidade sanguinária", range: "3"}
    ],
    fulfilledPromises: ["A queda literal e total de Nínive em 612 a.C. por uma inundação e cerco (1:8; 2:6)"],
    unfulfilledPromises: ["A eliminação final de todos os opressores do povo de Deus"],
    keyVerse: "\"O Senhor é bom, uma fortaleza no dia da angústia, e conhece os que confiam nele.\" (Naum 1:7)",
    christType: "O Vingador do Seu Povo; A Fortaleza no dia da angústia."
  },
  "HAB": {
    bookId: "Habacuque", abbreviation: "HC", author: "Habacuque", date: "c. 605 a.C.", audience: "Judá", genre: "Profecia / Diálogo", theme: "Fé — a soberania de Deus no meio do caos",
    description: "Único entre os profetas, Habacuque não fala ao povo em nome de Deus, mas fala a Deus em nome do povo. Ele questiona por que Deus usaria os ímpios babilônios para julgar Judá. A resposta divina estabelece o princípio central do evangelho: 'o justo viverá pela fé'.",
    location: "Jerusalém",
    chapters: 3, verses: 56, usualOrder: 35, chronologicalOrder: 35,
    outline: [
      {title: "A primeira queixa e a resposta surpreendente de Deus", range: "1:1-11"},
      {title: "A segunda queixa e a torre de vigia", range: "1:12-2:1"},
      {title: "A resposta de Deus: o justo viverá pela fé e os cinco 'ais'", range: "2:2-20"},
      {title: "O cântico de fé e adoração do profeta", range: "3"}
    ],
    fulfilledPromises: ["A invasão dos caldeus (babilônios) e o subsequente juízo sobre eles"],
    unfulfilledPromises: ["A terra se encherá do conhecimento da glória do Senhor, como as águas cobrem o mar (2:14)"],
    keyVerse: "\"Eis que a sua alma se incha, não é reta nele; mas o justo pela sua fé viverá.\" (Habacuque 2:4)",
    christType: "O Deus da Minha Salvação (3:18); O Justo que nos justifica pela fé (Rm 1:17)."
  },
  "ZEP": {
    bookId: "Sofonias", abbreviation: "SF", author: "Sofonias", date: "c. 625 a.C.", audience: "Judá", genre: "Profecia", theme: "O Dia do Senhor — juízo universal e o remanescente",
    description: "Trineto do rei Ezequias, Sofonias profetiza durante o reinado de Josias. Seu livro contém as descrições mais sombrias do 'Dia do Senhor' no AT, abrangendo toda a criação, mas termina com uma das mais belas promessas de Deus cantando de alegria sobre Seu povo salvo.",
    location: "Jerusalém",
    chapters: 3, verses: 53, usualOrder: 36, chronologicalOrder: 36,
    outline: [
      {title: "O Dia do Senhor sobre Judá e toda a terra", range: "1"},
      {title: "O chamado ao arrependimento e juízo sobre as nações", range: "2"},
      {title: "A purificação de Jerusalém e a alegria da restauração", range: "3"}
    ],
    fulfilledPromises: ["O juízo histórico sobre Judá, Filístia, Moabe, Amom, Etiópia e Assíria"],
    unfulfilledPromises: ["A purificação dos lábios dos povos para servirem a Deus em uníssono (3:9)"],
    keyVerse: "\"O Senhor, teu Deus, está no meio de ti, poderoso para salvar-te; ele se deleitará em ti com alegria; renovar-te-á no seu amor, regozijar-se-á em ti com júbilo.\" (Sofonias 3:17)",
    christType: "O Rei de Israel no Meio Deles (3:15); O Poderoso para Salvar."
  },
  "HAG": {
    bookId: "Ageu", abbreviation: "AG", author: "Ageu", date: "c. 520 a.C.", audience: "Exilados que retornaram", genre: "Profecia", theme: "Prioridades — a reconstrução do Templo",
    description: "O primeiro profeta pós-exílico. O povo havia retornado da Babilônia, mas parou a reconstrução do Templo para construir suas próprias casas luxuosas. Ageu os repreende por suas prioridades invertidas e os encoraja, prometendo que a glória da nova casa seria maior.",
    location: "Jerusalém",
    chapters: 2, verses: 38, usualOrder: 37, chronologicalOrder: 37,
    outline: [
      {title: "A repreensão: Considerai os vossos caminhos", range: "1:1-11"},
      {title: "A resposta do povo e o reinício da obra", range: "1:12-15"},
      {title: "A promessa: A glória da segunda casa", range: "2:1-9"},
      {title: "A bênção sobre a obediência e a promessa a Zorobabel", range: "2:10-23"}
    ],
    fulfilledPromises: ["A retomada e conclusão da construção do Segundo Templo", "A vinda de Cristo àquele Templo físico"],
    unfulfilledPromises: ["O abalo de todos os céus, terra e nações (2:6-7, citado em Hb 12:26)"],
    keyVerse: "\"A glória desta última casa será maior do que a da primeira, diz o Senhor dos Exércitos, e neste lugar darei a paz, diz o Senhor dos Exércitos.\" (Ageu 2:9)",
    christType: "O Desejado de Todas as Nações (2:7); O Anel de Selar (2:23)."
  },
  "ZEC": {
    bookId: "Zacarias", abbreviation: "ZC", author: "Zacarias", date: "c. 520-480 a.C.", audience: "Exilados que retornaram", genre: "Profecia Apocalíptica", theme: "Restauração — o Messias Rei-Sacerdote",
    description: "Contemporâneo de Ageu, Zacarias usa visões noturnas altamente simbólicas para encorajar a reconstrução do Templo. É o livro mais messiânico e apocalíptico dos Profetas Menores, detalhando a primeira e a segunda vinda de Cristo.",
    location: "Jerusalém",
    chapters: 14, verses: 211, usualOrder: 38, chronologicalOrder: 38,
    outline: [
      {title: "Oito visões noturnas de encorajamento", range: "1-6"},
      {title: "A questão do jejum e a promessa de bênção", range: "7-8"},
      {title: "A Primeira Vinda do Messias (Rejeição)", range: "9-11"},
      {title: "A Segunda Vinda do Messias (Reinado)", range: "12-14"}
    ],
    fulfilledPromises: ["A entrada triunfal montado em um jumentinho (9:9)", "A traição por 30 moedas de prata (11:12)"],
    unfulfilledPromises: ["O luto de Israel ao olhar para Aquele a quem traspassaram (12:10)", "Os pés do Messias no Monte das Oliveiras (14:4)"],
    keyVerse: "\"Não por força nem por violência, mas sim pelo meu Espírito, diz o Senhor dos Exércitos.\" (Zacarias 4:6)",
    christType: "O Renovo (3:8); O Rei-Sacerdote (6:13); O Bom Pastor ferido (13:7); O Rei humilde (9:9)."
  },
  "MAL": {
    bookId: "Malaquias", abbreviation: "ML", author: "Malaquias", date: "c. 430 a.C.", audience: "Povo de Judá (pós-exílio)", genre: "Profecia / Disputa", theme: "Fidelidade — o coração da adoração e o mensageiro",
    description: "O último livro do Antigo Testamento. Cerca de 100 anos após o retorno, o povo caiu em cinismo, formalismo religioso, divórcios e roubo nos dízimos. Deus usa um método de perguntas e respostas (disputa) para confrontá-los e promete enviar um precursor antes do Messias.",
    location: "Jerusalém",
    chapters: 4, verses: 55, usualOrder: 39, chronologicalOrder: 39,
    outline: [
      {title: "O amor de Deus e a profanação dos sacerdotes", range: "1-2:9"},
      {title: "A infidelidade no casamento e o divórcio", range: "2:10-16"},
      {title: "A vinda do Mensageiro e o roubo nos dízimos", range: "2:17-3:12"},
      {title: "O livro de memorial e o Sol da Justiça", range: "3:13-4:6"}
    ],
    fulfilledPromises: ["A vinda do 'Elias' precursor (João Batista - 3:1; 4:5)", "A vinda do Senhor ao Seu templo (3:1)"],
    unfulfilledPromises: ["O grande e terrível Dia do Senhor e o fogo purificador (4:1)"],
    keyVerse: "\"Mas para vós, os que temeis o meu nome, nascerá o sol da justiça, e cura trará nas suas asas...\" (Malaquias 4:2)",
    christType: "O Sol da Justiça (4:2); O Mensageiro da Aliança (3:1); O Ourives Purificador (3:3)."
  },
  "MAT": {
    bookId: "Mateus", abbreviation: "MT", author: "Mateus (Levi)", date: "c. 50-60 d.C.", audience: "Judeus", genre: "Evangelho", theme: "O Rei — Jesus, o Messias prometido",
    description: "Escrito por um ex-cobrador de impostos, este Evangelho é a ponte perfeita entre o Antigo e o Novo Testamento. Mateus prova aos judeus que Jesus de Nazaré é o legítimo Rei de Israel, o Messias que cumpre perfeitamente a Lei e os Profetas.",
    location: "Palestina (possivelmente Antioquia da Síria)",
    chapters: 28, verses: 1071, usualOrder: 40, chronologicalOrder: 45,
    outline: [
      {title: "A genealogia e o nascimento do Rei", range: "1-2"},
      {title: "A preparação e o Sermão do Monte (As Leis do Reino)", range: "3-7"},
      {title: "Os milagres e a autoridade do Rei", range: "8-12"},
      {title: "As parábolas do Reino e o treinamento dos discípulos", range: "13-20"},
      {title: "A rejeição, crucificação e ressurreição do Rei", range: "21-28"}
    ],
    fulfilledPromises: ["O cumprimento de mais de 60 profecias messiânicas do AT (nascimento virginal, fuga para o Egito, ministério na Galileia)"],
    unfulfilledPromises: ["O retorno glorioso do Filho do Homem para julgar as nações (Mt 24-25)"],
    keyVerse: "\"Não penseis que vim revogar a Lei ou os Profetas; não vim para revogar, vim para cumprir.\" (Mateus 5:17)",
    christType: "O Rei dos Judeus; O Filho de Davi; O Emanuel (Deus conosco)."
  },
  "MRK": {
    bookId: "Marcos", abbreviation: "MC", author: "João Marcos (sob a direção de Pedro)", date: "c. 50-60 d.C.", audience: "Romanos", genre: "Evangelho", theme: "O Servo — Jesus, o Filho de Deus em ação",
    description: "O Evangelho da ação, escrito para a mente prática romana. Marcos omite genealogias e longos discursos para focar nos milagres e no serviço incansável de Cristo. A palavra 'logo' ou 'imediatamente' aparece mais de 40 vezes.",
    location: "Roma",
    chapters: 16, verses: 678, usualOrder: 41, chronologicalOrder: 44,
    outline: [
      {title: "A preparação e o início do ministério do Servo", range: "1:1-13"},
      {title: "O ministério de serviço e milagres na Galileia", range: "1:14-8:26"},
      {title: "A jornada para Jerusalém e o ensino sobre a cruz", range: "8:27-10:52"},
      {title: "O sacrifício supremo do Servo (Paixão e Ressurreição)", range: "11-16"}
    ],
    fulfilledPromises: ["O Servo Sofredor de Isaías dando Sua vida em resgate de muitos"],
    unfulfilledPromises: ["A pregação do Evangelho a toda criatura e a volta do Filho do Homem nas nuvens (13:26)"],
    keyVerse: "\"Pois o próprio Filho do Homem não veio para ser servido, mas para servir e dar a sua vida em resgate por muitos.\" (Marcos 10:45)",
    christType: "O Servo Sofredor de Deus; O Trabalhador incansável."
  },
  "LUK": {
    bookId: "Lucas", abbreviation: "LC", author: "Lucas (o médico amado)", date: "c. 60-61 d.C.", audience: "Gregos (Teófilo) e gentios", genre: "Evangelho", theme: "O Filho do Homem — a humanidade perfeita de Jesus",
    description: "O Evangelho mais abrangente e detalhado, escrito por um médico gentio. Lucas enfatiza a humanidade perfeita de Cristo, Sua compaixão pelos marginalizados (pobres, mulheres, samaritanos, pecadores) e Seu ministério de oração e dependência do Espírito Santo.",
    location: "Roma ou Cesareia",
    chapters: 24, verses: 1151, usualOrder: 42, chronologicalOrder: 46,
    outline: [
      {title: "O nascimento e a infância do Filho do Homem", range: "1-2"},
      {title: "A preparação e o ministério na Galileia", range: "3-9:50"},
      {title: "A longa jornada para Jerusalém (Parábolas da graça)", range: "9:51-19:27"},
      {title: "A paixão, ressurreição e ascensão", range: "19:28-24:53"}
    ],
    fulfilledPromises: ["A salvação estendida a todos os povos, não apenas aos judeus (Simeão em 2:30-32)"],
    unfulfilledPromises: ["A restauração de todas as coisas e o Reino de Deus em sua plenitude (21)"],
    keyVerse: "\"Porque o Filho do Homem veio buscar e salvar o perdido.\" (Lucas 19:10)",
    christType: "O Filho do Homem (o homem perfeito); O Salvador compassivo."
  },
  "JHN": {
    bookId: "João", abbreviation: "JO", author: "João (o discípulo amado)", date: "c. 85-90 d.C.", audience: "Igreja Universal", genre: "Evangelho", theme: "O Filho de Deus — a divindade de Jesus",
    description: "Diferente dos Evangelhos Sinóticos, João é profundamente teológico. Ele seleciona sete 'sinais' (milagres) e sete declarações 'Eu Sou' para provar conclusivamente que Jesus de Nazaré é o Verbo encarnado, o próprio Deus, para que crendo tenhamos vida.",
    location: "Éfeso",
    chapters: 21, verses: 879, usualOrder: 43, chronologicalOrder: 55,
    outline: [
      {title: "O Prólogo: O Verbo se fez carne", range: "1:1-18"},
      {title: "O Livro dos Sinais (Ministério público e os 7 milagres)", range: "1:19-12:50"},
      {title: "O Livro da Glória (Discursos no Cenáculo e a oração sacerdotal)", range: "13-17"},
      {title: "A Paixão, Ressurreição e Epílogo", range: "18-21"}
    ],
    fulfilledPromises: ["O envio do Consolador (o Espírito Santo) para habitar nos crentes (14-16)"],
    unfulfilledPromises: ["A preparação de moradas celestiais e o retorno para buscar Sua Noiva (14:1-3)"],
    keyVerse: "\"Estes, porém, foram registrados para que creiais que Jesus é o Cristo, o Filho de Deus, e para que, crendo, tenhais vida em seu nome.\" (João 20:31)",
    christType: "O Verbo Encarnado; O Cordeiro de Deus; O Pão da Vida; A Luz do Mundo; O Bom Pastor."
  },
  "ACT": {
    bookId: "Atos", abbreviation: "AT", author: "Lucas", date: "c. 62 d.C.", audience: "Teófilo e a Igreja Universal", genre: "História Eclesiástica", theme: "O Espírito Santo — a expansão da Igreja",
    description: "O volume dois da obra de Lucas. Narra a descida do Espírito Santo no Pentecostes e a explosiva expansão da Igreja primitiva, desde Jerusalém, passando pela Judeia e Samaria, até os confins do império romano (Roma), liderada principalmente por Pedro e Paulo.",
    location: "Roma",
    chapters: 28, verses: 1007, usualOrder: 44, chronologicalOrder: 47,
    outline: [
      {title: "A fundação da Igreja em Jerusalém (Ministério de Pedro)", range: "1-7"},
      {title: "A expansão para a Judeia e Samaria (Filipe e a conversão de Saulo)", range: "8-12"},
      {title: "A expansão para os confins da terra (As 3 viagens missionárias de Paulo)", range: "13-21"},
      {title: "A prisão de Paulo e a viagem para Roma", range: "22-28"}
    ],
    fulfilledPromises: ["O batismo no Espírito Santo (Atos 2)", "O Evangelho alcançando os gentios (Atos 10)"],
    unfulfilledPromises: ["O retorno de Jesus da mesma forma que Ele subiu aos céus (1:11)"],
    keyVerse: "\"Mas recebereis poder, ao descer sobre vós o Espírito Santo, e sereis minhas testemunhas tanto em Jerusalém como em toda a Judeia e Samaria e até aos confins da terra.\" (Atos 1:8)",
    christType: "O Senhor Ascendido e Exaltado; O Doador do Espírito Santo."
  },
  "ROM": {
    bookId: "Romanos", abbreviation: "RM", author: "Paulo", date: "c. 57 d.C.", audience: "Igreja em Roma", genre: "Epístola Doutrinária", theme: "Justificação — a justiça de Deus pela fé",
    description: "A obra-prima teológica de Paulo e o documento mais influente da história da Igreja. Romanos apresenta uma exposição lógica e brilhante do Evangelho: a ruína total da humanidade pelo pecado, a salvação unicamente pela graça através da fé em Cristo, a santificação pelo Espírito e o plano de Deus para Israel.",
    location: "Corinto",
    chapters: 16, verses: 433, usualOrder: 45, chronologicalOrder: 52,
    outline: [
      {title: "A condenação: A necessidade universal de justiça", range: "1-3:20"},
      {title: "A justificação: A provisão da justiça pela fé", range: "3:21-5:21"},
      {title: "A santificação: A prática da justiça pelo Espírito", range: "6-8"},
      {title: "A dispensação: O plano de Deus para Israel e os gentios", range: "9-11"},
      {title: "A aplicação: A justiça na vida diária", range: "12-16"}
    ],
    fulfilledPromises: ["A justificação gratuita de todo aquele que crê (5:1)", "Nenhuma condenação para os que estão em Cristo (8:1)"],
    unfulfilledPromises: ["A redenção final dos nossos corpos (8:23)", "A salvação futura de todo o Israel (11:26)"],
    keyVerse: "\"Visto que a justiça de Deus se revela no evangelho, de fé em fé, como está escrito: O justo viverá por fé.\" (Romanos 1:17)",
    christType: "O Segundo Adão (5:14); O Sacrifício Propiciatório (3:25); O Fim da Lei para Justiça (10:4)."
  },
  "1CO": {
    bookId: "1 Coríntios", abbreviation: "1CO", author: "Paulo", date: "c. 55 d.C.", audience: "Igreja em Corinto", genre: "Epístola Pastoral", theme: "Correção — a cruz aplicada aos problemas da igreja",
    description: "Uma carta corretiva enviada a uma igreja carnal, dividida e imoral em uma cidade pagã. Paulo aplica a sabedoria da cruz para resolver problemas práticos: divisões, imoralidade, processos judiciais, casamento, liberdade cristã, ordem no culto, dons espirituais e a ressurreição.",
    location: "Éfeso",
    chapters: 16, verses: 437, usualOrder: 46, chronologicalOrder: 50,
    outline: [
      {title: "Resposta aos relatos de divisões e carnalidade", range: "1-6"},
      {title: "Resposta às perguntas sobre casamento e liberdade", range: "7-10"},
      {title: "Correções sobre o culto, a Ceia e os dons espirituais", range: "11-14"},
      {title: "A defesa da ressurreição corporal", range: "15"},
      {title: "Instruções finais e saudações", range: "16"}
    ],
    fulfilledPromises: ["A vitória sobre o pecado e a morte através da cruz (15:57)"],
    unfulfilledPromises: ["O arrebatamento da Igreja e a transformação dos nossos corpos em um abrir e fechar de olhos (15:51-52)"],
    keyVerse: "\"Porque a palavra da cruz é loucura para os que perecem; mas para nós, que somos salvos, é o poder de Deus.\" (1 Coríntios 1:18)",
    christType: "As Primícias dos que dormem (15:20); A nossa Páscoa sacrificada (5:7); A Rocha espiritual (10:4)."
  },
  "2CO": {
    bookId: "2 Coríntios", abbreviation: "2CO", author: "Paulo", date: "c. 56 d.C.", audience: "Igreja em Corinto", genre: "Epístola Pessoal / Defesa", theme: "Ministério — a glória através do sofrimento e fraqueza",
    description: "A epístola mais pessoal e autobiográfica de Paulo. Ele abre seu coração para defender seu apostolado contra falsos mestres, revelando seus sofrimentos, suas visões celestiais e o princípio paradoxal de que o poder de Deus se aperfeiçoa na fraqueza humana.",
    location: "Macedônia",
    chapters: 13, verses: 257, usualOrder: 47, chronologicalOrder: 51,
    outline: [
      {title: "A explicação do ministério apostólico (Consolo e glória)", range: "1-7"},
      {title: "A exortação para a coleta (Generosidade)", range: "8-9"},
      {title: "A defesa da autoridade apostólica (Fraqueza e poder)", range: "10-13"}
    ],
    fulfilledPromises: ["A suficiência da graça de Deus em meio ao espinho na carne (12:9)"],
    unfulfilledPromises: ["O Tribunal de Cristo (Bema), onde todos comparecerão para receber segundo suas obras (5:10)"],
    keyVerse: "\"E ele me disse: A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza. De boa vontade, pois, me gloriarei nas minhas fraquezas, para que em mim habite o poder de Cristo.\" (2 Coríntios 12:9)",
    christType: "O Deus de toda consolação (1:3); Aquele que se fez pecado por nós (5:21); A Imagem de Deus (4:4)."
  },
  "GAL": {
    bookId: "Gálatas", abbreviation: "GL", author: "Paulo", date: "c. 49 d.C.", audience: "Igrejas da Galácia", genre: "Epístola Doutrinária", theme: "Liberdade — justificação pela fé versus legalismo",
    description: "A 'Carta Magna' da liberdade cristã. Paulo escreve indignado contra os judaizantes que ensinavam que a salvação exigia fé em Cristo mais a obediência à Lei de Moisés (circuncisão). Ele defende ferozmente que somos justificados apenas pela fé e devemos viver pelo Espírito.",
    location: "Antioquia da Síria",
    chapters: 6, verses: 149, usualOrder: 48, chronologicalOrder: 41,
    outline: [
      {title: "Defesa pessoal: A origem divina do evangelho de Paulo", range: "1-2"},
      {title: "Defesa doutrinária: Justificação pela fé, não pela Lei", range: "3-4"},
      {title: "Defesa prática: A liberdade cristã e o fruto do Espírito", range: "5-6"}
    ],
    fulfilledPromises: ["A libertação da maldição da Lei através da cruz (3:13)", "O recebimento do Espírito Santo pela fé (3:14)"],
    unfulfilledPromises: ["A colheita eterna da vida para aqueles que semeiam no Espírito (6:8)"],
    keyVerse: "\"Para a liberdade foi que Cristo nos libertou. Permanecei, pois, firmes e não vos submetais, de novo, a jugo de escravidão.\" (Gálatas 5:1)",
    christType: "O Libertador do jugo da Lei; A Semente de Abraão (3:16); O Crucificado (2:20)."
  },
  "EPH": {
    bookId: "Efésios", abbreviation: "EF", author: "Paulo", date: "c. 60-62 d.C.", audience: "Igreja em Éfeso", genre: "Epístola Doutrinária", theme: "A Igreja — o corpo de Cristo e as bênçãos celestiais",
    description: "Escrita da prisão em Roma, Efésios revela o 'mistério' de Deus: unir judeus e gentios em um só corpo, a Igreja. A primeira metade exalta nossa posição celestial em Cristo, e a segunda metade detalha como devemos andar dignamente na terra e lutar a batalha espiritual.",
    location: "Roma (Prisão)",
    chapters: 6, verses: 155, usualOrder: 49, chronologicalOrder: 48,
    outline: [
      {title: "Nossa posição em Cristo (Bênçãos espirituais)", range: "1-3"},
      {title: "Nossa caminhada no mundo (Unidade, pureza e família)", range: "4-6:9"},
      {title: "Nossa guerra contra o mal (A armadura de Deus)", range: "6:10-24"}
    ],
    fulfilledPromises: ["A união de judeus e gentios num só corpo, derrubando a parede de separação (2:14)"],
    unfulfilledPromises: ["A unificação final de todas as coisas em Cristo, nos céus e na terra (1:10)"],
    keyVerse: "\"Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus.\" (Efésios 2:8)",
    christType: "O Cabeça da Igreja (1:22); A Pedra Angular (2:20); O Marido Amoroso (5:25)."
  },
  "PHI": {
    bookId: "Filipenses", abbreviation: "FP", author: "Paulo", date: "c. 60-62 d.C.", audience: "Igreja em Filipos", genre: "Epístola Pessoal", theme: "Alegria — regozijo em Cristo em qualquer circunstância",
    description: "A epístola da alegria. Mesmo acorrentado em uma prisão romana, Paulo escreve uma carta transbordante de gratidão e regozijo. Ele exorta os filipenses a terem a mesma mente humilde de Cristo e a encontrarem sua alegria não nas circunstâncias, mas no Senhor.",
    location: "Roma (Prisão)",
    chapters: 4, verses: 104, usualOrder: 50, chronologicalOrder: 49,
    outline: [
      {title: "Cristo é a nossa vida (Alegria no sofrimento)", range: "1"},
      {title: "Cristo é o nosso exemplo (Alegria no serviço humilde)", range: "2"},
      {title: "Cristo é o nosso alvo (Alegria na salvação)", range: "3"},
      {title: "Cristo é a nossa força (Alegria na provisão)", range: "4"}
    ],
    fulfilledPromises: ["A paz de Deus que excede todo o entendimento guardando os corações (4:7)"],
    unfulfilledPromises: ["A transformação do nosso corpo de humilhação para ser igual ao Seu corpo glorioso (3:21)"],
    keyVerse: "\"Regozijai-vos sempre no Senhor; outra vez digo, regozijai-vos.\" (Filipenses 4:4)",
    christType: "O Servo Esvaziado (Kenosis - 2:7); O Nome sobre todo nome (2:9); O Nosso Alvo (3:14)."
  },
  "COL": {
    bookId: "Colossenses", abbreviation: "CL", author: "Paulo", date: "c. 60-62 d.C.", audience: "Igreja em Colossos", genre: "Epístola Doutrinária", theme: "Supremacia — a suficiência absoluta de Cristo",
    description: "Escrita para combater uma heresia que misturava misticismo, legalismo e filosofia grega. Paulo responde exaltando a supremacia absoluta de Cristo sobre toda a criação e sobre todos os principados. Em Cristo habita toda a plenitude, e Nele estamos completos.",
    location: "Roma (Prisão)",
    chapters: 4, verses: 95, usualOrder: 51, chronologicalOrder: 43,
    outline: [
      {title: "A supremacia de Cristo na criação e redenção", range: "1"},
      {title: "A suficiência de Cristo contra as heresias", range: "2"},
      {title: "A submissão a Cristo na vida prática e familiar", range: "3-4"}
    ],
    fulfilledPromises: ["O cancelamento do escrito de dívida (a Lei) na cruz, triunfando sobre os principados (2:14-15)"],
    unfulfilledPromises: ["A nossa manifestação em glória juntamente com Ele quando Ele se manifestar (3:4)"],
    keyVerse: "\"Ele é a imagem do Deus invisível, o primogênito de toda a criação... Porque nele habita corporalmente toda a plenitude da divindade.\" (Colossenses 1:15; 2:9)",
    christType: "A Imagem do Deus Invisível (1:15); O Criador de Tudo (1:16); A Plenitude da Divindade (2:9)."
  },
  "1TH": {
    bookId: "1 Tessalonicenses", abbreviation: "1TS", author: "Paulo", date: "c. 51 d.C.", audience: "Igreja em Tessalônica", genre: "Epístola Pastoral", theme: "Esperança — a iminente volta de Cristo",
    description: "Uma das primeiras cartas de Paulo. Escrita a uma igreja jovem e perseguida para encorajá-los na fé e corrigir mal-entendidos sobre o retorno de Cristo. É famosa por sua descrição clara do Arrebatamento da Igreja, oferecendo consolo diante da morte.",
    location: "Corinto",
    chapters: 5, verses: 89, usualOrder: 52, chronologicalOrder: 42,
    outline: [
      {title: "Ações de graças pela fé e exemplo dos tessalonicenses", range: "1"},
      {title: "O ministério e o amor de Paulo pela igreja", range: "2-3"},
      {title: "Instruções sobre a pureza e o Arrebatamento", range: "4"},
      {title: "A vigilância para o Dia do Senhor e exortações finais", range: "5"}
    ],
    fulfilledPromises: ["O livramento da ira vindoura através de Jesus (1:10)"],
    unfulfilledPromises: ["O Arrebatamento: o Senhor descendo com alarido e os mortos em Cristo ressuscitando primeiro (4:16-17)"],
    keyVerse: "\"Porque o mesmo Senhor descerá do céu com alarido, e com voz de arcanjo, e com a trombeta de Deus; e os que morreram em Cristo ressuscitarão primeiro.\" (1 Tessalonicenses 4:16)",
    christType: "O Senhor que Desce do Céu (4:16); O Nosso Livrador da Ira (1:10)."
  },
  "2TH": {
    bookId: "2 Tessalonicenses", abbreviation: "2TS", author: "Paulo", date: "c. 51 d.C.", audience: "Igreja em Tessalônica", genre: "Epístola Pastoral / Profética", theme: "O Dia do Senhor — correção escatológica e disciplina",
    description: "Escrita pouco depois da primeira carta para corrigir um falso boato de que o 'Dia do Senhor' (a tribulação) já havia começado. Paulo esclarece que esse dia não virá sem que antes ocorra a apostasia e a revelação do 'homem do pecado' (o Anticristo).",
    location: "Corinto",
    chapters: 3, verses: 47, usualOrder: 53, chronologicalOrder: 43,
    outline: [
      {title: "Encorajamento na perseguição e o juízo vindouro", range: "1"},
      {title: "Esclarecimento profético: O homem do pecado", range: "2"},
      {title: "Exortação prática: Disciplina para os ociosos", range: "3"}
    ],
    fulfilledPromises: ["A justiça divina retribuindo tribulação aos perseguidores da igreja (1:6)"],
    unfulfilledPromises: ["A destruição do Anticristo pelo sopro da boca do Senhor na Sua vinda (2:8)"],
    keyVerse: "\"Ninguém de maneira alguma vos engane; porque não será assim sem que antes venha a apostasia, e se manifeste o homem do pecado, o filho da perdição.\" (2 Tessalonicenses 2:3)",
    christType: "O Senhor da Glória Vingadora (1:7-8); O Destruidor do Anticristo (2:8)."
  },
  "1TI": {
    bookId: "1 Timóteo", abbreviation: "1TM", author: "Paulo", date: "c. 62-64 d.C.", audience: "Timóteo (em Éfeso)", genre: "Epístola Pastoral", theme: "Ordem — a conduta na casa de Deus",
    description: "Um manual de liderança pastoral escrito pelo veterano apóstolo ao seu jovem discípulo Timóteo. Contém instruções cruciais sobre o combate a falsas doutrinas, a ordem no culto público, as qualificações para bispos e diáconos, e o cuidado com diferentes grupos na igreja.",
    location: "Macedônia",
    chapters: 6, verses: 113, usualOrder: 54, chronologicalOrder: 53,
    outline: [
      {title: "A defesa da sã doutrina contra falsos mestres", range: "1"},
      {title: "Instruções sobre a oração e o papel das mulheres", range: "2"},
      {title: "Qualificações para líderes (bispos e diáconos)", range: "3"},
      {title: "O bom ministro e o cuidado com a igreja", range: "4-6"}
    ],
    fulfilledPromises: ["O Mistério da Piedade: Deus manifestado em carne, justificado no Espírito (3:16)"],
    unfulfilledPromises: ["A aparição do Bendito e Único Potentado, Rei dos reis e Senhor dos senhores (6:15)"],
    keyVerse: "\"Porque há um só Deus, e um só Mediador entre Deus e os homens, Jesus Cristo homem.\" (1 Timóteo 2:5)",
    christType: "O Único Mediador (2:5); O Rei Eterno, Imortal e Invisível (1:17); O Salvador de todos os homens (4:10)."
  },
  "2TI": {
    bookId: "2 Timóteo", abbreviation: "2TM", author: "Paulo", date: "c. 66-67 d.C.", audience: "Timóteo", genre: "Epístola Pastoral", theme: "Fidelidade — o último testamento de Paulo",
    description: "A última carta escrita por Paulo, aguardando a execução em uma masmorra fria em Roma. É um apelo emocionante a Timóteo para que permaneça fiel, suporte o sofrimento, pregue a Palavra em tempos de apostasia e passe o bastão do evangelho a homens fiéis.",
    location: "Roma (Prisão Mamertina)",
    chapters: 4, verses: 83, usualOrder: 55, chronologicalOrder: 54,
    outline: [
      {title: "O chamado à coragem e fidelidade no sofrimento", range: "1"},
      {title: "As metáforas do servo fiel (soldado, atleta, lavrador)", range: "2"},
      {title: "A apostasia dos últimos dias e a suficiência das Escrituras", range: "3"},
      {title: "O encargo final: Prega a Palavra e a despedida de Paulo", range: "4"}
    ],
    fulfilledPromises: ["A inspiração divina de toda a Escritura (3:16)", "A coroa da justiça guardada para o apóstolo (4:8)"],
    unfulfilledPromises: ["O Reino Celestial e seguro para o qual o Senhor nos guardará (4:18)"],
    keyVerse: "\"Combati o bom combate, acabei a carreira, guardei a fé.\" (2 Timóteo 4:7)",
    christType: "O Justo Juiz (4:8); Aquele que aboliu a morte (1:10); A Semente de Davi ressuscitada (2:8)."
  },
  "TIT": {
    bookId: "Tito", abbreviation: "TT", author: "Paulo", date: "c. 62-64 d.C.", audience: "Tito (em Creta)", genre: "Epístola Pastoral", theme: "Boas Obras — a sã doutrina produzindo vida santa",
    description: "Paulo deixou Tito na difícil ilha de Creta para organizar as igrejas e estabelecer presbíteros. A carta enfatiza a conexão inseparável entre a verdadeira doutrina (a graça de Deus) e o comportamento piedoso (boas obras) em uma cultura corrompida.",
    location: "Macedônia ou Éfeso",
    chapters: 3, verses: 46, usualOrder: 56, chronologicalOrder: 53,
    outline: [
      {title: "A organização da igreja e qualificações dos presbíteros", range: "1"},
      {title: "A sã doutrina aplicada a diferentes grupos (A Graça)", range: "2"},
      {title: "O comportamento cristão na sociedade (A Misericórdia)", range: "3"}
    ],
    fulfilledPromises: ["A manifestação da graça de Deus trazendo salvação a todos os homens (2:11)"],
    unfulfilledPromises: ["A Bem-aventurada Esperança e o aparecimento da glória do nosso grande Deus e Salvador (2:13)"],
    keyVerse: "\"Porque a graça de Deus se há manifestado, trazendo salvação a todos os homens... aguardando a bem-aventurada esperança e o aparecimento da glória do grande Deus e nosso Salvador Jesus Cristo.\" (Tito 2:11,13)",
    christType: "O Grande Deus e Salvador (2:13); A Graça Manifestada (2:11)."
  },
  "PHM": {
    bookId: "Filemom", abbreviation: "FM", author: "Paulo", date: "c. 60-62 d.C.", audience: "Filemom", genre: "Epístola Pessoal", theme: "Perdão — a graça restaurando relacionamentos",
    description: "A carta mais curta e pessoal de Paulo. Um apelo magistral e terno a um amigo rico (Filemom) para que perdoe e receba de volta seu escravo fugitivo (Onésimo), que havia se convertido através de Paulo na prisão. Uma bela ilustração da imputação e do perdão em Cristo.",
    location: "Roma (Prisão)",
    chapters: 1, verses: 25, usualOrder: 57, chronologicalOrder: 49,
    outline: [
      {title: "Ações de graças pelo amor e fé de Filemom", range: "1:1-7"},
      {title: "O apelo intercessório em favor de Onésimo", range: "1:8-16"},
      {title: "A promessa de Paulo de pagar a dívida (Imputação)", range: "1:17-25"}
    ],
    fulfilledPromises: ["A união em Cristo que transcende e dissolve as barreiras sociais (escravo e senhor tornando-se irmãos)"],
    unfulfilledPromises: ["A igualdade plena e perfeita no Reino Eterno"],
    keyVerse: "\"Assim, pois, se me tens por companheiro, recebe-o como se fosse a mim mesmo. E, se te fez algum dano ou te deve alguma coisa, lança isso na minha conta.\" (Filemom 1:17-18)",
    christType: "O Intercessor perfeito; Aquele que assumiu nossa dívida (Imputação - v. 18)."
  },
  "HEB": {
    bookId: "Hebreus", abbreviation: "HB", author: "Desconhecido (possivelmente Paulo, Apolo ou Barnabé)", date: "c. 67-69 d.C.", audience: "Cristãos Judeus", genre: "Epístola Doutrinária", theme: "A Superioridade de Cristo — o novo e vivo caminho",
    description: "Escrita a cristãos judeus que estavam sendo tentados a voltar ao judaísmo devido à perseguição. O autor argumenta magistralmente que Jesus Cristo é superior aos anjos, a Moisés, a Josué e a Arão. Ele é o sacrifício perfeito e o Sumo Sacerdote eterno da Nova Aliança.",
    location: "Desconhecido (possivelmente Itália)",
    chapters: 13, verses: 303, usualOrder: 58, chronologicalOrder: 56,
    outline: [
      {title: "A superioridade da Pessoa de Cristo (sobre profetas e anjos)", range: "1-2"},
      {title: "A superioridade do Ministério de Cristo (sobre Moisés e Josué)", range: "3-4"},
      {title: "A superioridade do Sacerdócio de Cristo (ordem de Melquisedeque)", range: "5-10:18"},
      {title: "A superioridade do Princípio da Fé (A galeria dos heróis)", range: "10:19-13"}
    ],
    fulfilledPromises: ["O sacrifício único e definitivo que aperfeiçoou para sempre os santificados (10:14)"],
    unfulfilledPromises: ["A posse da Cidade que tem fundamentos, cujo arquiteto e construtor é Deus (11:10)"],
    keyVerse: "\"Jesus Cristo é o mesmo, ontem, e hoje, e eternamente.\" (Hebreus 13:8)",
    christType: "O Sumo Sacerdote Eterno (4:14); O Mediador de uma Nova Aliança (9:15); O Autor e Consumador da Fé (12:2)."
  },
  "JAM": {
    bookId: "Tiago", abbreviation: "TG", author: "Tiago (meio-irmão de Jesus)", date: "c. 45-48 d.C.", audience: "As 12 Tribos da Dispersão", genre: "Epístola Geral / Sabedoria", theme: "Fé Prática — a fé demonstrada pelas obras",
    description: "O 'Provérbios do Novo Testamento'. Tiago escreve uma carta extremamente prática e direta, enfatizando que a verdadeira fé salvadora inevitavelmente produzirá boas obras, controle da língua, paciência nas provações e amor ao próximo. Fé sem obras é morta.",
    location: "Jerusalém",
    chapters: 5, verses: 108, usualOrder: 59, chronologicalOrder: 40,
    outline: [
      {title: "O teste da fé através das provações e da obediência à Palavra", range: "1"},
      {title: "O teste da fé através do amor imparcial e das boas obras", range: "2"},
      {title: "O teste da fé através do controle da língua e da sabedoria", range: "3"},
      {title: "O teste da fé através da submissão a Deus e paciência", range: "4-5"}
    ],
    fulfilledPromises: ["A sabedoria dada generosamente por Deus àqueles que pedem com fé (1:5)"],
    unfulfilledPromises: ["A vinda do Senhor (o Juiz) que está à porta, trazendo recompensa (5:7-9)"],
    keyVerse: "\"Porque, assim como o corpo sem o espírito está morto, assim também a fé sem obras é morta.\" (Tiago 2:26)",
    christType: "O Senhor da Glória (2:1); O Juiz que está à Porta (5:9)."
  },
  "1PE": {
    bookId: "1 Pedro", abbreviation: "1PE", author: "Pedro", date: "c. 64 d.C.", audience: "Forasteiros da Dispersão", genre: "Epístola Geral", theme: "Esperança — sofrimento e glória",
    description: "Uma carta de encorajamento a cristãos que enfrentavam intensa perseguição sob o Império Romano. Pedro os lembra de sua 'viva esperança' em Cristo, exortando-os a viverem vidas santas e a suportarem o sofrimento injusto seguindo o exemplo do Salvador.",
    location: "Babilônia (possivelmente um código para Roma)",
    chapters: 5, verses: 105, usualOrder: 60, chronologicalOrder: 57,
    outline: [
      {title: "A salvação do crente: Uma viva esperança", range: "1:1-2:10"},
      {title: "A submissão do crente: Testemunho no mundo e na família", range: "2:11-3:12"},
      {title: "O sofrimento do crente: Participando das aflições de Cristo", range: "3:13-5:14"}
    ],
    fulfilledPromises: ["A formação de uma nação santa e sacerdócio real a partir dos gentios (2:9)"],
    unfulfilledPromises: ["A coroa imarcescível da glória que será dada quando o Supremo Pastor se manifestar (5:4)"],
    keyVerse: "\"Mas vós sois a geração eleita, o sacerdócio real, a nação santa, o povo adquirido, para que anuncieis as virtudes daquele que vos chamou das trevas para a sua maravilhosa luz.\" (1 Pedro 2:9)",
    christType: "O Cordeiro sem defeito e sem mácula (1:19); A Pedra Angular (2:6); O Supremo Pastor (5:4)."
  },
  "2PE": {
    bookId: "2 Pedro", abbreviation: "2PE", author: "Pedro", date: "c. 66-67 d.C.", audience: "Cristãos em geral", genre: "Epístola Geral", theme: "Conhecimento — alerta contra falsos mestres",
    description: "O testamento final de Pedro antes de seu martírio. Enquanto 1 Pedro lida com a perseguição externa, 2 Pedro alerta contra o perigo interno: falsos mestres que distorcem a verdade e zombam da promessa da segunda vinda de Cristo. O antídoto é crescer no conhecimento de Cristo.",
    location: "Roma (Prisão)",
    chapters: 3, verses: 61, usualOrder: 61, chronologicalOrder: 58,
    outline: [
      {title: "O cultivo do caráter cristão e a certeza da Palavra profética", range: "1"},
      {title: "A condenação dos falsos mestres e suas heresias destrutivas", range: "2"},
      {title: "A confiança na promessa da Segunda Vinda e os Novos Céus", range: "3"}
    ],
    fulfilledPromises: ["A confirmação da palavra profética através da majestade de Cristo vista no monte (1:16-19)"],
    unfulfilledPromises: ["Novos céus e nova terra, nos quais habita a justiça (3:13)"],
    keyVerse: "\"Antes, crescei na graça e no conhecimento de nosso Senhor e Salvador Jesus Cristo. A ele seja a glória, tanto agora como no dia eterno.\" (2 Pedro 3:18)",
    christType: "O Senhor e Salvador (3:18); A Estrela da Alva (1:19)."
  },
  "1JN": {
    bookId: "1 João", abbreviation: "1JO", author: "João (o apóstolo)", date: "c. 85-90 d.C.", audience: "Cristãos em geral", genre: "Epístola Geral", theme: "Comunhão — a certeza da vida eterna",
    description: "Escrita para combater o gnosticismo incipiente, João oferece testes claros (obediência, amor e crença na encarnação) para que os crentes tenham absoluta certeza de sua salvação. Deus é luz, Deus é amor, e Deus é vida.",
    location: "Éfeso",
    chapters: 5, verses: 105, usualOrder: 62, chronologicalOrder: 59,
    outline: [
      {title: "Deus é Luz: A comunhão e o teste da obediência", range: "1-2:28"},
      {title: "Deus é Amor: A filiação e o teste do amor fraternal", range: "2:29-4:21"},
      {title: "Deus é Vida: A certeza da salvação e o teste da fé", range: "5"}
    ],
    fulfilledPromises: ["A vida eterna que já está presente naqueles que creem no Filho de Deus (5:11-13)"],
    unfulfilledPromises: ["A promessa de que seremos semelhantes a Ele quando O virmos como Ele é (3:2)"],
    keyVerse: "\"Estas coisas vos escrevi, a fim de saberdes que tendes a vida eterna, a vós outros que credes em o nome do Filho de Deus.\" (1 João 5:13)",
    christType: "O Advogado junto ao Pai (2:1); A Propiciação pelos nossos pecados (2:2); A Vida Eterna (5:20)."
  },
  "2JN": {
    bookId: "2 João", abbreviation: "2JO", author: "João (o presbítero)", date: "c. 85-90 d.C.", audience: "A senhora eleita e seus filhos", genre: "Epístola Geral", theme: "Verdade — amor e discernimento",
    description: "Uma breve carta alertando uma senhora cristã (ou uma igreja local) a não hospedar falsos mestres que negavam a encarnação de Cristo. João enfatiza que o verdadeiro amor cristão nunca compromete a verdade bíblica.",
    location: "Éfeso",
    chapters: 1, verses: 13, usualOrder: 63, chronologicalOrder: 60,
    outline: [
      {title: "A exortação para andar na verdade e no amor", range: "1:1-6"},
      {title: "O alerta contra os enganadores e a falsa doutrina", range: "1:7-13"}
    ],
    fulfilledPromises: ["A permanência do Pai e do Filho naqueles que guardam a doutrina de Cristo (1:9)"],
    unfulfilledPromises: ["A recompensa completa para aqueles que não perdem o que realizaram (1:8)"],
    keyVerse: "\"E o amor é este: que andemos segundo os seus mandamentos. Este mandamento, como ouvistes desde o princípio, é que andeis nesse amor.\" (2 João 1:6)",
    christType: "O Filho do Pai em verdade e amor (1:3)."
  },
  "3JN": {
    bookId: "3 João", abbreviation: "3JO", author: "João (o presbítero)", date: "c. 85-90 d.C.", audience: "Gaio", genre: "Epístola Geral", theme: "Hospitalidade — cooperadores da verdade",
    description: "Uma carta pessoal elogiando Gaio por sua hospitalidade aos missionários itinerantes, e condenando Diótrefes, um líder arrogante que rejeitava a autoridade apostólica e expulsava irmãos da igreja. Destaca a importância de apoiar a obra de Deus.",
    location: "Éfeso",
    chapters: 1, verses: 14, usualOrder: 64, chronologicalOrder: 61,
    outline: [
      {title: "O elogio a Gaio por andar na verdade e apoiar os irmãos", range: "1:1-8"},
      {title: "A condenação do orgulho e rebelião de Diótrefes", range: "1:9-11"},
      {title: "O bom testemunho de Demétrio e saudações finais", range: "1:12-14"}
    ],
    fulfilledPromises: ["A prosperidade da alma e a alegria de ver os filhos andando na verdade (1:2-4)"],
    unfulfilledPromises: ["O encontro face a face para falar de boca a boca (1:14)"],
    keyVerse: "\"Amado, não imites o que é mau, senão o que é bom. Aquele que pratica o bem procede de Deus; aquele que pratica o mal não viu a Deus.\" (3 João 1:11)",
    christType: "A Verdade (1:3)."
  },
  "JUD": {
    bookId: "Judas", abbreviation: "JD", author: "Judas (meio-irmão de Jesus)", date: "c. 65-80 d.C.", audience: "Cristãos em geral", genre: "Epístola Geral", theme: "Contenda — a batalha pela fé",
    description: "Judas planejava escrever sobre a salvação, mas a urgência da infiltração de falsos mestres o forçou a escrever um chamado às armas espirituais. Ele usa exemplos do Antigo Testamento para mostrar o juízo certo de Deus sobre os apóstatas e exorta os crentes a batalharem pela fé.",
    location: "Jerusalém",
    chapters: 1, verses: 25, usualOrder: 65, chronologicalOrder: 62,
    outline: [
      {title: "O propósito da carta: Batalhar pela fé contra os apóstatas", range: "1:1-4"},
      {title: "Exemplos históricos do juízo divino sobre a apostasia", range: "1:5-16"},
      {title: "Exortações aos crentes e a doxologia final", range: "1:17-25"}
    ],
    fulfilledPromises: ["A preservação poderosa de Deus para nos guardar de tropeços (1:24)"],
    unfulfilledPromises: ["A vinda do Senhor com Seus milhares de santos para executar juízo (1:14-15)"],
    keyVerse: "\"Amados, quando empregava toda a diligência em escrever-vos acerca da nossa comum salvação, foi que me senti obrigado a corresponder-me convosco, exortando-vos a batalhardes, diligentemente, pela fé que uma vez por todas foi entregue aos santos.\" (Judas 1:3)",
    christType: "O Único Soberano e Senhor nosso (1:4); Aquele que é poderoso para nos guardar (1:24)."
  },
  "REV": {
    bookId: "Apocalipse", abbreviation: "AP", author: "João (o apóstolo)", date: "c. 95 d.C.", audience: "As Sete Igrejas da Ásia Menor", genre: "Profecia / Apocalíptico", theme: "A Revelação — o triunfo final de Cristo",
    description: "O clímax majestoso da Bíblia. Escrito durante o exílio na ilha de Patmos, João recebe visões impressionantes do Cristo glorificado, do julgamento de Deus sobre um mundo rebelde (selos, trombetas, taças), da derrota final de Satanás e do estabelecimento dos Novos Céus e Nova Terra.",
    location: "Ilha de Patmos",
    chapters: 22, verses: 404, usualOrder: 66, chronologicalOrder: 66,
    outline: [
      {title: "As coisas que viste (A visão do Cristo Glorificado)", range: "1"},
      {title: "As coisas que são (As cartas às sete igrejas)", range: "2-3"},
      {title: "As coisas que hão de acontecer (A Tribulação, o Milênio e a Eternidade)", range: "4-22"}
    ],
    fulfilledPromises: ["A vitória do Cordeiro que foi morto, mas que é digno de abrir o livro (5:5-6)"],
    unfulfilledPromises: ["O retorno de Cristo em um cavalo branco, o julgamento final e o Estado Eterno sem dor ou morte (19-22)"],
    keyVerse: "\"Escreve, pois, as coisas que tens visto, e as que são, e as que depois destas hão de acontecer.\" (Apocalipse 1:19)",
    christType: "O Alfa e o Ômega (1:8); O Leão da Tribo de Judá (5:5); O Cordeiro Morto (5:6); O Rei dos Reis e Senhor dos Senhores (19:16)."
  }
};

export const DABAR_DICTIONARY: DictionaryEntry[] = [
  { term: "Dabar - H", definition: "A Palavra de Deus que traz existência e propósito. Não é apenas informação, mas decreto criativo.", usage: "Hebraico", keyRefs: ["Gn 1:3", "Sl 33:6"] },
  { term: "Logos - G", definition: "O Verbo Eterno. A razão divina encarnada. A expressão máxima do pensamento de Deus.", usage: "Grego", keyRefs: ["Jo 1:1", "Ap 19:13"] }
];

export const HISTORICAL_CONTEXTS: HistoricalContext[] = [
  { 
    id: "hc1", 
    title: "O Período Intertestamental", 
    category: "História", 
    content: "Os 400 anos de silêncio profético entre Malaquias e Mateus não foram de inatividade divina, mas de preparação geopolítica e cultural. Durante este período, o Judaísmo foi profundamente moldado pelo helenismo após as conquistas de Alexandre, o Grande. Surgiram instituições cruciais como a Sinagoga, que descentralizou a adoração do Templo, e seitas como os Fariseus e Saduceus. A tradução da Septuaginta (LXX) em Alexandria permitiu que as Escrituras Hebraicas fossem acessíveis ao mundo grego, preparando o vocabulário teológico que o Novo Testamento utilizaria. Este período também viu a revolta dos Macabeus contra Antíoco Epifânio, um evento que purificou o Templo e reafirmou a identidade judaica contra a assimilação pagã total.", 
    bibleRefs: ["Dn 11", "Zc 9:13"] 
  },
  {
    id: "hc2",
    title: "O Império Romano e a Pax Romana",
    category: "História",
    content: "A 'Pax Romana' (Paz Romana) estabelecida por Augusto criou as condições ideais para a propagação do Evangelho. O sistema de estradas romanas, a segurança marítima contra piratas e a estabilidade política permitiram que os apóstolos viajassem por todo o Mediterrâneo com relativa facilidade. O conceito de cidadania romana, do qual Paulo se valeu, oferecia proteções legais que foram fundamentais para a defesa do Evangelho perante autoridades. Contudo, este cenário também impunha o culto ao Imperador, que se tornaria o grande ponto de fricção e perseguição para os cristãos que confessavam apenas 'Jesus é o Senhor'.",
    bibleRefs: ["Lc 2:1", "At 22:25-28", "Rm 13"]
  },
  {
    id: "hc3",
    title: "A Diáspora Judaica e as Sinagogas",
    category: "História",
    content: "A dispersão dos judeus por todo o Império Romano (Diáspora) criou 'pontes' para o Evangelho em quase todas as grandes cidades. A Sinagoga tornou-se o centro da vida comunitária e o primeiro lugar onde Paulo e outros missionários pregavam ao chegar em uma nova cidade. Ali, eles encontravam não apenas judeus, mas também os 'tementes a Deus' (gentios atraídos pelo monoteísmo ético do judaísmo), que foram o solo mais fértil para as primeiras conversões cristãs. A estrutura da sinagoga, com leitura das Escrituras e exortação, serviu de modelo para a liturgia da igreja primitiva.",
    bibleRefs: ["At 13:14-16", "At 17:1-2", "Tg 1:1"]
  },
  {
    id: "hc4",
    title: "O Contexto Cultural de Éfeso",
    category: "História",
    content: "Éfeso era a metrópole da Ásia Menor, famosa pelo Templo de Ártemis (Diana), uma das sete maravilhas do mundo antigo. A cidade era um centro de magia, ocultismo e comércio religioso. O confronto entre o Evangelho e o culto a Ártemis em Atos 19 revela a profundidade do impacto social da fé cristã, que ameaçava a economia baseada na idolatria. A carta aos Efésios deve ser lida contra este pano de fundo de guerra espiritual e supremacia de Cristo sobre todos os 'principados e potestades' que dominavam aquela cultura cosmopolita.",
    bibleRefs: ["At 19", "Ef 1:20-22", "Ef 6:10-12"]
  },
  {
    id: "hc5",
    title: "O Cenário Político de Jerusalém",
    category: "História",
    content: "Jerusalém no século I era um barril de pólvora político e religioso. Sob o domínio romano, mas governada internamente pelo Sinédrio, a cidade vivia a tensão entre a colaboração dos Saduceus com Roma e o nacionalismo fervoroso dos Zelotes. A expectativa messiânica era predominantemente política: um libertador que expulsaria os romanos. Jesus entra neste cenário frustrando as expectativas de um reino terreno, propondo um Reino que 'não é deste mundo', o que levou à coalizão improvável entre líderes judeus e autoridades romanas para Sua execução.",
    bibleRefs: ["Mt 22:15-22", "Jo 18:36", "At 4:25-28"]
  },
  {
    id: "hc6",
    title: "As Viagens Missionárias de Paulo",
    category: "História",
    content: "A estratégia de Paulo era urbana e estratégica: ele focava em centros metropolitanos (Antioquia, Éfeso, Corinto, Atenas, Roma) que serviam como hubs de influência. Ao estabelecer igrejas nestas cidades, o Evangelho se espalhava naturalmente para as regiões rurais circundantes. Suas viagens demonstram a transição do Evangelho de um contexto puramente judaico para o mundo greco-romano, enfrentando desafios filosóficos no Areópago e oposições comerciais em Filipos e Éfeso.",
    bibleRefs: ["At 13-28", "Rm 15:19-24"]
  }
];

export const THEOLOGICAL_TOPICS: TheologicalTopic[] = [
  { 
    id: "tt1", 
    title: "Soteriologia: A Doutrina da Salvação", 
    development: "A salvação é a obra soberana de Deus para redimir a humanidade caída. Ela envolve a Eleição (o plano eterno de Deus), a Regeneração (o novo nascimento pelo Espírito), a Justificação (o ato judicial onde somos declarados justos pela fé em Cristo), a Santificação (o processo de conformidade à imagem de Cristo) e a Glorificação final. O centro da soteriologia é a Graça Irresistível e a Expiação Substitutiva de Cristo, onde Ele tomou nosso lugar sob a ira de Deus para que pudéssemos tomar Seu lugar na herança do Pai.", 
    systematic: "Teologia Sistemática", 
    refs: ["Rm 3:21-26", "Rm 8:29-30", "Ef 2:1-10", "Tt 3:5"] 
  },
  {
    id: "tt2",
    title: "Cristologia: A Pessoa e Obra de Cristo",
    development: "A Cristologia bíblica afirma a União Hipostática: Jesus Cristo é verdadeiramente Deus e verdadeiramente homem, possuindo duas naturezas distintas em uma só pessoa, sem confusão ou divisão. Como Profeta, Ele revela a vontade de Deus; como Sacerdote, Ele oferece o sacrifício perfeito de Si mesmo e intercede por nós; como Rei, Ele governa sobre a Igreja e o universo. Sua ressurreição corporal é a garantia da nossa justificação e da vitória final sobre a morte e o pecado.",
    systematic: "Teologia Sistemática",
    refs: ["Jo 1:1-14", "Fp 2:5-11", "Cl 1:15-20", "Hb 1:1-4"]
  },
  {
    id: "tt3",
    title: "Pneumatologia: O Espírito Santo",
    development: "O Espírito Santo não é uma força impessoal, mas a terceira Pessoa da Trindade, possuindo intelecto, vontade e emoções. Ele convence o mundo do pecado, habita no crente no momento da conversão (Selo), capacita para a vida santa (Fruto) e distribui dons para a edificação do Corpo de Cristo. Ele é o 'Outro Consolador' (Parakletos) que guia a Igreja em toda a verdade e glorifica a Cristo através do testemunho dos santos.",
    systematic: "Teologia Sistemática",
    refs: ["Jo 14:16-17", "Jo 16:7-15", "At 1:8", "1 Co 12", "Gl 5:22-23"]
  },
  {
    id: "tt4",
    title: "Eclesiologia: O Mistério da Igreja",
    development: "A Igreja é o Corpo de Cristo, a Noiva do Cordeiro e o Templo do Espírito. Ela é composta por todos os regenerados de todas as épocas (Igreja Invisível) e se manifesta em comunidades locais (Igreja Visível). Suas marcas distintivas são a pregação fiel da Palavra, a administração correta dos sacramentos (Batismo e Ceia) e o exercício da disciplina eclesiástica. O propósito da Igreja é a adoração a Deus, a edificação dos santos e a evangelização do mundo.",
    systematic: "Teologia Sistemática",
    refs: ["Mt 16:18", "At 2:42-47", "Ef 4:1-16", "1 Tm 3:15"]
  },
  {
    id: "tt5",
    title: "Escatologia: A Consumação dos Tempos",
    development: "A Escatologia trata das 'últimas coisas', tanto individuais (morte e estado intermediário) quanto cósmicas (a Segunda Vinda de Cristo, a ressurreição dos mortos, o juízo final e o estado eterno). A esperança cristã não é uma fuga do mundo, mas a renovação de todas as coisas sob o senhorio visível de Cristo. O clímax da história é o casamento entre o Céu e a Terra na Nova Jerusalém, onde Deus habitará plenamente com Seu povo em um mundo livre de pecado, dor e morte.",
    systematic: "Teologia Sistemática",
    refs: ["1 Ts 4:13-18", "1 Co 15", "Ap 20-22"]
  },
  {
    id: "tt6",
    title: "Hamartiologia: A Doutrina do Pecado",
    development: "O pecado é definido como qualquer falta de conformidade ou transgressão da lei de Deus. Ele não é apenas um erro moral, mas uma rebelião fundamental contra a soberania divina. A queda de Adão resultou na depravação total da natureza humana, afetando o intelecto, as emoções e a vontade. O pecado separa o homem de Deus, corrompe os relacionamentos e sujeita toda a criação à vaidade. A gravidade do pecado é medida pela infinitude da santidade de Deus e pelo custo infinito da redenção na cruz.",
    systematic: "Teologia Sistemática",
    refs: ["Gn 3", "Rm 3:9-23", "Rm 5:12-21", "Ef 2:1-3"]
  }
];

export const SERMON_OUTLINES: SermonOutline[] = [
  { 
    id: "so1", 
    title: "O Caminho da Cruz: O Custo do Discipulado", 
    keyVerse: "Lucas 9:23", 
    points: [
      {title: "A Negação do Eu", explanation: "Não é apenas abdicar de coisas, mas do próprio trono do coração. O ego deve morrer para que Cristo reine.", ref: "Lc 9:23a"},
      {title: "A Tomada da Cruz", explanation: "A cruz não é um fardo de sofrimento comum, mas a aceitação voluntária da identificação com a rejeição de Cristo pelo mundo.", ref: "Lc 9:23b"},
      {title: "O Seguimento Contínuo", explanation: "O discipulado não é um evento, mas uma caminhada diária de obediência e dependência total do Mestre.", ref: "Lc 9:23c"}
    ], 
    applications: {general: "Avalie quem está no controle de suas decisões diárias. A cruz é o único caminho para a coroa."}, 
    questions: ["O que em sua vida ainda não foi entregue ao senhorio de Cristo?", "Você está disposto a ser rejeitado pelo mundo por causa do Evangelho?"] 
  },
  {
    id: "so2",
    title: "A Armadura de Deus: Preparo para a Guerra",
    keyVerse: "Efésios 6:10-18",
    points: [
      {title: "A Fonte do Poder", explanation: "Nossa força não vem de nós, mas de estarmos 'fortalecidos no Senhor'. A armadura é d'Ele, não nossa.", ref: "Ef 6:10"},
      {title: "As Peças de Defesa", explanation: "Verdade, Justiça, Evangelho, Fé e Salvação protegem nossa mente e coração contra os dardos inflamados do maligno.", ref: "Ef 6:14-17a"},
      {title: "A Arma de Ataque e a Comunicação", explanation: "A Palavra de Deus é a espada do Espírito, e a oração é o canal de comunicação constante com o Comandante.", ref: "Ef 6:17b-18"}
    ],
    applications: {general: "Não saia para o mundo sem estar revestido. A batalha é espiritual e exige ferramentas espirituais."},
    questions: ["Qual peça da armadura você tem negligenciado ultimamente?", "Como está sua vida de oração nas trincheiras do dia a dia?"]
  },
  {
    id: "so3",
    title: "O Sermão do Monte: O Caráter do Reino",
    keyVerse: "Mateus 5:1-12",
    points: [
      {title: "A Pobreza de Espírito", explanation: "O Reino começa com o reconhecimento da nossa falência espiritual total diante de Deus.", ref: "Mt 5:3"},
      {title: "A Fome de Justiça", explanation: "O cidadão do Reino não busca apenas o pão físico, mas anseia pela retidão de Deus em sua vida e no mundo.", ref: "Mt 5:6"},
      {title: "A Pacificação e a Perseguição", explanation: "Promover a paz de Deus traz a bênção do Pai, mas também a oposição de um mundo que odeia a luz.", ref: "Mt 5:9-10"}
    ],
    applications: {general: "As bem-aventuranças não são sugestões, mas a descrição do DNA de quem nasceu de novo."},
    questions: ["Sua vida reflete os valores do Reino ou os valores do sistema do mundo?", "Você tem fome de Deus ou fome de reconhecimento humano?"]
  },
  {
    id: "so4",
    title: "As Sete Palavras da Cruz: O Clamor da Redenção",
    keyVerse: "Lucas 23 / João 19",
    points: [
      {title: "O Perdão e a Promessa", explanation: "Mesmo em agonia, Cristo intercede pelos Seus algozes e garante o paraíso ao pecador arrependido.", ref: "Lc 23:34, 43"},
      {title: "O Abandono e a Sede", explanation: "O grito de abandono revela o peso do pecado sobre o Substituto, e a sede física aponta para Sua plena humanidade.", ref: "Mt 27:46, Jo 19:28"},
      {title: "A Consumação e a Entrega", explanation: "O grito 'Está Consumado' anuncia o fim da dívida e a vitória total, selada pela entrega confiante do espírito ao Pai.", ref: "Jo 19:30, Lc 23:46"}
    ],
    applications: {general: "A cruz não foi um acidente, mas o altar onde sua dívida foi paga integralmente."},
    questions: ["Você já se apropriou do 'Está Consumado' para sua própria paz de consciência?", "Como o perdão de Cristo na cruz deve moldar seus relacionamentos hoje?"]
  }
];

// ============================================================================================
// --- DATASET DIFERENCIAIS: RECONSTRUÇÃO MASSIVA v12.0 ---
// ============================================================================================

export const COMMON_ERRORS: CommonError[] = [
  {
    id: "err_prosperidade",
    mistake: "Teologia da Prosperidade: O Evangelho como Troca Comercial",
    ref: "1 Timóteo 6:5-10",
    context: "Interpretação materialista de bênçãos espirituais, tratando Deus como um devedor do homem.",
    correction: "A piedade com contentamento é grande fonte de lucro. O erro fundamental desta teologia é confundir 'soberania divina' com 'servidão divina'. A Bíblia ensina que a bênção de Deus visa Sua glória, não o acúmulo egoísta. \n\n1. O PROPÓSITO DA DOR: Ignora que o sofrimento faz parte do refino cristão (Tg 1:2-4).\n2. O FOCO ETERNO: Troca o 'tesouro no céu' pelo 'conforto na terra'.\n3. A SOBERANIA: Tenta 'determinar' o que Deus deve fazer, invertendo a ordem da Aliança."
  },
  {
    id: "err_legalismo",
    mistake: "Legalismo: A Justiça Própria como Base da Salvação",
    ref: "Gálatas 2:16 / 5:4",
    context: "Adição de regras humanas e ritos do AT como exigência para aceitação divina pós-cruz.",
    correction: "Ninguém é justificado pelas obras da lei. O legalismo anula a graça de Cristo ao sugerir que Sua obra foi insuficiente. \n\n1. MOTIVAÇÃO: O legalista obedece por medo ou orgulho; o cristão obedece por gratidão amorosa.\n2. FOCO: O legalismo foca no exterior (copos e pratos); a graça foca na regeneração do coração.\n3. RESULTADO: O legalismo gera hipocrisia e condenação; a graça gera santidade e liberdade."
  },
  {
    id: "err_antinomianismo",
    mistake: "Antinomianismo: Graça como Licença para o Pecado",
    ref: "Romanos 6:1-2 / Judas 1:4",
    context: "Uso da doutrina da justificação para justificar a persistência em um estilo de vida pecaminoso.",
    correction: "Continuaremos no pecado para que a graça abunde? De modo nenhum! A verdadeira graça não apenas perdoa o pecado, ela destrói o domínio do pecado sobre o crente. \n\n1. REGENERAÇÃO: Quem nasceu de Deus não vive na prática do pecado (1 Jo 3:9).\n2. SANTIFICAÇÃO: A graça é a energia que nos ensina a renunciar à impiedade (Tt 2:11-12).\n3. SENHORIO: Jesus não é apenas Salvador de fogo, Ele é o Senhor do trono do coração."
  },
  {
    id: "err_universalismo",
    mistake: "Universalismo: A Negação do Juízo Eterno",
    ref: "Mateus 25:46 / Apocalipse 20:15",
    context: "Crença de que, no fim, o amor de Deus anulará Sua justiça e todos serão salvos independentemente da fé.",
    correction: "Deus não é apenas Amor, Ele é Luz e Fogo Consumidor. A negação do inferno anula a seriedade da cruz. \n\n1. A JUSTIÇA: Se todos são salvos, a morte de Cristo foi desnecessária.\n2. O ARREPENDIMENTO: Sem juízo, o chamado ao arrependimento torna-se uma sugestão opcional.\n3. A SANTIDADE: O universalismo ignora que a presença de Deus seria um inferno para quem odeia Sua santidade."
  }
];

export const NT_OT_CONNECTIONS: NT_OT_Connection[] = [
  {
    id: "conn_manna",
    ot_shadow: "O Maná no Deserto",
    nt_fulfillment: "Cristo: O Pão Vivo do Céu",
    type: "typology",
    description: "Assim como o maná era a única nutrição sobrenatural para Israel no deserto, Jesus é o único sustento para a vida eterna da alma. \n\n1. ORIGEM: Ambos vieram do céu por iniciativa divina.\n2. SUFICIÊNCIA: O maná era colhido diariamente; Cristo é nossa suficiência momento a momento.\n3. FRAGILIDADE: O maná era pequeno e branco (humildade); Cristo veio em forma de servo.\n4. RESULTADO: Quem comeu do maná físico morreu, mas quem come de Cristo viverá para sempre (Jo 6)."
  },
  {
    id: "conn_serpent",
    ot_shadow: "A Serpente de Bronze no Poste",
    nt_fulfillment: "A Exaltação de Cristo na Cruz",
    type: "typology",
    description: "Jesus usa este paralelo em João 3:14 para explicar o método da salvação. \n\n1. O MAL: A serpente representava o veneno (pecado) que matava o povo.\n2. A CURA: O objeto da maldição foi transformado em instrumento de cura.\n3. O MEIO: Apenas um olhar de fé para a serpente de bronze curava; apenas o olhar de fé para o Cristo crucificado salva.\n4. A LÓGICA: O veneno estava dentro do homem, a cura estava fora (Exo-Justificação)."
  },
  {
    id: "conn_tabernacle",
    ot_shadow: "O Véu do Tabernáculo",
    nt_fulfillment: "A Carne Rompida de Jesus",
    type: "typology",
    description: "O véu que separava o Lugar Santo do Santíssimo era uma barreira instrutiva sobre a distância entre o pecado e a santidade. \n\n1. MATERIAL: Linho fino com cores messiânicas e querubins.\n2. O ROMPIMENTO: No momento da morte de Jesus, o véu físico rasgou-se de alto a baixo.\n3. O ACESSO: Hebreus 10:20 declara que entramos no santuário pelo 'novo e vivo caminho' através do véu, isto é, Sua carne.\n4. O RESULTADO: O acesso direto à presença de Deus sem mediadores humanos."
  },
  {
    id: "conn_passover",
    ot_shadow: "O Cordeiro Pascal",
    nt_fulfillment: "Cristo: Nossa Páscoa Imolada",
    type: "prophecy",
    description: "A redenção do Egito é a matriz de toda a teologia da substituição. \n\n1. SELEÇÃO: O cordeiro deveria ser sem defeito (1 Pe 1:19).\n2. SANGUE: O sangue nos umbrais impedia a entrada do destruidor.\n3. ALIMENTAÇÃO: O cordeiro deveria ser comido integralmente.\n4. OSSOS: Nenhum osso dele seria quebrado (cumprido literalmente na cruz, Jo 19:36)."
  }
];

export const BIBLICAL_PROFILES: BiblicalProfile[] = [
  {
    id: "prof_abraham",
    name: "Abraão: O Amigo de Deus",
    appearances: ["Gênesis 12-25", "Romanos 4", "Gálatas 3"],
    strengths: ["Fé inabalável no impossível", "Hospitalidade radical", "Intercessão persistente"],
    failures: ["Medo em terra estrangeira (mentira sobre Sara)", "Tentativa de 'ajudar' a Deus com Agar"],
    mainLessons: "A fé não é a ausência de dúvidas, mas a obediência apesar delas. O chamado de Abraão prova que Deus escolhe um indivíduo para abençoar nações. Sua prontidão em oferecer Isaque revela que a promessa é maior que o presente dado por Deus."
  },
  {
    id: "prof_david",
    name: "Davi: O Homem segundo o Coração de Deus",
    appearances: ["1 Samuel 16 - 1 Reis 2", "Salmos", "Atos 13:22"],
    strengths: ["Adoração profunda", "Coragem teocêntrica (Golias)", "Capacidade de arrependimento genuíno"],
    failures: ["Adultério com Bate-Seba", "Homicídio de Urias", "Negligência na disciplina dos filhos"],
    mainLessons: "Davi não foi escolhido por ser perfeito, mas por ser quebrantável. Sua vida ensina que o pecado tem consequências terríveis mesmo após o perdão, mas que a misericórdia de Deus é a base de um trono eterno."
  },
  {
    id: "prof_paul",
    name: "Paulo: O Arquiteto da Igreja",
    appearances: ["Atos 9-28", "Epístolas Paulinas"],
    strengths: ["Intelecto santificado", "Zelo missionário imparável", "Resiliência sob sofrimento extremo"],
    failures: ["Participação ativa no martírio de Estevão (pré-conversão)"],
    mainLessons: "O maior perseguidor tornou-se o maior apóstolo, provando que a graça é irresistível. Paulo ensina que a teologia deve ser vivida nas trincheiras e que o mistério da Igreja é a união de todos em Cristo."
  }
];

export const INTERTESTAMENTAL_CONTEXT: IntertestamentalContext[] = [
  {
    id: "inter_hellenism",
    title: "A Helenização e o Grego Koiné",
    group: "Impacto Cultural",
    description: "O avanço de Alexandre o Grande preparou o terreno linguístico para o Novo Testamento. O grego tornou-se a 'língua franca' do império.",
    impact: "Permitiu que o Evangelho fosse pregado e escrito em um idioma universal, garantindo que as epístolas fossem lidas de Jerusalém a Roma sem necessidade de tradução imediata."
  },
  {
    id: "inter_sects",
    title: "Surgimento dos Fariseus e Saduceus",
    group: "Religião & Política",
    description: "Durante o período de silêncio, o judaísmo fragmentou-se. Fariseus focavam na pureza e tradição; Saduceus no controle do Templo e política.",
    impact: "Criou o cenário de conflito religioso onde Jesus atuaria. O legalismo dos fariseus tornou-se o antítipo da mensagem da Graça."
  },
  {
    id: "inter_septuagint",
    title: "A Septuaginta (LXX)",
    group: "Cânon & Tradução",
    description: "A tradução do AT para o Grego em Alexandria (aprox. 250 a.C.).",
    impact: "Foi a Bíblia usada pelos apóstolos e pelos autores do NT para citar profecias. Facilitou o evangelismo aos gentios que já liam o Grego."
  }
];

export const BIBLE_QUOTES: BibleQuote[] = [
  // ANTIGO TESTAMENTO
  { id: "q1", testament: "AT", ref: "Gênesis 1:1", text: "No princípio, criou Deus os céus e a terra.", category: "Criação" },
  { id: "q2", testament: "AT", ref: "Gênesis 1:26", text: "E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança.", category: "Humanidade" },
  { id: "q3", testament: "AT", ref: "Êxodo 3:14", text: "Disse Deus a Moisés: EU SOU O QUE SOU.", category: "Natureza de Deus" },
  { id: "q4", testament: "AT", ref: "Êxodo 20:3", text: "Não terás outros deuses diante de mim.", category: "Mandamentos" },
  { id: "q5", testament: "AT", ref: "Números 6:24", text: "O Senhor te abençoe e te guarde.", category: "Bênção" },
  { id: "q6", testament: "AT", ref: "Deuteronômio 6:4", text: "Ouve, Israel, o Senhor, nosso Deus, é o único Senhor.", category: "Teologia" },
  { id: "q7", testament: "AT", ref: "Josué 1:9", text: "Não to mandei eu? Sê forte e corajoso; não temas, nem te espantes.", category: "Encorajamento" },
  { id: "q8", testament: "AT", ref: "Josué 24:15", text: "Eu e a minha casa serviremos ao Senhor.", category: "Família" },
  { id: "q9", testament: "AT", ref: "1 Samuel 16:7", text: "O homem vê o que está diante dos olhos, porém o Senhor olha para o coração.", category: "Julgamento" },
  { id: "q10", testament: "AT", ref: "2 Samuel 7:16", text: "O teu reino e o teu trono serão firmados para sempre.", category: "Promessa" },
  { id: "q11", testament: "AT", ref: "1 Crônicas 29:11", text: "Tua é, Senhor, a magnificência, e o poder, e a honra, e a vitória, e a majestade.", category: "Adoração" },
  { id: "q12", testament: "AT", ref: "2 Crônicas 7:14", text: "Se o meu povo, que se chama pelo meu nome, se humilhar, e orar, e buscar a minha face...", category: "Arrependimento" },
  { id: "q13", testament: "AT", ref: "Neemias 8:10", text: "A alegria do Senhor é a vossa força.", category: "Alegria" },
  { id: "q14", testament: "AT", ref: "Jó 19:25", text: "Eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra.", category: "Esperança" },
  { id: "q15", testament: "AT", ref: "Salmo 1:1", text: "Bem-aventurado o homem que não anda segundo o conselho dos ímpios.", category: "Vida Cristã" },
  { id: "q16", testament: "AT", ref: "Salmo 23:1", text: "O Senhor é o meu pastor; nada me faltará.", category: "Confiança" },
  { id: "q17", testament: "AT", ref: "Salmo 46:1", text: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.", category: "Proteção" },
  { id: "q18", testament: "AT", ref: "Salmo 51:10", text: "Cria em mim, ó Deus, um coração puro.", category: "Oração" },
  { id: "q19", testament: "AT", ref: "Salmo 103:1", text: "Bendize, ó minha alma, ao Senhor, e tudo o que há em mim bendiga o seu santo nome.", category: "Louvor" },
  { id: "q20", testament: "AT", ref: "Salmo 119:105", text: "Lâmpada para os meus pés é tua palavra e luz, para o meu caminho.", category: "Escritura" },
  { id: "q21", testament: "AT", ref: "Salmo 121:1", text: "Elevo os olhos para os montes: de onde me virá o socorro?", category: "Socorro" },
  { id: "q22", testament: "AT", ref: "Salmo 139:14", text: "Eu te louvarei, porque de um modo terrível e tão maravilhoso fui formado.", category: "Identidade" },
  { id: "q23", testament: "AT", ref: "Provérbios 3:5", text: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento.", category: "Sabedoria" },
  { id: "q24", testament: "AT", ref: "Provérbios 4:23", text: "Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida.", category: "Coração" },
  { id: "q25", testament: "AT", ref: "Provérbios 16:3", text: "Consagra ao Senhor as tuas obras, e teus pensamentos serão estabelecidos.", category: "Trabalho" },
  { id: "q26", testament: "AT", ref: "Eclesiastes 3:1", text: "Tudo tem o seu tempo determinado, e há tempo para todo o propósito debaixo do céu.", category: "Tempo" },
  { id: "q27", testament: "AT", ref: "Isaías 6:8", text: "Depois disto, ouvi a voz do Senhor, que dizia: A quem enviarei, e quem há de ir por nós? Então, disse eu: Eis-me aqui, envia-me a mim.", category: "Chamado" },
  { id: "q28", testament: "AT", ref: "Isaías 9:6", text: "Porque um menino nos nasceu, um filho se nos deu; e o principado está sobre os seus ombros.", category: "Messias" },
  { id: "q29", testament: "AT", ref: "Isaías 40:31", text: "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias.", category: "Força" },
  { id: "q30", testament: "AT", ref: "Isaías 41:10", text: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus.", category: "Presença" },
  { id: "q31", testament: "AT", ref: "Isaías 53:5", text: "Mas ele foi ferido pelas nossas transgressões e moído pelas nossas iniquidades.", category: "Expiação" },
  { id: "q32", testament: "AT", ref: "Isaías 55:6", text: "Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto.", category: "Busca" },
  { id: "q33", testament: "AT", ref: "Jeremias 29:11", text: "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz e não de mal.", category: "Futuro" },
  { id: "q34", testament: "AT", ref: "Jeremias 33:3", text: "Clama a mim, e responder-te-ei e anunciar-te-ei coisas grandes e firmes, que não sabes.", category: "Oração" },
  { id: "q35", testament: "AT", ref: "Lamentações 3:22", text: "As misericórdias do Senhor são a causa de não sermos consumidos; porque as suas misericórdias não têm fim.", category: "Misericórdia" },
  { id: "q36", testament: "AT", ref: "Ezequiel 36:26", text: "E dar-vos-ei um coração novo, e porei dentro de vós um espírito novo.", category: "Regeneração" },
  { id: "q37", testament: "AT", ref: "Daniel 2:44", text: "O Deus do céu levantará um reino que não será jamais destruído.", category: "Reino" },
  { id: "q38", testament: "AT", ref: "Oseias 6:3", text: "Conheçamos e prossigamos em conhecer ao Senhor.", category: "Conhecimento" },
  { id: "q39", testament: "AT", ref: "Joel 2:28", text: "E há de ser que, depois, derramarei o meu Espírito sobre toda a carne.", category: "Espírito Santo" },
  { id: "q40", testament: "AT", ref: "Amós 5:24", text: "Corra, porém, o juízo como as águas, e a justiça, como o ribeiro impetuoso.", category: "Justiça" },
  { id: "q41", testament: "AT", ref: "Miqueias 6:8", text: "O que é que o Senhor pede de ti, senão que pratiques a justiça, e ames a misericórdia, e andes humildemente com o teu Deus?", category: "Conduta" },
  { id: "q42", testament: "AT", ref: "Habacuque 2:4", text: "Mas o justo pela sua fé viverá.", category: "Fé" },
  { id: "q43", testament: "AT", ref: "Sofonias 3:17", text: "O Senhor, teu Deus, está no meio de ti, poderoso para te salvar.", category: "Salvação" },
  { id: "q44", testament: "AT", ref: "Ageu 2:9", text: "A glória desta última casa será maior do que a da primeira.", category: "Glória" },
  { id: "q45", testament: "AT", ref: "Zacarias 4:6", text: "Não por força, nem por violência, mas sim pelo meu Espírito, diz o Senhor dos Exércitos.", category: "Poder" },
  { id: "q46", testament: "AT", ref: "Malaquias 3:10", text: "Trazei todos os dízimos à casa do tesouro... e provai-me nisto, diz o Senhor.", category: "Fidelidade" },

  // NOVO TESTAMENTO
  { id: "q47", testament: "NT", ref: "Mateus 5:3", text: "Bem-aventurados os pobres de espírito, porque deles é o Reino dos céus.", category: "Bem-aventuranças" },
  { id: "q48", testament: "NT", ref: "Mateus 6:33", text: "Mas buscai primeiro o Reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.", category: "Prioridade" },
  { id: "q49", testament: "NT", ref: "Mateus 11:28", text: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.", category: "Descanso" },
  { id: "q50", testament: "NT", ref: "Mateus 16:18", text: "Pois também eu te digo que tu és Pedro e sobre esta pedra edificarei a minha igreja.", category: "Igreja" },
  { id: "q51", testament: "NT", ref: "Mateus 28:19", text: "Portanto, ide, ensinai todas as nações, batizando-as em nome do Pai, e do Filho, e do Espírito Santo.", category: "Missão" },
  { id: "q52", testament: "NT", ref: "Marcos 10:45", text: "Porque o Filho do Homem também não veio para ser servido, mas para servir e dar a sua vida em resgate de muitos.", category: "Serviço" },
  { id: "q53", testament: "NT", ref: "Marcos 16:15", text: "E disse-lhes: Ide por todo o mundo, pregai o evangelho a toda criatura.", category: "Evangelismo" },
  { id: "q54", testament: "NT", ref: "Lucas 1:37", text: "Porque para Deus nada é impossível.", category: "Poder de Deus" },
  { id: "q55", testament: "NT", ref: "Lucas 19:10", text: "Porque o Filho do Homem veio buscar e salvar o que se havia perdido.", category: "Salvação" },
  { id: "q56", testament: "NT", ref: "João 1:1", text: "No princípio, era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.", category: "Cristologia" },
  { id: "q57", testament: "NT", ref: "João 1:14", text: "E o Verbo se fez carne e habitou entre nós.", category: "Encarnação" },
  { id: "q58", testament: "NT", ref: "João 3:16", text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito...", category: "Amor" },
  { id: "q59", testament: "NT", ref: "João 8:32", text: "E conhecereis a verdade, e a verdade vos libertará.", category: "Liberdade" },
  { id: "q60", testament: "NT", ref: "João 10:10", text: "Eu vim para que tenham vida e a tenham com abundância.", category: "Vida" },
  { id: "q61", testament: "NT", ref: "João 11:25", text: "Disse-lhe Jesus: Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá.", category: "Ressurreição" },
  { id: "q62", testament: "NT", ref: "João 14:6", text: "Disse-lhe Jesus: Eu sou o caminho, e a verdade, e a vida. Ninguém vem ao Pai senão por mim.", category: "Exclusividade" },
  { id: "q63", testament: "NT", ref: "João 15:5", text: "Eu sou a videira, vós, as varas; quem está em mim, e eu nele, este dá muito fruto.", category: "Comunhão" },
  { id: "q64", testament: "NT", ref: "Atos 1:8", text: "Mas recebereis a virtude do Espírito Santo... e ser-me-eis testemunhas.", category: "Testemunho" },
  { id: "q65", testament: "NT", ref: "Atos 4:12", text: "E em nenhum outro há salvação, porque também debaixo do céu nenhum outro nome há...", category: "Salvação" },
  { id: "q66", testament: "NT", ref: "Atos 16:31", text: "Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa.", category: "Fé" },
  { id: "q67", testament: "NT", ref: "Romanos 1:16", text: "Porque não me envergonho do evangelho de Cristo, pois é o poder de Deus para salvação.", category: "Evangelho" },
  { id: "q68", testament: "NT", ref: "Romanos 3:23", text: "Porque todos pecaram e destituídos estão da glória de Deus.", category: "Pecado" },
  { id: "q69", testament: "NT", ref: "Romanos 5:8", text: "Mas Deus prova o seu amor para conosco em que Cristo morreu por nós, sendo nós ainda pecadores.", category: "Graça" },
  { id: "q70", testament: "NT", ref: "Romanos 6:23", text: "Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna.", category: "Vida Eterna" },
  { id: "q71", testament: "NT", ref: "Romanos 8:1", text: "Portanto, agora, nenhuma condenação há para os que estão em Cristo Jesus.", category: "Segurança" },
  { id: "q72", testament: "NT", ref: "Romanos 8:28", text: "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus.", category: "Providência" },
  { id: "q73", testament: "NT", ref: "Romanos 8:37", text: "Mas em todas estas coisas somos mais do que vencedores, por aquele que nos amou.", category: "Vitória" },
  { id: "q74", testament: "NT", ref: "Romanos 10:9", text: "A saber: Se, com a tua boca, confessares ao Senhor Jesus e, em teu coração, creres...", category: "Confissão" },
  { id: "q75", testament: "NT", ref: "Romanos 12:1", text: "Rogo-vos, pois, irmãos... que apresenteis o vosso corpo em sacrifício vivo, santo e agradável a Deus.", category: "Consagração" },
  { id: "q76", testament: "NT", ref: "Romanos 12:2", text: "E não vos conformeis com este mundo, mas transformai-vos pela renovação do vosso entendimento.", category: "Transformação" },
  { id: "q77", testament: "NT", ref: "1 Coríntios 1:18", text: "Porque a palavra da cruz é loucura para os que perecem; mas para nós... é o poder de Deus.", category: "Cruz" },
  { id: "q78", testament: "NT", ref: "1 Coríntios 10:13", text: "Não veio sobre vós tentação, senão humana; mas fiel é Deus, que vos não deixará tentar acima do que podeis.", category: "Tentação" },
  { id: "q79", testament: "NT", ref: "1 Coríntios 13:13", text: "Agora, pois, permanecem a fé, a esperança e o amor, estes três; mas o maior destes é o amor.", category: "Amor" },
  { id: "q80", testament: "NT", ref: "1 Coríntios 15:58", text: "Portanto, meus amados irmãos, sede firmes e constantes, sempre abundantes na obra do Senhor.", category: "Constância" },
  { id: "q81", testament: "NT", ref: "2 Coríntios 5:17", text: "Assim que, se alguém está em Cristo, nova criatura é: as coisas velhas já passaram; eis que tudo se fez novo.", category: "Nova Vida" },
  { id: "q82", testament: "NT", ref: "2 Coríntios 12:9", text: "A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza.", category: "Graça" },
  { id: "q83", testament: "NT", ref: "Gálatas 2:20", text: "Já estou crucificado com Cristo; e vivo, não mais eu, mas Cristo vive em mim.", category: "Identidade" },
  { id: "q84", testament: "NT", ref: "Gálatas 5:22", text: "Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança.", category: "Fruto do Espírito" },
  { id: "q85", testament: "NT", ref: "Efésios 2:8", text: "Porque pela graça sois salvos, por meio da fé; e isso não vem de vós; é dom de Deus.", category: "Salvação" },
  { id: "q86", testament: "NT", ref: "Efésios 6:10", text: "No demais, irmãos meus, fortalecei-vos no Senhor e na força do seu poder.", category: "Guerra Espiritual" },
  { id: "q87", testament: "NT", ref: "Filipenses 1:21", text: "Porque para mim o viver é Cristo, e o morrer é ganho.", category: "Propósito" },
  { id: "q88", testament: "NT", ref: "Filipenses 4:13", text: "Posso todas as coisas naquele que me fortalece.", category: "Força" },
  { id: "q89", testament: "NT", ref: "Colossenses 3:23", text: "E, tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor e não aos homens.", category: "Trabalho" },
  { id: "q90", testament: "NT", ref: "1 Tessalonicenses 5:17", text: "Orai sem cessar.", category: "Oração" },
  { id: "q91", testament: "NT", ref: "2 Timóteo 1:7", text: "Porque Deus não nos deu o espírito de temor, mas de fortaleza, e de amor, e de moderação.", category: "Coragem" },
  { id: "q92", testament: "NT", ref: "2 Timóteo 3:16", text: "Toda a Escritura é divinamente inspirada e proveitosa para ensinar, para redarguir, para corrigir...", category: "Escritura" },
  { id: "q93", testament: "NT", ref: "Hebreus 4:12", text: "Porque a palavra de Deus é viva, e eficaz, e mais penetrante do que qualquer espada de dois gumes.", category: "Palavra" },
  { id: "q94", testament: "NT", ref: "Hebreus 11:1", text: "Ora, a fé é o firme fundamento das coisas que se esperam e a prova das coisas que se não veem.", category: "Fé" },
  { id: "q95", testament: "NT", ref: "Hebreus 12:1", text: "Portanto, nós também... deixemos todo o embaraço e o pecado que tão de perto nos rodeia.", category: "Santidade" },
  { id: "q96", testament: "NT", ref: "Tiago 1:22", text: "E sede cumpridores da palavra e não somente ouvintes, enganando-vos a vós mesmos.", category: "Prática" },
  { id: "q97", testament: "NT", ref: "1 Pedro 5:7", text: "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.", category: "Cuidado" },
  { id: "q98", testament: "NT", ref: "1 João 1:9", text: "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados.", category: "Perdão" },
  { id: "q99", testament: "NT", ref: "1 João 4:8", text: "Aquele que não ama não conhece a Deus, porque Deus é amor.", category: "Amor" },
  { id: "q100", testament: "NT", ref: "Apocalipse 3:20", text: "Eis que estou à porta e bato; se alguém ouvir a minha voz e abrir a porta, entrarei em sua casa.", category: "Convite" }
];

export const READING_PLANS: ReadingPlan[] = [
  {
    id: "plan1",
    title: "Bíblia em 1 Ano (Cronológica)",
    description: "Leia toda a Bíblia em ordem cronológica em 365 dias",
    totalDays: 365,
    items: [
      { day: 1, ref: "Gênesis 1-3", description: "Criação" },
      { day: 2, ref: "Gênesis 4-7", description: "Caim e Abel" },
      { day: 3, ref: "Gênesis 8-11", description: "Dilúvio" },
      { day: 4, ref: "Gênesis 12-15", description: "Abraão" },
      { day: 5, ref: "Gênesis 16-19", description: "Sodoma" },
      { day: 6, ref: "Gênesis 20-23", description: "Isaque" },
      { day: 7, ref: "Gênesis 24-26", description: "Rebeca" },
      { day: 8, ref: "Gênesis 27-29", description: "Jacó" },
      { day: 9, ref: "Gênesis 30-32", description: "Labão" },
      { day: 10, ref: "Gênesis 33-36", description: "Esaú" },
      { day: 11, ref: "Gênesis 37-39", description: "José" },
      { day: 12, ref: "Gênesis 40-42", description: "Prisão" },
      { day: 13, ref: "Gênesis 43-46", description: "Egito" },
      { day: 14, ref: "Gênesis 47-50", description: "Morte de José" },
      { day: 15, ref: "Êxodo 1-4", description: "Moisés" },
      { day: 16, ref: "Êxodo 5-8", description: "Pragas" },
      { day: 17, ref: "Êxodo 9-11", description: "Páscoa" },
      { day: 18, ref: "Êxodo 12-14", description: "Mar Vermelho" },
      { day: 19, ref: "Êxodo 15-17", description: "Maná" },
      { day: 20, ref: "Êxodo 18-20", description: "Lei" },
      { day: 21, ref: "Êxodo 21-24", description: "Aliança" },
      { day: 22, ref: "Êxodo 25-27", description: "Tabernáculo" },
      { day: 23, ref: "Êxodo 28-30", description: "Sacerdotes" },
      { day: 24, ref: "Êxodo 31-34", description: "Bezerro de Ouro" },
      { day: 25, ref: "Êxodo 35-37", description: "Ofertas" },
      { day: 26, ref: "Êxodo 38-40", description: "Glória" },
      { day: 27, ref: "Levítico 1-4", description: "Sacrifícios" },
      { day: 28, ref: "Levítico 5-7", description: "Culpa" },
      { day: 29, ref: "Levítico 8-10", description: "Consagração" },
      { day: 30, ref: "Levítico 11-13", description: "Pureza" }
    ]
  },
  {
    id: "plan2",
    title: "Evangelhos em 90 Dias",
    description: "Foque nos ensinos de Jesus e dos apóstolos em apenas 3 meses.",
    totalDays: 90,
    items: [
      { day: 1, ref: "Mateus 1-4", description: "Genealogia e Início do Ministério" },
      { day: 2, ref: "Mateus 5-7", description: "O Sermão do Monte" }
    ]
  }
];

export const GLOBAL_TIMELINE_EVENTS: TimelineGlobalEvent[] = [
  // --- DISPENSAÇÕES ---
  { id: "disp1", year: "Criação", title: "Dispensação da Inocência", description: "Do Éden até a Queda. O homem em estado de pureza e comunhão direta com Deus.", category: "Biblical", bookContext: ["GEN"] },
  { id: "disp2", year: "Pós-Queda", title: "Dispensação da Consciência", description: "Da Queda até o Dilúvio. O homem guiado pela consciência moral após o conhecimento do bem e do mal.", category: "Biblical", bookContext: ["GEN"] },
  { id: "disp3", year: "Pós-Dilúvio", title: "Dispensação do Governo Humano", description: "Do Dilúvio até a Torre de Babel. Instituição da autoridade humana e responsabilidade social.", category: "Biblical", bookContext: ["GEN"] },
  { id: "disp4", year: "c. 2100 a.C.", title: "Dispensação da Promessa", description: "Do chamado de Abraão até o Êxodo. Foco na aliança abraâmica e na linhagem da promessa.", category: "Biblical", bookContext: ["GEN", "EXO"] },
  { id: "disp5", year: "c. 1446 a.C.", title: "Dispensação da Lei", description: "Do Sinai até a Cruz. O período sob a tutela da Lei de Moisés e o sistema sacrificial.", category: "Biblical", bookContext: ["EXO", "LEV", "NUM", "DEU", "JOS", "JDG", "RUT", "1SA", "2SA", "1KI", "2KI", "1CH", "2CH", "EZR", "NEH", "EST", "JOB", "PSA", "PRO", "ECC", "SNG", "ISA", "JER", "LAM", "EZE", "DAN", "HOS", "JOE", "AMO", "OBA", "JON", "MIC", "NAH", "HAB", "ZEP", "HAG", "ZEC", "MAL", "MAT", "MRK", "LUK", "JHN"] },
  { id: "disp6", year: "c. 33 d.C.", title: "Dispensação da Graça", description: "Do Pentecostes até o Arrebatamento. A era da Igreja, o mistério revelado e a habitação do Espírito.", category: "Biblical", bookContext: ["ACT", "ROM", "1CO", "2CO", "GAL", "EPH", "PHI", "COL", "1TH", "2TH", "1TI", "2TI", "TIT", "PHM", "HEB", "JAS", "1PE", "2PE", "1JO", "2JO", "3JO", "JUDE", "REV"] },
  { id: "disp7", year: "Futuro", title: "Dispensação do Reino", description: "O Milênio. Cristo reinando fisicamente na terra sobre as nações em paz e justiça.", category: "Biblical", bookContext: ["REV"] },

  // --- EVENTOS CHAVE ---
  { id: "ge1", year: "Princípio", title: "A Criação", description: "Deus cria os céus e a terra e tudo o que neles há em seis dias.", category: "Biblical", bookContext: ["GEN", "JHN"] },
  { id: "ge2", year: "Antiguidade", title: "A Queda do Homem", description: "A entrada do pecado no mundo e a primeira promessa do Redentor (Gn 3:15).", category: "Biblical", bookContext: ["GEN", "ROM"] },
  { id: "ge3", year: "c. 2500 a.C.", title: "O Dilúvio", description: "Juízo universal sobre a corrupção humana e a preservação da família de Noé.", category: "Biblical", bookContext: ["GEN", "1PE"] },
  { id: "ge4", year: "c. 2200 a.C.", title: "Torre de Babel", description: "A confusão das línguas e a dispersão das nações pela terra.", category: "Biblical", bookContext: ["GEN"] },
  { id: "ge5", year: "c. 2100 a.C.", title: "Chamado de Abraão", description: "Deus chama Abrão de Ur para Canaã, iniciando o povo de Israel.", category: "Biblical", bookContext: ["GEN", "HEB"] },
  { id: "ge6", year: "c. 1880 a.C.", title: "José no Egito", description: "A providência divina levando Israel ao Egito para preservação da vida.", category: "Biblical", bookContext: ["GEN"] },
  { id: "ge7", year: "c. 1446 a.C.", title: "O Êxodo e a Páscoa", description: "A libertação de Israel do Egito com mão forte e sinais espantosos.", category: "Biblical", bookContext: ["EXO", "PSA"] },
  { id: "ge8", year: "c. 1445 a.C.", title: "A Lei no Sinai", description: "A entrega dos Dez Mandamentos e as instruções do Tabernáculo.", category: "Biblical", bookContext: ["EXO", "LEV", "HEB"] },
  { id: "ge9", year: "c. 1405 a.C.", title: "Conquista de Canaã", description: "Israel entra na Terra Prometida sob a liderança de Josué.", category: "Biblical", bookContext: ["JOS"] },
  { id: "ge10", year: "c. 1375 a.C.", title: "Período dos Juízes", description: "Ciclos de apostasia, opressão e libertação por 300 anos.", category: "Biblical", bookContext: ["JDG", "RUT"] },
  { id: "ge11", year: "c. 1050 a.C.", title: "Início da Monarquia", description: "Saul é ungido o primeiro rei de Israel após o clamor do povo.", category: "Biblical", bookContext: ["1SA"] },
  { id: "ge12", year: "c. 1010 a.C.", title: "Reinado de Davi", description: "O homem segundo o coração de Deus estabelece o trono em Jerusalém.", category: "Biblical", bookContext: ["2SA", "1CH", "PSA"] },
  { id: "ge13", year: "c. 970 a.C.", title: "Reinado de Salomão", description: "O auge da glória de Israel e a construção do Primeiro Templo.", category: "Biblical", bookContext: ["1KI", "2CH", "PRO", "ECC", "SNG"] },
  { id: "ge14", year: "c. 931 a.C.", title: "Divisão do Reino", description: "O cisma entre Israel (Norte) e Judá (Sul) após a morte de Salomão.", category: "Biblical", bookContext: ["1KI", "2CH"] },
  { id: "ge15", year: "c. 722 a.C.", title: "Queda de Samaria", description: "O Reino do Norte é levado cativo pelo Império Assírio.", category: "Biblical", bookContext: ["2KI", "HOS", "AMO"] },
  { id: "ge16", year: "c. 605 a.C.", title: "Primeira Devoção à Babilônia", description: "Daniel e outros jovens nobres são levados para a Babilônia.", category: "Biblical", bookContext: ["DAN", "2KI"] },
  { id: "ge17", year: "c. 586 a.C.", title: "Destruição de Jerusalém", description: "O Templo é queimado e Judá é levado para o exílio babilônico.", category: "Biblical", bookContext: ["2KI", "2CH", "JER", "LAM", "EZE"] },
  { id: "ge18", year: "c. 538 a.C.", title: "Retorno do Exílio", description: "Ciro, o Persa, decreta o retorno dos judeus para reconstruir o Templo.", category: "Biblical", bookContext: ["EZR", "HAG", "ZEC"] },
  { id: "ge19", year: "c. 445 a.C.", title: "Reconstrução dos Muros", description: "Neemias lidera a restauração das defesas de Jerusalém.", category: "Biblical", bookContext: ["NEH"] },
  { id: "ge20", year: "c. 400 a.C.", title: "Silêncio Profético", description: "O fim do cânon do AT com Malaquias e o início dos 400 anos de silêncio.", category: "Biblical", bookContext: ["MAL"] },
  { id: "ge21", year: "c. 5 a.C.", title: "Nascimento do Messias", description: "Jesus nasce em Belém, cumprindo as profecias milenares.", category: "Biblical", bookContext: ["MAT", "MRK", "LUK", "JHN"] },
  { id: "ge22", year: "c. 27 d.C.", title: "Batismo e Ministério", description: "Jesus inicia Seu ministério público após ser batizado por João.", category: "Biblical", bookContext: ["MAT", "MRK", "LUK", "JHN"] },
  { id: "ge23", year: "c. 30 d.C.", title: "Morte e Ressurreição", description: "O sacrifício perfeito na cruz e a vitória sobre a morte ao terceiro dia.", category: "Biblical", bookContext: ["MAT", "MRK", "LUK", "JHN", "ACT", "ROM", "1CO", "GAL", "EPH", "PHI", "COL", "1TH", "2TH", "1TI", "2TI", "TIT", "PHM", "HEB", "JAS", "1PE", "2PE", "1JO", "2JO", "3JO", "JUDE", "REV"] },
  { id: "ge24", year: "c. 30 d.C.", title: "Pentecostes", description: "A descida do Espírito Santo e o nascimento oficial da Igreja.", category: "Biblical", bookContext: ["ACT"] },
  { id: "ge25", year: "c. 35 d.C.", title: "Conversão de Paulo", description: "O perseguidor torna-se o apóstolo dos gentios no caminho de Damasco.", category: "Biblical", bookContext: ["ACT", "GAL"] },
  { id: "ge26", year: "c. 45-65 d.C.", title: "Viagens Missionárias", description: "A expansão do Evangelho por todo o mundo romano.", category: "Biblical", bookContext: ["ACT", "ROM", "1CO", "2CO", "GAL", "EPH", "PHI", "COL", "1TH", "2TH", "1TI", "2TI", "TIT", "PHM"] },
  { id: "ge27", year: "c. 70 d.C.", title: "Destruição de Jerusalém", description: "Exércitos romanos sob Tito destroem a cidade e o Templo.", category: "Secular", bookContext: ["MAT", "MRK", "LUK", "REV"] },
  { id: "ge28", year: "c. 95 d.C.", title: "Visão em Patmos", description: "João recebe a revelação final sobre o fim dos tempos e a glória de Cristo.", category: "Biblical", bookContext: ["REV"] },
  { id: "ge29", year: "Futuro", title: "O Arrebatamento", description: "A retirada da Igreja da terra para o encontro com o Senhor nos ares.", category: "Biblical", bookContext: ["1TH", "1CO", "REV"] },
  { id: "ge30", year: "Futuro", title: "A Grande Tribulação", description: "Período de sete anos de juízo divino sobre a terra impenitente.", category: "Biblical", bookContext: ["DAN", "MAT", "REV"] },
  { id: "ge31", year: "Futuro", title: "Segunda Vinda de Cristo", description: "Jesus retorna visivelmente com Seus santos para julgar e reinar.", category: "Biblical", bookContext: ["ZEC", "MAT", "REV"] },
  { id: "ge32", year: "Futuro", title: "O Juízo Final", description: "O Grande Trono Branco, onde todos os mortos serão julgados.", category: "Biblical", bookContext: ["REV"] },
  { id: "ge33", year: "Eternidade", title: "Novos Céus e Nova Terra", description: "O estado eterno de perfeição onde Deus habita com Seu povo para sempre.", category: "Biblical", bookContext: ["ISA", "2PE", "REV"] },
  { id: "ge34", year: "Promessa", title: "Protoevangelho", description: "A promessa da semente que esmagaria a cabeça da serpente (Gn 3:15).", category: "Biblical", bookContext: ["GEN", "ROM", "GAL", "REV"] },
  { id: "ge35", year: "c. 2000 a.C.", title: "Melquisedeque", description: "O misterioso Rei de Salém e Sacerdote de Deus Altíssimo.", category: "Biblical", bookContext: ["GEN", "PSA", "HEB"] },
  { id: "ge36", year: "c. 1445 a.C.", title: "Moisés e a Sarça", description: "A revelação do Nome de Deus (Eu Sou) no Monte Sinai.", category: "Biblical", bookContext: ["EXO", "ACT", "HEB"] },
  { id: "ge37", year: "c. 1000 a.C.", title: "Aliança Davídica", description: "A promessa de um trono eterno para a descendência de Davi.", category: "Biblical", bookContext: ["2SA", "1CH", "PSA", "ISA", "JER", "EZE", "LUK", "ACT"] },
  { id: "ge38", year: "c. 850 a.C.", title: "Ministério de Elias", description: "O combate à idolatria de Baal e a vitória no Monte Carmelo.", category: "Biblical", bookContext: ["1KI", "2KI", "MAL", "MAT", "LUK", "ROM", "JAS"] },
  { id: "ge39", year: "c. 700 a.C.", title: "Senaqueribe e Judá", description: "O livramento miraculoso de Jerusalém do cerco assírio.", category: "Biblical", bookContext: ["2KI", "2CH", "ISA", "MIC"] },
  { id: "ge40", year: "c. 520 a.C.", title: "Glória do Segundo Templo", description: "A profecia de que a glória da última casa seria maior.", category: "Biblical", bookContext: ["EZR", "HAG", "ZEC"] },
  { id: "ge41", year: "c. 2 d.C.", title: "Jesus no Templo", description: "Aos 12 anos, Jesus discute com os doutores da Lei.", category: "Biblical", bookContext: ["LUK"] },
  { id: "ge42", year: "c. 30 d.C.", title: "A Transfiguração", description: "Revelação da glória de Cristo diante de Pedro, Tiago e João.", category: "Biblical", bookContext: ["MAT", "MRK", "LUK", "2PE"] },
  { id: "ge43", year: "c. 34 d.C.", title: "Martírio de Estêvão", description: "O primeiro mártir cristão e a dispersão da igreja.", category: "Biblical", bookContext: ["ACT"] },
  { id: "ge44", year: "c. 50 d.C.", title: "Concílio de Jerusalém", description: "A decisão apostólica sobre a liberdade dos gentios frente à Lei.", category: "Biblical", bookContext: ["ACT", "GAL"] },
  { id: "ge45", year: "Futuro", title: "Bodas do Cordeiro", description: "A união final entre Cristo e Sua Noiva, a Igreja.", category: "Biblical", bookContext: ["SNG", "MAT", "EPH", "REV"] }
];

export const DEVOTIONALS: DevotionalReflection[] = [
  {
    id: "dev1",
    title: "O Silêncio de Deus e a Esperança",
    content: "Muitas vezes interpretamos o silêncio de Deus como ausência ou indiferença. No entanto, o silêncio é frequentemente o solo onde a fé profunda é cultivada. No período intertestamental, Deus parecia calado, mas estava movendo impérios para preparar a vinda do Messias. Se você está em um 'período de silêncio', saiba que Deus está trabalhando nos bastidores da sua história.",
    ref: "Salmo 13:1 / Habacuque 2:3",
    prayer: "Senhor, ajuda-me a confiar em Tua mão mesmo quando não ouço Tua voz. Que minha esperança esteja firmada em Teu caráter, não em minhas circunstâncias."
  },
  {
    id: "dev2",
    title: "A Videira Verdadeira e a Dependência",
    content: "Um ramo não tenta produzir fruto; ele simplesmente permanece na videira e o fruto acontece. Nossa maior luta na vida cristã não deve ser 'fazer' mais para Deus, mas 'permanecer' mais em Cristo. Separados d'Ele, nossa atividade religiosa é apenas palha. A seiva da vida espiritual flui através da comunhão diária e da dependência humilde.",
    ref: "João 15:5",
    prayer: "Jesus, perdoa-me por tentar viver por minhas próprias forças. Ensina-me a descansar em Ti e a permitir que Tua vida flua através de mim hoje."
  },
  {
    id: "dev3",
    title: "O Bom Pastor e o Vale",
    content: "O Salmo 23 não promete a ausência do 'vale da sombra da morte', mas a presença do Pastor no vale. O cajado e o bordão não são para nos punir, mas para nos guiar e proteger. A segurança da ovelha não depende da sua própria força, mas da vigilância e do amor do Pastor que deu Sua vida por nós.",
    ref: "Salmo 23:4 / João 10:11",
    prayer: "Bom Pastor, guia meus passos hoje. Que eu não tema o mal, pois Tu estás comigo. Que Tua presença seja meu maior conforto em meio às incertezas."
  },
  {
    id: "dev4",
    title: "A Luz do Mundo e o Testemunho",
    content: "Uma lâmpada não brilha para si mesma, mas para iluminar o ambiente. Jesus nos chamou de 'luz do mundo' não para que fôssemos admirados, mas para que nossas boas obras glorificassem ao Pai. O brilho do cristão vem da reflexão da glória de Cristo. Quanto mais próximos d'Ele estamos, mais intensamente iluminamos as trevas ao nosso redor.",
    ref: "Mateus 5:14-16",
    prayer: "Senhor, que eu seja um reflexo fiel de Tua luz hoje. Que minhas palavras e ações apontem para Ti e tragam clareza onde houver confusão."
  },
  {
    id: "dev5",
    title: "O Descanso em Meio à Tempestade",
    content: "Jesus dormia no barco durante a tempestade não por indiferença, mas por confiança absoluta no Pai. Muitas vezes nossas tempestades internas são maiores que as externas. O convite de Cristo é para trocarmos nossa ansiedade pela Sua paz, que excede todo entendimento. O barco pode balançar, mas com o Mestre a bordo, o destino é seguro.",
    ref: "Marcos 4:35-41 / Filipenses 4:6-7",
    prayer: "Príncipe da Paz, acalma meu coração agitado. Ajuda-me a descansar em Tua soberania mesmo quando as ondas parecem altas demais. Eu confio em Ti."
  }
];
export const TIMELINE_EVENTS: TimelineEvent[] = [];
export const THEMATIC_PRAYERS: ThematicPrayer[] = [];
export const DISPENSATIONS_DETAILED: DetailedDispensation[] = [];
