const fs = require('fs');

const newPericopes = [
  {
    id: 'gen_28_10_17',
    bookId: 'GEN',
    chapter: 28,
    startVerse: 10,
    endVerse: 17,
    title: 'O Sonho de Jacó em Betel',
    theme: 'A Escada para o Céu e a Presença Inesperada de Deus',
    introduction: `Jacó é um fugitivo. Ele enganou o seu pai, roubou a bênção do seu irmão Esaú e agora foge para salvar a própria vida. Ele está sozinho, exausto e dorme no deserto com uma pedra como travesseiro. É exatamente neste momento de vulnerabilidade e culpa que Deus intervém, não com julgamento, mas com uma visão de graça. O sonho de Jacó revela que a comunicação entre o céu e a terra não depende do mérito humano, mas da iniciativa divina.`,
    points: [
      {
        verseRef: 'v. 10-12',
        title: 'O Fugitivo e a Escada que Toca o Céu',
        description: `A Conexão Divina. Jacó deita-se em um lugar qualquer (v. 11). Ele sonha com "uma escada posta na terra, cujo topo tocava nos céus; e eis que os anjos de Deus subiam e desciam por ela" (v. 12). A escada representa a mediação entre Deus e a humanidade. Em Babel, os homens tentaram construir uma torre para alcançar o céu; em Betel, Deus abaixa uma escada para alcançar o homem. Jesus Cristo mais tarde identificaria a Si mesmo como esta escada (João 1:51), o único mediador entre o céu e a terra.`
      },
      {
        verseRef: 'v. 13-15',
        title: 'A Renovação da Aliança e a Promessa de Presença',
        description: `Eu Sou Contigo. O Senhor está no topo da escada e fala (v. 13). Ele não repreende Jacó pelos seus enganos, mas renova a aliança abraâmica com ele, prometendo a terra e a descendência (v. 13-14). A promessa mais reconfortante para um fugitivo solitário vem no versículo 15: "E eis que eu estou contigo, e te guardarei por onde quer que fores... porque te não deixarei, até que haja cumprido o que te tenho falado". A graça de Deus persegue o pecador mesmo quando ele está fugindo das consequências dos seus próprios erros.`
      },
      {
        verseRef: 'v. 16-17',
        title: 'O Despertar e o Temor Reverente',
        description: `A Casa de Deus. Jacó acorda e faz uma declaração profunda (v. 16): "Na verdade o Senhor está neste lugar; e eu não o sabia". Ele pensava estar em um deserto abandonado, mas descobre que está no centro da presença divina. Ele é tomado de temor reverente (v. 17): "Quão terrível é este lugar! Este não é outro lugar senão a casa de Deus; e esta é a porta dos céus". Ele chama o lugar de Betel (Casa de Deus). A verdadeira adoração nasce quando percebemos que Deus está presente nos lugares mais improváveis da nossa vida.`
      }
    ],
    conclusion: `Gênesis 28:10-17 nos ensina que não precisamos estar em um templo perfeito ou ter um currículo moral impecável para encontrar Deus. Ele frequentemente se revela nos nossos "desertos", quando estamos fugindo e usando pedras como travesseiros. A escada de Betel é a garantia de que o céu não está fechado para nós. Através de Cristo, Deus desceu até a nossa miséria para nos prometer a Sua presença constante e nos transformar de enganadores em adoradores.`
  },
  {
    id: 'gen_37_18_28',
    bookId: 'GEN',
    chapter: 37,
    startVerse: 18,
    endVerse: 28,
    title: 'A Venda de José',
    theme: 'A Inveja Humana e o Plano Invisível de Deus',
    introduction: `A história de José é uma das narrativas mais longas e belas do Antigo Testamento, ilustrando a doutrina da providência divina. José, o filho favorito de Jacó, é odiado pelos seus irmãos devido aos seus sonhos proféticos e ao favoritismo do pai. Quando ele vai procurá-los no campo, a inveja deles transforma-se em conspiração para assassinato. No entanto, o que parece ser o fim trágico dos sonhos de José é, na verdade, o mecanismo que Deus usará para salvar toda a família da fome anos depois.`,
    points: [
      {
        verseRef: 'v. 18-20',
        title: 'A Conspiração e o Ódio contra o Sonhador',
        description: `Lá Vem o Sonhador. Quando os irmãos veem José de longe, conspiram para matá-lo (v. 18). O ódio deles é focado nos sonhos que Deus lhe dera (v. 19-20): "Eis lá vem o sonhador-mor! Vinde, pois, agora, e matemo-lo... e veremos que será dos seus sonhos". Eles pensavam que, matando o mensageiro, poderiam frustrar o plano de Deus. A inveja é um veneno que cega o coração humano, levando irmãos a cometerem atrocidades contra a sua própria carne e sangue.`
      },
      {
        verseRef: 'v. 21-24',
        title: 'A Intervenção de Rúben e a Cova Vazia',
        description: `A Meia-Libertação. Rúben, o irmão mais velho, tenta salvar José secretamente (v. 21-22). Ele sugere que não derramem sangue, mas o lancem em uma cova no deserto, com a intenção de resgatá-lo mais tarde. Eles arrancam a túnica de várias cores (o símbolo do favoritismo do pai) e lançam José na cova, que estava vazia e sem água (v. 23-24). Deus usa a covardia e a hesitação de Rúben para preservar a vida de José. Mesmo quando os homens agem com maldade, Deus está limitando o alcance do mal.`
      },
      {
        verseRef: 'v. 25-28',
        title: 'A Venda aos Ismaelitas e a Providência Oculta',
        description: `O Preço de um Escravo. Enquanto José está na cova, os irmãos sentam-se para comer (uma demonstração de frieza brutal). Judá vê uma caravana de ismaelitas e propõe vender José como escravo em vez de matá-lo, para lucrarem (v. 26-27). Eles vendem o próprio irmão por vinte moedas de prata (v. 28), e José é levado para o Egito. Aos olhos humanos, a vida de José acabou. Mas aos olhos de Deus, ele está exatamente na rota para o palácio de Faraó. A providência divina usa até mesmo o pecado humano para cumprir os Seus propósitos soberanos.`
      }
    ],
    conclusion: `Gênesis 37:18-28 nos confronta com o mistério do sofrimento injusto. José não fez nada para merecer a cova e a escravidão. No entanto, a história nos ensina que Deus não está ausente quando somos traídos ou injustiçados. Ele é o Mestre de Xadrez invisível, movendo as peças da história. O que os irmãos de José fizeram por inveja e ganância, Deus usou como o primeiro passo para a salvação deles. A cruz de Cristo é a prova definitiva de que Deus pode transformar a maior injustiça da história na maior vitória da humanidade.`
  },
  {
    id: 'gen_50_15_21',
    bookId: 'GEN',
    chapter: 50,
    startVerse: 15,
    endVerse: 21,
    title: 'O Perdão de José',
    theme: 'O Perdão Radical e a Teologia da Providência',
    introduction: `O livro de Gênesis termina com uma das cenas mais emocionantes de reconciliação. Jacó morreu, e os irmãos de José estão aterrorizados. Eles temem que José, agora o homem mais poderoso do Egito, finalmente se vingue deles por tê-lo vendido como escravo décadas antes. A resposta de José não é apenas um ato de magnanimidade humana, mas uma profunda declaração teológica sobre como a soberania de Deus nos liberta da amargura e nos capacita a perdoar o imperdoável.`,
    points: [
      {
        verseRef: 'v. 15-17',
        title: 'O Medo da Vingança e a Culpa Persistente',
        description: `A Prisão da Culpa. "Vendo então os irmãos de José que seu pai já estava morto, disseram: Porventura nos odiará José e nos retribuirá todo o mal que lhe fizemos" (v. 15). O pecado tem uma sombra longa. Mesmo após terem sido sustentados por José durante anos, a culpa deles não os deixava em paz. Eles enviam um mensageiro com palavras que supostamente eram do seu pai, implorando perdão (v. 16-17). Quando José ouve isso, ele chora. Ele chora porque eles ainda não haviam compreendido a profundidade da sua graça.`
      },
      {
        verseRef: 'v. 18-19',
        title: 'A Submissão e a Recusa em Ser Deus',
        description: `Estou Eu no Lugar de Deus? Os irmãos prostram-se diante dele, cumprindo os sonhos de juventude de José, e oferecem-se como escravos (v. 18). A resposta de José é o fundamento do perdão (v. 19): "Não temais; porque porventura estou eu em lugar de Deus?". José recusa-se a assumir o papel de juiz e vingador. Ele reconhece que a vingança pertence a Deus. Quando tentamos nos vingar, estamos tentando usurpar o trono de Deus. O perdão começa quando abrimos mão do direito de retaliação.`
      },
      {
        verseRef: 'v. 20-21',
        title: 'A Soberania Divina e a Transformação do Mal',
        description: `Vós Intentastes o Mal, Deus Intentou o Bem. O versículo 20 é a chave hermenêutica de toda a história de José: "Vós bem intentastes mal contra mim; porém Deus o intentou para bem, para fazer como se vê neste dia, para conservar muita gente com vida". José não minimiza o pecado deles ("vós intentastes mal"), mas ele vê uma vontade superior operando por trás das ações deles ("Deus o intentou para bem"). Porque ele confia na providência de Deus, ele pode consolar e sustentar aqueles que o feriram (v. 21).`
      }
    ],
    conclusion: `Gênesis 50:15-21 é o antídoto contra a amargura. Não podemos perdoar feridas profundas apenas com força de vontade; precisamos de uma nova teologia. Precisamos ver que Deus está no controle absoluto da nossa vida, e que Ele pode usar até mesmo a maldade dos outros para forjar o nosso caráter e cumprir os Seus propósitos. Assim como José perdoou os seus irmãos e os sustentou, Jesus Cristo (o verdadeiro José) perdoa aqueles que O crucificaram e os convida para o Seu banquete eterno.`
  },
  {
    id: 'exo_3_1_10',
    bookId: 'EXO',
    chapter: 3,
    startVerse: 1,
    endVerse: 10,
    title: 'A Sarça Ardente e o Chamado de Moisés',
    theme: 'A Santidade de Deus e a Missão do Libertador',
    introduction: `Moisés passou 40 anos no Egito pensando que era alguém, e mais 40 anos no deserto de Midiã aprendendo que não era ninguém. Aos 80 anos, pastoreando ovelhas, a sua vida parecia ter acabado. Mas é exatamente na rotina do deserto que Deus aparece. A visão da sarça ardente é uma teofania (manifestação de Deus) que revela a santidade de Deus, a Sua compaixão pelo sofrimento do Seu povo e o Seu método de usar instrumentos humanos quebrantados para realizar libertações impossíveis.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Visão no Deserto e o Fogo que Não Consome',
        description: `O Fogo Inextinguível. Moisés apascentava o rebanho perto de Horebe (o monte de Deus) (v. 1). O Anjo do Senhor aparece-lhe em uma chama de fogo no meio de uma sarça (um arbusto espinhoso comum). O milagre não era o fogo, mas o fato de que "a sarça ardia no fogo, e a sarça não se consumia" (v. 2). A sarça representa o povo de Israel no Egito (e a igreja no mundo): frágil, espinhoso e no meio do fogo da aflição, mas não destruído, porque a presença de Deus está no meio dele.`
      },
      {
        verseRef: 'v. 4-6',
        title: 'A Santidade de Deus e a Reverência Exigida',
        description: `Tira os Sapatos. Quando Moisés se aproxima para ver, Deus o chama pelo nome: "Moisés, Moisés!" (v. 4). A primeira lição sobre Deus é a Sua santidade inacessível (v. 5): "Não te chegues para cá; tira os sapatos de teus pés; porque o lugar em que tu estás é terra santa". A terra era comum, mas a presença de Deus a tornou santa. Deus identifica-se como o Deus da aliança: o Deus de Abraão, Isaque e Jacó (v. 6). Moisés encobre o rosto, temendo olhar para Deus. A verdadeira vocação sempre começa com um encontro aterrorizante com a santidade divina.`
      },
      {
        verseRef: 'v. 7-10',
        title: 'A Compaixão Divina e a Comissão Humana',
        description: `Eu Vi, Eu Ouvi, Eu Desci. Deus revela o Seu coração pastoral (v. 7-8): "Tenho visto atentamente a aflição do meu povo... e tenho ouvido o seu clamor... porque conheço as suas dores; portanto desci para livrá-lo". Deus não é um observador distante; Ele é profundamente afetado pelo sofrimento do Seu povo. Mas o método de Deus para "descer" é surpreendente (v. 10): "Vem agora, pois, e eu te enviarei a Faraó para que tires o meu povo (os filhos de Israel) do Egito". Deus liberta o Seu povo enviando um homem.`
      }
    ],
    conclusion: `Êxodo 3:1-10 nos ensina que Deus nunca esquece as Suas promessas, mesmo quando o Seu povo está escravizado por séculos. Ele ouve o nosso clamor. A sarça ardente nos lembra que a santidade de Deus exige reverência, mas a Sua compaixão O move à ação. E, assim como Deus chamou um pastor idoso e gago no deserto para enfrentar o império mais poderoso da terra, Ele continua chamando pessoas improváveis hoje para serem instrumentos da Sua libertação no mundo.`
  },
  {
    id: 'exo_12_1_13',
    bookId: 'EXO',
    chapter: 12,
    startVerse: 1,
    endVerse: 13,
    title: 'A Páscoa e o Sangue do Cordeiro',
    theme: 'O Julgamento Divino e o Sangue que Salva',
    introduction: `Após nove pragas devastadoras, Faraó ainda recusa libertar Israel. A décima praga será o julgamento final: a morte dos primogênitos. Para proteger o Seu povo, Deus institui a Páscoa (Pesach), o evento redentor central do Antigo Testamento. A Páscoa não é apenas um ritual de libertação nacional; é a tipologia mais clara da obra de Cristo na cruz. Ela estabelece o princípio de que a salvação do julgamento divino só é possível através da morte substitutiva de um cordeiro sem defeito.`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'O Novo Começo e a Escolha do Cordeiro',
        description: `O Cordeiro Sem Defeito. Deus muda o calendário de Israel (v. 2): este mês será o princípio dos meses, marcando um novo começo baseado na redenção. A instrução é clara (v. 3): cada família deve tomar um cordeiro. O cordeiro deve ser "sem mácula, um macho de um ano" (v. 5). Ele deve ser perfeito, pois representa Aquele que não teria pecado. O cordeiro é guardado por quatro dias antes de ser sacrificado, permitindo que a família o examine e se apegue a ele, tornando o sacrifício pessoal e doloroso.`
      },
      {
        verseRef: 'v. 6-11',
        title: 'O Sacrifício e a Aplicação do Sangue',
        description: `O Sangue nas Ombreiras. No décimo quarto dia, toda a congregação deve imolar o cordeiro à tarde (v. 6). Mas a morte do cordeiro não era suficiente; o sangue tinha que ser aplicado (v. 7): "E tomarão do sangue, e pô-lo-ão em ambas as ombreiras, e na verga da porta, nas casas em que o comerem". A salvação requer apropriação pessoal. Eles devem comer a carne assada no fogo, com pães ázimos e ervas amargas (lembrando a amargura da escravidão), com os lombos cingidos e cajados na mão (v. 11), prontos para partir. É a Páscoa do Senhor.`
      },
      {
        verseRef: 'v. 12-13',
        title: 'O Julgamento e a Promessa de Proteção',
        description: `Vendo Eu o Sangue, Passarei por Cima. Deus anuncia o julgamento sobre todos os primogênitos e sobre os deuses do Egito (v. 12). Mas Ele dá uma promessa absoluta àqueles que estão debaixo do sangue (v. 13): "E aquele sangue vos será por sinal nas casas em que estiverdes; vendo eu sangue, passarei por cima de vós, e não haverá entre vós praga de mortandade, quando eu ferir a terra do Egito". O anjo da morte não verificava se os israelitas eram pessoas boas ou se estavam orando com fervor; ele apenas verificava se havia sangue na porta. O sangue era a única defesa.`
      }
    ],
    conclusion: `Êxodo 12:1-13 é o evangelho no Antigo Testamento. Todos nós merecemos o julgamento de Deus pelo nosso pecado. A nossa moralidade, a nossa religião e as nossas boas obras não podem nos proteger do anjo da morte. A nossa única esperança é que o Cordeiro de Deus, Jesus Cristo, foi sacrificado por nós (1 Coríntios 5:7). Quando o Seu sangue é aplicado nas portas do nosso coração pela fé, Deus olha para nós, vê o sangue do Seu Filho e "passa por cima", concedendo-nos vida e libertação eterna.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 11b).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
