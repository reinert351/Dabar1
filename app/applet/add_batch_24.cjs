const fs = require('fs');

const newPericopes = [
  {
    id: 'pro_1_1_7',
    bookId: 'PRO',
    chapter: 1,
    startVerse: 1,
    endVerse: 7,
    title: 'O Princípio da Sabedoria',
    theme: 'O Propósito dos Provérbios, Instrução e o Temor do Senhor',
    introduction: 'O livro de Provérbios é o manual de sabedoria prática da Bíblia. Escrito majoritariamente por Salomão, ele não oferece promessas absolutas, mas princípios gerais sobre como o mundo de Deus funciona. Os primeiros sete versículos de Provérbios 1 funcionam como o prefácio de todo o livro. Eles declaram o propósito da obra: dar prudência aos simples e conhecimento aos jovens. O clímax desta introdução é o versículo 7, que estabelece o alicerce de todo o conhecimento verdadeiro: o temor do Senhor.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Propósito da Sabedoria',
        description: 'Os provérbios servem para entender a justiça, o juízo e a equidade. A sabedoria bíblica não é apenas um acúmulo intelectual, mas uma bússola moral para a vida diária.'
      },
      {
        verseRef: 'v. 4-6',
        title: 'Para Quem é a Sabedoria',
        description: 'Ela é destinada aos simples e aos jovens para dar-lhes prudência, mas também ao sábio, que "ouvirá e crescerá em conhecimento". Ninguém é tão sábio que não precise aprender mais.'
      },
      {
        verseRef: 'v. 7',
        title: 'O Alicerce do Conhecimento',
        description: 'O temor do Senhor é o princípio da sabedoria. Sem reverência e submissão a Deus, qualquer conhecimento humano acaba em loucura. Os loucos desprezam a instrução.'
      }
    ],
    conclusion: 'A sabedoria no mundo moderno é frequentemente confundida com acúmulo de informações ou esperteza tecnológica. Provérbios nos ensina que a verdadeira sabedoria começa com uma postura do coração: o temor do Senhor. Reconhecer quem Deus é e submeter-se à Sua autoridade é o primeiro passo para viver bem. Os loucos desprezam a instrução, mas aqueles que desejam uma vida plena abrem os ouvidos para a disciplina divina.'
  },
  {
    id: 'pro_4_14_27',
    bookId: 'PRO',
    chapter: 4,
    startVerse: 14,
    endVerse: 27,
    title: 'A Guarda do Coração',
    theme: 'O Caminho dos Ímpios, o Foco e a Proteção da Alma',
    introduction: 'Em Provérbios 4, um pai instrui o seu filho sobre os perigos do mundo e a necessidade de vigilância constante. O texto contrasta o caminho dos ímpios (que é como a escuridão) com a vereda dos justos (que brilha como a luz da aurora). O ponto central desta passagem é o versículo 23, um dos conselhos mais importantes de toda a Bíblia: "Sobre tudo o que se deve guardar, guarda o teu coração". A nossa vida exterior é sempre um reflexo da nossa condição interior.',
    points: [
      {
        verseRef: 'v. 14-19',
        title: 'Os Dois Caminhos',
        description: 'O pai adverte para evitar a vereda dos ímpios. O caminho do justo clareia progressivamente até ser dia perfeito, enquanto o ímpio tropeça nas trevas sem saber em quê.'
      },
      {
        verseRef: 'v. 20-23',
        title: 'A Guarda do Coração',
        description: 'O coração na Bíblia é o centro da vontade, dos pensamentos e das emoções. Guardá-lo é vital porque dele "procedem as saídas da vida". Tudo o que fazemos flui do nosso interior.'
      },
      {
        verseRef: 'v. 24-27',
        title: 'A Disciplina do Corpo',
        description: 'Guardar o coração exige controlar a boca (evitar a falsidade), os olhos (olhar para a frente com retidão) e os pés (ponderar a vereda). Onde os nossos olhos focam, os nossos pés seguirão.'
      }
    ],
    conclusion: 'Vivemos numa cultura que nos ensina a guardar o nosso dinheiro, a nossa saúde e a nossa imagem pública, mas frequentemente negligenciamos a guarda do nosso coração. O que deixamos entrar pelos nossos olhos e ouvidos molda os nossos desejos, e os nossos desejos determinam o nosso destino. Guardar o coração não é isolar-se do mundo, mas filtrar tudo através da Palavra de Deus, mantendo os olhos fixos no caminho da retidão.'
  },
  {
    id: 'pro_6_6_11',
    bookId: 'PRO',
    chapter: 6,
    startVerse: 6,
    endVerse: 11,
    title: 'A Lição da Formiga',
    theme: 'Diligência, Preguiça e a Sabedoria da Natureza',
    introduction: 'A sabedoria bíblica frequentemente usa a observação da natureza para ensinar lições morais. Em Provérbios 6, Salomão dirige-se ao "preguiçoso" e manda-o observar um dos menores insetos da criação: a formiga. A formiga é o antídoto perfeito para a procrastinação e a falta de iniciativa. O texto alerta que a preguiça não é apenas um traço de personalidade inofensivo, mas um caminho perigoso que leva inevitavelmente à pobreza e à ruína.',
    points: [
      {
        verseRef: 'v. 6-8',
        title: 'A Iniciativa da Formiga',
        description: 'A formiga não tem chefe, oficial ou governador, mas prepara o seu pão no verão e ajunta o seu mantimento na sega. Ela tem automotivação e visão de futuro.'
      },
      {
        verseRef: 'v. 9-10',
        title: 'O Sono do Preguiçoso',
        description: 'O preguiçoso ama o conforto imediato. "Um pouco de sono, um pouco de tosquenejar" mostra como a preguiça age de forma sutil e gradual, roubando o tempo precioso.'
      },
      {
        verseRef: 'v. 11',
        title: 'A Consequência Inevitável',
        description: 'A pobreza virá como um "caminhante" e a necessidade como um "homem armado". A ruína do preguiçoso é certa, implacável e impossível de ser detida quando chega.'
      }
    ],
    conclusion: 'A preguiça é um roubador silencioso de destinos. Ela nos convence de que sempre haverá tempo amanhã para fazer o que deveria ser feito hoje. A formiga nos ensina que a verdadeira sabedoria envolve autodisciplina, trabalho árduo e preparação para o futuro, mesmo quando ninguém está nos vigiando. Deus nos chamou para sermos mordomos diligentes do tempo e dos talentos que Ele nos confiou.'
  },
  {
    id: 'pro_8_22_36',
    bookId: 'PRO',
    chapter: 8,
    startVerse: 22,
    endVerse: 36,
    title: 'A Sabedoria na Criação',
    theme: 'A Eternidade da Sabedoria, a Alegria do Criador e o Convite à Vida',
    introduction: 'Em Provérbios 8, a Sabedoria é personificada como uma mulher que clama nas ruas. Na segunda metade do capítulo, a Sabedoria descreve a sua origem e o seu papel na criação do universo. Ela estava com Deus antes que houvesse oceanos, montanhas ou céus. Este texto é profundamente teológico e tem sido lido pelos cristãos ao longo dos séculos como uma descrição poética do próprio Cristo, o Logos eterno (João 1), que é a "sabedoria de Deus" (1 Coríntios 1:24).',
    points: [
      {
        verseRef: 'v. 22-26',
        title: 'A Eternidade da Sabedoria',
        description: 'O Senhor a possuiu no princípio dos Seus caminhos. Antes de qualquer coisa ser criada — abismos, fontes, montes ou a terra — a sabedoria já existia.'
      },
      {
        verseRef: 'v. 27-31',
        title: 'O Arquiteto e a Alegria',
        description: 'Quando Deus preparava os céus e traçava os limites do mar, a sabedoria estava ao Seu lado como "arquiteto", alegrando-se no Seu mundo habitável e com os filhos dos homens.'
      },
      {
        verseRef: 'v. 32-36',
        title: 'O Convite à Vida',
        description: 'A sabedoria faz um apelo: quem a acha, acha a vida e alcança o favor do Senhor. Mas quem peca contra ela, faz mal à própria alma, e todos os que a odeiam amam a morte.'
      }
    ],
    conclusion: 'O universo não é um acidente caótico; ele foi desenhado com sabedoria profunda e alegria. Quando vivemos de forma tola, ignorando os princípios de Deus, estamos indo contra a própria estrutura da criação. Mais importante ainda, este texto aponta para Jesus Cristo. Ele estava lá no princípio, e nEle estão escondidos todos os tesouros da sabedoria. Encontrar a Cristo é encontrar a vida; rejeitá-Lo é amar a morte espiritual.'
  },
  {
    id: 'pro_11_1_11',
    bookId: 'PRO',
    chapter: 11,
    startVerse: 1,
    endVerse: 11,
    title: 'A Integridade e a Justiça',
    theme: 'Honestidade nos Negócios, a Queda do Orgulho e o Impacto na Cidade',
    introduction: 'Provérbios não separa a vida espiritual da vida profissional ou financeira. Para Deus, a forma como fazemos negócios é um ato de adoração (ou de rebelião). Provérbios 11 contrasta o comportamento do justo com o do ímpio, focando na integridade, na honestidade e no impacto que o caráter de uma pessoa tem sobre toda a comunidade. O texto nos lembra que Deus se importa com os "pesos e medidas" que usamos no nosso dia a dia.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Balança Enganosa e a Sinceridade',
        description: 'A balança enganosa é abominação ao Senhor, mas o peso justo é o Seu prazer. A integridade guia os retos, mas a falsidade destrói os transgressores.'
      },
      {
        verseRef: 'v. 4-8',
        title: 'A Inutilidade das Riquezas no Dia da Ira',
        description: 'As riquezas não salvam no dia do juízo, mas a justiça livra da morte. O justo é libertado da angústia, e o ímpio cai na sua própria armadilha.'
      },
      {
        verseRef: 'v. 9-11',
        title: 'O Impacto na Comunidade',
        description: 'O hipócrita destrói o próximo com a boca. Quando os justos prosperam, a cidade exulta. A bênção dos retos exalta a cidade, mas a boca dos ímpios a destrói.'
      }
    ],
    conclusion: 'A nossa fé deve ser visível nas nossas transações financeiras e na nossa ética de trabalho. Deus abomina a desonestidade, mesmo que ela traga lucro a curto prazo. A integridade é a melhor proteção para a nossa alma. Além disso, o nosso caráter não afeta apenas a nós mesmos; ele afeta a nossa "cidade". Crentes íntegros são uma bênção para a sociedade, promovendo justiça, paz e prosperidade para todos ao seu redor.'
  },
  {
    id: 'pro_15_1_4',
    bookId: 'PRO',
    chapter: 15,
    startVerse: 1,
    endVerse: 4,
    title: 'O Poder da Língua',
    theme: 'A Resposta Branda, a Cura e o Controle das Palavras',
    introduction: 'Um dos temas mais recorrentes no livro de Provérbios é o poder das palavras. As nossas palavras têm o poder de iniciar guerras ou promover a paz, de ferir profundamente ou de curar. Provérbios 15:1-4 foca especificamente em como reagimos em momentos de conflito e tensão. O sábio entende que não é apenas o que se diz que importa, mas como se diz. A "resposta branda" é apresentada como uma das ferramentas mais poderosas para desarmar a ira.',
    points: [
      {
        verseRef: 'v. 1',
        title: 'A Resposta Branda',
        description: 'A resposta branda desvia o furor, mas a palavra dura suscita a ira. A nossa reação determina se o fogo do conflito será apagado ou alimentado.'
      },
      {
        verseRef: 'v. 2',
        title: 'O Uso do Conhecimento',
        description: 'A língua dos sábios adorna o conhecimento, mas a boca dos tolos derrama a estultícia. A sabedoria sabe o momento e a forma certa de falar.'
      },
      {
        verseRef: 'v. 3-4',
        title: 'Os Olhos de Deus e a Árvore de Vida',
        description: 'Deus vê tanto os maus como os bons. A língua saudável (pacificadora) é uma árvore de vida, mas a perversidade nela quebranta o espírito.'
      }
    ],
    conclusion: 'Em momentos de discussão, o nosso instinto natural é responder ao fogo com mais fogo, levantando a voz e usando palavras duras. Provérbios nos chama a uma atitude contracultural: usar a mansidão como arma. Uma resposta branda exige enorme domínio próprio e dependência do Espírito Santo. Quando escolhemos falar com graça e sabedoria, as nossas palavras tornam-se uma "árvore de vida", trazendo cura e reconciliação aos relacionamentos quebrados.'
  },
  {
    id: 'pro_16_1_9',
    bookId: 'PRO',
    chapter: 16,
    startVerse: 1,
    endVerse: 9,
    title: 'A Soberania de Deus e os Planos Humanos',
    theme: 'Planejamento, Motivações e a Direção Divina',
    introduction: 'Como devemos planejar o nosso futuro? Qual é o equilíbrio entre a nossa responsabilidade de nos prepararmos e a soberania de Deus sobre os resultados? Provérbios 16 aborda esta tensão de forma brilhante. O texto reconhece que os seres humanos fazem planos e tomam decisões, mas afirma categoricamente que a palavra final e a direção dos nossos passos pertencem ao Senhor. É um chamado à humildade e à submissão dos nossos projetos à vontade de Deus.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'Os Planos e as Motivações',
        description: 'O coração do homem faz os planos, mas a resposta vem do Senhor. Deus pesa os espíritos (as motivações). "Confia ao Senhor as tuas obras, e os teus pensamentos serão estabelecidos".'
      },
      {
        verseRef: 'v. 4-5',
        title: 'O Propósito de Deus e o Orgulho',
        description: 'O Senhor fez todas as coisas para os Seus próprios fins. O coração altivo é abominação ao Senhor e não ficará impune. O orgulho é a raiz da rebelião contra a vontade divina.'
      },
      {
        verseRef: 'v. 9',
        title: 'O Coração e os Passos',
        description: 'O versículo clássico: "O coração do homem planeja o seu caminho, mas o Senhor lhe dirige os passos". Nós planejamos, mas Deus governa o resultado final.'
      }
    ],
    conclusion: 'Não há nada de errado em fazer planos; a Bíblia encoraja a prudência e a preparação. O erro está em fazer planos com arrogância, achando que controlamos o nosso próprio destino. A verdadeira sabedoria é planejar com o coração submisso, entregando as nossas obras ao Senhor e permitindo que Ele altere a nossa rota quando necessário. Quando os nossos planos falham ou mudam de direção, podemos descansar na certeza de que o Soberano do universo está dirigindo os nossos passos para o Seu propósito perfeito.'
  },
  {
    id: 'pro_24_30_34',
    bookId: 'PRO',
    chapter: 24,
    startVerse: 30,
    endVerse: 34,
    title: 'O Campo do Preguiçoso',
    theme: 'Negligência, Ruína e a Lição da Observação',
    introduction: 'O autor de Provérbios é um observador atento da vida cotidiana. Em Provérbios 24, ele relata uma caminhada que fez passando pelo campo e pela vinha de um homem preguiçoso e falto de entendimento. O que ele vê é um cenário de abandono: espinhos, urtigas e muros caídos. Em vez de apenas criticar, o sábio extrai uma lição profunda para a sua própria vida. A passagem é um alerta vívido sobre o poder destrutivo da negligência, não apenas na agricultura, mas em qualquer área da nossa vida.',
    points: [
      {
        verseRef: 'v. 30-31',
        title: 'O Cenário de Abandono',
        description: 'O campo estava cheio de espinhos, coberto de urtigas e o seu muro de pedra estava derrubado. A ruína não veio por um desastre natural, mas por pura omissão.'
      },
      {
        verseRef: 'v. 32',
        title: 'A Reflexão do Sábio',
        description: '"O que tendo eu visto, o considerei; e, vendo-o, recebi instrução". O sábio aprende com os erros dos outros, transformando a observação em sabedoria prática.'
      },
      {
        verseRef: 'v. 33-34',
        title: 'O Sono e a Pobreza',
        description: 'A mesma advertência de Provérbios 6 é repetida: "Um pouco de sono...". A pobreza virá como um ladrão armado sobre aquele que negligencia as suas responsabilidades.'
      }
    ],
    conclusion: 'O campo do preguiçoso é uma metáfora poderosa para a nossa vida espiritual, os nossos relacionamentos e a nossa vocação. Um casamento não desmorona da noite para o dia; a nossa fé não morre de repente. A ruína acontece através de pequenas negligências diárias: a falta de oração, a falta de perdão, a falta de cuidado. Se não cultivarmos ativamente o "campo" que Deus nos deu, os "espinhos" do pecado e do mundo tomarão conta. A sabedoria exige vigilância e manutenção constante.'
  },
  {
    id: 'pro_30_7_9',
    bookId: 'PRO',
    chapter: 30,
    startVerse: 7,
    endVerse: 9,
    title: 'A Oração de Agur',
    theme: 'Contentamento, Dependência e o Perigo dos Extremos',
    introduction: 'O capítulo 30 de Provérbios contém as palavras de Agur. No meio das suas observações sobre a vida, ele faz uma oração fascinante e única. Ele pede a Deus apenas duas coisas antes de morrer. A sua petição não é por riqueza infinita, fama ou poder, mas por um caráter íntegro e por uma vida de equilíbrio financeiro. A oração de Agur revela um autoconhecimento profundo sobre as fraquezas do coração humano e os perigos espirituais tanto da pobreza extrema quanto da riqueza excessiva.',
    points: [
      {
        verseRef: 'v. 7-8a',
        title: 'O Pedido por Integridade',
        description: 'Ele pede duas coisas: "Afasta de mim a vaidade e a palavra mentirosa". O seu primeiro desejo é a pureza de caráter e a honestidade diante de Deus e dos homens.'
      },
      {
        verseRef: 'v. 8b',
        title: 'O Pedido por Equilíbrio',
        description: '"Não me dês nem a pobreza nem a riqueza; mantém-me do pão da minha porção de costume". Ele pede apenas o necessário para viver, rejeitando os extremos.'
      },
      {
        verseRef: 'v. 9',
        title: 'O Perigo dos Extremos',
        description: 'A razão do seu pedido: se for muito rico, pode tornar-se orgulhoso e negar a Deus ("Quem é o Senhor?"); se for muito pobre, pode ser tentado a roubar e profanar o nome de Deus.'
      }
    ],
    conclusion: 'A oração de Agur é um antídoto poderoso contra o materialismo e a ganância da nossa época. Ele entendeu que a riqueza pode criar uma falsa sensação de autossuficiência, levando-nos a esquecer de Deus, enquanto a miséria pode nos levar ao desespero e ao pecado. O seu desejo era o contentamento com o "pão de cada dia" (uma antecipação da oração do Pai Nosso). A verdadeira prosperidade espiritual é viver num estado de dependência contínua e grata pela provisão diária de Deus.'
  },
  {
    id: 'pro_31_10_31',
    bookId: 'PRO',
    chapter: 31,
    startVerse: 10,
    endVerse: 31,
    title: 'A Mulher Virtuosa',
    theme: 'Caráter, Diligência, Sabedoria e o Temor do Senhor',
    introduction: 'O livro de Provérbios termina com um poema acróstico (cada versículo começa com uma letra do alfabeto hebraico) que descreve a "mulher virtuosa" (ou mulher de valor/força). Historicamente, este texto tem sido lido como um manual de excelência feminina, mas também é uma personificação final da Sabedoria que foi exaltada ao longo de todo o livro. Esta mulher é forte, empreendedora, compassiva e sábia. O clímax do poema revela que o segredo da sua beleza e do seu sucesso não está na aparência física, mas no seu relacionamento com Deus.',
    points: [
      {
        verseRef: 'v. 10-12',
        title: 'O Valor Inestimável e a Confiança',
        description: 'O seu valor excede o de rubis. O coração do seu marido confia nela, e ela lhe faz bem todos os dias da sua vida. Ela é um porto seguro para a sua família.'
      },
      {
        verseRef: 'v. 13-27',
        title: 'A Diligência e a Compaixão',
        description: 'Ela é trabalhadora, administra negócios, investe em terras, cuida da sua casa e, crucialmente, "abre a sua mão ao pobre e estende as suas mãos ao necessitado".'
      },
      {
        verseRef: 'v. 28-31',
        title: 'O Louvor e o Temor do Senhor',
        description: 'Os seus filhos e o seu marido a louvam. O versículo 30 dá a chave de tudo: "Enganosa é a beleza e vã a formosura, mas a mulher que teme ao Senhor, essa sim será louvada".'
      }
    ],
    conclusion: 'A mulher de Provérbios 31 destrói os estereótipos de fraqueza. Ela é uma administradora competente, uma líder na sua casa e uma benfeitora na sua comunidade. No entanto, o texto deixa claro que as suas realizações são o fruto da sua raiz espiritual: o temor do Senhor. Num mundo que idolatra a beleza física e a juventude (que são "enganosas e vãs"), a Bíblia exalta o caráter e a devoção a Deus como as únicas fontes de louvor verdadeiro e duradouro. Este é o padrão de excelência para todos os que desejam viver sabiamente.'
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
console.log(`Added ${addedCount} new pericopes (Batch 24 - Proverbs).`);
