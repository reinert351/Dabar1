
export interface MeditationMessage {
  id: string;
  title: string;
  category: 'pastoral' | 'expository' | 'comfort' | 'warfare';
  baseRef: string;
  content: string[];
  summary: string;
}

export const MANANCIAIS_DATA: MeditationMessage[] = [
  {
    id: 'msg_preco_vida',
    title: 'O Preço da Vida',
    category: 'comfort',
    baseRef: 'João 10:10',
    summary: 'Uma reflexão profunda sobre as limitações do dinheiro e o valor supremo da vida dada por Cristo.',
    content: [
      "Você pode comprar um livro, mas não o conhecimento. Você pode comprar posição, mas não respeito. Você pode comprar pessoas, mas não amigos.",
      "Você pode comprar um relógio, mas não o tempo. Você pode comprar uma casa, mas não um lar. Você pode comprar uma cama, mas não o sono.",
      "Você pode comprar comida, mas não o apetite. Você pode comprar remédios, mas não a saúde. Você pode comprar sangue, mas não a vida.",
      "Você pode comprar algumas coisas na vida... Mas vida quem tem para dar, é só Jesus. Ele pagou o preço!"
    ]
  },
  {
    id: 'msg_joalheiro',
    title: 'O Grande Joalheiro',
    category: 'pastoral',
    baseRef: 'Salmos 139:14',
    summary: 'A história do anel que revela que apenas o Criador conhece o nosso real valor.',
    content: [
      "Há muito tempo, um jovem que vivia desanimado dirigiu-se ao seu professor dizendo: Me sinto tão fraco que não tenho forças para fazer nada. Dizem até que não sirvo para nada, que não faço nada certo. O que posso fazer para que me valorizem mais ?",
      "E o sábio professor tirou um anel que estava usando e deu ao garoto, dizendo: Tente vender este anel pelo máximo possível, mas não aceite menos que uma moeda de ouro.",
      "O jovem pegou o anel e partiu. Ofereceu-o a algumas pessoas, que olhavam com algum interesse, mas quando o jovem mencionava a moeda de ouro, alguns riam, outros saiam sem ao menos olhar para ele. Abatido pelo fracasso, resolveu voltar.",
      "E diante do seu professor, disse: Sinto muito, mas é impossível conseguir o que pediu pelo anel. E o professor disse: Devemos saber então quanto vale. Vá até o joalheiro, diga-lhe que quer vender o anel e pregunte quanto ele dá, mas não importa o quanto ele lhe ofereça, não o venda... Volte aqui com o anel.",
      "O joalheiro examinou o anel, pesou e disse: Agora, não posso dar mais que 58 moedas de ouro por este anel. 58 MOEDAS DE OURO!!! - exclamou o jovem. Sim, disse o joalheiro, mas se não for urgente, eu posso oferecer até 70 moedas de Ouro.",
      "Então o jovem pegou o anel e voltou emocionado à escola para contar ao professor. Depois de ouvir tudo o que o jovem lhe contou, o professor disse: Somos como esse anel, uma jóia valiosa e única, e ninguém, além do Grande Joalheiro, nosso Deus e Pai, que deu seu filho Jesus por amor de nós, sabe o nosso real valor !"
    ]
  },
  {
    id: 'msg_clinica',
    title: 'Clínica da Alma',
    category: 'pastoral',
    baseRef: 'Salmos 139:23',
    summary: 'Um check-up espiritual detalhado na Clínica do Senhor.',
    content: [
      "Entrei na clínica do Senhor para fazer um check-up de rotina e constatei que estava doente. Quando o Senhor mediu minha pressão, verificou que estava baixa de ternura. Ao tirar a temperatura, o termômetro registrou 40 graus de egoísmo.",
      "Fiz um eletrocardiograma e foi diagnosticado que precisava de uma ponte de amor, pois minhas artérias estavam bloqueadas por falta de perdão e não estavam abastecendo meu coração vazio.",
      "Na ortopedia, o problema era a incapacidade de caminhar lado a lado com os irmãos e de abraçar os feridos. Na pneumologia, percebeu-se que eu não conseguia respirar a oração, estava sufocado pelo orgulho.",
      "O Senhor me deu a receita gratuita: Ao levantar, tomar uma colher de paciência; de hora em hora, um cálice de humildade; ao deitar, uma dose de confiança em Deus.",
      "Não fique doente antes de procurar a clínica do Senhor. Ele atende pelo convênio da Graça e o remédio é o Sangue de Jesus."
    ]
  },
  {
    id: 'msg_filho',
    title: 'O Filho',
    category: 'comfort',
    baseRef: 'João 3:16',
    summary: 'A história do leilão que revela o valor supremo do Filho.',
    content: [
      "Um homem muito rico e seu filho colecionavam obras de arte raras. Quando a guerra estourou, o filho foi servir à pátria. Ele morreu em batalha enquanto resgatava um soldado ferido.",
      "Meses depois, um jovem visitou o pai e entregou-lhe uma tela. Era um retrato do filho dele, pintado pelo próprio jovem que fora salvo. O pai pendurou a obra em destaque na sua mansão.",
      "Ao morrer o pai, houve um grande leilão de sua coleção. O leiloeiro bateu o martelo para começar: 'A primeira peça é o quadro: O Filho'. Ninguém queria dar lances, queriam as obras de Picasso e Rembrandt.",
      "Um velho empregado da casa, que amava o jovem, deu 10 dólares, tudo o que tinha. 'Dou dez dólares por O Filho', disse ele. Ninguém mais deu lances. Vendido!",
      "Nesse momento o leiloeiro parou tudo. 'O leilão acabou', disse ele. 'Há uma cláusula oculta no testamento: Quem levar o Filho, leva toda a herança'.",
      "Assim é o Reino de Deus: Muitos buscam as riquezas do Pai, mas o segredo está em receber o Filho. Quem tem o Filho, tem tudo."
    ]
  },
  {
    id: 'msg_chance',
    title: 'Mais uma Chance',
    category: 'pastoral',
    baseRef: 'Lucas 13:8',
    summary: 'O apelo do vinhateiro pela árvore que não dava frutos.',
    content: [
      "Um homem tinha uma figueira plantada na sua vinha. Por três anos ele veio procurar fruto e não achou nenhum. Ele disse ao vinhateiro: 'Corta-a! Por que ocupa ela ainda a terra inutilmente?'",
      "Mas o vinhateiro respondeu: 'Senhor, deixa-a este ano ainda, até que eu a escave e a esterque'. Ele não pediu para deixá-la como estava, ele pediu tempo para trabalhar nela.",
      "Muitas vezes Deus nos dá 'mais um ano'. Não para continuarmos secos, mas para que aceitemos o processo de escavação em nossas raízes. O esterco representa o que nos incomoda, mas serve para nos fazer crescer.",
      "Se der fruto, bem; se não, depois a cortarás. A misericórdia de Deus tem um propósito: a frutificação. Não ignore a oportunidade do 'ano extra' que Ele está te concedendo hoje."
    ]
  },
  {
    id: 'msg_janela',
    title: 'A Janela',
    category: 'comfort',
    baseRef: '2 Coríntios 4:18',
    summary: 'Como a visão de um homem transformava a dor do outro.',
    content: [
      "Dois homens, ambos gravemente doentes, ocupavam leitos no mesmo quarto de hospital. Um deles podia sentar-se na cama por uma hora todas as tardes. Sua cama ficava próxima à única janela do quarto.",
      "Todas as tardes, ele descrevia para o companheiro de quarto o que via: crianças brincando no parque, casais de mãos dadas, um lago com cisnes. O outro homem vivia por esses momentos, sentindo-se parte do mundo lá fora.",
      "Certo dia, o homem da janela faleceu. O outro homem pediu para ser movido para perto da janela. Com muito esforço, ele se ergueu para olhar... e viu apenas um muro branco de tijolos.",
      "Ele perguntou à enfermeira por que o amigo descrevia coisas tão belas. Ela respondeu: 'Ele era cego e não podia ver nem o muro. Ele apenas queria dar a você um motivo para continuar vivendo'.",
      "O que vemos com os olhos da carne pode ser um muro, mas o que vemos com os olhos da fé e do amor pode transformar o ambiente de dor em um jardim de esperança."
    ]
  },
  {
    id: 'msg_aguia',
    title: 'A Águia',
    category: 'warfare',
    baseRef: 'Isaías 40:31',
    summary: 'O despertar da natureza real acima da vida no galinheiro.',
    content: [
      "Um camponês encontrou um filhote de águia caído e o colocou no galinheiro. A águia cresceu agindo como galinha: ciscava o chão, comia milho e voava apenas alguns palmos.",
      "Um naturalista passou por lá e disse: 'Isso não é uma galinha, é uma águia!'. O camponês riu: 'Ela agora é galinha, nunca vai voar'. O naturalista tentou fazê-la voar do braço, mas ela voltou para o milho.",
      "No dia seguinte, ele a levou para o alto de uma montanha ao amanhecer. Ele a segurou firme e a forçou a olhar diretamente para o sol. Quando o calor do sol atingiu seus olhos, ela sentiu o chamado das alturas.",
      "Ela soltou um grito, abriu suas asas majestosas e, com um impulso, subiu para nunca mais voltar ao chão do galinheiro. Ela descobriu quem era.",
      "Muitos vivem como galinhas, presos ao chão dos problemas, esquecendo que Deus os criou com natureza de águia. Olhe para o Sol da Justiça e voe!"
    ]
  },
  {
    id: 'msg_alpinista',
    title: 'O Alpinista',
    category: 'pastoral',
    baseRef: 'Provérbios 3:5',
    summary: 'A tragédia de confiar nos sentidos e não na voz de Deus.',
    content: [
      "Um alpinista iniciou uma escalada solo. A noite caiu e a escuridão era total. Ele escorregou e ficou pendurado por uma corda de segurança em meio ao abismo frio.",
      "No desespero, ele gritou: 'Meu Deus, me ajuda!'. Uma voz ecoou no silêncio: 'O que queres que eu faça?'. Ele respondeu: 'Salva-me, Senhor!'. A voz disse: 'Corta a corda'.",
      "O alpinista hesitou. Seus sentidos diziam que cortar a corda seria a morte certa. Ele apertou a corda com mais força. No dia seguinte, a equipe de resgate o encontrou morto, congelado.",
      "Ele estava pendurado a apenas um metro do chão. Se ele tivesse obedecido à voz de Deus, estaria vivo.",
      "Confiar em Deus muitas vezes exige 'cortar a corda' do nosso próprio entendimento. A segurança real não está na corda que seguramos, mas na mão de Deus que nos sustenta."
    ]
  },
  {
    id: 'msg_tres_arvores',
    title: 'As Três Árvores',
    category: 'expository',
    baseRef: 'Romanos 8:28',
    summary: 'Sonhos humanos transformados em propósitos divinos.',
    content: [
      "Três árvores sonhavam com o futuro. A primeira queria ser um baú de tesouros; a segunda, um navio real; a terceira, a árvore mais alta para apontar para Deus.",
      "Lenhadores as cortaram. A primeira virou um cocho de animais; a segunda, um simples barco de pesca; a terceira, foi cortada em vigas e guardada no escuro.",
      "Anos depois, uma virgem colocou seu bebê no cocho. A árvore percebeu que carregava o maior Tesouro do universo. Um homem dormiu no barco e acalmou a tempestade. A árvore percebeu que carregava o Rei da Glória.",
      "Finalmente, a terceira foi montada em forma de cruz. Ela percebeu que agora, cada vez que alguém olhasse para ela, estaria olhando para o amor de Deus.",
      "Deus não destrói nossos sonhos; Ele os eleva. O que parece ser um 'cocho' hoje, pode ser o berço de um milagre amanhã."
    ]
  },
  {
    id: 'msg_pai_nosso',
    title: 'Um Pai Nosso',
    category: 'pastoral',
    baseRef: 'Mateus 6:9-13',
    summary: 'Uma reflexão impactante sobre a verdade por trás das palavras da oração que Jesus nos ensinou.',
    content: [
      "Não digas PAI, se a cada dia não te comportas como um filho. Não digas NOSSO, se vives isolado em teu egoísmo. Não digas QUE ESTÁS NO CÉU, se só pensas nas coisas terrenas.",
      "Não digas SANTIFICADO SEJA O TEU NOME, se não o honras. Não digas VENHA A NÓS O TEU REINO, se o confundes com o êxito material.",
      "Não digas FAÇA-SE A TUA VONTADE, se não a aceita como é. Não digas ASSIM NA TERRA COMO NO CÉU, se duvidas da existência do inferno.",
      "Não digas O PÃO NOSSO DE CADA DIA, se não te preocupas com quem tem fome. Não digas PERDOA AS NOSSAS OFENSAS, se guardas rancor de teus irmãos.",
      "Não digas LIVRA-NOS DO MAL, se amas o pecado. Não digas AMEM, se não entendes e não dás crédito às palavras do Pai Nosso.",
      "As vezes, refletir em tempo pode fazer a diferença entre a vida ou a morte eterna.... Sempre, a decisão é nossa..."
    ]
  },
  {
    id: 'msg_porta_coracao',
    title: 'A Porta do coração',
    category: 'pastoral',
    baseRef: 'Apocalipse 3:20',
    summary: 'A famosa metáfora sobre a pintura de Jesus batendo à porta que só se abre pelo lado de dentro.',
    content: [
      "Ao ver um quadro em exposição, um homem percebeu que havia algo diferente... A pintura mostrava uma figura de Jesus batendo suavemente à porta de uma casa...",
      "E o que lhe chamou a atenção foi que a porta não tinha fechadura, então o homem perguntou ao artista: \" Por que ? \"",
      "E ele respondeu: \" Este quadro representa Jesus batendo à porta do coração, e só é possível abrí-la pelo lado de dentro... \"",
      "E completou... \" Jesus está batendo à porta do seu coração, e só você poderá abrir e mais ninguém ! \""
    ]
  },
  {
    id: 'msg_hospital_senhor',
    title: 'Hospital do Senhor',
    category: 'pastoral',
    baseRef: 'Mateus 9:12',
    summary: 'Uma consulta no hospital do Senhor que diagnostica febre de egoísmo e prescreve o tratamento do Evangelho.',
    content: [
      "Ao fazer uma consulta no hospital do Senhor, senti que estava doente. O termômetro registrou 40º (graus) de egoísmo, foi diagnosticado que precisava de uma ponte de amor, pois a veia estava bloqueada e não estava abastecendo meu coração vazio.",
      "Estava com dificuldade de andar lado a lado com meu irmão, constatou-se ainda que eu não conseguia enxergar além das aparências.",
      "Não conseguia ouvir pelo bloqueio de palavras vazias do dia a dia. Então o Senhor indicou um medicamento natural que estão no receituário do seu evangelho.",
      "Se você estiver com algum problema procure o hospital do Senhor e faça um tratamento para a vida !"
    ]
  }
];
