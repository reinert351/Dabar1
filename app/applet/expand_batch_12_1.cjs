const fs = require('fs');

const expandedPericopes = [
  {
    id: 'deu_31_1_8',
    bookId: 'DEU',
    chapter: 31,
    startVerse: 1,
    endVerse: 8,
    title: 'A Passagem da Liderança para Josué',
    theme: 'A Continuidade da Missão, a Coragem e a Presença Inabalável de Deus',
    introduction: 'O tempo de Moisés chegou ao fim. Com 120 anos, ele não pode mais liderar Israel na travessia do Jordão. Em Deuteronômio 31, testemunhamos uma das transições de liderança mais saudáveis e inspiradoras da Bíblia. Moisés não se apega ao poder nem deixa o povo na incerteza. Ele transfere publicamente a autoridade para Josué, mas, acima de tudo, ele transfere a confiança do povo de um líder humano (que é mortal e falho) para o Senhor (que é eterno e fiel). A mensagem central é que a obra de Deus não morre com os Seus servos; ela continua porque o próprio Deus vai adiante do Seu povo.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Fim de uma Era e a Promessa do Novo Líder',
        description: 'Moisés reconhece suas limitações físicas e a disciplina divina: "da idade de cento e vinte anos sou eu hoje; já não posso sair e entrar, além de que o Senhor me disse: Não passarás este Jordão". Em vez de causar pânico, ele imediatamente aponta para a verdadeira fonte de vitória: "O Senhor teu Deus passará adiante de ti... e Josué passará adiante de ti, como o Senhor tem falado". A liderança humana muda, mas a liderança divina permanece constante.'
      },
      {
        verseRef: 'v. 4-6',
        title: 'A Ordem para a Coragem Baseada na Fidelidade Passada',
        description: 'Moisés encoraja o povo lembrando o que Deus fez aos reis amorreus (Seom e Ogue). A vitória futura em Canaã é garantida pelas vitórias passadas. Por isso, ele ordena: "Esforçai-vos, e animai-vos; não temais, nem vos espanteis diante deles". O motivo dessa coragem não é a força militar de Israel, mas a promessa inquebrável: "porque o Senhor teu Deus é o que vai contigo; não te deixará nem te desamparará". O medo é vencido pela certeza da presença de Deus.'
      },
      {
        verseRef: 'v. 7-8',
        title: 'A Investidura Pública de Josué',
        description: 'Moisés chama Josué e o encoraja diante de todo o Israel. Ele repete a ordem: "Esforça-te e anima-te". A tarefa de Josué é colossal: introduzir o povo na terra e fazê-los herdá-la. Moisés dá a Josué a garantia definitiva para o sucesso na liderança: "O Senhor, pois, é aquele que vai adiante de ti; ele será contigo, não te deixará, nem te desamparará; não temas, nem te espantes". O líder não precisa carregar o peso sozinho; ele apenas segue Aquele que já abriu o caminho.'
      }
    ],
    conclusion: 'A transição de Moisés para Josué nos ensina que o Reino de Deus é maior do que qualquer indivíduo. Líderes extraordinários morrem, mas o Deus que os capacitou vive para sempre. A promessa "não te deixará nem te desamparará" é tão poderosa que o autor de Hebreus (Hb 13:5) a aplica a todos os crentes da Nova Aliança. Quando enfrentamos transições difíceis, perdas de referências ou novos desafios assustadores, não precisamos entrar em pânico. O mesmo Deus que foi com Moisés e Josué vai adiante de nós, garantindo que a Sua promessa se cumprirá.'
  },
  {
    id: 'deu_32_1_14',
    bookId: 'DEU',
    chapter: 32,
    startVerse: 1,
    endVerse: 14,
    title: 'O Cântico de Moisés: A Rocha e o Povo',
    theme: 'A Fidelidade do Criador, a Ingratidão Humana e o Cuidado Paterno',
    introduction: 'Deuteronômio 32 contém o "Cântico de Moisés", um poema profético que Deus mandou Moisés ensinar a Israel para servir como testemunha contra eles nas gerações futuras. Os primeiros 14 versículos estabelecem o contraste fundamental de toda a história bíblica: a perfeição e a fidelidade absolutas de Deus versus a corrupção e a ingratidão do Seu povo. Moisés usa imagens poéticas poderosas, especialmente a metáfora de Deus como a "Rocha", para descrever a segurança inabalável que o Senhor oferece a uma nação que Ele encontrou no deserto e cuidou como a menina dos Seus olhos.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Doutrina como Chuva e Deus como a Rocha',
        description: 'Moisés convoca os céus e a terra para ouvirem. Ele deseja que o seu ensino caia como chuva e orvalho sobre a relva, trazendo vida e refrigério. Ele então proclama o nome do Senhor e declara o Seu caráter: "Ele é a Rocha, cuja obra é perfeita, porque todos os seus caminhos justos são; Deus é a verdade, e não há nele injustiça; justo e reto é". A "Rocha" simboliza estabilidade, refúgio e imutabilidade em um mundo de areias movediças.'
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Acusação de Ingratidão e Corrupção',
        description: 'Em contraste com a Rocha perfeita, Israel é descrito como uma "geração perversa e distorcida". Eles se corromperam e agiram de forma indigna de serem chamados Seus filhos. Moisés faz uma pergunta retórica dolorosa: "Recompensais assim ao Senhor, povo louco e ignorante? Não é ele teu pai que te adquiriu, te fez e te estabeleceu?". A rebelião contra Deus não é apenas quebra de regras; é uma traição profunda contra um Pai amoroso que os criou e redimiu.'
      },
      {
        verseRef: 'v. 7-14',
        title: 'O Cuidado Maternal e a Provisão Abundante',
        description: 'Moisés manda o povo lembrar dos dias da antiguidade. Ele descreve como Deus encontrou Israel "numa terra deserta, e num ermo solitário", o instruiu, o guardou "como a menina do seu olho". A imagem muda para uma águia que desperta o seu ninho, adeja sobre os seus filhotes e os leva sobre as suas asas. Deus os fez cavalgar sobre as alturas da terra e os alimentou com o melhor: mel da rocha, azeite, manteiga, leite, a gordura dos cordeiros e o sangue das uvas. A provisão de Deus foi extravagante e imerecida.'
      }
    ],
    conclusion: 'O Cântico de Moisés é um lembrete poético de que o nosso relacionamento com Deus é baseado na Sua graça, não no nosso mérito. Ele é a nossa Rocha inabalável. A imagem de Deus cuidando de nós "como a menina do seu olho" e nos carregando "sobre asas de águias" revela uma ternura que desafia a visão de um Deus distante e severo. No entanto, o cântico também serve como um alerta: a abundância da provisão de Deus muitas vezes nos leva ao esquecimento e à ingratidão. Devemos sempre lembrar de onde Deus nos tirou (o deserto) para nunca desprezarmos a Rocha da nossa salvação.'
  },
  {
    id: 'deu_33_1_5',
    bookId: 'DEU',
    chapter: 33,
    startVerse: 1,
    endVerse: 5,
    title: 'A Bênção Final de Moisés',
    theme: 'A Majestade Divina, o Amor pelo Povo e a Entrega da Lei',
    introduction: 'Antes de subir ao Monte Nebo para morrer, Moisés, o "homem de Deus", pronuncia uma bênção profética sobre as tribos de Israel. Deuteronômio 33 segue a tradição de Jacó (Gênesis 49), mas com um tom muito mais luminoso e triunfante. Os primeiros cinco versículos servem como um prólogo majestoso para as bênçãos individuais. Moisés não começa focando nas tribos, mas na glória de Deus que se revelou no Sinai. Ele celebra o amor de Deus pelos Seus santos e o presente inestimável da Lei, que formou Israel como uma nação sob o reinado do próprio Yahweh.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Teofania no Sinai: A Luz que Raiou',
        description: 'Moisés descreve a vinda de Deus ao Sinai usando a linguagem do nascer do sol: "O Senhor veio de Sinai, e lhes subiu de Seir; resplandeceu desde o monte Parã". A revelação de Deus dissipou as trevas do mundo antigo. Ele não veio sozinho, mas "com dez milhares de santos" (anjos). Na Sua mão direita havia uma "lei de fogo" para eles. A entrega da Lei não foi um evento burocrático, mas uma manifestação aterrorizante e gloriosa do poder e da santidade divina.'
      },
      {
        verseRef: 'v. 3',
        title: 'O Amor de Deus e a Posição dos Santos',
        description: 'Apesar do fogo e do terror do Sinai, o motivo da revelação foi o amor: "Na verdade ama os povos". O texto descreve a posição privilegiada do povo de Deus: "todos os seus santos estão na tua mão". Estar na mão de Deus significa proteção absoluta e posse exclusiva. A atitude do povo é de submissão e discipulado: "eles se prostraram aos teus pés; cada um receberá das tuas palavras". A verdadeira adoração é sentar-se aos pés de Deus para ouvir a Sua voz.'
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Lei como Herança e Deus como Rei',
        description: 'Moisés resume o seu próprio legado: "Moisés nos deu a lei, por herança da congregação de Jacó". A Lei (Torá) não era vista como um fardo, mas como o maior tesouro e herança da nação, algo que lhes dava identidade e sabedoria. O versículo 5 declara o resultado dessa aliança: "E foi rei em Jesurum (Israel), quando se congregaram os cabeças do povo com as tribos de Israel". Antes de terem um rei humano, Israel já tinha um Rei: o próprio Deus governando através da Sua Palavra.'
      }
    ],
    conclusion: 'A bênção final de Moisés nos lembra que a grandeza de uma nação ou de uma igreja não reside em sua força política, mas na presença gloriosa de Deus e na posse da Sua Palavra. A imagem dos santos "na mão de Deus" e "prostrados aos Seus pés" é o retrato perfeito da vida cristã: estamos eternamente seguros na mão do Pai (João 10:28) e somos chamados a viver como discípulos aos pés de Cristo, recebendo as Suas palavras. A Lei foi a herança de Israel, mas o Evangelho da graça é a nossa herança eterna, revelando o amor de um Deus que não apenas nos deu mandamentos, mas deu o Seu próprio Filho.'
  },
  {
    id: 'deu_34_1_12',
    bookId: 'DEU',
    chapter: 34,
    startVerse: 1,
    endVerse: 12,
    title: 'A Morte e o Legado de Moisés',
    theme: 'A Visão da Promessa, o Fim do Profeta Incomparável e a Fidelidade de Deus',
    introduction: 'Deuteronômio 34 é o epitáfio de Moisés, provavelmente escrito por Josué. É um dos capítulos mais emocionantes da Bíblia. Moisés, o libertador, o legislador e o amigo de Deus, sobe ao Monte Nebo para ver a Terra Prometida que ele não poderá pisar. Sua morte solitária no monte, sepultado pelo próprio Deus, marca o fim da era fundacional de Israel. No entanto, o texto não termina em desespero, mas em esperança. A promessa de Deus continua com Josué, e o legado de Moisés permanece como o padrão insuperável de intimidade profética no Antigo Testamento.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Visão da Terra Prometida',
        description: 'Moisés sobe das campinas de Moabe ao monte Nebo, ao cume de Pisga. Ali, o Senhor lhe mostra milagrosamente toda a terra de Canaã, de Gileade até Dã, até o mar ocidental (Mediterrâneo) e o Neguebe. Deus diz: "Esta é a terra que jurei a Abraão, Isaque e Jacó... te fiz vê-la com os teus olhos, porém para lá não passarás". Moisés experimenta a dor da consequência do seu pecado, mas também a graça de ver com os próprios olhos que Deus cumpriu a Sua promessa. A visão da terra é a recompensa final da sua fé.'
      },
      {
        verseRef: 'v. 5-8',
        title: 'A Morte Solitária e o Sepultamento Divino',
        description: 'Moisés morre ali, "segundo a palavra do Senhor" (literalmente, "pela boca do Senhor", o que os rabinos interpretam como "pelo beijo de Deus"). O detalhe mais fascinante é que o próprio Deus o sepultou num vale, "e ninguém sabe o seu sepulcro até hoje". Isso evitou que o túmulo de Moisés se tornasse um santuário de idolatria. Moisés morreu com 120 anos, mas "os seus olhos não se escureceram, nem o seu vigor fugiu". Ele não morreu de velhice, mas porque o seu tempo e a sua missão haviam terminado.'
      },
      {
        verseRef: 'v. 9-12',
        title: 'O Sucessor Cheio do Espírito e o Legado Incomparável',
        description: 'O povo chora por 30 dias, mas a liderança continua: Josué estava "cheio do espírito de sabedoria", porque Moisés havia imposto as mãos sobre ele. O texto conclui com um tributo majestoso: "E nunca mais se levantou em Israel profeta algum como Moisés, a quem o Senhor conhecera face a face". Moisés foi único nos sinais e maravilhas que realizou no Egito e no "grande terror" que operou no deserto. Sua grandeza não estava em sua perfeição, mas em sua intimidade incomparável com Deus.'
      }
    ],
    conclusion: 'A morte de Moisés nos ensina que até os maiores heróis da fé são mortais e falhos, mas os propósitos de Deus são imortais. Moisés viu a promessa de longe, assim como os patriarcas (Hebreus 11:13). A sua exclusão da terra física aponta para uma verdade espiritual: a Lei (Moisés) pode nos mostrar a promessa, mas não pode nos salvar; apenas a Graça (Josué/Jesus) pode nos fazer entrar no descanso. O tributo final a Moisés ("conhecia face a face") antecipa a vinda do único Profeta maior que ele: Jesus Cristo, o Verbo encarnado, que estava no seio do Pai e O revelou perfeitamente a nós (João 1:18).'
  },
  {
    id: 'jos_2_1_24',
    bookId: 'JOS',
    chapter: 2,
    startVerse: 1,
    endVerse: 24,
    title: 'Raabe e os Espias',
    theme: 'A Fé Improvável, a Salvação pela Graça e o Fio de Escarlata',
    introduction: 'O livro de Josué inicia a narrativa da conquista de Canaã. Antes de cruzar o Jordão, Josué envia dois espias secretamente a Jericó. O que eles encontram não é apenas inteligência militar, mas uma das histórias de conversão mais surpreendentes da Bíblia. Eles são escondidos por Raabe, uma prostituta cananeia. Deuteronômio havia ordenado a destruição dos cananeus devido à sua extrema iniquidade, mas a história de Raabe prova que a graça de Deus sempre abre uma exceção para a fé genuína. Ela se torna um símbolo poderoso da salvação que alcança os piores pecadores.',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'O Esconderijo e a Traição ao Rei',
        description: 'Os espias entram na casa de Raabe, cuja casa ficava sobre a muralha da cidade. O rei de Jericó descobre e manda prendê-los. Raabe toma uma decisão de vida ou morte: ela esconde os espias no eirado sob canas de linho e mente para os guardas do rei, despistando-os. Ao fazer isso, ela comete alta traição contra o seu próprio povo e rei. Sua lealdade mudou radicalmente; ela escolheu arriscar sua vida para proteger os servos do Deus de Israel.'
      },
      {
        verseRef: 'v. 8-14',
        title: 'A Confissão de Fé de Raabe',
        description: 'A motivação de Raabe é revelada em sua confissão impressionante. Ela diz: "Bem sei que o Senhor vos deu esta terra". Ela relata como o terror de Deus caiu sobre os cananeus após ouvirem sobre o Mar Vermelho e a derrota dos reis amorreus. O clímax de sua fé é teológico: "o Senhor vosso Deus é Deus em cima nos céus e em baixo na terra". Enquanto Israel frequentemente duvidava de Deus, esta prostituta pagã creu. Ela pede um juramento de que, assim como ela usou de misericórdia com eles, eles salvariam a vida dela e de sua família.'
      },
      {
        verseRef: 'v. 15-24',
        title: 'O Fio de Escarlata e o Relatório Vitorioso',
        description: 'Raabe desce os espias por uma corda pela janela. O acordo de salvação exige um sinal visível: ela deve atar um "cordão de fio de escarlata" na janela e reunir toda a sua família dentro da casa. Qualquer um fora da casa pereceria. O fio vermelho é um eco claro do sangue do cordeiro nos umbrais das portas na Páscoa no Egito. Os espias retornam a Josué com um relatório cheio de fé (o oposto do relatório de Números 13): "Certamente o Senhor tem dado toda esta terra nas nossas mãos".'
      }
    ],
    conclusion: 'A história de Raabe é uma obra-prima da graça. Ela era uma mulher, uma cananeia e uma prostituta — três motivos para ser rejeitada na cultura da época. No entanto, por causa de sua fé, ela não apenas sobreviveu à destruição de Jericó, mas foi incorporada a Israel e tornou-se ancestral do rei Davi e do próprio Jesus Cristo (Mateus 1:5). O autor de Hebreus a lista na galeria dos heróis da fé (Hb 11:31), e Tiago a usa como exemplo de fé que produz obras (Tg 2:25). O fio de escarlata na janela nos lembra que o sangue de Cristo é o único sinal que garante a nossa salvação no dia do juízo.'
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
console.log(`Expanded ${replacedCount} pericopes (Batch 12.1).`);
