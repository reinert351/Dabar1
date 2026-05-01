export interface RevivalEvent {
  id: string;
  title: string;
  period: string;
  context?: string;
  description?: string;
  actions: string[];
  leaders: string[];
  marks: string[];
  criticalPoint?: string;
  insight?: string;
  scripture?: string;
  color: string;
  imageUrl?: string;
}

export interface RevivalCategory {
  id: string;
  title: string;
  events: RevivalEvent[];
}

export const revivalsData: RevivalCategory[] = [
  {
    id: "ot",
    title: "1. AVIVAMENTOS NOS REIS (ANTIGO TESTAMENTO)",
    events: [
      {
        id: "asa",
        title: "ASA",
        period: "c. 911–870 a.C.",
        scripture: "2Cr 14–16",
        context: "Judá mergulhado em idolatria profunda, com forte influência dos povos pagãos ao redor e altares a deuses estranhos espalhados pelo território.",
        description: "O rei Asa iniciou um movimento de purificação radical. Ele não apenas destruiu os ídolos, mas depôs sua própria avó (Maaca) da posição de rainha-mãe por causa da idolatria. O povo foi convocado a renovar a aliança com Deus sob juramento e grande júbilo.",
        actions: [
          "Removeu altares pagãos e despedaçou as estátuas",
          "Restaurou o altar do Senhor e o culto verdadeiro",
          "Convocou todo o povo a buscar a Deus de todo o coração"
        ],
        leaders: ["Rei Asa", "Profeta Azarias"],
        marks: ["Busca intensa e coletiva a Deus", "Paz sobrenatural e descanso nas fronteiras por muitos anos"],
        criticalPoint: "No final de sua vida, Asa confiou em alianças humanas (com a Síria) em vez de confiar no Senhor, e prendeu o profeta que o repreendeu.",
        color: "amber",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/King_Asa_destroying_the_idols.jpg/800px-King_Asa_destroying_the_idols.jpg"
      },
      {
        id: "josafa",
        title: "JOSAFÁ",
        period: "c. 870–848 a.C.",
        scripture: "2Cr 17–20",
        context: "A nação precisava de consolidação espiritual e enfrentava ameaças de uma vasta coalizão inimiga (moabitas, amonitas e meunitas).",
        description: "Josafá promoveu o primeiro 'programa nacional de educação bíblica', enviando príncipes, sacerdotes e levitas por todas as cidades de Judá para ensinar o Livro da Lei. Quando a guerra ameaçou a nação, ele não buscou armas primeiro, mas convocou um jejum nacional.",
        actions: [
          "Primeiro 'ensino bíblico nacional' itinerante",
          "Estabelecimento de juízes justos em todas as cidades",
          "Colocou o coral à frente do exército para louvar antes da batalha"
        ],
        leaders: ["Josafá", "Levitas itinerantes", "Profeta Jaaziel"],
        marks: ["Ensino profundo da Lei", "Jejum nacional em tempo de crise", "O louvor como arma de guerra (cap. 20)"],
        insight: "O avivamento de Josafá nos ensina que o ensino da Palavra prepara o coração do povo para confiar em Deus nos dias de angústia.",
        color: "blue",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Jehoshaphat.jpg/800px-Jehoshaphat.jpg"
      },
      {
        id: "joas",
        title: "JOÁS",
        period: "c. 835–796 a.C.",
        scripture: "2Rs 12 / 2Cr 24",
        context: "O templo estava em ruínas após o reinado usurpador e idólatra de Atalia, que havia promovido o culto a Baal em Judá.",
        description: "Joás, que foi escondido no templo quando bebê, liderou uma campanha de arrecadação de fundos para restaurar a Casa do Senhor. O povo contribuiu com alegria e o templo foi consertado.",
        actions: [
          "Reforma estrutural e espiritual do Templo",
          "Restauração dos utensílios sagrados",
          "Destruição do templo de Baal e morte de seu sacerdote"
        ],
        leaders: ["Joás", "Jeoiada (Sumo Sacerdote)"],
        marks: ["Zelo pela Casa de Deus", "Generosidade voluntária do povo"],
        criticalPoint: "Avivamento dependente de um mentor. Quando o sacerdote Jeoiada morre, Joás cede à pressão dos príncipes, abandona a Deus e chega a assassinar o filho de Jeoiada (Zacarias).",
        color: "emerald",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Joash_King_of_Judah.jpg/800px-Joash_King_of_Judah.jpg"
      },
      {
        id: "ezequias",
        title: "EZEQUIAS",
        period: "c. 715–686 a.C.",
        scripture: "2Cr 29–31",
        context: "Seu pai, Acaz, havia fechado as portas do Templo e espalhado altares pagãos por todas as esquinas de Jerusalém.",
        description: "No primeiro mês de seu reinado, Ezequias abriu e purificou o Templo. Ele convocou não apenas Judá, mas o remanescente de Israel (Norte) para celebrar a maior Páscoa desde os dias de Salomão. O avivamento foi tão intenso que a festa foi prolongada por mais sete dias.",
        actions: [
          "Purificação e reabertura do templo em tempo recorde",
          "Restauração do louvor davídico e da adoração",
          "Celebração massiva da Páscoa, unindo o povo"
        ],
        leaders: ["Ezequias", "Profeta Isaías"],
        marks: ["Alegria espiritual coletiva indescritível", "Unidade nacional e quebra de barreiras", "Livramento milagroso contra o império da Assíria"],
        insight: "O avivamento de Ezequias quebrou até mesmo as relíquias do passado: ele destruiu a serpente de bronze de Moisés (Neustã) porque o povo a idolatrava.",
        color: "purple",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Hezekiah.jpg/800px-Hezekiah.jpg"
      },
      {
        id: "josias",
        title: "JOSIAS",
        period: "c. 640–609 a.C.",
        scripture: "2Rs 22–23",
        context: "Após os reinados perversos de Manassés e Amom, a nação estava afundada em feitiçaria, derramamento de sangue inocente e idolatria extrema.",
        description: "Durante uma reforma no Templo, o Livro da Lei foi encontrado. Ao ouvir a Palavra, Josias rasgou suas vestes em profundo arrependimento. Ele liderou a purificação mais radical da história de Judá, destruindo altares, postes-ídolos e até desenterrando ossos de falsos sacerdotes.",
        actions: [
          "Redescoberta e leitura pública do Livro da Lei",
          "Arrependimento e choro diante de Deus",
          "Destruição radical e implacável de toda idolatria, até em Betel"
        ],
        leaders: ["Josias", "Hilquias (sacerdote)", "Hulda (profetisa)"],
        marks: ["Arrependimento profundo e rasgar de corações", "Zelo inegociável pela pureza do culto"],
        insight: "Avivamento genuíno sempre começa com a Palavra de Deus sendo restaurada ao seu lugar de autoridade suprema.",
        color: "rose",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Josiah_hearing_the_book_of_the_law.jpg/800px-Josiah_hearing_the_book_of_the_law.jpg"
      }
    ]
  },
  {
    id: "post-exile",
    title: "2. PÓS-EXÍLIO",
    events: [
      {
        id: "esdras-neemias",
        title: "ESDRAS & NEEMIAS",
        period: "c. 450 a.C.",
        scripture: "Neemias 8",
        context: "O povo havia retornado do cativeiro babilônico. Os muros de Jerusalém haviam sido reconstruídos, mas o povo precisava de reconstrução interior e identidade espiritual.",
        description: "Todo o povo se reuniu como um só homem na praça. Esdras leu a Lei desde a alva até o meio-dia. Os levitas traduziam e explicavam o sentido para que todos entendessem. O impacto da Palavra gerou choro coletivo, confissão de pecados e uma nova aliança por escrito com Deus.",
        actions: [
          "Leitura pública e reverente da Palavra",
          "Explicação clara (o nascimento da exposição bíblica)",
          "Separação dos povos pagãos e renovação da aliança"
        ],
        leaders: ["Esdras (o escriba/sacerdote)", "Neemias (o governador)"],
        marks: ["Fome pela Palavra (ficaram em pé por horas)", "Choro coletivo de arrependimento", "Mudança prática de comportamento e restituição"],
        color: "sky",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ezra_reading_the_law.jpg/800px-Ezra_reading_the_law.jpg"
      }
    ]
  },
  {
    id: "nt",
    title: "3. NOVO TESTAMENTO",
    events: [
      {
        id: "joao-batista",
        title: "JOÃO BATISTA",
        period: "Séc. I",
        scripture: "Mateus 3",
        context: "400 anos de silêncio profético. A religião havia se tornado um sistema político e legalista nas mãos dos fariseus e saduceus.",
        description: "Uma voz clamando no deserto. João não fez nenhum milagre, mas sua pregação confrontadora atraiu multidões de Jerusalém e de toda a Judeia. Ele exigia frutos dignos de arrependimento, preparando o caminho para o Messias.",
        actions: [
          "Pregação dura contra o pecado e a hipocrisia religiosa",
          "Batismo de arrependimento no rio Jordão",
          "Preparação do coração do povo para receber a Cristo"
        ],
        leaders: ["João Batista"],
        marks: ["Avivamento focado inteiramente no arrependimento", "Confronto direto com a religiosidade vazia"],
        color: "orange",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/John_the_Baptist_in_the_Wilderness_-_Geertgen_tot_Sint_Jans.jpg/800px-John_the_Baptist_in_the_Wilderness_-_Geertgen_tot_Sint_Jans.jpg"
      },
      {
        id: "pentecostes",
        title: "PENTECOSTES",
        period: "30 d.C.",
        scripture: "Atos 2",
        context: "Os discípulos estavam reunidos em Jerusalém, aguardando a promessa do Pai após a ascensão de Jesus, em um ambiente de oração unânime.",
        description: "O derramamento do Espírito Santo com som de vento impetuoso e línguas de fogo. Pedro, antes medroso, prega com ousadia e 3.000 pessoas são salvas em um único dia. O nascimento da Igreja, marcada por poder, comunhão e temor a Deus.",
        actions: [
          "Oração perseverante no cenáculo (10 dias)",
          "Pregação cristocêntrica e cheia do Espírito",
          "Expansão global inicial através dos peregrinos presentes"
        ],
        leaders: ["Pedro", "Os 12 Apóstolos", "Os 120 no cenáculo"],
        marks: ["Falar em línguas e manifestações de poder", "Conversões em massa e batismos", "Comunhão intensa, partilha de bens e milagres diários"],
        color: "red",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/El_Greco_-_Pentecost%C3%A9s_-_Google_Art_Project.jpg/800px-El_Greco_-_Pentecost%C3%A9s_-_Google_Art_Project.jpg"
      }
    ]
  },
  {
    id: "early-church",
    title: "4. IGREJA ANTIGA",
    events: [
      {
        id: "apostolic",
        title: "AVIVAMENTO APOSTÓLICO E PATRÍSTICO",
        period: "30–300 d.C.",
        context: "O Império Romano exigia adoração ao imperador. O cristianismo era uma seita ilegal, perseguida brutalmente sob imperadores como Nero, Décio e Diocleciano.",
        description: "Apesar das perseguições, a Igreja crescia exponencialmente. O sangue dos mártires tornou-se a semente da Igreja. Os Pais da Igreja defenderam a fé contra heresias gnósticas e pagãs, mantendo a pureza do Evangelho.",
        actions: [
          "Evangelismo relacional e testemunho de vida",
          "Defesa apologética da fé (Justino Mártir, Irineu)",
          "Cuidado com os pobres, órfãos e viúvas (amor prático)"
        ],
        leaders: ["Apóstolos", "Policarpo", "Inácio", "Irineu", "Tertuliano"],
        marks: ["Martírio encarado com alegria", "Santidade inegociável", "Crescimento explosivo mesmo sob ameaça de morte"],
        color: "indigo",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Christian_Dirce.jpg/800px-Christian_Dirce.jpg"
      }
    ]
  },
  {
    id: "middle-ages",
    title: "5. IDADE MÉDIA",
    events: [
      {
        id: "monastic",
        title: "MOVIMENTO MONÁSTICO",
        period: "300–600 d.C.",
        context: "Com a oficialização do cristianismo por Constantino, a Igreja começou a se mundanizar e perder seu fervor. A fé tornou-se conveniente.",
        description: "Homens e mulheres fugiram para os desertos (Padres do Deserto) buscando uma vida radical com Deus, longe da corrupção de Roma. Mais tarde, formaram comunidades de oração, trabalho e cópia das Escrituras.",
        actions: [
          "Separação radical do sistema mundano",
          "Votos de pobreza, castidade e obediência",
          "Preservação da Bíblia e da cultura através da cópia de manuscritos"
        ],
        leaders: ["Antão (o Grande)", "Basílio", "Bento de Núrsia"],
        marks: ["Oração contínua (Liturgia das Horas)", "Disciplina espiritual extrema", "Preservação da luz na 'Idade das Trevas'"],
        color: "stone"
      },
      {
        id: "franciscans",
        title: "FRANCISCANOS E MENDICANTES",
        period: "Séc. XIII",
        context: "A Igreja institucional era rica, poderosa e distante do povo comum. O clero vivia em luxo enquanto a população sofria.",
        description: "Francisco de Assis renunciou à sua riqueza e iniciou um movimento de retorno à simplicidade do Evangelho. Pregavam nas ruas, cuidavam dos leprosos e viviam da providência divina, trazendo um avivamento de amor e humildade.",
        actions: [
          "Renúncia total de bens materiais",
          "Pregação popular nas praças e ruas",
          "Cuidado direto com os marginalizados"
        ],
        leaders: ["Francisco de Assis", "Domingos de Gusmão"],
        marks: ["Simplicidade extrema", "Alegria no sofrimento", "Amor profundo pela criação e pelo próximo"],
        color: "amber"
      }
    ]
  },
  {
    id: "pre-reformation",
    title: "6. PRÉ-REFORMA",
    events: [
      {
        id: "wycliffe-hus",
        title: "ESTRELAS DA MANHÃ DA REFORMA",
        period: "1320–1415",
        context: "A Igreja estava mergulhada em corrupção, venda de indulgências e o povo não tinha acesso à Bíblia em sua própria língua.",
        description: "John Wycliffe (Inglaterra) traduziu a Bíblia para o inglês e atacou a autoridade papal. Seus ensinos influenciaram Jan Hus (Boêmia), que pregou fervorosamente contra os abusos do clero e defendeu que Cristo, não o Papa, é o cabeça da Igreja.",
        actions: [
          "Tradução da Bíblia para a língua do povo",
          "Pregação ousada contra a corrupção clerical",
          "Defesa da autoridade suprema das Escrituras"
        ],
        leaders: ["John Wycliffe", "Jan Hus", "Jerônimo de Praga"],
        marks: ["Acesso à Palavra", "Despertamento nacional na Boêmia", "Martírio (Hus foi queimado vivo na fogueira em 1415)"],
        color: "orange"
      }
    ]
  },
  {
    id: "reformation",
    title: "7. REFORMA PROTESTANTE",
    events: [
      {
        id: "reformers",
        title: "A GRANDE REFORMA",
        period: "Séc. XVI (1517+)",
        context: "A venda de indulgências (perdão de pecados por dinheiro) e o distanciamento total do Evangelho bíblico da graça.",
        description: "O monge Martinho Lutero afixou suas 95 Teses, iniciando um terremoto teológico que mudou o mundo. O movimento redescobriu a justificação pela fé, traduziu a Bíblia para o alemão e francês, e reformou o culto para que a congregação pudesse participar e cantar.",
        actions: [
          "Tradução e impressão em massa da Bíblia (Prensa de Gutenberg)",
          "Reforma litúrgica e teológica profunda",
          "Estabelecimento das 5 Solas (Sola Scriptura, Sola Fide, Sola Gratia, Solus Christus, Soli Deo Gloria)"
        ],
        leaders: ["Martinho Lutero", "João Calvino", "Ulrico Zwinglio", "John Knox"],
        marks: ["Justificação somente pela fé", "A Bíblia acessível ao povo comum", "Transformação social, educacional e política da Europa"],
        color: "blue"
      }
    ]
  },
  {
    id: "early-modern",
    title: "8. AVIVAMENTOS MODERNOS INICIAIS",
    events: [
      {
        id: "moravians",
        title: "OS MORÁVIOS (HERRNHUT)",
        period: "1727",
        context: "Refugiados religiosos de várias vertentes viviam nas terras do Conde Zinzendorf, mas havia muita divisão e amargura entre eles.",
        description: "Durante um culto de comunhão em 13 de agosto de 1727, o Espírito Santo caiu sobre eles com um poder unificador. Eles iniciaram uma vigília de oração ininterrupta que durou 100 anos. Desse fogo de oração, nasceu o maior movimento missionário protestante, enviando centenas de missionários aos lugares mais difíceis da terra.",
        actions: [
          "Oração 24 horas por dia, 7 dias por semana (por 100 anos)",
          "Missões transculturais radicais (alguns se venderam como escravos para pregar)",
          "Foco absoluto no 'Cordeiro que foi morto'"
        ],
        leaders: ["Conde Nicolau Zinzendorf", "Christian David"],
        marks: ["Unidade sobrenatural", "Zelo missionário incomparável", "Impacto direto na conversão de John Wesley"],
        color: "rose"
      },
      {
        id: "first-awakening",
        title: "PRIMEIRO GRANDE DESPERTAMENTO",
        period: "1730–1740",
        context: "As colônias americanas e a Inglaterra enfrentavam um declínio moral e uma ortodoxia morta (religião formal sem vida).",
        description: "George Whitefield pregava ao ar livre para dezenas de milhares. Jonathan Edwards pregou o famoso sermão 'Pecadores nas Mãos de um Deus Irado'. John Wesley cavalgou milhares de milhas pregando o novo nascimento. O impacto transformou a sociedade inglesa e unificou as colônias americanas antes da revolução.",
        actions: [
          "Pregação evangelística ao ar livre (fora das igrejas)",
          "Apelo urgente ao 'novo nascimento' e conversão pessoal",
          "Organização de pequenos grupos (classes metodistas)"
        ],
        leaders: ["Jonathan Edwards", "George Whitefield", "John Wesley", "Charles Wesley"],
        marks: ["Conversões em massa", "Profunda convicção de pecado e choro", "Impacto social profundo (hospitais, orfanatos, abolição)"],
        color: "amber"
      },
      {
        id: "second-awakening",
        title: "SEGUNDO GRANDE DESPERTAMENTO",
        period: "1800–1830",
        context: "A expansão para o oeste americano levou muitos a uma vida sem lei e sem religião nas fronteiras.",
        description: "Marcado pelos 'Camp Meetings' (reuniões de acampamento) como o de Cane Ridge (1801), onde milhares se reuniam na floresta por dias. Charles Finney introduziu 'novas medidas' (como o banco dos ansiosos) para promover decisões por Cristo.",
        actions: [
          "Camp meetings (cultos ao ar livre de vários dias)",
          "Apelos evangelísticos fervorosos e diretos",
          "Forte ênfase no livre-arbítrio e na responsabilidade humana"
        ],
        leaders: ["Charles Finney", "Barton Stone", "Lyman Beecher"],
        marks: ["Manifestações físicas (choro, tremores, quedas)", "Reforma social massiva (Abolicionismo, temperança)", "Expansão explosiva de batistas e metodistas"],
        color: "emerald"
      }
    ]
  },
  {
    id: "powerful-revivals",
    title: "9. AVIVAMENTOS PODEROSOS (SÉC. XX)",
    events: [
      {
        id: "wales",
        title: "AVIVAMENTO DO PAÍS DE GALES",
        period: "1904–1905",
        context: "As igrejas galesas estavam esfriando e a juventude se afastando, mergulhada em vícios e apatia.",
        description: "Um jovem mineiro de 26 anos, Evan Roberts, começou a pregar uma mensagem simples de 4 pontos: confessar todo pecado, remover hábitos duvidosos, obedecer prontamente ao Espírito e confessar Cristo publicamente. O fogo se espalhou: mais de 100.000 pessoas se converteram em poucos meses.",
        actions: [
          "Oração fervorosa e choro agonizante por almas",
          "Confissão pública de pecados",
          "Cultos liderados espontaneamente pelo Espírito, sem liturgia rígida"
        ],
        leaders: ["Evan Roberts"],
        marks: [
          "Convicção de pecado esmagadora",
          "Transformação social absoluta: bares faliram, delegacias ficaram vazias, juízes não tinham casos para julgar",
          "Até os cavalos das minas pararam de entender as ordens, pois os mineiros pararam de xingar"
        ],
        color: "green"
      },
      {
        id: "azusa",
        title: "AVIVAMENTO DA RUA AZUSA",
        period: "1906–1909",
        context: "Uma fome crescente pelo 'batismo no Espírito Santo' e a restauração dos dons apostólicos, em uma América profundamente segregada racialmente.",
        description: "Liderado por um pregador negro e cego de um olho, William Seymour, em um galpão abandonado em Los Angeles. O fogo caiu com evidência de falar em línguas, curas e adoração ininterrupta por três anos. De Azusa, missionários se espalharam pelo mundo, dando origem ao movimento pentecostal global.",
        actions: [
          "Busca incessante pelo batismo no Espírito Santo",
          "Cultos diários que duravam o dia e a noite toda",
          "Quebra radical de barreiras raciais e sociais"
        ],
        leaders: ["William J. Seymour", "Charles Parham (influência inicial)"],
        marks: [
          "Restauração dos dons espirituais (línguas, profecia, cura)",
          "A linha de cor foi lavada pelo sangue (negros, brancos, latinos adorando juntos)",
          "Início do maior movimento cristão do século XX (Pentecostalismo)"
        ],
        color: "yellow"
      }
    ]
  },
  {
    id: "twentieth-century",
    title: "10. MOVIMENTOS DE CURA E RENOVAÇÃO",
    events: [
      {
        id: "healing",
        title: "AVIVAMENTO DE CURA DIVINA",
        period: "1940–1950",
        context: "Pós-Segunda Guerra Mundial, uma geração precisava de esperança e demonstrações visíveis do poder de Deus.",
        description: "Grandes tendas de lona viajavam pelos EUA reunindo milhares. Pregadores enfatizavam a fé para a cura física e libertação. O movimento trouxe a cura divina de volta ao centro do evangelismo de massa.",
        actions: [
          "Cruzadas de cura em tendas gigantes",
          "Evangelismo de massa focado em milagres",
          "Uso do rádio e da televisão para espalhar a mensagem"
        ],
        leaders: ["William Branham", "Oral Roberts", "Jack Coe", "A.A. Allen", "Gordon Lindsay"],
        marks: ["Milagres notórios e documentados", "Fé audaciosa para cura física", "Crescimento do evangelismo independente"],
        color: "cyan"
      },
      {
        id: "charismatic",
        title: "MOVIMENTO CARISMÁTICO E JESUS MOVEMENT",
        period: "1960–1980",
        context: "A contracultura dos anos 60 (hippies) buscava sentido, enquanto igrejas tradicionais enfrentavam declínio e formalismo.",
        description: "O Espírito Santo começou a ser derramado dentro de denominações históricas (Episcopais, Católicos, Batistas). Simultaneamente, o 'Jesus Movement' varreu a juventude hippie, trazendo milhares de jovens cabeludos e descalços para Cristo, batizando-os no oceano.",
        actions: [
          "Renovação espiritual em denominações históricas",
          "Evangelismo de rua e cafés cristãos",
          "Surgimento da música cristã contemporânea (adoração moderna)"
        ],
        leaders: ["Dennis Bennett", "Chuck Smith", "Lonnie Frisbee"],
        marks: [
          "Dons espirituais em igrejas tradicionais",
          "Adoração contemporânea e informal",
          "Batismos em massa nas praias da Califórnia"
        ],
        color: "violet"
      }
    ]
  },
  {
    id: "current",
    title: "11. AVIVAMENTOS GLOBAIS ATUAIS",
    events: [
      {
        id: "south-korea",
        title: "COREIA DO SUL",
        period: "Séc. XX - Atual",
        context: "Uma nação devastada pela Guerra da Coreia, buscando esperança e reconstrução.",
        description: "Marcado por uma disciplina de oração inigualável. As igrejas coreanas popularizaram a oração de madrugada (Dawn Prayer) e o Monte de Oração. A Igreja do Evangelho Pleno de Yoido tornou-se a maior congregação do mundo através do sistema de células.",
        actions: [
          "Oração de madrugada diária",
          "Sistema de grupos familiares (células)",
          "Jejuns prolongados e retiros de oração em montanhas"
        ],
        leaders: ["David Yonggi Cho", "Vários pastores coreanos"],
        marks: ["Igrejas gigantescas (megachurches)", "Fervor inabalável na oração", "Envio massivo de missionários"],
        color: "blue"
      },
      {
        id: "china",
        title: "CHINA (IGREJA SUBTERRÂNEA)",
        period: "1970 - Atual",
        context: "Sob o regime comunista e a Revolução Cultural, a igreja oficial foi fechada, Bíblias foram queimadas e pastores presos ou mortos.",
        description: "Longe dos olhos do governo, a Igreja Subterrânea (House Churches) experimentou um crescimento explosivo. Sem templos, sem seminários e sob constante ameaça de prisão, o Espírito Santo operou milagres, curas e conversões aos milhões.",
        actions: [
          "Reuniões secretas em casas e cavernas",
          "Evangelismo relacional de alto risco",
          "Memorização das Escrituras (devido à escassez de Bíblias)"
        ],
        leaders: ["Líderes anônimos", "Irmão Yun (O Homem do Céu)"],
        marks: ["Crescimento explosivo (de 1 milhão para mais de 100 milhões)", "Resiliência e alegria sob perseguição severa", "Milagres apostólicos diários"],
        color: "red"
      },
      {
        id: "africa",
        title: "ÁFRICA",
        period: "Atual",
        context: "Um continente marcado por desafios socioeconômicos, mas com uma profunda abertura espiritual.",
        description: "O centro de gravidade do cristianismo mudou para o Sul Global. Cruzadas evangelísticas na África reúnem milhões de pessoas em um único evento. O evangelho avança com demonstrações de poder contra a feitiçaria e religiões tradicionais.",
        actions: [
          "Cruzadas evangelísticas massivas ao ar livre",
          "Plantação agressiva de igrejas",
          "Confronto direto de poder espiritual (libertação)"
        ],
        leaders: ["Reinhard Bonnke", "Benson Idahosa", "Enoch Adeboye"],
        marks: ["Milhões de decisões por Cristo em eventos únicos", "Milagres de cura e libertação", "A África tornando-se o continente mais cristão do mundo"],
        color: "orange"
      },
      {
        id: "latin-america",
        title: "BRASIL / AMÉRICA LATINA",
        period: "Atual",
        context: "Historicamente dominada pelo catolicismo nominal, a região experimentou uma explosão evangélica nas últimas décadas.",
        description: "O Brasil tornou-se uma potência pentecostal. O avivamento é caracterizado por cultos vibrantes, forte ênfase na presença do Espírito Santo, adoração apaixonada e uma rápida expansão em todas as camadas sociais, desde favelas até a elite.",
        actions: [
          "Evangelismo em massa e mídia (rádio/TV/Internet)",
          "Plantação de igrejas em cada esquina",
          "Movimentos de adoração e conferências massivas"
        ],
        leaders: ["Vários líderes e movimentos denominacionais"],
        marks: ["Pentecostalismo forte e vibrante", "Crescimento rápido e impacto cultural/político", "Brasil como um dos maiores celeiros de missionários do mundo"],
        color: "emerald"
      }
    ]
  }
];

export const finalRevelation = {
  summary: [
    "A Palavra de Deus restaurada ao centro",
    "Oração intensa, agonizante e perseverante",
    "Arrependimento profundo e confissão de pecados",
    "Manifestação tangível da Presença de Deus",
    "Impacto social e transformação da cultura ao redor"
  ],
  throneLevel: [
    "Desde o Rei Asa até os dias de hoje… Deus nunca parou de avivar a Sua Igreja.",
    "O padrão divino é imutável: QUANDO O POVO VOLTA PARA DEUS → DEUS DESCE PARA O POVO.",
    "Tiago 4:8 - 'Chegai-vos a Deus, e ele se chegará a vós.'",
    "O avivamento não é algo que fabricamos, é o resultado de corações que se preparam para hospedar a glória de Deus."
  ]
};
