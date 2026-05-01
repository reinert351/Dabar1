const fs = require('fs');

const newPericopes = [
  {
    id: 'eze_1_4_28',
    bookId: 'EZE',
    chapter: 1,
    startVerse: 4,
    endVerse: 28,
    title: 'A Visão da Glória de Deus',
    theme: 'A Majestade, a Transcendência e a Soberania no Exílio',
    introduction: 'Ezequiel era um sacerdote que foi levado cativo para a Babilônia. Aos 30 anos, quando deveria iniciar o seu ministério no Templo em Jerusalém, ele estava no exílio, junto ao rio Quebar. É ali, no meio da desesperança e longe do santuário, que os céus se abrem. A visão que ele tem da glória de Deus é uma das mais complexas e avassaladoras da Bíblia, cheia de rodas, seres viventes e fogo. O objetivo desta visão não era confundir o profeta, mas mostrar-lhe que o trono de Deus não estava fixo em Jerusalém; Deus é móvel, soberano e reina sobre todas as nações.',
    points: [
      {
        verseRef: 'v. 4-14',
        title: 'A Tempestade e os Seres Viventes',
        description: 'A visão começa com um vento tempestuoso e uma nuvem de fogo. No meio do fogo, aparecem quatro seres viventes (querubins), cada um com quatro rostos (homem, leão, boi e águia). Eles movem-se como relâmpagos, representando a onipresença e a atividade incessante de Deus na criação.'
      },
      {
        verseRef: 'v. 15-21',
        title: 'As Rodas e o Espírito',
        description: 'Ao lado dos seres viventes, Ezequiel vê rodas dentro de rodas, cheias de olhos ao redor. As rodas movem-se em qualquer direção sem se virarem, e o espírito dos seres viventes estava nas rodas. Isto simboliza a onisciência de Deus (os olhos) e a Sua providência perfeita que avança sem impedimentos.'
      },
      {
        verseRef: 'v. 22-28',
        title: 'O Trono e o Arco-Íris',
        description: 'Acima do firmamento de cristal, Ezequiel vê a semelhança de um trono de safira, e sobre ele uma figura semelhante a um homem, brilhando como fogo. Ao redor dele havia um resplendor como o do arco-íris na chuva. Diante da glória do Senhor, Ezequiel cai com o rosto em terra.'
      }
    ],
    conclusion: 'A visão de Ezequiel 1 destrói a ideia de que Deus está confinado a um edifício religioso ou a uma geografia específica. Para os exilados que achavam que Deus havia ficado para trás no Templo de Jerusalém, esta visão foi uma mensagem de esperança radical: a "carruagem" do trono de Deus viajou até a Babilônia para estar com o Seu povo no sofrimento. Quando a nossa vida parece um exílio e os nossos planos desmoronam, precisamos de uma visão fresca da glória de Deus. Ele governa as rodas da história, vê todas as coisas e a Sua aliança (o arco-íris) permanece firme mesmo no meio das tempestades mais escuras.'
  },
  {
    id: 'eze_3_16_21',
    bookId: 'EZE',
    chapter: 3,
    startVerse: 16,
    endVerse: 21,
    title: 'O Atalaia de Israel',
    theme: 'Responsabilidade, Advertência e o Peso do Ministério',
    introduction: 'Após a visão da glória de Deus, Ezequiel recebe a sua comissão profética. Deus usa a metáfora militar do "atalaia" (o vigia que ficava na torre da cidade para avisar sobre a aproximação do inimigo). A responsabilidade do atalaia era de vida ou morte: se ele visse o perigo e não tocasse a trombeta, o sangue do povo seria cobrado das suas mãos. Esta passagem estabelece a gravidade do chamado de quem prega a Palavra de Deus. Não somos responsáveis pela conversão das pessoas, mas somos estritamente responsáveis por entregar a advertência divina com clareza.',
    points: [
      {
        verseRef: 'v. 16-17',
        title: 'A Nomeação do Atalaia',
        description: 'Após sete dias de silêncio atônito, a palavra do Senhor vem a Ezequiel: "Filho do homem, eu te dei por atalaia sobre a casa de Israel". A sua função é ouvir a palavra da boca de Deus e avisar o povo da parte do Senhor.'
      },
      {
        verseRef: 'v. 18-19',
        title: 'A Advertência ao Ímpio',
        description: 'Se Deus disser que o ímpio morrerá, e o atalaia não o avisar, o ímpio morrerá no seu pecado, mas o seu sangue será cobrado das mãos do atalaia. Se o atalaia avisar e o ímpio não se converter, o ímpio morrerá, mas o atalaia livrou a sua própria alma.'
      },
      {
        verseRef: 'v. 20-21',
        title: 'A Advertência ao Justo',
        description: 'O mesmo princípio aplica-se ao justo que se desvia para a iniquidade. O atalaia deve avisá-lo para que não peque. Se o justo for avisado e não pecar, ele viverá, e o atalaia terá cumprido a sua missão.'
      }
    ],
    conclusion: 'A metáfora do atalaia é um lembrete solene para todos os cristãos, especialmente para os líderes e pregadores. Num mundo que odeia ser confrontado com o pecado, a tentação do atalaia é silenciar a trombeta para evitar conflitos. No entanto, o silêncio não é amor; é negligência fatal. O amor verdadeiro adverte sobre o perigo iminente. Deus não nos julgará pelo número de pessoas que aceitaram a nossa mensagem, mas pela fidelidade com que a entregamos. A nossa missão é falar a verdade em amor, deixando os resultados nas mãos do Espírito Santo, para que no último dia as nossas mãos estejam limpas do sangue de todos.'
  },
  {
    id: 'eze_18_1_9',
    bookId: 'EZE',
    chapter: 18,
    startVerse: 1,
    endVerse: 9,
    title: 'A Responsabilidade Pessoal',
    theme: 'A Justiça de Deus, o Arrependimento e o Fim do Fatalismo',
    introduction: 'Os exilados na Babilônia usavam um provérbio fatalista para justificar o seu sofrimento: "Os pais comeram uvas verdes, e os dentes dos filhos se embotaram". Eles culpavam a geração anterior pelo exílio, eximindo-se de responsabilidade. Em Ezequiel 18, Deus destrói essa teologia de vitimização. Ele declara que "todas as almas são minhas" e estabelece o princípio da responsabilidade pessoal: a alma que pecar, essa morrerá. Deus não pune os filhos pelos pecados dos pais, nem os pais pelos filhos. É um chamado ao arrependimento individual e à vida de retidão.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Proibição do Provérbio Fatalista',
        description: 'A palavra do Senhor vem a Ezequiel questionando o uso do provérbio sobre as uvas verdes. Deus jura pela Sua própria vida que eles nunca mais usarão esse provérbio em Israel. A desculpa da herança geracional para justificar o pecado atual acabou.'
      },
      {
        verseRef: 'v. 4',
        title: 'A Soberania e a Justiça de Deus',
        description: '"Eis que todas as almas são minhas; como o é a alma do pai, assim também a alma do filho é minha: a alma que pecar, essa morrerá". Deus é o Criador e Juiz de cada indivíduo. A justiça divina é precisa e não comete erros de transferência de culpa.'
      },
      {
        verseRef: 'v. 5-9',
        title: 'O Perfil do Homem Justo',
        description: 'O texto descreve o homem que pratica a justiça: ele não idolatra, não comete imoralidade, não oprime ninguém, devolve o penhor, dá pão ao faminto, não cobra usura e executa juízo verdadeiro. A conclusão de Deus é clara: "Ele é justo; certamente viverá".'
      }
    ],
    conclusion: 'Ezequiel 18 é uma carta de alforria contra o determinismo. A cultura frequentemente nos diz que somos apenas o produto dos nossos traumas passados, da nossa genética ou dos erros dos nossos pais. Embora essas coisas nos influenciem, elas não determinam o nosso destino espiritual. Deus trata-nos como indivíduos responsáveis. Não podemos culpar os nossos pais pelos nossos pecados, mas também não estamos condenados a repetir os erros deles. A graça de Deus oferece a cada pessoa a oportunidade de se arrepender, quebrar ciclos destrutivos e escolher o caminho da vida e da justiça.'
  },
  {
    id: 'eze_34_11_16',
    bookId: 'EZE',
    chapter: 34,
    startVerse: 11,
    endVerse: 16,
    title: 'O Divino Pastor',
    theme: 'Os Falsos Pastores, o Cuidado de Deus e o Resgate das Ovelhas',
    introduction: 'Em Ezequiel 34, Deus profere um duro juízo contra os líderes (pastores) de Israel, que se apascentavam a si mesmos, exploravam o rebanho e não cuidavam das ovelhas feridas ou perdidas. Diante da falência da liderança humana, o próprio Deus assume a responsabilidade. Ele declara: "Eis que eu, eu mesmo, procurarei as minhas ovelhas e as buscarei". Esta passagem é a base teológica para a declaração de Jesus no Novo Testamento: "Eu sou o bom Pastor". Deus promete buscar a perdida, curar a quebrada e apascentar o Seu povo com justiça.',
    points: [
      {
        verseRef: 'v. 11-12',
        title: 'A Busca Pessoal de Deus',
        description: 'Deus não delega mais a tarefa a líderes corruptos. Ele diz: "Eu mesmo procurarei as minhas ovelhas". Como o pastor que busca o seu rebanho no dia da tempestade, Deus promete livrar as Suas ovelhas de todos os lugares por onde foram espalhadas no dia de nuvens e de escuridão.'
      },
      {
        verseRef: 'v. 13-14',
        title: 'O Resgate e o Bom Pasto',
        description: 'Ele promete tirar o povo do meio dos povos e trazê-los para a sua própria terra. Deus os apascentará em bons pastos, nos altos montes de Israel. Ali elas se deitarão num bom redil. É uma promessa de provisão abundante e segurança.'
      },
      {
        verseRef: 'v. 15-16',
        title: 'O Cuidado Individualizado',
        description: '"A perdida buscarei, e a desgarrada tornarei a trazer, e a quebrada ligarei, e a enferma fortalecerei". Deus conhece a necessidade específica de cada ovelha. No entanto, Ele também exercerá juízo: "mas a gorda e a forte destruirei; apascentá-las-ei com juízo".'
      }
    ],
    conclusion: 'A promessa de Ezequiel 34 é um bálsamo para todos os que foram feridos, negligenciados ou abusados por líderes espirituais. Quando os pastores humanos falham, o Supremo Pastor não abandona o Seu rebanho. Jesus Cristo cumpriu esta profecia de forma literal ao vir à terra para buscar e salvar o que se havia perdido. Ele conhece as nossas feridas: se estamos perdidos, Ele nos busca; se estamos quebrados, Ele nos liga; se estamos doentes, Ele nos fortalece. A nossa segurança eterna não repousa na perfeição da liderança da igreja, mas no cuidado vigilante e amoroso do nosso Divino Pastor.'
  },
  {
    id: 'eze_36_22_28',
    bookId: 'EZE',
    chapter: 36,
    startVerse: 22,
    endVerse: 28,
    title: 'Um Novo Coração e um Novo Espírito',
    theme: 'A Nova Aliança, a Purificação e a Transformação Interior',
    introduction: 'O povo de Israel havia profanado o nome de Deus entre as nações devido aos seus pecados. A restauração que Deus promete em Ezequiel 36 não é baseada no mérito do povo, mas no zelo de Deus pelo Seu próprio santo nome. A promessa central desta passagem é uma das mais belas descrições da regeneração no Antigo Testamento. Deus promete não apenas trazer o povo de volta à terra, mas fazer uma cirurgia espiritual profunda: remover o coração de pedra e dar um coração de carne, colocando o Seu próprio Espírito dentro deles para capacitá-los a obedecer.',
    points: [
      {
        verseRef: 'v. 22-24',
        title: 'A Motivação de Deus: O Seu Santo Nome',
        description: 'Deus deixa claro que não está agindo por causa de Israel, mas pelo Seu santo nome, que eles profanaram entre os gentios. Deus santificará o Seu grande nome quando as nações virem o que Ele fará. O primeiro passo é o resgate físico: tirá-los dentre as nações e trazê-los para a sua terra.'
      },
      {
        verseRef: 'v. 25',
        title: 'A Purificação dos Pecados',
        description: '"Então aspergirei água pura sobre vós, e ficareis purificados; de todas as vossas imundícias e de todos os vossos ídolos vos purificarei". Antes da transformação interna, há a necessidade de purificação e perdão dos pecados passados.'
      },
      {
        verseRef: 'v. 26-28',
        title: 'O Transplante de Coração e o Dom do Espírito',
        description: 'A grande promessa cirúrgica: "E vos darei um coração novo, e porei dentro de vós um espírito novo; e tirarei da vossa carne o coração de pedra, e vos darei um coração de carne". Mais do que isso, Deus colocará o Seu próprio Espírito dentro deles, fazendo com que andem nos Seus estatutos.'
      }
    ],
    conclusion: 'Ezequiel 36 é a essência do que Jesus chamou de "nascer de novo" (João 3). A religião humana tenta mudar o comportamento externo sem alterar a natureza interna, o que é tão inútil quanto tentar ensinar uma pedra a bater. O que nós precisamos não é de um novo conjunto de regras, mas de um "transplante de coração". Apenas o Espírito Santo pode remover a nossa dureza, a nossa apatia e a nossa rebelião (o coração de pedra) e substituir por um coração sensível, responsivo e apaixonado por Deus (o coração de carne). A obediência cristã não é a causa da nossa salvação, mas o fruto maravilhoso do Espírito que agora habita em nós.'
  },
  {
    id: 'eze_47_1_12',
    bookId: 'EZE',
    chapter: 47,
    startVerse: 1,
    endVerse: 12,
    title: 'O Rio do Santuário',
    theme: 'A Água da Vida, a Cura e a Profundeza do Espírito',
    introduction: 'Nos capítulos finais do seu livro, Ezequiel tem uma visão detalhada de um novo Templo. Em Ezequiel 47, ele vê águas que saem de debaixo do limiar do Templo. Este rio não é alimentado por afluentes naturais, mas cresce milagrosamente à medida que flui, tornando-se um rio intransponível. Onde quer que este rio passe, ele traz vida, curando até mesmo as águas mortas do Mar Morto e fazendo crescer árvores frutíferas nas suas margens. É uma imagem poderosa do fluxo da graça de Deus e da vida abundante do Espírito Santo que flui da presença do Senhor para curar o mundo.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'As Profundezas Crescentes',
        description: 'O anjo mede a profundidade do rio a cada mil côvados. Primeiro, a água dá pelos artelhos (tornozelos); depois, pelos joelhos; depois, pelos lombos (cintura); e finalmente, torna-se um rio tão profundo que só se pode atravessar a nado. Representa a imensidão da graça de Deus e o convite para mergulharmos mais fundo no Espírito.'
      },
      {
        verseRef: 'v. 6-10',
        title: 'A Cura das Águas Mortas',
        description: 'O rio desce para a campina e entra no mar (o Mar Morto, onde não há vida). Quando as águas do santuário entram no mar, as águas mortas tornam-se saudáveis. Haverá muitíssimo peixe, e "viverá toda a criatura vivente por onde quer que entre este rio". A presença de Deus traz vida onde havia morte.'
      },
      {
        verseRef: 'v. 11-12',
        title: 'As Árvores de Vida',
        description: 'Junto ao rio, crescerão árvores cujo fruto servirá de alimento e cujas folhas servirão de remédio. Elas não murcharão, porque as águas saem do santuário. (Uma imagem que João retoma em Apocalipse 22).'
      }
    ],
    conclusion: 'A visão do rio de Ezequiel é um desafio à nossa superficialidade espiritual. Muitos cristãos contentam-se em viver com a "água pelos tornozelos", experimentando apenas o básico da salvação, mas mantendo o controle das suas vidas. Deus convida-nos a avançar para as águas profundas, onde perdemos o pé e somos totalmente carregados pela correnteza do Seu Espírito. Além disso, o propósito deste rio não é ficar estagnado no Templo, mas fluir para o "Mar Morto" da sociedade. A Igreja cheia do Espírito Santo é chamada a ser um agente de cura, levando vida, alimento e remédio a um mundo que está morto nos seus delitos e pecados.'
  },
  {
    id: 'dan_2_31_45',
    bookId: 'DAN',
    chapter: 2,
    startVerse: 31,
    endVerse: 45,
    title: 'O Sonho de Nabucodonosor e a Pedra',
    theme: 'Os Impérios Humanos, a Soberania Divina e o Reino Eterno',
    introduction: 'O rei Nabucodonosor teve um sonho perturbador com uma grande estátua feita de diferentes metais. Nenhum dos seus sábios conseguiu revelar ou interpretar o sonho, mas Deus revelou o mistério a Daniel. A estátua representava a sucessão dos grandes impérios mundiais (Babilônia, Medo-Pérsia, Grécia e Roma), mostrando o declínio da qualidade humana (do ouro ao barro). No entanto, o clímax do sonho é uma "pedra cortada sem auxílio de mãos" que atinge a estátua nos pés, destruindo-a completamente, e cresce até encher toda a terra. Esta pedra é o Reino de Deus, inaugurado por Jesus Cristo.',
    points: [
      {
        verseRef: 'v. 31-35',
        title: 'A Visão da Estátua e da Pedra',
        description: 'A estátua tinha cabeça de ouro, peito e braços de prata, ventre e coxas de bronze, pernas de ferro e pés de ferro misturado com barro. De repente, uma pedra cortada sem mãos atinge os pés da estátua, esmiuçando-a até virar pó levado pelo vento. A pedra torna-se um grande monte que enche a terra.'
      },
      {
        verseRef: 'v. 36-43',
        title: 'A Interpretação dos Impérios',
        description: 'Daniel explica que Nabucodonosor é a cabeça de ouro. Depois dele, surgirão outros reinos inferiores, até chegar a um quarto reino forte como o ferro, mas dividido e frágil nos pés (ferro e barro). A história humana é uma sucessão de poderes temporários.'
      },
      {
        verseRef: 'v. 44-45',
        title: 'O Reino Inabalável de Deus',
        description: '"Mas, nos dias desses reis, o Deus do céu levantará um reino que não será jamais destruído". Este reino esmiuçará todos os outros e subsistirá para sempre. A pedra cortada "sem mãos" indica a origem divina e sobrenatural deste Reino.'
      }
    ],
    conclusion: 'O sonho de Nabucodonosor é a planta arquitetônica da história mundial. Os impérios humanos, por mais gloriosos e aterrorizantes que pareçam (ouro ou ferro), têm os pés de barro. Eles são frágeis e temporários. A grande esperança da Igreja é a "Pedra angular", Jesus Cristo. O Seu Reino não foi estabelecido por força militar ou política humana ("sem auxílio de mãos"), mas pelo poder do Evangelho. Enquanto as nações se levantam e caem, o Reino de Deus continua a crescer como uma montanha que encherá toda a terra. A nossa lealdade final não deve ser a nenhuma estátua terrena, mas ao Rei cujo domínio é eterno.'
  },
  {
    id: 'dan_4_28_37',
    bookId: 'DAN',
    chapter: 4,
    startVerse: 28,
    endVerse: 37,
    title: 'A Humilhação e Restauração de Nabucodonosor',
    theme: 'O Orgulho, o Juízo Divino e o Reconhecimento da Soberania',
    introduction: 'O capítulo 4 de Daniel é um testemunho pessoal escrito pelo próprio rei Nabucodonosor, o homem mais poderoso do mundo na sua época. Passeando pelo terraço do seu palácio, doze meses após ter sido advertido por Daniel, ele encheu-se de orgulho e atribuiu a glória da Babilônia à sua própria força e majestade. Imediatamente, a sentença divina caiu sobre ele. Ele perdeu a sanidade, foi expulso do convívio humano e viveu como um animal no campo durante sete tempos (anos). A sua restauração só ocorreu quando ele levantou os olhos ao céu e reconheceu a soberania do Altíssimo.',
    points: [
      {
        verseRef: 'v. 28-30',
        title: 'A Arrogância no Terraço',
        description: 'Nabucodonosor olha para a cidade e diz: "Não é esta a grande Babilônia que eu edifiquei para a casa real, com a força do meu poder, e para glória da minha magnificência?". O pronome "eu" domina a sua fala. É a essência do orgulho: roubar a glória que pertence a Deus.'
      },
      {
        verseRef: 'v. 31-33',
        title: 'A Sentença e a Loucura',
        description: 'Ainda a palavra estava na boca do rei quando uma voz do céu anunciou que o reino lhe havia sido tirado. Ele foi expulso entre os homens, comeu erva como os bois, e o seu corpo foi molhado pelo orvalho, até que o seu cabelo cresceu como penas de águia. O orgulho rebaixa o homem ao nível do animal.'
      },
      {
        verseRef: 'v. 34-37',
        title: 'O Arrependimento e a Restauração',
        description: 'Ao fim dos dias, Nabucodonosor levantou os olhos ao céu e o seu entendimento voltou. Ele bendisse o Altíssimo, reconhecendo que o Seu domínio é eterno e que Ele faz o que quer com os exércitos do céu e os moradores da terra. A sua majestade foi restaurada, e ele louvou o Rei dos céus.'
      }
    ],
    conclusion: 'A história de Nabucodonosor é a ilustração mais dramática do provérbio: "A soberba precede a ruína" (Pv 16:18). Quando nos esquecemos de que tudo o que temos (talentos, riquezas, posições) nos foi dado por Deus, começamos a agir como se fôssemos os arquitetos do nosso próprio sucesso. O juízo de Deus sobre o rei não foi para destruí-lo, mas para curá-lo da sua ilusão de divindade. A loucura de Nabucodonosor mostra que viver sem reconhecer a Deus é viver de forma irracional. A verdadeira sanidade mental e espiritual só retorna quando "levantamos os olhos ao céu" e confessamos que Deus é o único Soberano.'
  },
  {
    id: 'dan_5_17_30',
    bookId: 'DAN',
    chapter: 5,
    startVerse: 17,
    endVerse: 30,
    title: 'A Escrita na Parede',
    theme: 'A Profanação, o Juízo Iminente e o Fim de um Império',
    introduction: 'O rei Belsazar, neto de Nabucodonosor, deu um grande banquete e cometeu um ato de suprema arrogância: mandou trazer os vasos sagrados do Templo de Jerusalém para beber vinho neles, louvando os deuses de ouro e prata. No meio da festa, dedos de mão de homem apareceram e escreveram na parede do palácio. Aterrorizado, o rei chamou Daniel para interpretar a mensagem. Daniel não se deixa comprar por presentes e entrega um veredito de condenação: o rei havia sido pesado na balança e achado em falta. Naquela mesma noite, o império babilônico caiu.',
    points: [
      {
        verseRef: 'v. 17-24',
        title: 'A Coragem de Daniel e a Acusação',
        description: 'Daniel recusa os presentes do rei. Ele lembra Belsazar da lição que o seu avô (Nabucodonosor) aprendeu sobre o orgulho. A grande acusação contra Belsazar é que ele sabia de tudo isso, mas não humilhou o seu coração. Pior ainda, ele profanou os vasos do Senhor e não glorificou o Deus em cuja mão está a sua vida.'
      },
      {
        verseRef: 'v. 25-28',
        title: 'A Interpretação da Escrita',
        description: 'A mensagem era: "MENE, MENE, TEQUEL, UFARSIM". MENE: Deus contou o teu reino e o acabou. TEQUEL: Pesado foste na balança, e foste achado em falta. PERES (singular de Ufarsim): Dividido foi o teu reino, e dado aos medos e aos persas.'
      },
      {
        verseRef: 'v. 29-30',
        title: 'A Queda Súbita',
        description: 'Belsazar honra Daniel conforme prometido, mas o juízo não é adiado. "Naquela mesma noite foi morto Belsazar, rei dos caldeus". A festa da arrogância terminou em morte e na queda do maior império do mundo.'
      }
    ],
    conclusion: 'A festa de Belsazar é o retrato de uma sociedade que festeja à beira do abismo. A profanação das coisas sagradas e a recusa em aprender com a história (a lição de Nabucodonosor) selaram o destino do rei. O aviso de Daniel ecoa através dos séculos: "A Deus, em cuja mão está a tua vida... não glorificaste". Todos nós seremos "pesados na balança" da justiça de Deus. Se formos pesados pelos nossos próprios méritos, seremos achados em falta. A nossa única esperança é que, na balança de Deus, o peso da justiça de Cristo seja colocado a nosso favor. A escrita na parede lembra-nos que a paciência de Deus tem um limite e que o Seu juízo é certo.'
  },
  {
    id: 'dan_7_9_14',
    bookId: 'DAN',
    chapter: 7,
    startVerse: 9,
    endVerse: 14,
    title: 'O Ancião de Dias e o Filho do Homem',
    theme: 'O Tribunal Celestial, a Glória de Cristo e o Domínio Eterno',
    introduction: 'No capítulo 7, Daniel tem uma visão apocalíptica de quatro bestas terríveis que sobem do mar, representando os impérios mundiais cruéis. Mas a cena muda subitamente da terra para o céu. Daniel vê o tribunal celestial sendo montado e o "Ancião de Dias" (Deus o Pai) assentando-se no Seu trono de fogo. Em seguida, ocorre uma das visões messiânicas mais importantes do Antigo Testamento: alguém "semelhante ao Filho do Homem" vem com as nuvens do céu e recebe domínio, glória e um reino eterno. Foi este título ("Filho do Homem") que Jesus mais usou para Si mesmo.',
    points: [
      {
        verseRef: 'v. 9-10',
        title: 'O Trono do Ancião de Dias',
        description: 'Daniel vê tronos sendo postos e o Ancião de Dias assentando-se. A Sua veste é branca como a neve, e o Seu trono é de chamas de fogo. Milhares de milhares O servem. O tribunal assenta-se em juízo, e os livros são abertos. É a imagem da soberania e da santidade absolutas de Deus julgando a história.'
      },
      {
        verseRef: 'v. 11-12',
        title: 'O Fim das Bestas',
        description: 'Enquanto o tribunal celestial está em sessão, a besta arrogante (que falava grandes coisas) é morta e o seu corpo entregue ao fogo. O poder dos impérios terrenos é aniquilado por um simples decreto do céu.'
      },
      {
        verseRef: 'v. 13-14',
        title: 'A Coroação do Filho do Homem',
        description: 'Daniel vê "um como o Filho do Homem" vindo nas nuvens do céu. Ele é levado à presença do Ancião de Dias. A Ele foi dado o domínio, a honra e o reino, para que todos os povos O sirvam. O Seu domínio é eterno e não passará.'
      }
    ],
    conclusion: 'A visão de Daniel 7 é a resposta divina ao caos da história humana. Quando olhamos para as notícias, muitas vezes parece que as "bestas" (sistemas políticos corruptos, guerras, crueldade) estão no controle. Mas Daniel levanta a cortina para nos mostrar a verdadeira sala de controle do universo. O Ancião de Dias está no trono, e os livros estão abertos. Mais importante ainda, o domínio do mundo não foi entregue a uma besta, mas ao "Filho do Homem" — Jesus Cristo. Quando Jesus estava diante do sumo sacerdote antes de ser crucificado, Ele citou este exato versículo (Marcos 14:62), declarando ser o Rei eterno. O Seu Reino é a nossa segurança inabalável.'
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
console.log(`Added ${addedCount} new pericopes (Batch 28 - Ezekiel/Daniel).`);
