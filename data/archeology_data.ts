export interface ArcheologyItem {
  id: string;
  title: string;
  period: string;
  discoveryYear: string;
  location: string;
  description: string;
  biblicalRelevance: string;
  details: string[];
  throneRevelation: string;
  color: string;
  imageUrl?: string;
}

export interface ArcheologyCategory {
  id: string;
  title: string;
  items: ArcheologyItem[];
}

export const archeologyData: ArcheologyCategory[] = [
  {
    id: "manuscripts",
    title: "1. MANUSCRITOS E TEXTOS ANTIGOS",
    items: [
      {
        id: "dead-sea-scrolls",
        title: "Os Manuscritos do Mar Morto",
        period: "Séc. III a.C. a Séc. I d.C.",
        discoveryYear: "1947",
        location: "Cavernas de Qumran, Israel",
        description: "A maior descoberta arqueológica do século XX. Um jovem beduíno encontrou jarros de barro contendo rolos antigos preservados pelo clima seco do deserto. Entre eles, cópias de quase todos os livros do Antigo Testamento, sendo 1.000 anos mais antigos que os manuscritos hebraicos conhecidos até então.",
        biblicalRelevance: "Comprova a precisão impressionante da transmissão do texto bíblico ao longo dos milênios. O Grande Rolo de Isaías encontrado em Qumran é virtualmente idêntico ao texto massorético usado nas Bíblias modernas.",
        details: [
          "Foram encontrados cerca de 900 documentos em 11 cavernas.",
          "O Rolo de Isaías (com 7 metros de comprimento) estava completo e intacto.",
          "Os textos foram copiados pela comunidade dos Essênios, uma seita judaica rigorosa."
        ],
        throneRevelation: "Deus escondeu Sua Palavra no deserto mais inóspito da Terra para que, no momento exato em que a crítica moderna tentava destruir a credibilidade da Bíblia, as pedras (e os jarros) clamassem. A Palavra do Senhor permanece para sempre.",
        color: "amber",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Great_Isaiah_Scroll.jpg/800px-Great_Isaiah_Scroll.jpg"
      },
      {
        id: "silver-scrolls",
        title: "Os Rolos de Prata de Ketef Hinnom",
        period: "Séc. VII a.C. (Época do Primeiro Templo)",
        discoveryYear: "1979",
        location: "Jerusalém (Vale de Hinom)",
        description: "Dois minúsculos rolos de prata, usados como amuletos, encontrados em uma tumba escavada na rocha. Eles contêm a mais antiga citação bíblica já descoberta, antecedendo os Manuscritos do Mar Morto em 400 anos.",
        biblicalRelevance: "Contêm a 'Bênção Sacerdotal' de Números 6:24-26 ('O Senhor te abençoe e te guarde...'). Isso refuta a teoria crítica de que o Pentateuco foi escrito apenas após o exílio babilônico.",
        details: [
          "Os rolos eram tão frágeis que levaram três anos para serem desenrolados em laboratório.",
          "A palavra 'Yahweh' (Senhor) aparece escrita em hebraico antigo (paleo-hebraico).",
          "Foram encontrados em um repositório de ossos sob os bancos de pedra da tumba."
        ],
        throneRevelation: "A bênção de Deus é a coisa mais antiga que a arqueologia conseguiu desenterrar sobre a nossa fé. Antes de encontrarmos registros de guerras ou leis, encontramos Deus dizendo: 'Eu quero te abençoar e te guardar'.",
        color: "slate",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ketef_Hinnom_silver_scrolls.jpg/800px-Ketef_Hinnom_silver_scrolls.jpg"
      }
    ]
  },
  {
    id: "monuments",
    title: "2. MONUMENTOS E INSCRIÇÕES",
    items: [
      {
        id: "tel-dan-stele",
        title: "A Estela de Tel Dã (A Casa de Davi)",
        period: "Séc. IX a.C.",
        discoveryYear: "1993",
        location: "Tel Dã, Norte de Israel",
        description: "Um fragmento de pedra basáltica com uma inscription aramaica comemorando a vitória de um rei arameu (provavelmente Hazael) sobre Israel e Judá.",
        biblicalRelevance: "É a primeira e mais antiga menção extra-bíblica do Rei Davi. A inscrição diz claramente 'Casa de Davi' (Beit David), destruindo o argumento de historiadores minimalistas que afirmavam que Davi era apenas um mito literário.",
        details: [
          "A pedra foi quebrada e usada como material de construção em um muro posterior.",
          "Menciona a morte de Jorão (rei de Israel) e Acazias (rei da 'Casa de Davi').",
          "Corrobora o cenário geopolítico descrito em 2 Reis 8 e 9."
        ],
        throneRevelation: "Os inimigos de Deus tentaram gravar suas vitórias na pedra para apagar a linhagem messiânica. Mas Deus usou a própria pedra de tropeço do inimigo para provar, 3.000 anos depois, que a aliança com Davi é real e inquebrável.",
        color: "indigo",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Tel_Dan_Stele.jpg/800px-Tel_Dan_Stele.jpg"
      },
      {
        id: "merneptah-stele",
        title: "A Estela de Merneptah (Estela de Israel)",
        period: "1208 a.C.",
        discoveryYear: "1896",
        location: "Tebas, Egito",
        description: "Uma grande estela de granito preto que descreve as vitórias do faraó Merneptah. É famosa por conter a menção mais antiga de 'Israel' como um povo fora do Egito.",
        biblicalRelevance: "Prova que Israel já estava estabelecido como uma nação ou grupo étnico na terra de Canaã no final do século XIII a.C., confirmando o cronograma bíblico do Êxodo e da Conquista.",
        details: [
          "A inscrição diz: 'Israel foi devastado, sua semente não existe mais'.",
          "O faraó usou um determinativo hieroglífico que identifica Israel como um povo, não apenas uma cidade.",
          "É um dos pilares da cronologia bíblica egípcia."
        ],
        throneRevelation: "O Faraó declarou que a semente de Israel não existia mais. Mas, enquanto o império de Merneptah virou pó e suas estelas viraram peças de museu, a semente de Israel (o Messias) floresceu e governa as nações. O que o inimigo declara como morto, Deus ressuscita para a eternidade.",
        color: "slate",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Stele_of_Merneptah_Museum_of_Egyptian_Antiquities.jpg/800px-Stele_of_Merneptah_Museum_of_Egyptian_Antiquities.jpg"
      },
      {
        id: "pilate-stone",
        title: "A Pedra de Pilatos",
        period: "Séc. I d.C.",
        discoveryYear: "1961",
        location: "Cesareia Marítima, Israel",
        description: "Um bloco de calcário encontrado nas ruínas do teatro romano de Cesareia, a capital romana da Judeia.",
        biblicalRelevance: "Até 1961, não havia evidência arqueológica da existência de Pôncio Pilatos. A pedra traz uma inscrição em latim dedicando um templo (Tiberieum) ao imperador Tibério, assinada por 'Pôncio Pilatos, Prefeito da Judeia'.",
        details: [
          "A pedra havia sido reutilizada como um degrau em uma escadaria do teatro.",
          "Confirma o título exato de Pilatos ('Prefeito', e não 'Procurador', como se pensava antes).",
          "Cesareia era a sede oficial do governo romano, não Jerusalém."
        ],
        throneRevelation: "O homem que lavou as mãos para tentar se eximir da culpa de condenar o Filho de Deus teve seu nome cravado na pedra e na história. Ninguém pode lavar as mãos diante da verdade; ou você a coroa, ou você a crucifica.",
        color: "rose",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Pilate_Inscription.JPG/800px-Pilate_Inscription.JPG"
      },
      {
        id: "cyrus-cylinder",
        title: "O Cilindro de Ciro",
        period: "539 a.C.",
        discoveryYear: "1879",
        location: "Babilônia (atual Iraque)",
        description: "Um cilindro de argila com escrita cuneiforme acadiana, emitido pelo rei persa Ciro, o Grande, após sua conquista da Babilônia.",
        biblicalRelevance: "Confirma o decreto de Ciro registrado em Esdras 1 e 2 Crônicas 36. O cilindro documenta a política inédita de Ciro de permitir que povos cativos retornassem às suas terras natais e reconstruíssem seus templos.",
        details: [
          "Considerado por muitos como a 'primeira declaração de direitos humanos'.",
          "Ciro afirma ter sido escolhido pelos deuses para libertar os cativos.",
          "A Bíblia (Isaías 45) revela que foi Yahweh quem ungiu Ciro para este propósito, 150 anos antes dele nascer."
        ],
        throneRevelation: "Deus é o Senhor da História. Ele pode usar o imperador mais poderoso do mundo pagão como Seu 'servo' para cumprir Suas promessas. O coração do rei está nas mãos do Senhor (Pv 21:1).",
        color: "emerald",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Cyrus_Cylinder_front.jpg/800px-Cyrus_Cylinder_front.jpg"
      },
      {
        id: "black-obelisk",
        title: "O Obelisco Negro de Salmaneser III",
        period: "841 a.C.",
        discoveryYear: "1846",
        location: "Nimrud, Assíria (Iraque)",
        description: "Um monumento de calcário preto que retrata as conquistas do rei assírio Salmaneser III. Contém cinco painéis de relevos.",
        biblicalRelevance: "Contém a única representação visual contemporânea de um rei israelita. Mostra o rei Jeú (ou seu enviado) prostrado diante do rei assírio, pagando tributo.",
        details: [
          "A inscrição diz: 'Tributo de Jeú, filho de Onri'.",
          "Confirma a pressão militar assíria sobre o Reino do Norte descrita em 2 Reis.",
          "Jeú é retratado com vestes típicas semíticas da época."
        ],
        throneRevelation: "A imagem de um rei de Israel prostrado diante de um ídolo assírio é um lembrete visual do que acontece quando o povo de Deus abandona sua fonte de força. Mas mesmo na humilhação, Deus preservou o registro para que hoje soubéssemos que a história bíblica é palpável.",
        color: "zinc",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Black_Obelisk_of_Shalmaneser_III.jpg/800px-Black_Obelisk_of_Shalmaneser_III.jpg"
      }
    ]
  },
  {
    id: "cities",
    title: "3. CIDADES E ESTRUTURAS",
    items: [
      {
        id: "pool-of-siloam",
        title: "O Tanque de Siloé",
        period: "Séc. VIII a.C. (Ezequias) / Séc. I d.C. (Jesus)",
        discoveryYear: "2004",
        location: "Jerusalém (Cidade de Davi)",
        description: "Um grande reservatório de água alimentado pela fonte de Giom através do Túnel de Ezequias. Foi descoberto acidentalmente durante obras de esgoto.",
        biblicalRelevance: "É o local exato onde Jesus curou o cego de nascença (João 9). A descoberta confirmou as descrições do Evangelho de João, que muitos críticos consideravam alegóricas ou imprecisas.",
        details: [
          "O tanque tem degraus de pedra em todos os lados para permitir o acesso à água em qualquer nível.",
          "Era usado para banhos rituais (mikveh) pelos peregrinos antes de subirem ao Templo.",
          "A água de Siloé era usada na cerimônia de libação da água durante a Festa dos Tabernáculos."
        ],
        throneRevelation: "Siloé significa 'O Enviado'. Jesus enviou o cego para se lavar nas águas do 'Enviado'. A cura só se completa quando obedecemos à palavra do Enviado de Deus, lavando nossa cegueira na fonte da Sua graça.",
        color: "sky",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pool_of_Siloam_2014.jpg/800px-Pool_of_Siloam_2014.jpg"
      },
      {
        id: "siloam-inscription",
        title: "A Inscrição de Siloé",
        period: "c. 701 a.C.",
        discoveryYear: "1880",
        location: "Túnel de Ezequias, Jerusalém",
        description: "Uma inscrição em hebraico antigo encontrada na parede do túnel de água que liga a fonte de Giom ao tanque de Siloé.",
        biblicalRelevance: "Documenta o momento em que as duas equipes de escavadores, trabalhando em direções opostas, se encontraram no meio da rocha. Corrobora 2 Reis 20:20 e 2 Crônicas 32:30 sobre a obra de engenharia de Ezequias.",
        details: [
          "O túnel tem 533 metros de comprimento e foi cavado na rocha sólida.",
          "A inscrição descreve o som das picaretas se encontrando.",
          "É um dos exemplos mais importantes de escrita hebraica do período do Primeiro Templo."
        ],
        throneRevelation: "No meio da escuridão da rocha, duas frentes se encontraram pelo som. Assim é a fé: às vezes não vemos o fim, mas se ouvirmos a voz de Deus e continuarmos cavando, o encontro com a providência é inevitável.",
        color: "blue",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Siloam_Inscription_Istanbul_Museum.jpg/800px-Siloam_Inscription_Istanbul_Museum.jpg"
      },
      {
        id: "jericho-walls",
        title: "As Muralhas de Jericó",
        period: "c. 1400 a.C.",
        discoveryYear: "1930s (Garstang) / 1950s (Kenyon) / 1990s (Wood)",
        location: "Tel es-Sultan, Cisjordânia",
        description: "Escavações revelaram uma cidade fortemente fortificada com um muro duplo de retenção e tijolos de barro. As evidências mostram uma destruição massiva e repentina.",
        biblicalRelevance: "Confirma o relato de Josué 6. A arqueologia mostra que os muros de tijolos de barro caíram para fora e para baixo, formando uma rampa que permitiu aos israelitas subirem diretamente para a cidade.",
        details: [
          "A cidade foi incendiada após a queda dos muros, exatamente como Josué ordenou.",
          "Jarras cheias de grãos carbonizados foram encontradas, provando que a cidade caiu na época da colheita (primavera) e após um cerco muito curto (7 dias).",
          "Uma seção do muro norte não caiu, possivelmente onde ficava a casa de Raabe."
        ],
        throneRevelation: "Os muros não caíram para dentro, caíram para fora, criando o caminho da vitória. Quando Deus derruba as fortalezas do inimigo na sua vida, os próprios escombros se tornam a escada para a sua conquista.",
        color: "orange",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Jericho_Tell_es-Sultan_Trench_I.jpg/800px-Jericho_Tell_es-Sultan_Trench_I.jpg"
      }
    ]
  },
  {
    id: "empires",
    title: "4. REIS, IMPÉRIOS E CONQUISTAS",
    items: [
      {
        id: "sennacherib-prism",
        title: "O Prisma de Senaqueribe (Anais de Taylor)",
        period: "691 a.C.",
        discoveryYear: "1830",
        location: "Nínive (Iraque)",
        description: "Um prisma de argila hexagonal que registra as campanhas militares do rei assírio Senaqueribe, incluindo o cerco de Jerusalém.",
        biblicalRelevance: "Corrobora o relato de 2 Reis 18-19. Senaqueribe vangloria-se de ter prendido Ezequias 'como um pássaro em uma gaiola', mas curiosamente não afirma ter conquistado Jerusalém, confirmando a intervenção divina que salvou a cidade.",
        details: [
          "Menciona o pagamento de tributo por Ezequias (30 talentos de ouro).",
          "O texto omite o desastre do exército assírio (185 mil mortos pelo anjo do Senhor).",
          "É uma peça chave para entender a propaganda política dos impérios antigos."
        ],
        throneRevelation: "O inimigo pode te cercar e te prender como um pássaro, mas ele não pode te tocar se Deus não permitir. O silêncio do prisma sobre a conquista de Jerusalém é o grito da vitória de Deus sobre o orgulho humano.",
        color: "amber",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Sennacherib-Prism.jpg/800px-Sennacherib-Prism.jpg"
      },
      {
        id: "mesha-stele",
        title: "A Estela de Mesa (Pedra Moabita)",
        period: "c. 840 a.C.",
        discoveryYear: "1868",
        location: "Dibon, Jordânia",
        description: "Uma pedra de basalto inscrita pelo rei Mesa, de Moabe, celebrando sua revolta contra o Reino de Israel.",
        biblicalRelevance: "Confirma os eventos de 2 Reis 3. Menciona o rei Onri de Israel e seu filho (Acabe), além de citar explicitamente o nome de 'Yahweh' (o Deus de Israel) e a tribo de Gade.",
        details: [
          "É a inscrição mais extensa já encontrada que se refere ao antigo Israel.",
          "Escrita em um dialeto moabita muito próximo do hebraico bíblico.",
          "Menciona que Moabe foi oprimido por Israel por muitos anos."
        ],
        throneRevelation: "Até as pedras dos inimigos de Israel são forçadas a pronunciar o nome de Yahweh. Deus usa até o registro da rebelião para confirmar a veracidade da Sua aliança e a existência do Seu povo.",
        color: "stone",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Mesha_Stele.jpg/800px-Mesha_Stele.jpg"
      },
      {
        id: "lachish-letters",
        title: "As Cartas de Laquis",
        period: "587 a.C.",
        discoveryYear: "1935",
        location: "Tel Laquis, Israel",
        description: "Uma série de óstracos (fragmentos de cerâmica com escrita) que contêm correspondência militar entre os postos avançados de Judá pouco antes da queda de Jerusalém.",
        biblicalRelevance: "Refletem vividamente o pânico e a urgência descritos em Jeremias 34:7. Uma das cartas diz: 'Estamos vigiando os sinais de Laquis... pois não vemos mais Azeca', confirmando que as cidades estavam caindo uma a uma para os babilônios.",
        details: [
          "Escritas em hebraico clássico com tinta.",
          "Mencionam profetas e nomes bíblicos comuns na época.",
          "Foram encontradas na camada de cinzas da destruição babilônica."
        ],
        throneRevelation: "As cartas param quando a cidade cai. Mas a Palavra de Deus continuou através do profeta Jeremias no exílio. Quando os sinais humanos se apagam, a luz da profecia divina brilha ainda mais forte.",
        color: "orange",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Lachish_Letter_II.jpg/800px-Lachish_Letter_II.jpg"
      }
    ]
  },
  {
    id: "new-testament",
    title: "5. DESCOBERTAS DO NOVO TESTAMENTO",
    items: [
      {
        id: "caiaphas-ossuary",
        title: "O Ossuário de Caifás",
        period: "Séc. I d.C.",
        discoveryYear: "1990",
        location: "Jerusalém (Floresta da Paz)",
        description: "Uma caixa de ossos de calcário ricamente decorada, encontrada em uma tumba familiar. Contém a inscrição 'José, filho de Caifás'.",
        biblicalRelevance: "Confirma a existência histórica do Sumo Sacerdote que presidiu o julgamento de Jesus. O historiador Josefo refere-se a ele exatamente como 'José Caifás'.",
        details: [
          "O ossuário continha os ossos de um homem de cerca de 60 anos.",
          "É um dos ossuários mais ornamentados já encontrados, condizente com o status de um Sumo Sacerdote.",
          "A tumba foi descoberta acidentalmente por trabalhadores que construíam um parque."
        ],
        throneRevelation: "Aquele que tentou encerrar a história de Jesus em um túmulo acabou tendo seus próprios ossos expostos em uma caixa de pedra. O juiz terreno tornou-se uma evidência arqueológica, enquanto o Réu que ele condenou vive e reina para sempre.",
        color: "stone",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Caiaphas_Ossuary.jpg/800px-Caiaphas_Ossuary.jpg"
      },
      {
        id: "galilee-boat",
        title: "O Barco da Galileia (Barco de Jesus)",
        period: "Séc. I d.C.",
        discoveryYear: "1986",
        location: "Mar da Galileia (Ginosar)",
        description: "Um antigo barco de pesca de madeira preservado na lama do Mar da Galileia, revelado durante uma seca severa.",
        biblicalRelevance: "Fornece um modelo exato do tipo de embarcação usada por Jesus e Seus discípulos. As dimensões e a construção coincidem perfeitamente com as descrições dos Evangelhos sobre as travessias e as tempestades.",
        details: [
          "O barco tem 8,2 metros de comprimento e 2,3 metros de largura.",
          "Foi construído com 12 tipos diferentes de madeira, sugerindo reparos constantes e escassez de recursos.",
          "Poderia acomodar até 15 pessoas, o tamanho exato do grupo de Jesus e os doze."
        ],
        throneRevelation: "Este barco enfrentou as mesmas ondas que obedeceram à voz de Jesus. Ele é um lembrete de que a nossa fé não está baseada em mitos, mas em uma realidade onde o Criador entrou em um barco de madeira para nos salvar do naufrágio do pecado.",
        color: "blue",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ancient_Galilee_Boat_2.jpg/800px-Ancient_Galilee_Boat_2.jpg"
      },
      {
        id: "erastus-inscription",
        title: "A Inscrição de Erasto",
        period: "Séc. I d.C.",
        discoveryYear: "1929",
        location: "Corinto, Grécia",
        description: "Uma inscrição em uma praça pavimentada perto do teatro de Corinto, mencionando um oficial chamado Erasto.",
        biblicalRelevance: "Confirma a identidade de Erasto, mencionado por Paulo em Romanos 16:23 como o 'tesoureiro da cidade'. A inscrição diz: 'Erasto, em troca de sua edilidade, pavimentou este chão à sua própria custa'.",
        details: [
          "A 'edilidade' era um cargo público de alto escalão em Corinto.",
          "Prova que o cristianismo primitivo alcançou pessoas de influência e riqueza na sociedade romana.",
          "A localização da inscrição coincide com a área onde os cristãos de Corinto viviam."
        ],
        throneRevelation: "Erasto pavimentou uma rua com seu nome para a glória de Roma, mas Deus usou essa rua para pavimentar a credibilidade da Sua Palavra. O que fazemos para o mundo passa; o que fazemos como servos de Cristo permanece como um testemunho eterno.",
        color: "slate",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Erastus_Inscription_Corinth.jpg/800px-Erastus_Inscription_Corinth.jpg"
      }
    ]
  },
  {
    id: "archives",
    title: "6. ARQUIVOS E TABLETES DA ANTIGUIDADE",
    items: [
      {
        id: "ebla-tablets",
        title: "Os Tabletes de Ebla",
        period: "c. 2350 a.C.",
        discoveryYear: "1974",
        location: "Tell Mardikh, Síria",
        description: "Um arquivo estatal contendo cerca de 18.000 tabletes de argila com escrita cuneiforme, revelando uma civilização desconhecida.",
        biblicalRelevance: "Mencionam nomes de cidades como Sodoma e Gomorra e nomes pessoais como Eber, Israel e Abraão em um contexto muito antigo. Refutam a ideia de que a escrita e a cultura complexa não existiam na época dos patriarcas.",
        details: [
          "Os tabletes tratam de comércio, leis e religião.",
          "Revelam que o hebraico antigo tem raízes linguísticas muito mais profundas do que se pensava.",
          "A biblioteca foi preservada pelo incêndio que destruiu o palácio, cozinhando a argila."
        ],
        throneRevelation: "O fogo que o inimigo enviou para destruir a memória de Ebla foi o mesmo que Deus usou para eternizar os registros que confirmam a antiguidade da Sua revelação. Nada pode queimar o que Deus decidiu preservar.",
        color: "amber",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ebla_clay_tablet.jpg/800px-Ebla_clay_tablet.jpg"
      },
      {
        id: "mari-tablets",
        title: "Os Tabletes de Mari",
        period: "Séc. XVIII a.C.",
        discoveryYear: "1933",
        location: "Tell Hariri, Síria",
        description: "Mais de 20.000 tabletes de argila encontrados no palácio real de Mari, no rio Eufrates.",
        biblicalRelevance: "Descrevem costumes sociais, leis e nomes que coincidem perfeitamente com a vida dos patriarcas em Harã (Gênesis 12-25). Mencionam o povo 'Habiru', que muitos associam aos hebreus.",
        details: [
          "Contêm profecias e oráculos que mostram como Deus se comunicava em contextos semíticos.",
          "Mencionam nomes como Pelegue, Serugue e Naor, antepassados de Abraão.",
          "Ilustram a cultura nômade e seminômade da Mesopotâmia superior."
        ],
        throneRevelation: "Deus não chamou Abraão do vácuo, mas de uma cultura real e documentada. A arqueologia de Mari nos mostra que a Bíblia não é um livro de contos de fadas, mas a história de um Deus real agindo em um mundo real.",
        color: "orange",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mari_tablet_Louvre_AO19038.jpg/800px-Mari_tablet_Louvre_AO19038.jpg"
      },
      {
        id: "nuzi-tablets",
        title: "Os Tabletes de Nuzi",
        period: "Séc. XV a.C.",
        discoveryYear: "1925",
        location: "Yorgan Tepe, Iraque",
        description: "Arquivos familiares que detalham leis e costumes de uma comunidade hurrita.",
        biblicalRelevance: "Explicam costumes estranhos de Gênesis, como a adoção de servos como herdeiros (Eliezer), a venda da primogenitura (Esaú) e o roubo dos ídolos domésticos (Raquel).",
        details: [
          "Revelam que os ídolos domésticos (terafim) eram títulos de propriedade da herança.",
          "Mostram que a esterilidade de uma esposa exigia que ela fornecesse uma serva ao marido (Hagar).",
          "Validam a autenticidade histórica das narrativas patriarcais."
        ],
        throneRevelation: "O que parecia estranho ou 'primitivo' na Bíblia revelou-se ser a norma legal da época. Deus usa a cultura do homem para escrever Sua história, provando que Ele está disposto a entrar em nossas leis e costumes para nos levar à Sua justiça.",
        color: "yellow",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Nuzi_tablet_Oriental_Institute.jpg/800px-Nuzi_tablet_Oriental_Institute.jpg"
      }
    ]
  },
  {
    id: "prophecies",
    title: "7. GRANDES CIDADES E PROFECIAS",
    items: [
      {
        id: "amarna-letters",
        title: "As Cartas de Amarna",
        period: "Séc. XIV a.C.",
        discoveryYear: "1887",
        location: "Amarna, Egito",
        description: "Correspondência diplomática entre o faraó egípcio e os governantes de Canaã e outros reinos.",
        biblicalRelevance: "Descrevem o caos em Canaã causado por um povo chamado 'Habiru' que estava conquistando cidades. Muitos estudiosos veem aqui o reflexo da conquista de Canaã sob Josué, vista sob a perspectiva dos cananeus aterrorizados.",
        details: [
          "Os reis cananeus imploram desesperadamente por ajuda militar ao Faraó.",
          "Mencionam Jerusalém (Urusalim) e seu rei Abdi-Heba.",
          "Provam que Canaã era um mosaico de cidades-estado antes da formação de Israel."
        ],
        throneRevelation: "O que para os cananeus era uma invasão de 'Habirus' (estrangeiros), para Deus era o cumprimento da promessa feita a Abraão. A história tem dois lados: o medo do mundo e o avanço do Reino de Deus.",
        color: "rose",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Amarna_Letter_Louvre_AO7093.jpg/800px-Amarna_Letter_Louvre_AO7093.jpg"
      },
      {
        id: "sargon-palace",
        title: "O Palácio de Sargão II",
        period: "722 a.C.",
        discoveryYear: "1843",
        location: "Khorsabad, Iraque",
        description: "Um palácio colossal construído pelo rei assírio Sargão II.",
        biblicalRelevance: "Até sua descoberta, Sargão II era conhecido apenas por uma única menção em Isaías 20:1. Críticos duvidavam de sua existência até que seu palácio inteiro foi desenterrado, confirmando que ele foi o rei que completou a conquista de Samaria e exilou as dez tribos de Israel.",
        details: [
          "Os relevos do palácio mostram o transporte de cedros do Líbano.",
          "Inscrições confirmam o cerco de Samaria e a deportação de 27.290 israelitas.",
          "O palácio cobria 25 acres e tinha mais de 200 pátios e salas."
        ],
        throneRevelation: "Um rei que o mundo esqueceu, mas que a Bíblia lembrou. Deus não esquece os detalhes da história, e Ele usa a pá do arqueólogo para calar a boca do cético e exaltar a precisão da Sua Palavra.",
        color: "zinc",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Sargon_II_and_dignitary.jpg/800px-Sargon_II_and_dignitary.jpg"
      },
      {
        id: "ishtar-gate",
        title: "A Porta de Ishtar",
        period: "c. 575 a.C.",
        discoveryYear: "1899",
        location: "Babilônia (Iraque)",
        description: "A oitava porta da cidade de Babilônia, construída por Nabucodonosor II com tijolos vitrificados azuis e relevos de dragões e touros.",
        biblicalRelevance: "É a porta pela qual o profeta Daniel e os jovens hebreus certamente passaram ao serem levados cativos. Representa o esplendor e a arrogância da Babilônia que Daniel enfrentou com fé.",
        details: [
          "Os dragões (sirrush) e touros representavam os deuses Marduk e Adad.",
          "A inscrição de Nabucodonosor na porta exalta sua própria glória, a mesma que o levou à loucura (Daniel 4).",
          "A porta original foi reconstruída no Museu de Pérgamo, em Berlim."
        ],
        throneRevelation: "Daniel passou por essa porta azul como um escravo, mas saiu como o homem mais sábio do império. O brilho da Babilônia era temporário e vitrificado; o brilho da presença de Deus em Daniel era eterno.",
        color: "blue",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Ishtar_Gate_at_Berlin_Museum.jpg/800px-Ishtar_Gate_at_Berlin_Museum.jpg"
      },
      {
        id: "capernaum-synagogue",
        title: "A Sinagoga de Cafarnaum",
        period: "Séc. I - IV d.C.",
        discoveryYear: "1905",
        location: "Cafarnaum, Israel",
        description: "Ruínas de uma sinagoga de calcário branco construída sobre as fundações de uma sinagoga de basalto negro mais antiga.",
        biblicalRelevance: "A sinagoga de basalto negro inferior é quase certamente o local onde Jesus pregou o 'Sermão do Pão da Vida' (João 6) e realizou inúmeras curas. Cafarnaum era a 'Sua própria cidade' durante Seu ministério na Galileia.",
        details: [
          "Fica a poucos metros da casa de Pedro (também identificada arqueologicamente).",
          "Menciona doadores judeus em inscrições gregas e aramaicas.",
          "É um dos locais mais sagrados da arqueologia cristã."
        ],
        throneRevelation: "As pedras brancas são bonitas, mas a vida estava nas pedras negras de baixo, onde os pés de Jesus pisaram. Deus não habita em templos feitos por mãos humanas, mas Ele santifica os lugares onde Sua voz é ouvida e Seu poder é manifestado.",
        color: "emerald",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Capernaum_Synagogue.jpg/800px-Capernaum_Synagogue.jpg"
      },
      {
        id: "megiddo-armageddon",
        title: "Megido (Armagedom)",
        period: "3000 a.C. - 600 a.C.",
        discoveryYear: "Início do Séc. XX",
        location: "Vale de Jezreel, Israel",
        description: "Um 'tel' (colina arqueológica) contendo 26 camadas de civilizações sobrepostas, estrategicamente localizado em uma rota militar chave.",
        biblicalRelevance: "Palco de batalhas épicas (Débora, Gideão, Josias). O nome 'Armagedom' deriva de 'Har Megiddo' (Monte Megido). É o local profético da batalha final descrita em Apocalipse 16.",
        details: [
          "Contém os famosos 'Estábulos de Salomão' (ou Acabe).",
          "Possui um sistema de água subterrâneo sofisticado para resistir a cercos.",
          "É o sítio arqueológico que melhor ilustra a história militar e política de Israel."
        ],
        throneRevelation: "Onde o mundo vê o palco da destruição final (Armagedom), Deus vê o lugar da vitória definitiva do Cordeiro. Megido é o testemunho de que todas as guerras humanas terminam quando o Rei dos Reis estabelece Seu trono de paz.",
        color: "red",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Tel_Megiddo_aerial_view.jpg/800px-Tel_Megiddo_aerial_view.jpg"
      }
    ]
  }
];
