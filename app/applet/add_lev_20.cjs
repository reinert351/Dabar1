const fs = require('fs');

const newPericopes = [
  {
    id: 'lev_1_1_9',
    bookId: 'LEV',
    chapter: 1,
    startVerse: 1,
    endVerse: 9,
    title: 'O Holocausto (A Oferta Queimada)',
    theme: 'A Consagração Total e a Expiação',
    introduction: 'O livro de Levítico começa com as instruções para as cinco ofertas principais. A primeira é o holocausto (Olah), uma oferta totalmente queimada no altar. Esta oferta representa a consagração completa do adorador a Deus e a expiação geral pelos pecados.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Oferta Voluntária e Sem Defeito',
        description: 'Deus chama Moisés da Tenda da Congregação e instrui que a oferta de gado deve ser um macho sem defeito. O adorador deve oferecê-la voluntariamente à porta da Tenda, demonstrando uma disposição genuína de se aproximar de Deus com o melhor que possui.'
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Identificação e o Sacrifício',
        description: 'O adorador deve colocar a mão sobre a cabeça do animal, um ato simbólico de identificação e transferência (o animal morre em seu lugar para expiação). O próprio adorador imola o animal, e os sacerdotes aspergem o sangue ao redor do altar, simbolizando a vida entregue a Deus.'
      },
      {
        verseRef: 'v. 6-9',
        title: 'O Cheiro Suave ao Senhor',
        description: 'O animal é esfolado, cortado em pedaços, e as entranhas e pernas são lavadas. O sacerdote queima tudo no altar. O texto descreve isso como "oferta queimada, de cheiro suave ao Senhor", indicando que a entrega total e a expiação são agradáveis e aceitáveis a Deus.'
      }
    ],
    conclusion: 'Que possamos oferecer nossas vidas como sacrifício vivo, santo e agradável a Deus, em total consagração.'
  },
  {
    id: 'lev_2_1_11',
    bookId: 'LEV',
    chapter: 2,
    startVerse: 1,
    endVerse: 11,
    title: 'A Oferta de Manjares (Cereais)',
    theme: 'A Gratidão e a Dedicação do Trabalho a Deus',
    introduction: 'A segunda oferta é a oferta de manjares (Minchah), a única oferta não sangrenta entre as principais. Consistia em produtos agrícolas (flor de farinha, azeite, incenso) e expressava gratidão a Deus pela provisão e a dedicação do fruto do trabalho humano ao Senhor.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Flor de Farinha e o Incenso',
        description: 'A oferta deve ser de flor de farinha (a melhor parte do trigo), misturada com azeite e incenso. O sacerdote queima um "punhado" no altar como porção memorial. O restante pertence aos sacerdotes. É uma oferta santíssima, demonstrando que nosso trabalho deve ser oferecido a Deus com excelência.'
      },
      {
        verseRef: 'v. 4-10',
        title: 'As Formas de Preparo',
        description: 'A oferta pode ser assada no forno, na assadeira ou na frigideira. Em todos os casos, deve ser feita sem fermento (simbolizando a ausência de corrupção ou pecado) e amassada com azeite (simbolizando a presença do Espírito). A variedade de preparos mostra que Deus aceita diferentes formas de dedicação.'
      },
      {
        verseRef: 'v. 11',
        title: 'A Proibição do Fermento e do Mel',
        description: 'Nenhuma oferta de manjares queimada no altar pode conter fermento ou mel. Ambos são agentes de fermentação e corrupção quando expostos ao calor. A adoração a Deus deve ser pura, livre da corrupção do pecado (fermento) e dos prazeres meramente naturais ou carnais (mel).'
      }
    ],
    conclusion: 'Que possamos dedicar o fruto do nosso trabalho a Deus com gratidão, pureza e excelência.'
  },
  {
    id: 'lev_3_1_5',
    bookId: 'LEV',
    chapter: 3,
    startVerse: 1,
    endVerse: 5,
    title: 'A Oferta Pacífica (Comunhão)',
    theme: 'A Paz e a Comunhão com Deus',
    introduction: 'A oferta pacífica (Shelamim) era um sacrifício de comunhão, frequentemente oferecido em resposta a uma bênção recebida ou para cumprir um voto. Diferente do holocausto (totalmente queimado), a oferta pacífica era dividida entre Deus, o sacerdote e o adorador, culminando em uma refeição festiva.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Imposição das Mãos e o Sangue',
        description: 'O adorador traz um animal sem defeito (macho ou fêmea), põe a mão sobre a cabeça do animal e o imola à porta da Tenda. Os sacerdotes aspergem o sangue sobre o altar. A paz com Deus sempre requer a base do sangue derramado (expiação).'
      },
      {
        verseRef: 'v. 3-4',
        title: 'A Porção do Senhor (A Gordura)',
        description: 'A gordura que cobre as entranhas, os rins e o lóbulo do fígado são separados como a porção do Senhor. Na cultura antiga, a gordura era considerada a melhor e mais rica parte do animal. Devemos oferecer a Deus o melhor de nós, não as sobras.'
      },
      {
        verseRef: 'v. 5',
        title: 'O Fogo da Comunhão',
        description: 'Os sacerdotes queimam a gordura no altar, sobre o holocausto. É uma oferta de cheiro suave ao Senhor. O fato de ser queimada "sobre o holocausto" indica que a comunhão pacífica com Deus só é possível após a expiação e a consagração total.'
      }
    ],
    conclusion: 'Que possamos celebrar a paz e a comunhão que temos com Deus através de Cristo, oferecendo-Lhe o nosso melhor.'
  },
  {
    id: 'lev_4_1_12',
    bookId: 'LEV',
    chapter: 4,
    startVerse: 1,
    endVerse: 12,
    title: 'A Oferta pelo Pecado (Purificação)',
    theme: 'A Purificação da Culpa Involuntária',
    introduction: 'A oferta pelo pecado (Chattat) lidava com pecados cometidos por ignorância ou fraqueza contra os mandamentos de Deus. Ela focava na purificação do santuário e do adorador da contaminação do pecado. As exigências variavam de acordo com a posição do pecador na comunidade.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Pecado do Sacerdote Ungido',
        description: 'Se o sumo sacerdote pecar, trazendo culpa sobre o povo, ele deve oferecer um novilho sem defeito. O pecado do líder tem consequências mais graves e exige o sacrifício mais custoso. Ele impõe a mão sobre o novilho e o imola perante o Senhor.'
      },
      {
        verseRef: 'v. 5-7',
        title: 'A Aspersão do Sangue no Santuário',
        description: 'O sangue do novilho é levado para dentro da Tenda. O sacerdote asperge o sangue sete vezes diante do véu do santuário e coloca sangue nas pontas do altar do incenso. O sangue purifica o lugar santo da contaminação causada pelo pecado do líder.'
      },
      {
        verseRef: 'v. 8-12',
        title: 'A Queima Fora do Arraial',
        description: 'A gordura é queimada no altar do holocausto, mas o restante do novilho (couro, carne, cabeça, pernas, entranhas, esterco) deve ser levado para fora do arraial, a um lugar limpo, e queimado. O pecado traz impureza que deve ser removida da presença de Deus e da comunidade.'
      }
    ],
    conclusion: 'Que possamos reconhecer a gravidade do pecado e buscar a purificação contínua através do sangue de Jesus.'
  },
  {
    id: 'lev_5_14_19',
    bookId: 'LEV',
    chapter: 5,
    startVerse: 14,
    endVerse: 19,
    title: 'A Oferta pela Culpa (Reparação)',
    theme: 'A Restituição e a Reparação do Dano',
    introduction: 'A oferta pela culpa (Asham) era exigida quando o pecado envolvia uma violação dos direitos de propriedade (seja as coisas sagradas de Deus ou a propriedade do próximo). Além do sacrifício, exigia-se a restituição do valor com um acréscimo de 20%.',
    points: [
      {
        verseRef: 'v. 14-15',
        title: 'O Pecado nas Coisas Sagradas',
        description: 'Se alguém pecar por ignorância nas coisas sagradas do Senhor (como reter dízimos ou ofertas), deve trazer um carneiro sem defeito, avaliado em siclos de prata, como oferta pela culpa. O pecado contra Deus é tratado com seriedade e requer reparação.'
      },
      {
        verseRef: 'v. 16',
        title: 'A Restituição e a Multa',
        description: 'O ofensor deve restituir o que tirou das coisas sagradas e acrescentar a quinta parte (20%), entregando tudo ao sacerdote. O arrependimento verdadeiro não é apenas sentir remorso, mas envolve a disposição de reparar o dano causado, na medida do possível.'
      },
      {
        verseRef: 'v. 17-19',
        title: 'A Culpa Inconsciente',
        description: 'Mesmo que a pessoa peque contra os mandamentos do Senhor sem saber, ela ainda é culpada e levará a sua iniquidade. Ao descobrir o erro, deve trazer o carneiro para a oferta pela culpa. A ignorância não anula a culpa diante da santidade absoluta de Deus.'
      }
    ],
    conclusion: 'Que possamos praticar um arrependimento que busca a reparação e a restituição, honrando a santidade de Deus.'
  },
  {
    id: 'lev_8_1_13',
    bookId: 'LEV',
    chapter: 8,
    startVerse: 1,
    endVerse: 13,
    title: 'A Consagração de Arão e Seus Filhos',
    theme: 'A Preparação e a Santificação para o Ministério',
    introduction: 'O capítulo 8 descreve a cerimônia de consagração (ordenação) de Arão e seus filhos para o sacerdócio, seguindo as instruções dadas em Êxodo 29. Este evento público marca a separação oficial da família de Arão para o serviço sagrado no Tabernáculo.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Convocação da Congregação',
        description: 'Deus ordena a Moisés que reúna Arão, seus filhos, as vestes, o óleo da unção e os animais para o sacrifício à porta da Tenda da Congregação. Toda a congregação é reunida para testemunhar. O ministério público requer reconhecimento e validação pública.'
      },
      {
        verseRef: 'v. 6-9',
        title: 'A Lavagem e a Vestidura',
        description: 'Moisés lava Arão e seus filhos com água, simbolizando a purificação necessária para se aproximar de Deus. Em seguida, Moisés veste Arão com as vestes sagradas (túnica, manto, éfode, peitoral com Urim e Tumim, e a mitra com a coroa de ouro). As vestes representam a dignidade e a santidade do ofício.'
      },
      {
        verseRef: 'v. 10-13',
        title: 'A Unção com Óleo',
        description: 'Moisés unge o Tabernáculo e todos os seus utensílios para santificá-los. Depois, derrama o óleo da unção sobre a cabeça de Arão para santificá-lo. O óleo simboliza o Espírito Santo, capacitando o sacerdote para o seu ministério mediador.'
      }
    ],
    conclusion: 'Que possamos buscar a purificação e a unção do Espírito Santo para servirmos a Deus em nossos chamados.'
  },
  {
    id: 'lev_9_1_24',
    bookId: 'LEV',
    chapter: 9,
    startVerse: 1,
    endVerse: 24,
    title: 'O Início do Ministério Sacerdotal',
    theme: 'A Manifestação da Glória de Deus',
    introduction: 'Após sete dias de consagração, Arão e seus filhos iniciam seu ministério no oitavo dia. Eles oferecem sacrifícios por si mesmos e pelo povo. O clímax deste dia histórico é a manifestação visível da glória de Deus, aprovando o sacerdócio e os sacrifícios.',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'A Ordem para os Sacrifícios',
        description: 'Moisés instrui Arão a oferecer sacrifícios pelo pecado e holocaustos, primeiro por si mesmo e depois pelo povo. A promessa é clara: "hoje o Senhor vos aparecerá". O líder espiritual deve primeiro cuidar de sua própria purificação antes de ministrar em favor dos outros.'
      },
      {
        verseRef: 'v. 8-22',
        title: 'A Execução do Ministério',
        description: 'Arão obedece rigorosamente, oferecendo a oferta pelo pecado, o holocausto, a oferta de manjares e a oferta pacífica. Após concluir os sacrifícios, Arão levanta as mãos para o povo e os abençoa. A obediência exata às instruções de Deus é o caminho para a bênção.'
      },
      {
        verseRef: 'v. 23-24',
        title: 'O Fogo Divino',
        description: 'Moisés e Arão entram na Tenda e, ao saírem, abençoam o povo novamente. A glória do Senhor aparece a todo o povo, e um fogo sai de diante do Senhor, consumindo o holocausto no altar. O povo, maravilhado, exulta e prostra-se com o rosto em terra em adoração.'
      }
    ],
    conclusion: 'Que possamos ministrar com obediência e reverência, aguardando a manifestação da glória e do poder de Deus.'
  },
  {
    id: 'lev_10_1_7',
    bookId: 'LEV',
    chapter: 10,
    startVerse: 1,
    endVerse: 7,
    title: 'O Fogo Estranho de Nadabe e Abiú',
    theme: 'A Santidade de Deus e o Perigo da Presunção',
    introduction: 'Logo após a gloriosa inauguração do Tabernáculo, ocorre uma tragédia. Nadabe e Abiú, filhos mais velhos de Arão, desobedecem às instruções divinas e oferecem "fogo estranho" perante o Senhor. O juízo é imediato e severo, servindo como um alerta solene sobre a santidade de Deus.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'O Pecado e o Juízo Imediato',
        description: 'Nadabe e Abiú pegam seus incensários, colocam fogo e incenso, e oferecem "fogo estranho" (não autorizado) perante o Senhor. Imediatamente, fogo sai de diante do Senhor e os consome. O mesmo fogo que aceitou o sacrifício no capítulo anterior agora julga a presunção e a desobediência.'
      },
      {
        verseRef: 'v. 3',
        title: 'A Declaração de Santidade',
        description: 'Moisés explica a Arão o significado do juízo: "Isto é o que o Senhor falou, dizendo: Serei santificado naqueles que se chegarem a mim, e serei glorificado diante de todo o povo". Deus exige reverência absoluta daqueles que o servem. Arão, em choque, cala-se, submetendo-se à justiça divina.'
      },
      {
        verseRef: 'v. 4-7',
        title: 'O Luto Proibido',
        description: 'Moisés ordena que os corpos sejam retirados do acampamento. Ele proíbe Arão e seus outros filhos (Eleazar e Itamar) de demonstrarem luto (descobrir a cabeça ou rasgar as roupas), para que não morram e a ira não venha sobre a congregação. A lealdade a Deus deve superar os laços familiares.'
      }
    ],
    conclusion: 'Que possamos nos aproximar de Deus com temor e tremor, respeitando Suas instruções e honrando Sua santidade.'
  },
  {
    id: 'lev_11_1_47',
    bookId: 'LEV',
    chapter: 11,
    startVerse: 1,
    endVerse: 47,
    title: 'As Leis de Pureza Alimentar',
    theme: 'A Separação e a Santidade Prática',
    introduction: 'O capítulo 11 detalha as leis dietéticas dadas a Israel, distinguindo entre animais "limpos" (permitidos para consumo) e "imundos" (proibidos). Estas leis não eram apenas sobre saúde, mas serviam como um lembrete diário de que Israel era um povo separado e santo para Deus.',
    points: [
      {
        verseRef: 'v. 1-8',
        title: 'Os Animais Terrestres',
        description: 'A regra para os animais terrestres é que devem ter unhas fendidas (casco dividido) e ruminar. Animais como o camelo, o coelho, a lebre e o porco são declarados imundos porque não possuem ambas as características. O povo não deve comer sua carne nem tocar em seus cadáveres.'
      },
      {
        verseRef: 'v. 9-23',
        title: 'As Criaturas Aquáticas e as Aves',
        description: 'Para as criaturas aquáticas, apenas as que têm barbatanas e escamas são limpas (excluindo mariscos e crustáceos). Uma lista específica de aves (principalmente aves de rapina e carniceiras) é proibida. Entre os insetos, apenas os que têm pernas saltadoras (como gafanhotos) são permitidos.'
      },
      {
        verseRef: 'v. 44-47',
        title: 'O Princípio da Santidade',
        description: 'Deus resume o propósito destas leis: "Porque eu sou o Senhor vosso Deus; portanto vós vos santificareis, e sereis santos, porque eu sou santo". A distinção na dieta era uma marca visível da separação espiritual de Israel das nações vizinhas, um chamado à santidade em todos os aspectos da vida.'
      }
    ],
    conclusion: 'Que possamos viver como um povo separado para Deus, refletindo Sua santidade em nossas escolhas diárias.'
  },
  {
    id: 'lev_16_11_22',
    bookId: 'LEV',
    chapter: 16,
    startVerse: 11,
    endVerse: 22,
    title: 'O Bode Emissário (Yom Kippur)',
    theme: 'A Expiação e a Remoção do Pecado',
    introduction: 'No Dia da Expiação (Yom Kippur), o ritual mais solene do ano judaico, o sumo sacerdote realizava a expiação pelos pecados de toda a nação. O ritual envolvia dois bodes: um era sacrificado para propiciação, e o outro, o bode emissário, levava os pecados para o deserto.',
    points: [
      {
        verseRef: 'v. 11-14',
        title: 'A Expiação pelo Sacerdote',
        description: 'Antes de ministrar pelo povo, Arão deve oferecer um novilho como oferta pelo pecado por si mesmo e por sua casa. Ele entra no Santo dos Santos com incenso (para cobrir o propiciatório com fumaça, protegendo-o da morte) e asperge o sangue do novilho no propiciatório.'
      },
      {
        verseRef: 'v. 15-19',
        title: 'O Bode do Sacrifício',
        description: 'Arão imola o bode da oferta pelo pecado do povo e leva seu sangue para dentro do véu, aspergindo-o no propiciatório. Isso faz expiação pelo santuário, purificando-o das impurezas e transgressões dos filhos de Israel. O sangue derramado satisfaz a justiça de Deus.'
      },
      {
        verseRef: 'v. 20-22',
        title: 'O Bode Emissário (Azazel)',
        description: 'Arão impõe as duas mãos sobre a cabeça do bode vivo e confessa sobre ele todas as iniquidades e transgressões de Israel. O bode é então enviado para o deserto por mão de um homem designado. O bode leva sobre si os pecados para uma terra solitária, simbolizando a remoção completa da culpa.'
      }
    ],
    conclusion: 'Que possamos celebrar a obra completa de Cristo, que derramou Seu sangue para nos purificar e removeu nossos pecados para longe de nós.'
  },
  {
    id: 'lev_17_10_14',
    bookId: 'LEV',
    chapter: 17,
    startVerse: 10,
    endVerse: 14,
    title: 'A Santidade do Sangue',
    theme: 'A Vida e a Expiação',
    introduction: 'O capítulo 17 estabelece regras estritas sobre o abate de animais e o consumo de sangue. Deus proíbe terminantemente a ingestão de sangue, revelando o profundo significado teológico do sangue como o veículo da vida e o meio de expiação no altar.',
    points: [
      {
        verseRef: 'v. 10',
        title: 'A Proibição Absoluta',
        description: 'Deus declara que voltará o Seu rosto contra qualquer pessoa (israelita ou estrangeiro) que comer sangue, e a extirpará do seu povo. Esta proibição severa destaca a importância vital e sagrada que Deus atribui ao sangue.'
      },
      {
        verseRef: 'v. 11',
        title: 'A Razão Teológica: A Vida e a Expiação',
        description: 'A razão central é dada: "Porque a vida da carne está no sangue; pelo que vo-lo tenho dado sobre o altar, para fazer expiação pelas vossas almas, porquanto é o sangue que fará expiação pela alma". O sangue é sagrado porque representa a vida, e Deus o designou exclusivamente para a expiação.'
      },
      {
        verseRef: 'v. 13-14',
        title: 'O Respeito pela Vida Animal',
        description: 'Mesmo na caça de animais limpos, o sangue deve ser derramado e coberto com pó. A repetição do princípio ("a vida de toda a carne é o seu sangue") reforça que a vida pertence a Deus. O respeito pelo sangue é um respeito pelo Doador da vida e pelo Seu método de salvação.'
      }
    ],
    conclusion: 'Que possamos reverenciar o sangue de Cristo, o único meio pelo qual recebemos vida e expiação eterna.'
  },
  {
    id: 'lev_18_1_5',
    bookId: 'LEV',
    chapter: 18,
    startVerse: 1,
    endVerse: 5,
    title: 'A Proibição das Práticas Pagãs',
    theme: 'A Identidade Exclusiva do Povo de Deus',
    introduction: 'O capítulo 18 introduz uma série de leis morais, focadas principalmente na pureza sexual. Antes de listar as proibições, Deus estabelece o princípio fundamental: Israel não deve imitar as práticas corruptas do Egito (de onde saíram) nem de Canaã (para onde vão).',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Base da Autoridade',
        description: 'A seção começa com a declaração de autoridade divina: "Eu sou o Senhor vosso Deus". Toda a moralidade e ética de Israel devem ser baseadas no caráter e no domínio de Yahweh, não em conveniências culturais ou tradições humanas.'
      },
      {
        verseRef: 'v. 3',
        title: 'A Rejeição da Cultura Pagã',
        description: 'Deus ordena explicitamente: "Não fareis segundo as obras da terra do Egito... nem fareis segundo as obras da terra de Canaã... nem andareis nos seus estatutos". O povo de Deus é chamado a ser contracultural, rejeitando os padrões morais corrompidos do mundo ao seu redor.'
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Vida na Obediência',
        description: 'Israel deve guardar os juízos e estatutos de Deus. A promessa é que "o homem que os fizer, por eles viverá". A obediência à lei de Deus não é apenas um fardo, mas o caminho para a verdadeira vida e florescimento sob a bênção divina.'
      }
    ],
    conclusion: 'Que possamos resistir à conformidade com o mundo e encontrar a verdadeira vida na obediência à Palavra de Deus.'
  },
  {
    id: 'lev_19_1_4',
    bookId: 'LEV',
    chapter: 19,
    startVerse: 1,
    endVerse: 4,
    title: 'O Chamado à Santidade',
    theme: 'A Imitação do Caráter de Deus',
    introduction: 'O capítulo 19 é o coração do "Código de Santidade" em Levítico. Ele contém uma mistura de leis morais, rituais e sociais. A premissa de todas estas leis é o chamado fundamental para que o povo reflita o caráter santo do seu Deus.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'O Padrão de Santidade',
        description: 'Deus diz a Moisés para falar a toda a congregação: "Santos sereis, porque eu, o Senhor vosso Deus, sou santo". A santidade não é uma opção para uma elite espiritual, mas a vocação de todo o povo. O padrão de santidade não é humano, mas o próprio caráter de Deus.'
      },
      {
        verseRef: 'v. 3',
        title: 'O Respeito aos Pais e ao Sábado',
        description: 'As primeiras aplicações práticas da santidade são o temor (respeito profundo) à mãe e ao pai, e a guarda dos sábados. A santidade começa em casa, nas relações familiares básicas, e no respeito ao tempo sagrado estabelecido por Deus.'
      },
      {
        verseRef: 'v. 4',
        title: 'A Rejeição da Idolatria',
        description: 'Deus adverte: "Não vos virareis para os ídolos nem vos fareis deuses de fundição". A santidade exige lealdade exclusiva a Yahweh. A idolatria é a antítese da santidade, pois substitui o Criador por coisas criadas.'
      }
    ],
    conclusion: 'Que possamos buscar a santidade em todas as áreas de nossas vidas, refletindo o caráter do nosso Deus Santo.'
  },
  {
    id: 'lev_19_9_18',
    bookId: 'LEV',
    chapter: 19,
    startVerse: 9,
    endVerse: 18,
    title: 'O Amor ao Próximo e a Justiça Social',
    theme: 'A Santidade Expressa nas Relações Humanas',
    introduction: 'A santidade em Levítico não se limita a rituais no Tabernáculo; ela se estende profundamente à ética social e ao tratamento do próximo. Esta passagem contém algumas das leis mais belas sobre justiça social e culmina no mandamento de amar o próximo.',
    points: [
      {
        verseRef: 'v. 9-10',
        title: 'A Provisão para os Pobres',
        description: 'Ao fazer a colheita, os israelitas não devem segar os cantos do campo nem recolher as espigas caídas ou as uvas que caírem. Eles devem deixá-las para o pobre e para o estrangeiro. A propriedade privada é subordinada à responsabilidade social e à compaixão.'
      },
      {
        verseRef: 'v. 11-16',
        title: 'A Integridade e a Justiça',
        description: 'A lei proíbe furtar, mentir, jurar falso, oprimir o próximo, reter o salário do trabalhador, amaldiçoar o surdo, pôr tropeço diante do cego, e ser parcial no julgamento. A santidade exige integridade absoluta e proteção dos vulneráveis.'
      },
      {
        verseRef: 'v. 17-18',
        title: 'O Amor ao Próximo',
        description: 'A lei proíbe o ódio no coração, a vingança e o rancor. O clímax desta seção é o mandamento que Jesus chamou de o segundo maior: "amarás o teu próximo como a ti mesmo. Eu sou o Senhor". O amor prático é a maior expressão da santidade.'
      }
    ],
    conclusion: 'Que possamos demonstrar nossa santidade através do amor prático, da justiça e da compaixão para com o nosso próximo.'
  },
  {
    id: 'lev_20_22_26',
    bookId: 'LEV',
    chapter: 20,
    startVerse: 22,
    endVerse: 26,
    title: 'A Separação das Nações',
    theme: 'A Herança da Terra e a Distinção do Povo de Deus',
    introduction: 'No final da seção sobre punições para pecados graves, Deus reitera o propósito da separação de Israel. A obediência às leis de Deus é a condição para permanecer na Terra Prometida, e a santidade é a marca que os distingue das nações que estão sendo expulsas.',
    points: [
      {
        verseRef: 'v. 22-23',
        title: 'O Perigo da Expulsão',
        description: 'Deus adverte Israel a guardar os estatutos para que a terra (Canaã) não os "vomite". Eles não devem andar nos costumes das nações que Deus está expulsando, pois essas nações cometeram abominações e Deus se aborreceu delas. O pecado contamina a terra.'
      },
      {
        verseRef: 'v. 24',
        title: 'A Promessa da Herança',
        description: 'Deus promete dar a Israel a terra por herança, uma terra que "mana leite e mel". Ele declara: "Eu sou o Senhor vosso Deus, que vos separei dos povos". A herança é um presente da graça, mas a posse contínua exige fidelidade à aliança.'
      },
      {
        verseRef: 'v. 25-26',
        title: 'A Distinção Visível',
        description: 'A separação espiritual deve ser refletida na prática, fazendo diferença entre animais limpos e imundos. Deus conclui: "E sereis para mim santos; porque eu, o Senhor, sou santo, e vos separei dos povos, para serdes meus". A santidade é pertencer exclusivamente a Deus.'
      }
    ],
    conclusion: 'Que possamos viver como um povo separado e peculiar, honrando a Deus e desfrutando da herança que Ele nos preparou.'
  },
  {
    id: 'lev_23_1_8',
    bookId: 'LEV',
    chapter: 23,
    startVerse: 1,
    endVerse: 8,
    title: 'O Sábado e a Páscoa',
    theme: 'O Tempo Sagrado e a Celebração da Redenção',
    introduction: 'O capítulo 23 lista as "festas fixas" (moedim) do Senhor, os tempos sagrados de convocação santa. O calendário litúrgico de Israel começa com o Sábado semanal e a primeira festa anual, a Páscoa, lembrando o povo de que Deus é o Senhor do tempo e da história.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Sábado Semanal',
        description: 'Antes das festas anuais, Deus enfatiza o Sábado (Shabbat). Seis dias de trabalho, mas o sétimo é "sábado de descanso solene, santa convocação". Nenhum trabalho deve ser feito. O Sábado é o fundamento do tempo sagrado, um lembrete semanal da criação e da aliança.'
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Páscoa do Senhor',
        description: 'No décimo quarto dia do primeiro mês, à tardinha, é a Páscoa (Pessach) do Senhor. Esta festa comemora a libertação do Egito, quando o anjo da morte passou por cima das casas marcadas com o sangue do cordeiro. É a celebração fundamental da redenção.'
      },
      {
        verseRef: 'v. 6-8',
        title: 'A Festa dos Pães Asmos',
        description: 'No décimo quinto dia começa a Festa dos Pães Asmos (Matzot), que dura sete dias. O povo deve comer pão sem fermento e oferecer ofertas queimadas. O primeiro e o sétimo dias são santas convocações, com proibição de trabalho servil. Simboliza a pureza e a pressa da saída do Egito.'
      }
    ],
    conclusion: 'Que possamos santificar o nosso tempo para Deus e celebrar continuamente a redenção que temos no Cordeiro de Deus.'
  },
  {
    id: 'lev_23_15_22',
    bookId: 'LEV',
    chapter: 23,
    startVerse: 15,
    endVerse: 22,
    title: 'A Festa de Pentecostes (Semanas)',
    theme: 'A Celebração da Colheita e a Provisão Divina',
    introduction: 'A Festa das Semanas (Shavuot), mais tarde conhecida como Pentecostes (cinquenta dias), celebrava a colheita do trigo. Era uma festa de alegria e gratidão pela provisão de Deus, e também incluía um lembrete prático de cuidar dos necessitados.',
    points: [
      {
        verseRef: 'v. 15-16',
        title: 'A Contagem dos Cinquenta Dias',
        description: 'A partir do dia seguinte ao sábado (após a oferta do molho movido), o povo deve contar sete semanas inteiras (50 dias). Esta contagem liga a colheita da cevada (Páscoa) à colheita do trigo (Pentecostes), mostrando que toda a provisão vem de Deus.'
      },
      {
        verseRef: 'v. 17-21',
        title: 'A Nova Oferta de Manjares',
        description: 'O povo deve trazer dois pães cozidos com fermento como oferta movida ao Senhor, junto com sacrifícios de animais. É uma santa convocação, um dia de alegria e descanso. No Novo Testamento, este dia marcou o derramamento do Espírito Santo e o início da Igreja.'
      },
      {
        verseRef: 'v. 22',
        title: 'A Lembrança dos Pobres',
        description: 'No meio das instruções da festa, Deus repete a lei da respiga: ao fazer a colheita, não segar os cantos do campo nem recolher as espigas caídas, mas deixá-las para o pobre e o estrangeiro. A verdadeira gratidão a Deus sempre se expressa em generosidade para com o próximo.'
      }
    ],
    conclusion: 'Que possamos agradecer a Deus por Sua abundante provisão e compartilhar nossas bênçãos com os necessitados.'
  },
  {
    id: 'lev_23_33_43',
    bookId: 'LEV',
    chapter: 23,
    startVerse: 33,
    endVerse: 43,
    title: 'A Festa dos Tabernáculos (Cabanas)',
    theme: 'A Alegria da Colheita e a Memória da Peregrinação',
    introduction: 'A Festa dos Tabernáculos (Sukkot) era a última e mais alegre festa do ano, celebrada no outono após a colheita final. Durante sete dias, o povo habitava em tendas de ramos, lembrando a peregrinação no deserto e celebrando a fidelidade contínua de Deus.',
    points: [
      {
        verseRef: 'v. 33-36',
        title: 'Os Oito Dias de Celebração',
        description: 'A festa começa no décimo quinto dia do sétimo mês. O primeiro e o oitavo dias são santas convocações com descanso solene. Durante sete dias, ofertas queimadas são apresentadas ao Senhor. É a grande festa de encerramento do ano agrícola.'
      },
      {
        verseRef: 'v. 39-40',
        title: 'A Alegria Perante o Senhor',
        description: 'O povo deve tomar ramos de árvores formosas, palmas, ramos de árvores espessas e salgueiros de ribeiras, e se alegrar perante o Senhor por sete dias. É uma ordem divina para celebrar e regozijar-se na bondade e na provisão de Deus.'
      },
      {
        verseRef: 'v. 41-43',
        title: 'Habitando em Cabanas',
        description: 'Todos os naturais de Israel devem habitar em cabanas (sukkot) por sete dias. O propósito é educacional e memorial: "para que saibam as vossas gerações que eu fiz habitar os filhos de Israel em cabanas, quando os tirei da terra do Egito". A prosperidade presente não deve apagar a memória da dependência passada.'
      }
    ],
    conclusion: 'Que possamos nos alegrar na fidelidade de Deus e lembrar que somos peregrinos neste mundo, dependentes de Sua graça.'
  },
  {
    id: 'lev_25_1_7',
    bookId: 'LEV',
    chapter: 25,
    startVerse: 1,
    endVerse: 7,
    title: 'O Ano Sabático',
    theme: 'O Descanso da Terra e a Confiança na Provisão',
    introduction: 'Deus estabelece leis não apenas para o descanso humano, mas também para o descanso da terra. O Ano Sabático (Shmita), a cada sete anos, exigia que a terra repousasse e que o povo confiasse inteiramente na provisão divina, demonstrando que Deus é o verdadeiro dono da terra.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Sábado da Terra',
        description: 'Quando entrarem na terra, a própria terra deve guardar um "sábado ao Senhor". Durante seis anos, o povo pode semear, podar e colher. Mas o sétimo ano será um "sábado de descanso solene para a terra". Não se deve semear nem podar as vinhas.'
      },
      {
        verseRef: 'v. 5',
        title: 'A Proibição da Colheita Comercial',
        description: 'O que nascer de si mesmo (a colheita espontânea) não deve ser segado, e as uvas da vinha não podada não devem ser colhidas. O ano é de descanso absoluto para a terra, interrompendo o ciclo normal de exploração agrícola e acumulação de riqueza.'
      },
      {
        verseRef: 'v. 6-7',
        title: 'O Alimento para Todos',
        description: 'O produto espontâneo da terra durante o ano sabático servirá de alimento para todos em pé de igualdade: o dono da terra, o servo, a serva, o jornaleiro, o estrangeiro, e até mesmo os animais domésticos e selvagens. É um ano de igualdade social e provisão compartilhada.'
      }
    ],
    conclusion: 'Que possamos confiar na provisão de Deus, praticar a generosidade e reconhecer que tudo o que temos pertence a Ele.'
  },
  {
    id: 'lev_25_8_17',
    bookId: 'LEV',
    chapter: 25,
    startVerse: 8,
    endVerse: 17,
    title: 'O Ano do Jubileu',
    theme: 'A Liberdade, a Restituição e a Justiça Econômica',
    introduction: 'O Ano do Jubileu (Yovel), celebrado a cada cinquenta anos, era o ápice do sistema sabático de Israel. Era um ano de libertação radical, onde as dívidas eram perdoadas, os escravos israelitas eram libertos e as terras ancestrais eram devolvidas aos seus donos originais.',
    points: [
      {
        verseRef: 'v. 8-10',
        title: 'A Proclamação da Liberdade',
        description: 'Após sete semanas de anos (49 anos), no Dia da Expiação do quinquagésimo ano, a trombeta (shofar) deve soar por toda a terra. O ano deve ser santificado e a liberdade proclamada a todos os habitantes. Cada um tornará à sua possessão e à sua família.'
      },
      {
        verseRef: 'v. 11-12',
        title: 'O Descanso Contínuo',
        description: 'O Jubileu é um ano santo. Assim como no ano sabático, não se deve semear, nem segar o que nascer de si mesmo. O povo comerá do produto do campo. Isso exigia uma fé extraordinária, pois o Jubileu seguia o 49º ano (um ano sabático), significando dois anos sem plantio.'
      },
      {
        verseRef: 'v. 13-17',
        title: 'A Justiça nas Transações',
        description: 'No Jubileu, a terra volta ao dono original. Portanto, a venda de terras era, na verdade, um arrendamento baseado no número de colheitas até o próximo Jubileu. Deus ordena: "Não oprimais uns aos outros; mas terás temor do teu Deus". A economia deve ser regida pela justiça e pelo temor a Deus.'
      }
    ],
    conclusion: 'Que possamos ansiar pelo Jubileu eterno em Cristo, que traz libertação aos cativos e restauração de todas as coisas.'
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
console.log('Added 20 new Leviticus pericopes.');
