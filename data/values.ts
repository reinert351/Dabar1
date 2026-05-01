
export interface BiblicalValue {
  id: string;
  title: string;
  emoji: string;
  description: string;
  points: string[];
  question: string;
  biblicalRefs: string[];
  color: string;
  textColor: string;
  borderColor: string;
}

export const BIBLICAL_VALUES: BiblicalValue[] = [
  {
    id: 'amor',
    title: 'Amor (o valor central)',
    emoji: '❤️',
    description: 'O amor é o fundamento de todos os outros valores cristãos. Não é apenas um sentimento passageiro, mas uma decisão prática e contínua de buscar o bem supremo do outro. O amor ágape reflete a própria natureza de Deus, exigindo sacrifício, perdão e uma entrega genuína que transcende as falhas humanas.',
    points: [
      'Amar a Deus acima de tudo, com todo o coração, alma e entendimento',
      'Amar o próximo como a si mesmo, reconhecendo seu valor inerente',
      'Amor prático e intencional, demonstrado em ações e não apenas em palavras',
      'Amor sacrificial, disposto a abrir mão de direitos em favor do outro'
    ],
    question: 'Como posso amar hoje, de forma prática e sacrificial, alguém que me ofendeu ou que é difícil de amar, seguindo o exemplo de Jesus na cruz?',
    biblicalRefs: ['Mateus 22:37-39', '1 Coríntios 13:4-7', '1 João 3:18', 'João 13:34-35'],
    color: 'bg-rose-50 dark:bg-rose-900/20',
    textColor: 'text-rose-600',
    borderColor: 'border-rose-100 dark:border-rose-800'
  },
  {
    id: 'relacionamento',
    title: 'Relacionamento com Deus',
    emoji: '🙏',
    description: 'A vida cristã autêntica flui de uma conexão profunda, diária e constante com o Criador. Não se trata de religiosidade vazia, mas de uma amizade real cultivada através da oração, da meditação na Palavra e da total dependência da direção do Espírito Santo em cada decisão.',
    points: [
      'Intimidade com Deus como prioridade diária',
      'Vida de oração contínua e escuta atenta à voz do Espírito',
      'Dependência espiritual em vez de autossuficiência',
      'Adoração que transcende a música e se torna um estilo de vida'
    ],
    question: 'Minha rotina diária reflete uma busca intencional pela presença de Deus, ou Ele tem sido apenas um "socorro" para momentos de crise?',
    biblicalRefs: ['João 15:5', 'Tiago 4:8', '1 Tessalonicenses 5:17', 'Salmos 27:4'],
    color: 'bg-blue-50 dark:bg-blue-900/20',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-100 dark:border-blue-800'
  },
  {
    id: 'respeito',
    title: 'Respeito e dignidade humana',
    emoji: '🤝',
    description: 'Cada ser humano carrega a "Imago Dei" (a imagem de Deus). Respeitar o próximo, independentemente de sua condição social, crença ou origem, é honrar diretamente o Criador que o formou. A dignidade humana é um direito inegociável no Reino de Deus.',
    points: [
      'Tratar todas as pessoas com valor, honra e dignidade',
      'Ver o próximo através das lentes da graça e do amor de Deus',
      'Combate ativo a qualquer forma de preconceito, racismo ou exclusão',
      'Defesa dos vulneráveis, órfãos, viúvas e marginalizados'
    ],
    question: 'Como posso ajustar minha linguagem e minhas atitudes para garantir que estou honrando a imagem de Deus naqueles que pensam diferente de mim?',
    biblicalRefs: ['Gênesis 1:27', '1 Pedro 2:17', 'Gálatas 3:28', 'Provérbios 14:31'],
    color: 'bg-emerald-50 dark:bg-emerald-900/20',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-100 dark:border-emerald-800'
  },
  {
    id: 'igualdade',
    title: 'Igualdade',
    emoji: '⚖️',
    description: 'Aos pés da cruz, o terreno é nivelado; todos somos igualmente pecadores necessitados de graça e igualmente amados pelo Pai. Jesus quebrou intencionalmente barreiras sociais, raciais e econômicas para demonstrar que no Seu Reino não há espaço para favoritismos.',
    points: [
      'Todos são absolutamente iguais em valor e importância diante de Deus',
      'Inclusão radical, a exemplo de Jesus com pecadores, cobradores de impostos e rejeitados',
      'Rejeição de panelinhas, elitismo espiritual ou acepção de pessoas na igreja',
      'Promoção de justiça e equidade nas relações interpessoais'
    ],
    question: 'Existe algum grupo de pessoas ou indivíduo que eu, consciente ou inconscientemente, considero "menos digno" da graça de Deus ou da minha comunhão?',
    biblicalRefs: ['Romanos 2:11', 'Tiago 2:1-4', 'Colossenses 3:11', 'Atos 10:34-35'],
    color: 'bg-indigo-50 dark:bg-indigo-900/20',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-100 dark:border-indigo-800'
  },
  {
    id: 'perdao',
    title: 'Perdão',
    emoji: '💔',
    description: 'O perdão é a chave da liberdade emocional e espiritual. Perdoamos não porque o outro merece, mas porque fomos perdoados primeiro por Cristo quando éramos imerecedores. Reter o perdão é beber veneno esperando que o outro morra; liberar o perdão é curar a própria alma.',
    points: [
      'Perdoar incondicionalmente, assim como Cristo nos perdoou',
      'Libertação ativa do ressentimento, da amargura e do desejo de vingança',
      'Estender graça e misericórdia sobre o julgamento e a condenação',
      'Buscar a reconciliação sempre que possível, mantendo limites saudáveis'
    ],
    question: 'Quem é a pessoa que eu mais tenho dificuldade de perdoar hoje, e que passo prático posso dar para liberar essa dívida emocional diante de Deus?',
    biblicalRefs: ['Colossenses 3:13', 'Mateus 6:14-15', 'Efésios 4:32', 'Mateus 18:21-22'],
    color: 'bg-orange-50 dark:bg-orange-900/20',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-100 dark:border-orange-800'
  },
  {
    id: 'humildade',
    title: 'Humildade',
    emoji: '🧎',
    description: 'A verdadeira grandeza no Reino de Deus é medida pelo serviço, não pelo status, títulos ou poder. A humildade cristã não é pensar menos de si mesmo, mas pensar menos em si mesmo. É esvaziar-se do orgulho para lavar os pés dos outros, seguindo o exemplo supremo de Jesus.',
    points: [
      'Servir com alegria ao invés de exigir ser servido ou reconhecido',
      'Seguir o exemplo de Cristo, que se esvaziou de Sua glória para ser servo',
      'Reconhecer que todos os nossos talentos e conquistas vêm da graça de Deus',
      'Estar disposto a realizar tarefas invisíveis e sem aplausos'
    ],
    question: 'Quando foi a última vez que escolhi intencionalmente o último lugar, ou servi alguém em segredo sem esperar nenhum reconhecimento em troca?',
    biblicalRefs: ['Filipenses 2:3-8', 'Mateus 20:26-28', '1 Pedro 5:5', 'João 13:14-15'],
    color: 'bg-slate-50 dark:bg-slate-900/20',
    textColor: 'text-slate-600',
    borderColor: 'border-slate-100 dark:border-slate-800'
  },
  {
    id: 'santidade',
    title: 'Santidade e transformação',
    emoji: '🔥',
    description: 'Santidade não é um conjunto de regras opressivas, mas ser separado e consagrado para o propósito de Deus. É permitir que o Espírito Santo transforme nosso caráter, nossos desejos e nossas ações, alinhando nossa mente com a mente de Cristo e nos afastando dos padrões corrompidos deste mundo.',
    points: [
      'Mudança contínua de comportamento e renovação da mente',
      'Vida alinhada com os princípios de Deus, rejeitando o pecado',
      'Santidade em todas as áreas: pensamentos, palavras, sexualidade e finanças',
      'Buscar a pureza não por legalismo, mas por amor e reverência a Deus'
    ],
    question: 'Quais hábitos, consumos de mídia ou relacionamentos na minha vida atual estão me afastando da santidade e precisam ser abandonados?',
    biblicalRefs: ['1 Pedro 1:15-16', 'Romanos 12:1-2', '2 Coríntios 5:17', 'Hebreus 12:14'],
    color: 'bg-amber-50 dark:bg-amber-900/20',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-100 dark:border-amber-800'
  },
  {
    id: 'pratica',
    title: 'Prática da fé',
    emoji: '🌱',
    description: 'A fé que não resulta em ação é morta e inútil. O cristianismo é um estilo de vida prático e transformador, não apenas um conjunto de crenças intelectuais ou rituais de domingo. A verdadeira teologia deve sempre terminar em doxologia (adoração) e serviço prático ao próximo.',
    points: [
      'Não apenas conhecer a Palavra, mas vivê-la e praticá-la diariamente',
      'Aplicar os ensinamentos de Jesus nas decisões de negócios, família e sociedade',
      'Demonstrar a fé através de obras de justiça, compaixão e caridade',
      'Ser um construtor prudente que edifica a vida sobre a rocha da obediência'
    ],
    question: 'Se alguém observasse minha vida de segunda a sábado, sem saber que sou cristão, encontraria evidências suficientes para me condenar por praticar o Evangelho?',
    biblicalRefs: ['Tiago 1:22', 'Mateus 7:24-27', '1 João 2:6', 'Tiago 2:14-17'],
    color: 'bg-lime-50 dark:bg-lime-900/20',
    textColor: 'text-lime-600',
    borderColor: 'border-lime-100 dark:border-lime-800'
  },
  {
    id: 'carater',
    title: 'Caráter cristão',
    emoji: '🕊️',
    description: 'Integridade é ser exatamente a mesma pessoa no secreto e no público. O caráter cristão é forjado na fornalha das provações e se manifesta quando ninguém está olhando. É refletir a verdade, a fidelidade e o fruto do Espírito de Cristo em todas as situações, mesmo quando custa caro.',
    points: [
      'Integridade inegociável em um mundo de corrupção e atalhos',
      'Falar a verdade em amor, mantendo o "sim" como sim e o "não" como não',
      'Fidelidade aos compromissos, cônjuge, igreja e, acima de tudo, a Deus',
      'Desenvolver o fruto do Espírito: amor, alegria, paz, paciência, amabilidade, bondade, mansidão e domínio próprio'
    ],
    question: 'Minhas palavras, minhas transações financeiras e meu histórico de navegação na internet refletem a integridade de alguém que pertence a Cristo?',
    biblicalRefs: ['Provérbios 11:3', 'Mateus 5:37', 'Gálatas 5:22-23', 'Salmos 15:1-2'],
    color: 'bg-cyan-50 dark:bg-cyan-900/20',
    textColor: 'text-cyan-600',
    borderColor: 'border-cyan-100 dark:border-cyan-800'
  },
  {
    id: 'missao',
    title: 'Missão e propósito',
    emoji: '🌍',
    description: 'Não fomos salvos apenas para ir para o céu, mas para trazer o céu à terra. Fomos chamados para ser sal e luz, influenciando o mundo ao nosso redor. Nossa missão suprema é viver de tal forma que outros vejam nossas boas obras e glorifiquem ao Pai, fazendo discípulos em todas as nações.',
    points: [
      'Ser luz no mundo, dissipando as trevas com a verdade do Evangelho',
      'Influenciar pessoas não por imposição, mas pelo exemplo de uma vida transformada',
      'Viver intencionalmente como discípulo e fazer novos discípulos',
      'Entender que o local de trabalho, a escola e a vizinhança são nosso principal campo missionário'
    ],
    question: 'Estou vivendo com senso de urgência e propósito eterno, ou estou apenas existindo e consumindo os recursos da terra sem impactar ninguém para o Reino?',
    biblicalRefs: ['Mateus 5:14-16', 'Mateus 28:19-20', 'Atos 1:8', '2 Coríntios 5:20'],
    color: 'bg-violet-50 dark:bg-violet-900/20',
    textColor: 'text-violet-600',
    borderColor: 'border-violet-100 dark:border-violet-800'
  },
  {
    id: 'compaixao',
    title: 'Compaixão e Misericórdia',
    emoji: '🤲',
    description: 'A compaixão de Cristo ia além da empatia; ela O movia à ação. Ele não apenas sentia a dor dos aflitos, mas intervia para curar, alimentar e restaurar. É enxergar o sofrimento humano com os olhos de Deus e agir intencionalmente para aliviá-lo.',
    points: [
      'Chorar com os que choram e se alegrar com os que se alegram',
      'Estender a mão aos marginalizados, doentes e esquecidos pela sociedade',
      'Agir para aliviar o sofrimento físico, emocional e espiritual',
      'Não endurecer o coração diante da necessidade evidente do próximo'
    ],
    question: 'Quando vejo a dor de alguém, sinto apenas pena ou sou movido a fazer algo prático para ajudar?',
    biblicalRefs: ['Mateus 9:36', 'Lucas 10:33-34', 'Colossenses 3:12', '1 João 3:17'],
    color: 'bg-teal-50 dark:bg-teal-900/20',
    textColor: 'text-teal-600',
    borderColor: 'border-teal-100 dark:border-teal-800'
  },
  {
    id: 'obediencia',
    title: 'Obediência e Submissão',
    emoji: '👂',
    description: 'A obediência de Jesus ao Pai foi absoluta, culminando na cruz. A verdadeira obediência não nasce do medo do castigo, mas do amor e da confiança na bondade e soberania de Deus. É submeter a própria vontade à vontade divina, mesmo quando custa caro.',
    points: [
      'Dizer "não a minha vontade, mas a tua" nas decisões diárias',
      'Obedecer mesmo quando não compreendemos todos os detalhes do processo',
      'Confiar que os mandamentos de Deus são para nossa proteção e alegria',
      'Praticar uma submissão alegre, sem murmuração ou rebeldia oculta'
    ],
    question: 'Em qual área da minha vida eu ainda luto para dizer "seja feita a Tua vontade" em vez da minha?',
    biblicalRefs: ['Filipenses 2:8', 'João 14:15', '1 Samuel 15:22', 'Hebreus 5:8'],
    color: 'bg-stone-50 dark:bg-stone-900/20',
    textColor: 'text-stone-600',
    borderColor: 'border-stone-100 dark:border-stone-800'
  },
  {
    id: 'justica',
    title: 'Justiça e Retidão',
    emoji: '🛡️',
    description: 'Deus ama a justiça e odeia a opressão. A justiça bíblica (Mishpat) envolve defender os fracos, corrigir as opressões e garantir que as pessoas sejam tratadas de forma justa. Jesus confrontou a hipocrisia religiosa e defendeu os explorados.',
    points: [
      'Defender os direitos dos pobres, órfãos, viúvas e estrangeiros',
      'Confrontar sistemas e atitudes que oprimem ou exploram pessoas',
      'Praticar a honestidade absoluta nos negócios, finanças e relacionamentos',
      'Equilibrar perfeitamente graça e verdade em todas as interações'
    ],
    question: 'Eu me calo diante das injustiças ao meu redor ou uso minha voz e recursos para defender os vulneráveis?',
    biblicalRefs: ['Miqueias 6:8', 'Isaías 1:17', 'Provérbios 21:3', 'Mateus 23:23'],
    color: 'bg-fuchsia-50 dark:bg-fuchsia-900/20',
    textColor: 'text-fuchsia-600',
    borderColor: 'border-fuchsia-100 dark:border-fuchsia-800'
  },
  {
    id: 'paz',
    title: 'Paz e Pacificação',
    emoji: '🌊',
    description: 'Jesus é o Príncipe da Paz. Ele nos chamou não apenas para ter paz, mas para sermos pacificadores. Isso significa entrar em conflitos para trazer reconciliação, curar divisões e promover a harmonia (Shalom) em um mundo fraturado pelo pecado.',
    points: [
      'Buscar ativamente a reconciliação em relacionamentos quebrados',
      'Ser uma ponte de diálogo e cura em vez de um muro de divisão',
      'Responder ao ódio com amor, à ofensa com brandura e ao mal com o bem',
      'Guardar o coração da ansiedade, confiando no controle soberano de Deus'
    ],
    question: 'Sou conhecido nos meus círculos como alguém que apaga incêndios ou como alguém que joga mais lenha na fogueira das fofocas?',
    biblicalRefs: ['Mateus 5:9', 'Romanos 12:18', 'Efésios 2:14', 'Filipenses 4:7'],
    color: 'bg-sky-50 dark:bg-sky-900/20',
    textColor: 'text-sky-600',
    borderColor: 'border-sky-100 dark:border-sky-800'
  },
  {
    id: 'generosidade',
    title: 'Generosidade e Desprendimento',
    emoji: '🎁',
    description: 'A generosidade cristã reflete o coração de um Deus que deu o Seu único Filho. É o desprendimento das posses materiais e do próprio tempo, reconhecendo que somos apenas mordomos (administradores) de tudo o que temos, e não donos absolutos.',
    points: [
      'Dar com alegria e liberalidade, sem esperar nada em troca',
      'Contribuir financeiramente para a expansão do Reino e para os necessitados',
      'Ser generoso com o próprio tempo, ouvindo, servindo e ajudando pessoas',
      'Viver com simplicidade intencional para poder abençoar mais os outros'
    ],
    question: 'O meu extrato bancário e a minha agenda provam que eu confio na provisão de Deus e amo abençoar os outros?',
    biblicalRefs: ['2 Coríntios 9:7', 'Atos 20:35', 'Provérbios 11:24-25', 'Lucas 21:1-4'],
    color: 'bg-yellow-50 dark:bg-yellow-900/20',
    textColor: 'text-yellow-600',
    borderColor: 'border-yellow-100 dark:border-yellow-800'
  },
  {
    id: 'mansidao',
    title: 'Mansidão e Domínio Próprio',
    emoji: '🌿',
    description: 'A mansidão não é fraqueza, mas poder sob controle. Jesus, sendo o Criador do universo, escolheu ser manso e humilde de coração. É a capacidade de responder à provocação com graça e manter o controle das próprias emoções e reações sob a direção do Espírito Santo.',
    points: [
      'Responder à ofensa com brandura em vez de retaliação e fúria',
      'Controlar a língua, os impulsos emocionais e os desejos carnais',
      'Usar a força e a influência para proteger e abençoar, não para intimidar',
      'Confiar na justiça de Deus em vez de tentar fazer justiça com as próprias mãos'
    ],
    question: 'Quando sou contrariado ou ofendido, minha primeira reação demonstra o controle do Espírito ou o descontrole da carne?',
    biblicalRefs: ['Mateus 11:29', 'Gálatas 5:22-23', 'Provérbios 15:1', 'Tiago 1:19-20'],
    color: 'bg-green-50 dark:bg-green-900/20',
    textColor: 'text-green-600',
    borderColor: 'border-green-100 dark:border-green-800'
  },
  {
    id: 'sabedoria',
    title: 'Sabedoria e Discernimento',
    emoji: '💡',
    description: 'A sabedoria bíblica é enxergar a vida a partir da perspectiva de Deus e tomar decisões alinhadas com a Sua vontade. Jesus crescia em sabedoria e ensinava com autoridade, discernindo as intenções dos corações e respondendo com verdade, graça e profundidade.',
    points: [
      'Buscar a sabedoria que vem do alto, que é pura, pacífica e cheia de misericórdia',
      'Discernir entre o bem e o mal em um mundo confuso e relativista',
      'Tomar decisões baseadas na Palavra de Deus, não nas emoções ou na cultura',
      'Aconselhar os outros com base na verdade eterna, não em opiniões passageiras'
    ],
    question: 'Minhas escolhas diárias são guiadas pelo que "sinto" que é certo ou pelo que a Palavra de Deus declara ser a verdade?',
    biblicalRefs: ['Tiago 1:5', 'Provérbios 3:5-6', 'Colossenses 2:3', 'Tiago 3:17'],
    color: 'bg-purple-50 dark:bg-purple-900/20',
    textColor: 'text-purple-600',
    borderColor: 'border-purple-100 dark:border-purple-800'
  },
  {
    id: 'coragem',
    title: 'Coragem e Ousadia',
    emoji: '🦁',
    description: 'A coragem cristã não é a ausência de medo, mas a obediência a Deus apesar do medo. Jesus enfrentou a oposição religiosa, a cruz e a morte com coragem inabalável. Fomos chamados para ser ousados na pregação do Evangelho e na defesa da verdade.',
    points: [
      'Falar a verdade do Evangelho com ousadia, mesmo diante de oposição ou zombaria',
      'Enfrentar as provações com a confiança absoluta de que Deus está no controle',
      'Não se envergonhar de Cristo em ambientes hostis à fé',
      'Agir com bravura para proteger os fracos e confrontar a injustiça sistêmica'
    ],
    question: 'O medo do que as pessoas vão pensar tem me impedido de viver e falar abertamente sobre a minha fé em Cristo?',
    biblicalRefs: ['Josué 1:9', 'Atos 4:29-31', '2 Timóteo 1:7', 'João 16:33'],
    color: 'bg-red-50 dark:bg-red-900/20',
    textColor: 'text-red-600',
    borderColor: 'border-red-100 dark:border-red-800'
  },
  {
    id: 'alegria',
    title: 'Alegria e Gratidão',
    emoji: '✨',
    description: 'A alegria do Senhor é a nossa força. Diferente da felicidade circunstancial, a alegria cristã é uma postura do coração baseada na salvação e na bondade imutável de Deus. A gratidão é o antídoto contra a murmuração, o orgulho e a insatisfação crônica.',
    points: [
      'Regozijar-se no Senhor sempre, independentemente das circunstâncias externas',
      'Cultivar um coração grato, reconhecendo os favores imerecidos de Deus diariamente',
      'Combater a murmuração e a insatisfação com louvor e adoração intencional',
      'Espalhar esperança e ânimo em um mundo marcado pelo desespero e cinismo'
    ],
    question: 'Minha atitude diária é marcada por gratidão pelo que tenho em Cristo ou por murmuração pelo que me falta no mundo?',
    biblicalRefs: ['Filipenses 4:4', '1 Tessalonicenses 5:16-18', 'Neemias 8:10', 'Salmos 100:4'],
    color: 'bg-pink-50 dark:bg-pink-900/20',
    textColor: 'text-pink-600',
    borderColor: 'border-pink-100 dark:border-pink-800'
  },
  {
    id: 'perseveranca',
    title: 'Perseverança e Resiliência',
    emoji: '⛰️',
    description: 'A caminhada cristã é uma maratona, não uma corrida de cem metros. Jesus suportou a cruz com os olhos na alegria que Lhe estava proposta. A perseverança forja o caráter, fortalece a esperança e nos mantém firmes nas promessas de Deus durante as tempestades.',
    points: [
      'Suportar as provações com paciência, sabendo que elas produzem maturidade',
      'Não desistir de fazer o bem, mesmo quando não há resultados ou recompensas imediatas',
      'Manter a fé inabalável diante das perdas, lutos e decepções da vida',
      'Correr a carreira proposta com os olhos fixos em Jesus, o autor e consumador da fé'
    ],
    question: 'Quando as dificuldades aumentam, minha tendência é recuar e desistir, ou me apegar ainda mais firmemente às promessas de Deus?',
    biblicalRefs: ['Hebreus 12:1-2', 'Tiago 1:2-4', 'Romanos 5:3-5', 'Gálatas 6:9'],
    color: 'bg-zinc-50 dark:bg-zinc-900/20',
    textColor: 'text-zinc-600',
    borderColor: 'border-zinc-100 dark:border-zinc-800'
  },
  {
    id: 'verdade',
    title: 'Verdade e Transparência',
    emoji: '📖',
    description: 'Jesus é o Caminho, a Verdade e a Vida. Viver na verdade significa rejeitar a mentira, a hipocrisia e as meias-verdades. É ter a coragem de ser transparente e autêntico, sabendo que a verdade liberta e constrói relacionamentos sólidos.',
    points: [
      'Falar a verdade em amor, sem intenção de ferir',
      'Rejeitar a hipocrisia e a vida de aparências',
      'Ser transparente sobre as próprias fraquezas e falhas',
      'Defender a verdade bíblica em uma cultura relativista'
    ],
    question: 'Existe alguma área da minha vida onde estou sustentando uma mentira ou vivendo de aparências?',
    biblicalRefs: ['João 8:32', 'João 14:6', 'Efésios 4:25', 'Provérbios 12:22'],
    color: 'bg-blue-50 dark:bg-blue-900/20',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-100 dark:border-blue-800'
  },
  {
    id: 'esperanca',
    title: 'Esperança e Confiança',
    emoji: '⚓',
    description: 'A esperança cristã não é um otimismo cego, mas uma âncora firme baseada nas promessas infalíveis de Deus. Jesus nos ensinou a confiar no cuidado providencial do Pai, sabendo que o nosso futuro está seguro em Suas mãos, independentemente do caos presente.',
    points: [
      'Ancorar a alma nas promessas de Deus durante as tempestades',
      'Viver com a perspectiva da eternidade, não apenas do agora',
      'Confiar na provisão diária do Pai, rejeitando a ansiedade',
      'Inspirar esperança em pessoas que estão desanimadas'
    ],
    question: 'Minha visão do futuro é moldada pelas notícias do mundo ou pelas promessas inabaláveis de Deus?',
    biblicalRefs: ['Hebreus 6:19', 'Romanos 15:13', 'Jeremias 29:11', 'Mateus 6:25-26'],
    color: 'bg-sky-50 dark:bg-sky-900/20',
    textColor: 'text-sky-600',
    borderColor: 'border-sky-100 dark:border-sky-800'
  },
  {
    id: 'hospitalidade',
    title: 'Hospitalidade e Acolhimento',
    emoji: '🏠',
    description: 'A hospitalidade bíblica (filoxenia) significa literalmente "amor aos estrangeiros". Jesus frequentemente compartilhava a mesa com pessoas improváveis. É abrir não apenas a porta de casa, mas o coração, criando espaços seguros onde as pessoas experimentem o amor de Deus.',
    points: [
      'Receber as pessoas com alegria e sem murmuração',
      'Compartilhar refeições como forma de comunhão e discipulado',
      'Acolher os solitários, estrangeiros e marginalizados',
      'Fazer com que as pessoas se sintam amadas e valorizadas'
    ],
    question: 'Minha casa e minha vida têm as portas abertas para acolher aqueles que precisam de comunhão?',
    biblicalRefs: ['Hebreus 13:2', '1 Pedro 4:9', 'Romanos 12:13', 'Lucas 14:12-14'],
    color: 'bg-orange-50 dark:bg-orange-900/20',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-100 dark:border-orange-800'
  },
  {
    id: 'fidelidade',
    title: 'Fidelidade e Constância',
    emoji: '🔗',
    description: 'Deus é fiel, e fomos chamados para refletir essa fidelidade. É a qualidade de ser confiável, leal e constante, cumprindo compromissos mesmo quando as circunstâncias mudam ou quando exige sacrifício. Jesus foi fiel ao Pai até o fim.',
    points: [
      'Manter a palavra e cumprir promessas, mesmo com prejuízo próprio',
      'Ser leal nos relacionamentos, no casamento e na amizade',
      'Demonstrar constância na vida espiritual, sem altos e baixos extremos',
      'Ser um mordomo fiel dos talentos, tempo e recursos confiados por Deus'
    ],
    question: 'As pessoas ao meu redor podem confiar plenamente na minha palavra e nos meus compromissos?',
    biblicalRefs: ['Lamentações 3:22-23', 'Mateus 25:21', 'Provérbios 3:3', 'Apocalipse 2:10'],
    color: 'bg-indigo-50 dark:bg-indigo-900/20',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-100 dark:border-indigo-800'
  },
  {
    id: 'zelo',
    title: 'Zelo e Fervor Espiritual',
    emoji: '☄️',
    description: 'O zelo é a paixão ardente pelas coisas de Deus. Jesus demonstrou zelo pela casa do Pai. Não fomos chamados para uma fé morna ou apática, mas para um fervor espiritual que nos impulsiona a buscar a glória de Deus com entusiasmo e dedicação total.',
    points: [
      'Manter a chama do Espírito acesa através da devoção diária',
      'Rejeitar a mornidão espiritual e a apatia religiosa',
      'Demonstrar paixão e entusiasmo no serviço ao Reino de Deus',
      'Ter um zelo santo pela pureza da Igreja e pela verdade do Evangelho'
    ],
    question: 'Minha fé tem sido marcada por um fogo ardente por Deus ou tenho me acomodado na mornidão?',
    biblicalRefs: ['Romanos 12:11', 'Apocalipse 3:15-16', 'João 2:17', 'Tito 2:14'],
    color: 'bg-red-50 dark:bg-red-900/20',
    textColor: 'text-red-600',
    borderColor: 'border-red-100 dark:border-red-800'
  },
  {
    id: 'pureza',
    title: 'Pureza de Coração',
    emoji: '🤍',
    description: 'Bem-aventurados os puros de coração, pois verão a Deus. A pureza vai além do comportamento externo; trata-se das motivações íntimas, dos pensamentos secretos e da intenção do coração. É buscar ter uma mente limpa e um coração sem divisões.',
    points: [
      'Guardar os olhos e a mente das contaminações do mundo',
      'Cultivar motivações puras, sem segundas intenções ou egoísmo',
      'Buscar a santificação contínua dos pensamentos e desejos',
      'Confessar e abandonar pecados ocultos rapidamente'
    ],
    question: 'Se meus pensamentos fossem projetados em uma tela, eu me envergonharia das minhas motivações secretas?',
    biblicalRefs: ['Mateus 5:8', 'Salmos 51:10', 'Filipenses 4:8', 'Provérbios 4:23'],
    color: 'bg-teal-50 dark:bg-teal-900/20',
    textColor: 'text-teal-600',
    borderColor: 'border-teal-100 dark:border-teal-800'
  },
  {
    id: 'contentamento',
    title: 'Contentamento e Simplicidade',
    emoji: '🍃',
    description: 'O contentamento é a paz profunda de saber que Deus é suficiente. Em um mundo movido pelo consumismo e pela insatisfação crônica, Jesus nos ensina a viver com simplicidade, encontrando nossa verdadeira riqueza nEle e não no acúmulo de bens.',
    points: [
      'Aprender a estar satisfeito em qualquer situação, na escassez ou na fartura',
      'Rejeitar a ganância, a inveja e a comparação constante com os outros',
      'Viver de forma simples para focar no que tem valor eterno',
      'Agradecer pelo pão de cada dia, confiando na provisão divina'
    ],
    question: 'Minha alegria depende das coisas que possuo ou da minha identidade e segurança em Cristo?',
    biblicalRefs: ['1 Timóteo 6:6-8', 'Filipenses 4:11-13', 'Hebreus 13:5', 'Lucas 12:15'],
    color: 'bg-emerald-50 dark:bg-emerald-900/20',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-100 dark:border-emerald-800'
  },
  {
    id: 'empatia',
    title: 'Empatia e Escuta Ativa',
    emoji: '🫂',
    description: 'Jesus era profundamente movido por empatia. Ele parava para ouvir o cego à beira do caminho e a mulher à beira do poço. A empatia cristã é a capacidade de calar os próprios preconceitos para ouvir a dor do outro com atenção, graça e sem julgamento precipitado.',
    points: [
      'Ser pronto para ouvir, tardio para falar e tardio para se irar',
      'Validar a dor do outro antes de oferecer conselhos ou correções',
      'Chorar com os que choram, oferecendo presença e consolo',
      'Prestar atenção não apenas às palavras, mas ao coração das pessoas'
    ],
    question: 'Quando converso com alguém em dor, eu escuto para compreender ou apenas espero minha vez de falar?',
    biblicalRefs: ['Tiago 1:19', 'Romanos 12:15', 'Gálatas 6:2', 'Provérbios 18:13'],
    color: 'bg-fuchsia-50 dark:bg-fuchsia-900/20',
    textColor: 'text-fuchsia-600',
    borderColor: 'border-fuchsia-100 dark:border-fuchsia-800'
  },
  {
    id: 'reverencia',
    title: 'Reverência e Temor a Deus',
    emoji: '👑',
    description: 'O temor do Senhor é o princípio da sabedoria. Não é um pavor paralisante, mas um profundo respeito, assombro e reverência pela santidade, majestade e poder de Deus. É viver com a consciência constante de que estamos diante do Criador do universo.',
    points: [
      'Tratar as coisas santas com o devido respeito e honra',
      'Viver com a consciência de que prestaremos contas a Deus',
      'Adorar a Deus com reverência, reconhecendo Sua majestade',
      'Obedecer a Deus não apenas por amor, mas também por um santo temor'
    ],
    question: 'Minha atitude diante de Deus reflete a reverência devida ao Rei do universo ou O trato de forma leviana?',
    biblicalRefs: ['Provérbios 9:10', 'Hebreus 12:28-29', 'Eclesiastes 12:13', 'Salmos 33:8'],
    color: 'bg-amber-50 dark:bg-amber-900/20',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-100 dark:border-amber-800'
  },
  {
    id: 'graca',
    title: 'Graça e Favor Imerecido',
    emoji: '✝️',
    description: 'A graça é o coração do Evangelho: receber o que não merecemos. Jesus encarnou a graça e a verdade. Viver a graça significa não apenas aceitar o perdão de Deus para si mesmo, mas estender esse mesmo favor imerecido aos outros, quebrando o ciclo de legalismo e condenação.',
    points: [
      'Reconhecer que a salvação e todas as bênçãos são presentes imerecidos',
      'Tratar as falhas dos outros com a mesma graça que recebemos de Deus',
      'Abandonar o legalismo e a tentativa de "comprar" o amor de Deus',
      'Ser um canal de graça, abençoando aqueles que não podem retribuir'
    ],
    question: 'Eu exijo justiça rigorosa para os erros dos outros, enquanto espero graça abundante para os meus?',
    biblicalRefs: ['Efésios 2:8-9', 'João 1:14', 'Romanos 11:6', '2 Timóteo 1:9'],
    color: 'bg-rose-50 dark:bg-rose-900/20',
    textColor: 'text-rose-600',
    borderColor: 'border-rose-100 dark:border-rose-800'
  }
];
