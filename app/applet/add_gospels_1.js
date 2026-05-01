const fs = require('fs');

const newPericopes = [
  {
    id: 'mat_6_5_15',
    bookId: 'MAT',
    chapter: 6,
    startVerse: 5,
    endVerse: 15,
    title: 'A Oração Genuína e o Pai Nosso',
    theme: 'A Comunhão Íntima com Deus e as Prioridades do Reino',
    introduction: `No Sermão do Monte, Jesus confronta a hipocrisia religiosa da Sua época. Para os fariseus, a oração havia se tornado uma performance teatral para ganhar a aprovação dos homens. Jesus destrói essa visão e ensina que a verdadeira oração é uma comunhão íntima e secreta com o Pai. Ele então fornece a "Oração do Senhor" (o Pai Nosso), não como uma reza mágica para ser repetida mecanicamente, mas como um modelo perfeito que reorienta as nossas prioridades: primeiro a glória de Deus, depois as nossas necessidades diárias.`,
    points: [
      {
        verseRef: 'v. 5-8',
        title: 'O Lugar Secreto e a Rejeição da Hipocrisia',
        description: `A Audiência de Um Só. Jesus adverte (v. 5): "E, quando orares, não sejas como os hipócritas; pois se comprazem em orar em pé nas sinagogas, e às esquinas das ruas, para serem vistos pelos homens". A recompensa deles é apenas o aplauso humano. O antídoto é o "quarto" (v. 6): "Mas tu, quando orares, entra no teu aposento e, fechando a tua porta, ora a teu Pai que está em secreto". A oração verdadeira busca a face de Deus, não os olhos dos homens. Além disso, Jesus proíbe as "vãs repetições" dos pagãos (v. 7), lembrando-nos que Deus não é uma máquina que precisa ser convencida pela nossa loquacidade, pois "vosso Pai sabe o que vos é necessário, antes de vós lho pedirdes" (v. 8).`
      },
      {
        verseRef: 'v. 9-10',
        title: 'O Foco em Deus: Nome, Reino e Vontade',
        description: `As Prioridades Verticais. O modelo começa com relacionamento e reverência: "Pai nosso, que estás nos céus, santificado seja o teu nome" (v. 9). O maior desejo do cristão deve ser que o caráter e a reputação de Deus sejam honrados no mundo. As próximas duas petições são escatológicas e de submissão (v. 10): "Venha o teu reino, seja feita a tua vontade, assim na terra como no céu". Orar isso é um ato de rebelião contra o status quo do mundo caído e uma rendição pessoal: "Senhor, destrona o meu ego e governa a minha vida e este mundo".`
      },
      {
        verseRef: 'v. 11-15',
        title: 'A Dependência Diária: Pão, Perdão e Proteção',
        description: `As Necessidades Horizontais. Só depois de focar em Deus é que pedimos por nós mesmos. 1) Provisão (v. 11): "O pão nosso de cada dia nos dá hoje". Reconhecemos que dependemos de Deus até para a nossa sobrevivência básica. 2) Perdão (v. 12): "E perdoa-nos as nossas dívidas, assim como nós perdoamos aos nossos devedores". A nossa experiência do perdão de Deus está inseparavelmente ligada à nossa disposição de perdoar os outros (reforçado nos v. 14-15). 3) Proteção (v. 13): "E não nos conduzas à tentação; mas livra-nos do mal". Reconhecemos a nossa fraqueza espiritual e pedimos a proteção do Pai contra as armadilhas do inimigo.`
      }
    ],
    conclusion: `Mateus 6:5-15 revoluciona a nossa vida de oração. A oração não é uma ferramenta para impressionar os outros ou para forçar Deus a fazer a nossa vontade. É o privilégio de filhos que entram no quarto secreto para falar com o seu Pai celestial. O Pai Nosso nos ensina a alinhar o nosso coração com a glória de Deus, a confiar nEle para as nossas necessidades diárias e a viver em constante perdão e dependência espiritual.`
  },
  {
    id: 'mat_7_24_27',
    bookId: 'MAT',
    chapter: 7,
    startVerse: 24,
    endVerse: 27,
    title: 'Os Dois Fundamentos',
    theme: 'A Prática da Palavra e a Resistência nas Tempestades',
    introduction: `Jesus conclui o Seu majestoso Sermão do Monte com uma parábola de advertência. Ele não deixa espaço para a neutralidade ou para a admiração passiva dos Seus ensinamentos. Ouvir a verdade não é suficiente; a verdadeira fé exige obediência prática. Usando a imagem de dois construtores, Jesus ilustra que a única diferença entre a salvação e a ruína final não é a ausência de tempestades, mas o fundamento sobre o qual construímos as nossas vidas.`,
    points: [
      {
        verseRef: 'v. 24',
        title: 'O Construtor Prudente e a Rocha',
        description: `A Obediência Ativa. "Todo aquele, pois, que escuta estas minhas palavras, e as pratica, assemelhá-lo-ei ao homem prudente, que edificou a sua casa sobre a rocha". A rocha não é uma instituição religiosa ou uma filosofia humana; a rocha é o próprio Cristo e a obediência aos Seus ensinamentos. O homem prudente não apenas ouve sermões, lê a Bíblia ou concorda intelectualmente com a verdade; ele "pratica". A obediência é o trabalho árduo de cavar fundo para ancorar a vida na vontade de Deus.`
      },
      {
        verseRef: 'v. 26',
        title: 'O Construtor Insensato e a Areia',
        description: `A Ilusão da Audição Passiva. Em contraste, Jesus descreve a tragédia da religião superficial: "E aquele que ouve estas minhas palavras, e não as cumpre, compará-lo-ei ao homem insensato, que edificou a sua casa sobre a areia". Este homem também ouviu as palavras de Jesus. Ele provavelmente estava na multidão, maravilhado com o sermão. A sua casa (a sua vida, a sua moralidade, a sua religião) pode parecer idêntica à do homem prudente em um dia ensolarado. O seu erro fatal foi a preguiça espiritual: ele construiu sobre a areia das opiniões humanas, das emoções passageiras e da conveniência, sem o compromisso da obediência.`
      },
      {
        verseRef: 'v. 25, 27',
        title: 'A Tempestade Inevitável e o Veredito Final',
        description: `O Teste da Realidade. Jesus descreve a mesma tempestade atingindo ambas as casas: "E desceu a chuva, e correram rios, e assopraram ventos, e combateram aquela casa". A tempestade representa tanto as crises e tragédias desta vida quanto o julgamento final de Deus. Ser cristão não nos isenta das tempestades. A diferença está no resultado. A casa na rocha "não caiu, porque estava edificada sobre a rocha" (v. 25). A casa na areia "caiu, e foi grande a sua queda" (v. 27). O julgamento revelará impiedosamente o verdadeiro fundamento de cada vida.`
      }
    ],
    conclusion: `Mateus 7:24-27 é um chamado urgente à autoavaliação. Não podemos nos enganar achando que a frequência à igreja ou o conhecimento bíblico nos salvarão no dia da tempestade. A única segurança eterna é encontrada quando pegamos as palavras de Jesus e as transformamos na base prática das nossas decisões, caráter e ações diárias. Uma vida construída sobre a obediência a Cristo é indestrutível.`
  },
  {
    id: 'mat_13_1_23',
    bookId: 'MAT',
    chapter: 13,
    startVerse: 1,
    endVerse: 23,
    title: 'A Parábola do Semeador e os Solos do Coração',
    theme: 'A Receptividade à Palavra de Deus e a Produção de Frutos',
    introduction: `A Parábola do Semeador é a chave para entender todas as outras parábolas de Jesus. Ela explica por que a mesma mensagem do evangelho, pregada pelo mesmo semeador, produz resultados tão drasticamente diferentes nas pessoas. Jesus ensina que o problema nunca está na semente (a Palavra de Deus), que é sempre perfeita e poderosa. O problema reside inteiramente na condição do "solo" — o coração humano. Jesus descreve quatro tipos de corações, revelando que a verdadeira salvação sempre resulta em frutos visíveis.`,
    points: [
      {
        verseRef: 'v. 3-4, 19',
        title: 'O Semeador, a Semente e o Coração Endurecido',
        description: `O Caminho Pisado. O semeador espalha a semente generosamente. A primeira semente cai "ao pé do caminho, e vieram as aves, e comeram-na" (v. 4). Jesus explica (v. 19): "Ouvindo alguém a palavra do reino, e não a entendendo, vem o maligno, e arrebata o que foi semeado no seu coração". Este é o coração endurecido pelo pecado, pelo cinismo ou pela religiosidade morta. A Palavra bate na superfície e não penetra. Satanás (as aves) age rapidamente para roubar a verdade antes que ela possa gerar fé.`
      },
      {
        verseRef: 'v. 5-7, 20-22',
        title: 'O Coração Raso e o Coração Sufocado',
        description: `Falsas Conversões. Os dois solos seguintes representam pessoas que parecem aceitar o evangelho, mas não são salvas. 1) O solo pedregoso (v. 5-6, 20-21): A semente brota rápido com alegria emocional, mas não tem raiz profunda. "Mas, chegada a angústia ou a perseguição, por causa da palavra, logo se ofende". É o cristão superficial que abandona a fé quando o sofrimento chega. 2) O solo espinhoso (v. 7, 22): A semente cresce, mas "os cuidados deste mundo, e a sedução das riquezas sufocam a palavra, e fica infrutífera". É a pessoa que tenta amar a Deus e ao mundo ao mesmo tempo, mas o materialismo e a ansiedade estrangulam a vida espiritual.`
      },
      {
        verseRef: 'v. 8, 23',
        title: 'O Coração Fértil e a Colheita Abundante',
        description: `A Marca da Verdadeira Salvação. A última semente cai em "boa terra" (v. 8). Jesus explica (v. 23): "Mas, o que foi semeado em boa terra é o que ouve e compreende a palavra; e dá fruto, e um produz cem, outro sessenta, e outro trinta". Este coração foi arado pelo arrependimento e preparado pelo Espírito Santo. A marca inegável do solo bom não é a perfeição instantânea, mas a produção de "fruto" (mudança de caráter, obediência, amor a Deus e ao próximo). Embora a quantidade de fruto varie (cem, sessenta, trinta), a presença do fruto é a prova definitiva da vida espiritual genuína.`
      }
    ],
    conclusion: `Mateus 13:1-23 nos força a examinar a nossa própria audição espiritual. Como estamos recebendo a Palavra de Deus? O nosso coração está endurecido pela indiferença? A nossa fé é apenas uma emoção passageira que murcha na provação? Estamos permitindo que o amor ao dinheiro sufoque a nossa devoção? A verdadeira fé não é apenas ouvir com alegria, mas receber a Palavra profundamente, permitindo que ela crie raízes e transforme a nossa vida em uma colheita abundante para a glória de Deus.`
  },
  {
    id: 'mat_28_16_20',
    bookId: 'MAT',
    chapter: 28,
    startVerse: 16,
    endVerse: 20,
    title: 'A Grande Comissão',
    theme: 'A Autoridade de Cristo e o Mandato Global da Igreja',
    introduction: `O Evangelho de Mateus termina no topo de uma montanha na Galileia, onde o Cristo ressuscitado se encontra com os Seus discípulos. Estas são as Suas últimas palavras registradas neste evangelho, e elas formam a "Grande Comissão" — o mandato supremo e a razão de ser da Igreja na terra. Jesus não dá uma sugestão, mas uma ordem militar baseada na Sua autoridade cósmica recém-conquistada. A missão não é apenas fazer convertidos, mas fazer discípulos de todas as nações, batizando-os e ensinando-os, com a garantia da Sua presença eterna.`,
    points: [
      {
        verseRef: 'v. 16-18',
        title: 'A Adoração, a Dúvida e a Autoridade Absoluta',
        description: `O Rei do Universo. Quando os discípulos veem Jesus, "o adoraram; mas alguns duvidaram" (v. 17). A honestidade de Mateus é impressionante; mesmo diante do Cristo ressuscitado, a fragilidade humana persiste. Mas Jesus não os rejeita. Ele se aproxima e estabelece a base de toda a missão (v. 18): "É-me dada toda a autoridade no céu e na terra". Pela Sua morte e ressurreição, Jesus conquistou o direito legal e o poder absoluto sobre todo o cosmos. A igreja não vai ao mundo com a sua própria autoridade, mas como embaixadora do Rei supremo do universo.`
      },
      {
        verseRef: 'v. 19-20a',
        title: 'O Mandato: Fazer Discípulos de Todas as Nações',
        description: `A Estratégia da Missão. Baseado nessa autoridade ("Portanto"), Jesus dá o mandamento principal: "Ide, ensinai (fazei discípulos de) todas as nações" (v. 19). O verbo principal no grego é "fazer discípulos". Ir, batizar e ensinar são os particípios que explicam *como* fazer discípulos. O escopo é global ("todas as nações", panta ta ethne, todos os grupos étnicos), quebrando o exclusivismo judaico. O processo envolve dois passos: 1) Iniciação: "batizando-os em nome do Pai, e do Filho, e do Espírito Santo" (um ato público de identificação com o Deus Trino). 2) Formação: "Ensinando-os a guardar todas as coisas que eu vos tenho mandado" (v. 20a). A missão não termina na conversão; ela exige ensino contínuo e obediência prática.`
      },
      {
        verseRef: 'v. 20b',
        title: 'A Promessa da Presença Contínua',
        description: `O Emanuel até o Fim. A tarefa de evangelizar o mundo inteiro e ensinar obediência radical é humanamente impossível e perigosa. Por isso, Jesus encerra o Seu evangelho com a maior de todas as promessas: "E eis que eu estou convosco todos os dias, até a consumação dos séculos. Amém". Mateus começou o seu evangelho chamando Jesus de "Emanuel, Deus conosco" (1:23), e termina com a garantia de que Ele continuará conosco. A presença do Cristo ressuscitado através do Espírito Santo é o conforto, a força e a garantia de sucesso da Igreja em sua missão.`
      }
    ],
    conclusion: `Mateus 28:16-20 não é o "Grande Sugestão", mas a Grande Comissão. Todo cristão é chamado a participar desta missão, seja indo, orando ou enviando. Não podemos nos acovardar diante de culturas hostis ou da nossa própria fraqueza, porque Aquele que nos enviou possui toda a autoridade no universo e prometeu estar ao nosso lado todos os dias, até que a tarefa seja concluída e Ele retorne.`
  },
  {
    id: 'mrk_2_1_12',
    bookId: 'MRK',
    chapter: 2,
    startVerse: 1,
    endVerse: 12,
    title: 'O Paralítico de Cafarnaum e a Autoridade de Cristo',
    theme: 'A Fé Ousada, o Perdão dos Pecados e a Divindade de Jesus',
    introduction: `No início do Seu ministério, a popularidade de Jesus estava no auge devido às Suas curas milagrosas. Quando Ele retorna a Cafarnaum, a casa onde Ele está ensinando fica tão lotada que ninguém mais consegue entrar. A história que se desenrola não é apenas sobre a cura física de um paralítico, mas é o primeiro grande confronto teológico de Jesus com os líderes religiosos. Jesus usa esta situação extrema para fazer uma declaração chocante sobre a Sua própria identidade: Ele possui a autoridade divina para perdoar pecados.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Fé Ousada e a Determinação dos Amigos',
        description: `Rompendo Barreiras. Quatro homens trazem um paralítico até Jesus, mas a multidão bloqueia a porta. Em vez de desistirem, eles demonstram uma fé criativa e desesperada (v. 4): "descobriram o telhado onde estava e, fazendo um buraco, baixaram o leito em que jazia o paralítico". Eles arriscaram causar danos à propriedade e interromper o sermão do Mestre porque acreditavam absolutamente que apenas Jesus poderia curar o seu amigo. A fé verdadeira não se rende diante dos obstáculos; ela encontra um caminho para chegar a Cristo.`
      },
      {
        verseRef: 'v. 5-7',
        title: 'O Diagnóstico Mais Profundo e a Acusação de Blasfêmia',
        description: `A Raiz do Problema. "E Jesus, vendo a fé deles, disse ao paralítico: Filho, perdoados estão os teus pecados" (v. 5). Esta foi a frase mais inesperada possível. O homem queria andar; Jesus lhe deu perdão. Jesus viu além da paralisia física e diagnosticou a paralisia espiritual da alma. O maior problema do homem não é o sofrimento físico, mas a sua alienação de Deus. Os escribas presentes entenderam a implicação teológica imediatamente (v. 7): "Por que diz este assim blasfêmias? Quem pode perdoar pecados, senão Deus?". A teologia deles estava correta (só Deus perdoa pecados), mas a conclusão estava errada (eles não reconheceram que Deus estava ali em carne).`
      },
      {
        verseRef: 'v. 8-12',
        title: 'A Prova Visível da Autoridade Invisível',
        description: `O Milagre que Valida a Mensagem. Jesus, conhecendo os pensamentos deles (mais uma prova de divindade), lança um desafio lógico (v. 9): "Qual é mais fácil? dizer ao paralítico: Estão perdoados os teus pecados; ou dizer-lhe: Levanta-te, e toma o teu leito, e anda?". Falar sobre perdão é fácil, pois é invisível. Falar sobre cura é difícil, pois exige prova imediata. Jesus faz o mais difícil (a cura visível) para provar que Ele tem autoridade para fazer o mais importante (o perdão invisível). "Ora, para que saibais que o Filho do homem tem na terra poder para perdoar pecados... Eu te digo: Levanta-te" (v. 10-11). O homem se levanta e sai andando, deixando a multidão maravilhada e glorificando a Deus.`
      }
    ],
    conclusion: `Marcos 2:1-12 nos ensina que Jesus é muito mais do que um curandeiro ou um mestre moral; Ele é o próprio Deus com autoridade para absolver a nossa culpa. Muitas vezes buscamos a Deus apenas para resolver as nossas "paralisias" temporais (problemas financeiros, de saúde, relacionais), mas Jesus quer tratar a raiz da nossa miséria: o nosso pecado. Quando recebemos o Seu perdão, experimentamos o maior milagre de todos, e o nosso coração é curado para a eternidade.`
  },
  {
    id: 'mrk_4_35_41',
    bookId: 'MRK',
    chapter: 4,
    startVerse: 35,
    endVerse: 41,
    title: 'A Tempestade Acalmada',
    theme: 'O Poder de Cristo sobre a Natureza e o Desafio da Fé',
    introduction: `Após um longo dia ensinando por parábolas, Jesus e os Seus discípulos entram em um barco para atravessar o Mar da Galileia. O que se segue é uma das demonstrações mais dramáticas da divindade de Cristo nos Evangelhos. Uma tempestade violenta irrompe, ameaçando afundar o barco. A reação de pânico dos discípulos contrasta fortemente com a paz de Jesus. Esta narrativa não é apenas um registro de um milagre sobre a natureza, mas uma lição profunda sobre quem Jesus é e como o medo expõe a fragilidade da nossa fé.`,
    points: [
      {
        verseRef: 'v. 35-38',
        title: 'A Tempestade Ameaçadora e o Sono de Jesus',
        description: `O Pânico e a Paz. O Mar da Galileia era conhecido por tempestades repentinas e violentas. "E levantou-se grande temporal de vento, e subiam as ondas por cima do barco, de maneira que já se enchia" (v. 37). Os discípulos, muitos deles pescadores experientes, estavam apavorados, certos de que iam morrer. Onde estava Jesus? "E ele estava na popa, dormindo sobre uma almofada" (v. 38a). O sono de Jesus revela a Sua exaustão humana (Ele era 100% homem) e a Sua confiança absoluta no Pai. Os discípulos O acordam com uma acusação desesperada (v. 38b): "Mestre, não se te dá que pereçamos?". O medo frequentemente nos faz questionar o amor e o cuidado de Deus.`
      },
      {
        verseRef: 'v. 39',
        title: 'A Palavra de Poder e a Grande Bonança',
        description: `O Senhor da Criação. A resposta de Jesus é majestosa e imediata. Ele não ora pedindo a Deus que acalme a tempestade; Ele mesmo dá a ordem à natureza: "E ele, despertando, repreendeu o vento, e disse ao mar: Cala-te, aquieta-te" (v. 39a). Ele fala com a tempestade como se estivesse repreendendo um demônio. O resultado é instantâneo: "E o vento se aquietou, e houve grande bonança" (v. 39b). Apenas o Criador do universo tem a autoridade para subjugar as forças caóticas da natureza com uma simples palavra. A tempestade reconheceu a voz do seu Mestre.`
      },
      {
        verseRef: 'v. 40-41',
        title: 'A Repreensão da Incredulidade e a Pergunta Crucial',
        description: `Do Medo da Tempestade ao Temor de Deus. Depois de acalmar o mar, Jesus confronta a tempestade no coração dos discípulos (v. 40): "Por que sois tão tímidos? Ainda não tendes fé?". A presença de Jesus no barco não impediu a tempestade, mas deveria ter impedido o pânico deles. A fé verdadeira confia no caráter de Cristo mesmo quando as circunstâncias parecem mortais. O milagre produz um efeito surpreendente nos discípulos (v. 41): "E sentiram um grande temor, e diziam uns aos outros: Mas quem é este, que até o vento e o mar lhe obedecem?". O medo deles da tempestade foi substituído por um temor reverente (assombro) diante da divindade de Jesus.`
      }
    ],
    conclusion: `Marcos 4:35-41 nos lembra que seguir a Jesus não nos isenta das tempestades da vida. Haverá momentos em que o nosso "barco" estará afundando e Deus parecerá estar dormindo. No entanto, o pânico é o resultado de esquecermos quem está no barco conosco. Aquele que tem o poder de silenciar os oceanos com uma palavra tem o poder de nos sustentar através de qualquer crise. A pergunta não é se a tempestade é grande, mas "Quem é este" que está conosco na tempestade?`
  },
  {
    id: 'mrk_10_35_45',
    bookId: 'MRK',
    chapter: 10,
    startVerse: 35,
    endVerse: 45,
    title: 'A Verdadeira Grandeza e o Servo Sofredor',
    theme: 'A Inversão dos Valores do Reino e o Preço do Resgate',
    introduction: `A caminho de Jerusalém, Jesus acaba de predizer pela terceira vez a Sua paixão, morte e ressurreição. Imediatamente após essa profecia sombria, Tiago e João se aproximam dEle com um pedido chocantemente egoísta e insensível. Eles querem os lugares de maior honra no Reino. Este incidente expõe a ambição carnal que ainda dominava os discípulos. Jesus usa essa oportunidade para redefinir completamente o conceito de grandeza: no Reino de Deus, a grandeza não é medida pelo poder de dominar os outros, mas pela disposição de servir e sofrer pelos outros, seguindo o exemplo supremo do Filho do Homem.`,
    points: [
      {
        verseRef: 'v. 35-40',
        title: 'A Ambição Cega e o Cálice do Sofrimento',
        description: `O Pedido de Glória. Tiago e João pedem (v. 37): "Concede-nos que na tua glória nos assentemos, um à tua direita, e outro à tua esquerda". Eles queriam os assentos de primeiro-ministro no governo messiânico. Jesus responde: "Não sabeis o que pedis" (v. 38). Eles queriam a coroa sem a cruz. Jesus pergunta se eles podem beber o "cálice" que Ele vai beber e ser batizados com o Seu "batismo" (metáforas do Antigo Testamento para o sofrimento e a ira divina). Eles, com excesso de confiança, dizem que podem. Jesus profetiza que eles de fato sofrerão o martírio (v. 39), mas os lugares de honra pertencem à soberania do Pai (v. 40).`
      },
      {
        verseRef: 'v. 41-44',
        title: 'O Contraste entre o Poder do Mundo e o Reino',
        description: `A Inversão da Pirâmide. Os outros dez discípulos ficam indignados (v. 41), não por serem mais humildes, mas porque queriam os mesmos lugares. Jesus os chama e contrasta a liderança do mundo com a liderança do Reino (v. 42-43): "Sabeis que os que julgam ser príncipes dos gentios, deles se assenhoreiam... Mas entre vós não será assim". No mundo, a grandeza é medida por quantas pessoas servem você. No Reino de Deus, a pirâmide é invertida: "antes, qualquer que entre vós quiser ser grande, será vosso serviçal; E qualquer que dentre vós quiser ser o primeiro, será servo de todos" (v. 43-44). A verdadeira liderança cristã é serviço humilde.`
      },
      {
        verseRef: 'v. 45',
        title: 'O Exemplo Supremo: O Filho do Homem e o Resgate',
        description: `O Preço da Nossa Vida. Jesus não exige dos Seus discípulos algo que Ele mesmo não esteja disposto a fazer. O versículo 45 é o versículo-chave de todo o Evangelho de Marcos: "Porque o Filho do homem também não veio para ser servido, mas para servir e dar a sua vida em resgate de muitos". O Rei do universo desceu à terra não para exigir tributos, mas para pegar uma toalha e lavar pés, e finalmente, para derramar o Seu sangue. A palavra "resgate" (lutron) significa o preço pago para libertar um escravo. Jesus deu a Sua vida como pagamento substitutivo para nos libertar da escravidão do pecado e da morte.`
      }
    ],
    conclusion: `Marcos 10:35-45 destrói a nossa ambição carnal por status, títulos e reconhecimento. A igreja não é uma corporação onde lutamos para subir na hierarquia; é uma comunidade de servos onde competimos para ver quem pode descer mais baixo para ajudar os outros. Se o próprio Filho de Deus abriu mão dos Seus direitos para nos servir até a morte de cruz, não temos o direito de exigir sermos servidos. A verdadeira grandeza é encontrada quando nos esquecemos de nós mesmos por amor aos outros.`
  },
  {
    id: 'luk_10_25_37',
    bookId: 'LUK',
    chapter: 10,
    startVerse: 25,
    endVerse: 37,
    title: 'O Bom Samaritano e o Amor Radical',
    theme: 'A Definição de Próximo e a Prática da Misericórdia',
    introduction: `Um intérprete da lei (um teólogo especialista) tenta testar Jesus com a pergunta mais importante da religião: "Que farei para herdar a vida eterna?". Jesus o direciona para a Lei: amar a Deus sobre todas as coisas e ao próximo como a si mesmo. Querendo se justificar e limitar a sua responsabilidade, o homem pergunta: "E quem é o meu próximo?". Em resposta, Jesus conta a Parábola do Bom Samaritano. Esta história destrói as fronteiras raciais, religiosas e sociais, mostrando que o amor cristão não é um sentimento passivo por pessoas iguais a nós, mas uma ação sacrificial em favor de qualquer pessoa em necessidade.`,
    points: [
      {
        verseRef: 'v. 25-29',
        title: 'A Pergunta do Intérprete e a Fuga da Responsabilidade',
        description: `A Religião da Conveniência. O intérprete da lei sabia a resposta teológica correta (amar a Deus e ao próximo, v. 27). O problema não era a falta de conhecimento, mas a falta de prática. O versículo 29 revela o seu coração: "Ele, porém, querendo justificar-se a si mesmo, disse a Jesus: E quem é o meu próximo?". Na teologia judaica da época, o "próximo" era estritamente um compatriota judeu que guardava a lei; os pecadores e gentios eram excluídos. O homem queria uma definição restrita de "próximo" para poder cumprir a lei sem ter que amar pessoas que ele desprezava.`
      },
      {
        verseRef: 'v. 30-35',
        title: 'A Indiferença Religiosa e a Compaixão do Excluído',
        description: `O Contraste Chocante. Jesus descreve um homem assaltado, espancado e deixado quase morto na perigosa estrada de Jerusalém para Jericó. Dois líderes religiosos passam por ele: um sacerdote (v. 31) e um levita (v. 32). Ambos veem o homem, mas "passam de largo". Eles provavelmente justificaram a sua omissão com desculpas religiosas (medo de impureza cerimonial se o homem estivesse morto). Então vem o herói improvável: um samaritano (v. 33). Os judeus odiavam os samaritanos, considerando-os hereges e mestiços. Mas é o samaritano que tem "íntima compaixão". Ele arrisca a sua vida, gasta o seu tempo, usa os seus recursos (azeite, vinho, ataduras) e o seu dinheiro (dois denários) para salvar o inimigo ferido (v. 34-35).`
      },
      {
        verseRef: 'v. 36-37',
        title: 'A Inversão da Pergunta e o Chamado à Ação',
        description: `Seja o Próximo. Jesus vira a pergunta do intérprete de cabeça para baixo (v. 36): "Qual, pois, destes três te parece que foi o próximo daquele que caiu nas mãos dos salteadores?". A pergunta não é mais "Quem é o meu próximo?" (quem é digno do meu amor?), mas "De quem eu serei o próximo?" (quem precisa do meu amor?). O intérprete, incapaz até de pronunciar a palavra "samaritano", responde (v. 37): "O que usou de misericórdia para com ele". Jesus dá o mandamento final: "Vai, e faze da mesma maneira". O amor verdadeiro não tem fronteiras; ele vê a necessidade e age com misericórdia sacrificial.`
      }
    ],
    conclusion: `Lucas 10:25-37 é uma condenação devastadora da religião hipócrita que se preocupa mais com rituais e pureza teológica do que com o sofrimento humano. O Bom Samaritano nos ensina que o nosso próximo é qualquer pessoa que Deus coloca no nosso caminho e que precisa de ajuda, independentemente da sua raça, religião ou status social. Em um nível mais profundo, a parábola aponta para o próprio Jesus: nós éramos os pecadores feridos e moribundos na estrada, e Ele, o desprezado pelos homens, veio até nós, curou as nossas feridas com o Seu próprio sangue e pagou a nossa dívida.`
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
  console.log('Successfully added 8 new pericopes for Matthew, Mark, Luke, and John (Part 1).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
