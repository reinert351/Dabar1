const fs = require('fs');

const newPericopes = [
  {
    id: 'jos_6_1_20',
    bookId: 'JOS',
    chapter: 6,
    startVerse: 1,
    endVerse: 20,
    title: 'A Queda de Jericó',
    theme: 'A Vitória Através da Fé Obediente',
    introduction: `A cidade de Jericó era a primeira grande fortaleza que Israel precisava conquistar em Canaã. As suas muralhas eram consideradas impenetráveis. Deus, no entanto, não dá a Josué uma estratégia militar, mas uma estratégia litúrgica. O plano de batalha de Deus parecia absurdo aos olhos humanos: marchar ao redor da cidade em silêncio, tocar trombetas e gritar. A queda de Jericó é a prova definitiva de que as batalhas do povo de Deus não são vencidas pela força das armas, mas pela obediência radical e pela fé no poder sobrenatural de Deus.`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Promessa da Vitória e a Estratégia Divina',
        description: `Eu Tenho Dado na Tua Mão. Jericó estava rigorosamente fechada (v. 1). Antes mesmo da batalha começar, Deus declara o resultado (v. 2): "Olha, tenho dado na tua mão a Jericó, ao seu rei e aos seus homens valorosos". A vitória já estava garantida pela promessa. Deus então revela a estratégia (v. 3-5): rodear a cidade uma vez por dia durante seis dias, com os sacerdotes levando a Arca da Aliança e tocando buzinas de chifre de carneiro. No sétimo dia, deveriam rodear sete vezes, tocar as buzinas longamente e todo o povo gritar. O foco não estava nas espadas, mas na Arca (a presença de Deus).`
      },
      {
        verseRef: 'v. 10',
        title: 'A Disciplina do Silêncio e a Marcha da Fé',
        description: `Não Fareis Ouvir a Vossa Voz. Josué dá uma ordem crucial ao povo (v. 10): "Não gritareis, nem fareis ouvir a vossa voz, nem sairá palavra alguma da vossa boca, até ao dia em que eu vos diga: Gritai! Então gritareis". O silêncio exigia uma disciplina extraordinária. Eles tiveram que marchar em silêncio enquanto os habitantes de Jericó provavelmente zombavam deles das muralhas. O silêncio impedia a murmuração (como aconteceu no deserto) e forçava o povo a meditar na presença de Deus (a Arca) que ia à frente deles.`
      },
      {
        verseRef: 'v. 20',
        title: 'O Grito de Vitória e a Queda das Muralhas',
        description: `O Muro Caiu Abaixo. No sétimo dia, após a sétima volta, os sacerdotes tocam as buzinas e Josué ordena (v. 16): "Gritai, porque o Senhor vos tem dado a cidade". O povo obedece (v. 20): "Gritou, pois, o povo, tocando os sacerdotes as buzinas; e sucedeu que, ouvindo o povo o sonido da buzina, gritou o povo com grande brado; e o muro caiu abaixo, e o povo subiu à cidade, cada qual em frente de si, e tomaram a cidade". Hebreus 11:30 resume o milagre: "Pela fé caíram os muros de Jericó, sendo rodeados durante sete dias".`
      }
    ],
    conclusion: `Josué 6:1-20 nos ensina que os métodos de Deus frequentemente contrariam a lógica humana. Quando enfrentamos "muralhas" intransponíveis nas nossas vidas, a tentação é tentar derrubá-las com a nossa própria força ou sabedoria. A lição de Jericó é que a vitória espiritual requer fé para acreditar na promessa antes de ver o resultado, disciplina para obedecer mesmo quando a ordem parece estranha (marchar em silêncio), e coragem para dar o grito de louvor antes mesmo de a muralha cair. A vitória pertence ao Senhor.`
  },
  {
    id: 'jdg_7_1_7',
    bookId: 'JDG',
    chapter: 7,
    startVerse: 1,
    endVerse: 7,
    title: 'Os 300 de Gideão',
    theme: 'A Força de Deus Aperfeiçoada na Fraqueza',
    introduction: `O povo de Israel estava sendo oprimido pelos midianitas, um exército imenso descrito como "gafanhotos em multidão" (Juízes 6:5). Deus chama Gideão, um homem medroso, para libertar Israel. Gideão reúne um exército de 32.000 homens, mas Deus diz que são muitos. O capítulo 7 descreve o processo divino de redução do exército de Israel para apenas 300 homens. O objetivo de Deus não era apenas derrotar os midianitas, mas destruir o orgulho de Israel, provando que a salvação vem exclusivamente do Senhor.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Problema do Excesso e o Teste do Medo',
        description: `Muito é o Povo. Gideão acampa com 32.000 homens. Deus lhe diz algo chocante (v. 2): "Muito é o povo que está contigo, para eu dar aos midianitas em sua mão; a fim de que Israel não se glorie contra mim, dizendo: A minha mão me livrou". O maior perigo para Israel não era a derrota, mas o orgulho na vitória. Deus ordena o primeiro teste (v. 3): "Quem for medroso e tímido, volte". Vinte e dois mil homens (mais de dois terços) vão embora. O medo é contagioso e desqualifica para a batalha espiritual.`
      },
      {
        verseRef: 'v. 4-6',
        title: 'Ainda Há Muito Povo e o Teste da Água',
        description: `Desce-os às Águas. Gideão fica com 10.000 homens, mas Deus diz (v. 4): "Ainda há muito povo; desce-os às águas, e ali tos provarei". O segundo teste é a forma como eles bebem água (v. 5-6). A maioria (9.700) ajoelha-se e abaixa o rosto até a água, perdendo a visão do ambiente. Apenas 300 homens levam a água à boca com a mão, lambendo-a como cães, mantendo-se alertas e de prontidão. Deus escolhe os 300. A vigilância e a prontidão são essenciais para os soldados de Deus.`
      },
      {
        verseRef: 'v. 7',
        title: 'A Promessa de Livramento com a Minoria',
        description: `Com Estes Trezentos Homens Vos Livrarei. O resultado final é humanamente absurdo: 300 homens contra um exército inumerável (cerca de 135.000, Jz 8:10). A proporção era de 1 para 450. Mas Deus declara (v. 7): "Com estes trezentos homens que lamberam as águas vos livrarei, e darei os midianitas na tua mão; portanto, todos os demais se tornem cada um ao seu lugar". Deus reduziu o exército a um número tão pequeno que, quando a vitória viesse, seria matematicamente impossível atribuí-la à força humana.`
      }
    ],
    conclusion: `Juízes 7:1-7 é a ilustração perfeita de 2 Coríntios 12:9: "A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza". Nós frequentemente pensamos que precisamos de mais recursos, mais dinheiro, mais talento ou mais pessoas para fazer a obra de Deus. Mas Deus frequentemente nos esvazia dos nossos recursos para que não possamos roubar a Sua glória. Ele prefere usar uma minoria alerta e dependente do que uma multidão orgulhosa. Com Deus, 300 homens são a maioria absoluta.`
  },
  {
    id: '1sa_1_9_18',
    bookId: '1SA',
    chapter: 1,
    startVerse: 9,
    endVerse: 18,
    title: 'A Oração de Ana',
    theme: 'A Angústia, o Voto e a Paz da Oração Respondida',
    introduction: `O livro de 1 Samuel começa no período sombrio dos Juízes, com a nação espiritualmente estéril e a liderança sacerdotal (Eli e seus filhos) corrompida. A esterilidade nacional é espelhada na esterilidade pessoal de Ana, esposa de Elcana. Provocada cruelmente pela sua rival Penina, Ana chega ao limite da sua dor. A sua oração no tabernáculo em Siló não é apenas o choro de uma mulher desesperada por um filho, mas o ponto de virada na história de Israel, pois dessa oração nasceria Samuel, o profeta que ungiria o rei Davi.`,
    points: [
      {
        verseRef: 'v. 9-11',
        title: 'A Amargura de Alma e o Voto de Consagração',
        description: `Se Te Lembrares da Tua Serva. Ana levanta-se após a refeição, com "amargura de alma", e chora abundantemente diante do Senhor (v. 10). Ela não busca vingança contra Penina, mas derrama a sua dor diante de Deus. Ela faz um voto solene (v. 11): "Senhor dos Exércitos! Se benignamente atentares para a aflição da tua serva, e de mim te lembrares... e à tua serva deres um filho homem, ao Senhor o darei todos os dias da sua vida, e sobre a sua cabeça não passará navalha". Ela pede um filho não para si mesma, mas para devolvê-lo a Deus como nazireu.`
      },
      {
        verseRef: 'v. 12-14',
        title: 'A Oração Silenciosa e o Julgamento Injusto',
        description: `Só os Seus Lábios se Moviam. Ana orava prolongadamente. O texto nota um detalhe importante (v. 13): "Porquanto Ana no seu coração falava; só se moviam os seus lábios, porém não se ouvia a sua voz". A sua oração era tão profunda e íntima que não precisava de som. O sumo sacerdote Eli, observando-a e acostumado com a corrupção da época, julga-a mal (v. 14): "Até quando estarás tu embriagada? Aparta de ti o teu vinho". A liderança religiosa estava tão cega que não conseguia distinguir entre a embriaguez e o quebrantamento espiritual.`
      },
      {
        verseRef: 'v. 15-18',
        title: 'O Derramar da Alma e a Mudança de Semblante',
        description: `O Seu Semblante Já Não Era Triste. Ana responde com respeito, mas com firmeza (v. 15): "Não, senhor meu, eu sou uma mulher atribulada de espírito; nem vinho nem bebida forte tenho bebido; porém tenho derramado a minha alma perante o Senhor". Eli reconhece o seu erro e a abençoa (v. 17): "Vai em paz; e o Deus de Israel te conceda a petição que lhe fizeste". O resultado da oração é imediato (v. 18): "E a mulher foi o seu caminho, e comeu, e o seu semblante já não era triste". A paz veio antes mesmo da gravidez.`
      }
    ],
    conclusion: `1 Samuel 1:9-18 nos ensina o poder da oração desesperada. Ana não fez uma oração polida ou superficial; ela "derramou a sua alma". Deus frequentemente usa a nossa dor mais profunda para nos levar a um lugar de consagração total, onde os nossos desejos se alinham com os propósitos dEle (ela queria um filho; Deus precisava de um profeta). A maior evidência de que a nossa oração foi ouvida não é a mudança imediata das circunstâncias, mas a mudança do nosso semblante: a paz que excede todo o entendimento.`
  },
  {
    id: '1sa_15_17_23',
    bookId: '1SA',
    chapter: 15,
    startVerse: 17,
    endVerse: 23,
    title: 'A Rejeição de Saul',
    theme: 'A Obediência Parcial é Desobediência Total',
    introduction: `Deus ordenou ao rei Saul que destruísse completamente os amalequitas (um povo cruel que havia atacado Israel no deserto) e tudo o que eles possuíam. Saul vence a batalha, mas decide poupar o rei Agague e o melhor do gado e das ovelhas. Quando o profeta Samuel o confronta, Saul tenta justificar a sua desobediência com uma desculpa religiosa: ele guardou os animais para oferecê-los em sacrifício a Deus. A resposta de Samuel é uma das declarações mais contundentes da Bíblia sobre o que Deus realmente valoriza.`,
    points: [
      {
        verseRef: 'v. 17-19',
        title: 'O Lembrete da Graça e a Acusação de Rebelião',
        description: `Por Que Não Deste Ouvidos? Samuel lembra Saul das suas origens humildes (v. 17): "Porventura, sendo tu pequeno aos teus olhos, não foste por cabeça das tribos de Israel?". Deus o havia exaltado pela graça. Samuel repete a ordem clara de Deus para destruir os amalequitas (v. 18) e faz a acusação direta (v. 19): "Por que, pois, não deste ouvidos à voz do Senhor, antes te lançaste ao despojo, e fizeste o que parecia mau aos olhos do Senhor?". A ganância (lançar-se ao despojo) superou a obediência.`
      },
      {
        verseRef: 'v. 20-21',
        title: 'A Justificativa Religiosa e a Transferência de Culpa',
        description: `O Povo Tomou do Despojo. Saul recusa-se a assumir a responsabilidade. Ele insiste que obedeceu (v. 20): "Antes dei ouvidos à voz do Senhor... e trouxe a Agague... e destruí totalmente os amalequitas". Ele confunde obediência parcial com obediência total. Pior ainda, ele culpa os outros e usa a religião como desculpa (v. 21): "Mas o povo tomou do despojo ovelhas e vacas... para as oferecer ao Senhor teu Deus em Gilgal". Saul tenta encobrir a sua rebelião com o manto da adoração.`
      },
      {
        verseRef: 'v. 22-23',
        title: 'O Veredito Divino: Obedecer é Melhor que Sacrificar',
        description: `A Rebelião é como o Pecado de Feitiçaria. Samuel profere a sentença divina (v. 22): "Tem porventura o Senhor tanto prazer em holocaustos e sacrifícios, como em que se obedeça à palavra do Senhor? Eis que o obedecer é melhor do que o sacrificar; e o atender melhor é do que a gordura de carneiros". Deus não precisa de animais mortos; Ele exige vontades submissas. Samuel iguala a desobediência à idolatria (v. 23): "Porque a rebelião é como o pecado de feitiçaria, e o porfiar é como iniquidade e idolatria. Porquanto tu rejeitaste a palavra do Senhor, ele também te rejeitou a ti, para que não sejas rei".`
      }
    ],
    conclusion: `1 Samuel 15:17-23 é um alerta aterrorizante para todos os que tentam negociar com as ordens de Deus. A obediência parcial, atrasada ou seletiva é, aos olhos de Deus, rebelião e feitiçaria. Não podemos compensar a nossa desobediência moral ou ética com ativismo religioso, doações financeiras ou "sacrifícios" na igreja. Deus não quer o nosso dinheiro, o nosso tempo ou o nosso talento se Ele não tiver o nosso coração submisso. O obedecer é, e sempre será, melhor do que o sacrificar.`
  },
  {
    id: '2ki_5_1_14',
    bookId: '2KI',
    chapter: 5,
    startVerse: 1,
    endVerse: 14,
    title: 'A Cura de Naamã',
    theme: 'O Orgulho Humano e a Simplicidade da Graça',
    introduction: `Naamã era o comandante do exército da Síria, um homem poderoso, rico e respeitado, mas tinha um problema insolúvel: era leproso. Através do testemunho de uma pequena escrava israelita, ele viaja a Israel em busca de cura do profeta Eliseu. A história de Naamã é uma obra-prima narrativa que ilustra como o orgulho humano resiste à graça de Deus. A cura de Naamã não exigiu uma grande façanha heroica ou um pagamento exorbitante, mas a humilhação do seu ego nas águas barrentas do rio Jordão.`,
    points: [
      {
        verseRef: 'v. 1-10',
        title: 'A Expectativa do Orgulho e a Ordem Simples',
        description: `Vai, e Lava-te Sete Vezes. Naamã chega à casa de Eliseu com cavalos, carros e presentes caros, esperando um tratamento VIP. Eliseu nem sequer sai para recebê-lo; envia um mensageiro com uma ordem simples (v. 10): "Vai, e lava-te sete vezes no Jordão, e a tua carne será curada e ficarás purificado". A ordem ofendeu Naamã em todos os níveis: ele foi ignorado pelo profeta, a cura não envolvia nenhum ritual mágico, e o rio Jordão era considerado sujo em comparação com os rios de Damasco.`
      },
      {
        verseRef: 'v. 11-12',
        title: 'A Ira de Naamã e a Rejeição da Graça',
        description: `Eis que Eu Dizia Comigo. Naamã fica furioso e se retira (v. 11): "Eis que eu dizia comigo: Certamente ele sairá, pôr-se-á em pé, invocará o nome do Senhor seu Deus, e passará a sua mão sobre o lugar, e restaurará o leproso". Naamã tinha um roteiro de como Deus deveria agir. Ele se recusa a mergulhar no Jordão (v. 12): "Não são porventura Abana e Farpar, rios de Damasco, melhores do que todas as águas de Israel?". O orgulho quase lhe custou a vida. A graça de Deus frequentemente nos ofende porque não exige o nosso esforço, mas a nossa submissão.`
      },
      {
        verseRef: 'v. 13-14',
        title: 'O Conselho Sábio e o Mergulho da Humilhação',
        description: `A Carne Tornou-se como a de um Menino. Os servos de Naamã intervêm com sabedoria (v. 13): "Meu pai, se o profeta te dissesse alguma grande coisa, porventura não a farias? Quanto mais, dizendo-te ele: Lava-te, e ficarás purificado". Eles expõem a raiz do problema: Naamã estava disposto a fazer algo difícil para merecer a cura, mas não algo simples para recebê-la de graça. Naamã engole o seu orgulho, desce e mergulha sete vezes no Jordão (v. 14). O resultado da obediência humilde é a restauração total: "e a sua carne tornou-se como a carne de um menino, e ficou purificado".`
      }
    ],
    conclusion: `2 Reis 5:1-14 é uma bela ilustração da salvação. A lepra é um símbolo do pecado: incurável pelo esforço humano, não importa quão rico ou poderoso você seja. O evangelho nos ofende da mesma forma que a ordem de Eliseu ofendeu Naamã. Ele nos diz que não podemos comprar a nossa salvação com boas obras nem alcançá-la através de grandes feitos religiosos. A cura para o pecado exige apenas que desçamos do nosso cavalo de orgulho e nos lavemos na fonte purificadora do sangue de Cristo.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 14b).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
