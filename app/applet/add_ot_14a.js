const fs = require('fs');

const newPericopes = [
  {
    id: 'gen_4_1_8',
    bookId: 'GEN',
    chapter: 4,
    startVerse: 1,
    endVerse: 8,
    title: 'Caim e Abel',
    theme: 'A Adoração Aceitável e a Raiz do Pecado',
    introduction: `Logo após a expulsão do Éden, a humanidade começa a se multiplicar, mas o vírus do pecado já está enraizado na natureza humana. A história de Caim e Abel é o primeiro relato de adoração e o primeiro relato de homicídio na Bíblia, mostrando como a religião corrompida pelo orgulho pode levar à violência. O texto nos ensina que Deus não olha apenas para a oferta, mas para o coração do ofertante, e nos adverte sobre o perigo mortal de abrigar a inveja e a amargura.`,
    points: [
      {
        verseRef: 'v. 1-5a',
        title: 'As Duas Ofertas e a Rejeição Divina',
        description: `O Coração do Ofertante. Caim, lavrador, traz do fruto da terra; Abel, pastor, traz dos primogênitos do seu rebanho e da sua gordura (v. 3-4). O texto diz: "E atentou o Senhor para Abel e para a sua oferta. Mas para Caim e para a sua oferta não atentou" (v. 4-5). A diferença não era apenas o tipo de oferta (sangue vs. vegetais), mas a atitude. Hebreus 11:4 diz que "pela fé Abel ofereceu a Deus maior sacrifício do que Caim". Abel deu o melhor (primogênitos) com fé; Caim cumpriu um ritual sem submissão de coração.`
      },
      {
        verseRef: 'v. 5b-7',
        title: 'A Ira de Caim e o Alerta de Deus',
        description: `O Pecado Jaz à Porta. Caim fica "muito irado, e descaiu-lhe o semblante" (v. 5). Em vez de se arrepender, ele se ressente de Deus e do irmão. Deus, em Sua graça, intervém e o confronta (v. 6-7): "Por que te iraste?... Se bem fizeres, não é certo que serás aceito? E se não fizeres bem, o pecado jaz à porta, e sobre ti será o seu desejo, mas sobre ele deves dominar". Deus personifica o pecado como uma fera selvagem à espreita, pronta para devorar. O pecado não dominado no pensamento inevitavelmente se torna ação.`
      },
      {
        verseRef: 'v. 8',
        title: 'O Homicídio e a Consumação da Inveja',
        description: `O Sangue no Campo. Caim ignora o aviso divino. Ele convida o seu irmão para ir ao campo e, "estando eles no campo, sucedeu que Caim se levantou contra a Abel, seu irmão, e o matou" (v. 8). A primeira morte humana não foi de velhice ou doença, mas de assassinato fratricida motivado por inveja religiosa. A religião sem fé verdadeira não nos torna melhores; ela frequentemente nos torna fariseus cruéis, dispostos a destruir aqueles cuja justiça expõe a nossa própria hipocrisia (1 João 3:12).`
      }
    ],
    conclusion: `Gênesis 4:1-8 é um aviso solene de que a adoração externa não pode mascarar um coração rebelde. Deus não pode ser subornado com os nossos "frutos da terra" se a nossa vida não for vivida pela fé. O sangue de Abel clamou da terra por justiça e vingança (v. 10), mas o Novo Testamento nos diz que o sangue de Jesus "fala coisas melhores do que o de Abel" (Hebreus 12:24). O sangue de Cristo não clama por vingança contra os Seus assassinos, mas por perdão e misericórdia para todo aquele que crê.`
  },
  {
    id: 'gen_6_9_18',
    bookId: 'GEN',
    chapter: 6,
    startVerse: 9,
    endVerse: 18,
    title: 'Noé e a Arca',
    theme: 'O Julgamento do Pecado e a Arca da Graça',
    introduction: `A humanidade havia se corrompido de tal forma que "toda a imaginação dos pensamentos de seu coração era só má continuamente" (v. 5). A justiça de Deus exige o julgamento dessa maldade através do dilúvio. No entanto, no meio de uma geração totalmente depravada, "Noé achou graça aos olhos do Senhor" (v. 8). A história de Noé e a construção da arca não é um conto infantil sobre animais, mas uma profunda narrativa teológica sobre a ira santa de Deus, a salvação pela graça e a obediência da fé.`,
    points: [
      {
        verseRef: 'v. 9-12',
        title: 'O Contraste: A Corrupção Global e o Homem Justo',
        description: `Andava com Deus. O texto descreve o caráter de Noé (v. 9): "Noé era homem justo e perfeito em suas gerações; Noé andava com Deus". Ele não era sem pecado, mas era íntegro e vivia em comunhão com Deus. O contraste com o resto do mundo é absoluto (v. 11-12): "A terra, porém, estava corrompida diante da face de Deus; e encheu-se a terra de violência... porque toda a carne havia corrompido o seu caminho". A santidade de Noé brilhava mais forte porque o fundo era totalmente escuro.`
      },
      {
        verseRef: 'v. 13-16',
        title: 'O Anúncio do Juízo e o Projeto de Salvação',
        description: `Faze Para Ti uma Arca. Deus revela o Seu plano a Noé (v. 13): "O fim de toda a carne é chegado perante a minha face... eis que os desfarei com a terra". Imediatamente após anunciar o juízo, Deus providencia o meio de salvação (v. 14): "Faze para ti uma arca de madeira de gofer". Deus dá as medidas exatas e o design (v. 15-16). A salvação não seria inventada por Noé; ela tinha que ser construída exatamente de acordo com a revelação e o padrão de Deus.`
      },
      {
        verseRef: 'v. 17-18',
        title: 'A Aliança e a Porta da Esperança',
        description: `Contigo Estabelecerei a Minha Aliança. Deus confirma que trará o dilúvio para destruir tudo o que tem fôlego de vida (v. 17). Mas Ele faz uma promessa pactual a Noé (v. 18): "Mas contigo estabelecerei a minha aliança; e entrarás na arca, tu e os teus filhos, tua mulher e as mulheres de teus filhos contigo". A arca é o único refúgio contra a ira de Deus. Hebreus 11:7 diz que Noé, "divinamente avisado das coisas que ainda não se viam, temeu e, para salvação da sua família, preparou a arca". A fé obedece mesmo quando não vê a chuva.`
      }
    ],
    conclusion: `Gênesis 6:9-18 nos ensina que Deus leva o pecado a sério e que o Seu julgamento é inevitável. No entanto, a Sua graça sempre providencia um meio de escape. A arca de Noé é um dos tipos mais claros de Jesus Cristo no Antigo Testamento. Assim como a arca suportou as águas do julgamento divino para salvar aqueles que estavam dentro dela, Cristo suportou a ira de Deus na cruz para salvar todos os que estão "nEle". Fora de Cristo há apenas condenação; dentro dEle, há salvação perfeita e segura.`
  },
  {
    id: 'gen_11_1_9',
    bookId: 'GEN',
    chapter: 11,
    startVerse: 1,
    endVerse: 9,
    title: 'A Torre de Babel',
    theme: 'O Orgulho Humano e a Dispersão Divina',
    introduction: `Após o dilúvio, Deus ordenou à humanidade que se multiplicasse e enchesse a terra (Gen 9:1). Em vez disso, os homens decidiram se unir em uma planície em Sinar para construir uma cidade e uma torre. A Torre de Babel não é apenas uma história sobre a origem das línguas; é uma narrativa profunda sobre o desejo humano de autonomia, a rebelião contra o mandato divino e a tentativa de alcançar o céu através do esforço humano. É o nascimento do humanismo secular e da religião das obras.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Unidade Rebelde e o Desejo de Fama',
        description: `Façamo-nos um Nome. A humanidade tinha uma só língua (v. 1). Eles usam a tecnologia (tijolos queimados e betume, v. 3) não para glorificar a Deus, mas para exaltar a si mesmos (v. 4): "E disseram: Eia, edifiquemos nós uma cidade e uma torre cujo cume toque nos céus, e façamo-nos um nome, para que não sejamos espalhados sobre a face de toda a terra". A motivação deles era dupla: orgulho ("façamo-nos um nome") e desobediência direta à ordem de Deus de encher a terra ("para que não sejamos espalhados").`
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Descida de Deus e a Avaliação do Orgulho',
        description: `O Senhor Desceu para Ver. O versículo 5 contém uma ironia divina magistral: "Então desceu o Senhor para ver a cidade e a torre que os filhos dos homens edificavam". Os homens achavam que estavam construindo algo tão alto que tocaria os céus, mas Deus teve que "descer" para conseguir enxergar a obra deles. Deus avalia a situação (v. 6): a unidade deles, baseada no pecado e na autonomia, os levaria a males inimagináveis ("agora não haverá restrição para tudo o que eles intentarem fazer"). O julgamento de Deus aqui é, na verdade, um ato de misericórdia para limitar o mal.`
      },
      {
        verseRef: 'v. 7-9',
        title: 'A Confusão das Línguas e o Fim da Autonomia',
        description: `O Julgamento da Confusão. Deus age para frustrar o plano humano (v. 7): "Eia, desçamos e confundamos ali a sua linguagem, para que não entenda um a língua do outro". A comunicação é quebrada, a cooperação torna-se impossível e a construção para. O resultado é exatamente o que eles tentaram evitar (v. 8): "Assim o Senhor os espalhou dali sobre a face de toda a terra". O lugar foi chamado Babel (Confusão) (v. 9). O esforço humano para alcançar o céu sempre termina em confusão e ruína.`
      }
    ],
    conclusion: `Gênesis 11:1-9 é o atestado de óbito de toda religião baseada nas obras e de todo império humano que tenta excluir Deus. Quando tentamos fazer um nome para nós mesmos, acabamos em confusão. O contraste com o capítulo seguinte é gritante: em Babel, os homens tentam fazer um grande nome e falham; em Gênesis 12, Deus promete fazer o nome de Abraão grande pela graça. A confusão de Babel só foi revertida no Dia de Pentecostes (Atos 2), quando o Espírito Santo uniu pessoas de todas as línguas em uma só voz para glorificar o nome de Jesus Cristo.`
  },
  {
    id: 'exo_17_1_7',
    bookId: 'EXO',
    chapter: 17,
    startVerse: 1,
    endVerse: 7,
    title: 'Água da Rocha',
    theme: 'A Murmuração do Povo e a Rocha Ferida',
    introduction: `A jornada de Israel no deserto é marcada por um ciclo de milagres divinos seguidos por murmuração humana. Em Refidim, o povo enfrenta a falta de água. Em vez de confiarem no Deus que abriu o Mar Vermelho e enviou o maná, eles se voltam contra Moisés com ira assassina, questionando a própria presença de Deus no meio deles. A resposta de Deus a essa rebelião não é o fogo do juízo, mas um milagre de graça surpreendente que aponta diretamente para o sacrifício de Cristo na cruz.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Sede, a Contenda e a Dúvida Fatal',
        description: `Por Que Nos Fizeste Subir do Egito? O povo acampa em Refidim, "e não havia ali água para o povo beber" (v. 1). A sede é real, mas a reação é pecaminosa. Eles contendem com Moisés (v. 2): "Dá-nos água para beber". Moisés responde: "Por que contendeis comigo? Por que tentais ao Senhor?". A murmuração contra o líder designado por Deus é, na verdade, uma rebelião contra o próprio Deus. A amargura deles distorce a memória (v. 3), acusando Moisés de trazê-los do Egito apenas para matá-los de sede.`
      },
      {
        verseRef: 'v. 4-5',
        title: 'O Clamor do Mediador e a Ordem Divina',
        description: `Que Farei a Este Povo? Moisés, temendo ser apedrejado, clama ao Senhor (v. 4). Deus não manda Moisés fugir nem ordena a destruição do povo. Em vez disso, Ele dá uma instrução estranha (v. 5): "Passa adiante do povo, e toma contigo alguns dos anciãos de Israel; e toma na tua mão a tua vara, com que feriste o rio, e vai". A vara que feriu o rio Nilo no Egito era o símbolo do julgamento e da ira de Deus. Moisés deve levar o instrumento do juízo para o local do milagre.`
      },
      {
        verseRef: 'v. 6-7',
        title: 'A Rocha Ferida e a Água da Vida',
        description: `Eu Estarei Ali Diante de Ti. Deus faz uma promessa impressionante (v. 6): "Eis que eu estarei ali diante de ti sobre a rocha, em Horebe, e tu ferirás a rocha, e dela sairão águas e o povo beberá". Deus, o Juiz, coloca-se sobre a rocha e ordena que Moisés fira a rocha com a vara do juízo. A rocha recebe o golpe que o povo rebelde merecia, e o resultado é água vivificadora. Moisés chama o lugar de Massá (Tentação) e Meribá (Contenda), porque o povo perguntou (v. 7): "Está o Senhor no meio de nós, ou não?".`
      }
    ],
    conclusion: `Êxodo 17:1-7 é uma das tipologias cristológicas mais profundas do Antigo Testamento. O apóstolo Paulo revela o mistério em 1 Coríntios 10:4: "E beberam todos de uma mesma bebida espiritual, porque bebiam da rocha espiritual que os seguia; e a rocha era Cristo". Nós éramos o povo rebelde que merecia a vara do juízo de Deus. Mas na cruz, Deus colocou-se em Cristo, e Cristo foi ferido e esmagado pela ira divina em nosso lugar. Do Seu lado ferido fluiu a água da vida, o Espírito Santo, que sacia a nossa sede eternamente.`
  },
  {
    id: 'num_13_25_33',
    bookId: 'NUM',
    chapter: 13,
    startVerse: 25,
    endVerse: 33,
    title: 'Os Doze Espias',
    theme: 'A Visão da Fé vs. A Visão do Medo',
    introduction: `Israel está na fronteira da Terra Prometida (Cades-Barneia). Moisés envia doze espias, um de cada tribo, para reconhecer a terra de Canaã. Após 40 dias, eles retornam com o relatório. Todos concordam sobre os fatos: a terra é incrivelmente frutífera, mas as cidades são fortificadas e os habitantes são gigantes. A diferença crucial não está nos fatos, mas na interpretação dos fatos. Dez espias olham através das lentes do medo, enquanto dois (Josué e Calebe) olham através das lentes da fé nas promessas de Deus.`,
    points: [
      {
        verseRef: 'v. 25-29',
        title: 'O Relatório Misto: Frutos Bons e Inimigos Fortes',
        description: `A Terra Mana Leite e Mel, Porém... Os espias retornam e mostram o fruto da terra (um cacho de uvas tão grande que precisou ser carregado por dois homens) (v. 26-27). Eles confirmam a promessa de Deus: "fomos à terra a que nos enviaste; e verdadeiramente mana leite e mel". Mas então vem a palavra que destrói a fé: "O povo, porém, que habita nessa terra é poderoso, e as cidades fortes e mui grandes; e também ali vimos os filhos de Anaque" (v. 28). Eles permitiram que os obstáculos ofuscassem a promessa.`
      },
      {
        verseRef: 'v. 30',
        title: 'A Voz da Fé: A Confiança de Calebe',
        description: `Certamente Prevaleceremos. No meio do murmúrio crescente, Calebe faz calar o povo diante de Moisés e declara (v. 30): "Subamos animosamente, e possuamo-la em herança; porque certamente prevaleceremos contra ela". Calebe não negou a existência dos gigantes ou das muralhas. A fé não é negação da realidade; é a introdução de Deus na realidade. Calebe sabia que o tamanho dos gigantes era irrelevante comparado ao tamanho do Deus que abriu o Mar Vermelho e destruiu o Egito.`
      },
      {
        verseRef: 'v. 31-33',
        title: 'A Voz do Medo e o Complexo de Gafanhoto',
        description: `Não Poderemos Subir. Os dez espias rebatem a fé de Calebe com pessimismo contagioso (v. 31): "Não poderemos subir contra aquele povo, porque é mais forte do que nós". Eles começam a infamar a terra (v. 32) e revelam o seu colapso psicológico e espiritual (v. 33): "Também vimos ali gigantes... e éramos aos nossos olhos como gafanhotos, e assim também éramos aos seus olhos". Quando tiramos os olhos de Deus, os nossos problemas tornam-se gigantes e nós nos sentimos como insetos. O medo os paralisou e custou-lhes 40 anos no deserto.`
      }
    ],
    conclusion: `Números 13:25-33 nos ensina que a maioria nem sempre tem razão. A incredulidade dos dez espias contaminou toda a nação, resultando em uma geração inteira morrendo no deserto sem herdar a promessa. A vida cristã é uma batalha constante de perspectivas. Diante dos "gigantes" da nossa vida (doenças, crises financeiras, tentações), nós vamos olhar para eles e nos sentir como gafanhotos, ou vamos olhar para o nosso Deus Todo-Poderoso e dizer com Calebe: "Certamente prevaleceremos"? A fé não foca no tamanho do obstáculo, mas na fidelidade do Deus que prometeu a vitória.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 14a).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
