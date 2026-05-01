const fs = require('fs');

const newPericopes = [
  {
    id: 'luk_5_1_11',
    bookId: 'LUK',
    chapter: 5,
    startVerse: 1,
    endVerse: 11,
    title: 'A Pesca Maravilhosa e o Chamado',
    theme: 'A Obediência à Palavra e a Visão da Santidade',
    introduction: `Jesus está ensinando à beira do Mar da Galileia e pede o barco de Pedro emprestado. Após o sermão, o Carpinteiro dá uma ordem de pesca a um pescador experiente que havia trabalhado a noite toda sem sucesso. A obediência relutante de Pedro resulta em um milagre que quebra as suas redes e o seu orgulho, levando-o a um encontro transformador com a santidade de Cristo e a um novo propósito de vida.`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Frustração Humana e a Ordem Divina',
        description: `A Lógica da Fé. Após usar o barco de Simão Pedro como púlpito (v. 3), Jesus lhe dá uma ordem ilógica (v. 4): "Faze-te ao mar alto, e lançai as vossas redes para pescar". Pedro era o profissional; Jesus era o carpinteiro. Eles haviam pescado durante a noite (o melhor horário) e não pegaram nada. Lançar as redes de dia era inútil. Pedro expressa a sua frustração (v. 5a): "Mestre, havendo trabalhado toda a noite, nada apanhamos". Mas a grandeza de Pedro se revela na frase seguinte (v. 5b): "mas, sobre a tua palavra, lançarei a rede". A fé verdadeira obedece à Palavra de Cristo mesmo quando ela contraria a nossa experiência, a nossa lógica e o nosso cansaço.`
      },
      {
        verseRef: 'v. 6-7',
        title: 'A Abundância do Milagre e a Provisão de Deus',
        description: `A Recompensa da Obediência. Quando eles obedecem, o resultado é esmagador (v. 6): "colheram uma grande quantidade de peixes, e rompia-se-lhes a rede". O milagre é tão grande que eles precisam chamar os sócios (Tiago e João) no outro barco, e ambos os barcos quase afundam com o peso dos peixes (v. 7). Jesus não apenas provê para as necessidades deles; Ele provê com uma abundância que quebra os seus paradigmas. O milagre demonstra que o Senhor da criação tem controle absoluto sobre a natureza e pode transformar o nosso maior fracasso na nossa maior colheita.`
      },
      {
        verseRef: 'v. 8-11',
        title: 'A Convicção de Pecado e o Chamado',
        description: `De Pescador de Peixes a Pescador de Homens. A reação de Pedro ao milagre é surpreendente. Ele não comemora o lucro financeiro; ele cai aos pés de Jesus (v. 8): "Senhor, ausenta-te de mim, que sou um homem pecador". A abundância do milagre abriu os olhos de Pedro para a santidade divina de Jesus, e na presença do Santo, Pedro viu a sua própria impureza. Jesus não o rejeita por ser pecador, mas o comissiona (v. 10): "Não temas; de agora em diante serás pescador de homens". O resultado final é o abandono total (v. 11): "E, levando os barcos para terra, deixaram tudo, e o seguiram". O maior milagre não foi a pesca, mas a transformação do coração de Pedro.`
      }
    ],
    conclusion: `Lucas 5:1-11 nos ensina que o verdadeiro discipulado começa quando reconhecemos a nossa total falência diante da santidade de Cristo. Quando obedecemos à Sua Palavra, mesmo quando não faz sentido para nós, experimentamos o Seu poder. Mas o objetivo do poder de Deus não é nos enriquecer materialmente, é nos chamar para uma missão maior. Jesus nos convida a deixar as "redes" da nossa vida antiga para nos tornarmos pescadores de homens, investindo a nossa vida naquilo que tem valor eterno.`
  },
  {
    id: 'luk_7_36_50',
    bookId: 'LUK',
    chapter: 7,
    startVerse: 36,
    endVerse: 50,
    title: 'A Mulher Pecadora e o Fariseu',
    theme: 'O Perdão, a Gratidão e a Cegueira do Orgulho',
    introduction: `Jesus é convidado para jantar na casa de Simão, um fariseu. O banquete é interrompido por uma mulher de má reputação que chora aos pés de Jesus, lavando-os com lágrimas e ungindo-os com perfume. Simão julga Jesus secretamente por permitir isso. Jesus usa uma parábola sobre dois devedores para expor a falência espiritual do fariseu e exaltar a fé salvadora da mulher, mostrando que o amor extravagante é a prova de um grande perdão.`,
    points: [
      {
        verseRef: 'v. 36-39',
        title: 'A Adoração Quebrantada e o Julgamento Frio',
        description: `O Contraste na Sala. A mulher, conhecida na cidade como "pecadora" (provavelmente uma prostituta), entra na casa do fariseu (v. 37). Ela ignora o escândalo social e vai direto aos pés de Jesus. O seu arrependimento e amor são tão intensos que ela chora, lava os pés de Jesus com as lágrimas, enxuga-os com os cabelos, beija-os e os unge com unguento (v. 38). É um ato de adoração extravagante e humilhante. Simão, o fariseu, assiste a cena com nojo e julga Jesus no seu coração (v. 39): "Se este fora profeta, bem saberia quem e qual é a mulher que lhe tocou, pois é uma pecadora". A religião de Simão era baseada na separação dos impuros; a religião de Jesus é baseada na salvação dos impuros.`
      },
      {
        verseRef: 'v. 40-43',
        title: 'A Parábola dos Dois Devedores e a Lógica da Graça',
        description: `A Medida do Amor. Jesus, lendo os pensamentos de Simão, conta uma parábola (v. 41-42): um credor tinha dois devedores, um devia quinhentos dinheiros e o outro cinquenta. Como nenhum podia pagar, ele perdoou a ambos. Jesus pergunta: "Qual deles o amará mais?". Simão responde corretamente (v. 43): "Tenho para mim que é aquele a quem mais perdoou". A lição é profunda: o amor a Deus não é a causa do perdão, mas o resultado do perdão. Quanto mais consciência temos da nossa dívida de pecado, mais amamos o Salvador que a cancelou.`
      },
      {
        verseRef: 'v. 44-50',
        title: 'O Contraste das Atitudes e a Declaração de Perdão',
        description: `A Justificação pela Fé. Jesus vira-se para a mulher, mas fala com Simão, contrastando a falta de hospitalidade do fariseu com a devoção da mulher (v. 44-46). Simão não deu água, beijo ou óleo; a mulher deu lágrimas, beijos incessantes e unguento caro. Jesus dá o veredito (v. 47): "os seus muitos pecados lhe são perdoados, porque muito amou; mas aquele a quem pouco é perdoado pouco ama". O amor dela era a evidência visível de que ela já havia recebido o perdão. Jesus então confirma a salvação dela publicamente (v. 48, 50): "Os teus pecados te são perdoados... A tua fé te salvou; vai-te em paz". Simão confiava na sua moralidade e permaneceu perdido; a mulher confiou na graça e foi salva.`
      }
    ],
    conclusion: `Lucas 7:36-50 destrói a ilusão de que existem "pequenos pecadores". Diante da santidade de Deus, tanto o fariseu moralista quanto a mulher imoral estão falidos e incapazes de pagar a sua dívida. O perigo do moralismo (como o de Simão) é que ele nos cega para a nossa necessidade de graça, resultando em um coração frio e sem amor por Cristo. A verdadeira adoração nasce de um coração quebrantado que entende a magnitude do que foi perdoado na cruz.`
  },
  {
    id: 'luk_15_1_10',
    bookId: 'LUK',
    chapter: 15,
    startVerse: 1,
    endVerse: 10,
    title: 'A Ovelha e a Dracma Perdidas',
    theme: 'A Busca Incansável de Deus e a Alegria do Céu',
    introduction: `Antes de contar a famosa parábola do Filho Pródigo, Jesus conta duas parábolas mais curtas para responder à crítica dos fariseus de que Ele "recebe pecadores". Através da imagem de um pastor buscando uma ovelha e de uma mulher varrendo a casa por uma moeda, Jesus ilustra o valor inestimável que Deus atribui a cada alma perdida e a iniciativa divina na salvação.`,
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Murmuração Religiosa e a Graça Escandalosa',
        description: `O Escândalo do Evangelho. O capítulo começa estabelecendo o cenário (v. 1-2): os publicanos e pecadores se aproximam para ouvir Jesus, e os fariseus e escribas murmuram: "Este recebe pecadores, e come com eles". Para os líderes religiosos, a santidade significava isolamento dos impuros. Para Jesus, a santidade significava resgatar os impuros. A acusação dos fariseus era, na verdade, a mais bela descrição do evangelho: Jesus realmente recebe pecadores e tem comunhão com eles. As parábolas a seguir são a defesa de Jesus para essa atitude escandalosa.`
      },
      {
        verseRef: 'v. 3-7',
        title: 'O Pastor, a Ovelha Perdida e o Resgate',
        description: `A Iniciativa Divina. Jesus descreve um pastor que tem cem ovelhas e perde uma (v. 4). A lógica humana diria para focar nas 99 que estão seguras. Mas a lógica do amor divino faz o pastor deixar as 99 no deserto e ir em busca da perdida "até achá-la". A ovelha não encontra o caminho de volta; ela é totalmente dependente do resgate do pastor. Quando ele a encontra, ele não a castiga, mas a coloca sobre os ombros com alegria (v. 5). Jesus aplica a parábola (v. 7): "haverá mais alegria no céu por um pecador que se arrepende, mais do que por noventa e nove justos que não necessitam de arrependimento". O céu não celebra a autojustificação, mas o arrependimento.`
      },
      {
        verseRef: 'v. 8-10',
        title: 'A Mulher, a Moeda Perdida e a Celebração Celestial',
        description: `O Valor da Alma. A segunda parábola reforça a primeira. Uma mulher perde uma de suas dez dracmas (moedas de prata, possivelmente parte do seu dote de casamento, tendo grande valor sentimental e financeiro). Ela acende a candeia, varre a casa e busca com diligência até achá-la (v. 8). Assim como a moeda não tem vida para clamar por ajuda, o pecador está morto em seus delitos e pecados, precisando que o Espírito Santo (a luz) ilumine as trevas e o busque ativamente. Quando a encontra, ela chama as amigas para celebrar (v. 9). Jesus repete a aplicação (v. 10): "há alegria diante dos anjos de Deus por um pecador que se arrepende". O arrependimento de um pecador é o gatilho para a festa no céu.`
      }
    ],
    conclusion: `Lucas 15:1-10 nos revela o coração de Deus. Ele não é um juiz distante esperando que nos consertemos para podermos nos aproximar dEle. Ele é o Pastor que entra no deserto escuro e a Mulher que varre a casa suja para nos encontrar. A nossa salvação não é o resultado da nossa busca por Deus, mas da busca incansável de Deus por nós. E quando somos encontrados, não há condenação, apenas a alegria explosiva do céu celebrando o nosso retorno para casa.`
  },
  {
    id: 'luk_19_1_10',
    bookId: 'LUK',
    chapter: 19,
    startVerse: 1,
    endVerse: 10,
    title: 'Zaqueu, o Publicano',
    theme: 'A Busca do Salvador e a Transformação do Pecador',
    introduction: `Zaqueu era o chefe dos cobradores de impostos em Jericó, um homem rico, corrupto e odiado pelo seu povo por colaborar com o Império Romano. Ele queria apenas ver quem era Jesus, mas Jesus tinha a intenção de ficar na sua casa. O encontro com a graça de Cristo não apenas salva a alma de Zaqueu, mas transforma radicalmente a sua carteira, provando que a verdadeira conversão sempre resulta em arrependimento prático e restituição.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Curiosidade de Zaqueu e o Esforço para Ver Jesus',
        description: `O Obstáculo e a Árvore. Zaqueu era rico, mas estava vazio. Ele "procurava ver quem era Jesus" (v. 3). No entanto, havia dois obstáculos: a multidão (que o odiava e não o deixaria passar) e a sua pequena estatura. Desesperado, ele abandona a sua dignidade (homens ricos do Oriente Médio não corriam nem subiam em árvores) e sobe em um sicômoro (v. 4). A curiosidade de Zaqueu era, na verdade, a graça preveniente de Deus operando no seu coração, preparando-o para o encontro que mudaria a sua vida.`
      },
      {
        verseRef: 'v. 5-7',
        title: 'O Chamado Pessoal e a Murmuração da Multidão',
        description: `A Graça Inesperada. Quando Jesus chega ao local, Ele olha para cima e chama Zaqueu pelo nome (v. 5): "Zaqueu, desce depressa, porque hoje me convém pousar em tua casa". Jesus não o convida para uma sinagoga, mas se convida para a casa do pecador. A palavra "convém" (dei, no grego) indica uma necessidade divina; estava nos planos soberanos de Deus salvar Zaqueu naquele dia. Zaqueu desce com alegria (v. 6), mas a multidão religiosa murmura (v. 7): "Entrou a pousar em casa de um homem pecador". A graça de Jesus sempre ofende o moralismo humano, porque ela alcança aqueles que a sociedade considera indignos.`
      },
      {
        verseRef: 'v. 8-10',
        title: 'O Arrependimento Genuíno e a Missão do Filho do Homem',
        description: `A Evidência da Salvação. O encontro com Jesus transforma Zaqueu instantaneamente. Ele não apenas chora ou faz uma oração; ele mexe no seu deus (o dinheiro). Ele se levanta e declara (v. 8): "Senhor, eis que eu dou aos pobres metade dos meus bens; e, se nalguma coisa tenho defraudado alguém, o restituo quadruplicado". A lei exigia a restituição com 20% de multa (Levítico 6:5); Zaqueu oferece 400%, a pena para o roubo de ovelhas (Êxodo 22:1). O arrependimento verdadeiro produz frutos visíveis. Jesus declara o veredito (v. 9): "Hoje veio a salvação a esta casa". E conclui com a declaração de missão de todo o Seu ministério (v. 10): "Porque o Filho do homem veio buscar e salvar o que se havia perdido".`
      }
    ],
    conclusion: `Lucas 19:1-10 é a prova de que ninguém está tão perdido, tão corrupto ou tão odiado que não possa ser alcançado pela graça de Jesus. Zaqueu procurava ver Jesus, mas foi Jesus quem veio buscar e salvar Zaqueu. A verdadeira salvação nunca nos deixa como nos encontrou. Quando Cristo entra na "casa" do nosso coração, Ele transforma as nossas prioridades, quebra a nossa ganância e nos leva a reparar os danos que causamos aos outros. A fé que salva é a fé que transforma.`
  },
  {
    id: 'jhn_2_1_11',
    bookId: 'JHN',
    chapter: 2,
    startVerse: 1,
    endVerse: 11,
    title: 'As Bodas de Caná',
    theme: 'O Primeiro Sinal e a Transformação da Água em Vinho',
    introduction: `O primeiro milagre de Jesus no Evangelho de João não ocorre em um templo, mas em uma festa de casamento em uma pequena aldeia. Quando o vinho acaba (um desastre social e uma vergonha para a família), Maria apela a Jesus. Ao transformar água de purificação ritual no melhor vinho da festa, Jesus não apenas salva a honra da família, mas sinaliza a chegada da Nova Aliança: a religião vazia da lei sendo substituída pela alegria abundante da graça.`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Crise na Festa e a Intercessão de Maria',
        description: `O Fim da Alegria. Durante o casamento, "faltou vinho" (v. 3). Na cultura judaica, o vinho era o símbolo da alegria e da bênção de Deus (Salmo 104:15). A falta de vinho era uma gafe terrível que arruinaria a reputação dos noivos. Maria avisa Jesus. A resposta de Jesus parece dura (v. 4): "Mulher, que tenho eu contigo? Ainda não é chegada a minha hora". Ele não está sendo desrespeitoso (o termo "mulher" era respeitoso), mas está estabelecendo um limite: o Seu ministério não será guiado por laços familiares, mas pelo cronograma do Pai (a "hora" da cruz e da glorificação). Maria, demonstrando grande fé, diz aos serventes (v. 5): "Fazei tudo quanto ele vos disser".`
      },
      {
        verseRef: 'v. 6-8',
        title: 'As Talhas de Pedra e a Ordem de Jesus',
        description: `A Água da Purificação. Havia ali seis talhas de pedra, usadas para a "purificação dos judeus" (v. 6). Elas representam a antiga aliança, a lei e os rituais religiosos que podiam limpar o exterior, mas não podiam transformar o coração ou trazer verdadeira alegria. Jesus ordena que as encham de água "até em cima" (v. 7), garantindo que não haveria espaço para adicionar vinho e forjar o milagre. Em seguida, Ele manda tirar e levar ao mestre-sala (v. 8). O milagre acontece silenciosamente, no ato da obediência dos serventes.`
      },
      {
        verseRef: 'v. 9-11',
        title: 'O Vinho Superior e a Manifestação da Glória',
        description: `O Melhor Fica para o Final. O mestre-sala prova a água transformada em vinho e chama o noivo, elogiando a qualidade (v. 10): "tu guardaste até agora o bom vinho". O mundo oferece o seu melhor no início e depois traz a decepção; Jesus traz o melhor no final. João chama este milagre de "o princípio dos seus sinais" (v. 11). No Evangelho de João, os milagres são "sinais" que apontam para uma verdade espiritual maior. A água transformada em vinho simboliza a glória da Nova Aliança: a graça de Cristo transforma a religião fria e ritualística na alegria inesgotável do Reino de Deus. O resultado é que Ele "manifestou a sua glória, e os seus discípulos creram nele" (v. 11).`
      }
    ],
    conclusion: `João 2:1-11 nos mostra que Jesus se importa com os detalhes da nossa vida e abençoa a alegria humana. Mas, mais profundamente, o sinal de Caná nos ensina que a religião baseada em regras e rituais (as talhas de pedra) eventualmente nos deixa vazios e sem "vinho". Apenas Jesus pode operar o milagre da transformação interna, substituindo a nossa água estagnada pelo vinho novo da alegria, do perdão e da vida abundante que Ele conquistou para nós.`
  },
  {
    id: 'jhn_5_1_15',
    bookId: 'JHN',
    chapter: 5,
    startVerse: 1,
    endVerse: 15,
    title: 'A Cura no Tanque de Betesda',
    theme: 'A Impotência Humana e a Palavra Soberana de Cristo',
    introduction: `Em Jerusalém, à beira do tanque de Betesda, jazia uma multidão de doentes esperando por um milagre. Jesus se aproxima de um homem paralítico há 38 anos, um símbolo da total incapacidade humana de salvar a si mesmo. A cura instantânea deste homem, realizada no sábado, desencadeia a fúria dos líderes religiosos e inicia o longo conflito de Jesus com as autoridades judaicas sobre a Sua identidade divina e a Sua autoridade sobre a Lei.`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Multidão de Doentes e o Paralítico de 38 Anos',
        description: `O Retrato da Desesperança. Os cinco alpendres de Betesda estavam cheios de "enfermos, cegos, mancos e ressequidos" (v. 3). Eles esperavam o movimento das águas (uma crença popular de que um anjo agitava a água e o primeiro a entrar era curado). Era um lugar de competição cruel, onde o mais forte pisava no mais fraco para conseguir a cura. Ali estava um homem doente há 38 anos (v. 5). Ele representa a condição espiritual da humanidade: paralisada pelo pecado, sem forças para se salvar e sem ninguém para ajudar.`
      },
      {
        verseRef: 'v. 6-9',
        title: 'A Pergunta de Jesus e a Cura Imediata',
        description: `A Graça Soberana. Jesus o vê e faz uma pergunta que parece óbvia, mas que sonda a vontade do homem (v. 6): "Queres ficar são?". O homem não responde com fé, mas com uma desculpa baseada na sua impotência e na falta de ajuda humana (v. 7): "Senhor, não tenho homem algum que... me ponha no tanque". Ele estava focado no método errado (a água) e na ajuda errada (os homens). Jesus ignora a água e emite um comando divino (v. 8): "Levanta-te, toma o teu leito, e anda". Imediatamente, a palavra de Cristo cria a realidade que ordena. O homem é curado, pega o seu leito e anda (v. 9). A salvação não vem pelo nosso esforço de chegar à "água", mas pela palavra soberana de Cristo que vem até nós na nossa paralisia.`
      },
      {
        verseRef: 'v. 10-15',
        title: 'O Legalismo dos Judeus e a Identificação do Salvador',
        description: `A Religião Cega. O milagre ocorreu no sábado (v. 9). Os líderes judeus veem o homem carregando o leito e o acusam de quebrar a lei do sábado (v. 10). Eles estão tão cegos pelo legalismo que não se alegram com a cura de um homem paralisado há 38 anos; eles só se importam com a quebra da sua regra teológica. O homem diz que Aquele que o curou lhe mandou carregar o leito (v. 11). Mais tarde, Jesus o encontra no templo e lhe dá um aviso espiritual (v. 14): "Eis que já estás são; não peques mais, para que não te suceda alguma coisa pior". A cura física é temporária; o pecado traz consequências eternas. O homem então relata aos judeus que foi Jesus quem o curou (v. 15), iniciando a perseguição contra Cristo.`
      }
    ],
    conclusion: `João 5:1-15 expõe a falência da religião humana. A religião (representada pelo tanque e pelos fariseus) exige que o homem doente faça um esforço que ele não consegue fazer, e o condena quando ele falha. O Evangelho é Jesus Cristo vindo até nós na nossa total paralisia espiritual, ignorando os nossos méritos e nos curando com a Sua palavra de graça. Devemos parar de olhar para os "tanques" deste mundo e ouvir a voz dAquele que tem o poder de nos levantar.`
  },
  {
    id: 'jhn_8_1_11',
    bookId: 'JHN',
    chapter: 8,
    startVerse: 1,
    endVerse: 11,
    title: 'A Mulher Apanhada em Adultério',
    theme: 'A Armadilha Legalista e a Graça que Não Condena',
    introduction: `Os escribas e fariseus trazem uma mulher pega em flagrante adultério a Jesus. Eles não se importam com a mulher; ela é apenas uma isca em uma armadilha teológica. Se Jesus disser para apedrejá-la, Ele quebra a lei romana (que proibia os judeus de executarem a pena de morte); se disser para soltá-la, Ele quebra a lei de Moisés. A resposta magistral de Jesus expõe a hipocrisia dos acusadores e oferece à mulher o equilíbrio perfeito entre graça perdoadora e santidade transformadora.`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Armadilha dos Fariseus e a Exigência da Lei',
        description: `A Isca Humana. Os líderes religiosos interrompem o ensino de Jesus no templo, trazendo uma mulher "apanhada no próprio ato" de adultério (v. 4). A hipocrisia deles é evidente: onde estava o homem envolvido no ato? A lei exigia a morte de ambos (Levítico 20:10). Eles a usam como um peão para encurralar Jesus (v. 5-6): "Moisés nos ordenou... que as tais sejam apedrejadas. Tu, pois, que dizes?". Eles queriam motivos para acusá-Lo. A religião legalista sempre usa a lei para destruir pessoas e justificar o seu próprio orgulho.`
      },
      {
        verseRef: 'v. 6-9',
        title: 'O Dedo na Areia e o Desafio aos Hipócritas',
        description: `O Juiz Silencioso. Jesus não entra no debate teológico deles. Em vez disso, Ele se inclina e começa a escrever na terra com o dedo (v. 6). (A Bíblia não diz o que Ele escreveu; alguns sugerem que eram os pecados dos acusadores, outros que Ele estava imitando Deus escrevendo a lei com o dedo). Como eles insistem, Jesus se levanta e profere a sentença que desarma a armadilha (v. 7): "Aquele que de entre vós está sem pecado seja o primeiro que atire pedra contra ela". Jesus não revoga a lei de Moisés, mas exige que os juízes sejam moralmente puros para executá-la. Atingidos na consciência, os acusadores saem um por um, começando pelos mais velhos (v. 9). A hipocrisia não resiste à luz da santidade de Cristo.`
      },
      {
        verseRef: 'v. 10-11',
        title: 'A Ausência de Condenação e o Chamado à Santidade',
        description: `Graça e Verdade. Jesus fica sozinho com a mulher. Ele pergunta (v. 10): "Mulher, onde estão aqueles teus acusadores? Ninguém te condenou?". Ela responde: "Ninguém, Senhor". Jesus, o único ali que realmente não tinha pecado e que tinha o direito legal e moral de atirar a primeira pedra, diz as palavras mais doces que um pecador pode ouvir (v. 11): "Nem eu também te condeno". Esta é a graça absoluta (justificação). Mas Jesus não para por aí. Ele acrescenta a exigência da santidade (santificação): "vai-te, e não peques mais". A graça não é uma licença para continuar pecando; é o poder que nos liberta para vivermos uma vida santa.`
      }
    ],
    conclusion: `João 8:1-11 é o retrato perfeito de Jesus, cheio de graça e de verdade. Ele não minimiza o pecado do adultério, mas Ele se recusa a permitir que pecadores hipócritas executem o julgamento. Ele oferece à mulher um perdão que ela não merecia, porque Ele mesmo, em breve, iria para a cruz para receber as "pedras" da ira de Deus que deveriam cair sobre ela e sobre nós. O perdão de Cristo nos salva da condenação e nos comissiona a abandonar o pecado.`
  },
  {
    id: 'jhn_9_1_41',
    bookId: 'JHN',
    chapter: 9,
    startVerse: 1,
    endVerse: 41,
    title: 'A Cura do Cego de Nascença',
    theme: 'A Luz do Mundo e a Cegueira dos Religiosos',
    introduction: `Jesus encontra um homem cego de nascença. Os discípulos veem o homem como um problema teológico (quem pecou?), mas Jesus o vê como uma oportunidade para a glória de Deus. A cura física do cego é apenas o início de uma jornada de iluminação espiritual, que contrasta fortemente com a crescente cegueira espiritual e hostilidade dos fariseus, que se recusam a ver a verdade mesmo quando ela está diante deles.`,
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'A Pergunta Teológica e a Cura com Lodo',
        description: `A Glória de Deus no Sofrimento. Os discípulos perguntam (v. 2): "Rabi, quem pecou, este ou seus pais, para que nascesse cego?". Eles assumem a teologia do karma: todo sofrimento é punição direta por um pecado específico. Jesus rejeita essa visão (v. 3): "Nem ele pecou nem seus pais; mas foi assim para que se manifestem nele as obras de Deus". O sofrimento humano, embora seja resultado da queda, é usado soberanamente por Deus como um palco para exibir a Sua graça. Jesus faz lodo com saliva, unta os olhos do cego e manda-o lavar-se no tanque de Siloé (v. 6-7). O homem obedece e volta vendo. A cura exigiu a palavra de Cristo e a obediência do homem.`
      },
      {
        verseRef: 'v. 13-34',
        title: 'O Interrogatório dos Fariseus e o Testemunho Irrefutável',
        description: `A Cegueira da Religião. O milagre ocorreu no sábado, desencadeando uma investigação inquisitorial pelos fariseus. Eles interrogam o homem, os seus pais (que fogem da responsabilidade por medo da excomunhão) e o homem novamente. Os fariseus tentam forçar o homem a negar o milagre ou a condenar Jesus como pecador (v. 24). A resposta do ex-cego é um dos maiores testemunhos da Bíblia (v. 25): "Se é pecador, não sei; uma coisa sei, é que, havendo eu sido cego, agora vejo". A experiência pessoal com a graça de Cristo é irrefutável. O homem, usando lógica simples, derrota os teólogos (v. 30-33), resultando na sua expulsão da sinagoga (v. 34).`
      },
      {
        verseRef: 'v. 35-41',
        title: 'A Revelação do Filho do Homem e o Julgamento',
        description: `A Verdadeira Iluminação. Jesus procura o homem que foi expulso e lhe pergunta (v. 35): "Crês tu no Filho de Deus?". O homem pede para saber quem Ele é. Jesus se revela (v. 37), e o homem O adora (v. 38). A cura física agora se completou com a salvação espiritual. Jesus conclui com um paradoxo sobre o julgamento (v. 39): "Eu vim a este mundo para juízo, a fim de que os que não veem vejam, e os que veem sejam cegos". Os fariseus, ofendidos, perguntam se também são cegos (v. 40). Jesus responde (v. 41): "Se fôsseis cegos, não teríeis pecado; mas como agora dizeis: Vemos; por isso o vosso pecado permanece". O pior tipo de cegueira é a ilusão de que já se tem a luz.`
      }
    ],
    conclusion: `João 9 nos ensina que Jesus é a Luz do Mundo que veio para abrir os nossos olhos espirituais. O ex-cego começou chamando Jesus de "um homem" (v. 11), depois "profeta" (v. 17), depois alguém "de Deus" (v. 33), até finalmente adorá-Lo como o "Filho de Deus" (v. 38). Esta é a jornada da fé. Em contraste, os fariseus, que tinham todo o conhecimento teológico, afundaram cada vez mais nas trevas porque o seu orgulho os impediu de admitir a sua necessidade de salvação.`
  },
  {
    id: 'jhn_21_15_19',
    bookId: 'JHN',
    chapter: 21,
    startVerse: 15,
    endVerse: 19,
    title: 'A Restauração de Pedro',
    theme: 'O Perdão, o Amor e o Comissionamento Pastoral',
    introduction: `Após a ressurreição, os discípulos voltam a pescar na Galileia, talvez incertos sobre o seu futuro. Jesus aparece na praia, providencia uma pesca milagrosa e prepara o café da manhã. O foco da narrativa muda para Pedro, que carregava a culpa esmagadora de ter negado Jesus três vezes. Ao redor de uma fogueira (lembrando a fogueira onde ocorreu a negação), Jesus não repreende Pedro com raiva, mas o restaura gentilmente com três perguntas sobre o amor, comissionando-o para pastorear o Seu rebanho.`,
    points: [
      {
        verseRef: 'v. 15',
        title: 'A Primeira Pergunta: O Amor Superior',
        description: `A Ferida do Orgulho. Após comerem, Jesus se dirige a Pedro usando o seu nome antigo (v. 15): "Simão, filho de Jonas, amas-me (agapas) mais do que estes?". Antes da cruz, Pedro havia se gabado de que, mesmo que todos abandonassem Jesus, ele nunca o faria (Mateus 26:33). Jesus toca direto nessa ferida de orgulho. Pedro não ousa mais se comparar aos outros. Ele responde com uma palavra diferente para amor (phileo, amor de amizade): "Sim, Senhor, tu sabes que te amo (philo)". Jesus aceita a sua humildade e lhe dá a primeira comissão: "Apascenta os meus cordeiros". O perdão de Cristo nos devolve o propósito.`
      },
      {
        verseRef: 'v. 16-17',
        title: 'A Tríplice Confissão e a Restauração Completa',
        description: `Três Negações, Três Confissões. Jesus pergunta uma segunda vez (v. 16): "Amas-me (agapas)?". Pedro responde novamente com "philo". Jesus diz: "Apascenta as minhas ovelhas". Pela terceira vez, Jesus pergunta (v. 17), mas agora Ele desce ao nível de Pedro e usa a palavra "phileis" (tu tens amizade por mim?). Pedro se entristece por causa da terceira vez (que o lembrava das três negações) e apela para a onisciência de Cristo: "Senhor, tu sabes tudo; tu sabes que eu te amo (philo)". Jesus lhe dá a comissão final: "Apascenta as minhas ovelhas". Jesus o fez confessar o seu amor três vezes para cancelar publicamente as suas três negações, restaurando-o completamente à liderança apostólica.`
      },
      {
        verseRef: 'v. 18-19',
        title: 'A Profecia do Martírio e o Chamado Renovado',
        description: `O Custo do Amor. Jesus então profetiza o futuro de Pedro (v. 18): quando ele fosse velho, estenderia as mãos e outro o cingiria e o levaria para onde ele não queria ir. João explica (v. 19) que Jesus dizia isso "significando com que morte havia ele de glorificar a Deus" (a tradição diz que Pedro foi crucificado de cabeça para baixo). Na noite da negação, Pedro falhou em morrer por Jesus. Agora, restaurado e cheio do Espírito Santo, ele receberia a graça para ser um mártir. Jesus termina a conversa com o mesmo convite que fez no início do ministério de Pedro (v. 19): "Segue-me". O passado de fracasso ficou para trás; o futuro é seguir a Cristo até o fim.`
      }
    ],
    conclusion: `João 21:15-19 é um dos textos mais consoladores para qualquer cristão que já falhou miseravelmente. O nosso pecado e a nossa negação não são o fim da nossa história com Deus. Jesus nos busca na "praia" da nossa decepção, não para nos humilhar, mas para nos restaurar. A única qualificação que Ele exige para nos usar no Seu Reino não é a perfeição moral, mas um coração quebrantado que pode dizer honestamente: "Senhor, tu sabes tudo; tu sabes que eu te amo".`
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
  console.log('Successfully added 9 new pericopes for Luke and John.');
} else {
  console.error('Could not find the end of the pericopes array.');
}
