const fs = require('fs');

const expandedPericopes = [
  {
    id: 'lev_4_1_12',
    bookId: 'LEV',
    chapter: 4,
    startVerse: 1,
    endVerse: 12,
    title: 'A Oferta pelo Pecado (Purificação)',
    theme: 'O Pecado Involuntário, a Contaminação e a Purificação do Santuário',
    introduction: 'Enquanto o Holocausto, a Oferta de Manjares e a Oferta Pacífica eram sacrifícios de adoração voluntária, a Oferta pelo Pecado (Chattat) é obrigatória. Ela lida especificamente com pecados cometidos "por ignorância" (ou inadvertidamente) contra os mandamentos do Senhor. Levítico 4 revela que o pecado, mesmo quando não intencional, gera culpa real e contamina o santuário de Deus. Este sacrifício não foca apenas no perdão do indivíduo, mas na purificação do ambiente sagrado, demonstrando que a santidade de Deus é sensível a qualquer transgressão.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Pecado do Sacerdote e o Novilho sem Defeito',
        description: 'O texto começa com o pecado do sacerdote ungido (o Sumo Sacerdote). Se ele pecar, sua culpa recai sobre todo o povo, pois ele é o representante da nação. Para expiar seu pecado, ele deve trazer a maior e mais cara das ofertas: um novilho (bezerro) sem defeito. Ele o traz à porta da Tenda, impõe a mão sobre a cabeça do animal (transferindo a culpa) e o degola perante o Senhor. A gravidade do sacrifício é proporcional à responsabilidade do ofensor.'
      },
      {
        verseRef: 'v. 5-7',
        title: 'A Aspersão do Sangue e a Purificação do Altar',
        description: 'Diferente das ofertas anteriores, onde o sangue era apenas respingado no altar de bronze, aqui o sangue é levado para dentro do Santo Lugar. O sacerdote molha o dedo no sangue e o asperge sete vezes diante do véu do santuário. Em seguida, ele coloca o sangue sobre as pontas (chifres) do altar do incenso aromático. O pecado do líder contamina o lugar mais íntimo de comunhão com Deus, e o sangue deve ser aplicado ali para purificar o santuário e restaurar o acesso a Deus.'
      },
      {
        verseRef: 'v. 8-12',
        title: 'A Queima Fora do Arraial',
        description: 'A gordura e os órgãos vitais são queimados no altar de bronze (como na oferta pacífica). No entanto, o restante do novilho (o couro, a carne, a cabeça, as pernas, as entranhas e o esterco) não pode ser comido nem queimado no altar. Ele deve ser levado para "fora do arraial", a um lugar limpo onde se lança a cinza, e lá deve ser queimado sobre a lenha. O pecado é tratado como algo repulsivo que deve ser removido completamente da presença de Deus e do acampamento de Israel.'
      }
    ],
    conclusion: 'A Oferta pelo Pecado nos ensina que a ignorância não anula a culpa. Nossas falhas não intencionais ainda ofendem a santidade de Deus e exigem expiação. A queima do animal fora do acampamento é uma das mais poderosas prefigurações da cruz. O autor de Hebreus (Hb 13:11-12) explica que, assim como o corpo do animal era queimado fora do arraial, "Jesus, para santificar o povo pelo seu próprio sangue, padeceu fora da porta". Ele assumiu a nossa impureza e foi rejeitado fora da cidade para que pudéssemos ser purificados e trazidos para dentro da presença de Deus.'
  },
  {
    id: 'lev_5_14_19',
    bookId: 'LEV',
    chapter: 5,
    startVerse: 14,
    endVerse: 19,
    title: 'A Oferta pela Culpa (Reparação)',
    theme: 'A Restituição, o Dano às Coisas Sagradas e a Reparação do Erro',
    introduction: 'A Oferta pela Culpa (Asham) é a quinta e última das ofertas principais de Levítico. Enquanto a Oferta pelo Pecado lida com a purificação da contaminação moral, a Oferta pela Culpa foca na reparação de danos e na restituição. Ela é exigida quando alguém comete uma transgressão (um ato de infidelidade) contra as "coisas sagradas do Senhor" ou contra o próximo, resultando em um prejuízo calculável. Este sacrifício estabelece um princípio fundamental da justiça bíblica: o verdadeiro arrependimento exige não apenas o perdão de Deus, mas, sempre que possível, a restituição do dano causado.',
    points: [
      {
        verseRef: 'v. 14-15',
        title: 'O Pecado contra as Coisas Sagradas',
        description: 'Deus instrui Moisés sobre o caso de alguém que peca por ignorância nas "coisas sagradas do Senhor" (por exemplo, retendo dízimos, comendo a porção dos sacerdotes ou falhando em cumprir um voto). A oferta exigida é um carneiro sem defeito do rebanho. Diferente das outras ofertas, o valor do animal é estritamente avaliado em siclos de prata, segundo o siclo do santuário. A ofensa é tratada como uma dívida que precisa ser paga com precisão.'
      },
      {
        verseRef: 'v. 16',
        title: 'A Restituição com Acréscimo de Vinte por Cento',
        description: 'O sacrifício do carneiro não é suficiente por si só. O ofensor deve restituir o valor exato do que ele defraudou das coisas sagradas e, além disso, acrescentar a quinta parte (20%) como multa, entregando tudo ao sacerdote. Só então o sacerdote fará expiação por ele com o carneiro, e o pecado será perdoado. O arrependimento bíblico não é apenas um sentimento de remorso; ele envolve uma ação prática para reparar o dano e compensar a parte lesada.'
      },
      {
        verseRef: 'v. 17-19',
        title: 'A Culpa Oculta e a Necessidade de Expiação',
        description: 'Os versículos finais abordam uma situação angustiante: quando alguém peca contra os mandamentos de Deus, mas "não o soube". Mesmo sem ter consciência imediata do erro, "contudo é culpado, e levará a sua iniquidade". A ignorância não isenta a pessoa da culpa objetiva diante da lei de Deus. Quando a pessoa descobre o erro, ela deve trazer o carneiro para a expiação. O texto conclui enfatizando: "Expiação de culpa é; certamente se fez culpado diante do Senhor". A justiça de Deus é absoluta.'
      }
    ],
    conclusion: 'A Oferta pela Culpa nos ensina que o pecado não é apenas uma ofensa moral, mas uma dívida que gera prejuízo. O princípio da restituição (Zaqueu devolvendo quatro vezes mais em Lucas 19:8) é uma evidência clara de conversão genuína. Teologicamente, Jesus Cristo é a nossa suprema Oferta pela Culpa (Isaías 53:10 usa a palavra Asham para descrever o sacrifício do Servo Sofredor). Ele não apenas pagou a nossa dívida infinita para com Deus, mas restaurou a glória divina que nós havíamos defraudado com o nosso pecado, trazendo perdão e reparação total.'
  },
  {
    id: 'lev_8_1_13',
    bookId: 'LEV',
    chapter: 8,
    startVerse: 1,
    endVerse: 13,
    title: 'A Consagração de Arão e Seus Filhos',
    theme: 'A Lavagem, a Vestimenta e a Unção para o Sacerdócio',
    introduction: 'Após detalhar as leis dos sacrifícios (capítulos 1 a 7), Levítico 8 descreve a cerimônia pública de ordenação do sacerdócio. Moisés, agindo como mediador da aliança, consagra seu irmão Arão como Sumo Sacerdote e os filhos de Arão como sacerdotes. Esta cerimônia solene, realizada à porta da Tenda da Congregação diante de todo o povo, envolve lavagem com água, a colocação de vestes sagradas e a unção com óleo. É um quadro visual poderoso que demonstra que ninguém pode servir a Deus na santidade do santuário sem ser purificado, revestido de justiça e capacitado pelo Espírito Santo.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Convocação Pública e os Elementos da Consagração',
        description: 'Deus ordena a Moisés que reúna Arão, seus filhos, as vestes sagradas, o óleo da unção, o novilho da expiação, os dois carneiros e o cesto de pães ázimos. Toda a congregação é convocada para a porta da Tenda. A consagração do sacerdócio não é um rito secreto, mas um evento público, para que todo o povo reconheça a autoridade e a santidade daqueles que os representarão diante de Deus. Moisés declara: "Isto é o que o Senhor ordenou que se fizesse".'
      },
      {
        verseRef: 'v. 6-9',
        title: 'A Lavagem e o Revestimento de Arão',
        description: 'O primeiro ato de Moisés é lavar Arão e seus filhos com água. A purificação moral (simbolizada pela água) é o pré-requisito absoluto para o ministério. Em seguida, Moisés veste Arão com as vestes do Sumo Sacerdote: a túnica, o manto, o éfode, o peitoral (com o Urim e o Tumim, para discernir a vontade de Deus) e a mitra na cabeça. Na mitra, é colocada a lâmina de ouro com a inscrição "Santidade ao Senhor". Arão é despido de suas roupas comuns e revestido com glória e beleza, representando a dignidade do ofício.'
      },
      {
        verseRef: 'v. 10-13',
        title: 'A Unção do Tabernáculo e do Sumo Sacerdote',
        description: 'Moisés toma o óleo da unção e unge o Tabernáculo e todos os seus utensílios, santificando-os. Ele asperge o óleo sete vezes sobre o altar. O clímax ocorre no versículo 12: "E derramou do azeite da unção sobre a cabeça de Arão, e ungiu-o, para santificá-lo". O óleo, símbolo do Espírito Santo, é derramado abundantemente sobre a cabeça do Sumo Sacerdote (Salmo 133). Em seguida, os filhos de Arão são vestidos com suas túnicas. A unção capacita Arão para a obra que a lavagem e as vestes prepararam.'
      }
    ],
    conclusion: 'A consagração de Arão é uma tipologia rica do nosso Grande Sumo Sacerdote, Jesus Cristo, que foi ungido com o Espírito Santo sem medida (João 3:34) para exercer Seu ministério. Para a Igreja, que é um "sacerdócio real" (1 Pedro 2:9), os princípios permanecem: não podemos servir a Deus sem a lavagem da regeneração (Tito 3:5), sem estarmos revestidos com as vestes da justiça de Cristo e sem a unção contínua do Espírito Santo. O ministério eficaz não nasce da habilidade humana, mas da consagração divina.'
  },
  {
    id: 'lev_9_1_24',
    bookId: 'LEV',
    chapter: 9,
    startVerse: 1,
    endVerse: 24,
    title: 'O Início do Ministério Sacerdotal',
    theme: 'A Obediência Exata, a Bênção Sacerdotal e a Descida do Fogo Divino',
    introduction: 'Após sete dias de consagração reclusa na Tenda da Congregação (capítulo 8), chega o oitavo dia. É o dia da inauguração oficial do ministério de Arão e seus filhos. Levítico 9 é um capítulo de triunfo e glória. Arão oferece os primeiros sacrifícios por si mesmo e pelo povo, exatamente como Deus ordenou. O clímax deste dia não é o ritual em si, mas a resposta de Deus: a glória do Senhor aparece a todo o povo, e um fogo sobrenatural desce do céu para consumir o sacrifício, validando o sacerdócio e demonstrando a aceitação divina.',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'A Preparação para a Glória',
        description: 'No oitavo dia, Moisés chama Arão, seus filhos e os anciãos de Israel. Ele instrui Arão a pegar um bezerro para oferta pelo pecado e um carneiro para holocausto (para si mesmo), e outras ofertas para o povo. O propósito de tudo isso é declarado no versículo 4: "porque hoje o Senhor vos aparecerá". A obediência meticulosa aos rituais de sacrifício não era um fim em si mesma, mas a preparação necessária para que a glória de Deus pudesse se manifestar no meio do acampamento sem destruí-los.'
      },
      {
        verseRef: 'v. 8-22',
        title: 'A Execução dos Sacrifícios e a Primeira Bênção',
        description: 'Arão obedece e realiza a sequência completa de sacrifícios: primeiro a oferta pelo pecado (lidando com a culpa), depois o holocausto (consagração), e finalmente a oferta pacífica (comunhão). O texto repete que ele fez tudo "como o Senhor ordenara". Após concluir as ofertas, Arão levanta as mãos para o povo e os abençoa. É a primeira vez que o Sumo Sacerdote exerce sua função de abençoar a nação em nome de Deus, um ato que culmina a obra de expiação.'
      },
      {
        verseRef: 'v. 23-24',
        title: 'A Aparição da Glória e o Fogo do Céu',
        description: 'Moisés e Arão entram na Tenda da Congregação e, ao saírem, abençoam o povo novamente. Então, a promessa se cumpre: "a glória do Senhor apareceu a todo o povo". O sinal visível da aceitação divina é dramático: "Porque o fogo saiu de diante do Senhor, e consumiu o holocausto e a gordura sobre o altar". Deus mesmo acende o fogo do altar. A reação do povo é de reverência extasiada: "o que vendo todo o povo, jubilaram e caíram sobre os seus rostos". A verdadeira adoração nasce da revelação da glória e da graça de Deus.'
      }
    ],
    conclusion: 'O oitavo dia em Levítico 9 nos ensina que a glória de Deus se manifesta onde há obediência à Sua Palavra e confiança no sacrifício de sangue. O fogo que desceu do céu provou que Deus aceitou o substituto no lugar do pecador. No Novo Testamento, o sacrifício perfeito de Cristo foi aceito por Deus, e o "fogo" que desceu do céu no Pentecostes (Atos 2) foi o Espírito Santo, não para consumir a Igreja, mas para habitá-la e capacitá-la. A bênção de Arão prefigura a bênção final de Cristo, que, após consumar Seu sacrifício, levantou as mãos e abençoou Seus discípulos antes de ascender aos céus (Lucas 24:50-51).'
  },
  {
    id: 'lev_10_1_7',
    bookId: 'LEV',
    chapter: 10,
    startVerse: 1,
    endVerse: 7,
    title: 'O Fogo Estranho de Nadabe e Abiú',
    theme: 'A Presunção, o Juízo Imediato e a Santidade Exigida dos Líderes',
    introduction: 'O contraste entre Levítico 9 e Levítico 10 é um dos mais chocantes da Bíblia. Imediatamente após a glória de Deus se manifestar e o fogo divino consumir o sacrifício aceitável, dois dos filhos de Arão, Nadabe e Abiú, cometem um ato de presunção fatal. Eles oferecem "fogo estranho" perante o Senhor e são instantaneamente mortos pelo mesmo fogo divino. Este episódio trágico serve como um aviso severo e eterno de que a proximidade com as coisas sagradas não permite familiaridade desrespeitosa. Deus exige ser santificado naqueles que se chegam a Ele.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'O Fogo Estranho e o Fogo Consumidor',
        description: 'Nadabe e Abiú, recém-consagrados como sacerdotes, tomam seus incensários, colocam fogo neles, põem incenso e oferecem "fogo estranho perante a face do Senhor, o que lhes não ordenara". O erro deles não foi a intenção de adorar, mas o método. Eles agiram por iniciativa própria, ignorando as instruções divinas (talvez usando brasas não retiradas do altar de bronze ou entrando no Santo dos Santos em momento indevido). A resposta de Deus é imediata: "Então saiu fogo de diante do Senhor e os consumiu; e morreram perante o Senhor". O fogo que no capítulo anterior trouxe aceitação, agora traz juízo.'
      },
      {
        verseRef: 'v. 3',
        title: 'A Justificativa Divina e o Silêncio de Arão',
        description: 'Moisés explica a Arão o significado da tragédia, citando as palavras do próprio Deus: "Nisto serei santificado naqueles que se cheguem a mim, e serei glorificado diante de todo o povo". Deus declara que Seus ministros devem tratá-Lo com absoluta reverência; se eles não O santificarem por obediência, Ele Se santificará através do juízo. A reação de Arão diante da morte instantânea de seus dois filhos mais velhos é profunda: "E Arão calou-se". Ele reconhece a justiça de Deus e submete sua dor de pai à soberania do Senhor.'
      },
      {
        verseRef: 'v. 4-7',
        title: 'A Remoção dos Corpos e a Proibição do Luto',
        description: 'Moisés chama os primos de Arão (Misael e Elzafã) para removerem os corpos de diante do santuário para fora do acampamento. Eles os levam em suas próprias túnicas sacerdotais. Moisés dá uma ordem severa a Arão e a seus filhos sobreviventes (Eleazar e Itamar): eles não devem descobrir as cabeças nem rasgar as vestes (sinais tradicionais de luto), "para que não morrais, e para que ele não se indigne contra toda a congregação". O óleo da unção de Deus estava sobre eles; a lealdade ao ofício sagrado e à justiça de Deus devia superar o luto familiar.'
      }
    ],
    conclusion: 'A morte de Nadabe e Abiú é um lembrete aterrorizante de que Deus não aceita adoração baseada na criatividade humana ou no entusiasmo carnal que ignora a Sua Palavra. "Fogo estranho" é qualquer tentativa de servir a Deus nos nossos próprios termos, sem a reverência devida à Sua santidade. A liderança espiritual traz maior responsabilidade e juízo mais estrito (Tiago 3:1). O silêncio de Arão nos desafia a confiar na justiça de Deus mesmo quando Suas ações nos causam dor profunda, reconhecendo que a glória e a santidade do Senhor estão acima de nossos apegos terrenos.'
  }
];

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

let replacedCount = 0;
for (const expanded of expandedPericopes) {
  const index = arr.findIndex(p => p.id === expanded.id);
  if (index !== -1) {
    arr[index] = expanded;
    replacedCount++;
  }
}

const newArrayContent = JSON.stringify(arr, null, 2);
const newContent = content.substring(0, startIndex) + newArrayContent + content.substring(endIndex + 1);
fs.writeFileSync('data/pericopes_temp.ts', newContent, 'utf8');
console.log(`Expanded ${replacedCount} pericopes (Batch 7.1).`);
