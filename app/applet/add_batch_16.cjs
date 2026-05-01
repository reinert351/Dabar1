const fs = require('fs');

const newPericopes = [
  {
    id: '2sa_1_17_27',
    bookId: '2SA',
    chapter: 1,
    startVerse: 17,
    endVerse: 27,
    title: 'O Lamento de Davi por Saul e Jônatas',
    theme: 'O Luto, a Honra ao Ungido e o Amor Fraternal',
    introduction: 'A notícia da morte de Saul e Jônatas no monte Gilboa chega a Davi. Em vez de celebrar a morte do homem que o perseguiu implacavelmente por anos, Davi rasga suas vestes e compõe um dos lamentos poéticos mais belos e comoventes de toda a Bíblia, conhecido como o "Cântico do Arco". Em 2 Samuel 1, Davi demonstra uma nobreza de caráter extraordinária. Ele escolhe lembrar apenas as virtudes de Saul e expressa uma dor profunda pela perda de seu melhor amigo, Jônatas. O texto nos ensina sobre a grandeza do perdão e a sacralidade do luto.',
    points: [
      {
        verseRef: 'v. 17-20',
        title: 'A Ordem do Luto e a Preservação da Honra',
        description: 'Davi ordena que o lamento seja ensinado aos filhos de Judá. Ele clama: "Como caíram os valentes!". Sua maior preocupação não é a sua própria ascensão ao trono, mas a vergonha que a derrota trará ao nome de Israel. Ele pede que a notícia não seja anunciada em Gate ou Asquelom, para que as filhas dos filisteus não se alegrem com a queda do ungido do Senhor.'
      },
      {
        verseRef: 'v. 21-24',
        title: 'O Elogio Fúnebre a Saul',
        description: 'Davi amaldiçoa os montes de Gilboa, desejando que não caia orvalho nem chuva sobre eles, pois ali foi manchado o escudo dos valentes. Surpreendentemente, Davi elogia Saul, chamando-o de valente e lembrando como ele enriqueceu as mulheres de Israel com os despojos de guerra. Davi apaga da memória os anos de perseguição e escolhe honrar a posição que Saul ocupou.'
      },
      {
        verseRef: 'v. 25-27',
        title: 'A Dor Pessoal por Jônatas',
        description: 'O lamento atinge o seu clímax emocional quando Davi fala de Jônatas: "Angustiado estou por ti, meu irmão Jônatas; quão amabilíssimo me eras! Mais maravilhoso me era o teu amor do que o amor das mulheres". Davi chora a perda de uma aliança espiritual e de uma amizade pura que superou a inveja e a política do palácio.'
      }
    ],
    conclusion: 'O lamento de Davi é um antídoto contra a cultura da vingança e do ressentimento. Quando um inimigo cai, a nossa carne quer celebrar, mas o Espírito nos chama a lamentar a tragédia do pecado e da morte. Davi nos ensina que a verdadeira grandeza não está apenas em vencer batalhas, mas em como tratamos aqueles que nos feriram. Além disso, a dor de Davi por Jônatas nos lembra do valor inestimável da amizade cristã verdadeira — um amor sacrificial e leal que reflete o próprio amor de Cristo por nós.'
  },
  {
    id: '2sa_5_1_10',
    bookId: '2SA',
    chapter: 5,
    startVerse: 1,
    endVerse: 10,
    title: 'Davi é Ungido Rei sobre Todo o Israel',
    theme: 'O Tempo de Deus, a Unidade da Nação e a Conquista de Sião',
    introduction: 'Após anos de fuga no deserto, a morte de Saul e um período de sete anos reinando apenas sobre a tribo de Judá em Hebrom, o momento determinado por Deus finalmente chega. Em 2 Samuel 5, todas as tribos de Israel se reúnem para coroar Davi como rei sobre toda a nação. Este capítulo marca o cumprimento da promessa feita através de Samuel muitos anos antes. Imediatamente após a coroação, Davi toma uma decisão estratégica e teológica crucial: ele conquista a fortaleza de Jebus (Jerusalém) e a transforma na "Cidade de Davi", o centro político e espiritual de Israel.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Submissão das Tribos e a Aliança em Hebrom',
        description: 'Os líderes de todas as tribos vêm a Davi e reconhecem três coisas: o parentesco ("somos teus ossos e tua carne"), a liderança militar passada de Davi mesmo sob Saul, e, mais importante, o chamado divino ("O Senhor te disse: Tu apascentarás o meu povo"). Eles fazem uma aliança, e Davi é ungido rei pela terceira e última vez.'
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Paciência Recompensada',
        description: 'O texto resume a cronologia: Davi tinha 30 anos quando começou a reinar e reinou 40 anos. Ele esperou pacientemente (provavelmente mais de uma década desde a primeira unção) suportando injustiças sem tentar usurpar o trono à força. O tempo de Deus provou ser perfeito para forjar o caráter do rei.'
      },
      {
        verseRef: 'v. 6-10',
        title: 'A Conquista de Jerusalém (Sião)',
        description: 'A primeira ação de Davi como rei unificado é marchar contra Jerusalém, controlada pelos jebuseus. Os habitantes zombam de Davi, confiando na inexpugnabilidade da sua fortaleza. Davi toma a "fortaleza de Sião" usando o canal de água. O versículo 10 revela o segredo do seu sucesso: "Davi ia-se engrandecendo cada vez mais, porque o Senhor Deus dos Exércitos era com ele".'
      }
    ],
    conclusion: 'A ascensão de Davi ao trono de todo o Israel é um testemunho do poder da paciência e da confiança na soberania de Deus. Davi não forçou portas nem manipulou pessoas para chegar ao poder; ele esperou que Deus movesse os corações das tribos no tempo certo. A conquista de Jerusalém simboliza a vitória sobre fortalezas que parecem invencíveis. Quando o "Senhor dos Exércitos" está conosco, as zombarias do inimigo caem por terra. A Cidade de Davi aponta profeticamente para a Nova Jerusalém, onde o Filho de Davi, Jesus Cristo, reinará eternamente.'
  },
  {
    id: '2sa_6_1_15',
    bookId: '2SA',
    chapter: 6,
    startVerse: 1,
    endVerse: 15,
    title: 'A Arca Trazida para Jerusalém',
    theme: 'A Santidade de Deus, a Reverência e a Alegria Extravagante',
    introduction: 'Com Jerusalém estabelecida como capital política, Davi deseja torná-la também o centro espiritual da nação. Para isso, ele decide trazer a Arca da Aliança, que estava esquecida na casa de Abinadabe. 2 Samuel 6 narra esta tentativa, que começa com um erro fatal e termina com uma celebração exuberante. O episódio da morte de Uzá e a posterior dança de Davi diante do Senhor formam um dos contrastes mais vívidos da Bíblia sobre como devemos nos aproximar de Deus: com profundo temor reverente e, ao mesmo tempo, com alegria apaixonada.',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'O Carro Novo e a Morte de Uzá',
        description: 'Davi reúne 30.000 homens para uma grande festa. No entanto, eles cometem um erro teológico grave: colocam a Arca em um "carro novo" (o método dos filisteus em 1 Sm 6) em vez de ser carregada nos ombros dos levitas (Números 4:15). Quando os bois tropeçam, Uzá estende a mão para segurar a Arca. A ira de Deus se acende, e Uzá morre instantaneamente. A boa intenção não anula a desobediência à Palavra de Deus.'
      },
      {
        verseRef: 'v. 8-11',
        title: 'O Temor de Davi e a Bênção na Casa de Obede-Edom',
        description: 'Davi fica desgostoso e com medo. Ele percebe que a santidade de Deus é perigosa para pecadores descuidados. Ele desiste de levar a Arca e a deixa na casa de Obede-Edom, o geteu. Durante três meses, Deus abençoa extraordinariamente a casa de Obede-Edom, provando que a presença de Deus traz morte para a desobediência, mas vida abundante para quem a acolhe.'
      },
      {
        verseRef: 'v. 12-15',
        title: 'A Correção e a Dança Diante do Senhor',
        description: 'Ao ouvir sobre a bênção, Davi volta para buscar a Arca, desta vez da maneira correta (carregada pelos levitas, com sacrifícios a cada seis passos). Vestido apenas com um éfode de linho (traje sacerdotal simples, despindo-se da glória real), Davi "saltava com todas as suas forças diante do Senhor". A reverência foi restaurada, permitindo que a alegria explodisse em adoração extravagante.'
      }
    ],
    conclusion: 'A história do transporte da Arca nos ensina que Deus não aceita ser adorado do nosso próprio jeito. O pragmatismo (o "carro novo") pode parecer eficiente, mas Deus exige obediência à Sua Palavra. A morte de Uzá é um lembrete chocante de que a santidade de Deus não pode ser tratada com familiaridade desrespeitosa. No entanto, a segunda tentativa de Davi nos mostra o outro lado da moeda: quando nos aproximamos de Deus pelos méritos do sacrifício (o sangue derramado a cada seis passos), o medo dá lugar a uma alegria indescritível. A verdadeira adoração cristã equilibra o temor reverente com a celebração apaixonada.'
  },
  {
    id: '2sa_9_1_13',
    bookId: '2SA',
    chapter: 9,
    startVerse: 1,
    endVerse: 13,
    title: 'Davi e Mefibosete',
    theme: 'A Graça Imerecida, a Aliança e a Restauração à Mesa do Rei',
    introduction: 'No antigo Oriente Médio, quando uma nova dinastia assumia o poder, o costume era exterminar todos os descendentes do rei anterior para evitar rebeliões. Davi, no entanto, opera sob uma lei superior: a lei da aliança e da graça. Em 2 Samuel 9, Davi, agora no auge do seu poder, ativamente procura alguém da casa de Saul para demonstrar bondade (hesed) por amor a Jônatas. Ele encontra Mefibosete, um homem aleijado de ambos os pés, vivendo no exílio e no medo. A história de Mefibosete é uma das mais belas e perfeitas ilustrações do Evangelho da graça em todo o Antigo Testamento.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Busca da Graça',
        description: 'Davi pergunta: "Há ainda alguém que ficasse da casa de Saul, para que eu use de benevolência com ele por amor de Jônatas?". A graça sempre toma a iniciativa. Ziba, um servo, informa que há um filho de Jônatas, aleijado dos pés, vivendo em Lo-Debar (que significa "lugar sem pasto" ou "lugar de nada"). Mefibosete estava escondido, quebrado e na miséria.'
      },
      {
        verseRef: 'v. 5-8',
        title: 'O Encontro e a Promessa de Restauração',
        description: 'Mefibosete é trazido à presença do rei. Ele cai com o rosto em terra, esperando a morte. Mas as primeiras palavras de Davi são: "Não temas". Davi promete restituir todas as terras de seu avô Saul e faz um convite extraordinário: "tu sempre comerás pão à minha mesa". Mefibosete, atônito com a graça, chama a si mesmo de "cão morto".'
      },
      {
        verseRef: 'v. 9-13',
        title: 'A Provisão e a Adoção',
        description: 'Davi ordena a Ziba que cultive a terra para sustentar a família de Mefibosete. O capítulo termina com uma ênfase repetida: Mefibosete passou a morar em Jerusalém e "comia continuamente à mesa do rei; e era coxo de ambos os pés". A sua deficiência não foi curada, mas foi coberta pela toalha da mesa do rei. Ele foi tratado como um dos filhos de Davi.'
      }
    ],
    conclusion: 'A história de Mefibosete é a nossa história. Nós éramos descendentes de uma linhagem rebelde (Adão), estávamos espiritualmente aleijados pela queda, vivendo no exílio (Lo-Debar), longe de Deus e condenados à morte. Mas o Rei do Universo nos buscou, não por nossos méritos, mas por causa de uma aliança (o sangue de Jesus). Ele nos disse "Não temas", restituiu a nossa herança perdida e nos convidou para sentar à Sua mesa como filhos adotivos. A graça não exige que sejamos perfeitos para nos sentarmos à mesa; a graça cobre a nossa "coxeadura" com a provisão e o amor do Rei.'
  },
  {
    id: '2sa_11_1_17',
    bookId: '2SA',
    chapter: 11,
    startVerse: 1,
    endVerse: 17,
    title: 'O Pecado de Davi com Bate-Seba',
    theme: 'A Ociosidade, a Tentação, o Adultério e o Assassinato',
    introduction: '2 Samuel 11 é um dos capítulos mais sombrios e honestos da Bíblia. Ele narra a queda moral do maior rei de Israel, "o homem segundo o coração de Deus". A história não esconde as falhas de seus heróis, provando a veracidade das Escrituras. O pecado de Davi não aconteceu da noite para o dia; foi o resultado de uma série de pequenas concessões que culminaram em adultério, engano e assassinato a sangue frio. Este texto serve como um alerta aterrorizante de que ninguém, por mais ungido ou experiente que seja, está imune à força destrutiva do pecado quando baixa a guarda.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Ociosidade e a Concepção do Pecado',
        description: 'O texto começa com uma acusação sutil: "no tempo em que os reis saem à guerra... Davi ficou em Jerusalém". A ociosidade e o abandono do dever abriram a porta para a tentação. Passeando no terraço, Davi vê Bate-Seba tomando banho. Ele indaga sobre ela, descobre que é casada com Urias (um de seus valentes), manda trazê-la e deita-se com ela. O olhar cobiçoso transformou-se rapidamente em ação pecaminosa.'
      },
      {
        verseRef: 'v. 5-13',
        title: 'A Gravidez e a Tentativa de Encobrimento',
        description: 'Bate-Seba manda avisar: "Estou grávida". O pânico de ser descoberto leva Davi a tramar um encobrimento. Ele chama Urias da frente de batalha, esperando que ele durma com a esposa e assuma a paternidade. Mas Urias, demonstrando uma integridade e lealdade que faltavam ao rei, recusa-se a dormir no conforto de sua casa enquanto a Arca e seus companheiros estão acampados no campo. Nem mesmo embriagado por Davi, Urias cede.'
      },
      {
        verseRef: 'v. 14-17',
        title: 'O Assassinato a Sangue Frio',
        description: 'Frustrado pela integridade de Urias, Davi toma uma decisão diabólica. Ele escreve uma carta a Joabe, o comandante, ordenando que Urias seja colocado na frente da batalha mais feroz e depois abandonado para morrer. A ironia macabra é que Urias carrega a sua própria sentença de morte nas mãos. Joabe obedece, e Urias, o heteu fiel, é assassinado para encobrir o pecado do rei.'
      }
    ],
    conclusion: 'A queda de Davi é uma anatomia do pecado (Tiago 1:14-15). Começou com ociosidade, passou pelo olhar, gerou cobiça, consumou-se no adultério e tentou se esconder atrás do assassinato. O pecado sempre nos leva mais longe do que queríamos ir, nos mantém mais tempo do que queríamos ficar e nos custa mais do que queríamos pagar. A história nos adverte que o encobrimento do pecado é frequentemente pior do que o pecado original. A única maneira de lidar com o pecado não é tentar escondê-lo com nossas próprias tramas, mas trazê-lo à luz através da confissão e do arrependimento diante de Deus.'
  },
  {
    id: '2sa_12_15_23',
    bookId: '2SA',
    chapter: 12,
    startVerse: 15,
    endVerse: 23,
    title: 'A Morte do Filho e a Adoração de Davi',
    theme: 'O Castigo do Pecado, o Jejum e a Submissão à Soberania de Deus',
    introduction: 'Após o confronto com o profeta Natã e o arrependimento profundo de Davi (registrado no Salmo 51), Deus perdoa o pecado de Davi, mas as consequências terrenas permanecem. A primeira e mais dolorosa consequência é a doença mortal da criança nascida do adultério com Bate-Seba. 2 Samuel 12:15-23 narra a agonia de Davi enquanto a criança sofre, e a sua reação surpreendente quando a criança finalmente morre. Este texto oferece uma visão profunda sobre a oração, o jejum, a aceitação da vontade soberana de Deus e a esperança da vida após a morte.',
    points: [
      {
        verseRef: 'v. 15-17',
        title: 'A Doença e a Intercessão Desesperada',
        description: 'O Senhor fere a criança, que adoece gravemente. Davi entra em um estado de intercessão intensa. Ele jejua, entra em seus aposentos e passa as noites prostrado no chão. Os anciãos tentam levantá-lo e fazê-lo comer, mas ele recusa. Davi está lutando em oração, esperando que a misericórdia de Deus reverta a sentença disciplinar.'
      },
      {
        verseRef: 'v. 18-20',
        title: 'A Morte da Criança e a Reação Inesperada',
        description: 'No sétimo dia, a criança morre. Os servos têm medo de contar a Davi, temendo que ele cometa suicídio ou loucura, dado o seu desespero enquanto a criança vivia. Quando Davi percebe o que aconteceu, a sua reação choca a todos: ele se levanta do chão, lava-se, unge-se, troca de roupa, vai à Casa do Senhor e adora. Depois, volta para casa e pede comida. A adoração substitui o desespero.'
      },
      {
        verseRef: 'v. 21-23',
        title: 'A Teologia da Submissão e a Esperança Eterna',
        description: 'Os servos perguntam o motivo desse comportamento incomum. Davi explica a sua teologia: enquanto a criança vivia, havia esperança de que Deus se compadecesse. Mas agora que morreu, o jejum não pode trazê-la de volta. Davi pronuncia uma das declarações mais claras sobre a vida após a morte no Antigo Testamento: "Eu irei a ela, porém ela não voltará para mim". Ele aceita a soberania de Deus e descansa na esperança do reencontro na eternidade.'
      }
    ],
    conclusion: 'A atitude de Davi é um modelo extraordinário de como lidar com o sofrimento e a perda. É correto clamar, jejuar e lutar em oração enquanto há vida e esperança. No entanto, quando a vontade soberana de Deus se manifesta — mesmo que seja através da morte ou de uma resposta "não" —, a resposta do crente maduro não é a amargura ou a rebelião, mas a adoração. Davi lavou o rosto e foi à Casa do Senhor porque sabia que Deus continuava sendo bom e justo, mesmo na disciplina. Além disso, a certeza de Davi ("Eu irei a ela") nos conforta com a esperança cristã de que as crianças que partem estão seguras nos braços do Pai, aguardando o nosso reencontro.'
  },
  {
    id: '2sa_15_1_14',
    bookId: '2SA',
    chapter: 15,
    startVerse: 1,
    endVerse: 14,
    title: 'A Rebelião de Absalão',
    theme: 'A Traição, a Política da Sedução e a Fuga do Rei',
    introduction: 'O pecado de Davi com Bate-Seba abriu a porta para a ruína em sua própria casa. O incesto de Amnom, o assassinato cometido por Absalão e a falta de disciplina paterna de Davi criaram um ambiente tóxico. Em 2 Samuel 15, a ambição de Absalão atinge o ápice. Ele orquestra um golpe de estado brilhante e traiçoeiro contra o seu próprio pai. Usando carisma, falsas promessas e manipulação política, Absalão rouba o coração do povo de Israel. A rebelião força Davi, o grande rei guerreiro, a fugir de Jerusalém chorando e descalço, cumprindo a profecia de Natã de que o mal se levantaria de sua própria casa.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Sedução do Povo e a Política do Descontentamento',
        description: 'Absalão adota uma postura de realeza (carros, cavalos e 50 guardas). Ele se levanta cedo e fica à porta da cidade, interceptando as pessoas que vinham ao rei para julgamento. Ele usa a tática clássica do populismo: simpatiza com as queixas do povo, diz que a causa deles é justa, mas afirma que o rei não tem quem os ouça. Ele beija as pessoas e promete justiça. Assim, Absalão "furtava o coração dos homens de Israel".'
      },
      {
        verseRef: 'v. 7-12',
        title: 'A Conspiração em Hebrom e a Traição de Aitofel',
        description: 'Após quatro anos de preparação, Absalão pede permissão a Davi para ir a Hebrom cumprir um falso voto religioso. Lá, ele toca a trombeta e se proclama rei. A conspiração ganha força esmagadora quando Aitofel, o conselheiro mais sábio e íntimo de Davi (e avô de Bate-Seba), junta-se à rebelião. A traição vem do círculo mais íntimo do rei.'
      },
      {
        verseRef: 'v. 13-14',
        title: 'A Notícia Chocante e a Fuga de Davi',
        description: 'Um mensageiro avisa Davi: "O coração dos homens de Israel segue a Absalão". Davi, percebendo a gravidade da situação e querendo evitar um banho de sangue em Jerusalém, toma uma decisão rápida e humilhante: "Levantai-vos, e fujamos... para que não nos apanhe de súbito, e lance sobre nós o mal, e fira a cidade a fio de espada". O rei foge de seu próprio filho.'
      }
    ],
    conclusion: 'A rebelião de Absalão é um estudo sobre os perigos da ambição desmedida e da manipulação. Absalão usou a aparência de justiça e o carisma pessoal para destruir a autoridade estabelecida por Deus. Na igreja e na sociedade, devemos ter cuidado com líderes que "furtam corações" através de lisonjas e críticas sutis à liderança atual. Para Davi, a fuga foi o momento mais sombrio de sua vida, colhendo os frutos amargos de seus próprios erros familiares. No entanto, mesmo na humilhação da fuga (subindo o Monte das Oliveiras chorando), Davi manteve a sua confiança na misericórdia de Deus, submetendo-se à disciplina divina com um coração quebrantado.'
  },
  {
    id: '2sa_16_5_14',
    bookId: '2SA',
    chapter: 16,
    startVerse: 5,
    endVerse: 14,
    title: 'Davi e Simei',
    theme: 'A Humilhação, a Maldição e a Submissão à Disciplina Divina',
    introduction: 'Enquanto Davi foge de Jerusalém para escapar da rebelião de seu filho Absalão, ele enfrenta uma das maiores humilhações de sua vida. Ao passar por Baurim, um homem chamado Simei, da família de Saul, sai ao seu encontro atirando pedras, jogando poeira e proferindo maldições cruéis contra o rei. 2 Samuel 16:5-14 revela a profundidade do quebrantamento de Davi. Em vez de usar o seu poder militar para silenciar o ofensor, Davi aceita a maldição como parte da disciplina soberana de Deus, demonstrando uma mansidão que prefigura o sofrimento de Cristo.',
    points: [
      {
        verseRef: 'v. 5-8',
        title: 'As Pedras e as Maldições de Simei',
        description: 'Simei acompanha Davi pela encosta do monte, atirando pedras contra o rei e seus valentes. Ele grita acusações falsas e cruéis: "Sai, sai, homem de sangue, e homem de Belial". Simei acusa Davi de ter usurpado o trono de Saul e derramado o sangue de sua casa, e interpreta a rebelião de Absalão como o juízo de Deus. Ele chuta Davi enquanto ele está caído.'
      },
      {
        verseRef: 'v. 9-10',
        title: 'A Fúria de Abisai e a Resposta Mansa de Davi',
        description: 'Abisai, um dos generais mais ferozes de Davi, pede permissão para decapitar Simei: "Por que amaldiçoaria este cão morto ao rei meu senhor?". A resposta de Davi é surpreendente: "Que tenho eu convosco, filhos de Zeruia? Ora deixai-o amaldiçoar; pois o Senhor lhe disse: Amaldiçoa a Davi". Davi vê além da maldade de Simei e reconhece a mão disciplinadora de Deus na situação.'
      },
      {
        verseRef: 'v. 11-14',
        title: 'A Esperança na Misericórdia de Deus',
        description: 'Davi argumenta que, se o seu próprio filho procura tirar-lhe a vida, quanto mais este benjamita. Ele proíbe a vingança e expressa uma esperança profunda: "Porventura o Senhor olhará para a minha miséria; e o Senhor me pagará com bem a sua maldição deste dia". Davi escolhe suportar a vergonha, confiando que Deus é o justo juiz que vê a sua aflição.'
      }
    ],
    conclusion: 'A atitude de Davi diante de Simei é um dos maiores exemplos de mansidão na Bíblia. Quando somos injustiçados, caluniados ou "apedrejados" com palavras, o nosso instinto (como o de Abisai) é revidar e cortar a cabeça do ofensor. Mas Davi nos ensina a olhar além do instrumento humano e ver a soberania de Deus. Ele aceitou a humilhação porque sabia que merecia a disciplina de Deus por seus pecados passados. Mais do que isso, Davi prefigura Jesus Cristo, que, ao ser injuriado, não injuriava, e ao padecer, não ameaçava, mas entregava-se Àquele que julga retamente (1 Pedro 2:23). A verdadeira força espiritual muitas vezes se manifesta na capacidade de suportar o insulto em silêncio.'
  },
  {
    id: '2sa_18_24_33',
    bookId: '2SA',
    chapter: 18,
    startVerse: 24,
    endVerse: 33,
    title: 'A Morte de Absalão e o Choro de Davi',
    theme: 'A Vitória Amarga, o Amor Paternal e o Preço da Rebelião',
    introduction: 'A guerra civil entre as forças de Davi e as de Absalão culmina na floresta de Efraim. O exército de Absalão é derrotado, e o próprio Absalão é morto por Joabe, contrariando a ordem expressa de Davi para poupar o jovem. Em 2 Samuel 18, Davi aguarda ansiosamente as notícias da batalha nas portas da cidade de Maanaim. Quando os mensageiros chegam, a preocupação de Davi não é com a vitória militar ou a segurança do seu trono, mas com a vida do seu filho rebelde. A notícia da morte de Absalão provoca um dos lamentos mais dolorosos e viscerais de toda a Escritura.',
    points: [
      {
        verseRef: 'v. 24-28',
        title: 'A Espera Angustiante e a Chegada de Aimaás',
        description: 'Davi está sentado entre as duas portas da cidade. O vigia anuncia a chegada de corredores. O primeiro a chegar é Aimaás, que traz a notícia da vitória: "Bendito seja o Senhor teu Deus, que entregou os homens que levantaram a mão contra o rei meu senhor". Mas a única pergunta de Davi é: "Vai bem o jovem, Absalão?". Aimaás, temendo a reação do rei, dá uma resposta evasiva.'
      },
      {
        verseRef: 'v. 29-32',
        title: 'A Notícia Fatal Trazida pelo Cuxita',
        description: 'O segundo mensageiro, o cuxita, chega. Davi repete a mesma pergunta desesperada: "Vai bem o jovem, Absalão?". O cuxita responde com diplomacia, mas a mensagem é inconfundível: "Sejam como aquele jovem os inimigos do rei meu senhor, e todos os que se levantam contra ti para mal". A vitória do reino significou a morte do filho.'
      },
      {
        verseRef: 'v. 33',
        title: 'O Lamento Visceral do Pai',
        description: 'A reação de Davi é de dor absoluta. Ele não celebra a preservação do seu trono. Ele sobe à sala sobre a porta, chorando e gritando: "Meu filho Absalão, meu filho, meu filho, Absalão! Quem me dera que eu morrera por ti, Absalão, meu filho, meu filho!". O rei desaparece, e resta apenas o pai com o coração despedaçado.'
      }
    ],
    conclusion: 'O choro de Davi por Absalão é a imagem trágica do amor paternal que sobrevive à traição. Davi amava Absalão apesar de sua rebelião, e o seu desejo de morrer no lugar do filho ("Quem me dera que eu morrera por ti") é um eco imperfeito do coração de Deus. O que Davi desejou fazer por seu filho rebelde, Deus Pai efetivamente fez por nós: Ele enviou o Seu Filho unigênito para morrer na cruz no lugar de pecadores rebeldes (Romanos 5:8). A história também é um aviso solene sobre as consequências destrutivas do pecado na família; a espada que entrou na casa de Davi (2 Sm 12:10) cobrou um preço terrível.'
  },
  {
    id: '2sa_24_10_25',
    bookId: '2SA',
    chapter: 24,
    startVerse: 10,
    endVerse: 25,
    title: 'O Censo, a Praga e a Eira de Araúna',
    theme: 'O Orgulho, o Juízo Divino e o Sacrifício que Custa',
    introduction: 'O livro de 2 Samuel termina com um episódio intrigante e solene. Davi, movido pelo orgulho e pela confiança na força militar, ordena um censo do povo de Israel. Este ato de autossuficiência atrai a ira de Deus. Após ser confrontado pelo profeta Gade, Davi escolhe cair nas mãos misericordiosas de Deus, resultando em uma praga devastadora. A praga só é detida quando Davi compra a eira de Araúna, o jebuseu, e oferece sacrifícios. Este local não apenas marca o fim do juízo, mas torna-se o futuro local do Templo de Salomão. O texto ensina sobre o perigo do orgulho e o verdadeiro custo da adoração.',
    points: [
      {
        verseRef: 'v. 10-14',
        title: 'A Convicção do Pecado e a Escolha do Juízo',
        description: 'Após o censo, o coração de Davi "lhe bateu" (sentiu remorso). Ele confessa o seu pecado de loucura. O profeta Gade oferece três opções de juízo: sete anos de fome, três meses de fuga perante os inimigos, ou três dias de peste. Davi, conhecendo o caráter de Deus, escolhe a peste: "Caiamos nas mãos do Senhor, porque muitas são as suas misericórdias; mas nas mãos dos homens não caia eu".'
      },
      {
        verseRef: 'v. 15-17',
        title: 'A Praga e a Intercessão do Pastor',
        description: 'A peste mata 70.000 homens. Quando o Anjo estende a mão para destruir Jerusalém, o Senhor se arrepende do mal e diz: "Basta; agora retira a tua mão". O Anjo estava junto à eira de Araúna. Davi vê o Anjo e clama a Deus, assumindo a culpa como um verdadeiro pastor: "Eis que eu sou o que pequei... porém estas ovelhas que fizeram? Seja, pois, a tua mão contra mim".'
      },
      {
        verseRef: 'v. 18-25',
        title: 'O Altar na Eira e o Custo da Adoração',
        description: 'Gade ordena a Davi que levante um altar na eira de Araúna. Araúna, generosamente, oferece a terra, os bois e a lenha de graça. Mas Davi recusa a oferta gratuita com um princípio eterno de adoração: "Não, porém por certo preço to comprarei, porque não oferecerei ao Senhor meu Deus holocaustos que não me custem nada". Davi paga o preço, oferece os sacrifícios, e a praga cessa.'
      }
    ],
    conclusion: 'O censo de Davi nos adverte sobre a tentação de contar os nossos recursos e confiar na nossa própria força em vez de confiar em Deus. O orgulho sempre precede a queda e atrai a disciplina divina. No entanto, o clímax da história é a compra da eira de Araúna. A declaração de Davi — "não oferecerei a Deus algo que não me custe nada" — é o padrão ouro da verdadeira adoração. Uma religião de conveniência, que não exige sacrifício de tempo, dinheiro, conforto ou ego, não tem valor diante de Deus. A adoração verdadeira sempre custa algo. E foi exatamente neste lugar de sacrifício custoso que a ira de Deus foi apaziguada e o futuro Templo foi construído.'
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
console.log(`Added ${addedCount} new pericopes (Batch 16).`);
