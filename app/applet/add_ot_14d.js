const fs = require('fs');

const newPericopes = [
  {
    id: 'psa_46_1_11',
    bookId: 'PSA',
    chapter: 46,
    startVerse: 1,
    endVerse: 11,
    title: 'Deus é o Nosso Refúgio',
    theme: 'A Segurança em Meio ao Caos',
    introduction: `O Salmo 46 é um cântico de confiança inabalável em Deus diante de catástrofes naturais e convulsões políticas. Foi este salmo que inspirou Martinho Lutero a escrever o famoso hino "Castelo Forte é o Nosso Deus" durante os dias mais sombrios da Reforma Protestante. O salmista contrasta o caos do mundo (montanhas tremendo, oceanos rugindo, nações em fúria) com a paz e a estabilidade da cidade de Deus, culminando no mandamento divino para aquietar a alma e reconhecer a soberania do Senhor.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Refúgio Seguro no Caos Natural',
        description: `Socorro Bem Presente na Angústia. O salmo começa com uma declaração teológica que serve de âncora (v. 1): "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia". Por causa dessa realidade, o medo é banido (v. 2): "Portanto não temeremos". O salmista descreve o pior cenário de desastre natural: a terra se mudando, os montes sendo lançados no meio dos mares, as águas bramando e espumando (v. 2-3). Mesmo que a própria estrutura da criação pareça desmoronar, o povo de Deus está seguro porque o seu refúgio não é terreno, mas divino.`
      },
      {
        verseRef: 'v. 4-7',
        title: 'O Rio de Paz e a Cidade de Deus',
        description: `Deus Está no Meio Dela. Em contraste com os mares revoltos, há uma imagem de paz serena (v. 4): "Há um rio cujas correntes alegram a cidade de Deus, o santuário das moradas do Altíssimo". Jerusalém não tinha um rio natural; este rio é a presença vivificadora de Deus (o Espírito Santo). A segurança da cidade não está nas suas muralhas, mas no seu Habitante (v. 5): "Deus está no meio dela; não se abalará. Deus a ajudará, já ao romper da manhã". As nações se enfurecem, mas basta a voz de Deus para que a terra se derreta (v. 6).`
      },
      {
        verseRef: 'v. 8-11',
        title: 'A Soberania Divina e o Mandamento para Aquietar',
        description: `Aquietai-vos, e Sabei que Eu Sou Deus. O salmista convida o povo a contemplar as obras de Deus, que põe fim às guerras, quebra o arco, corta a lança e queima os carros no fogo (v. 8-9). Deus é o Senhor da história. No versículo 10, o próprio Deus fala: "Aquietai-vos, e sabei que eu sou Deus; serei exaltado entre os gentios; serei exaltado sobre a terra". "Aquietar-se" (literalmente, "soltar as mãos") significa parar de lutar freneticamente e render-se ao controle soberano de Deus. O refrão finaliza (v. 11): "O Senhor dos Exércitos está conosco".`
      }
    ],
    conclusion: `O Salmo 46 nos ensina que a paz não é a ausência de tempestades, mas a presença de Deus no meio delas. Quando o nosso mundo pessoal ou global parece estar desmoronando, a nossa tendência é o pânico ou a tentativa de controlar a situação. Deus nos chama a "soltar as mãos" e descansar na verdade de que Ele é o nosso refúgio. O Senhor dos Exércitos (o Deus de poder infinito) é o Deus de Jacó (o Deus da aliança e da graça), e Ele está conosco.`
  },
  {
    id: 'pro_4_20_27',
    bookId: 'PRO',
    chapter: 4,
    startVerse: 20,
    endVerse: 27,
    title: 'Guarda o Teu Coração',
    theme: 'A Fonte da Vida e a Disciplina dos Sentidos',
    introduction: `O livro de Provérbios é um manual de sabedoria prática para a vida diária. No capítulo 4, um pai instrui o seu filho sobre a importância vital de internalizar a sabedoria de Deus. A passagem culmina com um dos conselhos mais importantes de toda a Bíblia: a ordem para guardar o coração. Na antropologia bíblica, o coração não é apenas a sede das emoções, mas o centro de controle do ser humano (mente, vontade e afeições). O que permitimos entrar e sair do nosso coração determina a trajetória de toda a nossa vida.`,
    points: [
      {
        verseRef: 'v. 20-22',
        title: 'A Atenção à Palavra e a Vida para a Alma',
        description: `Inclina os Teus Ouvidos. A instrução começa com um apelo à atenção total (v. 20): "Filho meu, atenta para as minhas palavras; às minhas razões inclina o teu ouvido". A sabedoria não é absorvida por osmose; exige foco intencional. A Palavra de Deus deve ser mantida diante dos olhos e guardada no centro do ser (v. 21): "Não as deixes apartar-se dos teus olhos; guarda-as no íntimo do teu coração". O resultado dessa internalização é saúde espiritual e física (v. 22): "Porque são vida para os que as acham, e saúde para todo o seu corpo".`
      },
      {
        verseRef: 'v. 23',
        title: 'O Mandamento Central: A Guarda do Coração',
        description: `Dele Procedem as Saídas da Vida. O versículo 23 é o núcleo da sabedoria bíblica: "Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as saídas da vida". O coração é como um reservatório ou uma nascente. Se a nascente for poluída, toda a água que flui dela (pensamentos, palavras, ações) será contaminada. Guardar o coração significa ser um vigia implacável na porta da nossa mente e das nossas afeições, não permitindo que a amargura, a luxúria, o orgulho ou a incredulidade se instalem ali.`
      },
      {
        verseRef: 'v. 24-27',
        title: 'A Disciplina dos Sentidos e a Retidão do Caminho',
        description: `Os Teus Olhos Olhem Direito. Se o coração é a nascente, os sentidos são os canais. Salomão instrui sobre a disciplina da boca (v. 24): afastar a falsidade e a perversidade dos lábios. Ele instrui sobre a disciplina dos olhos (v. 25): "Os teus olhos olhem para a frente, e as tuas pálpebras olhem direto diante de ti", evitando as distrações do pecado. Ele instrui sobre a disciplina dos pés (v. 26-27): ponderar a vereda, não se desviar nem para a direita nem para a esquerda, e retirar o pé do mal. A guarda do coração exige a vigilância de todo o corpo.`
      }
    ],
    conclusion: `Provérbios 4:20-27 nos ensina que a vida cristã é vencida ou perdida no campo de batalha do coração. Nós gastamos muito tempo e dinheiro guardando as nossas casas, os nossos carros e as nossas contas bancárias, mas frequentemente deixamos a porta do nosso coração escancarada para a mídia tóxica, os pensamentos impuros e as atitudes pecaminosas. A verdadeira sabedoria é investir a nossa maior energia na proteção da nossa vida interior, enchendo-a com a Palavra de Deus, porque é de lá que flui a verdadeira vida.`
  },
  {
    id: 'isa_40_27_31',
    bookId: 'ISA',
    chapter: 40,
    startVerse: 27,
    endVerse: 31,
    title: 'Os Que Esperam no Senhor',
    theme: 'O Cansaço Humano e a Renovação Divina',
    introduction: `O capítulo 40 de Isaías marca uma virada no livro, passando das profecias de julgamento para as promessas de consolo ("Consolai, consolai o meu povo", v. 1). O povo de Israel, no exílio, sentia-se abandonado e esquecido por Deus. Eles estavam exaustos e sem esperança. Deus responde a esse desespero não com uma repreensão severa, mas com uma revelação da Sua grandeza infinita e uma das promessas mais amadas das Escrituras sobre a renovação das forças para aqueles que confiam nEle.`,
    points: [
      {
        verseRef: 'v. 27',
        title: 'A Queixa do Povo e a Sensação de Abandono',
        description: `O Meu Caminho Está Oculto ao Senhor. Israel expressa a sua dor e dúvida (v. 27): "Por que dizes, ó Jacó, e tu falas, ó Israel: O meu caminho está oculto ao Senhor, e o meu juízo passa despercebido ao meu Deus?". No meio do sofrimento prolongado, é comum sentirmos que Deus não nos vê, não se importa ou perdeu o controle da situação. A queixa de Israel é a queixa de todo coração humano que olha para as circunstâncias difíceis e conclui erroneamente que Deus o abandonou.`
      },
      {
        verseRef: 'v. 28-30',
        title: 'A Grandeza do Criador e o Cansaço Humano',
        description: `O Criador Não se Cansa. Deus responde lembrando-lhes de quem Ele é (v. 28): "Não sabes, não ouviste que o eterno Deus, o Senhor, o Criador dos fins da terra, nem se cansa nem se fatiga? É inescrutável o seu entendimento". O nosso cansaço não reflete o cansaço de Deus. Ele é a fonte inesgotável de energia. E Ele não guarda essa energia para Si mesmo (v. 29): "Dá força ao cansado, e multiplica as forças ao que não tem nenhum vigor". Até mesmo os jovens mais fortes (no auge da capacidade humana) se cansarão e cairão (v. 30), provando que a força natural é insuficiente.`
      },
      {
        verseRef: 'v. 31',
        title: 'A Promessa de Renovação e o Voo da Águia',
        description: `Subirão com Asas Como Águias. O clímax da passagem é a promessa para aqueles que confiam em Deus (v. 31): "Mas os que esperam no Senhor renovarão as forças, subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão". "Esperar" no Senhor não é passividade preguiçosa, mas confiança ativa e dependência contínua. A renovação vem em três ritmos: voar (momentos de êxtase e grande vitória), correr (momentos de atividade intensa) e caminhar (a rotina diária e monótona). Em todas as fases, Deus fornece a força necessária.`
      }
    ],
    conclusion: `Isaías 40:27-31 é o antídoto divino para o esgotamento (burnout) espiritual e emocional. Quando tentamos viver a vida cristã na nossa própria força, inevitavelmente tropeçaremos e cairemos, por mais "jovens e fortes" que sejamos. A chave para a resistência não é tentar ser mais forte, mas admitir a nossa fraqueza e "esperar no Senhor". Quando trocamos a nossa fraqueza pela força dEle, recebemos a capacidade sobrenatural de voar sobre as tempestades, correr nas provações e caminhar fielmente na rotina diária sem desanimar.`
  },
  {
    id: 'jer_18_1_6',
    bookId: 'JER',
    chapter: 18,
    startVerse: 1,
    endVerse: 6,
    title: 'O Oleiro e o Barro',
    theme: 'A Soberania de Deus e a Formação do Caráter',
    introduction: `Deus frequentemente usava lições objetivas para ensinar os Seus profetas. Em Jeremias 18, Deus manda o profeta descer à casa do oleiro para receber uma mensagem. A imagem do oleiro trabalhando o barro na roda é uma das metáforas mais poderosas da Bíblia sobre a soberania absoluta de Deus sobre as nações e os indivíduos, e sobre o Seu direito de moldar, quebrar e refazer as nossas vidas de acordo com o Seu propósito perfeito.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Lição Objetiva e o Trabalho na Roda',
        description: `Desce à Casa do Oleiro. Deus ordena a Jeremias (v. 2): "Levanta-te, e desce à casa do oleiro, e lá te farei ouvir as minhas palavras". Jeremias obedece e observa o artesão (v. 3): "E desci à casa do oleiro, e eis que ele estava fazendo a sua obra sobre as rodas". A roda girando representa as circunstâncias da vida, o tempo e a história. O oleiro tem as mãos sujas de barro, trabalhando intimamente com a matéria-prima. Deus não é um relojoeiro distante; Ele está ativamente envolvido na formação da nossa vida.`
      },
      {
        verseRef: 'v. 4',
        title: 'O Vaso Estragado e a Obra Refeita',
        description: `Tornou a Fazer Dele Outro Vaso. Enquanto Jeremias observava, ocorre um problema (v. 4): "Como o vaso, que ele fazia de barro, quebrou-se na mão do oleiro...". O defeito não estava na mão do oleiro, mas na resistência do barro (nossa natureza pecaminosa e rebelde). O que o oleiro faz? Ele não joga o barro fora. "...tornou a fazer dele outro vaso, conforme o que pareceu bem aos olhos do oleiro fazer". A graça de Deus é vista na Sua disposição de amassar o barro estragado e começar de novo, moldando-nos em algo útil para a Sua glória.`
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Aplicação Divina e a Soberania Absoluta',
        description: `Como o Barro na Mão do Oleiro. A palavra do Senhor vem para explicar a visão (v. 5-6): "Não poderei eu fazer de vós como fez este oleiro, ó casa de Israel? diz o Senhor. Eis que, como o barro na mão do oleiro, assim sois vós na minha mão, ó casa de Israel". Deus reivindica o direito absoluto de propriedade e governo sobre o Seu povo. O barro não tem o direito de ditar ao oleiro que forma deve ter (Romanos 9:20-21). A nossa única responsabilidade é sermos maleáveis e submissos nas mãos de Deus.`
      }
    ],
    conclusion: `Jeremias 18:1-6 nos ensina a abraçar a soberania de Deus, mesmo quando o processo de moldagem é doloroso. Quando a nossa vida parece "quebrar" devido aos nossos próprios erros ou às pressões do mundo, não fomos descartados. Estamos nas mãos do Oleiro Divino. Ele usa a roda das circunstâncias para nos quebrar, nos amassar e nos refazer à imagem do Seu Filho. A verdadeira paz é encontrada quando paramos de resistir às mãos de Deus e oramos: "Tu és o Oleiro, eu sou o barro; molda-me e faze-me segundo a Tua vontade".`
  },
  {
    id: 'lam_3_21_26',
    bookId: 'LAM',
    chapter: 3,
    startVerse: 21,
    endVerse: 26,
    title: 'A Esperança na Aflição',
    theme: 'As Misericórdias Inesgotáveis do Senhor',
    introduction: `O livro de Lamentações é um cântico fúnebre escrito por Jeremias após a destruição de Jerusalém pelos babilônios. O capítulo 3 é o coração do livro. Nos primeiros 20 versículos, o profeta descreve a sua dor física, emocional e espiritual em termos agonizantes, sentindo-se como um alvo das flechas de Deus. A sua alma está abatida. Mas no versículo 21, há uma virada dramática. No meio dos escombros fumegantes da sua cidade, Jeremias faz uma escolha teológica que muda a sua perspectiva e nos deixa um dos textos mais belos sobre a fidelidade de Deus.`,
    points: [
      {
        verseRef: 'v. 21',
        title: 'A Decisão da Mente e o Retorno da Esperança',
        description: `Disso me Recordarei no Meu Coração. Após focar na sua miséria, Jeremias toma uma decisão consciente de mudar o foco dos seus pensamentos (v. 21): "Disso me recordarei no meu coração; por isso tenho esperança". A esperança bíblica não é um otimismo cego, mas uma lembrança intencional do caráter de Deus. Quando as circunstâncias gritam que tudo está perdido, a fé deve pregar para a alma, trazendo à memória as verdades eternas que transcendem a dor do momento.`
      },
      {
        verseRef: 'v. 22-23',
        title: 'As Misericórdias Inesgotáveis e a Fidelidade Diária',
        description: `As Suas Misericórdias Não Têm Fim. O que Jeremias traz à memória? (v. 22): "As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas misericórdias não têm fim". Jerusalém foi destruída, mas o povo não foi aniquilado. A graça de Deus é o que nos impede de recebermos o que realmente merecemos. Essas misericórdias não são velhas ou estagnadas (v. 23): "Novas são cada manhã; grande é a tua fidelidade". Assim como o maná no deserto, a graça de Deus é fresca e suficiente para os desafios de cada novo dia.`
      },
      {
        verseRef: 'v. 24-26',
        title: 'A Porção da Alma e a Espera Silenciosa',
        description: `O Senhor é a Minha Porção. Jeremias perdeu tudo materialmente, mas ele declara (v. 24): "A minha porção é o Senhor, diz a minha alma; portanto esperarei nele". Quando Deus é tudo o que você tem, você descobre que Deus é tudo o que você precisa. Por causa dessa verdade, o profeta conclui (v. 25-26): "Bom é o Senhor para os que esperam por ele, para a alma que o busca. Bom é ter esperança, e aguardar em silêncio a salvação do Senhor". A espera silenciosa é a marca de uma fé que descansa na soberania e no tempo de Deus.`
      }
    ],
    conclusion: `Lamentações 3:21-26 é a âncora da alma nos dias mais escuros da vida. Quando estamos cercados por perdas, luto ou depressão, a nossa mente naturalmente foca na dor. Jeremias nos ensina a disciplina de "trazer à memória o que pode nos dar esperança". O sol nasce todas as manhãs como um lembrete físico de uma realidade espiritual: a fidelidade de Deus nunca falha. As Suas misericórdias são novas hoje. Podemos aguardar em silêncio, sabendo que o Deus que permitiu a aflição é o mesmo Deus que trará a salvação.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 14d).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
