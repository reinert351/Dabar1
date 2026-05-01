const fs = require('fs');

const expandedPericopes = [
  {
    id: 'exo_2_1_10',
    bookId: 'EXO',
    chapter: 2,
    startVerse: 1,
    endVerse: 10,
    title: 'O Nascimento e a Preservação de Moisés',
    theme: 'A Providência Divina no Meio do Caos e a Preparação do Libertador',
    introduction: 'O decreto de Faraó para afogar todos os meninos hebreus no Nilo criou um ambiente de terror absoluto em Israel. No entanto, Êxodo 2 revela como Deus usa os próprios instrumentos de morte do inimigo para forjar a salvação. O nascimento de Moisés não é apenas a história de uma mãe desesperada, mas uma demonstração magistral da providência invisível de Deus. Onde o império egípcio via apenas mais um escravo a ser eliminado, Deus via o libertador de Sua nação. A ironia divina atinge seu ápice quando o próprio Faraó acaba financiando a criação daquele que destruiria o seu império.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Fé de Joquebede e a Arca de Junco',
        description: 'Um homem e uma mulher da tribo de Levi (Anrão e Joquebede) casam-se e têm um filho. Vendo que era um menino "formoso" (Hebreus 11:23 diz que eles agiram "pela fé"), a mãe o esconde por três meses. Quando não pode mais escondê-lo, ela toma uma atitude de rendição criativa: ela constrói uma pequena "arca" (a mesma palavra hebraica usada para a arca de Noé) de juncos, betuma-a e a coloca no rio Nilo, entre os juncos. Ela obedece tecnicamente ao decreto de Faraó (colocar o menino no rio), mas o faz confiando na proteção de Deus. A irmã do menino, Miriã, fica de longe observando.'
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Compaixão da Filha de Faraó',
        description: 'A providência de Deus orquestra o tempo perfeitamente. A filha de Faraó desce para se banhar no rio exatamente no local e momento em que a arca está lá. Ela vê o cesto, manda sua criada buscá-lo e, ao abri-lo, vê o menino chorando. O choro do bebê hebreu quebra o coração da princesa egípcia. Ela tem compaixão dele, mesmo reconhecendo imediatamente: "Este é dos meninos dos hebreus". Deus usa a compaixão natural de uma mulher pagã para subverter o decreto genocida de seu próprio pai.'
      },
      {
        verseRef: 'v. 7-10',
        title: 'A Ironia Divina e a Adoção Real',
        description: 'Miriã, com extrema ousadia e sabedoria, aproxima-se e oferece-se para chamar uma ama hebréia para amamentar o menino. A princesa concorda, e Miriã chama a própria mãe do menino. A ironia é espetacular: Joquebede não apenas recebe seu filho de volta com proteção real, mas ainda é paga pelo tesouro do Egito para amamentá-lo! Quando o menino cresce, ele é levado à filha de Faraó, que o adota e lhe dá o nome de Moisés ("Tirado das águas"). O libertador de Israel é educado em toda a sabedoria dos egípcios, preparado no próprio palácio do inimigo.'
      }
    ],
    conclusion: 'A história do nascimento de Moisés nos ensina que Deus nunca perde o controle, mesmo nas circunstâncias mais sombrias. Ele é o mestre da ironia, capaz de usar os recursos do inimigo para financiar os propósitos do Seu Reino. A fé de Joquebede nos desafia a confiar nossos filhos e nossos maiores tesouros nas mãos de Deus quando não podemos mais protegê-los. Assim como Moisés foi tirado das águas da morte para ser um libertador, Jesus Cristo desceu às águas da morte e ressuscitou para ser o nosso Libertador eterno.'
  },
  {
    id: 'exo_2_11_25',
    bookId: 'EXO',
    chapter: 2,
    startVerse: 11,
    endVerse: 25,
    title: 'A Fuga de Moisés e o Clamor de Israel',
    theme: 'O Fracasso da Força Humana e o Tempo de Preparação no Deserto',
    introduction: 'Moisés cresceu como príncipe no Egito, mas nunca esqueceu sua verdadeira identidade. Aos quarenta anos, ele decide agir para libertar seu povo. No entanto, Êxodo 2:11-25 mostra que a intenção certa executada com a força e o tempo errados resulta em desastre. Moisés tenta ser o salvador de Israel usando a violência egípcia, e acaba rejeitado por seu próprio povo e caçado por Faraó. Este capítulo marca o início do longo exílio de Moisés no deserto de Midiã, um período de quarenta anos de quebramento onde Deus transformaria um príncipe arrogante em um pastor manso, enquanto o clamor de Israel finalmente sobe aos céus.',
    points: [
      {
        verseRef: 'v. 11-15',
        title: 'A Justiça Carnal e a Rejeição',
        description: 'Moisés sai para ver a aflição de seus irmãos hebreus. Ao ver um egípcio espancando um hebreu, ele olha para os lados, mata o egípcio e o esconde na areia. No dia seguinte, ele tenta apartar uma briga entre dois hebreus, mas é rejeitado com uma pergunta cortante: "Quem te tem posto por maioral e juiz sobre nós? Pensas matar-me, como mataste o egípcio?". Moisés descobre que seu crime é conhecido. Faraó procura matá-lo, e Moisés foge para a terra de Midiã. A tentativa de libertação pela força humana falhou miseravelmente.'
      },
      {
        verseRef: 'v. 16-22',
        title: 'O Refúgio em Midiã e a Vida de Pastor',
        description: 'No deserto de Midiã, Moisés senta-se junto a um poço. Ele defende as sete filhas de Reuel (Jetro), sacerdote de Midiã, contra pastores opressores e dá de beber ao rebanho delas. Este ato de justiça, desta vez sem assassinato, lhe garante um lar. Ele é convidado a morar com Jetro e recebe Zípora como esposa. Eles têm um filho, a quem Moisés chama de Gérson ("Peregrino fui em terra estranha"). O príncipe do Egito torna-se um pastor anônimo no deserto, aprendendo a cuidar de ovelhas, a mesma profissão que ele precisará para guiar Israel.'
      },
      {
        verseRef: 'v. 23-25',
        title: 'O Clamor do Povo e a Memória de Deus',
        description: 'Muitos anos se passam (quarenta anos, segundo Atos 7:30). O rei do Egito morre, mas a escravidão continua. O povo de Israel, levado ao limite absoluto do sofrimento, finalmente suspira e clama a Deus. O texto usa quatro verbos poderosos para descrever a resposta divina: Deus "ouviu" o seu gemido, Deus "lembrou-se" da Sua aliança com Abraão, Isaque e Jacó, Deus "atentou" para os filhos de Israel, e Deus os "conheceu" (ou compreendeu a sua dor). O palco está montado para a intervenção divina.'
      }
    ],
    conclusion: 'A fuga de Moisés nos ensina que não podemos realizar a obra de Deus com os métodos do mundo. A ira do homem não produz a justiça de Deus. Moisés precisou passar quarenta anos no deserto para desaprender o que havia aprendido no Egito e entender que a libertação não viria pela força de seu braço, mas pelo poder de Deus. O final do capítulo nos conforta com a certeza de que Deus não é surdo ao nosso sofrimento. Quando clamamos, Ele ouve, lembra-se de Suas promessas e age no tempo perfeito.'
  },
  {
    id: 'exo_4_1_17',
    bookId: 'EXO',
    chapter: 4,
    startVerse: 1,
    endVerse: 17,
    title: 'As Objeções de Moisés e os Sinais de Deus',
    theme: 'A Inadequação Humana e a Capacitação Divina',
    introduction: 'Após o encontro na sarça ardente (Êxodo 3), onde Deus revela Seu nome (EU SOU) e Seu plano de libertação, Moisés ainda resiste ao chamado. Êxodo 4 detalha as objeções finais de Moisés e as respostas pacientes, porém firmes, de Deus. Moisés, que quarenta anos antes estava pronto para libertar Israel sozinho, agora se sente completamente inadequado e desqualificado. Este diálogo revela a luta comum de todo servo de Deus: o medo da rejeição, o sentimento de incapacidade e a relutância em obedecer. Deus responde não melhorando a autoestima de Moisés, mas demonstrando o Seu próprio poder.',
    points: [
      {
        verseRef: 'v. 1-9',
        title: 'A Objeção da Incredulidade e os Três Sinais',
        description: 'Moisés levanta sua primeira objeção prática: "Eles não crerão em mim, nem ouvirão a minha voz". Deus responde dando-lhe três sinais miraculosos para validar seu ministério. Primeiro, o cajado de pastor de Moisés se transforma em uma serpente e volta a ser cajado (demonstrando poder sobre as forças do mal e sobre os deuses do Egito). Segundo, a mão de Moisés fica leprosa e depois é curada (demonstrando poder sobre a doença e a impureza). Terceiro, a água do Nilo se transformará em sangue na terra seca (um ataque direto à fonte de vida do Egito). Deus capacita Seus mensageiros com autoridade.'
      },
      {
        verseRef: 'v. 10-12',
        title: 'A Objeção da Incapacidade e o Criador da Boca',
        description: 'Moisés levanta sua segunda objeção: "Eu não sou homem eloquente... sou pesado de boca e pesado de língua". Ele foca em suas limitações naturais. A resposta de Deus é uma das declarações mais profundas sobre a soberania divina sobre a criação: "Quem fez a boca do homem? Ou quem fez o mudo, ou o surdo, ou o que vê, ou o cego? Não sou eu, o Senhor?". Deus não nega a fraqueza de Moisés, mas afirma que o Criador é maior que a limitação da criatura. A promessa é clara: "Vai, pois, e eu serei com a tua boca".'
      },
      {
        verseRef: 'v. 13-17',
        title: 'A Relutância Final, a Ira de Deus e a Provisão de Arão',
        description: 'Sem mais desculpas lógicas, Moisés revela o verdadeiro problema do seu coração: a relutância em ir. "Ah, Senhor! Envia pela mão daquele a quem tu hás de enviar" (basicamente: "Manda qualquer um, menos eu"). Neste ponto, a ira do Senhor se acende contra Moisés. A incredulidade prolongada e a desobediência provocam a disciplina divina. No entanto, mesmo na ira, Deus provê graça: Ele designa Arão, irmão de Moisés, para ser o porta-voz. Moisés será como Deus para Arão, e Arão será o profeta de Moisés. Deus ordena que Moisés leve o cajado, pois com ele fará os sinais.'
      }
    ],
    conclusion: 'A relutância de Moisés nos lembra que Deus não chama os capacitados, mas capacita os chamados. Nossas fraquezas e limitações não são obstáculos para Deus; na verdade, elas são o palco perfeito para que o Seu poder se aperfeiçoe em nós. A resposta de Deus às nossas desculpas é sempre a mesma: "Eu serei contigo". Não precisamos de eloquência ou força natural, precisamos apenas da presença do "EU SOU" e da disposição para obedecer e usar o "cajado" (os recursos) que Ele já colocou em nossas mãos.'
  },
  {
    id: 'exo_5_1_23',
    bookId: 'EXO',
    chapter: 5,
    startVerse: 1,
    endVerse: 23,
    title: 'O Primeiro Confronto com Faraó',
    theme: 'O Choque de Reinos e o Aumento da Aflição Antes da Libertação',
    introduction: 'Moisés e Arão finalmente chegam ao Egito e se apresentam diante do homem mais poderoso da terra. Eles entregam a mensagem de Deus, esperando que a libertação comece imediatamente. No entanto, o resultado do primeiro confronto é um desastre absoluto do ponto de vista humano. Em vez de libertar o povo, Faraó endurece o coração, zomba de Deus e aumenta drasticamente a carga de trabalho dos escravos hebreus. Êxodo 5 é um capítulo sobre a realidade do conflito espiritual: a obediência a Deus frequentemente piora as circunstâncias antes de melhorá-las, testando a fé tanto do líder quanto do povo.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Demanda de Deus e a Arrogância de Faraó',
        description: 'Moisés e Arão entregam a exigência divina: "Assim diz o Senhor Deus de Israel: Deixa ir o meu povo, para que me celebre uma festa no deserto". A resposta de Faraó é o epítome do orgulho humano e da cegueira espiritual: "Quem é o Senhor, cuja voz eu ouvirei...? Não conheço o Senhor, nem tampouco deixarei ir Israel". Faraó, que se considerava um deus, recusa-se a reconhecer a autoridade de Yahweh. Ele acusa Moisés e Arão de distraírem o povo do trabalho e os manda de volta às suas tarefas.'
      },
      {
        verseRef: 'v. 6-14',
        title: 'A Retaliação: Palha e Tijolos',
        description: 'Faraó decide punir Israel pela audácia de pedir liberdade. Ele ordena aos exatores que não forneçam mais palha (um elemento essencial para dar liga e força) para a fabricação de tijolos. Os hebreus agora teriam que espalhar-se pelo Egito para recolher restolho, mas a cota diária de tijolos permaneceria exatamente a mesma. Faraó acusa o povo de estar "ocioso" e de usar a religião como desculpa para não trabalhar. Quando a cota não é atingida, os oficiais hebreus são espancados. A opressão atinge um nível insuportável.'
      },
      {
        verseRef: 'v. 15-23',
        title: 'A Frustração do Povo e a Queixa de Moisés',
        description: 'Os oficiais hebreus apelam a Faraó, mas são rejeitados com a mesma acusação de ociosidade. Ao saírem, encontram Moisés e Arão e lançam uma maldição sobre eles: "O Senhor atente sobre vós, e julgue... pusestes a espada nas suas mãos para nos matar". Rejeitado por Faraó e odiado por seu próprio povo, Moisés entra em profunda crise. Ele se volta para Deus com uma queixa amarga e honesta: "Senhor, por que fizeste mal a este povo? Por que me enviaste? ... e tu de nenhuma maneira livraste o teu povo". A fé de Moisés atinge o fundo do poço.'
      }
    ],
    conclusion: 'O primeiro confronto com Faraó nos ensina uma lição vital sobre a vida cristã: a obediência à vontade de Deus não garante uma vida fácil ou sucesso imediato. Muitas vezes, quando decidimos seguir a Deus, o inimigo intensifica seus ataques para nos desencorajar. A queixa de Moisés é compreensível, mas prematura. Ele julgou o plano de Deus com base nas circunstâncias temporárias. Deus permitiu que a situação ficasse impossível para que, quando a libertação viesse, ficasse claro que foi obra exclusiva do Seu braço forte, e não da negociação humana.'
  },
  {
    id: 'exo_6_1_13',
    bookId: 'EXO',
    chapter: 6,
    startVerse: 1,
    endVerse: 13,
    title: 'A Resposta de Deus à Queixa de Moisés',
    theme: 'A Revelação do Nome, a Garantia da Aliança e a Promessa de Redenção',
    introduction: 'Após o fracasso inicial diante de Faraó e a rejeição amarga do povo de Israel, Moisés está desanimado e confuso. Ele questionou por que Deus o enviou, já que a situação apenas piorou. Êxodo 6 é a resposta majestosa de Deus à crise de fé de Moisés. Em vez de repreendê-lo, Deus responde com uma revelação mais profunda de Si mesmo. Ele reafirma Seu nome, lembra Sua aliança inquebrável e profere sete promessas absolutas de redenção ("Eu vos tirarei... Eu vos livrarei..."). Este capítulo é a âncora teológica do Êxodo, baseando a salvação não nas circunstâncias, mas no caráter imutável de Yahweh.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Revelação do Nome: Yahweh',
        description: 'Deus começa garantindo a Moisés que a resistência de Faraó é exatamente o que preparará o palco para o Seu poder: "Agora verás o que hei de fazer a Faraó... por uma mão forte os lançará de sua terra". Deus então faz uma declaração teológica monumental: Ele apareceu a Abraão, Isaque e Jacó como "Deus Todo-Poderoso" (El-Shaddai), mas pelo Seu nome "SENHOR" (Yahweh) Ele não lhes foi perfeitamente conhecido. Os patriarcas conheceram o poder de Deus para prometer; a geração de Moisés conhecerá o caráter de Deus para cumprir e redimir. Deus afirma que ouviu o gemido dos filhos de Israel e se lembrou da Sua aliança.'
      },
      {
        verseRef: 'v. 6-8',
        title: 'Os Sete "Eu Farei" da Redenção',
        description: 'Deus manda Moisés voltar ao povo com uma mensagem baseada inteiramente na ação divina. Deus profere sete promessas incondicionais (os sete "Eu farei"): 1) Eu vos tirarei das cargas dos egípcios; 2) Eu vos livrarei da sua servidão; 3) Eu vos resgatarei com braço estendido; 4) Eu vos tomarei por meu povo; 5) Eu serei vosso Deus; 6) Eu vos levarei à terra que jurei dar; 7) Eu vo-la darei por herança. A salvação de Israel não depende do que eles farão, mas do que o "EU SOU" fará por eles.'
      },
      {
        verseRef: 'v. 9-13',
        title: 'A Incredulidade do Povo e a Reafirmação do Chamado',
        description: 'Moisés entrega esta mensagem gloriosa aos filhos de Israel, mas a reação deles é trágica: "eles não ouviram a Moisés, por causa da angústia de espírito e da dura servidão". A dor e a opressão os tornaram surdos à esperança. Deus então manda Moisés voltar a Faraó. Moisés, novamente focado em si mesmo, argumenta: se os próprios israelitas não me ouvem, como Faraó me ouvirá, sendo eu "incircunciso de lábios" (sem eloquência)? Deus ignora a desculpa e simplesmente renova a ordem: Ele dá um mandamento formal a Moisés e Arão para tirarem os filhos de Israel do Egito. A palavra de Deus é final.'
      }
    ],
    conclusion: 'A resposta de Deus a Moisés nos ensina que o antídoto para o desespero não é uma mudança imediata nas circunstâncias, mas uma revelação mais profunda de quem Deus é. Quando estamos esmagados pela "dura servidão" dos problemas, podemos ficar surdos às promessas de Deus, como Israel ficou. No entanto, a nossa salvação está ancorada nos "Eu farei" de Deus, na Sua aliança e no poder do Seu braço estendido. Mesmo quando falhamos em crer ou em falar com eloquência, o Senhor permanece fiel ao Seu propósito redentor.'
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
console.log(`Expanded ${replacedCount} pericopes (Batch 4.1).`);
