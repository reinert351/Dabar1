const fs = require('fs');

const expandedPericopes = [
  {
    id: 'exo_7_1_13',
    bookId: 'EXO',
    chapter: 7,
    startVerse: 1,
    endVerse: 13,
    title: 'Moisés como Deus para Faraó e o Sinal da Serpente',
    theme: 'A Autoridade Delegada, o Endurecimento do Coração e a Superioridade do Poder Divino',
    introduction: 'Antes que as dez pragas comecem, Deus estabelece as regras do confronto final entre o Reino dos Céus e o império do Egito. Êxodo 7:1-13 descreve a investidura final de Moisés com autoridade divina e o primeiro sinal miraculoso realizado diante de Faraó. Este texto introduz um dos temas mais difíceis e profundos do livro: o endurecimento do coração de Faraó. A batalha que se inicia não é apenas pela liberdade de um povo, mas uma guerra teológica para provar "quem é o Senhor", demonstrando que a magia e os deuses do Egito não são páreo para o Criador.',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'A Autoridade Delegada e o Propósito do Endurecimento',
        description: 'Deus responde à insegurança de Moisés com uma declaração impressionante: "Eis que te tenho posto por deus sobre Faraó, e Arão, teu irmão, será o teu profeta". Moisés falará com a autoridade absoluta de Deus. Deus então revela Seu plano soberano: Ele mesmo "endurecerá o coração de Faraó". Isso não significa que Deus forçou um homem inocente a pecar, mas que Deus entregou um homem já orgulhoso à sua própria obstinação. O propósito desse endurecimento é claro: multiplicar os sinais e maravilhas, para que os egípcios (e o mundo) "saibam que eu sou o Senhor". Moisés (com 80 anos) e Arão (com 83 anos) finalmente obedecem sem questionar.'
      },
      {
        verseRef: 'v. 8-10',
        title: 'O Sinal da Serpente e a Obediência Exata',
        description: 'Deus antecipa que Faraó exigirá um milagre para provar a autoridade deles ("Mostrai um milagre"). A instrução é simples: Arão deve lançar seu cajado diante de Faraó, e ele se tornará uma serpente (ou um grande réptil/crocodilo, símbolos do poder egípcio). Moisés e Arão entram na corte e fazem "como o Senhor ordenara". O cajado de Arão se transforma em uma serpente. Este não é um truque de salão, mas um desafio direto ao símbolo de autoridade do próprio Faraó (a serpente Uraeus em sua coroa).'
      },
      {
        verseRef: 'v. 11-13',
        title: 'A Imitação Demoníaca e a Vitória Devoradora',
        description: 'Faraó não se impressiona. Ele chama seus sábios, encantadores e magos (identificados mais tarde como Janes e Jambres em 2 Tm 3:8). Usando "seus encantamentos" (artes ocultas ou truques de ilusão), eles também lançam seus cajados, que se tornam serpentes. O inimigo tem poder para imitar os milagres de Deus até certo ponto. No entanto, a superioridade de Deus é demonstrada imediatamente: "mas a vara de Arão tragou as varas deles". O poder de Deus engole o poder do inimigo. Apesar dessa demonstração clara de supremacia, o coração de Faraó se endurece, e ele não os ouve, exatamente como o Senhor havia dito.'
      }
    ],
    conclusion: 'Este confronto inicial nos ensina que o poder de Deus é infinitamente superior a qualquer força oculta ou poder humano. O inimigo pode imitar a obra de Deus para causar confusão, mas a verdade sempre "engolirá" a mentira no final. A história do endurecimento de Faraó é um aviso solene: quando um homem resiste repetidamente à luz e à verdade de Deus, ele pode chegar a um ponto onde Deus o entrega à sua própria cegueira. A nossa resposta à Palavra de Deus deve ser sempre a submissão, não a obstinação.'
  },
  {
    id: 'exo_11_1_10',
    bookId: 'EXO',
    chapter: 11,
    startVerse: 1,
    endVerse: 10,
    title: 'O Anúncio da Décima Praga',
    theme: 'O Juízo Final sobre o Egito e a Distinção do Povo de Deus',
    introduction: 'Após nove pragas devastadoras que destruíram a economia, a agricultura e a religião do Egito, Faraó permanece obstinado. Êxodo 11 é o prelúdio sombrio para o clímax da libertação. Deus anuncia a Moisés a décima e última praga: a morte dos primogênitos. Este capítulo marca o fim das negociações. Não haverá mais avisos ou concessões. O juízo que cairá sobre o Egito será tão absoluto e aterrorizante que Faraó não apenas deixará Israel ir, mas os expulsará apressadamente. O texto destaca a soberania de Deus em fazer uma distinção clara entre os que são Seus e os que estão sob juízo.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Promessa Final e o Despojo do Egito',
        description: 'Deus diz a Moisés: "Mais uma praga trarei sobre Faraó, e sobre o Egito; depois vos deixará ir daqui... ele vos lançará daqui totalmente". A promessa de libertação está prestes a se cumprir. Deus instrui o povo a pedir (não emprestar, mas exigir como pagamento por séculos de escravidão) joias de prata e ouro aos seus vizinhos egípcios. Deus dá ao povo "graça aos olhos dos egípcios". Além disso, o próprio Moisés torna-se "mui grande" (altamente respeitado) na terra do Egito. Deus vindica Seus servos e garante que Israel não saia de mãos vazias, mas com os despojos do inimigo.'
      },
      {
        verseRef: 'v. 4-7',
        title: 'O Anúncio da Morte e a Distinção Divina',
        description: 'Moisés entrega a mensagem final a Faraó: à meia-noite, o próprio Senhor sairá pelo meio do Egito. O juízo será universal e implacável: "todo o primogênito na terra do Egito morrerá", desde o primogênito de Faraó no trono até o primogênito da serva no moinho, e até os primogênitos dos animais. Haverá um "grande clamor" em todo o Egito, sem precedentes na história. No entanto, o versículo 7 traz uma promessa de proteção absoluta para Israel: "nem sequer um cão moverá a sua língua, contra homem nem contra animal". O propósito dessa proteção é claro: "para que saibais que o Senhor faz diferença entre os egípcios e os israelitas".'
      },
      {
        verseRef: 'v. 8-10',
        title: 'A Ira de Moisés e o Fim das Negociações',
        description: 'Moisés profetiza que os próprios servos de Faraó descerão e se prostrarão diante dele, implorando para que ele e seu povo saiam. Tendo entregue este ultimato terrível, Moisés sai da presença de Faraó "ardendo em ira". É uma ira santa contra a obstinação suicida de um líder que está destruindo seu próprio país. O capítulo termina com um resumo teológico: Deus havia dito que Faraó não ouviria, para que as maravilhas de Deus se multiplicassem. Moisés e Arão fizeram todos os sinais, mas o Senhor endureceu o coração de Faraó.'
      }
    ],
    conclusion: 'O anúncio da décima praga é uma demonstração terrível da justiça de Deus. O Egito, que havia decretado a morte dos meninos hebreus (Êxodo 1), agora colhe o juízo sobre seus próprios filhos. Deus não pode ser zombado. No entanto, a mensagem central para o povo de Deus é a promessa de distinção e proteção. No dia do juízo final, Deus fará uma separação absoluta entre aqueles que pertencem a Ele e aqueles que rejeitaram Sua graça. A nossa segurança não está em nossa própria bondade, mas em estarmos do lado certo dessa "diferença" que o Senhor faz.'
  },
  {
    id: 'exo_12_29_42',
    bookId: 'EXO',
    chapter: 12,
    startVerse: 29,
    endVerse: 42,
    title: 'A Décima Praga e o Êxodo',
    theme: 'O Juízo da Meia-Noite, a Libertação Apressada e o Cumprimento da Promessa',
    introduction: 'O que foi anunciado no capítulo 11 torna-se uma realidade aterrorizante em Êxodo 12. À meia-noite, o juízo de Deus varre a terra do Egito, enquanto os israelitas permanecem seguros em suas casas, protegidos pelo sangue do cordeiro pascal nos umbrais das portas. Este é o momento do Êxodo, o evento fundacional da nação de Israel e o maior ato de redenção do Antigo Testamento. A escravidão de 430 anos termina não com uma revolta armada, mas com a intervenção soberana de Deus, que quebra o orgulho do império mais poderoso do mundo em uma única noite.',
    points: [
      {
        verseRef: 'v. 29-32',
        title: 'O Clamor da Meia-Noite e a Rendição de Faraó',
        description: 'À meia-noite, o Senhor fere todos os primogênitos do Egito. A precisão e a abrangência do juízo são absolutas: do palácio à masmorra. Faraó levanta-se de noite, e levanta-se um "grande clamor no Egito, porque não havia casa em que não houvesse um morto". O orgulho de Faraó é finalmente quebrado. Ele chama Moisés e Arão de noite e não apenas permite, mas ordena que eles saiam: "Levantai-vos, saí do meio do meu povo... ide, servi ao Senhor". Em um ato de total humilhação, o homem que se dizia deus pede: "e abençoai-me também a mim".'
      },
      {
        verseRef: 'v. 33-36',
        title: 'A Saída Apressada e os Despojos do Egito',
        description: 'Os egípcios, aterrorizados e temendo a aniquilação total ("Todos morreremos"), pressionam o povo a sair apressadamente. A pressa é tanta que os israelitas levam a massa do pão antes que levede, amassando-a em suas amassadeiras atadas às roupas (a origem da Festa dos Pães Asmos). Cumprindo a palavra de Deus, os israelitas pedem joias e roupas aos egípcios. O Senhor dá-lhes graça, e os egípcios entregam tudo o que pedem. Assim, Israel "despojou aos egípcios", saindo não como escravos fugitivos, mas como um exército vitorioso e recompensado.'
      },
      {
        verseRef: 'v. 37-42',
        title: 'A Marcha da Liberdade e a Vigília do Senhor',
        description: 'Cerca de 600 mil homens de pé (sem contar mulheres e crianças, totalizando possivelmente mais de 2 milhões de pessoas) partem de Ramessés para Sucote. Uma "mistura de gente" (outros povos oprimidos ou egípcios convertidos) sobe com eles, junto com rebanhos imensos. O texto faz uma anotação cronológica precisa: o tempo de habitação no Egito foi de 430 anos. "E aconteceu que, passados os quatrocentos e trinta anos, naquele mesmo dia, todos os exércitos do Senhor saíram da terra do Egito". A noite do Êxodo é declarada uma "noite de vigília ao Senhor", a ser celebrada por todas as gerações.'
      }
    ],
    conclusion: 'A noite do Êxodo é a prova definitiva de que Deus cumpre Suas promessas no tempo exato ("naquele mesmo dia"). A libertação de Israel não foi conquistada por mérito humano, mas pelo sangue do cordeiro que os protegeu do juízo e pelo poder de Deus que quebrou as correntes do Egito. Para nós, o Êxodo é o grande tipo da salvação em Cristo. Fomos libertos da escravidão do pecado e da morte não por nossa própria força, mas pelo sangue de Jesus, o nosso Cordeiro Pascal (1 Coríntios 5:7), e somos chamados a marchar em liberdade como os "exércitos do Senhor".'
  },
  {
    id: 'exo_13_17_22',
    bookId: 'EXO',
    chapter: 13,
    startVerse: 17,
    endVerse: 22,
    title: 'A Coluna de Nuvem e de Fogo',
    theme: 'A Direção Divina, a Proteção e a Presença Contínua',
    introduction: 'Com Israel finalmente livre do Egito, surge a questão imediata: para onde ir e como chegar lá? Uma multidão de milhões de ex-escravos, sem experiência militar ou conhecimento do deserto, precisava de um guia. Êxodo 13:17-22 revela como Deus assume pessoalmente a liderança do Seu povo. Ele não os guia pelo caminho mais curto, mas pelo caminho mais seguro para suas almas. Mais importante ainda, Ele manifesta Sua presença visível através da coluna de nuvem e de fogo, garantindo que eles nunca dariam um passo sozinhos na jornada rumo à Terra Prometida.',
    points: [
      {
        verseRef: 'v. 17-18',
        title: 'O Caminho Mais Longo e a Sabedoria de Deus',
        description: 'O caminho mais curto e lógico para Canaã era a rota costeira (o caminho da terra dos filisteus), que levaria apenas algumas semanas. No entanto, Deus não os conduz por ali. A razão divina é cheia de graça e conhecimento da fragilidade humana: "Para que porventura o povo não se arrependa, vendo a guerra, e torne ao Egito". Deus sabia que os ex-escravos não estavam prontos para enfrentar os exércitos filisteus. Em vez disso, Deus os faz "rodear pelo caminho do deserto", em direção ao Mar Vermelho. Os caminhos de Deus muitas vezes parecem ilógicos e longos, mas são sempre projetados para nos proteger e nos preparar.'
      },
      {
        verseRef: 'v. 19',
        title: 'Os Ossos de José e a Fidelidade à Promessa',
        description: 'No meio da pressa do Êxodo, Moisés cumpre um juramento feito séculos antes: ele leva consigo os ossos de José. José havia feito os filhos de Israel jurarem que, quando Deus os visitasse, levariam seus ossos do Egito (Gn 50:25). Este ato não é uma mera formalidade funerária; é uma poderosa declaração de fé. Carregar o caixão de José pelo deserto era um lembrete visível e constante para toda a congregação de que Deus é fiel às Suas promessas e de que o destino final deles não era o deserto, mas a Terra Prometida.'
      },
      {
        verseRef: 'v. 20-22',
        title: 'A Presença Visível: Nuvem e Fogo',
        description: 'Ao acamparem em Etã, na beira do deserto, Deus providencia a orientação definitiva. O próprio Senhor ia adiante deles: de dia, numa "coluna de nuvem", para guiá-los pelo caminho e protegê-los do sol escaldante do deserto; e de noite, numa "coluna de fogo", para iluminar o acampamento e aquecê-los, permitindo que marchassem de dia e de noite. O versículo 22 traz a maior garantia: "Nunca tirou de diante do povo a coluna de nuvem, de dia, nem a coluna de fogo, de noite". Deus não apenas lhes deu um mapa; Ele lhes deu a Sua presença contínua.'
      }
    ],
    conclusion: 'A jornada de Israel nos ensina que Deus é o guia perfeito. Quando Ele nos leva por caminhos mais longos e difíceis, não é porque Ele nos abandonou, mas porque Ele conhece nossas fraquezas e está nos protegendo de batalhas para as quais ainda não estamos prontos. A coluna de nuvem e de fogo representa a presença do Espírito Santo e a luz da Palavra de Deus em nossas vidas hoje. Não precisamos temer a escuridão do "deserto" deste mundo, pois o Senhor prometeu que nunca nos deixará, nem nos desamparará (Hb 13:5).'
  },
  {
    id: 'exo_15_1_21',
    bookId: 'EXO',
    chapter: 15,
    startVerse: 1,
    endVerse: 21,
    title: 'O Cântico de Moisés e Miriã',
    theme: 'A Celebração da Redenção, a Majestade de Deus e o Triunfo sobre o Inimigo',
    introduction: 'Após a travessia milagrosa do Mar Vermelho e a destruição total do exército egípcio (Êxodo 14), o povo de Israel encontra-se seguro na outra margem. A resposta imediata a essa salvação espetacular não é o silêncio, mas a adoração explosiva. Êxodo 15 registra o "Cântico de Moisés", o primeiro grande hino de louvor da Bíblia. É uma obra-prima poética e teológica que celebra o caráter de Deus como guerreiro, redentor e rei eterno. Este cântico estabelece o padrão bíblico de que a redenção deve sempre resultar em adoração apaixonada.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'O Senhor é a Minha Força e o Meu Cântico',
        description: 'Moisés e os filhos de Israel começam cantando ao Senhor, declarando o motivo do louvor: "gloriosamente triunfou; lançou no mar o cavalo e o seu cavaleiro". A salvação não foi uma vitória militar humana, mas um ato exclusivo de Deus. Eles fazem uma confissão pessoal de fé: "O Senhor é a minha força, e o meu cântico; ele me foi por salvação". Deus é descrito como um "varão de guerra" (guerreiro) que lançou os carros de Faraó no mar, fazendo com que os inimigos afundassem como pedras nas profundezas. A adoração verdadeira reconhece Deus como a única fonte de vitória.'
      },
      {
        verseRef: 'v. 6-12',
        title: 'A Majestade da Mão Direita de Deus',
        description: 'O cântico exalta a "destra" (mão direita, símbolo de poder) do Senhor, que despedaçou o inimigo. O texto usa linguagem poética para descrever o milagre do mar: com o "sopro das tuas narinas" (o vento oriental), as águas se amontoaram e os abismos coalharam-se no coração do mar. O inimigo, cheio de orgulho, havia dito: "Perseguirei, alcançarei, repartirei os despojos... a minha mão os destruirá". Mas Deus simplesmente "soprou com o seu vento", e o mar os cobriu. A pergunta retórica do versículo 11 é o centro teológico do cântico: "Ó Senhor, quem é como tu entre os deuses? Quem é como tu glorificado em santidade, terrível em louvores, operando maravilhas?".'
      },
      {
        verseRef: 'v. 13-21',
        title: 'A Liderança Graciosa e a Dança de Miriã',
        description: 'O cântico muda do passado (a destruição do Egito) para o futuro (a jornada para Canaã). Pela Sua misericórdia, Deus guiará o povo que Ele "resgatou" até a Sua "santa habitação". A notícia do poder de Deus fará com que as nações vizinhas (filisteus, edomitas, moabitas e cananeus) tremam de medo e fiquem paralisadas como pedras, até que o povo de Deus passe e seja plantado no monte da Sua herança. O cântico conclui com a declaração: "O Senhor reinará eterna e perpetuamente". Em seguida, Miriã, a profetisa, toma um tamboril, e todas as mulheres a seguem com danças, respondendo em um coro antifonal de celebração.'
      }
    ],
    conclusion: 'O Cântico de Moisés nos ensina que a adoração é a resposta natural e necessária à salvação. Quando compreendemos a magnitude do que Deus fez por nós — nos resgatando da escravidão do pecado e destruindo o poder do inimigo — não podemos deixar de cantar. Este cântico é tão fundamental que, no livro do Apocalipse (Ap 15:3), os santos vitoriosos no céu cantam "o cântico de Moisés... e o cântico do Cordeiro". A nossa adoração na terra é um ensaio para a celebração eterna da vitória do nosso grande Rei e Redentor.'
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
console.log(`Expanded ${replacedCount} pericopes (Batch 4.2).`);
