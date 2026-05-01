const fs = require('fs');

const newPericopes = [
  {
    id: 'jer_2_11_13',
    bookId: 'JER',
    chapter: 2,
    startVerse: 11,
    endVerse: 13,
    title: 'Os Dois Grandes Males',
    theme: 'Idolatria, Insatisfação e a Fonte de Águas Vivas',
    introduction: 'No início do seu ministério, Jeremias é chamado para confrontar a nação de Judá com a sua apostasia. Em Jeremias 2, Deus usa a linguagem de um marido traído para expressar a Sua dor e perplexidade diante da infidelidade do Seu povo. O versículo 13 é um dos diagnósticos mais precisos da condição humana em toda a Bíblia. Deus resume o pecado de Israel não como uma lista de regras quebradas, mas como dois males fundamentais: o abandono do Criador (a fonte) e a busca inútil por satisfação na criação (as cisternas rotas).',
    points: [
      {
        verseRef: 'v. 11',
        title: 'A Troca Irracional',
        description: 'Deus aponta para as nações pagãs e nota que elas nunca trocam os seus deuses (mesmo sendo falsos). No entanto, o povo de Deus trocou a sua "Glória" (o Deus verdadeiro) por ídolos que não têm proveito nenhum. O pecado é, antes de tudo, uma irracionalidade espiritual.'
      },
      {
        verseRef: 'v. 12-13a',
        title: 'O Primeiro Mal: O Abandono da Fonte',
        description: 'Deus chama os céus para se espantarem e horrorizarem com isto: "O meu povo fez duas maldades: a mim me deixaram, o manancial de águas vivas". Deus não é uma poça estagnada, mas uma fonte inesgotável de vida, alegria e satisfação. O primeiro pecado é rejeitar essa fonte.'
      },
      {
        verseRef: 'v. 13b',
        title: 'O Segundo Mal: As Cisternas Rotas',
        description: 'O segundo pecado é a consequência do primeiro: "E cavaram cisternas, cisternas rotas, que não retêm as águas". Uma cisterna é um buraco feito pelo homem para armazenar água da chuva. Trocar uma fonte viva por uma cisterna rachada é a essência da idolatria: buscar na carreira, no dinheiro ou nos relacionamentos a satisfação que só Deus pode dar.'
      }
    ],
    conclusion: 'A mensagem de Jeremias 2:13 é profundamente atual. Todos nós fomos criados com uma sede infinita que só pode ser saciada pelo Infinito. Quando abandonamos a Deus (a Fonte), somos forçados a cavar "cisternas" na tentativa de saciar essa sede. O problema não é apenas que a água das cisternas é estagnada, mas que as cisternas são "rotas" (rachadas). Nenhuma conquista humana consegue reter a alegria por muito tempo; ela sempre vaza, deixando-nos vazios e exaustos de tanto cavar. A salvação consiste em parar de cavar e voltar para a Fonte de Águas Vivas, que Jesus Cristo ofereceu à mulher samaritana (João 4).'
  },
  {
    id: 'jer_17_5_10',
    bookId: 'JER',
    chapter: 17,
    startVerse: 5,
    endVerse: 10,
    title: 'A Árvore e o Coração',
    theme: 'Confiança, Autossuficiência e o Diagnóstico da Alma',
    introduction: 'Em Jeremias 17, o profeta apresenta um contraste clássico na literatura de sabedoria bíblica (semelhante ao Salmo 1): o homem que confia no homem versus o homem que confia em Deus. O texto usa imagens botânicas para ilustrar a saúde espiritual. Aquele que confia na carne é como um arbusto no deserto, enquanto o que confia no Senhor é como uma árvore plantada junto às águas. No entanto, o texto vai mais fundo, revelando por que é tão difícil confiar em Deus: o nosso próprio coração é enganoso e corrupto, necessitando da sonda divina.',
    points: [
      {
        verseRef: 'v. 5-6',
        title: 'A Maldição da Autossuficiência',
        description: '"Maldito o homem que confia no homem, e faz da carne o seu braço". Quando afastamos o nosso coração do Senhor para confiar em recursos humanos (política, dinheiro, força), tornamo-nos como a "tamargueira no deserto": secos, isolados e incapazes de ver o bem quando ele chega.'
      },
      {
        verseRef: 'v. 7-8',
        title: 'A Bênção da Confiança',
        description: '"Bendito o homem que confia no Senhor... Porque ele será como a árvore plantada junto às águas". Esta árvore estende as suas raízes para o ribeiro. O resultado? Ela não teme o calor, as suas folhas ficam verdes e, mesmo no ano de sequidão, não deixa de dar fruto. A resiliência vem da fonte oculta (as raízes).'
      },
      {
        verseRef: 'v. 9-10',
        title: 'O Diagnóstico do Coração',
        description: '"Enganoso é o coração, mais do que todas as coisas, e perverso; quem o conhecerá?". O nosso maior inimigo não está fora, mas dentro de nós. O nosso coração mente para nós, justificando o pecado. Mas Deus sonda o coração e prova os pensamentos, para dar a cada um segundo os seus caminhos.'
      }
    ],
    conclusion: 'Jeremias 17 destrói o conselho popular moderno que diz: "Siga o seu coração". A Bíblia diz que o nosso coração é um guia terrível e enganoso, inclinado a confiar na "carne" em vez de confiar em Deus. A única maneira de não sermos enganados por nós mesmos é permitir que Deus (o grande Cardiologista) sonde o nosso interior através da Sua Palavra. Quando transferimos a nossa confiança de nós mesmos para o Senhor, as nossas raízes espirituais aprofundam-se. Então, mesmo que venha o "ano de sequidão" (crises econômicas, doenças, perdas), permaneceremos verdes e frutíferos, porque a nossa fonte de vida não depende do clima externo, mas do Ribeiro de Águas Vivas.'
  },
  {
    id: 'jer_20_7_13',
    bookId: 'JER',
    chapter: 20,
    startVerse: 7,
    endVerse: 13,
    title: 'O Fogo nos Ossos',
    theme: 'O Peso do Chamado, a Perseguição e a Palavra Irresistível',
    introduction: 'Jeremias é conhecido como o "profeta chorão" não porque fosse fraco, mas porque o seu chamado era esmagador. Ele foi chamado para pregar destruição e juízo a um povo que não queria ouvir. Em Jeremias 20, após ser espancado e colocado no tronco pelo sacerdote Pasur, Jeremias atinge o seu limite emocional. Ele faz um desabafo brutal a Deus, acusando o Senhor de o ter enganado e forçado a um ministério de sofrimento. No entanto, no meio do seu desespero e do seu desejo de desistir, ele descobre que a Palavra de Deus dentro dele é mais forte do que a sua vontade de calar.',
    points: [
      {
        verseRef: 'v. 7-8',
        title: 'A Queixa do Profeta',
        description: 'Jeremias clama: "Iludiste-me, ó Senhor... mais forte foste do que eu, e prevaleceste". Ele sente-se ridicularizado o dia todo. Toda vez que ele abre a boca, é para gritar "Violência e destruição!". A Palavra de Deus, em vez de lhe trazer honra, tornou-se a causa do seu opróbrio e zombaria diária.'
      },
      {
        verseRef: 'v. 9',
        title: 'O Fogo Incontível',
        description: 'Jeremias toma uma decisão: "Não me lembrarei dele, e não falarei mais no seu nome". Ele tenta renunciar ao ministério. Mas a Palavra de Deus não é algo que ele possa controlar: "Mas isso foi no meu coração como fogo ardente, encerrado nos meus ossos; e estou fatigado de sofrer, e não posso mais".'
      },
      {
        verseRef: 'v. 10-13',
        title: 'A Virada da Confiança',
        description: 'Ele ouve as murmurações e as conspirações dos seus "amigos" que esperam a sua queda. Mas, de repente, a sua fé ressurge: "Mas o Senhor está comigo como um valente terrível". Ele entrega a sua causa a Deus e termina a oração cantando louvores ao Senhor que livra a alma do necessitado.'
      }
    ],
    conclusion: 'A crise de Jeremias é um conforto para qualquer pessoa que carrega o peso da liderança espiritual ou que sofre por causa da sua fé. Servir a Deus nem sempre traz aplausos; muitas vezes traz zombaria, isolamento e dor. É perfeitamente humano querer desistir. Mas o verdadeiro chamado de Deus não é uma profissão que podemos abandonar; é um "fogo nos ossos". Quando a verdade de Deus se apodera de nós, o desconforto de calar torna-se maior do que a dor de falar. Mesmo nos nossos momentos mais sombrios, o Senhor está ao nosso lado como um "valente terrível", garantindo que a Sua Palavra prevalecerá.'
  },
  {
    id: 'jer_31_31_34',
    bookId: 'JER',
    chapter: 31,
    startVerse: 31,
    endVerse: 34,
    title: 'A Nova Aliança',
    theme: 'A Lei no Coração, o Conhecimento de Deus e o Perdão Definitivo',
    introduction: 'No meio do livro de Jeremias, que é predominantemente focado no juízo e na destruição de Jerusalém, encontra-se o "Livro da Consolação" (capítulos 30-33). O ápice desta seção é Jeremias 31:31-34, a profecia mais importante do Antigo Testamento sobre a "Nova Aliança". A Antiga Aliança (feita no Sinai) foi quebrada pelo povo porque era externa (escrita em tábuas de pedra). Deus promete uma aliança radicalmente nova, que não dependerá da capacidade humana de obedecer, mas da obra transformadora do Espírito Santo no interior do homem. Esta é a aliança que Jesus inaugurou na Última Ceia.',
    points: [
      {
        verseRef: 'v. 31-32',
        title: 'A Falência da Antiga Aliança',
        description: 'Deus anuncia dias em que fará uma Nova Aliança com Israel e Judá. Não será como a aliança do Êxodo, que eles invalidaram, "apesar de eu os haver desposado" (como um marido fiel traído pela esposa). A lei externa não tinha o poder de mudar o coração rebelde.'
      },
      {
        verseRef: 'v. 33',
        title: 'A Lei Internalizada',
        description: 'A grande diferença da Nova Aliança: "Porei a minha lei no seu interior, e a escreverei no seu coração". Em vez de regras impostas de fora para dentro, Deus mudará a natureza humana de dentro para fora, dando ao Seu povo o desejo e a capacidade de obedecer.'
      },
      {
        verseRef: 'v. 34',
        title: 'O Conhecimento Pessoal e o Perdão',
        description: 'Nesta aliança, todos conhecerão o Senhor pessoalmente, desde o menor até o maior. E o fundamento de tudo isso é a graça absoluta: "Porque lhes perdoarei a sua maldade, e nunca mais me lembrarei dos seus pecados". O perdão definitivo é a base da Nova Aliança.'
      }
    ],
    conclusion: 'A profecia da Nova Aliança é o coração do Evangelho. A religião baseada no esforço humano (a Antiga Aliança) sempre falha, porque as "tábuas de pedra" não podem curar um coração de pedra. Mas na cruz, Jesus derramou o "sangue da Nova Aliança" (Lucas 22:20). Através do Espírito Santo, Deus agora escreve a Sua vontade nos nossos corações, transformando a obediência de um dever pesado num desejo natural. Além disso, a promessa de que Deus "não se lembrará mais" dos nossos pecados nos liberta da culpa paralisante. Na Nova Aliança, não somos aceitos pelo nosso desempenho, mas pelo perdão perfeito garantido por Cristo.'
  },
  {
    id: 'jer_33_1_9',
    bookId: 'JER',
    chapter: 33,
    startVerse: 1,
    endVerse: 9,
    title: 'Clama a Mim',
    theme: 'A Oração no Cárcere, a Revelação e a Restauração',
    introduction: 'O contexto de Jeremias 33 é sombrio. Jerusalém está cercada pelo exército babilônico, as casas estão sendo derrubadas para fortalecer os muros, e a cidade está cheia de cadáveres. Para piorar, o próprio Jeremias está preso no pátio da guarda pelo rei Zedequias. É neste cenário de confinamento, morte e derrota iminente que a Palavra do Senhor vem a Jeremias pela segunda vez. Deus não lhe dá uma estratégia militar, mas um convite à oração e uma promessa de restauração tão grandiosa que traria espanto a todas as nações da terra.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Convite do Criador',
        description: 'Deus apresenta-se como Aquele que fez a terra e a formou para a estabelecer. Com essa autoridade soberana, Ele faz o famoso convite: "Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes (ocultas) que não sabes". A oração destranca a revelação divina.'
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Realidade do Juízo',
        description: 'Deus não ignora a realidade: a cidade será destruída pelos caldeus, e as casas se encherão de cadáveres por causa da maldade do povo. Deus escondeu o Seu rosto da cidade. O juízo é inevitável e doloroso.'
      },
      {
        verseRef: 'v. 6-9',
        title: 'A Promessa de Cura e Purificação',
        description: 'Apesar do juízo, Deus promete: "Eis que eu trarei a ela saúde e cura... e lhes revelarei abundância de paz e verdade". Ele purificará o povo de toda a iniquidade. O resultado será tão glorioso que Jerusalém será um "nome de alegria, de louvor e de glória" diante de todas as nações da terra, que temerão ao ver o bem que Deus lhe faz.'
      }
    ],
    conclusion: 'Jeremias 33:3 é frequentemente citado fora de contexto, mas o seu cenário original torna-o ainda mais poderoso. Jeremias estava preso, e a sua cidade estava prestes a ser destruída. Quando estamos "presos" em circunstâncias impossíveis e tudo ao nosso redor parece estar desmoronando, a nossa visão fica limitada ao caos imediato. O convite "Clama a mim" é um chamado para olharmos além dos muros da nossa prisão. Deus tem "coisas grandes e ocultas" — planos de cura, perdão e restauração — que a nossa mente humana não consegue conceber. A oração não é apenas um pedido de socorro; é a chave que nos permite ver o futuro glorioso que Deus está preparando além das ruínas do presente.'
  },
  {
    id: 'jer_38_1_13',
    bookId: 'JER',
    chapter: 38,
    startVerse: 1,
    endVerse: 13,
    title: 'Jeremias no Calabouço',
    theme: 'A Perseguição, o Fundo do Poço e o Resgate Improvável',
    introduction: 'A fidelidade à Palavra de Deus quase custou a vida de Jeremias. Em Jeremias 38, a cidade de Jerusalém está sob cerco. Jeremias continua a pregar a mensagem impopular de que a única forma de sobreviver é render-se aos babilônios. Os príncipes de Judá, enfurecidos, acusam-no de traição e de enfraquecer as mãos dos soldados. Com a permissão do rei fraco Zedequias, eles lançam Jeremias num calabouço (uma cisterna) cheio de lama, para que morra de fome. A salvação do profeta não vem de um israelita, mas de um estrangeiro, um eunuco etíope, mostrando que Deus usa os instrumentos mais improváveis para resgatar os Seus servos.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Mensagem Impopular e a Cisterna de Lama',
        description: 'Os príncipes ouvem a mensagem de rendição de Jeremias e pedem a sua morte. O rei Zedequias lava as mãos. Eles lançam Jeremias na cisterna de Malquias. Não havia água, apenas lama, e Jeremias afunda nela. É a imagem do isolamento total e da morte lenta por causa da verdade.'
      },
      {
        verseRef: 'v. 7-9',
        title: 'A Coragem de Ebede-Meleque',
        description: 'Ebede-Meleque, um eunuco etíope que servia no palácio, ouve o que fizeram. Enquanto os líderes de Judá são corruptos, este estrangeiro teme a Deus e tem compaixão. Ele vai publicamente ao rei e denuncia o ato como uma maldade, alertando que o profeta morrerá de fome.'
      },
      {
        verseRef: 'v. 10-13',
        title: 'O Resgate Cuidadoso',
        description: 'O rei autoriza o resgate. Ebede-Meleque leva 30 homens, pega trapos velhos e roupas gastas e diz a Jeremias para colocá-los debaixo das axilas para que as cordas não o machuquem. Eles puxam Jeremias da lama, salvando a sua vida.'
      }
    ],
    conclusion: 'A história de Jeremias na cisterna é uma metáfora poderosa da vida cristã num mundo hostil. Falar a verdade de Deus frequentemente nos lança no "calabouço" da rejeição, da calúnia e do isolamento. Jeremias afundou na lama não porque pecou, mas porque foi fiel. No entanto, Deus nunca abandona os Seus servos. A figura de Ebede-Meleque é inspiradora: ele arriscou a sua própria posição para salvar o profeta, e fê-lo com uma ternura incrível (usando trapos para proteger as axilas de Jeremias). Deus vê quando estamos no fundo do poço e sempre enviará as Suas "cordas de resgate", muitas vezes através das pessoas mais improváveis, para nos tirar da lama.'
  },
  {
    id: 'lam_3_19_26',
    bookId: 'LAM',
    chapter: 3,
    startVerse: 19,
    endVerse: 26,
    title: 'A Esperança no Meio da Dor',
    theme: 'Lamento, as Misericórdias Inesgotáveis e a Fidelidade de Deus',
    introduction: 'O livro de Lamentações é um cântico fúnebre sobre a destruição de Jerusalém. O capítulo 3 é o coração do livro, onde o autor (tradicionalmente Jeremias) descreve a sua aflição pessoal e a ira de Deus de forma visceral. Ele sente-se esmagado, mastigando pedras e esquecido da paz. A sua esperança parecia ter perecido. Mas, de repente, no versículo 21, ocorre uma das maiores viradas teológicas da Bíblia. No meio das cinzas da cidade destruída, o profeta força a sua mente a lembrar-se do caráter de Deus. O resultado é uma declaração majestosa sobre a fidelidade e a misericórdia divinas.',
    points: [
      {
        verseRef: 'v. 19-20',
        title: 'O Peso da Aflição',
        description: 'O profeta pede a Deus que se lembre da sua aflição e do seu pranto (o absinto e o fel). A sua própria alma lembra-se constantemente da dor e abate-se dentro dele. A depressão e o trauma ameaçam consumi-lo.'
      },
      {
        verseRef: 'v. 21',
        title: 'A Decisão de Mudar o Foco',
        description: '"Disto me recordarei na minha mente; por isso esperarei". A esperança não surge de uma mudança nas circunstâncias (Jerusalém continuava destruída), mas de uma disciplina mental: escolher lembrar-se da verdade sobre Deus em vez de focar apenas na dor.'
      },
      {
        verseRef: 'v. 22-26',
        title: 'As Misericórdias e a Fidelidade',
        description: '"As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas misericórdias não têm fim". Elas renovam-se a cada manhã; grande é a fidelidade de Deus. O profeta conclui que o Senhor é a sua porção, e que é bom esperar em silêncio pela salvação divina.'
      }
    ],
    conclusion: 'Lamentações 3 ensina-nos a anatomia da esperança cristã. A esperança não é um otimismo cego que nega a realidade da dor (o profeta sentia o gosto do fel). A esperança é uma escolha teológica. Quando a nossa alma está abatida, precisamos pregar para nós mesmos, trazendo à memória aquilo que pode nos dar esperança. O que nos sustenta não é a nossa força, mas o fato de que as misericórdias de Deus não se esgotam. O sol nasce todos os dias como um lembrete físico de que a graça de Deus foi renovada para nós naquela manhã. Mesmo quando perdemos tudo, se o Senhor for a nossa porção, teremos o suficiente para esperar em silêncio pela Sua salvação.'
  },
  {
    id: 'lam_3_27_33',
    bookId: 'LAM',
    chapter: 3,
    startVerse: 27,
    endVerse: 33,
    title: 'O Jugo e a Soberania de Deus',
    theme: 'Disciplina, Submissão, Humildade e o Coração de Deus',
    introduction: 'Continuando a sua reflexão no capítulo 3 de Lamentações, o profeta aborda o propósito do sofrimento e da disciplina divina. Após declarar que as misericórdias de Deus se renovam a cada manhã, ele oferece conselhos práticos sobre como suportar a aflição. Ele fala sobre a importância de carregar o "jugo" (a disciplina ou a responsabilidade) desde a juventude e de se submeter humildemente à providência de Deus. O texto culmina com uma revelação profunda sobre o coração de Deus: Ele não tem prazer em afligir os seres humanos.',
    points: [
      {
        verseRef: 'v. 27-29',
        title: 'O Jugo e a Humildade',
        description: '"Bom é para o homem suportar o jugo na sua juventude". O profeta aconselha o sofredor a assentar-se solitário e calar-se, e a "pôr a sua boca no pó" (sinal de submissão total e arrependimento), na esperança de que ainda haja salvação.'
      },
      {
        verseRef: 'v. 30',
        title: 'A Aceitação da Ofensa',
        description: '"Dê a sua face ao que o fere; farte-se de afronta". Em vez de se rebelar contra a disciplina de Deus (frequentemente administrada através de inimigos humanos, como os babilônios), o crente é chamado a suportar a ofensa com paciência, antecipando o ensino de Jesus no Sermão do Monte.'
      },
      {
        verseRef: 'v. 31-33',
        title: 'O Coração de Deus no Sofrimento',
        description: '"O Senhor não rejeitará para sempre". Mesmo que Ele entristeça alguém, Ele terá compaixão segundo a grandeza das Suas misericórdias. O versículo 33 é a chave: "Porque não aflige nem entristece de bom grado aos filhos dos homens". A disciplina é necessária, mas não traz alegria a Deus.'
      }
    ],
    conclusion: 'Ninguém gosta de sofrer ou de ser disciplinado. No entanto, Lamentações nos ensina que o "jugo" da disciplina, especialmente quando aprendido cedo na vida, produz um caráter resiliente e humilde. Quando resistimos à disciplina de Deus, apenas aumentamos a nossa dor. A postura correta é "pôr a boca no pó", reconhecendo a soberania de Deus e calando as nossas murmurações. A maior consolação nestes versículos é saber que Deus não é um sádico cósmico. Quando Ele permite a dor nas nossas vidas, não é "de bom grado" (do fundo do Seu coração). Ele fá-lo como um cirurgião que causa dor temporária para produzir cura e salvação eterna. A Sua compaixão sempre terá a última palavra.'
  },
  {
    id: 'lam_4_1_6',
    bookId: 'LAM',
    chapter: 4,
    startVerse: 1,
    endVerse: 6,
    title: 'O Ouro Que Perdeu o Brilho',
    theme: 'A Consequência do Pecado, a Degradação e a Perda da Glória',
    introduction: 'O capítulo 4 de Lamentações descreve os horrores físicos e sociais do cerco de Jerusalém. O profeta usa a metáfora do ouro que escureceu para descrever a queda da nação. Jerusalém, que antes era a cidade gloriosa de Deus, cheia de pessoas preciosas e nobres, foi reduzida à miséria absoluta devido ao pecado. O contraste entre o passado glorioso e o presente devastador serve como um aviso solene sobre o poder destrutivo e degradante da rebelião contra Deus.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'O Ouro Escurecido',
        description: '"Como se escureceu o ouro! Como se mudou o ouro fino e bom!". As pedras do santuário estão espalhadas. Os "nobres filhos de Sião", que antes eram comparáveis a ouro puro, agora são tratados como meros vasos de barro, obra das mãos de oleiro. O pecado roubou o seu valor e dignidade.'
      },
      {
        verseRef: 'v. 3-4',
        title: 'A Fome e a Perda da Afeição Natural',
        description: 'O cerco trouxe uma fome tão terrível que até os instintos maternos foram destruídos. O profeta diz que até os chacais dão de mamar aos seus filhotes, mas a "filha do meu povo tornou-se cruel como os avestruzes no deserto". A língua da criança de peito pega-se ao céu da boca pela sede.'
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Queda dos Privilegiados',
        description: 'Aqueles que comiam iguarias agora desfalecem nas ruas; os que se criaram em escarlate agora abraçam o monturo (lixo). O castigo da filha do povo de Deus é descrito como maior do que o pecado de Sodoma, que foi destruída num momento, sem o sofrimento prolongado de um cerco.'
      }
    ],
    conclusion: 'Lamentações 4 é uma leitura difícil porque expõe a feiura nua e crua do juízo. O pecado promete liberdade e brilho, mas no final, ele "escurece o ouro" da nossa vida. Quando abandonamos a Deus, perdemos a nossa dignidade (tratados como vasos de barro quebrados) e até a nossa humanidade (a crueldade substitui o amor). A glória passada de Jerusalém não a protegeu das consequências da sua apostasia. Este texto é um chamado ao temor do Senhor e à vigilância. Não importa quão "nobres" ou abençoados sejamos hoje; se permitirmos que o pecado reine, o nosso ouro perderá o brilho. A nossa única segurança é mantermo-nos ligados ao Ourives que nos purifica.'
  },
  {
    id: 'lam_5_15_22',
    bookId: 'LAM',
    chapter: 5,
    startVerse: 15,
    endVerse: 22,
    title: 'A Oração Final por Restauração',
    theme: 'A Coroa Caída, o Trono Eterno e o Clamor pela Graça',
    introduction: 'O livro de Lamentações termina com uma oração comunitária. O capítulo 5 descreve a humilhação total do povo sob o domínio estrangeiro. A alegria cessou, a dança transformou-se em luto, e a coroa caiu da cabeça de Judá. No entanto, no meio desta desolação, o profeta levanta os olhos das ruínas de Jerusalém para o trono inabalável de Deus nos céus. O livro não termina com uma promessa fácil de que tudo ficará bem imediatamente, mas com um clamor desesperado pela graça restauradora de Deus, reconhecendo que só o Senhor pode trazer o povo de volta.',
    points: [
      {
        verseRef: 'v. 15-16',
        title: 'O Fim da Alegria e a Confissão',
        description: '"Cessou o gozo do nosso coração; converteu-se em lamentação a nossa dança". A coroa caiu da sua cabeça. E eles reconhecem a causa de tudo isso: "Ai de nós agora, porque pecamos!". Não há desculpas, apenas a confissão da culpa.'
      },
      {
        verseRef: 'v. 17-18',
        title: 'O Coração Desmaiado e o Monte Desolado',
        description: 'Por causa do pecado e do juízo, o coração deles está desmaiado e os seus olhos escurecidos. O monte Sião, o lugar da habitação de Deus, está tão desolado que as raposas andam por ele. A glória terrena desapareceu.'
      },
      {
        verseRef: 'v. 19-22',
        title: 'O Trono Eterno e o Clamor por Restauração',
        description: 'A âncora da oração: "Tu, Senhor, permaneces eternamente, e o teu trono, de geração em geração". O profeta clama: "Converte-nos a ti, Senhor, e seremos convertidos; renova os nossos dias como dantes". Ele termina com a tensão de quem aguarda a resposta de um Deus que parece estar irado.'
      }
    ],
    conclusion: 'A conclusão de Lamentações é profundamente realista. A vida cristã nem sempre termina com um final feliz imediato ou com todos os problemas resolvidos. Às vezes, a coroa cai, a alegria cessa e as consequências do pecado (nosso ou dos outros) deixam marcas profundas. Mas a oração final ensina-nos onde fixar os olhos: não nas raposas que andam sobre as nossas ruínas, mas no trono de Deus que permanece eternamente. A restauração não é algo que podemos produzir por nós mesmos; é uma obra da graça. Por isso oramos: "Converte-nos a ti, e seremos convertidos". Quando não temos força para voltar, pedimos a Deus que nos puxe de volta para Si.'
  }
];

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

let addedCount = 0;
for (const np of newPericopes) {
  if (!arr.find(p => p.id === np.id)) {
    arr.push(np);
    addedCount++;
  }
}

const newArrayContent = JSON.stringify(arr, null, 2);
const newContent = content.substring(0, startIndex) + newArrayContent + content.substring(endIndex + 1);
fs.writeFileSync('data/pericopes_temp.ts', newContent, 'utf8');
console.log(`Added ${addedCount} new pericopes (Batch 27 - Jeremiah/Lamentations).`);
