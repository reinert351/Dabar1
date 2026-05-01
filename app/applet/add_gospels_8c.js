const fs = require('fs');

const newPericopes = [
  {
    id: 'luk_1_26_38',
    bookId: 'LUK',
    chapter: 1,
    startVerse: 26,
    endVerse: 38,
    title: 'A Anunciação a Maria',
    theme: 'A Graça Soberana e a Submissão da Serva',
    introduction: `O Evangelho de Lucas começa com a invasão do céu na terra. O anjo Gabriel é enviado a uma jovem virgem em Nazaré, uma cidade obscura da Galileia. A mensagem que ele traz mudará o curso da história humana: a encarnação do Filho de Deus. A resposta de Maria à graça e ao chamado de Deus é o modelo supremo de fé e submissão para todos os crentes, demonstrando que Deus escolhe os humildes para realizar os Seus maiores propósitos.`,
    points: [
      {
        verseRef: 'v. 26-29',
        title: 'A Graça Inesperada e a Saudação Angélica',
        description: `O Favor Imerecido. O anjo Gabriel aparece a Maria e a saúda (v. 28): "Salve, agraciada; o Senhor é contigo; bendita és tu entre as mulheres". Maria não era uma deusa ou uma rainha; era uma camponesa pobre, noiva de um carpinteiro. A palavra "agraciada" (kecharitomene) significa "aquela que foi objeto do favor divino". Ela não conquistou a graça por mérito; ela a recebeu soberanamente. Maria fica perturbada com a saudação (v. 29), demonstrando a sua humildade genuína.`
      },
      {
        verseRef: 'v. 30-33',
        title: 'A Identidade do Menino e o Trono de Davi',
        description: `O Rei Eterno. Gabriel acalma o medo de Maria e revela o propósito da sua visita (v. 31): "Eis que em teu ventre conceberás e darás à luz um filho, e pôr-lhe-ás o nome de Jesus". O anjo então declara a identidade cósmica da criança (v. 32-33): Ele será grande, chamado Filho do Altíssimo, herdará o trono de Davi, reinará sobre a casa de Jacó para sempre, e o Seu reino não terá fim. Jesus é o cumprimento de todas as promessas messiânicas do Antigo Testamento, o Rei eterno que governará com justiça.`
      },
      {
        verseRef: 'v. 34-38',
        title: 'O Milagre do Espírito e a Submissão de Maria',
        description: `Cumpra-se em Mim. Maria faz uma pergunta biológica honesta (v. 34): "Como se fará isto, visto que não conheço homem?". Gabriel explica o milagre da concepção virginal (v. 35): "Descerá sobre ti o Espírito Santo, e a virtude do Altíssimo te cobrirá com a sua sombra". O que é impossível para os homens é possível para Deus (v. 37). A resposta de Maria é o ápice da fé (v. 38): "Eis aqui a serva do Senhor; cumpra-se em mim segundo a tua palavra". Ela aceita o chamado, sabendo que isso lhe custaria a reputação e, possivelmente, a vida.`
      }
    ],
    conclusion: `Lucas 1:26-38 nos mostra que Deus não precisa do poder, da riqueza ou do status humano para realizar a Sua vontade. Ele precisa apenas de um coração humilde e submisso. A encarnação de Cristo começou com o "sim" de uma jovem que confiou na Palavra de Deus mais do que nas circunstâncias. Que possamos ter a mesma atitude de Maria diante dos chamados de Deus para as nossas vidas: "Eis aqui o servo do Senhor; cumpra-se em mim a tua vontade".`
  },
  {
    id: 'luk_2_1_20',
    bookId: 'LUK',
    chapter: 2,
    startVerse: 1,
    endVerse: 20,
    title: 'O Nascimento de Jesus e os Pastores',
    theme: 'A Glória na Manjedoura e a Boa Nova aos Marginalizados',
    introduction: `O relato do nascimento de Jesus em Lucas contrasta a arrogância do poder imperial com a humildade da encarnação. Enquanto o imperador romano decreta um censo para demonstrar a sua grandeza, o verdadeiro Rei do universo nasce em um estábulo e é colocado em uma manjedoura. A notícia deste evento cósmico não é dada aos reis ou sacerdotes, mas a pastores marginalizados, revelando que o evangelho é para os humildes e quebrantados de coração.`,
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'A Soberania de Deus e a Humildade da Manjedoura',
        description: `O Rei no Estábulo. César Augusto emite um decreto para o recenseamento de todo o mundo romano (v. 1). Ele pensa que está no controle, mas Deus está usando o decreto imperial para cumprir a profecia de Miqueias 5:2, levando José e Maria a Belém. Lá, Jesus nasce (v. 7). Não havia lugar para eles na estalagem, então o Filho de Deus é envolto em panos e deitado em uma manjedoura (um cocho de animais). A pobreza e a rejeição marcaram a vida de Cristo desde o Seu primeiro suspiro.`
      },
      {
        verseRef: 'v. 8-14',
        title: 'O Anúncio Celestial e a Paz na Terra',
        description: `A Glória aos Marginalizados. Na mesma região, pastores guardavam os seus rebanhos à noite (v. 8). Os pastores eram frequentemente considerados impuros e indignos de confiança pela elite religiosa. No entanto, é a eles que o anjo do Senhor aparece com a glória divina (v. 9). O anjo traz "novas de grande alegria" (v. 10): "Na cidade de Davi, vos nasceu hoje o Salvador, que é Cristo, o Senhor" (v. 11). Uma multidão dos exércitos celestiais irrompe em louvor (v. 14): "Glória a Deus nas alturas, Paz na terra, boa vontade para com os homens".`
      },
      {
        verseRef: 'v. 15-20',
        title: 'A Resposta dos Pastores e a Meditação de Maria',
        description: `A Fé que Corre para Ver. Os pastores não duvidam; eles dizem (v. 15): "Vamos, pois, até Belém, e vejamos isso que aconteceu". Eles vão apressadamente e encontram a família e o bebê na manjedoura (v. 16). Após verem, eles se tornam os primeiros evangelistas, divulgando a palavra que lhes fora dita (v. 17). Todos se maravilham, mas Maria "guardava todas estas coisas, conferindo-as em seu coração" (v. 19). Os pastores voltam glorificando e louvando a Deus (v. 20). A verdadeira adoração é a resposta inevitável ao encontro com Cristo.`
      }
    ],
    conclusion: `Lucas 2:1-20 destrói as nossas noções de grandeza. Deus não escolheu um palácio, mas um estábulo; não escolheu a elite, mas pastores simples. O Natal nos ensina que para encontrar a Deus, precisamos descer. Precisamos abandonar o nosso orgulho e ir até a manjedoura, reconhecendo que o Salvador do mundo veio para os pobres de espírito. E, como os pastores, a nossa resposta deve ser de adoração jubilosa e proclamação das boas novas.`
  },
  {
    id: 'luk_16_19_31',
    bookId: 'LUK',
    chapter: 16,
    startVerse: 19,
    endVerse: 31,
    title: 'O Rico e Lázaro',
    theme: 'O Contraste Eterno e a Suficiência das Escrituras',
    introduction: `Jesus conta uma das histórias mais vívidas e aterrorizantes sobre a vida após a morte. A narrativa contrasta o destino de dois homens: um rico anônimo que vivia no luxo e ignorava o sofrimento alheio, e um mendigo chamado Lázaro, coberto de feridas. A morte inverte as suas posições para a eternidade. Esta história não é apenas um aviso sobre o perigo da riqueza egoísta, mas uma declaração profunda sobre a finalidade do julgamento e a autoridade absoluta da Palavra de Deus.`,
    points: [
      {
        verseRef: 'v. 19-22',
        title: 'O Contraste na Vida e o Nivelador da Morte',
        description: `O Abismo Temporal. O homem rico vestia-se de púrpura e linho finíssimo, banqueteando-se todos os dias (v. 19). À sua porta jazia Lázaro, desejando alimentar-se das migalhas que caíam da mesa do rico, enquanto os cães lambiam as suas feridas (v. 20-21). O rico não oprimia Lázaro ativamente; o seu pecado foi a omissão e a cegueira para com o próximo. A morte, o grande nivelador, chega para ambos (v. 22). Lázaro é levado pelos anjos para o seio de Abraão (consolo), enquanto o rico morre e é sepultado.`
      },
      {
        verseRef: 'v. 23-26',
        title: 'A Inversão na Eternidade e o Abismo Intransponível',
        description: `O Tormento e o Consolo. No Hades (o estado intermediário), o rico está em tormentos e vê Lázaro de longe, no seio de Abraão (v. 23). Ele clama por misericórdia, pedindo que Lázaro molhe a ponta do dedo na água para refrescar a sua língua (v. 24). Abraão responde lembrando-o da justiça da inversão (v. 25): o rico recebeu os seus bens na vida, e Lázaro os males; agora Lázaro é consolado, e o rico atormentado. Além disso, Abraão declara que há um "grande abismo" fixado entre eles (v. 26). O destino eterno é selado na morte; não há purgatório ou segunda chance.`
      },
      {
        verseRef: 'v. 27-31',
        title: 'O Pedido Final e a Suficiência da Palavra',
        description: `Eles Têm Moisés e os Profetas. Desesperado, o rico pede que Lázaro seja enviado aos seus cinco irmãos para avisá-los, para que não venham para aquele lugar de tormento (v. 27-28). A resposta de Abraão é a tese central da história (v. 29): "Eles têm Moisés e os profetas; ouçam-nos". O rico insiste que um milagre (alguém ressuscitando dos mortos) os levaria ao arrependimento (v. 30). Abraão dá a palavra final (v. 31): "Se não ouvem a Moisés e aos profetas, tampouco acreditarão, ainda que algum dos mortos ressuscite". A Palavra de Deus é suficiente para a salvação; milagres não curam a incredulidade do coração.`
      }
    ],
    conclusion: `Lucas 16:19-31 é um alerta solene para acordarmos da nossa apatia espiritual. A forma como vivemos e tratamos os outros nesta vida tem consequências eternas e irreversíveis. Mais importante ainda, a história nos ensina que não devemos buscar experiências místicas ou sinais miraculosos como base para a nossa fé. A Bíblia (Moisés e os profetas) é a voz clara e suficiente de Deus. Se rejeitarmos as Escrituras, nem mesmo uma ressurreição nos convencerá da verdade.`
  },
  {
    id: 'luk_22_14_23',
    bookId: 'LUK',
    chapter: 22,
    startVerse: 14,
    endVerse: 23,
    title: 'A Instituição da Ceia do Senhor',
    theme: 'A Nova Aliança e o Sacrifício do Cordeiro',
    introduction: `Na noite em que foi traído, Jesus reúne os Seus apóstolos para celebrar a Páscoa judaica. Durante a refeição, Ele transforma o antigo ritual que celebrava a libertação do Egito em um novo sacramento que celebra a libertação do pecado. A instituição da Ceia do Senhor é o momento em que Jesus explica o significado teológico da Sua morte iminente: o Seu corpo seria partido e o Seu sangue derramado para estabelecer a Nova Aliança entre Deus e a humanidade.`,
    points: [
      {
        verseRef: 'v. 14-18',
        title: 'O Desejo Ardente e o Cumprimento Escatológico',
        description: `A Última Páscoa. Chegada a hora, Jesus senta-se à mesa com os doze (v. 14). Ele expressa a profundidade do Seu amor (v. 15): "Desejei muito comer convosco esta páscoa, antes que padeça". Ele sabia que era a Sua última refeição antes da cruz. Jesus declara que não comerá mais a Páscoa nem beberá do fruto da videira até que o Reino de Deus venha (v. 16, 18). A Ceia aponta não apenas para o passado (a cruz), mas para o futuro: o grande banquete das bodas do Cordeiro na consumação do Reino.`
      },
      {
        verseRef: 'v. 19',
        title: 'O Pão Partido e o Corpo Entregue',
        description: `Dado por Vós. Jesus toma o pão, dá graças, parte-o e dá aos discípulos, dizendo (v. 19): "Isto é o meu corpo, que por vós é dado; fazei isto em memória de mim". O pão sem fermento da Páscoa agora representa o corpo sem pecado de Cristo, que seria brutalmente ferido e moído na cruz em nosso lugar. A ordem "fazei isto em memória de mim" estabelece a Ceia como uma ordenança perpétua para a igreja, um memorial visível e tangível do sacrifício substitutivo do Salvador.`
      },
      {
        verseRef: 'v. 20-23',
        title: 'O Cálice da Nova Aliança e a Sombra da Traição',
        description: `O Sangue da Redenção. Após a ceia, Ele toma o cálice, dizendo (v. 20): "Este cálice é o novo testamento (aliança) no meu sangue, que é derramado por vós". A Antiga Aliança foi selada com o sangue de animais no Sinai (Êxodo 24:8); a Nova Aliança, prometida por Jeremias (31:31), é selada com o sangue do próprio Filho de Deus, garantindo o perdão definitivo dos pecados. Imediatamente após esta declaração de graça infinita, Jesus revela a traição (v. 21): "Mas eis que a mão do que me trai está comigo à mesa". A graça de Cristo brilha ainda mais forte contra o pano de fundo da escuridão humana.`
      }
    ],
    conclusion: `Lucas 22:14-23 nos leva ao coração do evangelho. A Ceia do Senhor não é um mero ritual vazio, mas uma proclamação visual da morte de Cristo. Cada vez que comemos o pão e bebemos o cálice, somos lembrados do preço infinito que foi pago pela nossa redenção. A Ceia nos convida a olhar para trás (para a cruz), olhar para dentro (em autoexame), olhar ao redor (em comunhão com os irmãos) e olhar para frente (aguardando o retorno do nosso Rei).`
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
  console.log('Successfully added 4 new pericopes for Luke (Batch 8c).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
