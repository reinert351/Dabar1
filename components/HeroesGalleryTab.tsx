import React, { useState } from 'react';

type CategoryType = 'Hebrews 11' | 'Boyer' | 'Comparison';

const HEROES = [
  // --- HEBREUS 11 ---
  {
    name: 'Abel',
    category: 'Hebrews 11',
    title: 'O Primeiro Mártir',
    quote: 'Pela fé Abel ofereceu a Deus maior sacrifício do que Caim, pelo qual alcançou testemunho de que era justo... (Hebreus 11:4)',
    legacy: [
      'A história de Abel mostra a fundação do relacionamento com Deus: chegamos a Ele por meio do sacrifício e do sangue, o que apontava para o futuro sacrifício de Jesus.',
      'Sua fé foi um ato de obediência. Ao oferecer as primícias de seu rebanho, Abel confiou que Deus proveria a salvação. Caim não aceitou isso e, movido pela inveja, o matou.',
      'Mesmo após a morte, o testemunho de Abel permanece vivo na Bíblia. É a primeira grande demonstração de que a adoração genuína atrai perseguição, mas tem a recompensa eterna de Deus.'
    ],
    tags: ['Mártir', 'Sacrifício', 'Adoração']
  },
  {
    name: 'Enoque',
    category: 'Hebrews 11',
    title: 'O Homem que Andou com Deus',
    quote: 'Pela fé Enoque foi trasladado para não ver a morte... visto que antes da sua trasladação alcançou testemunho de que agradara a Deus. (Hebreus 11:5)',
    legacy: [
      'Enoque viveu de forma diferente da sociedade corrupta da sua época. Ele não se deixou levar pelo pecado ao seu redor e desenvolveu uma relação íntima de obediência com Deus.',
      'Ele foi um farol profético, anunciando que Deus não aceitaria a impiedade para sempre. Enoque nos ensina que, para se aproximar do Criador, é necessário cultivar santidade todos os dias.',
      'O fim de sua jornada terrena foi único: Deus o levou vivo para o céu. Sua história lembra aos cristãos sobre a esperança do arrebatamento e a importância de dedicar os dias ao Senhor.'
    ],
    tags: ['Comunhão', 'Profeta', 'Traslado']
  },
  {
    name: 'Noé',
    category: 'Hebrews 11',
    title: 'O Pregador da Justiça',
    quote: 'Pela fé Noé, divinamente avisado das coisas que ainda não se viam, temeu e... preparou a arca... (Hebreus 11:7)',
    legacy: [
      'Noé encontrou graça aos olhos de Deus num mundo consumido pela maldade. Ao ser avisado sobre o dilúvio, um fenômeno nunca visto antes, ele obedeceu em fé sem pedir provas visíveis.',
      'Por anos, ele trabalhou duro construindo a Arca, sendo zombado por todos. Noé foi um verdadeiro pregador, ensinando sobre a justiça de Deus por meio do seu trabalho e integridade.',
      'Assim como a Arca salvou sua família da destruição das águas, a fé e o esforço de Noé apontam para o próprio Cristo, que é o nosso único refúgio seguro quando o juízo chegar.'
    ],
    tags: ['Paciência', 'Arca', 'Juízo']
  },
  {
    name: 'Abraão e Sara',
    category: 'Hebrews 11',
    title: 'Os Pais da Promessa',
    quote: 'Pela fé Abraão, sendo chamado, obedeceu... Pela fé também a mesma Sara recebeu a virtude de conceber... (Hebreus 11:8,11)',
    legacy: [
      'Abraão e Sara deixaram a estabilidade de sua terra para seguir rumo ao desconhecido. A obediência deles não precisou de um mapa, apenas da certeza de quem os estava chamando.',
      'Eles enfrentaram grandes provações, como a infertilidade e a velhice, mas creram na promessa divina. Assim, Sara deu à luz Isaque, contrariando a lógica biológica e confirmando o poder de Deus.',
      'A fé de Abraão também foi coroada quando foi instruído a entregar Isaque em sacrifício. Sua postura obediente antecipou claramente o futuro em que o próprio Deus entregaria o Seu Filho na cruz.'
    ],
    tags: ['Patriarcas', 'Aliança', 'Milagre']
  },
  {
    name: 'Moisés',
    category: 'Hebrews 11',
    title: 'O Libertador que Viu o Invisível',
    quote: 'Pela fé Moisés, sendo já grande, recusou ser chamado filho da filha de Faraó... mantendo-se firme, como quem vê o invisível. (Hebreus 11:24,27)',
    legacy: [
      'Embora fosse um príncipe com direito às maiores riquezas e luxos do Egito, Moisés decidiu deixar tudo isso para sofrer junto com seu próprio povo: o escravizado povo judeu.',
      'Ele percebeu que as recompensas terrenas e a glória de Faraó eram vazias perto da aliança com Deus. A renúncia de Moisés mostra o verdadeiro valor da eternidade sobre o prazer passageiro.',
      'Ele guiou o povo de Deus enfrentando o exército do Egito, o mar, os anos no deserto e recebendo os dez mandamentos, provando sua lealdade como o líder da fuga e formação nacional de Israel.'
    ],
    tags: ['Libertação', 'Lei', 'Êxodo']
  },
  {
    name: 'Raabe',
    category: 'Hebrews 11',
    title: 'A Fé Periférica e Redentiva',
    quote: 'Pela fé Raabe, a meretriz, não pereceu com os incrédulos, acolhendo em paz os espias. (Hebreus 11:31)',
    legacy: [
      'Raabe vivia a corrupção pagã da cidade de Jericó e trabalhava de forma marginalizada, mas sua fé em Deus mudou completamente sua trajetória histórica. Ela conhecia as grandezas que o Deus de Israel operava.',
      'Quando os espias alcançaram a cidade, ela agiu para escondê-los. Aquilo não foi um mero acordo político, e sim o reconhecimento de que os muros robustos de sua cultura cairiam perante a justiça vinda dos céus.',
      'Um simples e frágil cordão vermelho foi o selo de sua salvação e da sua família. Por se opor à sua terra e acolher Israel, ela teve o imenso privilégio de virar ascendente na linhagem de Jesus.'
    ],
    tags: ['Graça', 'Jericó', 'Acolhimento']
  },
  {
    name: 'Gideão, Baraque, Sansão e Jefté',
    category: 'Hebrews 11',
    title: 'Os Juízes Valentes',
    quote: 'E que mais direi? Faltar-me-ia o tempo contando de Gideão, e de Baraque, e de Sansão, e de Jefté... (Hebreus 11:32)',
    legacy: [
      'Em uma época sombria da história de Israel, cheia de abominações e violências, líderes fraturados, temerosos e com muitos erros, assumiram as batalhas e livraram o povo do domínio opressor.',
      'Gideão estava escondido amedrontado ao ser chamado, Baraque recusou liderar sem a juíza, e Sansão sofreu consequências pelas pressões e desejos de sua própria rebeldia impetuosa.',
      'Mas através deles Deus demonstrou que não busca pessoas perfeitas com exércitos formidáveis, mas sim vidas rendidas que, do meio da sua própria fraqueza humana, servem de instrumento divino para trazer livramentos marcantes.'
    ],
    tags: ['Juízes', 'Bravura', 'Livramento']
  },
  {
    name: 'Davi',
    category: 'Hebrews 11',
    title: 'O Rei Salmista e Adorador Guerreiro',
    quote: '... e de Davi, e de Samuel e dos profetas, os quais pela fé venceram reinos... (Hebreus 11:32-33)',
    legacy: [
      'Saindo dos pastos simples com ovelhas ao maior rei que Israel teve, a biografia de Davi sempre foi marcada por imensa confiança no favor de Deus diante do temido poder dos seus inimigos filisteus.',
      'Embora fosse um formidável e leal guerreiro, foi seu arrependimento após os lamentáveis pecados de seu coração que o marcaram mais forte como um profeta e adorador. Seus salmos deram esperança a incontáveis crentes exaustos de suas próprias culpas.',
      'Estabeleceu o caminho final na promessa à nação e teve a grande honra de compor a linhagem encarnada do rei de Israel definitivo, em Quem repousará eternamente a nossa glória inabalável de paz - O nosso Salvador.'
    ],
    tags: ['Realeza', 'Salmos', 'Aliança']
  },
  {
    name: 'Os Mártires Anônimos',
    category: 'Hebrews 11',
    title: 'O Mundo Não Era Digno',
    quote: 'Foram apedrejados, serrados, tentados, mortos a fio de espada... dos quais o mundo não era digno... (Hebreus 11:37,38)',
    legacy: [
      'O longo desfile dos heróis da fé bíblica encerra com dezenas de homens e mulheres comuns, sobre os quais nenhum título glorioso ou coroa honrosa repousava entre sua geração. Eles são heróis justamente porque aceitaram perder as glórias e riquezas desta terra.',
      'Muitos foram cortados ao meio e atacados. Suas mortes deixam claro que viver a verdadeira vida de serviço espiritual impõe sacrifício, mostrando as feridas que o império sempre tentou provocar no Evangelho.',
      'A resistência deles calada nos vales solitários provou aos fiéis de todo tempo que: de homens que o próprio mundo negava amor ou chance de pão, o mundo nem de longe era digno que eles ali estivessem pisando, porque Deus era a porção de cada um.'
    ],
    tags: ['Martírio', 'Sofrimento', 'Esperança']
  },

  // --- ORLANDO BOYER ---
  {
    name: 'Girolamo Savonarola',
    category: 'Boyer',
    title: 'O Profeta de Florença (1452 - 1498)',
    quote: 'Mata-me, se quiseres; tu não podes matar a verdade.',
    legacy: [
      'Como um pregador ousado na cidade de Florença, Savonarola expôs bravamente o pecado generalizado do povo e do clero num tempo onde os ensinos corretos eram esmagados. Ele exigia sinceridade e rejeitou as tentações papais de ficar calado diante do que considerava certo.',
      'Seu zelo incendiou corações; muitas pessoas largavam os próprios luxos nas feiras para abandonar o erro, orar publicamente por dias exaustos clamando cura da sociedade impiedosa da Idade Média.',
      'Seu zelo não seria tolerado por muito tempo pela igreja antiga da época. Depois de dias sofrendo castigos injustos, terminou humilhado pelas cinzas do pátio, mas espalhou forte raiz a qual Lutero em poucos anos encontraria para florescer a grande Reforma logo à frente.'
    ],
    tags: ['Pré-reforma', 'Martírio', 'Avivamento']
  },
  {
    name: 'Martinho Lutero',
    category: 'Boyer',
    title: 'O Monge que Abalou o Mundo (1483 - 1546)',
    quote: 'Minha consciência é cativa à Palavra de Deus. Não posso e não me retrato de nada!',
    legacy: [
      'Preso numa crise terrível de culpa que ele não sarava castigando o corpo nos monastérios rígidos, ele conheceu as palavras de liberdade escritas na Bíblia no livro aos Romanos, onde "o justo vive por fé", acabando com os traumas paralisantes. Somente o Evangelho podia bastar.',
      'Ele então agiu escrevendo defesas duras (as famosas noventas e cinco teses) condenando as feiras clericais, abalando os enganos religiosos enraizados da doutrina imposta, recusando retirar suas afirmações do puro ensinamento de libertação de Deus frente o trono imperial da dieta em Worms.',
      'Enquanto escapava exilado seguro dentro dos muros montanhosos do Castelo de Wartburg para fugir da perseguição em andamento, traduziu todo livro divino do castelhano e latim diretamente ao alemão da rua. Sua ação abriu, definitivamente, os canais de um cristianismo forte no Ocidente que os séculos jamais apagarão novamente.'
    ],
    tags: ['Reforma', 'Sola Fide', 'Sola Scriptura']
  },
  {
    name: 'João Bunyan',
    category: 'Boyer',
    title: 'O Sonhador Imortal (1628 - 1688)',
    quote: 'Aquele que está no vale, não precisa temer a queda.',
    legacy: [
      'Ele viveu sem nenhum destaque intelectual importante em uma vila da classe simples e empobrecida. Sofreu batalhas terríveis do campo interno para provar aos conselhos, os perigos do caminho pecaminoso pelo resgate salvífico e absoluto do Senhor.',
      'Como a sua forma vigorosa da religiosidade de pregações pelas praças foi rejeitada pela lei rigorosa em vigor não aprovada oficial das coroas, as igrejas proibiam e silenciaram nos asilos escuros tristonhos trancafiado por longos incansáveis ​​doze dolorosos anos amargos de solidão distante de seus pequenos filhinhos deprimidos.',
      'Mas essa masmorra, em vez de enterrar a vida devota, germinou sementes que nos trouxeram hoje o maravilhoso conto imperecível "O Peregrino". Escrito num pátio frio de detenção e no desespero melancólico dos confinados, até hoje guia imensas linhas dos caminhos escuros tortuosos dos santos de Jesus à vitória e ao céu de luz.'
    ],
    tags: ['Literatura', 'Prisão', 'Peregrinação']
  },
  {
    name: 'Jônatas Edwards',
    category: 'Boyer',
    title: 'O Teólogo do Coração (1703 - 1758)',
    quote: 'Deus criou o mundo para ser o teatro de sua Glória!',
    legacy: [
      'Edwards se dedicou não apenas a apresentar sermões bonitos intelectuais com regras perfeitas vazias de vida dominicais como as pessoas rotineiras coloniais praticavam no Novo Mundo inglês. O foco profundo das súplicas longas calvinistas solitárias dele pregavam as aflições e a grande obra verdadeira para quem a escutava.',
      'Gritava verdades da redenção apenas amparado na Palavra, sem gesticular teatro dramático vazio: e através dessas leituras, até nas descrições de trevas pesadas como seu discurso sobre de "Pecadores", ele conseguia tocar e espantar para o quebranto todos seus espectadores com choros dolorosos pelo abandono do medo perante ao Criador misericordioso.',
      'Terminou sua parte nas tribos retiradas na miséria com nativos ignorados das Américas e não por ter saído feliz por um sucesso, e sim recusado e posto de fora pela sociedade exigente ofendida orgulhosa cristã de suas palavras radicais santas em congregação anterior demonstrando abnegação de obediência e paciência submissa nos prados com toda sua família que ele nunca repudiaria ter nascido em Deus.'
    ],
    tags: ['Avivamento', 'Afeições', 'Calvinismo']
  },
  {
    name: 'João Wesley',
    category: 'Boyer',
    title: 'O Pregador a Cavalo (1703 - 1791)',
    quote: 'O mundo é a minha paróquia.',
    legacy: [
      'Foi na iminência fraca do mar de tempestades revoltoso perante pessoas estrangeiras (os calmos e devotos morávios) cantando pacíficos perante a temida afundada fatal que João repensou em toda sua forma rígida sem alegria das normas estritas inglesas, voltando de missões exaustivas sem ter convertido essencialmente o seu próprio íntimo espiritual em Londres e se humilhou perante Deus.',
      'Ao escutar o livrete ensinado claro vindo das reformas que ocorriam cem anos anteriores (na famosa Rua Aldersgate), um poder interno irrompeu sua conversão definitiva e amorosa verdadeira o espalhando como pregador valente por quarenta mil difíceis discursos nos prados mineiros gelados sem medo as levas desgrenhadas fétidas nas madrugadas aos ingleses perdidos miseráveis que mudavam inquebrantavelmente a cor de seus bairros em obediência às suas fortes convicções arminianas e da Bíblia pura.',
      'Criou sociedades duradouras maravilhosas com reuniões caseiras constantes nas frentes frias do metodismo primitivo focado com fogo santificado garantiram para sua vasta velhice inesgotável o título permanente eterno de um profeta humilde do Senhor perante os olhos dos reitores das pátrias nas eras futuras inteiradas no seu lindo despertar espiritual britânico, o melhor de tudo repousa sempre na inseparável promessa do altíssimo para cada crente vivo e presente onde estiverem.'
    ],
    tags: ['Metodismo', 'Missões', 'Reavivamento']
  },
  {
    name: 'Jorge Whitefield',
    category: 'Boyer',
    title: 'A Trombeta do Despertamento (1714 - 1770)',
    quote: 'Contanto que almas sejam salvas, deixem que meu nome morra e pereça.',
    legacy: [
      'Um orador excepcional que usou todo seu vigor jovem evangélico na grande força e despertamentos, deixando para trás capelas silenciosas frias trancadas para o ar livre inclemente britânico para ir até as imensas praças das ruas inglesas pregando às milhares de multidões empurradas pelas dificuldades com amor imenso sem barreiras exigindo a redenção plena e doçura viva em lágrimas ardentes inseparáveis de chamas transformadoras divinizando grandes revoltas e rebeldias fúteis das esquinas decaídas sem vida onde habitavam antes sem rumo as populações empobrecidas.',
      'Para a vida colonial espalhada além dos navios oceanos transatlânticos rumou várias agoniantes corajosas vezes unindo centenas americanos no derramamento contrito da conversão espiritual calvinista na época. Semeando de todo esforço exausto os fundos coletados espalhou caridades, mantendo com ardor constante incansavelmente maravilhosos abrigos de crianças pobres pelo seu trabalho estilhaçante grandioso.',
      'Morreu com os pulmões fadigados pelas suas viagens extenuantes por vales difíceis no interior pregando o Salvador com imensa submissão, abdicando de aplausos honrosos humanos mundanos para ser recebido nos confins incalculáveis da glória que exalou no trabalho suado com o mesmo fôlego frágil exaurido doentio em repouso supremo indestrutível sem o ego nos palácios da pátria real do Altíssimo e glorificando ao Grande Rei que não permitiu o seu sacrifício despretensioso fútil de jeito nenhum perante os confins da humanidade salva do exílio temporal decaída em amarguras.'
    ],
    tags: ['Evangelismo', 'Ao Ar Livre', 'Avivamento']
  },  
  {
    name: 'Davi Livingstone',
    category: 'Boyer',
    title: 'O Desbravador e Mártir da África (1813 - 1873)',
    quote: 'Avançarei em qualquer direção, contanto que seja para a frente.',
    legacy: [
      'Desbravou selvas perigosas intocadas pelas trilhas abandonadas aos insetos perigos e leões africanas na esperança implacável que tribos jamais esquecidas no centro continental também receberiam as palavras de Salvação e as letras do evangelho com o mesmo apreço dedicado ocidental impulsionando assim o marco missionário do pioneirismo no planeta decaído nas missões longínquas na coragem assustadora na perseverança nas graves moléstias fatais africanas ao corpo cansado.',
      'Quando presenciou ao horror das mortes doentias macilentas fétidas causadas pela opressões cruéis dos comerciantes traficantes sádicos infames dos negócios escravagistas covardes impiedosos sem humanidade; seu apelo furioso contra tais leis sangrentas com petições encheu corações indignados da civilização em exigência irredutível forte para romper permanentemente os cadeados iníquos tristonhos avarentos destruidores do demônio libertando multidões pranteadoras ao longo dos vales inóspitos glorificados de amor de braços longos resplandecente no meio selvagem desmatado onde sua vida pregava liberdade a todo custo com zelo forte irredutível avassalador perenemente de paz nas lágrimas.',
      'O mundo confortável nas salas exatas chiques ricas europeias não teve sentido atraente sem ele terminar em joelhos, onde orava pelas matas em aldeias escondidas pobres escuras sendo vencido fisicamente depondo todas amarras terrenas falhas rendido glorioso submisso devoto para não regressar mais, para onde havia abraçado sem frouxidão e covardias e ali encontrou a entrada celestial definitiva do Criador na cabana singela no interior glorificando em exaltações divinas a Sua face no grande final do sol abençoando suas terras pisadas eternamente a todo continente formidável resplandecente sem fim para Cristo Jesus salvífico com sua esperança indestrutivel inigualada inseparavelmente plantada a raiz verdadeira de força de caráter devoto para novas missões espalhadas sempre inabaladas.'
    ],
    tags: ['África', 'Exploração', 'Anti-escravatura']
  },
  {
    name: 'George Müller',
    category: 'Boyer',
    title: 'O Patriarca dos Órfãos (1805 - 1898)',
    quote: 'Se o Senhor não prover hoje, a obra é dEle, que a conclua.',
    legacy: [
      'Foi milagrosamente tirado do orgulho estudioso irascível da prisão frívola esnobe das bebedeiras inúteis acadêmicas perigosas pelas simples e grandes convicções no amor transformador arrebatador de Deus, abnegando com forte emoção a falsa visão moral frágil secular arrogante intelectual e fria russa da vaidade maculante e de vida fútil pela glória do Mestre verdadeiro em conversão humilde pura divina de coração rendido choroso e feliz mudado no quarto.',
      'Sua consagração gigantesca no interior dos refúgios exaustos fechados desolados de suas preces em obediência às orações caladas abriu casas abrigadoras asilos órfãos das tristes marginais inglesas acolhedo para sempre dezenas milhares do abandono total cruel desumano órfãos em invernos aterrorizantes chuvosos cruéis famintos provendo pela caridade misteriosa divina mantida em resposta milagrosa comida pão sapato de modo imediato de quem confia, totalmente independente na verba exata financeira oficial pedinchada e esmolando de portas abertas na Europa sem jamais dever a contas terrenas impenitentes vazias secas do ocidente decaído onde tudo desabaria no frágil laço avassalador quebrado do ser humano mediano falho que vive e se garante neles frouxamente fútil estagnado impiedoso vazio da misericórdia insondável resplandecente divina irrebatível infindo amor divinal diário estético absoluto providencial contínuo resplendor dos socorros céus abertos abismais incansavelmente grandiosos estilhaçantes de fomes mortais dos desamparados filhos carentes da velha sociedade cruel sem carinho amor e asfalto com carinho da casa maravilhoso com Jesus abnegado estético resplandecente inatingível de Deus.',
      'Mesmo em velhice fúnebre quando precisou sepultar multidões de fiéis e amparados no choro ele resistiu, ciente vivo indestrutivo e puro submisso abnegado para repousar com sua recompensa divina nos refúgios grandiosos incontável gloriosos brilhantes da aliança indestrutível eterna do Altíssimo para as maravilhosas exaltações insondáveis eternamente fiéis no Céu eterno e majestoso na divina inigualável exultação e amor resplandecente inextinguivel contínuo.'
    ],
    tags: ['Provisão', 'Órfãos', 'Inglaterra']
  },
  {
    name: 'Charles Spurgeon',
    category: 'Boyer',
    title: 'O Príncipe Pregador do Calvário (1834 - 1892)',
    quote: 'Dê-me a cruz de Cristo, não o evangelho dos tolos de hoje.',
    legacy: [
      'Sua atuação vibrante na Inglaterra chocou o cenário calmo londrino e em poucos anos multidões ouviam sua forte explicação bíblica fiel firme puritana das grandes e irrefutáveis doutrinas de defesa firme inquebrantável das escolhas incontestáveis das mãos do Soberano que amava a ovelha humilhada ensinadas no grandioso Tabernáculo em cultos cheios perante quem pedia socorro sincero nos domingos escuros deprimidos pavorosos e felizes aclamadores salvíficos de londres aos corações tristes abatidos estagnados desolados deprimidos pelo esplendor calvinista arrebatador sincero absoluto com amor e doçura glorificando sem barreiras a grandiosidade imperecível infinita e espetacular de Deus formidável que amou aos perdidos sem reservas exaustivas da lei com amor perene infalível salvífica.',
      'Passou difíceis caminhos conturbados nas rejeições teológicas modernas frouxas dolorosas tristes de amigos esnobes apóstatas orgulhosos com palavras em declínio mas repeliu todas críticas liberais falhas em defesas que a palavra deveria continuar intacta nas verdades e sofreu dores avassaladoras depressivas crônicas da inflamação dolorosa gota que doía seus ossos pálidos fadigantes pesados esmagando seus tendões em enfermidade onde se apegava ainda melhor perante aos padecimentos do crucificado e ao evangelho sublime espetacular forte indestrutivo verdadeiro do calvário com doçura aviltante que calava as arrogâncias.',
      'Nos ensinos práticos construía sermões belíssimos clássicos indestrutíveis maravilhosos que tocaram os mundos futuros infinitamente pelo seu esforço em resgatar a dor pelas exaltações maravilhosas gloriosas imensuráveis profundas em estudos grandiosos nos livros antigos esmagadores dos Salmos (O Tesouro de Davi) que resplandecerá maravilhosamente contundentes fortes e indomáveis fiéis incólume ressurreto como referências divinas formidáveis no imbatível protestantismo puro esplêndido purificado aos olhos abençoáveis mundiais imutáveis na teologia que resgata todos nas sombras tristes falhas pecaminosas e levanta até o tribunal e paz eterna amada inigualável exultante resplandecente no Céu celestial radiante inextinguível supremo soberano sempiterno exótico impenetrável majestoso invencível glorificado formidável.'
    ],
    tags: ['Calvinismo', 'Pregador', 'Oratória']
  }
];

const HeroesGalleryTab: React.FC = () => {
  const [filter, setFilter] = useState<CategoryType>('Hebrews 11');

  const filteredHeroes = HEROES.filter(h => h.category === filter);

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <div className="text-center space-y-4 mb-2">
        <h1 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">Heróis da Fé</h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
          Visto que estamos rodeados por tão grande nuvem de testemunhas, inspire-se no legado dos gigantes da fé que nos precederam na Bíblia e na História da Igreja.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {(['Hebrews 11', 'Boyer', 'Comparison'] as CategoryType[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all ${
              filter === cat 
              ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-md' 
              : 'bg-white dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700'
            }`}
          >
            {cat === 'Hebrews 11' ? 'Hebreus 11' : cat === 'Boyer' ? 'Orlando Boyer' : 'Comparação'}
          </button>
        ))}
      </div>

      {filter === 'Comparison' ? (
        <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm p-8 md:p-14 space-y-10 animate-in fade-in zoom-in-95 duration-500">
          <div className="text-center space-y-4 mb-10 border-b border-slate-200 dark:border-slate-700 pb-10">
            <h2 className="text-3xl lg:text-4xl font-black text-indigo-700 dark:text-indigo-400 tracking-tighter uppercase">Duas Galerias, Um Único Espírito</h2>
            <p className="text-slate-500 font-serif italic text-xl max-w-4xl mx-auto">
              "Um profundo ensaio comparativo entre as testemunhas da Bíblia e os heróis da fé dos séculos seguintes na História da Igreja."
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert prose-indigo mx-auto max-w-4xl text-justify font-sans leading-loose space-y-8 text-slate-700 dark:text-slate-300">
            <p>
              A galeria da fé do capítulo onze de Hebreus e os relatos históricos dos missionários, pastores e mártires compilados por Orlando Boyer mostram a mesma devoção viva ao Deus supremo. Essas duas coleções complementam a grande jornada do povo de Deus: a primeira relata o período de espera pela promessa messiânica vivida nos tempos bíblicos do Antigo Testamento, enquanto a segunda narra o empenho da Igreja ocidental nos últimos vinte séculos.
            </p>
            <p>
              Ao olhar para <strong>Hebreus 11</strong>, vemos pessoas que viveram nas sombras da aliança e antes da encarnação de Jesus. Eles perseveraram pelo vislumbre das verdades absolutas: Abel, com o seu sacrifício; Moisés, deixando o reino egípcio para libertar sua nação escravizada; os anônimos enfrentando perseguições e violências severas nas cavernas, sem títulos pomposos ou garantias honoríficas reais. Esses homens e mulheres abraçaram a pura e humilde fé, ansiando a revelação de Cristo por meio da esperança gloriosa que só se cumpriria muito depois de suas próprias mortes terrenas.
            </p>
            <p>
              Por outro lado, a galeria descrita nos <strong>Heróis de Boyer</strong> destaca grandes expoentes da era reformada, avivalista e missionária que já desfrutavam de algo já concretizado e absoluto do sacrifício real da cruz. Eles não esperaram pelo futuro Redentor, pois viveram dominados pelo Cristo já ressurreto. As missões de David Livingstone em terras perigosas intocadas no século XIX, na fogueira acesa do frei Savonarola ou em toda dedicação nos abrigos criados por George Müller foram provas de vidas constrangidas pelo amor vivo que encheu seus corações pelo avivamento formidável. O zelo fervoroso e as grandes orações eram a luz na vida contra as profundas ignorâncias antigas ao seu redor.
            </p>
            <p>
              A grande ligação e principal mensagem unânime sobre toda a essência contada nesses heróis das páginas antigas e recentes é a total dependência do cuidado divino em relação à fragilidade humana nas horas de angústias e dificuldades: <strong>Deus muitas vezes usa pessoas comuns com seus próprios defeitos - sejam nômades nos desertos antigos ou sábios intelectuais europeus - para nos ensinar a base do Evangelho. A verdadeira força eterna que muda o mundo não nasce da inteligência, suficiência ou de um coração arrogante, mas sim de uma vida inteiramente submissa, dependente e rendida aos pés do Onipotente Deus e Cordeiro Salvador.</strong>
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {filteredHeroes.map((hero, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group flex flex-col items-start p-8 md:p-10 relative">
              
              <div className="absolute -top-10 -right-10 text-[10rem] opacity-[0.03] pointer-events-none font-serif rotate-12">
                "
              </div>

              <div className="flex-1 w-full relative z-10">
                <div className="flex flex-col items-start gap-2 mb-6 border-b border-slate-100 dark:border-slate-700 pb-6">
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors uppercase tracking-tight">
                    {hero.name}
                  </h3>
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase">
                    {hero.title}
                  </p>
                </div>

                <blockquote className="border-l-4 border-amber-500 pl-6 py-2 mb-8 text-slate-700 dark:text-slate-300 font-serif italic text-lg line-clamp-3 group-hover:line-clamp-none transition-all">
                  "{hero.quote}"
                </blockquote>

                <div className="text-slate-600 dark:text-slate-300 leading-loose text-justify space-y-5 mb-8">
                  {hero.legacy.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-700 w-full flex flex-wrap gap-3 relative z-10 mt-auto">
                {hero.tags.map(tag => (
                  <span key={tag} className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs font-black uppercase tracking-widest px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroesGalleryTab;
