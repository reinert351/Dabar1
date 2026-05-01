const fs = require('fs');

const newPericopes = [
  {
    id: 'col_1_15_20',
    bookId: 'COL',
    chapter: 1,
    startVerse: 15,
    endVerse: 20,
    title: 'A Supremacia Absoluta de Cristo',
    theme: 'Cristo como Criador, Sustentador e Reconciliador do Universo',
    introduction: `A igreja em Colossos estava sendo ameaçada por uma heresia que diminuía a pessoa de Jesus, tratando-O como apenas mais um anjo ou emanação divina em uma hierarquia de seres espirituais. Em resposta, Paulo escreve um dos hinos cristológicos mais majestosos e abrangentes de toda a Bíblia. Ele não defende Jesus apenas como um bom mestre, mas O exalta como o Senhor absoluto da criação original e da nova criação (a Igreja). Esta passagem estabelece que Cristo não é uma parte do universo; Ele é o centro, o propósito e o sustentador de tudo o que existe.`,
    points: [
      {
        verseRef: 'v. 15-16',
        title: 'A Imagem de Deus e o Criador de Tudo',
        description: `O Soberano da Criação. Paulo declara que Jesus é "a imagem do Deus invisível" (a manifestação exata e visível de Deus) e o "primogênito de toda a criação". "Primogênito" aqui não significa que Ele foi o primeiro ser criado (o que contradiria o próximo versículo), mas é um título de posição e autoridade suprema (o herdeiro sobre toda a criação). O versículo 16 prova a Sua divindade: "Porque nele foram criadas todas as coisas que há nos céus e na terra, visíveis e invisíveis, sejam tronos, sejam dominações, sejam principados, sejam potestades". Cristo criou até mesmo os anjos que os hereges colossenses estavam adorando. Tudo foi criado "por ele e para ele" (Ele é a origem e o destino do universo).`
      },
      {
        verseRef: 'v. 17-18',
        title: 'O Sustentador do Universo e o Cabeça da Igreja',
        description: `O Centro da Gravidade Cósmica e Espiritual. "E ele é antes de todas as coisas, e todas as coisas subsistem por ele" (v. 17). Jesus é a "cola" que mantém o universo unido; se Ele parasse de sustentá-lo por um milissegundo, tudo se desintegraria no caos. Paulo então muda da criação física para a nova criação espiritual (v. 18): "E ele é a cabeça do corpo, da igreja". Assim como a cabeça governa o corpo físico, Cristo governa a igreja. Ele é "o princípio e o primogênito dentre os mortos" (o primeiro a ressuscitar para nunca mais morrer, garantindo a nossa ressurreição). O propósito de tudo isso é singular: "para que em tudo tenha a preeminência" (o primeiro lugar absoluto).`
      },
      {
        verseRef: 'v. 19-20',
        title: 'A Plenitude Divina e a Reconciliação Cósmica',
        description: `A Paz pelo Sangue da Cruz. Os hereges ensinavam que a plenitude de Deus estava distribuída entre vários anjos. Paulo os corrige (v. 19): "Porque foi do agrado do Pai que toda a plenitude nele habitasse". Toda a essência, poder e atributos de Deus habitam inteiramente em Jesus. O versículo 20 descreve a obra suprema desse Deus encarnado: "E que, havendo por ele feito a paz pelo sangue da sua cruz, por meio dele reconciliasse consigo mesmo todas as coisas, tanto as que estão na terra, como as que estão nos céus". O pecado fraturou o universo inteiro, mas a cruz de Cristo é o evento cósmico que restaura a harmonia, subjugando os rebeldes e salvando os eleitos.`
      }
    ],
    conclusion: `Colossenses 1:15-20 não deixa espaço para um Jesus "pequeno". Se Jesus é o Criador das galáxias, o sustentador dos átomos, a plenitude de Deus e o reconciliador do universo, Ele exige a nossa adoração total e submissão incondicional. Não precisamos de anjos, filosofias ou mediadores humanos; em Cristo, temos tudo, porque Ele é o Senhor de tudo.`
  },
  {
    id: 'col_2_6_15',
    bookId: 'COL',
    chapter: 2,
    startVerse: 6,
    endVerse: 15,
    title: 'Plenitude e Liberdade em Cristo',
    theme: 'O Triunfo da Cruz sobre o Legalismo e os Poderes Espirituais',
    introduction: `Paulo alerta os colossenses contra o perigo de serem "sequestrados" por filosofias vãs, tradições humanas e legalismo religioso. A resposta de Paulo a essas ameaças não é dar-lhes uma nova lista de regras, mas lembrá-los da sua união completa com Cristo. Ele explica que, na cruz, Jesus não apenas perdoou os nossos pecados, mas operou uma cirurgia espiritual profunda em nós, cancelou a nossa dívida legal com Deus e desarmou publicamente as forças demoníacas que nos acusavam.`,
    points: [
      {
        verseRef: 'v. 6-10',
        title: 'Enraizados em Cristo e a Plenitude da Divindade',
        description: `A Suficiência de Cristo. Paulo estabelece o princípio da vida cristã (v. 6): "Como, pois, recebestes o Senhor Jesus Cristo, assim também andai nele". Recebemos a Cristo pela graça através da fé, e devemos continuar vivendo da mesma maneira, "arraigados e edificados nele". Ele adverte contra as "filosofias e vãs sutilezas" (v. 8) que se baseiam em tradições humanas e não em Cristo. A razão pela qual não precisamos dessas filosofias é dada nos versículos 9 e 10: "Porque nele habita corporalmente toda a plenitude da divindade; E estais perfeitos (completos) nele". Se temos a Cristo, que é o próprio Deus encarnado, não nos falta nada para a salvação ou para a vida espiritual.`
      },
      {
        verseRef: 'v. 11-13',
        title: 'A Circuncisão Espiritual e a Vida a partir da Morte',
        description: `A Cirurgia do Coração. Os falsos mestres exigiam a circuncisão física. Paulo responde que os crentes já receberam uma circuncisão muito superior (v. 11): "a circuncisão não feita por mão, no despojo do corpo dos pecados da carne, a circuncisão de Cristo". Esta é a remoção da nossa velha natureza pecaminosa. Isso aconteceu quando fomos unidos a Cristo no batismo (v. 12), sepultados com Ele e ressuscitados com Ele pela fé no poder de Deus. O versículo 13 descreve o milagre: "E, quando vós estáveis mortos nos pecados... vos vivificou juntamente com ele, perdoando-vos todas as ofensas". A salvação é a ressurreição de um cadáver espiritual.`
      },
      {
        verseRef: 'v. 14-15',
        title: 'O Cancelamento da Dívida e o Triunfo sobre os Principados',
        description: `A Vitória da Cruz. Como Deus pôde nos perdoar sendo justo? O versículo 14 explica: "Havendo riscado a cédula que era contra nós nas suas ordenanças, a qual de alguma maneira nos era contrária, e a tirou do meio de nós, cravando-a na cruz". A "cédula" era um certificado de dívida, a lista de todos os mandamentos de Deus que quebramos. Jesus pegou essa lista, que exigia a nossa condenação, e a pregou na Sua própria cruz, pagando a dívida com o Seu sangue. O resultado cósmico disso (v. 15): "E, despojando os principados e potestades, os expôs publicamente e deles triunfou em si mesmo". Satanás perdeu a sua única arma contra nós (o nosso pecado não perdoado), e Cristo o desfilou como um prisioneiro de guerra derrotado.`
      }
    ],
    conclusion: `Colossenses 2:6-15 é o grito de liberdade do cristão. Não precisamos nos submeter a regras religiosas opressivas ou viver com medo de demônios. A nossa dívida foi cancelada, a nossa velha natureza foi crucificada e os nossos inimigos espirituais foram desarmados. Em Cristo, estamos completos e somos eternamente livres.`
  },
  {
    id: 'col_3_1_11',
    bookId: 'COL',
    chapter: 3,
    startVerse: 1,
    endVerse: 11,
    title: 'A Nova Vida em Cristo',
    theme: 'Buscando as Coisas do Alto e Mortificando a Natureza Terrena',
    introduction: `A verdadeira espiritualidade não consiste em regras externas ("não toques, não proves"), mas em uma transformação interna baseada na nossa união com Cristo na Sua morte e ressurreição. No capítulo 3, Paulo faz a transição da teologia profunda para a ética prática. Se realmente morremos e ressuscitamos com Cristo, isso deve mudar drasticamente o que amamos, o que pensamos e como nos comportamos. O apóstolo nos chama a uma mudança radical de foco e a uma execução implacável dos nossos pecados de estimação.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Mente Focada no Céu e a Vida Oculta',
        description: `A Nova Perspectiva. Paulo estabelece a base da ética cristã: "Portanto, se já ressuscitastes com Cristo, buscai as coisas que são de cima, onde Cristo está assentado à destra de Deus. Pensai nas coisas que são de cima, e não nas que são da terra". O comportamento segue o pensamento. Se a nossa mente está saturada com os valores do mundo, viveremos como o mundo. A razão para essa mudança de foco é profunda (v. 3): "Porque já estais mortos, e a vossa vida está escondida com Cristo em Deus". O nosso velho "eu" morreu, e a nossa verdadeira identidade agora está segura e invisível no céu. Quando Cristo (que é a nossa vida) se manifestar na Sua segunda vinda, a nossa glória também será revelada (v. 4).`
      },
      {
        verseRef: 'v. 5-8',
        title: 'A Mortificação dos Pecados Terrenos',
        description: `Matando o Pecado. Porque já morremos com Cristo posicionalmente, devemos matar o pecado praticamente. "Mortificai (fazei morrer), pois, os vossos membros, que estão sobre a terra" (v. 5). Paulo não sugere terapia para o pecado, mas execução. Ele lista os pecados sexuais e de cobiça: "a prostituição, a impureza, o apetite desordenado, a vil concupiscência, e a avareza, que é idolatria". A avareza é idolatria porque coloca o dinheiro no lugar de Deus como fonte de segurança e alegria. É por causa destas coisas que "a ira de Deus vem sobre os filhos da desobediência" (v. 6). No versículo 8, ele adiciona os pecados sociais e de linguagem: "a ira, a cólera, a malícia, a maledicência, as palavras torpes da vossa boca".`
      },
      {
        verseRef: 'v. 9-11',
        title: 'O Despir do Velho Homem e a Renovação da Imagem',
        description: `A Nova Humanidade. "Não mintais uns aos outros, pois que já vos despistes do velho homem com os seus feitos" (v. 9). O pecado é como uma roupa suja e fedorenta que deve ser tirada. Em contraste, o crente se "vestiu do novo, que se renova para o conhecimento, segundo a imagem daquele que o criou" (v. 10). A salvação é a restauração da imagem de Deus em nós, que foi fraturada na queda. Esta nova humanidade destrói todas as barreiras sociais, raciais e religiosas (v. 11): "Onde não há grego, nem judeu, circuncisão, nem incircuncisão, bárbaro, cita, servo ou livre; mas Cristo é tudo, e em todos". Na igreja, a nossa identidade em Cristo supera qualquer outra identidade terrena.`
      }
    ],
    conclusion: `Colossenses 3:1-11 nos ensina que a santificação não é um esforço para sermos aceitos por Deus, mas a consequência de já termos sido ressuscitados com Cristo. Porque a nossa vida está escondida nEle, temos o poder e a obrigação de matar os pecados que antes nos dominavam e de nos vestirmos com o caráter da nova humanidade, onde Cristo é tudo em todos.`
  },
  {
    id: 'php_2_1_11',
    bookId: 'PHP',
    chapter: 2,
    startVerse: 1,
    endVerse: 11,
    title: 'O Exemplo Supremo de Humildade',
    theme: 'O Esvaziamento de Cristo e a Sua Exaltação Soberana',
    introduction: `A igreja em Filipos era uma igreja excelente, mas estava sofrendo com um problema comum: a desunião causada pelo orgulho e pela ambição pessoal. Para resolver esse problema, Paulo não dá apenas uma lista de regras de etiqueta; ele apresenta o hino cristológico mais profundo do Novo Testamento. Ele mostra que a humildade não é pensar menos de si mesmo, mas pensar menos em si mesmo. O antídoto para o egoísmo na igreja é olhar para a encarnação, a cruz e a exaltação de Jesus Cristo.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Apelo à Unidade e a Rejeição do Egoísmo',
        description: `A Mente de Cristo na Comunidade. Paulo apela aos filipenses com base no consolo, amor e comunhão do Espírito que eles já experimentaram em Cristo. Ele pede que completem a sua alegria (v. 2) "sentindo o mesmo, tendo o mesmo amor, o mesmo ânimo, sentindo uma mesma coisa". A unidade cristã não é uniformidade, mas um propósito e amor compartilhados. O método para alcançar isso é radical (v. 3): "Nada façais por contenda ou por vanglória (egoísmo ou vaidade), mas por humildade; cada um considere os outros superiores a si mesmo". O crente deve ativamente buscar os interesses dos outros antes dos seus próprios (v. 4).`
      },
      {
        verseRef: 'v. 5-8',
        title: 'A Kenosis (Esvaziamento) e a Morte de Cruz',
        description: `A Descida Infinita. "De sorte que haja em vós o mesmo sentimento que houve também em Cristo Jesus" (v. 5). Paulo descreve a trajetória de Cristo. Ele existia "em forma de Deus" (tendo a própria essência e natureza divina), mas não considerou a igualdade com Deus como algo a ser retido egoisticamente (v. 6). Em vez disso, Ele "esvaziou-se a si mesmo" (kenosis). Ele não perdeu a Sua divindade, mas abriu mão dos Seus privilégios divinos, assumindo a "forma de servo" e fazendo-se semelhante aos homens (v. 7). A humilhação não parou na encarnação; Ele se humilhou ainda mais, sendo "obediente até à morte, e morte de cruz" (a execução mais vergonhosa e dolorosa do mundo antigo) (v. 8).`
      },
      {
        verseRef: 'v. 9-11',
        title: 'A Exaltação Soberana e o Nome Sobre Todo Nome',
        description: `A Coroação do Servo. A resposta de Deus à humilhação voluntária de Cristo foi a exaltação absoluta (v. 9): "Por isso, também Deus o exaltou soberanamente, e lhe deu um nome que é sobre todo o nome". O caminho para cima no Reino de Deus é para baixo. O propósito dessa exaltação é o reconhecimento universal da Sua divindade (v. 10-11): "Para que ao nome de Jesus se dobre todo o joelho dos que estão nos céus, e na terra, e debaixo da terra, e toda a língua confesse que Jesus Cristo é o Senhor, para glória de Deus Pai". Um dia, todo ser humano e demoníaco, em adoração voluntária ou em terror forçado, reconhecerá que o carpinteiro crucificado é o Senhor do universo.`
      }
    ],
    conclusion: `Filipenses 2:1-11 destrói o orgulho humano. Se o próprio Deus do universo esteve disposto a se esvaziar, lavar os pés dos discípulos e morrer nu em uma cruz por amor a nós, quão absurdo é para nós exigirmos os nossos "direitos", lutarmos por status na igreja ou nos recusarmos a servir os nossos irmãos? A verdadeira grandeza é encontrada na toalha e na bacia, seguindo os passos do nosso Salvador.`
  },
  {
    id: 'php_3_7_14',
    bookId: 'PHP',
    chapter: 3,
    startVerse: 7,
    endVerse: 14,
    title: 'O Conhecimento de Cristo como o Maior Tesouro',
    theme: 'A Renúncia do Passado e a Corrida para o Alvo',
    introduction: `Paulo tinha um currículo religioso impecável. Se a salvação fosse baseada em herança, zelo religioso e obediência externa à lei, Paulo seria o primeiro da fila. No entanto, ao encontrar o Cristo ressuscitado, o seu sistema de valores foi virado de cabeça para baixo. Nesta passagem intensamente pessoal, Paulo usa a linguagem da contabilidade para declarar que tudo o que ele antes considerava "lucro" agora é considerado "lixo" comparado à glória de conhecer a Jesus e ser justificado por Ele.`,
    points: [
      {
        verseRef: 'v. 7-9',
        title: 'A Perda de Tudo pela Justiça de Cristo',
        description: `A Nova Contabilidade. "Mas o que para mim era ganho reputei-o perda por Cristo" (v. 7). Paulo não apenas descartou a sua antiga religiosidade; ele a considerou ativamente prejudicial, porque ela o impedia de ver a sua necessidade de um Salvador. Ele vai além (v. 8): "E, na verdade, tenho também por perda todas as coisas, pela excelência do conhecimento de Cristo Jesus, meu Senhor; pelo qual sofri a perda de todas estas coisas, e as considero como escória (lixo, esterco), para que possa ganhar a Cristo". O objetivo de Paulo é ser "achado nele" (v. 9), não tendo a sua própria justiça baseada na lei, mas a justiça perfeita de Cristo, que é recebida exclusivamente pela fé.`
      },
      {
        verseRef: 'v. 10-11',
        title: 'O Poder da Ressurreição e a Comunhão dos Sofrimentos',
        description: `O Desejo Mais Profundo. O que significa "ganhar a Cristo"? Paulo explica no versículo 10: "Para conhecê-lo, e à virtude (poder) da sua ressurreição, e à comunicação (comunhão) de suas aflições, sendo feito conforme à sua morte". Paulo não queria apenas informações sobre Jesus; ele queria intimidade experiencial. Ele queria experimentar o poder que ressuscitou Jesus operando na sua própria vida para vencer o pecado. E, surpreendentemente, ele queria compartilhar os sofrimentos de Cristo, sabendo que o sofrimento por amor ao evangelho produz uma intimidade com Deus que a prosperidade nunca pode dar. O objetivo final é a ressurreição gloriosa dentre os mortos (v. 11).`
      },
      {
        verseRef: 'v. 12-14',
        title: 'O Esquecimento do Passado e a Corrida para o Alvo',
        description: `A Insatisfação Santa. Paulo era um apóstolo maduro, mas ele recusa a complacência (v. 12): "Não que já a tenha alcançado, ou que seja perfeito; mas prossigo para alcançar aquilo para o que fui também preso por Cristo Jesus". Ele se vê como um corredor no meio de uma prova (v. 13-14): "esquecendo-me das coisas que atrás ficam, e avançando para as que estão diante de mim, prossigo para o alvo, pelo prêmio da soberana vocação de Deus em Cristo Jesus". O corredor não pode olhar para trás (nem para os seus sucessos passados, que geram orgulho, nem para os seus fracassos, que geram desespero). Ele deve focar toda a sua energia na linha de chegada: a presença de Cristo.`
      }
    ],
    conclusion: `Filipenses 3:7-14 nos desafia a reavaliar o que consideramos valioso. O nosso status, riqueza, moralidade ou reputação religiosa não têm valor algum para nos justificar diante de Deus. A verdadeira vida cristã é marcada por uma insatisfação santa: uma gratidão profunda pelo que Cristo já fez, combinada com uma fome insaciável de conhecê-Lo mais, disposta a perder tudo o mais para ganhar a Cristo.`
  },
  {
    id: 'php_4_4_9',
    bookId: 'PHP',
    chapter: 4,
    startVerse: 4,
    endVerse: 9,
    title: 'A Paz que Excede Todo o Entendimento',
    theme: 'Alegria, Oração e a Disciplina da Mente',
    introduction: `Na conclusão da sua carta aos filipenses, Paulo oferece a receita divina para a ansiedade e a paz mental. É impressionante lembrar que Paulo escreveu estas palavras de alegria e paz enquanto estava acorrentado em uma prisão romana, aguardando um possível julgamento de morte. Ele nos ensina que a alegria cristã não depende de circunstâncias favoráveis, mas da presença do Senhor. A paz de Deus é o resultado de uma vida de oração confiante e de uma mente disciplinada para focar naquilo que é excelente.`,
    points: [
      {
        verseRef: 'v. 4-5',
        title: 'A Alegria Contínua e a Moderação Visível',
        description: `Alegria como Mandamento. "Regozijai-vos sempre no Senhor; outra vez digo, regozijai-vos" (v. 4). A alegria cristã não é uma emoção superficial, mas uma escolha deliberada de encontrar satisfação "no Senhor", independentemente do que está acontecendo ao redor. É um mandamento, não uma sugestão. O versículo 5 acrescenta: "Seja a vossa equidade (moderação, gentileza, razoabilidade) notória a todos os homens. Perto está o Senhor". O cristão não deve ser conhecido por ser briguento, extremista ou exigente com os seus direitos, mas por uma gentileza que reflete o caráter de Cristo, sabendo que o Senhor está voltando em breve para consertar todas as injustiças.`
      },
      {
        verseRef: 'v. 6-7',
        title: 'O Antídoto contra a Ansiedade e a Guarda do Coração',
        description: `A Troca Divina. Paulo aborda o grande mal da alma humana (v. 6): "Não estejais inquietos (ansiosos) por coisa alguma". A ansiedade é a tentativa inútil de carregar o fardo do futuro que pertence a Deus. O antídoto é a oração abrangente: "antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração e súplica, com ação de graças". Devemos transformar as nossas preocupações em orações, sempre com um coração grato pelo que Deus já fez. O resultado dessa troca não é necessariamente a mudança das circunstâncias, mas a mudança do nosso interior (v. 7): "E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos sentimentos em Cristo Jesus". A paz de Deus atua como uma guarnição militar, protegendo a nossa mente do pânico.`
      },
      {
        verseRef: 'v. 8-9',
        title: 'A Dieta da Mente e a Prática da Verdade',
        description: `O Filtro do Pensamento. A paz de Deus exige a nossa cooperação na disciplina mental. Não podemos ter paz se alimentamos a nossa mente com lixo. Paulo fornece um filtro de oito qualidades para os nossos pensamentos (v. 8): "tudo o que é verdadeiro, tudo o que é honesto, tudo o que é justo, tudo o que é puro, tudo o que é amável, tudo o que é de boa fama, se há alguma virtude, e se há algum louvor, nisso pensai". O que assistimos, lemos e conversamos deve passar por este filtro. Finalmente (v. 9), a teoria deve se tornar prática: "O que também aprendestes, e recebestes, e ouvistes, e vistes em mim, isso fazei; e o Deus de paz será convosco".`
      }
    ],
    conclusion: `Filipenses 4:4-9 nos mostra que a paz mental não é um acidente; é o fruto de hábitos espirituais intencionais. Quando escolhemos nos alegrar no Senhor, quando transformamos as nossas ansiedades em orações de gratidão e quando disciplinamos a nossa mente para focar na verdade e na pureza, experimentamos a promessa incrível de que o próprio "Deus de paz" estará conosco no meio da tempestade.`
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
  console.log('Successfully added 6 new pericopes for Colossians and Philippians.');
} else {
  console.error('Could not find the end of the pericopes array.');
}
