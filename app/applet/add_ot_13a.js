const fs = require('fs');

const newPericopes = [
  {
    id: 'ezk_37_1_10',
    bookId: 'EZK',
    chapter: 37,
    startVerse: 1,
    endVerse: 10,
    title: 'O Vale de Ossos Secos',
    theme: 'A Restauração Divina e o Poder do Espírito',
    introduction: `O profeta Ezequiel ministra a um povo no exílio, cuja esperança havia morrido. Eles diziam: "Os nossos ossos se secaram, e pereceu a nossa esperança" (v. 11). Em resposta a esse desespero, Deus leva Ezequiel a um vale cheio de ossos humanos ressequidos. Esta visão não é apenas uma promessa de restauração nacional para Israel, mas uma das mais poderosas ilustrações bíblicas da regeneração espiritual: como a Palavra de Deus e o Espírito Santo trabalham juntos para trazer vida onde só existe morte.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Visão da Morte e a Pergunta Impossível',
        description: `Poderão Viver Estes Ossos? A mão do Senhor leva Ezequiel em espírito a um vale cheio de ossos. Deus o faz andar ao redor deles para constatar a realidade: eram "mui numerosos" e "estavam sequíssimos" (v. 2). A morte era total e irreversível aos olhos humanos. Deus faz a Ezequiel uma pergunta que desafia a lógica (v. 3): "Filho do homem, poderão viver estes ossos?". A resposta de Ezequiel é um modelo de humildade teológica: "Senhor Deus, tu o sabes". Ele não confia na probabilidade humana, mas na onisciência divina.`
      },
      {
        verseRef: 'v. 4-8',
        title: 'A Pregação da Palavra e a Restauração Estrutural',
        description: `Profetiza Sobre Estes Ossos. Deus ordena que Ezequiel pregue para os ossos mortos (v. 4). A pregação parece loucura, mas a Palavra de Deus tem poder criativo. Ezequiel obedece (v. 7): "Profetizei, pois, como se me deu ordem". O resultado é um ruído e um tremor: os ossos se juntam, nervos e carne crescem sobre eles, e a pele os cobre (v. 8). Há uma restauração estrutural completa (ortodoxia, organização, moralidade), mas há um problema fatal: "não havia neles espírito". A religião sem o Espírito Santo é apenas um cadáver bem vestido.`
      },
      {
        verseRef: 'v. 9-10',
        title: 'A Invocação do Espírito e o Exército Vivo',
        description: `Vem, ó Espírito. A Palavra formou o corpo, mas só o Espírito pode dar a vida. Deus ordena a Ezequiel (v. 9): "Profetiza ao espírito... e dize: Assim diz o Senhor Deus: Vem dos quatro ventos, ó espírito, e assopra sobre estes mortos, para que vivam". Ezequiel profetiza novamente, e o fôlego (ruach - vento, espírito) entra neles. O resultado é imediato (v. 10): "e viveram, e se puseram em pé, um exército grande em extremo". A verdadeira vida espiritual é o produto da Palavra pregada e do Espírito derramado.`
      }
    ],
    conclusion: `Ezequiel 37:1-10 nos ensina que não há situação humana tão morta, seca ou desesperadora que o poder de Deus não possa ressuscitar. O nosso papel, como o de Ezequiel, é pregar a Palavra fielmente, mesmo quando o auditório parece morto, e clamar desesperadamente pelo sopro do Espírito Santo. Somente quando a Palavra e o Espírito operam juntos é que pecadores mortos são transformados em um exército vivo para a glória de Deus.`
  },
  {
    id: 'ezk_47_1_12',
    bookId: 'EZK',
    chapter: 47,
    startVerse: 1,
    endVerse: 12,
    title: 'O Rio do Santuário',
    theme: 'A Graça Abundante e a Vida que Flui de Deus',
    introduction: `Nos capítulos finais do seu livro, Ezequiel recebe a visão de um novo templo glorioso, simbolizando a presença restaurada de Deus no meio do Seu povo. No capítulo 47, ele vê águas fluindo do limiar deste templo. O que começa como um pequeno fio de água transforma-se rapidamente em um rio caudaloso e intransponível, que flui para o deserto e deságua no Mar Morto, trazendo vida e cura por onde passa. É uma imagem profética do derramamento do Espírito Santo e do avanço irresistível do evangelho.`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Fonte e o Aprofundamento das Águas',
        description: `Águas que Dão a Nado. As águas nascem do santuário, debaixo do altar (v. 1). A verdadeira vida espiritual sempre flui da presença de Deus e do sacrifício. O anjo mede mil côvados e faz Ezequiel passar pelas águas, que dão pelos artelhos (tornozelos). Ele mede mais mil, e dão pelos joelhos; mais mil, e dão pelos lombos (cintura) (v. 3-4). Finalmente, mede mais mil, e é um rio que não se pode atravessar a pé, "águas que davam a nado" (v. 5). A graça de Deus é inesgotável e nos convida a mergulhar cada vez mais fundo, perdendo o controle e confiando na Sua correnteza.`
      },
      {
        verseRef: 'v. 6-10',
        title: 'A Transformação do Deserto e a Cura do Mar Morto',
        description: `Onde o Rio Chegar, Haverá Vida. O anjo leva Ezequiel à margem do rio e mostra-lhe uma abundância de árvores (v. 7). As águas descem para a campina (o deserto da Judeia) e entram no mar (o Mar Morto, onde nada vive). O milagre acontece (v. 8): "as águas sararão". O versículo 9 é a promessa do evangelho: "E será que toda a criatura vivente que passar por onde quer que entrarem estes dois ribeiros viverá". O rio traz uma multidão de peixes e pescadores (v. 10). A graça de Deus tem o poder de curar os lugares mais mortos e tóxicos da sociedade e do coração humano.`
      },
      {
        verseRef: 'v. 11-12',
        title: 'Os Lodaçais e as Árvores Frutíferas',
        description: `O Fruto e a Folha para Remédio. Há um aviso no versículo 11: "Mas os seus lodaçais e os seus pântanos não sararão; serão deixados para sal". Aqueles que resistem ao fluxo da água viva permanecem na sua esterilidade. No entanto, nas margens do rio, crescem árvores frutíferas que nunca murcham e dão fruto todos os meses (v. 12). A razão da sua vitalidade é clara: "porque as suas águas saem do santuário". O fruto serve para alimento, e as folhas para remédio (uma imagem que João retoma em Apocalipse 22:1-2).`
      }
    ],
    conclusion: `Ezequiel 47:1-12 nos desafia a avaliar o nosso nível de intimidade com Deus. Estamos apenas molhando os tornozelos na beira da religião, ou estamos dispostos a mergulhar nas águas profundas do Espírito? O rio de Deus não pode ser contido. Ele flui do trono da graça, atravessa os desertos da nossa vida, cura as nossas águas mortas e nos transforma em árvores frutíferas que trazem alimento e cura para um mundo doente.`
  },
  {
    id: 'dan_3_16_25',
    bookId: 'DAN',
    chapter: 3,
    startVerse: 16,
    endVerse: 25,
    title: 'A Fornalha de Fogo Ardente',
    theme: 'A Fé Inabalável e o Quarto Homem na Fornalha',
    introduction: `O rei Nabucodonosor constrói uma estátua de ouro gigante e ordena que todos os oficiais do império babilônico se prostrem e a adorem ao som da música, sob pena de serem lançados em uma fornalha de fogo ardente. Três jovens judeus exilados — Sadraque, Mesaque e Abede-Nego — recusam-se a cometer idolatria. A resposta deles à ameaça do rei é uma das maiores declarações de fé incondicional da Bíblia, provando que a verdadeira adoração não depende do livramento das circunstâncias.`,
    points: [
      {
        verseRef: 'v. 16-18',
        title: 'A Recusa Corajosa e a Fé Incondicional',
        description: `E, Se Não... O rei dá-lhes uma última chance e zomba: "Quem é o Deus que vos livrará das minhas mãos?". Os três jovens respondem com respeito, mas sem hesitação (v. 16): "Não necessitamos de te responder sobre este negócio". Eles declaram a sua fé no poder de Deus (v. 17): "Eis que o nosso Deus, a quem nós servimos, é que nos pode livrar... e ele nos livrará das tuas mãos, ó rei". Mas o clímax da fé deles está no versículo 18: "E, se não, fica sabendo ó rei, que não serviremos a teus deuses nem adoraremos a estátua de ouro". A obediência deles não estava condicionada ao livramento físico.`
      },
      {
        verseRef: 'v. 19-23',
        title: 'A Ira do Rei e a Fornalha Aquecida Sete Vezes',
        description: `O Fogo da Perseguição. Nabucodonosor enche-se de fúria, e o seu semblante muda (v. 19). Ele ordena que a fornalha seja aquecida sete vezes mais do que o normal. O ódio do mundo contra a fidelidade a Deus é irracional e destrutivo. Os homens mais fortes do exército amarram os jovens com as suas roupas e os lançam no fogo (v. 20-21). O fogo estava tão quente que as chamas mataram os soldados que os lançaram (v. 22). Aos olhos humanos, a obediência a Deus havia resultado em uma tragédia absoluta.`
      },
      {
        verseRef: 'v. 24-25',
        title: 'O Quarto Homem e a Liberdade no Fogo',
        description: `O Filho dos Deuses. O rei olha para a fornalha e fica espantado (v. 24). Ele pergunta aos seus conselheiros: "Não lançamos nós, dentro do fogo, três homens atados?". Eles confirmam. O rei declara o milagre (v. 25): "Eu, porém, vejo quatro homens soltos, que andam passeando dentro do fogo, sem sofrer nenhum dano; e o aspecto do quarto é semelhante ao Filho de Deus". O fogo não queimou os jovens; queimou apenas as cordas que os amarravam. E, mais importante, Deus não os livrou *do* fogo, mas os livrou *no* fogo, juntando-se a eles na fornalha.`
      }
    ],
    conclusion: `Daniel 3:16-25 nos ensina que a fé verdadeira diz: "Deus pode me livrar, mas mesmo que Ele não o faça, eu continuarei fiel". O mundo tentará nos forçar a nos prostrarmos diante dos seus ídolos (dinheiro, aprovação, ideologias), ameaçando-nos com o "fogo" do cancelamento ou da perseguição. Mas a promessa do evangelho não é uma vida sem fornalhas; é a promessa de que, quando passarmos pelo fogo, o "Quarto Homem" — Jesus Cristo — estará conosco, e as chamas só queimarão as nossas amarras.`
  },
  {
    id: 'dan_6_16_23',
    bookId: 'DAN',
    chapter: 6,
    startVerse: 16,
    endVerse: 23,
    title: 'Daniel na Cova dos Leões',
    theme: 'A Integridade Inegociável e o Livramento Divino',
    introduction: `Daniel, agora um homem idoso, sobreviveu à queda do império babilônico e ascendeu a uma posição de liderança no império medo-persa. A sua excelência gera inveja nos outros governadores, que conspiram contra ele. Sabendo que não encontrariam corrupção na sua vida pública, eles criam uma lei que ataca a sua vida de oração. Daniel recusa-se a esconder a sua fé, é condenado à cova dos leões, e experimenta um livramento miraculoso que resulta na glorificação de Deus em todo o império.`,
    points: [
      {
        verseRef: 'v. 16-17',
        title: 'A Sentença Injusta e o Selo do Rei',
        description: `O Teu Deus te Livrará. O rei Dario, enganado pelos seus príncipes, é forçado pela sua própria lei a condenar Daniel. Com o coração pesado, o rei dá a ordem, e Daniel é lançado na cova dos leões (v. 16). O rei profere uma bênção que é quase uma oração: "O teu Deus, a quem tu continuamente serves, ele te livrará". Uma pedra é colocada sobre a boca da cova e selada com o anel do rei (v. 17), garantindo que a sentença não pudesse ser alterada. A situação de Daniel parecia tão selada e final quanto um túmulo.`
      },
      {
        verseRef: 'v. 18-20',
        title: 'A Noite de Angústia e a Busca Matinal',
        description: `A Voz Triste do Rei. Enquanto Daniel passa a noite na cova, o rei passa a noite no palácio em jejum, sem entretenimento e sem sono (v. 18). O poder terreno de Dario era inútil para salvar o seu amigo. Ao amanhecer, o rei vai apressadamente à cova (v. 19) e chama Daniel com uma voz triste (v. 20): "Daniel, servo do Deus vivo, dar-se-ia o caso que o teu Deus, a quem tu continuamente serves, tenha podido livrar-te dos leões?". O rei pagão reconhece que a única esperança de Daniel era o "Deus vivo".`
      },
      {
        verseRef: 'v. 21-23',
        title: 'A Boca dos Leões Fechada e a Inocência Provada',
        description: `Nenhum Dano se Achou Nele. A voz de Daniel ecoa da cova, respeitosa e calma (v. 21): "Ó rei, vive para sempre". Ele explica o milagre (v. 22): "O meu Deus enviou o seu anjo, e fechou a boca dos leões, para que não me fizessem dano, porque foi achada em mim inocência diante dele; e também contra ti, ó rei, não tenho cometido delito algum". O rei, extremamente alegre, manda tirar Daniel da cova. O texto conclui com a razão teológica do livramento (v. 23): "e nenhum dano se achou nele, porque crera no seu Deus".`
      }
    ],
    conclusion: `Daniel 6:16-23 é um testemunho do poder de uma vida de oração consistente ("a quem tu continuamente serves"). Daniel não começou a orar quando a crise chegou; a crise chegou porque ele orava, e a oração o sustentou na crise. Deus não impediu que Daniel fosse lançado na cova, mas fechou a boca dos leões quando ele estava lá dentro. A nossa integridade e a nossa fé no "Deus vivo" são a nossa maior proteção quando o mundo tenta nos devorar.`
  },
  {
    id: 'dan_9_20_27',
    bookId: 'DAN',
    chapter: 9,
    startVerse: 20,
    endVerse: 27,
    title: 'A Oração de Daniel e as Setenta Semanas',
    theme: 'A Intercessão e o Cronograma da Redenção',
    introduction: `Daniel estava lendo as profecias de Jeremias e percebeu que os 70 anos de exílio na Babilônia estavam chegando ao fim. Em vez de cruzar os braços e esperar, ele entra em profunda oração de confissão e intercessão pelo seu povo. Enquanto ele ainda orava, Deus envia o anjo Gabriel com uma resposta que vai muito além do retorno do exílio físico. A profecia das "Setenta Semanas" é o relógio profético de Deus, detalhando o tempo exato da primeira vinda do Messias, a Sua morte expiatória e os eventos dos últimos dias.`,
    points: [
      {
        verseRef: 'v. 20-23',
        title: 'A Oração Interrompida e a Resposta Celestial',
        description: `Tu És Mui Amado. Daniel estava confessando o seu pecado e o pecado do seu povo, prostrado diante de Deus (v. 20). A resposta divina é imediata. O anjo Gabriel, voando rapidamente, toca-o na hora do sacrifício da tarde (v. 21). Gabriel explica a sua missão (v. 22-23): "No princípio das tuas súplicas, saiu a ordem, e eu vim para to declarar, porque és mui amado; considera, pois, a palavra, e entende a visão". A oração sincera move o céu. Deus responde a Daniel não apenas porque ele orou, mas porque ele era "mui amado" (precioso) aos olhos de Deus.`
      },
      {
        verseRef: 'v. 24',
        title: 'O Propósito das Setenta Semanas',
        description: `A Redenção Completa. Gabriel revela o cronograma (v. 24): "Setenta semanas (semanas de anos, ou seja, 490 anos) estão determinadas sobre o teu povo, e sobre a tua santa cidade". O propósito deste período é sêxtuplo: 1) extinguir a transgressão, 2) dar fim aos pecados, 3) expiar a iniquidade, 4) trazer a justiça eterna, 5) selar a visão e a profecia, e 6) ungir o Santo dos santos. Estes seis objetivos descrevem a obra completa de Jesus Cristo na cruz (resolvendo o problema do pecado) e na Sua segunda vinda (estabelecendo a justiça eterna).`
      },
      {
        verseRef: 'v. 25-27',
        title: 'O Messias Cortado e a Aliança Final',
        description: `O Príncipe e a Cruz. A profecia divide os 490 anos. Desde a ordem para restaurar Jerusalém até o Messias, haverá 7 semanas e 62 semanas (483 anos) (v. 25). Depois desse tempo, "será cortado o Messias, mas não para si mesmo" (v. 26). Esta é uma profecia exata da crucificação: o Messias morre, não pelos Seus próprios pecados, mas como substituto. O versículo também profetiza a destruição de Jerusalém e do templo (ocorrida em 70 d.C.). O versículo 27 descreve a última "semana" (7 anos), envolvendo uma aliança quebrada, a cessação dos sacrifícios e a abominação desoladora, apontando para os eventos escatológicos da tribulação.`
      }
    ],
    conclusion: `Daniel 9:20-27 é uma das provas matemáticas e proféticas mais impressionantes da inspiração da Bíblia e da messianidade de Jesus. Centenas de anos antes, Deus revelou o tempo exato em que o Messias seria "cortado" para expiar a iniquidade. Esta passagem nos ensina que a história humana não é um caos sem sentido, mas um roteiro escrito pelo Deus soberano. A nossa resposta, como a de Daniel, deve ser a oração fervorosa e a confiança absoluta de que Deus cumprirá cada palavra que prometeu.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 13a).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
