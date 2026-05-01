const fs = require('fs');

const newPericopes = [
  {
    id: 'isa_6_1_8',
    bookId: 'ISA',
    chapter: 6,
    startVerse: 1,
    endVerse: 8,
    title: 'A Vocação de Isaías',
    theme: 'A Visão da Santidade, a Purificação e a Missão',
    introduction: `O rei Uzias governou Judá por 52 anos, trazendo estabilidade e prosperidade. Quando ele morreu, a nação entrou em crise e incerteza. Foi exatamente no ano da morte do rei terreno que o profeta Isaías teve uma visão do Rei eterno. O capítulo 6 de Isaías é o relato clássico de um encontro transformador com Deus. A visão da santidade absoluta de Deus produz em Isaías uma profunda convicção de pecado, que leva à purificação divina e culmina em uma resposta voluntária ao chamado missionário.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Visão do Trono e a Santidade de Deus',
        description: `Eu Vi ao Senhor Assentado Sobre um Alto e Sublime Trono. Enquanto o trono de Judá estava vazio, o trono do universo estava ocupado (v. 1). O Senhor estava assentado, governando soberanamente. Acima dEle estavam os serafins ("os ardentes"), anjos de fogo que cobriam os rostos e os pés em reverência (v. 2). Eles clamavam uns aos outros (v. 3): "Santo, Santo, Santo é o Senhor dos Exércitos; toda a terra está cheia da sua glória". A santidade é o único atributo de Deus elevado à terceira potência na Bíblia, indicando perfeição absoluta. O impacto da voz fez tremerem os umbrais do templo (v. 4).`
      },
      {
        verseRef: 'v. 5-7',
        title: 'A Convicção de Pecado e a Purificação do Altar',
        description: `Ai de Mim! Que Vou Perecendo. A luz da santidade de Deus expõe a escuridão do coração humano. Isaías não se compara com os outros homens, mas com Deus, e o resultado é o desespero (v. 5): "Ai de mim! Que vou perecendo; porque eu sou um homem de lábios impuros, e habito no meio de um povo de impuros lábios; porque os meus olhos viram o Rei". Ele confessa o seu pecado. Imediatamente, um serafim voa com uma brasa viva tirada do altar (o lugar do sacrifício) e toca a boca do profeta (v. 6-7), declarando: "a tua iniquidade foi tirada, e expiado o teu pecado". A graça de Deus purifica o que a Sua santidade condena.`
      },
      {
        verseRef: 'v. 8',
        title: 'A Pergunta Divina e a Resposta Voluntária',
        description: `Eis-me Aqui, Envia-me a Mim. Após ser perdoado e purificado, Isaías ouve a voz do Senhor (v. 8): "A quem enviarei, e quem há de ir por nós?". Deus não força Isaías; Ele faz um convite. A resposta de Isaías é imediata e incondicional: "Então disse eu: Eis-me aqui, envia-me a mim". Ele não pergunta para onde vai, qual é a mensagem ou qual será o salário. A gratidão pela purificação gera uma disposição total para servir.`
      }
    ],
    conclusion: `Isaías 6:1-8 nos ensina o ciclo do verdadeiro avivamento e do chamado ministerial. Tudo começa com uma visão correta de quem Deus é (Santo, Santo, Santo). Essa visão nos leva a uma visão correta de quem nós somos (pecadores necessitados de graça). Quando confessamos o nosso pecado, experimentamos o toque purificador do altar (a cruz de Cristo). E é apenas um coração purificado e grato que pode ouvir a voz de Deus e responder com alegria: "Eis-me aqui, envia-me a mim".`
  },
  {
    id: 'isa_53_1_12',
    bookId: 'ISA',
    chapter: 53,
    startVerse: 1,
    endVerse: 12,
    title: 'O Servo Sofredor',
    theme: 'A Expiação Substitutiva e a Exaltação do Messias',
    introduction: `Isaías 53 é o ápice da profecia messiânica no Antigo Testamento, escrito 700 anos antes do nascimento de Jesus. É tão preciso na descrição da paixão, morte e ressurreição de Cristo que parece ter sido escrito por uma testemunha ocular ao pé da cruz. O capítulo descreve o "Servo do Senhor" que é rejeitado pelos homens, mas que voluntariamente toma sobre Si os pecados do mundo, sofrendo a ira de Deus em nosso lugar para nos trazer a paz e a cura, sendo finalmente exaltado pela Sua obra perfeita.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Rejeição e o Desprezo do Homem de Dores',
        description: `Não Tinha Parecer Nem Formosura. O Messias não viria com a pompa que o mundo esperava. Ele cresceria como uma raiz em terra seca (v. 2), sem beleza física ou majestade que atraísse as multidões. A resposta da humanidade a Ele seria a rejeição (v. 3): "Era desprezado, e o mais rejeitado entre os homens, homem de dores, e experimentado nos trabalhos... era desprezado, e não fizemos dele caso algum". O mundo não reconheceu o seu Salvador porque Ele não se encaixava nos padrões humanos de sucesso e poder.`
      },
      {
        verseRef: 'v. 4-6',
        title: 'A Substituição Penal e a Cura pelas Feridas',
        description: `O Senhor Fez Cair Sobre Ele a Iniquidade de Nós Todos. O coração do evangelho bate nestes versículos. O sofrimento dEle não foi por Seus próprios pecados, mas pelos nossos (v. 4): "Verdadeiramente ele tomou sobre si as nossas enfermidades, e as nossas dores levou sobre si". O versículo 5 declara a substituição penal: "Mas ele foi ferido por causa das nossas transgressões, e moído por causa das nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados". Nós éramos as ovelhas desgarradas (v. 6), mas Deus colocou a nossa culpa sobre Ele.`
      },
      {
        verseRef: 'v. 7-12',
        title: 'A Submissão Silenciosa, a Morte e a Vitória',
        description: `Como Um Cordeiro Foi Levado ao Matadouro. O Servo sofreu injustiça sem abrir a boca para se defender (v. 7). Ele foi morto e sepultado com os ricos (José de Arimateia), embora nunca tivesse cometido violência ou engano (v. 9). O versículo 10 revela o mistério da cruz: "Todavia, ao Senhor agradou moê-lo". A cruz não foi um acidente, mas o plano soberano do Pai para fazer da alma dEle uma oferta pelo pecado. O capítulo termina com a promessa da ressurreição e exaltação (v. 11-12): Ele verá o fruto do Seu trabalho, justificará a muitos e dividirá os despojos com os fortes, porque derramou a Sua alma na morte.`
      }
    ],
    conclusion: `Isaías 53 é o espelho onde vemos a feiura do nosso pecado e a beleza estonteante do amor de Cristo. Cada ferida, cada gota de sangue e cada humilhação que Ele sofreu era o que nós merecíamos. Ele foi moído para que nós fôssemos curados. Ele foi rejeitado para que nós fôssemos aceitos. A única resposta adequada a este amor substitutivo é a rendição total. Como ovelhas que antes andavam perdidas, nós agora nos curvamos diante do Servo Sofredor que se tornou o Rei dos Reis.`
  },
  {
    id: 'jer_1_4_10',
    bookId: 'JER',
    chapter: 1,
    startVerse: 4,
    endVerse: 10,
    title: 'O Chamado de Jeremias',
    theme: 'A Escolha Soberana e a Capacitação Divina',
    introduction: `Jeremias foi chamado para ser profeta em um dos períodos mais difíceis da história de Judá: os anos finais antes da destruição de Jerusalém pela Babilônia. A sua mensagem seria de julgamento, e a resposta do povo seria de rejeição e perseguição (por isso ele é conhecido como o "profeta chorão"). O capítulo 1 descreve a sua vocação. Jeremias tenta usar a sua juventude e inexperiência como desculpa, mas Deus revela que o chamado profético não depende da capacidade humana, mas da escolha soberana e da autoridade da Palavra de Deus.`,
    points: [
      {
        verseRef: 'v. 4-5',
        title: 'A Escolha Antes do Nascimento e a Predestinação',
        description: `Antes Que Te Formasse no Ventre Te Conheci. A palavra do Senhor vem a Jeremias com uma revelação impressionante sobre a soberania de Deus (v. 5): "Antes que te formasse no ventre te conheci, e antes que saísses da madre, te santifiquei; às nações te dei por profeta". O chamado de Jeremias não foi um plano de última hora ou uma reação a uma crise. Deus o conhecia intimamente, o separou (santificou) e definiu a sua missão antes mesmo da sua concepção. A nossa vida tem um propósito eterno desenhado pelo Criador.`
      },
      {
        verseRef: 'v. 6-8',
        title: 'A Desculpa da Juventude e a Promessa de Presença',
        description: `Ah, Senhor Deus! Eis Que Não Sei Falar. Diante do peso do chamado, Jeremias entra em pânico e dá uma desculpa (v. 6): "Ah, Senhor Deus! Eis que não sei falar; porque não passo de uma criança (jovem)". Ele foca nas suas limitações. Deus rejeita a desculpa (v. 7): "Não digas: Eu sou uma criança; porque a todos a quem eu te enviar, irás; e tudo quanto te mandar, falarás". A idade ou a eloquência não importam quando Deus envia. A garantia do sucesso é a promessa do versículo 8: "Não temas diante deles; porque estou contigo para te livrar".`
      },
      {
        verseRef: 'v. 9-10',
        title: 'O Toque Divino e a Autoridade da Palavra',
        description: `Eis Que Ponho as Minhas Palavras na Tua Boca. Deus não apenas encoraja Jeremias; Ele o capacita. O Senhor estende a mão e toca a boca do profeta (v. 9), dizendo: "Eis que ponho as minhas palavras na tua boca". A autoridade do profeta não vinha das suas próprias ideias, mas do fato de que ele falava as palavras de Deus. O versículo 10 descreve a magnitude da sua missão: "Olha, ponho-te neste dia sobre as nações, e sobre os reinos, para arrancares, e para derrubares, e para destruíres, e para arruinares; e também para edificares e para plantares". A Palavra de Deus tem poder tanto para o juízo quanto para a restauração.`
      }
    ],
    conclusion: `Jeremias 1:4-10 nos ensina que Deus não chama os capacitados; Ele capacita os escolhidos. Quando Deus nos chama para uma tarefa (seja no ministério, no trabalho ou na família), a nossa tendência é olhar para as nossas fraquezas e dizer: "Eu não sei falar, eu sou muito jovem, eu sou muito velho, eu não tenho recursos". Mas Deus nos diz: "Não temas, eu estou contigo". O poder não está no mensageiro, mas na Mensagem. Quando as palavras de Deus estão na nossa boca, temos autoridade para derrubar as fortalezas do mal e plantar as sementes do Reino.`
  },
  {
    id: 'eze_33_1_9',
    bookId: 'EZE',
    chapter: 33,
    startVerse: 1,
    endVerse: 9,
    title: 'O Dever do Atalaia',
    theme: 'A Responsabilidade Profética e o Aviso do Julgamento',
    introduction: `Ezequiel estava exilado na Babilônia, ministrando a um povo rebelde e de coração duro. Em Ezequiel 33, Deus usa a metáfora militar do "atalaia" (o vigia que ficava na torre da muralha da cidade) para explicar a responsabilidade de vida ou morte do ministério profético. O atalaia não era responsável por vencer a guerra, mas era absolutamente responsável por tocar a trombeta e avisar o povo quando o inimigo se aproximava. Esta passagem é um dos textos mais sérios da Bíblia sobre o peso da pregação e da evangelização.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Função do Atalaia e o Toque da Trombeta',
        description: `Se Ele Vir Vir a Espada... e Tocar a Trombeta. Deus estabelece o cenário (v. 2-3): quando uma terra está sob ameaça de guerra, o povo escolhe um homem para ser o atalaia. A função dele é simples, mas vital: ficar de vigia e, ao ver a espada (o inimigo) se aproximando, tocar a trombeta para avisar o povo. O atalaia precisa estar acordado, ter boa visão e não ter medo de fazer barulho. O silêncio do atalaia é traição e resulta em morte.`
      },
      {
        verseRef: 'v. 4-6',
        title: 'A Responsabilidade de Quem Ouve e de Quem Cala',
        description: `O Seu Sangue Será Sobre a Sua Cabeça. Deus explica as consequências. Se o atalaia tocar a trombeta e a pessoa ouvir o aviso, mas não se preparar, e a espada a matar (v. 4), "o seu sangue será sobre a sua cabeça". A culpa é inteiramente de quem ignorou o aviso (v. 5). No entanto, o cenário trágico é descrito no versículo 6: se o atalaia vir a espada e NÃO tocar a trombeta, o povo será morto na sua iniquidade, "mas o seu sangue da mão do atalaia o requererei". A omissão do atalaia o torna culpado de homicídio espiritual.`
      },
      {
        verseRef: 'v. 7-9',
        title: 'A Aplicação a Ezequiel e o Dever de Avisar o Ímpio',
        description: `A Ti, Pois, ó Filho do Homem, Te Constituí por Atalaia. Deus aplica a metáfora diretamente a Ezequiel (v. 7): "A ti, pois, ó filho do homem, te constituí por atalaia sobre a casa de Israel; tu, pois, ouvirás a palavra da minha boca, e lha anunciarás da minha parte". A mensagem não era de Ezequiel, mas de Deus. Se Deus decretar a morte do ímpio e Ezequiel não o avisar para se desviar do seu mau caminho, o ímpio morrerá, mas Deus cobrará o sangue de Ezequiel (v. 8). Mas se Ezequiel avisar e o ímpio não se converter, o ímpio morrerá, mas Ezequiel terá livrado a sua própria alma (v. 9).`
      }
    ],
    conclusion: `Ezequiel 33:1-9 é um texto que deve fazer tremer todo pregador, líder, pai e cristão. Nós fomos constituídos atalaias para a nossa geração. O mundo está sob o julgamento iminente de Deus por causa do pecado. A nossa função não é forçar as pessoas a se converterem (não podemos mudar o coração de ninguém), mas a nossa obrigação inegociável é "tocar a trombeta": pregar o evangelho, avisar sobre o juízo e apontar para a cruz de Cristo. Se nos calarmos por medo de ofender, o sangue deles será requerido das nossas mãos.`
  },
  {
    id: 'dan_5_1_28',
    bookId: 'DAN',
    chapter: 5,
    startVerse: 1,
    endVerse: 28,
    title: 'A Escrita na Parede',
    theme: 'A Profanação, o Juízo e a Balança de Deus',
    introduction: `O império babilônico, outrora o mais poderoso do mundo sob Nabucodonosor, está prestes a cair. O rei Belsazar dá um grande banquete para mil dos seus senhores, sentindo-se seguro atrás das muralhas impenetráveis da Babilônia, mesmo com o exército medo-persa acampado do lado de fora. No auge da sua arrogância, Belsazar comete um ato de profanação extrema contra o Deus de Israel. A resposta divina é imediata e aterrorizante: uma mão misteriosa escreve a sentença de morte do império na parede do palácio.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Arrogância do Rei e a Profanação do Sagrado',
        description: `Trouxeram os Vasos de Ouro... do Templo de Deus. Belsazar, embriagado pelo vinho e pelo poder, dá uma ordem blasfema (v. 2): trazer os vasos sagrados de ouro e prata que o seu avô, Nabucodonosor, havia roubado do templo em Jerusalém. O rei, as suas mulheres e os seus convidados bebem vinho nos vasos sagrados (v. 3) e, ao mesmo tempo, louvam os deuses de ouro, prata, bronze, ferro, madeira e pedra (v. 4). Foi um insulto deliberado ao Deus de Israel, usando os utensílios da adoração verdadeira para celebrar a idolatria.`
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Mão Misteriosa e o Terror do Juízo Repentino',
        description: `Apareceram Uns Dedos de Mão de Homem. A festa é interrompida abruptamente (v. 5). Dedos de uma mão humana aparecem e começam a escrever no estuque da parede do palácio, iluminados pelo candelabro. A reação do rei arrogante é de pânico absoluto (v. 6): "Mudou-se o semblante do rei, e os seus pensamentos o turbaram; as juntas dos seus lombos se relaxaram, e os seus joelhos bateram um no outro". O homem que zombava de Deus há poucos minutos agora está paralisado de terror diante de um fragmento do poder divino. Os sábios da Babilônia não conseguem ler a escrita.`
      },
      {
        verseRef: 'v. 25-28',
        title: 'A Interpretação de Daniel e a Balança de Deus',
        description: `Pesado Foste na Balança, e Foste Achado em Falta. Daniel é chamado e, após repreender o orgulho de Belsazar (v. 18-24), lê e interpreta a escrita (v. 25-28). "MENE, MENE, TEQUEL, UFARSIM". MENE: Deus contou o teu reino e deu-lhe fim (o tempo acabou). TEQUEL: Pesado foste na balança, e foste achado em falta (o caráter foi avaliado e reprovado). PERES (singular de Ufarsim): Dividido foi o teu reino, e dado aos medos e aos persas (o julgamento foi executado). Naquela mesma noite, Belsazar foi morto e o império caiu (v. 30).`
      }
    ],
    conclusion: `Daniel 5:1-28 é um lembrete aterrorizante de que Deus não se deixa escarnecer. Os impérios humanos e os líderes arrogantes podem pensar que estão seguros e que podem zombar das coisas sagradas impunemente. Mas Deus tem uma balança. Ele pesa as ações, os motivos e o caráter de cada pessoa e de cada nação. O tempo da paciência de Deus tem um limite ("Mene"). A única maneira de não sermos "achados em falta" na balança da justiça divina é termos o peso da justiça de Cristo imputado a nosso favor através da fé.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 16d).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
