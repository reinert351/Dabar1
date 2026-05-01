const fs = require('fs');

const newPericopes = [
  {
    id: 'ecc_1_1_11',
    bookId: 'ECC',
    chapter: 1,
    startVerse: 1,
    endVerse: 11,
    title: 'A Vaidade da Vida Debaixo do Sol',
    theme: 'A Busca por Sentido, a Monotonia e a Finitude Humana',
    introduction: 'O livro de Eclesiastes começa com uma das declarações mais chocantes e filosóficas da Bíblia: "Vaidade de vaidades, tudo é vaidade". O autor, identificando-se como o "Pregador" (Salomão), faz uma análise brutalmente honesta da vida "debaixo do sol" — ou seja, a vida vivida apenas na perspectiva terrena, sem referência à eternidade. Ele observa os ciclos repetitivos da natureza e da história humana para concluir que, se a morte é o fim de tudo, então todo o trabalho e esforço humano são como "correr atrás do vento". É um texto que destrói as nossas ilusões seculares para nos preparar para a verdadeira esperança.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Veredito da Vaidade',
        description: 'A palavra "vaidade" (hebel) significa vapor, fumaça ou sopro. Refere-se a algo que é passageiro, enigmático e impossível de agarrar. O Pregador pergunta: "Que proveito tem o homem de todo o seu trabalho, que faz debaixo do sol?". Sem Deus, o sucesso material é apenas fumaça.'
      },
      {
        verseRef: 'v. 4-7',
        title: 'A Monotonia dos Ciclos Naturais',
        description: 'Ele observa a natureza: gerações vêm e vão, o sol nasce e se põe, o vento gira em círculos, os rios correm para o mar, mas o mar nunca se enche. A natureza está presa num ciclo interminável de repetição que não leva a lugar nenhum.'
      },
      {
        verseRef: 'v. 8-11',
        title: 'A Insatisfação e o Esquecimento',
        description: 'O olho não se farta de ver, nem o ouvido de ouvir. A alma humana é um abismo que as coisas deste mundo não podem preencher. Além disso, "não há lembrança das coisas que precederam". O maior medo do homem secular — ser esquecido — é uma realidade inevitável "debaixo do sol".'
      }
    ],
    conclusion: 'Eclesiastes 1 não é um texto para nos deprimir, mas para nos libertar da idolatria das coisas passageiras. Se tentarmos encontrar o sentido último da nossa vida na carreira, no dinheiro, no prazer ou no legado humano, acabaremos frustrados, tentando agarrar o vento. A vida "debaixo do sol" é um ciclo fechado e sem sentido. O propósito de Eclesiastes é nos levar ao desespero secular para que possamos levantar os olhos "acima do sol", onde encontramos o Criador que colocou a eternidade nos nossos corações.'
  },
  {
    id: 'ecc_4_9_12',
    bookId: 'ECC',
    chapter: 4,
    startVerse: 9,
    endVerse: 12,
    title: 'O Cordão de Três Dobras',
    theme: 'O Poder da Comunhão, a Força na Fraqueza e a Parceria',
    introduction: 'No meio das suas observações sobre a opressão, a inveja e a solidão do trabalho humano, o Pregador faz uma pausa em Eclesiastes 4 para celebrar uma das maiores dádivas de Deus: a comunhão. Ele contrasta a miséria do homem solitário (que trabalha sem fim e sem ter com quem partilhar) com a força e a alegria do companheirismo. Através de exemplos práticos do dia a dia, o texto prova que fomos criados para a interdependência. O famoso "cordão de três dobras" tornou-se um símbolo clássico não apenas do casamento, mas de qualquer relacionamento centrado em Deus.',
    points: [
      {
        verseRef: 'v. 9',
        title: 'A Recompensa da Parceria',
        description: '"Melhor é serem dois do que um, porque têm melhor paga do seu trabalho". A sinergia do trabalho em equipe produz resultados que o esforço isolado nunca alcançaria. A comunhão multiplica a nossa eficácia.'
      },
      {
        verseRef: 'v. 10-11',
        title: 'O Amparo na Queda e o Calor no Frio',
        description: 'O Pregador dá dois exemplos de sobrevivência: se um cair, o outro o levanta; se dois dormirem juntos, eles se aquecem. A vida cristã não é isenta de quedas ou de "invernos" emocionais. O perigo real é o "ai do que estiver só", pois não terá quem o ajude.'
      },
      {
        verseRef: 'v. 12',
        title: 'A Defesa e o Cordão de Três Dobras',
        description: 'Se alguém tentar dominar um, os dois poderão resistir. A união traz proteção contra os ataques do inimigo. O texto conclui com o provérbio: "E o cordão de três dobras não se quebra tão depressa". Quando Deus é a terceira dobra num relacionamento, a união torna-se inquebrável.'
      }
    ],
    conclusion: 'A cultura moderna glorifica a independência e o individualismo, mas a Bíblia afirma que o isolamento é perigoso. Fomos criados à imagem de um Deus Triúno, o que significa que fomos desenhados para o relacionamento. Precisamos de irmãos que nos levantem quando tropeçamos no pecado, que nos aqueçam quando a nossa fé esfria e que lutem ao nosso lado nas batalhas espirituais. Seja no casamento, na amizade ou na igreja local, a presença de Cristo como a "terceira dobra" é o que garante a resiliência e a vitória sobre as pressões da vida.'
  },
  {
    id: 'ecc_5_1_7',
    bookId: 'ECC',
    chapter: 5,
    startVerse: 1,
    endVerse: 7,
    title: 'A Reverência na Casa de Deus',
    theme: 'Temor, Silêncio, Votos e a Adoração Verdadeira',
    introduction: 'Como devemos nos aproximar de Deus? Em Eclesiastes 5, o Pregador muda o foco da vida secular para a vida religiosa. Ele observa que muitas pessoas vão à Casa de Deus de forma leviana, oferecendo sacrifícios vazios, falando demais e fazendo promessas que não pretendem cumprir. O texto é uma repreensão severa à religiosidade superficial e um chamado ao temor do Senhor. A verdadeira adoração não se mede pela quantidade das nossas palavras, mas pela reverência do nosso coração e pela obediência da nossa vida.',
    points: [
      {
        verseRef: 'v. 1',
        title: 'A Postura de Escuta',
        description: '"Guarda o teu pé, quando entrares na casa de Deus; porque chegar-se para ouvir é melhor do que oferecer sacrifícios de tolos". A adoração começa com a prontidão para ouvir a Palavra de Deus, não com a pressa de falar ou de realizar rituais mecânicos.'
      },
      {
        verseRef: 'v. 2-3',
        title: 'A Economia das Palavras',
        description: '"Não te precipites com a tua boca... porque Deus está nos céus, e tu estás sobre a terra; assim sejam poucas as tuas palavras". O falatório excessivo na oração muitas vezes revela arrogância e falta de compreensão da majestade divina.'
      },
      {
        verseRef: 'v. 4-7',
        title: 'A Seriedade dos Votos',
        description: 'Se fizeres um voto a Deus, não demores em cumpri-lo. É melhor não votar do que votar e não cumprir. O texto adverte contra dar desculpas ao sacerdote ("foi um erro"). O resumo de toda a adoração está no versículo 7: "Tu, porém, teme a Deus".'
      }
    ],
    conclusion: 'Eclesiastes 5 é um antídoto contra a banalização do culto. Muitas vezes, entramos na presença de Deus cheios de nós mesmos, ditando a Deus o que Ele deve fazer e fazendo promessas emocionais que esquecemos no dia seguinte. O Pregador nos lembra que a distância entre o Criador e a criatura é infinita ("Ele está nos céus, tu na terra"). A nossa postura na adoração deve ser de reverência, silêncio atento e obediência prática. Deus não se impressiona com a nossa eloquência ou com os nossos rituais, mas com um coração que O teme e ouve a Sua voz.'
  },
  {
    id: 'ecc_7_1_4',
    bookId: 'ECC',
    chapter: 7,
    startVerse: 1,
    endVerse: 4,
    title: 'A Sabedoria do Luto',
    theme: 'A Brevidade da Vida, a Reflexão e o Bom Nome',
    introduction: 'Eclesiastes 7 apresenta uma série de provérbios que parecem paradoxais e contrários ao senso comum. O Pregador afirma que o dia da morte é melhor que o do nascimento, e que é melhor ir a um funeral do que a uma festa. Por que ele diria algo tão sombrio? Porque a cultura do entretenimento e das festas constantes nos anestesia para as realidades mais importantes da vida. O luto e o confronto com a mortalidade têm o poder de nos despertar, forçando-nos a avaliar como estamos vivendo e o legado que estamos construindo.',
    points: [
      {
        verseRef: 'v. 1',
        title: 'O Valor do Bom Nome',
        description: '"Melhor é a boa fama do que o melhor unguento, e o dia da morte do que o dia do nascimento". O perfume caro (unguento) mascara o odor temporariamente, mas o caráter (boa fama) dura para sempre. O dia da morte sela o nosso legado, enquanto o nascimento é apenas o início incerto.'
      },
      {
        verseRef: 'v. 2',
        title: 'A Sala de Luto vs. A Sala de Festas',
        description: '"Melhor é ir à casa onde há luto do que ir à casa onde há banquete". O motivo é profundo: "porque ali se vê o fim de todos os homens; e os vivos o aplicam ao seu coração". O funeral é um espelho do nosso próprio destino.'
      },
      {
        verseRef: 'v. 3-4',
        title: 'A Tristeza que Melhora o Coração',
        description: '"A tristeza é melhor do que o riso, porque com a tristeza do rosto se faz melhor o coração". O riso superficial distrai, mas a tristeza reflexiva amadurece. O coração dos sábios está na casa do luto, mas o dos tolos na casa da alegria.'
      }
    ],
    conclusion: 'Vivemos numa sociedade obcecada por evitar a dor, o envelhecimento e a morte. Enchemos as nossas vidas de ruído e entretenimento para não termos que pensar no nosso fim. O Pregador nos convida a abraçar a "sabedoria do luto". Quando participamos de um funeral, somos lembrados de que o nosso tempo é curto. Essa consciência não deve nos paralisar, mas nos motivar a viver com propósito, a investir no nosso caráter ("boa fama") e a focar nas coisas eternas. A tristeza reflexiva é frequentemente a ferramenta que Deus usa para curar a superficialidade do nosso coração.'
  },
  {
    id: 'ecc_9_7_10',
    bookId: 'ECC',
    chapter: 9,
    startVerse: 7,
    endVerse: 10,
    title: 'A Alegria e a Diligência na Vida Breve',
    theme: 'O Desfrute do Presente, o Trabalho e a Dádiva de Deus',
    introduction: 'Depois de refletir sobre a inevitabilidade da morte e a injustiça do mundo, o Pregador não conclui com desespero, mas com um convite surpreendente à alegria. Em Eclesiastes 9, ele nos instrui a aproveitar as dádivas simples da vida — a comida, o casamento, o trabalho — não como distrações, mas como presentes da graça de Deus. Como a vida é breve e o túmulo nos espera, não devemos desperdiçar o nosso tempo com ansiedade, mas viver cada dia com paixão, pureza e diligência.',
    points: [
      {
        verseRef: 'v. 7-8',
        title: 'A Celebração das Coisas Simples',
        description: '"Vai, pois, come com alegria o teu pão e bebe com coração contente o teu vinho, pois já Deus se agrada das tuas obras". O Pregador aconselha a manter as vestes brancas (pureza e alegria) e o óleo sobre a cabeça (festa). A alegria nas coisas simples é um sinal de aprovação divina.'
      },
      {
        verseRef: 'v. 9',
        title: 'O Desfrute do Casamento',
        description: '"Goza a vida com a mulher que amas, todos os dias da tua vida vã... porque esta é a tua porção nesta vida". O casamento e a família não são o sentido último da vida, mas são a "porção" (recompensa) que Deus nos dá para aliviar o peso do trabalho debaixo do sol.'
      },
      {
        verseRef: 'v. 10',
        title: 'A Diligência no Trabalho',
        description: '"Tudo quanto te vier à mão para fazer, faze-o conforme as tuas forças". A motivação para a excelência é a nossa mortalidade: "porque na sepultura, para onde tu vais, não há obra nem projeto, nem conhecimento, nem sabedoria". O tempo de agir é agora.'
      }
    ],
    conclusion: 'A teologia de Eclesiastes é profundamente equilibrada. Ela não nos permite idolatrar o mundo (pois tudo é vaidade), mas também não nos permite desprezar o mundo (pois é criação de Deus). A resposta cristã à brevidade da vida não é o desespero nem o hedonismo irresponsável, mas a gratidão. Devemos comer, amar as nossas famílias e trabalhar com todas as nossas forças, reconhecendo que cada dia é um presente de Deus. A consciência da morte não deve roubar a nossa alegria, mas dar urgência e intensidade à forma como vivemos o hoje para a glória de Deus.'
  },
  {
    id: 'ecc_11_1_6',
    bookId: 'ECC',
    chapter: 11,
    startVerse: 1,
    endVerse: 6,
    title: 'Lança o Teu Pão Sobre as Águas',
    theme: 'Generosidade, Risco, Fé e a Soberania de Deus',
    introduction: 'Como devemos viver num mundo imprevisível? Em Eclesiastes 11, o Pregador usa metáforas do comércio marítimo e da agricultura para nos ensinar sobre a fé, o risco e a generosidade. A nossa tendência natural diante da incerteza econômica ou do futuro desconhecido é a avareza e a paralisia. No entanto, a sabedoria bíblica nos chama a fazer exatamente o oposto: investir generosamente, diversificar as nossas boas obras e semear incansavelmente, confiando que o Deus que controla os ventos e o crescimento das sementes trará a colheita no Seu tempo.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'O Risco da Generosidade',
        description: '"Lança o teu pão sobre as águas, porque depois de muitos dias o acharás". Esta é uma imagem de comércio marítimo ou de semeadura. O conselho é diversificar: "Reparte com sete, e ainda até com oito, porque não sabes que mal haverá sobre a terra". A incerteza é o motivo para ser generoso, não para reter.'
      },
      {
        verseRef: 'v. 3-4',
        title: 'O Perigo da Paralisia',
        description: '"Quem observa o vento, nunca semeará, e o que olha para as nuvens nunca segará". Se esperarmos pelas condições perfeitas para servir a Deus, ofertar ou iniciar um projeto, nunca faremos nada. A fé exige ação no meio da imperfeição.'
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Soberania de Deus e a Semeadura Contínua',
        description: 'Assim como não entendemos o caminho do vento ou a formação do bebê no ventre, não conhecemos as obras de Deus. Portanto, "Pela manhã semeia a tua semente, e à tarde não retires a tua mão". Devemos trabalhar diligentemente, pois não sabemos qual semente Deus fará prosperar.'
      }
    ],
    conclusion: 'A vida é cheia de riscos e incertezas. Não sabemos se a economia vai quebrar, se a saúde vai falhar ou qual será o resultado dos nossos esforços. Mas Eclesiastes 11 nos liberta da paralisia da análise. Não fomos chamados para controlar o vento ou entender todos os mistérios da providência de Deus; fomos chamados para semear. Lançar o pão sobre as águas é um ato de fé radical. Quando somos generosos e diligentes, mesmo quando as condições não são ideais, estamos confiando que o Senhor da colheita honrará o nosso trabalho no tempo certo.'
  },
  {
    id: 'ecc_11_7_10',
    bookId: 'ECC',
    chapter: 11,
    startVerse: 7,
    endVerse: 10,
    title: 'A Alegria da Juventude e a Responsabilidade',
    theme: 'O Desfrute da Vida, o Juízo Futuro e a Pureza',
    introduction: 'Na transição para a conclusão do livro, o Pregador dirige-se especificamente aos jovens. A juventude é uma fase de energia, sonhos e paixões, mas também de grandes tentações e ilusões de imortalidade. Em Eclesiastes 11:7-10, ele oferece um conselho que parece contraditório: "Alegra-te na tua mocidade e segue os desejos do teu coração, mas lembra-te que Deus te trará a juízo". Ele não está promovendo o pecado, mas ensinando o equilíbrio perfeito entre desfrutar os presentes da juventude e viver com a consciência da prestação de contas eterna.',
    points: [
      {
        verseRef: 'v. 7-8',
        title: 'A Luz da Vida e a Realidade das Trevas',
        description: '"Doce é a luz, e agradável aos olhos ver o sol". O autor encoraja o homem a alegrar-se em todos os seus anos de vida. No entanto, ele insere uma dose de realismo: "lembre-se dos dias das trevas, porque hão de ser muitos". A alegria presente não deve nos cegar para a realidade do envelhecimento e da morte.'
      },
      {
        verseRef: 'v. 9',
        title: 'A Liberdade e o Tribunal de Deus',
        description: '"Alegra-te, jovem... e anda pelos caminhos do teu coração, e pela vista dos teus olhos". Deus não é contra a alegria ou os desejos legítimos. Mas há um limite moral: "Sabe, porém, que por todas estas coisas te trará Deus a juízo". A liberdade cristã é sempre exercida sob o olhar do Juiz.'
      },
      {
        verseRef: 'v. 10',
        title: 'A Rejeição da Ira e do Mal',
        description: '"Afasta, pois, a ira do teu coração, e remove da tua carne o mal, porque a adolescência e a juventude são vaidade (passageiras)". O jovem é exortado a proteger as suas emoções (ira/ansiedade) e o seu corpo (o mal/imoralidade), sabendo que essa fase da vida passa rapidamente.'
      }
    ],
    conclusion: 'O conselho bíblico para a juventude não é uma lista opressiva de proibições, mas um convite à alegria responsável. Deus nos deu a juventude para ser vivida com intensidade e paixão. No entanto, a maior tragédia é desperdiçar esses anos de energia com pecados que trarão arrependimento e juízo no futuro. O segredo para uma juventude bem-sucedida é viver cada dia com alegria, mas com os olhos fixos no tribunal de Cristo. Quando sabemos que prestaremos contas, escolhemos afastar o mal da nossa carne e viver de forma que honre o Criador.'
  },
  {
    id: 'sng_2_1_7',
    bookId: 'SNG',
    chapter: 2,
    startVerse: 1,
    endVerse: 7,
    title: 'A Rosa de Sarom e o Despertar do Amor',
    theme: 'A Beleza do Amor, a Proteção e o Tempo Certo',
    introduction: 'O Cântico dos Cânticos é um poema lírico que celebra a beleza, a pureza e a paixão do amor conjugal, servindo também como uma alegoria do amor de Cristo pela Sua Igreja. Em Cânticos 2, a noiva (a sulamita) e o noivo (Salomão) trocam declarações de admiração. A noiva expressa a sua humildade, enquanto o noivo a exalta acima de todas as outras. O texto culmina com um dos refrões mais importantes do livro: um apelo para não despertar o amor antes do tempo. É uma celebração do romance, mas com limites de sabedoria e pureza.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Rosa e o Lírio entre os Espinhos',
        description: 'A noiva diz com humildade: "Eu sou a rosa de Sarom, o lírio dos vales" (flores comuns do campo). O noivo responde exaltando o seu valor e exclusividade: "Qual o lírio entre os espinhos, tal é meu amor entre as filhas". Para ele, ela é incomparável no meio do mundo.'
      },
      {
        verseRef: 'v. 3-6',
        title: 'O Refúgio e a Sala do Banquete',
        description: 'A noiva compara o noivo a uma macieira entre as árvores do bosque; ela encontra descanso na sua sombra e doçura no seu fruto. Ele a leva à "sala do banquete", e o estandarte (a bandeira) sobre ela é o amor. Ela sente-se segura, sustentada e abraçada por ele.'
      },
      {
        verseRef: 'v. 7',
        title: 'O Juramento sobre o Despertar do Amor',
        description: 'A noiva faz um juramento solene às filhas de Jerusalém: "Que não acordeis nem desperteis o meu amor, até que queira". O amor romântico e sexual é poderoso e belo, mas deve ser protegido e reservado para o tempo certo (o casamento).'
      }
    ],
    conclusion: 'Cântico dos Cânticos nos lembra que Deus é o autor do romance e da intimidade conjugal. O amor verdadeiro não apenas deseja o outro, mas o protege e o exalta (como o lírio entre os espinhos). No entanto, a advertência do versículo 7 é crucial para a nossa geração: o amor não deve ser forçado, apressado ou despertado fora do contexto da aliança matrimonial. Quando a intimidade é vivida no tempo de Deus e sob o "estandarte do amor" protetor, ela torna-se uma sala de banquete de alegria e uma bela imagem do amor de Cristo pela Sua Igreja.'
  },
  {
    id: 'sng_2_10_15',
    bookId: 'SNG',
    chapter: 2,
    startVerse: 10,
    endVerse: 15,
    title: 'O Chamado do Amado e as Raposinhas',
    theme: 'A Primavera do Amor, o Convite à Intimidade e a Proteção do Relacionamento',
    introduction: 'A linguagem de Cântico dos Cânticos é rica em imagens da natureza. Em Cânticos 2:10-15, o inverno passou e a primavera chegou, simbolizando um novo tempo de alegria e florescimento no relacionamento. O amado convida a sua noiva para sair do seu esconderijo e desfrutar da beleza da vida juntos. No entanto, no meio deste cenário idílico, surge um alerta poético e prático: o pedido para caçar as "raposinhas". Este texto nos ensina sobre a beleza da intimidade, mas também sobre a necessidade de vigilância contra as pequenas coisas que podem destruir o amor.',
    points: [
      {
        verseRef: 'v. 10-13',
        title: 'O Fim do Inverno e o Chamado à Primavera',
        description: 'O amado diz: "Levanta-te, meu amor, formosa minha, e vem". Ele descreve que o inverno (tempo de frieza, isolamento ou dificuldade) passou, a chuva cessou, as flores aparecem e o tempo de cantar chegou. É um convite para renovar a alegria e a intimidade do relacionamento.'
      },
      {
        verseRef: 'v. 14',
        title: 'O Desejo de Intimidade e Comunicação',
        description: 'Ele a chama de "pomba minha, que andas pelas fendas das penhas". Ele pede para ver o seu rosto e ouvir a sua voz, "porque a tua voz é doce, e o teu rosto formoso". O amor verdadeiro anseia por comunicação profunda e vulnerabilidade, tirando o outro do esconderijo.'
      },
      {
        verseRef: 'v. 15',
        title: 'A Ameaça das Raposinhas',
        description: 'O alerta crucial: "Apanhai-nos as raposas, as raposinhas, que fazem mal às vinhas, porque as nossas vinhas estão em flor". As vinhas em flor são frágeis. Não são os grandes ursos que destroem a vinha, mas as pequenas raposas que roem as raízes.'
      }
    ],
    conclusion: 'Este texto é uma das maiores lições sobre a manutenção dos relacionamentos (seja no casamento ou na nossa comunhão com Deus). O convite de Cristo para nós é sempre um convite para a "primavera", para sairmos das nossas cavernas de medo e desfrutarmos da Sua presença. No entanto, devemos estar vigilantes contra as "raposinhas". Num casamento, as raposinhas não são necessariamente o adultério ou o abandono, mas as pequenas mentiras, o orgulho, a falta de perdão, as palavras ásperas e a negligência diária. Para que o amor floresça e dê frutos, precisamos caçar e eliminar essas pequenas ameaças antes que elas destruam a vinha.'
  },
  {
    id: 'sng_8_6_7',
    bookId: 'SNG',
    chapter: 8,
    startVerse: 6,
    endVerse: 7,
    title: 'O Amor Forte como a Morte',
    theme: 'A Força, a Exclusividade e o Valor Inestimável do Amor',
    introduction: 'O Cântico dos Cânticos atinge o seu clímax teológico e poético no capítulo 8. A noiva faz a sua declaração final sobre a natureza do amor verdadeiro. Ela não descreve o amor como um sentimento passageiro ou uma emoção frágil, mas como uma força cósmica, implacável e inextinguível. O amor é comparado à morte na sua força, e ao fogo do próprio Deus na sua intensidade. Esta passagem é a definição definitiva do amor de aliança — o amor que deve existir no casamento e, em última instância, o amor que Cristo demonstrou por nós na cruz.',
    points: [
      {
        verseRef: 'v. 6a',
        title: 'O Selo de Exclusividade',
        description: '"Põe-me como selo sobre o teu coração, como selo sobre o teu braço". O selo representa propriedade, autenticidade e segurança. A noiva pede posse total: o coração (as emoções e a vontade) e o braço (a força e as ações) do seu amado devem pertencer exclusivamente a ela.'
      },
      {
        verseRef: 'v. 6b',
        title: 'A Força Implacável do Amor',
        description: '"Porque o amor é forte como a morte, e duro como a sepultura o ciúme; as suas brasas são brasas de fogo, com veementes labaredas". A morte não poupa ninguém; assim é a força do amor verdadeiro. O "ciúme" aqui não é a inveja doentia, mas o zelo ardente e exclusivo de quem protege o que lhe pertence.'
      },
      {
        verseRef: 'v. 7',
        title: 'O Valor Inestimável e Inextinguível',
        description: '"As muitas águas não podem apagar este amor, nem os rios afogá-lo". Nenhuma adversidade, crise ou tempo pode destruir o amor de aliança. Além disso, o amor não pode ser comprado: "Ainda que alguém desse todos os bens de sua casa pelo amor, certamente o desprezariam".'
      }
    ],
    conclusion: 'A visão bíblica do amor é infinitamente superior à visão de Hollywood. O amor verdadeiro não é uma paixão que se apaga com a primeira chuva de dificuldades; é uma chama inextinguível que sobrevive às "muitas águas" da aflição. É um compromisso exclusivo (um selo) que não tem preço. Acima de tudo, este texto é a descrição perfeita do amor de Jesus Cristo. O Seu amor por nós foi literalmente "forte como a morte", levando-O à cruz. As águas da ira de Deus e do sofrimento não puderam apagar o Seu amor por nós. Quando compreendemos esse amor divino, somos capacitados a amar os nossos cônjuges e o nosso próximo com a mesma chama inextinguível.'
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
console.log(`Added ${addedCount} new pericopes (Batch 25 - Ecclesiastes/Song of Solomon).`);
