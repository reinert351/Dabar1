const fs = require('fs');

const newPericopes = [
  {
    id: '2co_4_7_18',
    bookId: '2CO',
    chapter: 4,
    startVerse: 7,
    endVerse: 18,
    title: 'O Tesouro em Vasos de Barro',
    theme: 'A Fraqueza Humana e o Poder Transformador do Evangelho',
    introduction: `Na Segunda Epístola aos Coríntios, Paulo defende o seu ministério contra falsos apóstolos que se gloriavam na aparência, no sucesso e na eloquência. Paulo, ao contrário, gloria-se na sua fraqueza. Ele usa a metáfora de um vaso de barro barato e frágil que carrega um tesouro inestimável. Esta passagem é um manifesto sobre como Deus usa o sofrimento, a quebra e a mortalidade dos Seus servos para exibir o poder imortal da ressurreição de Cristo, garantindo que toda a glória pertença exclusivamente a Deus.`,
    points: [
      {
        verseRef: 'v. 7-12',
        title: 'A Fragilidade do Vaso e a Excelência do Poder',
        description: `O Paradoxo do Ministério. "Temos, porém, este tesouro (o evangelho da glória de Cristo) em vasos de barro, para que a excelência do poder seja de Deus, e não de nós" (v. 7). Deus deliberadamente escolhe instrumentos fracos para que ninguém confunda o mensageiro com a mensagem. Paulo descreve a pressão constante (v. 8-9): "Em tudo somos atribulados, mas não angustiados; perplexos, mas não desanimados; perseguidos, mas não desamparados; abatidos, mas não destruídos". O vaso é constantemente golpeado, mas nunca quebrado a ponto de ser inútil. O propósito desse sofrimento é cristológico (v. 10): "Trazendo sempre por toda a parte a mortificação do Senhor Jesus no nosso corpo, para que a vida de Jesus se manifeste também nos nossos corpos". A morte de Paulo é o palco para a vida de Cristo.`
      },
      {
        verseRef: 'v. 13-15',
        title: 'O Espírito de Fé e a Multiplicação da Graça',
        description: `A Confiança na Ressurreição. O que mantém Paulo pregando apesar de tanto sofrimento? "E temos portanto o mesmo espírito de fé... cri, por isso falei; nós cremos também, por isso também falamos" (v. 13). A sua fé não é baseada em circunstâncias favoráveis, mas na certeza da ressurreição (v. 14): "Sabendo que o que ressuscitou o Senhor Jesus nos ressuscitará também por Jesus, e nos apresentará convosco". A morte não é o fim. O sofrimento de Paulo tem um propósito missionário e doxológico (v. 15): "Porque tudo isto é por amor de vós, para que a graça, multiplicada por meio de muitos, faça abundar a ação de graças para glória de Deus". Quanto mais a graça alcança as pessoas através do seu sofrimento, mais Deus é glorificado.`
      },
      {
        verseRef: 'v. 16-18',
        title: 'A Renovação Interior e o Peso Eterno de Glória',
        description: `A Perspectiva da Eternidade. Por causa dessa esperança, "não desfalecemos" (v. 16). Paulo reconhece a realidade física: "ainda que o nosso homem exterior se corrompa (envelheça, adoeça, sofra)". Mas há um milagre simultâneo: "o interior, contudo, se renova de dia em dia". O corpo está morrendo, mas o espírito está prosperando. A chave para essa renovação é a matemática celestial de Paulo (v. 17): "Porque a nossa leve e momentânea tribulação produz para nós um peso eterno de glória mui excelente". Comparado com a eternidade, uma vida inteira de sofrimento é "leve e momentânea". Como mantemos essa perspectiva? (v. 18): "Não atentando nós nas coisas que se veem, mas nas que se não veem; porque as que se veem são temporais, e as que se não veem são eternas".`
      }
    ],
    conclusion: `2 Coríntios 4:7-18 liberta o cristão da tirania do perfeccionismo e da teologia do sucesso. Deus não exige que sejamos vasos de ouro, inquebráveis e brilhantes. Ele nos chama a sermos vasos de barro honestos sobre as nossas rachaduras, permitindo que a luz do evangelho brilhe através das nossas fraquezas. Quando focamos no invisível e no eterno, o sofrimento presente perde o seu poder de nos destruir e torna-se a ferramenta que forja a nossa glória futura.`
  },
  {
    id: '2co_5_14_21',
    bookId: '2CO',
    chapter: 5,
    startVerse: 14,
    endVerse: 21,
    title: 'O Ministério da Reconciliação',
    theme: 'A Nova Criação e a Embaixada de Cristo',
    introduction: `Nesta passagem central de 2 Coríntios, Paulo explica a motivação e a mensagem do seu ministério apostólico. O motor que o impulsiona não é a ambição, o medo ou a obrigação religiosa, mas o amor constrangedor de Cristo. Paulo descreve a salvação como uma "nova criação" e define o papel da igreja no mundo como "embaixadores", encarregados de proclamar a mensagem mais importante da história: Deus reconciliou o mundo consigo mesmo através da morte substitutiva do Seu Filho.`,
    points: [
      {
        verseRef: 'v. 14-17',
        title: 'O Amor Constrangedor e a Nova Criação',
        description: `A Morte do Egoísmo. "Porque o amor de Cristo nos constrange (nos domina, nos impulsiona)" (v. 14). A lógica do evangelho é implacável: "julgando nós assim: que, se um morreu por todos, logo todos morreram". Quando Cristo morreu na cruz como nosso substituto, nós morremos com Ele posicionalmente. O propósito dessa morte é (v. 15): "para que os que vivem não vivam mais para si, mas para aquele que por eles morreu e ressuscitou". O evangelho cura a doença fundamental da humanidade: o viver para si mesmo. Por causa disso, Paulo não avalia mais ninguém "segundo a carne" (por padrões humanos de status ou raça). O resultado é o versículo 17: "Assim que, se alguém está em Cristo, nova criatura é; as coisas velhas já passaram; eis que tudo se fez novo". A salvação não é uma reforma moral, é uma recriação cósmica no nível individual.`
      },
      {
        verseRef: 'v. 18-19',
        title: 'A Obra da Reconciliação e a Não Imputação do Pecado',
        description: `A Iniciativa Divina. "E tudo isto provém de Deus, que nos reconciliou consigo mesmo por Jesus Cristo" (v. 18). A reconciliação (restaurar a paz entre inimigos) é sempre uma iniciativa de Deus. Nós não fizemos a paz com Deus; Deus fez a paz conosco a um custo infinito. Paulo resume a mensagem do evangelho (v. 19): "Isto é, Deus estava em Cristo reconciliando consigo o mundo, não lhes imputando os seus pecados". "Imputar" é um termo contábil que significa "colocar na conta de alguém". Deus não colocou os nossos pecados na nossa conta; se o fizesse, seríamos condenados. Em vez disso, Ele nos deu "a palavra da reconciliação".`
      },
      {
        verseRef: 'v. 20-21',
        title: 'Os Embaixadores e a Grande Troca',
        description: `O Apelo e a Substituição. Baseado nesta obra, Paulo define a nossa identidade (v. 20): "De sorte que somos embaixadores da parte de Cristo, como se Deus por nós rogasse". Um embaixador não fala em seu próprio nome, mas representa a autoridade e a mensagem do seu soberano em território estrangeiro. O apelo do embaixador é urgente: "Rogamo-vos, pois, da parte de Cristo, que vos reconcilieis com Deus". O versículo 21 é o coração teológico da justificação (a Grande Troca): "Àquele que não conheceu pecado (a impecabilidade de Cristo), o fez pecado por nós (imputou os nossos pecados a Ele na cruz); para que nele fôssemos feitos justiça de Deus (imputou a justiça perfeita dEle a nós)".`
      }
    ],
    conclusion: `2 Coríntios 5:14-21 nos lembra que o cristianismo é a religião da grande troca. Cristo tomou a nossa sujeira e nos deu a Sua perfeição. Porque fomos transformados em novas criaturas por esse amor constrangedor, não podemos mais viver para nós mesmos. Fomos comissionados como embaixadores do Rei, chamados a implorar a um mundo perdido que aceite a bandeira branca da paz que Deus já levantou na cruz do Calvário.`
  },
  {
    id: '2co_12_7_10',
    bookId: '2CO',
    chapter: 12,
    startVerse: 7,
    endVerse: 10,
    title: 'O Espinho na Carne e a Graça Suficiente',
    theme: 'O Propósito do Sofrimento e o Aperfeiçoamento do Poder na Fraqueza',
    introduction: `No capítulo 12, Paulo relata uma experiência mística extraordinária: ele foi arrebatado ao "terceiro céu" e ouviu palavras inefáveis. No entanto, em vez de usar isso para se exaltar diante dos falsos apóstolos, ele rapidamente muda de assunto para falar sobre a sua maior fraqueza. Para evitar que ele se tornasse orgulhoso por causa das revelações, Deus lhe deu um "espinho na carne". A resposta de Deus à oração de Paulo por cura é uma das lições mais profundas sobre como a graça divina opera não removendo a nossa dor, mas transformando-a em uma plataforma para o poder de Cristo.`,
    points: [
      {
        verseRef: 'v. 7-8',
        title: 'A Prevenção do Orgulho e o Mensageiro de Satanás',
        description: `O Propósito do Espinho. Paulo é brutalmente honesto sobre a sua vulnerabilidade ao orgulho: "E, para que não me exaltasse pelas excelências das revelações, foi-me dado um espinho na carne" (v. 7). A identidade exata do espinho é desconhecida (doença nos olhos, malária, oposição constante, etc.), mas a sua função é clara: mantê-lo humilde. Curiosamente, Paulo o chama de "o mensageiro de Satanás, para me esbofetear". Satanás queria usar o espinho para destruir Paulo, mas Deus (que "deu" o espinho) o usou soberanamente para santificar Paulo. Diante dessa agonia, Paulo fez o que qualquer crente faria (v. 8): "Acerca do qual três vezes orei ao Senhor para que se desviasse de mim".`
      },
      {
        verseRef: 'v. 9',
        title: 'A Resposta Divina: A Suficiência da Graça',
        description: `O Poder Aperfeiçoado na Fraqueza. A resposta de Jesus à oração de Paulo não foi a cura, mas uma promessa muito maior: "A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza". A graça de Deus não é apenas o perdão dos pecados; é a presença capacitadora de Cristo que nos sustenta quando as circunstâncias não mudam. O poder de Deus não atinge a sua expressão máxima em pessoas autossuficientes e fortes, mas naquelas que estão tão quebradas que dependem inteiramente dEle. A resposta de Paulo a essa revelação é uma mudança radical de perspectiva: "De boa vontade, pois, me gloriarei nas minhas fraquezas, para que em mim habite o poder de Cristo". Ele para de lutar contra o espinho e o abraça como um ímã para o poder de Deus.`
      },
      {
        verseRef: 'v. 10',
        title: 'O Paradoxo Cristão: Forte na Fraqueza',
        description: `O Prazer nas Tribulações. O versículo 10 é o clímax do paradoxo cristão: "Por isso sinto prazer nas fraquezas, nas injúrias, nas necessidades, nas perseguições, nas angústias por amor de Cristo". Paulo não é um masoquista que gosta da dor; ele sente prazer *no que a dor produz* quando suportada "por amor de Cristo". A conclusão é a fórmula da verdadeira força espiritual: "Porque quando estou fraco então sou forte". Quando os meus recursos acabam, os recursos de Deus começam. Quando eu admito a minha total incapacidade, o poder onipotente de Cristo assume o controle da minha vida.`
      }
    ],
    conclusion: `2 Coríntios 12:7-10 é o conforto supremo para todo cristão que carrega um fardo que Deus escolheu não remover. Seja uma doença crônica, uma deficiência, um relacionamento difícil ou uma dor emocional, o nosso "espinho" não é um sinal do abandono de Deus, mas uma ferramenta da Sua graça severa. Deus nos ama demais para nos deixar ser orgulhosos. Ele nos dá a Sua graça suficiente para que o mundo olhe para a nossa fraqueza e veja a força inegável de Jesus Cristo.`
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
  console.log('Successfully added 3 new pericopes for 2 Corinthians.');
} else {
  console.error('Could not find the end of the pericopes array.');
}
