const fs = require('fs');

const newPericopes = [
  {
    id: '1ki_8_22_30',
    bookId: '1KI',
    chapter: 8,
    startVerse: 22,
    endVerse: 30,
    title: 'A Oração de Dedicação do Templo',
    theme: 'A Transcendência de Deus, a Aliança e a Casa de Oração',
    introduction: 'O ápice do reinado de Salomão e de toda a história de Israel no Antigo Testamento é a construção e dedicação do Templo em Jerusalém. Em 1 Reis 8, a Arca da Aliança é trazida para o Santo dos Santos, e a glória do Senhor enche a casa. Diante de todo o povo, Salomão se coloca diante do altar, estende as mãos para o céu e profere uma das orações mais teologicamente profundas das Escrituras. Ele reconhece que Deus não pode ser contido em um edifício, mas celebra a promessa divina de ouvir as orações direcionadas àquele lugar, estabelecendo o Templo como um ponto de encontro entre a graça de Deus e a necessidade humana.',
    points: [
      {
        verseRef: 'v. 22-24',
        title: 'O Deus Incomparável e Fiel',
        description: 'Salomão começa a sua oração exaltando a singularidade de Yahweh: "não há Deus como tu, nem em cima nos céus nem em baixo na terra". Ele baseia a sua oração não no mérito de Israel, mas no caráter de Deus, que "guarda a aliança e a beneficência" aos Seus servos. Ele reconhece que a construção do Templo é o cumprimento exato da promessa feita a Davi.'
      },
      {
        verseRef: 'v. 25-27',
        title: 'A Promessa Dinástica e a Transcendência Divina',
        description: 'Salomão pede que Deus continue a cumprir a promessa de manter um descendente no trono de Davi (condicionado à obediência). Então, ele faz uma pausa teológica deslumbrante: "Mas, na verdade, habitaria Deus na terra? Eis que os céus, e até o céu dos céus, não te podem conter, quanto menos esta casa que eu edifiquei". Salomão destrói qualquer ideia pagã de que Deus poderia ser domesticado ou confinado a uma caixa de pedra.'
      },
      {
        verseRef: 'v. 28-30',
        title: 'O Templo como Ponto de Intercessão',
        description: 'Apesar da infinidade de Deus, Salomão pede que Seus olhos estejam abertos "noite e dia sobre esta casa", porque Deus prometeu: "O meu nome estará ali". O Templo não é a morada limitante de Deus, mas o local onde Ele escolheu manifestar o Seu Nome e ouvir o Seu povo. Salomão pede: "Ouve, pois... e, ouvindo, perdoa". O propósito principal do Templo era ser um lugar de perdão.'
      }
    ],
    conclusion: 'A oração de Salomão nos ensina a equilibrar a transcendência e a imanência de Deus. Ele é grande demais para ser contido pelo universo, mas amoroso o suficiente para ouvir o clamor de um pecador. O Templo de pedra foi destruído, mas a sua teologia aponta para Jesus Cristo. Jesus é o verdadeiro Templo (João 2:19-21), o lugar definitivo onde a glória de Deus e a humanidade se encontram. Hoje, não precisamos orar voltados para um edifício em Jerusalém; nós oramos em nome de Jesus, sabendo que, através dEle, o Pai nos ouve dos céus e, ouvindo, nos perdoa.'
  },
  {
    id: '1ki_8_54_61',
    bookId: '1KI',
    chapter: 8,
    startVerse: 54,
    endVerse: 61,
    title: 'A Bênção de Salomão ao Povo',
    theme: 'O Descanso Cumprido, a Presença Contínua e a Obediência de Coração',
    introduction: 'Após concluir a sua longa e profunda oração de intercessão de joelhos diante do altar, Salomão se levanta e abençoa toda a congregação de Israel em alta voz. 1 Reis 8:54-61 registra esta bênção pastoral. É um momento de celebração nacional, onde o rei lembra ao povo que Deus não falhou em nenhuma de Suas promessas desde os dias de Moisés. No entanto, a bênção não é apenas uma declaração de conforto; é também uma exortação urgente para que o povo mantenha o coração totalmente inclinado para o Senhor, pois a verdadeira segurança da nação não estava nas paredes do novo Templo, mas na obediência à Palavra de Deus.',
    points: [
      {
        verseRef: 'v. 54-56',
        title: 'A Fidelidade Absoluta de Deus',
        description: 'Salomão se levanta de sua postura de humilhação (de joelhos com as mãos estendidas) e abençoa o povo. Ele declara: "Bendito seja o Senhor, que deu repouso ao seu povo Israel... nem uma só palavra caiu de todas as suas boas palavras". O Templo é o monumento visível de que Deus cumpre o que promete. O "descanso" prometido no deserto finalmente se materializou.'
      },
      {
        verseRef: 'v. 57-59',
        title: 'O Pedido pela Presença e Inclinação do Coração',
        description: 'A bênção de Salomão é, na verdade, uma oração pelo povo: "O Senhor nosso Deus seja conosco, como foi com nossos pais; não nos desampare, e não nos deixe". Ele sabe que o Templo vazio de Deus é inútil. Ele pede que Deus "incline a si o nosso coração". A obediência não é apenas um esforço humano, mas o resultado da graça de Deus operando no coração do Seu povo.'
      },
      {
        verseRef: 'v. 60-61',
        title: 'O Testemunho às Nações e o Chamado à Integridade',
        description: 'O propósito final da bênção de Israel é missional: "Para que todos os povos da terra saibam que o Senhor é Deus, e que não há outro". A glória de Israel deveria atrair o mundo para Yahweh. Para isso, Salomão exorta: "Seja, pois, o vosso coração perfeito para com o Senhor nosso Deus". A palavra "perfeito" (shalem) significa inteiro, não dividido.'
      }
    ],
    conclusion: 'A bênção de Salomão é um lembrete poderoso de que a fidelidade de Deus no passado é a nossa garantia para o futuro. Nem uma só palavra de Deus falhou na sua vida, e nem uma só falhará. Contudo, o grande perigo que Salomão identifica (e que ele mesmo viria a sucumbir mais tarde) é o coração dividido. Não basta ter um Templo magnífico ou uma teologia correta; Deus exige um coração "perfeito", ou seja, totalmente devotado a Ele. A nossa oração diária deve ser a mesma de Salomão: "Senhor, inclina o meu coração para Ti, para que a minha vida seja um testemunho ao mundo de que só Tu és Deus".'
  },
  {
    id: '1ki_10_1_13',
    bookId: '1KI',
    chapter: 10,
    startVerse: 1,
    endVerse: 13,
    title: 'A Visita da Rainha de Sabá',
    theme: 'A Busca pela Sabedoria, o Testemunho da Glória e o Louvor a Deus',
    introduction: 'A fama da sabedoria e da riqueza de Salomão ultrapassou as fronteiras de Israel, cumprindo o propósito de Deus de que a nação fosse uma luz para os gentios. Em 1 Reis 10, a Rainha de Sabá (uma nação rica no sul da Arábia) viaja mais de 2.000 quilômetros através do deserto para testar Salomão com "enigmas" e ver com os próprios olhos se os rumores eram verdadeiros. O encontro entre a rainha pagã e o rei de Israel é um testemunho deslumbrante de como a sabedoria divina, quando manifestada na vida dos servos de Deus, atrai o mundo e resulta em glória para o Criador.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Busca pela Verdade e os Enigmas',
        description: 'A rainha ouve falar da fama de Salomão "acerca do nome do Senhor". Ela não busca apenas acordos comerciais, mas respostas para as questões profundas do seu coração. Ela chega com uma caravana imensa e "falou-lhe de tudo quanto tinha no seu coração". Salomão responde a todas as suas perguntas; nada lhe é oculto, pois a sua sabedoria vinha de Deus.'
      },
      {
        verseRef: 'v. 4-7',
        title: 'O Assombro Diante da Glória',
        description: 'A rainha observa não apenas as palavras de Salomão, mas a ordem do seu reino: a arquitetura, a comida, a organização dos servos, as vestes e os holocaustos que ele oferecia no Templo. Diante de tanta excelência, ela fica "fora de si" (sem fôlego). Ela confessa que não acreditava nos rumores, mas agora vê que "metade não me foi dita". A realidade superou a expectativa.'
      },
      {
        verseRef: 'v. 8-13',
        title: 'A Bênção aos Servos e o Louvor a Yahweh',
        description: 'A rainha declara que os servos de Salomão são felizes por estarem continuamente diante dele ouvindo a sua sabedoria. O clímax da visita é o louvor dela ao Deus de Israel: "Bendito seja o Senhor teu Deus... porquanto o Senhor ama a Israel para sempre, por isso te estabeleceu rei". Ela entrega presentes inestimáveis, e Salomão retribui com generosidade real.'
      }
    ],
    conclusion: 'A visita da Rainha de Sabá é uma imagem profética da Igreja e de Cristo. Jesus usou este episódio para repreender a incredulidade da sua geração: "A rainha do sul se levantará no juízo... porque veio dos confins da terra para ouvir a sabedoria de Salomão; e eis aqui está quem é maior do que Salomão" (Mateus 12:42). Se uma rainha pagã viajou meses pelo deserto para ouvir a sabedoria de um rei terreno, com que avidez nós deveríamos buscar as palavras de Jesus Cristo? Além disso, a história nos desafia: a ordem, a excelência e a sabedoria das nossas vidas e igrejas estão atraindo as pessoas a ponto de fazê-las louvar ao nosso Deus?'
  },
  {
    id: '1ki_11_1_13',
    bookId: '1KI',
    chapter: 11,
    startVerse: 1,
    endVerse: 13,
    title: 'A Queda de Salomão',
    theme: 'O Coração Dividido, a Sedução da Idolatria e o Juízo Divino',
    introduction: 'O capítulo 11 de 1 Reis é uma das transições mais tristes de toda a Bíblia. O homem mais sábio do mundo, que construiu o Templo e orou com tanta devoção, termina a sua vida em apostasia. A queda de Salomão não ocorreu por causa de uma invasão militar ou de um colapso econômico, mas devido a uma erosão interna e silenciosa do seu coração. Ao desobedecer ao mandamento explícito de Deus contra o casamento com mulheres de nações idólatras, Salomão permitiu que o amor romântico e as alianças políticas o afastassem da devoção exclusiva a Yahweh. A sua história é o alerta definitivo de que começar bem não garante terminar bem.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Desobediência e as Alianças Estrangeiras',
        description: 'O texto começa com um contraste sombrio: "E o rei Salomão amou muitas mulheres estrangeiras". Deus havia advertido claramente Israel para não se misturar com essas nações, "porque certamente perverterão o vosso coração para seguirdes os seus deuses". Salomão ignorou a Palavra de Deus em nome da diplomacia e do desejo, acumulando 700 esposas e 300 concubinas.'
      },
      {
        verseRef: 'v. 4-8',
        title: 'A Erosão do Coração e a Idolatria Aberta',
        description: 'O versículo 4 revela o processo da queda: "Sendo já velho, suas mulheres lhe perverteram o coração para seguir outros deuses". O coração de Salomão não era mais "perfeito" (inteiro) para com o Senhor. Ele não apenas tolerou a idolatria de suas esposas, mas participou ativamente, construindo altares (altos) para deuses abomináveis como Astarote, Quemós e Moloque, bem em frente a Jerusalém.'
      },
      {
        verseRef: 'v. 9-13',
        title: 'A Ira de Deus e a Sentença de Divisão',
        description: 'Deus se ira contra Salomão porque o seu coração se desviou do Senhor, que lhe aparecera duas vezes. A sentença é dura: "certamente rasgarei de ti este reino, e o darei a teu servo". No entanto, por amor a Davi, Deus mitiga o juízo: a divisão não ocorrerá nos dias de Salomão, mas nos dias de seu filho, e uma tribo (Judá) será deixada para a linhagem de Davi.'
      }
    ],
    conclusion: 'A tragédia de Salomão prova que a sabedoria intelectual, a riqueza e até mesmo as experiências espirituais passadas (Deus lhe apareceu duas vezes!) não são vacinas contra o pecado. O que nos protege é a guarda diária do coração. Salomão achou que poderia brincar com o fogo das alianças mundanas sem se queimar, mas o pecado é uma força sedutora que cega até os mais sábios. O seu coração dividido rasgou o reino de Israel ao meio. A lição para nós é clara: não podemos amar o mundo e a Deus ao mesmo tempo. Devemos vigiar as nossas afeições, pois aquilo que amamos acabará governando o nosso coração e ditando o nosso destino.'
  },
  {
    id: '1ki_12_1_16',
    bookId: '1KI',
    chapter: 12,
    startVerse: 1,
    endVerse: 16,
    title: 'A Divisão do Reino',
    theme: 'A Arrogância, o Mau Conselho e o Cumprimento do Juízo',
    introduction: 'Após a morte de Salomão, seu filho Roboão viaja a Siquém para ser coroado rei sobre todo o Israel. O povo, liderado por Jeroboão, apresenta uma petição justa: alívio da pesada carga de impostos e trabalho forçado impostos por Salomão. Em 1 Reis 12, Roboão enfrenta a primeira grande crise de seu reinado. A sua decisão de rejeitar o conselho dos anciãos sábios e abraçar a arrogância dos jovens inexperientes resulta no maior desastre político da história de Israel: a divisão permanente da nação em Reino do Norte (Israel) e Reino do Sul (Judá).',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Petição do Povo e o Fardo de Salomão',
        description: 'A congregação de Israel, com Jeroboão à frente, faz uma proposta clara a Roboão: "Teu pai agravou o nosso jugo; agora, pois, alivia tu a dura servidão... e nós te serviremos". Eles estavam dispostos a ser leais, desde que o rei demonstrasse compaixão e justiça. Roboão pede três dias para deliberar.'
      },
      {
        verseRef: 'v. 6-11',
        title: 'O Conflito de Conselhos: Sabedoria vs. Arrogância',
        description: 'Roboão consulta os anciãos que serviram a Salomão. O conselho deles é o princípio da liderança servidora: "Se hoje fores servo deste povo... e lhes falares boas palavras, eles serão teus servos para sempre". Roboão rejeita a sabedoria e consulta os jovens com quem cresceu. Eles aconselham a tirania e o machismo: "Meu dedo mínimo é mais grosso do que os lombos de meu pai... meu pai vos castigou com açoites, mas eu vos castigarei com escorpiões".'
      },
      {
        verseRef: 'v. 12-16',
        title: 'A Resposta Dura e a Rebelião de Israel',
        description: 'Roboão responde ao povo com as palavras duras dos jovens. O autor bíblico insere uma nota teológica crucial no versículo 15: "O rei, pois, não deu ouvidos ao povo; porque esta reviravolta vinha do Senhor, para confirmar a palavra que o Senhor tinha dito". O povo se rebela com o grito: "Que parte temos nós com Davi? Às tuas tendas, ó Israel!". O reino é rasgado.'
      }
    ],
    conclusion: 'A divisão do reino é uma aula magistral sobre os perigos da arrogância na liderança e a importância de escolhermos bem os nossos conselheiros. Roboão perdeu a maior parte do seu reino porque preferiu a demonstração de força (o conselho dos jovens) à liderança servidora (o conselho dos anciãos). Jesus ensinou exatamente o oposto de Roboão: "Quem quiser ser o maior entre vós, seja o vosso servo" (Mateus 20:26). Além disso, a história mostra a soberania de Deus agindo através da loucura humana; a arrogância de Roboão foi o instrumento que Deus usou para cumprir o juízo profetizado contra a idolatria de Salomão.'
  },
  {
    id: '1ki_12_25_33',
    bookId: '1KI',
    chapter: 12,
    startVerse: 25,
    endVerse: 33,
    title: 'Os Bezerros de Ouro de Jeroboão',
    theme: 'A Religião de Conveniência, o Medo Político e a Falsa Adoração',
    introduction: 'Deus havia prometido a Jeroboão um reino duradouro sobre as dez tribos do Norte (Israel), desde que ele andasse nos caminhos do Senhor (1 Reis 11:38). No entanto, assim que Jeroboão assume o poder, a insegurança política toma conta do seu coração. Em 1 Reis 12, temendo que as viagens anuais do povo a Jerusalém para adorar no Templo fizessem com que eles voltassem a ser leais a Roboão, Jeroboão inventa uma religião de Estado. Ele cria dois bezerros de ouro, estabelece novos sacerdotes e novas festas. Este ato de conveniência política tornou-se o "pecado de Jeroboão", que amaldiçoou o Reino do Norte até a sua destruição.',
    points: [
      {
        verseRef: 'v. 25-27',
        title: 'O Medo e o Cálculo Político',
        description: 'Jeroboão edifica cidades, mas o seu coração está cheio de medo. Ele pensa: "Se este povo subir para fazer sacrifícios na casa do Senhor, em Jerusalém, o coração deste povo se tornará a seu senhor, a Roboão". Ele não confia na promessa que Deus lhe fez. O medo de perder o poder o leva a tentar manipular a religião para fins políticos.'
      },
      {
        verseRef: 'v. 28-30',
        title: 'A Invenção dos Bezerros de Ouro',
        description: 'Jeroboão toma conselho e faz dois bezerros de ouro. Ele usa a mesma frase trágica de Arão no deserto: "Basta de subirdes a Jerusalém; eis aqui teus deuses, ó Israel, que te fizeram subir da terra do Egito". Ele coloca um em Betel (no sul) e outro em Dã (no norte), tornando a adoração mais "conveniente" e acessível. O texto declara: "E isto se tornou em pecado".'
      },
      {
        verseRef: 'v. 31-33',
        title: 'A Falsificação do Sacerdócio e das Festas',
        description: 'Para completar a sua religião falsa, Jeroboão faz "casas nos altos" e constitui sacerdotes dentre o povo comum, que não eram da tribo de Levi (violando a lei de Deus). Ele também inventa uma festa no oitavo mês, "no mês que ele tinha imaginado no seu coração", imitando a Festa dos Tabernáculos. Ele mesmo sobe ao altar para queimar incenso.'
      }
    ],
    conclusion: 'O pecado de Jeroboão é a essência da religião feita pelo homem: ela é criada para servir aos nossos próprios interesses, é baseada na conveniência ("basta de subirdes a Jerusalém") e é moldada pela imaginação do nosso próprio coração. Jeroboão tentou usar Deus para manter o seu reino, em vez de submeter o seu reino a Deus. A Igreja hoje enfrenta a mesma tentação: diluir o Evangelho, remover as exigências da cruz e criar uma adoração "conveniente" para atrair ou reter as pessoas. Mas a adoração que Deus aceita é aquela que Ele mesmo instituiu na Sua Palavra, centrada em Cristo, e não nas nossas conveniências.'
  },
  {
    id: '1ki_13_1_10',
    bookId: '1KI',
    chapter: 13,
    startVerse: 1,
    endVerse: 10,
    title: 'O Profeta de Judá e o Altar de Betel',
    theme: 'A Coragem Profética, o Juízo sobre a Falsa Religião e a Obediência Estrita',
    introduction: 'Enquanto Jeroboão está inaugurando a sua religião falsa em Betel, queimando incenso diante do bezerro de ouro, Deus envia um profeta anônimo de Judá para confrontá-lo. 1 Reis 13 narra este encontro dramático. O profeta não fala com o rei, mas profetiza diretamente contra o altar, anunciando a sua destruição futura por um rei chamado Josias (uma profecia cumprida 300 anos depois). O episódio demonstra o poder da Palavra de Deus contra a idolatria institucionalizada e a exigência divina de obediência inegociável por parte dos Seus mensageiros.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Profecia contra o Altar',
        description: 'O homem de Deus chega a Betel no exato momento em que Jeroboão está junto ao altar. Ele clama contra o altar "por ordem do Senhor", profetizando que um menino nascerá da casa de Davi, chamado Josias, que sacrificará os falsos sacerdotes sobre aquele mesmo altar. Como sinal imediato da veracidade da profecia, ele declara que o altar se fenderá e as cinzas se derramarão.'
      },
      {
        verseRef: 'v. 4-6',
        title: 'A Mão Seca e a Restauração',
        description: 'Enfurecido pela ousadia do profeta, Jeroboão estende a mão e ordena: "Prendei-o!". Imediatamente, a mão do rei seca (fica paralisada), e o altar se fende, derramando as cinzas, exatamente como profetizado. O poder do rei é inútil contra o poder de Deus. Aterrorizado, Jeroboão implora ao profeta que ore ao Senhor para restaurar a sua mão. O profeta ora, e a mão é curada, demonstrando a misericórdia de Deus mesmo no juízo.'
      },
      {
        verseRef: 'v. 7-10',
        title: 'A Recusa do Favor Real e a Obediência Estrita',
        description: 'Tentando cooptar o profeta, Jeroboão o convida para ir à sua casa, comer e receber um presente. O homem de Deus recusa categoricamente: "Ainda que me desses metade da tua casa, não iria contigo". Ele explica que Deus lhe deu uma ordem estrita: não comer pão, não beber água e não voltar pelo mesmo caminho. O profeta obedece e vai embora por outro caminho.'
      }
    ],
    conclusion: 'A história do profeta anônimo em Betel nos ensina sobre a coragem necessária para confrontar o pecado, mesmo quando ele é endossado pelo governo ou pela cultura. A Palavra de Deus não se intimida diante do poder humano (a mão estendida do rei secou). Além disso, a recusa do profeta em aceitar a recompensa do rei destaca um princípio vital: os servos de Deus não estão à venda. Não podemos aceitar os favores do mundo se isso comprometer a nossa obediência à ordem de Deus. A nossa lealdade deve ser exclusiva Àquele que nos enviou, não importando as vantagens que o sistema nos ofereça.'
  },
  {
    id: '1ki_17_1_7',
    bookId: '1KI',
    chapter: 17,
    startVerse: 1,
    endVerse: 7,
    title: 'Elias e os Corvos no Ribeiro de Querite',
    theme: 'O Confronto com a Idolatria, o Isolamento e a Provisão Sobrenatural',
    introduction: 'O Reino do Norte (Israel) atingiu o seu ponto mais baixo sob o reinado de Acabe e Jezabel, que oficializaram a adoração a Baal (o deus cananeu da chuva e da fertilidade). É neste cenário de escuridão espiritual que o profeta Elias surge abruptamente. Em 1 Reis 17, Elias confronta Acabe com uma declaração de seca, provando que Yahweh, e não Baal, controla os céus. Imediatamente após este ato de coragem pública, Deus envia Elias para o isolamento no ribeiro de Querite. Lá, Deus usa os meios mais improváveis — corvos — para sustentar o Seu servo, ensinando-lhe dependência total.',
    points: [
      {
        verseRef: 'v. 1',
        title: 'A Declaração de Seca e a Autoridade de Yahweh',
        description: 'Elias, o tisbita, apresenta-se diante do homem mais poderoso da nação e declara: "Vive o Senhor Deus de Israel, perante cuja face estou, que nestes anos nem orvalho nem chuva haverá, senão segundo a minha palavra". Esta não foi apenas uma previsão meteorológica; foi um ataque direto à teologia de Baal. Elias fecha os céus com a chave da oração (Tiago 5:17).'
      },
      {
        verseRef: 'v. 2-4',
        title: 'A Ordem de Isolamento e Esconderijo',
        description: 'Após o confronto público, a palavra do Senhor vem a Elias: "Retira-te daqui... e esconde-te junto ao ribeiro de Querite". Deus tira o Seu profeta dos holofotes e o coloca no deserto. O esconderijo servia tanto para protegê-lo da fúria de Jezabel quanto para prepará-lo espiritualmente. Deus promete: "Eu ordenei aos corvos que ali te sustentem".'
      },
      {
        verseRef: 'v. 5-7',
        title: 'A Obediência, os Corvos e o Ribeiro Seco',
        description: 'Elias obedece sem questionar. O milagre acontece diariamente: os corvos (aves impuras e carniceiras, conhecidas por não cuidarem nem dos próprios filhotes) trazem pão e carne pela manhã e à noite, e ele bebe do ribeiro. No entanto, o versículo 7 traz uma crise: "passados dias, o ribeiro se secou". A provisão de Deus mudou, mas o Seu cuidado não.'
      }
    ],
    conclusion: 'A experiência de Elias em Querite é uma escola pela qual todo servo de Deus deve passar. Antes de Deus nos usar publicamente no Monte Carmelo, Ele nos esconde no ribeiro de Querite. É no isolamento, na solidão e na dependência diária que o nosso caráter é forjado. Deus usou corvos para nos ensinar que Ele pode usar qualquer pessoa ou circunstância para nos abençoar. E quando o ribeiro seca, não devemos entrar em pânico. O ribeiro seco não é um sinal do abandono de Deus, mas o sinal de que Ele está prestes a nos dar uma nova direção e uma nova forma de provisão.'
  },
  {
    id: '1ki_17_17_24',
    bookId: '1KI',
    chapter: 17,
    startVerse: 17,
    endVerse: 24,
    title: 'A Ressurreição do Filho da Viúva',
    theme: 'A Tragédia Inexplicável, a Oração Fervorosa e o Poder sobre a Morte',
    introduction: 'Elias estava morando na casa da viúva de Sarepta, e Deus estava sustentando a ambos milagrosamente com a farinha e o azeite que não acabavam. No entanto, no meio desta provisão divina, a tragédia ataca: o filho da viúva adoece gravemente e morre. Em 1 Reis 17:17-24, vemos a crise de fé da viúva e a resposta apaixonada de Elias. Este é o primeiro registro bíblico de uma ressurreição. O episódio prova que o poder de Yahweh não se limita a controlar a chuva ou multiplicar alimentos, mas estende-se ao domínio absoluto sobre a vida e a morte.',
    points: [
      {
        verseRef: 'v. 17-18',
        title: 'A Morte do Menino e a Dor da Mãe',
        description: 'A doença do menino foi tão grave que "não ficou nele fôlego". A viúva, em seu desespero e dor, acusa Elias: "Que tenho eu contigo, homem de Deus? Vieste tu a mim para trazeres à memória a minha iniquidade, e matares a meu filho?". Ela interpreta a tragédia como um castigo divino pelos seus pecados passados, sentindo que a presença santa do profeta expôs a sua culpa.'
      },
      {
        verseRef: 'v. 19-21',
        title: 'A Oração Agonizante de Elias',
        description: 'Elias não discute com a mulher. Ele pega o menino morto, leva-o para o seu quarto e o coloca sobre a sua própria cama. Elias clama a Deus com uma honestidade brutal: "Ó Senhor meu Deus, também até a esta viúva... afligiste, matando-lhe o filho?". Ele se estende sobre o menino três vezes e ora pedindo o impossível: "Faze tornar a alma deste menino a entrar nele".'
      },
      {
        verseRef: 'v. 22-24',
        title: 'O Milagre da Vida e a Confissão de Fé',
        description: 'O Senhor ouve a voz de Elias, e a alma do menino torna a entrar nele, e ele revive. Elias desce com o menino vivo e o entrega à mãe: "Vê, teu filho vive". A reação da mulher é a culminação da história. Ela não apenas celebra a vida do filho, mas faz uma confissão de fé absoluta: "Nisto conheço agora que tu és homem de Deus, e que a palavra do Senhor na tua boca é verdade".'
      }
    ],
    conclusion: 'A morte do filho da viúva nos lembra que a presença de Deus e a provisão diária não nos isentam de tragédias e dores inexplicáveis neste mundo caído. A reação de Elias nos ensina como lidar com a crise: ele levou o problema (o menino morto) diretamente a Deus em oração fervorosa e persistente. A ressurreição do menino não apenas devolveu a alegria àquela casa, mas validou a Palavra de Deus na boca do profeta. Acima de tudo, este milagre prefigura Jesus Cristo, que não apenas ressuscitou o filho da viúva de Naim (Lucas 7), mas Ele mesmo venceu a morte, garantindo a ressurreição de todos os que nEle creem.'
  },
  {
    id: '1ki_21_1_16',
    bookId: '1KI',
    chapter: 21,
    startVerse: 1,
    endVerse: 16,
    title: 'A Vinha de Nabote',
    theme: 'A Cobiça, o Abuso de Poder e a Injustiça Patrocinada pelo Estado',
    introduction: 'O capítulo 21 de 1 Reis desvia o foco dos grandes milagres de Elias para expor a corrupção moral e o abuso de poder da monarquia de Israel. O rei Acabe deseja a vinha de um cidadão comum chamado Nabote, apenas para fazer uma horta. Quando Nabote recusa a oferta por motivos religiosos (a lei proibia a venda da herança dos pais), Acabe age como uma criança mimada. É então que a rainha Jezabel entra em cena, orquestrando um plano diabólico de falso testemunho e assassinato judicial para roubar a propriedade. A história de Nabote é um clamor contra a injustiça e a tirania.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Cobiça do Rei e a Integridade de Nabote',
        description: 'Acabe oferece dinheiro ou outra vinha pela propriedade de Nabote. Nabote recusa: "Guarde-me o Senhor de que eu te dê a herança de meus pais" (Levítico 25:23). A recusa não foi teimosia, mas obediência à lei de Deus. Acabe volta para casa desgostoso, deita-se na cama, vira o rosto para a parede e recusa-se a comer. O homem mais poderoso de Israel é escravo da sua própria cobiça.'
      },
      {
        verseRef: 'v. 5-10',
        title: 'O Plano Diabólico de Jezabel',
        description: 'Jezabel descobre o motivo da tristeza de Acabe e zomba da sua falta de autoridade: "Governas tu agora no reino de Israel?". Ela toma o selo do rei e escreve cartas aos anciãos da cidade de Nabote. O plano é perverso: proclamar um jejum (dando um ar de religiosidade), colocar Nabote em destaque e subornar duas testemunhas falsas (filhos de Belial) para acusá-lo de blasfêmia contra Deus e contra o rei.'
      },
      {
        verseRef: 'v. 11-16',
        title: 'O Assassinato Judicial e o Roubo',
        description: 'Os anciãos da cidade, covardes e submissos ao poder corrupto, executam o plano de Jezabel à risca. Nabote é falsamente acusado, levado para fora da cidade e apedrejado até a morte (junto com seus filhos, segundo 2 Reis 9:26, para eliminar os herdeiros). Ao receber a notícia, Jezabel diz a Acabe para tomar posse da vinha. Acabe levanta-se alegremente para roubar a herança do homem morto.'
      }
    ],
    conclusion: 'A história da vinha de Nabote é uma das denúncias mais fortes da Bíblia contra a corrupção sistêmica e o uso da religião para encobrir a injustiça. O décimo mandamento ("Não cobiçarás") foi quebrado por Acabe, levando à quebra do nono ("Não dirás falso testemunho") e do sexto ("Não matarás"). A passividade de Acabe foi tão culpada quanto a maldade ativa de Jezabel. Nabote morreu como um mártir da integridade, recusando-se a vender os seus princípios por dinheiro ou favor real. Deus não ignorou este crime; Ele enviou Elias para pronunciar o juízo final sobre a casa de Acabe. A justiça de Deus pode tardar aos olhos humanos, mas ela nunca falha.'
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
console.log(`Added ${addedCount} new pericopes (Batch 17).`);
