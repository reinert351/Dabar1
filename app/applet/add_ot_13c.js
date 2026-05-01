const fs = require('fs');

const newPericopes = [
  {
    id: 'oba_1_10_15',
    bookId: 'OBA',
    chapter: 1,
    startVerse: 10,
    endVerse: 15,
    title: 'O Julgamento de Edom',
    theme: 'A Soberba, a Traição e a Justiça Retributiva',
    introduction: `O livro de Obadias é o mais curto do Antigo Testamento, contendo apenas um capítulo. É uma profecia de julgamento contra a nação de Edom (descendentes de Esaú, irmão de Jacó). Quando Jerusalém foi invadida e destruída pelos babilônios, os edomitas não apenas ficaram parados assistindo, mas se alegraram com a queda de Judá, saquearam a cidade e entregaram os fugitivos aos inimigos. Obadias declara que o orgulho de Edom os enganou e que Deus trará justiça retributiva perfeita sobre eles.`,
    points: [
      {
        verseRef: 'v. 10-11',
        title: 'A Violência contra o Irmão e a Omissão Culpável',
        description: `No Dia em que Estiveste em Frente Dele. O julgamento de Edom é baseado no seu pecado contra a família (v. 10): "Por causa da violência feita a teu irmão Jacó, cobrir-te-á a confusão, e serás exterminado para sempre". O pecado deles começou com a omissão (v. 11): "No dia em que estiveste em frente dele, no dia em que os forasteiros levavam cativo o seu exército... tu mesmo eras um deles". Ficar neutro quando o inocente está sendo oprimido é o mesmo que participar da opressão. A inação diante da injustiça é cumplicidade.`
      },
      {
        verseRef: 'v. 12-14',
        title: 'A Alegria Maligna e a Participação no Saque',
        description: `Não Devias Ter Olhado com Prazer. Deus lista os pecados de Edom em uma série de repreensões (v. 12-14). Eles não deveriam ter olhado com prazer para o dia da calamidade do seu irmão, nem se alegrado com a sua ruína, nem falado com arrogância no dia da angústia. Pior ainda, eles entraram pelas portas da cidade para saquear os bens de Judá (v. 13) e pararam nas encruzilhadas para matar os que escapavam e entregar os sobreviventes aos babilônios (v. 14). A inveja antiga de Esaú transformou-se em crueldade assassina.`
      },
      {
        verseRef: 'v. 15',
        title: 'O Dia do Senhor e a Lei da Semeadura',
        description: `Como Tu Fizeste, Assim se Fará Contigo. A profecia culmina com a declaração da justiça divina (v. 15): "Porque o dia do Senhor está perto, sobre todas as nações; como tu fizeste, assim se fará contigo; a tua recompensa voltará sobre a tua cabeça". Esta é a lei da semeadura e da colheita (lex talionis). Edom pensava que estava seguro nas suas fortalezas nas rochas (v. 3), mas Deus os faria descer. A justiça de Deus é inevitável e perfeitamente proporcional.`
      }
    ],
    conclusion: `Obadias 1:10-15 é um aviso severo contra o orgulho e a falta de compaixão (Schadenfreude - alegrar-se com a desgraça alheia). Deus leva para o lado pessoal a forma como tratamos os nossos "irmãos", especialmente quando eles estão vulneráveis. A história de Edom nos lembra que a justiça de Deus não dorme. Aqueles que se exaltam e oprimem os outros serão humilhados, mas o reino e a vitória final pertencerão ao Senhor (v. 21).`
  },
  {
    id: 'jon_2_1_9',
    bookId: 'JON',
    chapter: 2,
    startVerse: 1,
    endVerse: 9,
    title: 'A Oração no Ventre do Peixe',
    theme: 'O Desespero, a Disciplina e a Salvação do Senhor',
    introduction: `Jonas fugiu do chamado de Deus para pregar em Nínive, embarcando em um navio na direção oposta. Deus enviou uma grande tempestade, e Jonas foi lançado ao mar, onde foi engolido por um grande peixe preparado pelo Senhor. O capítulo 2 é a oração de Jonas de dentro do ventre do peixe. Não é uma oração de arrependimento (ele não menciona Nínive ou a sua desobediência), mas um salmo de ação de graças por ter sido salvo do afogamento. É um retrato de como Deus usa a disciplina extrema para nos trazer de volta à sanidade espiritual.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Clamor do Abismo e a Disciplina Reconhecida',
        description: `Do Ventre do Inferno Gritei. Jonas ora a Deus do ventre do peixe (v. 1). Ele descreve a sua experiência de quase morte (v. 2): "Na minha angústia clamei ao Senhor, e ele me respondeu; do ventre do inferno (Seol) gritei, e tu ouviste a minha voz". Jonas reconhece que a tempestade não foi um acidente da natureza, mas a mão disciplinadora de Deus (v. 3): "Porque tu me lançaste no profundo, no coração dos mares... todas as tuas ondas e as tuas vagas têm passado por cima de mim". A disciplina de Deus é severa, mas tem o propósito de nos salvar.`
      },
      {
        verseRef: 'v. 4-7',
        title: 'A Quase Morte e o Olhar para o Templo',
        description: `A Minha Alma Desfalecia. Jonas descreve a sensação de se afogar (v. 5-6): as águas o cercaram até a alma, as algas se enrolaram na sua cabeça, ele desceu até os fundamentos dos montes. Ele sentiu-se expulso da presença de Deus (v. 4). Mas no momento de maior desespero, a sua mente volta-se para a graça (v. 7): "Quando desfalecia em mim a minha alma, lembrei-me do Senhor; e entrou a ti a minha oração, no teu santo templo". Mesmo no fundo do oceano, a oração tem acesso direto ao trono de Deus.`
      },
      {
        verseRef: 'v. 8-9',
        title: 'A Falsa Esperança e a Salvação Exclusiva',
        description: `Do Senhor Vem a Salvação. Jonas faz uma observação teológica sobre a idolatria (v. 8): "Os que observam as vaidades vãs deixam a sua própria misericórdia". Confiar em ídolos (ou na própria vontade, como Jonas fez) é abandonar a fonte da graça. Ele conclui com um voto de louvor (v. 9): "Mas eu te oferecerei sacrifício com a voz do agradecimento; o que votei pagarei". A oração termina com a declaração central de toda a Bíblia: "Do Senhor vem a salvação". A salvação é uma obra inteiramente divina, não humana.`
      }
    ],
    conclusion: `Jonas 2:1-9 nos ensina que não há lugar tão profundo ou escuro de onde não possamos clamar a Deus. Às vezes, Deus tem que nos deixar afundar até o fundo do poço (ou do oceano) para que paremos de fugir e nos lembremos dEle. O "grande peixe" não foi um instrumento de destruição, mas o veículo de resgate da graça de Deus. A salvação pertence ao Senhor, e Ele fará o que for necessário para trazer os Seus filhos rebeldes de volta ao propósito dEle.`
  },
  {
    id: 'jon_4_1_11',
    bookId: 'JON',
    chapter: 4,
    startVerse: 1,
    endVerse: 11,
    title: 'A Compaixão de Deus e a Ira do Profeta',
    theme: 'O Coração Estreito do Homem vs. O Coração Largo de Deus',
    introduction: `Jonas finalmente prega em Nínive, e a cidade inteira se arrepende. Deus, na Sua misericórdia, não destrói a cidade. Em vez de celebrar o maior avivamento da história, Jonas fica furioso. O capítulo 4 é um dos finais mais irônicos e reveladores da Bíblia. Ele expõe o preconceito e o nacionalismo tóxico de Jonas, contrastando a mesquinhez do coração do profeta com a compaixão infinita do coração de Deus pelos perdidos.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Ira de Jonas e a Teologia Usada como Arma',
        description: `Eu Sabia que És Deus Misericordioso. O arrependimento de Nínive "desagradou extremamente a Jonas, e ele ficou irado" (v. 1). Ele ora a Deus, justificando a sua fuga original (v. 2): "Não foi isto o que disse... por isso me preveni, fugindo para Társis, pois sabia que és Deus clemente, e misericordioso, e tardio em irar-se, e grande em benignidade, e que te arrependes do mal". Jonas conhecia a teologia da graça (Êxodo 34:6), mas odiava a ideia de que Deus a aplicasse aos seus inimigos. Ele prefere morrer a ver os ninivitas salvos (v. 3). Deus responde com uma pergunta suave (v. 4): "É razoável essa tua ira?".`
      },
      {
        verseRef: 'v. 5-8',
        title: 'A Aboboreira, o Vento e a Lição Objetiva',
        description: `O Conforto Egoísta. Jonas sai da cidade e senta-se sob uma cabana para ver o que aconteceria, ainda esperando que Deus a destruísse (v. 5). Deus prepara uma aboboreira (planta) para dar sombra a Jonas, e ele "se alegrou em extremo" (v. 6). A única vez que Jonas fica feliz no livro é quando o seu conforto pessoal é atendido. No dia seguinte, Deus prepara um verme que fere a planta, e ela seca (v. 7). Deus então envia um vento oriental quente, e Jonas, desmaiando de calor, pede novamente para morrer (v. 8).`
      },
      {
        verseRef: 'v. 9-11',
        title: 'A Pergunta Final e a Compaixão Divina',
        description: `Não Terei Eu Compaixão da Grande Cidade? Deus pergunta novamente (v. 9): "É razoável essa tua ira por causa da aboboreira?". Jonas responde com petulância: "É justo que me ire até a morte". Deus dá o golpe final (v. 10-11): "Tiveste compaixão da aboboreira, na qual não trabalhaste... E não hei de eu ter compaixão da grande cidade de Nínive, em que estão mais de cento e vinte mil homens que não sabem discernir entre a sua mão direita e a sua mão esquerda, e também muitos animais?". Jonas amava mais uma planta (o seu conforto) do que as almas de 120.000 pessoas.`
      }
    ],
    conclusion: `Jonas 4:1-11 termina abruptamente com uma pergunta de Deus, deixando o leitor (e nós) para respondê-la. O livro de Jonas não é apenas sobre um peixe; é sobre o coração de Deus para com as nações e a nossa resistência em amar aqueles que consideramos nossos inimigos. Somos desafiados a examinar os nossos próprios corações: nós nos alegramos com a graça de Deus estendida aos outros, ou somos como Jonas, querendo a misericórdia de Deus apenas para nós mesmos e o Seu julgamento para os nossos inimigos?`
  },
  {
    id: 'mic_6_6_8',
    bookId: 'MIC',
    chapter: 6,
    startVerse: 6,
    endVerse: 8,
    title: 'O Que o Senhor Pede de Ti',
    theme: 'A Essência da Religião Verdadeira',
    introduction: `O profeta Miqueias ministra durante um tempo de corrupção social e religiosa em Judá. O povo acreditava que poderia apaziguar a ira de Deus e comprar o Seu favor através de sacrifícios cada vez mais extravagantes, enquanto continuavam a oprimir os pobres e a praticar a injustiça. Em Miqueias 6, Deus entra em um "processo judicial" contra o Seu povo. A resposta do profeta à pergunta "Como me apresentarei diante do Senhor?" é um dos resumos mais sublimes e concisos da ética bíblica em todo o Antigo Testamento.`,
    points: [
      {
        verseRef: 'v. 6',
        title: 'A Pergunta da Religião Externa e os Holocaustos',
        description: `Com Que Me Apresentarei? O adorador faz uma série de perguntas retóricas, tentando descobrir o preço do favor de Deus (v. 6): "Com que me apresentarei ao Senhor, e me prostrarei diante do Deus altíssimo? Apresentar-me-ei diante dele com holocaustos, com bezerros de um ano?". A mentalidade é transacional: a religião é vista como um suborno. O adorador acha que o problema é a quantidade ou a qualidade do sacrifício animal, ignorando completamente a condição do seu próprio coração e o seu comportamento ético.`
      },
      {
        verseRef: 'v. 7',
        title: 'O Exagero do Sacrifício e a Falsa Expiação',
        description: `Milhares de Carneiros e o Fruto do Ventre. O adorador aumenta a oferta a níveis absurdos (v. 7): "Agradar-se-á o Senhor de milhares de carneiros, ou de dez mil ribeiros de azeite?". Como isso parece não ser suficiente, ele sugere o sacrifício supremo (uma prática pagã abominável a Deus): "Darei o meu primogênito pela minha transgressão, o fruto do meu ventre pelo pecado da minha alma?". A religião falsa sempre exige sacrifícios extremos para tentar aliviar a culpa, mas nunca exige a transformação do caráter.`
      },
      {
        verseRef: 'v. 8',
        title: 'A Resposta Divina: Justiça, Misericórdia e Humildade',
        description: `Ele Te Declarou, ó Homem, o Que é Bom. O profeta corta a lista de ofertas extravagantes e entrega a resposta de Deus (v. 8): "Ele te declarou, ó homem, o que é bom; e que é o que o Senhor pede de ti, senão que pratiques a justiça, e ames a benignidade (misericórdia), e andes humildemente com o teu Deus?". Deus não quer as coisas do homem; Ele quer o próprio homem. A verdadeira religião tem três pilares: 1) Praticar a justiça (ética social correta); 2) Amar a misericórdia (hesed - compaixão e lealdade ao próximo); 3) Andar humildemente com Deus (comunhão íntima e submissão).`
      }
    ],
    conclusion: `Miqueias 6:6-8 destrói a ilusão de que podemos compensar a nossa falta de caráter com ativismo religioso ou ofertas financeiras. Deus não precisa dos nossos "milhares de carneiros". Ele exige o que é mais difícil de dar: uma vida transformada que reflete o Seu próprio caráter de justiça e amor, vivida em dependência humilde dEle. E, como o Novo Testamento revela, a única maneira de vivermos assim é através da graça do sacrifício perfeito de Cristo, que nos capacita a andar humildemente com Deus.`
  },
  {
    id: 'nah_1_2_7',
    bookId: 'NAH',
    chapter: 1,
    startVerse: 2,
    endVerse: 7,
    title: 'A Ira e a Bondade de Deus',
    theme: 'O Julgamento de Nínive e o Refúgio dos Santos',
    introduction: `Mais de um século após o avivamento nos dias de Jonas, a cidade de Nínive (capital do cruel império Assírio) voltou à sua violência e idolatria. O livro de Naum é uma profecia da destruição total de Nínive. O capítulo 1 começa com um poema majestoso que descreve os dois lados do caráter de Deus: a Sua ira vingadora contra os Seus inimigos e a Sua bondade protetora para com aqueles que nEle confiam. É uma teologia profunda sobre como o amor de Deus exige que Ele julgue o mal.`,
    points: [
      {
        verseRef: 'v. 2-3a',
        title: 'O Deus Zeloso e a Vingança Divina',
        description: `O Senhor Toma Vingança. O poema começa com uma declaração assustadora para os ímpios (v. 2): "O Senhor é um Deus zeloso e vingador; o Senhor é vingador e cheio de furor; o Senhor toma vingança contra os seus adversários, e guarda a ira contra os seus inimigos". O zelo de Deus é o Seu amor apaixonado pela Sua própria glória e pelo Seu povo. A Sua vingança não é um ataque de raiva descontrolada, mas a aplicação perfeita da justiça. Ele é "tardio em irar-se, mas grande em poder, e ao culpado não tem por inocente" (v. 3a). A paciência de Deus não significa impunidade.`
      },
      {
        verseRef: 'v. 3b-6',
        title: 'O Poder Cósmico e a Majestade na Tempestade',
        description: `O Seu Caminho é na Tormenta. Naum descreve o poder de Deus sobre a criação (v. 3b-6): "O Senhor tem o seu caminho na tormenta e na tempestade, e as nuvens são o pó dos seus pés". Ele repreende o mar e o faz secar; os montes tremem perante Ele, e a terra se levanta na Sua presença. A pergunta retórica do versículo 6 resume o terror do julgamento: "Quem parará diante do seu furor, e quem subsistirá diante do ardor da sua ira?". A resposta implícita é: Ninguém. O império Assírio, por mais poderoso que fosse, seria esmagado como pó.`
      },
      {
        verseRef: 'v. 7',
        title: 'A Fortaleza na Angústia e o Conhecimento dos Seus',
        description: `O Senhor é Bom. No meio dessa descrição aterrorizante da ira divina, brilha uma das promessas mais doces do Antigo Testamento (v. 7): "O Senhor é bom, ele serve de fortaleza no dia da angústia, e conhece os que confiam nele". O mesmo Deus que é um fogo consumidor para os Seus inimigos é um refúgio seguro para o Seu povo. A Sua bondade não contradiz a Sua ira; a Sua ira contra o mal é a prova da Sua bondade para com os oprimidos. Ele "conhece" (ama, protege, tem intimidade com) aqueles que confiam nEle.`
      }
    ],
    conclusion: `Naum 1:2-7 nos ensina a abraçar a teologia completa de Deus. Um Deus que não se ira contra a injustiça, o abuso e a crueldade não seria um Deus bom. O julgamento de Nínive é uma garantia de que o mal não terá a última palavra na história. Para aqueles que estão em Cristo, a ira de Deus já foi derramada na cruz, e nós podemos nos abrigar na Fortaleza da Sua bondade, sabendo que Ele nos conhece e nos protegerá no dia da angústia.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 13c).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
