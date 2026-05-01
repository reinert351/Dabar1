const fs = require('fs');

const newPericopes = [
  {
    id: 'rom_1_16_17',
    bookId: 'ROM',
    chapter: 1,
    startVerse: 16,
    endVerse: 17,
    title: 'O Poder do Evangelho e a Justiça de Deus',
    theme: 'A Tese da Carta aos Romanos e a Justificação pela Fé',
    introduction: `A Epístola aos Romanos é a obra-prima teológica de Paulo, a exposição mais sistemática e profunda do evangelho na Bíblia. Os versículos 16 e 17 do primeiro capítulo funcionam como a tese de toda a carta. Paulo, escrevendo para a capital do império mais poderoso do mundo, declara que não se envergonha da mensagem de um carpinteiro judeu crucificado. Por quê? Porque essa mensagem não é apenas uma teoria religiosa, mas o próprio poder de Deus em ação para salvar a humanidade, revelando como um Deus santo pode declarar justos os pecadores.`,
    points: [
      {
        verseRef: 'v. 16a',
        title: 'A Ousadia e o Poder do Evangelho',
        description: `Sem Vergonha da Cruz. "Porque não me envergonho do evangelho de Cristo". Em Roma, o poder era medido por legiões militares, riqueza e status. O evangelho falava de submissão, fraqueza, uma cruz e um túmulo vazio. Para a mente romana, isso era ridículo. Mas Paulo não se envergonha, "pois é o poder (dynamis) de Deus para salvação". O evangelho não apenas *fala* sobre o poder de Deus; ele *é* o poder de Deus. Quando a mensagem da cruz é pregada, o Espírito Santo opera com poder explosivo para ressuscitar os mortos espirituais e quebrar as cadeias do pecado.`
      },
      {
        verseRef: 'v. 16b',
        title: 'A Universalidade e a Condição da Salvação',
        description: `Para Todo Aquele que Crê. O poder do evangelho tem um propósito específico: "para salvação". E tem um escopo universal: "de todo aquele que crê; primeiro do judeu, e também do grego". A salvação não é limitada por etnia, classe social, gênero ou histórico moral. O evangelho nivela toda a humanidade. No entanto, a salvação não é automática (universalismo); ela tem uma condição essencial: a fé ("todo aquele que crê"). A fé é a mão vazia do mendigo que recebe o presente real de Deus. A prioridade histórica da mensagem foi para os judeus (o povo da aliança), mas a oferta é para o mundo inteiro.`
      },
      {
        verseRef: 'v. 17',
        title: 'A Revelação da Justiça de Deus',
        description: `De Fé em Fé. Por que o evangelho tem poder para salvar? "Porque nele se descobre (revela) a justiça de Deus de fé em fé". Esta foi a frase que libertou Martinho Lutero e acendeu a Reforma Protestante. A "justiça de Deus" aqui não é o atributo de Deus que pune o pecador (a Sua justiça retributiva), mas o status de justiça que Deus *dá* ao pecador como um presente (a justiça imputada de Cristo). Essa justiça é recebida exclusivamente pela fé, do começo ao fim ("de fé em fé"). Paulo prova isso citando Habacuque 2:4: "como está escrito: Mas o justo viverá da fé".`
      }
    ],
    conclusion: `Romanos 1:16-17 é o coração do cristianismo. Não precisamos nos envergonhar da nossa fé diante de um mundo cético ou hostil, porque temos a única mensagem que tem o poder real de transformar vidas e salvar almas. O evangelho nos liberta do terror de tentar alcançar a justiça de Deus pelos nossos próprios méritos, oferecendo-nos a justiça perfeita de Cristo como um presente gratuito, recebido apenas pela fé.`
  },
  {
    id: 'rom_3_21_26',
    bookId: 'ROM',
    chapter: 3,
    startVerse: 21,
    endVerse: 26,
    title: 'A Justificação pela Graça através da Redenção',
    theme: 'O Coração do Evangelho e a Propiciação em Cristo',
    introduction: `Após passar dois capítulos e meio provando que toda a humanidade (judeus e gentios) está totalmente depravada e debaixo da ira de Deus, sem nenhuma esperança de se salvar pela lei, Paulo introduz a maior virada da história. Romanos 3:21-26 tem sido chamado de "o parágrafo mais importante já escrito". Aqui, Paulo explica o mecanismo da salvação: como Deus pode ser perfeitamente justo (punindo o pecado) e, ao mesmo tempo, o justificador do pecador (perdoando o culpado). A resposta está na cruz de Cristo.`,
    points: [
      {
        verseRef: 'v. 21-23',
        title: 'A Justiça à Parte da Lei e o Nivelamento Humano',
        description: `A Nova Revelação. "Mas agora se manifestou sem a lei a justiça de Deus" (v. 21). Deus revelou um caminho de salvação que não depende da nossa obediência à lei moral. Essa justiça é "pela fé em Jesus Cristo para todos e sobre todos os que creem" (v. 22). Não há distinção entre o judeu moralista e o gentio pagão na forma como são salvos, porque não há distinção na sua condição (v. 23): "Porque todos pecaram e destituídos estão da glória de Deus". O melhor de nós e o pior de nós estão no mesmo barco afundando; todos falhamos em refletir a glória para a qual fomos criados.`
      },
      {
        verseRef: 'v. 24',
        title: 'A Justificação Gratuita e a Redenção',
        description: `O Presente e o Preço. O versículo 24 descreve a ação de Deus: "Sendo justificados gratuitamente pela sua graça". "Justificar" é a declaração legal de Deus de que somos justos. "Gratuitamente" (dorean) significa "sem causa" em nós; não fizemos nada para merecer. É pura "graça". Mas se é grátis para nós, custou tudo para Deus: "pela redenção que há em Cristo Jesus". "Redenção" (apolutrosis) é o pagamento de um resgate para libertar escravos ou prisioneiros de guerra. Jesus pagou o preço da nossa liberdade com a Sua própria vida.`
      },
      {
        verseRef: 'v. 25-26',
        title: 'A Propiciação e a Vindicação da Justiça de Deus',
        description: `O Sangue que Apazigua a Ira. Como a morte de Jesus pagou o resgate? (v. 25): "Ao qual Deus propôs para propiciação pela fé no seu sangue". "Propiciação" (hilasterion) é um sacrifício que absorve e desvia a ira de Deus. Na cruz, Jesus absorveu a ira divina que nós merecíamos. Por que isso era necessário? "Para demonstrar a sua justiça pela remissão dos pecados dantes cometidos". No Antigo Testamento, Deus parecia tolerar o pecado, perdoando pessoas como Davi sem exigir a pena de morte imediata. A cruz prova que Deus não ignorou esses pecados; Ele os estava acumulando para puni-los em Cristo. O resultado (v. 26) é que Deus é "justo (porque puniu o pecado em Cristo) e justificador daquele que tem fé em Jesus (porque perdoa o pecador)".`
      }
    ],
    conclusion: `Romanos 3:21-26 é o alicerce inabalável da nossa segurança. A nossa salvação não é baseada em Deus "fechar os olhos" para o nosso pecado ou diminuir o Seu padrão de justiça. A nossa salvação é baseada no fato de que a justiça de Deus foi total e perfeitamente satisfeita na cruz. Porque Cristo bebeu o cálice da ira até a última gota, Deus pode nos declarar justos gratuitamente, e a Sua própria justiça exige que Ele nos aceite.`
  },
  {
    id: 'rom_5_1_11',
    bookId: 'ROM',
    chapter: 5,
    startVerse: 1,
    endVerse: 11,
    title: 'Os Frutos da Justificação',
    theme: 'Paz, Alegria, Esperança e a Certeza do Amor de Deus',
    introduction: `Depois de estabelecer a doutrina da justificação pela fé nos capítulos 3 e 4, Paulo agora descreve os resultados práticos e emocionais dessa justificação na vida do crente. Se fomos declarados justos diante do tribunal de Deus, o que isso muda no nosso dia a dia? Paulo lista uma série de benefícios gloriosos que transformam a nossa relação com Deus, a nossa perspectiva sobre o sofrimento e a nossa garantia para o futuro. O evangelho não apenas nos salva do inferno; ele nos dá uma vida de alegria e paz inabaláveis agora.`,
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'Paz com Deus e Acesso à Graça',
        description: `O Fim da Guerra. "Tendo sido, pois, justificados pela fé, temos paz com Deus, por nosso Senhor Jesus Cristo" (v. 1). Antes da justificação, estávamos em guerra com Deus (éramos "inimigos", v. 10). A paz com Deus não é apenas um sentimento de tranquilidade, mas um status objetivo: a guerra acabou, o tratado de paz foi assinado com o sangue de Cristo. O segundo benefício (v. 2) é o "acesso pela fé a esta graça, na qual estamos firmes". Não estamos apenas perdoados; fomos convidados para a sala do trono da graça, onde permanecemos seguros. O resultado é que nos gloriamos (alegramo-nos) na "esperança da glória de Deus".`
      },
      {
        verseRef: 'v. 3-5',
        title: 'Alegria nas Tribulações e o Propósito do Sofrimento',
        description: `A Corrente da Esperança. A alegria do cristão não depende de circunstâncias fáceis (v. 3): "E não somente isto, mas também nos gloriamos nas tribulações". Como podemos nos alegrar na dor? Porque a justificação muda o propósito da dor: "sabendo que a tribulação produz a paciência (perseverança), e a paciência a experiência (caráter aprovado), e a experiência a esperança" (v. 3-4). O sofrimento na vida do crente não é punitivo, mas formativo. Ele forja o nosso caráter e aprofunda a nossa esperança. E essa esperança "não traz confusão (não decepciona)" (v. 5), porque o amor de Deus já foi "derramado em nossos corações pelo Espírito Santo".`
      },
      {
        verseRef: 'v. 6-11',
        title: 'A Prova do Amor e a Certeza da Salvação Futura',
        description: `O Argumento do Maior para o Menor. Como sabemos que Deus nos ama? Paulo aponta para a cruz (v. 6-8): "Porque Cristo, estando nós ainda fracos, morreu a seu tempo pelos ímpios... Mas Deus prova o seu amor para conosco, em que Cristo morreu por nós, sendo nós ainda pecadores". Nós não éramos pessoas boas pelas quais alguém morreria; éramos ímpios e pecadores. Paulo usa a lógica para garantir o nosso futuro (v. 9-10): Se Deus fez o mais difícil (nos justificar e reconciliar através da morte do Seu Filho quando éramos inimigos), Ele certamente fará o mais fácil (nos salvar da ira futura através da vida ressurreta de Cristo agora que somos Seus amigos). Portanto, nós nos "gloriamos em Deus" (v. 11).`
      }
    ],
    conclusion: `Romanos 5:1-11 é um oásis de segurança para a alma cristã. A nossa paz com Deus não flutua com o nosso desempenho diário; ela está ancorada na obra consumada de Cristo. Podemos enfrentar as piores tribulações da vida com alegria, sabendo que Deus está usando a dor para forjar o nosso caráter. E podemos olhar para o futuro sem medo do julgamento, porque a cruz é a prova definitiva de que Deus nos ama e nunca nos abandonará.`
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
  console.log('Successfully added 3 new pericopes for Romans (Part 1).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
