const fs = require('fs');

const newPericopes = [
  {
    id: 'hos_6_1_6',
    bookId: 'HOS',
    chapter: 6,
    startVerse: 1,
    endVerse: 6,
    title: 'Misericórdia, e Não Sacrifício',
    theme: 'Arrependimento Superficial, o Conhecimento de Deus e o Amor Verdadeiro',
    introduction: 'O livro de Oseias é um retrato dramático do amor de Deus por um povo infiel. No capítulo 6, o povo de Israel parece demonstrar arrependimento, dizendo: "Vinde, e tornemos ao Senhor". Eles acreditam que Deus os curará rapidamente. No entanto, a resposta de Deus revela que o arrependimento deles era superficial, passageiro como o orvalho da manhã. Deus não está interessado em rituais religiosos vazios ou em confissões rápidas que não mudam o coração. Ele exige um amor leal e um conhecimento profundo de quem Ele é, culminando na famosa declaração que Jesus citaria mais tarde: "Misericórdia quero, e não sacrifício".',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Arrependimento Superficial',
        description: 'O povo convida uns aos outros a voltar para Deus, confiando que Ele os curará e os ressuscitará "ao terceiro dia". Eles dizem: "Conheçamos, e prossigamos em conhecer ao Senhor". Embora as palavras soem piedosas, o contexto mostra que eles tratavam o perdão de Deus como algo automático e garantido, sem um verdadeiro quebrantamento.'
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Frustração Divina',
        description: 'Deus expressa a Sua frustração: "Que te farei, ó Efraim? Que te farei, ó Judá?". O amor (ou bondade) deles é comparado à nuvem da manhã e ao orvalho que cedo passa. Por causa dessa inconstância, Deus enviou os profetas para "abatê-los" com as palavras da Sua boca, trazendo juízo.'
      },
      {
        verseRef: 'v. 6',
        title: 'O Coração da Verdadeira Religião',
        description: '"Porque eu quero a misericórdia, e não o sacrifício; e o conhecimento de Deus, mais do que os holocaustos". Deus rejeita a religião mecânica. Ele prefere a lealdade, a compaixão e um relacionamento genuíno (conhecimento) em vez de uma multidão de animais mortos no altar.'
      }
    ],
    conclusion: 'Oseias 6 é um alerta contra o "arrependimento de conveniência". Muitas vezes, quando estamos em apuros, corremos para Deus com promessas rápidas de mudança, esperando que Ele resolva os nossos problemas imediatamente. Mas a nossa devoção evapora assim que a crise passa. Deus não se deixa enganar por rituais ou palavras bonitas. Jesus citou o versículo 6 duas vezes (Mateus 9:13 e 12:7) para repreender os fariseus, que eram obcecados por regras, mas não tinham amor. A verdadeira espiritualidade não se mede pela quantidade de "sacrifícios" que fazemos (frequência à igreja, dízimos, serviço), mas pela profundidade do nosso amor a Deus e da nossa misericórdia para com o próximo.'
  },
  {
    id: 'jol_2_12_17',
    bookId: 'JOL',
    chapter: 2,
    startVerse: 12,
    endVerse: 17,
    title: 'Rasgai os Vossos Corações',
    theme: 'O Dia do Senhor, o Arrependimento Genuíno e a Compaixão Divina',
    introduction: 'O profeta Joel usa a imagem de uma praga de gafanhotos devastadora para ilustrar a chegada do "Dia do Senhor" — um dia de juízo terrível e iminente. Diante da destruição total, a única esperança para a nação é um arrependimento nacional e profundo. Em Joel 2:12-17, Deus faz um apelo urgente para que o povo volte para Ele. Este texto é um dos chamados mais comoventes ao arrependimento em toda a Bíblia, destacando que a verdadeira contrição não é uma exibição externa de tristeza (rasgar as vestes), mas uma quebra interna do orgulho (rasgar o coração), baseada na natureza graciosa de Deus.',
    points: [
      {
        verseRef: 'v. 12-13a',
        title: 'O Coração Rasgado',
        description: 'Deus chama o povo a voltar "com todo o vosso coração, e com jejuns, e com choro, e com pranto". A ordem principal é: "Rasgai o vosso coração, e não as vossas vestes". Rasgar a roupa era um sinal cultural de luto, mas Deus exige que a dor pelo pecado seja interna, real e não apenas um teatro religioso.'
      },
      {
        verseRef: 'v. 13b-14',
        title: 'O Caráter de Deus como Base do Arrependimento',
        description: 'Por que devemos voltar para Deus? Não apenas por medo do juízo, mas porque "ele é misericordioso, e compassivo, e tardio em irar-se, e grande em benignidade". O arrependimento é motivado pela esperança de que Deus pode "arrepender-se do mal" (mudar o curso do juízo) e deixar uma bênção.'
      },
      {
        verseRef: 'v. 15-17',
        title: 'A Convocação Solene',
        description: 'A crise exige a participação de todos. A trombeta deve ser tocada em Sião. Ninguém está isento: os velhos, as crianças, os bebês de peito e até os noivos devem sair dos seus aposentos. Os sacerdotes devem chorar entre o pórtico e o altar, clamando: "Poupa a teu povo, ó Senhor".'
      }
    ],
    conclusion: 'A mensagem de Joel é um antídoto contra a hipocrisia. É muito fácil "rasgar as vestes" — fazer demonstrações públicas de piedade, chorar num culto ou postar frases cristãs — enquanto o coração permanece duro e apegado ao pecado. Deus exige que o nosso coração seja rasgado: quebrado pelo nosso próprio orgulho e rebelião. A beleza deste texto é que ele nos dá a coragem para nos arrependermos. Não voltamos para um tirano implacável, mas para um Pai que é "tardio em irar-se e grande em benignidade". Quando a Igreja (desde os líderes até às crianças) se humilha em oração sincera, Deus ouve, perdoa e restaura.'
  },
  {
    id: 'jol_2_28_32',
    bookId: 'JOL',
    chapter: 2,
    startVerse: 28,
    endVerse: 32,
    title: 'O Derramamento do Espírito',
    theme: 'A Promessa do Pentecostes, Sinais Cósmicos e a Salvação Universal',
    introduction: 'Após prometer a restauração física da terra (devolvendo os anos que os gafanhotos consumiram), Deus faz uma promessa ainda maior através do profeta Joel: uma restauração espiritual sem precedentes. No Antigo Testamento, o Espírito Santo vinha sobre pessoas específicas (reis, profetas, sacerdotes) para tarefas específicas. Mas Joel profetiza um dia em que o Espírito seria derramado "sobre toda a carne", quebrando todas as barreiras de gênero, idade e classe social. Esta é a profecia exata que o apóstolo Pedro citou no dia de Pentecostes (Atos 2) para explicar o nascimento da Igreja.',
    points: [
      {
        verseRef: 'v. 28-29',
        title: 'A Democratização do Espírito',
        description: 'Deus promete: "Derramarei o meu Espírito sobre toda a carne". Os filhos e as filhas profetizarão (quebra da barreira de gênero), os velhos sonharão e os jovens terão visões (quebra da barreira de idade), e até sobre os servos e servas (quebra da barreira de classe social) o Espírito será derramado. Todos terão acesso direto a Deus.'
      },
      {
        verseRef: 'v. 30-31',
        title: 'Os Sinais Cósmicos e o Dia do Senhor',
        description: 'O derramamento do Espírito é acompanhado por sinais apocalípticos: sangue, fogo, colunas de fumaça, o sol convertido em trevas e a lua em sangue. Estes sinais apontam para o "grande e terrível dia do Senhor", indicando que a era do Espírito é também a era dos últimos dias antes do juízo final.'
      },
      {
        verseRef: 'v. 32',
        title: 'A Promessa de Salvação',
        description: 'No meio dos sinais aterradores, brilha a promessa da graça: "E há de ser que todo aquele que invocar o nome do Senhor será salvo". A salvação não dependerá de nacionalidade ou mérito, mas de invocar o nome de Deus. Em Sião e em Jerusalém haverá livramento.'
      }
    ],
    conclusion: 'A profecia de Joel 2 marca uma mudança radical na história da redenção. Hoje, vivemos no cumprimento desta promessa. O Espírito Santo não é um privilégio de uma elite espiritual; Ele habita em cada pessoa que crê em Jesus Cristo. Não importa se você é jovem ou velho, rico ou pobre, homem ou mulher — Deus quer usar a sua vida, dar-lhe visões do Seu Reino e capacitá-lo a ser uma testemunha. Os sinais cósmicos lembram-nos que o tempo é curto e o juízo está próximo. Mas a porta da graça está escancarada: "Todo aquele que invocar o nome do Senhor será salvo". A nossa missão é anunciar este Nome antes que o grande Dia chegue.'
  },
  {
    id: 'amo_5_21_24',
    bookId: 'AMO',
    chapter: 5,
    startVerse: 21,
    endVerse: 24,
    title: 'A Rejeição do Culto Vazio',
    theme: 'Justiça Social, Adoração Hipócrita e o Rio da Retidão',
    introduction: 'Amós era um pastor de ovelhas e cultivador de sicômoros do sul (Judá) que foi chamado por Deus para profetizar no reino do norte (Israel) durante um tempo de grande prosperidade econômica. No entanto, essa prosperidade foi construída sobre a exploração dos pobres. Os ricos oprimiam os necessitados e, em seguida, iam aos santuários para oferecer sacrifícios extravagantes e cantar louvores a Deus. Em Amós 5, Deus profere uma das condenações mais chocantes da Bíblia contra a adoração hipócrita. Ele declara que odeia os cultos deles e exige que a verdadeira adoração se manifeste em justiça social.',
    points: [
      {
        verseRef: 'v. 21-22',
        title: 'O Ódio Divino pelas Festas Religiosas',
        description: 'Deus usa palavras fortes: "Odeio, desprezo as vossas festas, e as vossas assembleias solenes não me exalarão bom cheiro". Embora eles oferecessem holocaustos e ofertas pacíficas de animais gordos, Deus recusa-se a aceitá-los ou sequer a olhar para eles. A religião sem moralidade é repulsiva para Deus.'
      },
      {
        verseRef: 'v. 23',
        title: 'O Silêncio dos Louvores',
        description: '"Afasta de mim o estrépito dos teus cânticos; porque não ouvirei as melodias das tuas violas". A música de adoração deles, por mais bela ou bem executada que fosse, soava como barulho (estrépito) aos ouvidos de Deus, porque as mãos que tocavam os instrumentos eram as mesmas que roubavam os pobres.'
      },
      {
        verseRef: 'v. 24',
        title: 'O Rio da Justiça',
        description: 'O que Deus realmente deseja? "Corra, porém, o juízo como as águas, e a justiça como o ribeiro impetuoso". Em vez do sangue dos sacrifícios, Deus quer ver a justiça fluindo na sociedade, varrendo a opressão e a corrupção como uma torrente inesgotável.'
      }
    ],
    conclusion: 'Amós 5 é um texto desconfortável para a Igreja moderna. Ele lembra-nos que podemos ter a melhor teologia, a melhor música de louvor, os cultos mais lotados e as ofertas mais generosas, e ainda assim causar "náuseas" a Deus. Porquê? Porque Deus não separa a forma como O adoramos no domingo da forma como tratamos as pessoas na segunda-feira. Se a nossa adoração não nos torna mais justos, honestos nos negócios e compassivos com os marginalizados, ela é apenas "barulho". Deus não quer que as nossas igrejas sejam apenas lugares de cânticos; Ele quer que sejam nascentes de onde flui um rio impetuoso de justiça e retidão para abençoar a sociedade.'
  },
  {
    id: 'jon_3_1_10',
    bookId: 'JON',
    chapter: 3,
    startVerse: 1,
    endVerse: 10,
    title: 'O Arrependimento de Nínive',
    theme: 'A Segunda Chance, a Pregação do Juízo e a Misericórdia Universal',
    introduction: 'Após fugir de Deus, ser lançado ao mar e engolido por um grande peixe, Jonas recebe uma segunda chance. Deus ordena-lhe novamente que vá a Nínive, a capital do cruel império assírio (os maiores inimigos de Israel). Jonas obedece, mas a sua mensagem é curta, sem esperança e sem menção ao amor de Deus: "Ainda quarenta dias, e Nínive será subvertida". O que acontece a seguir é um dos maiores milagres do Antigo Testamento. Uma cidade pagã inteira, desde o rei até ao menor dos cidadãos, responde com um arrependimento radical, provando que a graça de Deus não tem fronteiras.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Segunda Chance e a Mensagem de Juízo',
        description: 'A palavra do Senhor vem a Jonas pela segunda vez. Ele vai a Nínive (uma cidade enorme, de três dias de caminho) e prega a sua mensagem de oito palavras (no hebraico, são apenas cinco). Ele não oferece uma saída, apenas anuncia a destruição iminente em 40 dias.'
      },
      {
        verseRef: 'v. 5-9',
        title: 'O Arrependimento Nacional',
        description: 'A resposta é imediata: "Os homens de Nínive creram em Deus". Eles proclamam um jejum e vestem-se de pano de saco. O próprio rei desce do trono, cobre-se de cinzas e emite um decreto exigindo que todos (até os animais) jejuem e se convertam do seu "mau caminho e da violência". A esperança do rei: "Quem sabe se Deus se voltará... e não pereceremos?".'
      },
      {
        verseRef: 'v. 10',
        title: 'A Resposta da Misericórdia',
        description: 'Deus vê as obras deles — não apenas o jejum, mas que "se converteram do seu mau caminho". Em resposta à mudança de atitude, Deus "arrepende-se" (muda o Seu curso de ação) do mal que tinha dito que lhes faria, e não o faz.'
      }
    ],
    conclusion: 'A história de Nínive é a prova definitiva de que ninguém está além do alcance da graça de Deus. Os assírios eram famosos pela sua brutalidade, mas a simples ameaça do juízo divino quebrou o orgulho daquela nação. O contraste é irônico: enquanto Israel (o povo de Deus) frequentemente ignorava os profetas, esta cidade pagã arrependeu-se ao ouvir o pior sermão da história, pregado por um profeta relutante. O arrependimento de Nínive ensina-nos que Deus não tem prazer na destruição dos ímpios. Quando há uma mudança real de comportamento (abandonar a violência), o coração de Deus move-se em compaixão. O nosso Deus é o Deus das segundas chances, tanto para profetas desobedientes quanto para cidades perdidas.'
  },
  {
    id: 'jon_4_1_11',
    bookId: 'JON',
    chapter: 4,
    startVerse: 1,
    endVerse: 11,
    title: 'A Ira de Jonas e a Compaixão de Deus',
    theme: 'O Preconceito, a Graça Escandalosa e o Coração Missionário',
    introduction: 'O capítulo 4 de Jonas é um dos finais mais surpreendentes e anticlimáticos da Bíblia. Após presenciar o maior avivamento da história em Nínive, esperaríamos que Jonas estivesse a celebrar. Em vez disso, ele está furioso. Jonas não fugiu no capítulo 1 porque tinha medo dos ninivitas, mas porque tinha medo da misericórdia de Deus. Ele não queria que os inimigos de Israel fossem perdoados. Deus usa uma planta (uma aboboreira), um verme e um vento quente para confrontar o coração mesquinho do profeta e revelar a vastidão da Sua própria compaixão por todas as pessoas.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Ira Contra a Graça',
        description: 'Jonas desgosta-se e ora a Deus, revelando o motivo da sua fuga original: "Eu sabia que és Deus clemente, e misericordioso... e que te arrependes do mal". Jonas prefere morrer a ver os seus inimigos perdoados. Deus responde com uma pergunta penetrante: "É razoável essa tua ira?".'
      },
      {
        verseRef: 'v. 5-8',
        title: 'A Lição da Planta e do Verme',
        description: 'Jonas sai da cidade e senta-se para ver se Deus ainda a destruirá. Deus faz crescer uma planta para lhe dar sombra, e Jonas alegra-se. No dia seguinte, Deus envia um verme que destrói a planta, e um vento oriental que castiga Jonas. Novamente, Jonas deseja a morte.'
      },
      {
        verseRef: 'v. 9-11',
        title: 'O Contraste das Compaixões',
        description: 'Deus confronta Jonas: o profeta teve compaixão de uma planta que não plantou, que cresceu numa noite e pereceu noutra. O argumento final de Deus é esmagador: "E não hei de eu ter compaixão da grande cidade de Nínive, em que estão mais de cento e vinte mil homens que não sabem discernir entre a sua mão direita e a sua mão esquerda, e também muitos animais?".'
      }
    ],
    conclusion: 'O livro de Jonas termina com uma pergunta sem resposta, deixando o leitor a examinar o seu próprio coração. Jonas é o retrato do crente que ama a graça de Deus para si mesmo, mas a odeia quando ela é aplicada aos seus inimigos. Nós alegramo-nos com as "plantas" (o nosso conforto, as nossas bênçãos), mas muitas vezes somos indiferentes às multidões que perecem sem conhecer a Deus. A pergunta final de Deus revela o coração do Evangelho: Deus ama as pessoas perdidas, confusas e quebradas deste mundo. A grande tragédia não é apenas o pecado de Nínive, mas a dureza de coração de Jonas. Deus chama a Sua Igreja a alinhar a sua compaixão com a compaixão do céu.'
  },
  {
    id: 'mic_5_2_5',
    bookId: 'MIC',
    chapter: 5,
    startVerse: 2,
    endVerse: 5,
    title: 'O Governante de Belém',
    theme: 'A Origem Humilde do Messias, a Eternidade e a Paz',
    introduction: 'O profeta Miqueias foi contemporâneo de Isaías e profetizou durante um tempo de crise e invasão assíria. Enquanto Jerusalém estava sob cerco e o seu rei humilhado (Miqueias 5:1), o profeta desvia o olhar da capital gloriosa para uma pequena e insignificante vila: Belém Efrata. É desta aldeia que Deus levantará o verdadeiro Rei de Israel. Esta profecia é tão precisa que, séculos mais tarde, os sacerdotes a citaram ao rei Herodes para indicar onde o Messias nasceria (Mateus 2:5-6). A passagem revela não apenas o local do nascimento de Cristo, mas a Sua natureza eterna e o Seu papel como o nosso Pastor e a nossa Paz.',
    points: [
      {
        verseRef: 'v. 2',
        title: 'A Grandeza na Insignificância',
        description: 'Belém Efrata era "pequena demais para figurar como grupo de milhares de Judá". No entanto, dela sairia o governante de Israel. A profecia também revela a preexistência de Cristo: "cujas saídas são desde os tempos antigos, desde os dias da eternidade". O bebê de Belém é o Deus eterno.'
      },
      {
        verseRef: 'v. 3',
        title: 'O Tempo de Espera e o Retorno',
        description: 'Deus os entregará (permitirá o exílio e o sofrimento) até ao tempo em que "a que está de parto tiver dado à luz" (uma referência ao nascimento do Messias, ecoando Isaías 7:14). Então, o restante dos irmãos voltará para os filhos de Israel.'
      },
      {
        verseRef: 'v. 4-5a',
        title: 'O Pastor Majestoso e a Nossa Paz',
        description: 'O Messias "permanecerá, e apascentará o povo na força do Senhor, na excelência do nome do Senhor seu Deus". O Seu rebanho habitará seguro, e a Sua grandeza chegará aos confins da terra. A declaração culminante é: "E este será a nossa paz".'
      }
    ],
    conclusion: 'A profecia de Miqueias 5 é um testemunho da forma surpreendente como Deus trabalha. O mundo espera que a salvação venha dos centros de poder (Jerusalém, Roma, Washington), mas Deus escolhe Belém. Ele escolhe o que é pequeno, humilde e desprezado para manifestar a Sua glória. Jesus Cristo, cujas origens estão na eternidade, entrou no tempo através de uma manjedoura. Ele não é um tirano, mas um Pastor que governa com a força do Senhor. Num mundo cheio de ansiedade e conflitos, a promessa do versículo 5 é a nossa âncora: a paz não é apenas um conceito ou a ausência de guerra; a Paz é uma Pessoa. "Este (Jesus) será a nossa paz".'
  },
  {
    id: 'hab_2_1_4',
    bookId: 'HAB',
    chapter: 2,
    startVerse: 1,
    endVerse: 4,
    title: 'O Justo Viverá Pela Fé',
    theme: 'A Espera, a Soberba e o Fundamento do Evangelho',
    introduction: 'O livro de Habacuque é único porque não é uma mensagem de Deus para o povo, mas um diálogo (ou debate) entre o profeta e Deus. Habacuque está perplexo porque Deus decidiu usar os cruéis babilônios para julgar Judá. Ele pergunta: "Como pode um Deus santo usar pessoas mais ímpias do que nós para nos punir?". No capítulo 2, o profeta sobe à torre de vigia para esperar a resposta de Deus. A resposta divina não explica todos os detalhes do plano, mas estabelece um princípio que se tornaria o pilar da Reforma Protestante e de todo o Novo Testamento: o contraste entre a alma orgulhosa e o justo que vive pela fé.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Postura de Espera e a Visão Clara',
        description: 'Habacuque põe-se na torre de vigia, esperando para ver o que Deus lhe dirá. Deus responde ordenando que ele escreva a visão em tábuas de forma bem legível, para que até quem passa correndo a possa ler. A mensagem de Deus deve ser clara e acessível.'
      },
      {
        verseRef: 'v. 3',
        title: 'A Certeza do Tempo de Deus',
        description: '"Porque a visão é ainda para o tempo determinado... se tardar, espera-o, porque certamente virá, não tardará". A justiça de Deus pode parecer lenta aos nossos olhos, mas tem um tempo exato para se cumprir. A fé exige paciência.'
      },
      {
        verseRef: 'v. 4',
        title: 'O Contraste Fundamental',
        description: 'Deus resume a humanidade em dois grupos: "Eis que a sua alma está orgulhosa, não é reta nele" (referindo-se aos babilônios e a todos os que confiam em si mesmos); "mas o justo viverá da sua fé" (ou fidelidade). A vida verdadeira não vem da força ou do orgulho, mas da confiança total em Deus.'
      }
    ],
    conclusion: 'Habacuque 2:4 é um dos versículos mais importantes de toda a Escritura. O apóstolo Paulo citou-o em Romanos 1:17 e Gálatas 3:11 para provar que a salvação não vem pelas obras da lei, mas pela fé. O autor de Hebreus (10:38) usou-o para encorajar a perseverança no sofrimento. Quando não entendemos o que Deus está a fazer no mundo ou nas nossas vidas, a nossa tendência é o orgulho (achar que sabemos mais do que Deus) ou o desespero. A resposta de Deus a Habacuque é: "Espera e confia". O babilônio confia no seu exército e perecerá; o justo confia na promessa de Deus e viverá. A fé não é ter todas as respostas, mas confiar Naquele que as tem.'
  },
  {
    id: 'zec_9_9_12',
    bookId: 'ZEC',
    chapter: 9,
    startVerse: 9,
    endVerse: 12,
    title: 'O Rei Humilde Montado num Jumento',
    theme: 'A Entrada Triunfal, a Paz Global e o Sangue da Aliança',
    introduction: 'Zacarias profetizou para os judeus que haviam retornado do exílio babilônico, encorajando-os a reconstruir o Templo. No capítulo 9, ele descreve a vinda do Rei messiânico a Sião. O que é chocante nesta profecia é o contraste com os reis conquistadores da época (como Alexandre, o Grande). O Rei de Deus não entra na cidade montado num cavalo de guerra, cercado por exércitos, mas montado num jumentinho, o animal da paz e da humildade. Esta é a profecia que Jesus cumpriu literalmente no Domingo de Ramos, demonstrando o caráter do Seu Reino.',
    points: [
      {
        verseRef: 'v. 9',
        title: 'A Chegada do Rei Humilde',
        description: '"Alegra-te muito, ó filha de Sião... eis que o teu rei virá a ti, justo e Salvador, pobre, e montado sobre um jumento". A alegria é ordenada porque o Rei traz salvação. A Sua humildade (pobre/manso) é a marca do Seu caráter, rejeitando a pompa militar do mundo.'
      },
      {
        verseRef: 'v. 10',
        title: 'O Desarmamento e a Paz Universal',
        description: 'O Rei destruirá os carros de Efraim, os cavalos de Jerusalém e o arco de guerra. Ele não vem para liderar uma rebelião armada, mas para "falar de paz aos gentios". O Seu domínio será global, "de mar a mar", e até aos confins da terra.'
      },
      {
        verseRef: 'v. 11-12',
        title: 'A Libertação pelo Sangue da Aliança',
        description: 'Deus dirige-se a Sião: "Por causa do sangue da tua aliança, tirei os teus presos da cova em que não havia água". A libertação dos cativos não é baseada no mérito deles, mas no sangue da aliança. Os "presos de esperança" são chamados a voltar à fortaleza, com a promessa de restituição em dobro.'
      }
    ],
    conclusion: 'A profecia de Zacarias 9 revela a subversão divina do poder. O mundo acredita que a paz é alcançada através da força, das armas e da intimidação (o cavalo de guerra). Jesus Cristo, o Rei de Sião, entrou em Jerusalém num jumento para declarar que o Seu Reino é estabelecido através da humildade, do sacrifício e do amor. O versículo 11 aponta diretamente para a cruz: é o "sangue da aliança" de Jesus que nos tira da cova do pecado e da morte, onde não havia água nem esperança. Como "presos de esperança", somos convidados a voltar para a nossa Fortaleza (Cristo), sabendo que o Rei humilde que morreu por nós é o mesmo que governará o universo de mar a mar.'
  },
  {
    id: 'mal_4_1_6',
    bookId: 'MAL',
    chapter: 4,
    startVerse: 1,
    endVerse: 6,
    title: 'O Sol da Justiça e o Dia do Senhor',
    theme: 'O Juízo Final, a Cura, Elias e a Reconciliação',
    introduction: 'Malaquias é o último livro do Antigo Testamento. O capítulo 4 (que no texto hebraico é a continuação do capítulo 3) encerra a revelação profética da Antiga Aliança antes dos 400 anos de silêncio que antecederam a vinda de Cristo. O texto descreve o "Dia do Senhor" como uma fornalha ardente para os ímpios, mas como um nascer do sol curativo para os justos. O Antigo Testamento termina com uma promessa e um aviso: Deus enviará o profeta Elias para preparar o caminho, promovendo a reconciliação familiar, para que a terra não seja ferida com maldição.',
    points: [
      {
        verseRef: 'v. 1',
        title: 'A Fornalha do Juízo',
        description: '"Eis que aquele dia vem ardendo como forno". Para os soberbos e os que cometem impiedade, o dia do juízo será como fogo sobre o restolho (palha seca). Não lhes deixará "nem raiz nem ramo", simbolizando uma destruição completa e definitiva do mal.'
      },
      {
        verseRef: 'v. 2-3',
        title: 'O Sol da Justiça e a Cura',
        description: '"Mas para vós, os que temeis o meu nome, nascerá o sol da justiça, e cura trará nas suas asas". Para os crentes, o mesmo dia não é fogo destruidor, mas a luz do amanhecer que traz cura. A alegria será tanta que eles saltarão como bezerros soltos da estrebaria, triunfando sobre a maldade.'
      },
      {
        verseRef: 'v. 4-6',
        title: 'A Lei, Elias e a Reconciliação',
        description: 'Deus manda lembrar a Lei de Moisés. Em seguida, promete enviar o profeta Elias antes do "grande e terrível dia do Senhor". A missão de Elias é relacional: "converter o coração dos pais aos filhos, e o coração dos filhos a seus pais", para evitar que a terra seja ferida com maldição.'
      }
    ],
    conclusion: 'O Antigo Testamento termina apontando para o futuro. O "Sol da Justiça" é uma das mais belas descrições de Jesus Cristo. Quando Ele vem, as Suas "asas" (os raios do sol) trazem cura para as nossas feridas espirituais, emocionais e físicas. A promessa do envio de Elias cumpriu-se em João Batista (Mateus 11:14), que veio no espírito e poder de Elias para preparar o caminho para Jesus. É significativo que a última palavra do Antigo Testamento seja um aviso sobre a "maldição", mas a missão do precursor seja a reconciliação familiar. O Evangelho não apenas nos reconcilia com Deus, mas cura os nossos relacionamentos humanos. O silêncio de 400 anos foi quebrado pelo choro de um bebê em Belém: o Sol da Justiça finalmente nasceu.'
  }
];

// Read pericopes from chunks
let pericopes = [];
for (let i = 1; i <= 7; i++) {
  const fileContent = fs.readFileSync(`data/pericopes_part${i}.ts`, 'utf8');
  const match = fileContent.match(/export const PERICOPES_PART_\d+: PericopeOutline\[\] = (\[[\s\S]*\]);/);
  if (match) {
    const chunk = new Function('return ' + match[1])();
    pericopes = pericopes.concat(chunk);
  }
}

let addedCount = 0;
for (const np of newPericopes) {
  if (!pericopes.find(p => p.id === np.id)) {
    pericopes.push(np);
    addedCount++;
  }
}

// Write back to chunks
const chunkSize = 100;
for (let i = 0; i < pericopes.length; i += chunkSize) {
  const chunk = pericopes.slice(i, i + chunkSize);
  const chunkIndex = Math.floor(i / chunkSize) + 1;
  const fileName = `data/pericopes_part${chunkIndex}.ts`;
  const fileContent = `import { PericopeOutline } from './pericopes_types';\n\nexport const PERICOPES_PART_${chunkIndex}: PericopeOutline[] = ${JSON.stringify(chunk, null, 2)};\n`;
  fs.writeFileSync(fileName, fileContent, 'utf8');
}

// Update index if needed
let indexContent = `import { PericopeOutline } from './pericopes_types';\n`;
const numChunks = Math.ceil(pericopes.length / chunkSize);
for (let i = 1; i <= numChunks; i++) {
  indexContent += `import { PERICOPES_PART_${i} } from './pericopes_part${i}';\n`;
}
indexContent += `\nexport type { PericopeOutline };\n\nexport const PERICOPES: PericopeOutline[] = [\n`;
for (let i = 1; i <= numChunks; i++) {
  indexContent += `  ...PERICOPES_PART_${i},\n`;
}
indexContent += `];\n`;
fs.writeFileSync('data/pericopes.ts', indexContent, 'utf8');

console.log(`Added ${addedCount} new pericopes (Batch 29 - Minor Prophets). Total: ${pericopes.length}`);
