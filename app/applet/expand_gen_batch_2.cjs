const fs = require('fs');

const expandedPericopes = [
  {
    id: 'gen_33_1_17',
    bookId: 'GEN',
    chapter: 33,
    startVerse: 1,
    endVerse: 17,
    title: 'O Reencontro de Jacó e Esaú',
    theme: 'A Reconciliação, o Medo e a Graça Inesperada',
    introduction: 'Após vinte anos de exílio e uma noite de luta transformadora com Deus no vau do Jaboque (onde seu nome foi mudado para Israel), Jacó finalmente enfrenta seu maior medo: o reencontro com seu irmão Esaú, que vinha ao seu encontro com 400 homens. Jacó havia se preparado para a guerra ou para a morte, mas o que ele encontra é uma demonstração surpreendente de graça e perdão. Este capítulo ilustra como Deus pode abrandar corações endurecidos e como a verdadeira reconciliação exige humildade.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Preparação e a Submissão de Jacó',
        description: 'Ao ver Esaú se aproximando com um exército, Jacó divide sua família, colocando as servas na frente, Lia no meio, e Raquel e José por último (mostrando ainda seu favoritismo). No entanto, o Jacó que agora caminha à frente deles não é o mesmo homem arrogante de antes. Ele manca (resultado de sua luta com Deus) e se prostra em terra sete vezes antes de chegar ao irmão. Esta é a postura de um vassalo diante de um rei. O homem que roubou a bênção do domínio agora se submete voluntariamente.'
      },
      {
        verseRef: 'v. 4-11',
        title: 'O Abraço do Perdão e a Restituição',
        description: 'A reação de Esaú quebra todas as expectativas de Jacó. Esaú corre, abraça-o, lança-se ao seu pescoço e o beija; e ambos choram. O ódio de vinte anos derreteu. Quando Esaú pergunta sobre o enorme rebanho que Jacó havia enviado à frente como presente, ele inicialmente recusa, dizendo: "Eu tenho bastante, meu irmão". Mas Jacó insiste vigorosamente para que ele aceite a "bênção" (a mesma palavra hebraica usada para a bênção que ele havia roubado). Jacó está, na prática, restituindo a bênção material a Esaú. Jacó declara que ver o rosto de Esaú foi como "ver o rosto de Deus", pois ele encontrou graça onde esperava juízo.'
      },
      {
        verseRef: 'v. 12-17',
        title: 'A Separação Pacífica',
        description: 'Esaú propõe que viajem juntos para Seir, mas Jacó, com diplomacia, recusa. Ele argumenta que os rebanhos e as crianças são frágeis e não podem acompanhar o ritmo dos homens de Esaú. Jacó promete ir a Seir, mas na verdade viaja para Sucote e depois para Siquém, em Canaã. Embora reconciliados, eles tomam caminhos diferentes. A promessa divina exigia que Jacó habitasse na Terra Prometida, separando a linhagem da aliança da linhagem de Edom.'
      }
    ],
    conclusion: 'O reencontro de Jacó e Esaú é um dos mais belos quadros de perdão do Antigo Testamento. Ele nos ensina que, quando nossos caminhos agradam ao Senhor, Ele faz com que até nossos inimigos tenham paz conosco (Pv 16:7). A humildade de Jacó e a generosidade de Esaú mostram que a reconciliação é possível mesmo após décadas de amargura. Acima de tudo, vemos a fidelidade de Deus, que protegeu Jacó e cumpriu Sua promessa de trazê-lo de volta em paz à terra de seus pais.'
  },
  {
    id: 'gen_35_1_15',
    bookId: 'GEN',
    chapter: 35,
    startVerse: 1,
    endVerse: 15,
    title: 'O Retorno a Betel',
    theme: 'Purificação, Renovação da Aliança e o Fim da Jornada',
    introduction: 'Após o trágico e violento incidente envolvendo Diná em Siquém (Gênesis 34), a família de Jacó está em perigo e espiritualmente contaminada. É neste momento de crise que Deus chama Jacó de volta ao ponto de partida de sua jornada espiritual: Betel. Gênesis 35 marca um ponto de virada definitivo. É um capítulo de purificação radical, onde a família abandona seus ídolos, e Deus reafirma a mudança do nome de Jacó para Israel, consolidando a aliança patriarcal antes da transição para a história de José.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Chamado e a Purificação da Casa',
        description: 'Deus ordena a Jacó: "Levanta-te, sobe a Betel, e habita ali; e faze ali um altar ao Deus que te apareceu quando fugias da face de Esaú". Jacó entende que não pode voltar a Betel do jeito que está. Ele ordena à sua família uma reforma espiritual completa: "Tirai os deuses estranhos que há no meio de vós, e purificai-vos, e mudai as vossas vestes". A família entrega todos os ídolos (provavelmente trazidos por Raquel de Padã-Arã e os despojos de Siquém) e as arrecadas (brincos usados como amuletos). Jacó os enterra debaixo de um carvalho. A verdadeira adoração exige arrependimento e separação do mundo.'
      },
      {
        verseRef: 'v. 5-8',
        title: 'O Terror de Deus e a Chegada a Betel',
        description: 'Enquanto viajam, o "terror de Deus" cai sobre as cidades vizinhas, impedindo que persigam a família de Jacó em vingança pelo massacre de Siquém. A obediência de Jacó traz a proteção divina. Ao chegar a Luz (Betel), Jacó edifica o altar e chama o lugar de El-Betel ("O Deus da Casa de Deus"). O foco de Jacó mudou: antes, o lugar era importante (Betel); agora, o Deus do lugar é o centro de sua adoração.'
      },
      {
        verseRef: 'v. 9-15',
        title: 'A Confirmação de Israel e da Promessa',
        description: 'Deus aparece a Jacó novamente e confirma a mudança de seu nome: "Não te chamarás mais Jacó, mas Israel será o teu nome". Deus se revela como El-Shaddai (o Deus Todo-Poderoso, o mesmo nome usado com Abraão em Gn 17). Deus transfere formalmente a Jacó as promessas da aliança abraâmica: fecundidade, uma nação, uma companhia de nações, reis saindo de seus lombos, e a posse eterna da terra. Jacó erige uma coluna de pedra e derrama sobre ela uma libação e azeite, selando o momento de consagração total.'
      }
    ],
    conclusion: 'O retorno a Betel nos lembra que, não importa o quão longe tenhamos nos desviado ou o quão contaminados estejamos pelas influências do mundo, Deus sempre nos chama de volta ao "primeiro amor" e ao altar do arrependimento. A experiência de Jacó mostra que a renovação espiritual exige uma ação decisiva: devemos "enterrar" nossos ídolos e mudar nossas vestes espirituais. Quando nos purificamos e obedecemos, experimentamos a proteção de Deus e a confirmação de nossa nova identidade em Cristo.'
  },
  {
    id: 'gen_39_1_23',
    bookId: 'GEN',
    chapter: 39,
    startVerse: 1,
    endVerse: 23,
    title: 'José na Casa de Potifar e na Prisão',
    theme: 'A Presença de Deus na Adversidade e a Integridade Inabalável',
    introduction: 'A história de José é uma das mais belas narrativas de providência e caráter na Bíblia. Vendido como escravo por seus próprios irmãos, José encontra-se no Egito, longe de sua família e de suas promessas. Gênesis 39 contrasta drasticamente com a moralidade falha de seus irmãos (visto no capítulo anterior com Judá). Aqui, vemos um jovem que, apesar de perder tudo, não perdeu sua fé nem sua pureza. O refrão constante deste capítulo é: "O Senhor estava com José", provando que a bênção de Deus não depende de circunstâncias favoráveis.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Prosperidade na Escravidão',
        description: 'José é comprado por Potifar, capitão da guarda de Faraó. Apesar de ser um escravo estrangeiro, José prospera porque "o Senhor estava com ele". Potifar percebe que a bênção divina repousa sobre José e o promove a mordomo de toda a sua casa. Deus abençoa a casa do egípcio por amor a José. A fidelidade de José nas pequenas coisas o levou a uma posição de total confiança, onde Potifar não se preocupava com nada, a não ser com a comida que comia.'
      },
      {
        verseRef: 'v. 7-12',
        title: 'A Tentação e a Fuga',
        description: 'José era "formoso de porte e de semblante". A esposa de Potifar lança os olhos sobre ele e o tenta repetidamente, dia após dia, para que se deite com ela. A resposta de José é um monumento à integridade: ele recusa trair a confiança de seu senhor terreno, mas, acima de tudo, ele vê o pecado em sua verdadeira dimensão teológica: "Como, pois, faria eu este tamanho mal, e pecaria contra Deus?". Quando ela o agarra pela capa, José não tenta argumentar; ele foge, deixando a capa para trás. Ele preferiu perder sua capa e sua liberdade a perder sua pureza.'
      },
      {
        verseRef: 'v. 13-23',
        title: 'A Injustiça e a Prisão Abençoada',
        description: 'Rejeitada, a esposa de Potifar usa a capa de José para acusá-lo falsamente de tentativa de estupro. Potifar, enfurecido, lança José na prisão do rei. A obediência a Deus resultou em injustiça e sofrimento. No entanto, o capítulo termina exatamente como começou: "O Senhor, porém, estava com José". Deus estende Sua benignidade a José na prisão, dando-lhe graça aos olhos do carcereiro. Novamente, José é colocado no comando de tudo. As grades não puderam prender a bênção de Deus.'
      }
    ],
    conclusion: 'Gênesis 39 nos ensina que a presença de Deus não nos isenta de provações, mas nos sustenta através delas. José é um modelo de como resistir à tentação: ele chamou o pecado pelo que ele é (uma ofensa contra Deus) e fugiu da aparência do mal. Mesmo quando sua integridade foi recompensada com injustiça, ele não se amargurou. Ele continuou servindo com excelência onde Deus o plantou. A história de José nos garante que, se o Senhor estiver conosco, podemos ser livres e prósperos até mesmo dentro de uma prisão.'
  },
  {
    id: 'gen_40_1_23',
    bookId: 'GEN',
    chapter: 40,
    startVerse: 1,
    endVerse: 23,
    title: 'José Interpreta os Sonhos na Prisão',
    theme: 'O Dom Divino, a Fidelidade no Esquecimento e a Preparação para o Trono',
    introduction: 'O tempo de José na prisão se prolonga. Gênesis 40 relata um evento aparentemente pequeno, mas que se tornará a chave para a libertação de José e a salvação de nações. Dois altos oficiais de Faraó são presos e têm sonhos perturbadores. A forma como José lida com esses homens revela seu coração compassivo e sua fé inabalável de que as revelações pertencem a Deus. Este capítulo é um teste de paciência, onde José faz o bem, mas é esquecido pelos homens, forçando-o a esperar exclusivamente no tempo de Deus.',
    points: [
      {
        verseRef: 'v. 1-8',
        title: 'A Empatia de José e a Glória a Deus',
        description: 'O copeiro-mor e o padeiro-mor de Faraó são lançados na mesma prisão que José. José é encarregado de servi-los. Uma manhã, José nota que eles estão tristes. Em vez de focar em sua própria miséria, José demonstra empatia e pergunta o motivo. Eles lamentam ter tido sonhos sem ninguém para interpretá-los. A resposta de José é imediata e teocêntrica: "Não pertencem a Deus as interpretações?". José não reivindica poder mágico, mas aponta os homens pagãos para o Deus verdadeiro.'
      },
      {
        verseRef: 'v. 9-19',
        title: 'As Interpretações: Vida e Morte',
        description: 'O copeiro conta seu sonho (uma videira com três ramos, da qual ele espreme uvas no copo de Faraó). José interpreta: em três dias, Faraó o restaurará ao seu cargo. José aproveita para fazer um pedido humilde: "Lembra-te de mim... e faze menção de mim a Faraó", declarando sua inocência. Encorajado, o padeiro conta seu sonho (três cestos de pão em sua cabeça, com aves comendo deles). A interpretação de José é corajosa e sombria: em três dias, Faraó o enforcará, e as aves comerão sua carne. José fala a verdade de Deus, seja ela de salvação ou de juízo.'
      },
      {
        verseRef: 'v. 20-23',
        title: 'O Cumprimento e o Esquecimento',
        description: 'No terceiro dia (aniversário de Faraó), tudo acontece exatamente como José predisse: o copeiro é restaurado e o padeiro é enforcado. O palco parecia montado para a libertação imediata de José. No entanto, o capítulo termina com uma das frases mais dolorosas da narrativa: "O copeiro-mor, porém, não se lembrou de José, antes se esqueceu dele". José permaneceria na prisão por mais dois longos anos. A esperança humana falhou.'
      }
    ],
    conclusion: 'Este capítulo nos ensina sobre o ministério na obscuridade. José usou seus dons para abençoar os outros, mesmo quando ele mesmo estava sofrendo. Ele deu a glória a Deus pelas interpretações e falou a verdade sem medo. O esquecimento do copeiro foi uma dura provação, mas era parte do plano soberano de Deus. Se José tivesse sido libertado naquele momento, ele teria voltado para Canaã. Deus o manteve na prisão até o momento exato em que Faraó precisaria dele, provando que os atrasos de Deus não são negativas, mas preparações para algo muito maior.'
  },
  {
    id: 'gen_41_1_36',
    bookId: 'GEN',
    chapter: 41,
    startVerse: 1,
    endVerse: 36,
    title: 'Os Sonhos de Faraó e a Exaltação de José',
    theme: 'A Soberania de Deus sobre as Nações e a Sabedoria do Espírito',
    introduction: 'Após dois anos de silêncio e espera na prisão, o relógio de Deus finalmente desperta. Gênesis 41 é o clímax da história de José, o momento em que ele passa da masmorra para o palácio em um único dia. Deus perturba o homem mais poderoso do mundo (Faraó) com sonhos que a sabedoria do Egito não pode decifrar. O palco é montado para que o Deus de Israel seja glorificado através de Seu servo. Este capítulo ilustra como Deus orquestra eventos globais para cumprir Seus propósitos e como Ele exalta os humildes a Seu tempo.',
    points: [
      {
        verseRef: 'v. 1-13',
        title: 'Os Sonhos de Faraó e a Falha do Egito',
        description: 'Faraó tem dois sonhos perturbadores: sete vacas magras devoram sete vacas gordas, e sete espigas mirradas devoram sete espigas cheias. Pela manhã, seu espírito está perturbado. Ele convoca todos os magos e sábios do Egito, mas ninguém consegue interpretar os sonhos. A sabedoria humana falha diante da revelação divina. É neste momento de crise nacional que a memória do copeiro-mor é finalmente "despertada" por Deus. Ele confessa sua falha e fala a Faraó sobre o jovem hebreu na prisão que interpretou seu sonho com exatidão.'
      },
      {
        verseRef: 'v. 14-24',
        title: 'José Diante de Faraó: A Glória a Deus',
        description: 'José é tirado às pressas da masmorra, barbeia-se e troca de roupas para se apresentar ao rei. Quando Faraó diz que ouviu que José pode interpretar sonhos, a resposta de José é um testemunho ousado da supremacia de Deus: "Isso não está em mim; Deus dará resposta de paz a Faraó". José, um escravo diante do monarca absoluto, não tenta impressionar Faraó com suas próprias habilidades, mas imediatamente aponta para o Senhor como a única fonte de verdade.'
      },
      {
        verseRef: 'v. 25-36',
        title: 'A Interpretação e o Plano de Salvação',
        description: 'José ouve os sonhos e declara que ambos são um só: Deus está mostrando a Faraó o que Ele está prestes a fazer. Haverá sete anos de grande fartura, seguidos por sete anos de fome tão severa que a fartura será esquecida. O fato de o sonho ser duplo significa que a coisa é estabelecida por Deus e acontecerá em breve. José não apenas interpreta o sonho, mas, movido pelo Espírito, oferece um plano de ação sábio: Faraó deve escolher um homem "entendido e sábio" para administrar o Egito, cobrando a quinta parte das colheitas nos anos bons para armazenar para os anos de fome, salvando assim a terra da destruição.'
      }
    ],
    conclusion: 'A exaltação de José é um testemunho poderoso de que Deus é o Senhor da história. Ele controla os sonhos dos reis e as colheitas da terra. A atitude de José diante de Faraó nos ensina a dar sempre a glória a Deus por nossos dons e sucessos. A sabedoria de José não consistia apenas em saber o futuro, mas em saber o que fazer com essa revelação. Aquele que foi fiel administrando a casa de Potifar e a prisão, agora é considerado digno de administrar um império, provando que a fidelidade no pouco é a preparação de Deus para o muito.'
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
console.log(`Expanded ${replacedCount} Genesis pericopes (Batch 2).`);
