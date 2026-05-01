const fs = require('fs');

const expandedPericopes = [
  {
    id: 'gen_13_1_18',
    bookId: 'GEN',
    chapter: 13,
    startVerse: 1,
    endVerse: 18,
    title: 'A Separação de Abrão e Ló',
    theme: 'A Escolha pela Fé versus a Escolha pela Visão',
    introduction: 'Após um período de fracasso no Egito, Abrão retorna a Canaã. A bênção de Deus sobre ele e seu sobrinho Ló resulta em grande prosperidade material, o que paradoxalmente gera conflito entre seus pastores. A resolução desse conflito revela o caráter transformado de Abrão e estabelece um contraste profundo entre duas formas de viver: a vida guiada pela fé nas promessas invisíveis de Deus (Abrão) e a vida guiada pela atração das vantagens visíveis e imediatas do mundo (Ló).',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'A Prosperidade e o Conflito',
        description: 'Abrão sobe do Egito muito rico em gado, prata e ouro. Ele retorna ao altar que havia feito "ao princípio" entre Betel e Ai, restaurando sua comunhão com Deus. Ló também prosperou imensamente. No entanto, a terra não podia sustentá-los juntos. A riqueza, muitas vezes vista como uma bênção inquestionável, aqui se torna a fonte de contenda. O texto nota significativamente que "os cananeus e os perizeus habitavam então na terra", indicando que o conflito familiar era um péssimo testemunho diante das nações pagãs.'
      },
      {
        verseRef: 'v. 8-13',
        title: 'A Generosidade de Abrão e a Escolha de Ló',
        description: 'Para preservar a paz e o testemunho, Abrão toma a iniciativa. Embora fosse o patriarca mais velho e o portador da promessa, ele abre mão de seus direitos e oferece a Ló a primeira escolha da terra. Ló "levantou os olhos" e escolheu pela visão física: ele viu a campina do Jordão, bem regada, "como o jardim do Senhor, como a terra do Egito". Ló escolheu o conforto material e a prosperidade econômica, ignorando o perigo espiritual, pois "os homens de Sodoma eram maus e grandes pecadores contra o Senhor". Ló armou suas tendas até Sodoma, um passo fatal em direção à corrupção.'
      },
      {
        verseRef: 'v. 14-18',
        title: 'A Reafirmação da Promessa a Abrão',
        description: 'Após a separação, quando Abrão parecia ter ficado com a pior parte da terra (as montanhas áridas), Deus lhe aparece. Deus manda Abrão "levantar os olhos" (um contraste direto com o olhar cobiçoso de Ló) e olhar para o norte, sul, leste e oeste. Deus reafirma a promessa: toda a terra que ele vê será dada a ele e à sua descendência para sempre, e sua semente será como o pó da terra. A fé de Abrão é recompensada com a garantia divina. Abrão responde mudando suas tendas para Hebrom e edificando ali mais um altar ao Senhor.'
      }
    ],
    conclusion: 'A história de Abrão e Ló nos desafia a examinar como tomamos nossas decisões. Ló escolheu pelo que seus olhos podiam ver, buscando o paraíso na terra, mas acabou perdendo tudo em Sodoma. Abrão escolheu pela fé, abrindo mão de seus direitos para manter a paz, e recebeu a garantia de toda a terra por herança. A verdadeira prosperidade não está nas campinas bem regadas do mundo, mas no centro da vontade e das promessas de Deus.'
  },
  {
    id: 'gen_14_17_24',
    bookId: 'GEN',
    chapter: 14,
    startVerse: 17,
    endVerse: 24,
    title: 'Abrão e Melquisedeque',
    theme: 'A Adoração ao Deus Altíssimo e a Rejeição da Riqueza do Mundo',
    introduction: 'Após uma ousada operação militar para resgatar Ló, que havia sido capturado em uma guerra regional, Abrão retorna vitorioso. No vale de Savé, ele tem dois encontros diametralmente opostos: um com o rei de Sodoma e outro com uma figura misteriosa e majestosa chamada Melquisedeque. Este episódio testa o coração de Abrão em relação à riqueza e ao poder, e revela a superioridade do sacerdócio que abençoa em nome do Deus Altíssimo.',
    points: [
      {
        verseRef: 'v. 17-18',
        title: 'O Encontro com Melquisedeque',
        description: 'Melquisedeque, cujo nome significa "Rei de Justiça" e que é Rei de Salém ("Paz", a futura Jerusalém), sai ao encontro de Abrão. Ele é singular porque acumula dois ofícios que mais tarde seriam separados em Israel: ele é rei e "sacerdote do Deus Altíssimo" (El Elyon). Ele não traz armas, mas "pão e vinho", elementos de comunhão, refrigério e, profeticamente, da Nova Aliança. Ele é uma figura tipológica de Jesus Cristo (como explicado em Hebreus 7), um sacerdote eterno que não pertence à linhagem de Arão.'
      },
      {
        verseRef: 'v. 19-20',
        title: 'A Bênção e o Dízimo',
        description: 'Melquisedeque abençoa Abrão em nome do Deus Altíssimo, "o Possuidor dos céus e da terra", e bendiz a Deus por ter entregue os inimigos nas mãos de Abrão. Ele lembra a Abrão que a vitória não foi fruto de sua genialidade militar, mas da soberania divina. Em resposta a essa revelação e bênção, Abrão dá a Melquisedeque "o dízimo de tudo" (os despojos da guerra). O dízimo aqui não é uma exigência legal (a Lei ainda não existia), mas uma resposta espontânea de adoração, gratidão e reconhecimento da autoridade espiritual de Melquisedeque.'
      },
      {
        verseRef: 'v. 21-24',
        title: 'A Rejeição da Oferta de Sodoma',
        description: 'Imediatamente após a adoração, vem a tentação. O rei de Sodoma oferece a Abrão um acordo: "Dá-me a mim as almas, e a fazenda toma para ti". Era a chance de Abrão se tornar imensamente rico pelos padrões do mundo. No entanto, Abrão recusa categoricamente. Ele havia levantado a mão em juramento ao Deus Altíssimo e declara que não tomaria "nem um fio, nem uma correia de sapato" de Sodoma, para que o rei não pudesse dizer: "Eu enriqueci a Abrão". Abrão protege a glória de Deus, recusando-se a misturar a bênção divina com a riqueza de uma cidade corrupta.'
      }
    ],
    conclusion: 'O encontro com Melquisedeque nos ensina que a verdadeira adoração reconhece Deus como a fonte de todas as nossas vitórias. A atitude de Abrão perante o rei de Sodoma é um modelo de integridade: ele preferiu depender exclusivamente da promessa de Deus a enriquecer através de alianças comprometedoras com o mundo. Que possamos, como Abrão, oferecer o nosso melhor ao nosso Sumo Sacerdote, Jesus Cristo, e rejeitar as riquezas que roubam a glória de Deus.'
  },
  {
    id: 'gen_16_1_16',
    bookId: 'GEN',
    chapter: 16,
    startVerse: 1,
    endVerse: 16,
    title: 'Agar e Ismael: A Tentativa Humana de Ajudar Deus',
    theme: 'A Impaciência da Fé, as Consequências da Ação Carnal e o Deus que Vê',
    introduction: 'Dez anos após a promessa de Deus de que Abrão teria um filho, Sarai continua estéril. A demora no cumprimento da promessa gera impaciência e dúvida. Gênesis 16 relata a trágica tentativa de Abrão e Sarai de "ajudar" Deus a cumprir Sua palavra através de meios humanos e culturais (a barriga de aluguel através da serva Agar). Este episódio ilustra os desastres que ocorrem quando tentamos forçar os propósitos de Deus com a nossa própria força, mas também revela a profunda compaixão de Deus pelos marginalizados e oprimidos.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Plano Carnal e a Queda de Abrão',
        description: 'Sarai, frustrada com sua esterilidade, propõe uma solução baseada nos costumes legais da época, mas contrária ao plano de Deus: dar sua serva egípcia, Agar, a Abrão para que ela pudesse "edificar" uma família através dela. O texto ecoa Gênesis 3: Sarai tomou a iniciativa, Abrão "ouviu a voz de sua mulher" (em vez de consultar a Deus), tomou a serva e coabitou com ela. Quando Agar concebe, a dinâmica de poder muda, e ela passa a desprezar sua senhora. A tentativa de resolver o problema pela carne gerou orgulho e divisão imediata.'
      },
      {
        verseRef: 'v. 5-6',
        title: 'O Conflito e a Opressão',
        description: 'A casa de Abrão torna-se um ambiente tóxico. Sarai culpa Abrão pela situação que ela mesma criou ("Meu agravo seja sobre ti"). Abrão, abdicando de sua liderança e responsabilidade de proteger a vulnerável, lava as mãos e diz a Sarai para fazer o que achar melhor com a serva. Sarai aflige e oprime Agar severamente, a ponto de a serva grávida fugir para o deserto perigoso. A "solução" humana resultou em abuso, covardia e fuga.'
      },
      {
        verseRef: 'v. 7-16',
        title: 'O Encontro com o Anjo e o Deus que Vê',
        description: 'No deserto, junto a uma fonte de água, o "Anjo do Senhor" (uma manifestação pré-encarnada de Cristo) encontra Agar. Ele a chama pelo nome e reconhece sua posição ("Agar, serva de Sarai"), trazendo-a de volta à realidade. Ele ordena que ela volte e se submeta, mas acompanha a ordem com uma promessa de bênção: ela terá um filho chamado Ismael ("Deus ouve"), porque o Senhor ouviu a sua aflição. Agar, maravilhada por não ter sido destruída pela visão divina, dá a Deus um novo nome: El-Roi ("Tu és o Deus que me vê"). Ela percebe que, embora fosse uma escrava estrangeira rejeitada pelos homens, ela não era invisível para Deus.'
      }
    ],
    conclusion: 'A história de Agar e Ismael é um alerta contra a impaciência espiritual. Quando tentamos cumprir as promessas de Deus com os métodos do mundo, geramos "Ismaéis" que trarão conflito para nossas vidas. No entanto, a passagem brilha com a graça de Deus. Ele é El-Roi, o Deus que vê os oprimidos, os rejeitados e os fugitivos no deserto de suas aflições. Mesmo quando falhamos, a Sua misericórdia nos alcança e nos dá esperança.'
  },
  {
    id: 'gen_17_1_14',
    bookId: 'GEN',
    chapter: 17,
    startVerse: 1,
    endVerse: 14,
    title: 'A Aliança da Circuncisão e os Novos Nomes',
    theme: 'A Onipotência de Deus, a Transformação da Identidade e o Sinal da Aliança',
    introduction: 'Treze anos de silêncio divino se passaram desde o nascimento de Ismael. Abrão agora tem 99 anos, e a esperança humana de ter um filho com Sarai está completamente morta. É neste cenário de impossibilidade absoluta que Deus reaparece para reafirmar e expandir Sua aliança. Gênesis 17 é um capítulo de transformação: Deus revela um novo aspecto do Seu caráter, muda os nomes dos patriarcas para refletir seus novos destinos e institui a circuncisão como o selo físico e perpétuo da aliança.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Revelação de El-Shaddai e a Ordem para a Perfeição',
        description: 'Deus se apresenta a Abrão com um novo nome: "Eu sou o Deus Todo-Poderoso" (El-Shaddai). Este nome enfatiza o poder de Deus para nutrir, sustentar e fazer o impossível (como dar um filho a um casal centenário). Com a revelação do poder, vem a exigência do caráter: "anda em minha presença e sê perfeito" (íntegro, irrepreensível). A aliança exige uma vida de comunhão contínua e devoção total. Deus promete multiplicar Abrão grandissimamente.'
      },
      {
        verseRef: 'v. 3-8',
        title: 'A Mudança de Nome e a Promessa das Nações',
        description: 'Abrão cai com o rosto em terra em adoração. Deus muda seu nome de Abrão ("Pai Exaltado") para Abraão ("Pai de uma Multidão"). A mudança de nome na Bíblia significa uma mudança de identidade e destino. Deus promete que ele será pai de muitas nações e que reis sairão dele. A aliança é estabelecida como um pacto "perpétuo" entre Deus, Abraão e sua descendência, garantindo que Deus será o Deus deles e lhes dará a terra de Canaã em possessão eterna.'
      },
      {
        verseRef: 'v. 9-14',
        title: 'A Circuncisão: O Sinal na Carne',
        description: 'Deus institui a circuncisão (o corte do prepúcio) como o sinal visível e obrigatório da aliança para todos os homens da casa de Abraão, a ser realizada no oitavo dia de vida. Este sinal físico no órgão reprodutor servia como um lembrete constante de que a promessa da descendência não viria pela força da carne, mas pela fidelidade de Deus. Era um símbolo de separação do mundo e consagração a Deus. Aquele que recusasse a circuncisão estaria quebrando a aliança e seria "extirpado do seu povo".'
      }
    ],
    conclusion: 'Gênesis 17 nos ensina que servimos ao El-Shaddai, o Deus Todo-Poderoso, para quem não há impossíveis. Quando Ele entra em aliança conosco, Ele muda a nossa identidade e o nosso destino. Hoje, sob a Nova Aliança, o sinal não é mais o corte físico na carne, mas a "circuncisão do coração" operada pelo Espírito Santo (Romanos 2:29), que nos separa do pecado e nos consagra para vivermos irrepreensíveis na presença de Deus.'
  },
  {
    id: 'gen_19_1_29',
    bookId: 'GEN',
    chapter: 19,
    startVerse: 1,
    endVerse: 29,
    title: 'A Destruição de Sodoma e Gomorra',
    theme: 'A Depravação Extrema, o Juízo Implacável e o Resgate Pela Graça',
    introduction: 'A narrativa da destruição de Sodoma e Gomorra é uma das mais sombrias e solenes de toda a Escritura. Ela serve como o arquétipo bíblico do juízo divino sobre a impenitência e a perversão moral. O capítulo contrasta a depravação total da cultura de Sodoma com a justiça santa de Deus. No meio do caos, vemos a figura trágica de Ló, um homem justo que se comprometeu com o mundo, sendo salvo "como que pelo fogo" apenas por causa da intercessão de Abraão e da misericórdia soberana de Deus.',
    points: [
      {
        verseRef: 'v. 1-11',
        title: 'A Depravação de Sodoma e a Cegueira do Pecado',
        description: 'Os dois anjos chegam a Sodoma à tarde. Ló, que havia começado armando suas tendas "até Sodoma", agora está assentado "à porta" da cidade, indicando que ele havia se tornado um cidadão proeminente e juiz local. Ele insiste em hospedar os anjos para protegê-los. À noite, a verdadeira face de Sodoma é revelada: os homens da cidade, "desde o moço até ao velho", cercam a casa exigindo relações homossexuais violentas com os visitantes. A oferta desesperada e moralmente distorcida de Ló (oferecer suas filhas virgens) mostra como sua própria bússola moral havia sido corrompida pelo ambiente. Os anjos intervêm, ferindo os agressores com cegueira, mas a depravação deles é tão profunda que, mesmo cegos, eles continuam tateando para arrombar a porta.'
      },
      {
        verseRef: 'v. 12-22',
        title: 'A Hesitação de Ló e a Misericórdia Coercitiva',
        description: 'Os anjos anunciam o juízo iminente e mandam Ló tirar sua família da cidade. Ló avisa seus genros, mas eles acham que ele está zombando (o testemunho de Ló havia perdido toda a credibilidade). Ao amanhecer, os anjos apressam Ló, mas ele "se demorava". O coração de Ló estava tão apegado à cidade e às suas riquezas que ele não conseguia fugir. Num ato de pura graça coercitiva, "sendo-lhe o Senhor misericordioso", os anjos agarram as mãos de Ló, de sua mulher e de suas filhas, e os arrastam para fora da cidade. A ordem é estrita: "Escapa-te por tua vida; não olhes para trás".'
      },
      {
        verseRef: 'v. 23-29',
        title: 'O Fogo do Céu e a Estátua de Sal',
        description: 'Assim que Ló chega à pequena cidade de Zoar, o Senhor faz chover enxofre e fogo do céu sobre Sodoma e Gomorra, destruindo as cidades, a planície e todos os habitantes. O juízo é total e irreversível. Tragicamente, a mulher de Ló desobedece à ordem divina. Ela "olhou para trás" — não um mero olhar de curiosidade, mas um olhar de anseio e apego ao mundo que estava sendo destruído — e foi transformada em uma estátua de sal, um monumento perpétuo ao perigo de amar o mundo. O versículo 29 revela a verdadeira razão da salvação de Ló: "Deus se lembrou de Abraão, e tirou a Ló do meio da destruição".'
      }
    ],
    conclusion: 'Sodoma e Gomorra permanecem como um aviso eterno de que Deus não tolerará o pecado para sempre. A história de Ló é uma advertência severa para os crentes: não podemos flertar com o mundo sem sermos queimados por ele. A mulher de Ló nos ensina que não basta sair fisicamente do mundo; o mundo precisa sair do nosso coração (Lucas 17:32). A nossa salvação, assim como a de Ló, depende inteiramente da misericórdia de Deus e da intercessão do nosso grande Sumo Sacerdote, Jesus Cristo.'
  }
];

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

// Replace the pericopes
let replacedCount = 0;
for (const expanded of expandedPericopes) {
  const index = arr.findIndex(p => p.id === expanded.id);
  if (index !== -1) {
    arr[index] = expanded;
    replacedCount++;
  }
}

// Write back
const newArrayContent = JSON.stringify(arr, null, 2);
const newContent = content.substring(0, startIndex) + newArrayContent + content.substring(endIndex + 1);
fs.writeFileSync('data/pericopes_temp.ts', newContent, 'utf8');
console.log(`Expanded ${replacedCount} Genesis pericopes.`);
