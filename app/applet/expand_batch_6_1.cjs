const fs = require('fs');

const expandedPericopes = [
  {
    id: 'exo_25_10_22',
    bookId: 'EXO',
    chapter: 25,
    startVerse: 10,
    endVerse: 22,
    title: 'A Arca da Aliança',
    theme: 'A Presença, a Lei e a Propiciação',
    introduction: 'De todos os móveis do Tabernáculo, a Arca da Aliança é o mais sagrado e o mais importante. Ela é o primeiro item descrito por Deus a Moisés, pois representa o próprio trono de Deus na terra e o centro de toda a adoração de Israel. Êxodo 25:10-22 detalha a construção desta arca de madeira revestida de ouro e, mais crucialmente, do Propiciatório (a tampa) com seus querubins. A Arca é a síntese teológica do Antigo Testamento: o lugar onde a justiça santa de Deus (a Lei) se encontra com a Sua misericórdia (o sangue aspergido), prefigurando perfeitamente a obra redentora de Cristo.',
    points: [
      {
        verseRef: 'v. 10-16',
        title: 'A Madeira, o Ouro e o Testemunho',
        description: 'A Arca é uma caixa feita de madeira de acácia (incorruptível e resistente, simbolizando a humanidade de Cristo) e revestida de ouro puro por dentro e por fora (simbolizando Sua divindade e pureza). Ela possui argolas e varais que nunca devem ser removidos, indicando que a presença de Deus é peregrina e acompanha o Seu povo na jornada. Dentro da Arca, Moisés deve colocar o "Testemunho" (as duas tábuas da Lei). A Lei no coração da Arca revela que o trono de Deus é fundamentado na justiça e na retidão.'
      },
      {
        verseRef: 'v. 17-20',
        title: 'O Propiciatório e os Querubins',
        description: 'A tampa da Arca é chamada de Propiciatório (Kapporeth, o lugar de expiação ou cobertura). Diferente da caixa, o Propiciatório é feito de ouro maciço, não de madeira revestida. Nas duas extremidades, há dois querubins de ouro batido, com as asas estendidas cobrindo o Propiciatório e os rostos voltados um para o outro, olhando para baixo, em direção à tampa. Os querubins representam a santidade e a justiça divinas que guardam a presença de Deus (como no Éden). Eles olham para o lugar onde o sangue do sacrifício seria aspergido no Dia da Expiação.'
      },
      {
        verseRef: 'v. 21-22',
        title: 'O Lugar do Encontro e da Revelação',
        description: 'Deus declara o propósito supremo da Arca e do Propiciatório: "E ali virei a ti, e falarei contigo de cima do propiciatório, do meio dos dois querubins". Este é o ponto exato de encontro entre o Deus santo e o homem pecador. A comunhão só é possível porque o Propiciatório (o lugar da misericórdia) cobre a Lei (que condena o pecador). Quando Deus olha para baixo, Ele não vê a Lei quebrada, mas o sangue da expiação. É a partir deste lugar de graça e justiça satisfeita que Deus governa e fala com o Seu povo.'
      }
    ],
    conclusion: 'A Arca da Aliança é a mais bela sombra de Jesus Cristo no Antigo Testamento. Em Romanos 3:25, Paulo usa a palavra grega para Propiciatório (hilasterion) para descrever Jesus: "Ao qual Deus propôs para propiciação pela fé no seu sangue". Cristo é o nosso Propiciatório. N’Ele, a justiça de Deus (que exige a morte pelo pecado) e a misericórdia de Deus (que deseja salvar o pecador) se encontram perfeitamente. Através de Cristo, não precisamos mais temer a condenação da Lei, pois temos acesso direto ao trono da graça para encontrar socorro em tempo de necessidade (Hb 4:16).'
  },
  {
    id: 'exo_31_1_11',
    bookId: 'EXO',
    chapter: 31,
    startVerse: 1,
    endVerse: 11,
    title: 'Bezalel e Aoliabe',
    theme: 'A Unção para o Serviço, a Arte Sagrada e a Capacitação do Espírito',
    introduction: 'Após detalhar o complexo projeto arquitetônico e artístico do Tabernáculo, surge uma questão prática: quem entre os ex-escravos hebreus teria a habilidade técnica para executar uma obra tão refinada em ouro, prata, pedras preciosas e tecidos? Êxodo 31 responde a essa pergunta revelando que Deus não apenas dá a visão, mas também capacita os trabalhadores. O chamado de Bezalel e Aoliabe é um marco teológico: é a primeira vez na Bíblia que se diz que alguém foi "cheio do Espírito de Deus". Este texto eleva o trabalho manual e a arte ao status de ministério sagrado.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Chamado Nominal e a Plenitude do Espírito',
        description: 'Deus diz a Moisés: "Eis que eu tenho chamado por nome a Bezalel". O chamado para o serviço é pessoal e específico. A qualificação de Bezalel não vem apenas de seu talento natural, mas de uma capacitação sobrenatural: "E o enchi do Espírito de Deus". Esta plenitude se manifesta em quatro áreas: sabedoria (para entender o projeto), entendimento (para resolver problemas), ciência (conhecimento técnico) e em todo o lavor (habilidade prática). O Espírito Santo não capacita apenas profetas e sacerdotes, mas também artesãos e trabalhadores.'
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Santidade do Trabalho Manual e da Arte',
        description: 'A unção de Bezalel tem um propósito muito prático: "Para invenções de obra... para trabalhar em ouro, em prata, e em cobre, e em lavramento de pedras... e em entalhe de madeira". Deus valoriza a beleza, a precisão e a excelência no trabalho manual. A arte, quando submetida ao Espírito de Deus e usada para a Sua glória, é uma expressão de adoração. O Tabernáculo não seria apenas funcional, seria uma obra-prima estética que refletiria a glória e a majestade do Criador.'
      },
      {
        verseRef: 'v. 6-11',
        title: 'A Parceria e a Obediência ao Modelo',
        description: 'Deus não deixa Bezalel trabalhar sozinho. Ele designa Aoliabe como seu parceiro e assistente principal. Além disso, Deus afirma: "e tenho dado sabedoria ao coração de todo aquele que é sábio de coração, para que façam tudo o que te tenho ordenado". A obra de Deus requer uma equipe capacitada e unida. O limite da criatividade deles é estritamente definido pela obediência: eles devem fazer "conforme a tudo o que te tenho ordenado". A verdadeira unção do Espírito sempre leva à obediência à Palavra de Deus, nunca à rebelião contra o modelo divino.'
      }
    ],
    conclusion: 'A história de Bezalel e Aoliabe destrói a falsa dicotomia entre o "secular" e o "sagrado". Todo trabalho honesto, seja pregar um sermão ou esculpir madeira, pode ser um ato de adoração se for feito na plenitude do Espírito e para a glória de Deus. O Senhor ainda hoje chama pessoas pelo nome e as capacita com habilidades específicas para edificar a Sua Igreja (o templo vivo). Quando entregamos nossos talentos naturais ao controle do Espírito Santo, Ele os transforma em instrumentos para a construção do Seu Reino.'
  },
  {
    id: 'exo_32_15_29',
    bookId: 'EXO',
    chapter: 32,
    startVerse: 15,
    endVerse: 29,
    title: 'Moisés Quebra as Tábuas',
    theme: 'A Ira Santa, a Aliança Quebrada e a Purificação do Acampamento',
    introduction: 'Enquanto Moisés estava no monte recebendo as instruções para a adoração verdadeira, o povo no vale, liderado por Arão, construiu um bezerro de ouro, mergulhando na idolatria e na imoralidade. Êxodo 32:15-29 descreve a descida de Moisés e sua reação explosiva diante da apostasia de Israel. A quebra das tábuas da Lei não é um mero acesso de raiva descontrolada, mas um ato profético e legal que demonstra a quebra da aliança. O que se segue é um momento de juízo severo e purificação necessária para salvar a nação da aniquilação total.',
    points: [
      {
        verseRef: 'v. 15-19',
        title: 'A Descida, o Cântico Profano e a Quebra da Aliança',
        description: 'Moisés desce do monte carregando as duas tábuas do Testemunho, escritas pelo dedo de Deus. Josué, ouvindo o barulho, acha que é som de guerra, mas Moisés reconhece que é som de cantares (festas pagãs). Ao chegar ao acampamento e ver o bezerro e as danças, a ira de Moisés se acende. Ele lança as tábuas das mãos e as quebra ao pé do monte. Este ato visualiza a realidade espiritual: antes mesmo de a Lei ser lida para o povo, eles já a haviam quebrado. A aliança estava em pedaços.'
      },
      {
        verseRef: 'v. 20-24',
        title: 'A Destruição do Ídolo e a Desculpa de Arão',
        description: 'Moisés age com autoridade absoluta. Ele queima o bezerro, reduz a pó, espalha sobre a água e obriga os israelitas a beberem (um ato de humilhação que os faz engolir o próprio pecado). Em seguida, ele confronta Arão, o líder interino: "Que te fez este povo, que sobre ele trouxeste tamanho pecado?". A resposta de Arão é uma evasiva patética, culpando o povo ("tu sabes que este povo é inclinado ao mal") e minimizando sua própria ação ("eu lancei o ouro no fogo, e saiu este bezerro"). A liderança fraca cede à pressão popular e foge da responsabilidade.'
      },
      {
        verseRef: 'v. 25-29',
        title: 'A Chamada à Decisão e o Zelo dos Levitas',
        description: 'Vendo que o povo estava "despido" (desenfreado e exposto à vergonha), Moisés se põe à porta do arraial e faz um chamado decisivo: "Quem é do Senhor, venha a mim". Apenas a tribo de Levi se junta a ele. Moisés emite uma ordem terrível da parte de Deus: os levitas devem passar pelo acampamento com espadas e matar os líderes da rebelião, mesmo que sejam irmãos ou amigos. Cerca de três mil homens morrem. Pelo seu zelo implacável pela santidade de Deus, a tribo de Levi é consagrada naquele dia para o sacerdócio.'
      }
    ],
    conclusion: 'A quebra das tábuas e o juízo subsequente nos mostram a extrema gravidade do pecado da idolatria. Deus não tolera a mistura da Sua adoração com as práticas do mundo. A atitude de Arão serve como um alerta para os líderes: o desejo de agradar às pessoas pode nos levar a comprometer a verdade de Deus. Por outro lado, a ação dos levitas demonstra que a lealdade a Deus deve superar até mesmo os laços familiares mais próximos. A ira santa de Moisés evitou que a ira de Deus consumisse toda a nação, mostrando que a disciplina severa às vezes é o único caminho para a preservação.'
  },
  {
    id: 'exo_32_30_35',
    bookId: 'EXO',
    chapter: 32,
    startVerse: 30,
    endVerse: 35,
    title: 'A Intercessão Sacrificial de Moisés',
    theme: 'O Amor do Mediador, a Expiação e a Justiça de Deus',
    introduction: 'Após o terrível juízo sobre os idólatras do bezerro de ouro, a nação de Israel ainda está sob a ameaça da ira divina. O pecado foi contido, mas a culpa permanece. Êxodo 32:30-35 revela o coração pastoral e mediador de Moisés em sua profundidade máxima. Ele sobe novamente ao monte não para receber leis, mas para implorar por perdão. A oferta que Moisés faz a Deus é uma das mais chocantes e sublimes de toda a Bíblia, prefigurando diretamente o sacrifício substitutivo de Jesus Cristo pela humanidade pecadora.',
    points: [
      {
        verseRef: 'v. 30',
        title: 'O Reconhecimento da Culpa e a Busca por Expiação',
        description: 'No dia seguinte ao massacre, Moisés fala ao povo com extrema franqueza: "Vós cometestes grande pecado". Ele não minimiza a ofensa. No entanto, ele oferece uma centelha de esperança: "Agora, porém, subirei ao Senhor; porventura farei propiciação (expiação) por vosso pecado". Moisés entende que o arrependimento do povo e a punição dos líderes rebeldes não são suficientes para restaurar a comunhão com um Deus santo. É necessária uma propiciação, um ato que cubra o pecado e apazigue a ira divina.'
      },
      {
        verseRef: 'v. 31-32',
        title: 'A Oferta Substitutiva: O Risco da Própria Alma',
        description: 'Moisés volta ao Senhor e faz uma confissão direta do pecado do povo (fizeram deuses de ouro). Então, ele profere a oração mais ousada de sua vida: "Agora, pois, perdoa o seu pecado; se não, risca-me, peço-te, do teu livro, que tens escrito". Moisés ama tanto o povo rebelde que oferece sua própria salvação eterna em troca do perdão deles. Ele pede para ser condenado e apagado do livro da vida (o registro dos justos) se Deus não puder perdoar Israel. É o amor de um verdadeiro mediador, disposto a ser amaldiçoado para salvar os culpados.'
      },
      {
        verseRef: 'v. 33-35',
        title: 'A Resposta de Deus: Justiça Pessoal e Adiamento do Juízo',
        description: 'Deus recusa a oferta de Moisés, estabelecendo o princípio da responsabilidade individual: "Aquele que pecar contra mim, a este riscarei do meu livro". Um mero homem, por mais justo que seja, não pode expiar os pecados de uma nação inteira. No entanto, a intercessão de Moisés é eficaz para evitar a aniquilação imediata. Deus ordena que Moisés continue guiando o povo e promete que o Seu Anjo irá adiante deles. Contudo, Deus avisa que no dia da Sua visitação, Ele punirá o pecado deles. O capítulo termina com o Senhor ferindo o povo com uma praga por causa do bezerro.'
      }
    ],
    conclusion: 'A intercessão de Moisés é um dos quadros mais impressionantes do amor cristocêntrico no Antigo Testamento. Moisés estava disposto a perder sua alma por Israel, mas Deus recusou, pois Moisés era apenas um homem. Séculos depois, o verdadeiro e perfeito Mediador, Jesus Cristo, faria a mesma oferta. Mas, diferente de Moisés, Jesus não tinha pecado próprio, e Sua oferta foi aceita. Na cruz, Jesus foi "riscado" (desamparado, feito maldição) em nosso lugar, para que os nossos nomes pudessem ser escritos permanentemente no Livro da Vida do Cordeiro.'
  },
  {
    id: 'exo_33_1_11',
    bookId: 'EXO',
    chapter: 33,
    startVerse: 1,
    endVerse: 11,
    title: 'A Tenda da Congregação',
    theme: 'A Perda da Presença, o Luto do Povo e a Intimidade do Mediador',
    introduction: 'O pecado do bezerro de ouro teve consequências devastadoras. Embora Deus tenha poupado a nação da destruição total devido à intercessão de Moisés, Êxodo 33 revela a pior punição possível: a retirada da presença íntima de Deus. Deus promete dar a terra e enviar um anjo, mas recusa-se a ir no meio deles. Este capítulo descreve a crise espiritual de Israel, o seu luto genuíno e a solução temporária encontrada por Moisés ao armar uma "Tenda da Congregação" fora do acampamento, um lugar de intimidade exclusiva onde ele falava com Deus face a face.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Pior Notícia: A Promessa sem a Presença',
        description: 'Deus ordena que Moisés suba com o povo para a terra prometida a Abraão. Ele promete expulsar os inimigos e dar-lhes uma terra que mana leite e mel. No entanto, há uma condição terrível: "Eu não subirei no meio de ti, porquanto és povo de dura cerviz, para que te não consuma no caminho". Deus oferece as bênçãos da aliança (a terra, a vitória, o anjo), mas retira o Doador das bênçãos. Quando o povo ouve esta "má notícia", eles pranteiam e ninguém coloca seus atavios (enfeites). Eles percebem que o paraíso sem Deus é apenas um deserto.'
      },
      {
        verseRef: 'v. 5-6',
        title: 'O Arrependimento e a Remoção dos Enfeites',
        description: 'Deus reafirma a Sua santidade e o perigo de habitar no meio de um povo obstinado. Ele ordena: "tira de ti os teus atavios, para que eu saiba o que te hei de fazer". Os atavios (joias) eram provavelmente os mesmos materiais usados para fazer o bezerro de ouro, símbolos de orgulho e idolatria. Os filhos de Israel obedecem e se despojam de seus atavios junto ao monte Horebe. É um ato visível de humilhação, luto e arrependimento genuíno diante da ameaça de perderem a presença de Deus.'
      },
      {
        verseRef: 'v. 7-11',
        title: 'A Tenda Fora do Arraial e a Intimidade de Moisés',
        description: 'Como Deus não podia habitar no meio do acampamento contaminado, Moisés toma uma tenda e a arma "longe do arraial". Ele a chama de Tenda da Congregação (um precursor do Tabernáculo). Quem buscava ao Senhor tinha que sair do acampamento. Quando Moisés entrava na tenda, a coluna de nuvem descia e ficava à porta, e todo o povo adorava de longe. O versículo 11 descreve a intimidade inigualável de Moisés: "E falava o Senhor a Moisés face a face, como qualquer fala com o seu amigo". Enquanto o povo estava distante, o mediador desfrutava de comunhão direta. O jovem Josué permanecia na tenda, aprendendo a presença de Deus.'
      }
    ],
    conclusion: 'Este capítulo nos confronta com uma pergunta profunda: ficaríamos satisfeitos em ter todas as bênçãos de Deus (saúde, prosperidade, sucesso) se Ele mesmo não estivesse conosco? O luto de Israel mostra que eles finalmente entenderam que a maior bênção da aliança é a presença do próprio Deus. A Tenda armada "fora do arraial" nos lembra que o pecado afasta a presença de Deus, e que buscar ao Senhor frequentemente exige que saiamos da nossa zona de conforto e do meio da multidão (Hebreus 13:13). A intimidade de Moisés nos inspira a buscar uma amizade profunda e face a face com o nosso Criador.'
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
console.log(`Expanded ${replacedCount} pericopes (Batch 6.1).`);
