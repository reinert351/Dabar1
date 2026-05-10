export interface EschatologyTopic {
    id: string;
    title: string;
    description: string;
    refs: string[];
    views: {
        dispensational: string;
        historical: string;
        amillennial: string;
        postmillennial: string;
    };
}

export const ESCHATOLOGY_DATA: EschatologyTopic[] = [
    {
        id: "millennium",
        title: "O Milênio (Apocalipse 20)",
        description: "Os 1.000 anos mencionados em Apocalipse 20, descritos como um tempo em que Satanás é preso e os santos reinam com Cristo. É o epicentro do debate escatológico.",
        refs: ["REV 20:1-6", "ISA 11:6-9", "ISA 65:20-25", "2PE 3:8"],
        views: {
            dispensational: "Um reinado teocrático literal de 1.000 anos na Terra após a parousia. Cristo ocupará o trono físico de Davi em Jerusalém. Durante este tempo, o sistema de sacrifícios memoriais é restaurado no Templo e Israel exerce primazia sobre as nações gentílicas. É o cumprimento final e incondicional da Aliança Abraâmica e Davídica em sua forma original.",
            historical: "Cristo retornará para estabelecer um reino terrestre visível por 1.000 anos antes da ressurreição final e do juízo. Diferente do dispensacionalismo, não enfatiza uma distinção rígida entre Israel e a Igreja, vendo o milênio como o triunfo visível da Igreja de Cristo sobre o mal na história terrena, onde os mártires e fiéis governam com o Cordeiro.",
            amillennial: "O 'milênio' não é um período cronológico futuro, mas a presente era entre o primeiro e o segundo advento de Cristo. O número '1.000' é simbólico de completude divina. Cristo reina agora do céu e através da Sua Igreja. Satanás foi 'preso' no sentido de não poder mais enganar as nações para impedir a propagação do Evangelho (Mt 12:29).",
            postmillennial: "O Milênio é uma era de ouro de justiça e paz que surge gradualmente nesta era através da influência transformadora do Evangelho e da Grande Comissão. Não requer um retorno físico de Cristo para começar, mas termina com Sua vinda. A Igreja é o instrumento do Reino que subjugará o mal social e político antes da parousia final."
        }
    },
    {
        id: "tribulation",
        title: "A Grande Tribulação",
        description: "Um período de angústia sem precedentes mencionado por Jesus no Sermão Profético e detalhado nos selos, trombetas e taças do Apocalipse.",
        refs: ["MAT 24:21", "DAN 12:1", "REV 7:14", "1TH 5:3"],
        views: {
            dispensational: "Um período escatológico de 7 anos (a 'Setuagésima Semana de Daniel') que ocorre após o Arrebatamento da Igreja. É marcada pelo governo do Anticristo e pelos juízos diretos de Deus. A Igreja está ausente, e o foco divino volta-se para a purificação de Israel e o julgamento das nações rebeldes que perseguem o remanescente judeu.",
            historical: "A Igreja passará pela Grande Tribulação como um teste final de fidelidade e purificação. O povo de Deus enfrentará a perseguição do Anticristo, mas será preservado da 'ira vindoura' de Deus que cairá sobre os ímpios. O retorno de Cristo ocorre no clímax desse período, destruindo o Iníquo e resgatando os santos sobreviventes.",
            amillennial: "A 'tribulação' é constante para a Igreja ao longo de toda a sua história (Jo 16:33). Embora possa haver um aumento de intensidade e uma manifestação final do mal antes da vinda de Cristo, as visões do Apocalipse são vistas como ciclos repetitivos de oposição e vitória espiritual que ocorrem simultaneamente à pregação do Evangelho.",
            postmillennial: "Muitos adotam o 'Preterismo Parcial', vendo a Grande Tribulação como um evento cumprido no século I, especificamente no cerco de Jerusalém e na destruição do Templo em 70 d.C. Para eles, Mateus 24 descreve o fim da 'Era Judaica' e não o fim do mundo físico, permitindo que a Igreja prossiga em sua missão expansiva sem essa barreira futura."
        }
    },
    {
        id: "rapture",
        title: "O Arrebatamento e a Parousia",
        description: "O evento de encontro dos crentes com o Senhor nos ares, envolvendo a transformação dos corpos e a reunião com os mortos em Cristo.",
        refs: ["1TH 4:13-17", "1CO 15:51-54", "MAT 24:40-41"],
        views: {
            dispensational: "Crença no 'Arrebatamento Pré-Tribulacional'. Cristo vem 'para' os Seus santos secretamente antes dos 7 anos de tribulação. Sete anos depois, Ele vem 'com' os Seus santos em uma vinda visível e gloriosa. Há dois estágios distintos na segunda vinda, separando a Igreja do destino de Israel na terra.",
            historical: "Crença no 'Arrebatamento Pós-Tribulacional'. A vinda de Cristo é um único evento dramático e público. A Igreja é levada ao encontro do Senhor nos ares (apantesis) e imediatamente O acompanha em Sua descida triunfal à Terra para estabelecer o Reino Milenar. O arrebatamento e a aparição gloriosa são o mesmo evento.",
            amillennial: "O arrebatamento coincide com a única segunda vinda final, a ressurreição geral e o juízo. É o encerramento definitivo da história linear. Não há 'fases' ou intervalos de mil anos após este evento. A transformação dos crentes sinaliza a transição direta para o estado eterno e a renovação de todas as coisas.",
            postmillennial: "Idêntico ao amilenismo no que diz respeito ao tempo. O arrebatamento ocorre no fim da era de ouro (fim do mundo), simultaneamente à ressurreição dos justos e injustos e à conflagração final que purifica a criação para os novos céus e nova terra."
        }
    },
    {
        id: "israel_church",
        title: "O Mistério de Israel e a Igreja",
        description: "A relação teológica entre o Israel do Antigo Testamento e a Igreja neotestamentária no plano redentor de Deus.",
        refs: ["ROM 9-11", "GAL 3:28-29", "EPH 2:11-22", "1PE 2:9"],
        views: {
            dispensational: "Israel e a Igreja são dois povos de Deus distintos com destinos e promessas diferentes. A Igreja é um 'parêntese' no trato de Deus com Israel. No fim dos tempos, após o arrebatamento, Deus retoma Seu plano com Israel nacional, cumprindo todas as profecias geográficas e políticas pendentes.",
            historical: "A Igreja é o Povo de Deus que inclui tanto judeus quanto gentios crentes. No entanto, muitos defendem que haverá uma restauração espiritual futura e nacional de Israel no Milênio literário, reconhecendo Jesus como Messias. Israel não é substituído, mas a Igreja é a continuação orgânica do remanescente fiel.",
            amillennial: "Teologia da Substituição ou Expansão (Cumprimento): A Igreja é o 'Novo Israel' ou o 'Israel de Deus'. Todas as promessas feitas ao Israel nacional foram cumpridas ou transcendidas em Cristo e Sua Igreja. Não há distinção teológica futura; o muro de separação foi derrubado permanentemente na Cruz.",
            postmillennial: "A Igreja é o coroamento do antigo Israel. O sucesso do Evangelho trará eventualmente a conversão massiva do povo judeu (um 'enxerto' de volta, como em Rom 11), resultando em bênçãos globais sem precedentes para toda a cristandade, sem necessidade de um estado político judeu privilegiado."
        }
    },
    {
        id: "antichrist",
        title: "O Anticristo e o Homem da Iniquidade",
        description: "A figura ou sistema que personifica a rebelião final contra Deus, sentando-se no lugar de autoridade divina.",
        refs: ["2TH 2:3-10", "1JN 2:18", "REV 13:1-10", "DAN 9:27"],
        views: {
            dispensational: "Um indivíduo humano literal, um ditador político mundial que surgirá na futura semana de 7 anos. Ele fará uma aliança com Israel e depois a trairá, exigindo adoração no templo reconstruído de Jerusalém. É a personificação satânica final antes do juízo.",
            historical: "Uma figura histórica que aparecerá no fim dos tempos, exercendo poder sobre um império global ou sistema apóstata. Historicamente, muitos reformadores identificaram o Papado como uma manifestação do Anticristo, mas a visão futurista histórica aguarda uma manifestação pessoal final.",
            amillennial: "O 'espírito do anticristo' opera ao longo da história em vários sistemas e líderes que se opõem à Verdade. Pode culminar em uma personificação final do mal imediatamente antes da vinda de Cristo, mas o foco é na oposição constante de Satanás contra a Igreja através de poderes políticos e religiosos.",
            postmillennial: "Vê o Anticristo como uma figura já passada (Nero, o Império Romano do século I) ou como uma influência espiritual que está sendo gradualmente derrotada pelo avanço do Reino de Deus. O Iníquo não é páreo para o progresso do Evangelho e não impedirá a cristianização do mundo."
        }
    },
    {
        id: "intermediate_state",
        title: "O Estado Intermediário (Hades e Paraíso)",
        description: "A condição e local das almas entre a morte física e a ressurreição final.",
        refs: ["LUK 16:19-31", "LUK 23:43", "PHL 1:21-23", "REV 6:9-11"],
        views: {
            dispensational: "Crer que os mortos em Cristo vão imediatamente ao Paraíso (presença de Deus), enquanto os ímpios vão para o Hades (local de tormento). Após o Arrebatamento, as almas dos santos recebem seus corpos glorificados antes do Milênio, enquanto os ímpios aguardam o fim do Milênio para o julgamento final.",
            historical: "Similar ao dispensacionalismo no dualismo imediato após a morte. A ênfase é na 'ressurreição dos justos' que ocorre na volta de Cristo para participar do reinado milenar, enquanto a ressurreição dos injustos ocorre apenas após os 1.000 anos para o Grande Trono Branco.",
            amillennial: "Os crentes falecidos estão 'com o Senhor' no céu, reinando com Ele agora (o que explica Ap 20:4). Não há distinção cronológica de 1.000 anos entre as ressurreições; quando Cristo voltar, haverá uma ressurreição geral única para todos os seres humanos, seguida imediatamente pelo juízo.",
            postmillennial: "A morte física é a transição imediata para o estado de glória ou castigo. Como não há um retorno físico de Cristo para um milênio terrestre, a ressurreição geral acontece no fim dos tempos atuais, levando todos diretamente ao tribunal de Deus e à eternidade."
        }
    },
    {
        id: "judgment",
        title: "O Juízo Final e as Recompensas",
        description: "O tribunal divino onde cada ser humano prestará contas de suas obras e vida diante do Criador.",
        refs: ["MAT 25:31-46", "2CO 5:10", "REV 20:11-15", "ROM 14:10"],
        views: {
            dispensational: "Distingue entre o 'Tribunal de Cristo' (Bema) para galardões da Igreja após o arrebatamento, o 'Julgamento das Nações' (Ovelhas e Bodes) na volta de Cristo para o Milênio, e o 'Grande Trono Branco' para os ímpios após o Milênio. Há julgamentos em tempos e propósitos diferentes.",
            historical: "Vê o julgamento dos justos ocorrendo no início do milênio para determinar posições de governo no reino terrestre, e o julgamento final dos ímpios e de Satanás ocorrendo no fim do milênio, após a rebelião de Gogue e Magogue.",
            amillennial: "Um único Dia do Juízo universal e simultâneo na parousia de Cristo. Todos os segredos serão revelados e o destino eterno será selado. A separação entre ovelhas e bodes (Mt 25) descreve esse evento único que encerra a história humana.",
            postmillennial: "O julgamento final ocorre no clímax do sucesso do Evangelho na Terra. Jesus retorna não para salvar o mundo (que já estará amplamente cristianizado), mas para efetuar o ato formal de juízo, encerrar a morte e inaugurar a glória absoluta."
        }
    },
    {
        id: "final_state",
        title: "Novos Céus e Nova Terra",
        description: "O destino final do povo de Deus: a restauração completa da criação e a comunhão eterna com Deus.",
        refs: ["REV 21-22", "ISA 65:17", "2PE 3:13", "ROM 8:19-23"],
        views: {
            dispensational: "Após o Milênio e o Juízo do Trono Branco, o universo atual é purificado e transformado na Nova Jerusalém eterna. É o estado final onde a distinção Israel/Igreja pode persistir de forma harmoniosa sob o governo eterno de Deus, no 'pleno cumprimento de todas as eras'.",
            historical: "O estado eterno sucede o reino milenar terrestre. A terra, que experimentou o reinado de Cristo por 1.000 anos, é agora fundida com o céu em perfeição absoluta, onde não haverá mais pecado, dor ou morte, e Deus será 'tudo em todos'.",
            amillennial: "A vinda de Cristo traz o fim imediato do pecado e a inauguração instantânea do estado eterno. A criação é 'libertada do cativeiro da corrupção'. O foco é na volta imediata ao design original do Éden, agora glorificado e indestrutível na presença da Trindade.",
            postmillennial: "O estado eterno é a continuação glorificada do que a Igreja construiu na terra pelo poder do Espírito. É o 'Pleroma', a plenitude onde o Reino de Deus, que preencheu a terra como uma pedra que se torna montanha (Daniel 2), agora brilha sem oposição para sempre."
        }
    },
    {
        id: "abomination",
        title: "A Abominação Desoladora",
        description: "O evento profético profanador predito por Daniel e citado por Jesus como o sinal crítico para a fuga da Judéia.",
        refs: ["DAN 9:27", "MAT 24:15", "MAR 13:14", "DAN 12:11"],
        views: {
            dispensational: "Um evento futuro onde o Anticristo quebrará sua aliança com Israel na metade da 70ª semana, profanando o Terceiro Templo reconstruído em Jerusalém e exigindo adoração para si mesmo.",
            historical: "Muitos vêem como um evento que se repete ou culmina em uma profanação literal futura antes da parousia, possivelmente ligada a um sistema de apostasia mundial que toma o lugar de Deus no santuário da fé.",
            amillennial: "Freqüentemente interpretada através do dualismo: teve um cumprimento histórico com Antíoco Epifânio (167 a.C.) e Tito (70 d.C.), mas prefigura a oposição final do espírito anticristão contra a verdadeira adoração espiritual.",
            postmillennial: "Majoritariamente vista como um evento cumprido no século I. Refere-se à presença dos exércitos romanos pagãos e seus estandartes idólatras cercando e profanando o Templo de Jerusalém em 70 d.C."
        }
    },
    {
        id: "mark_beast",
        title: "A Marca da Besta (666)",
        description: "O número de homem e a marca necessária para comprar ou vender sob o domínio da Besta da Terra.",
        refs: ["REV 13:16-18", "REV 14:9-11", "REV 19:20"],
        views: {
            dispensational: "Uma tecnologia literal (implante, chip ou código) imposta por um governo mundial futuro, servindo como juramento de fidelidade ao Anticristo e exclusão econômica dos crentes.",
            historical: "Um sinal de conformidade com o sistema do mundo. Representa a submissão total do pensamento (testa) e da ação (mão) à autoridade humana em oposição à autoridade divina.",
            amillennial: "Símbolo espiritual que contrasta com o 'Selo de Deus' na testa dos redimidos. Representa a marca da propriedade satânica sobre a humanidade caída que adora o Estado ou o Self em vez de Deus.",
            postmillennial: "Pode referir-se ao culto imperial romano (Gematria sugerindo 'Neron Caesar') ou à pressão econômica e religiosa sobre os primeiros cristãos para negarem a Cristo e confessarem César como Senhor."
        }
    },
    {
        id: "two_witnesses",
        title: "As Duas Testemunhas (Apocalipse 11)",
        description: "As figuras proféticas que profetizam por 1.260 dias, são mortas pela Besta e ressuscitam após três dias e meio.",
        refs: ["REV 11:3-12", "ZEC 4:11-14", "MAL 4:5"],
        views: {
            dispensational: "Duas figuras humanas literais (frequentemente identificadas como Elias e Enoque ou Moisés) que aparecerão em Jerusalém durante a Tribulação futura para confrontar o Anticristo e converter judeus.",
            historical: "Dois indivíduos ou grupos de profetas que representam o testemunho corajoso da Igreja sob o poder do Espírito em tempos de perseguição extrema antes do fim.",
            amillennial: "Símbolo de toda a Igreja em sua função missionária (Lei e Evangelho, ou o testemunho corporativo) que, embora pareça derrotada pelo mundo, é divinamente protegida e finalmente vindicada.",
            postmillennial: "Simboliza o poder do Evangelho que, embora encontre resistência feroz e aparente derrota temporária, ressurgirá com poder irresistível para converter as nações antes do retorno de Cristo."
        }
    },
    {
        id: "gog_magog",
        title: "A Batalha de Gogue e Magogue",
        description: "A invasão final liderada por Gogue contra o povo de Deus, mencionada em Ezequiel e Apocalipse.",
        refs: ["EZE 38-39", "REV 20:7-10", "PSA 2"],
        views: {
            dispensational: "Uma invasão militar literal de uma coalizão de nações (muitas vezes identificada com nações ao norte de Israel) que ocorre no fim da tribulação ou no fim do milênio literal.",
            historical: "A última e desesperada tentativa das forças anti-cristãs de destruir a Igreja de Cristo no clímax da história, imediatamente antes do aparecimento glorioso do Senhor.",
            amillennial: "Uma representação épica da hostilidade constante do mundo contra o Reino de Deus, culminando em uma crise final e universal onde Deus intervém pessoalmente para salvar Seu povo.",
            postmillennial: "Refere-se à rebelião final que ocorre após o longo período de paz milenar, servindo como o 'último suspiro' do mal antes que o julgamento final encerre a morte permanentemente."
        }
    }
];

export const ESCHATOLOGY_VIEWS = {
    dispensational: {
        id: "dispensational",
        name: "Pré-Milenismo Dispensacionalista",
        description: "Distinção estrita entre Israel e Igreja, arrebatamento secreto (pré-tribulação) e futuro milênio literal com Jesus em Jerusalém.",
        colorClass: "bg-blue-600",
        borderClass: "border-blue-500",
        bgClass: "bg-blue-50 dark:bg-blue-900/20",
        textClass: "text-blue-700 dark:text-blue-300"
    },
    historical: {
        id: "historical",
        name: "Pré-Milenismo Histórico",
        description: "A Igreja passará pela tribulação, seguida pela Segunda Vinda e imediatamente pelo estabelecimento do milênio literal.",
        colorClass: "bg-emerald-600",
        borderClass: "border-emerald-500",
        bgClass: "bg-emerald-50 dark:bg-emerald-900/20",
        textClass: "text-emerald-700 dark:text-emerald-300"
    },
    amillennial: {
        id: "amillennial",
        name: "Amilenismo",
        description: "O milênio é simbólico; é o reinado atual de Cristo a partir do céu sobre o coração dos fiéis durante a inteira Era da Igreja.",
        colorClass: "bg-indigo-600",
        borderClass: "border-indigo-500",
        bgClass: "bg-indigo-50 dark:bg-indigo-900/20",
        textClass: "text-indigo-700 dark:text-indigo-300"
    },
    postmillennial: {
        id: "postmillennial",
        name: "Pós-Milenismo",
        description: "Pregação do Evangelho gradualmente transformará a cultura global numa era de ouro. Cristo retorna após o sucesso da Grande Comissão.",
        colorClass: "bg-amber-600",
        borderClass: "border-amber-500",
        bgClass: "bg-amber-50 dark:bg-amber-900/20",
        textClass: "text-amber-700 dark:text-amber-300"
    }
};
