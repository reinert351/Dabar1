const fs = require('fs');

const newPericopes = [
  {
    id: '1sa_16_1_13',
    bookId: '1SA',
    chapter: 16,
    startVerse: 1,
    endVerse: 13,
    title: 'A Unção de Davi',
    theme: 'O Coração que Deus Vê',
    introduction: `Após a rejeição de Saul como rei devido à sua desobediência, Deus envia o profeta Samuel à casa de Jessé, em Belém, para ungir um novo rei. Samuel vai com medo de Saul, mas obedece. O que acontece na casa de Jessé é uma lição profunda sobre como os critérios de Deus para a liderança são radicalmente diferentes dos critérios humanos. A escolha do filho mais novo, um pastor de ovelhas esquecido no campo, revela que Deus não procura aparência ou status, mas um coração preparado.`,
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'O Luto do Profeta e a Ilusão da Aparência',
        description: `Certamente Está Perante o Senhor o Seu Ungido. Samuel ainda chorava por Saul quando Deus o repreende (v. 1): "Até quando terás dó de Saul, havendo-o eu rejeitado...?". Deus o envia a Jessé. Quando os filhos de Jessé se apresentam, Samuel vê Eliabe, o mais velho, alto e de boa aparência (como Saul era), e imediatamente conclui (v. 6): "Certamente está perante o Senhor o seu ungido". Até mesmo o grande profeta Samuel foi enganado pela aparência externa, julgando a capacidade de liderança pela estatura física.`
      },
      {
        verseRef: 'v. 7',
        title: 'O Critério Divino: O Coração',
        description: `O Senhor Olha para o Coração. Deus corrige a visão do profeta com um dos princípios mais importantes da Bíblia (v. 7): "Não atentes para a sua aparência, nem para a grandeza da sua estatura, porque o tenho rejeitado; porque o Senhor não vê como vê o homem, pois o homem vê o que está diante dos olhos, porém o Senhor olha para o coração". Deus rejeitou todos os sete filhos mais velhos de Jessé (v. 10). A qualificação para o serviço divino não é o currículo visível, mas o caráter invisível.`
      },
      {
        verseRef: 'v. 11-13',
        title: 'O Escolhido Esquecido e a Unção do Espírito',
        description: `Levanta-te, e Unge-o. Samuel pergunta se acabaram os filhos. Jessé admite que falta o menor (Davi), que estava apascentando as ovelhas (v. 11). Ele era tão improvável que nem foi convidado para o sacrifício. Quando Davi chega, Deus diz a Samuel (v. 12): "Levanta-te, e unge-o, porque é este mesmo". Samuel unge Davi no meio dos seus irmãos (v. 13), "e desde aquele dia em diante o Espírito do Senhor se apoderou de Davi". A unção de Deus não apenas confirma a escolha, mas capacita o escolhido para a missão.`
      }
    ],
    conclusion: `1 Samuel 16:1-13 nos liberta da tirania da aparência e do status. O mundo (e muitas vezes a igreja) escolhe líderes baseados no carisma, na eloquência ou na "grandeza da estatura". Mas Deus está procurando homens e mulheres que, como Davi, estão servindo fielmente no anonimato (apascentando ovelhas), com corações voltados para Ele. Você pode ser esquecido ou subestimado pela sua própria família, mas se o seu coração for reto diante de Deus, Ele saberá onde encontrá-lo e como ungi-lo para o Seu propósito.`
  },
  {
    id: '2sa_11_1_5',
    bookId: '2SA',
    chapter: 11,
    startVerse: 1,
    endVerse: 5,
    title: 'O Pecado de Davi',
    theme: 'A Ociosidade, a Tentação e a Queda',
    introduction: `Davi era o homem segundo o coração de Deus, o maior rei de Israel, um guerreiro invencível e um adorador apaixonado. No entanto, o capítulo 11 de 2 Samuel narra a sua queda moral devastadora. A história do seu adultério com Bate-Seba e o subsequente assassinato do marido dela (Urias) não é registrada para difamar Davi, mas como um aviso solene de que ninguém, por mais espiritual ou experiente que seja, está imune à tentação. A queda não começou no telhado, mas com uma série de pequenas decisões erradas.`,
    points: [
      {
        verseRef: 'v. 1',
        title: 'A Ociosidade e o Lugar Errado',
        description: `Davi Ficou em Jerusalém. O texto começa apontando a raiz do problema (v. 1): "E aconteceu que, tendo decorrido um ano, no tempo em que os reis saem para a guerra... Davi ficou em Jerusalém". Davi deveria estar no campo de batalha liderando o seu exército, mas escolheu o conforto do palácio. A ociosidade e o abandono do dever criaram o ambiente perfeito para a tentação. Quando não estamos ocupados com o propósito de Deus, tornamo-nos alvos fáceis para as armadilhas do inimigo.`
      },
      {
        verseRef: 'v. 2',
        title: 'O Olhar Demorado e a Cobiça',
        description: `Viu Uma Mulher que se Estava Lavando. Davi levanta-se da cama à tarde (sinal de preguiça) e vai passear no terraço (v. 2). Dali, ele vê uma mulher muito formosa tomando banho. A tentação visual não era o pecado; o pecado ocorreu quando Davi não desviou o olhar. Ele permitiu que a visão se transformasse em cobiça. Como Jesus ensinou mais tarde, o adultério não começa na cama, mas no coração, através do olhar impuro (Mateus 5:28).`
      },
      {
        verseRef: 'v. 3-5',
        title: 'A Investigação, a Ação e a Consequência',
        description: `Mandou Davi Mensageiros, e a Trouxe. Davi não parou na cobiça; ele agiu. Ele mandou indagar quem era a mulher (v. 3) e descobriu que era Bate-Seba, esposa de Urias, um dos seus soldados mais fiéis que estava na guerra. Ignorando todos os limites morais e usando o seu poder real, Davi mandou trazê-la e deitou-se com ela (v. 4). O pecado sempre promete prazer secreto, mas entrega consequências públicas. O versículo 5 traz a notícia que mudaria a vida de Davi para sempre: "E a mulher concebeu; e mandou dizer a Davi: Estou pejada".`
      }
    ],
    conclusion: `2 Samuel 11:1-5 é um dos textos mais tristes da Bíblia. Ele nos ensina que o pecado é uma ladeira escorregadia: começa com a ociosidade, passa para o olhar demorado, transforma-se em cobiça, resulta em ação e gera consequências trágicas. Se o "homem segundo o coração de Deus" pôde cair tão profundamente, nós devemos "vigiar e orar, para não entrarmos em tentação" (Mateus 26:41). A melhor maneira de evitar o pecado no telhado é estar no campo de batalha, cumprindo o chamado que Deus nos deu.`
  },
  {
    id: '2sa_12_1_7',
    bookId: '2SA',
    chapter: 12,
    startVerse: 1,
    endVerse: 7,
    title: 'A Repreensão de Natã',
    theme: 'O Confronto do Pecado e a Voz Profética',
    introduction: `Após o adultério com Bate-Seba, Davi tentou encobrir o seu pecado mandando matar Urias, o marido dela. Durante quase um ano, Davi viveu em hipocrisia, com o pecado não confessado corroendo os seus ossos (Salmo 32). Deus, na Sua misericórdia disciplinadora, envia o profeta Natã para confrontar o rei. A abordagem de Natã é uma obra-prima de sabedoria pastoral e coragem profética, usando uma parábola para furar a armadura de autojustificação de Davi e levá-lo ao arrependimento.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Parábola da Cordeirinha e a Injustiça',
        description: `Havia Numa Cidade Dois Homens. Natã não acusa Davi diretamente no início. Ele conta uma história (v. 1-4) sobre um homem rico, que tinha muitas ovelhas, e um homem pobre, que tinha apenas uma pequena cordeirinha, criada como uma filha. Quando o rico recebe uma visita, em vez de pegar uma das suas ovelhas, ele rouba e mata a cordeirinha do pobre para fazer um banquete. A parábola foi desenhada para despertar o senso de justiça de Davi, que antes de ser rei, era um pastor de ovelhas que protegia o seu rebanho.`
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Ira de Davi e a Auto-Condenação',
        description: `Digno de Morte é o Homem que Fez Isso. A parábola funciona perfeitamente. O furor de Davi se acende contra o homem rico (v. 5). Ele pronuncia a sentença como juiz supremo de Israel: "Vive o Senhor, que digno de morte é o homem que fez isso". Ele ainda exige a restituição quadruplicada (v. 6), conforme a Lei de Moisés. Davi estava cego para o seu próprio pecado, mas era implacável em julgar o pecado dos outros. Ele pronunciou a sua própria condenação sem saber.`
      },
      {
        verseRef: 'v. 7',
        title: 'O Confronto Direto e a Palavra de Deus',
        description: `Tu És Este Homem. O clímax do encontro acontece no versículo 7. Natã olha nos olhos do rei mais poderoso da região e diz: "Tu és este homem". A máscara de Davi cai. Natã passa a falar em nome de Deus: "Assim diz o Senhor Deus de Israel: Eu te ungi rei sobre Israel, e eu te livrei das mãos de Saul". Deus lembra a Davi de toda a graça que lhe havia sido dada (v. 8) e o acusa de desprezar a palavra do Senhor (v. 9). O confronto profético não é para destruir, mas para trazer a verdade à luz.`
      }
    ],
    conclusion: `2 Samuel 12:1-7 nos mostra o perigo do autoengano. É assustadoramente fácil sermos rigorosos com os pecados dos outros enquanto somos tolerantes com os nossos. Todos nós precisamos de um "Natã" nas nossas vidas: amigos, pastores ou a própria Palavra de Deus que tenham a coragem de nos olhar nos olhos e dizer: "Tu és este homem". O confronto dói, mas é a única porta para o arrependimento e a restauração. Quando Davi foi confrontado, ele não matou o profeta; ele confessou: "Pequei contra o Senhor" (v. 13), e encontrou perdão.`
  },
  {
    id: '1ki_3_5_14',
    bookId: '1KI',
    chapter: 3,
    startVerse: 5,
    endVerse: 14,
    title: 'O Pedido de Salomão',
    theme: 'As Prioridades Corretas na Oração',
    introduction: `Salomão, ainda jovem, assume o trono de Israel após a morte do seu pai, Davi. Ele sente o peso esmagador da responsabilidade de governar uma nação tão grande. Em Gibeão, Deus aparece a Salomão em um sonho e lhe faz uma oferta que é o teste definitivo do coração humano: "Pede o que queres que eu te dê". A resposta de Salomão revela as suas prioridades espirituais e resulta em uma das maiores bênçãos registradas na Bíblia, ensinando-nos o que Deus realmente valoriza nas nossas orações.`,
    points: [
      {
        verseRef: 'v. 5-8',
        title: 'A Oferta Divina e a Humildade do Rei',
        description: `Sou Apenas um Menino Pequeno. Diante do "cheque em branco" de Deus (v. 5), Salomão começa reconhecendo a graça de Deus para com o seu pai, Davi (v. 6). Em seguida, ele confessa a sua própria inadequação (v. 7): "E eu sou apenas um menino pequeno; não sei como sair, nem como entrar". Ele reconhece a grandeza da tarefa (v. 8): governar um povo tão numeroso que não se pode contar. A verdadeira sabedoria sempre começa com a humildade e o reconhecimento da nossa total dependência de Deus.`
      },
      {
        verseRef: 'v. 9',
        title: 'O Pedido Específico: Um Coração Compreensivo',
        description: `Dá ao Teu Servo um Coração Compreensivo. Salomão não pede coisas para si mesmo. O seu pedido é focado no serviço aos outros (v. 9): "A teu servo, pois, dá um coração compreensivo para julgar a teu povo, para que prudentemente discirna entre o bem e o mal; porque quem poderia julgar a este teu tão grande povo?". Ele pede sabedoria prática (discernimento moral e justiça) para cumprir o chamado que Deus lhe deu. Ele deseja ser um instrumento útil nas mãos de Deus para abençoar a nação.`
      },
      {
        verseRef: 'v. 10-14',
        title: 'A Aprovação de Deus e a Bênção Multiplicada',
        description: `Esta Palavra Pareceu Boa aos Olhos do Senhor. Deus fica extremamente satisfeito com o pedido (v. 10). Ele elogia Salomão por não ter pedido longevidade, riquezas ou a morte dos seus inimigos (v. 11). Deus concede o pedido principal: um coração sábio e entendido como ninguém jamais teve (v. 12). Mas a graça de Deus vai além (v. 13): "E também até o que não pediste te dei, assim riquezas como glória". Quando buscamos primeiro o Reino de Deus e a Sua justiça, as outras coisas nos são acrescentadas (Mateus 6:33).`
      }
    ],
    conclusion: `1 Reis 3:5-14 é um espelho para a nossa vida de oração. Se Deus nos aparecesse hoje e dissesse: "Pede o que queres", o que pediríamos? A maioria de nós pediria saúde, dinheiro, sucesso ou a resolução de um problema imediato. A oração de Salomão nos ensina que o maior dom que podemos pedir a Deus não é a mudança das nossas circunstâncias, mas a sabedoria para glorificá-Lo no meio delas. Quando as nossas orações são motivadas pelo desejo de servir a Deus e ao próximo, o coração de Deus se alegra.`
  },
  {
    id: '2ki_6_8_17',
    bookId: '2KI',
    chapter: 6,
    startVerse: 8,
    endVerse: 17,
    title: 'Os Carros de Fogo de Eliseu',
    theme: 'A Visão Espiritual e a Proteção Invisível',
    introduction: `O rei da Síria estava em guerra contra Israel, mas todos os seus planos de emboscada eram frustrados porque o profeta Eliseu, por revelação divina, avisava o rei de Israel. Furioso, o rei sírio envia um grande exército com cavalos e carros para cercar a cidade de Dotã e capturar Eliseu. Quando o servo de Eliseu acorda e vê a cidade cercada, ele entra em pânico. A resposta de Eliseu e a oração que se segue revelam a realidade invisível do mundo espiritual e a proteção absoluta que cerca o povo de Deus.`,
    points: [
      {
        verseRef: 'v. 8-14',
        title: 'A Fúria do Inimigo e o Cerco Físico',
        description: `Cercaram a Cidade. O rei da Síria descobre que o seu problema não é um espião, mas o profeta Eliseu (v. 11-12). Ele decide usar força militar esmagadora contra um único homem de Deus. Ele envia cavalos, carros e um grande exército de noite, e eles cercam a cidade de Dotã (v. 14). O mundo frequentemente tenta usar o poder físico, a intimidação e a força bruta para silenciar a voz profética e destruir a obra de Deus.`
      },
      {
        verseRef: 'v. 15-16',
        title: 'O Pânico do Servo e a Paz do Profeta',
        description: `Mais São os Que Estão Conosco. O moço de Eliseu levanta-se cedo, vê o exército inimigo e entra em desespero (v. 15): "Ai, meu senhor! Que faremos?". Ele estava olhando apenas com os olhos físicos, vendo a impossibilidade da situação. Eliseu, porém, está perfeitamente calmo. Ele responde com uma das declarações mais encorajadoras da Bíblia (v. 16): "Não temas; porque mais são os que estão conosco do que os que estão com eles". Eliseu não estava negando a realidade do exército sírio; ele estava vendo uma realidade maior.`
      },
      {
        verseRef: 'v. 17',
        title: 'A Oração por Visão e o Exército Celestial',
        description: `Abre os Seus Olhos para Que Veja. Eliseu não ora pedindo que Deus envie um exército (o exército já estava lá); ele ora pedindo que Deus abra os olhos do seu servo (v. 17): "Senhor, peço-te que lhe abras os olhos, para que veja". O Senhor abre os olhos do moço, "e eis que o monte estava cheio de cavalos e carros de fogo, em redor de Eliseu". O exército sírio estava cercando Eliseu, mas o exército de fogo de Deus estava cercando o exército sírio. A visão espiritual muda o medo para a fé.`
      }
    ],
    conclusion: `2 Reis 6:8-17 nos ensina que a realidade espiritual é mais sólida e poderosa do que a realidade física que podemos ver e tocar. Quando enfrentamos crises, doenças, oposição ou ataques espirituais, a nossa tendência é focar no "exército sírio" que nos cerca, e o resultado é o pânico. A nossa maior necessidade não é que Deus mude a nossa situação imediatamente, mas que Ele abra os nossos olhos espirituais para vermos que "mais são os que estão conosco". Se Deus é por nós, quem será contra nós? (Romanos 8:31).`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 15c).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
