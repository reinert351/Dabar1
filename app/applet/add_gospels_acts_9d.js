const fs = require('fs');

const newPericopes = [
  {
    id: 'act_9_1_19',
    bookId: 'ACT',
    chapter: 9,
    startVerse: 1,
    endVerse: 19,
    title: 'A Conversão de Saulo',
    theme: 'A Graça Irresistível e a Transformação do Perseguidor',
    introduction: `A conversão de Saulo de Tarso é, sem dúvida, o evento mais importante da história da igreja após o Pentecostes. Saulo era o inimigo número um do cristianismo, respirando ameaças e morte contra os discípulos. A sua conversão na estrada de Damasco não foi o resultado de uma busca espiritual, mas de uma intervenção soberana, violenta e graciosa do Cristo ressurreto. O pior perseguidor da igreja torna-se o seu maior apóstolo.`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Luz do Céu e o Confronto Pessoal',
        description: `Por Que Me Persegues? Saulo viajava para Damasco com cartas de autorização para prender os cristãos (v. 1-2). De repente, uma luz do céu o cerca, e ele cai por terra (v. 3-4). Ele ouve uma voz: "Saulo, Saulo, por que me persegues?". Saulo pergunta: "Quem és, Senhor?". A resposta destrói toda a sua teologia farisaica (v. 5): "Eu sou Jesus, a quem tu persegues". Jesus identifica-se tão intimamente com a Sua igreja que perseguir os cristãos é perseguir o próprio Cristo. A graça o derrubou do seu cavalo de orgulho religioso.`
      },
      {
        verseRef: 'v. 6-9',
        title: 'A Cegueira Física e a Submissão Total',
        description: `O Que Queres Que Eu Faça? Tremendo e atônito, o homem que antes dava ordens de morte agora se submete (v. 6): "Senhor, que queres que eu faça?". Jesus manda-o entrar na cidade e esperar. Saulo levanta-se, mas está cego (v. 8). Ele, que achava que via a verdade tão claramente, é levado pela mão a Damasco. Por três dias ele não vê, não come e não bebe (v. 9). Este foi o seu período de desconstrução total, onde a sua justiça própria morreu para que a graça pudesse nascer.`
      },
      {
        verseRef: 'v. 10-19',
        title: 'O Instrumento Escolhido e a Restauração',
        description: `Irmão Saulo. O Senhor aparece a Ananias e manda-o ir até Saulo (v. 10-11). Ananias hesita, conhecendo a fama do perseguidor (v. 13-14). Deus revela o Seu propósito soberano (v. 15): "Vai, porque este é para mim um vaso escolhido, para levar o meu nome diante dos gentios, e dos reis e dos filhos de Israel". Ananias obedece, entra na casa, impõe as mãos sobre ele e o chama de "Irmão Saulo" (v. 17). Imediatamente, caem-lhe dos olhos como que escamas, ele recupera a visão, é cheio do Espírito Santo e é batizado (v. 18).`
      }
    ],
    conclusion: `Atos 9:1-19 é a prova definitiva de que ninguém está fora do alcance da graça de Deus. Se o Cristo ressurreto pôde salvar Saulo de Tarso no auge do seu ódio, Ele pode salvar qualquer pessoa. A conversão de Saulo nos ensina que a salvação é uma obra soberana de Deus que quebra o nosso orgulho, abre os nossos olhos espirituais e nos transforma de inimigos em instrumentos escolhidos para a Sua glória.`
  },
  {
    id: 'act_10_34_48',
    bookId: 'ACT',
    chapter: 10,
    startVerse: 34,
    endVerse: 48,
    title: 'Pedro na Casa de Cornélio',
    theme: 'O Pentecostes dos Gentios e a Quebra de Barreiras',
    introduction: `A salvação de Cornélio, um centurião romano, marca um ponto de virada monumental na história da redenção. Até este momento, a igreja era quase exclusivamente judaica. Deus teve que dar uma visão a Pedro (o lençol com animais impuros) para quebrar o seu preconceito racial e religioso. Quando Pedro prega o evangelho na casa de Cornélio, o Espírito Santo cai sobre os gentios exatamente como caiu sobre os judeus no Pentecostes, provando definitivamente que a graça de Deus não tem fronteiras.`,
    points: [
      {
        verseRef: 'v. 34-38',
        title: 'A Imparcialidade de Deus e a Mensagem de Paz',
        description: `Deus Não Faz Acepção de Pessoas. Pedro começa o seu sermão com uma confissão da sua própria mudança de paradigma (v. 34-35): "Reconheço por verdade que Deus não faz acepção de pessoas; mas que lhe é agradável aquele que, em qualquer nação, o teme e faz o que é justo". Ele então resume o ministério de Jesus (v. 38): como Deus O ungiu com o Espírito Santo e com poder, e como Ele andou fazendo o bem e curando os oprimidos do diabo. O evangelho é a mensagem de paz por Jesus Cristo, que é o "Senhor de todos" (v. 36).`
      },
      {
        verseRef: 'v. 39-43',
        title: 'A Morte, a Ressurreição e a Remissão dos Pecados',
        description: `O Testemunho Apostólico. Pedro não prega moralidade; ele prega a cruz e o túmulo vazio. Ele testemunha que os judeus O mataram, pendurando-O num madeiro (v. 39), mas Deus O ressuscitou ao terceiro dia (v. 40). Jesus mandou que eles pregassem que Ele é o Juiz dos vivos e dos mortos (v. 42). O clímax do sermão é a oferta da graça (v. 43): "A este dão testemunho todos os profetas, de que todos os que nele crêem receberão o perdão dos pecados pelo seu nome". A salvação é pela fé, não pela guarda da lei judaica.`
      },
      {
        verseRef: 'v. 44-48',
        title: 'O Derramamento do Espírito e o Batismo',
        description: `O Selo Divino da Aprovação. Enquanto Pedro ainda falava, Deus interrompe o sermão (v. 44): "caiu o Espírito Santo sobre todos os que ouviam a palavra". Os crentes judeus que acompanhavam Pedro ficaram pasmados (v. 45), porque o dom do Espírito foi derramado sobre os gentios; eles os ouviam falar em línguas e magnificar a Deus (v. 46). Deus deu aos gentios o mesmo sinal de Atos 2. Diante dessa evidência irrefutável da aceitação divina, Pedro ordena que eles sejam batizados nas águas em nome do Senhor (v. 47-48). A barreira entre judeus e gentios foi destruída para sempre.`
      }
    ],
    conclusion: `Atos 10:34-48 nos lembra que o evangelho é grande demais para ser contido em uma única cultura, raça ou tradição religiosa. A cruz de Cristo nivelou o terreno, e o Espírito Santo é derramado sobre todos os que creem. A igreja de hoje deve constantemente examinar os seus próprios preconceitos (sejam eles raciais, sociais ou denominacionais) e estar disposta a ir aonde o Espírito mandar, proclamando que Jesus é o Senhor de todos.`
  },
  {
    id: 'act_16_16_34',
    bookId: 'ACT',
    chapter: 16,
    startVerse: 16,
    endVerse: 34,
    title: 'Paulo e Silas na Prisão de Filipos',
    theme: 'O Louvor na Dor e a Salvação do Carcereiro',
    introduction: `A missão de Paulo na Europa começa com grande oposição. Após libertar uma jovem escrava de um espírito de adivinhação, Paulo e Silas são espancados e lançados no cárcere interior em Filipos. A resposta deles ao sofrimento injusto — orar e cantar louvores à meia-noite — desencadeia um terremoto literal e espiritual. Esta passagem demonstra o poder do louvor na adversidade e a simplicidade radical do evangelho da salvação.`,
    points: [
      {
        verseRef: 'v. 16-24',
        title: 'A Libertação da Escrava e a Perseguição Injusta',
        description: `O Preço de Fazer o Bem. Paulo expulsa o espírito de adivinhação da jovem em nome de Jesus (v. 18). Os donos dela, vendo que a sua fonte de lucro havia desaparecido, arrastam Paulo e Silas perante as autoridades (v. 19). Eles são acusados falsamente, açoitados com muitas varas pela multidão enfurecida e lançados no cárcere interior, com os pés presos no tronco (v. 22-24). Fazer a vontade de Deus e libertar os cativos frequentemente atrai a fúria do mundo e do inferno.`
      },
      {
        verseRef: 'v. 25-28',
        title: 'O Louvor à Meia-Noite e o Terremoto',
        description: `A Adoração que Quebra Cadeias. Com as costas sangrando e no escuro, a reação deles é sobrenatural (v. 25): "Perto da meia-noite, Paulo e Silas oravam e cantavam hinos a Deus, e os outros presos os escutavam". O louvor deles não dependia das circunstâncias. De repente, um grande terremoto abala os alicerces da prisão, todas as portas se abrem e as prisões de todos se soltam (v. 26). O carcereiro acorda, vê as portas abertas e, pensando que os presos haviam fugido, puxa a espada para se matar (v. 27). Paulo grita (v. 28): "Não te faças nenhum mal, que todos aqui estamos".`
      },
      {
        verseRef: 'v. 29-34',
        title: 'A Pergunta Desesperada e a Salvação da Família',
        description: `Crê no Senhor Jesus. O carcereiro, trêmulo, prostra-se diante deles e faz a pergunta mais importante da vida (v. 30): "Senhores, que é necessário que eu faça para me salvar?". A resposta de Paulo é o resumo do evangelho (v. 31): "Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa". Eles pregam a Palavra a ele e à sua família (v. 32). Naquela mesma hora da noite, o carcereiro lava as feridas deles (fruto do arrependimento) e é batizado com todos os seus (v. 33). A noite que começou com açoites termina com um banquete de alegria na casa do carcereiro (v. 34).`
      }
    ],
    conclusion: `Atos 16:16-34 nos ensina que o nosso testemunho brilha mais forte na escuridão. Quando escolhemos adorar a Deus no meio da dor e da injustiça, o mundo (os outros presos e o carcereiro) presta atenção. O louvor tem o poder de abalar os alicerces das nossas prisões. E, acima de tudo, a passagem nos lembra que a salvação não é um processo complexo de obras, mas uma simples e profunda confiança no Senhor Jesus Cristo.`
  },
  {
    id: 'act_17_16_34',
    bookId: 'ACT',
    chapter: 17,
    startVerse: 16,
    endVerse: 34,
    title: 'Paulo em Atenas (O Areópago)',
    theme: 'A Apologética Cristã e o Deus Desconhecido',
    introduction: `Enquanto esperava por Silas e Timóteo em Atenas, o centro intelectual e filosófico do mundo antigo, o espírito de Paulo se revolta ao ver a cidade cheia de ídolos. Ele é levado ao Areópago para explicar a sua "nova doutrina" aos filósofos epicureus e estoicos. O sermão de Paulo é uma obra-prima da apologética cristã: ele usa a cultura deles como ponto de contato para desconstruir a idolatria e apresentar o Deus Criador, que agora exige arrependimento diante do julgamento iminente.`,
    points: [
      {
        verseRef: 'v. 16-23',
        title: 'A Provocação da Idolatria e o Ponto de Contato',
        description: `O Deus Desconhecido. O espírito de Paulo se comovia (paroxyneto - irritação profunda) com a idolatria (v. 16). Ele começa a pregar na sinagoga e na praça. Os filósofos o chamam de "paroleiro" e o levam ao Areópago (v. 18-19). Paulo começa o seu discurso com tato, elogiando a religiosidade deles (v. 22). Ele usa um altar que encontrou na cidade como ponte para o evangelho (v. 23): "Ao Deus Desconhecido. Esse, pois, que vós honrais, não o conhecendo, é o que eu vos anuncio". Ele parte do que eles sabem para revelar o que eles ignoram.`
      },
      {
        verseRef: 'v. 24-29',
        title: 'O Deus Criador e a Futilidade dos Ídolos',
        description: `O Senhor do Céu e da Terra. Paulo destrói a visão de mundo pagã. Ele declara que Deus é o Criador de tudo e não habita em templos feitos por mãos humanas (v. 24). Ele não precisa de nada dos homens, pois Ele mesmo dá a todos a vida e a respiração (v. 25). Ele é o Soberano que determina os tempos e as fronteiras das nações (v. 26). O propósito da humanidade é buscar a Deus, que não está longe de nós (v. 27). Citando até mesmo poetas gregos (v. 28), Paulo conclui que, sendo nós geração de Deus, é absurdo pensar que a Divindade seja semelhante ao ouro, prata ou pedra esculpida (v. 29).`
      },
      {
        verseRef: 'v. 30-34',
        title: 'O Chamado ao Arrependimento e a Ressurreição',
        description: `O Juiz e a Prova. Paulo transita da teologia natural para o evangelho (v. 30): "Mas Deus, não tendo em conta os tempos da ignorância, anuncia agora a todos os homens, e em todo o lugar, que se arrependam". A ignorância não é mais desculpa. O motivo da urgência é o julgamento final (v. 31): "Porquanto tem determinado um dia em que com justiça há de julgar o mundo, por meio do homem que destinou". A prova absoluta de que Jesus é este Juiz é a ressurreição dentre os mortos. Ao ouvirem falar de ressurreição, alguns zombam, outros procrastinam, mas alguns creem (v. 32-34).`
      }
    ],
    conclusion: `Atos 17:16-34 é o modelo para o engajamento cristão com a cultura secular. Não devemos nos isolar, mas nos envolver com as ideias do nosso tempo, usando-as como pontes para apresentar a verdade. No entanto, a nossa mensagem nunca deve ser diluída. Devemos proclamar a soberania do Deus Criador, a futilidade dos ídolos modernos e a necessidade urgente de arrependimento diante do Cristo ressurreto, que em breve voltará para julgar o mundo.`
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
  console.log('Successfully added 4 new pericopes for Acts (Batch 9d).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
