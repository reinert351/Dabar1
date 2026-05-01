const fs = require('fs');

const expandedPericopes = [
  {
    id: 'exo_15_22_27',
    bookId: 'EXO',
    chapter: 15,
    startVerse: 22,
    endVerse: 27,
    title: 'As Águas Amargas de Mara',
    theme: 'O Teste do Deserto, a Murmuração e a Cura Divina',
    introduction: 'Apenas três dias após o glorioso cântico de vitória no Mar Vermelho, a fé de Israel é submetida ao seu primeiro grande teste no deserto de Sur. A transição do louvor extasiado para a murmuração amarga é chocantemente rápida. Êxodo 15:22-27 revela a fragilidade do coração humano quando privado de suas necessidades básicas, mas também demonstra a paciência pedagógica de Deus. Ele usa a sede não para destruir o povo, mas para prová-los, revelando-se a eles com um novo nome: Yahweh-Rafá, o Senhor que cura.',
    points: [
      {
        verseRef: 'v. 22-24',
        title: 'A Decepção em Mara e a Murmuração',
        description: 'Moisés conduz Israel pelo deserto, e por três dias eles não encontram água. Quando finalmente encontram um oásis em Mara, a esperança se transforma em profunda decepção: as águas são amargas (impróprias para consumo). A reação do povo é imediata e carnal: eles murmuram contra Moisés, dizendo: "Que havemos de beber?". O cântico de redenção é esquecido diante da sede física. A murmuração não é apenas uma queixa sobre a água; é um ataque direto à liderança de Moisés e, em última análise, à providência de Deus que os levou até ali.'
      },
      {
        verseRef: 'v. 25',
        title: 'O Clamor de Moisés e o Lenho da Cura',
        description: 'Em contraste com a murmuração do povo, Moisés faz a coisa certa: ele "clamou ao Senhor". Deus não responde com ira, mas com graça providencial. Ele mostra a Moisés um lenho (uma árvore ou pedaço de madeira), que Moisés lança nas águas, e elas se tornam doces. O milagre não estava na propriedade química da madeira, mas na obediência à palavra de Deus. Teologicamente, este lenho aponta para a cruz de Cristo (o madeiro), que, quando lançada nas águas amargas do nosso pecado e sofrimento, tem o poder de transformá-las em vida e doçura.'
      },
      {
        verseRef: 'v. 25b-27',
        title: 'O Estatuto, a Promessa e o Oásis de Elim',
        description: 'Em Mara, Deus estabelece um estatuto e os "prova". Ele faz uma promessa condicional: se ouvirem atentamente a Sua voz e fizerem o que é reto, Ele não enviará sobre eles as enfermidades que enviou sobre os egípcios. Deus se revela como "Yahweh-Rafá" (Eu sou o Senhor que te sara). A cura física das águas é um símbolo da cura espiritual que Deus deseja operar na nação. Após a provação, Deus os conduz a Elim, um oásis abundante com doze fontes de água e setenta palmeiras. O descanso em Elim prova que Deus sempre tem provisão abundante após o teste.'
      }
    ],
    conclusion: 'A experiência em Mara nos ensina que o deserto é a escola de Deus. Ele nos leva a "águas amargas" não para nos matar de sede, mas para expor o que está em nossos corações e nos ensinar a depender dEle. A murmuração é o atalho da incredulidade, enquanto a oração (como a de Moisés) é o caminho da fé. Quando enfrentamos a amargura da vida, devemos olhar para a cruz de Cristo, o único "lenho" capaz de curar nossa alma e transformar nossa dor em testemunho do poder do Deus que sara.'
  },
  {
    id: 'exo_18_1_12',
    bookId: 'EXO',
    chapter: 18,
    startVerse: 1,
    endVerse: 12,
    title: 'A Visita de Jetro',
    theme: 'O Testemunho aos Gentios, a Reunião Familiar e a Adoração Coletiva',
    introduction: 'Antes de Israel chegar ao Monte Sinai para receber a Lei, ocorre um encontro familiar de profunda importância teológica. Jetro, sogro de Moisés e sacerdote de Midiã, traz Zípora e os filhos de Moisés de volta para ele no deserto. Êxodo 18:1-12 não é apenas uma reunião de família; é o primeiro grande testemunho do poder redentor de Deus a um líder gentio. A reação de Jetro ao ouvir as maravilhas do Êxodo demonstra que o propósito de Deus em libertar Israel era também para que as nações conhecessem a supremacia de Yahweh.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Notícia da Salvação e a Chegada de Jetro',
        description: 'Jetro ouve "tudo o que Deus tinha feito a Moisés e a Israel". A fama do Êxodo já estava se espalhando pelas nações do deserto. Ele toma Zípora (que Moisés havia enviado de volta, provavelmente por segurança durante as pragas) e seus dois filhos, Gérson e Eliézer. Os nomes dos filhos são testemunhos da jornada de Moisés: Gérson ("peregrino") e Eliézer ("Deus é meu auxílio", pois o livrou da espada de Faraó). Jetro envia um aviso de sua chegada ao acampamento no "monte de Deus" (Horebe/Sinai).'
      },
      {
        verseRef: 'v. 7-8',
        title: 'O Encontro e o Testemunho de Moisés',
        description: 'Moisés, agora o grande líder de uma nação, sai ao encontro de seu sogro, inclina-se e o beija, demonstrando profundo respeito e humildade. Na tenda, Moisés não fala de suas próprias proezas, mas relata a Jetro "tudo o que o Senhor tinha feito a Faraó e aos egípcios por amor de Israel", além de todo o trabalho (dificuldades) no caminho e como o Senhor os livrara. Moisés é um evangelista fiel, contando a história da redenção com Deus no centro absoluto.'
      },
      {
        verseRef: 'v. 9-12',
        title: 'A Conversão e a Adoração de Jetro',
        description: 'A resposta de Jetro é imediata e transformadora. Ele se alegra e bendiz ao Senhor (Yahweh). Ele faz uma confissão de fé monumental para um sacerdote gentio: "Agora sei que o Senhor é maior que todos os deuses; porque na coisa em que se ensoberbeceram, os sobrepujou". Jetro reconhece que os deuses do Egito foram derrotados pela arrogância deles mesmos. Em seguida, Jetro oferece holocaustos e sacrifícios a Deus. Arão e todos os anciãos de Israel vêm comer pão com ele "diante de Deus". É um belo quadro de comunhão entre judeus e gentios unidos pela adoração ao verdadeiro Deus.'
      }
    ],
    conclusion: 'A visita de Jetro nos ensina o poder do testemunho pessoal. Quando contamos o que Deus fez por nós, corações podem ser transformados. A confissão de Jetro antecipa a visão profética de que todas as nações um dia reconhecerão a supremacia de Cristo. Além disso, a comunhão à mesa entre Moisés, os anciãos de Israel e um sacerdote midianita é um vislumbre da graça do evangelho, que derruba as paredes de inimizade e une pessoas de diferentes origens na adoração ao único Deus verdadeiro.'
  },
  {
    id: 'exo_18_13_27',
    bookId: 'EXO',
    chapter: 18,
    startVerse: 13,
    endVerse: 27,
    title: 'O Conselho de Jetro sobre Delegação',
    theme: 'A Sabedoria Prática, o Perigo da Exaustão e a Liderança Compartilhada',
    introduction: 'No dia seguinte à grande celebração, Jetro observa a rotina de Moisés e identifica uma crise administrativa iminente. Moisés estava tentando julgar sozinho todas as causas de uma nação de milhões de pessoas, do amanhecer ao anoitecer. Êxodo 18:13-27 é um dos textos clássicos da Bíblia sobre liderança, organização e delegação. Deus usa a sabedoria prática de um gentio (Jetro) para estabelecer uma estrutura judicial em Israel, ensinando que a unção espiritual não anula a necessidade de bom senso e organização humana.',
    points: [
      {
        verseRef: 'v. 13-18',
        title: 'O Diagnóstico do Esgotamento',
        description: 'Jetro vê Moisés assentado julgando o povo, enquanto a multidão fica em pé ao seu redor o dia todo. Ele questiona a sabedoria desse método. Moisés justifica dizendo que o povo vem a ele para "consultar a Deus" e conhecer os estatutos divinos. A intenção de Moisés é nobre, mas o método é insustentável. Jetro é direto: "Não é bom o que fazes. Totalmente desfalecerás, assim tu como este povo... porque este negócio é mui pesado para ti; tu só não o podes fazer". O excesso de centralização destrói tanto o líder (exaustão) quanto o povo (frustração pela demora).'
      },
      {
        verseRef: 'v. 19-23',
        title: 'O Conselho de Delegação e os Critérios de Liderança',
        description: 'Jetro propõe uma solução estruturada. Primeiro, ele define o papel principal de Moisés: ser o representante do povo diante de Deus e ensinar-lhes os estatutos (foco no ensino e na oração). Segundo, Moisés deve delegar o julgamento das causas menores. O critério para escolher esses líderes é rigoroso e moral, não apenas intelectual: "homens de capacidade, tementes a Deus, homens de verdade, que odeiem a avareza". Eles seriam chefes de mil, de cem, de cinquenta e de dez. Apenas as "causas graves" seriam trazidas a Moisés. O resultado prometido é paz e sustentabilidade.'
      },
      {
        verseRef: 'v. 24-27',
        title: 'A Humildade de Moisés e a Implementação',
        description: 'A grandeza de Moisés é vista em sua reação. Sendo o grande profeta que falava com Deus face a face, ele poderia ter rejeitado o conselho de seu sogro como uma interferência carnal. Em vez disso, Moisés "deu ouvidos à voz de seu sogro, e fez tudo quanto tinha dito". Ele escolhe os homens capazes e estabelece o sistema judicial. A humildade para aceitar conselhos práticos salvou o ministério de Moisés e organizou a nação antes de chegarem ao Sinai.'
      }
    ],
    conclusion: 'O conselho de Jetro é um princípio vital para a igreja e para qualquer organização: a liderança solitária é uma receita para o desastre. Deus não nos chamou para fazer a obra sozinhos, mas para equipar e capacitar outros (Efésios 4:11-12). A escolha de líderes deve sempre priorizar o caráter (temor a Deus, verdade, integridade) acima do carisma. A humildade de Moisés em ouvir seu sogro nos desafia a estarmos abertos à sabedoria que Deus pode nos enviar através de pessoas inesperadas, para que possamos cumprir nossa vocação sem desfalecer.'
  },
  {
    id: 'exo_19_1_15',
    bookId: 'EXO',
    chapter: 19,
    startVerse: 1,
    endVerse: 15,
    title: 'A Preparação no Monte Sinai',
    theme: 'A Proposta da Aliança, a Vocação de Israel e a Santidade Exigida',
    introduction: 'No terceiro mês após a saída do Egito, Israel chega ao deserto do Sinai. Êxodo 19 marca a transição da redenção para a revelação. Deus os tirou do Egito não apenas para que fossem livres, mas para que fossem Seus. Antes de entregar a Lei, Deus propõe formalmente uma aliança, revelando o propósito glorioso para o qual a nação foi chamada. No entanto, a aproximação a um Deus santo exige preparação rigorosa. Este texto estabelece o fundamento da identidade de Israel e o princípio eterno de que a comunhão com Deus requer santificação.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Proposta da Aliança e a Identidade Nacional',
        description: 'Moisés sobe ao monte, e Deus lhe dá a mensagem para a casa de Jacó. Deus baseia Seu apelo na graça já demonstrada: "Vós tendes visto o que fiz aos egípcios, como vos levei sobre asas de águias, e vos trouxe a mim". A redenção precede a exigência. Deus então propõe a aliança condicional: "Se diligentemente ouvirdes a minha voz... sereis a minha propriedade peculiar dentre todos os povos". O propósito é exaltado: eles serão "um reino sacerdotal e uma nação santa". Eles deveriam ser os mediadores entre Deus e o resto do mundo, refletindo a santidade divina.'
      },
      {
        verseRef: 'v. 7-9',
        title: 'O Consentimento do Povo e a Validação de Moisés',
        description: 'Moisés apresenta as palavras de Deus aos anciãos. O povo responde em uníssono, com uma confiança talvez ingênua, mas sincera: "Tudo o que o Senhor tem falado, faremos". Moisés relata as palavras a Deus. O Senhor anuncia que virá em uma "nuvem espessa" para falar com Moisés de forma audível, com um propósito específico: "para que o povo ouça... e para que também creiam sempre em ti". A teofania pública serviria para validar incontestavelmente a autoridade profética de Moisés diante de toda a nação.'
      },
      {
        verseRef: 'v. 10-15',
        title: 'A Santificação e os Limites do Monte',
        description: 'Deus ordena três dias de preparação. O povo deve se "santificar" (separar-se para um propósito sagrado) e lavar suas roupas (um símbolo exterior de purificação interior). Mais importante, Deus estabelece limites estritos ao redor do monte: "Guardai-vos, que não subais ao monte, nem toqueis o seu termo". Qualquer homem ou animal que tocasse o monte seria apedrejado ou flechado. A santidade de Deus é perigosa para o pecador não purificado. A abstenção de relações sexuais (v. 15) enfatizava a necessidade de foco total e pureza cerimonial para o encontro com o Criador.'
      }
    ],
    conclusion: 'A preparação no Sinai nos ensina que a graça de Deus nos salva, mas a Sua santidade exige reverência. A vocação de Israel como "reino sacerdotal" é transferida para a Igreja no Novo Testamento (1 Pedro 2:9). Fomos salvos para sermos propriedade exclusiva de Deus e para representá-Lo ao mundo. Os limites ao redor do monte nos lembram do abismo intransponível entre o Deus santo e o homem pecador sob a Antiga Aliança, um abismo que só seria cruzado definitivamente pelo sangue de Jesus Cristo, que nos abriu um novo e vivo caminho para a presença de Deus (Hebreus 10:19-20).'
  },
  {
    id: 'exo_19_16_25',
    bookId: 'EXO',
    chapter: 19,
    startVerse: 16,
    endVerse: 25,
    title: 'A Teofania no Sinai',
    theme: 'A Majestade Aterrorizante de Deus e o Cuidado com a Santidade',
    introduction: 'O terceiro dia amanhece, e a promessa de Deus de descer sobre o Monte Sinai se cumpre de forma aterrorizante. Êxodo 19:16-25 descreve uma das teofanias (manifestações visíveis de Deus) mais dramáticas de toda a Escritura. O monte se transforma em um vulcão de fogo, fumaça e som ensurdecedor. O objetivo dessa manifestação não era destruir o povo, mas incutir neles o "temor do Senhor", para que não pecassem. O texto enfatiza repetidamente a barreira intransponível entre a santidade de Deus e a curiosidade profana do homem.',
    points: [
      {
        verseRef: 'v. 16-19',
        title: 'O Terror Cósmico da Presença Divina',
        description: 'A descida de Deus é acompanhada por fenômenos cósmicos: trovões, relâmpagos, uma nuvem espessa e o som de uma buzina (shofar) que soava cada vez mais forte. O acampamento inteiro estremece de pavor. Moisés, agindo como mediador, tira o povo do acampamento para o encontro com Deus, ao pé do monte. O Sinai fumegava como uma fornalha, porque "o Senhor descera sobre ele em fogo", e todo o monte tremia grandemente. A natureza convulsiona diante da presença do seu Criador. Quando Moisés fala, Deus lhe responde em voz alta.'
      },
      {
        verseRef: 'v. 20-22',
        title: 'O Aviso Contra a Curiosidade Profana',
        description: 'O Senhor desce sobre o cume do monte e chama Moisés para subir. A primeira ordem de Deus não é a entrega da Lei, mas um aviso urgente de segurança: "Desce, adverte ao povo que não traspasse o termo para ver ao Senhor, para que muitos deles não pereçam". Deus conhece a tendência humana de tratar o sagrado com curiosidade frívola. Até mesmo os sacerdotes (provavelmente os primogênitos que exerciam essa função antes da instituição levítica) devem se santificar, para que o Senhor não "se lance sobre eles" em juízo.'
      },
      {
        verseRef: 'v. 23-25',
        title: 'A Insistência na Separação e a Mediação',
        description: 'Moisés argumenta com Deus, dizendo que o povo já está avisado e que os limites já foram marcados. Mas Deus insiste: "Vai, desce; depois subirás tu, e Arão contigo; os sacerdotes, porém, e o povo não traspassem o termo". A insistência de Deus sublinha que a santidade não é algo a ser presumido. Apenas o mediador escolhido (Moisés) e seu porta-voz (Arão) têm acesso. Moisés desce e repete a advertência ao povo. O palco está completamente isolado e preparado para a voz de Deus proferir os Dez Mandamentos.'
      }
    ],
    conclusion: 'A teofania no Sinai é o antídoto bíblico contra a visão moderna de um Deus domesticado e casual. O Deus da Bíblia é um "fogo consumidor" (Hebreus 12:29). A barreira no Sinai mostrava que a Lei não poderia aproximar o homem de Deus; ela apenas revelava a distância infinita causada pelo pecado. O autor de Hebreus contrasta o terror do Sinai com a graça de Sião: nós não chegamos ao monte que não se pode tocar, mas a Jesus, o Mediador de uma Nova Aliança (Hb 12:18-24). A majestade de Deus não mudou, mas o nosso acesso a Ele foi garantido pelo sangue de Cristo.'
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
console.log(`Expanded ${replacedCount} pericopes (Batch 5.1).`);
