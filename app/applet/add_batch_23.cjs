const fs = require('fs');

const newPericopes = [
  {
    id: 'psa_2_1_12',
    bookId: 'PSA',
    chapter: 2,
    startVerse: 1,
    endVerse: 12,
    title: 'O Reinado do Ungido',
    theme: 'A Rebelião das Nações, a Soberania Divina e o Rei Messiânico',
    introduction: 'O Salmo 2 é um dos salmos messiânicos mais citados no Novo Testamento. Ele descreve o grande conflito cósmico entre os poderes terrenos e a autoridade de Deus. As nações e os seus líderes conspiram para se libertarem do domínio divino, mas a resposta de Deus não é de pânico, mas de riso soberano. Deus já estabeleceu o Seu Rei (o Ungido, ou Messias) no Seu santo monte. O salmo termina com um ultimato gracioso: beijar o Filho (submeter-se a Ele) é o único caminho para escapar da ira e encontrar refúgio.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Conspiração Inútil das Nações',
        description: 'Os reis da terra e os príncipes se amotinam contra o Senhor e contra o Seu Ungido (Cristo). Eles dizem: "Rompamos as suas ataduras, e sacudamos de nós as suas cordas". É a rebelião humana clássica: o desejo de autonomia absoluta e a rejeição da lei de Deus.'
      },
      {
        verseRef: 'v. 4-6',
        title: 'O Riso e o Decreto do Soberano',
        description: 'Aquele que habita nos céus não se desespera; Ele se ri da arrogância humana. Em seguida, Ele fala na Sua ira e declara o Seu decreto inabalável: "Eu, porém, ungi o meu Rei sobre o meu santo monte de Sião". O trono de Cristo não depende da aprovação das nações.'
      },
      {
        verseRef: 'v. 7-12',
        title: 'A Herança do Filho e o Ultimato',
        description: 'O Filho declara o decreto do Pai: "Tu és meu Filho, eu hoje te gerei". Deus promete dar-lhe as nações por herança. O salmo conclui aconselhando os reis a serem prudentes, servirem ao Senhor com temor e "beijarem o Filho" (sinal de homenagem e submissão), pois "bem-aventurados todos aqueles que nele confiam".'
      }
    ],
    conclusion: 'O Salmo 2 nos dá uma perspectiva eterna sobre as crises políticas e culturais do nosso tempo. O mundo frequentemente parece estar fora de controle, em rebelião aberta contra os valores de Deus. No entanto, o trono do céu não está ameaçado. Deus já instalou o Seu Rei, Jesus Cristo. A nossa resposta a essa realidade não deve ser o medo, mas a submissão alegre ("beijai o Filho"). Aqueles que lutam contra Cristo serão quebrados como vasos de oleiro, mas aqueles que se refugiam nEle encontrarão a verdadeira bem-aventurança.'
  },
  {
    id: 'psa_8_1_9',
    bookId: 'PSA',
    chapter: 8,
    startVerse: 1,
    endVerse: 9,
    title: 'A Majestade de Deus e a Dignidade do Homem',
    theme: 'A Criação, a Insignificância Humana e a Coroa de Glória',
    introduction: 'O Salmo 8 é um hino de louvor que contrasta a vastidão do universo com a pequenez do ser humano. Davi, provavelmente olhando para o céu estrelado, fica maravilhado com a majestade do Criador. A grande pergunta do salmo é: "Que é o homem, para que te lembres dele?". A resposta revela o paradoxo da nossa existência: fisicamente, somos poeira no cosmos; mas teologicamente, fomos coroados de glória e honra, feitos um pouco menores que os anjos, e recebemos domínio sobre a criação. Este salmo encontra o seu cumprimento final em Jesus Cristo (Hebreus 2).',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Majestade Divina e o Louvor dos Pequeninos',
        description: 'O salmo começa e termina com a mesma exclamação: "Ó Senhor, Senhor nosso, quão admirável é o teu nome em toda a terra!". A glória de Deus está acima dos céus, mas Ele escolhe usar o louvor da boca de "meninos e de crianças de peito" para calar o inimigo e o vingador. O poder de Deus se aperfeiçoa na fraqueza.'
      },
      {
        verseRef: 'v. 3-4',
        title: 'O Contraste Cósmico',
        description: 'Davi contempla os céus, a lua e as estrelas (obra dos dedos de Deus). Diante da imensidão do universo, ele sente a sua própria insignificância: "Que é o homem mortal para que te lembres dele? e o filho do homem, para que o visites?". É a humildade nascida da observação da criação.'
      },
      {
        verseRef: 'v. 5-9',
        title: 'A Coroa de Glória e o Domínio',
        description: 'Apesar da nossa pequenez, Deus nos deu um lugar de exaltação. Fomos feitos "um pouco menores do que os anjos" e coroados de glória e de honra. Deus nos deu domínio sobre as obras das Suas mãos (ovelhas, bois, aves, peixes). O homem é o vice-regente de Deus na terra.'
      }
    ],
    conclusion: 'O Salmo 8 nos ensina a verdadeira autoestima. O nosso valor não vem do nosso tamanho ou da nossa força, mas do fato de que o Criador do universo se lembra de nós, nos visita e nos coroa de honra. No entanto, por causa do pecado, falhamos em exercer esse domínio com justiça. É por isso que o autor de Hebreus aplica este salmo a Jesus: Ele é o verdadeiro "Filho do Homem" que foi feito um pouco menor que os anjos (na encarnação), sofreu a morte, e agora está coroado de glória e honra, restaurando a dignidade que havíamos perdido.'
  },
  {
    id: 'psa_16_1_11',
    bookId: 'PSA',
    chapter: 16,
    startVerse: 1,
    endVerse: 11,
    title: 'A Herança do Crente e a Esperança da Ressurreição',
    theme: 'Contentamento, Segurança e a Alegria na Presença de Deus',
    introduction: 'O Salmo 16, um "Mictão" (poema de ouro) de Davi, é uma declaração profunda de contentamento e confiança em Deus. Num mundo onde as pessoas correm atrás de falsos deuses e riquezas materiais, Davi declara que o Senhor é a sua porção e a sua herança. O salmo culmina com uma das profecias mais claras do Antigo Testamento sobre a ressurreição, citada tanto por Pedro no Pentecostes quanto por Paulo em Antioquia. É um salmo que nos ensina que a verdadeira alegria não está nas coisas que Deus nos dá, mas na própria presença de Deus.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Senhor como o Bem Supremo',
        description: 'Davi pede proteção e faz uma declaração radical: "Tu és o meu Senhor; não tenho outro bem além de ti". Ele rejeita a idolatria, afirmando que as dores daqueles que trocam o Senhor por outros deuses se multiplicarão. A sua lealdade é exclusiva a Yahweh e aos santos da terra.'
      },
      {
        verseRef: 'v. 5-8',
        title: 'A Herança Deliciosa e a Segurança',
        description: 'Davi usa a linguagem da divisão de terras de Israel: "O Senhor é a porção da minha herança e do meu cálice... As linhas caíram-me em lugares deliciosos". Ele está plenamente satisfeito com o que Deus lhe deu. Porque ele coloca o Senhor continuamente diante de si, ele não será abalado.'
      },
      {
        verseRef: 'v. 9-11',
        title: 'A Ressurreição e a Plenitude de Alegria',
        description: 'A confiança de Davi transcende a morte: "Pois não deixarás a minha alma no inferno (Sheol), nem permitirás que o teu Santo veja corrupção". Esta é a profecia da ressurreição de Cristo. O salmo termina com a promessa da vida eterna: "Na tua presença há fartura de alegrias; à tua mão direita há delícias perpetuamente".'
      }
    ],
    conclusion: 'O Salmo 16 é o antídoto para a insatisfação moderna. Quando podemos dizer sinceramente que "não temos outro bem além de Deus", as "linhas" da nossa vida sempre cairão em lugares deliciosos, independentemente das nossas circunstâncias financeiras ou sociais. Além disso, a nossa esperança não termina no túmulo. Porque Jesus Cristo (o Santo de Deus) não viu a corrupção e ressuscitou, nós também temos a garantia da vida eterna. A verdadeira e duradoura alegria não é encontrada nos prazeres passageiros deste mundo, mas na presença contínua do nosso Senhor.'
  },
  {
    id: 'psa_22_1_31',
    bookId: 'PSA',
    chapter: 22,
    startVerse: 1,
    endVerse: 31,
    title: 'O Sofrimento e a Vitória do Messias',
    theme: 'O Abandono, a Cruz e o Triunfo Global',
    introduction: 'O Salmo 22 é, sem dúvida, o salmo messiânico mais impressionante da Bíblia. Escrito por Davi séculos antes da invenção da crucificação, ele descreve com precisão cirúrgica a agonia física, emocional e espiritual de Jesus na cruz. O salmo começa com o grito de abandono que Jesus ecoaria no Calvário e detalha a zombaria, a sede e a perfuração das mãos e dos pés. No entanto, no versículo 21, há uma virada dramática: o lamento transforma-se em louvor triunfante. O sofrimento do Messias não termina em derrota, mas resulta na salvação de todas as nações.',
    points: [
      {
        verseRef: 'v. 1-11',
        title: 'O Grito de Abandono e a Zombaria',
        description: 'O salmo abre com as palavras de Cristo na cruz: "Deus meu, Deus meu, por que me desamparaste?". O sofredor sente-se como um "verme, e não homem", desprezado pelo povo. Os que o veem zombam dele, meneando a cabeça e dizendo: "Confiou no Senhor, que o livre". É o retrato exato do Calvário (Mateus 27:39-43).'
      },
      {
        verseRef: 'v. 12-21a',
        title: 'A Agonia Física da Crucificação',
        description: 'Davi descreve os sintomas da crucificação: os ossos desconjuntados, o coração derretido como cera, a sede extrema (a língua pegada ao paladar) e a nudez pública. Ele profetiza detalhes específicos: "Traspassaram-me as mãos e os pés" e "Repartem entre si as minhas vestes, e lançam sortes sobre a minha roupa".'
      },
      {
        verseRef: 'v. 21b-31',
        title: 'A Resposta de Deus e o Triunfo Global',
        description: 'No meio do versículo 21, a oração é ouvida ("tu me ouviste"). O tom muda para louvor. O sofredor promete declarar o nome de Deus aos seus irmãos. O resultado deste sofrimento é global e eterno: "Todos os limites da terra se lembrarão, e se converterão ao Senhor". A obra está consumada.'
      }
    ],
    conclusion: 'O Salmo 22 é a prova irrefutável da inspiração divina das Escrituras. Nenhuma mente humana poderia ter descrito a crucificação com tantos detalhes séculos antes de ela acontecer. Quando Jesus gritou "Deus meu, por que me desamparaste?", Ele estava atraindo a nossa atenção para este salmo, mostrando que Ele estava cumprindo a profecia. Ele suportou o abandono de Deus para que nós nunca fôssemos abandonados. E a promessa final do salmo é a nossa missão hoje: anunciar às gerações futuras a justiça de Deus e declarar que "Ele fez isto" (a obra da cruz está consumada).'
  },
  {
    id: 'psa_24_1_10',
    bookId: 'PSA',
    chapter: 24,
    startVerse: 1,
    endVerse: 10,
    title: 'O Rei da Glória',
    theme: 'A Soberania Criadora, a Santidade e a Entrada Triunfal',
    introduction: 'O Salmo 24 foi provavelmente composto por Davi para celebrar a entrada da Arca da Aliança em Jerusalém. Ele é um hino majestoso que responde a três grandes perguntas: A quem pertence o mundo? Quem é digno de se aproximar de Deus? E quem é o Rei da Glória? O salmo começa estabelecendo a soberania absoluta de Deus sobre a criação, define os requisitos morais para a adoração verdadeira e culmina com um chamado poético para que as portas da cidade (e dos nossos corações) se abram para receber o Rei vitorioso.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'O Dono do Universo',
        description: 'A declaração inicial é absoluta: "Do Senhor é a terra e a sua plenitude, o mundo e aqueles que nele habitam". Deus não é uma divindade tribal; Ele é o Criador e Proprietário de tudo, porque Ele fundou a terra sobre os mares. Não há um centímetro quadrado do universo que não pertença a Ele.'
      },
      {
        verseRef: 'v. 3-6',
        title: 'Os Requisitos para a Adoração',
        description: 'Davi pergunta: "Quem subirá ao monte do Senhor?". A resposta não envolve rituais externos, mas pureza de caráter: "Aquele que é limpo de mãos e puro de coração, que não entrega a sua alma à vaidade, nem jura enganosamente". Apenas aqueles que buscam a face de Deus com integridade recebem a Sua bênção e justiça.'
      },
      {
        verseRef: 'v. 7-10',
        title: 'A Entrada do Rei da Glória',
        description: 'O salmo personifica as portas de Jerusalém, ordenando que se levantem para que entre o "Rei da Glória". A pergunta ressoa: "Quem é este Rei da Glória?". A resposta é triunfante: "O Senhor forte e poderoso, o Senhor poderoso na guerra... O Senhor dos Exércitos, ele é o Rei da Glória".'
      }
    ],
    conclusion: 'O Salmo 24 nos lembra que não podemos nos aproximar do Criador do universo de qualquer maneira. A adoração exige mãos limpas (ações justas) e um coração puro (motivações corretas). Como nenhum de nós possui essa pureza perfeita, precisamos de Jesus Cristo, o verdadeiro homem de mãos limpas e coração puro, que subiu ao monte do Senhor por nós. Além disso, o salmo é um convite contínuo: as "portas eternas" dos nossos corações, das nossas casas e das nossas igrejas devem ser abertas de par em par para que o Rei da Glória, o Senhor dos Exércitos, entre e reine soberanamente.'
  },
  {
    id: 'psa_27_1_14',
    bookId: 'PSA',
    chapter: 27,
    startVerse: 1,
    endVerse: 14,
    title: 'A Confiança e o Desejo pela Presença de Deus',
    theme: 'A Ausência de Medo, a Única Petição e a Espera no Senhor',
    introduction: 'O Salmo 27 é um dos textos mais encorajadores da Bíblia para tempos de medo e oposição. Davi estava cercado por inimigos, falsas testemunhas e exércitos acampados contra ele. No entanto, o tom do salmo não é de pânico, mas de uma confiança inabalável. O segredo da coragem de Davi não estava na sua habilidade militar, mas no seu foco singular: o seu maior desejo não era a derrota dos seus inimigos, mas a presença de Deus. O salmo nos ensina que quando tememos a Deus acima de tudo, não precisamos temer mais nada.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Luz, a Salvação e a Ausência de Medo',
        description: 'Davi faz três declarações poderosas: "O Senhor é a minha luz e a minha salvação; a quem temerei? O Senhor é a força da minha vida; de quem me recearei?". Mesmo que um exército acampe contra ele, o seu coração não temerá. A luz de Deus dissipa as trevas do medo.'
      },
      {
        verseRef: 'v. 4-6',
        title: 'A Única Coisa (The One Thing)',
        description: 'No meio da guerra, Davi revela a sua prioridade máxima: "Uma coisa pedi ao Senhor, e a buscarei: que possa morar na casa do Senhor todos os dias da minha vida, para contemplar a formosura do Senhor". A presença de Deus é o seu esconderijo e a sua rocha de segurança no dia da adversidade.'
      },
      {
        verseRef: 'v. 7-14',
        title: 'A Busca da Face e a Espera Confiante',
        description: 'Davi clama por misericórdia e responde ao convite de Deus ("Buscai a minha face") dizendo: "O teu rosto, Senhor, buscarei". Ele afirma que mesmo que pai e mãe o desamparem, o Senhor o recolherá. O salmo termina com um conselho a si mesmo e a nós: "Espera no Senhor, anima-te, e ele fortalecerá o teu coração".'
      }
    ],
    conclusion: 'O Salmo 27 revela que o antídoto para o medo não é a ausência de problemas, mas a presença de Deus. Quando a nossa "uma coisa" (a nossa prioridade absoluta) é contemplar a beleza do Senhor e buscar a Sua face, os exércitos dos nossos problemas perdem o poder de nos aterrorizar. Muitas vezes, a resposta de Deus não é a libertação imediata, mas o fortalecimento do nosso coração enquanto esperamos nEle. A fé verdadeira diz: "Eu creio que verei a bondade do Senhor na terra dos viventes", e por isso, escolhe esperar com coragem.'
  },
  {
    id: 'psa_32_1_11',
    bookId: 'PSA',
    chapter: 32,
    startVerse: 1,
    endVerse: 11,
    title: 'A Bem-Aventurança do Perdão',
    theme: 'O Peso do Pecado Oculto, a Confissão e a Alegria da Graça',
    introduction: 'O Salmo 32, escrito por Davi (provavelmente após o seu pecado com Bate-Seba, fazendo par com o Salmo 51), é um testemunho poderoso sobre a psicologia da culpa e a teologia do perdão. Davi descreve a agonia física e emocional de tentar esconder o seu pecado de Deus. O silêncio trouxe o adoecimento dos seus ossos. No entanto, quando ele finalmente quebra o silêncio e confessa a sua transgressão, ele experimenta a libertação imediata. O salmo começa com a palavra "Bem-aventurado" (feliz), mostrando que a maior felicidade humana não é nunca pecar, mas ter o pecado perdoado por Deus.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Felicidade do Perdão',
        description: 'Davi declara a verdadeira bem-aventurança: "Bem-aventurado aquele cuja transgressão é perdoada, e cujo pecado é coberto... a quem o Senhor não imputa maldade". A felicidade não está na perfeição, mas na justificação, quando Deus decide não cobrar a nossa dívida.'
      },
      {
        verseRef: 'v. 3-4',
        title: 'A Agonia do Pecado Oculto',
        description: 'Davi descreve o período em que tentou esconder o seu pecado: "Enquanto eu me calei, envelheceram os meus ossos pelo meu bramido em todo o dia". A mão de Deus pesava sobre ele, e a sua vitalidade secou como na seca de verão. O pecado não confessado destrói a saúde espiritual e física.'
      },
      {
        verseRef: 'v. 5-7',
        title: 'A Confissão e a Cobertura Divina',
        description: 'O ponto de virada: "Confessei-te o meu pecado, e a minha maldade não encobri... e tu perdoaste a maldade do meu pecado". Assim que a confissão é feita, o perdão é concedido. Deus deixa de ser o juiz que oprime e passa a ser o "esconderijo" que preserva da angústia.'
      }
    ],
    conclusion: 'O Salmo 32 nos ensina que o encobrimento do pecado é uma tortura autoimposta. Quando tentamos esconder as nossas falhas, a mão disciplinadora de Deus pesa sobre nós por amor, para nos levar ao arrependimento. A cura só vem através da transparência total diante de Deus. O apóstolo Paulo cita este salmo em Romanos 4 para explicar a justificação pela fé: a graça de Deus cobre o nosso pecado através do sangue de Cristo. A verdadeira alegria cristã (que o salmo convida a celebrar no versículo 11) é a alegria de um prisioneiro que foi perdoado e libertado do corredor da morte.'
  },
  {
    id: 'psa_34_1_22',
    bookId: 'PSA',
    chapter: 34,
    startVerse: 1,
    endVerse: 22,
    title: 'O Louvor na Aflição e o Livramento',
    theme: 'A Gratidão Contínua, o Temor do Senhor e a Proximidade de Deus',
    introduction: 'O Salmo 34 foi escrito por Davi num dos momentos mais humilhantes da sua vida: quando ele teve que se fingir de louco diante do rei de Gate para escapar da morte (1 Samuel 21). Apesar das circunstâncias vergonhosas e perigosas, o salmo é uma explosão de louvor e gratidão. É um salmo acróstico (cada versículo começa com uma letra do alfabeto hebraico) que ensina a congregação sobre o temor do Senhor, a proteção dos anjos e a promessa de que Deus está perto dos que têm o coração quebrantado.',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'O Louvor em Todo o Tempo e o Anjo do Senhor',
        description: 'Davi toma uma decisão radical: "Louvarei ao Senhor em todo o tempo; o seu louvor estará continuamente na minha boca". Ele convida os humildes a engrandecerem a Deus com ele. Ele testifica: "Busquei ao Senhor, e ele me respondeu; livrou-me de todos os meus temores". Ele declara que o Anjo do Senhor acampa-se ao redor dos que O temem.'
      },
      {
        verseRef: 'v. 8-14',
        title: 'O Convite para Provar e o Ensino do Temor',
        description: 'O famoso convite: "Provai, e vede que o Senhor é bom". Davi ensina que o temor do Senhor é o caminho para uma vida boa e longa. Esse temor é prático: refrear a língua do mal, apartar-se do mal, fazer o bem e buscar a paz.'
      },
      {
        verseRef: 'v. 15-22',
        title: 'A Proximidade de Deus e a Aflição do Justo',
        description: 'Davi não promete uma vida sem problemas. Pelo contrário: "Muitas são as aflições do justo, mas o Senhor o livra de todas". A promessa mais bela é para os que sofrem: "Perto está o Senhor dos que têm o coração quebrantado, e salva os contritos de espírito".'
      }
    ],
    conclusion: 'O Salmo 34 destrói a ilusão de que a vida cristã é isenta de dor. Os justos têm "muitas aflições", e muitas vezes os seus corações são "quebrantados". No entanto, a diferença não está na ausência da aflição, mas na presença do Livrador. Deus está mais perto de nós quando estamos quebrados do que quando nos sentimos fortes. A decisão de Davi de louvar "em todo o tempo" (mesmo quando se fingia de louco para sobreviver) nos desafia a não condicionarmos a nossa adoração às nossas circunstâncias. Quando provamos da bondade de Deus, o louvor torna-se o nosso estilo de vida contínuo.'
  },
  {
    id: 'psa_73_1_28',
    bookId: 'PSA',
    chapter: 73,
    startVerse: 1,
    endVerse: 28,
    title: 'O Conflito sobre a Prosperidade dos Ímpios',
    theme: 'A Crise de Fé, a Inveja, o Santuário e a Verdadeira Riqueza',
    introduction: 'O Salmo 73, escrito por Asafe (o líder do coral de Davi), é uma confissão brutalmente honesta de uma crise de fé. Asafe quase abandonou a sua caminhada com Deus. O motivo? Ele olhou ao redor e viu que os ímpios, arrogantes e corruptos estavam prosperando, tendo saúde e riquezas, enquanto ele, que buscava a pureza, só enfrentava aflições. A inveja quase o destruiu ("quase resvalaram os meus passos"). A virada do salmo não acontece através de um argumento filosófico, mas através de uma experiência de adoração: quando ele entra no santuário de Deus, a sua perspectiva muda da terra para a eternidade.',
    points: [
      {
        verseRef: 'v. 1-14',
        title: 'A Inveja e a Ilusão da Prosperidade Ímpia',
        description: 'Asafe confessa a sua crise: "Tive inveja dos soberbos, ao ver a prosperidade dos ímpios". Ele descreve os ímpios como pessoas sem dores, gordas, orgulhosas e zombadoras, que parecem imunes aos problemas humanos. Ele chega a uma conclusão amarga e precipitada: "Na verdade que em vão tenho purificado o meu coração".'
      },
      {
        verseRef: 'v. 15-22',
        title: 'A Virada no Santuário e o Fim dos Ímpios',
        description: 'A crise de Asafe só é resolvida "quando entrei no santuário de Deus". Na presença de Deus, a sua visão é corrigida. Ele entende o "fim deles": a prosperidade dos ímpios é como um sonho que desaparece ao acordar; eles estão em "lugares escorregadios" e cairão na destruição. Asafe chama a si mesmo de "embrutecido e ignorante" por ter tido inveja deles.'
      },
      {
        verseRef: 'v. 23-28',
        title: 'A Verdadeira Riqueza: A Presença de Deus',
        description: 'Asafe redescobre o seu maior tesouro: "Todavia estou de contínuo contigo... Quem tenho eu no céu senão a ti? e na terra não há quem eu deseje além de ti". Mesmo que a sua carne e o seu coração desfaleçam, Deus é a sua porção para sempre. Ele conclui: "Mas para mim, bom é aproximar-me de Deus".'
      }
    ],
    conclusion: 'O Salmo 73 é o remédio para o cinismo e a inveja que frequentemente atacam os crentes quando veem a injustiça no mundo. Se medirmos a bondade de Deus pelo nosso saldo bancário ou pela nossa saúde em comparação com os ímpios, perderemos a fé. A cura para a miopia espiritual é o "santuário" — a presença de Deus, a adoração e a Palavra. Lá, descobrimos que a prosperidade sem Deus é apenas um escorregador para a perdição. A verdadeira riqueza não é o que Deus nos dá, mas Quem Ele é. Ter a Deus, mesmo na aflição, é infinitamente melhor do que ter o mundo inteiro sem Ele.'
  },
  {
    id: 'psa_84_1_12',
    bookId: 'PSA',
    chapter: 84,
    startVerse: 1,
    endVerse: 12,
    title: 'O Anseio pelos Átrios do Senhor',
    theme: 'A Paixão pela Casa de Deus, a Jornada pelo Vale e a Graça',
    introduction: 'O Salmo 84, dos filhos de Corá, é um dos poemas mais apaixonados sobre o amor pela presença de Deus e pela adoração congregacional. O salmista, provavelmente distante do Templo em Jerusalém, expressa uma saudade quase física dos átrios do Senhor. Ele inveja até mesmo os pardais e andorinhas que fazem os seus ninhos perto do altar. O salmo descreve a jornada dos peregrinos que transformam vales áridos em mananciais enquanto caminham em direção a Sião. É um hino sobre a alegria de estar na Casa de Deus e a suficiência do Senhor como sol e escudo.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Saudade e a Inveja Santa dos Pássaros',
        description: 'O salmista exclama: "Quão amáveis são os teus tabernáculos, Senhor dos Exércitos!". A sua alma suspira e desmaia pelos átrios do Senhor. Ele observa que até os pássaros encontram casa e ninho junto aos altares de Deus, e declara bem-aventurados aqueles que habitam continuamente na Casa do Senhor, louvando-O.'
      },
      {
        verseRef: 'v. 5-7',
        title: 'A Jornada pelo Vale de Baca',
        description: 'A bênção não é apenas para os que já estão no Templo, mas para aqueles "cujas forças estão em ti, em cujo coração estão os caminhos aplanados". Ao passarem pelo "vale de Baca" (vale do choro ou da aridez), a fé deles o transforma em um manancial. Eles não desfalecem, mas vão "indo de força em força" até chegarem a Sião.'
      },
      {
        verseRef: 'v. 8-12',
        title: 'Um Dia nos Átrios e o Deus que é Sol e Escudo',
        description: 'O salmista faz uma declaração de valores: "Porque vale mais um dia nos teus átrios do que mil [em outra parte]". Ele prefere estar à porta da Casa de Deus do que habitar nas tendas da impiedade. A razão é que "o Senhor Deus é um sol e escudo; o Senhor dará graça e glória; não retirará bem algum aos que andam na retidão".'
      }
    ],
    conclusion: 'O Salmo 84 nos desafia a avaliar o nosso amor pela adoração e pela comunhão com Deus. Para o salmista, a Casa de Deus não era uma obrigação religiosa, mas o maior anseio da sua alma. A jornada da vida cristã frequentemente nos leva por "vales de Baca" (tempos de choro e sequidão), mas quando a nossa força está no Senhor, as nossas lágrimas regam a terra e transformam a aridez em fontes de bênção. A promessa final é inabalável: Deus é o nosso sol (provisão e luz) e o nosso escudo (proteção), e Ele não negará nenhum bem àqueles que andam em integridade. Estar perto dEle é a nossa maior recompensa.'
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
console.log(`Added ${addedCount} new pericopes (Batch 23 - Psalms).`);
