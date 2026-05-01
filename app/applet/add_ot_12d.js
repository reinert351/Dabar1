const fs = require('fs');

const newPericopes = [
  {
    id: 'ecc_12_1_14',
    bookId: 'ECC',
    chapter: 12,
    startVerse: 1,
    endVerse: 14,
    title: 'O Dever de Todo Homem',
    theme: 'A Futilidade da Vida sem Deus',
    introduction: `O livro de Eclesiastes é a exploração filosófica de Salomão sobre o sentido da vida "debaixo do sol" (a vida puramente terrena, sem perspectiva eterna). Após testar o prazer, a riqueza, o trabalho e a sabedoria humana, ele conclui que tudo é "vaidade" (hebel - fumaça, vapor, futilidade). O capítulo 12 é o clímax do livro. Ele usa uma série de metáforas poéticas sobre a velhice e a morte para nos exortar a lembrar de Deus enquanto somos jovens, antes que seja tarde demais, e resume o propósito final da existência humana.`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Exortação à Juventude e a Chegada da Velhice',
        description: `Lembra-te do teu Criador. O conselho é urgente (v. 1): "Lembra-te também do teu Criador nos dias da tua mocidade, antes que venham os maus dias, e cheguem os anos dos quais venhas a dizer: Não tenho neles contentamento". Salomão descreve a velhice através de metáforas de uma casa em ruínas (v. 3-4): os guardas da casa tremem (mãos), os homens fortes se curvam (pernas), os moedores cessam (dentes), os que olham pelas janelas se escurecem (olhos). A vida física está se desfazendo, e o medo das alturas e do caminho aumenta (v. 5).`
      },
      {
        verseRef: 'v. 6-8',
        title: 'A Inevitabilidade da Morte e o Retorno ao Pó',
        description: `O Fio de Prata se Rompe. A morte é descrita com imagens de fragilidade (v. 6): o fio de prata se rompe, o copo de ouro se despedaça, o cântaro se quebra junto à fonte. Quando a morte chega, a constituição humana é desfeita (v. 7): "E o pó volte à terra, como o era, e o espírito volte a Deus, que o deu". Diante da morte inevitável, o Pregador repete a sua tese inicial (v. 8): "Vaidade de vaidades, diz o pregador, tudo é vaidade". Sem Deus, a morte torna todas as conquistas terrenas absolutamente inúteis.`
      },
      {
        verseRef: 'v. 13-14',
        title: 'A Conclusão do Discurso e o Julgamento Final',
        description: `Teme a Deus e Guarda os Seus Mandamentos. Após toda a exploração filosófica, Salomão chega ao fundo da questão (v. 13): "De tudo o que se tem ouvido, o fim é: Teme a Deus, e guarda os seus mandamentos; porque isto é o dever de todo o homem". A vida só tem sentido quando vivida em reverência e obediência ao Criador. A razão para isso é o julgamento final (v. 14): "Porque Deus há de trazer a juízo toda a obra, e até tudo o que está encoberto, quer seja bom, quer seja mau". A eternidade dá peso e significado a cada ação feita no tempo.`
      }
    ],
    conclusion: `Eclesiastes 12:1-14 é um antídoto contra o materialismo e a procrastinação espiritual. Ele nos lembra que a juventude é passageira, a velhice é difícil e a morte é certa. Construir a nossa vida em torno de coisas que o tempo vai destruir (dinheiro, beleza, status) é a definição de futilidade. O único fundamento sólido para uma vida com significado é o temor do Senhor, sabendo que, através de Cristo, o nosso trabalho não é vão e a morte não é o fim, mas a porta para a presença de Deus.`
  },
  {
    id: 'isa_6_1_8',
    bookId: 'ISA',
    chapter: 6,
    startVerse: 1,
    endVerse: 8,
    title: 'A Visão do Trono',
    theme: 'A Santidade de Deus e a Purificação do Profeta',
    introduction: `O rei Uzias governou Judá por 52 anos. Ele trouxe estabilidade e prosperidade, mas morreu leproso devido ao seu orgulho. No ano da morte deste grande rei terreno, o profeta Isaías vai ao templo e tem uma visão do verdadeiro Rei de Israel. A visão de Isaías 6 é uma das revelações mais majestosas da santidade de Deus em toda a Bíblia. Ela demonstra o padrão de todo encontro autêntico com Deus: revelação da santidade divina, convicção do pecado humano, purificação pela graça e comissionamento para o serviço.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Trono Elevado e a Adoração dos Serafins',
        description: `Santo, Santo, Santo. "No ano em que morreu o rei Uzias, eu vi também ao Senhor assentado sobre um alto e sublime trono" (v. 1). Os tronos da terra ficam vazios, mas o trono do céu está sempre ocupado. Acima do trono estavam os serafins (seres ardentes), cobrindo o rosto e os pés em reverência (v. 2). Eles clamavam uns aos outros (v. 3): "Santo, Santo, Santo é o Senhor dos Exércitos; toda a terra está cheia da sua glória". A repetição tripla (trishagion) é a forma hebraica de expressar o superlativo absoluto. Deus é infinitamente separado do pecado e exaltado acima da criação.`
      },
      {
        verseRef: 'v. 5-7',
        title: 'A Convicção de Pecado e a Brasa do Altar',
        description: `Ai de Mim! A visão da santidade de Deus destrói a justiça própria de Isaías. Ele não compara a si mesmo com os outros homens, mas com Deus, e grita (v. 5): "Ai de mim! Pois estou perdido; porque sou um homem de lábios impuros, e habito no meio de um povo de impuros lábios; os meus olhos viram o Rei". A confissão traz a cura. Um serafim voa até ele com uma brasa viva tirada do altar (o lugar do sacrifício) e toca a sua boca (v. 6-7), declarando: "a tua iniquidade foi tirada, e expiado o teu pecado". A purificação vem de Deus, através do sacrifício.`
      },
      {
        verseRef: 'v. 8',
        title: 'A Voz do Senhor e a Resposta do Profeta',
        description: `Eis-me Aqui, Envia-me a Mim. Somente após ser perdoado e purificado, Isaías está pronto para ouvir a voz de Deus. "Depois disto ouvi a voz do Senhor, que dizia: A quem enviarei, e quem há de ir por nós?" (v. 8). Deus não força Isaías; Ele faz um convite. A resposta de Isaías é imediata e incondicional: "Então disse eu: Eis-me aqui, envia-me a mim". Ele não pergunta para onde, qual será o salário ou quais serão os riscos. A graça purificadora produz obediência voluntária.`
      }
    ],
    conclusion: `Isaías 6:1-8 nos ensina que não podemos servir a Deus adequadamente até que O vejamos como Ele realmente é: infinitamente Santo. Quando vemos a santidade de Deus, vemos a nossa própria miséria. Mas o evangelho está na brasa do altar: Deus providenciou a purificação para os nossos lábios impuros através do sacrifício de Cristo. Aqueles que experimentam a profundidade desse perdão são os únicos que podem se levantar e dizer com alegria: "Eis-me aqui, envia-me a mim".`
  },
  {
    id: 'isa_53_1_6',
    bookId: 'ISA',
    chapter: 53,
    startVerse: 1,
    endVerse: 6,
    title: 'O Servo Sofredor',
    theme: 'A Expiação Substitutiva',
    introduction: `Escrito cerca de 700 anos antes do nascimento de Cristo, Isaías 53 é o pináculo da profecia messiânica no Antigo Testamento. É tão preciso na sua descrição da crucificação e do significado teológico da morte de Jesus que frequentemente é chamado de "O Quinto Evangelho". A passagem destrói a expectativa judaica de um Messias militar e político, revelando em vez disso um "Servo Sofredor" que conquistaria o maior inimigo da humanidade (o pecado) não matando os Seus inimigos, mas morrendo por eles em um ato de substituição penal.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Rejeição e a Falta de Atrativos Humanos',
        description: `Desprezado e Mais Rejeitado. O profeta pergunta quem crerá nesta mensagem (v. 1), porque o Messias não virá com pompa real. Ele crescerá como uma "raiz em terra seca", sem beleza ou majestade para atrair os homens (v. 2). A encarnação foi marcada pela humildade. A resposta da humanidade a Ele será a rejeição (v. 3): "Era desprezado, e o mais rejeitado entre os homens, homem de dores, e experimentado nos trabalhos... desprezado era, e não fizemos dele caso algum". O mundo não reconheceu o seu Criador quando Ele veio em fraqueza.`
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Substituição Penal e as Feridas que Curam',
        description: `Ele Tomou Sobre Si. O coração do evangelho está nestes versículos. Nós pensávamos que Ele estava sendo punido por Deus pelos Seus próprios pecados (v. 4), mas a verdade era o oposto (v. 5): "Mas ele foi ferido por causa das nossas transgressões, e moído por causa das nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados". O Servo não sofreu como um mártir, mas como um substituto. Ele recebeu o castigo (a ira de Deus) que nós merecíamos, para que nós pudéssemos receber a paz (shalom) e a cura espiritual que Ele merecia.`
      },
      {
        verseRef: 'v. 6',
        title: 'A Ovelha Desviada e a Iniquidade Transferida',
        description: `O Senhor Fez Cair Sobre Ele. O profeta resume a condição humana (v. 6a): "Todos nós andávamos desgarrados como ovelhas; cada um se desviava pelo seu caminho". O pecado é fundamentalmente rebelião e autonomia (seguir o "seu próprio caminho"). A solução divina para o nosso desvio é a imputação (v. 6b): "mas o Senhor fez cair sobre ele a iniquidade de nós todos". Deus Pai pegou a culpa coletiva do Seu povo e a colocou sobre os ombros do Seu Filho perfeito na cruz.`
      }
    ],
    conclusion: `Isaías 53:1-6 é a declaração mais clara do Antigo Testamento de que a salvação não vem pelo nosso esforço moral, mas pelo sofrimento vicário de outro. Jesus Cristo é o Servo Sofredor. Ele foi moído para que nós fôssemos perdoados. Quando compreendemos que as "nossas transgressões" causaram as Suas feridas, o orgulho é destruído e nasce a verdadeira adoração. Não há paz com Deus fora do castigo que caiu sobre o Seu Filho.`
  },
  {
    id: 'jer_1_4_10',
    bookId: 'JER',
    chapter: 1,
    startVerse: 4,
    endVerse: 10,
    title: 'O Chamado de Jeremias',
    theme: 'A Escolha Divina e a Autoridade da Palavra',
    introduction: `Jeremias foi chamado para ser profeta em um dos períodos mais sombrios da história de Judá: os anos finais antes da destruição de Jerusalém pelos babilônios. O seu ministério seria marcado por rejeição, prisão e lágrimas (ele é conhecido como o "profeta chorão"). Para suportar tal fardo, ele precisava de uma âncora inabalável. O seu chamado no capítulo 1 fornece essa âncora, revelando que a vocação profética não é uma escolha humana, mas um decreto eterno de Deus, e que a autoridade do profeta reside exclusivamente na Palavra que Deus coloca na sua boca.`,
    points: [
      {
        verseRef: 'v. 4-5',
        title: 'A Predestinação e o Conhecimento Prévio',
        description: `Antes que te Formasse. A palavra do Senhor vem a Jeremias com uma declaração de soberania absoluta (v. 5): "Antes que te formasse no ventre te conheci, e antes que saísses da madre, te santifiquei; às nações te dei por profeta". Deus não olhou para o currículo de Jeremias depois que ele cresceu; Deus o escolheu, o separou (santificou) e o comissionou antes mesmo da sua concepção. A nossa identidade e o nosso propósito em Deus são mais antigos do que a nossa própria existência física.`
      },
      {
        verseRef: 'v. 6-8',
        title: 'A Desculpa da Juventude e a Promessa de Livramento',
        description: `Não Digas: Sou uma Criança. Jeremias reage com medo e sentimento de inadequação (v. 6): "Ah, Senhor Deus! Eis que não sei falar; porque não passo de uma criança". Ele foca na sua inexperiência. Deus rejeita a desculpa (v. 7): "Não digas: Sou uma criança; porque a todos a quem eu te enviar, irás; e tudo quanto te mandar, falarás". O mensageiro não precisa ser eloquente; ele só precisa ser obediente. Deus promete a Sua presença protetora (v. 8): "Não temas diante deles; porque estou contigo para te livrar".`
      },
      {
        verseRef: 'v. 9-10',
        title: 'A Transferência da Palavra e o Poder de Destruir e Edificar',
        description: `As Minhas Palavras na Tua Boca. O Senhor estende a mão e toca a boca de Jeremias (v. 9): "Eis que ponho as minhas palavras na tua boca". A autoridade não está no homem, mas na mensagem. Deus então descreve o escopo do ministério de Jeremias (v. 10): "Olha, ponho-te neste dia sobre as nações... para arrancares, e para derrubares, e para destruíres, e para arruinares; e também para edificares e para plantares". A verdadeira pregação da Palavra de Deus tem um efeito duplo: ela destrói a idolatria e o orgulho (julgamento) para poder edificar e plantar a verdade (graça).`
      }
    ],
    conclusion: `Jeremias 1:4-10 nos ensina que Deus não nos chama com base na nossa capacidade, mas na Sua soberania. Quando nos sentimos jovens demais, velhos demais, ou inadequados para a obra de Deus, devemos lembrar que Ele nos conhecia antes de nascermos. A nossa única responsabilidade é abrir a boca e falar a verdade dEle, mesmo quando for impopular. A Palavra de Deus tem o poder de derrubar impérios e plantar esperança, e Ele promete estar com aqueles que a proclamam fielmente.`
  },
  {
    id: 'jer_29_10_14',
    bookId: 'JER',
    chapter: 29,
    startVerse: 10,
    endVerse: 14,
    title: 'A Promessa no Exílio',
    theme: 'A Esperança e o Propósito de Deus na Aflição',
    introduction: `O povo de Judá foi levado cativo para a Babilônia. Falsos profetas estavam dizendo ao povo que o exílio seria curto e que eles voltariam para casa em breve. Jeremias envia uma carta aos exilados dizendo o oposto: construam casas, plantem jardins, tenham filhos, porque o exílio durará 70 anos. No entanto, no meio dessa dura realidade de disciplina prolongada, Deus entrega uma das promessas mais reconfortantes da Bíblia. Ele garante que o exílio não é o fim, mas um processo de purificação com um propósito glorioso.`,
    points: [
      {
        verseRef: 'v. 10',
        title: 'O Tempo Determinado e a Fidelidade da Palavra',
        description: `Setenta Anos. Deus estabelece um limite para o sofrimento (v. 10): "Certamente que passados setenta anos em Babilônia, atentarei para vós, e cumprirei sobre vós a minha boa palavra, tornando a trazer-vos a este lugar". O exílio não era um acidente histórico, mas um julgamento divino com um prazo de validade. Deus está no controle do relógio da história. A Sua "boa palavra" (a promessa da aliança) não foi anulada pelo pecado do povo; ela será cumprida no tempo determinado por Ele.`
      },
      {
        verseRef: 'v. 11',
        title: 'Os Pensamentos de Paz e o Futuro Esperado',
        description: `Eu É Que Sei Que Pensamentos Tenho. O versículo 11 é frequentemente citado fora de contexto, mas o seu significado real é ainda mais profundo: "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais". Deus diz isso a um povo que está sofrendo como escravo em uma terra pagã. Mesmo quando a mão de Deus é pesada em disciplina, o Seu coração está cheio de pensamentos de "shalom" (paz, bem-estar, totalidade). O propósito da disciplina não é a destruição, mas a restauração.`
      },
      {
        verseRef: 'v. 12-14',
        title: 'A Busca de Todo o Coração e a Restauração',
        description: `Buscar-me-eis, e me Achareis. O exílio tinha o objetivo de curar Israel da idolatria. Deus promete que, no fim desse processo, haverá um avivamento espiritual (v. 12): "Então me invocareis, e ireis, e orareis a mim, e eu vos ouvirei". A condição para encontrar Deus é a sinceridade absoluta (v. 13): "E buscar-me-eis, e me achareis, quando me buscardes com todo o vosso coração". Quando o coração do povo for quebrado e purificado, Deus promete (v. 14): "Serei achado de vós... e mudarei a vossa sorte", trazendo-os de volta do cativeiro.`
      }
    ],
    conclusion: `Jeremias 29:10-14 é a âncora da alma nos tempos de "exílio" — quando estamos passando por sofrimento, disciplina ou circunstâncias que não podemos mudar. Deus nos ensina a não dar ouvidos aos falsos profetas que prometem alívio imediato, mas a confiar que Ele tem um propósito na nossa dor. Os pensamentos de Deus para nós em Cristo são sempre de paz. Se usarmos o nosso "exílio" para buscá-Lo de todo o coração, descobriremos que a maior bênção não é apenas a mudança das circunstâncias, mas o encontrar o próprio Deus.`
  }
];

// Read file, find the end of the array, insert new pericopes
let fileContent = fs.readFileSync('data/pericopes.ts', 'utf8');

// Find the last "];"
const lastBracketIndex = fileContent.lastIndexOf('];');

if (lastBracketIndex !== -1) {
  // Create the string to insert
  let insertString = '';
  newPericopes.forEach(p => {
    insertString += `  ,\n  {\n`;
    insertString += `    id: '${p.id}',\n`;
    insertString += `    bookId: '${p.bookId}',\n`;
    insertString += `    chapter: ${p.chapter},\n`;
    insertString += `    startVerse: ${p.startVerse},\n`;
    insertString += `    endVerse: ${p.endVerse},\n`;
    insertString += `    title: '${p.title}',\n`;
    insertString += `    theme: '${p.theme}',\n`;
    insertString += `    introduction: \`${p.introduction}\`,\n`;
    insertString += `    points: [\n`;
    p.points.forEach((pt, index) => {
      insertString += `      {\n`;
      insertString += `        verseRef: '${pt.verseRef}',\n`;
      insertString += `        title: '${pt.title}',\n`;
      insertString += `        description: \`${pt.description}\`\n`;
      insertString += `      }${index < p.points.length - 1 ? ',' : ''}\n`;
    });
    insertString += `    ],\n`;
    insertString += `    conclusion: \`${p.conclusion}\`\n`;
    insertString += `  }`;
  });

  // Replace the last "];" with the new pericopes and "];"
  const newContent = fileContent.substring(0, lastBracketIndex) + insertString + '\n];\n';
  fs.writeFileSync('data/pericopes.ts', newContent, 'utf8');
  console.log('Successfully added 5 new pericopes for OT (Batch 12d).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
