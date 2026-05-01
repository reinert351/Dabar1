const fs = require('fs');

const expandedPericopes = [
  {
    id: 'gen_7_1_16',
    bookId: 'GEN',
    chapter: 7,
    startVerse: 1,
    endVerse: 16,
    title: 'O Dilúvio e a Arca: O Juízo e a Salvação',
    theme: 'A Ira Santa de Deus contra o Pecado e a Segurança dos que Estão na Arca',
    introduction: 'Gênesis 7 relata o cumprimento do juízo divino anunciado no capítulo anterior. Após 120 anos de paciência e construção da arca, o tempo da graça se esgota. O Dilúvio não é um mero desastre natural, mas uma "des-criação" cósmica: as águas que haviam sido separadas em Gênesis 1 agora se unem novamente para cobrir a terra corrompida. No entanto, no meio da destruição global, a arca flutua como um monumento da graça soberana de Deus. Esta narrativa contrasta a severidade do juízo de Deus contra o pecado impenitente com a segurança absoluta daqueles que Ele escolhe salvar.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Convite Final e a Provisão Abundante',
        description: 'Deus não diz a Noé "Entra na arca", mas "Entra tu e toda a tua casa na arca". Isso implica que Deus já estava lá dentro, convidando Noé para a Sua presença protetora. A razão da salvação de Noé é reiterada: "porque a ti vi justo diante de mim nesta geração". Deus instrui Noé a levar sete pares de animais limpos e um par de animais impuros. A distinção entre limpos e impuros antes da Lei de Moisés aponta para a necessidade de sacrifícios futuros (capítulo 8). Deus dá um prazo final de sete dias antes de enviar a chuva por quarenta dias e quarenta noites. A paciência de Deus é imensa, mas tem um limite.'
      },
      {
        verseRef: 'v. 5-12',
        title: 'A Obediência de Noé e o Início do Juízo',
        description: 'Aos 600 anos de idade, Noé obedece a tudo o que o Senhor lhe ordenou. No décimo sétimo dia do segundo mês, o juízo começa de forma cataclísmica: "romperam-se todas as fontes do grande abismo, e as janelas dos céus se abriram". A água não veio apenas de cima, mas também de baixo, indicando uma convulsão geológica massiva. O mundo antediluviano, que provavelmente nunca havia visto chuva dessa magnitude, é subitamente engolido. A obediência de Noé o colocou no único lugar seguro do universo naquele momento.'
      },
      {
        verseRef: 'v. 13-16',
        title: 'A Porta Fechada por Deus',
        description: 'No mesmo dia em que o dilúvio começou, Noé, sua família e todos os animais entraram na arca. O versículo 16 contém um dos detalhes mais teologicamente profundos e comoventes da narrativa: "e o Senhor o fechou por fora". Não foi Noé quem fechou a porta; foi o próprio Deus. Isso significa duas coisas: primeiro, a segurança de Noé estava garantida pelo próprio Deus (ninguém poderia abrir a porta e jogá-lo fora); segundo, o tempo da oportunidade para o mundo exterior havia terminado irrevogavelmente. A porta da graça, uma vez fechada por Deus, não pode ser aberta pelo homem.'
      }
    ],
    conclusion: 'O Dilúvio é um tipo do juízo final que virá sobre o mundo (2 Pedro 3). Assim como nos dias de Noé, o mundo hoje ignora os avisos divinos. No entanto, a arca é um tipo perfeito de Jesus Cristo. Assim como a arca suportou a fúria das águas do juízo para proteger os que estavam dentro, Cristo suportou a fúria da ira de Deus na cruz para salvar todos os que estão "nEle". A porta da graça ainda está aberta hoje, mas um dia o Senhor a fechará. A nossa única segurança é estar em Cristo.'
  },
  {
    id: 'gen_8_15_22',
    bookId: 'GEN',
    chapter: 8,
    startVerse: 15,
    endVerse: 22,
    title: 'O Fim do Dilúvio e o Novo Começo',
    theme: 'A Restauração da Terra, a Adoração e a Promessa de Preservação',
    introduction: 'Após mais de um ano confinado na arca, suportando o balanço das águas e o cheiro dos animais, Noé finalmente recebe a ordem de Deus para sair. Gênesis 8 marca um novo começo para a humanidade, uma "nova criação" emergindo das águas do juízo. A terra foi lavada do pecado, mas o coração humano permaneceu o mesmo. A resposta de Noé à salvação e a resposta de Deus ao sacrifício de Noé estabelecem o fundamento para a continuidade da vida no planeta, baseada não na perfeição humana, mas na graça e na promessa divinas.',
    points: [
      {
        verseRef: 'v. 15-19',
        title: 'A Ordem para Sair e Povoar a Terra',
        description: 'Assim como Noé esperou a ordem de Deus para entrar na arca, ele esperou pacientemente a ordem de Deus para sair. Deus diz: "Sai da arca, tu e tua mulher, e teus filhos...". Deus renova o mandato criacional dado a Adão: que os animais e a humanidade "povoem abundantemente a terra, e frutifiquem, e se multipliquem". A terra, antes um cemitério global, agora está pronta para ser um berçário para uma nova geração. A obediência de Noé em esperar o tempo de Deus demonstra sua submissão contínua à liderança divina.'
      },
      {
        verseRef: 'v. 20',
        title: 'O Altar e o Sacrifício de Gratidão',
        description: 'A primeira ação de Noé ao pisar na terra seca não é construir uma casa para si, mas construir um altar para o Senhor. Ele toma de todos os animais limpos e aves limpas (que haviam sido preservados em grupos de sete justamente para este propósito) e oferece holocaustos (sacrifícios totalmente queimados). Este ato de adoração reconhece que a salvação deles não foi mérito próprio, mas pura graça. O sacrifício aponta para o princípio da substituição: a vida de um inocente dada em gratidão e expiação.'
      },
      {
        verseRef: 'v. 21-22',
        title: 'O Cheiro Suave e a Promessa de Preservação',
        description: 'O Senhor sente o "suave cheiro" do sacrifício (uma metáfora para a aceitação divina da adoração de Noé). Deus faz uma promessa em Seu coração: "Não tornarei mais a amaldiçoar a terra por causa do homem; porque a imaginação do coração do homem é má desde a sua meninice". O dilúvio lavou a terra, mas não purificou o coração humano. Apesar da depravação contínua da humanidade, Deus promete preservar a ordem natural: "Enquanto a terra durar, sementeira e sega, e frio e calor, e verão e inverno, e dia e noite, não cessarão". A estabilidade do nosso ecossistema hoje é resultado direto desta promessa graciosa.'
      }
    ],
    conclusion: 'A saída da arca nos ensina que a verdadeira adoração deve ser a nossa primeira resposta à salvação de Deus. Além disso, somos lembrados de que a paciência de Deus com o mundo hoje não se baseia na bondade humana, mas na Sua promessa pactual feita após o sacrifício de Noé. O sacrifício de Noé aponta para o sacrifício perfeito de Cristo, cujo "cheiro suave" apaziguou a ira de Deus e garantiu a preservação e a redenção final de toda a criação.'
  },
  {
    id: 'gen_9_1_17',
    bookId: 'GEN',
    chapter: 9,
    startVerse: 1,
    endVerse: 17,
    title: 'A Aliança do Arco-Íris',
    theme: 'A Santidade da Vida e o Sinal da Fidelidade Divina',
    introduction: 'Em Gênesis 9, Deus estabelece formalmente uma aliança com Noé, seus descendentes e toda a criação. Esta é a primeira aliança explicitamente mencionada na Bíblia (a Aliança Noaica). Ela é universal, incondicional e perpétua. Deus reafirma o valor sagrado da vida humana, estabelece novas regras para a alimentação e a justiça, e coloca um sinal visível nos céus para garantir que a humanidade nunca mais viveria sob o terror de um dilúvio global. Esta aliança é o fundamento da preservação do mundo até o dia do juízo final.',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'O Novo Mandato e a Santidade da Vida',
        description: 'Deus abençoa Noé e repete o mandato de Gênesis 1: "Frutificai e multiplicai-vos". No entanto, o mundo mudou. O medo do homem cairá sobre os animais. Deus agora permite o consumo de carne, mas com uma restrição estrita: "a carne, porém, com sua vida, isto é, com seu sangue, não comereis". O sangue representa a vida, que pertence a Deus. Mais importante ainda, Deus estabelece a pena capital para o assassinato: "Quem derramar o sangue do homem, pelo homem o seu sangue será derramado; porque Deus fez o homem conforme a sua imagem". A vida humana é sagrada porque carrega a Imago Dei; atentar contra o homem é atentar contra a imagem do Criador.'
      },
      {
        verseRef: 'v. 8-11',
        title: 'A Aliança Universal e Incondicional',
        description: 'Deus estabelece Sua aliança não apenas com Noé, mas com "a vossa semente depois de vós" e com "toda a alma vivente" (aves, gado, animais da terra). O conteúdo da aliança é uma promessa negativa: "não será mais destruída toda a carne pelas águas do dilúvio, e que não haverá mais dilúvio, para destruir a terra". Diferente da aliança mosaica posterior, que exigia obediência, esta aliança é incondicional. Deus se compromete a preservar a terra independentemente do comportamento humano, garantindo o palco onde a história da redenção se desenrolaria.'
      },
      {
        verseRef: 'v. 12-17',
        title: 'O Arco nas Nuvens: O Sinal da Graça',
        description: 'Toda aliança bíblica tem um sinal visível (ex: circuncisão, sábado, ceia). O sinal da aliança noaica é o arco-íris: "O meu arco tenho posto na nuvem". A palavra hebraica para "arco" é a mesma usada para o arco de guerra. A imagem é poderosa: Deus pendurou o Seu arco de guerra nas nuvens, apontando para cima (para os céus) e não para baixo (para a terra). Deus diz que quando Ele vir o arco, Ele "se lembrará da aliança eterna". O arco-íris não é apenas um fenômeno óptico; é um sacramento natural, um lembrete perpétuo da misericórdia de Deus que triunfa sobre o juízo.'
      }
    ],
    conclusion: 'A Aliança do Arco-Íris nos dá a segurança de que o mundo não terminará em um cataclismo aquático, pois Deus é fiel à Sua palavra. Ela também nos lembra do imenso valor que Deus atribui à vida humana. Toda vez que vemos um arco-íris, devemos nos lembrar não apenas da tempestade que passou, mas do Deus que pendurou Suas armas de guerra e prometeu preservar a humanidade até que o Príncipe da Paz retorne para fazer novas todas as coisas.'
  },
  {
    id: 'gen_11_1_9',
    bookId: 'GEN',
    chapter: 11,
    startVerse: 1,
    endVerse: 9,
    title: 'A Torre de Babel: A Rebelião do Orgulho Humano',
    theme: 'A Busca por Autonomia, a Confusão das Línguas e a Soberania de Deus',
    introduction: 'A narrativa da Torre de Babel é o clímax da rebelião humana na história primitiva de Gênesis. Após o Dilúvio, a humanidade recebeu a ordem de se espalhar e povoar a terra. Em vez disso, eles se unem em uma planície em Sinar com um propósito unificado, mas pecaminoso: construir uma cidade e uma torre que alcance os céus. Babel representa a essência do humanismo secular e do imperialismo: a tentativa do homem de construir um paraíso na terra sem Deus, buscando glória própria e segurança na unidade autônoma. A resposta de Deus demonstra que nenhum esforço humano pode frustrar Seus propósitos soberanos.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Projeto Humanista e a Busca por Fama',
        description: 'A humanidade tinha "uma mesma língua e uma mesma fala", o que facilitava a cooperação extrema. Eles decidem usar a nova tecnologia (tijolos queimados e betume) não para glorificar a Deus, mas para exaltar a si mesmos. O projeto tem dois objetivos declarados: "façamo-nos um nome" (orgulho e fama) e "para que não sejamos espalhados sobre a face de toda a terra" (desobediência direta ao mandato de Gênesis 9:1). A torre (provavelmente um zigurate) era um templo pagão, uma escada pela qual eles tentavam alcançar o divino pelos próprios esforços, estabelecendo o homem como a medida de todas as coisas.'
      },
      {
        verseRef: 'v. 5-7',
        title: 'A Descida de Deus e a Ironia Divina',
        description: 'O versículo 5 contém uma das maiores ironias da Bíblia: "Então desceu o Senhor para ver a cidade e a torre que os filhos dos homens edificavam". Os homens construíram a torre mais alta possível para alcançar os céus, mas do ponto de vista de Deus, a torre era tão insignificante que Ele teve que "descer" para conseguir vê-la. Deus avalia a situação: a unidade deles no pecado os tornaria imparáveis na maldade ("agora não haverá restrição para tudo o que eles intentarem fazer"). A intervenção de Deus é um ato de juízo, mas também de misericórdia, impedindo a humanidade de se autodestruir rapidamente através de um totalitarismo global do mal.'
      },
      {
        verseRef: 'v. 8-9',
        title: 'A Confusão e a Dispersão',
        description: 'Deus diz: "Eia, desçamos e confundamos ali a sua língua, para que não entenda um a língua do outro". A comunicação é quebrada instantaneamente. Sem a capacidade de se entenderem, a cooperação cessa, o projeto é abandonado e a humanidade é forçada a se espalhar pela face da terra, cumprindo o propósito original de Deus de forma coercitiva. O lugar é chamado Babel (que soa como a palavra hebraica para "confusão"). O que começou como um monumento ao orgulho humano terminou como um símbolo de confusão e fracasso.'
      }
    ],
    conclusion: 'Babel nos ensina que qualquer tentativa de construir a vida, a sociedade ou a igreja baseada no orgulho humano e na independência de Deus está fadada à confusão e à ruína. Deus resiste aos soberbos. O antídoto para Babel é Pentecostes (Atos 2), onde Deus não confunde as línguas para espalhar os homens em rebelião, mas dá o dom de línguas para unir homens de todas as nações na adoração a Jesus Cristo. A verdadeira unidade e o verdadeiro "nome" só são encontrados na submissão ao Reino de Deus.'
  },
  {
    id: 'gen_12_1_9',
    bookId: 'GEN',
    chapter: 12,
    startVerse: 1,
    endVerse: 9,
    title: 'O Chamado de Abrão: O Início da Redenção',
    theme: 'A Jornada da Fé, a Renúncia Radical e a Promessa da Aliança',
    introduction: 'O chamado de Abrão (mais tarde Abraão) em Gênesis 12 marca o ponto de virada mais crucial em toda a história bíblica. Após a rebelião global e a dispersão em Babel, Deus muda Sua estratégia redentora. Em vez de lidar com as nações em massa, Ele escolhe um homem comum, de uma família idólatra em Ur dos Caldeus, para iniciar uma nova nação através da qual o Messias viria para abençoar o mundo inteiro. Este texto é o paradigma definitivo da jornada da fé: um chamado para deixar o conhecido e caminhar em direção às promessas invisíveis de Deus, confiando exclusivamente na autoridade e na fidelidade da Sua Palavra.',
    points: [
      {
        verseRef: 'v. 1',
        title: 'O Desafio da Renúncia Radical',
        description: 'O chamado de Deus começa com um imperativo difícil e uma exigência de renúncia total: "Sai-te da tua terra, da tua parentela e da casa de teu pai, para a terra que eu te mostrarei". Deus pede que Abrão abandone suas três maiores fontes de segurança, identidade e provisão no mundo antigo: sua pátria, sua tribo e sua herança familiar. A fé frequentemente exige que abandonemos nossas zonas de conforto, nossas seguranças terrenas e nosso passado idólatra para podermos abraçar o futuro que Deus tem preparado. O destino não é revelado de imediato; a única bússola de Abrão seria a voz de Deus.'
      },
      {
        verseRef: 'v. 2-3',
        title: 'A Grandeza da Promessa e a Missão Global',
        description: 'Acompanhando a ordem difícil, Deus faz sete promessas extraordinárias, que formam o núcleo da Aliança Abraâmica. Deus promete fazer dele uma grande nação (uma promessa absurda, visto que sua esposa Sarai era estéril e idosa), abençoá-lo, engrandecer o seu nome (o que os homens de Babel tentaram fazer por si mesmos, Deus faz por Abrão) e protegê-lo ("abençoarei os que te abençoarem..."). No entanto, o propósito final dessa bênção não é o privilégio egoísta, mas a missão redentora: "e em ti serão benditas todas as famílias da terra". A eleição de Abrão não foi para exclusivismo, mas para ser o canal da salvação global. Somos abençoados por Deus com o propósito expresso de sermos uma bênção para as nações.'
      },
      {
        verseRef: 'v. 4-9',
        title: 'A Resposta da Obediência e a Adoração na Jornada',
        description: 'A resposta de Abrão é o modelo atemporal da fé obediente: "Assim partiu Abrão como o Senhor lhe tinha dito". Ele não argumentou, não pediu um mapa detalhado e não exigiu garantias visíveis. Aos 75 anos de idade, ele iniciou uma jornada de peregrinação. Ao chegar à terra de Canaã, o texto nota ominosamente que "os cananeus estavam então na terra". Apesar da oposição visível, Deus aparece a ele novamente e reafirma a promessa: "À tua descendência darei esta terra". A resposta de Abrão é construir altares (em Siquém e entre Betel e Ai). Os altares marcam sua jornada com adoração, sacrifício e um testemunho público de sua fé no Deus invisível em meio a uma terra dominada pelo paganismo.'
      }
    ],
    conclusion: 'A verdadeira fé não é apenas um assentimento intelectual a fatos teológicos, mas uma confiança ativa que resulta em obediência radical, mesmo quando não vemos o destino final ou quando as circunstâncias parecem contradizer a promessa. A jornada de Abraão nos ensina que a vida cristã é uma peregrinação constante, onde a nossa única segurança verdadeira é a promessa inabalável daquele que nos chamou das trevas para a Sua maravilhosa luz.'
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
