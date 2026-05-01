const fs = require('fs');

const newPericopes = [
  {
    id: 'exo_12_29_42',
    bookId: 'EXO',
    chapter: 12,
    startVerse: 29,
    endVerse: 42,
    title: 'A Décima Praga e o Êxodo',
    theme: 'O Julgamento Divino e a Libertação de Israel',
    introduction: 'Após nove pragas que não conseguiram dobrar o coração de Faraó, Deus envia a décima e mais terrível praga: a morte dos primogênitos. Este evento marca o clímax do confronto entre Deus e os deuses do Egito, resultando na libertação imediata e urgente do povo de Israel após 430 anos de escravidão.',
    points: [
      {
        verseRef: 'v. 29-30',
        title: 'O Julgamento Inevitável',
        description: 'À meia-noite, o Senhor feriu todos os primogênitos no Egito, desde o filho de Faraó até o do cativo, e até os primogênitos dos animais. O grande clamor no Egito demonstra a severidade do julgamento divino sobre a opressão e a idolatria, cumprindo a palavra que Deus havia dito a Moisés.'
      },
      {
        verseRef: 'v. 31-36',
        title: 'A Expulsão Urgente',
        description: 'Faraó, finalmente quebrado, chama Moisés e Arão de noite e ordena que deixem o Egito imediatamente, levando seus rebanhos e pedindo que o abençoem. Os egípcios também pressionam o povo a sair rapidamente. Israel despoja os egípcios, recebendo prata, ouro e roupas, cumprindo a promessa de Deus a Abraão (Gn 15:14).'
      },
      {
        verseRef: 'v. 37-42',
        title: 'A Marcha da Liberdade',
        description: 'Cerca de 600.000 homens, além de mulheres e crianças, e uma "mistura de gente" saem de Ramessés para Sucote. A pressa era tanta que levaram a massa sem fermento. O texto enfatiza que este evento ocorreu exatamente 430 anos após a chegada ao Egito, destacando a fidelidade de Deus ao Seu calendário e às Suas promessas.'
      }
    ]
  },
  {
    id: 'exo_13_17_22',
    bookId: 'EXO',
    chapter: 13,
    startVerse: 17,
    endVerse: 22,
    title: 'A Coluna de Nuvem e de Fogo',
    theme: 'A Direção e a Presença Constante de Deus',
    introduction: 'Após a saída do Egito, Deus não abandona Seu povo à própria sorte no deserto. Ele assume a liderança direta da jornada, guiando-os por um caminho estratégico e manifestando Sua presença protetora de forma visível, dia e noite.',
    points: [
      {
        verseRef: 'v. 17-18',
        title: 'O Caminho Estratégico',
        description: 'Deus não os guiou pelo caminho mais curto (a terra dos filisteus), sabendo que a guerra poderia fazê-los desistir e voltar ao Egito. Em vez disso, Ele os guiou pelo caminho do deserto, perto do Mar Vermelho. Isso demonstra o cuidado pastoral de Deus, que conhece nossas fraquezas e nos guia por caminhos que podemos suportar.'
      },
      {
        verseRef: 'v. 19',
        title: 'A Promessa Cumprida',
        description: 'Moisés leva consigo os ossos de José, cumprindo o juramento feito pelos filhos de Israel séculos antes (Gn 50:25). Isso serve como um lembrete tangível da fidelidade de Deus às Suas promessas através das gerações.'
      },
      {
        verseRef: 'v. 20-22',
        title: 'A Presença Visível',
        description: 'O Senhor ia adiante deles numa coluna de nuvem de dia e numa coluna de fogo de noite, para iluminar o caminho. Esta manifestação contínua da presença divina garantia direção, proteção e conforto, assegurando que Deus estava com eles em cada passo da jornada.'
      }
    ]
  },
  {
    id: 'exo_15_1_21',
    bookId: 'EXO',
    chapter: 15,
    startVerse: 1,
    endVerse: 21,
    title: 'O Cântico de Moisés e Miriã',
    theme: 'Louvor e Celebração pela Salvação Divina',
    introduction: 'Após a milagrosa travessia do Mar Vermelho e a destruição do exército egípcio, Moisés e os israelitas entoam um cântico de louvor a Deus. Este é o primeiro cântico registrado na Bíblia, celebrando o poder, a santidade e a fidelidade do Senhor como o divino guerreiro que salva Seu povo.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Exaltação do Senhor',
        description: 'O cântico começa exaltando o Senhor por Seu triunfo glorioso, lançando cavalos e cavaleiros no mar. Deus é reconhecido como força, cântico e salvação. Ele é o "homem de guerra" que derrotou os inimigos de Israel, demonstrando Seu poder supremo.'
      },
      {
        verseRef: 'v. 6-12',
        title: 'A Majestade e o Poder Divinos',
        description: 'O cântico descreve a grandiosidade da destra de Deus e a fúria de Sua ira contra os adversários. Com o sopro de Suas narinas, as águas se amontoaram. A santidade de Deus é incomparável: "Quem é como tu entre os deuses, ó Senhor? Quem é como tu, glorioso em santidade, terrível em louvores, operando maravilhas?"'
      },
      {
        verseRef: 'v. 13-21',
        title: 'A Promessa do Futuro',
        description: 'O louvor não apenas olha para o passado, mas confia no futuro. Deus guiará o povo até a Sua santa habitação. As nações vizinhas (Filístia, Edom, Moabe, Canaã) tremerão de medo. O cântico termina com a resposta de Miriã e as mulheres, celebrando com tamborins e danças a vitória do Senhor.'
      }
    ]
  },
  {
    id: 'exo_15_22_27',
    bookId: 'EXO',
    chapter: 15,
    startVerse: 22,
    endVerse: 27,
    title: 'As Águas Amargas de Mara',
    theme: 'O Teste da Fé e a Provisão de Deus',
    introduction: 'Apenas três dias após o grande livramento no Mar Vermelho e o cântico de louvor, Israel enfrenta sua primeira crise no deserto: a falta de água potável. Este episódio revela a rapidez com que a fé pode dar lugar à murmuração e como Deus usa as dificuldades para testar e ensinar Seu povo.',
    points: [
      {
        verseRef: 'v. 22-24',
        title: 'A Decepção e a Murmuração',
        description: 'Após três dias no deserto de Sur sem encontrar água, eles chegam a Mara, mas as águas eram amargas. A alegria da salvação rapidamente se transforma em murmuração contra Moisés: "Que havemos de beber?". A dificuldade revela a fragilidade da confiança do povo.'
      },
      {
        verseRef: 'v. 25',
        title: 'A Intervenção e o Milagre',
        description: 'Moisés clama ao Senhor, que lhe mostra uma árvore (ou lenho). Ao lançá-la nas águas, elas se tornam doces. Deus transforma a amargura em doçura, demonstrando que Ele é a solução para as crises da vida.'
      },
      {
        verseRef: 'v. 26-27',
        title: 'O Estatuto e a Promessa',
        description: 'Deus estabelece um estatuto e uma ordenança, testando a obediência do povo. Ele se revela como "Yahweh Rapha" (O Senhor que te sara), prometendo protegê-los das doenças do Egito se forem obedientes. Em seguida, Ele os leva a Elim, um lugar de abundância com doze fontes de água e setenta palmeiras.'
      }
    ]
  },
  {
    id: 'exo_18_1_12',
    bookId: 'EXO',
    chapter: 18,
    startVerse: 1,
    endVerse: 12,
    title: 'A Visita de Jetro',
    theme: 'O Testemunho do Poder de Deus aos Gentios',
    introduction: 'Jetro, sogro de Moisés e sacerdote de Midiã, ouve sobre tudo o que Deus havia feito por Israel e vai ao encontro de Moisés no deserto, trazendo a esposa e os filhos de Moisés. Este encontro destaca o impacto do testemunho das obras de Deus além das fronteiras de Israel.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Chegada da Família',
        description: 'Jetro traz Zípora e os dois filhos de Moisés (Gérson e Eliézer). Os nomes dos filhos refletem a experiência de Moisés: "Fui peregrino em terra estranha" e "O Deus de meu pai foi minha ajuda". A reunião familiar ocorre no "monte de Deus" (Sinai).'
      },
      {
        verseRef: 'v. 7-8',
        title: 'O Relato das Maravilhas',
        description: 'Moisés recebe seu sogro com honra e relata detalhadamente tudo o que o Senhor havia feito a Faraó e aos egípcios por amor a Israel, bem como o livramento de todas as dificuldades no caminho. O testemunho pessoal é uma ferramenta poderosa para declarar a glória de Deus.'
      },
      {
        verseRef: 'v. 9-12',
        title: 'A Confissão e a Adoração',
        description: 'Jetro se alegra e bendiz ao Senhor, reconhecendo que Yahweh é maior que todos os deuses, pois Ele superou a arrogância dos egípcios. Jetro, um sacerdote gentio, oferece holocaustos e sacrifícios a Deus, e participa de uma refeição de comunhão com Arão e os anciãos de Israel diante de Deus.'
      }
    ]
  },
  {
    id: 'exo_18_13_27',
    bookId: 'EXO',
    chapter: 18,
    startVerse: 13,
    endVerse: 27,
    title: 'O Conselho de Jetro sobre Delegação',
    theme: 'A Sabedoria na Liderança e a Necessidade de Compartilhar o Fardo',
    introduction: 'Observando Moisés exausto por julgar sozinho todas as causas do povo desde a manhã até a tarde, Jetro oferece um conselho prático e sábio sobre organização e delegação. Este episódio é um princípio clássico de liderança e administração no povo de Deus.',
    points: [
      {
        verseRef: 'v. 13-18',
        title: 'O Problema da Centralização',
        description: 'Jetro observa a carga insustentável de Moisés e adverte: "O que fazes não é bom. Certamente desfalecerás, tu e este povo... pois este negócio é muito pesado para ti; tu não o podes fazer sozinho". A centralização excessiva prejudica tanto o líder quanto os liderados.'
      },
      {
        verseRef: 'v. 19-23',
        title: 'O Conselho de Delegação',
        description: 'Jetro aconselha Moisés a focar em seu papel principal: representar o povo diante de Deus e ensinar-lhes as leis. Para os julgamentos diários, Moisés deve escolher homens capazes, tementes a Deus, homens de verdade e que odeiem a avareza, para serem chefes de mil, cem, cinquenta e dez. Apenas as causas mais difíceis seriam trazidas a Moisés.'
      },
      {
        verseRef: 'v. 24-27',
        title: 'A Humildade e a Implementação',
        description: 'Moisés demonstra grande humildade ao ouvir e aplicar o conselho de seu sogro. Ele escolhe os líderes e estabelece o sistema de justiça descentralizado. A sabedoria de Deus frequentemente vem através de conselhos práticos de pessoas experientes.'
      }
    ]
  },
  {
    id: 'exo_19_1_15',
    bookId: 'EXO',
    chapter: 19,
    startVerse: 1,
    endVerse: 15,
    title: 'A Preparação no Monte Sinai',
    theme: 'A Aliança e a Santidade Exigida por Deus',
    introduction: 'No terceiro mês após a saída do Egito, Israel chega ao deserto do Sinai. Aqui, Deus propõe uma aliança formal com a nação e exige que o povo se prepare e se santifique para um encontro direto com Ele. Este é o prelúdio para a entrega da Lei.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Proposta da Aliança',
        description: 'Deus lembra a Israel como os libertou do Egito ("vos levei sobre asas de águias"). Ele propõe a aliança: se obedecerem à Sua voz, serão Sua "propriedade peculiar dentre todos os povos", um "reino de sacerdotes" e uma "nação santa". A obediência é a resposta à graça salvadora.'
      },
      {
        verseRef: 'v. 7-9',
        title: 'A Resposta do Povo',
        description: 'Moisés apresenta as palavras de Deus aos anciãos, e todo o povo responde unanimemente: "Tudo o que o Senhor tem falado, faremos". Deus anuncia que virá em uma nuvem espessa para que o povo ouça Sua voz e creia em Moisés para sempre.'
      },
      {
        verseRef: 'v. 10-15',
        title: 'A Exigência de Santificação',
        description: 'Deus ordena que o povo se santifique por dois dias, lavando suas roupas, em preparação para o terceiro dia, quando o Senhor descerá sobre o monte. Limites estritos são estabelecidos ao redor do monte; quem os ultrapassasse morreria. A santidade de Deus exige reverência e pureza.'
      }
    ]
  },
  {
    id: 'exo_19_16_25',
    bookId: 'EXO',
    chapter: 19,
    startVerse: 16,
    endVerse: 25,
    title: 'A Teofania no Sinai',
    theme: 'A Majestade e o Terror da Presença de Deus',
    introduction: 'No terceiro dia, Deus se manifesta no Monte Sinai com sinais aterrorizantes de poder cósmico: trovões, relâmpagos, fumaça e terremotos. Esta teofania (manifestação de Deus) sublinha a transcendência, a santidade e o poder absoluto do Legislador.',
    points: [
      {
        verseRef: 'v. 16-19',
        title: 'A Manifestação Aterrorizante',
        description: 'A presença de Deus é acompanhada por trovões, relâmpagos, uma espessa nuvem e um som de buzina muito forte, fazendo todo o povo tremer. O monte fumegava como uma fornalha e tremia violentamente. A natureza reage à presença do Criador.'
      },
      {
        verseRef: 'v. 20-22',
        title: 'O Aviso de Proteção',
        description: 'O Senhor desce sobre o cume do monte e chama Moisés. A primeira preocupação de Deus é advertir o povo para não ultrapassar os limites para "ver" o Senhor, para que não morram. Até mesmo os sacerdotes devem se santificar. A santidade de Deus é perigosa para o pecador.'
      },
      {
        verseRef: 'v. 23-25',
        title: 'A Mediação de Moisés',
        description: 'Moisés lembra a Deus que os limites já foram estabelecidos, mas Deus insiste no aviso, ordenando que Moisés desça e suba novamente apenas com Arão. Moisés atua como o mediador essencial entre o Deus santo e o povo pecador.'
      }
    ]
  },
  {
    id: 'exo_20_18_26',
    bookId: 'EXO',
    chapter: 20,
    startVerse: 18,
    endVerse: 26,
    title: 'O Temor do Povo e as Leis do Altar',
    theme: 'O Medo Reverente e a Adoração Apropriada',
    introduction: 'Após ouvirem os Dez Mandamentos diretamente de Deus, o povo fica aterrorizado com a manifestação divina e pede que Moisés seja o mediador. Em seguida, Deus dá as primeiras instruções sobre como Ele deve ser adorado, focando na simplicidade do altar.',
    points: [
      {
        verseRef: 'v. 18-21',
        title: 'O Pedido de um Mediador',
        description: 'Diante dos trovões, relâmpagos e do som da buzina, o povo recua de medo e pede a Moisés: "Fala tu conosco... mas não fale Deus conosco, para que não morramos". Moisés explica que Deus veio para prová-los, para que o Seu temor esteja diante deles e não pequem.'
      },
      {
        verseRef: 'v. 22-23',
        title: 'A Proibição da Idolatria',
        description: 'Deus reitera a proibição de fazer deuses de prata ou de ouro. A adoração a Deus não deve ser misturada com as práticas idólatras das nações vizinhas. A revelação de Deus veio do céu, não de imagens terrenas.'
      },
      {
        verseRef: 'v. 24-26',
        title: 'A Simplicidade do Altar',
        description: 'Deus instrui a construção de um altar de terra ou de pedras não lavradas (sem uso de ferramentas). O altar não deve ter degraus para evitar a exposição da nudez. A adoração deve ser simples, focada no sacrifício e na presença de Deus, sem a ostentação humana.'
      }
    ]
  },
  {
    id: 'exo_23_20_33',
    bookId: 'EXO',
    chapter: 23,
    startVerse: 20,
    endVerse: 33,
    title: 'O Anjo e as Promessas da Conquista',
    theme: 'A Presença Guiadora e as Condições para a Bênção',
    introduction: 'No final do "Livro da Aliança", Deus promete enviar o Seu Anjo para guiar Israel até a Terra Prometida. Ele estabelece as condições para o sucesso na conquista: obediência estrita e rejeição total da idolatria dos cananeus.',
    points: [
      {
        verseRef: 'v. 20-23',
        title: 'A Promessa do Anjo',
        description: 'Deus promete enviar um Anjo adiante deles para guardá-los no caminho. O povo deve reverenciá-lo e obedecê-lo, pois "o meu nome está nele". Este Anjo (frequentemente identificado como uma manifestação pré-encarnada de Cristo) será inimigo dos inimigos de Israel.'
      },
      {
        verseRef: 'v. 24-26',
        title: 'A Rejeição da Idolatria e as Bênçãos',
        description: 'Israel é estritamente proibido de adorar os deuses cananeus ou imitar suas obras; eles devem destruir as imagens. Se servirem ao Senhor, Ele abençoará o pão e a água, tirará as enfermidades, evitará abortos e prolongará seus dias.'
      },
      {
        verseRef: 'v. 27-33',
        title: 'A Estratégia da Conquista',
        description: 'Deus promete enviar o Seu terror e vespões para expulsar os inimigos. A expulsão não será em um único ano, para que a terra não fique desolada, mas pouco a pouco, à medida que o povo se multiplicar. Eles não devem fazer aliança com os habitantes da terra, para não caírem em laços de idolatria.'
      }
    ]
  },
  {
    id: 'exo_24_1_11',
    bookId: 'EXO',
    chapter: 24,
    startVerse: 1,
    endVerse: 11,
    title: 'A Confirmação da Aliança',
    theme: 'O Sangue da Aliança e a Comunhão com Deus',
    introduction: 'Este capítulo descreve a cerimônia formal de ratificação da aliança entre Deus e Israel no Sinai. Envolve a leitura do Livro da Aliança, o sacrifício de animais, a aspersão de sangue e uma refeição de comunhão extraordinária dos líderes de Israel na presença de Deus.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Leitura e o Compromisso',
        description: 'Moisés relata ao povo todas as palavras e estatutos do Senhor, e o povo responde a uma voz: "Todas as palavras que o Senhor tem falado, faremos". Moisés escreve as palavras e edifica um altar com doze colunas, representando as doze tribos.'
      },
      {
        verseRef: 'v. 5-8',
        title: 'O Sangue da Aliança',
        description: 'Jovens oferecem holocaustos e sacrifícios pacíficos. Moisés asperge metade do sangue no altar e, após ler o Livro da Aliança para o povo (que reafirma sua obediência), asperge a outra metade sobre o povo, declarando: "Eis aqui o sangue da aliança que o Senhor tem feito convosco".'
      },
      {
        verseRef: 'v. 9-11',
        title: 'A Visão e a Comunhão',
        description: 'Moisés, Arão, Nadabe, Abiú e setenta anciãos sobem o monte e "viram o Deus de Israel". Sob Seus pés havia algo como um pavimento de pedra de safira. Deus não estendeu a mão contra eles; eles viram a Deus, comeram e beberam, celebrando a comunhão pacífica estabelecida pela aliança.'
      }
    ]
  },
  {
    id: 'exo_24_12_18',
    bookId: 'EXO',
    chapter: 24,
    startVerse: 12,
    endVerse: 18,
    title: 'Moisés Sobe ao Monte',
    theme: 'A Busca pela Revelação e a Glória de Deus',
    introduction: 'Após a ratificação da aliança, Deus chama Moisés para subir mais alto no monte para receber as tábuas de pedra com a lei e os mandamentos. Moisés entra na nuvem da glória divina, onde permanecerá por quarenta dias e quarenta noites.',
    points: [
      {
        verseRef: 'v. 12-14',
        title: 'O Chamado e a Delegação',
        description: 'Deus chama Moisés para subir ao monte e receber as tábuas de pedra. Moisés leva Josué, seu servidor, e deixa Arão e Hur encarregados de julgar as causas do povo durante sua ausência. A liderança requer preparação para a ausência do líder.'
      },
      {
        verseRef: 'v. 15-17',
        title: 'A Glória do Senhor',
        description: 'Moisés sobe o monte, e a nuvem o cobre. A glória do Senhor repousa sobre o Sinai por seis dias. No sétimo dia, Deus chama Moisés do meio da nuvem. Aos olhos dos israelitas, a glória do Senhor parecia um "fogo consumidor" no cume do monte.'
      },
      {
        verseRef: 'v. 18',
        title: 'A Entrada na Nuvem',
        description: 'Moisés entra no meio da nuvem e sobe o monte, permanecendo lá quarenta dias e quarenta noites. Este período de isolamento e intimidade com Deus é crucial para receber o modelo do tabernáculo e as instruções detalhadas para o culto.'
      }
    ]
  },
  {
    id: 'exo_25_1_9',
    bookId: 'EXO',
    chapter: 25,
    startVerse: 1,
    endVerse: 9,
    title: 'As Ofertas para o Santuário',
    theme: 'A Generosidade Voluntária e o Propósito do Tabernáculo',
    introduction: 'Deus instrui Moisés a pedir ao povo ofertas voluntárias para a construção do Tabernáculo. O propósito desta estrutura sagrada é profundo: Deus deseja habitar no meio do Seu povo. A adoração requer a participação generosa e o coração disposto dos adoradores.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Oferta Voluntária',
        description: 'Deus pede que os filhos de Israel tragam uma oferta alçada. A condição essencial é que a oferta seja dada "de todo homem cujo coração se mover voluntariamente". Deus não deseja ofertas dadas por obrigação, mas por amor e gratidão.'
      },
      {
        verseRef: 'v. 3-7',
        title: 'Os Materiais Preciosos',
        description: 'A lista de materiais inclui ouro, prata, cobre, fios de várias cores, linho fino, pelos de cabra, peles de carneiro, madeira de acácia, azeite, especiarias e pedras preciosas. Estes materiais valiosos (muitos trazidos do Egito) serão usados para construir a casa de Deus.'
      },
      {
        verseRef: 'v. 8-9',
        title: 'O Propósito e o Modelo',
        description: 'O propósito central é declarado: "E me farão um santuário, e habitarei no meio deles". O Deus transcendente deseja imanência; Ele quer estar com Seu povo. A construção deve seguir exatamente o "modelo" (padrão) que Deus mostrará a Moisés no monte.'
      }
    ]
  },
  {
    id: 'exo_25_10_22',
    bookId: 'EXO',
    chapter: 25,
    startVerse: 10,
    endVerse: 22,
    title: 'A Arca da Aliança',
    theme: 'O Trono da Graça e o Lugar de Encontro',
    introduction: 'A primeira e mais importante peça de mobiliário do Tabernáculo a ser descrita é a Arca da Aliança. Ela representa o trono de Deus na terra, o lugar onde a Sua presença se manifesta e onde Ele se encontra com o mediador do povo.',
    points: [
      {
        verseRef: 'v. 10-16',
        title: 'A Construção da Arca',
        description: 'A Arca é uma caixa de madeira de acácia, revestida de ouro puro por dentro e por fora. Possui argolas e varais de ouro para ser transportada, simbolizando que Deus acompanha Seu povo em sua jornada. Dentro da Arca, Moisés deve colocar o "Testemunho" (as tábuas da Lei).'
      },
      {
        verseRef: 'v. 17-20',
        title: 'O Propiciatório e os Querubins',
        description: 'A tampa da Arca é o "Propiciatório" (lugar de expiação), feito de ouro puro. Sobre ele, nas extremidades, há dois querubins de ouro batido, com as asas estendidas cobrindo o propiciatório e os rostos voltados para ele. Isso simboliza a reverência celestial diante do mistério da redenção.'
      },
      {
        verseRef: 'v. 21-22',
        title: 'O Lugar de Encontro',
        description: 'Deus declara: "E ali virei a ti, e falarei contigo de cima do propiciatório, do meio dos dois querubins". O Propiciatório, cobrindo a Lei (que condena o pecado), é o lugar onde a graça e a justiça se encontram, prefigurando a obra expiatória de Cristo.'
      }
    ]
  },
  {
    id: 'exo_31_1_11',
    bookId: 'EXO',
    chapter: 31,
    startVerse: 1,
    endVerse: 11,
    title: 'Bezalel e Aoliabe',
    theme: 'O Espírito Santo Capacitando para o Serviço',
    introduction: 'Para construir o Tabernáculo com toda a sua complexidade e beleza, Deus não apenas dá o modelo, mas também capacita artesãos específicos com o Seu Espírito. Este texto destaca que a habilidade artística e técnica é um dom divino para a glória de Deus.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'O Chamado de Bezalel',
        description: 'Deus chama Bezalel por nome e o enche do "Espírito de Deus, de sabedoria, e de entendimento, e de ciência, em todo o lavor". Esta é a primeira vez na Bíblia que alguém é dito estar "cheio do Espírito de Deus". O Espírito capacita para o trabalho com ouro, prata, pedras e madeira.'
      },
      {
        verseRef: 'v. 6',
        title: 'A Parceria com Aoliabe',
        description: 'Deus designa Aoliabe para trabalhar com Bezalel. Além disso, Deus afirma ter dado sabedoria ao coração de todos os homens hábeis para que possam fazer tudo o que foi ordenado. O trabalho na obra de Deus é colaborativo e depende da capacitação divina.'
      },
      {
        verseRef: 'v. 7-11',
        title: 'A Tarefa Abrangente',
        description: 'A lista de tarefas inclui a Tenda da Congregação, a Arca, o Propiciatório, a mesa, o candelabro, o altar do incenso, o altar do holocausto, a pia, as vestes sacerdotais, o óleo da unção e o incenso. Tudo deve ser feito "conforme a tudo o que te tenho ordenado".'
      }
    ]
  },
  {
    id: 'exo_32_15_29',
    bookId: 'EXO',
    chapter: 32,
    startVerse: 15,
    endVerse: 29,
    title: 'Moisés Quebra as Tábuas',
    theme: 'A Ira Justa contra o Pecado e a Disciplina',
    introduction: 'Após interceder por Israel no monte, Moisés desce com as tábuas da Lei. Ao ver a idolatria e a orgia do povo com o bezerro de ouro, sua ira se acende. Ele quebra as tábuas, destrói o ídolo e convoca os fiéis para executar o juízo divino.',
    points: [
      {
        verseRef: 'v. 15-19',
        title: 'A Quebra da Aliança',
        description: 'Moisés desce com as tábuas escritas pelo dedo de Deus. Ao se aproximar do arraial e ver o bezerro e as danças, a ira de Moisés se acende. Ele joga as tábuas e as quebra ao pé do monte, um ato simbólico que demonstra que a aliança já havia sido quebrada pelo povo.'
      },
      {
        verseRef: 'v. 20-24',
        title: 'A Destruição do Ídolo e a Desculpa de Arão',
        description: 'Moisés queima o bezerro, o reduz a pó, espalha na água e faz os israelitas beberem (enfrentando as consequências de seu pecado). Ao confrontar Arão, este dá uma desculpa esfarrapada e covarde: "lancei-o [o ouro] no fogo, e saiu este bezerro".'
      },
      {
        verseRef: 'v. 25-29',
        title: 'O Juízo dos Levitas',
        description: 'Vendo que o povo estava desenfreado, Moisés clama: "Quem é do Senhor, venha a mim!". Os filhos de Levi se reúnem a ele e recebem a ordem de passar a espada pelos idólatras. Cerca de três mil homens morrem. Os levitas são consagrados ao Senhor por sua lealdade acima dos laços familiares.'
      }
    ]
  },
  {
    id: 'exo_32_30_35',
    bookId: 'EXO',
    chapter: 32,
    startVerse: 30,
    endVerse: 35,
    title: 'A Intercessão Sacrificial de Moisés',
    theme: 'O Amor do Mediador e a Justiça de Deus',
    introduction: 'No dia seguinte ao terrível juízo sobre a idolatria do bezerro de ouro, Moisés sobe novamente ao Senhor para tentar fazer expiação pelo pecado do povo. Sua oração é uma das mais profundas demonstrações de amor sacrificial e identificação com o povo na Bíblia.',
    points: [
      {
        verseRef: 'v. 30-31',
        title: 'A Confissão do Grande Pecado',
        description: 'Moisés reconhece a gravidade da situação: "Vós cometestes grande pecado". Ele sobe ao Senhor com a esperança de fazer expiação. Diante de Deus, ele não dá desculpas, mas confessa abertamente: "este povo cometeu grande pecado, e fizeram para si deuses de ouro".'
      },
      {
        verseRef: 'v. 32',
        title: 'A Oferta Sacrificial',
        description: 'Moisés faz um pedido extraordinário: "Agora, pois, perdoa o seu pecado; se não, risca-me, peço-te, do teu livro, que tens escrito". Moisés está disposto a perder sua própria salvação e lugar diante de Deus se isso significar o perdão para o seu povo, prefigurando o sacrifício de Cristo.'
      },
      {
        verseRef: 'v. 33-35',
        title: 'A Resposta de Deus',
        description: 'Deus recusa a oferta de Moisés, afirmando o princípio da responsabilidade individual: "Aquele que pecar contra mim, a este riscarei do meu livro". Deus ordena que Moisés continue guiando o povo, mas adverte que no dia da visitação, Ele punirá o pecado. O Senhor fere o povo com uma praga.'
      }
    ]
  },
  {
    id: 'exo_33_1_11',
    bookId: 'EXO',
    chapter: 33,
    startVerse: 1,
    endVerse: 11,
    title: 'A Tenda da Congregação',
    theme: 'A Distância do Pecado e a Intimidade com Deus',
    introduction: 'Após o pecado do bezerro de ouro, Deus diz que não subirá no meio do povo, para não consumi-los. O povo entra em luto. Moisés estabelece uma tenda fora do arraial para buscar a Deus, demonstrando a necessidade de separação e o privilégio da intimidade.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Ameaça da Retirada da Presença',
        description: 'Deus promete enviar um anjo para expulsar os cananeus, mas declara que não subirá no meio de Israel, pois são um "povo de dura cerviz". Ouvindo esta má notícia, o povo pranteia e tira seus atavios (enfeites) em sinal de arrependimento e luto.'
      },
      {
        verseRef: 'v. 7-8',
        title: 'A Tenda Fora do Arraial',
        description: 'Moisés arma uma tenda "fora do arraial, longe do arraial", chamando-a de Tenda da Congregação. Quem buscava ao Senhor tinha que sair do acampamento (agora contaminado). Quando Moisés saía para a tenda, todo o povo se levantava em reverência à porta de suas próprias tendas.'
      },
      {
        verseRef: 'v. 9-11',
        title: 'A Intimidade Face a Face',
        description: 'Quando Moisés entrava na tenda, a coluna de nuvem descia e ficava à porta, e o Senhor falava com Moisés. O texto diz que "falava o Senhor a Moisés face a face, como qualquer fala com o seu amigo". Josué, o jovem servidor, não se apartava da tenda, aprendendo a buscar a presença de Deus.'
      }
    ]
  },
  {
    id: 'exo_34_1_9',
    bookId: 'EXO',
    chapter: 34,
    startVerse: 1,
    endVerse: 9,
    title: 'As Novas Tábuas e o Caráter de Deus',
    theme: 'A Renovação da Aliança e a Revelação da Graça',
    introduction: 'Deus ordena que Moisés lavre duas novas tábuas de pedra e suba novamente ao Sinai. Ali, Deus faz uma das mais importantes revelações de Seu próprio caráter em toda a Escritura, proclamando Seu nome e Seus atributos de misericórdia e justiça.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Preparação para a Renovação',
        description: 'Deus manda Moisés cortar duas tábuas de pedra semelhantes às primeiras (que Moisés quebrou). Deus escreverá nelas as mesmas palavras. Moisés sobe o monte Sinai de manhã cedo, sozinho, levando as tábuas.'
      },
      {
        verseRef: 'v. 5-7',
        title: 'A Proclamação do Nome do Senhor',
        description: 'O Senhor desce na nuvem e proclama o Seu nome: "Senhor, Senhor Deus compassivo, clemente e longânimo e grande em misericórdia e fidelidade". Ele guarda a misericórdia em mil gerações e perdoa a iniquidade, mas não inocenta o culpado, visitando a iniquidade dos pais nos filhos.'
      },
      {
        verseRef: 'v. 8-9',
        title: 'A Adoração e a Súplica de Moisés',
        description: 'Diante desta revelação gloriosa, Moisés apressa-se em inclinar-se à terra e adorar. Ele usa a revelação da graça de Deus como base para sua oração: "se agora tenho achado graça aos teus olhos, vá o Senhor no meio de nós... perdoa a nossa iniquidade e o nosso pecado, e toma-nos por tua herança".'
      }
    ]
  },
  {
    id: 'exo_34_29_35',
    bookId: 'EXO',
    chapter: 34,
    startVerse: 29,
    endVerse: 35,
    title: 'O Rosto Resplandecente de Moisés',
    theme: 'O Reflexo da Glória de Deus e o Ministério da Lei',
    introduction: 'Ao descer do monte Sinai com as novas tábuas da Lei, após quarenta dias na presença de Deus, o rosto de Moisés brilhava. Este fenômeno físico ilustra o impacto transformador da comunhão com Deus e o temor que a glória divina inspira.',
    points: [
      {
        verseRef: 'v. 29-30',
        title: 'A Glória Inconsciente',
        description: 'Moisés desce do monte com as duas tábuas do Testemunho. Ele não sabia que a pele do seu rosto resplandecia por ter falado com Deus. A verdadeira comunhão com Deus transforma a pessoa de tal forma que os outros percebem, mesmo que a própria pessoa não tenha consciência disso.'
      },
      {
        verseRef: 'v. 31-32',
        title: 'O Temor e a Transmissão da Lei',
        description: 'Arão e os filhos de Israel temem aproximar-se de Moisés por causa do brilho. Moisés os chama, e eles se chegam a ele. Então, Moisés lhes transmite todos os mandamentos que o Senhor lhe falara no monte Sinai. A glória validava a autoridade da mensagem.'
      },
      {
        verseRef: 'v. 33-35',
        title: 'O Uso do Véu',
        description: 'Quando Moisés terminava de falar com o povo, colocava um véu sobre o rosto. Quando entrava perante o Senhor para falar com Ele, tirava o véu. O apóstolo Paulo usa este evento em 2 Coríntios 3 para contrastar a glória passageira da Antiga Aliança com a glória permanente e transformadora da Nova Aliança em Cristo.'
      }
    ]
  }
];

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

// Append new pericopes
arr.push(...newPericopes);

// Write back
const newArrayContent = JSON.stringify(arr, null, 2);
const newContent = content.substring(0, startIndex) + newArrayContent + content.substring(endIndex + 1);
fs.writeFileSync('data/pericopes_temp.ts', newContent, 'utf8');
console.log('Added 20 new Exodus pericopes.');
