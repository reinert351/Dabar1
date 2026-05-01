const fs = require('fs');

const newPericopes = [
  {
    id: 'eph_1_3_14',
    bookId: 'EPH',
    chapter: 1,
    startVerse: 3,
    endVerse: 14,
    title: 'As Bênçãos Espirituais em Cristo',
    theme: 'A Obra da Trindade na Salvação: Eleição, Redenção e Selo',
    introduction: `A carta aos Efésios começa com uma das frases mais longas e majestosas de toda a Bíblia (no grego original, os versículos 3 a 14 são uma única sentença contínua). É um hino de louvor que traça a história da nossa salvação desde a eternidade passada até a eternidade futura. Paulo estrutura este hino de forma trinitariana, mostrando como o Pai nos elegeu, o Filho nos redimiu e o Espírito Santo nos selou. O objetivo de toda essa obra divina é um só: "o louvor da sua glória".`,
    points: [
      {
        verseRef: 'v. 3-6',
        title: 'A Obra do Pai: Eleição e Adoção',
        description: `Escolhidos Antes do Tempo. Paulo começa bendizendo a Deus Pai, que "nos abençoou com todas as bênçãos espirituais nos lugares celestiais em Cristo" (v. 3). A primeira bênção é a eleição (v. 4): "Como também nos elegeu nele antes da fundação do mundo, para que fôssemos santos e irrepreensíveis diante dele em amor". A salvação não foi um plano de emergência, mas o propósito eterno de Deus. O objetivo da eleição não é o orgulho, mas a santidade. Além de nos escolher, Ele nos adotou (v. 5): "E nos predestinou para filhos de adoção por Jesus Cristo, para si mesmo, segundo o beneplácito de sua vontade". Tudo isso resulta "para louvor e glória da sua graça" (v. 6).`
      },
      {
        verseRef: 'v. 7-12',
        title: 'A Obra do Filho: Redenção e Revelação do Mistério',
        description: `Comprados por Sangue. A bênção agora foca no Filho (v. 7): "Em quem temos a redenção pelo seu sangue, a remissão das ofensas, segundo as riquezas da sua graça". A redenção é o pagamento de um resgate para libertar um escravo. O preço foi o sangue de Cristo. Além do perdão, Cristo nos deu revelação (v. 8-9): Ele fez abundar a sabedoria para nos fazer "conhecer o mistério da sua vontade". Qual é esse mistério? (v. 10): "De tornar a congregar em Cristo todas as coisas, na dispensação da plenitude dos tempos, tanto as que estão nos céus como as que estão na terra". O plano final de Deus é unificar o universo fraturado sob a liderança de Cristo.`
      },
      {
        verseRef: 'v. 13-14',
        title: 'A Obra do Espírito: O Selo e o Penhor da Herança',
        description: `A Garantia do Futuro. Finalmente, a bênção foca no Espírito Santo (v. 13). Depois que ouvimos a palavra da verdade (o evangelho) e cremos, fomos "selados com o Espírito Santo da promessa". No mundo antigo, um selo indicava propriedade, segurança e autenticidade. O Espírito Santo habitando em nós é a marca de que pertencemos a Deus. Mais do que isso, o Espírito é o "penhor da nossa herança" (v. 14). Um "penhor" (arrhabon) é um pagamento inicial, um sinal que garante que o restante do pagamento será feito. A presença do Espírito hoje é a garantia absoluta de que Deus completará a nossa redenção (a ressurreição do corpo) no futuro.`
      }
    ],
    conclusion: `Efésios 1:3-14 é a cura para a insegurança espiritual. A nossa salvação não depende da nossa força de vontade vacilante, mas do propósito eterno do Pai, do sangue precioso do Filho e do selo inquebrável do Espírito Santo. Quando compreendemos a magnitude do que Deus fez por nós em Cristo, a única resposta possível é vivermos para o "louvor da sua glória".`
  },
  {
    id: 'eph_2_1_10',
    bookId: 'EPH',
    chapter: 2,
    startVerse: 1,
    endVerse: 10,
    title: 'Da Morte para a Vida pela Graça',
    theme: 'O Contraste entre a Depravação Humana e a Misericórdia Divina',
    introduction: `Esta passagem é, sem dúvida, o resumo mais claro e contundente do evangelho da graça em todo o Novo Testamento. Paulo descreve a condição humana natural não como uma doença que precisa de remédio, mas como uma morte espiritual que precisa de ressurreição. Ele contrasta a nossa total incapacidade de nos salvarmos com a intervenção soberana, rica em misericórdia e motivada pelo amor de Deus. O resultado é uma salvação que exclui completamente o orgulho humano e resulta em uma vida de boas obras preparadas por Deus.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Condição Natural: Mortos, Escravizados e Condenados',
        description: `O Diagnóstico Sombrio. Paulo não suaviza a realidade: "E vos vivificou, estando vós mortos em ofensas e pecados" (v. 1). Um cadáver não pode ouvir, sentir ou ajudar a si mesmo. Espiritualmente, estávamos mortos para Deus. Estávamos escravizados por três forças (v. 2-3): 1) O mundo ("segundo o curso deste mundo"); 2) O diabo ("segundo o príncipe das potestades do ar"); 3) A carne ("fazendo a vontade da carne e dos pensamentos"). O resultado legal dessa condição é aterrorizante (v. 3): "e éramos por natureza filhos da ira, como os outros também". Estávamos sob a justa condenação de Deus.`
      },
      {
        verseRef: 'v. 4-7',
        title: 'A Intervenção Divina: "Mas Deus..."',
        description: `A Ressurreição Espiritual. As duas palavras mais esperançosas da Bíblia estão no versículo 4: "Mas Deus...". A mudança não veio do nosso esforço, mas do caráter de Deus: "que é riquíssimo em misericórdia, pelo seu muito amor com que nos amou". O que Ele fez? (v. 5-6): "Estando nós ainda mortos em nossas ofensas, nos vivificou juntamente com Cristo (pela graça sois salvos), e nos ressuscitou juntamente com ele e nos fez assentar nos lugares celestiais, em Cristo Jesus". A salvação é uma união mística com Cristo: a Sua ressurreição e exaltação tornam-se as nossas. O propósito de Deus (v. 7) é exibir as "abundantes riquezas da sua graça" por toda a eternidade.`
      },
      {
        verseRef: 'v. 8-10',
        title: 'O Método e o Propósito da Salvação',
        description: `Graça, Fé e Obras. Paulo resume a teologia da salvação (v. 8-9): "Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus. Não vem das obras, para que ninguém se glorie". A graça é a base (o favor imerecido de Deus), a fé é o meio (a mão vazia que recebe o presente), e as obras estão totalmente excluídas como causa da salvação, destruindo o orgulho humano. No entanto, as obras são essenciais como resultado (v. 10): "Porque somos feitura sua (obra-prima de Deus), criados em Cristo Jesus para as boas obras, as quais Deus preparou para que andássemos nelas". Não somos salvos *pelas* boas obras, mas fomos salvos *para* as boas obras.`
      }
    ],
    conclusion: `Efésios 2:1-10 nos ensina que o cristianismo não é um programa de autoaperfeiçoamento, mas um milagre de ressurreição. Quando entendemos que não contribuímos com nada para a nossa salvação, exceto com o pecado que tornou a salvação necessária, os nossos corações se enchem de gratidão e humildade. A verdadeira prova de que fomos vivificados pela graça é uma vida dedicada a andar nas boas obras que o nosso Criador planejou para nós.`
  },
  {
    id: 'eph_4_1_16',
    bookId: 'EPH',
    chapter: 4,
    startVerse: 1,
    endVerse: 16,
    title: 'A Unidade e a Maturidade do Corpo de Cristo',
    theme: 'Os Dons Espirituais e o Crescimento da Igreja',
    introduction: `A carta aos Efésios é dividida em duas metades: os capítulos 1-3 tratam da nossa riqueza em Cristo (doutrina), e os capítulos 4-6 tratam do nosso andar em Cristo (prática). O capítulo 4 começa com um apelo apaixonado à unidade da igreja. Paulo explica que a unidade não significa uniformidade; a igreja é um corpo diversificado, no qual Cristo distribuiu diferentes dons espirituais. O propósito desses dons não é o entretenimento ou a exaltação pessoal, mas equipar todos os crentes para o serviço, a fim de que a igreja cresça em amor e atinja a maturidade espiritual.`,
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'O Andar Digno e a Base da Unidade',
        description: `O Esforço pela Paz. Paulo, o prisioneiro, implora (v. 1): "que andeis como é digno da vocação com que fostes chamados". O primeiro passo prático é relacional (v. 2-3): "Com toda a humildade e mansidão, com longanimidade, suportando-vos uns aos outros em amor, procurando guardar a unidade do Espírito pelo vínculo da paz". A unidade já existe (foi criada pelo Espírito), a nossa tarefa é "guardá-la" através do caráter humilde. A base teológica dessa unidade é sétupla (v. 4-6): Há um só corpo, um só Espírito, uma só esperança, um só Senhor, uma só fé, um só batismo e um só Deus e Pai de todos.`
      },
      {
        verseRef: 'v. 7-12',
        title: 'A Distribuição dos Dons e o Equipamento dos Santos',
        description: `Líderes como Presentes. Embora haja unidade, há diversidade na graça (v. 7): "Mas a graça foi dada a cada um de nós segundo a medida do dom de Cristo". Paulo cita o Salmo 68 para mostrar que Cristo, o vencedor ascendido, distribuiu dons à Sua igreja (v. 8-10). Quais são esses dons? (v. 11): "E ele mesmo deu uns para apóstolos, e outros para profetas, e outros para evangelistas, e outros para pastores e doutores (mestres)". Estes são os ofícios de liderança da Palavra. Qual é a função deles? (v. 12): "Querendo o aperfeiçoamento (equipamento, treinamento) dos santos, para a obra do ministério, para edificação do corpo de Cristo". Os pastores não devem fazer todo o trabalho; eles devem treinar os membros da igreja para fazerem o ministério.`
      },
      {
        verseRef: 'v. 13-16',
        title: 'O Alvo da Maturidade e o Crescimento em Amor',
        description: `Crescendo em Tudo. O objetivo desse treinamento é a maturidade coletiva (v. 13): "Até que todos cheguemos à unidade da fé... à medida da estatura completa de Cristo". O resultado de uma igreja bem ensinada é a estabilidade doutrinária (v. 14): "Para que não sejamos mais meninos inconstantes, levados em roda por todo o vento de doutrina". O antídoto contra o engano é (v. 15) "seguindo a verdade em amor". Verdade sem amor é brutalidade; amor sem verdade é hipocrisia. Quando cada membro do corpo faz a sua parte (v. 16), o corpo inteiro cresce e se edifica em amor.`
      }
    ],
    conclusion: `Efésios 4:1-16 revoluciona a nossa visão sobre a igreja. A igreja não é um teatro onde um profissional atua e a congregação assiste; é um corpo vivo onde cada membro tem uma função vital. A verdadeira saúde da igreja é medida não pelo tamanho do prédio, mas pela humildade dos seus membros, pela firmeza na sã doutrina e pelo amor prático com que servem uns aos outros para a glória de Cristo.`
  },
  {
    id: 'eph_6_10_20',
    bookId: 'EPH',
    chapter: 6,
    startVerse: 10,
    endVerse: 20,
    title: 'A Armadura de Deus',
    theme: 'A Batalha Espiritual e a Defesa do Crente',
    introduction: `A vida cristã não é um parque de diversões, mas um campo de batalha. Paulo conclui a sua carta aos Efésios com um chamado às armas. Ele adverte que o nosso verdadeiro inimigo não é humano, mas uma hierarquia organizada de forças demoníacas. Para sobrevivermos a esta guerra invisível, não podemos confiar na nossa própria força ou inteligência. Devemos nos revestir da "armadura de Deus", que são as graças e verdades do evangelho aplicadas à nossa vida diária, sustentadas pela oração constante.`,
    points: [
      {
        verseRef: 'v. 10-13',
        title: 'A Natureza do Inimigo e a Necessidade da Armadura',
        description: `A Guerra Invisível. "No demais, irmãos meus, fortalecei-vos no Senhor e na força do seu poder" (v. 10). A nossa força vem da união com Cristo. A ordem é (v. 11): "Revesti-vos de toda a armadura de Deus, para que possais estar firmes contra as astutas ciladas do diabo". O diabo não luta de forma justa; ele usa engano e armadilhas. Paulo identifica o inimigo (v. 12): "Porque não temos que lutar contra a carne e o sangue (pessoas não são o inimigo real), mas, sim, contra os principados, contra as potestades, contra os príncipes das trevas deste século, contra as hostes espirituais da maldade, nos lugares celestiais". Por causa dessa ameaça, precisamos de "toda a armadura" para resistir no "dia mau" (v. 13).`
      },
      {
        verseRef: 'v. 14-17',
        title: 'As Peças da Armadura Divina',
        description: `O Equipamento do Soldado. Paulo lista seis peças da armadura do soldado romano, aplicando-as espiritualmente: 1) "Cingidos os vossos lombos com a verdade" (integridade e conhecimento da doutrina); 2) "Vestida a couraça da justiça" (a justiça imputada de Cristo e a vida moral reta protegendo o coração); 3) "Calçados os pés na preparação do evangelho da paz" (a prontidão e a estabilidade que o evangelho traz); 4) "Tomando sobretudo o escudo da fé, com o qual podereis apagar todos os dardos inflamados do maligno" (a confiança nas promessas de Deus que extingue as dúvidas e tentações); 5) "Tomai também o capacete da salvação" (a certeza da salvação protegendo a mente); 6) "E a espada do Espírito, que é a palavra de Deus" (a única arma ofensiva, a Bíblia usada ativamente contra a mentira).`
      },
      {
        verseRef: 'v. 18-20',
        title: 'A Oração como a Respiração da Batalha',
        description: `A Comunicação com o Comandante. A armadura é inútil sem a energia da oração (v. 18): "Orando em todo o tempo com toda a oração e súplica no Espírito, e vigiando nisto com toda a perseverança e súplica por todos os santos". A oração não é uma peça da armadura, é o ambiente no qual a batalha é travada. Devemos orar constantemente, guiados pelo Espírito, intercedendo uns pelos outros. Paulo, mesmo sendo um apóstolo experiente, pede oração por si mesmo (v. 19-20): "para que me seja dada, no abrir da minha boca, a palavra com confiança, para fazer notório o mistério do evangelho... para que nele fale ousadamente, como me convém falar". A coragem para pregar é fruto da oração da igreja.`
      }
    ],
    conclusion: `Efésios 6:10-20 nos desperta para a realidade da guerra espiritual. Não podemos ser neutros ou passivos. O diabo é um inimigo real e perigoso, mas ele não é onipotente. Quando nos vestimos com a verdade, a justiça, a fé e a Palavra de Deus, e quando nos mantemos em oração vigilante, somos invencíveis. A nossa vitória não está na nossa força, mas em permanecermos firmes na vitória que Cristo já conquistou na cruz.`
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
  console.log('Successfully added 4 new pericopes for Ephesians.');
} else {
  console.error('Could not find the end of the pericopes array.');
}
