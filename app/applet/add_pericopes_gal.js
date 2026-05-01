const fs = require('fs');

const newPericopes = [
  {
    id: 'gal_1_6_10',
    bookId: 'GAL',
    chapter: 1,
    startVerse: 6,
    endVerse: 10,
    title: 'Não Há Outro Evangelho',
    theme: 'A Exclusividade da Graça e o Perigo do Legalismo',
    introduction: `A carta aos Gálatas foi escrita em um tom de urgência e indignação apostólica. Falsos mestres (judaizantes) haviam se infiltrado nas igrejas da Galácia, ensinando que a fé em Cristo não era suficiente para a salvação; os gentios também precisavam ser circuncidados e guardar a lei de Moisés. Paulo não vê isso como uma pequena diferença teológica, mas como uma traição fatal. Ele abre a carta sem os seus habituais elogios, indo direto ao ponto: qualquer mensagem que adicione obras à graça de Cristo não é o evangelho, mas uma maldição.`,
    points: [
      {
        verseRef: 'v. 6-7',
        title: 'A Rápida Deserção e o Falso Evangelho',
        description: `O Abandono da Graça. Paulo expressa o seu choque (v. 6): "Maravilho-me de que tão depressa passásseis daquele que vos chamou à graça de Cristo para outro evangelho". O problema não era que eles estavam abandonando a religião, mas que estavam abandonando a *graça*. Adicionar a lei à graça é destruir a graça. Paulo esclarece (v. 7): "O qual não é outro, mas há alguns que vos inquietam e querem transtornar o evangelho de Cristo". Não existem dois evangelhos válidos. O que os judaizantes estavam pregando era uma perversão, uma falsificação que não tinha poder para salvar.`
      },
      {
        verseRef: 'v. 8-9',
        title: 'O Anátema (Maldição) sobre os Falsos Mestres',
        description: `A Autoridade da Mensagem sobre o Mensageiro. Paulo pronuncia uma das maldições mais severas da Bíblia (v. 8): "Mas, ainda que nós mesmos ou um anjo do céu vos anuncie outro evangelho além do que já vos tenho anunciado, seja anátema (amaldiçoado, condenado ao inferno)". A verdade do evangelho é maior do que qualquer apóstolo ou ser angelical. Se o próprio Paulo mudasse a mensagem, ele deveria ser rejeitado. Para enfatizar a gravidade, ele repete no versículo 9: "Assim, como já vo-lo dissemos, agora de novo também vo-lo digo. Se alguém vos anunciar outro evangelho além do que já recebestes, seja anátema". A pureza do evangelho é uma questão de vida ou morte eterna.`
      },
      {
        verseRef: 'v. 10',
        title: 'A Motivação do Apóstolo: Agradar a Deus ou aos Homens?',
        description: `O Fim da Popularidade. Os falsos mestres provavelmente acusavam Paulo de pregar uma graça "fácil" para agradar aos gentios. Paulo responde (v. 10): "Porque, persuado eu agora a homens ou a Deus? ou procuro agradar a homens? Se estivesse ainda agradando aos homens, não seria servo de Cristo". Pregar a salvação exclusiva pela graça ofende o orgulho humano (que quer contribuir para a salvação) e ofende os religiosos legalistas. Paulo escolheu ser fiel a Cristo, mesmo que isso lhe custasse a popularidade e trouxesse perseguição.`
      }
    ],
    conclusion: `Gálatas 1:6-10 é o grito de guerra da Reforma Protestante. A salvação é somente pela graça, somente através da fé, somente em Cristo. Qualquer tentativa de adicionar as nossas próprias obras, rituais ou méritos à obra consumada de Cristo na cruz é um insulto a Deus e resulta em um "evangelho" amaldiçoado. A igreja deve proteger a pureza da graça com a mesma ferocidade do apóstolo Paulo.`
  },
  {
    id: 'gal_2_15_21',
    bookId: 'GAL',
    chapter: 2,
    startVerse: 15,
    endVerse: 21,
    title: 'Justificados pela Fé, Mortos para a Lei',
    theme: 'O Coração do Evangelho e a União com Cristo',
    introduction: `Após relatar o seu confronto público com o apóstolo Pedro (que havia cedido à pressão dos legalistas e se separado dos gentios), Paulo resume o argumento teológico que usou contra ele. Esta passagem é o núcleo doutrinário da carta aos Gálatas. Paulo explica a doutrina da justificação pela fé de forma cristalina: ninguém será declarado justo diante de Deus guardando regras. A única maneira de sermos aceitos por Deus é através da fé em Cristo, o que resulta em uma união tão profunda que a vida de Cristo passa a fluir através de nós.`,
    points: [
      {
        verseRef: 'v. 15-16',
        title: 'A Impossibilidade da Justificação pelas Obras',
        description: `O Veredito da Lei. Paulo, falando como um judeu de nascimento, declara (v. 16): "Sabendo que o homem não é justificado pelas obras da lei, mas pela fé em Jesus Cristo". "Justificar" é um termo legal que significa "declarar justo" no tribunal de Deus. A lei de Moisés é boa, mas ela não pode salvar; ela apenas revela o nosso pecado. Portanto, "temos também crido em Jesus Cristo, para sermos justificados pela fé em Cristo, e não pelas obras da lei; porquanto pelas obras da lei nenhuma carne será justificada". A salvação é um presente recebido pela fé, não um salário conquistado pelo esforço.`
      },
      {
        verseRef: 'v. 17-19',
        title: 'Mortos para a Lei para Viver para Deus',
        description: `A Falsa Acusação de Antinomianismo. Os legalistas argumentavam que se a salvação é apenas pela fé, as pessoas viveriam no pecado (v. 17). Paulo rejeita isso: "De modo nenhum". Se Paulo voltasse a pregar a necessidade da lei para a salvação (como Pedro estava insinuando com o seu comportamento), ele estaria reconstruindo o que destruiu e se tornando um transgressor (v. 18). O paradoxo da graça é revelado no versículo 19: "Porque eu, pela lei, estou morto para a lei, para viver para Deus". A lei exigia a morte do pecador; Cristo morreu essa morte por nós. Portanto, a exigência da lei foi satisfeita. Estamos livres da lei não para pecarmos, mas para vivermos para Deus.`
      },
      {
        verseRef: 'v. 20-21',
        title: 'Crucificado com Cristo e a Vida pela Fé',
        description: `A União Mística. O versículo 20 é o ápice da experiência cristã: "Já estou crucificado com Cristo; e vivo, não mais eu, mas Cristo vive em mim; e a vida que agora vivo na carne, vivo-a na fé do Filho de Deus, o qual me amou, e se entregou a si mesmo por mim". O velho Paulo, que tentava se salvar pela lei, foi executado na cruz com Jesus. A nova vida que ele vive é animada pela própria presença de Cristo habitando nele através da fé. O versículo 21 conclui o argumento: "Não aniquilo (não rejeito) a graça de Deus; porque, se a justiça provém da lei, segue-se que Cristo morreu em vão". Se pudéssemos nos salvar sendo boas pessoas, a cruz foi um erro trágico e desnecessário.`
      }
    ],
    conclusion: `Gálatas 2:15-21 destrói a religião baseada no desempenho. Não somos aceitos por Deus porque tentamos muito, mas porque Cristo morreu por nós. A verdadeira liberdade cristã não é a liberdade para pecar, mas a liberdade de não ter que provar o nosso valor para Deus. Porque fomos crucificados com Cristo, o nosso velho eu legalista morreu, e agora somos livres para amar e servir a Deus, movidos pela gratidão e pelo poder de Cristo que vive em nós.`
  },
  {
    id: 'gal_3_10_14',
    bookId: 'GAL',
    chapter: 3,
    startVerse: 10,
    endVerse: 14,
    title: 'A Maldição da Lei e a Cruz de Cristo',
    theme: 'A Substituição Penal e a Bênção de Abraão',
    introduction: `Para provar aos gálatas que a salvação não vem pela obediência à lei, Paulo usa o próprio Antigo Testamento. Ele demonstra que a lei, por sua própria natureza, não traz bênção para os pecadores, mas maldição, porque exige perfeição absoluta. A única maneira de escapar dessa maldição não é tentando guardar a lei com mais força, mas confiando nAquele que se tornou maldição em nosso lugar. Esta passagem é uma das explicações mais claras da doutrina da substituição penal na Bíblia.`,
    points: [
      {
        verseRef: 'v. 10',
        title: 'A Exigência de Perfeição e a Maldição',
        description: `O Beco sem Saída do Legalismo. Paulo cita Deuteronômio 27:26: "Todos aqueles, pois, que são das obras da lei estão debaixo da maldição; porque está escrito: Maldito todo aquele que não permanecer em todas as coisas que estão escritas no livro da lei, para fazê-las". A lei de Deus não aceita um esforço de 99%. Se você escolhe o caminho da justificação pelas obras, você deve obedecer a *todas* as leis, o tempo *todo*. Como ninguém consegue fazer isso, todos os que tentam se salvar pela lei estão automaticamente sob a maldição e o julgamento de Deus.`
      },
      {
        verseRef: 'v. 11-12',
        title: 'O Contraste entre a Fé e a Lei',
        description: `Dois Caminhos Incompatíveis. Paulo cita Habacuque 2:4 para provar que a justificação sempre foi pela fé (v. 11): "E é evidente que pela lei ninguém será justificado diante de Deus, porque o justo viverá da fé". A lei e a fé operam em princípios opostos (v. 12): "Ora, a lei não é da fé; mas o homem, que fizer estas coisas, por elas viverá" (citando Levítico 18:5). A lei diz: "Faça e viva". O evangelho diz: "Creia e viva, porque Cristo já fez". Você não pode misturar os dois sistemas.`
      },
      {
        verseRef: 'v. 13-14',
        title: 'Cristo Feito Maldição por Nós',
        description: `A Grande Troca. Como escapamos da maldição que merecemos? O versículo 13 dá a resposta gloriosa: "Cristo nos resgatou da maldição da lei, fazendo-se maldição por nós; porque está escrito: Maldito todo aquele que for pendurado no madeiro" (citando Deuteronômio 21:23). Jesus não apenas sofreu dor física; Ele absorveu a ira divina e a maldição da lei que estavam destinadas a nós. Ele foi tratado como um criminoso amaldiçoado por Deus para que nós fôssemos tratados como filhos abençoados. O propósito dessa substituição (v. 14) foi "para que a bênção de Abraão (a justificação) chegasse aos gentios por Jesus Cristo, e para que pela fé nós recebamos a promessa do Espírito".`
      }
    ],
    conclusion: `Gálatas 3:10-14 nos mostra o horror do nosso pecado e a maravilha do amor de Cristo. A lei é um espelho que nos mostra a nossa sujeira e nos condena, mas não pode nos limpar. A nossa única esperança é olhar para a cruz, onde o Filho de Deus perfeito tomou a nossa maldição sobre Si mesmo. Através da fé nEle, a maldição é quebrada e recebemos o Espírito Santo e a bênção eterna.`
  },
  {
    id: 'gal_5_16_26',
    bookId: 'GAL',
    chapter: 5,
    startVerse: 16,
    endVerse: 26,
    title: 'A Batalha Interior e o Fruto do Espírito',
    theme: 'A Santificação Prática e a Liberdade do Domínio do Pecado',
    introduction: `Se o cristão está livre da lei, o que o impede de viver em pecado? Paulo responde a essa pergunta crucial no capítulo 5. A liberdade cristã não é anarquia, mas uma vida controlada e capacitada pelo Espírito Santo. Paulo descreve a guerra civil que acontece dentro de cada crente entre a "carne" (a velha natureza pecaminosa) e o "Espírito". Ele contrasta as obras destrutivas da carne com o belo fruto produzido pelo Espírito, mostrando que a verdadeira santidade cresce organicamente a partir da nossa comunhão com Deus.`,
    points: [
      {
        verseRef: 'v. 16-18',
        title: 'O Andar no Espírito e a Guerra Civil Interior',
        description: `O Comando e o Conflito. Paulo dá a ordem (v. 16): "Digo, porém: Andai em Espírito, e não cumprireis a concupiscência da carne". "Andar" significa viver o dia a dia em dependência e submissão ao Espírito Santo. O versículo 17 descreve a realidade da vida cristã: "Porque a carne cobiça contra o Espírito, e o Espírito contra a carne; e estes opõem-se um ao outro, para que não façais o que quereis". O crente não é perfeito; ele experimenta uma luta constante. No entanto, se somos "guiados pelo Espírito, não estais debaixo da lei" (v. 18). O Espírito nos dá o desejo e o poder para agradar a Deus, algo que a lei externa nunca pôde fazer.`
      },
      {
        verseRef: 'v. 19-21',
        title: 'As Obras da Carne e o Seu Destino',
        description: `O Catálogo do Pecado. Paulo lista as "obras da carne" (v. 19-21), que são evidentes e destrutivas. Elas incluem pecados sexuais ("prostituição, impureza, lascívia"), pecados religiosos ("idolatria, feitiçarias"), pecados sociais e relacionais ("inimizades, porfias, emulações, iras, pelejas, dissensões, heresias, invejas, homicídios") e pecados de intemperança ("bebedices, glutonarias"). A advertência de Paulo é severa: "os que cometem tais coisas não herdarão o reino de Deus". Ele não está falando de uma queda ocasional, mas de um estilo de vida contínuo e impenitente que prova que a pessoa não tem o Espírito Santo.`
      },
      {
        verseRef: 'v. 22-26',
        title: 'O Fruto do Espírito e a Crucificação da Carne',
        description: `O Caráter de Cristo. Em contraste com as "obras" (esforço humano), Paulo descreve o "fruto" (crescimento orgânico divino) do Espírito (v. 22-23): "amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança (domínio próprio)". Note que é "fruto" (singular); é um pacote completo que reflete o caráter de Jesus. "Contra estas coisas não há lei" (a lei não condena quem vive assim). Como cultivamos esse fruto? (v. 24): "E os que são de Cristo crucificaram a carne com as suas paixões e concupiscências". Houve uma ruptura definitiva com o pecado na conversão. Agora (v. 25), "Se vivemos em Espírito, andemos também em Espírito", mantendo o passo com a Sua liderança e rejeitando a vanglória e a inveja (v. 26).`
      }
    ],
    conclusion: `Gálatas 5:16-26 nos liberta de dois erros mortais: o legalismo (tentar ser santo por regras) e a licenciosidade (usar a graça como desculpa para pecar). A verdadeira vida cristã é uma caminhada diária de dependência do Espírito Santo. Embora a batalha contra a carne seja real e dolorosa, a vitória é garantida. À medida que nos submetemos ao Espírito, Ele produz em nós o belo caráter de Cristo, provando que somos verdadeiramente livres.`
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
  console.log('Successfully added 4 new pericopes for Galatians.');
} else {
  console.error('Could not find the end of the pericopes array.');
}
