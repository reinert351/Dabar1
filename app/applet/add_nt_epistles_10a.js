const fs = require('fs');

const newPericopes = [
  {
    id: 'rom_1_16_17',
    bookId: 'ROM',
    chapter: 1,
    startVerse: 16,
    endVerse: 17,
    title: 'O Poder do Evangelho e a Justiça de Deus',
    theme: 'A Salvação pela Fé e a Revelação da Justiça Divina',
    introduction: `Nestes dois versículos, o apóstolo Paulo estabelece a tese central de toda a Carta aos Romanos. Escrevendo para a capital do maior império do mundo, onde o poder militar e a filosofia humana eram idolatrados, Paulo declara a sua confiança absoluta em uma mensagem que parecia fraqueza e loucura para o mundo. O evangelho não é apenas uma boa notícia sobre Deus; é a própria energia salvífica de Deus em ação, revelando como pecadores podem ser justificados diante dEle.`,
    points: [
      {
        verseRef: 'v. 16a',
        title: 'A Confiança Inabalável: Não Me Envergonho',
        description: `A Ousadia da Fé. "Porque não me envergonho do evangelho de Cristo". Em uma cultura que valorizava o status, a sabedoria retórica e o poder imperial, pregar a salvação através de um carpinteiro judeu crucificado como um criminoso do estado era motivo de escárnio. No entanto, Paulo recusa-se a recuar ou diluir a mensagem. A verdadeira fé não se intimida com a zombaria intelectual ou a oposição cultural, pois conhece a realidade daquele que ressuscitou dos mortos.`
      },
      {
        verseRef: 'v. 16b',
        title: 'A Natureza do Evangelho: O Poder de Deus',
        description: `O Dinamismo da Salvação. O evangelho não é um conselho moral, uma filosofia de vida ou um conjunto de regras religiosas. Paulo o define como "o poder (dynamis) de Deus para salvação de todo aquele que crê". É uma força divina ativa e transformadora que liberta o homem da culpa, do poder e, futuramente, da presença do pecado. Este poder é universal na sua oferta ("para todo aquele"), mas condicional na sua aplicação ("que crê"), alcançando "primeiro do judeu, e também do grego".`
      },
      {
        verseRef: 'v. 17',
        title: 'O Coração do Evangelho: A Justiça Revelada',
        description: `O Justo Viverá da Fé. "Porque nele se descobre a justiça de Deus de fé em fé". O evangelho revela algo que a lei não podia dar: a justiça de Deus. Esta não é a justiça punitiva que condena o pecador, mas a justiça imputada (creditada) que Deus concede gratuitamente àqueles que confiam em Cristo. Citando Habacuque 2:4 ("O justo viverá da fé"), Paulo estabelece que a relação com Deus, do início ao fim ("de fé em fé"), baseia-se exclusivamente na confiança na obra consumada de Cristo, e não no mérito humano.`
      }
    ],
    conclusion: `Romanos 1:16-17 foi o texto que acendeu a chama da Reforma Protestante no coração de Martinho Lutero. Ele nos lembra que não precisamos tentar alcançar a Deus através dos nossos próprios esforços fracassados. O evangelho é o poder de Deus que desce até nós, oferecendo a justiça perfeita de Cristo como um presente a ser recebido pela fé. Que nunca nos envergonhemos desta mensagem, pois ela é a única esperança para um mundo perdido.`
  },
  {
    id: 'rom_8_1_4',
    bookId: 'ROM',
    chapter: 8,
    startVerse: 1,
    endVerse: 4,
    title: 'Nenhuma Condenação e a Lei do Espírito',
    theme: 'A Liberdade em Cristo e a Vitória sobre o Pecado',
    introduction: `O capítulo 8 de Romanos é frequentemente considerado o "Everest" da teologia paulina. Após descrever a luta agonizante do crente contra a natureza pecaminosa no capítulo 7, Paulo irrompe em um grito de vitória. Ele declara a segurança eterna do crente e a nova dinâmica de vida proporcionada pelo Espírito Santo. A salvação não apenas nos livra da penalidade do pecado no tribunal de Deus, mas nos liberta do poder do pecado na nossa vida diária.`,
    points: [
      {
        verseRef: 'v. 1',
        title: 'O Veredito de Absolvição: Nenhuma Condenação',
        description: `A Segurança Eterna. "Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus". A palavra "portanto" liga esta declaração a toda a argumentação anterior sobre a justificação pela fé. O veredito do tribunal divino já foi proferido. Para aqueles que estão unidos a Cristo pela fé, a pena de morte foi cancelada. Não há "nenhuma" (absolutamente zero) condenação, porque Cristo já suportou toda a condenação na cruz em nosso lugar. A nossa posição diante de Deus é de perfeita aceitação.`
      },
      {
        verseRef: 'v. 2',
        title: 'A Nova Dinâmica: A Lei do Espírito de Vida',
        description: `A Libertação do Cativeiro. "Porque a lei do Espírito de vida, em Cristo Jesus, me livrou da lei do pecado e da morte". Paulo usa a palavra "lei" aqui não como um código jurídico, mas como um princípio ou força operante (como a lei da gravidade). A "lei do pecado e da morte" nos puxava para baixo, para a desobediência e a ruína. Mas uma força superior interveio: a "lei do Espírito de vida". Assim como a lei da aerodinâmica supera a lei da gravidade permitindo que um avião voe, o Espírito Santo supera a força do pecado, capacitando-nos a viver em santidade.`
      },
      {
        verseRef: 'v. 3-4',
        title: 'O Que a Lei Não Pôde Fazer, Deus Fez',
        description: `A Obra de Cristo e o Cumprimento da Justiça. A Lei de Moisés era boa, mas era "enferma pela carne" (v. 3); ela podia apontar o pecado, mas não podia dar poder para vencê-lo. O que a Lei não conseguiu, Deus fez: enviou o Seu Filho "em semelhança da carne do pecado" (verdadeiro homem, mas sem pecado) e "condenou o pecado na carne". O propósito desta obra substitutiva (v. 4) é "para que a justiça da lei se cumprisse em nós, que não andamos segundo a carne, mas segundo o Espírito". A justificação leva inevitavelmente à santificação.`
      }
    ],
    conclusion: `Romanos 8:1-4 é a âncora da alma do crente. Quando o diabo nos acusa ou a nossa própria consciência nos condena, devemos nos refugiar na verdade de que "nenhuma condenação há". Esta segurança não é uma licença para pecar, mas o fundamento para a verdadeira liberdade. Porque fomos perdoados por Cristo e habitados pelo Espírito Santo, não somos mais escravos da carne, mas somos capacitados a viver uma vida que agrada a Deus e cumpre o propósito da Sua lei.`
  },
  {
    id: 'rom_12_1_2',
    bookId: 'ROM',
    chapter: 12,
    startVerse: 1,
    endVerse: 2,
    title: 'O Sacrifício Vivo e a Mente Renovada',
    theme: 'A Resposta Prática à Graça de Deus',
    introduction: `Após expor magistralmente a doutrina da salvação, a soberania de Deus e a graça imerecida ao longo de onze capítulos, Paulo faz uma transição crucial usando a palavra "Rogo-vos, pois". A teologia deve sempre levar à doxologia (adoração) e à prática. Romanos 12 marca o início da seção ética da carta, definindo o que significa viver a vida cristã no dia a dia. A verdadeira adoração não é um ritual de domingo, mas a entrega total de si mesmo a Deus.`,
    points: [
      {
        verseRef: 'v. 1a',
        title: 'O Apelo Baseado na Misericórdia',
        description: `A Motivação da Entrega. "Rogo-vos, pois, irmãos, pelas misericórdias de Deus". Paulo não exige obediência com base no medo do castigo ou na obrigação legalista. O motor da vida cristã é a gratidão. Ele apela "pelas misericórdias de Deus" — tudo o que ele descreveu nos capítulos 1 a 11 (eleição, justificação, glorificação, o dom do Espírito). Quando compreendemos a profundidade da misericórdia que nos resgatou do inferno, a única resposta lógica é a entrega total.`
      },
      {
        verseRef: 'v. 1b',
        title: 'O Culto Racional: O Sacrifício Vivo',
        description: `A Adoração Integral. "...que apresenteis os vossos corpos em sacrifício vivo, santo e agradável a Deus, que é o vosso culto racional". No Antigo Testamento, os sacerdotes ofereciam animais mortos no altar. No Novo Testamento, o crente é o sacerdote e a oferta. Deus não quer sacrifícios mortos; Ele quer um "sacrifício vivo" — a nossa energia, o nosso tempo, os nossos talentos, a nossa sexualidade, as nossas mãos e pés dedicados inteiramente a Ele. Isso é "santo e agradável", e constitui o nosso "culto racional" (logikos), ou seja, a adoração lógica e inteligente diante de tão grande salvação.`
      },
      {
        verseRef: 'v. 2',
        title: 'A Não-Conformidade e a Transformação da Mente',
        description: `A Metamorfose Espiritual. "E não sede conformados com este mundo, mas sede transformados pela renovação do vosso entendimento". O cristão enfrenta uma pressão constante para se amoldar ao "esquema" (syschematizo) deste século (os seus valores, prioridades e moralidade). Paulo ordena resistência a essa formatação cultural. A alternativa não é apenas o isolamento físico, mas uma "transformação" (metamorphoo - metamorfose) interna. Essa mudança radical ocorre através da "renovação do entendimento" — saturar a mente com a Palavra de Deus para que possamos "experimentar qual seja a boa, agradável, e perfeita vontade de Deus".`
      }
    ],
    conclusion: `Romanos 12:1-2 nos ensina que o cristianismo não é um compartimento da nossa vida, mas a totalidade dela. O altar de Deus não exige o nosso sangue, mas exige o nosso suor, a nossa mente e o nosso coração todos os dias. A batalha pela santidade é vencida ou perdida na mente. Se não renovarmos a nossa mente com a verdade de Deus, seremos inevitavelmente moldados pelas mentiras do mundo. Que a nossa vida seja um sacrifício vivo e contínuo de gratidão ao nosso Salvador.`
  },
  {
    id: '1co_1_18_25',
    bookId: '1CO',
    chapter: 1,
    startVerse: 18,
    endVerse: 25,
    title: 'A Loucura da Cruz e a Sabedoria de Deus',
    theme: 'O Contraste entre a Sabedoria Humana e o Poder Divino',
    introduction: `A igreja de Corinto estava dividida por causa do orgulho intelectual e do culto à personalidade. Eles estavam tentando misturar o evangelho com a filosofia grega e a retórica secular. Paulo escreve para destruir essa arrogância, lembrando-os de que a mensagem central do cristianismo — um Messias crucificado — é inerentemente ofensiva ao intelecto humano não regenerado. Deus escolheu salvar o mundo através de um método que o mundo considera loucura, para que toda a glória pertença exclusivamente a Ele.`,
    points: [
      {
        verseRef: 'v. 18-21',
        title: 'A Palavra da Cruz: Loucura ou Poder?',
        description: `O Veredito do Mundo e o Veredito de Deus. "Porque a palavra da cruz é loucura para os que perecem; mas para nós, que somos salvos, é o poder de Deus" (v. 18). A humanidade está dividida em dois grupos com base na sua reação à cruz. Deus destruiu a sabedoria dos sábios (v. 19). O mundo, com toda a sua filosofia, não conheceu a Deus (v. 21). Portanto, "aprouve a Deus salvar os crentes pela loucura da pregação". A mensagem da cruz humilha o intelecto humano porque declara que não podemos nos salvar através do nosso próprio raciocínio.`
      },
      {
        verseRef: 'v. 22-23',
        title: 'O Escândalo para os Judeus e a Loucura para os Gregos',
        description: `As Falsas Expectativas. "Porque os judeus pedem sinal, e os gregos buscam sabedoria" (v. 22). Os judeus queriam um Messias político e miraculoso que destruísse Roma; um Messias crucificado (amaldiçoado no madeiro) era um "escândalo" (skandalon, pedra de tropeço). Os gregos queriam sistemas filosóficos sofisticados; um Deus que sofre e morre era "loucura" (moria, estupidez). Mas Paulo recusa-se a adaptar a mensagem ao gosto do consumidor (v. 23): "Mas nós pregamos a Cristo crucificado".`
      },
      {
        verseRef: 'v. 24-25',
        title: 'Cristo, o Poder e a Sabedoria de Deus',
        description: `A Inversão Divina. "Mas para os que são chamados, tanto judeus como gregos, lhes pregamos a Cristo, poder de Deus, e sabedoria de Deus" (v. 24). Quando o Espírito Santo abre os olhos de uma pessoa (o "chamado" eficaz), o que antes parecia loucura revela-se como a mais profunda sabedoria, e o que parecia fraqueza revela-se como o poder supremo que vence o pecado e a morte. Paulo conclui com um paradoxo brilhante (v. 25): "Porque a loucura de Deus é mais sábia do que os homens; e a fraqueza de Deus é mais forte do que os homens".`
      }
    ],
    conclusion: `1 Coríntios 1:18-25 é um antídoto contra a tentativa moderna de tornar o evangelho "palatável" ou "relevante" para a cultura secular. Se removermos a ofensa da cruz, removemos o poder da salvação. Não fomos chamados para impressionar o mundo com a nossa inteligência, mas para proclamar fielmente a mensagem do Cristo crucificado. A cruz humilha o nosso orgulho, mas exalta a graça, a sabedoria e o poder insondáveis do nosso Deus.`
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
  console.log('Successfully added 4 new pericopes for Epistles (Batch 10a).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
