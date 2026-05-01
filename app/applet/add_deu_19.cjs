const fs = require('fs');

const newPericopes = [
  {
    id: 'deu_1_1_8',
    bookId: 'DEU',
    chapter: 1,
    startVerse: 1,
    endVerse: 8,
    title: 'A Ordem para Avançar',
    theme: 'A Fidelidade de Deus e o Chamado à Conquista',
    introduction: 'O livro de Deuteronômio ("Segunda Lei") consiste nos discursos finais de Moisés à nova geração de Israel, acampada nas planícies de Moabe, prestes a entrar na Terra Prometida. Moisés começa relembrando a ordem inicial de Deus em Horebe (Sinai) para que avançassem e tomassem posse da herança.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'O Contexto e a Explicação da Lei',
        description: 'Moisés fala a todo o Israel no quadragésimo ano, no décimo primeiro mês. O texto nota uma ironia trágica: a jornada de Horebe até Cades-Barneia leva apenas onze dias, mas eles levaram quarenta anos por causa da incredulidade. Ali, Moisés começa a "explicar esta lei".'
      },
      {
        verseRef: 'v. 6-7',
        title: 'A Ordem para Partir',
        description: 'Moisés relembra as palavras de Deus em Horebe: "Assaz vos haveis demorado neste monte. Voltai-vos, e parti". Havia um tempo para aprender a Lei, mas agora era tempo de agir. Deus detalha a geografia da terra que eles devem conquistar, do Neguebe até o Eufrates.'
      },
      {
        verseRef: 'v. 8',
        title: 'A Promessa e a Posse',
        description: 'Deus declara: "Eis que tenho posto esta terra diante de vós; entrai e possuí a terra que o Senhor jurou a vossos pais, Abraão, Isaque e Jacó". A terra é um dom garantido pelo juramento divino, mas a posse requer a ação obediente e corajosa do povo ("entrai e possuí").'
      }
    ],
    conclusion: 'Que possamos ouvir a voz de Deus nos chamando para avançar, deixando a estagnação e tomando posse das Suas promessas.'
  },
  {
    id: 'deu_4_1_9',
    bookId: 'DEU',
    chapter: 4,
    startVerse: 1,
    endVerse: 9,
    title: 'A Exortação à Obediência',
    theme: 'A Sabedoria da Lei e o Perigo do Esquecimento',
    introduction: 'Neste trecho, Moisés faz um apelo apaixonado para que Israel obedeça aos estatutos e juízos de Deus. A obediência não é apenas um dever, mas a fonte da vida, da sabedoria e do testemunho de Israel perante as outras nações.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Condição para a Vida',
        description: 'Moisés exorta Israel a ouvir e praticar os estatutos "para que vivais, e entreis, e possuais a terra". Ele adverte estritamente contra acrescentar ou diminuir a Palavra de Deus. Ele lembra o juízo recente em Baal-Peor como prova de que a desobediência traz morte, enquanto a fidelidade preserva a vida.'
      },
      {
        verseRef: 'v. 5-8',
        title: 'A Sabedoria e o Testemunho',
        description: 'A obediência à Lei é a "sabedoria e o entendimento" de Israel perante os povos. Quando as nações virem a justiça destas leis, reconhecerão a grandeza de Israel e a proximidade do seu Deus. A lei de Deus é superior a qualquer sistema humano e deve ser o testemunho da nação.'
      },
      {
        verseRef: 'v. 9',
        title: 'O Cuidado com o Coração e a Memória',
        description: 'Moisés dá um alerta crucial: "Tão somente guarda-te a ti mesmo, e guarda bem a tua alma, que não te esqueças daquelas coisas que os teus olhos têm visto". O esquecimento das obras de Deus leva à apostasia. A memória deve ser cultivada e transmitida aos filhos e netos.'
      }
    ],
    conclusion: 'Que possamos guardar a Palavra de Deus em nossos corações, vivendo com sabedoria e testemunhando Sua grandeza ao mundo.'
  },
  {
    id: 'deu_5_1_22',
    bookId: 'DEU',
    chapter: 5,
    startVerse: 1,
    endVerse: 22,
    title: 'A Repetição dos Dez Mandamentos',
    theme: 'A Aliança Renovada com a Nova Geração',
    introduction: 'Moisés convoca todo o Israel e repete os Dez Mandamentos (o Decálogo) que foram dados no Sinai quarenta anos antes. Ele enfatiza que a aliança não foi feita apenas com os pais que morreram no deserto, mas com a geração presente que está viva hoje.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Aliança Presente',
        description: 'Moisés declara: "O Senhor não fez esta aliança com nossos pais, mas conosco, nós que hoje estamos aqui todos vivos". A Palavra de Deus é viva e aplicável a cada nova geração. Moisés relembra seu papel como mediador entre Deus e o povo aterrorizado pelo fogo.'
      },
      {
        verseRef: 'v. 6-15',
        title: 'Os Mandamentos em Relação a Deus e ao Sábado',
        description: 'A base da lei é a redenção: "Eu sou o Senhor teu Deus, que te tirei da terra do Egito". Seguem-se as proibições de outros deuses, idolatria e uso vão do nome de Deus. O mandamento do Sábado aqui tem uma motivação adicional: lembrar que foram escravos no Egito, promovendo o descanso também para os servos.'
      },
      {
        verseRef: 'v. 16-22',
        title: 'Os Mandamentos em Relação ao Próximo',
        description: 'A segunda tábua foca nas relações humanas: honrar os pais (com promessa de vida longa), não matar, não adulterar, não furtar, não dar falso testemunho e não cobiçar. Moisés conclui dizendo que Deus falou estas palavras com grande voz e as escreveu em duas tábuas de pedra, "e nada acrescentou".'
      }
    ],
    conclusion: 'Que possamos abraçar a aliança de Deus como uma realidade presente, vivendo em amor a Ele e ao nosso próximo.'
  },
  {
    id: 'deu_7_6_11',
    bookId: 'DEU',
    chapter: 7,
    startVerse: 6,
    endVerse: 11,
    title: 'O Motivo da Escolha de Israel',
    theme: 'O Amor Soberano e a Fidelidade de Deus',
    introduction: 'Por que Deus escolheu Israel? Moisés responde a esta pergunta fundamental, destruindo qualquer noção de mérito humano. A eleição de Israel baseia-se unicamente no amor soberano de Deus e na Sua fidelidade às promessas feitas aos patriarcas.',
    points: [
      {
        verseRef: 'v. 6-7',
        title: 'A Escolha Não Baseada em Mérito',
        description: 'Moisés afirma que Israel é um "povo santo" (separado) e "povo próprio" de Deus. Ele deixa claro que Deus não os escolheu por serem mais numerosos ou poderosos que os outros povos; na verdade, eles eram "o menor de todos os povos". A graça de Deus não procura os fortes, mas os fracos.'
      },
      {
        verseRef: 'v. 8',
        title: 'O Amor e o Juramento Divinos',
        description: 'A razão da escolha é dupla: "porque o Senhor vos amava, e para guardar o juramento que fizera a vossos pais". O amor de Deus é a causa não causada da salvação. Ele os libertou da casa da servidão e da mão de Faraó pelo Seu braço forte, movido por esse amor fiel.'
      },
      {
        verseRef: 'v. 9-11',
        title: 'O Deus Fiel e Retribuidor',
        description: 'Moisés declara o caráter de Deus: "Ele é Deus, o Deus fiel, que guarda a aliança e a misericórdia até mil gerações aos que o amam". Em contraste, Ele retribui a destruição aos que O odeiam. Portanto, a resposta do povo deve ser guardar os mandamentos e estatutos.'
      }
    ],
    conclusion: 'Que possamos nos maravilhar com o amor imerecido de Deus e responder com obediência e lealdade à Sua aliança.'
  },
  {
    id: 'deu_8_1_20',
    bookId: 'DEU',
    chapter: 8,
    startVerse: 1,
    endVerse: 20,
    title: 'O Perigo do Esquecimento na Prosperidade',
    theme: 'A Disciplina do Deserto e a Tentação da Abundância',
    introduction: 'Moisés adverte o povo sobre o maior perigo que enfrentarão na Terra Prometida: não os exércitos inimigos, mas a prosperidade. O conforto e a abundância podem levar ao orgulho e ao esquecimento de Deus, tornando necessário lembrar as lições aprendidas no deserto.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'O Propósito do Deserto',
        description: 'Moisés manda que se lembrem de todo o caminho pelo deserto. Deus os humilhou e provou para conhecer o que estava em seus corações. Ele os sustentou com maná para ensinar que "nem só de pão viverá o homem, mas de toda a palavra que sai da boca do Senhor". O deserto foi a disciplina de um Pai amoroso.'
      },
      {
        verseRef: 'v. 6-10',
        title: 'A Promessa da Terra Boa',
        description: 'Deus os está levando para uma terra excelente, com ribeiros, fontes, trigo, cevada, vinhas, figueiras, azeite e mel; uma terra onde não faltará nada e cujas pedras contêm ferro e cobre. A resposta à abundância deve ser louvar ao Senhor pela boa terra.'
      },
      {
        verseRef: 'v. 11-20',
        title: 'O Alerta contra o Orgulho',
        description: 'O grande perigo é que, ao comerem e se fartarem, ao construírem boas casas e multiplicarem seus rebanhos e riquezas, o coração se eleve e eles se esqueçam do Senhor que os libertou. Eles não devem dizer: "A minha força, e a fortaleza da minha mão, me adquiriu este poder". Deus é quem dá a força para adquirir riquezas.'
      }
    ],
    conclusion: 'Que possamos manter a humildade e a gratidão em tempos de prosperidade, lembrando sempre que tudo o que temos vem de Deus.'
  },
  {
    id: 'deu_10_12_22',
    bookId: 'DEU',
    chapter: 10,
    startVerse: 12,
    endVerse: 22,
    title: 'O Que Deus Exige',
    theme: 'O Temor, o Amor e a Circuncisão do Coração',
    introduction: 'Após relatar a renovação das tábuas da Lei, Moisés resume a essência do que Deus espera de Israel. Não se trata apenas de rituais externos, mas de uma atitude interior de reverência, amor e justiça, refletindo o caráter do próprio Deus.',
    points: [
      {
        verseRef: 'v. 12-13',
        title: 'A Essência da Religião Verdadeira',
        description: 'Moisés faz a pergunta retórica: "Que é que o Senhor teu Deus pede de ti?". A resposta é quíntupla: temer ao Senhor, andar em Seus caminhos, amá-Lo, servi-Lo de todo o coração e alma, e guardar os Seus mandamentos. Tudo isso é "para o teu bem". A obediência é o caminho para a bênção.'
      },
      {
        verseRef: 'v. 14-17',
        title: 'A Grandeza de Deus e a Circuncisão do Coração',
        description: 'Embora os céus e a terra pertençam a Deus, Ele escolheu amar os pais de Israel e a sua descendência. Por causa desse amor eletivo, Moisés ordena: "Circuncidai, pois, o prepúcio do vosso coração, e não mais endureçais a vossa cerviz". Deus é o "Deus dos deuses", grande, poderoso e terrível, que não faz acepção de pessoas.'
      },
      {
        verseRef: 'v. 18-22',
        title: 'A Justiça Social e o Amor ao Estrangeiro',
        description: 'O Deus grande e terrível é também o Deus que faz justiça ao órfão e à viúva, e ama o estrangeiro, dando-lhe pão e roupa. Portanto, Israel deve amar o estrangeiro, lembrando que foram estrangeiros no Egito. O temor a Deus deve se traduzir em compaixão e justiça social.'
      }
    ],
    conclusion: 'Que possamos servir a Deus com um coração transformado, amando-O profundamente e refletindo Sua justiça e compaixão ao mundo.'
  },
  {
    id: 'deu_11_13_21',
    bookId: 'DEU',
    chapter: 11,
    startVerse: 13,
    endVerse: 21,
    title: 'A Bênção da Chuva e a Palavra no Coração',
    theme: 'A Dependência de Deus e a Educação Constante',
    introduction: 'Moisés contrasta a terra do Egito (irrigada pelo esforço humano) com a terra de Canaã (dependente da chuva do céu). Esta dependência climática torna a obediência a Deus uma questão de sobrevivência. Para garantir a fidelidade, a Palavra de Deus deve permear toda a vida familiar.',
    points: [
      {
        verseRef: 'v. 13-15',
        title: 'A Condição para a Colheita',
        description: 'Se o povo amar e servir ao Senhor de todo o coração, Deus promete dar a chuva da terra no seu tempo (a temporã e a serôdia), para que colham o grão, o mosto e o azeite, e haja erva para o gado. A prosperidade agrícola em Canaã está diretamente ligada à fidelidade espiritual.'
      },
      {
        verseRef: 'v. 16-17',
        title: 'O Perigo da Idolatria e a Seca',
        description: 'Moisés adverte: "Guardai-vos, que o vosso coração não se engane, e vos desvieis, e sirvais a outros deuses". Se caírem na idolatria, a ira do Senhor se acenderá, Ele fechará os céus, não haverá chuva, a terra não dará seu fruto, e eles perecerão rapidamente da boa terra.'
      },
      {
        verseRef: 'v. 18-21',
        title: 'A Imersão na Palavra',
        description: 'Para evitar a apostasia, as palavras de Deus devem ser colocadas no coração e na alma, atadas como sinal na mão e frontais entre os olhos. Elas devem ser ensinadas aos filhos constantemente: assentado em casa, andando pelo caminho, deitando e levantando, e escritas nos umbrais das portas. A educação contínua garante a longevidade na terra.'
      }
    ],
    conclusion: 'Que possamos reconhecer nossa dependência diária de Deus e saturar nossas vidas e lares com a Sua Palavra.'
  },
  {
    id: 'deu_15_1_11',
    bookId: 'DEU',
    chapter: 15,
    startVerse: 1,
    endVerse: 11,
    title: 'O Ano da Remissão (Cancelamento de Dívidas)',
    theme: 'A Generosidade e a Erradicação da Pobreza',
    introduction: 'Deus estabelece uma lei econômica radical para Israel: a cada sete anos, todas as dívidas entre israelitas devem ser perdoadas. Esta lei visa impedir a pobreza crônica e a escravidão por dívida, refletindo a generosidade do Deus que os libertou do Egito.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Lei do Perdão das Dívidas',
        description: 'No fim de cada sete anos, haverá remissão. Todo credor perdoará o que emprestou ao seu próximo e irmão. A promessa de Deus é ousada: "para que entre ti não haja pobre", pois o Senhor abençoará abundantemente a terra, desde que haja obediência.'
      },
      {
        verseRef: 'v. 7-9',
        title: 'O Alerta contra a Mesquinhez',
        description: 'Moisés adverte contra o pensamento mesquinho: se o sétimo ano estiver próximo, o coração não deve se endurecer para negar empréstimo ao pobre. Recusar ajuda por medo de não ser pago no ano da remissão é considerado pecado e malignidade. Deus vê a intenção do coração.'
      },
      {
        verseRef: 'v. 10-11',
        title: 'O Mandamento da Mão Aberta',
        description: 'Deve-se dar livremente ao pobre, e o coração não deve doer ao dar, pois por isso o Senhor abençoará todas as obras. Moisés reconhece a realidade ("nunca deixará de haver pobre na terra") e, por isso, ordena: "Livremente abrirás a tua mão para o teu irmão, para o teu necessitado, e para o teu pobre na tua terra".'
      }
    ],
    conclusion: 'Que possamos praticar uma generosidade radical, confiando que Deus abençoa a mão aberta e o coração compassivo.'
  },
  {
    id: 'deu_16_13_17',
    bookId: 'DEU',
    chapter: 16,
    startVerse: 13,
    endVerse: 17,
    title: 'A Festa dos Tabernáculos e a Alegria',
    theme: 'A Celebração da Provisão e a Adoração Inclusiva',
    introduction: 'Ao revisar o calendário litúrgico, Moisés destaca a Festa dos Tabernáculos (Cabanas), celebrada após a colheita final. Esta festa é caracterizada por uma ordem divina explícita para se alegrar, e essa alegria deve ser inclusiva, abrangendo todos os membros da sociedade.',
    points: [
      {
        verseRef: 'v. 13-14',
        title: 'A Ordem para se Alegrar',
        description: 'A festa dura sete dias, após a colheita da eira e do lagar. A ordem é clara: "E na tua festa alegrar-te-ás". Esta alegria não é egoísta; deve incluir o filho, a filha, o servo, a serva, o levita, o estrangeiro, o órfão e a viúva que estão dentro das portas. A verdadeira alegria diante de Deus é compartilhada.'
      },
      {
        verseRef: 'v. 15',
        title: 'A Razão da Alegria',
        description: 'A celebração deve ocorrer no lugar que o Senhor escolher (o santuário central). A razão da alegria é a bênção contínua de Deus: "porque o Senhor teu Deus te abençoará em toda a tua colheita, e em todo o trabalho das tuas mãos; por isso certamente te alegrarás".'
      },
      {
        verseRef: 'v. 16-17',
        title: 'A Apresentação Perante o Senhor',
        description: 'Três vezes ao ano, todos os homens devem comparecer perante o Senhor (Pães Asmos, Semanas e Tabernáculos). Ninguém deve aparecer de mãos vazias; cada um deve trazer uma oferta "conforme o dom da sua mão, conforme a bênção que o Senhor teu Deus te tiver dado". A gratidão se expressa em generosidade proporcional.'
      }
    ],
    conclusion: 'Que possamos celebrar as bênçãos de Deus com alegria contagiante, incluindo os necessitados e oferecendo com gratidão.'
  },
  {
    id: 'deu_17_14_20',
    bookId: 'DEU',
    chapter: 17,
    startVerse: 14,
    endVerse: 20,
    title: 'A Lei do Rei',
    theme: 'A Liderança Submissa à Palavra de Deus',
    introduction: 'Antecipando o dia em que Israel pediria um rei para ser como as outras nações, Deus estabelece regras estritas para a monarquia. O rei de Israel não deve ser um déspota oriental, mas um líder humilde, totalmente submisso à Lei de Deus e dependente do Senhor.',
    points: [
      {
        verseRef: 'v. 14-15',
        title: 'A Escolha Divina',
        description: 'Quando o povo decidir ter um rei, eles não podem escolher qualquer um. A regra fundamental é: "porás certamente sobre ti como rei aquele que escolher o Senhor teu Deus". O rei deve ser um israelita ("dentre teus irmãos"), não um estrangeiro. A autoridade real é delegada por Deus.'
      },
      {
        verseRef: 'v. 16-17',
        title: 'As Proibições Reais (Poder, Prazer e Riqueza)',
        description: 'O rei tem três proibições principais que limitam o seu poder: não multiplicar cavalos (não confiar no poderio militar nem voltar ao Egito), não multiplicar mulheres (para que o seu coração não se desvie para a idolatria), e não multiplicar muita prata e ouro (evitar a ganância e a opressão econômica).'
      },
      {
        verseRef: 'v. 18-20',
        title: 'A Submissão à Palavra',
        description: 'O dever principal do rei é escrever para si uma cópia da Lei (Deuteronômio) e lê-la todos os dias da sua vida. O propósito é que ele aprenda a temer ao Senhor, guarde as palavras da lei, não eleve o seu coração acima dos seus irmãos (humildade) e não se desvie do mandamento, garantindo um longo reinado.'
      }
    ],
    conclusion: 'Que os nossos líderes, e nós mesmos, busquemos a sabedoria e a humildade através da leitura diária e submissão à Palavra de Deus.'
  },
  {
    id: 'deu_18_15_22',
    bookId: 'DEU',
    chapter: 18,
    startVerse: 15,
    endVerse: 22,
    title: 'A Promessa do Grande Profeta',
    theme: 'A Revelação Divina e a Autoridade da Palavra',
    introduction: 'Após proibir estritamente todas as formas de ocultismo e adivinhação cananeias (v. 9-14), Moisés promete que Deus não deixará Israel sem orientação. Ele levantará uma linha contínua de profetas, culminando em um Profeta supremo, semelhante a Moisés, que falará as palavras do próprio Deus.',
    points: [
      {
        verseRef: 'v. 15-18',
        title: 'O Profeta Semelhante a Moisés',
        description: 'Moisés declara: "O Senhor teu Deus te levantará um profeta do meio de ti, de teus irmãos, como eu; a ele ouvireis". Esta promessa responde ao pedido do povo no Sinai, que temia ouvir a voz direta de Deus. Deus promete colocar Suas palavras na boca desse profeta, e ele falará tudo o que Deus ordenar. (O Novo Testamento identifica Jesus como o cumprimento final desta promessa).'
      },
      {
        verseRef: 'v. 19',
        title: 'A Responsabilidade de Ouvir',
        description: 'Deus adverte solenemente: "E será que qualquer que não ouvir as minhas palavras, que ele falar em meu nome, eu o requererei dele". Rejeitar a palavra do verdadeiro profeta é rejeitar a autoridade do próprio Deus e atrai o juízo divino.'
      },
      {
        verseRef: 'v. 20-22',
        title: 'O Teste do Falso Profeta',
        description: 'Como distinguir o verdadeiro do falso profeta? O profeta que falar presunçosamente em nome de Deus o que não foi mandado, ou falar em nome de outros deuses, deve morrer. O teste prático é o cumprimento da palavra: se o que o profeta disser em nome do Senhor não se cumprir, é palavra falsa e presunçosa; o povo não deve temê-lo.'
      }
    ],
    conclusion: 'Que possamos ouvir e obedecer à voz de Jesus Cristo, o Grande Profeta, rejeitando as vozes enganosas deste mundo.'
  },
  {
    id: 'deu_24_17_22',
    bookId: 'DEU',
    chapter: 24,
    startVerse: 17,
    endVerse: 22,
    title: 'A Proteção aos Vulneráveis',
    theme: 'A Justiça Social Baseada na Memória da Redenção',
    introduction: 'A lei de Deus em Deuteronômio demonstra uma profunda preocupação com os membros mais vulneráveis da sociedade: o estrangeiro, o órfão e a viúva. O tratamento justo e compassivo a essas pessoas não é apenas caridade, mas uma exigência de justiça baseada na própria história de redenção de Israel.',
    points: [
      {
        verseRef: 'v. 17-18',
        title: 'A Justiça Imparcial',
        description: 'A lei proíbe perverter o direito do estrangeiro e do órfão, e tomar em penhor a roupa da viúva. A justiça não deve favorecer os poderosos. O motivo para esta justiça é a memória: "Lembra-te de que foste servo no Egito, e de que o Senhor teu Deus te livrou dali". A experiência da opressão deve gerar compaixão, não mais opressão.'
      },
      {
        verseRef: 'v. 19',
        title: 'A Respiga do Campo',
        description: 'Ao segar o campo e esquecer um feixe, o agricultor não deve voltar para buscá-lo; deve ficar para o estrangeiro, o órfão e a viúva. A promessa é que o Senhor abençoará todas as obras das mãos de quem age assim. A generosidade atrai a bênção de Deus.'
      },
      {
        verseRef: 'v. 20-22',
        title: 'A Colheita da Oliveira e da Vinha',
        description: 'A mesma regra se aplica à colheita de azeitonas (não sacudir os ramos uma segunda vez) e uvas (não rebuscar a vinha). O que sobra pertence aos vulneráveis. Novamente, o refrão é repetido: "E lembrar-te-ás de que foste servo na terra do Egito; portanto te ordeno que faças isso". A redenção é o motor da ética social.'
      }
    ],
    conclusion: 'Que a lembrança da graça que nos salvou nos motive a tratar os vulneráveis com justiça, dignidade e generosidade.'
  },
  {
    id: 'deu_28_1_14',
    bookId: 'DEU',
    chapter: 28,
    startVerse: 1,
    endVerse: 14,
    title: 'As Bênçãos da Obediência',
    theme: 'A Recompensa da Fidelidade à Aliança',
    introduction: 'O capítulo 28 apresenta as consequências da aliança (bênçãos e maldições). Se Israel obedecer fielmente à voz do Senhor, Deus promete derramar uma torrente de bênçãos que abrangerão todas as áreas da vida nacional, familiar e econômica, exaltando-os sobre todas as nações.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Abrangência das Bênçãos',
        description: 'A condição é ouvir atentamente e guardar os mandamentos. As bênçãos "virão sobre ti e te alcançarão". Eles serão abençoados na cidade e no campo, no fruto do ventre, da terra e dos animais, no cesto e na amassadeira, ao entrar e ao sair. A obediência traz prosperidade integral.'
      },
      {
        verseRef: 'v. 7-10',
        title: 'A Vitória e o Testemunho',
        description: 'Deus promete derrotar os inimigos: eles sairão por um caminho e fugirão por sete. O Senhor abençoará os celeiros e o trabalho das mãos. O resultado mais importante é o testemunho global: "E todos os povos da terra verão que és chamado pelo nome do Senhor, e terão temor de ti".'
      },
      {
        verseRef: 'v. 11-14',
        title: 'A Abundância e a Liderança',
        description: 'Deus abrirá o Seu "bom tesouro, o céu" para dar chuva no tempo certo. Israel emprestará a muitas nações e não tomará emprestado. O Senhor os porá "por cabeça, e não por cauda", e estarão "só por cima, e não por baixo", desde que não se desviem para a direita nem para a esquerda, seguindo outros deuses.'
      }
    ],
    conclusion: 'Que possamos buscar a obediência fiel a Deus, confiando que Ele é o galardoador daqueles que O buscam.'
  },
  {
    id: 'deu_28_15_24',
    bookId: 'DEU',
    chapter: 28,
    startVerse: 15,
    endVerse: 24,
    title: 'As Maldições da Desobediência',
    theme: 'O Juízo Divino sobre a Quebra da Aliança',
    introduction: 'Em contraste com as bênçãos, Moisés detalha as terríveis consequências (maldições) que sobrevirão a Israel se eles rejeitarem a Palavra de Deus e quebrarem a aliança. O juízo de Deus será tão abrangente e implacável quanto seriam as Suas bênçãos.',
    points: [
      {
        verseRef: 'v. 15-19',
        title: 'A Inversão das Bênçãos',
        description: 'Se não ouvirem a voz do Senhor, todas as maldições os alcançarão. As maldições são o espelho exato das bênçãos: malditos na cidade e no campo, maldito o cesto e a amassadeira, maldito o fruto do ventre e da terra, malditos ao entrar e ao sair. A rebelião traz ruína em todas as esferas da vida.'
      },
      {
        verseRef: 'v. 20-22',
        title: 'A Destruição Ativa de Deus',
        description: 'O Senhor enviará a maldição, a confusão e a derrota em tudo o que puserem a mão, até que sejam destruídos, por causa da "maldade das tuas obras". Deus enviará a peste, a tísica, a febre, a inflamação, o calor forte, a secura e a ferrugem, perseguindo-os até perecerem.'
      },
      {
        verseRef: 'v. 23-24',
        title: 'O Céu de Bronze e a Terra de Ferro',
        description: 'A natureza se voltará contra eles: "E os teus céus, que estão sobre a tua cabeça, serão de bronze; e a terra que está debaixo de ti, será de ferro". A chuva será transformada em pó e poeira, trazendo destruição agrícola e fome. A desobediência fecha os céus e endurece a terra.'
      }
    ],
    conclusion: 'Que possamos temer o juízo de Deus e fugir do pecado, sabendo que a rebelião contra o Criador traz ruína inevitável.'
  },
  {
    id: 'deu_30_11_20',
    bookId: 'DEU',
    chapter: 30,
    startVerse: 11,
    endVerse: 20,
    title: 'A Escolha entre a Vida e a Morte',
    theme: 'A Clareza da Palavra e o Apelo à Decisão',
    introduction: 'No clímax de seus discursos, Moisés faz um apelo final e dramático à nação. Ele enfatiza que a vontade de Deus não é um mistério inacessível, mas está clara e próxima. Diante deles estão dois caminhos absolutos, e eles devem fazer uma escolha consciente.',
    points: [
      {
        verseRef: 'v. 11-14',
        title: 'A Palavra Acessível',
        description: 'Moisés declara que o mandamento não é encoberto nem está longe. Não está no céu (para que alguém precise subir e trazê-lo) nem além do mar. "Mas a palavra está mui perto de ti, na tua boca, e no teu coração, para a fazeres". Deus revelou Sua vontade de forma clara e compreensível; a ignorância não é desculpa.'
      },
      {
        verseRef: 'v. 15-18',
        title: 'Os Dois Caminhos',
        description: 'Moisés coloca diante do povo as opções: "a vida e o bem, e a morte e o mal". Amar a Deus e andar em Seus caminhos resulta em vida e multiplicação. Mas se o coração se desviar, for rebelde e adorar outros deuses, a consequência certa é a perdição e a brevidade de dias na terra.'
      },
      {
        verseRef: 'v. 19-20',
        title: 'O Apelo: Escolhe a Vida',
        description: 'Moisés toma os céus e a terra por testemunhas contra eles e faz o apelo final: "escolhe pois a vida, para que vivas, tu e a tua descendência". Escolher a vida significa amar ao Senhor, dar ouvidos à Sua voz e apegar-se a Ele, "pois ele é a tua vida, e o prolongamento dos teus dias".'
      }
    ],
    conclusion: 'Que possamos escolher a vida todos os dias, amando a Deus, ouvindo Sua voz e nos apegando firmemente a Ele.'
  },
  {
    id: 'deu_31_1_8',
    bookId: 'DEU',
    chapter: 31,
    startVerse: 1,
    endVerse: 8,
    title: 'A Passagem da Liderança para Josué',
    theme: 'O Encorajamento e a Presença Inabalável de Deus',
    introduction: 'Com 120 anos de idade, Moisés anuncia formalmente que não atravessará o Jordão. Ele transfere a liderança para Josué diante de todo o povo, oferecendo palavras de profundo encorajamento baseadas não na força humana, mas na presença garantida de Deus.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Fim de uma Era e a Promessa Divina',
        description: 'Moisés reconhece suas limitações físicas e a ordem de Deus de que não passará o Jordão. No entanto, a obra não para com a morte do líder. Ele assegura ao povo: "O Senhor teu Deus passará adiante de ti... e Josué passará adiante de ti, como o Senhor tem falado". Deus é o verdadeiro Líder.'
      },
      {
        verseRef: 'v. 4-6',
        title: 'O Encorajamento ao Povo',
        description: 'Lembrando as vitórias passadas sobre os reis amorreus (Seom e Ogue), Moisés exorta o povo: "Esforçai-vos, e animai-vos; não temais, nem vos espanteis diante deles". A razão para a coragem é a promessa da presença divina: "o Senhor teu Deus é o que vai contigo; não te deixará nem te desamparará".'
      },
      {
        verseRef: 'v. 7-8',
        title: 'O Encorajamento a Josué',
        description: 'Moisés chama Josué e, à vista de todo o Israel, repete a exortação: "Esforça-te e anima-te". O peso da liderança agora recai sobre Josué, mas a promessa é a mesma: "O Senhor, pois, é aquele que vai adiante de ti; ele será contigo, não te deixará, nem te desamparará; não temas, nem te espantes".'
      }
    ],
    conclusion: 'Que possamos enfrentar os desafios e transições da vida com coragem, sabendo que o Senhor vai adiante de nós e nunca nos abandona.'
  },
  {
    id: 'deu_32_1_14',
    bookId: 'DEU',
    chapter: 32,
    startVerse: 1,
    endVerse: 14,
    title: 'O Cântico de Moisés: A Rocha e o Povo',
    theme: 'A Fidelidade de Deus e a Ingratidão Humana',
    introduction: 'Deus ordena que Moisés ensine um cântico profético a Israel, para servir como testemunha contra eles quando caírem na apostasia. O cântico começa exaltando o caráter perfeito de Deus e contrastando-o com a corrupção e a ingratidão do Seu povo.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Proclamação do Nome e da Rocha',
        description: 'Moisés convoca os céus e a terra para ouvir. Seu ensino deve cair como chuva e orvalho (trazendo vida). Ele proclama o nome do Senhor e Sua grandeza. Deus é a "Rocha", cuja obra é perfeita e cujos caminhos são justos; "Deus da verdade, e sem iniquidade; justo e reto é ele".'
      },
      {
        verseRef: 'v. 5-9',
        title: 'A Corrupção do Povo e a Pergunta Retórica',
        description: 'Em contraste com a Rocha perfeita, o povo se corrompeu; são uma "geração perversa e distorcida". Moisés pergunta: "Recompensais assim ao Senhor, povo louco e ignorante? Não é ele teu pai que te adquiriu, te fez e te estabeleceu?". Ele os chama a lembrar os dias da antiguidade e a soberania de Deus na divisão das nações, escolhendo Israel como Sua porção.'
      },
      {
        verseRef: 'v. 10-14',
        title: 'O Cuidado e a Provisão no Deserto',
        description: 'O cântico usa metáforas belíssimas do cuidado de Deus: Ele achou Israel numa terra deserta, o instruiu, o guardou "como a menina do seu olho". Como a águia que desperta o seu ninho e leva os filhotes sobre as asas, assim o Senhor os guiou sozinho. Ele os fez cavalgar sobre as alturas da terra e os alimentou com a abundância do campo, mel, azeite, leite, carne e o "sangue das uvas".'
      }
    ],
    conclusion: 'Que possamos louvar a Deus, nossa Rocha perfeita, e responder ao Seu cuidado amoroso com gratidão e fidelidade.'
  },
  {
    id: 'deu_33_1_5',
    bookId: 'DEU',
    chapter: 33,
    startVerse: 1,
    endVerse: 5,
    title: 'A Bênção Final de Moisés',
    theme: 'A Majestade de Deus e o Amor pelo Seu Povo',
    introduction: 'Antes de subir ao Monte Nebo para morrer, Moisés, o "homem de Deus", profere uma bênção final sobre as tribos de Israel. Ele começa com um prólogo majestoso que celebra a manifestação gloriosa de Deus no Sinai e o Seu amor pelos Seus santos.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Teofania no Sinai',
        description: 'Moisés descreve a vinda de Deus do Sinai, resplandecendo de Seir e do monte Parã. Ele vem com "dez milhares de santos" (anjos), e à Sua direita havia "fogo da lei" (ou relâmpagos) para eles. A imagem é de um Rei divino vindo em glória e poder para se encontrar com o Seu povo.'
      },
      {
        verseRef: 'v. 3',
        title: 'O Amor e a Submissão',
        description: 'Apesar do terror da Sua majestade, a motivação de Deus é o amor: "Na verdade ama os povos". Todos os Seus santos estão na Sua mão. A resposta do povo é a submissão reverente: "eles se prostraram a teus pés; cada um receberá das tuas palavras". A verdadeira adoração une o temor da majestade e o conforto do amor.'
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Lei como Herança e o Rei em Jesurum',
        description: 'Moisés deu-lhes a lei, que é a "herança da congregação de Jacó". A Palavra de Deus é o maior tesouro da nação. O texto declara que Deus "foi rei em Jesurum" (um nome poético para Israel, significando "o reto"), quando os chefes do povo e as tribos se congregaram. Deus é o verdadeiro Soberano de Israel.'
      }
    ],
    conclusion: 'Que possamos nos prostrar aos pés do nosso Rei majestoso, recebendo Suas palavras com amor e submissão.'
  },
  {
    id: 'deu_34_1_12',
    bookId: 'DEU',
    chapter: 34,
    startVerse: 1,
    endVerse: 12,
    title: 'A Morte e o Legado de Moisés',
    theme: 'O Fim de uma Era e a Incomparabilidade do Profeta',
    introduction: 'O último capítulo de Deuteronômio (provavelmente escrito por Josué ou um editor posterior) relata a morte de Moisés. Ele vê a Terra Prometida de longe, morre segundo a palavra do Senhor, e deixa um legado inigualável na história de Israel.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Visão da Terra Prometida',
        description: 'Moisés sobe ao monte Nebo, ao cume de Pisga. O Senhor lhe mostra toda a terra, de Gileade até Dã, Naftali, Efraim, Manassés, Judá até o mar ocidental, o Neguebe e a campina de Jericó. Deus confirma: "Esta é a terra que jurei a Abraão... Eu te fiz vê-la com os teus olhos, porém lá não passarás".'
      },
      {
        verseRef: 'v. 5-8',
        title: 'A Morte e o Sepultamento Misterioso',
        description: 'Moisés, o servo do Senhor, morre ali na terra de Moabe, "conforme a palavra do Senhor". O próprio Deus o sepulta num vale, e "ninguém sabe o seu sepulcro até hoje" (evitando que se tornasse um local de idolatria). Ele morre com 120 anos, com os olhos não escurecidos e o vigor não abatido. O povo pranteia por trinta dias.'
      },
      {
        verseRef: 'v. 9-12',
        title: 'A Sucessão e o Epitáfio',
        description: 'Josué fica cheio do espírito de sabedoria, pois Moisés lhe impusera as mãos, e o povo lhe obedece. O livro termina com um epitáfio grandioso: "E nunca mais se levantou em Israel profeta algum como Moisés, a quem o Senhor conhecera face a face". Ele é lembrado por todos os sinais, maravilhas e feitos terríveis que realizou.'
      }
    ],
    conclusion: 'Que possamos servir a Deus fielmente até o fim de nossos dias, deixando um legado de intimidade com o Senhor e obediência à Sua Palavra.'
  }
];

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

// Append new pericopes
arr.push(...newPericopes);

// Write back
const newArrayContent = JSON.stringify(arr, null, 2);
const newContent = content.substring(0, startIndex) + newArrayContent + content.substring(endIndex + 1);
fs.writeFileSync('data/pericopes_temp.ts', newContent, 'utf8');
console.log('Added 19 new Deuteronomy pericopes.');
