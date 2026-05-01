const fs = require('fs');

const newPericopes = [
  {
    id: 'num_1_1_4',
    bookId: 'NUM',
    chapter: 1,
    startVerse: 1,
    endVerse: 4,
    title: 'O Recenseamento de Israel',
    theme: 'A Organização e a Preparação para a Conquista',
    introduction: 'O livro de Números começa no deserto do Sinai, um ano após a saída do Egito. Deus ordena um censo dos homens aptos para a guerra. Este recenseamento não é apenas para fins estatísticos, mas para organizar o povo como o exército do Senhor, preparando-os para a marcha e a conquista da Terra Prometida.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Ordem Divina',
        description: 'Deus fala a Moisés na Tenda da Congregação e ordena que se faça a contagem de toda a congregação dos filhos de Israel, segundo as suas famílias e as casas de seus pais. Deus conhece Seu povo e os organiza com propósito.'
      },
      {
        verseRef: 'v. 3',
        title: 'O Critério Militar',
        description: 'O censo inclui todos os homens de vinte anos para cima, "todos os que podem sair à guerra em Israel". Israel não é mais um grupo de escravos desorganizados, mas um exército estruturado, chamado a lutar as batalhas do Senhor.'
      },
      {
        verseRef: 'v. 4',
        title: 'A Liderança Tribal',
        description: 'Para auxiliar Moisés e Arão no censo, Deus designa um homem de cada tribo, o cabeça da casa de seus pais. A liderança é compartilhada e representativa, garantindo que cada tribo seja devidamente contada e organizada.'
      }
    ],
    conclusion: 'Que possamos reconhecer que Deus nos chama e nos organiza com propósito, preparando-nos para as batalhas espirituais.'
  },
  {
    id: 'num_6_1_8',
    bookId: 'NUM',
    chapter: 6,
    startVerse: 1,
    endVerse: 8,
    title: 'O Voto de Nazireu',
    theme: 'A Consagração Voluntária e Exclusiva a Deus',
    introduction: 'O voto de nazireu (do hebraico nazir, "separado" ou "consagrado") era uma forma de um israelita comum (homem ou mulher) se dedicar a Deus com um nível de santidade semelhante ao do sumo sacerdote, por um período específico. Era uma expressão de devoção radical.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Abstenção do Fruto da Videira',
        description: 'O nazireu deve se abster de vinho, bebida forte, vinagre, uvas frescas ou secas, e até mesmo das sementes e cascas. A videira era símbolo de alegria e festa terrena; o nazireu renuncia a esses prazeres legítimos para encontrar sua alegria exclusivamente em Deus.'
      },
      {
        verseRef: 'v. 5',
        title: 'O Cabelo Não Cortado',
        description: 'Durante os dias do seu voto, não passará navalha pela sua cabeça. Ele deixará crescer as guedelhas do cabelo. O cabelo comprido era o sinal visível e público da sua consagração, uma "coroa" (nezer) de separação para o seu Deus.'
      },
      {
        verseRef: 'v. 6-8',
        title: 'A Pureza Diante da Morte',
        description: 'O nazireu não pode se aproximar de nenhum cadáver, nem mesmo o de seu pai, mãe, irmão ou irmã. A sua consagração a Deus (o Deus da vida) supera os laços familiares mais profundos e as obrigações de luto. Ele é "santo ao Senhor".'
      }
    ],
    conclusion: 'Que possamos cultivar um coração disposto à consagração voluntária, separando-nos das distrações para buscar a Deus.'
  },
  {
    id: 'num_6_22_27',
    bookId: 'NUM',
    chapter: 6,
    startVerse: 22,
    endVerse: 27,
    title: 'A Bênção Sacerdotal (Aarônica)',
    theme: 'A Graça, a Proteção e a Paz de Deus',
    introduction: 'Esta é uma das passagens mais belas e conhecidas do Antigo Testamento. Deus instrui Moisés sobre como Arão e seus filhos devem abençoar o povo de Israel. É uma bênção tríplice que invoca o nome, a proteção, a graça e a paz do Senhor sobre o Seu povo.',
    points: [
      {
        verseRef: 'v. 22-24',
        title: 'A Proteção Divina',
        description: '"O Senhor te abençoe e te guarde". A primeira parte da bênção foca na ação protetora de Deus. A bênção verdadeira não é apenas receber coisas boas, mas ser guardado e preservado pelo poder soberano do Senhor em meio aos perigos da jornada.'
      },
      {
        verseRef: 'v. 25',
        title: 'A Graça Iluminadora',
        description: '"O Senhor faça resplandecer o seu rosto sobre ti, e tenha misericórdia de ti". O rosto resplandecente simboliza o favor, a aprovação e a presença sorridente de Deus. A misericórdia (graça) é a base de todo o nosso relacionamento com Ele.'
      },
      {
        verseRef: 'v. 26-27',
        title: 'A Paz e o Nome do Senhor',
        description: '"O Senhor sobre ti levante o seu rosto e te dê a paz". Levantar o rosto significa dar atenção pessoal. O resultado é a "paz" (Shalom) - plenitude, bem-estar e harmonia. Ao pronunciar estas palavras, os sacerdotes "porão o meu nome sobre os filhos de Israel", marcando-os como propriedade de Deus.'
      }
    ],
    conclusion: 'Que possamos viver sob a bênção do Senhor, experimentando Sua proteção, Sua graça e Sua paz perfeita.'
  },
  {
    id: 'num_9_15_23',
    bookId: 'NUM',
    chapter: 9,
    startVerse: 15,
    endVerse: 23,
    title: 'A Nuvem sobre o Tabernáculo',
    theme: 'A Direção Divina e a Obediência do Povo',
    introduction: 'A jornada de Israel no deserto não era guiada por mapas ou intuição humana, mas pela presença visível de Deus. A nuvem (de dia) e o fogo (de noite) sobre o Tabernáculo ditavam o ritmo e a direção da marcha, ensinando o povo a depender totalmente da orientação divina.',
    points: [
      {
        verseRef: 'v. 15-16',
        title: 'A Presença Contínua',
        description: 'No dia em que o Tabernáculo foi erguido, a nuvem o cobriu. À noite, a nuvem tinha a aparência de fogo. Isso era contínuo: "Assim era de contínuo: a nuvem o cobria, e de noite havia aparência de fogo". Deus nunca deixou Seu povo sem a evidência de Sua presença.'
      },
      {
        verseRef: 'v. 17-19',
        title: 'O Sinal para Marchar e Acampar',
        description: 'Quando a nuvem se erguia, os israelitas partiam; onde a nuvem parava, eles acampavam. Eles marchavam "segundo o mandado do Senhor" e acampavam "segundo o mandado do Senhor". A obediência ao movimento da nuvem era absoluta.'
      },
      {
        verseRef: 'v. 20-23',
        title: 'A Submissão ao Tempo de Deus',
        description: 'O texto enfatiza que eles ficavam acampados quer a nuvem parasse por dois dias, um mês ou um ano. Eles não podiam se apressar quando estavam impacientes, nem podiam ficar quando queriam descansar. A verdadeira obediência envolve submeter-se não apenas à direção de Deus, mas também ao Seu tempo.'
      }
    ],
    conclusion: 'Que possamos aprender a seguir a direção do Espírito Santo, movendo-nos no tempo e na vontade de Deus.'
  },
  {
    id: 'num_10_11_13',
    bookId: 'NUM',
    chapter: 10,
    startVerse: 11,
    endVerse: 13,
    title: 'A Partida do Sinai',
    theme: 'O Início da Jornada e a Ordem da Marcha',
    introduction: 'Após quase um ano acampados no Monte Sinai, onde receberam a Lei, construíram o Tabernáculo e foram organizados como nação, chega o momento de partir em direção à Terra Prometida. A nuvem se levanta, sinalizando o início de uma nova fase na história de Israel.',
    points: [
      {
        verseRef: 'v. 11',
        title: 'O Sinal da Partida',
        description: 'No vigésimo dia do segundo mês do segundo ano, a nuvem se ergueu de sobre o Tabernáculo da Congregação. Este foi o momento aguardado. A longa permanência no Sinai cumpriu seu propósito de instrução; agora era tempo de avançar.'
      },
      {
        verseRef: 'v. 12',
        title: 'A Jornada no Deserto',
        description: 'Os filhos de Israel puseram-se em marcha, saindo do deserto do Sinai. A nuvem repousou no deserto de Parã. A jornada não seria fácil; eles estavam trocando a segurança do acampamento no Sinai pelos desafios do deserto aberto, confiando na liderança de Deus.'
      },
      {
        verseRef: 'v. 13',
        title: 'A Obediência à Ordem Divina',
        description: 'O texto destaca que eles "partiram pela primeira vez, segundo o mandado do Senhor, por intermédio de Moisés". A partida não foi caótica, mas seguiu a ordem tribal e militar estabelecida por Deus nos capítulos anteriores. A fé se expressa em obediência organizada.'
      }
    ],
    conclusion: 'Que estejamos prontos para levantar acampamento e avançar quando Deus nos chamar para novas etapas em nossa jornada.'
  },
  {
    id: 'num_11_1_3',
    bookId: 'NUM',
    chapter: 11,
    startVerse: 1,
    endVerse: 3,
    title: 'O Fogo em Taberá (Murmuração)',
    theme: 'O Pecado da Reclamação e o Juízo Divino',
    introduction: 'Apenas três dias após a partida do Sinai (Nm 10:33), a atitude do povo muda drasticamente. A alegria da marcha dá lugar à murmuração. Este breve episódio em Taberá estabelece um padrão trágico que se repetirá ao longo do livro de Números: a ingratidão do povo e a disciplina de Deus.',
    points: [
      {
        verseRef: 'v. 1a',
        title: 'A Queixa Injustificada',
        description: 'O povo começou a queixar-se "de suas sortes" aos ouvidos do Senhor. Após verem tantos milagres e provisões, a murmuração revela um coração ingrato e descontente. A reclamação não era apenas contra as circunstâncias, mas contra o próprio Deus que os guiava.'
      },
      {
        verseRef: 'v. 1b',
        title: 'A Ira e o Fogo do Senhor',
        description: 'O Senhor ouviu as queixas e a Sua ira se acendeu. O "fogo do Senhor" ardeu entre eles e consumiu os que estavam nas extremidades do arraial. Deus não tolera a murmuração, pois ela é uma expressão de incredulidade e rebelião contra a Sua bondade.'
      },
      {
        verseRef: 'v. 2-3',
        title: 'A Intercessão e o Nome do Lugar',
        description: 'O povo clamou a Moisés, e Moisés orou ao Senhor, e o fogo se apagou. O lugar foi chamado Taberá (que significa "incêndio" ou "queima"), servindo como um memorial permanente do perigo da murmuração e do poder da intercessão.'
      }
    ],
    conclusion: 'Que possamos guardar nossos corações da murmuração, cultivando a gratidão e confiando na bondade de Deus.'
  },
  {
    id: 'num_11_4_15',
    bookId: 'NUM',
    chapter: 11,
    startVerse: 4,
    endVerse: 15,
    title: 'A Reclamação por Carne e o Fardo de Moisés',
    theme: 'O Desejo Carnal e o Esgotamento da Liderança',
    introduction: 'A murmuração em Taberá foi apenas o começo. Logo, o "populacho" (a mistura de gente) instiga todo o Israel a chorar por carne, desprezando o maná. A pressão da rebelião contínua leva Moisés a um ponto de ruptura emocional e espiritual.',
    points: [
      {
        verseRef: 'v. 4-6',
        title: 'A Memória Seletiva e o Desprezo pela Provisão',
        description: 'O povo chora lembrando-se dos peixes, pepinos, melões e cebolas do Egito, esquecendo-se da escravidão e dos açoites. Eles desprezam o maná, a provisão diária e milagrosa de Deus, dizendo: "nossa alma se seca; coisa nenhuma há senão este maná". O desejo carnal distorce a realidade.'
      },
      {
        verseRef: 'v. 10',
        title: 'O Choro nas Tendas e a Ira de Deus',
        description: 'Moisés ouve o povo chorando, cada um à porta de sua tenda. A ira do Senhor se acende grandemente, e o texto diz que "pareceu mal aos olhos de Moisés". A rebelião generalizada e infantil do povo cria uma crise aguda de liderança.'
      },
      {
        verseRef: 'v. 11-15',
        title: 'O Desespero de Moisés',
        description: 'Moisés desabafa com Deus em profunda angústia. Ele questiona por que Deus colocou o fardo deste povo sobre ele: "Concebi eu porventura todo este povo?". Sentindo-se incapaz de carregar o peso sozinho, ele chega a pedir a morte: "mata-me, peço-te... para que eu não veja o meu mal".'
      }
    ],
    conclusion: 'Que possamos valorizar a provisão de Deus e orar por nossos líderes, que frequentemente carregam fardos pesados.'
  },
  {
    id: 'num_11_16_30',
    bookId: 'NUM',
    chapter: 11,
    startVerse: 16,
    endVerse: 30,
    title: 'Os Setenta Anciãos e o Espírito',
    theme: 'A Delegação do Fardo e a Capacitação do Espírito',
    introduction: 'Em resposta ao desespero de Moisés, Deus não o repreende, mas providencia alívio. Ele ordena a escolha de setenta anciãos para compartilhar o fardo da liderança, e derrama sobre eles o mesmo Espírito que estava sobre Moisés, capacitando-os para a tarefa.',
    points: [
      {
        verseRef: 'v. 16-17',
        title: 'A Solução Divina: Compartilhar o Fardo',
        description: 'Deus manda Moisés reunir setenta homens dos anciãos de Israel. Deus promete descer, falar com Moisés e "tirar do Espírito que está sobre ti, e o porei sobre eles". Eles levariam a carga do povo com Moisés, para que ele não a levasse sozinho.'
      },
      {
        verseRef: 'v. 24-25',
        title: 'O Derramamento do Espírito',
        description: 'Moisés reúne os setenta ao redor da Tenda. O Senhor desce na nuvem, tira do Espírito que estava sobre Moisés e o põe sobre os setenta. Quando o Espírito repousa sobre eles, eles profetizam (falam sob inspiração divina), confirmando publicamente sua capacitação e autoridade.'
      },
      {
        verseRef: 'v. 26-30',
        title: 'Eldade, Medade e o Desejo de Moisés',
        description: 'Dois homens, Eldade e Medade, ficaram no arraial, mas o Espírito também repousou sobre eles e profetizaram. Josué, com zelo mal direcionado, pede a Moisés que os proíba. Moisés responde com grandeza de alma: "Tens tu ciúmes por mim? Tomara que todo o povo do Senhor fosse profeta, e que o Senhor pusesse o seu Espírito sobre eles!".'
      }
    ],
    conclusion: 'Que possamos celebrar quando Deus levanta e capacita outros para a obra, compartilhando o fardo do ministério.'
  },
  {
    id: 'num_12_1_15',
    bookId: 'NUM',
    chapter: 12,
    startVerse: 1,
    endVerse: 15,
    title: 'A Rebelião de Miriã e Arão',
    theme: 'A Inveja, a Autoridade e a Defesa de Deus',
    introduction: 'A liderança de Moisés é atacada não apenas pelo povo, mas por seus próprios irmãos, Miriã e Arão. Usando o casamento de Moisés como pretexto, eles questionam a exclusividade de sua autoridade profética. Deus intervém pessoalmente para defender Seu servo escolhido.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Ataque e a Mansidão de Moisés',
        description: 'Miriã e Arão falam contra Moisés por causa da mulher cuxita (etíope) que ele tomara. Mas o verdadeiro motivo é a inveja: "Falou o Senhor somente por Moisés? Não falou também por nós?". O texto insere uma nota crucial: "E era o varão Moisés mui manso, mais do que todos os homens que havia sobre a terra". Moisés não se defende.'
      },
      {
        verseRef: 'v. 4-8',
        title: 'A Defesa Divina e o Privilégio de Moisés',
        description: 'O Senhor chama os três repentinamente à Tenda. Deus desce na coluna de nuvem e repreende Miriã e Arão. Ele explica que, enquanto fala com outros profetas em visões e sonhos, com Moisés Ele fala "boca a boca" (face a face), de forma clara. "Por que, pois, não tivestes temor de falar contra o meu servo, contra Moisés?".'
      },
      {
        verseRef: 'v. 9-15',
        title: 'O Juízo e a Intercessão',
        description: 'A ira do Senhor se acende, e quando a nuvem se retira, Miriã está leprosa, branca como a neve. Arão, aterrorizado, confessa o pecado e pede a Moisés que interceda. Moisés clama: "Ó Deus, rogo-te que a cures". Deus a cura, mas exige que ela fique isolada fora do arraial por sete dias como disciplina pública.'
      }
    ],
    conclusion: 'Que possamos respeitar a autoridade estabelecida por Deus e confiar que Ele mesmo defenderá aqueles que O servem com mansidão.'
  },
  {
    id: 'num_13_1_24',
    bookId: 'NUM',
    chapter: 13,
    startVerse: 1,
    endVerse: 24,
    title: 'O Envio dos Espias a Canaã',
    theme: 'A Exploração da Promessa e a Visão da Realidade',
    introduction: 'Israel chega a Cades-Barneia, na fronteira da Terra Prometida. Deus ordena o envio de doze espias, líderes de cada tribo, para explorar a terra de Canaã. A missão é avaliar a terra, o povo e as cidades, preparando-se para a conquista que Deus havia prometido.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Ordem e a Seleção',
        description: 'Deus diz a Moisés para enviar homens para espiar a terra de Canaã, "que eu hei de dar aos filhos de Israel". A promessa da doação já está garantida. Moisés escolhe doze homens, todos eles cabeças (líderes) entre os filhos de Israel, incluindo Oseias (a quem Moisés chama de Josué) e Calebe.'
      },
      {
        verseRef: 'v. 17-20',
        title: 'As Instruções da Missão',
        description: 'Moisés instrui os espias a subirem pelo Neguebe até as montanhas. Eles devem observar se o povo é forte ou fraco, poucos ou muitos; se a terra é boa ou má; se as cidades são acampamentos abertos ou fortificadas; e se a terra é fértil. Ele os encoraja: "Esforçai-vos, e tomai do fruto da terra".'
      },
      {
        verseRef: 'v. 21-24',
        title: 'A Exploração e o Vale de Escol',
        description: 'Eles espiam a terra de sul a norte durante quarenta dias. Em Hebrom, eles veem os descendentes de Anaque (gigantes). No vale de Escol, eles cortam um ramo com um único cacho de uvas tão grande que precisa ser carregado por dois homens numa vara, junto com romãs e figos, provando a fertilidade da terra.'
      }
    ],
    conclusion: 'Que possamos explorar as promessas de Deus com fé, reconhecendo a abundância do que Ele tem preparado para nós.'
  },
  {
    id: 'num_14_1_12',
    bookId: 'NUM',
    chapter: 14,
    startVerse: 1,
    endVerse: 12,
    title: 'A Rebelião do Povo e a Intercessão de Moisés',
    theme: 'A Incredulidade, a Rebelião e a Ameaça de Juízo',
    introduction: 'O relatório negativo de dez dos doze espias (focando nos gigantes e nas cidades fortificadas) espalha o pânico em Israel. O povo rejeita a promessa de Deus, planeja voltar ao Egito e tenta apedrejar Josué e Calebe. Deus ameaça destruir a nação, mas Moisés intercede.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Pânico e o Desejo de Voltar',
        description: 'Toda a congregação chora a noite inteira. Eles murmuram contra Moisés e Arão, desejando ter morrido no Egito ou no deserto. A incredulidade os leva à rebelião aberta: eles decidem nomear um novo líder para levá-los de volta à escravidão no Egito, rejeitando a salvação de Deus.'
      },
      {
        verseRef: 'v. 5-10',
        title: 'O Apelo de Josué e Calebe',
        description: 'Moisés e Arão caem sobre seus rostos. Josué e Calebe rasgam suas roupas e imploram ao povo: "A terra... é muitíssimo boa... Se o Senhor se agradar de nós, então nos porá nesta terra... Tão somente não sejais rebeldes contra o Senhor, e não temais o povo dessa terra... o Senhor é conosco". A resposta do povo é tentar apedrejá-los. A glória do Senhor aparece na Tenda.'
      },
      {
        verseRef: 'v. 11-12',
        title: 'A Ameaça de Destruição',
        description: 'Deus diz a Moisés: "Até quando me provocará este povo? E até quando não crerá em mim, por todos os sinais que fiz no meio dele?". Deus propõe feri-los com pestilência, deserdá-los e fazer de Moisés uma nação maior e mais forte que eles. A incredulidade contínua esgota a paciência divina.'
      }
    ],
    conclusion: 'Que possamos escolher crer nas promessas de Deus, mesmo diante de gigantes, rejeitando a incredulidade e a rebelião.'
  },
  {
    id: 'num_14_26_35',
    bookId: 'NUM',
    chapter: 14,
    startVerse: 26,
    endVerse: 35,
    title: 'O Juízo de Deus: Quarenta Anos no Deserto',
    theme: 'As Consequências da Incredulidade',
    introduction: 'Embora Deus tenha perdoado o povo em resposta à intercessão de Moisés, o perdão não anula as consequências da incredulidade. Deus decreta o juízo sobre a geração rebelde: eles não entrarão na Terra Prometida, mas perecerão no deserto durante quarenta anos.',
    points: [
      {
        verseRef: 'v. 26-29',
        title: 'A Sentença de Morte no Deserto',
        description: 'Deus declara que ouviu as murmurações. O juízo é severo: "Neste deserto cairão os vossos cadáveres". Todos os que foram contados no censo (de vinte anos para cima) e que murmuraram contra Deus morrerão no deserto. Eles terão exatamente o que disseram desejar (v. 2).'
      },
      {
        verseRef: 'v. 30-33',
        title: 'A Exceção e a Promessa aos Filhos',
        description: 'Apenas Calebe e Josué entrarão na terra, porque tiveram "outro espírito" e seguiram o Senhor totalmente. Ironicamente, os filhos que o povo disse que seriam presa dos inimigos (v. 3) serão os que herdarão a terra. Os filhos pastorearão no deserto por quarenta anos, levando as iniquidades dos pais.'
      },
      {
        verseRef: 'v. 34-35',
        title: 'O Princípio de Um Ano por Dia',
        description: 'O tempo de peregrinação no deserto é fixado em quarenta anos, correspondendo aos quarenta dias que os espias exploraram a terra (um ano para cada dia). Deus declara: "conhecereis o meu desagrado" (ou "a minha oposição"). A incredulidade transforma uma jornada de semanas em uma peregrinação de décadas.'
      }
    ],
    conclusion: 'Que possamos aprender com o erro de Israel, sabendo que a incredulidade nos impede de entrar no descanso e nas promessas de Deus.'
  },
  {
    id: 'num_16_1_11',
    bookId: 'NUM',
    chapter: 16,
    startVerse: 1,
    endVerse: 11,
    title: 'A Rebelião de Corá',
    theme: 'A Insubordinação e a Ambição pelo Sacerdócio',
    introduction: 'A rebelião atinge um novo nível de gravidade. Corá (um levita) se une a Datã, Abirão e Om (da tribo de Rúben), juntamente com 250 líderes da congregação, para desafiar diretamente a autoridade política de Moisés e a autoridade religiosa de Arão.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Desafio à Liderança',
        description: 'Os rebeldes se levantam contra Moisés e Arão, argumentando: "Basta-vos, pois que toda a congregação é santa... por que, pois, vos elevais sobre a congregação do Senhor?". Eles usam uma verdade teológica (a santidade do povo) para justificar a insubordinação e a inveja contra os líderes escolhidos por Deus.'
      },
      {
        verseRef: 'v. 4-7',
        title: 'A Resposta de Moisés: O Teste do Incensário',
        description: 'Moisés cai sobre o seu rosto e propõe um teste para o dia seguinte: Corá e seus seguidores devem pegar incensários, colocar fogo e incenso, e apresentar-se perante o Senhor. "O homem a quem o Senhor escolher, este será o santo". Moisés devolve o desafio a Deus.'
      },
      {
        verseRef: 'v. 8-11',
        title: 'A Repreensão aos Levitas',
        description: 'Moisés confronta especificamente Corá e os levitas. Deus já os havia separado para o serviço do Tabernáculo, um grande privilégio. Mas eles não estavam satisfeitos: "procurais também o sacerdócio?". Moisés expõe a verdadeira natureza da rebelião: não era contra ele ou Arão, mas contra o Senhor.'
      }
    ],
    conclusion: 'Que possamos estar contentes com o lugar e o serviço que Deus nos designou, rejeitando a ambição egoísta e a insubordinação.'
  },
  {
    id: 'num_16_28_35',
    bookId: 'NUM',
    chapter: 16,
    startVerse: 28,
    endVerse: 35,
    title: 'O Julgamento de Corá, Datã e Abirão',
    theme: 'A Vindicação da Autoridade Divina',
    introduction: 'O confronto final ocorre. Moisés chama o povo para se afastar das tendas dos rebeldes. Deus intervém de forma dramática e sem precedentes para vindicar Seus servos e julgar a rebelião, demonstrando que rejeitar a liderança estabelecida por Ele é rejeitar o próprio Deus.',
    points: [
      {
        verseRef: 'v. 28-30',
        title: 'O Sinal Profético',
        description: 'Moisés declara que o povo saberá que Deus o enviou se algo inédito acontecer: se a terra abrir a sua boca e engolir os rebeldes com tudo o que lhes pertence, descendo vivos ao abismo (Seol). Isso provaria que "estes homens irritaram ao Senhor".'
      },
      {
        verseRef: 'v. 31-33',
        title: 'A Terra se Abre',
        description: 'Assim que Moisés termina de falar, a terra se fende debaixo de Datã e Abirão. A terra abre a boca e os engole, junto com suas famílias, suas tendas e todos os homens que pertenciam a Corá, e todos os seus bens. Eles descem vivos ao abismo, e a terra os cobre.'
      },
      {
        verseRef: 'v. 34-35',
        title: 'O Fogo Consumidor',
        description: 'Todo o Israel que estava ao redor foge aterrorizado com o grito deles. Simultaneamente, um fogo sai da parte do Senhor e consome os 250 homens que ofereciam o incenso (os seguidores de Corá). O juízo é duplo e definitivo, confirmando a santidade do sacerdócio aarônico.'
      }
    ],
    conclusion: 'Que possamos temer ao Senhor e reconhecer que a rebelião contra a Sua vontade traz consequências trágicas.'
  },
  {
    id: 'num_17_1_11',
    bookId: 'NUM',
    chapter: 17,
    startVerse: 1,
    endVerse: 11,
    title: 'A Vara de Arão que Floresceu',
    theme: 'A Escolha Divina e o Fim das Murmurações',
    introduction: 'Após a rebelião de Corá e a subsequente praga que matou milhares, Deus estabelece um teste final e pacífico para provar de uma vez por todas quem Ele escolheu para o sacerdócio. O milagre da vara de Arão serve como um testemunho permanente da eleição divina.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'O Teste das Varas',
        description: 'Deus ordena que cada líder das doze tribos traga uma vara com seu nome escrito nela. O nome de Arão deve estar na vara de Levi. As varas são colocadas na Tenda da Congregação, diante do Testemunho. Deus promete: "a vara do homem que eu escolher florescerá", para fazer cessar as murmurações.'
      },
      {
        verseRef: 'v. 8',
        title: 'O Milagre da Vida',
        description: 'No dia seguinte, Moisés entra na Tenda e vê que a vara de Arão havia brotado, produzido flores e dado amêndoas maduras. Um pedaço de madeira morta produziu vida abundante da noite para o dia. Isso simboliza que o sacerdócio e a vida espiritual dependem inteiramente do poder vivificador de Deus.'
      },
      {
        verseRef: 'v. 10-11',
        title: 'O Memorial Permanente',
        description: 'Deus ordena que a vara de Arão seja guardada diante do Testemunho (dentro da Arca da Aliança) como um sinal para os rebeldes, para que cessem as suas murmurações e não morram. A vara florescida é um lembrete da graça e da escolha soberana de Deus.'
      }
    ],
    conclusion: 'Que possamos reconhecer que o verdadeiro ministério é fruto da vida que Deus produz em nós, e não de nossa própria força.'
  },
  {
    id: 'num_20_1_13',
    bookId: 'NUM',
    chapter: 20,
    startVerse: 1,
    endVerse: 13,
    title: 'As Águas de Meribá (O Pecado de Moisés)',
    theme: 'A Desobediência da Liderança e a Santidade de Deus',
    introduction: 'Quase quarenta anos se passaram, e a nova geração chega a Cades. Miriã morre. Novamente, falta água, e o povo murmura. Neste episódio trágico, Moisés, o grande líder e profeta, perde a paciência, desobedece a Deus e perde o direito de entrar na Terra Prometida.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Murmuração Repetida',
        description: 'A nova geração repete o pecado de seus pais, contencendo com Moisés por falta de água e desejando ter morrido. Eles questionam por que foram trazidos a este "mau lugar". Moisés e Arão vão à porta da Tenda e caem sobre seus rostos, e a glória do Senhor lhes aparece.'
      },
      {
        verseRef: 'v. 7-11',
        title: 'A Ordem de Deus e a Desobediência de Moisés',
        description: 'Deus ordena a Moisés que pegue a vara e *fale* à rocha para que dê água. Em vez disso, Moisés, irado, repreende o povo ("Ouvi agora, rebeldes, porventura tiraremos água desta rocha para vós?") e *fere* a rocha duas vezes com a vara. A água sai abundantemente, pois Deus é fiel ao povo, apesar do erro do líder.'
      },
      {
        verseRef: 'v. 12-13',
        title: 'O Juízo sobre Moisés e Arão',
        description: 'Deus julga Moisés e Arão severamente: "Porquanto não crestes em mim, para me santificardes diante dos filhos de Israel, por isso não introduzireis esta congregação na terra que lhes tenho dado". Moisés falhou em representar a graça de Deus, agindo com ira carnal em vez de obediência exata.'
      }
    ],
    conclusion: 'Que possamos aprender que a obediência exata a Deus é essencial, e que líderes são julgados com maior rigor.'
  },
  {
    id: 'num_22_22_35',
    bookId: 'NUM',
    chapter: 22,
    startVerse: 22,
    endVerse: 35,
    title: 'Balaão e a Jumenta',
    theme: 'A Cegueira Espiritual e a Soberania de Deus',
    introduction: 'Balaque, rei de Moabe, contrata o profeta pagão Balaão para amaldiçoar Israel. Embora Deus tenha dito a Balaão para não ir, ele vai, movido pela ganância. No caminho, ocorre um dos episódios mais inusitados da Bíblia: Deus usa uma jumenta para repreender a cegueira espiritual do profeta.',
    points: [
      {
        verseRef: 'v. 22-27',
        title: 'A Visão da Jumenta e a Cegueira do Profeta',
        description: 'A ira de Deus se acende porque Balaão vai com motivos errados. O Anjo do Senhor se põe no caminho com uma espada desembainhada. A jumenta vê o Anjo e desvia três vezes (para o campo, contra o muro, e deitando-se). Balaão, o "vidente", está cego para a realidade espiritual e espanca o animal.'
      },
      {
        verseRef: 'v. 28-30',
        title: 'A Jumenta Fala',
        description: 'O Senhor abre a boca da jumenta, que questiona Balaão sobre os espancamentos. Balaão, enfurecido e irracional, discute com o animal, desejando ter uma espada para matá-la. A jumenta apela para o seu histórico de lealdade, expondo a irracionalidade da ira de Balaão.'
      },
      {
        verseRef: 'v. 31-35',
        title: 'A Revelação e a Repreensão',
        description: 'O Senhor abre os olhos de Balaão, que vê o Anjo e cai com o rosto em terra. O Anjo declara que o caminho de Balaão é perverso e que a jumenta salvou a vida dele. Balaão confessa o pecado e se oferece para voltar, mas o Anjo permite que ele prossiga, com a estrita condição de falar apenas o que Deus ordenar.'
      }
    ],
    conclusion: 'Que possamos ter nossos olhos espirituais abertos para ver a direção de Deus, evitando a cegueira causada pela ganância ou obstinação.'
  },
  {
    id: 'num_27_12_23',
    bookId: 'NUM',
    chapter: 27,
    startVerse: 12,
    endVerse: 23,
    title: 'A Sucessão de Josué',
    theme: 'A Transição de Liderança e o Cuidado Pastoral de Deus',
    introduction: 'Sabendo que sua morte se aproxima e que não entrará na Terra Prometida devido ao seu pecado em Meribá, a principal preocupação de Moisés não é consigo mesmo, mas com o futuro do povo. Ele pede a Deus um sucessor, e Deus escolhe Josué.',
    points: [
      {
        verseRef: 'v. 12-17',
        title: 'O Anúncio da Morte e a Oração de Moisés',
        description: 'Deus manda Moisés subir ao monte Abarim para ver a terra antes de morrer. Em vez de lamentar, Moisés ora: "O Senhor, Deus dos espíritos de toda a carne, ponha um homem sobre esta congregação... para que a congregação do Senhor não seja como ovelhas que não têm pastor". O verdadeiro líder ama o povo até o fim.'
      },
      {
        verseRef: 'v. 18-21',
        title: 'A Escolha de Josué',
        description: 'Deus responde ordenando que Moisés tome a Josué, "homem em quem há o Espírito", e imponha as mãos sobre ele. Josué deve ser apresentado perante o sacerdote Eleazar e toda a congregação. Moisés deve transferir parte da sua autoridade (glória) para ele, para que o povo lhe obedeça.'
      },
      {
        verseRef: 'v. 22-23',
        title: 'A Investidura Pública',
        description: 'Moisés obedece prontamente. Ele apresenta Josué perante Eleazar e a congregação, impõe as mãos sobre ele e lhe dá as ordens, conforme o Senhor havia falado. A transição de liderança é feita de forma clara, pública e com a bênção divina, garantindo a continuidade do propósito de Deus.'
      }
    ],
    conclusion: 'Que possamos orar por líderes cheios do Espírito e preparar a próxima geração para continuar a obra de Deus.'
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
console.log('Added 18 new Numbers pericopes.');
