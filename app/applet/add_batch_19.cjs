const fs = require('fs');

const newPericopes = [
  {
    id: '1ch_4_9_10',
    bookId: '1CH',
    chapter: 4,
    startVerse: 9,
    endVerse: 10,
    title: 'A Oração de Jabez',
    theme: 'A Busca por Bênção, a Quebra de Maldições e o Alargamento de Fronteiras',
    introduction: 'No meio de longas listas genealógicas, o autor de Crônicas faz uma pausa abrupta para destacar um homem chamado Jabez. Seu nome significava "dor" ou "sofrimento", um fardo colocado por sua mãe no nascimento. No entanto, Jabez recusou-se a ser definido pelo seu passado ou pelo seu nome. Ele clamou ao Deus de Israel com uma oração ousada, pedindo bênção, expansão, a presença de Deus e proteção contra o mal. A resposta de Deus a essa oração curta, mas poderosa, nos ensina que o nosso destino não é determinado pelo nosso início, mas pela nossa fé.',
    points: [
      {
        verseRef: 'v. 9',
        title: 'O Estigma do Nome e a Honra Superada',
        description: 'A mãe de Jabez lhe deu esse nome dizendo: "Com dores o dei à luz". Na cultura bíblica, o nome definia a identidade e o destino. Jabez carregava o estigma da dor. Contudo, o texto afirma que ele "foi mais ilustre do que seus irmãos". A honra que ele alcançou não veio de sua linhagem, mas da sua busca por Deus.'
      },
      {
        verseRef: 'v. 10a',
        title: 'O Clamor por Bênção e Expansão',
        description: 'Jabez invoca o Deus de Israel e faz um pedido direto: "Se me abençoares muitíssimo, e meus termos ampliares...". Ele não se contenta com a mediocridade ou com as limitações que a vida lhe impôs. Ele pede que Deus alargue as suas fronteiras, seja em território, influência ou capacidade de abençoar outros.'
      },
      {
        verseRef: 'v. 10b',
        title: 'A Presença, a Proteção e a Resposta',
        description: 'Ele conclui a oração pedindo a presença de Deus ("que a tua mão seja comigo") e proteção ("e faças que do mal não seja afligido, para que não me doa"). Ele pede para ser livre da "dor" que o seu próprio nome profetizava. O versículo termina de forma triunfal: "E Deus lhe concedeu o que lhe tinha pedido".'
      }
    ],
    conclusion: 'A oração de Jabez não é uma fórmula mágica para a prosperidade egoísta, mas um clamor de dependência. Deus concedeu o que ele pediu porque o seu coração estava alinhado com a vontade divina. Não importa o "nome" ou o rótulo que o mundo colocou sobre nós; em Cristo, somos novas criaturas e podemos clamar por fronteiras espirituais alargadas para a glória de Deus. A oração tem o poder de reescrever a nossa história e quebrar os ciclos de dor do nosso passado.'
  },
  {
    id: '1ch_10_1_14',
    bookId: '1CH',
    chapter: 10,
    startVerse: 1,
    endVerse: 14,
    title: 'A Morte de Saul e o Juízo Divino',
    theme: 'A Desobediência, a Consulta às Trevas e a Transferência do Reino',
    introduction: 'O livro de 1 Crônicas ignora quase todo o reinado de Saul e foca diretamente na sua morte trágica no Monte Gilboa. O autor sagrado faz isso para estabelecer um contraste teológico: o reino de Saul falhou porque foi construído na carne, enquanto o reino de Davi (que será o foco do livro) é estabelecido por Deus. 1 Crônicas 10 não apenas narra o suicídio de Saul, mas fornece o veredito teológico sobre a sua vida: ele morreu por causa da sua transgressão contra a Palavra do Senhor e por buscar a orientação de uma necromante em vez de buscar a Deus.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Batalha de Gilboa e a Morte Trágica',
        description: 'Os filisteus atacam Israel, e os filhos de Saul (incluindo Jônatas) são mortos. Saul é gravemente ferido pelos flecheiros. Temendo ser torturado e humilhado pelos incircuncisos, ele pede ao seu escudeiro que o mate. Diante da recusa, Saul lança-se sobre a sua própria espada. O primeiro rei de Israel termina a sua vida em suicídio e derrota total.'
      },
      {
        verseRef: 'v. 7-12',
        title: 'A Humilhação e o Resgate dos Ossos',
        description: 'No dia seguinte, os filisteus encontram os corpos, cortam a cabeça de Saul e penduram o seu corpo no templo de Dagom, celebrando a vitória dos seus ídolos sobre o Deus de Israel. Homens valentes de Jabes-Gileade (que Saul havia salvado no início de seu reinado) arriscam a vida para resgatar os corpos e dar-lhes um sepultamento digno.'
      },
      {
        verseRef: 'v. 13-14',
        title: 'O Veredito Divino e a Transferência do Reino',
        description: 'O cronista resume a vida de Saul com precisão cirúrgica: "Assim morreu Saul por causa da sua transgressão... por causa da palavra do Senhor, a qual não havia guardado; e também porque buscou a adivinhadora para a consultar, e não buscou ao Senhor". Como resultado, Deus o matou e transferiu o reino para Davi.'
      }
    ],
    conclusion: 'A vida de Saul é um monumento à tragédia da desobediência. Ele tinha aparência, poder e oportunidade, mas faltava-lhe submissão à Palavra de Deus. A sua morte nos ensina que a liderança sem obediência a Deus sempre termina em ruína. Quando deixamos de buscar ao Senhor e procuramos atalhos ou orientações nas trevas (como a consulta à médium de En-Dor), assinamos a nossa própria sentença. O trono que Saul tentou segurar com as próprias mãos foi-lhe tirado pelo próprio Deus.'
  },
  {
    id: '1ch_11_10_19',
    bookId: '1CH',
    chapter: 11,
    startVerse: 10,
    endVerse: 19,
    title: 'Os Valentes de Davi e a Água de Belém',
    theme: 'A Devoção, o Sacrifício e a Liderança que Inspira Lealdade',
    introduction: 'O sucesso do reino de Davi não foi obra de um homem só. Deus cercou Davi de guerreiros extraordinários, conhecidos como "os valentes". Em 1 Crônicas 11, lemos sobre um episódio comovente durante o tempo em que Davi estava escondido na caverna de Adulão e os filisteus controlavam Belém. Davi expressa um desejo nostálgico pela água do poço de sua cidade natal. Três de seus valentes arriscam a vida, rompem o acampamento inimigo e trazem a água. A reação de Davi transforma um ato de bravura em um ato de adoração profunda.',
    points: [
      {
        verseRef: 'v. 10-14',
        title: 'O Contexto dos Valentes',
        description: 'O texto introduz os chefes dos valentes de Davi, homens que "deram força ao seu reino". Eles não eram apenas soldados, mas homens que apoiaram Davi segundo a palavra do Senhor. A força do rei dependia da lealdade e da coragem daqueles que Deus havia colocado ao seu redor.'
      },
      {
        verseRef: 'v. 15-17',
        title: 'O Desejo do Rei e a Coragem dos Três',
        description: 'Davi, com sede e saudade, suspira: "Quem me dera beber da água do poço de Belém!". Ele não deu uma ordem, apenas expressou um desejo. Os três valentes rompem o acampamento dos filisteus, tiram a água do poço e a trazem a Davi. Eles arriscaram a própria vida para satisfazer um simples desejo do seu líder.'
      },
      {
        verseRef: 'v. 18-19',
        title: 'A Água Derramada como Libação',
        description: 'Davi fica tão comovido com o sacrifício que se recusa a beber a água. Ele a derrama perante o Senhor, dizendo: "Longe de mim... beberia eu o sangue destes homens que puseram em risco as suas vidas?". Ele reconhece que aquele ato de amor era sagrado demais para o consumo humano; pertencia apenas a Deus.'
      }
    ],
    conclusion: 'A lealdade dos três valentes ilustra a devoção que devemos ter pelo nosso Rei, Jesus Cristo. Eles não precisaram de uma ordem; um simples suspiro do rei foi suficiente para que arriscassem tudo. Por outro lado, a atitude de Davi mostra a nobreza de um verdadeiro líder: ele não usou o sacrifício de seus homens para satisfazer o seu próprio ego, mas consagrou aquele sacrifício a Deus. A verdadeira liderança não consome as pessoas, mas as eleva. O que custa sangue e sacrifício deve ser sempre derramado como adoração ao Senhor.'
  },
  {
    id: '1ch_15_1_15',
    bookId: '1CH',
    chapter: 15,
    startVerse: 1,
    endVerse: 15,
    title: 'A Arca Trazida a Jerusalém (A Ordem Levítica)',
    theme: 'A Santidade, a Correção de Rota e a Adoração Segundo a Palavra',
    introduction: 'Após o desastre da primeira tentativa de trazer a Arca da Aliança (que resultou na morte de Uzá), Davi aprendeu uma lição vital: as coisas santas de Deus não podem ser tratadas com métodos mundanos (o "carro novo"). Em 1 Crônicas 15, Davi faz uma segunda tentativa, mas desta vez, ele busca a Palavra de Deus. Ele reconhece que apenas os levitas foram escolhidos por Deus para carregar a Arca. O texto destaca a importância da preparação, da santificação e da obediência estrita às Escrituras na nossa adoração.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Descoberta da Vontade de Deus',
        description: 'Davi prepara um lugar para a Arca e faz uma declaração crucial: "Ninguém deve levar a arca de Deus, senão os levitas; porque o Senhor os elegeu". Ele abandonou o pragmatismo dos filisteus (o carro de boi) e voltou à revelação da Palavra de Deus (Números 4).'
      },
      {
        verseRef: 'v. 11-13',
        title: 'O Reconhecimento do Erro Passado',
        description: 'Davi convoca os sacerdotes e levitas e confessa o erro da primeira tentativa: "Porquanto não a levastes na primeira vez, o Senhor nosso Deus fez rotura em nós, porque não o buscamos segundo a ordenança". O arrependimento de Davi não foi apenas sentir tristeza, mas corrigir a rota e alinhar-se com as Escrituras.'
      },
      {
        verseRef: 'v. 14-15',
        title: 'A Santificação e a Obediência',
        description: 'Os sacerdotes e levitas se santificam (purificam-se cerimonialmente). Então, eles carregam a Arca de Deus sobre os ombros, pelos varais, "como Moisés tinha ordenado, conforme a palavra do Senhor". A obediência meticulosa substitui a presunção.'
      }
    ],
    conclusion: 'A diferença entre o capítulo 13 (a morte de Uzá) e o capítulo 15 (o sucesso e a alegria) é a obediência à Palavra de Deus. A boa intenção sem a instrução bíblica é perigosa. Deus não quer apenas que façamos a coisa certa (trazer a Arca), mas que a façamos do jeito certo (santidade e obediência). A verdadeira adoração requer que coloquemos o "peso" da glória de Deus sobre os nossos próprios ombros, em santificação, e não em "carros novos" de pragmatismo ou conveniência moderna.'
  },
  {
    id: '1ch_16_7_36',
    bookId: '1CH',
    chapter: 16,
    startVerse: 7,
    endVerse: 36,
    title: 'O Cântico de Ação de Graças de Davi',
    theme: 'O Louvor, a Memória das Maravilhas e a Proclamação às Nações',
    introduction: 'Quando a Arca finalmente chega à tenda em Jerusalém, Davi entrega um salmo de gratidão a Asafe e seus irmãos para ser cantado diante do Senhor. Este cântico (que é uma composição dos Salmos 105, 96 e 106) é um dos mais belos hinos de adoração do Antigo Testamento. Ele não foca nas vitórias militares de Davi, mas na aliança eterna de Deus, nas Suas maravilhas na criação e na necessidade de proclamar a Sua glória a todas as nações. É um chamado para que a adoração seja contínua, lembrada e missional.',
    points: [
      {
        verseRef: 'v. 7-12',
        title: 'O Chamado à Memória e à Gratidão',
        description: 'Davi instrui o povo a louvar, invocar o nome do Senhor e fazer conhecidas as Suas obras. O verbo "lembrar" é central: "Lembrai-vos das suas maravilhas que tem feito, dos seus prodígios, e dos juízos da sua boca". A adoração nasce da memória dos atos salvíficos de Deus.'
      },
      {
        verseRef: 'v. 14-22',
        title: 'A Fidelidade à Aliança',
        description: 'O cântico celebra a fidelidade de Deus à aliança feita com Abraão, Isaque e Jacó. Mesmo quando Israel era "poucos em número" e andava de nação em nação, Deus os protegeu, repreendendo reis por amor a eles: "Não toqueis os meus ungidos". A nossa segurança está na fidelidade da aliança de Deus.'
      },
      {
        verseRef: 'v. 23-31',
        title: 'A Proclamação Global',
        description: 'A adoração expande-se de Israel para o mundo: "Cantai ao Senhor, toda a terra... Anunciai entre as nações a sua glória". Davi declara que os deuses dos povos são ídolos, mas o Senhor fez os céus. O cântico convoca as famílias dos povos a darem glória e força a Yahweh.'
      }
    ],
    conclusion: 'O cântico de Davi nos ensina que a adoração é alimentada pela memória. Quando esquecemos o que Deus fez, o nosso louvor seca. Precisamos "lembrar as Suas maravilhas". Além disso, a verdadeira adoração não pode ficar contida dentro de uma tenda ou de uma igreja; ela tem um impulso missionário. Se Deus é grande e digno de louvor, todas as nações precisam saber disso. O nosso louvor deve ser um convite para que o mundo inteiro se curve diante do Rei dos reis e Senhor dos senhores.'
  },
  {
    id: '1ch_17_1_15',
    bookId: '1CH',
    chapter: 17,
    startVerse: 1,
    endVerse: 15,
    title: 'A Aliança Davídica',
    theme: 'Os Planos Frustrados, a Graça Surpreendente e o Reino Eterno',
    introduction: 'Davi, morando em um palácio de cedro, sente-se incomodado pelo fato de a Arca de Deus ainda estar em uma tenda. Ele decide construir um Templo magnífico. O profeta Natã inicialmente aprova a ideia, mas Deus intervém naquela mesma noite. Em 1 Crônicas 17, Deus diz "não" ao bom plano de Davi, mas lhe dá um "sim" infinitamente maior. Em vez de Davi construir uma casa (templo) para Deus, Deus promete construir uma "casa" (dinastia) para Davi. Esta é a Aliança Davídica, a promessa fundamental que aponta diretamente para a vinda de Jesus Cristo.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Bom Desejo de Davi e o "Não" de Deus',
        description: 'Davi compartilha com Natã o seu desejo de construir o Templo. Natã, agindo por impulso humano, diz: "Faze tudo o que tens no teu coração". Mas a palavra de Deus vem a Natã à noite, mandando-o voltar e dizer a Davi: "Tu não me edificarás casa para eu morar". Nem todas as boas ideias são a vontade de Deus para nós.'
      },
      {
        verseRef: 'v. 7-10',
        title: 'A Graça Passada e Presente',
        description: 'Deus lembra Davi de onde o tirou: "Eu te tomei da malhada, de detrás das ovelhas, para que fosses o príncipe sobre o meu povo". Deus reafirma que esteve com ele em todas as batalhas e promete fazer-lhe um grande nome e dar descanso a Israel.'
      },
      {
        verseRef: 'v. 11-15',
        title: 'A Promessa do Reino Eterno',
        description: 'O clímax da aliança é a promessa de Deus: "O Senhor te edificará uma casa". Deus levantará a semente de Davi (Salomão, no contexto imediato), que construirá o Templo. Mas a promessa vai além de Salomão: "estabelecerei o seu trono para sempre". Esta é a profecia messiânica do Reino eterno do Filho de Davi.'
      }
    ],
    conclusion: 'Muitas vezes ficamos frustrados quando Deus diz "não" aos nossos projetos, mesmo quando eles parecem ser para a Sua glória. A história de Davi nos ensina que o "não" de Deus é frequentemente a porta para uma promessa muito maior. Davi queria construir um edifício de pedra que duraria alguns séculos; Deus queria construir uma linhagem real que duraria pela eternidade. A promessa do versículo 14 cumpre-se perfeitamente em Jesus Cristo, o Filho de Davi, cujo Reino não terá fim. A graça de Deus sempre supera as nossas melhores intenções.'
  },
  {
    id: '1ch_21_1_17',
    bookId: '1CH',
    chapter: 21,
    startVerse: 1,
    endVerse: 17,
    title: 'O Censo e o Altar na Eira de Ornã',
    theme: 'A Tentação de Satanás, o Orgulho e o Sacrifício Expiatório',
    introduction: 'O capítulo 21 de 1 Crônicas revela os bastidores espirituais de um dos maiores fracassos de Davi. O texto diz explicitamente que "Satanás se levantou contra Israel e incitou Davi a numerar a Israel". Movido pelo orgulho e pela confiança nos números militares, Davi realiza o censo, trazendo o juízo de Deus na forma de uma peste. O clímax da história ocorre na eira de Ornã, o jebuseu, onde Davi vê o Anjo do Senhor com a espada desembainhada. Ali, Davi oferece um sacrifício que custa o seu próprio dinheiro, e o fogo do céu cai, marcando o local exato do futuro Templo.',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'A Incitação de Satanás e o Orgulho de Davi',
        description: 'Satanás incita Davi a fazer um censo. O general Joabe tenta dissuadi-lo, percebendo que era um ato de orgulho e falta de fé, mas a palavra do rei prevalece. O censo desagrada a Deus, e Ele fere a Israel. O orgulho de confiar em números em vez de confiar em Deus atrai o juízo.'
      },
      {
        verseRef: 'v. 8-13',
        title: 'A Convicção e a Escolha do Juízo',
        description: 'Davi confessa o seu pecado: "Gravemente pequei em fazer tal coisa". O profeta Gade lhe dá três opções de punição. Davi, conhecendo o caráter de Deus, escolhe a peste: "Caia eu nas mãos do Senhor, porque muitíssimas são as suas misericórdias; mas nas mãos dos homens não caia eu".'
      },
      {
        verseRef: 'v. 14-17',
        title: 'O Anjo na Eira e a Intercessão do Pastor',
        description: 'A peste mata 70.000 homens. Quando o Anjo está prestes a destruir Jerusalém, Deus diz: "Basta". Davi vê o Anjo junto à eira de Ornã, prostra-se e clama: "Não sou eu o que pequei...? Estas ovelhas, que fizeram? Seja, pois, a tua mão contra mim". Davi assume a culpa como um verdadeiro pastor.'
      }
    ],
    conclusion: 'O censo de Davi é um alerta sobre a sutileza do orgulho. Satanás sabe que, se conseguirmos confiar na nossa própria força (nossos números, dinheiro, talentos), deixaremos de depender de Deus. No entanto, a graça de Deus brilha na eira de Ornã. O lugar do maior fracasso de Davi tornou-se o lugar do altar, e posteriormente, o lugar do Templo de Salomão. Deus tem o poder de transformar o "chão" do nosso arrependimento no alicerce da adoração futura, desde que estejamos dispostos a oferecer um sacrifício verdadeiro e custoso.'
  },
  {
    id: '1ch_22_1_10',
    bookId: '1CH',
    chapter: 22,
    startVerse: 1,
    endVerse: 10,
    title: 'Davi Prepara os Materiais para o Templo',
    theme: 'A Visão de Futuro, a Preparação Oculta e o Legado Espiritual',
    introduction: 'Embora Deus tenha proibido Davi de construir o Templo por ser um "homem de guerra" que derramou muito sangue, Davi não reagiu com amargura ou inveja de seu filho Salomão. Em vez disso, em 1 Crônicas 22, Davi dedica os últimos anos de sua vida a preparar todos os materiais necessários (ouro, prata, ferro, madeira e pedras) para que Salomão pudesse construir. Davi entendeu que o seu papel não era inaugurar a obra, mas facilitar o sucesso da próxima geração. É uma das maiores lições de liderança e paternidade espiritual da Bíblia.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Preparação Abundante',
        description: 'Davi reconhece que a eira de Ornã é o local da Casa de Deus. Ele começa a ajuntar pedreiros, ferro, bronze e madeira de cedro em abundância. A sua motivação é clara: "Salomão, meu filho, é ainda moço e tenro, e a casa que se há de edificar para o Senhor deve ser magnífica... por isso eu lhe prepararei os materiais".'
      },
      {
        verseRef: 'v. 6-8',
        title: 'A Explicação do "Não" de Deus',
        description: 'Davi chama Salomão e compartilha o seu coração. Ele explica por que não pôde construir o Templo: a palavra do Senhor lhe disse que ele havia derramado muito sangue e feito grandes guerras. Deus queria que o Seu Templo fosse construído por mãos limpas de sangue, simbolizando a paz.'
      },
      {
        verseRef: 'v. 9-10',
        title: 'A Promessa de Paz para Salomão',
        description: 'Davi transmite a promessa de Deus a Salomão: "Eis que te nascerá um filho, que será homem de repouso... o seu nome será Salomão (Pacífico)". Ele será o responsável por edificar a casa, e Deus será para ele Pai, e ele será filho. A obra de Deus requer o homem certo, no tempo certo.'
      }
    ],
    conclusion: 'Davi nos ensina a beleza de trabalhar para um futuro que não veremos. A verdadeira grandeza na liderança não é construir um império em torno do nosso próprio nome, mas preparar o terreno para que a próxima geração vá mais longe do que nós fomos. Davi não cortou a fita de inauguração do Templo, mas o Templo nunca existiria sem a sua preparação oculta. Na obra de Deus, alguns são chamados para ajuntar os materiais, e outros para edificar. Ambos são igualmente essenciais e honrados pelo Senhor.'
  },
  {
    id: '1ch_29_1_9',
    bookId: '1CH',
    chapter: 29,
    startVerse: 1,
    endVerse: 9,
    title: 'A Oferta Voluntária para o Templo',
    theme: 'A Generosidade, o Exemplo do Líder e a Alegria de Dar',
    introduction: 'O capítulo 29 de 1 Crônicas registra uma das maiores campanhas de arrecadação de fundos da história, mas sem qualquer manipulação ou pressão. Davi, tendo já doado imensamente dos tesouros do Estado, faz uma doação pessoal extravagante do seu próprio ouro e prata. Em seguida, ele desafia os líderes de Israel: "Quem, pois, está disposto a encher a sua mão, para oferecer hoje voluntariamente ao Senhor?". Movidos pelo exemplo do rei, os líderes e o povo ofertam com alegria e sinceridade de coração. O texto revela a teologia bíblica da generosidade.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Exemplo Pessoal de Davi',
        description: 'Davi lembra que a obra é grande porque "o palácio não é para homens, mas para o Senhor Deus". Ele declara que, além de tudo o que preparou do tesouro real, ele dá do seu próprio tesouro particular (ouro de Ofir e prata purificada) porque "ama a casa do seu Deus". A liderança pelo exemplo é o maior motivador.'
      },
      {
        verseRef: 'v. 4-5',
        title: 'O Desafio à Congregação',
        description: 'Após apresentar a sua oferta, Davi lança o desafio aos líderes e ao povo: "Quem, pois, está disposto a encher a sua mão, para oferecer hoje voluntariamente ao Senhor?". Ele não exige um imposto, mas convida a uma consagração voluntária das mãos e dos recursos a Deus.'
      },
      {
        verseRef: 'v. 6-9',
        title: 'A Resposta do Povo e a Alegria',
        description: 'Os chefes das famílias e os príncipes respondem com ofertas massivas de ouro, prata, bronze, ferro e pedras preciosas. O versículo 9 destaca o resultado emocional: "E o povo se alegrou do que deram voluntariamente; porque, com coração perfeito, voluntariamente deram ao Senhor". A generosidade produziu grande alegria.'
      }
    ],
    conclusion: 'A generosidade verdadeira é contagiante e sempre começa pela liderança. O povo não ofertou por obrigação legalista, mas por inspiração. Além disso, o versículo 9 destaca que a maior recompensa da generosidade não é o que recebemos em troca, mas a própria alegria de dar. Quando entendemos que a obra é "não para homem, mas para o Senhor Deus", os nossos recursos materiais tornam-se instrumentos de adoração. A alegria na igreja é diretamente proporcional à sua generosidade voluntária e sincera.'
  },
  {
    id: '1ch_29_10_20',
    bookId: '1CH',
    chapter: 29,
    startVerse: 10,
    endVerse: 20,
    title: 'A Oração Final e a Morte de Davi',
    theme: 'A Soberania de Deus, a Mordomia e a Despedida de um Rei',
    introduction: 'Diante da oferta monumental do povo para o Templo, Davi não parabeniza a si mesmo nem exalta a riqueza da nação. Em vez disso, ele faz a sua última grande oração registrada, uma obra-prima de teologia e humildade. Em 1 Crônicas 29:10-20, Davi reconhece que tudo pertence a Deus e que eles estão apenas devolvendo o que já era dEle. Ele reconhece a brevidade da vida humana e ora para que Deus mantenha o coração do povo e de Salomão fiéis. É o encerramento majestoso da vida do homem segundo o coração de Deus.',
    points: [
      {
        verseRef: 'v. 10-13',
        title: 'A Exaltação da Soberania Divina',
        description: 'Davi louva a Deus diante de toda a congregação: "Tua é, Senhor, a magnificência, e o poder, e a honra, e a vitória, e a majestade; porque teu é tudo quanto há nos céus e na terra". Ele reconhece que a riqueza e a glória vêm exclusivamente das mãos de Deus, que domina sobre tudo.'
      },
      {
        verseRef: 'v. 14-16',
        title: 'A Teologia da Mordomia',
        description: 'Davi faz uma pergunta de profunda humildade: "Porque, quem sou eu, e quem é o meu povo, para que pudéssemos oferecer voluntariamente coisas semelhantes? Porque tudo vem de ti, e do que é teu to damos". Ele reconhece que somos apenas peregrinos e forasteiros, e que ofertar é apenas devolver a Deus o que Ele nos emprestou.'
      },
      {
        verseRef: 'v. 17-20',
        title: 'A Oração pelo Coração do Povo e do Filho',
        description: 'Davi ora não por mais riquezas, mas pela fidelidade espiritual: "Conserva isto para sempre no propósito do coração do teu povo". Ele também pede: "E a Salomão, meu filho, dá um coração perfeito, para guardar os teus mandamentos". A oração termina com todo o povo louvando ao Senhor e prostrando-se.'
      }
    ],
    conclusion: 'A oração final de Davi destrói qualquer ilusão de propriedade humana. Nós não somos donos de nada; somos apenas mordomos (administradores) dos recursos de Deus. A maior prova de humildade é reconhecer que até mesmo a nossa capacidade de ofertar é um dom da graça de Deus ("tudo vem de ti"). Davi termina a sua vida não pedindo mais riquezas ou dias de vida, mas orando pela fidelidade espiritual da próxima geração. É assim que um verdadeiro servo de Deus deve terminar a sua carreira: com os olhos na glória de Deus e o coração voltado para o futuro do Seu Reino.'
  }
];

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

let addedCount = 0;
for (const np of newPericopes) {
  if (!arr.find(p => p.id === np.id)) {
    arr.push(np);
    addedCount++;
  }
}

const newArrayContent = JSON.stringify(arr, null, 2);
const newContent = content.substring(0, startIndex) + newArrayContent + content.substring(endIndex + 1);
fs.writeFileSync('data/pericopes_temp.ts', newContent, 'utf8');
console.log(`Added ${addedCount} new pericopes (Batch 19 - 1 Chronicles).`);
