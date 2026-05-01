const fs = require('fs');

const newPericopes = [
  {
    id: 'jos_2_1_24',
    bookId: 'JOS',
    chapter: 2,
    startVerse: 1,
    endVerse: 24,
    title: 'Raabe e os Espias',
    theme: 'A Fé Surpreendente e a Salvação pela Graça',
    introduction: 'Antes de cruzar o Jordão, Josué envia secretamente dois espias a Jericó. Lá, eles encontram abrigo na casa de Raabe, uma prostituta cananeia. Este episódio revela que a fé e a salvação de Deus podem alcançar as pessoas mais improváveis, mesmo em uma cidade condenada à destruição.',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'O Esconderijo Inesperado',
        description: 'Os espias entram na casa de Raabe. Quando o rei de Jericó descobre e manda buscá-los, Raabe os esconde no eirado sob canas de linho e despista os guardas. Ela arrisca a própria vida para proteger os mensageiros de Israel, demonstrando uma fé em ação.'
      },
      {
        verseRef: 'v. 8-14',
        title: 'A Confissão de Fé de Raabe',
        description: 'Raabe faz uma declaração teológica impressionante: "Bem sei que o Senhor vos deu esta terra... porque o Senhor vosso Deus é Deus em cima nos céus e em baixo na terra". Ela ouviu sobre o Mar Vermelho e os reis amorreus, e creu. Ela pede um sinal seguro de que sua família será poupada.'
      },
      {
        verseRef: 'v. 15-24',
        title: 'O Fio de Escarlata e o Relatório',
        description: 'Os espias prometem poupar sua família se ela amarrar um "cordão de fio de escarlata" na janela e reunir todos dentro de casa (um eco da Páscoa). Ela os ajuda a fugir. Os espias retornam a Josué com um relatório cheio de fé: "Certamente o Senhor tem dado toda esta terra nas nossas mãos".'
      }
    ],
    conclusion: 'Que possamos ter a fé corajosa de Raabe, confiando que a graça de Deus pode salvar e transformar qualquer pessoa.'
  },
  {
    id: 'jos_3_1_17',
    bookId: 'JOS',
    chapter: 3,
    startVerse: 1,
    endVerse: 17,
    title: 'A Travessia do Jordão',
    theme: 'O Passo de Fé e o Milagre da Passagem',
    introduction: 'Para entrar na Terra Prometida, Israel precisa cruzar o rio Jordão, que estava transbordando em suas margens (época da colheita). A travessia não ocorre por meios naturais, mas por um milagre que exige um passo de fé dos sacerdotes e exalta a liderança de Josué perante o povo.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Preparação e a Santificação',
        description: 'Josué ordena que o povo siga a Arca da Aliança, mantendo distância de reverência, pois "por este caminho nunca passastes antes". Ele dá a ordem crucial: "Santificai-vos, porque amanhã fará o Senhor maravilhas no meio de vós". O milagre divino exige a preparação espiritual do povo.'
      },
      {
        verseRef: 'v. 7-13',
        title: 'A Promessa e o Teste de Fé',
        description: 'Deus promete engrandecer Josué para que o povo saiba que Deus está com ele, assim como esteve com Moisés. A instrução é específica: os sacerdotes que levam a Arca devem parar na beira das águas do Jordão. A água só se abrirá *depois* que eles molharem os pés.'
      },
      {
        verseRef: 'v. 14-17',
        title: 'O Milagre das Águas Paradas',
        description: 'Quando os pés dos sacerdotes tocam a água, as águas que vêm de cima param e se amontoam muito longe, na cidade de Adã. As águas que descem para o Mar Morto secam completamente. Os sacerdotes ficam parados no meio do rio em terra seca até que toda a nação atravesse.'
      }
    ],
    conclusion: 'Que possamos dar o passo de fé necessário, confiando que Deus abrirá o caminho diante de nós no momento certo.'
  },
  {
    id: 'jos_4_1_24',
    bookId: 'JOS',
    chapter: 4,
    startVerse: 1,
    endVerse: 24,
    title: 'As Doze Pedras do Memorial',
    theme: 'A Importância da Memória e do Testemunho',
    introduction: 'Após a travessia milagrosa do Jordão, Deus não permite que o povo simplesmente siga em frente. Ele ordena a construção de um memorial com doze pedras tiradas do leito do rio. O propósito é garantir que as futuras gerações e todos os povos da terra conheçam o poder de Deus.',
    points: [
      {
        verseRef: 'v. 1-9',
        title: 'A Coleta das Pedras',
        description: 'Deus ordena que doze homens (um de cada tribo) peguem doze pedras do meio do Jordão, exatamente onde os sacerdotes estavam parados, e as levem para o acampamento (Gilgal). Josué também levanta doze pedras no meio do rio. A memória deve ser ancorada em fatos concretos.'
      },
      {
        verseRef: 'v. 10-18',
        title: 'A Conclusão da Travessia',
        description: 'Os sacerdotes permanecem no meio do rio até que tudo se cumpra. Cerca de 40.000 homens armados das tribos de Rúben, Gade e Manassés atravessam na frente. Quando os sacerdotes finalmente saem e pisam na margem, as águas do Jordão voltam a transbordar como antes.'
      },
      {
        verseRef: 'v. 19-24',
        title: 'O Propósito Pedagógico do Memorial',
        description: 'Josué ergue as pedras em Gilgal e explica o seu propósito: quando os filhos perguntarem no futuro "Que significam estas pedras?", os pais devem contar o milagre do Jordão (comparando-o ao Mar Vermelho). O objetivo é duplo: que todos os povos conheçam a mão forte do Senhor e que Israel tema a Deus para sempre.'
      }
    ],
    conclusion: 'Que possamos construir memoriais da fidelidade de Deus em nossas vidas, para não esquecermos e para testemunharmos à próxima geração.'
  },
  {
    id: 'jos_5_1_12',
    bookId: 'JOS',
    chapter: 5,
    startVerse: 1,
    endVerse: 12,
    title: 'A Circuncisão e a Páscoa em Gilgal',
    theme: 'A Renovação da Aliança e o Fim do Opróbrio',
    introduction: 'Antes de iniciar a conquista militar de Canaã, Israel precisa resolver sua situação espiritual. A nova geração nascida no deserto não havia sido circuncidada. Em Gilgal, eles renovam o sinal da aliança e celebram a Páscoa, marcando o fim da vergonha do Egito e o início de uma nova era.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Temor dos Inimigos e a Ordem Divina',
        description: 'Quando os reis cananeus ouvem sobre o milagre do Jordão, seus corações se derretem de medo. Estrategicamente, seria o momento de atacar. Mas Deus ordena a Josué que circuncide os filhos de Israel. A preparação espiritual e a obediência à aliança são mais importantes que a estratégia militar.'
      },
      {
        verseRef: 'v. 4-9',
        title: 'A Remoção do Opróbrio',
        description: 'A geração que saiu do Egito (que era circuncidada) morreu no deserto por desobediência. Os que nasceram no caminho não foram circuncidados. Após a circuncisão, Deus declara: "Hoje retirei de sobre vós o opróbrio do Egito". O lugar é chamado Gilgal ("círculo" ou "rolar"). A vergonha da escravidão e da rebelião foi removida.'
      },
      {
        verseRef: 'v. 10-12',
        title: 'A Páscoa e o Fim do Maná',
        description: 'Acampados em Gilgal, eles celebram a Páscoa no dia catorze do mês. No dia seguinte, comem do produto da terra de Canaã (pães asmos e espigas tostadas). No dia em que comem do fruto da terra, o maná cessa. A provisão milagrosa do deserto dá lugar à provisão natural da Terra Prometida.'
      }
    ],
    conclusion: 'Que possamos renovar nossa aliança com Deus, deixando para trás a vergonha do passado e desfrutando da nova provisão que Ele nos dá.'
  },
  {
    id: 'jos_5_13_15',
    bookId: 'JOS',
    chapter: 5,
    startVerse: 13,
    endVerse: 15,
    title: 'O Príncipe do Exército do Senhor',
    theme: 'A Submissão à Liderança Divina',
    introduction: 'Enquanto Josué observa Jericó, planejando o ataque, ele tem um encontro transformador. Ele descobre que a verdadeira liderança da conquista não pertence a ele, mas a um Comandante celestial. Esta teofania (ou cristofania) redefine a perspectiva de Josué sobre a guerra.',
    points: [
      {
        verseRef: 'v. 13',
        title: 'O Encontro e a Pergunta',
        description: 'Josué, perto de Jericó, levanta os olhos e vê um homem em pé diante dele, com uma espada desembainhada na mão. Josué, como líder militar, faz a pergunta lógica: "És tu dos nossos, ou dos nossos inimigos?". Ele quer saber de que lado o homem está.'
      },
      {
        verseRef: 'v. 14a',
        title: 'A Resposta Surpreendente',
        description: 'A resposta do homem é um enfático "Não". Ele não veio para tomar partido humano. Ele declara: "mas venho agora como príncipe [comandante] do exército do Senhor". Deus não veio para ser o assistente de Josué na guerra de Israel; Ele veio para assumir o comando da Sua própria guerra.'
      },
      {
        verseRef: 'v. 14b-15',
        title: 'A Adoração e a Santidade',
        description: 'Josué imediatamente entende, prostra-se com o rosto em terra, adora e pergunta: "Que diz meu senhor ao seu servo?". O Príncipe ordena que Josué tire as sandálias, pois o lugar é santo (ecoando o chamado de Moisés na sarça). Josué obedece, demonstrando total submissão ao verdadeiro Líder.'
      }
    ],
    conclusion: 'Que possamos reconhecer que Deus não existe para apoiar nossos planos, mas nós existimos para nos submeter e servir aos propósitos Dele.'
  },
  {
    id: 'jos_7_1_26',
    bookId: 'JOS',
    chapter: 7,
    startVerse: 1,
    endVerse: 26,
    title: 'O Pecado de Acã e a Derrota em Ai',
    theme: 'O Pecado Oculto e a Responsabilidade Corporativa',
    introduction: 'Após a vitória espetacular em Jericó, Israel sofre uma derrota humilhante na pequena cidade de Ai. O motivo não é fraqueza militar, mas um pecado oculto no acampamento. A história de Acã demonstra que o pecado individual afeta toda a comunidade e bloqueia a bênção de Deus.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Transgressão e a Derrota',
        description: 'O capítulo começa revelando o segredo: Acã tomou do "anátema" (coisas consagradas à destruição em Jericó). A ira do Senhor se acende contra *Israel*. Josué, sem saber do pecado, envia um pequeno exército a Ai, confiando na força humana. Eles são derrotados e 36 homens morrem. O coração do povo se derrete.'
      },
      {
        verseRef: 'v. 6-15',
        title: 'A Revelação do Pecado',
        description: 'Josué clama a Deus em desespero. Deus responde duramente: "Levanta-te; por que estás prostrado assim sobre o teu rosto? Israel pecou...". Deus explica que eles não poderão resistir aos inimigos enquanto o anátema não for removido. Ele ordena uma busca tribo por tribo, família por família.'
      },
      {
        verseRef: 'v. 16-26',
        title: 'A Confissão e o Julgamento',
        description: 'A sorte cai sobre Acã. Ele confessa: "vi entre os despojos uma boa capa babilônica, e duzentos siclos de prata, e uma cunha de ouro... cobicei-os e tomei-os". O pecado seguiu o padrão de Eva: ver, cobiçar, tomar e esconder. Acã, sua família e tudo o que tinha são apedrejados e queimados no vale de Acor (Perturbação).'
      }
    ],
    conclusion: 'Que possamos fugir da cobiça e do pecado oculto, sabendo que nossas ações afetam a comunidade e entristecem a Deus.'
  },
  {
    id: 'jos_8_1_35',
    bookId: 'JOS',
    chapter: 8,
    startVerse: 1,
    endVerse: 35,
    title: 'A Vitória sobre Ai e a Renovação da Aliança',
    theme: 'A Restauração após o Arrependimento e o Compromisso com a Palavra',
    introduction: 'Com o pecado de Acã removido, Deus encoraja Josué e lhe dá uma nova estratégia para tomar Ai. Após a vitória, Israel viaja para o Monte Ebal para um momento crucial de adoração e renovação da aliança, cumprindo a ordem de Moisés.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'O Encorajamento e a Nova Estratégia',
        description: 'Deus diz a Josué: "Não temas, e não te espantes". O perdão traz restauração da confiança. Deus instrui Josué a levar toda a gente de guerra (não apenas alguns) e a usar uma emboscada. Desta vez, eles têm permissão para tomar os despojos e o gado para si.'
      },
      {
        verseRef: 'v. 18-28',
        title: 'A Vitória e a Lança Estendida',
        description: 'A estratégia da emboscada funciona perfeitamente. O rei de Ai é atraído para fora, e a cidade é tomada e incendiada. Deus ordena a Josué que estenda a lança em direção a Ai, e ele não a recolhe até que todos os inimigos sejam destruídos, lembrando as mãos levantadas de Moisés contra Amaleque.'
      },
      {
        verseRef: 'v. 30-35',
        title: 'O Altar e a Leitura da Lei',
        description: 'Após a vitória, Josué constrói um altar de pedras inteiras no Monte Ebal, oferece sacrifícios e escreve nas pedras uma cópia da lei de Moisés. Metade do povo fica no monte Gerizim (bênção) e metade no Ebal (maldição). Josué lê todas as palavras da lei perante toda a congregação, incluindo mulheres, crianças e estrangeiros.'
      }
    ],
    conclusion: 'Que possamos experimentar a restauração de Deus após o arrependimento e renovar constantemente nosso compromisso com a Sua Palavra.'
  },
  {
    id: 'jos_9_1_27',
    bookId: 'JOS',
    chapter: 9,
    startVerse: 1,
    endVerse: 27,
    title: 'O Engano dos Gibeonitas',
    theme: 'O Perigo de Agir sem Consultar a Deus',
    introduction: 'Enquanto os reis de Canaã se unem para lutar contra Israel, os habitantes de Gibeão escolhem uma estratégia diferente: o engano. Eles se disfarçam de viajantes distantes para fazer um tratado de paz. A falha de Josué e dos líderes em consultar a Deus resulta em um compromisso precipitado.',
    points: [
      {
        verseRef: 'v. 3-6',
        title: 'A Estratégia do Engano',
        description: 'Os gibeonitas, sabendo da destruição de Jericó e Ai, usam de astúcia. Eles se vestem com roupas velhas, sapatos remendados e levam pão seco e bolorento. Eles chegam a Gilgal e dizem a Josué: "Viemos de uma terra muito distante; fazei, pois, agora aliança conosco".'
      },
      {
        verseRef: 'v. 14-15',
        title: 'A Falha Fatal: Não Consultar a Deus',
        description: 'Os israelitas examinam as provisões (as evidências físicas), mas cometem um erro crucial: "E os homens de Israel tomaram da provisão deles e não pediram conselho à boca do Senhor". Confiando em seus próprios sentidos e julgamento, Josué faz paz e aliança com eles, poupando-lhes a vida.'
      },
      {
        verseRef: 'v. 16-27',
        title: 'A Descoberta e as Consequências',
        description: 'Três dias depois, descobrem que os gibeonitas são vizinhos. A congregação murmura contra os líderes, mas o juramento feito em nome do Senhor não pode ser quebrado. Os gibeonitas são poupados, mas são transformados em servos perpétuos (rachadores de lenha e tiradores de água) para a congregação e para o altar do Senhor.'
      }
    ],
    conclusion: 'Que possamos aprender a buscar a direção de Deus em todas as decisões, não confiando apenas em nossa própria compreensão ou nas aparências.'
  },
  {
    id: 'jos_10_6_14',
    bookId: 'JOS',
    chapter: 10,
    startVerse: 6,
    endVerse: 14,
    title: 'O Sol e a Lua Param',
    theme: 'O Poder de Deus sobre a Criação e a Oração Ousada',
    introduction: 'Cinco reis amorreus atacam Gibeão (agora aliada de Israel). Josué marcha a noite toda para defendê-los. O que se segue é uma das batalhas mais extraordinárias da história, onde Deus usa pedras de granizo e altera o curso da natureza em resposta à oração de um homem.',
    points: [
      {
        verseRef: 'v. 6-11',
        title: 'A Intervenção Divina e as Pedras de Granizo',
        description: 'Os gibeonitas pedem socorro. Deus encoraja Josué: "Não os temas, porque os tenho dado na tua mão". Israel ataca de surpresa e os derrota. Enquanto os inimigos fogem, o Senhor lança sobre eles grandes pedras de granizo do céu. O texto nota que mais morreram pelo granizo do que pela espada dos israelitas.'
      },
      {
        verseRef: 'v. 12-13',
        title: 'A Oração Ousada de Josué',
        description: 'Precisando de mais tempo para completar a vitória antes que escureça, Josué fala ao Senhor e declara perante Israel: "Sol, detém-te em Gibeão, e tu, lua, no vale de Ajalom". O sol se deteve e a lua parou até que o povo se vingou de seus inimigos. O dia foi prolongado miraculosamente.'
      },
      {
        verseRef: 'v. 14',
        title: 'A Singularidade do Evento',
        description: 'O autor bíblico destaca a magnitude do milagre: "E não houve dia semelhante a este, nem antes nem depois dele, ouvindo o Senhor assim a voz de um homem; porque o Senhor pelejava por Israel". A criação obedece ao Criador, e o Criador ouve a oração ousada do Seu servo.'
      }
    ],
    conclusion: 'Que possamos orar com ousadia, crendo que servimos a um Deus Todo-Poderoso que peleja por nós e governa toda a criação.'
  },
  {
    id: 'jos_14_6_15',
    bookId: 'JOS',
    chapter: 14,
    startVerse: 6,
    endVerse: 15,
    title: 'A Herança de Calebe',
    theme: 'A Fé Perseverante e a Recompensa da Fidelidade',
    introduction: 'Após a fase principal da conquista, chega o momento de dividir a terra. Calebe, agora com 85 anos, aproxima-se de Josué para reivindicar a promessa que Moisés lhe fizera 45 anos antes. Sua fé e vigor permanecem inabaláveis, mesmo diante de gigantes.',
    points: [
      {
        verseRef: 'v. 6-9',
        title: 'A Memória da Fidelidade',
        description: 'Calebe lembra a Josué do tempo em Cades-Barneia, quando eles foram espiar a terra. Enquanto os outros espias fizeram derreter o coração do povo, Calebe diz: "eu, porém, perseverei em seguir ao Senhor meu Deus". Por causa dessa fidelidade, Moisés jurou dar-lhe a terra que ele havia pisado.'
      },
      {
        verseRef: 'v. 10-11',
        title: 'O Vigor Preservado por Deus',
        description: 'Calebe testemunha a fidelidade de Deus: "o Senhor me conservou em vida... e eis que hoje tenho já oitenta e cinco anos". Ele declara que ainda é tão forte para a guerra hoje quanto era aos 40 anos. A fé e a confiança em Deus renovam as forças.'
      },
      {
        verseRef: 'v. 12-15',
        title: 'O Pedido Ousado: "Dá-me este monte"',
        description: 'Calebe não pede uma planície fácil, mas a montanha de Hebrom, onde ainda habitam os anaquins (gigantes) e existem grandes cidades fortificadas. Ele confia: "porventura o Senhor será comigo, para os expulsar". Josué o abençoa e lhe dá Hebrom por herança, e a terra repousa da guerra.'
      }
    ],
    conclusion: 'Que possamos perseverar em seguir ao Senhor, mantendo a fé e a coragem para enfrentar os "gigantes" em qualquer idade.'
  },
  {
    id: 'jos_20_1_9',
    bookId: 'JOS',
    chapter: 20,
    startVerse: 1,
    endVerse: 9,
    title: 'As Cidades de Refúgio',
    theme: 'A Justiça, a Misericórdia e a Proteção Divina',
    introduction: 'Deus ordena a Josué que estabeleça seis "cidades de refúgio" espalhadas por Israel. Estas cidades serviam como asilo para quem matasse alguém acidentalmente, protegendo-o do "vingador do sangue" até que houvesse um julgamento justo. É uma bela ilustração da graça e do refúgio que encontramos em Deus.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Propósito do Refúgio',
        description: 'Deus instrui a designar as cidades para que fuja para lá o homicida que matar alguém "por engano e não com intenção". O objetivo é proteger a vida do inocente da vingança impulsiva do parente da vítima (o vingador do sangue), garantindo o direito a um julgamento.'
      },
      {
        verseRef: 'v. 4-6',
        title: 'O Processo de Asilo',
        description: 'O fugitivo deve apresentar sua causa aos anciãos à porta da cidade. Se aceito, ele recebe asilo. Se o vingador o perseguir, a cidade não deve entregá-lo. O fugitivo deve permanecer na cidade até ser julgado pela congregação e até a morte do sumo sacerdote em exercício, após o que ele pode voltar para casa.'
      },
      {
        verseRef: 'v. 7-9',
        title: 'A Acessibilidade do Refúgio',
        description: 'Seis cidades são separadas: três a oeste do Jordão (Quedes, Siquém, Hebrom) e três a leste (Bezer, Ramote, Golã). Elas foram estrategicamente distribuídas (norte, centro, sul) para que o refúgio estivesse sempre acessível a qualquer israelita ou estrangeiro que precisasse fugir rapidamente.'
      }
    ],
    conclusion: 'Que possamos encontrar em Cristo a nossa verdadeira Cidade de Refúgio, onde somos protegidos da condenação e recebemos misericórdia.'
  },
  {
    id: 'jos_22_1_6',
    bookId: 'JOS',
    chapter: 22,
    startVerse: 1,
    endVerse: 6,
    title: 'A Despedida das Tribos Transjordanianas',
    theme: 'O Cumprimento da Promessa e a Exortação à Fidelidade',
    introduction: 'Após anos de guerra e a divisão da terra, Josué convoca as tribos de Rúben, Gade e a meia tribo de Manassés. Eles haviam deixado suas famílias a leste do Jordão para ajudar seus irmãos na conquista. Agora, com a missão cumprida, eles são liberados para voltar para casa com a bênção de Josué.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Reconhecimento da Fidelidade',
        description: 'Josué elogia as tribos por terem guardado tudo o que Moisés ordenou e por terem obedecido à voz de Josué. Eles não desampararam seus irmãos durante os muitos dias de guerra, mas cumpriram fielmente o seu dever. A fidelidade aos compromissos é honrada por Deus e pelos líderes.'
      },
      {
        verseRef: 'v. 4',
        title: 'A Liberação para o Descanso',
        description: 'Josué declara: "E agora o Senhor vosso Deus deu repouso a vossos irmãos, como lhes tinha dito". A promessa de descanso foi cumprida. Portanto, eles estão livres para voltar às suas tendas e à terra da sua possessão, que Moisés lhes dera além do Jordão.'
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Exortação Final e a Bênção',
        description: 'Antes de partirem, Josué dá um conselho vital: "Tão somente guardai-vos com diligência de... amar ao Senhor vosso Deus, e de andar em todos os seus caminhos... e de vos achegardes a ele, e de o servirdes com todo o vosso coração e com toda a vossa alma". Josué os abençoa e eles partem com grandes riquezas.'
      }
    ],
    conclusion: 'Que possamos ser fiéis aos nossos compromissos com nossos irmãos e amar ao Senhor de todo o nosso coração em todas as fases da vida.'
  },
  {
    id: 'jos_23_1_16',
    bookId: 'JOS',
    chapter: 23,
    startVerse: 1,
    endVerse: 16,
    title: 'O Discurso de Despedida de Josué',
    theme: 'A Fidelidade de Deus e o Perigo da Assimilação',
    introduction: 'Sendo já velho, Josué convoca os líderes de Israel para seu discurso de despedida. Ele relembra as vitórias dadas por Deus, exorta-os a permanecerem separados das nações pagãs e adverte severamente sobre as consequências da desobediência e dos casamentos mistos.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Obra do Senhor',
        description: 'Josué lembra aos líderes que foi o Senhor quem pelejou por eles e expulsou as nações. Ele promete que Deus continuará a expulsar os inimigos restantes, para que Israel possua a terra, conforme a promessa. A confiança para o futuro baseia-se na fidelidade de Deus no passado.'
      },
      {
        verseRef: 'v. 6-11',
        title: 'O Chamado à Separação e ao Amor',
        description: 'Josué exorta: "Esforçai-vos, pois, muito para guardardes e para fazerdes tudo quanto está escrito no livro da lei de Moisés". Eles não devem se misturar com as nações restantes, nem mencionar ou jurar pelos seus deuses. O antídoto contra a apostasia é: "Portanto, guardai diligentemente as vossas almas, para amardes ao Senhor vosso Deus".'
      },
      {
        verseRef: 'v. 12-16',
        title: 'O Alerta contra a Assimilação',
        description: 'Se eles se unirem em casamento com essas nações, Deus não as expulsará mais. Em vez disso, elas se tornarão "laço e rede para vós, e açoite para as vossas ilhargas, e espinhos para os vossos olhos", até que Israel pereça da boa terra. Assim como todas as boas palavras de Deus se cumpriram, também as ameaças se cumprirão se quebrarem a aliança.'
      }
    ],
    conclusion: 'Que possamos amar ao Senhor diligentemente e nos guardar das influências do mundo que nos afastam da Sua vontade.'
  },
  {
    id: 'jos_24_1_13',
    bookId: 'JOS',
    chapter: 24,
    startVerse: 1,
    endVerse: 13,
    title: 'A Revisão da História da Salvação',
    theme: 'A Graça Soberana de Deus na História de Israel',
    introduction: 'No seu último ato público, Josué reúne todas as tribos em Siquém para renovar a aliança. Ele fala como profeta, transmitindo as palavras do próprio Deus ("Assim diz o Senhor"). Deus reconta a história de Israel, desde Abraão até a conquista, enfatizando que tudo foi obra da Sua graça, não do esforço humano.',
    points: [
      {
        verseRef: 'v. 2-4',
        title: 'O Chamado da Idolatria',
        description: 'Deus lembra que os antepassados (como Terá, pai de Abraão) habitavam além do rio Eufrates e "serviam a outros deuses". A história de Israel não começa com o mérito de Abraão, mas com a graça de Deus que o tirou da idolatria, o guiou por Canaã e lhe deu Isaque, Jacó e Esaú.'
      },
      {
        verseRef: 'v. 5-7',
        title: 'A Libertação do Egito',
        description: 'Deus relembra o envio de Moisés e Arão, as pragas no Egito e o milagre do Mar Vermelho, onde as trevas cobriram os egípcios e o mar os afogou. "E os vossos olhos viram o que fiz no Egito". A salvação foi uma demonstração visível do poder divino.'
      },
      {
        verseRef: 'v. 8-13',
        title: 'A Conquista da Terra',
        description: 'Deus relata as vitórias sobre os amorreus, o livramento da maldição de Balaão e a queda de Jericó. O refrão constante é "eu os entreguei na vossa mão". Deus conclui: "E eu vos dei a terra em que não trabalhastes, e cidades que não edificastes... e comeis das vinhas e dos olivais que não plantastes". Tudo é graça.'
      }
    ],
    conclusion: 'Que possamos olhar para a nossa própria história e reconhecer que toda a nossa salvação e provisão são frutos da graça imerecida de Deus.'
  }
];

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

// Remove duplicates
const idsToRemove = ['jos_1_1_9', 'jos_6_1_20', 'jos_24_14_24', 'jos_6_1_27'];
const filteredArr = arr.filter(p => !idsToRemove.includes(p.id));

// Append new pericopes
filteredArr.push(...newPericopes);

// Write back
const newArrayContent = JSON.stringify(filteredArr, null, 2);
const newContent = content.substring(0, startIndex) + newArrayContent + content.substring(endIndex + 1);
fs.writeFileSync('data/pericopes_temp.ts', newContent, 'utf8');
console.log('Added 14 new Joshua pericopes and removed 4 duplicates.');
