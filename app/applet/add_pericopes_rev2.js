const fs = require('fs');

const newPericopes = [
  {
    id: 'rev_12_1_12',
    bookId: 'REV',
    chapter: 12,
    startVerse: 1,
    endVerse: 12,
    title: 'A Mulher, o Menino e o Dragão',
    theme: 'O Conflito Cósmico e a Vitória pelo Sangue do Cordeiro',
    introduction: `O capítulo 12 do Apocalipse nos leva aos bastidores da história humana, revelando a guerra espiritual invisível que impulsiona os conflitos na terra. João vê "um grande sinal no céu" que descreve a hostilidade contínua de Satanás contra o povo de Deus e contra o Messias. A visão abrange desde o nascimento de Cristo até a perseguição da igreja, culminando em uma batalha celestial onde Satanás é expulso. Este texto é fundamental para entendermos que a nossa luta não é contra carne e sangue, mas contra forças espirituais, e que a nossa vitória já foi garantida na cruz.`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'Os Três Sinais: A Mulher, o Dragão e o Menino',
        description: `O Nascimento do Messias sob Ameaça. João vê uma mulher vestida do sol, com a lua debaixo dos pés e uma coroa de doze estrelas (representando o povo de Deus, Israel, de onde o Messias viria, e posteriormente a Igreja). Ela está grávida e com dores de parto. O segundo sinal é um grande dragão vermelho com sete cabeças e dez chifres (Satanás, o império do mal), que se coloca diante da mulher para devorar o seu filho assim que nascer (uma referência às tentativas de Satanás de destruir a linhagem messiânica e a tentativa de Herodes de matar o menino Jesus). A mulher dá à luz um filho varão "que há de reger todas as nações com vara de ferro" (Jesus Cristo). O filho é arrebatado para Deus e para o Seu trono (a ascensão e exaltação de Cristo), frustrando os planos do dragão.`
      },
      {
        verseRef: 'v. 6-9',
        title: 'A Guerra no Céu e a Queda do Dragão',
        description: `A Expulsão do Acusador. A mulher foge para o deserto, onde Deus a sustenta por 1.260 dias (um período simbólico que representa toda a era da igreja entre a primeira e a segunda vinda de Cristo, um tempo de provação, mas também de proteção divina). Enquanto isso, irrompe uma guerra no céu: Miguel e os seus anjos batalham contra o dragão e os seus anjos. O dragão (identificado claramente como "a antiga serpente, chamada o Diabo, e Satanás, que engana todo o mundo") é derrotado e expulso do céu para a terra. Ele perde o seu acesso a Deus como o "acusador dos nossos irmãos". A vitória no céu reflete o triunfo de Cristo na cruz.`
      },
      {
        verseRef: 'v. 10-12',
        title: 'O Cântico de Vitória e as Armas da Igreja',
        description: `A Vitória pelo Sangue e pelo Testemunho. Uma grande voz no céu celebra a vitória: "Agora é chegada a salvação, e a força, e o reino do nosso Deus, e o poder do seu Cristo". O versículo 11 é um dos mais importantes do livro, revelando como os crentes na terra vencem o dragão enfurecido: "E eles o venceram pelo sangue do Cordeiro (a base objetiva da nossa justificação, que cala as acusações de Satanás) e pela palavra do seu testemunho (a proclamação corajosa do evangelho); e não amaram as suas vidas até à morte (a disposição para o martírio)". O céu se alegra, mas a terra recebe um aviso sombrio (v. 12): "Ai dos que habitam na terra... porque o diabo desceu a vós, e tem grande ira, sabendo que já tem pouco tempo".`
      }
    ],
    conclusion: `Apocalipse 12 nos ensina que a igreja vive em um campo de batalha, alvo da fúria de um inimigo derrotado que sabe que o seu tempo é curto. No entanto, não precisamos temer. A vitória não depende da nossa força, mas das armas invencíveis que Deus nos deu: o sangue purificador de Cristo, a verdade do evangelho em nossos lábios e uma fé que ama a Cristo mais do que a própria vida.`
  },
  {
    id: 'rev_13_1_10',
    bookId: 'REV',
    chapter: 13,
    startVerse: 1,
    endVerse: 10,
    title: 'A Besta que Sobe do Mar',
    theme: 'O Poder Político Anticristão e a Perseverança dos Santos',
    introduction: `Após ser expulso do céu (capítulo 12), o dragão (Satanás) fica na areia do mar e convoca os seus agentes terrenos para perseguir a igreja. O capítulo 13 introduz duas "bestas" (monstros) que formam, junto com o dragão, uma "trindade satânica". A primeira besta, que sobe do mar, representa o poder político, militar e estatal opressivo que exige adoração e persegue o povo de Deus (historicamente o Império Romano, mas também qualquer estado totalitário ao longo da história). Este texto é um aviso sombrio sobre a corrupção do poder humano e um chamado à resistência pacífica e à fé.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Ascensão e a Autoridade da Besta',
        description: `O Império do Mal. João vê subir do mar (símbolo do caos e das nações gentílicas) uma besta com sete cabeças e dez chifres, coroada. Ela é uma combinação dos quatro animais terríveis da visão de Daniel 7 (leopardo, urso, leão e o monstro terrível), representando a totalidade do poder imperial opressivo. O dragão (Satanás) dá à besta "o seu poder, e o seu trono, e grande poderio". O estado totalitário torna-se o instrumento de Satanás na terra. Uma das cabeças da besta parece ter sido ferida de morte, mas a ferida mortal é curada (uma paródia satânica da morte e ressurreição de Cristo). O mundo inteiro se maravilha e adora o dragão e a besta, dizendo: "Quem é semelhante à besta? Quem poderá batalhar contra ela?".`
      },
      {
        verseRef: 'v. 5-8',
        title: 'A Blasfêmia e a Perseguição aos Santos',
        description: `A Guerra contra a Igreja. A besta recebe uma boca para proferir "grandes coisas e blasfêmias" contra Deus, o Seu nome e o Seu tabernáculo. A sua autoridade é limitada no tempo por Deus: "quarenta e dois meses" (o mesmo período simbólico da era da igreja). O versículo 7 descreve a realidade aterrorizante da perseguição: "E foi-lhe permitido fazer guerra aos santos, e vencê-los". Fisicamente, o império pode matar os cristãos (vencê-los na terra). A besta recebe autoridade sobre todas as nações. Todos os habitantes da terra a adorarão, com uma única e gloriosa exceção (v. 8): "aqueles cujos nomes não estão escritos no livro da vida do Cordeiro que foi morto desde a fundação do mundo". A eleição divina é a única proteção contra a idolatria estatal.`
      },
      {
        verseRef: 'v. 9-10',
        title: 'O Chamado à Perseverança e à Fé',
        description: `A Resistência Pacífica. João faz um apelo à atenção: "Se alguém tem ouvidos, ouça". Ele então profere uma palavra de advertência e encorajamento (v. 10): "Se alguém leva em cativeiro, em cativeiro irá; se alguém matar à espada, necessário é que à espada seja morto". Isso significa que os perseguidores enfrentarão a justiça divina, mas também significa que os cristãos não devem pegar em armas para lutar contra o império (como Jesus disse a Pedro no Getsêmani). A resposta da igreja à perseguição estatal não é a revolução violenta, mas o martírio paciente. João conclui: "Aqui está a paciência (perseverança) e a fé dos santos".`
      }
    ],
    conclusion: `Apocalipse 13 nos adverte que o estado e o poder político podem se tornar demoníacos quando exigem a lealdade e a adoração que pertencem apenas a Deus. A igreja não deve se surpreender quando o mundo a odeia e a persegue. A nossa vitória não é conquistada pela força política ou militar, mas pela fé inabalável no Cordeiro e pela recusa em adorar a besta, mesmo que isso nos custe a vida.`
  },
  {
    id: 'rev_14_1_5',
    bookId: 'REV',
    chapter: 14,
    startVerse: 1,
    endVerse: 5,
    title: 'Os 144.000 no Monte Sião',
    theme: 'A Pureza, a Redenção e a Adoração do Exército do Cordeiro',
    introduction: `Após a visão aterrorizante das duas bestas e da marca da besta no capítulo 13, o capítulo 14 oferece um contraste glorioso e reconfortante. João olha e vê o Cordeiro em pé no Monte Sião, acompanhado por 144.000 seguidores. Enquanto os seguidores da besta receberam a marca do monstro na testa para poderem comprar e vender, os seguidores do Cordeiro têm o nome do Pai escrito em suas testas. Esta visão não é sobre um grupo de elite exclusivo, mas uma representação simbólica de toda a igreja redimida e vitoriosa, caracterizada pela sua pureza moral e lealdade absoluta a Cristo em meio a um mundo corrupto.`,
    points: [
      {
        verseRef: 'v. 1',
        title: 'O Cordeiro e a Marca Divina',
        description: `A Segurança no Monte Sião. A visão muda da areia do mar (onde o dragão estava) para o Monte Sião celestial (o lugar da presença e do governo de Deus). O Cordeiro (Cristo) está em pé, firme e vitorioso. Com Ele estão os 144.000 (o mesmo grupo selado no capítulo 7, representando a totalidade do povo de Deus, 12 x 12 x 1000). A característica mais marcante deles é que eles têm "em suas testas escrito o nome de seu Pai" (alguns manuscritos dizem "o nome dele e o nome de seu Pai"). Em contraste com a marca da besta (que significa propriedade e lealdade ao sistema do mundo), o nome de Deus na testa significa que eles pertencem exclusivamente a Deus e estão sob a Sua proteção eterna.`
      },
      {
        verseRef: 'v. 2-3',
        title: 'O Novo Cântico Exclusivo',
        description: `A Adoração dos Redimidos. João ouve uma voz do céu, poderosa como muitas águas e grande trovão, e o som de harpistas tocando. Eles cantam um "novo cântico" diante do trono, dos quatro seres viventes e dos anciãos. O detalhe fascinante é que "ninguém podia aprender aquele cântico, senão os cento e quarenta e quatro mil que foram comprados da terra". A adoração verdadeira nasce da experiência da redenção. Os anjos podem louvar a Deus pela Sua criação e santidade, mas apenas os seres humanos que foram resgatados do pecado pelo sangue de Cristo podem cantar o cântico da salvação. É uma experiência exclusiva dos redimidos.`
      },
      {
        verseRef: 'v. 4-5',
        title: 'O Caráter dos Seguidores do Cordeiro',
        description: `Pureza, Lealdade e Verdade. João descreve o caráter moral e espiritual deste exército vitorioso. 1) "Estes são os que não estão contaminados com mulheres; porque são virgens". Isso não é uma condenação do casamento (que Deus instituiu), mas uma metáfora para a pureza espiritual; eles não cometeram adultério espiritual (idolatria) com a Babilônia ou com a besta. 2) "Estes são os que seguem o Cordeiro para onde quer que vá". Eles demonstram obediência e discipulado incondicionais, seja para a glória ou para o sofrimento. 3) Eles foram "comprados dentre os homens para serem as primícias (os primeiros frutos) para Deus e para o Cordeiro". 4) "E na sua boca não se achou engano; porque são irrepreensíveis diante do trono de Deus". Em um mundo dominado pelas mentiras da besta, eles falam a verdade do evangelho.`
      }
    ],
    conclusion: `A visão dos 144.000 no Monte Sião nos lembra que a verdadeira marca do cristão não é apenas o que ele diz, mas a quem ele pertence e como ele vive. Em um mundo que exige compromisso e adoração a falsos deuses, somos chamados a manter a nossa pureza espiritual, a falar a verdade sem engano e a seguir o Cordeiro incondicionalmente, sabendo que fomos comprados por um alto preço para sermos a propriedade exclusiva de Deus.`
  },
  {
    id: 'rev_19_6_10',
    bookId: 'REV',
    chapter: 19,
    startVerse: 6,
    endVerse: 10,
    title: 'As Bodas do Cordeiro',
    theme: 'A Celebração Final e a União Eterna entre Cristo e a Igreja',
    introduction: `O capítulo 19 do Apocalipse marca o clímax da história da redenção. Após a descrição detalhada da queda e destruição da "Babilônia" (o sistema mundial corrupto, idólatra e sedutor que se opõe a Deus) nos capítulos 17 e 18, o céu irrompe em um louvor ensurdecedor. O luto e a opressão da terra dão lugar a um coro de "Aleluias". Os versículos 6 a 10 descrevem o evento mais aguardado de toda a eternidade: as Bodas do Cordeiro. Esta é a consumação do romance divino, onde a Igreja, purificada e preparada, é finalmente e eternamente unida ao seu Noivo, Jesus Cristo.`,
    points: [
      {
        verseRef: 'v. 6-7',
        title: 'O Coro Celestial e o Anúncio das Bodas',
        description: `A Alegria da Consumação. João ouve uma voz que soa como uma grande multidão, como muitas águas e como fortes trovões (a totalidade do céu em uníssono) gritando: "Aleluia! pois já o Senhor Deus Todo-Poderoso reina". O reino de Deus, que sempre existiu, agora é manifestado de forma plena e incontestável com a destruição do mal. O motivo da alegria suprema é anunciado no versículo 7: "Regozijemo-nos, e alegremo-nos, e demos-lhe glória; porque vindas são as bodas do Cordeiro, e já a sua esposa se aprontou". A história humana não termina em um desastre cósmico, mas em uma festa de casamento. A "esposa" é a Igreja (todos os redimidos), que finalmente está pronta para a união perfeita com Cristo.`
      },
      {
        verseRef: 'v. 8',
        title: 'O Vestido da Noiva: A Graça e as Obras',
        description: `O Linho Fino e as Justiças dos Santos. O versículo 8 descreve a preparação da noiva: "E foi-lhe dado que se vestisse de linho fino, puro e resplandecente". O vestido de noiva não é uma conquista humana, mas um presente da graça ("foi-lhe dado"). A pureza da igreja é o resultado do sangue purificador de Cristo. No entanto, João adiciona uma explicação vital: "porque o linho fino são as justiças (ou atos justos) dos santos". Há uma bela harmonia aqui: a salvação é um dom gratuito de Deus, mas esse dom inevitavelmente produz uma vida de obediência e boas obras. Os atos justos dos crentes na terra (o seu amor, serviço e fidelidade sob perseguição) formam o tecido do vestido de noiva que eles usarão na eternidade.`
      },
      {
        verseRef: 'v. 9-10',
        title: 'O Convite e o Foco da Adoração',
        description: `A Bem-Aventurança e o Espírito da Profecia. Um anjo ordena a João que escreva a quarta bem-aventurança do livro: "Bem-aventurados aqueles que são chamados à ceia das bodas do Cordeiro". Ser convidado para este banquete é a maior honra do universo. O anjo confirma: "Estas são as verdadeiras palavras de Deus". João, sobrecarregado pela glória da revelação, comete um erro: ele cai aos pés do anjo para adorá-lo. O anjo o repreende imediatamente: "Olha, não faças tal; sou teu conservo... Adora a Deus". O anjo explica o motivo: "porque o testemunho de Jesus é o espírito da profecia". O propósito de toda profecia bíblica, e de todo o livro do Apocalipse, não é exaltar anjos ou satisfazer a curiosidade sobre o futuro, mas apontar para Jesus Cristo e glorificá-Lo.`
      }
    ],
    conclusion: `A visão das Bodas do Cordeiro é a nossa maior esperança. Ela nos lembra que o sofrimento presente, a luta contra o pecado e a perseguição do mundo são temporários. Estamos nos preparando para um casamento. Cada ato de obediência e fidelidade a Cristo hoje é um fio tecido no nosso vestido de noiva. A nossa jornada não termina na morte, mas no banquete eterno do amor de Deus.`
  },
  {
    id: 'rev_19_11_16',
    bookId: 'REV',
    chapter: 19,
    startVerse: 11,
    endVerse: 16,
    title: 'O Cavaleiro do Cavalo Branco',
    theme: 'O Retorno Triunfal de Cristo para Julgar e Guerrear',
    introduction: `Após o anúncio das Bodas do Cordeiro, o céu se abre para revelar o evento mais dramático da história escatológica: a Segunda Vinda de Jesus Cristo. Na Sua primeira vinda, Jesus entrou em Jerusalém montado em um jumentinho, símbolo de humildade e paz, vindo para sofrer e morrer pelos pecados. Agora, em Apocalipse 19, Ele retorna montado em um cavalo branco, o símbolo romano do general conquistador. Ele não vem mais como uma vítima, mas como o Rei dos reis e Senhor dos senhores, vindo para executar a justiça final, destruir o império do mal e estabelecer o Seu reino na terra.`,
    points: [
      {
        verseRef: 'v. 11-13',
        title: 'A Identidade e a Aparência do Conquistador',
        description: `Fiel, Verdadeiro e o Verbo de Deus. João vê o céu aberto e um cavalo branco. O cavaleiro é chamado de "Fiel e Verdadeiro" (em contraste com as mentiras e enganos da besta e do falso profeta). O Seu propósito é claro: "julga e peleja com justiça". A guerra de Cristo não é como as guerras humanas, motivadas por ganância ou orgulho; é a execução perfeita da justiça divina. A Sua aparência é aterrorizante para os Seus inimigos: "Os seus olhos eram como chama de fogo" (Ele vê tudo e julga os corações) e na Sua cabeça há "muitos diademas" (coroas reais, indicando soberania absoluta sobre todos os reinos da terra). Ele tem um nome escrito que só Ele conhece (a insondabilidade da Sua natureza divina). Ele está vestido com uma veste "salpicada de sangue" (o sangue dos Seus inimigos no julgamento, cf. Isaías 63:1-3, ou o Seu próprio sangue redentor). O Seu nome é "A Palavra (o Verbo) de Deus".`
      },
      {
        verseRef: 'v. 14-15',
        title: 'O Exército Celestial e as Armas do Julgamento',
        description: `A Espada da Boca e o Lagar da Ira. O Cavaleiro não está sozinho; Ele é seguido pelos "exércitos que há no céu" (anjos e santos glorificados), montados em cavalos brancos e vestidos de linho fino e puro. Curiosamente, o exército não carrega armas. A única arma mencionada está com o Cavaleiro: "E da sua boca saía uma aguda espada, para ferir com ela as nações". Cristo não precisa de bombas ou mísseis; a Palavra que falou o universo à existência é a mesma Palavra que destruirá os Seus inimigos. Ele as "regerá com vara de ferro" (cumprindo o Salmo 2) e Ele mesmo "pisa o lagar do vinho do furor e da ira do Deus Todo-Poderoso" (uma imagem terrível do julgamento final e absoluto sobre o pecado).`
      },
      {
        verseRef: 'v. 16',
        title: 'O Título Supremo',
        description: `Rei dos Reis e Senhor dos Senhores. A visão culmina com a revelação do título supremo de Cristo, escrito na Sua veste e na Sua coxa (onde a espada de um guerreiro normalmente ficaria, ou em um lugar de destaque visível a todos): "REI DOS REIS, E SENHOR DOS SENHORES". Este título era frequentemente reivindicado por imperadores humanos arrogantes (como os césares romanos), mas pertence exclusivamente a Jesus. Ele é o soberano final sobre toda autoridade política, militar e espiritual do universo. Nenhum poder humano ou demoníaco pode resistir ao Seu avanço.`
      }
    ],
    conclusion: `A visão do Cavaleiro do cavalo branco é o terror dos ímpios e o grande conforto da igreja. Ela nos garante que o mal, a injustiça e a opressão não terão a última palavra na história. Jesus Cristo voltará para consertar todas as coisas, julgar o pecado com justiça perfeita e estabelecer o Seu reino eterno. A nossa esperança não está em soluções políticas, mas no retorno do Rei dos reis.`
  },
  {
    id: 'rev_20_1_6',
    bookId: 'REV',
    chapter: 20,
    startVerse: 1,
    endVerse: 6,
    title: 'A Prisão de Satanás e o Milênio',
    theme: 'A Vitória dos Mártires e o Reinado com Cristo',
    introduction: `O capítulo 20 do Apocalipse é um dos textos mais debatidos de toda a Bíblia, sendo a base para as diferentes visões escatológicas (Amilenismo, Pré-milenismo e Pós-milenismo). Após a destruição da besta e do falso profeta no capítulo 19, João descreve o destino do dragão (Satanás). Ele vê um anjo prender Satanás por "mil anos" (o Milênio), durante os quais os santos martirizados ressuscitam e reinam com Cristo. Independentemente da interpretação cronológica exata (se os mil anos são literais ou simbólicos, presentes ou futuros), a mensagem central do texto é clara: Satanás será contido, e aqueles que sofreram por Cristo serão vindicados e reinarão com Ele.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Prisão e a Limitação de Satanás',
        description: `O Abismo e o Selo. João vê um anjo descer do céu com a chave do abismo e uma grande cadeia. O anjo prende o "dragão, a antiga serpente, que é o Diabo e Satanás" e o amarra por mil anos. Ele é lançado no abismo, que é fechado e selado. O propósito desta prisão é muito específico (v. 3): "para que não mais engane as nações, até que os mil anos se acabem". (Na visão amilenista, isso representa a atual era da igreja, onde o poder de Satanás de impedir a propagação global do evangelho foi quebrado pela cruz. Na visão pré-milenista, isso é um reino literal futuro na terra após a segunda vinda). Em ambas as visões, o texto afirma que o poder de Satanás é limitado e controlado por Deus.`
      },
      {
        verseRef: 'v. 4',
        title: 'A Vindicação e o Reinado dos Mártires',
        description: `Os Tronos e as Almas. João vê tronos e aqueles que se assentam neles recebem autoridade para julgar. Ele foca especificamente nas "almas daqueles que foram degolados pelo testemunho de Jesus e pela palavra de Deus, e que não adoraram a besta, nem a sua imagem, e não receberam o sinal em suas testas nem em suas mãos". Estes são os crentes que pagaram o preço máximo pela sua fidelidade (os mártires do capítulo 6 e 13). O mundo os julgou e os executou como criminosos, mas agora a situação se inverte: eles "viveram, e reinaram com Cristo durante mil anos". A morte não foi uma derrota para eles; foi a porta de entrada para o reinado celestial.`
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Primeira Ressurreição e a Segunda Morte',
        description: `A Bem-Aventurança dos Santos. João chama essa experiência de vida e reinado de "a primeira ressurreição" (os restantes dos mortos não revivem até o fim dos mil anos). O versículo 6 pronuncia a quinta bem-aventurança do livro: "Bem-aventurado e santo aquele que tem parte na primeira ressurreição". A grande promessa para esses crentes é dupla: 1) "sobre estes não tem poder a segunda morte" (eles estão eternamente seguros do lago de fogo e do julgamento final); 2) "mas serão sacerdotes de Deus e de Cristo, e reinarão com ele mil anos". Eles desfrutam de acesso íntimo a Deus (sacerdotes) e autoridade delegada (reis).`
      }
    ],
    conclusion: `O texto do Milênio, por mais debatido que seja, oferece uma promessa inabalável: o sofrimento por Cristo sempre resulta em glória. Satanás é um inimigo acorrentado cujo fim já está decretado. Aqueles que recusam os compromissos com o mundo e permanecem fiéis a Jesus, mesmo diante da morte, não são perdedores; eles são os verdadeiros reis e sacerdotes que compartilharão o triunfo eterno do seu Senhor.`
  },
  {
    id: 'rev_20_11_15',
    bookId: 'REV',
    chapter: 20,
    startVerse: 11,
    endVerse: 15,
    title: 'O Julgamento do Grande Trono Branco',
    theme: 'A Justiça Final, os Livros e o Destino Eterno',
    introduction: `O final do capítulo 20 do Apocalipse descreve o evento mais solene e aterrorizante de toda a história humana: o Julgamento Final. Após a derrota definitiva de Satanás, João vê um grande trono branco e Aquele que está assentado nele. Toda a humanidade que morreu sem Cristo, desde o início dos tempos, é ressuscitada e convocada a comparecer diante deste tribunal cósmico. Não há advogados de defesa, não há recursos e não há esconderijo. O destino eterno de cada pessoa é determinado com justiça perfeita, baseado nos registros das suas obras e, crucialmente, na presença ou ausência do seu nome no Livro da Vida.`,
    points: [
      {
        verseRef: 'v. 11',
        title: 'A Majestade e a Pureza do Juiz',
        description: `O Grande Trono Branco. João vê "um grande trono branco". O tamanho indica a autoridade suprema e universal do tribunal; a cor branca simboliza a pureza absoluta, a santidade e a justiça perfeita do Juiz (Jesus Cristo, a quem o Pai confiou todo o julgamento, João 5:22). A presença do Juiz é tão avassaladora e santa que "de cuja presença fugiu a terra e o céu; e não se achou lugar para eles". A velha criação, manchada pelo pecado, não pode suportar a presença da santidade desvelada de Deus e se desfaz (preparando o caminho para os novos céus e nova terra). Não há lugar no universo onde o pecador possa se esconder deste julgamento.`
      },
      {
        verseRef: 'v. 12-13',
        title: 'A Ressurreição Universal e a Abertura dos Livros',
        description: `O Julgamento pelas Obras. João vê "os mortos, grandes e pequenos" (reis e escravos, ricos e pobres, ninguém está isento) em pé diante do trono. O mar, a morte e o inferno (Hades) entregam os mortos que neles havia; é uma ressurreição física universal para o julgamento. Então, "abriram-se os livros". Estes livros contêm o registro detalhado e onisciente de cada pensamento, palavra e ação de cada pessoa. "E os mortos foram julgados pelas coisas que estavam escritas nos livros, segundo as suas obras". A justiça de Deus será perfeitamente proporcional às obras de cada um. Como ninguém pode ser justificado pelas suas próprias obras (pois todos pecaram), os livros das obras servem apenas para confirmar a condenação justa.`
      },
      {
        verseRef: 'v. 14-15',
        title: 'O Livro da Vida e a Segunda Morte',
        description: `O Único Caminho de Escape. A morte e o inferno (os grandes inimigos da humanidade) são lançados no "lago de fogo" (a destruição final e eterna do próprio conceito de morte). João define o lago de fogo como "a segunda morte" (a separação consciente e eterna de Deus). O versículo 15 revela o critério final e absoluto para a salvação: "E aquele que não foi achado escrito no livro da vida foi lançado no lago de fogo". Outro livro é aberto: o Livro da Vida do Cordeiro. A única maneira de escapar da condenação dos "livros das obras" é ter o nome escrito no "Livro da Vida" pela graça de Deus, através da fé no sacrifício de Jesus Cristo. A salvação não é baseada no nosso currículo de boas obras, mas na obra de Cristo creditada a nós.`
      }
    ],
    conclusion: `O Julgamento do Grande Trono Branco é a garantia de que a justiça final será feita no universo. Nenhum pecado ficará impune. Este texto destrói a ilusão de que podemos nos salvar pelas nossas próprias boas obras, pois os livros das nossas obras apenas nos condenam. A nossa única esperança neste dia terrível é que o nosso nome esteja escrito no Livro da Vida do Cordeiro, não pelos nossos méritos, mas pela Sua maravilhosa graça.`
  },
  {
    id: 'rev_21_9_27',
    bookId: 'REV',
    chapter: 21,
    startVerse: 9,
    endVerse: 27,
    title: 'A Nova Jerusalém',
    theme: 'A Glória, a Pureza e a Presença de Deus na Cidade Celestial',
    introduction: `Após a visão da criação dos Novos Céus e Nova Terra, um dos anjos que tinha as sete taças do julgamento convida João para ver "a noiva, a esposa do Cordeiro". O que João vê não é uma mulher humana, mas uma cidade deslumbrante: a Nova Jerusalém, descendo do céu da parte de Deus. Esta cidade é a representação simbólica da Igreja glorificada e da habitação eterna de Deus com o Seu povo. A descrição detalhada da cidade, com as suas medidas perfeitas, pedras preciosas e luz inextinguível, não tem o objetivo de nos dar um mapa arquitetônico literal, mas de comunicar verdades teológicas profundas sobre a segurança, a beleza, a santidade e a comunhão perfeita da eternidade.`,
    points: [
      {
        verseRef: 'v. 9-14',
        title: 'A Estrutura e os Fundamentos da Cidade',
        description: `A Unidade do Povo de Deus. A cidade tem a "glória de Deus" e brilha como uma pedra preciosíssima (jaspe cristalino). Ela é cercada por um muro grande e alto (simbolizando segurança absoluta e separação do mal). O muro tem doze portas, guardadas por doze anjos, com os nomes das doze tribos de Israel escritos nelas. O muro tem doze fundamentos, com os nomes dos doze apóstolos do Cordeiro escritos neles. Esta arquitetura simbólica mostra que a Nova Jerusalém é a consumação de todo o plano redentor de Deus, unindo os santos do Antigo Testamento (Israel) e do Novo Testamento (a Igreja) em uma única e gloriosa habitação.`
      },
      {
        verseRef: 'v. 15-21',
        title: 'As Medidas Perfeitas e a Beleza Incomparável',
        description: `O Santo dos Santos Cósmico. O anjo mede a cidade com uma cana de ouro. A cidade é um cubo perfeito: o seu comprimento, largura e altura são iguais (doze mil estádios, cerca de 2.200 km). No Antigo Testamento, o único lugar que era um cubo perfeito era o Santo dos Santos no tabernáculo e no templo, o lugar da presença direta de Deus. João está dizendo que toda a Nova Jerusalém é o Santo dos Santos; a presença de Deus não está mais restrita a uma sala, mas preenche toda a cidade. Os materiais da cidade (ouro puro como vidro transparente, muros de jaspe, fundamentos adornados com doze tipos de pedras preciosas, portas de pérolas maciças) simbolizam a pureza imaculada, o valor incalculável e a beleza transcendente da vida eterna.`
      },
      {
        verseRef: 'v. 22-27',
        title: 'A Presença Direta e a Pureza Absoluta',
        description: `O Cordeiro é o Templo e a Luz. O detalhe mais surpreendente da cidade é o que está ausente (v. 22): "E nela não vi templo, porque o seu templo é o Senhor Deus Todo-Poderoso, e o Cordeiro". Não há necessidade de um edifício religioso ou de rituais para mediar a presença de Deus, porque a comunhão com Deus e com Cristo é direta, contínua e face a face. A cidade também não precisa de sol nem de lua, "porque a glória de Deus a tem iluminado, e o Cordeiro é a sua lâmpada". As nações andarão na sua luz, e os reis trarão a sua glória para ela (a redenção da cultura humana). As portas nunca se fecham (segurança total e paz). O capítulo termina com um aviso de pureza (v. 27): nada contaminado ou mentiroso entrará nela, mas "somente os que estão inscritos no livro da vida do Cordeiro".`
      }
    ],
    conclusion: `A visão da Nova Jerusalém é o destino final de todo crente. É uma promessa de que a nossa eternidade não será uma existência etérea flutuando em nuvens, mas uma vida vibrante, bela e segura em uma comunidade perfeita (a cidade). O maior tesouro do céu não são as ruas de ouro ou as portas de pérola, mas a presença não mediada de Deus e do Cordeiro, que iluminarão a nossa existência para todo o sempre.`
  },
  {
    id: 'rev_22_1_5',
    bookId: 'REV',
    chapter: 22,
    startVerse: 1,
    endVerse: 5,
    title: 'O Rio da Água da Vida e a Árvore da Vida',
    theme: 'A Restauração do Éden e a Visão de Deus',
    introduction: `Os primeiros cinco versículos do capítulo 22 concluem a visão da Nova Jerusalém e representam o clímax de toda a Bíblia. A história da redenção, que começou com a perda do paraíso no livro de Gênesis, termina com a restauração e a exaltação do paraíso no livro do Apocalipse. O que foi perdido por Adão e Eva devido ao pecado é restaurado e superado por Jesus Cristo. João descreve uma cena de vida abundante, cura perfeita e, acima de tudo, a comunhão íntima e ininterrupta com o Criador, onde a maldição do pecado é finalmente e eternamente removida.`,
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Fonte da Vida e a Cura das Nações',
        description: `O Rio e a Árvore. O anjo mostra a João "um rio puro da água da vida, claro como cristal". Este rio não nasce de uma fonte natural, mas "procedia do trono de Deus e do Cordeiro". A vida eterna e a pureza fluem diretamente da soberania de Deus e do sacrifício de Cristo. No meio da praça da cidade, de ambos os lados do rio, está a "árvore da vida" (a mesma árvore da qual a humanidade foi banida em Gênesis 3). Esta árvore é incrivelmente frutífera, produzindo doze frutos diferentes, um para cada mês (simbolizando provisão constante e inesgotável). As folhas da árvore servem "para a saúde (cura) das nações". O céu não é apenas um lugar de vida, mas o lugar onde todas as feridas, divisões e doenças da história humana são perfeitamente curadas.`
      },
      {
        verseRef: 'v. 3',
        title: 'O Fim da Maldição e o Serviço Perfeito',
        description: `A Remoção do Pecado. O versículo 3 contém uma das maiores promessas da Bíblia: "E ali nunca mais haverá maldição". A maldição pronunciada no Éden (dor, suor, espinhos, morte e separação de Deus) é totalmente erradicada. O pecado e as suas consequências não existem mais. O trono de Deus e do Cordeiro estará na cidade, "e os seus servos o servirão". O céu não é um lugar de tédio ou inatividade, mas um lugar de serviço alegre, perfeito e sem cansaço. Serviremos a Deus com as nossas capacidades plenas, sem a interferência do pecado ou da fraqueza física.`
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Visão Beatífica e o Reinado Eterno',
        description: `Ver a Face de Deus. O versículo 4 descreve o maior privilégio da eternidade: "E verão o seu rosto, e nas suas testas estará o seu nome". No Antigo Testamento, ver a face de Deus significava morte para o pecador (Êxodo 33:20). Mas agora, purificados pelo sangue do Cordeiro, os redimidos experimentarão a "visão beatífica" (a comunhão direta, íntima e sem véus com o próprio Deus). O nome de Deus em suas testas indica propriedade e semelhança perfeita com Ele (1 João 3:2). Não haverá mais noite, nem necessidade de lâmpada ou sol, "porque o Senhor Deus os ilumina". A passagem culmina com a promessa do nosso destino real: "e reinarão para todo o sempre". A humanidade é restaurada ao seu propósito original de governar a criação em submissão a Deus.`
      }
    ],
    conclusion: `Apocalipse 22:1-5 é a resposta de Deus a todos os anseios do coração humano. Nós fomos criados para a vida, para a cura, para o propósito e, acima de tudo, para Deus. O fim da história bíblica nos garante que a dor e a maldição deste mundo são temporárias. O nosso destino final é um Éden restaurado, onde beberemos da água da vida, serviremos ao nosso Rei com alegria e, finalmente, olharemos para o rosto dAquele que nos amou e nos salvou.`
  },
  {
    id: 'rev_22_12_21',
    bookId: 'REV',
    chapter: 22,
    startVerse: 12,
    endVerse: 21,
    title: 'O Convite Final e a Conclusão',
    theme: 'A Urgência do Retorno de Cristo e o Apelo à Graça',
    introduction: `Os versículos finais do Apocalipse (e de toda a Bíblia) formam um epílogo de profunda urgência e convite gracioso. Após revelar os mistérios do futuro, o julgamento dos ímpios e a glória da Nova Jerusalém, Jesus Cristo fala diretamente à Sua igreja. Ele reitera a promessa do Seu retorno iminente, estabelece a autoridade final da Sua Palavra e estende um último e apaixonado convite de salvação a todos os que têm sede. O livro termina não com uma ameaça, mas com uma oração por graça e com o clamor da igreja pelo retorno do seu Noivo.`,
    points: [
      {
        verseRef: 'v. 12-15',
        title: 'A Recompensa Iminente e a Separação Eterna',
        description: `O Alfa e o Ômega. Jesus declara: "E eis que cedo venho, e o meu galardão está comigo, para dar a cada um segundo a sua obra". O retorno de Cristo trará a recompensa justa para a fidelidade dos santos. Ele reafirma a Sua divindade absoluta: "Eu sou o Alfa e o Ômega, o princípio e o fim, o primeiro e o derradeiro". A sexta bem-aventurança do livro é pronunciada sobre "aqueles que lavam as suas vestiduras no sangue do Cordeiro" (a base da salvação), para que tenham direito à árvore da vida e possam entrar na cidade. Em forte contraste, o versículo 15 descreve os que ficam "de fora" (no lago de fogo): os cães (impuros), feiticeiros, impuros, homicidas, idólatras e os que amam e praticam a mentira. A separação entre os redimidos e os rebeldes será final e eterna.`
      },
      {
        verseRef: 'v. 16-17',
        title: 'A Estrela da Manhã e o Grande Convite',
        description: `Vem e Bebe. Jesus autentica a mensagem: "Eu, Jesus, enviei o meu anjo, para vos testificar estas coisas nas igrejas". Ele se identifica como "a raiz e a geração de Davi" (o cumprimento das promessas messiânicas do Antigo Testamento) e "a resplandecente estrela da manhã" (Aquele que anuncia o amanhecer do novo dia eterno). O versículo 17 é o grande convite evangelístico final da Bíblia. O Espírito Santo e a Esposa (a Igreja) dizem: "Vem". Quem ouve a mensagem deve ecoar o convite: "Vem". E o convite é estendido a toda a humanidade: "E quem tem sede, venha; e quem quiser, tome de graça da água da vida". A salvação é um dom gratuito e abundante para todos os que reconhecem a sua sede espiritual e vêm a Cristo.`
      },
      {
        verseRef: 'v. 18-21',
        title: 'O Selo da Palavra e a Oração Final',
        description: `A Integridade da Escritura e o Maranata. João profere um aviso solene contra qualquer pessoa que tentar alterar a Palavra de Deus (v. 18-19). Se alguém acrescentar algo à profecia, Deus lhe acrescentará as pragas do livro; se alguém tirar algo, Deus tirará a sua parte do Livro da Vida e da Cidade Santa. A Palavra de Deus é completa, suficiente e não deve ser adulterada. No versículo 20, Jesus faz a Sua última promessa: "Certamente cedo venho". A resposta de João é a oração que deve estar nos lábios de todo crente (o "Maranata" da igreja primitiva): "Amém. Ora vem, Senhor Jesus". A Bíblia inteira termina com uma bênção (v. 21): "A graça de nosso Senhor Jesus Cristo seja com todos vós. Amém".`
      }
    ],
    conclusion: `O livro do Apocalipse termina nos lembrando que a história está caminhando rapidamente para um encontro com Jesus Cristo. O Seu retorno é certo e iminente. Diante desta realidade, a Bíblia nos deixa com duas respostas fundamentais: para os que ainda não creem, um convite urgente para beberem de graça da água da vida; e para a igreja, uma oração apaixonada e cheia de esperança: "Vem, Senhor Jesus!".`
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
  console.log('Successfully added 10 more new pericopes for Revelation.');
} else {
  console.error('Could not find the end of the pericopes array.');
}
