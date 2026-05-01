const fs = require('fs');

const newPericopes = [
  {
    id: 'jhn_14_1_6',
    bookId: 'JHN',
    chapter: 14,
    startVerse: 1,
    endVerse: 6,
    title: 'O Caminho, a Verdade e a Vida',
    theme: 'O Conforto na Aflição e a Exclusividade de Cristo',
    introduction: `No Cenáculo, na noite antes da crucificação, os discípulos estão profundamente perturbados. Jesus acabou de lavar os pés deles, anunciou que um deles O trairia (Judas), que Ele estava indo embora e que Pedro O negaria três vezes. O mundo deles estava desmoronando. Neste momento de pânico e confusão, Jesus não oferece uma estratégia de fuga, mas oferece a Si mesmo. Ele lhes dá uma promessa de esperança futura (o céu) e faz uma das declarações mais exclusivas e absolutas de toda a Bíblia sobre o caminho para a salvação.`,
    points: [
      {
        verseRef: 'v. 1',
        title: 'O Antídoto contra a Turbação: A Fé em Cristo',
        description: `A Cura para a Ansiedade. "Não se turbe o vosso coração; credes em Deus, crede também em mim". A palavra "turbar" significa agitar, aterrorizar, entrar em pânico. Jesus não diz que as circunstâncias deles serão fáceis (eles enfrentariam perseguição e martírio), mas Ele lhes dá o antídoto para o pânico interno: a fé. O que é notável aqui é a reivindicação de divindade de Jesus. Ele coloca a fé nEle no mesmo nível da fé em Deus o Pai. Apenas o próprio Deus pode exigir que a nossa confiança nEle seja a cura para o terror da alma.`
      },
      {
        verseRef: 'v. 2-4',
        title: 'A Promessa das Moradas e o Retorno',
        description: `O Destino Garantido. Jesus explica por que Ele precisa ir embora (v. 2): "Na casa de meu Pai há muitas moradas; se não fosse assim, eu vo-lo teria dito. Vou preparar-vos lugar". O céu é descrito como uma casa paterna, um lugar de intimidade, segurança e espaço abundante. A partida de Jesus (através da cruz, ressurreição e ascensão) é exatamente o que prepara esse lugar para nós, pagando a nossa dívida. A promessa não é apenas de um lugar, mas de uma Pessoa (v. 3): "E quando eu for, e vos preparar lugar, virei outra vez, e vos levarei para mim mesmo, para que onde eu estiver estejais vós também". O céu não é o céu por causa das ruas de ouro, mas porque Jesus está lá.`
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Exclusividade de Cristo: O Único Caminho',
        description: `A Resposta a Tomé. Tomé, sempre o pragmático e cético, expressa a confusão do grupo (v. 5): "Senhor, nós não sabemos para onde vais; e como podemos saber o caminho?". A resposta de Jesus (v. 6) é o ápice da revelação cristã: "Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim". Jesus não diz que Ele *mostra* o caminho, ou *ensina* a verdade, ou *oferece* a vida. Ele *é* o Caminho (a única ponte entre o pecador e Deus), Ele *é* a Verdade (a revelação final e absoluta de Deus) e Ele *é* a Vida (a fonte de toda a existência espiritual). A exclusividade é absoluta: "ninguém vem ao Pai, senão por mim". Não há salvação em nenhuma outra religião, filosofia ou esforço humano.`
      }
    ],
    conclusion: `João 14:1-6 é a âncora da alma cristã em tempos de crise. Quando o mundo ao nosso redor parece desmoronar, não precisamos entrar em pânico, porque sabemos para onde estamos indo e sabemos Quem está nos levando. A exclusividade de Cristo ofende o pluralismo do mundo moderno, mas é a única verdade que pode nos salvar. Não precisamos procurar por vários caminhos para Deus; Deus já desceu até nós, tornou-se o Caminho através da cruz e prometeu voltar para nos levar para casa.`
  },
  {
    id: 'jhn_17_1_26',
    bookId: 'JHN',
    chapter: 17,
    startVerse: 1,
    endVerse: 26,
    title: 'A Oração Sacerdotal de Jesus',
    theme: 'A Glória do Filho, a Proteção dos Discípulos e a Unidade da Igreja',
    introduction: `João 17 é o Santo dos Santos do Novo Testamento. É a oração mais longa e profunda de Jesus registrada na Bíblia, feita momentos antes de Ele cruzar o ribeiro de Cedrom para ser preso no Getsêmani. Nesta oração, Jesus atua como o nosso Sumo Sacerdote. Ele não está orando em agonia (como fará mais tarde), mas em triunfo e majestade. A oração é dividida em três partes: Jesus ora por Si mesmo (para que o Pai O glorifique através da cruz), Ele ora pelos Seus discípulos imediatos (por proteção e santificação) e Ele ora por todos os crentes futuros (por unidade e glória).`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Oração pela Própria Glorificação e a Vida Eterna',
        description: `A Cruz como Glória. Jesus levanta os olhos ao céu e diz (v. 1): "Pai, é chegada a hora; glorifica a teu Filho, para que também o teu Filho te glorifique a ti". A "hora" é o momento da crucificação. Paradoxalmente, Jesus vê a cruz não como uma derrota vergonhosa, mas como o momento da Sua maior glória, porque ali o amor, a justiça e a graça de Deus seriam exibidos ao máximo. Ele define a vida eterna (v. 3): "E a vida eterna é esta: que te conheçam, a ti só, por único Deus verdadeiro, e a Jesus Cristo, a quem enviaste". A vida eterna não é apenas duração de tempo, mas um relacionamento íntimo com Deus. Jesus pede para retornar à glória que tinha com o Pai "antes que o mundo existisse" (v. 5).`
      },
      {
        verseRef: 'v. 6-19',
        title: 'A Oração pelos Discípulos: Proteção e Santificação',
        description: `No Mundo, Mas Não do Mundo. Jesus ora pelos onze apóstolos (Judas já havia saído). Ele não pede que o Pai os tire do mundo (v. 15), mas que "os livres do mal (ou do Maligno)". O mundo os odiará porque eles não pertencem ao mundo (v. 14). A estratégia de Jesus para a sobrevivência e o sucesso deles não é o isolamento, mas a santificação (v. 17): "Santifica-os na tua verdade; a tua palavra é a verdade". A santificação (ser separado para Deus e transformado em santidade) acontece à medida que a mente e o coração são saturados e obedecem à Palavra de Deus. Jesus se santifica (se dedica ao sacrifício na cruz) para que eles possam ser verdadeiramente santificados (v. 19).`
      },
      {
        verseRef: 'v. 20-26',
        title: 'A Oração pela Igreja Futura: Unidade e Glória',
        description: `A Unidade que Evangeliza o Mundo. No versículo 20, Jesus ora por nós: "E não rogo somente por estes, mas também por aqueles que pela sua palavra hão de crer em mim". Qual é o Seu maior desejo para a igreja de todos os séculos? (v. 21): "Para que todos sejam um, como tu, ó Pai, o és em mim, e eu em ti; que também eles sejam um em nós, para que o mundo creia que tu me enviaste". A unidade cristã não é uma uniformidade institucional, mas uma unidade espiritual profunda de amor e propósito, modelada na própria Trindade. Essa unidade visível é a maior ferramenta evangelística da igreja. O desejo final de Jesus (v. 24) é que estejamos com Ele no céu para vermos a Sua glória eterna.`
      }
    ],
    conclusion: `João 17 nos dá o privilégio incrível de ouvir a conversa íntima entre Deus o Filho e Deus o Pai. Saber que Jesus orou por nós, especificamente, antes de ir para a cruz, nos dá uma segurança inabalável. A nossa salvação, a nossa proteção contra o Maligno, a nossa santificação através da Bíblia e o nosso destino final de ver a glória de Cristo não dependem da nossa própria força, mas são a resposta do Pai à oração perfeita do Filho. A nossa responsabilidade é viver essa unidade em amor para que o mundo saiba que Jesus é o Senhor.`
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
  console.log('Successfully added 2 new pericopes for John (Part 3).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
