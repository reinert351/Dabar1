const fs = require('fs');

const newPericopes = [
  {
    id: '1co_1_18_25',
    bookId: '1CO',
    chapter: 1,
    startVerse: 18,
    endVerse: 25,
    title: 'A Loucura da Cruz e o Poder de Deus',
    theme: 'O Contraste entre a Sabedoria Humana e a Sabedoria Divina',
    introduction: `A igreja em Corinto estava dividida por facções, cada uma seguindo o seu líder favorito (Paulo, Apolo, Cefas). A raiz dessa divisão era o orgulho intelectual e a fascinação pela retórica e filosofia gregas. Para destruir esse orgulho, Paulo aponta para o centro da mensagem cristã: a cruz. Ele mostra que o evangelho não é uma filosofia sofisticada para impressionar intelectuais, mas uma mensagem que parece loucura para o mundo, mas que é o próprio poder de Deus para salvar.`,
    points: [
      {
        verseRef: 'v. 18-20',
        title: 'A Divisão da Humanidade e a Destruição da Sabedoria',
        description: `Loucura ou Poder? Paulo estabelece a linha divisória da humanidade (v. 18): "Porque a palavra da cruz é loucura para os que perecem; mas para nós, que somos salvos, é o poder de Deus". Não há meio-termo. Deus deliberadamente escolheu um método de salvação que humilha o intelecto humano (v. 19): "Destruirei a sabedoria dos sábios, e aniquilarei a inteligência dos inteligentes". O versículo 20 é um desafio retórico: "Onde está o sábio? Onde está o escriba? Onde está o inquiridor deste século? Porventura não tornou Deus louca a sabedoria deste mundo?". A filosofia humana não conseguiu resolver o problema do pecado e da morte.`
      },
      {
        verseRef: 'v. 21-23',
        title: 'O Escândalo para os Judeus e a Loucura para os Gregos',
        description: `As Exigências do Mundo. O mundo falhou em conhecer a Deus através da sua própria sabedoria (v. 21). Portanto, "aprouve a Deus salvar os crentes pela loucura da pregação". Paulo analisa as duas culturas dominantes (v. 22): "Porque os judeus pedem sinal (milagres espetaculares de poder), e os gregos buscam sabedoria (argumentos filosóficos refinados)". A resposta de Paulo frustra a ambos (v. 23): "Mas nós pregamos a Cristo crucificado, que é escândalo (pedra de tropeço) para os judeus, e loucura para os gregos". Um Messias executado como um criminoso era um insulto à teologia judaica e uma piada para a filosofia grega.`
      },
      {
        verseRef: 'v. 24-25',
        title: 'Cristo, Poder e Sabedoria de Deus',
        description: `A Inversão Divina. No entanto, para aqueles que são "chamados" (eleitos por Deus, tanto judeus como gregos), a cruz muda de significado (v. 24): "lhes pregamos a Cristo, poder de Deus, e sabedoria de Deus". O que o mundo vê como a maior fraqueza (um homem morrendo em uma cruz) é o maior poder de Deus (derrotando o pecado, a morte e Satanás). O que o mundo vê como loucura é a sabedoria suprema de Deus (justificando o pecador sem comprometer a Sua justiça). A conclusão é irrefutável (v. 25): "Porque a loucura de Deus é mais sábia do que os homens; e a fraqueza de Deus é mais forte do que os homens".`
      }
    ],
    conclusion: `1 Coríntios 1:18-25 nos adverte contra a tentação de tentar tornar o evangelho "aceitável" ou "palatável" para a cultura moderna. A mensagem da cruz sempre será ofensiva para o orgulho humano. Se removermos o escândalo da cruz para atrair as pessoas, removeremos também o poder de Deus para salvá-las. A nossa confiança não deve estar na nossa eloquência, mas na mensagem simples e "louca" de um Salvador crucificado e ressurreto.`
  },
  {
    id: '1co_13_1_13',
    bookId: '1CO',
    chapter: 13,
    startVerse: 1,
    endVerse: 13,
    title: 'A Supremacia do Amor',
    theme: 'O Caminho Mais Excelente e o Caráter do Amor Cristão',
    introduction: `A igreja de Corinto era rica em dons espirituais (profecia, línguas, conhecimento), mas pobre em maturidade. Eles usavam os dons para competir e se exaltar, criando caos nos cultos. Paulo insere este famoso "Hino ao Amor" bem no meio da sua discussão sobre os dons espirituais (capítulos 12 e 14). Ele não está escrevendo um poema romântico para casamentos, mas uma repreensão teológica severa: os dons espirituais sem amor (ágape - amor sacrificial e incondicional) são absolutamente inúteis e destrutivos.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Inutilidade dos Dons Sem Amor',
        description: `O Zero Espiritual. Paulo usa hipérboles extremas para provar o seu ponto. Mesmo que alguém falasse "as línguas dos homens e dos anjos" (v. 1), sem amor, seria apenas um barulho irritante ("metal que soa ou sino que tine"). Mesmo que tivesse o dom de profecia, conhecesse todos os mistérios teológicos e tivesse uma fé capaz de "transportar montanhas" (v. 2), sem amor, "nada seria". O versículo 3 é o mais chocante: mesmo o sacrifício extremo (dar todos os bens aos pobres ou entregar o corpo para ser queimado como mártir), se motivado por orgulho e não por amor, "nada me aproveitaria". O amor é a única moeda que tem valor no Reino de Deus.`
      },
      {
        verseRef: 'v. 4-7',
        title: 'O Perfil do Amor Ágape',
        description: `O Retrato de Cristo. Paulo não define o amor como um sentimento, mas como uma série de ações e atitudes (15 verbos no grego). O amor é paciente ("sofredor") e bondoso ("benigno"). Ele lista o que o amor *não* faz (v. 4-5): não é invejoso, não se gaba, não é arrogante, não é rude ("não se porta com indecência"), não é egoísta ("não busca os seus interesses"), não é irritável ("não se irrita") e não guarda rancor ("não suspeita mal"). O amor não se alegra com a injustiça, mas "folga com a verdade" (v. 6). O versículo 7 resume a sua resistência: "Tudo sofre (cobre), tudo crê, tudo espera, tudo suporta". Este é o perfil exato do caráter de Jesus Cristo.`
      },
      {
        verseRef: 'v. 8-13',
        title: 'A Permanência do Amor e a Cessação dos Dons',
        description: `O Eterno vs. O Temporário. "O amor nunca falha" (v. 8). Paulo contrasta a eternidade do amor com a temporalidade dos dons espirituais. As profecias serão aniquiladas, as línguas cessarão, a ciência (conhecimento revelatório) desaparecerá. Por quê? Porque os dons são ferramentas temporárias para o tempo presente ("em parte conhecemos", v. 9). Quando vier "o que é perfeito" (o estado eterno, a visão face a face com Deus, v. 10-12), as ferramentas não serão mais necessárias, assim como um adulto abandona as coisas de menino (v. 11). O que permanecerá para sempre? (v. 13): "Agora, pois, permanecem a fé, a esperança e o amor, estes três, mas o maior destes é o amor". No céu, a fé se tornará visão, a esperança se tornará realidade, mas o amor continuará por toda a eternidade.`
      }
    ],
    conclusion: `1 Coríntios 13:1-13 nos chama a reavaliar as nossas prioridades espirituais. É fácil nos impressionarmos com talentos, eloquência, conhecimento teológico ou manifestações de poder. Mas Deus mede a maturidade espiritual por uma única métrica: o quanto amamos. Podemos ter a teologia mais correta e os dons mais espetaculares, mas se formos arrogantes, impacientes e egoístas, somos um zero espiritual aos olhos de Deus.`
  },
  {
    id: '1co_15_1_11',
    bookId: '1CO',
    chapter: 15,
    startVerse: 1,
    endVerse: 11,
    title: 'A Essência do Evangelho e a Ressurreição',
    theme: 'O Fundamento Histórico da Fé Cristã',
    introduction: `Alguns na igreja de Corinto estavam negando a ressurreição física dos mortos, influenciados pela filosofia grega que via o corpo como uma prisão para a alma. Paulo dedica o capítulo 15 inteiro para corrigir esse erro fatal. Ele começa lembrando-os do evangelho básico que lhes havia pregado. Esta passagem é o credo mais antigo e importante do cristianismo primitivo, provando que a fé cristã não é baseada em mitos ou filosofias, mas em eventos históricos objetivos e verificáveis: a morte, o sepultamento e a ressurreição física de Jesus Cristo.`,
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'O Evangelho que Salva e a Necessidade de Perseverança',
        description: `A Base da Salvação. Paulo os lembra do evangelho "que já vos tenho anunciado; o qual também recebestes, e no qual também permaneceis" (v. 1). O evangelho não é uma introdução à vida cristã para ser deixada para trás; é o fundamento no qual devemos permanecer. O versículo 2 traz uma advertência: "Pelo qual também sois salvos se o retiverdes tal como vo-lo tenho anunciado; se não é que crestes em vão". A fé verdadeira persevera na verdade. Negar a ressurreição é abandonar o evangelho e tornar a fé inútil.`
      },
      {
        verseRef: 'v. 3-4',
        title: 'Os Fatos Centrais: Morte, Sepultamento e Ressurreição',
        description: `De Primeiríssima Importância. Paulo entrega a tradição que ele mesmo recebeu do Senhor e dos apóstolos (v. 3): "Porque primeiramente vos entreguei o que também recebi". Os fatos são três: 1) "que Cristo morreu por nossos pecados, segundo as Escrituras" (a morte não foi um acidente, mas um sacrifício expiatório profetizado no Antigo Testamento); 2) "E que foi sepultado" (provando que Ele realmente morreu fisicamente); 3) "e que ressuscitou ao terceiro dia, segundo as Escrituras" (provando que o sacrifício foi aceito e a morte derrotada). O cristianismo se sustenta ou cai sobre a historicidade destes três eventos.`
      },
      {
        verseRef: 'v. 5-11',
        title: 'As Testemunhas Oculares e a Graça Transformadora',
        description: `A Prova Histórica. Para provar que a ressurreição não foi uma alucinação, Paulo lista as testemunhas oculares (v. 5-7): Cefas (Pedro), os doze, mais de quinhentos irmãos de uma só vez (a maioria ainda viva e disponível para ser interrogada), Tiago (o meio-irmão de Jesus, que era incrédulo antes da ressurreição) e todos os apóstolos. Finalmente (v. 8), "e por derradeiro de todos me apareceu também a mim, como a um abortivo". Paulo reconhece a sua indignidade por ter perseguido a igreja (v. 9), mas exalta o poder da graça (v. 10): "Mas pela graça de Deus sou o que sou; e a sua graça para comigo não foi vã, antes trabalhei muito mais do que todos eles; todavia não eu, mas a graça de Deus, que está comigo". A mensagem é a mesma, não importa quem a pregue (v. 11).`
      }
    ],
    conclusion: `1 Coríntios 15:1-11 nos lembra que o cristianismo é uma religião histórica. A nossa fé não é um salto no escuro, mas uma confiança baseada em evidências sólidas. Jesus Cristo morreu pelos nossos pecados, foi sepultado e ressuscitou fisicamente, sendo visto por centenas de testemunhas. Se removermos a ressurreição física de Cristo, destruímos o evangelho. Mas porque Ele vive, a nossa fé é válida, os nossos pecados estão perdoados e a graça de Deus tem poder para transformar até o pior dos perseguidores.`
  },
  {
    id: '1co_15_50_58',
    bookId: '1CO',
    chapter: 15,
    startVerse: 50,
    endVerse: 58,
    title: 'A Vitória Final sobre a Morte',
    theme: 'O Mistério da Transformação e o Triunfo da Ressurreição',
    introduction: `No clímax do seu grande tratado sobre a ressurreição, Paulo responde à pergunta: "Como os mortos ressuscitarão e com que corpo virão?". Ele explica que os nossos corpos atuais, sujeitos à doença, decadência e morte, não são adequados para a eternidade. Ele revela um "mistério" (uma verdade anteriormente oculta): no retorno de Cristo, haverá uma transformação instantânea e radical, tanto para os mortos quanto para os vivos. Esta passagem é o grito de vitória da igreja sobre o seu último e maior inimigo: a morte.`,
    points: [
      {
        verseRef: 'v. 50-53',
        title: 'O Mistério da Transformação e a Incorruptibilidade',
        description: `A Necessidade da Mudança. Paulo estabelece um princípio biológico e teológico (v. 50): "a carne e o sangue não podem herdar o reino de Deus, nem a corrupção herdar a incorrupção". Os nossos corpos mortais não podem sobreviver na glória eterna de Deus. Portanto, ele revela um mistério (v. 51-52): "Na verdade, todos não dormiremos (nem todos morrerão antes da volta de Cristo), mas todos seremos transformados; Num momento, num abrir e fechar de olhos, ante a última trombeta". Quando a trombeta soar, os mortos ressuscitarão com corpos incorruptíveis, e os vivos serão instantaneamente transformados. O versículo 53 explica o processo: "Porque convém que isto que é corruptível se revista da incorruptibilidade, e que isto que é mortal se revista da imortalidade".`
      },
      {
        verseRef: 'v. 54-57',
        title: 'A Morte Tragada na Vitória e o Aguilhão do Pecado',
        description: `O Escárnio sobre a Morte. Quando essa transformação ocorrer, cumprir-se-á a profecia de Isaías 25:8 (v. 54): "Tragada foi a morte na vitória". Paulo então zomba do inimigo derrotado, citando Oseias 13:14 (v. 55): "Onde está, ó morte, o teu agilhão? Onde está, ó inferno (sepultura), a tua vitória?". Ele explica a teologia por trás disso (v. 56): "Ora, o agilhão da morte é o pecado, e a força do pecado é a lei". O pecado é o veneno que torna a morte letal, e a lei é o que dá ao pecado o seu poder condenatório. Mas Cristo cumpriu a lei e pagou pelo pecado. Portanto (v. 57): "Mas graças a Deus que nos dá a vitória por nosso Senhor Jesus Cristo". A morte perdeu o seu veneno para o crente.`
      },
      {
        verseRef: 'v. 58',
        title: 'O Portanto Prático: Firmeza e Trabalho Abundante',
        description: `A Motivação para o Serviço. Toda a teologia profunda da ressurreição deságua em uma exortação prática para o dia a dia. "Portanto, meus amados irmãos, sede firmes e constantes, sempre abundantes na obra do Senhor, sabendo que o vosso trabalho não é vão no Senhor". Porque a morte não é o fim, e porque ressuscitaremos com corpos glorificados para vivermos eternamente, nada do que fazemos para Cristo nesta vida é inútil. O sofrimento, o serviço obscuro, as lágrimas e o cansaço no ministério não são um desperdício. A ressurreição garante que o nosso trabalho tem valor eterno.`
      }
    ],
    conclusion: `1 Coríntios 15:50-58 muda completamente a forma como o cristão encara a morte e a vida. A morte não é mais um monstro aterrorizante, mas um inimigo derrotado e sem dentes, que servirá apenas como a porta para a nossa glorificação. E a vida presente não é uma busca fútil por prazeres temporários, mas uma oportunidade de investir abundantemente na obra do Senhor, com a certeza absoluta de que a ressurreição recompensará cada esforço feito por amor a Cristo.`
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
  console.log('Successfully added 4 new pericopes for 1 Corinthians.');
} else {
  console.error('Could not find the end of the pericopes array.');
}
