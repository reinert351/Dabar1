const fs = require('fs');

const expandedPericopes = [
  {
    id: 'deu_1_1_8',
    bookId: 'DEU',
    chapter: 1,
    startVerse: 1,
    endVerse: 8,
    title: 'A Ordem para Avançar',
    theme: 'O Fim da Espera, a Fidelidade à Promessa e a Convocação para a Posse',
    introduction: 'O livro de Deuteronômio (que significa "Segunda Lei") é uma série de discursos de despedida de Moisés à nova geração de Israel, acampada nas planícies de Moabe, prestes a cruzar o rio Jordão. O livro começa com uma revisão histórica. Em Deuteronômio 1:1-8, Moisés relembra o momento em que Deus lhes ordenou que deixassem o Monte Horebe (Sinai). O texto contrasta a brevidade da jornada geográfica (onze dias) com a tragédia da jornada histórica (quarenta anos). A mensagem central é clara: o tempo de preparação e de disciplina acabou; é hora de avançar e tomar posse da herança prometida aos patriarcas.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Contexto: Onze Dias vs. Quarenta Anos',
        description: 'O texto localiza Israel "dalém do Jordão, no deserto". O versículo 2 insere um detalhe geográfico e teológico devastador: "Jornada de onze dias há desde Horebe... até Cades-Barneia". Onze dias era o tempo que a viagem deveria ter durado. No entanto, o versículo 3 declara que Moisés está falando a eles "no ano quadragésimo". A incredulidade de Cades-Barneia (Números 14) transformou uma viagem de onze dias em um funeral de quarenta anos. A desobediência sempre atrasa o cumprimento das promessas de Deus em nossas vidas.'
      },
      {
        verseRef: 'v. 4-6',
        title: 'O Fim do Tempo no Monte',
        description: 'Moisés começa a "explicar esta lei" após as vitórias iniciais sobre os reis amorreus (Seom e Ogue), o que já servia como um encorajamento da fidelidade de Deus. Ele relembra a ordem divina dada no Horebe (Sinai): "Assaz vos haveis demorado neste monte". O Sinai foi o lugar da revelação, da aliança e da instrução, mas não era o destino final. Há um tempo para aprender aos pés do Senhor, mas há também um tempo em que Deus diz: "Basta de ficar aqui; é hora de marchar".'
      },
      {
        verseRef: 'v. 7-8',
        title: 'A Ordem de Marcha e a Posse da Terra',
        description: 'A ordem de Deus é imperativa: "Voltai-vos, e parti, e ide...". Deus descreve a vastidão da terra que está diante deles, desde o Neguebe até o rio Eufrates. O versículo 8 é o clímax: "Eis que tenho posto esta terra diante de vós; entrai e possuí a terra que o Senhor jurou a vossos pais, Abraão, Isaque e Jacó". A terra já foi "posta" (dada por graça), mas eles precisam "entrar e possuir" (apropriar-se por fé e obediência). A promessa feita aos patriarcas séculos antes estava prestes a se cumprir.'
      }
    ],
    conclusion: 'A ordem para avançar em Deuteronômio 1 é um chamado ao despertar espiritual. Muitas vezes, a Igreja fica "demasiado tempo no monte", desfrutando de conferências, estudos e experiências espirituais, mas hesita em marchar para o território inimigo para possuir o que Deus prometeu. A distância entre a promessa de Deus e a nossa posse dela é frequentemente medida pela nossa obediência. O passado de fracassos (os 40 anos) não anula a promessa de Deus; Ele continua nos chamando para nos levantarmos, deixarmos a nossa zona de conforto e tomarmos posse da vida abundante que Ele jurou nos dar em Cristo.'
  },
  {
    id: 'deu_4_1_9',
    bookId: 'DEU',
    chapter: 4,
    startVerse: 1,
    endVerse: 9,
    title: 'A Exortação à Obediência',
    theme: 'A Sabedoria da Lei, a Preservação da Palavra e a Transmissão Geracional',
    introduction: 'Em Deuteronômio 4, Moisés passa da revisão histórica para a exortação prática. Ele implora à nova geração que não repita os erros de seus pais. A posse e a permanência na Terra Prometida dependem de uma única condição: a obediência inegociável aos estatutos e juízos de Deus. Moisés argumenta que a Lei de Deus não é um fardo opressivo, mas a própria fonte de vida, sabedoria e testemunho de Israel diante das nações. Este texto é um dos mais fortes apelos bíblicos à integridade das Escrituras e à responsabilidade dos pais de ensinar a fé aos seus filhos.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Integridade da Palavra e a Vida',
        description: 'Moisés começa com um apelo: "Agora, pois, ó Israel, ouve os estatutos... para que vivais, e entreis, e possuais a terra". A obediência é a chave para a vida. No versículo 2, ele estabelece o princípio da inerrância e suficiência das Escrituras: "Nada acrescentareis à palavra que vos mando, nem diminuireis dela". A Palavra de Deus é perfeita e completa. Adicionar tradições humanas ou remover mandamentos inconvenientes é uma violação da aliança. Moisés lembra o juízo recente em Baal-Peor (onde muitos morreram por idolatria) como prova de que apenas os que se "chegaram ao Senhor" permaneceram vivos.'
      },
      {
        verseRef: 'v. 5-8',
        title: 'A Sabedoria de Israel e o Testemunho às Nações',
        description: 'Moisés revela o propósito missional da Lei. Se Israel obedecer, isso será a sua "sabedoria e o seu entendimento perante os olhos dos povos". As nações vizinhas, ao verem a justiça da sociedade israelita, diriam: "Certamente este grande povo é gente sábia e entendida". A grandeza de Israel não estava em seu poder militar ou riqueza, mas na proximidade do seu Deus (que ouve suas orações) e na justiça de suas leis. A obediência de Israel deveria ser uma luz para atrair os gentios ao conhecimento do Deus verdadeiro.'
      },
      {
        verseRef: 'v. 9',
        title: 'O Cuidado com a Alma e a Transmissão Geracional',
        description: 'O versículo 9 é o coração da exortação: "Tão-somente guarda-te a ti mesmo, e guarda bem a tua alma, que não te esqueças daquelas coisas que os teus olhos têm visto". O maior perigo para Israel não eram os exércitos cananeus, mas a amnésia espiritual. Para combater o esquecimento, Moisés dá a ordem fundamental da educação judaica: "as farás saber a teus filhos, e aos filhos de teus filhos". A fé não sobrevive por inércia; ela deve ser intencionalmente ensinada e modelada de uma geração para a outra.'
      }
    ],
    conclusion: 'A exortação de Moisés em Deuteronômio 4 ressoa com urgência para a Igreja de hoje. A nossa vida espiritual e o nosso testemunho no mundo dependem da nossa submissão total à Palavra de Deus, sem acrescentar o nosso legalismo nem diminuir com o nosso liberalismo. Quando a Igreja vive de acordo com a ética do Reino, ela se torna uma comunidade atraente e "sábia" aos olhos de um mundo quebrado. Além disso, o texto nos adverte que o sucesso espiritual de uma geração pode ser perdido na próxima se falharmos em contar aos nossos filhos as grandes obras que Deus tem feito. A discipulado começa em casa.'
  },
  {
    id: 'deu_5_1_22',
    bookId: 'DEU',
    chapter: 5,
    startVerse: 1,
    endVerse: 22,
    title: 'A Repetição dos Dez Mandamentos',
    theme: 'A Aliança Renovada, a Lei Moral e o Fundamento da Sociedade',
    introduction: 'Quarenta anos após a promulgação original da Lei no Monte Sinai (Êxodo 20), Moisés reúne a nova geração de Israel para renovar a aliança. Em Deuteronômio 5, ele repete os Dez Mandamentos (o Decálogo). Esta não é apenas uma revisão histórica; Moisés enfatiza que a aliança não foi feita apenas com os pais que morreram no deserto, mas com os que estão vivos "hoje". Os Dez Mandamentos formam a constituição moral inegociável do povo de Deus, dividida em dois grandes blocos: o nosso dever para com Deus (mandamentos 1 a 4) e o nosso dever para com o próximo (mandamentos 5 a 10).',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Aliança com a Geração Presente',
        description: 'Moisés convoca todo o Israel e declara: "O Senhor nosso Deus fez conosco aliança em Horebe. Não com nossos pais fez o Senhor esta aliança, mas conosco, todos os que hoje aqui estamos vivos". A Palavra de Deus é viva e contemporânea. A nova geração não podia viver da fé de seus pais; eles precisavam assumir a aliança pessoalmente. Moisés lembra que Deus falou "face a face" do meio do fogo, estabelecendo a autoridade divina e aterrorizante da Lei que se seguiria.'
      },
      {
        verseRef: 'v. 6-15',
        title: 'O Dever para com Deus: Exclusividade e Reverência',
        description: 'A Lei começa com a graça: "Eu sou o Senhor teu Deus, que te tirei da terra do Egito". A obediência é a resposta à salvação, não a causa dela. Os primeiros mandamentos exigem lealdade absoluta: não ter outros deuses, não fazer imagens de escultura (Deus não pode ser reduzido a um objeto manipulável) e não tomar o nome do Senhor em vão (usar Deus para propósitos egoístas). O mandamento do Sábado (v. 12-15) recebe uma nova ênfase em Deuteronômio: eles devem descansar e dar descanso aos seus servos *porque* foram escravos no Egito. O descanso é um ato de justiça social e memória da redenção.'
      },
      {
        verseRef: 'v. 16-22',
        title: 'O Dever para com o Próximo: Vida, Família e Propriedade',
        description: 'A segunda tábua da Lei regula as relações humanas, começando com o respeito à autoridade fundamental: honrar pai e mãe (com a promessa de vida longa na terra). Em seguida, protege a vida (não matarás), o casamento (não adulterarás), a propriedade (não furtarás) e a reputação do próximo (não dirás falso testemunho). O último mandamento (não cobiçarás) é único, pois julga o desejo interno do coração, não apenas a ação externa. Moisés conclui (v. 22) dizendo que Deus escreveu estas palavras em duas tábuas de pedra e "nada acrescentou", sublinhando a sua perfeição e finalidade.'
      }
    ],
    conclusion: 'A repetição dos Dez Mandamentos em Deuteronômio nos lembra que a lei moral de Deus é atemporal. Jesus não aboliu o Decálogo; Ele o aprofundou, mostrando que a ira é assassinato e a luxúria é adultério (Mateus 5). A Lei funciona como um espelho, revelando o nosso pecado e a nossa necessidade desesperada de um Salvador (Gálatas 3:24), mas também funciona como uma bússola, guiando o crente redimido sobre como viver uma vida que agrada a Deus. A verdadeira liberdade não é viver sem regras, mas viver dentro dos limites amorosos estabelecidos pelo nosso Criador e Redentor.'
  },
  {
    id: 'deu_7_6_11',
    bookId: 'DEU',
    chapter: 7,
    startVerse: 6,
    endVerse: 11,
    title: 'O Motivo da Escolha de Israel',
    theme: 'A Eleição Incondicional, o Amor Soberano e a Fidelidade de Deus',
    introduction: 'Por que Deus escolheu Israel? Seria porque eles eram a nação mais poderosa, a mais justa ou a mais numerosa da terra? Em Deuteronômio 7:6-11, Moisés destrói qualquer ilusão de mérito humano. Este texto é uma das declarações mais profundas sobre a doutrina da eleição e da graça no Antigo Testamento. Deus revela que a Sua escolha foi baseada inteiramente no Seu amor soberano e na Sua fidelidade ao juramento feito aos patriarcas. Israel não foi escolhido por causa do que era, mas apesar do que era, para que toda a glória da salvação pertencesse exclusivamente a Yahweh.',
    points: [
      {
        verseRef: 'v. 6-7',
        title: 'O Povo Santo e a Rejeição do Mérito',
        description: 'Moisés declara a identidade de Israel: "povo santo és ao Senhor teu Deus... te escolheu, para que lhe fosses o seu povo próprio". A palavra "santo" aqui significa separado para uso exclusivo. Imediatamente, Moisés anula o orgulho nacional: "O Senhor não tomou prazer em vós, nem vos escolheu, porque a vossa multidão era mais do que a de todos os outros povos, pois vós éreis menos em número do que todos os povos". Deus não escolheu Israel por causa de sua grandeza demográfica ou militar. A eleição divina contraria a lógica humana de escolher os mais fortes e capacitados.'
      },
      {
        verseRef: 'v. 8',
        title: 'A Causa da Eleição: O Amor e o Juramento',
        description: 'Se não havia mérito em Israel, qual foi o motivo da escolha? O versículo 8 dá a resposta dupla: "Mas, porque o Senhor vos amava, e para guardar o juramento que fizera a vossos pais". A causa primária da eleição é o amor incondicional e soberano de Deus. Ele os amou simplesmente porque decidiu amá-los. A causa secundária é a Sua fidelidade à aliança feita com Abraão, Isaque e Jacó. A redenção do Egito ("vos tirou com mão forte") foi a prova histórica desse amor e dessa fidelidade.'
      },
      {
        verseRef: 'v. 9-11',
        title: 'O Deus Fiel e a Responsabilidade da Aliança',
        description: 'Moisés conclui com uma declaração sobre o caráter de Deus: "Sabe, pois, que o Senhor teu Deus é Deus, o Deus fiel, que guarda a aliança e a misericórdia até mil gerações aos que o amam e guardam os seus mandamentos". A graça de Deus não anula a responsabilidade humana. O mesmo Deus que ama fielmente também "retribui no rosto" àqueles que O odeiam. A eleição não é uma licença para pecar, mas o fundamento para a obediência. Porque foram escolhidos por graça, eles devem "guardar os mandamentos" com gratidão.'
      }
    ],
    conclusion: 'Deuteronômio 7:6-11 é o Evangelho no Antigo Testamento. A forma como Deus escolheu Israel é exatamente a mesma forma como Ele escolhe a Igreja hoje. Como Paulo escreve em 1 Coríntios 1:27, "Deus escolheu as coisas loucas deste mundo para confundir as sábias; e Deus escolheu as coisas fracas... para confundir as fortes". Não há lugar para orgulho espiritual na vida do crente. A nossa salvação não se baseia no nosso desempenho, no nosso intelecto ou na nossa bondade, mas exclusivamente no amor soberano de Deus e na obra consumada de Cristo. A compreensão desta graça imerecida é o que produz a verdadeira e alegre obediência.'
  },
  {
    id: 'deu_8_1_20',
    bookId: 'DEU',
    chapter: 8,
    startVerse: 1,
    endVerse: 20,
    title: 'O Perigo do Esquecimento na Prosperidade',
    theme: 'A Disciplina do Deserto, a Provisão Divina e o Pecado da Autossuficiência',
    introduction: 'Deuteronômio 8 é um dos capítulos mais pastorais e proféticos da Bíblia. Moisés, como um pai sábio, antecipa o maior perigo que Israel enfrentará na Terra Prometida. Ironicamente, o maior perigo não seriam os gigantes ou os exércitos cananeus, mas a própria prosperidade que Deus lhes daria. Moisés adverte que a abundância de comida, casas e riquezas tem o poder sedutor de causar amnésia espiritual. O texto contrasta a dependência humilde aprendida no deserto com o orgulho arrogante que frequentemente acompanha o sucesso material, exortando o povo a nunca esquecer de onde vem a sua força.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'O Propósito do Deserto: Humilhação e Teste',
        description: 'Moisés manda o povo "lembrar-se de todo o caminho" pelo qual Deus os guiou durante 40 anos. O deserto não foi um acidente, mas uma escola divina com três propósitos: humilhá-los, prová-los e saber o que estava em seus corações. Deus permitiu que eles tivessem fome para depois alimentá-los com o maná, ensinando-lhes a lição fundamental que Jesus citaria contra Satanás: "nem só de pão viverá o homem, mas de toda a palavra que sai da boca do Senhor". O deserto ensinou que a vida depende da Palavra de Deus, não apenas de recursos materiais. A disciplina de Deus era como a de um pai que corrige seu filho (v. 5).'
      },
      {
        verseRef: 'v. 6-10',
        title: 'A Promessa da Abundância e a Ordem para Bendizer',
        description: 'Moisés descreve a Terra Prometida em termos gloriosos: uma terra de ribeiros de águas, fontes, trigo, cevada, videiras, figueiras, azeite e mel; uma terra onde não faltará nada e onde as pedras são ferro. A transição da escassez do deserto para essa abundância seria drástica. Moisés dá a instrução crucial para quando eles estiverem fartos: "louvarás ao Senhor teu Deus pela boa terra que te deu". A gratidão intencional é o antídoto contra o orgulho.'
      },
      {
        verseRef: 'v. 11-20',
        title: 'O Aviso contra o Orgulho e a Autossuficiência',
        description: 'O clímax do capítulo é um aviso severo: "Guarda-te, que não te esqueças do Senhor teu Deus". O processo de esquecimento começa quando as casas são construídas e os rebanhos e o ouro se multiplicam. O coração se eleva (orgulho) e o crente começa a dizer no seu coração: "A minha força, e a fortaleza da minha mão, me adquiriu este poder" (v. 17). Moisés destrói essa ilusão: "Antes te lembrarás do Senhor teu Deus, que ele é o que te dá força para adquirires riqueza". Se eles esquecerem Deus e seguirem os ídolos (frequentemente ligados à prosperidade agrícola), Moisés garante que eles perecerão assim como as nações que Deus estava destruindo diante deles.'
      }
    ],
    conclusion: 'Deuteronômio 8 revela uma verdade desconfortável: a prosperidade é frequentemente um teste espiritual mais difícil do que a adversidade. No deserto da aflição, somos forçados a clamar a Deus; na terra da abundância, somos tentados a pensar que não precisamos mais dEle. O pecado da autossuficiência ("a minha força me deu isso") rouba a glória de Deus e nos leva à idolatria do materialismo. A mensagem para nós hoje é clara: tudo o que temos — nossos talentos, nossa saúde, nossos empregos e nossos recursos — é um dom da graça de Deus. A lembrança constante da nossa dependência de Deus é a única maneira de sobrevivermos ao sucesso.'
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
console.log(`Expanded ${replacedCount} pericopes (Batch 10.2).`);
