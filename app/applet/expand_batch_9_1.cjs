const fs = require('fs');

const expandedPericopes = [
  {
    id: 'num_9_15_23',
    bookId: 'NUM',
    chapter: 9,
    startVerse: 15,
    endVerse: 23,
    title: 'A Nuvem sobre o Tabernáculo',
    theme: 'A Direção Divina, a Submissão ao Tempo de Deus e a Presença Constante',
    introduction: 'O livro de Números descreve a jornada de Israel pelo deserto, um ambiente inóspito e sem caminhos marcados. Como uma nação de milhões de pessoas saberia quando marchar e onde acampar? Números 9:15-23 revela o sistema de navegação divino: a nuvem da presença do Senhor. Este texto é um dos mais belos retratos da dependência absoluta e da obediência radical. Israel não era guiado por mapas, conselhos militares ou conveniências climáticas, mas exclusivamente pelo movimento da glória de Deus. A nuvem ensinava a nação a submeter seus próprios planos ao tempo soberano do Criador.',
    points: [
      {
        verseRef: 'v. 15-16',
        title: 'A Presença Visível: Nuvem e Fogo',
        description: 'No dia em que o Tabernáculo foi erguido, a nuvem cobriu a Tenda da Congregação. À noite, a nuvem tinha a aparência de fogo, que permanecia até pela manhã. O texto afirma: "Assim era de contínuo: a nuvem o cobria, e de noite havia aparência de fogo". Deus não deixou Seu povo na incerteza. A Sua presença era uma realidade visível e constante, garantindo proteção contra o sol escaldante do deserto de dia e providenciando luz e calor durante as noites frias.'
      },
      {
        verseRef: 'v. 17-19',
        title: 'A Ordem de Marcha e de Acampamento',
        description: 'A regra de movimento era simples e inegociável: "Segundo a ordem do Senhor, os filhos de Israel partiam, e segundo a ordem do Senhor, acampavam". Quando a nuvem se erguia, eles desmontavam o acampamento e marchavam. Quando a nuvem parava, eles armavam as tendas e ficavam. Eles não votavam sobre a direção, não enviavam batedores para escolher o melhor oásis e não questionavam a rota. A obediência era imediata. Se a nuvem ficasse muitos dias, eles "guardavam a ordenança do Senhor, e não partiam".'
      },
      {
        verseRef: 'v. 20-23',
        title: 'A Submissão ao Tempo de Deus',
        description: 'O texto enfatiza a imprevisibilidade do tempo divino. Às vezes, a nuvem ficava apenas "alguns dias". Outras vezes, ficava "desde a tarde até à manhã", e eles tinham que marchar no dia seguinte. Podia ficar "dois dias, ou um mês, ou um ano". A lição era profunda: Israel teve que abrir mão do controle sobre sua própria agenda. Eles viviam em um estado de prontidão contínua, aprendendo que esperar em Deus é tão importante quanto marchar por Ele. A obediência no deserto não é apenas fazer a vontade de Deus, mas fazê-la no tempo de Deus.'
      }
    ],
    conclusion: 'A nuvem sobre o Tabernáculo é uma metáfora poderosa para a vida guiada pelo Espírito Santo (Romanos 8:14). Muitas vezes, queremos que Deus nos dê um mapa detalhado de nossas vidas para os próximos dez anos, mas Ele prefere nos dar a Sua presença diária. O desafio de Israel é o nosso desafio: ter a paciência para ficar quando a nuvem para (mesmo quando queremos avançar) e a coragem para marchar quando a nuvem se move (mesmo quando queremos ficar na nossa zona de conforto). A verdadeira segurança não está em saber o caminho, mas em seguir o Guia.'
  },
  {
    id: 'num_10_11_13',
    bookId: 'NUM',
    chapter: 10,
    startVerse: 11,
    endVerse: 13,
    title: 'A Partida do Sinai',
    theme: 'O Fim da Preparação, o Início da Marcha e a Ordem Divina',
    introduction: 'Após quase um ano acampados ao pé do Monte Sinai, onde receberam a Lei, construíram o Tabernáculo, organizaram o exército e celebraram a primeira Páscoa no deserto, chega o momento da partida. Números 10:11-13 marca uma transição monumental na história de Israel: o fim do período de instrução e o início da jornada em direção à promessa. O acampamento estático se transforma em um exército em movimento. Este texto destaca que a jornada da fé não é uma peregrinação caótica, mas uma marcha ordenada sob o comando direto da Palavra de Deus.',
    points: [
      {
        verseRef: 'v. 11',
        title: 'O Sinal para a Partida',
        description: 'A data é registrada com precisão: "no ano segundo, no segundo mês, aos vinte dias do mês". Exatamente 11 meses e 19 dias após chegarem ao Sinai (Êx 19:1), o sinal esperado finalmente acontece: "a nuvem se alçou de sobre o tabernáculo do testemunho". O tempo de escola no Sinai havia terminado. A revelação havia sido dada, a aliança ratificada e o santuário erguido. Agora, era hora de colocar a fé em prática e avançar para o desconhecido. Deus sabe exatamente quando o tempo de preparação termina e o tempo de ação começa.'
      },
      {
        verseRef: 'v. 12',
        title: 'A Marcha para o Deserto de Parã',
        description: 'Os filhos de Israel "puseram-se em marcha", saindo do deserto do Sinai. O destino imediato da nuvem foi o "deserto de Parã", uma vasta e árida região ao norte, mais próxima das fronteiras de Canaã. A jornada não os levou imediatamente a pastos verdes, mas a outro deserto. A vida cristã frequentemente envolve transições de um deserto (lugar de revelação) para outro (lugar de provação e batalha), mas a garantia é que a nuvem de Deus repousa no novo destino antes mesmo de chegarmos lá.'
      },
      {
        verseRef: 'v. 13',
        title: 'A Ordem e a Autoridade Delegada',
        description: 'O texto enfatiza: "Assim partiram pela primeira vez, segundo a ordem do Senhor, pelo ministério de Moisés". A marcha não foi uma debandada desordenada. Os capítulos anteriores haviam detalhado a ordem exata de cada tribo (Judá na frente, os levitas no meio com o Tabernáculo, etc.). A obediência à "ordem do Senhor" foi executada através do "ministério de Moisés". Deus guia o Seu povo através de Sua presença (a nuvem) e de Sua Palavra transmitida por Seus líderes designados.'
      }
    ],
    conclusion: 'A partida do Sinai nos lembra que não fomos chamados para ficar acampados para sempre no "monte da revelação". O conhecimento bíblico e as experiências espirituais profundas (o Sinai) têm um propósito: preparar-nos para a marcha (a missão). Quando a nuvem de Deus se move em nossas vidas, sinalizando uma nova fase, um novo chamado ou um novo desafio, devemos estar prontos para desmontar nossas tendas de conforto e avançar. A jornada pode nos levar a novos desertos, mas se estivermos marchando "segundo a ordem do Senhor", a vitória final é garantida.'
  },
  {
    id: 'num_11_1_3',
    bookId: 'NUM',
    chapter: 11,
    startVerse: 1,
    endVerse: 3,
    title: 'O Fogo em Taberá (Murmuração)',
    theme: 'A Queixa Ingrata, a Ira Divina e a Intercessão que Salva',
    introduction: 'Apenas três dias após a gloriosa e organizada partida do Sinai, a velha natureza de Israel ressurge. Números 11 marca o início de uma série de rebeliões que definirão a trágica jornada pelo deserto. O entusiasmo da marcha rapidamente se transforma em murmuração. Este breve episódio em Taberá serve como um aviso severo: Deus ouve as nossas queixas, e a ingratidão contínua provoca a Sua disciplina. No entanto, o texto também destaca o poder indispensável da intercessão para conter o juízo e restaurar a misericórdia.',
    points: [
      {
        verseRef: 'v. 1a',
        title: 'A Queixa e os Ouvidos do Senhor',
        description: 'O texto diz: "E aconteceu que, queixando-se o povo, era mal aos ouvidos do Senhor". A Bíblia não especifica o motivo exato da queixa aqui (talvez o cansaço da marcha ou as dificuldades do deserto de Parã), mas o foco está na atitude. A queixa não era uma oração de lamento buscando socorro, mas uma murmuração amarga e ingrata. O detalhe crucial é que "o Senhor o ouviu". Nossas murmurações nas tendas nunca são privadas; elas chegam diretamente aos ouvidos do Deus que nos resgatou e nos sustenta.'
      },
      {
        verseRef: 'v. 1b',
        title: 'A Ira e o Fogo Consumidor',
        description: 'A resposta de Deus à ingratidão é imediata: "a sua ira se acendeu; e o fogo do Senhor ardeu entre eles e consumiu os que estavam na última parte do arraial". O fogo, que na nuvem era símbolo de proteção e no altar era símbolo de aceitação, agora se torna instrumento de juízo. O fogo atinge as extremidades do acampamento, servindo como um aviso disciplinar severo, mas contido, para que a rebelião não se espalhasse para o centro da nação.'
      },
      {
        verseRef: 'v. 2-3',
        title: 'O Clamor, a Intercessão e o Novo Nome',
        description: 'Diante do juízo, o povo não tenta apagar o fogo com suas próprias mãos; eles "clamaram a Moisés". Eles reconhecem a necessidade de um mediador. Moisés, fiel ao seu chamado, "orou ao Senhor, e o fogo se apagou". A intercessão de um líder justo tem o poder de deter o juízo divino (Tiago 5:16). O lugar recebe um novo nome: Taberá, que significa "Incêndio" ou "Queima". O nome serviria como um memorial geográfico permanente do perigo da murmuração e da graça do perdão.'
      }
    ],
    conclusion: 'O episódio em Taberá é um alerta contundente sobre o pecado da murmuração. A queixa constante não é apenas um traço de personalidade pessimista; é uma ofensa espiritual que acusa Deus de ser injusto ou incompetente em Seu cuidado por nós. O apóstolo Paulo usa este exato período no deserto para nos advertir: "E não murmureis, como alguns deles murmuraram, e pereceram pelo destruidor" (1 Coríntios 10:10). Em vez de reclamar das dificuldades do caminho, devemos cultivar um coração grato, lembrando que temos um Mediador maior que Moisés, Jesus Cristo, cuja intercessão nos salva do fogo do juízo que os nossos pecados merecem.'
  },
  {
    id: 'num_11_4_15',
    bookId: 'NUM',
    chapter: 11,
    startVerse: 4,
    endVerse: 15,
    title: 'A Reclamação por Carne e o Fardo de Moisés',
    theme: 'O Desejo Carnal, o Desprezo pela Provisão e a Crise de Liderança',
    introduction: 'A murmuração em Taberá foi apenas o começo. Em Números 11:4-15, a insatisfação se aprofunda e se espalha como uma praga. O "vulgo" (a mistura de pessoas que saiu do Egito com Israel) começa a ter desejos intensos por comida egípcia, e logo toda a nação está chorando nas portas de suas tendas, desprezando o maná que Deus lhes dava diariamente. Esta rebelião não apenas provoca a ira de Deus, mas leva Moisés ao seu limite absoluto. Esmagado pelo peso de liderar um povo tão ingrato, Moisés entra em colapso emocional e pede a morte.',
    points: [
      {
        verseRef: 'v. 4-6',
        title: 'A Saudade do Egito e o Desprezo pelo Maná',
        description: 'A rebelião começa com o "vulgo" e contamina os filhos de Israel. Eles choram dizendo: "Quem nos dará carne a comer?". A memória deles sofre uma distorção trágica: eles se lembram dos peixes, pepinos, melões, alhos e cebolas que comiam "de graça" no Egito, esquecendo-se convenientemente dos chicotes, da escravidão e do assassinato de seus bebês. O pior de tudo é o desprezo pela provisão de Deus: "nossa alma se seca; coisa nenhuma há senão este maná diante dos nossos olhos". O milagre diário de Deus tornou-se monótono e desprezível para corações carnais.'
      },
      {
        verseRef: 'v. 10',
        title: 'O Choro Contagioso e a Ira Divina',
        description: 'Moisés ouve o povo chorando "por suas famílias, cada qual à porta da sua tenda". A insatisfação tornou-se uma histeria coletiva. O choro não era de arrependimento, mas de birra infantil por causa da dieta. O texto diz que "a ira do Senhor grandemente se acendeu". Deus havia providenciado o maná (o "pão dos anjos") com amor, e a rejeição do maná era, na verdade, a rejeição do próprio Deus que os sustentava.'
      },
      {
        verseRef: 'v. 11-15',
        title: 'O Colapso e a Oração Desesperada de Moisés',
        description: 'Moisés, exausto, volta-se para Deus com uma queixa amarga. Ele sente que o peso da nação é insuportável: "Concebi eu porventura todo este povo? Gereio eu, para que me dissesses: Leva-o ao teu colo...?". Moisés confessa sua incapacidade absoluta: "Eu sozinho não posso levar a todo este povo, porque muito pesado é para mim". No ápice do seu desespero, ele faz um pedido chocante: "Mata-me, peço-te... para que eu não veja o meu mal". A liderança de um povo obstinado quebrou o homem mais manso da terra.'
      }
    ],
    conclusion: 'A reclamação por carne revela o perigo da "memória seletiva" espiritual. Quando focamos naquilo que não temos (os "alhos do Egito"), ficamos cegos para os milagres diários que Deus nos dá (o maná). O desprezo pela provisão de Deus é a raiz de muita amargura. A crise de Moisés nos ensina uma lição vital sobre liderança e ministério: tentar carregar o peso do povo de Deus sozinho leva inevitavelmente ao esgotamento (burnout) e ao desespero. Deus nunca planejou que Moisés, ou qualquer líder cristão, carregasse o fardo da Igreja sozinho. O colapso de Moisés preparou o cenário para Deus compartilhar o fardo com outros.'
  },
  {
    id: 'num_11_16_30',
    bookId: 'NUM',
    chapter: 11,
    startVerse: 16,
    endVerse: 30,
    title: 'Os Setenta Anciãos e o Espírito',
    theme: 'A Delegação do Fardo, a Unção Compartilhada e a Provisão de Deus',
    introduction: 'Em resposta ao colapso emocional de Moisés e à exigência carnal do povo por carne, Deus age de duas maneiras em Números 11:16-30. Primeiro, Ele resolve a crise de liderança de Moisés, não removendo o fardo, mas distribuindo-o. Deus ordena a escolha de setenta anciãos e compartilha com eles o mesmo Espírito que estava sobre Moisés. Segundo, Deus responde ao pedido do povo por carne com uma promessa tão extravagante que até Moisés duvida. Este texto destaca a generosidade do Espírito de Deus e a onipotência do Seu braço para prover.',
    points: [
      {
        verseRef: 'v. 16-17',
        title: 'A Solução para o Esgotamento: Os Setenta Anciãos',
        description: 'Deus diz a Moisés para reunir setenta homens dos anciãos de Israel, líderes já reconhecidos pelo povo. Deus promete descer e falar com Moisés ali, e então realiza um ato espiritual profundo: "tirarei do Espírito que está sobre ti, e o porei sobre eles; e contigo levarão a carga do povo, para que tu não a leves sozinho". A unção de Moisés não diminuiu por ser compartilhada; como uma vela que acende outras, a luz apenas se multiplicou. A verdadeira liderança espiritual requer o compartilhamento do Espírito e da responsabilidade.'
      },
      {
        verseRef: 'v. 18-23',
        title: 'A Promessa da Carne e a Dúvida de Moisés',
        description: 'Deus manda o povo se santificar, pois no dia seguinte comerão carne. O juízo de Deus vem disfarçado de provisão: eles comerão carne não por um dia, mas por um mês inteiro, até lhes sair pelos narizes e causar nojo, porque "rejeitastes ao Senhor". Moisés, olhando para a logística humana (600 mil homens, no deserto), duvida: "Matar-se-ão para eles ovelhas e vacas...?". A resposta de Deus é uma das maiores repreensões à incredulidade na Bíblia: "Ter-se-ia encurtado a mão do Senhor? Agora verás se a minha palavra se te cumprirá ou não".'
      },
      {
        verseRef: 'v. 24-30',
        title: 'O Derramamento do Espírito e a Profecia de Eldade e Medade',
        description: 'Moisés reúne os setenta na Tenda. Deus desce na nuvem, tira do Espírito que estava em Moisés e o põe sobre os setenta. Imediatamente, eles profetizam (um sinal visível da unção). Dois homens, Eldade e Medade, haviam ficado no acampamento, mas o Espírito repousa sobre eles também, e eles profetizam no meio do povo. Josué, com ciúmes da autoridade de Moisés, pede que ele os proíba. A resposta de Moisés revela a grandeza de seu coração: "Tens tu ciúmes por mim? Tomara que todo o povo do Senhor fosse profeta, e que o Senhor pusesse o seu Espírito sobre ele!".'
      }
    ],
    conclusion: 'A resposta de Deus a Moisés nos mostra que a solução para o esgotamento no ministério é a capacitação de outros através do Espírito Santo. A dúvida de Moisés sobre a provisão de carne nos lembra que, mesmo os maiores heróis da fé, às vezes esquecem o tamanho do "braço do Senhor". A atitude de Moisés em relação a Eldade e Medade é o antídoto contra o orgulho ministerial: o verdadeiro líder não busca o monopólio da unção, mas deseja que todos experimentem o poder de Deus. O desejo de Moisés ("tomara que todo o povo... fosse profeta") tornou-se realidade no dia de Pentecostes (Atos 2), quando o Espírito foi derramado sobre toda a carne.'
  }
];

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

let replacedCount = 0;
for (const expanded of expandedPericopes) {
  const index = arr.findIndex(p => p.id === expanded.id);
  if (index !== -1) {
    arr[index] = expanded;
    replacedCount++;
  }
}

const newArrayContent = JSON.stringify(arr, null, 2);
const newContent = content.substring(0, startIndex) + newArrayContent + content.substring(endIndex + 1);
fs.writeFileSync('data/pericopes_temp.ts', newContent, 'utf8');
console.log(`Expanded ${replacedCount} pericopes (Batch 9.1).`);
