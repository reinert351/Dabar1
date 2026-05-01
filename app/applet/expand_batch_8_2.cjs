const fs = require('fs');

const expandedPericopes = [
  {
    id: 'lev_25_1_7',
    bookId: 'LEV',
    chapter: 25,
    startVerse: 1,
    endVerse: 7,
    title: 'O Ano Sabático',
    theme: 'O Descanso da Terra, a Confiança na Provisão e a Soberania de Deus',
    introduction: 'Levítico 25 introduz uma das leis econômicas e ecológicas mais radicais do mundo antigo: o Ano Sabático (Shmita). Assim como o homem e os animais deveriam descansar no sétimo dia, a própria terra de Canaã deveria ter um ano de descanso a cada sete anos. Esta lei desafiava a lógica agrícola e econômica, exigindo de Israel uma fé extraordinária na provisão de Deus. O Ano Sabático era um lembrete prático de que a terra não pertencia aos israelitas, mas a Yahweh, e que a sobrevivência deles dependia da obediência à aliança, não apenas do seu próprio trabalho árduo.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Sábado da Terra',
        description: 'Deus fala a Moisés no Monte Sinai, estabelecendo a regra para quando eles entrarem na terra prometida. Durante seis anos, eles poderiam semear seus campos e podar suas vinhas. Mas o sétimo ano seria um "sábado de descanso solene para a terra, um sábado ao Senhor". Durante este ano inteiro, era estritamente proibido semear o campo ou podar a vinha. A terra deveria ser deixada em repouso absoluto. Esta prática não apenas permitia a recuperação dos nutrientes do solo (uma sabedoria ecológica profunda), mas era um ato de adoração e submissão ao Criador.'
      },
      {
        verseRef: 'v. 5',
        title: 'A Proibição da Colheita Comercial',
        description: 'Deus proíbe a colheita do que nascesse espontaneamente (o que caísse da colheita anterior) e a vindima das uvas não podadas. Eles não poderiam armazenar ou vender esses produtos. O ano sabático quebrava o ciclo de acumulação de riqueza e o foco na produtividade contínua. Ele forçava a nação a parar de olhar para a terra como uma máquina de lucro e a reconhecer que Deus é o verdadeiro provedor.'
      },
      {
        verseRef: 'v. 6-7',
        title: 'A Provisão Igualitária para Todos',
        description: 'Embora a colheita comercial fosse proibida, o que a terra produzisse espontaneamente serviria de alimento para todos de forma igualitária. O proprietário da terra, o servo, a serva, o trabalhador diarista, o estrangeiro e até mesmo os animais domésticos e selvagens teriam o mesmo direito de comer diretamente do campo. O Ano Sabático nivelava as classes sociais; durante aquele ano, não havia donos de terra, apenas hóspedes na terra de Deus, dependendo da Sua graça.'
      }
    ],
    conclusion: 'O Ano Sabático é um teste profundo de fé. Deus prometeu (nos versículos seguintes) que enviaria uma bênção tão grande no sexto ano que a colheita sustentaria o povo por três anos. A falha de Israel em guardar os anos sabáticos foi uma das principais razões para o exílio babilônico (2 Crônicas 36:21). Para nós, o princípio do Ano Sabático nos ensina a não sermos escravos do trabalho e da acumulação. Ele nos desafia a confiar que Deus pode prover mais através da nossa obediência e descanso do que através do nosso esforço incessante e ansioso.'
  },
  {
    id: 'lev_25_8_17',
    bookId: 'LEV',
    chapter: 25,
    startVerse: 8,
    endVerse: 17,
    title: 'O Ano do Jubileu',
    theme: 'A Libertação, a Restauração das Heranças e a Redenção Econômica',
    introduction: 'Se o Ano Sabático era radical, o Ano do Jubileu (Yovel) era revolucionário. Celebrado a cada cinquenta anos (após sete ciclos de sete anos), o Jubileu era o grande ano da libertação e da restauração em Israel. Ele funcionava como um "botão de reinício" para a economia da nação, impedindo a criação de monopólios de terra e a escravidão perpétua. O Jubileu declarava que a liberdade e a dignidade humana são mais importantes que o lucro, e que a redenção de Deus se estende às estruturas sociais e econômicas do Seu povo.',
    points: [
      {
        verseRef: 'v. 8-10',
        title: 'A Trombeta da Liberdade no Dia da Expiação',
        description: 'A contagem para o Jubileu era de sete semanas de anos (49 anos). No décimo dia do sétimo mês do quinquagésimo ano, exatamente no Dia da Expiação (Yom Kippur), a trombeta (shofar) deveria soar por toda a terra. A libertação econômica (Jubileu) estava inseparavelmente ligada ao perdão dos pecados (Expiação). O versículo 10 é o lema do Jubileu: "Santificareis o ano quinquagésimo, e apregoareis liberdade na terra a todos os seus moradores... e cada um tornará à sua possessão, e cada um tornará à sua família".'
      },
      {
        verseRef: 'v. 11-13',
        title: 'O Descanso e a Devolução das Terras',
        description: 'O quinquagésimo ano seria um ano de descanso para a terra, assim como o ano sabático (não semear, não colher). Mas a característica principal do Jubileu era a devolução das propriedades. Se um israelita tivesse empobrecido e vendido sua terra ancestral, no Ano do Jubileu essa terra retornaria automaticamente para ele ou para sua família, sem custo. Isso garantia que nenhuma família ficasse permanentemente destituída de sua herança e meios de produção. A terra pertencia a Deus (v. 23), e os israelitas eram apenas arrendatários.'
      },
      {
        verseRef: 'v. 14-17',
        title: 'A Justiça nas Transações Comerciais',
        description: 'Por causa da lei do Jubileu, o valor da terra não era baseado na propriedade em si, mas no número de colheitas restantes até o próximo Jubileu. Se o Jubileu estivesse longe, o preço seria maior; se estivesse perto, o preço seria menor. Deus adverte estritamente: "Ninguém, pois, engane ao seu próximo; mas terás temor do teu Deus". A justiça econômica é uma expressão direta do temor a Deus. Explorar o irmão em uma transação comercial era uma ofensa direta ao Senhor que os libertou do Egito.'
      }
    ],
    conclusion: 'O Ano do Jubileu é a mais bela imagem da redenção social no Antigo Testamento. Ele aponta diretamente para o ministério de Jesus Cristo. Quando Jesus iniciou Seu ministério na sinagoga de Nazaré (Lucas 4:18-19), Ele leu Isaías 61 e declarou que veio para "apregoar o ano aceitável do Senhor" (o Jubileu espiritual). Em Cristo, a nossa dívida impagável do pecado foi cancelada, fomos libertos da escravidão de Satanás e a nossa herança eterna, que havíamos perdido na Queda, foi totalmente restaurada.'
  },
  {
    id: 'num_1_1_4',
    bookId: 'NUM',
    chapter: 1,
    startVerse: 1,
    endVerse: 4,
    title: 'O Recenseamento de Israel',
    theme: 'A Organização Militar, a Identidade e a Preparação para a Marcha',
    introduction: 'O livro de Números (no hebraico "Bamidbar", que significa "No Deserto") começa exatamente um mês após a construção do Tabernáculo. Israel está no deserto do Sinai, prestes a iniciar a marcha em direção à Terra Prometida. A primeira ordem de Deus a Moisés é realizar um censo. Este não é um mero exercício burocrático, mas uma convocação militar. Deus está transformando uma multidão desorganizada de ex-escravos em um exército estruturado, o "exército do Senhor", pronto para marchar, lutar e conquistar a herança prometida.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Ordem Divina e a Contagem Nominal',
        description: 'Deus fala a Moisés na Tenda da Congregação e ordena: "Tomai a soma de toda a congregação dos filhos de Israel". A contagem deve ser feita de forma meticulosa: segundo as suas famílias, segundo a casa de seus pais, contando os nomes, cabeça por cabeça. Deus não vê Israel apenas como uma massa anônima, mas como indivíduos com linhagem e identidade. Saber a qual tribo e família pertenciam era crucial para a organização do acampamento e para a distribuição futura da terra.'
      },
      {
        verseRef: 'v. 3',
        title: 'O Critério Militar: Prontos para a Guerra',
        description: 'O censo não incluía mulheres, crianças ou idosos. O critério era específico: "Da idade de vinte anos para cima, todos os que saem à guerra em Israel". O propósito do censo era formar um exército. A jornada pelo deserto e a conquista de Canaã exigiriam batalhas reais contra inimigos reais. Deus providenciaria a vitória, mas Israel precisava estar organizado e pronto para lutar. Moisés e Arão são encarregados de numerar o povo "segundo os seus exércitos".'
      },
      {
        verseRef: 'v. 4',
        title: 'A Liderança Delegada: Os Príncipes das Tribos',
        description: 'Para realizar essa tarefa monumental, Deus designa ajudantes: "Estará convosco de cada tribo um homem que seja cabeça da casa de seus pais". Moisés e Arão não fariam o trabalho sozinhos. Deus nomeia líderes específicos (cujos nomes são listados nos versículos seguintes) para auxiliar na contagem e na organização de suas respectivas tribos. A estrutura de liderança é essencial para manter a ordem em uma congregação de mais de dois milhões de pessoas.'
      }
    ],
    conclusion: 'O recenseamento em Números 1 nos ensina que Deus é um Deus de ordem, não de confusão. A transição de escravos no Egito para guerreiros no deserto exigiu disciplina, identidade e organização. Espiritualmente, a Igreja também é chamada a ser um exército organizado (Efésios 6). O fato de Deus mandar contar o povo "nome por nome" nos conforta com a certeza de que o Senhor conhece os Seus (2 Timóteo 2:19). Ele nos chama pelo nome, nos insere em uma família espiritual e nos convoca para a batalha espiritual, equipando-nos para a vitória.'
  },
  {
    id: 'num_6_1_8',
    bookId: 'NUM',
    chapter: 6,
    startVerse: 1,
    endVerse: 8,
    title: 'O Voto de Nazireu',
    theme: 'A Consagração Voluntária, a Separação Radical e a Dedicação a Deus',
    introduction: 'No Antigo Testamento, os sacerdotes e levitas nasciam em suas funções; eles não escolhiam o ministério. No entanto, Deus abriu um caminho para que qualquer israelita comum (homem ou mulher) pudesse se consagrar a Ele com um nível de dedicação semelhante ou até superior ao do Sumo Sacerdote. Este era o Voto de Nazireu (do hebraico "Nazir", que significa separado ou consagrado). Números 6 detalha as regras estritas deste voto voluntário, que envolvia renúncias visíveis e radicais para demonstrar uma devoção total e exclusiva ao Senhor.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Abstenção do Fruto da Videira',
        description: 'A primeira regra do nazireu é a abstinência total de vinho e bebida forte. Mas a restrição vai além do álcool: ele não pode consumir vinagre, suco de uva, uvas frescas, uvas passas, nem mesmo as sementes ou as cascas das uvas. A videira era o símbolo da alegria, da festa e da sociabilidade em Israel. O nazireu renuncia aos prazeres legítimos e à alegria natural da cultura para encontrar sua alegria e satisfação exclusivamente em Deus. É um jejum de prazeres terrenos por um propósito espiritual superior.'
      },
      {
        verseRef: 'v. 5',
        title: 'O Cabelo Não Cortado: O Sinal Visível da Consagração',
        description: 'A segunda regra é que a navalha não deve passar sobre a cabeça do nazireu durante todo o tempo do seu voto; ele deve deixar crescer as tranças do seu cabelo. O cabelo comprido (como no caso de Sansão) era o sinal público e visível de sua consagração. O nazireu não se importava com a moda ou com a opinião pública; ele carregava em seu próprio corpo o estigma da sua separação para Deus. O cabelo era a "coroa" do seu Deus sobre a sua cabeça.'
      },
      {
        verseRef: 'v. 6-8',
        title: 'A Pureza Absoluta diante da Morte',
        description: 'A terceira regra é a mais severa: o nazireu não pode se aproximar de nenhum cadáver. Ele não pode se contaminar nem mesmo pela morte de seu pai, mãe, irmão ou irmã. Esta era uma restrição que se aplicava apenas ao Sumo Sacerdote (os sacerdotes comuns podiam se contaminar por parentes próximos). O nazireu coloca sua lealdade a Deus acima dos laços familiares mais profundos e do luto natural. Ele deve permanecer imaculado, pois "todos os dias da sua separação, santo será ao Senhor".'
      }
    ],
    conclusion: 'O voto de nazireu nos ensina que a verdadeira consagração sempre envolve renúncia. Embora não sejamos chamados a fazer o voto literal de Números 6 hoje, o princípio permanece: Deus deseja crentes que estejam dispostos a se separar das influências entorpecentes do mundo (a videira), que não tenham vergonha de carregar a marca visível de Cristo em suas vidas (o cabelo), e que coloquem o Reino de Deus acima de qualquer lealdade terrena (a pureza diante da morte). A consagração voluntária e radical é o que produz poder espiritual, como visto nas vidas de nazireus notáveis como Samuel, Sansão e João Batista.'
  },
  {
    id: 'num_6_22_27',
    bookId: 'NUM',
    chapter: 6,
    startVerse: 22,
    endVerse: 27,
    title: 'A Bênção Sacerdotal (Aarônica)',
    theme: 'O Favor Divino, a Proteção, a Graça e a Paz',
    introduction: 'No final das instruções sobre pureza e consagração no acampamento, Deus entrega a Moisés uma das passagens mais belas e amadas de toda a Escritura: a Bênção Sacerdotal (ou Bênção Aarônica). Esta é a fórmula exata que Arão e seus filhos deveriam usar para abençoar os filhos de Israel. Composta por três linhas poéticas que crescem em intensidade, esta bênção revela o coração de Deus para o Seu povo. Não é um mero desejo de boa sorte, mas uma declaração de poder que invoca a proteção, a graça e a paz do próprio Yahweh sobre a nação.',
    points: [
      {
        verseRef: 'v. 22-24',
        title: 'A Proteção: O Senhor te Abençoe e te Guarde',
        description: 'A bênção começa com a fonte de todo o bem: "O Senhor (Yahweh)". A primeira linha foca na ação protetora de Deus: "O Senhor te abençoe e te guarde". A bênção aqui implica prosperidade, sucesso e o favor geral de Deus na vida diária. Mas a bênção sem proteção é vulnerável; portanto, o sacerdote invoca Deus como o "Guarda" de Israel (Salmo 121). No deserto perigoso e cheio de inimigos, a maior segurança de Israel não era o seu exército recém-formado, mas a guarda vigilante do Senhor.'
      },
      {
        verseRef: 'v. 25',
        title: 'A Graça: O Rosto Resplandecente do Senhor',
        description: 'A segunda linha aprofunda a intimidade: "O Senhor faça resplandecer o seu rosto sobre ti, e tenha misericórdia de ti". O "rosto resplandecente" é uma metáfora hebraica para o sorriso de Deus, Seu favor, aprovação e prazer. Quando o rosto de Deus brilha sobre alguém, as trevas se dissipam. O resultado desse rosto resplandecente é a misericórdia (graça). O povo não merecia o favor de Deus por causa de sua própria bondade, mas dependia inteiramente da graça imerecida que flui do sorriso divino.'
      },
      {
        verseRef: 'v. 26-27',
        title: 'A Paz: O Rosto Levantado e o Nome Invocado',
        description: 'A terceira linha é o clímax: "O Senhor sobre ti levante o seu rosto e te dê a paz". Levantar o rosto significa dar atenção total e pessoal. O resultado final da bênção de Deus é a "paz" (Shalom), que não é apenas a ausência de guerra, mas a plenitude, a integridade e o bem-estar total do corpo e da alma. O versículo 27 revela o propósito da bênção: "Assim porão o meu nome sobre os filhos de Israel, e eu os abençoarei". O sacerdote pronunciava as palavras, mas era Deus quem colocava a Sua marca de propriedade (Seu Nome) sobre o povo e garantia a bênção.'
      }
    ],
    conclusion: 'A Bênção Sacerdotal é a garantia de que Deus deseja o nosso bem absoluto. No Antigo Testamento, o povo precisava de um sacerdote humano para invocar essa bênção. No Novo Testamento, Jesus Cristo, nosso Sumo Sacerdote eterno, é a personificação desta bênção. N’Ele, fomos abençoados com todas as bênçãos espirituais (Efésios 1:3). Através de Cristo, o rosto de Deus resplandece sobre nós em graça, e Ele nos dá a Sua paz, uma paz que excede todo o entendimento (Filipenses 4:7). Carregar o Nome do Senhor é a nossa maior proteção e a nossa identidade mais profunda.'
  }
];

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

let replacedCount = 0;
for (const expanded of expandedPericopes) {
  const index = arr.findIndex(p => p.id === expanded.id);
  if (index !== -1) {
    arr[index] = expanded;
    replacedCount++;
  }
}

const newArrayContent = JSON.stringify(arr, null, 2);
const newContent = content.substring(0, startIndex) + newArrayContent + content.substring(endIndex + 1);
fs.writeFileSync('data/pericopes_temp.ts', newContent, 'utf8');
console.log(`Expanded ${replacedCount} pericopes (Batch 8.2).`);
