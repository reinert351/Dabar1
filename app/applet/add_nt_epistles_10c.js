const fs = require('fs');

const newPericopes = [
  {
    id: 'eph_2_1_10',
    bookId: 'EPH',
    chapter: 2,
    startVerse: 1,
    endVerse: 10,
    title: 'Da Morte para a Vida: Salvos pela Graça',
    theme: 'O Diagnóstico Humano e a Intervenção Divina',
    introduction: `Efésios 2:1-10 é uma das descrições mais claras e abrangentes do processo de salvação em toda a Bíblia. Paulo traça o arco completo da redenção, começando com o diagnóstico sombrio da condição humana natural, passando pela intervenção gloriosa da misericórdia de Deus, e culminando no propósito final da nossa salvação. A passagem destrói qualquer ilusão de mérito humano e exalta a graça soberana de Deus como a única causa da nossa vida espiritual.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Diagnóstico: Mortos em Delitos e Pecados',
        description: `A Condição Natural. Paulo não diz que a humanidade estava doente ou fraca; ele diz: "E vos vivificou, estando vós mortos em ofensas e pecados" (v. 1). Um cadáver não pode responder a estímulos, não pode melhorar a si mesmo e não pode buscar a Deus. Estávamos escravizados por três inimigos: o mundo ("segundo o curso deste mundo"), o diabo ("o príncipe das potestades do ar") e a carne ("fazendo a vontade da carne e dos pensamentos"). O resultado inevitável era que éramos "por natureza filhos da ira" (v. 3).`
      },
      {
        verseRef: 'v. 4-7',
        title: 'A Intervenção: Mas Deus, Rico em Misericórdia',
        description: `As Duas Palavras Mais Belas. O versículo 4 muda o destino do universo: "Mas Deus...". Quando estávamos mortos e incapazes, Deus interveio. A motivação dEle não foi o nosso valor, mas "pelo seu muito amor com que nos amou". A ação dEle foi nos vivificar (dar vida) juntamente com Cristo (v. 5). A salvação é uma ressurreição espiritual. Além disso, Ele nos ressuscitou e nos fez assentar nos lugares celestiais em Cristo (v. 6). O propósito eterno disso é mostrar "as imensas riquezas da sua graça" nos séculos vindouros (v. 7).`
      },
      {
        verseRef: 'v. 8-10',
        title: 'O Método e o Propósito: Graça, Fé e Boas Obras',
        description: `O Dom de Deus. Paulo resume o evangelho (v. 8-9): "Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus. Não vem das obras, para que ninguém se glorie". A graça é a mão de Deus que dá; a fé é a mão vazia do homem que recebe. Até mesmo a fé é um dom. Mas a salvação sem obras não significa uma salvação sem frutos (v. 10): "Porque somos feitura sua, criados em Cristo Jesus para as boas obras, as quais Deus preparou para que andássemos nelas". As obras não são a raiz da salvação, mas são o fruto inevitável.`
      }
    ],
    conclusion: `Efésios 2:1-10 nos humilha até o pó e nos eleva até os céus. Lembra-nos de que não tínhamos nada a oferecer a Deus além do pecado que nos condenava. A salvação é do Senhor, do início ao fim. Quando compreendemos que fomos ressuscitados da morte espiritual puramente pela graça imerecida, o orgulho religioso morre e nasce uma profunda gratidão que se expressa em uma vida de boas obras, preparadas de antemão para a glória do nosso Criador.`
  },
  {
    id: 'eph_6_10_20',
    bookId: 'EPH',
    chapter: 6,
    startVerse: 10,
    endVerse: 20,
    title: 'A Armadura de Deus e a Batalha Espiritual',
    theme: 'A Preparação e a Defesa do Cristão contra as Forças do Mal',
    introduction: `Paulo conclui a sua carta aos Efésios com um chamado às armas. A vida cristã não é um parque de diversões, mas um campo de batalha. O crente, embora já esteja abençoado com todas as bênçãos celestiais e assentado com Cristo, ainda vive em um mundo hostil. Paulo usa a imagem de um soldado romano (que ele via diariamente na sua prisão) para ilustrar as defesas espirituais que Deus providenciou para que a igreja possa resistir aos ataques invisíveis do inimigo.`,
    points: [
      {
        verseRef: 'v. 10-12',
        title: 'A Natureza do Inimigo e a Força do Senhor',
        description: `A Guerra Invisível. A ordem é clara (v. 10): "Fortalecei-vos no Senhor e na força do seu poder". A nossa própria força é inútil nesta guerra. Precisamos nos revestir de "toda a armadura de Deus" (v. 11) para ficarmos firmes contra as "ciladas" (methodeia - estratégias enganosas) do diabo. Paulo define o inimigo (v. 12): "Porque não temos que lutar contra a carne e o sangue". O nosso verdadeiro inimigo não é o cônjuge, o chefe ou o político corrupto; são os "principados, potestades e príncipes das trevas", forças demoníacas organizadas que operam no mundo invisível.`
      },
      {
        verseRef: 'v. 13-17',
        title: 'A Armadura Completa de Deus',
        description: `As Peças da Defesa e do Ataque. Para resistir no "dia mau", precisamos de toda a armadura (v. 13-17): 1) O cinto da verdade (integridade e conhecimento da Palavra). 2) A couraça da justiça (a justiça imputada de Cristo e a vida reta que protege o coração). 3) Os pés calçados com a preparação do evangelho da paz (firmeza e prontidão para anunciar as boas novas). 4) O escudo da fé (confiança em Deus que apaga os dardos inflamados da dúvida e tentação). 5) O capacete da salvação (a certeza da salvação que protege a mente). 6) A espada do Espírito, que é a palavra (rhema) de Deus (a única arma de ataque, a Palavra aplicada especificamente).`
      },
      {
        verseRef: 'v. 18-20',
        title: 'A Arma da Oração e a Vigilância',
        description: `A Comunicação com o Comandante. A armadura não funciona sem a oração (v. 18): "Orando em todo o tempo com toda a oração e súplica no Espírito, e vigiando nisto com toda a perseverança". A oração é o ar que o soldado respira e a linha de comunicação com o General. Paulo pede oração por todos os santos e especificamente por si mesmo (v. 19), para que lhe seja dada a palavra para "fazer notório o mistério do evangelho", pelo qual ele é "embaixador em cadeias" (v. 20). Mesmo preso, o seu foco não é o conforto, mas a ousadia na missão.`
      }
    ],
    conclusion: `Efésios 6:10-20 nos adverte contra dois extremos perigosos: ignorar a realidade da batalha espiritual ou ficar paralisado pelo medo do diabo. A vitória já foi conquistada por Cristo na cruz, mas nós devemos nos apropriar dessa vitória diariamente, vestindo a armadura do caráter cristão e da verdade bíblica. O soldado cristão não luta para obter a vitória, mas luta a partir da vitória de Cristo, mantendo-se firme através da fé e da oração incessante.`
  },
  {
    id: 'php_2_5_11',
    bookId: 'PHP',
    chapter: 2,
    startVerse: 5,
    endVerse: 11,
    title: 'O Esvaziamento e a Exaltação de Cristo',
    theme: 'O Modelo Supremo de Humildade (A Kenosis)',
    introduction: `Para resolver um problema de desunião e orgulho na igreja de Filipos, Paulo não lhes dá apenas um manual de regras; ele lhes dá um hino cristológico. Esta passagem, conhecida como o hino da "Kenosis" (esvaziamento), é uma das declarações mais profundas sobre a encarnação na Bíblia. Ela traça a jornada de Jesus desde a glória eterna, descendo até a morte mais humilhante, e subindo novamente à exaltação suprema, estabelecendo o padrão definitivo de como os cristãos devem tratar uns aos outros.`,
    points: [
      {
        verseRef: 'v. 5-6',
        title: 'A Igualdade com Deus e a Renúncia',
        description: `A Mente de Cristo. Paulo ordena (v. 5): "De sorte que haja em vós o mesmo sentimento que houve também em Cristo Jesus". Qual era esse sentimento? Jesus, "sendo em forma (morphe) de Deus, não teve por usurpação ser igual a Deus" (v. 6). A palavra "morphe" significa a natureza essencial e imutável. Jesus era e é plenamente Deus. No entanto, Ele não considerou a Sua igualdade com Deus como algo a ser agarrado egoisticamente ou usado para o Seu próprio benefício. Ele estava disposto a abrir mão dos Seus privilégios divinos por amor.`
      },
      {
        verseRef: 'v. 7-8',
        title: 'O Esvaziamento e a Morte de Cruz',
        description: `A Descida Infinita. Em vez de se apegar à glória, Ele "esvaziou-se a si mesmo" (ekenosen). Ele não deixou de ser Deus, mas abriu mão do uso independente dos Seus atributos divinos e assumiu a "forma de servo, fazendo-se semelhante aos homens" (v. 7). A encarnação foi adição (adicionou a humanidade), não subtração (não perdeu a divindade). A descida não parou no nascimento. Achado na forma de homem, "humilhou-se a si mesmo, sendo obediente até à morte, e morte de cruz" (v. 8). O Criador do universo submeteu-se à execução mais vergonhosa e dolorosa inventada pelos homens.`
      },
      {
        verseRef: 'v. 9-11',
        title: 'A Exaltação Suprema e o Nome Sobre Todo Nome',
        description: `O Senhorio Universal. O caminho para cima é para baixo. Por causa da Sua humilhação perfeita, "Deus o exaltou soberanamente, e lhe deu um nome que é sobre todo o nome" (v. 9). O nome dado não é "Jesus" (que Ele já tinha), mas o título de "Senhor" (Kurios, o equivalente grego para Yahweh). O propósito desta exaltação é cósmico (v. 10-11): para que ao nome de Jesus se dobre todo joelho (no céu, na terra e debaixo da terra) e toda língua confesse que "Jesus Cristo é o Senhor, para glória de Deus Pai". Um dia, todo o universo reconhecerá a Sua soberania, seja em adoração voluntária ou em submissão forçada.`
      }
    ],
    conclusion: `Filipenses 2:5-11 destrói o nosso orgulho. Se o próprio Deus desceu do trono para lavar os pés dos discípulos e morrer em uma cruz, como podemos nós, meras criaturas pecadoras, exigir status, direitos e reconhecimento na igreja? A verdadeira grandeza no Reino de Deus não é medida por quantas pessoas nos servem, mas por quão baixo estamos dispostos a descer para servir aos outros. A mente de Cristo é a mente da humildade sacrificial.`
  },
  {
    id: 'col_1_15_20',
    bookId: 'COL',
    chapter: 1,
    startVerse: 15,
    endVerse: 20,
    title: 'A Supremacia e a Suficiência de Cristo',
    theme: 'O Cristo Cósmico e a Reconciliação de Todas as Coisas',
    introduction: `A igreja em Colossos estava sendo ameaçada por uma heresia que misturava misticismo, legalismo judaico e filosofia grega, sugerindo que Jesus era apenas uma emanação divina entre muitas, e que a fé nEle precisava ser suplementada por outras práticas. A resposta de Paulo é um dos hinos mais majestosos do Novo Testamento. Ele não argumenta com os falsos mestres; ele simplesmente exalta a grandeza absoluta, a supremacia cósmica e a suficiência total de Jesus Cristo.`,
    points: [
      {
        verseRef: 'v. 15-17',
        title: 'O Senhor da Criação',
        description: `O Primogênito de Toda a Criação. Paulo declara que Jesus é "a imagem do Deus invisível" (v. 15). Ele é a revelação exata de Deus. Ele é o "primogênito" (prototokos), um título de soberania e herança, não de origem temporal. Por que Ele é soberano? "Porque nele foram criadas todas as coisas que há nos céus e na terra, visíveis e invisíveis... tudo foi criado por ele e para ele" (v. 16). Jesus não é uma criatura; Ele é o Criador e o objetivo final do universo. Além disso, "ele é antes de todas as coisas, e todas as coisas subsistem por ele" (v. 17). Ele é a cola que mantém o universo unido.`
      },
      {
        verseRef: 'v. 18',
        title: 'O Senhor da Nova Criação (A Igreja)',
        description: `A Cabeça do Corpo. Jesus não é apenas o Senhor do universo físico, mas também da nova criação espiritual. "E ele é a cabeça do corpo, da igreja". A igreja não é uma organização humana, mas um organismo vivo que recebe a sua direção e vida da Cabeça. Ele é "o princípio e o primogênito dentre os mortos". A Sua ressurreição é a garantia da nossa. O propósito de tudo isso é "para que em tudo tenha a preeminência" (o primeiro lugar absoluto).`
      },
      {
        verseRef: 'v. 19-20',
        title: 'O Reconciliador do Universo',
        description: `A Plenitude e o Sangue da Cruz. Os hereges falavam sobre a "plenitude" (pleroma) divina distribuída entre anjos. Paulo corrige (v. 19): "Porque foi do agrado do Pai que toda a plenitude nele habitasse". Toda a divindade reside em Cristo. E foi através dEle que Deus decidiu "reconciliar consigo mesmo todas as coisas... havendo feito a paz pelo sangue da sua cruz" (v. 20). O pecado fraturou o cosmos, mas o sangue de Cristo na cruz é o poder que restaura a harmonia entre Deus e a humanidade, e, em última análise, redimirá toda a criação.`
      }
    ],
    conclusion: `Colossenses 1:15-20 é a resposta definitiva para qualquer teologia que tente diminuir Jesus. Se Cristo é o Criador do universo, o sustentador da realidade, a Cabeça da igreja, a plenitude de Deus e o Reconciliador cósmico, então Ele é suficiente. Não precisamos de Cristo "mais" filosofia, Cristo "mais" legalismo, ou Cristo "mais" misticismo. Cristo é tudo. Ter a Cristo é ter tudo o que precisamos para a salvação e para a vida.`
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
  console.log('Successfully added 4 new pericopes for Epistles (Batch 10c).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
