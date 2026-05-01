const fs = require('fs');

const newPericopes = [
  {
    id: 'rom_8_1_11',
    bookId: 'ROM',
    chapter: 8,
    startVerse: 1,
    endVerse: 11,
    title: 'Nenhuma Condenação e a Vida no Espírito',
    theme: 'A Libertação do Pecado e a Habitação do Espírito Santo',
    introduction: `Romanos 8 é frequentemente considerado o capítulo mais grandioso de toda a Bíblia. Após descrever a luta agonizante do crente contra o pecado remanescente no capítulo 7, Paulo irrompe em um hino de triunfo. Ele declara a libertação definitiva do cristão: libertação da condenação da lei, libertação do poder do pecado e libertação da morte. A chave para essa vida vitoriosa não é o esforço humano, mas a presença capacitadora do Espírito Santo que habita em cada pessoa que está "em Cristo Jesus".`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Fim da Condenação e a Lei do Espírito',
        description: `O Veredito Final. "Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus" (v. 1). Esta é a declaração mais libertadora do universo. O tribunal de Deus já emitiu o seu veredito sobre o crente, e o veredito é "inocente". Por quê? Porque "a lei do Espírito de vida, em Cristo Jesus, me livrou da lei do pecado e da morte" (v. 2). O que a lei de Moisés não pôde fazer (porque a nossa carne era fraca), Deus fez (v. 3): Ele enviou o Seu Filho em semelhança da carne do pecado e condenou o pecado na carne de Cristo. O resultado (v. 4) é que a justiça exigida pela lei é cumprida em nós, que agora andamos segundo o Espírito.`
      },
      {
        verseRef: 'v. 5-8',
        title: 'O Contraste das Mentalidades: Carne vs. Espírito',
        description: `A Mente Transformada. Paulo contrasta duas formas de existência (v. 5): "Porque os que são segundo a carne inclinam-se para as coisas da carne; mas os que são segundo o Espírito para as coisas do Espírito". A inclinação da carne (a natureza humana caída) é "morte", mas a inclinação do Espírito é "vida e paz" (v. 6). A mente carnal é hostil a Deus; ela não se sujeita à lei de Deus e nem pode fazê-lo (v. 7). A conclusão é absoluta (v. 8): "Portanto, os que estão na carne não podem agradar a Deus". A religião sem o Espírito Santo é inútil.`
      },
      {
        verseRef: 'v. 9-11',
        title: 'A Habitação do Espírito e a Garantia da Ressurreição',
        description: `A Presença que Vivifica. Paulo assegura aos crentes (v. 9): "Vós, porém, não estais na carne, mas no Espírito, se é que o Espírito de Deus habita em vós". A posse do Espírito Santo não é uma segunda bênção para cristãos de elite; é a marca essencial de todo cristão verdadeiro ("Se alguém não tem o Espírito de Cristo, esse tal não é dele"). Embora o nosso corpo ainda vá morrer por causa do pecado (v. 10), o Espírito é vida por causa da justiça. A promessa final (v. 11): "E, se o Espírito daquele que dentre os mortos ressuscitou a Jesus habita em vós, aquele que dentre os mortos ressuscitou a Cristo também vivificará os vossos corpos mortais, pelo seu Espírito que em vós habita".`
      }
    ],
    conclusion: `Romanos 8:1-11 é a carta de alforria do cristão. Não precisamos mais viver sob a nuvem negra da culpa e do medo da condenação. O pecado foi punido na cruz, e o poder do pecado foi quebrado pelo Espírito Santo. A verdadeira vida cristã não é tentar agradar a Deus na força da carne, mas render a nossa mente e o nosso corpo à liderança e ao poder do Espírito que habita em nós, aguardando a glória da ressurreição.`
  },
  {
    id: 'rom_8_28_39',
    bookId: 'ROM',
    chapter: 8,
    startVerse: 28,
    endVerse: 39,
    title: 'A Segurança Inabalável do Amor de Deus',
    theme: 'A Soberania Divina na Salvação e a Vitória em Cristo',
    introduction: `O capítulo 8 de Romanos começa com "nenhuma condenação" e termina com "nenhuma separação". Esta passagem final é o cume do Everest teológico. Paulo reúne todos os argumentos sobre a justificação, a graça e o Espírito Santo para construir uma fortaleza inexpugnável de segurança para o crente. Ele mostra que a nossa salvação está ancorada na soberania eterna de Deus (a "corrente de ouro" da salvação) e que absolutamente nada no universo pode frustrar o propósito de Deus ou nos separar do Seu amor.`,
    points: [
      {
        verseRef: 'v. 28-30',
        title: 'A Providência Soberana e a Corrente de Ouro da Salvação',
        description: `O Propósito Inquebrável. "E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito" (v. 28). Deus orquestra até mesmo o sofrimento para o nosso bem final (que é nos tornar semelhantes a Cristo). Paulo prova isso com a "corrente de ouro" (v. 29-30): "Porque os que dantes conheceu (amou de antemão) também os predestinou para serem conformes à imagem de seu Filho... E aos que predestinou a estes também chamou; e aos que chamou a estes também justificou; e aos que justificou a estes também glorificou". Esta corrente não tem elos fracos; quem entra no primeiro elo (conhecimento prévio) tem a garantia absoluta de chegar ao último (glorificação).`
      },
      {
        verseRef: 'v. 31-34',
        title: 'O Deus por Nós e a Defesa no Tribunal Celestial',
        description: `O Advogado Imbatível. Diante dessa segurança, Paulo faz cinco perguntas retóricas. 1) "Se Deus é por nós, quem será contra nós?" (v. 31). Nenhuma oposição importa. 2) "Aquele que nem mesmo a seu próprio Filho poupou, antes o entregou por todos nós, como nos não dará também com ele todas as coisas?" (v. 32). A cruz garante todas as outras bênçãos. 3) "Quem intentará acusação contra os escolhidos de Deus? É Deus quem os justifica" (v. 33). O Juiz supremo já nos declarou inocentes. 4) "Quem é que condena?" (v. 34). Ninguém, porque Cristo morreu, ressuscitou, está à direita de Deus e intercede por nós. A nossa defesa é perfeita.`
      },
      {
        verseRef: 'v. 35-39',
        title: 'Mais que Vencedores e a Inseparabilidade do Amor',
        description: `O Triunfo Absoluto. A quinta pergunta (v. 35): "Quem nos separará do amor de Cristo?". Paulo lista os piores cenários: tribulação, angústia, perseguição, fome, nudez, perigo, espada. A resposta (v. 37): "Mas em todas estas coisas somos mais do que vencedores, por aquele que nos amou". Não apenas sobrevivemos; nós triunfamos através do sofrimento. Paulo conclui com um hino de certeza (v. 38-39): "Porque estou certo de que, nem a morte, nem a vida, nem os anjos, nem os principados, nem as potestades, nem o presente, nem o porvir, nem a altura, nem a profundidade, nem alguma outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus nosso Senhor".`
      }
    ],
    conclusion: `Romanos 8:28-39 é o antídoto definitivo contra o medo, a ansiedade e a dúvida. A nossa salvação não é frágil, porque não depende da nossa força para nos segurarmos em Deus, mas da força de Deus para nos segurar. Se Deus nos escolheu na eternidade passada, deu o Seu Filho por nós na cruz, e o Seu Espírito habita em nós hoje, podemos ter a certeza absoluta de que Ele nos levará em segurança para a glória futura. Nada pode nos separar do Seu amor.`
  },
  {
    id: 'rom_12_1_2',
    bookId: 'ROM',
    chapter: 12,
    startVerse: 1,
    endVerse: 2,
    title: 'O Sacrifício Vivo e a Renovação da Mente',
    theme: 'A Resposta Prática à Misericórdia de Deus',
    introduction: `Após onze capítulos de teologia profunda sobre o pecado, a justificação, a santificação e a soberania de Deus, Paulo faz uma transição crucial no capítulo 12. Ele passa da doutrina para o dever, da crença para o comportamento. A palavra "Rogo-vos, pois" conecta toda a teologia anterior à vida prática. A verdadeira espiritualidade cristã não é apenas concordar com fatos teológicos, mas oferecer a totalidade da nossa vida como um sacrifício de gratidão a Deus, recusando-nos a ser moldados pela cultura ao nosso redor.`,
    points: [
      {
        verseRef: 'v. 1a',
        title: 'A Motivação: As Misericórdias de Deus',
        description: `A Base da Obediência. "Rogo-vos, pois, irmãos, pelas misericórdias de Deus". Paulo não usa a lei, o medo do inferno ou a culpa para motivar a obediência; ele usa a "misericórdia". Ele está apontando para tudo o que descreveu nos capítulos 1 a 11: o perdão dos pecados, o dom do Espírito Santo, a adoção, a promessa de glória. A obediência cristã não é uma tentativa de *comprar* a misericórdia de Deus, mas uma resposta de profunda gratidão *porque* já recebemos a misericórdia de Deus.`
      },
      {
        verseRef: 'v. 1b',
        title: 'A Ação: Apresentar o Corpo como Sacrifício Vivo',
        description: `O Culto Racional. O que Deus pede em resposta à Sua misericórdia? "que apresenteis os vossos corpos em sacrifício vivo, santo e agradável a Deus, que é o vosso culto racional". No Antigo Testamento, os adoradores traziam animais mortos para o altar. No Novo Testamento, Deus quer o adorador vivo. "Corpos" significa a totalidade da nossa vida prática: os nossos olhos, ouvidos, mãos, sexualidade, tempo e energia. Entregar tudo isso a Deus não é fanatismo; é o nosso "culto racional" (logikos), a única resposta lógica e sensata diante do que Deus fez por nós.`
      },
      {
        verseRef: 'v. 2',
        title: 'O Método: A Renovação da Mente',
        description: `A Transformação vs. A Conformação. Como vivemos esse sacrifício? "E não sede conformados com este mundo (este século, a cultura caída)". O mundo tenta nos espremer no seu molde de valores egoístas e materialistas. A defesa contra isso é: "mas sede transformados (metamorphoo) pela renovação do vosso entendimento (mente)". A mudança de comportamento começa com a mudança de pensamento. À medida que a nossa mente é saturada e renovada pela Palavra de Deus, somos transformados de dentro para fora. O objetivo dessa renovação é prático: "para que experimenteis qual seja a boa, agradável, e perfeita vontade de Deus". Só uma mente renovada pode discernir e desejar a vontade de Deus.`
      }
    ],
    conclusion: `Romanos 12:1-2 define a essência da vida cristã. Deus não quer apenas uma parte do nosso tempo no domingo; Ele quer a nossa vida inteira no altar, todos os dias. Quando compreendemos a profundidade da misericórdia de Deus, a entrega total deixa de ser um fardo e torna-se um privilégio. A verdadeira adoração acontece quando nos recusamos a pensar e agir como o mundo, permitindo que a Palavra de Deus renove a nossa mente e transforme o nosso caráter.`
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
  console.log('Successfully added 3 new pericopes for Romans (Part 2).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
