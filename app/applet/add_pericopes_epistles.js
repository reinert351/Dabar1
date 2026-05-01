const fs = require('fs');

const newPericopes = [
  {
    id: 'jud_1_1_4',
    bookId: 'JUD',
    chapter: 1,
    startVerse: 1,
    endVerse: 4,
    title: 'A Batalha pela Fé',
    theme: 'A Ameaça dos Falsos Mestres e a Defesa da Verdade',
    introduction: `A Epístola de Judas, escrita pelo meio-irmão de Jesus, é uma das cartas mais urgentes do Novo Testamento. Judas tinha a intenção de escrever uma carta pastoral tranquila sobre a salvação, mas uma crise iminente o forçou a mudar de tom. Falsos mestres haviam se infiltrado secretamente na igreja, distorcendo a graça de Deus e negando a Cristo. Os primeiros quatro versículos estabelecem o propósito da carta: um chamado às armas espirituais para que os crentes batalhem corajosamente pela fé que foi entregue aos santos.`,
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Identidade e a Segurança dos Crentes',
        description: `Chamados, Santificados e Conservados. Judas se apresenta humildemente como "servo de Jesus Cristo, e irmão de Tiago" (não reivindicando o seu parentesco físico com Jesus como vantagem). Ele dirige a carta aos crentes, descrevendo-os com três palavras poderosas que garantem a sua segurança antes de falar sobre a crise: eles são "chamados" (a eleição divina), "santificados em Deus Pai" (ou amados por Deus Pai) e "conservados por Jesus Cristo" (protegidos eternamente). A saudação de Judas é uma oração por multiplicação: "Misericórdia, e paz, e amor vos sejam multiplicados".`
      },
      {
        verseRef: 'v. 3',
        title: 'A Mudança de Plano e o Chamado às Armas',
        description: `Batalhando pela Fé. Judas explica a urgência da sua carta: "tendo grande cuidado de vos escrever acerca da salvação comum, tive por necessidade escrever-vos, e exortar-vos a batalhar pela fé que uma vez foi dada aos santos". A "fé" aqui não é o ato de crer, mas o corpo de doutrinas cristãs (o evangelho). Esta fé foi entregue "uma vez" (de forma definitiva e completa) aos santos; não precisa de novas revelações ou adições. O verbo "batalhar" (epagonizesthai) é um termo atlético e militar que significa lutar com agonia e esforço extremo. A defesa da verdade exige coragem e sacrifício.`
      },
      {
        verseRef: 'v. 4',
        title: 'A Infiltração dos Ímpios',
        description: `A Graça Distorcida. O motivo da batalha é revelado: "Porque se introduziram alguns, que já antes estavam escritos para este mesmo juízo". O perigo não era uma perseguição externa, mas uma infiltração interna ("se introduziram secretamente"). Judas descreve esses falsos mestres com duas características fatais: 1) Eles "convertem em dissolução a graça de Deus" (eles ensinavam que, como Deus é cheio de graça, os cristãos tinham licença para pecar e viver na imoralidade sem consequências); 2) Eles "negam a Deus, único dominador e Senhor nosso, Jesus Cristo" (provavelmente negando a autoridade moral de Cristo sobre as suas vidas).`
      }
    ],
    conclusion: `Os versículos iniciais de Judas nos lembram que a igreja está sempre a uma geração de perder o evangelho se não estiver disposta a defendê-lo. A graça de Deus nunca é uma licença para o pecado, mas o poder para a santidade. Somos chamados a sermos guardiões vigilantes da verdade, lutando corajosamente pela fé, ancorados na certeza de que somos amados e conservados por Jesus Cristo.`
  },
  {
    id: '3jn_1_1_4',
    bookId: '3JN',
    chapter: 1,
    startVerse: 1,
    endVerse: 4,
    title: 'A Alegria de Andar na Verdade',
    theme: 'O Amor Pastoral, a Saúde Espiritual e a Verdade Prática',
    introduction: `A Terceira Epístola de João é a carta mais curta do Novo Testamento, mas é rica em afeto pastoral e princípios de liderança. O apóstolo João ("o presbítero") escreve ao seu amigo Gaio, um líder cristão fiel. Os primeiros quatro versículos formam uma saudação calorosa que revela o coração de um verdadeiro pastor. João expressa o seu profundo amor por Gaio, ora pela sua saúde integral e declara que a sua maior alegria na vida é ver os seus filhos espirituais vivendo em obediência à verdade do evangelho.`,
    points: [
      {
        verseRef: 'v. 1',
        title: 'O Amor na Verdade',
        description: `O Vínculo Cristão. João começa a carta de forma muito pessoal: "O presbítero ao amado Gaio, a quem em verdade eu amo". O amor de João por Gaio não é apenas um sentimento humano de amizade, mas um amor fundamentado "na verdade" (o evangelho de Jesus Cristo). A verdade compartilhada é o que cria a comunhão cristã mais profunda. João o chama de "amado" quatro vezes nesta curta carta, demonstrando que a liderança apostólica não era fria e institucional, mas profundamente relacional e afetuosa.`
      },
      {
        verseRef: 'v. 2',
        title: 'A Oração pela Prosperidade Integral',
        description: `Saúde Física e Espiritual. O versículo 2 é uma das orações mais famosas e frequentemente mal interpretadas da Bíblia: "Amado, desejo que te vá bem em todas as coisas, e que tenhas saúde, assim como bem vai a tua alma". João não está prometendo riqueza material garantida (como ensina a teologia da prosperidade), mas está fazendo uma oração pastoral padrão da época, desejando o bem-estar físico e material de Gaio. O detalhe crucial é o padrão de medida: "assim como bem vai a tua alma". A saúde espiritual de Gaio era tão evidente e robusta que João ora para que a sua saúde física e os seus negócios correspondam à sua vitalidade espiritual. Para muitos cristãos hoje, se a saúde física fosse medida pela saúde espiritual, estariam na UTI.`
      },
      {
        verseRef: 'v. 3-4',
        title: 'A Maior Alegria de um Pastor',
        description: `O Testemunho da Verdade. João explica o motivo da sua confiança na saúde espiritual de Gaio: "Porque muito me alegrei quando os irmãos vieram, e testificaram da tua verdade, como tu andas na verdade". Missionários itinerantes haviam retornado a João com relatórios sobre a vida de Gaio. A "verdade" para Gaio não era apenas uma doutrina na qual ele acreditava, mas um caminho no qual ele "andava" (vivia, praticava). O versículo 4 resume o coração do ministério pastoral: "Não tenho maior gozo do que este, o de ouvir que os meus filhos andam na verdade". O sucesso ministerial para João não era medido por números, dinheiro ou prestígio, mas pela fidelidade e obediência daqueles que ele havia discipulado.`
      }
    ],
    conclusion: `A saudação de 3 João nos desafia a avaliar as nossas próprias vidas. A nossa saúde espiritual é tão vibrante que gostaríamos que a nossa saúde física fosse igual a ela? Além disso, ela nos ensina que o verdadeiro amor cristão se alegra não apenas com o sucesso material dos outros, mas, acima de tudo, com a sua fidelidade a Cristo. A maior herança que podemos deixar é uma vida que "anda na verdade".`
  },
  {
    id: '2jn_1_1_3',
    bookId: '2JN',
    chapter: 1,
    startVerse: 1,
    endVerse: 3,
    title: 'Verdade e Amor',
    theme: 'Os Fundamentos Inseparáveis da Comunhão Cristã',
    introduction: `A Segunda Epístola de João é uma breve carta pastoral escrita para alertar uma igreja local contra falsos mestres. A saudação inicial (versículos 1 a 3) não é apenas uma formalidade educada, mas uma declaração teológica profunda que estabelece o tom para toda a carta. João entrelaça repetidamente duas palavras cruciais: "verdade" e "amor". Ele ensina que, no cristianismo bíblico, a verdade e o amor não são virtudes concorrentes, mas realidades inseparáveis. O verdadeiro amor é baseado na verdade, e a verdadeira comunhão é impossível sem ambos.`,
    points: [
      {
        verseRef: 'v. 1',
        title: 'A Senhora Eleita e o Amor na Verdade',
        description: `A Identidade da Igreja. João se identifica como "o presbítero" e escreve "à senhora eleita, e a seus filhos". A maioria dos estudiosos concorda que "senhora eleita" é uma personificação de uma igreja local, e os "filhos" são os seus membros. A igreja é "eleita" (escolhida por Deus). João declara que os ama "na verdade", e acrescenta: "e não somente eu, mas também todos os que têm conhecido a verdade". A comunhão cristã não é baseada em afinidades naturais, hobbies ou status social, mas no conhecimento compartilhado da verdade do evangelho. A verdade é o ímã que une a igreja.`
      },
      {
        verseRef: 'v. 2',
        title: 'A Permanência da Verdade',
        description: `O Fundamento Eterno. O amor de João pela igreja existe "por amor da verdade que está em nós, e para sempre estará conosco". A verdade cristã não é uma filosofia passageira ou uma tendência cultural que muda com o tempo. É a revelação eterna de Deus em Jesus Cristo. Porque a verdade habita nos crentes através do Espírito Santo e permanecerá para sempre, o amor que os une também tem um fundamento eterno e inabalável.`
      },
      {
        verseRef: 'v. 3',
        title: 'A Bênção Condicionada',
        description: `Graça, Misericórdia e Paz. A saudação de João é uma variação da bênção apostólica padrão: "Graça, misericórdia e paz, da parte de Deus Pai e da do Senhor Jesus Cristo, o Filho do Pai, sejam convosco na verdade e amor". A graça (o favor imerecido), a misericórdia (a compaixão na nossa miséria) e a paz (o bem-estar total) fluem do Pai e do Filho. No entanto, João adiciona uma qualificação crucial: essas bênçãos são experimentadas "na verdade e amor". Não podemos desfrutar da paz de Deus se rejeitarmos a Sua verdade doutrinária ou se vivermos em amargura e falta de amor para com os irmãos.`
      }
    ],
    conclusion: `A introdução de 2 João corrige dois erros comuns na igreja. O primeiro é o intelectualismo frio, que defende a verdade doutrinária, mas não tem amor. O segundo é o sentimentalismo cego, que promove o amor e a tolerância à custa da verdade bíblica. João nos ensina que o amor sem verdade é hipocrisia, e a verdade sem amor é brutalidade. Devemos abraçar ambos para experimentarmos a plenitude da graça de Deus.`
  },
  {
    id: '1jn_2_1_6',
    bookId: '1JN',
    chapter: 2,
    startVerse: 1,
    endVerse: 6,
    title: 'Cristo, Nosso Advogado e Propiciação',
    theme: 'A Solução para o Pecado e a Prova da Obediência',
    introduction: `No capítulo 1 da sua primeira epístola, João estabeleceu que todos os crentes pecam e precisam de confissão contínua. Isso poderia levar a um mal-entendido: se o perdão é garantido, o pecado não importa? No início do capítulo 2, João corrige rapidamente essa ideia. Ele escreve para que os crentes não pequem, mas imediatamente oferece a solução divina para quando falhamos: Jesus Cristo, o nosso Advogado. A passagem então transita da provisão para o pecado para a prova da salvação, argumentando que o verdadeiro conhecimento de Deus inevitavelmente resulta em obediência aos Seus mandamentos.`,
    points: [
      {
        verseRef: 'v. 1',
        title: 'O Objetivo da Santidade e a Provisão do Advogado',
        description: `O Equilíbrio Pastoral. João chama os seus leitores de "Meus filhinhos" (um termo de profundo afeto pastoral). Ele declara o seu propósito: "estas coisas vos escrevo, para que não pequeis". O objetivo da vida cristã é a santidade, não a tolerância ao pecado. No entanto, João é realista sobre a fraqueza humana: "E, se alguém pecar, temos um Advogado para com o Pai, Jesus Cristo, o justo". Quando pecamos, Satanás (o acusador) exige a nossa condenação. Mas nós temos um "Advogado" (Parakletos, aquele chamado para o lado para ajudar, um defensor legal) no tribunal do céu. Jesus não nos defende dizendo que somos inocentes, mas apresentando a Si mesmo como "o justo", cujos méritos cobrem a nossa culpa.`
      },
      {
        verseRef: 'v. 2',
        title: 'A Propiciação Universal',
        description: `O Sacrifício que Apazigua. O versículo 2 explica como Jesus pode ser o nosso Advogado: "E ele é a propiciação pelos nossos pecados". A palavra "propiciação" (hilasmos) significa um sacrifício que apazigua a ira de Deus e satisfaz a Sua justiça. Jesus não apenas nos defende; Ele pagou a nossa fiança com o Seu próprio sangue. João acrescenta: "e não somente pelos nossos, mas também pelos de todo o mundo". O sacrifício de Cristo é de valor infinito, suficiente para cobrir os pecados de toda a humanidade, embora seja eficaz apenas para aqueles que creem. O evangelho não é uma seita judaica exclusiva, mas a oferta de salvação para o mundo inteiro.`
      },
      {
        verseRef: 'v. 3-6',
        title: 'A Prova do Conhecimento: A Obediência',
        description: `O Teste Moral. João muda da justificação para a santificação. Como alguém pode ter certeza de que conhece a Deus e é defendido por Cristo? "E nisto sabemos que o conhecemos: se guardarmos os seus mandamentos" (v. 3). A obediência não é a causa da salvação, mas a prova inegável dela. João é contundente no versículo 4: "Aquele que diz: Eu conheço-o, e não guarda os seus mandamentos, é mentiroso, e nele não está a verdade". A religião puramente emocional ou intelectual é falsa se não transformar o comportamento. O versículo 6 resume o padrão da vida cristã: "Aquele que diz que está nele, também deve andar como ele andou". A imitação de Cristo é o destino de todo verdadeiro crente.`
      }
    ],
    conclusion: `1 João 2:1-6 nos oferece o equilíbrio perfeito do evangelho. Por um lado, não precisamos viver em desespero quando falhamos, pois temos um Advogado perfeito e uma propiciação completa no céu. Por outro lado, não podemos usar a graça como desculpa para a rebelião, pois a verdadeira marca de quem foi salvo por Cristo é um desejo sincero e contínuo de obedecer aos Seus mandamentos e andar como Ele andou.`
  },
  {
    id: '1jn_2_15_17',
    bookId: '1JN',
    chapter: 2,
    startVerse: 15,
    endVerse: 17,
    title: 'O Perigo de Amar o Mundo',
    theme: 'A Incompatibilidade entre o Amor a Deus e o Sistema Mundial',
    introduction: `Em 1 João 2:15-17, o apóstolo João apresenta um dos imperativos mais radicais e abrangentes do Novo Testamento: "Não ameis o mundo". Para entender esta ordem, é crucial definir o que João quer dizer com "mundo" (kosmos). Ele não está falando sobre o planeta físico (que Deus criou e declarou bom), nem sobre a humanidade (que Deus amou a ponto de enviar o Seu Filho, João 3:16). O "mundo" aqui refere-se ao sistema invisível de valores, filosofias, desejos e rebelião que é governado por Satanás e que se opõe ativamente a Deus. João alerta que o amor a este sistema é fatal para a alma.`,
    points: [
      {
        verseRef: 'v. 15',
        title: 'A Ordem e a Incompatibilidade Exclusiva',
        description: `A Lealdade Dividida é Impossível. João começa com uma proibição direta: "Não ameis o mundo, nem o que no mundo há". Ele não está sugerindo uma preferência, mas estabelecendo uma exclusividade absoluta. A razão é dada imediatamente: "Se alguém ama o mundo, o amor do Pai não está nele". O coração humano não tem capacidade para amar supremamente a Deus e ao sistema mundial rebelde ao mesmo tempo (como Jesus disse: "Ninguém pode servir a dois senhores"). Amar o mundo significa adotar os seus valores, buscar a sua aprovação e encontrar satisfação nas suas promessas vazias, o que expulsa o amor a Deus do coração.`
      },
      {
        verseRef: 'v. 16',
        title: 'A Anatomia do Sistema Mundial',
        description: `A Trindade do Mal. João disseca o sistema do mundo em três categorias fundamentais de tentação (as mesmas que Satanás usou contra Eva no Éden e contra Jesus no deserto): 1) "A concupiscência da carne" (os desejos físicos e sensuais corrompidos, a busca pelo prazer ilícito e a gratificação imediata). 2) "A concupiscência dos olhos" (a cobiça, o materialismo, o desejo insaciável de possuir o que vemos, a inveja). 3) "A soberba da vida" (o orgulho, a arrogância, a ostentação de status, riqueza ou realizações, a ilusão de autossuficiência). João declara categoricamente que nada disso "é do Pai, mas do mundo". A fonte destas tentações não é Deus, mas a natureza humana caída estimulada pela cultura.`
      },
      {
        verseRef: 'v. 17',
        title: 'A Transitoriedade do Mundo e a Eternidade da Obediência',
        description: `O Investimento Tolo. O argumento final de João contra o amor ao mundo é pragmático: é um péssimo investimento. "E o mundo passa, e a sua concupiscência". O sistema mundial, com todas as suas modas, prazeres, impérios e riquezas, está em processo de desintegração. É temporário e está destinado à destruição. Amar o mundo é amarrar o seu coração a um navio que está afundando. O contraste glorioso é a promessa final: "mas aquele que faz a vontade de Deus permanece para sempre". A única coisa que sobreviverá ao fim da história é a vida vivida em obediência a Deus. A vontade de Deus é o único fundamento eterno.`
      }
    ],
    conclusion: `A exortação de João nos chama a avaliar onde o nosso coração está ancorado. Não podemos ser cristãos autênticos se os nossos desejos, ambições e valores são indistinguíveis dos da cultura ao nosso redor. Somos chamados a rejeitar as ilusões passageiras do prazer, da cobiça e do orgulho, e a investir a nossa vida na única realidade que durará para sempre: a vontade e o amor do nosso Pai celestial.`
  },
  {
    id: '1jn_3_1_3',
    bookId: '1JN',
    chapter: 3,
    startVerse: 1,
    endVerse: 3,
    title: 'Filhos de Deus: Privilégio e Purificação',
    theme: 'O Amor do Pai, a Esperança Futura e a Santificação Presente',
    introduction: `No início do capítulo 3 da sua primeira epístola, o apóstolo João irrompe em adoração maravilhada ao contemplar a magnitude da graça de Deus. Ele convida os seus leitores a pararem e observarem o tipo de amor que Deus derramou sobre nós, transformando rebeldes em filhos. Esta passagem conecta três realidades vitais da vida cristã: o nosso privilégio presente (somos filhos de Deus), o nosso destino futuro (seremos semelhantes a Cristo) e a nossa responsabilidade prática (a busca contínua pela pureza). A esperança escatológica não é uma desculpa para a preguiça, mas o maior motor para a santificação.`,
    points: [
      {
        verseRef: 'v. 1',
        title: 'O Amor Incompreensível e a Identidade Presente',
        description: `A Adoção Divina. João exclama: "Vede quão grande amor nos tem concedido o Pai, que fôssemos chamados filhos de Deus". A palavra traduzida como "quão grande" (potapen) significa literalmente "de que país estrangeiro é este?". O amor de Deus é tão radical, imerecido e diferente do amor humano que parece ser de outro mundo. O resultado desse amor não é apenas o perdão, mas a adoção: somos legalmente e intimamente trazidos para a família de Deus. João acrescenta uma consequência dessa nova identidade: "Por isso o mundo não nos conhece; porque não o conhece a ele". O crente se torna um estrangeiro no sistema mundial. Se o mundo rejeitou a Cristo, inevitavelmente não entenderá ou aceitará aqueles que carregam a Sua natureza.`
      },
      {
        verseRef: 'v. 2',
        title: 'A Esperança Futura e a Visão Transformadora',
        description: `A Semelhança com Cristo. João reafirma a nossa segurança presente: "Amados, agora somos filhos de Deus". No entanto, a nossa experiência atual de salvação ainda está incompleta e marcada pelo sofrimento e pela fraqueza: "e ainda não é manifestado o que havemos de ser". O futuro exato é um mistério, mas João nos dá uma certeza gloriosa: "Mas sabemos que, quando ele se manifestar, seremos semelhantes a ele; porque assim como é, o veremos". A glorificação final do crente acontecerá no retorno de Cristo. A "visão beatífica" (ver Cristo em toda a Sua glória) terá um efeito transformador instantâneo e total. Ver a Cristo perfeitamente nos tornará moralmente e fisicamente semelhantes a Ele, livres do pecado para sempre.`
      },
      {
        verseRef: 'v. 3',
        title: 'A Esperança que Purifica',
        description: `A Motivação para a Santidade. A teologia de João nunca é puramente teórica; ela sempre exige uma resposta prática. O versículo 3 conecta o futuro ao presente: "E qualquer que nele tem esta esperança purifica-se a si mesmo, como também ele é puro". A verdadeira esperança do retorno de Cristo não leva à passividade ou à especulação inútil sobre datas, mas à ação moral vigorosa. Se sabemos que o nosso destino eterno é ser como o Cristo puro, a única resposta lógica é começar a buscar essa pureza agora. O crente "purifica-se a si mesmo" (em dependência do Espírito Santo) abandonando o pecado e cultivando a santidade, preparando-se para o encontro com o Noivo.`
      }
    ],
    conclusion: `1 João 3:1-3 nos oferece a perspectiva perfeita para a vida cristã. Devemos olhar para trás, maravilhados com o amor que nos fez filhos de Deus. Devemos olhar para a frente, com a esperança inabalável de que um dia veremos a Cristo e seremos como Ele. E devemos olhar para o presente, usando essa esperança gloriosa como o combustível diário para purificarmos as nossas vidas e refletirmos o caráter do nosso Salvador.`
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
  console.log('Successfully added 6 more new pericopes for Judas and Epistles of John.');
} else {
  console.error('Could not find the end of the pericopes array.');
}
