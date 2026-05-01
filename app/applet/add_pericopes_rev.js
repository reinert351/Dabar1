const fs = require('fs');

const newPericopes = [
  {
    id: 'rev_1_1_8',
    bookId: 'REV',
    chapter: 1,
    startVerse: 1,
    endVerse: 8,
    title: 'O Prólogo e a Saudação',
    theme: 'A Revelação de Jesus Cristo e a Soberania Divina',
    introduction: `O livro do Apocalipse começa com um prólogo que estabelece a sua origem divina, o seu propósito e a sua urgência. Escrito pelo apóstolo João durante o seu exílio na ilha de Patmos, o livro não é primariamente um quebra-cabeça sobre o fim do mundo, mas "a revelação de Jesus Cristo". Os primeiros oito versículos funcionam como uma introdução majestosa, oferecendo uma bênção aos leitores e apresentando o Deus Triúno como o soberano absoluto sobre a história, o tempo e os reis da terra.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Origem e a Bênção da Profecia',
        description: `A Cadeia de Revelação. O livro começa definindo-se como "Revelação (Apokalupsis) de Jesus Cristo". A palavra significa "tirar o véu" ou "descobrir". A revelação vem de Deus Pai, é dada a Jesus Cristo, que a transmite através do Seu anjo ao Seu servo João, para ser mostrada aos Seus servos. O propósito é mostrar "as coisas que brevemente devem acontecer". O versículo 3 pronuncia a primeira das sete bem-aventuranças do livro: "Bem-aventurado aquele que lê, e os que ouvem as palavras desta profecia, e guardam as coisas que nela estão escritas". O Apocalipse não foi escrito para satisfazer a curiosidade intelectual, mas para produzir obediência e perseverança ("guardam") em meio à perseguição, porque "o tempo está próximo".`
      },
      {
        verseRef: 'v. 4-6',
        title: 'A Saudação Trinitariana e a Obra de Cristo',
        description: `A Fonte da Graça e da Paz. João saúda as sete igrejas da Ásia Menor com "graça e paz" da parte da Trindade. O Pai é descrito como "aquele que é, e que era, e que há de vir" (o Deus eterno e imutável). O Espírito Santo é descrito simbolicamente como "os sete Espíritos que estão diante do seu trono" (representando a perfeição e a plenitude do Espírito, cf. Isaías 11:2). Jesus Cristo é descrito com três títulos messiânicos: "a fiel testemunha" (o profeta perfeito), "o primogênito dos mortos" (o vencedor da morte) e "o príncipe dos reis da terra" (o Rei dos reis, soberano sobre os impérios que perseguiam a igreja). João então irrompe em louvor pela obra de Cristo: Ele nos amou, nos lavou dos nossos pecados no Seu sangue e nos fez "reis e sacerdotes" para Deus.`
      },
      {
        verseRef: 'v. 7-8',
        title: 'A Promessa da Vinda e o Selo do Todo-Poderoso',
        description: `O Retorno Visível e o Alfa e Ômega. O versículo 7 anuncia o tema central do livro: "Eis que vem com as nuvens, e todo o olho o verá". O retorno de Cristo não será um evento secreto, mas uma manifestação cósmica e inegável. Até mesmo "os que o traspassaram" (os responsáveis pela Sua morte e, por extensão, todos os que O rejeitam) O verão, e "todas as tribos da terra se lamentarão sobre ele" (em terror ou em arrependimento tardio). O prólogo termina no versículo 8 com a própria voz de Deus selando a profecia: "Eu sou o Alfa e o Ômega, o princípio e o fim... o Todo-Poderoso". Como a primeira e a última letra do alfabeto grego, Deus abrange toda a eternidade e a história. Ele tem a primeira e a última palavra sobre o destino do mundo.`
      }
    ],
    conclusion: `O prólogo do Apocalipse nos chama a ler este livro não com medo, mas com adoração. Ele nos garante que, por mais caótico e assustador que o mundo pareça, o Deus que é o Alfa e o Ômega está no controle absoluto. A nossa segurança não está nas circunstâncias, mas no sangue do Cordeiro que nos libertou e no Rei que em breve voltará nas nuvens.`
  },
  {
    id: 'rev_1_9_20',
    bookId: 'REV',
    chapter: 1,
    startVerse: 9,
    endVerse: 20,
    title: 'A Visão do Cristo Glorificado',
    theme: 'A Majestade, o Poder e a Presença de Jesus na Sua Igreja',
    introduction: `Após o prólogo, o apóstolo João descreve as circunstâncias em que recebeu a revelação. Exilado na ilha de Patmos por causa da Palavra de Deus, João tem uma visão avassaladora no "dia do Senhor". Ele não vê o Jesus humilde da Galileia, mas o Cristo ressuscitado, exaltado e glorificado, caminhando no meio da Sua igreja. Esta visão estabelece o tom para todo o livro: a igreja sofredora na terra é pastoreada e protegida por um Senhor onipotente e majestoso.`,
    points: [
      {
        verseRef: 'v. 9-11',
        title: 'O Contexto do Exílio e o Chamado Profético',
        description: `Companheiro na Tribulação. João se identifica não com títulos de autoridade, mas como "vosso irmão, e companheiro na aflição, e no reino, e paciência em Jesus Cristo". Ele estava exilado na ilha rochosa de Patmos (uma colônia penal romana) "por causa da palavra de Deus, e pelo testemunho de Jesus Cristo". A perseguição era a realidade da igreja. No "dia do Senhor" (domingo, o dia da ressurreição), João foi "arrebatado em espírito" e ouviu uma voz poderosa como de trombeta, ordenando-lhe que escrevesse o que via e enviasse às sete igrejas da Ásia.`
      },
      {
        verseRef: 'v. 12-16',
        title: 'A Descrição do Filho do Homem',
        description: `A Majestade Divina. Ao se virar, João vê sete castiçais de ouro e, no meio deles, "um semelhante ao Filho do homem" (título messiânico de Daniel 7). A descrição de Jesus é uma colagem de imagens do Antigo Testamento que comunicam a Sua divindade e poder: vestes de sumo sacerdote (longas e com cinto de ouro); cabelos brancos como a neve (simbolizando a eternidade e a sabedoria do "Ancião de Dias"); olhos como chama de fogo (onisciência e julgamento penetrante); pés como latão reluzente (força e pureza inabaláveis); voz como o som de muitas águas (autoridade absoluta e poder irresistível). Na Sua mão direita Ele segura sete estrelas, e da Sua boca sai uma espada aguda de dois gumes (a Palavra de Deus que julga). O Seu rosto brilha como o sol ao meio-dia.`
      },
      {
        verseRef: 'v. 17-20',
        title: 'O Conforto e a Explicação do Mistério',
        description: `O Vencedor da Morte. A reação de João diante dessa glória avassaladora é cair "a seus pés como morto" (o temor reverente diante do sagrado). Mas Jesus coloca a Sua mão direita sobre ele e diz: "Não temas; Eu sou o primeiro e o último". Jesus aplica a Si mesmo o título exclusivo de Yahweh (Isaías 44:6). Ele declara a Sua vitória sobre a morte: "Fui morto, mas eis aqui estou vivo para todo o sempre. Amém. E tenho as chaves da morte e do inferno (Hades)". Jesus é o Senhor absoluto sobre a vida e a morte. Ele então explica o mistério: as sete estrelas são os "anjos" (mensageiros ou líderes) das sete igrejas, e os sete castiçais são as próprias igrejas. Jesus está no meio da Sua igreja, segurando os Seus líderes na Sua mão direita.`
      }
    ],
    conclusion: `A visão do Cristo glorificado é o antídoto para o medo da igreja. Quando enfrentamos perseguição, sofrimento ou desânimo, precisamos levantar os olhos e ver Jesus como Ele realmente é: não uma figura fraca do passado, mas o Rei majestoso, de olhos de fogo, que tem as chaves da morte e que caminha ativamente no meio das Suas igrejas, sustentando-nos com a Sua mão direita.`
  },
  {
    id: 'rev_2_8_11',
    bookId: 'REV',
    chapter: 2,
    startVerse: 8,
    endVerse: 11,
    title: 'A Carta à Igreja em Esmirna',
    theme: 'A Fidelidade no Sofrimento e a Coroa da Vida',
    introduction: `A carta à igreja em Esmirna é uma das duas únicas cartas (junto com Filadélfia) em que Jesus não profere nenhuma repreensão, apenas encorajamento e promessa. Esmirna era uma cidade próspera e profundamente leal a Roma, com um forte culto ao imperador e uma comunidade judaica hostil aos cristãos. A igreja ali era materialmente pobre, mas espiritualmente rica, e enfrentava perseguição iminente. Jesus se apresenta a eles como o vencedor da morte, preparando-os para o martírio com a promessa da vida eterna.`,
    points: [
      {
        verseRef: 'v. 8-9',
        title: 'O Conhecimento do Sofrimento e a Verdadeira Riqueza',
        description: `O Primeiro e o Último. Jesus se apresenta a Esmirna com os títulos que eles mais precisavam ouvir: "o Primeiro e o Último, que foi morto, e reviveu". Para uma igreja que enfrentava a ameaça de morte, Jesus lembra que Ele já passou pela morte e a venceu. Ele diz: "Conheço as tuas obras, e tribulação, e pobreza". Os cristãos em Esmirna provavelmente sofriam boicotes econômicos por não participarem do culto ao imperador ou das guildas pagãs. Eles eram miseráveis aos olhos do mundo, mas Jesus declara: "(mas tu és rico)". A verdadeira riqueza não é medida pela conta bancária, mas pela fidelidade a Cristo. Jesus também conhece a "blasfêmia" (calúnia) dos judeus locais, que Ele chama de "sinagoga de Satanás" por perseguirem o verdadeiro povo de Deus.`
      },
      {
        verseRef: 'v. 10',
        title: 'A Preparação para a Prisão e a Exortação à Fidelidade',
        description: `O Teste Iminente. Jesus não promete livrá-los do sofrimento, mas os prepara para ele: "Nada temas das coisas que hás de padecer". Ele avisa que o diabo lançará alguns deles na prisão para serem "tentados" (testados). A prisão no mundo antigo frequentemente precedia a execução. Jesus limita o tempo do sofrimento: "tereis uma tribulação de dez dias" (um período curto e determinado por Deus; o sofrimento não durará para sempre). A exortação central da carta é: "Sê fiel até à morte, e dar-te-ei a coroa da vida". A fidelidade exigida não é apenas até o fim da vida natural, mas até o ponto de sofrer o martírio por amor a Cristo.`
      },
      {
        verseRef: 'v. 11',
        title: 'A Promessa aos Vencedores',
        description: `A Imunidade à Segunda Morte. A carta termina com a promessa escatológica: "O que vencer não receberá o dano da segunda morte". A "primeira morte" é a morte física, que os crentes em Esmirna poderiam sofrer nas mãos dos romanos. A "segunda morte" é a separação eterna de Deus no lago de fogo (Apocalipse 20:14). Jesus garante que, mesmo que o império romano tire a vida física deles, o império não tem poder sobre o destino eterno deles. O vencedor (aquele que persevera na fé) está eternamente seguro em Cristo.`
      }
    ],
    conclusion: `A carta a Esmirna nos ensina que o sofrimento e a pobreza não são sinais do abandono de Deus, mas frequentemente são o palco onde a verdadeira riqueza espiritual é forjada. Jesus não nos promete uma vida livre de dor, mas nos promete a coroa da vida se permanecermos fiéis a Ele, mesmo diante da morte, sabendo que a segunda morte não tem poder sobre nós.`
  },
  {
    id: 'rev_2_12_17',
    bookId: 'REV',
    chapter: 2,
    startVerse: 12,
    endVerse: 17,
    title: 'A Carta à Igreja em Pérgamo',
    theme: 'O Perigo do Compromisso com o Mundo e a Falsa Doutrina',
    introduction: `Pérgamo era a capital política da província romana da Ásia e um centro de adoração pagã, abrigando o grande altar de Zeus e o templo de Esculápio (o deus da cura, cujo símbolo era uma serpente). Jesus descreve a cidade como o lugar "onde está o trono de Satanás". A igreja em Pérgamo havia sido fiel sob perseguição extrema, mas agora enfrentava um perigo interno mais sutil: a tolerância ao falso ensino e o compromisso com a cultura pagã ao redor. Jesus se apresenta a eles como o juiz que empunha a espada da verdade.`,
    points: [
      {
        verseRef: 'v. 12-13',
        title: 'O Elogio pela Fidelidade no "Trono de Satanás"',
        description: `A Espada Aguda e a Coragem sob Fogo. Jesus se apresenta como "aquele que tem a espada aguda de dois gumes" (a Palavra de Deus que julga e divide). Ele elogia a igreja por reter o Seu nome e não negar a fé, mesmo vivendo no epicentro da idolatria e do poder imperial ("onde Satanás habita"). Ele menciona especificamente Antipas, "minha fiel testemunha, o qual foi morto entre vós". A igreja de Pérgamo havia passado no teste da perseguição externa com distinção, mantendo-se firme mesmo quando o martírio era uma realidade presente.`
      },
      {
        verseRef: 'v. 14-15',
        title: 'A Repreensão pela Tolerância à Heresia',
        description: `A Doutrina de Balaão e dos Nicolaítas. Apesar da coragem, Jesus tem "algumas poucas coisas" contra eles: eles estavam tolerando falsos mestres. Jesus compara esses mestres a Balaão, o profeta do Antigo Testamento que, não conseguindo amaldiçoar Israel, ensinou o rei Balaque a seduzir os israelitas à idolatria e à imoralidade sexual (Números 25). Da mesma forma, os falsos mestres em Pérgamo (os nicolaítas) estavam ensinando que os cristãos podiam participar das festas idólatras nos templos pagãos ("comer dos sacrifícios da idolatria") e praticar a imoralidade sexual ("prostituição") sem comprometer a sua fé. Eles estavam promovendo um cristianismo de compromisso e acomodação cultural.`
      },
      {
        verseRef: 'v. 16-17',
        title: 'O Chamado ao Arrependimento e a Promessa do Maná Escondido',
        description: `A Ameaça de Julgamento e a Recompensa. Jesus exige arrependimento imediato: "Arrepende-te, pois". Se a igreja não lidar com os falsos mestres, Jesus mesmo virá e "contra eles batalharei com a espada da minha boca". A tolerância ao pecado na igreja atrai o julgamento divino. Para os "vencedores" (aqueles que rejeitam o compromisso e permanecem puros), Jesus promete duas coisas: o "maná escondido" (a verdadeira provisão e comunhão espiritual com Cristo, em contraste com a comida sacrificada aos ídolos) e uma "pedra branca com um novo nome escrito" (um símbolo de absolvição em um julgamento, ou um ingresso para o banquete celestial, representando a aceitação íntima e pessoal por Deus).`
      }
    ],
    conclusion: `A carta a Pérgamo é um alerta severo contra o perigo da acomodação cultural. Uma igreja pode ser corajosa contra a perseguição externa, mas ser destruída pela tolerância ao pecado e à falsa doutrina internamente. Jesus nos chama a rejeitar as seduções do mundo e a nos alimentarmos exclusivamente do "maná escondido", mantendo a nossa pureza e lealdade absolutas a Ele.`
  },
  {
    id: 'rev_2_18_29',
    bookId: 'REV',
    chapter: 2,
    startVerse: 18,
    endVerse: 29,
    title: 'A Carta à Igreja em Tiatira',
    theme: 'O Crescimento nas Obras e o Julgamento da Tolerância ao Pecado',
    introduction: `Tiatira era a menor e menos importante das sete cidades, mas recebeu a carta mais longa de Jesus. A cidade era famosa pelas suas guildas comerciais (sindicatos de artesãos). Para trabalhar e prosperar em Tiatira, era quase obrigatório pertencer a uma guilda, o que envolvia participar de banquetes dedicados aos deuses padroeiros e, frequentemente, de imoralidade sexual. A igreja em Tiatira estava crescendo em amor e serviço, mas estava cometendo um erro fatal: tolerar uma falsa profetisa que liderava os crentes ao compromisso moral. Jesus se apresenta como o Filho de Deus com olhos de fogo, pronto para julgar a impureza.`,
    points: [
      {
        verseRef: 'v. 18-19',
        title: 'O Elogio pelo Crescimento Espiritual',
        description: `Os Olhos de Fogo e as Últimas Obras. Jesus se apresenta com o título "Filho de Deus" (o único uso no Apocalipse), com "olhos como chama de fogo" (onisciência penetrante que vê através da hipocrisia) e "pés semelhantes ao latão reluzente" (julgamento firme). Ele elogia a igreja de forma impressionante: "Conheço as tuas obras, e o teu amor, e o teu serviço, e a tua fé, e a tua paciência". Mais do que isso, Ele diz que "as tuas últimas obras são mais do que as primeiras". Ao contrário de Éfeso, que havia perdido o primeiro amor, Tiatira estava crescendo em amor e serviço ativo. Eles eram uma igreja dinâmica e trabalhadora.`
      },
      {
        verseRef: 'v. 20-23',
        title: 'A Repreensão contra "Jezabel" e o Julgamento Divino',
        description: `A Tolerância à Falsa Profetisa. O grande pecado de Tiatira era a tolerância: "toleras que Jezabel, mulher que se diz profetisa, ensine e engane os meus servos". "Jezabel" provavelmente era um nome simbólico, referindo-se à rainha ímpia do Antigo Testamento que introduziu a idolatria em Israel. Esta mulher em Tiatira ensinava que os cristãos podiam participar das festas das guildas (idolatria e imoralidade) sem pecar. Jesus diz que lhe deu tempo para se arrepender, mas ela recusou. O julgamento será severo: Jesus a lançará numa cama de sofrimento, trará grande tribulação sobre os seus seguidores (a menos que se arrependam) e "ferirei de morte a seus filhos" (julgamento definitivo sobre os seus discípulos). O propósito deste julgamento público é que "todas as igrejas saberão que eu sou aquele que sonda os rins e os corações".`
      },
      {
        verseRef: 'v. 24-29',
        title: 'A Exortação aos Fiéis e a Promessa de Autoridade',
        description: `Retendo o que Têm. Jesus se dirige ao "resto que está em Tiatira", aqueles que não seguiram a heresia (que os falsos mestres chamavam de "as profundezas de Satanás"). Jesus não lhes impõe nenhum fardo novo, apenas a ordem de perseverar: "mas o que tendes, retende-o até que eu venha". Para o vencedor que guardar as obras de Cristo até o fim, Jesus promete autoridade sobre as nações (compartilhando o Seu governo messiânico, governando com "vara de ferro") e a "estrela da manhã" (o próprio Cristo, a garantia do novo dia e da vida eterna).`
      }
    ],
    conclusion: `A carta a Tiatira nos ensina que o ativismo religioso, o amor e o serviço não compensam a tolerância ao pecado e à falsa doutrina. Uma igreja pode ser muito ativa em boas obras, mas se permitir que a imoralidade e o compromisso com o mundo sejam ensinados e praticados sem disciplina, ela enfrentará o julgamento purificador do Filho de Deus, cujos olhos são como chama de fogo.`
  },
  {
    id: 'rev_3_1_6',
    bookId: 'REV',
    chapter: 3,
    startVerse: 1,
    endVerse: 6,
    title: 'A Carta à Igreja em Sardes',
    theme: 'O Perigo da Morte Espiritual e a Necessidade de Vigilância',
    introduction: `Sardes havia sido uma das cidades mais ricas e poderosas do mundo antigo, famosa pela sua acrópole supostamente impenetrável. No entanto, a cidade havia caído duas vezes devido à falta de vigilância dos seus guardas. A igreja em Sardes refletia a história da sua cidade: eles viviam de glórias passadas. Jesus profere uma das repreensões mais duras das sete cartas. Sardes não enfrentava perseguição externa nem heresia interna; o seu problema era a complacência e a morte espiritual. Eles tinham uma grande reputação diante dos homens, mas estavam mortos diante de Deus.`,
    points: [
      {
        verseRef: 'v. 1',
        title: 'O Diagnóstico: Reputação de Vida, mas Morte Real',
        description: `O Espírito e as Estrelas. Jesus se apresenta como aquele que tem "os sete espíritos de Deus" (a plenitude do Espírito Santo, a fonte da vida) e "as sete estrelas" (o controle sobre os líderes da igreja). O diagnóstico de Jesus é devastador: "Conheço as tuas obras, que tens nome de que vives, e estás morto". A igreja de Sardes provavelmente era grande, ativa, respeitada na comunidade e considerada um modelo de sucesso. No entanto, a avaliação de Cristo, que vê o coração, é o oposto da avaliação humana. A sua atividade religiosa era apenas um cadáver bem vestido; faltava-lhes a vida e o poder do Espírito Santo.`
      },
      {
        verseRef: 'v. 2-3',
        title: 'A Prescrição: Despertar e Arrepender-se',
        description: `O Chamado à Vigilância. Jesus dá cinco imperativos urgentes para ressuscitar a igreja: 1) "Sê vigilante" (acorde do sono espiritual, lembrando as quedas históricas da cidade); 2) "Confirma os restantes, que estavam para morrer" (fortaleça o pouco de vida espiritual que ainda resta antes que se apague totalmente, pois as obras deles não eram "perfeitas" ou completas diante de Deus); 3) "Lembra-te, pois, do que tens recebido e ouvido" (volte ao evangelho puro e à graça que receberam no início); 4) "Guarda-o" (obedeça à Palavra); 5) "Arrepende-te" (mude de direção). Jesus adverte que, se não vigiarem, Ele virá sobre eles como um "ladrão" (trazendo julgamento súbito e inesperado).`
      },
      {
        verseRef: 'v. 4-6',
        title: 'O Remanescente Fiel e a Promessa das Vestes Brancas',
        description: `Os Nomes no Livro da Vida. Mesmo em uma igreja morta, Jesus reconhece os fiéis: "Mas também tens em Sardes algumas poucas pessoas que não contaminaram as suas vestes". Havia um pequeno remanescente que não havia se rendido ao pecado e à complacência da cultura ao redor. Jesus promete que eles "andarão de branco junto comigo, pois são dignos". Para o vencedor, Jesus faz três promessas gloriosas: 1) Será vestido de vestes brancas (pureza, vitória e justificação); 2) Jesus "de maneira nenhuma riscarei o seu nome do livro da vida" (garantia absoluta de salvação eterna); 3) Jesus confessará o nome do vencedor diante do Pai e dos anjos (reconhecimento público no céu).`
      }
    ],
    conclusion: `A carta a Sardes é um alerta contra o perigo de vivermos de aparências. Uma igreja pode ter programas excelentes, grandes multidões e uma reputação estelar na sociedade, mas estar espiritualmente morta aos olhos de Cristo. Jesus nos chama a acordar da complacência, a fortalecer a verdadeira vida espiritual e a buscar a pureza, para que os nossos nomes sejam confessados com honra diante do Pai.`
  },
  {
    id: 'rev_3_7_13',
    bookId: 'REV',
    chapter: 3,
    startVerse: 7,
    endVerse: 13,
    title: 'A Carta à Igreja em Filadélfia',
    theme: 'A Porta Aberta e a Recompensa da Fidelidade',
    introduction: `A carta à igreja em Filadélfia é a segunda (junto com Esmirna) a não receber nenhuma repreensão de Jesus. Filadélfia era uma cidade localizada em uma falha geológica, frequentemente destruída por terremotos, o que fazia com que os seus habitantes vivessem em constante insegurança. A igreja ali era pequena e tinha "pouca força", enfrentando forte oposição da comunidade judaica local. No entanto, eles haviam permanecido fiéis à Palavra de Deus. Jesus se apresenta a eles como o detentor da verdadeira autoridade, prometendo-lhes oportunidades, vindicação e segurança eterna.`,
    points: [
      {
        verseRef: 'v. 7-8',
        title: 'A Chave de Davi e a Porta Aberta',
        description: `O Santo e o Verdadeiro. Jesus se apresenta com atributos divinos: "o Santo, o Verdadeiro". Ele declara ter "a chave de Davi; o que abre, e ninguém fecha; e fecha, e ninguém abre" (uma referência a Isaías 22:22, indicando autoridade absoluta sobre o Reino de Deus e a salvação). Jesus diz: "Conheço as tuas obras; eis que diante de ti pus uma porta aberta, e ninguém a pode fechar". Apesar de a igreja ter "pouca força" (poucos recursos, influência ou números), Jesus lhes abre a porta da oportunidade missionária e do acesso a Deus, porque eles guardaram a Sua palavra e não negaram o Seu nome sob pressão.`
      },
      {
        verseRef: 'v. 9-10',
        title: 'A Vindicação e a Proteção na Provação',
        description: `A Sinagoga de Satanás e a Hora da Provação. A igreja sofria oposição dos judeus locais, que afirmavam ser o verdadeiro povo de Deus. Jesus os chama de "sinagoga de Satanás" (porque rejeitavam o Messias) e promete uma vindicação futura: Ele fará com que esses opositores venham e se prostrem aos pés dos cristãos, reconhecendo que Jesus amou a igreja. Além disso, por causa da perseverança da igreja, Jesus faz uma grande promessa de proteção: "também eu te guardarei da hora da provação que há de vir sobre todo o mundo". Esta é uma promessa de que a igreja fiel será preservada (seja através de proteção durante a tribulação ou através do arrebatamento) do julgamento global que testará "os que habitam na terra" (os incrédulos).`
      },
      {
        verseRef: 'v. 11-13',
        title: 'A Coroa e a Coluna no Templo de Deus',
        description: `A Segurança Eterna. Jesus avisa: "Eis que venho sem demora; guarda o que tens, para que ninguém tome a tua coroa" (a recompensa da fidelidade). Para os crentes que viviam com medo de terremotos e frequentemente tinham que fugir da cidade, a promessa de Jesus ao vencedor é profundamente reconfortante: "eu o farei coluna no templo do meu Deus, e dele nunca sairá". Eles receberão segurança e estabilidade eternas. Jesus também escreverá sobre o vencedor três nomes: o nome de Deus (propriedade), o nome da nova Jerusalém (cidadania celestial) e o Seu novo nome (revelação íntima e glória compartilhada).`
      }
    ],
    conclusion: `A carta a Filadélfia nos ensina que Deus não exige que tenhamos grande força, riqueza ou influência para sermos usados por Ele. O que Ele procura é a fidelidade à Sua Palavra e a coragem para não negar o Seu nome. Quando somos fiéis no pouco, o próprio Cristo, que tem a chave de Davi, abre portas de oportunidade que nenhum poder humano ou infernal pode fechar, e nos garante segurança eterna no Seu Reino.`
  },
  {
    id: 'rev_4_1_11',
    bookId: 'REV',
    chapter: 4,
    startVerse: 1,
    endVerse: 11,
    title: 'A Visão do Trono no Céu',
    theme: 'A Soberania Absoluta e a Adoração ao Criador',
    introduction: `O capítulo 4 marca uma transição dramática no livro do Apocalipse. Após as cartas às sete igrejas na terra (capítulos 2-3), a cena muda para o céu. João é convidado a subir através de uma porta aberta no céu para ver "as coisas que depois destas devem acontecer". Antes de revelar os julgamentos e os eventos futuros, Deus mostra a João a sala de controle do universo: o trono de Deus. Esta visão majestosa estabelece a verdade fundamental de que, não importa o quão caótica a terra pareça, o trono no céu não está vazio. Deus reina supremo e é digno de adoração incessante.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Trono e a Glória do Soberano',
        description: `O Centro do Universo. João é "arrebatado em espírito" e a primeira coisa que ele vê não são anjos ou santos, mas "um trono assentado no céu, e um assentado sobre o trono". O trono é o símbolo central do Apocalipse (mencionado mais de 40 vezes), representando a soberania e o governo absolutos de Deus. João não descreve a forma humana de Deus, mas a Sua glória radiante usando pedras preciosas: jaspe (brilhante como diamante) e sardônica (vermelho sangue). Ao redor do trono há um arco-íris semelhante à esmeralda, lembrando a aliança de misericórdia de Deus com Noé, mesmo no meio do julgamento iminente.`
      },
      {
        verseRef: 'v. 4-7',
        title: 'A Corte Celestial: Os Anciãos e os Seres Viventes',
        description: `Os Representantes da Criação e da Redenção. Ao redor do trono principal há vinte e quatro tronos com vinte e quatro anciãos vestidos de branco e com coroas de ouro (provavelmente representando a totalidade do povo de Deus redimido: os 12 patriarcas de Israel e os 12 apóstolos da Igreja). Do trono saem relâmpagos, vozes e trovões (sinais do poder e do julgamento divinos). Diante do trono estão sete lâmpadas de fogo (o Espírito Santo) e um "mar de vidro, semelhante ao cristal" (simbolizando a pureza, a paz e a separação transcendente de Deus). Perto do trono estão quatro "seres viventes" (querubins/serafins) cheios de olhos, semelhantes a um leão, um bezerro, um homem e uma águia, representando a majestade, a força, a inteligência e a rapidez de toda a criação animada.`
      },
      {
        verseRef: 'v. 8-11',
        title: 'A Adoração Incessante ao Criador',
        description: `Santo, Santo, Santo. O propósito principal da corte celestial é a adoração. Os quatro seres viventes não descansam dia e noite, proclamando a santidade e a eternidade de Deus: "Santo, Santo, Santo é o Senhor Deus, o Todo-Poderoso, que era, e que é, e que há de vir". Quando eles dão glória, os vinte e quatro anciãos se prostram, adoram e lançam as suas coroas diante do trono (reconhecendo que toda a sua vitória e autoridade vêm de Deus). O cântico dos anciãos (v. 11) foca em Deus como o Criador: "Digno és, Senhor, de receber glória, e honra, e poder; porque tu criaste todas as coisas, e por tua vontade são e foram criadas". A criação é a base fundamental para a adoração.`
      }
    ],
    conclusion: `A visão do trono no capítulo 4 nos lembra que a verdadeira perspectiva da vida não é encontrada olhando para os problemas da terra, mas olhando para a glória do céu. O universo não é governado pelo acaso, por políticos corruptos ou por forças demoníacas, mas pelo Deus Todo-Poderoso que está assentado no trono. A resposta adequada à Sua soberania e ao Seu poder criador é lançarmos as nossas coroas aos Seus pés em adoração contínua.`
  },
  {
    id: 'rev_5_1_14',
    bookId: 'REV',
    chapter: 5,
    startVerse: 1,
    endVerse: 14,
    title: 'O Livro e o Cordeiro',
    theme: 'A Redenção e a Dignidade de Cristo para Julgar e Salvar',
    introduction: `O capítulo 5 continua a visão celestial do capítulo 4, mas o foco muda do Deus Criador para o Deus Redentor. Deus Pai segura um livro selado com sete selos, que contém os decretos do julgamento divino e o destino final da história humana. Uma crise cósmica se instaura quando ninguém no universo é achado digno de abrir o livro. O desespero de João é transformado em adoração triunfante quando o Leão da tribo de Judá se apresenta, não como um conquistador militar, mas como um Cordeiro que foi morto. Este capítulo é uma das mais sublimes representações da obra expiatória de Cristo e da Sua exaltação suprema.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Livro Selado e o Choro de João',
        description: `A Crise Cósmica. João vê na mão direita de Deus "um livro escrito por dentro e por fora, selado com sete selos" (um documento legal, como um testamento ou um título de propriedade da terra, contendo os propósitos finais de Deus). Um anjo forte proclama em alta voz: "Quem é digno de abrir o livro e de desatar os seus selos?". A resposta é um silêncio aterrorizante. Ninguém no céu, na terra ou debaixo da terra (nenhum anjo, homem ou demônio) tem a autoridade moral ou o poder para executar os propósitos de Deus. João chora muito, pois se o livro permanecer fechado, a história não terá resolução, o mal não será julgado e a redenção não será consumada.`
      },
      {
        verseRef: 'v. 5-7',
        title: 'O Leão que é um Cordeiro',
        description: `A Solução Paradoxal. Um dos anciãos conforta João: "Não chores; eis aqui o Leão da tribo de Judá, a raiz de Davi, que venceu, para abrir o livro e desatar os seus sete selos". João espera ver um leão feroz (o Messias conquistador esperado pelos judeus), mas quando ele olha (v. 6), ele vê "um Cordeiro, como havendo sido morto". O paradoxo central do evangelho é que a vitória do Leão foi conquistada através do sacrifício do Cordeiro na cruz. O Cordeiro tem "sete chifres" (onipotência) e "sete olhos" (onisciência, o Espírito Santo). O Cordeiro avança e toma o livro da mão direita de Deus, um ato de autoridade suprema que indica que Cristo assumiu o controle do destino do mundo.`
      },
      {
        verseRef: 'v. 8-14',
        title: 'O Novo Cântico e a Adoração Universal',
        description: `Digno é o Cordeiro. Quando o Cordeiro toma o livro, o céu irrompe em adoração. Os quatro seres viventes e os vinte e quatro anciãos se prostram diante do Cordeiro (prestando-Lhe a mesma adoração dada a Deus no capítulo 4), segurando harpas e taças de incenso (as orações dos santos). Eles cantam um "novo cântico" (o cântico da redenção): "Digno és de tomar o livro... porque foste morto, e com o teu sangue compraste para Deus homens de toda a tribo, e língua, e povo, e nação". A adoração se expande em círculos concêntricos: primeiro os anciãos, depois milhões de anjos proclamando a dignidade do Cordeiro (v. 12), e finalmente "toda a criatura" no universo se une para dar "louvor, e honra, e glória, e poder" ao Pai e ao Cordeiro para sempre.`
      }
    ],
    conclusion: `O capítulo 5 do Apocalipse nos ensina que a chave para a história humana não está nas mãos de políticos, exércitos ou filósofos, mas nas mãos do Cordeiro que foi morto. A cruz de Cristo não foi uma derrota, mas a vitória cósmica que O qualificou para abrir os selos do destino. Porque Ele derramou o Seu sangue para nos comprar, Ele é digno da adoração absoluta e eterna de toda a criação.`
  },
  {
    id: 'rev_7_9_17',
    bookId: 'REV',
    chapter: 7,
    startVerse: 9,
    endVerse: 17,
    title: 'A Grande Multidão no Céu',
    theme: 'A Salvação Global e o Consolo Eterno dos Redimidos',
    introduction: `O capítulo 7 do Apocalipse serve como um interlúdio de esperança e conforto entre a abertura do sexto e do sétimo selo do julgamento. Após a visão aterrorizante da ira do Cordeiro no capítulo 6, a pergunta que ecoa é: "Quem poderá subsistir?". O capítulo 7 responde a essa pergunta mostrando duas visões do povo de Deus: os 144.000 selados na terra (a igreja militante protegida) e, a partir do versículo 9, a "grande multidão" no céu (a igreja triunfante). Esta segunda visão é um dos retratos mais belos e encorajadores do céu em toda a Bíblia, mostrando o resultado final da obra missionária de Cristo e o consolo eterno que aguarda os crentes.`,
    points: [
      {
        verseRef: 'v. 9-12',
        title: 'A Multidão Inumerável e o Louvor da Salvação',
        description: `O Triunfo da Missão Global. João vê "uma grande multidão, que ninguém podia contar". Ao contrário do grupo restrito e numerado dos 144.000, esta multidão é vasta e diversificada, vinda "de todas as nações, e tribos, e povos, e línguas". Esta é a consumação da promessa feita a Abraão e o resultado do sangue do Cordeiro (Ap 5:9). Eles estão em pé diante do trono e do Cordeiro, vestidos de vestes brancas (pureza e justificação) e com palmas nas mãos (símbolo de vitória e alegria festiva). Eles clamam em alta voz, atribuindo a sua salvação exclusivamente a Deus e ao Cordeiro. Os anjos e os anciãos respondem com um amém sétuplo de adoração.`
      },
      {
        verseRef: 'v. 13-14',
        title: 'A Identidade dos Redimidos e o Sangue do Cordeiro',
        description: `A Grande Tribulação e a Purificação. Um dos anciãos pergunta a João quem são essas pessoas de branco. João, reverentemente, devolve a pergunta. O ancião explica: "Estes são os que vieram da grande tribulação". Embora alguns interpretem isso como um período específico de sofrimento no fim dos tempos, no contexto do Apocalipse, a "grande tribulação" frequentemente se refere a todo o período de sofrimento e perseguição que a igreja enfrenta entre a primeira e a segunda vinda de Cristo. O detalhe mais importante é como eles obtiveram as vestes brancas: "lavaram as suas vestes e as branquearam no sangue do Cordeiro". O paradoxo glorioso do evangelho é que o sangue vermelho de Cristo é a única coisa que pode lavar a mancha negra do pecado e nos tornar perfeitamente brancos e aceitáveis diante de Deus.`
      },
      {
        verseRef: 'v. 15-17',
        title: 'O Conforto Eterno e o Pastoreio do Cordeiro',
        description: `A Presença de Deus e o Fim da Dor. Os versículos finais descrevem a recompensa eterna dos redimidos. Eles servem a Deus dia e noite no Seu templo, e Deus "estenderá o seu tabernáculo sobre eles" (habitará intimamente com eles). Eles nunca mais terão fome, sede, ou sofrerão com o calor do sol (uma promessa de provisão total e proteção contra as aflições terrenas). A razão para essa paz é bela e paradoxal (v. 17): "Porque o Cordeiro que está no meio do trono os apascentará". O Cordeiro se torna o Pastor, guiando-os às "fontes das águas da vida". A promessa final é a mais terna de todas: "E Deus limpará de seus olhos toda a lágrima". O próprio Deus consolará pessoalmente cada um dos Seus filhos, removendo toda a dor do passado.`
      }
    ],
    conclusion: `A visão da grande multidão nos garante que o sofrimento da igreja na terra não é em vão e não é o fim da história. O evangelho triunfará globalmente, reunindo pessoas de todas as nações. Para aqueles que lavaram as suas vestes no sangue de Cristo e perseveraram na tribulação, o futuro é de alegria indescritível, onde o Cordeiro será o nosso Pastor e Deus enxugará todas as nossas lágrimas para sempre.`
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
  console.log('Successfully added 10 new pericopes for Revelation.');
} else {
  console.error('Could not find the end of the pericopes array.');
}
