const fs = require('fs');

const newPericopes = [
  {
    id: 'luk_24_13_35',
    bookId: 'LUK',
    chapter: 24,
    startVerse: 13,
    endVerse: 35,
    title: 'Os Discípulos no Caminho de Emaús',
    theme: 'A Cegueira Espiritual e a Revelação de Cristo nas Escrituras',
    introduction: `No próprio domingo da ressurreição, dois discípulos caminham de Jerusalém para Emaús, esmagados pela tristeza e pela decepção. Eles haviam perdido a esperança porque a sua teologia não tinha espaço para um Messias sofredor. O Cristo ressurreto se junta a eles incógnito, não para lhes dar uma experiência mística imediata, mas para lhes dar o maior estudo bíblico da história. Esta passagem revela que a verdadeira visão de Cristo vem através da compreensão das Escrituras e da comunhão à mesa.`,
    points: [
      {
        verseRef: 'v. 13-24',
        title: 'A Esperança Frustrada e a Cegueira dos Discípulos',
        description: `A Teologia da Glória sem a Cruz. Jesus se aproxima, mas "os olhos deles estavam como que fechados, para que o não conhecessem" (v. 16). Eles desabafam a sua dor (v. 21): "E nós esperávamos que fosse ele o que remisse Israel". A esperança deles morreu na cruz porque eles esperavam uma redenção política, não uma expiação pelo pecado. Eles até tinham ouvido o testemunho das mulheres sobre o túmulo vazio (v. 22-24), mas a incredulidade os impedia de ver a verdade. A decepção espiritual frequentemente nasce de expectativas erradas sobre como Deus deve agir.`
      },
      {
        verseRef: 'v. 25-27',
        title: 'A Repreensão e a Exposição Cristocêntrica',
        description: `Cristo em Todo o Antigo Testamento. Jesus os repreende com firmeza (v. 25): "Ó néscios, e tardos de coração para crer tudo o que os profetas disseram!". O problema deles não era falta de evidência, mas dureza de coração. Jesus então corrige a teologia deles (v. 26): "Porventura não convinha que o Cristo padecesse estas coisas e entrasse na sua glória?". A cruz não foi um acidente, mas um requisito divino. Em seguida, Ele faz a maior exposição bíblica de todos os tempos (v. 27): "E, começando por Moisés, e por todos os profetas, explicava-lhes o que dele se achava em todas as Escrituras". Toda a Bíblia aponta para Jesus.`
      },
      {
        verseRef: 'v. 28-35',
        title: 'O Pão Partido e os Olhos Abertos',
        description: `O Coração Ardente e a Visão Restaurada. Ao chegarem à aldeia, eles insistem para que o forasteiro fique (v. 29). À mesa, o convidado assume o papel de anfitrião: Ele toma o pão, abençoa, parte e lhes dá (v. 30). Neste momento eucarístico, "abriram-se-lhes então os olhos, e o conheceram, e ele desapareceu-lhes" (v. 31). Eles percebem que a presença de Cristo já estava operando neles através da Palavra (v. 32): "Porventura não ardia em nós o nosso coração quando, pelo caminho, nos falava, e quando nos abria as Escrituras?". Imediatamente, eles voltam a Jerusalém para testemunhar a ressurreição.`
      }
    ],
    conclusion: `Lucas 24:13-35 nos ensina que não podemos entender Jesus separadamente das Escrituras. Se quisermos que os nossos corações frios e decepcionados voltem a arder, precisamos voltar à Palavra de Deus e ver Cristo em cada página. A ressurreição não é apenas um fato histórico a ser acreditado; é uma realidade viva a ser experimentada na comunhão com a Palavra e no partir do pão com os irmãos.`
  },
  {
    id: 'jhn_4_1_26',
    bookId: 'JHN',
    chapter: 4,
    startVerse: 1,
    endVerse: 26,
    title: 'A Mulher Samaritana no Poço',
    theme: 'A Água Viva e a Verdadeira Adoração',
    introduction: `Jesus, cansado da viagem, senta-se junto ao poço de Jacó em Samaria. Lá, Ele tem um encontro divino com uma mulher marginalizada: samaritana, mulher e de moralidade questionável. Jesus quebra todas as barreiras culturais, raciais e religiosas para lhe oferecer a salvação. Este diálogo magistral transita da sede física para a sede espiritual, culminando na revelação de Jesus como o Messias e na definição da verdadeira adoração que o Pai procura.`,
    points: [
      {
        verseRef: 'v. 1-14',
        title: 'A Sede Humana e a Oferta da Água Viva',
        description: `O Vazio que o Mundo Não Preenche. Jesus inicia a conversa pedindo água (v. 7), chocando a mulher, pois judeus não se comunicavam com samaritanos (v. 9). Jesus rapidamente muda o foco do poço físico para a necessidade espiritual (v. 10): "Se tu conheceras o dom de Deus... tu lhe pedirias, e ele te daria água viva". Ele expõe a futilidade das cisternas terrenas (v. 13): "Qualquer que beber desta água tornará a ter sede". O prazer, os relacionamentos e a religião não podem satisfazer a alma. Apenas a água que Jesus dá (o Espírito Santo) se torna uma "fonte de água que salte para a vida eterna" (v. 14).`
      },
      {
        verseRef: 'v. 15-19',
        title: 'O Confronto com o Pecado e a Revelação da Verdade',
        description: `O Diagnóstico do Coração. A mulher pede essa água para não ter mais que ir ao poço (v. 15). Jesus, para lhe dar a água viva, precisa primeiro expor a sua doença. Ele diz (v. 16): "Vai, chama o teu marido, e vem cá". Ela responde que não tem marido. Jesus revela a Sua onisciência (v. 18): "Tiveste cinco maridos, e o que agora tens não é teu marido". Ela estava tentando saciar a sua sede espiritual em relacionamentos quebrados. O evangelho sempre nos confronta com o nosso pecado antes de nos confortar com a graça. Ela reconhece que Ele é profeta (v. 19).`
      },
      {
        verseRef: 'v. 20-26',
        title: 'A Verdadeira Adoração e a Revelação do Messias',
        description: `Em Espírito e em Verdade. A mulher tenta mudar de assunto para uma controvérsia teológica sobre o local de adoração (Jerusalém ou Gerizim, v. 20). Jesus declara que a adoração verdadeira não é sobre geografia, mas sobre o coração e a verdade (v. 23): "Os verdadeiros adoradores adorarão o Pai em espírito e em verdade; porque o Pai procura a tais que assim o adorem". Deus é Espírito (v. 24). A mulher menciona a esperança do Messias (v. 25). Jesus então faz a Sua primeira declaração aberta de messianidade no Evangelho de João (v. 26): "Eu o sou, eu que falo contigo".`
      }
    ],
    conclusion: `João 4:1-26 nos mostra que Jesus é o único que pode saciar a sede profunda da alma humana. Todos nós somos como a mulher samaritana, buscando satisfação em poços que nos deixam vazios. Jesus nos encontra na nossa vergonha, expõe o nosso pecado com amor e nos oferece a graça transformadora. A verdadeira adoração não é um ritual em um lugar sagrado, mas uma resposta de um coração que bebeu da água viva e reconheceu Jesus como o Salvador do mundo.`
  },
  {
    id: 'jhn_11_17_44',
    bookId: 'JHN',
    chapter: 11,
    startVerse: 17,
    endVerse: 44,
    title: 'A Ressurreição de Lázaro',
    theme: 'Eu Sou a Ressurreição e a Vida',
    introduction: `O sétimo e maior sinal no Evangelho de João é a ressurreição de Lázaro. Jesus deliberadamente atrasa a Sua chegada a Betânia até que Lázaro estivesse morto há quatro dias, garantindo que não houvesse dúvida sobre o milagre. Este evento não é apenas uma demonstração de poder sobre a morte física, mas uma revelação teológica profunda de que Jesus não apenas dá a vida, Ele *é* a própria vida. É o prelúdio perfeito para a Sua própria morte e ressurreição.`,
    points: [
      {
        verseRef: 'v. 17-27',
        title: 'A Dor de Marta e a Grande Declaração',
        description: `A Vida no Presente. Jesus chega e encontra Lázaro no túmulo há quatro dias (v. 17). Marta vai ao Seu encontro com uma mistura de fé e lamento (v. 21): "Senhor, se tu estivesses aqui, meu irmão não teria morrido". Jesus promete que Lázaro ressuscitará. Marta concorda, pensando na ressurreição escatológica do último dia (v. 24). Jesus então muda o foco de um evento futuro para a Sua própria pessoa (v. 25-26): "Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá... Crês tu isto?". A ressurreição não é apenas um evento; é uma Pessoa. Marta responde com uma confissão de fé messiânica (v. 27).`
      },
      {
        verseRef: 'v. 28-37',
        title: 'As Lágrimas de Maria e a Ira de Jesus contra a Morte',
        description: `O Deus que Chora. Maria chega, lança-se aos pés de Jesus e repete as palavras de Marta (v. 32). Ao ver o choro de Maria e dos judeus, Jesus "moveu-se muito em espírito, e perturbou-se" (v. 33). A palavra grega (enebrimesato) indica uma indignação profunda, um bufar de ira. Jesus não estava apenas triste; Ele estava irado com a morte, o pecado e a dor que destruíam a Sua criação. E então, o versículo mais curto da Bíblia revela a humanidade perfeita do Salvador (v. 35): "Jesus chorou". Ele chora conosco na nossa dor, mesmo sabendo que vai trazer a cura.`
      },
      {
        verseRef: 'v. 38-44',
        title: 'A Pedra Removida e o Chamado para a Vida',
        description: `A Voz que Desperta os Mortos. Jesus vai ao túmulo e manda tirar a pedra. Marta, pragmática, avisa sobre o mau cheiro (v. 39). Jesus a lembra da promessa (v. 40): "Não te hei dito que, se creres, verás a glória de Deus?". Após orar ao Pai, Jesus clama com grande voz (v. 43): "Lázaro, sai para fora". Agostinho dizia que se Jesus não tivesse dito o nome de Lázaro, todos os mortos do cemitério teriam ressuscitado. O morto sai, atado com faixas (v. 44). Jesus ordena: "Desatai-o, e deixai-o ir". A palavra de Cristo tem o poder de reverter a morte e quebrar as amarras da sepultura.`
      }
    ],
    conclusion: `João 11:17-44 é a garantia definitiva de que a morte não tem a última palavra para o crente. Jesus é o Senhor da vida. Ele se compadece das nossas lágrimas, ira-se contra o nosso inimigo (a morte) e tem o poder absoluto para nos chamar do túmulo. A ressurreição de Lázaro é um sinal temporário (Lázaro morreria novamente), mas aponta para a ressurreição eterna que todos os que creem em Cristo experimentarão no último dia.`
  },
  {
    id: 'jhn_21_1_14',
    bookId: 'JHN',
    chapter: 21,
    startVerse: 1,
    endVerse: 14,
    title: 'A Pesca Maravilhosa e o Café da Manhã',
    theme: 'A Graça Restauradora e a Provisão do Cristo Ressurreto',
    introduction: `Após a ressurreição, os discípulos voltam para a Galileia. Em um momento de incerteza, Pedro decide voltar à sua antiga profissão: a pesca. Sete discípulos passam a noite inteira no mar e não pescam nada, um eco do seu primeiro chamado (Lucas 5). Ao amanhecer, Jesus aparece na praia. Este encontro não é apenas mais um milagre de provisão, mas uma demonstração terna da graça de Cristo, que busca os Seus discípulos cansados e fracassados para alimentá-los e restaurá-los.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Retorno ao Passado e a Noite de Fracasso',
        description: `O Esforço Humano Vazio. Pedro diz: "Vou pescar" (v. 3). Os outros o seguem. Havia uma desorientação espiritual; eles haviam visto o Cristo ressurreto, mas ainda não sabiam como viver essa nova realidade, então voltaram ao que sabiam fazer. "E naquela noite nada apanharam". O fracasso deles é um lembrete teológico: sem a palavra e a direção de Cristo, até mesmo pescadores experientes trabalhando no seu próprio território fracassam. "Sem mim nada podeis fazer" (João 15:5).`
      },
      {
        verseRef: 'v. 4-8',
        title: 'A Voz na Praia e o Milagre da Abundância',
        description: `É o Senhor! Ao amanhecer, Jesus está na praia, mas eles não O reconhecem (v. 4). Ele os chama de "filhos" (ou rapazes) e pergunta se têm comida. Diante da resposta negativa, Ele dá a ordem (v. 6): "Lançai a rede para a banda direita do barco, e achareis". A obediência à palavra do forasteiro resulta em uma pesca tão grande (153 grandes peixes) que não conseguiam puxar a rede. João, o discípulo amado, reconhece o padrão da graça e diz a Pedro (v. 7): "É o Senhor". Pedro, impulsivo como sempre, veste-se e lança-se ao mar para chegar a Jesus mais rápido.`
      },
      {
        verseRef: 'v. 9-14',
        title: 'O Fogo de Brasas e a Comunhão Restaurada',
        description: `O Banquete da Graça. Quando chegam à terra, veem um fogo de brasas, com peixe e pão (v. 9). Jesus já tinha provisão para eles, mas ainda assim pede que tragam dos peixes que acabaram de pescar (v. 10), valorizando o trabalho deles. O convite de Jesus é profundamente íntimo (v. 12): "Vinde, comei". Ninguém ousa perguntar quem Ele é, pois sabiam que era o Senhor. Jesus lhes serve o pão e o peixe (v. 13). O "fogo de brasas" (anthrakia) é a mesma palavra usada para o fogo onde Pedro negou Jesus (João 18:18). Jesus recria o cenário da queda de Pedro para ser o cenário da sua restauração.`
      }
    ],
    conclusion: `João 21:1-14 nos mostra que o Cristo ressurreto não é um fantasma distante, mas um Salvador profundamente envolvido nas nossas necessidades diárias e fracassos. Quando as nossas noites de esforço resultam em redes vazias, Ele está na praia da nossa vida, pronto para nos dar direção e abundância. Mais do que isso, Ele nos convida para a comunhão ("Vinde, comei"), preparando a mesa da graça onde as nossas falhas são perdoadas e a nossa missão é renovada.`
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
  console.log('Successfully added 4 new pericopes for Luke/John (Batch 9a).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
