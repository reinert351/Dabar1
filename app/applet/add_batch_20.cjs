const fs = require('fs');

const newPericopes = [
  {
    id: '2ch_1_7_12',
    bookId: '2CH',
    chapter: 1,
    startVerse: 7,
    endVerse: 12,
    title: 'O Pedido de Sabedoria de Salomão',
    theme: 'Prioridades, Sabedoria e a Resposta Generosa de Deus',
    introduction: 'O livro de 2 Crônicas começa com a consolidação do reino de Salomão. Em Gibeom, onde estava o Tabernáculo, Salomão oferece mil holocaustos ao Senhor. Naquela mesma noite, Deus lhe aparece com um cheque em branco: "Pede o que queres que eu te dê". A resposta de Salomão em 2 Crônicas 1 revela o coração de um líder que reconhece a sua própria insuficiência diante da grandeza da tarefa. Ao pedir sabedoria em vez de riquezas ou poder, Salomão nos ensina sobre a importância de alinhar os nossos desejos com os propósitos do Reino de Deus.',
    points: [
      {
        verseRef: 'v. 7-8',
        title: 'A Oferta Divina e a Memória da Graça',
        description: 'Deus aparece a Salomão e faz a oferta impressionante: "Pede o que queres". Salomão não responde imediatamente com um pedido, mas com gratidão. Ele lembra a "grande beneficência" que Deus usou com Davi, seu pai. O verdadeiro pedido a Deus sempre deve começar com o reconhecimento da Sua graça passada.'
      },
      {
        verseRef: 'v. 9-10',
        title: 'O Pedido por Sabedoria e Conhecimento',
        description: 'Salomão pede que a promessa feita a Davi se confirme e faz o seu pedido: "Dá-me, pois, agora, sabedoria e conhecimento, para que possa sair e entrar perante este povo; pois quem poderia julgar a este tão grande povo?". Ele não pede para si mesmo, mas pede ferramentas para servir melhor ao povo de Deus.'
      },
      {
        verseRef: 'v. 11-12',
        title: 'A Resposta Generosa de Deus',
        description: 'Deus se agrada da motivação de Salomão. Porque o seu coração não buscou riquezas, bens, honra, a morte dos inimigos ou longos dias de vida, Deus lhe concede a sabedoria pedida. E, como bônus da graça, Deus lhe dá tudo o que ele não pediu: riquezas, bens e honra, como nenhum rei antes ou depois dele teve.'
      }
    ],
    conclusion: 'A oração de Salomão ilustra perfeitamente o princípio que Jesus ensinaria séculos depois: "Buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas" (Mateus 6:33). Quando as nossas prioridades estão alinhadas com a vontade de Deus e o nosso desejo é servir aos outros, Deus não apenas atende ao nosso pedido, mas derrama a Sua generosidade sobre nós. A verdadeira sabedoria começa com a humildade de reconhecer que não sabemos governar a nossa própria vida sem a direção divina.'
  },
  {
    id: '2ch_7_1_3',
    bookId: '2CH',
    chapter: 7,
    startVerse: 1,
    endVerse: 3,
    title: 'A Glória Enche o Templo',
    theme: 'A Presença de Deus, o Fogo do Céu e a Adoração',
    introduction: 'Após anos de construção e preparação, o Templo de Salomão está concluído. Salomão profere uma longa oração de dedicação (capítulo 6). O que acontece a seguir, em 2 Crônicas 7:1-3, é uma das manifestações mais espetaculares da presença de Deus em toda a Bíblia. Deus não responde à oração de Salomão com um sussurro, mas com fogo do céu e uma glória tão densa que os próprios sacerdotes não conseguem entrar no edifício. É a aprovação divina visível de que Deus aceitou o sacrifício e escolheu aquele lugar para habitar entre o Seu povo.',
    points: [
      {
        verseRef: 'v. 1',
        title: 'O Fogo do Céu e o Consumo do Sacrifício',
        description: 'Assim que Salomão acaba de orar, o fogo desce do céu e consome o holocausto e os sacrifícios. Na Bíblia, o fogo caindo sobre o altar é o sinal definitivo da aceitação de Deus (como ocorreu com Moisés, Gideão e Elias). Deus está dizendo: "Eu aceito a vossa oferta e a vossa adoração".'
      },
      {
        verseRef: 'v. 2',
        title: 'A Glória Inacessível',
        description: 'Junto com o fogo, a "glória do Senhor encheu a casa". A manifestação da santidade de Deus (a Shekinah) foi tão avassaladora e densa que "os sacerdotes não podiam entrar na casa do Senhor". A presença de Deus é ao mesmo tempo o maior desejo do Seu povo e uma realidade santa demais para a carne humana suportar sem a mediação da graça.'
      },
      {
        verseRef: 'v. 3',
        title: 'A Prostração e o Louvor do Povo',
        description: 'Diante do fogo e da glória, a única reação possível para os filhos de Israel é a reverência absoluta. Eles se prostram com o rosto em terra sobre o pavimento e adoram, repetindo o refrão eterno da aliança: "Porque ele é bom, porque a sua benignidade dura para sempre". A verdadeira revelação da glória de Deus sempre produz humildade e louvor.'
      }
    ],
    conclusion: 'A descida da glória sobre o Templo de Salomão foi um evento histórico único, mas aponta para realidades espirituais maiores. Hoje, o Templo de Deus não é um edifício de pedra em Jerusalém, mas a própria Igreja (1 Coríntios 3:16) e o coração do crente. No Pentecostes, o fogo não desceu sobre um altar de bronze, mas sobre os discípulos, enchendo-os com o Espírito Santo. A glória de Deus agora habita em nós. A nossa resposta diária a essa presença habitadora deve ser a mesma de Israel: prostração, reverência e a declaração contínua de que Ele é bom e a Sua misericórdia dura para sempre.'
  },
  {
    id: '2ch_7_12_16',
    bookId: '2CH',
    chapter: 7,
    startVerse: 12,
    endVerse: 16,
    title: 'A Condição para a Restauração',
    theme: 'Humilhação, Oração, Arrependimento e a Promessa de Cura',
    introduction: 'Após a dedicação do Templo, o Senhor aparece a Salomão de noite para responder formalmente à sua oração. Em 2 Crônicas 7:12-16, Deus estabelece o protocolo divino para a restauração nacional e espiritual. Sabendo que o povo inevitavelmente pecaria e enfrentaria o juízo (seca, gafanhotos ou peste), Deus fornece a "fórmula da graça". O versículo 14 é um dos textos mais citados sobre avivamento em toda a Bíblia. Ele nos lembra que a cura de uma nação ou de uma vida não começa com mudanças políticas, mas com o arrependimento do povo que leva o nome de Deus.',
    points: [
      {
        verseRef: 'v. 12-13',
        title: 'A Escolha do Lugar e a Realidade do Juízo',
        description: 'Deus confirma que ouviu a oração e escolheu o Templo como casa de sacrifício. No entanto, Ele é realista sobre o futuro: "Se eu cerrar os céus... se eu ordenar aos gafanhotos... ou se enviar a peste". Deus avisa que a desobediência trará disciplina. O juízo divino tem o propósito de despertar o povo.'
      },
      {
        verseRef: 'v. 14a',
        title: 'As Quatro Condições do Avivamento',
        description: 'Deus estabelece quatro passos para o Seu povo (aqueles que "se chamam pelo meu nome"): 1) Se humilhar (reconhecer a falência espiritual e o orgulho); 2) Orar (clamar por dependência); 3) Buscar a face de Deus (desejar a presença dEle, não apenas os Seus favores); e 4) Se converter dos seus maus caminhos (arrependimento prático, abandono do pecado).'
      },
      {
        verseRef: 'v. 14b-16',
        title: 'A Promessa Tríplice de Restauração',
        description: 'Se o povo cumprir as condições, Deus promete três ações: "então eu ouvirei dos céus, e perdoarei os seus pecados, e sararei a sua terra". A cura da terra é o resultado direto do perdão dos pecados. Deus promete que os Seus olhos e ouvidos estarão atentos àquele lugar, porque Ele colocou ali o Seu coração.'
      }
    ],
    conclusion: '2 Crônicas 7:14 é a bússola para qualquer pessoa, igreja ou nação que se encontra em crise espiritual. A tendência humana durante as crises é culpar os outros, os líderes ou as circunstâncias. No entanto, Deus não exige que os ímpios se arrependam para curar a terra; Ele exige que o "Seu povo, que se chama pelo Seu nome" o faça. O avivamento e a restauração começam dentro da casa de Deus. Quando abandonamos o nosso orgulho, buscamos a face do Senhor e deixamos os nossos pecados, os céus se abrem, o perdão flui e a verdadeira cura acontece.'
  },
  {
    id: '2ch_17_1_10',
    bookId: '2CH',
    chapter: 17,
    startVerse: 1,
    endVerse: 10,
    title: 'O Reinado e as Reformas de Josafá',
    theme: 'O Ensino da Palavra, o Temor do Senhor e a Paz Nacional',
    introduction: 'O rei Josafá é um dos reis mais notáveis de Judá. Em 2 Crônicas 17, vemos o segredo do seu sucesso e da estabilidade do seu reino. Josafá não confiou apenas em fortificações militares; ele entendeu que a verdadeira segurança de uma nação reside no conhecimento da Palavra de Deus. Ele instituiu um programa nacional de educação bíblica, enviando príncipes, levitas e sacerdotes por todas as cidades de Judá para ensinar o Livro da Lei. O resultado foi um temor sobrenatural que caiu sobre as nações vizinhas, garantindo paz e prosperidade sem a necessidade de guerra.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Devoção Pessoal e a Rejeição da Idolatria',
        description: 'O texto diz que "o Senhor era com Josafá, porque andou nos primeiros caminhos de Davi". Ele não buscou os baalins (os deuses populares da cultura ao redor), mas buscou o Deus de seu pai e andou nos Seus mandamentos. A reforma pública de Josafá começou com a sua devoção pessoal e integridade.'
      },
      {
        verseRef: 'v. 5-9',
        title: 'A Campanha Nacional de Educação Bíblica',
        description: 'Josafá fez algo inédito: no terceiro ano do seu reinado, ele enviou uma delegação de príncipes, levitas e sacerdotes com o "Livro da Lei do Senhor". Eles viajaram por todas as cidades de Judá, ensinando o povo. Josafá percebeu que a ignorância espiritual era a raiz da idolatria; a cura era o ensino sistemático da Palavra.'
      },
      {
        verseRef: 'v. 10',
        title: 'O Temor do Senhor sobre as Nações',
        description: 'O resultado desta campanha de ensino foi sobrenatural: "E caiu o temor do Senhor sobre todos os reinos das terras que estavam ao redor de Judá, e não fizeram guerra contra Josafá". A obediência à Palavra de Deus gerou um escudo de proteção divina ao redor da nação. A paz foi fruto da instrução bíblica.'
      }
    ],
    conclusion: 'O reinado de Josafá demonstra que a ignorância bíblica é o maior perigo para o povo de Deus. Quando a Palavra de Deus não é ensinada, a cultura pagã rapidamente preenche o vazio. A estratégia de Josafá de enviar mestres por toda a terra é um modelo para a Igreja hoje: a nossa maior defesa contra a corrupção moral e espiritual não é o poder político, mas a proclamação fiel e o ensino claro das Escrituras. Quando o povo de Deus conhece e vive a Palavra, o temor do Senhor se manifesta, e a paz de Deus guarda os nossos corações e as nossas comunidades.'
  },
  {
    id: '2ch_20_1_22',
    bookId: '2CH',
    chapter: 20,
    startVerse: 1,
    endVerse: 22,
    title: 'A Vitória de Josafá pelo Louvor',
    theme: 'Crise, Dependência, a Palavra Profética e a Adoração como Arma',
    introduction: 'Apesar da fidelidade de Josafá, uma crise existencial atinge Judá. Uma vasta coalizão de exércitos inimigos (moabitas, amonitas e meunitas) marcha contra Jerusalém. Em 2 Crônicas 20, Josafá enfrenta o terror, mas a sua reação é um modelo de liderança espiritual. Ele não convoca os generais primeiro; ele convoca uma reunião de oração e jejum. Diante de toda a nação, ele admite a sua impotência e fixa os olhos em Deus. A resposta divina vem através de um profeta, e a estratégia de batalha dada por Deus é totalmente contraintuitiva: colocar os cantores na frente do exército. O louvor torna-se a arma da vitória.',
    points: [
      {
        verseRef: 'v. 1-12',
        title: 'O Medo, o Jejum e a Oração de Dependência',
        description: 'Ao ouvir sobre a grande multidão, Josafá teme, mas decide buscar ao Senhor e apregoa um jejum em todo o Judá. Na sua oração pública, ele lembra as promessas de Deus e conclui com uma das declarações de dependência mais belas da Bíblia: "Em nós não há força perante esta grande multidão... não sabemos nós o que faremos; porém os nossos olhos estão postos em ti".'
      },
      {
        verseRef: 'v. 13-17',
        title: 'A Resposta Profética: A Batalha é do Senhor',
        description: 'O Espírito do Senhor vem sobre Jaaziel, um levita, no meio da congregação. Ele traz a palavra de Deus: "Não temais, nem vos assusteis... pois a peleja não é vossa, mas de Deus". Ele instrui o povo a descer contra o inimigo, mas afirma que eles não precisarão lutar; deverão apenas "parar, estar em pé, e ver a salvação do Senhor".'
      },
      {
        verseRef: 'v. 18-22',
        title: 'A Adoração na Linha de Frente e a Vitória',
        description: 'Josafá e todo o povo se prostram e adoram antes mesmo da vitória acontecer. No dia seguinte, Josafá encoraja o povo: "Crede no Senhor vosso Deus, e estareis seguros". Ele coloca cantores à frente do exército, louvando a majestade santa. Quando eles começam a cantar e a dar louvores, o Senhor põe emboscadas contra os inimigos, que acabam destruindo uns aos outros.'
      }
    ],
    conclusion: 'A batalha de Josafá nos ensina como lutar as nossas batalhas espirituais. Quando enfrentamos uma "grande multidão" de problemas, o medo é natural, mas o nosso foco deve mudar imediatamente para Deus. A confissão de fraqueza ("não sabemos o que faremos") não é covardia, mas a porta de entrada para o poder divino. Além disso, a história revela o poder do louvor. Adorar a Deus no meio da crise, antes de ver a solução, é a maior expressão de fé. Quando os nossos olhos estão postos no Senhor e os nossos lábios declaram a Sua bondade, Ele mesmo assume a nossa peleja e confunde os nossos inimigos.'
  },
  {
    id: '2ch_26_16_21',
    bookId: '2CH',
    chapter: 26,
    startVerse: 16,
    endVerse: 21,
    title: 'O Orgulho e a Queda de Uzias',
    theme: 'O Perigo do Sucesso, a Presunção e a Disciplina Divina',
    introduction: 'O rei Uzias teve um dos reinados mais longos e prósperos de Judá. Ele buscou a Deus nos dias do profeta Zacarias, e Deus o fez prosperar militarmente, economicamente e em inovações tecnológicas (2 Crônicas 26:5-15). No entanto, o sucesso tornou-se a sua maior armadilha. Em 2 Crônicas 26:16-21, vemos a queda trágica de Uzias. O seu coração se exaltou, e ele presumiu que o seu poder político lhe dava o direito de usurpar o ofício sacerdotal. A sua recusa em aceitar a correção resultou em um juízo imediato e permanente, servindo como um alerta eterno sobre os perigos do orgulho espiritual.',
    points: [
      {
        verseRef: 'v. 16',
        title: 'A Exaltação do Coração e a Transgressão',
        description: 'O versículo 16 é o ponto de virada trágico: "Mas, havendo-se já fortificado, exaltou-se o seu coração até se corromper". O sucesso subiu-lhe à cabeça. Ele entra no Templo do Senhor para queimar incenso no altar, uma função que a Lei de Moisés reservava exclusivamente aos sacerdotes consagrados da linhagem de Arão. Uzias confundiu o seu poder real com autoridade espiritual.'
      },
      {
        verseRef: 'v. 17-18',
        title: 'A Confrontação Corajosa dos Sacerdotes',
        description: 'O sumo sacerdote Azarias, acompanhado de oitenta sacerdotes valentes, entra no Templo para confrontar o rei mais poderoso da sua época. Eles dizem a verdade ao poder: "A ti, Uzias, não compete queimar incenso perante o Senhor, mas aos sacerdotes... Sai do santuário, porque transgrediste". Eles exigem que o rei respeite os limites estabelecidos por Deus.'
      },
      {
        verseRef: 'v. 19-21',
        title: 'A Ira do Rei e o Juízo da Lepra',
        description: 'Em vez de se arrepender, Uzias se indigna contra os sacerdotes. Enquanto ele está furioso, com o incensário na mão, a lepra brota na sua testa ali mesmo, diante do altar. O juízo de Deus é instantâneo. Os sacerdotes o expulsam, e ele mesmo se apressa a sair. Uzias viveu o resto dos seus dias isolado como leproso, perdendo o trono e a comunhão na Casa do Senhor.'
      }
    ],
    conclusion: 'A história de Uzias é uma advertência severa: é frequentemente mais difícil sobreviver ao sucesso do que à adversidade. Quando Deus nos abençoa e nos fortalece, a tentação do orgulho é imensa. Uzias achou que as regras não se aplicavam a ele devido ao seu status. A presunção de tentar fazer a obra de Deus do nosso próprio jeito, ignorando a Sua Palavra, atrai a disciplina divina. A lepra na testa de Uzias foi a marca visível da corrupção invisível do seu coração. A verdadeira grandeza no Reino de Deus exige que permaneçamos humildes e submissos aos limites que o Senhor estabeleceu, não importa quão "fortes" nos tornemos.'
  },
  {
    id: '2ch_29_1_11',
    bookId: '2CH',
    chapter: 29,
    startVerse: 1,
    endVerse: 11,
    title: 'A Purificação do Templo por Ezequias',
    theme: 'O Fim da Negligência, a Santificação e o Retorno ao Culto',
    introduction: 'O rei Acaz, pai de Ezequias, havia sido um dos piores reis de Judá. Ele não apenas promoveu a idolatria, mas fechou as portas do Templo do Senhor, apagou as lâmpadas e deixou a Casa de Deus em estado de abandono e imundície. Quando Ezequias assume o trono, a sua primeiríssima ação (no primeiro mês do primeiro ano do seu reinado) é reabrir as portas do Templo. Em 2 Crônicas 29, Ezequias convoca os sacerdotes e levitas para um trabalho de limpeza profunda e santificação. O seu discurso é um chamado urgente ao arrependimento e à restauração da aliança com Deus.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Prioridade Imediata de Ezequias',
        description: 'Ezequias fez o que era reto aos olhos do Senhor. A sua prioridade é clara: "No primeiro ano do seu reinado, no primeiro mês, abriu as portas da casa do Senhor, e as reparou". Ele não esperou para resolver questões políticas ou econômicas; ele sabia que a crise de Judá era fundamentalmente espiritual. A adoração a Deus tinha que ser restaurada imediatamente.'
      },
      {
        verseRef: 'v. 4-7',
        title: 'O Chamado à Santificação e a Confissão do Pecado',
        description: 'Ezequias reúne os levitas e ordena: "Santificai-vos agora, e santificai a casa do Senhor... e tirai do santuário a imundícia". Ele não esconde a culpa da geração anterior. Ele confessa abertamente que os pais deles transgrediram, desviaram o rosto do tabernáculo, apagaram as lâmpadas e pararam de oferecer incenso e holocaustos.'
      },
      {
        verseRef: 'v. 8-11',
        title: 'A Consequência do Abandono e o Novo Pacto',
        description: 'O rei explica que a ira do Senhor caiu sobre Judá (derrotas, cativeiro e morte) exatamente por causa dessa negligência espiritual. Ezequias declara o seu propósito: "Agora me tem vindo ao coração que façamos uma aliança com o Senhor... para que se desvie de nós o ardor da sua ira". Ele exorta os levitas a não serem negligentes, pois foram escolhidos por Deus para o ministério.'
      }
    ],
    conclusion: 'A reforma de Ezequias nos ensina que o avivamento começa com a reabertura das "portas" que fechamos para Deus e com a limpeza da "imundícia" que acumulamos no nosso coração (o templo do Espírito Santo). A negligência espiritual (deixar a lâmpada apagar, parar de orar e adorar) sempre traz consequências dolorosas. Ezequias não culpou as circunstâncias; ele assumiu a responsabilidade de fazer uma nova aliança com Deus. O chamado de Ezequias ressoa para nós hoje: "Filhos meus, não sejais negligentes". É tempo de purificar o nosso coração, acender novamente a chama da devoção e restaurar o culto verdadeiro ao Senhor.'
  },
  {
    id: '2ch_30_1_12',
    bookId: '2CH',
    chapter: 30,
    startVerse: 1,
    endVerse: 12,
    title: 'O Convite para a Páscoa de Ezequias',
    theme: 'Unidade, Graça sobre o Ritual e o Coração Preparado',
    introduction: 'Após purificar o Templo, Ezequias decide celebrar a Páscoa, a festa que lembrava a libertação do Egito, mas que havia sido negligenciada por muito tempo. O que torna este evento em 2 Crônicas 30 extraordinário é a visão de Ezequias: ele não convida apenas o Reino do Sul (Judá), mas envia mensageiros a todo o Reino do Norte (Israel), que já estava devastado pelos assírios. Ele os chama ao arrependimento e à unidade. Embora muitos zombem do convite, alguns se humilham e vêm. O episódio destaca a graça de Deus, que valoriza a sinceridade do coração acima da perfeição ritualística.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'O Convite à Unidade e a Mudança de Data',
        description: 'Ezequias envia cartas a todo o Israel e Judá (incluindo Efraim e Manassés) para virem a Jerusalém celebrar a Páscoa. Como não havia sacerdotes santificados suficientes no primeiro mês, eles decidem celebrar no segundo mês (uma provisão permitida em Números 9). O desejo de adorar a Deus superou os obstáculos logísticos.'
      },
      {
        verseRef: 'v. 6-9',
        title: 'A Mensagem de Arrependimento e Esperança',
        description: 'Os correios levam a mensagem do rei: "Filhos de Israel, voltai para o Senhor... não endureçais agora a vossa cerviz". Ezequias apela para a misericórdia de Deus, prometendo que se eles se voltarem para o Senhor, Deus fará com que os seus parentes cativos encontrem compaixão, "porque o Senhor vosso Deus é misericordioso e compassivo".'
      },
      {
        verseRef: 'v. 10-12',
        title: 'A Zombaria, a Humilhação e a Mão de Deus',
        description: 'A resposta ao convite é mista. Muitos em Efraim, Manassés e Zebulom "riram-se e zombaram deles". O orgulho impediu a restauração. No entanto, "alguns de Aser, e de Manassés, e de Zebulom, se humilharam, e vieram a Jerusalém". Em Judá, a mão de Deus operou um milagre de unidade, dando-lhes "um só coração" para cumprirem o mandado do rei e da Palavra do Senhor.'
      }
    ],
    conclusion: 'A Páscoa de Ezequias é uma bela imagem do convite do Evangelho. A mensagem de arrependimento e retorno a Deus é enviada a todos. Alguns zombam e rejeitam a graça, mas aqueles que se humilham encontram um Deus "misericordioso e compassivo". Além disso, a história nos ensina que a verdadeira adoração promove a unidade do povo de Deus. Ezequias estendeu a mão aos seus irmãos do Norte, superando divisões políticas e históricas. Mais adiante no capítulo (v. 18-20), Ezequias ora pelos que comeram a Páscoa sem a purificação cerimonial completa, pedindo que Deus perdoe "todo aquele que preparou o seu coração para buscar a Deus", e o Senhor o ouviu. A graça de Deus sempre triunfa sobre o legalismo quando o coração está voltado para Ele.'
  },
  {
    id: '2ch_33_10_13',
    bookId: '2CH',
    chapter: 33,
    startVerse: 10,
    endVerse: 13,
    title: 'O Arrependimento de Manassés',
    theme: 'O Pior dos Pecadores, a Aflição e a Graça Inesgotável',
    introduction: 'Manassés, filho do piedoso Ezequias, foi indiscutivelmente o rei mais perverso da história de Judá. Ele reconstruiu os altares idólatras, profanou o Templo, praticou feitiçaria e chegou ao extremo de queimar os seus próprios filhos em sacrifício a falsos deuses. Ele fez Judá pecar mais do que as nações pagãs que Deus havia destruído. No entanto, 2 Crônicas 33 registra uma das maiores surpresas da graça em toda a Bíblia. Capturado pelos assírios e levado com ganchos para a Babilônia, Manassés, no fundo do poço da sua aflição, clama a Deus. A resposta de Deus a este "pior dos pecadores" é a prova definitiva de que ninguém está além do alcance da misericórdia divina.',
    points: [
      {
        verseRef: 'v. 10-11',
        title: 'A Surdez Espiritual e o Juízo Severo',
        description: 'O Senhor falou a Manassés e ao seu povo através dos profetas, "porém não deram ouvidos". A obstinação no pecado forçou a mão de Deus. O Senhor trouxe sobre eles os capitães do exército da Assíria, que prenderam Manassés com ganchos (argolas no nariz ou lábios, um tratamento para animais), amarraram-no com cadeias de bronze e o levaram para a Babilônia. O rei arrogante foi reduzido a um escravo humilhado.'
      },
      {
        verseRef: 'v. 12',
        title: 'A Aflição, a Oração e a Humilhação',
        description: 'No cativeiro, na escuridão da sua cela, Manassés finalmente acorda. "E ele, angustiado, orou deveras ao Senhor seu Deus, e humilhou-se muito perante o Deus de seus pais". A aflição fez o que anos de prosperidade e advertências proféticas não conseguiram: quebrou o seu orgulho. Ele não ofereceu desculpas, apenas humilhação profunda.'
      },
      {
        verseRef: 'v. 13',
        title: 'A Graça Escandalosa e a Restauração',
        description: 'A resposta de Deus é chocante: "E fez-lhe oração, e Deus se aplacou para com ele, e ouviu a sua súplica". Deus não apenas o perdoa, mas o traz de volta a Jerusalém e o restaura ao seu reino. O resultado deste encontro com a graça é uma conversão genuína: "Então conheceu Manassés que o Senhor era Deus". Ele passou o resto da vida tentando desfazer a idolatria que havia promovido.'
      }
    ],
    conclusion: 'A história de Manassés é o equivalente no Antigo Testamento à parábola do Filho Pródigo ou à conversão do apóstolo Paulo. Ela destrói a mentira de que "eu pequei demais para ser perdoado". Se Deus pôde ouvir a oração de um homem que sacrificou os próprios filhos aos demônios e profanou o Templo, Ele certamente ouvirá o clamor de qualquer pecador que se humilhe verdadeiramente. A aflição de Manassés foi, na verdade, a severa misericórdia de Deus para salvar a sua alma. A graça de Deus é maior do que o nosso pior pecado, e o verdadeiro arrependimento sempre encontra os braços abertos do Pai.'
  },
  {
    id: '2ch_36_15_23',
    bookId: '2CH',
    chapter: 36,
    startVerse: 15,
    endVerse: 23,
    title: 'A Queda de Jerusalém e o Decreto de Ciro',
    theme: 'A Paciência Esgotada, o Exílio e a Esperança da Restauração',
    introduction: 'O livro de 2 Crônicas (e a Bíblia Hebraica original) termina com o capítulo 36. Ele resume a tragédia final de Judá: a destruição de Jerusalém pelos babilônios e o exílio de 70 anos. O autor sagrado explica que o juízo veio porque o povo zombou dos mensageiros de Deus até que "não houve mais remédio". O Templo é queimado e a terra fica desolada para "descansar" e pagar os seus sábados violados. No entanto, o livro não termina em cinzas. Os dois últimos versículos saltam 70 anos no tempo para registrar o decreto de Ciro, rei da Pérsia, permitindo que os judeus voltem para casa. O Antigo Testamento termina com uma nota de esperança e um chamado para subir e reconstruir.',
    points: [
      {
        verseRef: 'v. 15-16',
        title: 'A Compaixão Rejeitada e o Ponto Sem Retorno',
        description: 'O texto destaca a paciência de Deus: "O Senhor... madrugando, lhes enviava os seus mensageiros, porque se compadecia do seu povo". Mas a resposta do povo foi zombar dos mensageiros, desprezar as palavras e escarnecer dos profetas. Eles fizeram isso até que o furor do Senhor subiu "e não houve mais remédio" (cura). O juízo tornou-se inevitável.'
      },
      {
        verseRef: 'v. 17-21',
        title: 'A Destruição e o Descanso da Terra',
        description: 'Deus traz os caldeus (babilônios), que matam jovens e velhos sem piedade no próprio santuário. O Templo é queimado, os muros derrubados e os tesouros roubados. Os sobreviventes são levados para a Babilônia. O cronista dá uma razão teológica para os 70 anos de exílio: para que a terra "gozasse os seus sábados" (descanso), cumprindo a profecia de Jeremias e a lei de Levítico 26.'
      },
      {
        verseRef: 'v. 22-23',
        title: 'O Decreto de Ciro e a Luz da Esperança',
        description: 'Para cumprir a palavra do Senhor, Deus desperta o espírito de Ciro, rei da Pérsia (que havia derrotado a Babilônia). Ciro emite um decreto reconhecendo que o Deus dos céus lhe deu os reinos da terra e o encarregou de edificar uma casa em Jerusalém. O livro termina com um convite aberto: "Quem há entre vós, de todo o seu povo, o Senhor seu Deus seja com ele, e suba".'
      }
    ],
    conclusion: 'A queda de Jerusalém é a prova sombria de que a paciência de Deus, embora vasta, não é infinita. Quando a graça é continuamente zombada, o juízo é o único "remédio" que resta para purificar o povo. No entanto, a conclusão de Crônicas com o decreto de Ciro revela o coração imutável de Deus: Ele é o Deus dos recomeços. O exílio não foi o fim da história da aliança, mas um tempo de disciplina e purificação. O convite de Ciro ("suba") é o prelúdio para os livros de Esdras e Neemias, e aponta, em última análise, para o grande convite do Evangelho: Deus sempre abre um caminho para que os exilados voltem para casa e reconstruam a sua vida na presença dEle.'
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
console.log(`Added ${addedCount} new pericopes (Batch 20 - 2 Chronicles).`);
