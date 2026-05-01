
export interface MeasureCategoryData {
  id: string;
  title: string;
  description: string[];
}

export const MEASURES_CATEGORIES: MeasureCategoryData[] = [
  {
    id: 'comprimento',
    title: '📏 Medidas de Comprimento — Sistema Antropométrico',
    description: [
      "O sistema de medidas de comprimento no antigo Israel era fundamentalmente antropométrico, ou seja, baseado nas proporções do corpo humano. Essa prática era comum a todas as civilizações do Antigo Oriente Próximo — egípcios, babilônios, assírios e persas utilizavam sistemas semelhantes, embora com variações regionais. A unidade básica era o côvado (em hebraico 'ammah'), que correspondia à distância entre o cotovelo e a ponta do dedo médio. Existiam dois padrões de côvado: o côvado comum (cerca de 44,5 cm) e o côvado real ou longo (cerca de 52,5 cm), mencionado em Ezequiel 40:5 como 'um côvado e um palmo'. O côvado real era usado em construções oficiais, incluindo o Templo de Salomão. A Arca de Noé, por exemplo, media 300 côvados de comprimento (Gn 6:15), o que equivale a aproximadamente 133 metros — dimensões que a tornam comparável a navios modernos de grande porte.",
      "As subdivisões do côvado seguiam uma lógica rigorosa: um côvado continha 2 palmos maiores (zereth), 6 palmos menores (tophach) ou 24 dedos (etsba). O dedo era a menor unidade linear e correspondia à largura do dedo indicador. Escavações arqueológicas em Gezer, Megido e Laquis encontraram réguas e marcações em pedra que confirmam essas proporções com notável precisão. A 'cana de medir' (qaneh), mencionada extensivamente em Ezequiel 40-42 na visão do templo futuro, media 6 côvados reais (cerca de 3,15 m) e era o instrumento padrão dos agrimensores e construtores do templo.",
      "Para distâncias maiores, os hebreus utilizavam medidas como a braça (cerca de 1,8 m, usada em Atos 27:28 para medir a profundidade do mar), o estádio grego (stadion, cerca de 185 m, mencionado em Lucas 24:13 — Emaús ficava a 60 estádios de Jerusalém), a milha romana (mille passuum, 1.480 m, referida em Mateus 5:41), e a 'jornada de um dia' (cerca de 30-35 km para caravanas, mas apenas 15-20 km em terreno montanhoso). A 'jornada de um sábado' (Atos 1:12) era limitada a 2.000 côvados (cerca de 888 m), conforme interpretação rabínica de Êxodo 16:29 e Números 35:5, representando a distância máxima que um judeu devoto podia percorrer no dia de descanso."
    ]
  },
  {
    id: 'pesos',
    title: '⚖️ Medidas de Peso — O Padrão do Santuário',
    description: [
      "No mundo antigo, antes da invenção das moedas cunhadas (que só surgiram no século VII a.C. na Lídia), o comércio era realizado através da pesagem de metais preciosos, principalmente prata e ouro. O sistema de pesos de Israel era baseado no padrão babilônico, mas com adaptações locais. A unidade fundamental era o siclo (em hebraico 'sheqel', que literalmente significa 'peso'). O siclo comum pesava cerca de 11,4 gramas. No entanto, a Bíblia frequentemente menciona o 'siclo do santuário' (Ex 30:13), que era um padrão oficial mantido no Tabernáculo e mais tarde no Templo para garantir a justiça nas transações e nas ofertas, pesando cerca de 20 gerás.",
      "As subdivisões do siclo incluíam a beca (metade de um siclo, cerca de 5,7 g), que era o imposto per capita exigido de cada israelita para a manutenção do santuário (Ex 38:26), e o gerá (um vigésimo de siclo, cerca de 0,57 g), a menor unidade de peso mencionada na Bíblia. Arqueólogos encontraram centenas de pesos de pedra em Israel, muitos deles com inscrições em hebraico antigo indicando seu valor (como 'pim', que era cerca de dois terços de um siclo, mencionado em 1 Samuel 13:21 como o preço cobrado pelos filisteus para afiar ferramentas).",
      "Para grandes quantidades, utilizava-se a mina (maneh), que equivalia a 50 siclos (cerca de 570 g), e o talento (kikar, que significa 'círculo' ou 'disco'), a maior unidade de peso. Um talento equivalia a 3.000 siclos ou 60 minas, pesando aproximadamente 34,2 kg. Quando a Bíblia diz que a coroa do rei de Rabá pesava um talento de ouro (2 Sm 12:30), isso indica um peso esmagador de mais de 34 quilos, provavelmente sustentada por uma estrutura ou usada apenas brevemente. O talento também é a base da famosa parábola de Jesus (Mt 25), ilustrando uma quantia astronômica de valor confiada aos servos."
    ]
  },
  {
    id: 'liquidos',
    title: '🏺 Medidas de Capacidade (Líquidos) — Azeite, Vinho e Água',
    description: [
      "A economia de Israel era profundamente agrária, e a medição precisa de líquidos como azeite de oliva, vinho e água era vital para o comércio, a sobrevivência e o culto. O sistema de medidas de capacidade líquida era paralelo ao sistema de medidas secas, mas utilizava terminologia diferente em alguns níveis. A unidade padrão para líquidos era o bato (bath), que equivalia a cerca de 22 litros. O bato era exatamente igual em volume ao efa (a unidade padrão para secos), conforme estabelecido em Ezequiel 45:11, demonstrando uma tentativa de padronização divina para evitar a fraude no comércio.",
      "A maior medida líquida era o coro (kor), que equivalia a 10 batos (cerca de 220 litros). O rei Salomão, por exemplo, pagava a Hirão, rei de Tiro, 20.000 coros de azeite batido anualmente em troca de madeira de cedro (1 Rs 5:11), uma quantidade colossal que demonstra a riqueza do reino unido. Para medidas menores, utilizava-se o him (hin), que era um sexto de um bato (cerca de 3,6 litros). O him é frequentemente mencionado nas instruções para os sacrifícios, determinando a quantidade exata de vinho ou azeite que deveria acompanhar as ofertas (Ex 29:40).",
      "A menor unidade líquida era o logue (log), que equivalia a um décimo segundo de um him (cerca de 0,3 litros ou 300 ml). O logue é mencionado especificamente no ritual de purificação do leproso (Lv 14:10), onde o sacerdote usava um logue de azeite para ungir a pessoa curada. Arqueólogos descobriram inúmeros jarros e ânforas em Israel com marcas de capacidade, confirmando que essas medidas eram padronizadas e amplamente utilizadas no cotidiano e no culto."
    ]
  },
  {
    id: 'secos',
    title: '🌾 Medidas de Capacidade (Secos) — Grãos, Farinha e Frutos',
    description: [
      "Para medir cereais, farinha e outros produtos secos, Israel utilizava um sistema específico. A unidade central era o efa (ephah), que correspondia a cerca de 22 litros ou 15 a 20 quilos de grãos, dependendo da densidade. O efa era a medida padrão para o comércio de cereais e para as ofertas de manjares no Templo. A Bíblia frequentemente adverte contra o uso de 'efas falsos' (Amós 8:5, Mq 6:10), condenando a prática de comerciantes desonestos que diminuíam o tamanho do recipiente para enganar os compradores, uma abominação ao Senhor.",
      "A maior medida para secos era o ômer ou coro (homer/kor), que equivalia a 10 efas (cerca de 220 litros). O termo 'homer' originalmente significava 'carga de um jumento', indicando a quantidade máxima que um animal de carga podia transportar. Uma medida intermediária era o letec (lethech), mencionado apenas em Oseias 3:2, que equivalia a meio ômer (5 efas ou 110 litros). Para medidas menores, usava-se a seá (seah), que era um terço de um efa (cerca de 7,3 litros). Quando Abraão pediu a Sara para preparar pão para os três visitantes celestiais, ele pediu 'três medidas (seás) de flor de farinha' (Gn 18:6), o que equivale a um efa inteiro, uma quantidade enorme que demonstra sua extrema hospitalidade.",
      "A menor medida seca comum era o gômer (omer), que não deve ser confundido com o ômer (homer). O gômer equivalia a um décimo de um efa (cerca de 2,2 litros). Esta foi a medida exata de maná que Deus determinou que cada israelita colhesse diariamente no deserto (Ex 16:16). O gômer representava a provisão diária suficiente de Deus: quem colhia muito não tinha sobra, e quem colhia pouco não tinha falta. Outra medida pequena era o cabo (kab), que equivalia a um sexto de uma seá (cerca de 1,2 litros), mencionado em 2 Reis 6:25 durante o terrível cerco de Samaria, onde um quarto de cabo de esterco de pomba era vendido por um preço exorbitante."
    ]
  },
  {
    id: 'moedas',
    title: '🪙 Moedas e Dinheiro — A Economia da Redenção',
    description: [
      "Durante a maior parte do Antigo Testamento, não existiam moedas cunhadas. O comércio era feito pesando metais preciosos (ouro, prata, bronze). A palavra hebraica para prata, 'kesef', tornou-se sinônimo de dinheiro. A primeira moeda cunhada mencionada na Bíblia é o dárico persa (Ed 2:69), introduzido pelo rei Dario I no final do século VI a.C. No Novo Testamento, a economia da Judeia era complexa, circulando moedas romanas (para impostos), gregas (para comércio geral) e judaicas (para o Templo, que não permitia imagens de imperadores).",
      "O sistema romano era baseado no denário (denarius), uma moeda de prata que correspondia ao salário de um dia de um trabalhador braçal (Mt 20:2). Suas subdivisões incluíam o asse (assarion), que valia 1/16 de um denário (o preço de dois pardais, Mt 10:29), o quadrante (kodrantes), que valia 1/64 de um denário, e o lépton (a 'viúva pobre' de Mc 12:42 deu dois léptons, que juntos faziam um quadrante). O lépton era a menor moeda de cobre em circulação, demonstrando que a oferta da viúva era financeiramente insignificante, mas espiritualmente imensurável.",
      "O sistema grego, também em uso, baseava-se na dracma de prata, que tinha valor quase equivalente ao denário romano. O didracma (duas dracmas) era o valor exato do imposto anual do Templo exigido de cada judeu adulto (Mt 17:24). O estáter ou tetradracma (quatro dracmas) foi a moeda encontrada por Pedro na boca do peixe, suficiente para pagar o imposto dele e de Jesus. Para grandes somas, usava-se a mina (100 dracmas) e o talento (6.000 denários ou dracmas). Um talento representava o salário de 20 anos de um trabalhador, tornando a dívida de 10.000 talentos em Mateus 18:24 uma quantia impagável (equivalente a bilhões de dólares hoje), ilustrando a magnitude do perdão divino."
    ]
  },
  {
    id: 'area',
    title: '📐 Medidas de Área — A Terra da Promessa',
    description: [
      "A medição de terras no antigo Israel não era feita com a precisão geométrica moderna, mas baseava-se na capacidade de trabalho agrícola. A unidade fundamental de área era a 'semeadura' ou 'jeira' (em hebraico 'tsemed', que literalmente significa 'parelha' ou 'jugo'). Uma jeira representava a quantidade de terra que uma parelha de bois conseguia arar em um único dia. Esta medida prática conectava diretamente o tamanho da propriedade ao esforço humano e animal necessário para cultivá-la.",
      "Em 1 Samuel 14:14, o texto descreve que Jônatas e seu escudeiro abateram cerca de vinte filisteus 'numa área de cerca de meia jeira de terra', dando uma ideia vívida do espaço confinado do combate. Em Isaías 5:10, o profeta pronuncia um julgamento sobre os latifundiários gananciosos, dizendo que 'dez jeiras de vinha não darão mais do que um bato' (cerca de 22 litros de vinho), indicando uma colheita desastrosamente pobre como castigo divino.",
      "Outro método de medir área era pela quantidade de semente necessária para semeá-la. Em Levítico 27:16, o valor de um campo dedicado ao Senhor era calculado 'segundo a sua semeadura: um ômer de semente de cevada será avaliado em cinquenta siclos de prata'. Este sistema pragmático reflete uma sociedade onde a terra não era vista apenas como espaço físico, mas como um dom de Deus destinado a produzir sustento. A divisão da Terra Prometida por Josué utilizou cordas de medir (Sl 16:6), estabelecendo fronteiras que deveriam ser respeitadas como herança inalienável (Pv 22:28)."
    ]
  },
  {
    id: 'tempo',
    title: '⏳ Medidas de Tempo — A Cronologia da Providência',
    description: [
      "A percepção hebraica do tempo diferia radicalmente da visão moderna. O dia não começava à meia-noite, mas ao pôr do sol, seguindo o padrão da criação: 'Houve tarde e manhã, o primeiro dia' (Gn 1:5). O dia natural (período de luz) era dividido de forma flexível em manhã, meio-dia e tarde. No Novo Testamento, sob influência romana e grega, o dia passou a ser dividido em 12 horas de luz (Jo 11:9), começando ao nascer do sol (cerca das 6h da manhã). Assim, a 'terceira hora' era 9h, a 'sexta hora' (quando Jesus foi crucificado) era meio-dia, e a 'nona hora' (quando Ele morreu) era 15h.",
      "A noite era dividida em 'vigílias' para fins de guarda militar e pastoral. No Antigo Testamento, havia três vigílias noturnas: a primeira (do pôr do sol às 22h), a vigília da meia-noite (22h às 2h, Jz 7:19) e a vigília da manhã (2h ao nascer do sol, Ex 14:24). No Novo Testamento, o sistema romano de quatro vigílias foi adotado: tarde (18h-21h), meia-noite (21h-0h), cantar do galo (0h-3h) e manhã (3h-6h), conforme listado por Jesus em Marcos 13:35.",
      "A semana era estruturada em torno do Shabat (sábado), o único dia que tinha um nome específico; os demais eram numerados (primeiro dia, segundo dia, etc.). O ano hebraico era lunissolar, baseado em 12 meses lunares (cerca de 354 dias). Para manter o alinhamento com as estações agrícolas (vitais para as festas bíblicas), um 13º mês (Adar Sheni) era intercalado periodicamente. O conceito de tempo (chronos) era subordinado ao conceito de tempo oportuno (kairos) — os momentos decisivos em que Deus intervém na história humana, culminando na 'plenitude dos tempos' (Gl 4:4)."
    ]
  },
  {
    id: 'clima',
    title: '🌤️ Clima e Estações — O Ciclo da Dependência',
    description: [
      "O clima da Terra Santa moldou profundamente a teologia e a vida diária de Israel. Diferente do Egito, que dependia da irrigação constante do rio Nilo, Canaã era uma terra que 'bebia a água da chuva dos céus' (Dt 11:11-12). Isso criava uma dependência teológica direta de Deus: a obediência trazia chuva, a desobediência trazia seca (Dt 28). O ano agrícola dividia-se em duas estações principais: o verão quente e seco (maio a outubro) e o inverno frio e chuvoso (novembro a abril).",
      "As chuvas eram categorizadas em três tipos vitais. As 'chuvas temporãs' (yoreh) caíam no outono (outubro/novembro), amolecendo a terra dura do verão para permitir a aração e o plantio das sementes de inverno (trigo e cevada). As chuvas de inverno eram pesadas e enchiam as cisternas. As 'chuvas serôdias' (malkosh) caíam na primavera (março/abril) e eram cruciais para o amadurecimento final dos grãos antes da colheita. A promessa de Deus em Joel 2:23 de enviar a chuva temporã e serôdia não era apenas uma bênção agrícola, mas tornou-se um símbolo do derramamento do Espírito Santo.",
      "Os ventos também tinham significados específicos. O vento oeste trazia umidade do Mar Mediterrâneo e indicava chuva (Lc 12:54). O vento sul trazia calor do deserto (Lc 12:55). O vento norte trazia frio e tempo limpo (Pv 25:23). O mais temido era o vento leste (khamsin ou siroco), um vento quente, seco e violento vindo do deserto da Arábia, que podia murchar a vegetação em horas (Jn 4:8, Ez 17:10). Na poesia bíblica, o vento leste frequentemente simboliza o julgamento devastador de Deus."
    ]
  },
  {
    id: 'construcoes',
    title: '🏛️ Construções Sagradas — A Arquitetura da Presença',
    description: [
      "A arquitetura sagrada em Israel não era estética, mas teológica. As medidas do Tabernáculo e do Templo foram dadas diretamente por Deus (Ex 25:9, 1Cr 28:19), não deixando espaço para a criatividade humana nas proporções fundamentais. O Tabernáculo era uma estrutura retangular de 30 côvados de comprimento por 10 de largura. O Santo dos Santos era um cubo perfeito de 10x10x10 côvados, simbolizando a perfeição absoluta e a equidade da presença de Deus. O Templo de Salomão dobrou essas medidas: 60 côvados de comprimento, 20 de largura e 30 de altura, com o Santo dos Santos sendo um cubo de 20x20x20 côvados (1Rs 6:20).",
      "A progressão cúbica atinge seu clímax em Apocalipse 21:16, onde a Nova Jerusalém é descrita como um cubo colossal de 12.000 estádios (cerca de 2.220 km) de comprimento, largura e altura. Esta dimensão astronômica não deve ser lida como um projeto de engenharia literal, mas como uma afirmação teológica: a cidade inteira tornou-se o Santo dos Santos. O véu foi rasgado, e a presença de Deus, antes confinada a um pequeno cubo escuro no Templo, agora preenche um espaço infinito e iluminado, habitando com toda a humanidade redimida.",
      "Os materiais de construção também carregavam peso teológico. A madeira de acácia (shittim), usada no Tabernáculo, era uma madeira do deserto, incorruptível e resistente, simbolizando a humanidade impecável de Cristo. O ouro puro, usado nos móveis internos, representava a divindade e a glória. O bronze, usado no altar do holocausto e na bacia do átrio externo, suportava o fogo do julgamento. A transição do Tabernáculo (tendas e prata) para o Templo (pedras lavradas e ouro) reflete a transição de um povo peregrino para um reino estabelecido, apontando para a morada eterna e inabalável que Deus prepara para os Seus."
    ]
  },
  {
    id: 'distancias',
    title: '🗺️ Distâncias Geográficas — A Topografia da Salvação',
    description: [
      "A geografia bíblica é o palco onde o drama da redenção se desenrola. Israel é uma faixa de terra minúscula, com cerca de 240 km de comprimento (de Dã a Berseba) e 80 km de largura (do Mediterrâneo ao Jordão). Essa pequenez não é acidental; Deus escolheu uma 'ponte de terra' entre os grandes impérios (Egito, Assíria, Babilônia) para colocar o Seu povo no centro das rotas comerciais e militares do mundo antigo. Israel deveria ser uma vitrine da glória de Deus para as nações, mas sua localização estratégica também significava que a desobediência resultaria em invasões rápidas e devastadoras.",
      "As distâncias no mundo antigo eram medidas pelo tempo de viagem. Uma 'jornada de um dia' equivalia a cerca de 30 a 35 km para uma caravana em terreno plano, mas caía para 15 a 20 km nas montanhas da Judeia. A jornada de Nazaré a Belém (cerca de 145 km) levaria de 5 a 7 dias para José e Maria. A viagem de Jerusalém a Jericó, cenário da parábola do Bom Samaritano, cobria apenas 27 km, mas envolvia uma descida abrupta de 1.000 metros de altitude através de um deserto rochoso e perigoso, famoso por emboscadas de salteadores.",
      "A topografia vertical também tem profundo significado teológico. Jerusalém está situada a cerca de 760 metros acima do nível do mar, enquanto o Mar Morto, a apenas 24 km de distância, está a mais de 430 metros abaixo do nível do mar (o ponto mais baixo da Terra). Na Bíblia, sempre se 'sobe' para Jerusalém, não apenas geograficamente, mas espiritualmente. A subida exigia esforço físico e preparo espiritual, refletido nos 'Cânticos dos Degraus' (Salmos 120-134) cantados pelos peregrinos. Em contraste, descer de Jerusalém (como o homem que descia para Jericó ou Jonas que desceu a Jope) frequentemente simboliza um afastamento da presença e do propósito de Deus."
    ]
  },
  {
    id: 'metais',
    title: '⛏️ Metais e Minerais — O Valor da Purificação',
    description: [
      "A Bíblia menciona seis metais principais: ouro, prata, cobre (frequentemente traduzido como bronze ou latão), ferro, chumbo e estanho. O ouro (zahav) era o metal mais precioso, associado à divindade, à realeza e à glória de Deus. No Templo, os objetos mais próximos da presença de Deus (a Arca, o Propiciatório, o Candelabro) eram de ouro puro. A prata (kesef) era o metal do comércio e do resgate; o preço de um escravo era 30 siclos de prata (Ex 21:32), o exato valor pago pela traição de Jesus (Mt 26:15), cumprindo a profecia de Zacarias de que o Bom Pastor seria avaliado pelo preço de um escravo morto.",
      "O bronze (nechosheth) era uma liga de cobre e estanho, conhecida por sua dureza e resistência ao fogo. No Tabernáculo, o altar do holocausto era revestido de bronze, simbolizando a capacidade de suportar o fogo do julgamento divino contra o pecado. A serpente de bronze levantada por Moisés no deserto (Nm 21:9) apontava para Cristo, que se fez pecado por nós e suportou o julgamento na cruz (Jo 3:14). O ferro (barzel) representava força bruta, opressão e autoridade inflexível. Os carros de ferro dos cananeus eram temidos, e o 'cetro de ferro' do Messias (Sl 2:9) denota Seu governo absoluto e irresistível sobre as nações rebeldes.",
      "O processo de refino dos metais fornece uma das metáforas mais ricas da Escritura para a santificação. O ourives sentava-se diante do fogo (Ml 3:3), aquecendo a prata ou o ouro até que as impurezas (escórias) subissem à superfície para serem removidas. O processo só terminava quando o ourives conseguia ver o seu próprio reflexo perfeitamente espelhado no metal purificado. Da mesma forma, Deus usa a fornalha da aflição (Is 48:10) para purificar o Seu povo, removendo a escória do pecado até que a imagem de Cristo seja perfeitamente refletida neles."
    ]
  },
  {
    id: 'matematica',
    title: '🧮 Matemática Bíblica — A Ordem do Criador',
    description: [
      "A matemática na Bíblia não é apenas quantitativa, mas qualitativa e simbólica. Os números frequentemente carregam significado teológico além de seu valor numérico. O número 1 representa a unidade e a primazia absoluta de Deus (Dt 6:4). O número 2 simboliza testemunho e confirmação (duas testemunhas são necessárias para estabelecer a verdade, Dt 19:15). O número 3 está associado à divindade, à plenitude espiritual e à ressurreição (o terceiro dia). O número 4 representa a criação e a totalidade terrena (os quatro ventos, os quatro cantos da terra).",
      "O número 7 é o número mais proeminente da Escritura, significando perfeição, completude e o descanso divino (o sétimo dia da criação). Ele permeia o calendário festivo de Israel (o sétimo mês, o ano sabático, o ano do jubileu após 7x7 anos) e estrutura o livro do Apocalipse (7 igrejas, 7 selos, 7 trombetas, 7 taças). O número 10 representa a completude ordinal e a responsabilidade humana (os 10 mandamentos, as 10 pragas, as 10 virgens). O número 12 simboliza a perfeição governamental e a autoridade divina (12 tribos de Israel, 12 apóstolos do Cordeiro, 12 portas da Nova Jerusalém).",
      "O número 40 é o número da provação, teste e transição. O dilúvio durou 40 dias e 40 noites; Moisés esteve no monte 40 dias; Israel peregrinou 40 anos no deserto; Jesus jejuou 40 dias antes de Seu ministério e apareceu por 40 dias após Sua ressurreição. A matemática bíblica demonstra que Deus não é um Deus de confusão, mas de ordem. Ele 'dispôs todas as coisas com medida, quantidade e peso' (Sabedoria 11:20). A precisão numérica da Escritura revela um Arquiteto Divino que governa a história e a criação com propósito exato e inabalável."
    ]
  },
  {
    id: 'arqueologia',
    title: '🏺 Arqueologia e Medidas — A Evidência Escavada',
    description: [
      "A arqueologia bíblica tem sido fundamental para confirmar e calibrar o nosso entendimento das antigas medidas hebraicas. Antes das grandes escavações do século XX, muitas medidas bíblicas eram calculadas apenas por estimativas baseadas em textos rabínicos tardios ou comparações com sistemas gregos e romanos. A descoberta de pesos de pedra originais em sítios como Laquis, Megido e Jerusalém revolucionou a metrologia bíblica. Esses pesos, muitas vezes esculpidos em forma de cúpula e feitos de calcário ou basalto, frequentemente trazem inscrições em hebraico antigo indicando seu valor.",
      "Um dos achados mais fascinantes foi o peso 'pim' (cerca de 7,8 gramas). Em 1 Samuel 13:21, o texto diz que os filisteus cobravam um 'pim' para afiar relhas de arados e enxadas. Durante séculos, os tradutores não sabiam o que essa palavra significava, traduzindo-a vagamente como 'uma lima' ou 'um preço'. Foi apenas no início do século XX, quando arqueólogos começaram a desenterrar pequenos pesos de pedra com as letras hebraicas 'P-Y-M' gravadas neles, que o mistério foi resolvido: era uma unidade de peso equivalente a cerca de dois terços de um siclo. Isso não apenas esclareceu o texto, mas confirmou a antiguidade e a precisão do registro de Samuel.",
      "Outras descobertas incluem jarras de armazenamento com selos reais (LMLK - 'pertencente ao rei') encontradas em Judá, datando do reinado de Ezequias. Essas jarras tinham uma capacidade padronizada (provavelmente um bato), demonstrando a existência de um sistema centralizado de arrecadação de impostos e distribuição de suprimentos. Em Qumran, os Manuscritos do Mar Morto revelaram detalhes sobre o calendário solar sectário usado pelos essênios, que contrastava com o calendário lunissolar do Templo de Jerusalém, lançando luz sobre as disputas cronológicas e teológicas do primeiro século."
    ]
  },
  {
    id: 'navegacao',
    title: '⚓ Navegação e Medidas Marítimas — O Domínio das Águas',
    description: [
      "Embora os antigos israelitas não fossem conhecidos como um povo de grandes navegadores (ao contrário de seus vizinhos fenícios), a Bíblia contém referências significativas a medidas e práticas marítimas, especialmente no Novo Testamento e nas viagens do apóstolo Paulo. A profundidade da água era medida em braças (em grego 'orguia', que significa a extensão dos braços abertos, cerca de 1,8 metros). Em Atos 27:28, durante a terrível tempestade no Mediterrâneo, os marinheiros lançaram a sonda e encontraram 'vinte braças' (cerca de 36 metros) e, pouco depois, 'quinze braças' (27 metros), indicando que estavam sendo empurrados perigosamente em direção à costa.",
      "As distâncias no mar não eram medidas em milhas ou estádios com a mesma precisão que em terra, mas geralmente pelo tempo de navegação sob condições normais de vento. No entanto, o tamanho dos navios pode ser inferido pela sua capacidade de carga e número de passageiros. O navio alexandrino que naufragou em Malta transportava 276 pessoas (Atos 27:37), além de uma pesada carga de trigo. Historiadores estimam que navios graneleiros romanos dessa classe podiam medir até 55 metros de comprimento e carregar mais de 1.000 toneladas, tornando-os as maiores maravilhas da engenharia do mundo antigo.",
      "Teologicamente, o mar (Yam) no pensamento hebraico antigo frequentemente representava o caos, o perigo e as forças indomáveis da natureza (o 'Leviatã'). A capacidade de medir, dominar ou acalmar o mar era vista como uma prerrogativa exclusiva de Deus (Jó 38:8-11). Quando Jesus acalma a tempestade no Mar da Galileia (Mc 4:39) ou caminha sobre as águas (Jo 6:19, onde é dito que eles haviam remado 'cerca de vinte e cinco ou trinta estádios', ou seja, 5 a 6 km, o meio do lago), Ele está demonstrando uma autoridade divina sobre o caos que nenhuma medida humana ou habilidade náutica poderia controlar."
    ]
  },
  {
    id: 'conversoes',
    title: '🔄 Conversões Modernas — O Desafio da Tradução',
    description: [
      "Traduzir as antigas medidas bíblicas para os equivalentes modernos (sistema métrico ou imperial) é um dos maiores desafios para os tradutores da Bíblia. O problema central é que os padrões antigos não eram absolutos como o metro ou o quilograma guardados em Paris. Eles variavam ligeiramente de região para região (um siclo babilônico não era exatamente igual a um siclo egípcio) e de época para época (o côvado do tempo de Moisés pode ter diferido do côvado do tempo de Jesus). Além disso, havia padrões duplos dentro do próprio Israel, como o 'côvado comum' e o 'côvado do santuário'.",
      "As traduções modernas adotam diferentes filosofias para lidar com isso. Traduções de equivalência formal (como a Almeida Revista e Atualizada ou a King James) tendem a manter os termos originais (côvado, efa, siclo), preservando a precisão histórica e o sabor cultural, mas exigindo que o leitor consulte notas de rodapé ou dicionários para entender a magnitude. Traduções de equivalência dinâmica (como a Nova Versão Internacional ou a Nova Tradução na Linguagem de Hoje) frequentemente convertem as medidas para o sistema moderno (metros, litros, quilos) diretamente no texto, sacrificando o termo original em favor da compreensão imediata do leitor contemporâneo.",
      "O perigo da conversão moderna é a falsa precisão. Quando uma tradução diz que a Arca de Noé tinha '135 metros', o leitor moderno assume uma precisão milimétrica que o texto original ('300 côvados') não pretendia transmitir. Os números antigos frequentemente funcionavam como ordens de grandeza ou tinham valor simbólico. Portanto, a melhor abordagem exegética é entender a medida moderna como uma aproximação útil, mas sempre buscar o significado teológico e o contexto cultural da unidade original."
    ]
  },
  {
    id: 'teologia',
    title: '📖 Teologia das Medidas — A Balança Justa do Senhor',
    description: [
      "A metrologia bíblica não é apenas um sistema de contabilidade; é uma expressão do caráter moral de Deus. A exigência mais repetida na Lei em relação às medidas é a da justiça absoluta: 'Balanças justas, pesos justos, efa justo e him justo tereis. Eu sou o Senhor vosso Deus' (Lv 19:36). Em uma sociedade sem órgãos reguladores modernos, a tentação de usar 'dois pesos e duas medidas' (um peso pesado para comprar e um leve para vender) era imensa. Deus declara que o peso falso é uma 'abominação' para Ele (Pv 11:1), pois reflete a corrupção do coração humano e a exploração do vulnerável.",
      "Profeticamente, o ato de medir é frequentemente um símbolo de julgamento ou de reivindicação de propriedade. Quando Deus manda medir algo, Ele está avaliando seu estado moral ou separando-o para Si. Em Amós 7:7-8, Deus coloca um 'prumo' (uma linha de medir com um peso na ponta) no meio de Israel para demonstrar que a nação estava torta e madura para o julgamento. Em Apocalipse 11:1, João recebe uma 'cana de medir' e é instruído a medir o templo de Deus e os adoradores, simbolizando a proteção e a preservação espiritual do povo de Deus em meio à tribulação.",
      "O clímax da teologia das medidas encontra-se na encarnação e na graça. Enquanto a Lei exige medidas exatas e pesos justos, a graça de Deus em Cristo transcende toda a capacidade de medição humana. O amor de Cristo tem uma 'largura, e comprimento, e altura, e profundidade' que excede todo o entendimento (Ef 3:18-19). O dom do Espírito Santo não é dado 'por medida' (Jo 3:34). E a recompensa da graça é descrita como uma 'boa medida, recalcada, sacudida e transbordante' (Lc 6:38). Em Cristo, a balança da justiça divina foi perfeitamente satisfeita, permitindo que a medida da misericórdia transbordasse para a humanidade."
    ]
  },
  {
    id: 'calendario',
    title: '⏳ Calendário e Festas — O Ritmo da Redenção',
    description: [
      "O calendário hebraico não era apenas um marcador de tempo, mas um ciclo litúrgico desenhado por Deus para ensinar teologia através do ritmo das estações. Baseado em um sistema lunissolar, os meses começavam com a lua nova (Rosh Chodesh), exigindo observação constante dos céus. O ano religioso começava na primavera, no mês de Nisã (Abibe), marcando a redenção do Egito, enquanto o ano civil começava no outono, em Tishrei, com a Festa das Trombetas e o Dia da Expiação.",
      "As sete festas fixas do Senhor (Levítico 23) estavam intrinsecamente ligadas às colheitas agrícolas de Israel, formando um quadro profético perfeito. As festas da primavera (Páscoa, Pães Ázimos, Primícias e Pentecostes) apontavam para a primeira vinda de Cristo, Sua morte, ressurreição e o derramamento do Espírito Santo. As festas do outono (Trombetas, Expiação e Tabernáculos) apontam para a Sua segunda vinda, o julgamento final e o estabelecimento do Reino Milenar.",
      "O conceito de tempo sagrado culminava no ciclo sabático. A cada sete dias, o Shabat interrompia a produção humana para declarar a soberania do Criador. A cada sete anos, a própria terra descansava (Ano Sabático), ensinando a dependência da provisão divina. E após sete ciclos de sete anos, o Ano do Jubileu (o 50º ano) proclamava liberdade em toda a terra, cancelando dívidas e restaurando propriedades, uma prefiguração gloriosa da redenção final e da restauração de todas as coisas em Cristo."
    ]
  },
  {
    id: 'monumentos',
    title: '🏛️ Monumentos e Memoriais — Pedras que Falam',
    description: [
      "Na antiguidade bíblica, monumentos e pedras memoriais (matzevot) serviam como testemunhas silenciosas, porém eloquentes, das intervenções divinas na história. Diferente dos obeliscos egípcios ou estelas mesopotâmicas que glorificavam conquistas de reis humanos, os monumentos hebraicos eram tipicamente pedras brutas, não lavradas, erguidas para marcar um encontro com o Deus vivo. Quando Jacó erigiu a pedra em Betel (Gn 28:18), ele estava demarcando um espaço onde o céu tocou a terra.",
      "A travessia do rio Jordão sob a liderança de Josué foi imortalizada por doze pedras retiradas do leito do rio e erguidas em Gilgal (Js 4). O propósito explícito dessa estrutura não era adoração, mas instrução intergeracional: 'Quando vossos filhos perguntarem no futuro...'. Esses monumentos funcionavam como âncoras mnemônicas para uma cultura de tradição oral, garantindo que a narrativa da salvação não fosse erodida pelo tempo ou pela assimilação cultural.",
      "Com o tempo, a teologia dos monumentos evoluiu da pedra física para a realidade espiritual. O profeta Samuel ergueu a pedra de Ebenézer ('Até aqui nos ajudou o Senhor'), reconhecendo que a verdadeira segurança de Israel não estava em fortalezas, mas na fidelidade divina. No Novo Testamento, o conceito atinge seu ápice cristológico e eclesiológico: Cristo é a 'pedra angular' rejeitada pelos construtores, e os crentes são 'pedras vivas' edificadas como casa espiritual (1 Pedro 2:5), o monumento definitivo e eterno da graça de Deus."
    ]
  },
  {
    id: 'padroes',
    title: '🔢 Padrões e Tipologia — A Assinatura do Autor',
    description: [
      "A Bíblia revela um Deus que opera através de padrões (tipologia), estruturas recorrentes que conectam o Antigo e o Novo Testamento em uma tapeçaria unificada de revelação. O termo grego 'typos' (padrão, modelo, figura) refere-se a realidades históricas (pessoas, eventos, instituições) que foram divinamente ordenadas para prefigurar realidades futuras maiores em Cristo. Quando Deus instruiu Moisés a construir o Tabernáculo, Ele ordenou estritamente: 'Vê que faças tudo segundo o modelo (padrão) que te foi mostrado no monte' (Hb 8:5).",
      "Esses padrões arquitetônicos e narrativos servem como uma linguagem teológica codificada. O padrão do 'cordeiro substituto' começa no Éden com as vestes de pele, passa pelo sacrifício de Isaque (onde o carneiro substitui o filho), é institucionalizado na Páscoa no Egito, codificado no sistema levítico, até culminar em João Batista apontando para Jesus: 'Eis o Cordeiro de Deus'. O padrão não é uma coincidência literária, mas a assinatura do Autor Divino orquestrando a história redentiva.",
      "Reconhecer esses padrões é a chave para a exegese cristocêntrica profunda. O padrão do 'êxodo' (libertação da escravidão através da água para uma terra de promessa) é repetido no retorno do exílio babilônico e encontra seu cumprimento final na obra de Cristo na cruz (que Lucas 9:31 literalmente chama de Seu 'êxodo'). A tipologia demonstra que a história não é cíclica nem aleatória, mas teleológica — ela avança em espirais ascendentes de significado, onde cada padrão aponta inexoravelmente para a pessoa e a obra de Jesus Cristo."
    ]
  }
];

export interface MeasureItem {
  label: string;
  val: string;
  strong: string;
  ref: string;
  theo: string;
  extra?: string;
  category: string;
}

export const MEASURES_DATA: MeasureItem[] = [
  // Comprimento
  { category: 'comprimento', label: "Dedo (Etsba)", val: "~1,85 cm", strong: "H676", ref: "Jr 52:21", theo: "Menor unidade; a precisão divina nos mínimos detalhes." },
  { category: 'comprimento', label: "Palmo (Tefah)", val: "~7,4 cm", strong: "H2947", ref: "Ex 25:25", theo: "Equivalente a 4 dedos. O alcance da soberania divina e o palmo que mede os céus." },
  { category: 'comprimento', label: "Côvado Comum", val: "~44,4 cm", strong: "H520", ref: "Gn 6:15", theo: "Medida do cotovelo à ponta do dedo médio; a medida base da Arca de Noé." },
  { category: 'comprimento', label: "Côvado Real", val: "~51,8 cm", strong: "Ez 40:5", ref: "Ez 40:5", theo: "Côvado comum + 1 palmo. O padrão celestial superior para o Templo Milenar." },
  { category: 'comprimento', label: "Cana (Qaneh)", val: "~2,67 m", strong: "H7070", ref: "Ez 40:5", theo: "6 Côvados Reais. Medição profética da herança de Deus." },
  { category: 'comprimento', label: "Estádio (Stadion)", val: "~185 m", strong: "G4712", ref: "Ap 21:16", theo: "Unidade urbana para medir a vastidão da Cidade Santa." },
  { category: 'comprimento', label: "Milha (Milion)", val: "~1,48 km", strong: "G3400", ref: "Mt 5:41", theo: "Distância romana; a lei da segunda milha na graça." },
  { category: 'comprimento', label: "Caminho de Sábado", val: "~0,9 km", strong: "N/A", ref: "At 1:12", theo: "Limite tradicional de viagem no Shabat sem violar o descanso." },
  
  // Pesos
  { category: 'pesos', label: "Gerá", val: "~0,57 g", strong: "H1626", ref: "Ex 30:13", theo: "1/20 do Siclo. Menor valor do resgate perante o Senhor." },
  { category: 'pesos', label: "Beca", val: "~5,7 g", strong: "H1235", ref: "Ex 38:26", theo: "Metade do Siclo. Imposto per capita do Santuário." },
  { category: 'pesos', label: "Siclo (Sheqel)", val: "~11,4 g", strong: "H8255", ref: "Gn 23:16", theo: "Unidade fundamental; o peso da justiça divina." },
  { category: 'pesos', label: "Mina (Maneh)", val: "~570 g", strong: "H4488", ref: "Ed 2:69", theo: "50 Siclos. Representa a gestão e prestação de contas." },
  { category: 'pesos', label: "Talento (Kikar)", val: "~34,2 kg", strong: "H3603", ref: "Ex 25:39", theo: "3000 Siclos. O peso máximo da glória ou do serviço." },
  
  // Líquidos
  { category: 'liquidos', label: "Log", val: "~0,3 L", strong: "H3066", ref: "Lv 14:10", theo: "Menor medida; óleo para a unção do leproso." },
  { category: 'liquidos', label: "Hin", val: "~3,6 L", strong: "H1969", ref: "Ex 29:40", theo: "Medida para libações de vinho e óleo no altar." },
  { category: 'liquidos', label: "Bato", val: "~22 L", strong: "H1324", ref: "1Rs 7:26", theo: "Unidade padrão de volume para líquidos. O mar de bronze comportava 2.000 batos." },
  { category: 'liquidos', label: "Coro (Líquidos)", val: "~220 L", strong: "H3734", ref: "1Rs 5:11", theo: "Dez batos. A plenitude da provisão de azeite." },
  
  // Secos
  { category: 'secos', label: "Cabo", val: "~1,2 L", strong: "H6894", ref: "2Rs 6:25", theo: "Medida de escassez extrema durante o cerco de Samaria." },
  { category: 'secos', label: "Gômer", val: "~2,2 L", strong: "H6016", ref: "Ex 16:16", theo: "Maná diário; a provisão suficiente e diária de Deus." },
  { category: 'secos', label: "Seá", val: "~7,3 L", strong: "H5429", ref: "Gn 18:6", theo: "Um terço de efa. A medida da hospitalidade generosa de Abraão." },
  { category: 'secos', label: "Efa", val: "~22 L", strong: "H374", ref: "Ez 45:11", theo: "Unidade padrão de volume para sólidos. Exige-se balança justa." },
  { category: 'secos', label: "Letec", val: "~110 L", strong: "H3963", ref: "Os 3:2", theo: "Meio ômer. O preço pago pelo profeta para resgatar sua esposa." },
  { category: 'secos', label: "Ômer (Coro)", val: "~220 L", strong: "H2568", ref: "Lv 27:16", theo: "Dez efas. A plenitude da colheita espiritual e material." },
  
  // Moedas
  { category: 'moedas', label: "Lépton (Mite)", val: "1/128 Den.", strong: "G3016", ref: "Mc 12:42", theo: "A oferta da viúva; o valor total do coração." },
  { category: 'moedas', label: "Quadrante", val: "1/64 Den.", strong: "G2835", ref: "Mt 5:26", theo: "A exigência da justiça humana até o último centavo." },
  { category: 'moedas', label: "Asse (Assarion)", val: "1/16 Den.", strong: "G787", ref: "Mt 10:29", theo: "O preço de dois pardais; o cuidado de Deus com o ínfimo." },
  { category: 'moedas', label: "Denário", val: "Salário Diário", strong: "G1220", ref: "Mt 20:2", theo: "A moeda do trabalhador comum sob a providência." },
  { category: 'moedas', label: "Dracma", val: "1 Denário", strong: "G1406", ref: "Lc 15:8", theo: "O valor de uma alma buscada diligentemente por Deus." },
  { category: 'moedas', label: "Estater", val: "4 Dracmas", strong: "G4715", ref: "Mt 17:27", theo: "Provisão milagrosa para obrigações civis (Peixe)." },
  { category: 'moedas', label: "Mina (Moeda)", val: "100 Dracmas", strong: "G3414", ref: "Lc 19:13", theo: "Capital espiritual a ser multiplicado até a Volta." },
  { category: 'moedas', label: "Talento (Ouro)", val: "6000 Den.", strong: "G5007", ref: "Mt 25:15", theo: "Valor imenso; dons magnânimos e severa mordomia." },
  
  // Área
  { category: 'area', label: "Jeira (Tsemed)", val: "~2.000 m²", strong: "H6776", ref: "1Sm 14:14", theo: "Área arada por uma parelha de bois em um dia. O esforço humano medido." },
  { category: 'area', label: "Semeadura de Ômer", val: "~16.000 m²", strong: "H2568", ref: "Lv 27:16", theo: "Área que consome um ômer de semente. A terra avaliada por seu potencial de fruto." },
  { category: 'area', label: "Alqueire Bíblico", val: "Variável", strong: "N/A", ref: "Is 5:10", theo: "Medida de julgamento onde grandes áreas produzem colheitas minúsculas devido ao pecado." },
  
  // Tempo
  { category: 'tempo', label: "Hora (Hora)", val: "60 min", strong: "G5610", ref: "Mt 20:3", theo: "Divisão do dia romano. A 'hora' de Cristo aponta para o momento exato da cruz." },
  { category: 'tempo', label: "Vigília Noturna (AT)", val: "4 horas", strong: "H821", ref: "Jz 7:19", theo: "Três vigílias por noite. O tempo de guarda e oração na escuridão." },
  { category: 'tempo', label: "Vigília Noturna (NT)", val: "3 horas", strong: "G5438", ref: "Mc 13:35", theo: "Quatro vigílias romanas. A chamada à vigilância constante para a volta do Senhor." },
  { category: 'tempo', label: "Dia (Yom)", val: "24 horas", strong: "H3117", ref: "Gn 1:5", theo: "Do pôr do sol ao pôr do sol. O ciclo divino de descanso antes do trabalho." },
  { category: 'tempo', label: "Semana (Shavua)", val: "7 dias", strong: "H7620", ref: "Dn 9:24", theo: "Ciclo de criação e redenção. Usado profeticamente para 'semanas de anos'." },
  { category: 'tempo', label: "Ano (Shanah)", val: "354/384 dias", strong: "H8141", ref: "Ex 12:2", theo: "Ciclo lunissolar. O ano da redenção começa com a Páscoa." },
  
  // Clima
  { category: 'clima', label: "Chuva Temporã", val: "Out/Nov", strong: "H3138", ref: "Dt 11:14", theo: "Prepara a terra dura. O derramamento inicial do Espírito para o plantio." },
  { category: 'clima', label: "Chuva de Inverno", val: "Dez/Fev", strong: "H1653", ref: "Ct 2:11", theo: "Enche as cisternas. O suprimento profundo e constante da graça." },
  { category: 'clima', label: "Chuva Serôdia", val: "Mar/Abr", strong: "H4456", ref: "Zc 10:1", theo: "Amadurece o grão. O avivamento final antes da grande colheita." },
  { category: 'clima', label: "Vento Leste (Siroco)", val: "Quente/Seco", strong: "H6921", ref: "Jn 4:8", theo: "Vento do deserto. Símbolo de provação severa e julgamento divino." },
  { category: 'clima', label: "Orvalho (Tal)", val: "Umidade", strong: "H2919", ref: "Sl 133:3", theo: "Sustento silencioso no verão seco. A bênção invisível e refrescante de Deus." },
  
  // Construções
  { category: 'construcoes', label: "Tabernáculo", val: "30x10 côv.", strong: "H4908", ref: "Ex 26", theo: "A tenda da congregação. Deus habitando no meio da peregrinação do Seu povo." },
  { category: 'construcoes', label: "Santo dos Santos", val: "10x10 côv.", strong: "H6944", ref: "Ex 26:33", theo: "Cubo perfeito. A santidade absoluta e inacessível sem sangue." },
  { category: 'construcoes', label: "Templo de Salomão", val: "60x20 côv.", strong: "H1964", ref: "1Rs 6:2", theo: "O dobro do Tabernáculo. A glória estabelecida no reino de paz." },
  { category: 'construcoes', label: "Altar do Holocausto", val: "5x5 côv.", strong: "H4196", ref: "Ex 27:1", theo: "Quadrado perfeito. A justiça divina que exige sacrifício antes da comunhão." },
  { category: 'construcoes', label: "Nova Jerusalém", val: "12.000 est.", strong: "G4172", ref: "Ap 21:16", theo: "A cidade-cubo. A presença de Deus expandida para toda a criação redimida." },
  
  // Distâncias
  { category: 'distancias', label: "Jornada de um Dia", val: "~30 km", strong: "H1870", ref: "Nm 11:31", theo: "O limite do esforço humano diário. A dependência da provisão passo a passo." },
  { category: 'distancias', label: "Jornada de Sábado", val: "~900 m", strong: "G4521", ref: "At 1:12", theo: "2.000 côvados. O limite rabínico para preservar o descanso sagrado." },
  { category: 'distancias', label: "Dã a Berseba", val: "~240 km", strong: "N/A", ref: "Jz 20:1", theo: "A extensão total de Israel de norte a sul. A totalidade do povo da aliança." },
  { category: 'distancias', label: "Descida a Jericó", val: "1.000m (alt)", strong: "G2414", ref: "Lc 10:30", theo: "Queda abrupta de altitude. Símbolo da degradação humana longe de Deus." },
  
  // Metais
  { category: 'metais', label: "Ouro (Zahav)", val: "Divindade", strong: "H2091", ref: "Ex 25:3", theo: "Incorruptível e precioso. A glória, pureza e realeza de Deus." },
  { category: 'metais', label: "Prata (Kesef)", val: "Redenção", strong: "H3701", ref: "Ex 30:16", theo: "O metal do resgate e do comércio. O preço pago pelas almas." },
  { category: 'metais', label: "Bronze (Nechosheth)", val: "Julgamento", strong: "H5178", ref: "Ex 27:2", theo: "Resistente ao fogo. A capacidade de suportar a ira divina contra o pecado." },
  { category: 'metais', label: "Ferro (Barzel)", val: "Autoridade", strong: "H1270", ref: "Sl 2:9", theo: "Força inflexível. O cetro do Messias que quebra a rebelião." },
  { category: 'metais', label: "Escória", val: "Impureza", strong: "H5509", ref: "Is 1:22", theo: "O pecado misturado à natureza humana, removido apenas pelo fogo da aflição." },
  
  // Matemática
  { category: 'matematica', label: "Número 1", val: "Unidade", strong: "H259", ref: "Dt 6:4", theo: "O monoteísmo absoluto: 'O Senhor é um'. Reflete a unidade indivisível de Deus." },
  { category: 'matematica', label: "Número 3", val: "Divindade", strong: "H7969", ref: "Mt 28:19", theo: "A marca da Trindade (Pai, Filho, Espírito). Presente nas divisões do santuário." },
  { category: 'matematica', label: "Número 4", val: "Universalidade", strong: "H702", ref: "Ap 7:1", theo: "O mundo e os 4 pontos cardeais. As 4 cores da porta e os 4 lados do acampamento." },
  { category: 'matematica', label: "Número 5", val: "Graça", strong: "H2568", ref: "Ex 26:37", theo: "As 5 colunas da entrada. O número da benevolência divina salvando o homem incapaz." },
  { category: 'matematica', label: "Número 7", val: "Perfeição", strong: "H7651", ref: "Gn 2:2", theo: "O Candelabro de 7 hastes. A plenitude do Espírito e a conclusão da obra criativa." },
  { category: 'matematica', label: "Número 12", val: "Governo", strong: "H8147", ref: "Ap 21:12", theo: "As 12 tribos e os 12 pães. A organização administrativa do Reino de Deus na terra." },
  { category: 'matematica', label: "Número 40", val: "Provação", strong: "H705", ref: "Mt 4:2", theo: "Os 40 anos de jornada e os 40 dias no monte. O tempo necessário para o refino da fé." },
  { category: 'matematica', label: "Número 50", val: "Jubileu", strong: "H2572", ref: "Lv 25:10", theo: "O Pentecostes e a liberdade. Representa a libertação total, o perdão das dívidas e o derramamento do Espírito Santo." },
  
  // Arqueologia
  { category: 'arqueologia', label: "Peso Pim", val: "~7,8 g", strong: "H6368", ref: "1Sm 13:21", theo: "Descoberta arqueológica que esclareceu o texto bíblico. O preço da afiação filisteia." },
  { category: 'arqueologia', label: "Jarras LMLK", val: "~22 L (Bato)", strong: "N/A", ref: "2Cr 32:28", theo: "Selos reais de Ezequias. A administração e provisão do reino de Judá." },
  { category: 'arqueologia', label: "Inscrição de Siloé", val: "1.200 côv.", strong: "N/A", ref: "2Rs 20:20", theo: "O túnel de Ezequias medido em côvados na própria rocha. A precisão da engenharia antiga." },
  
  // Navegação
  { category: 'navegacao', label: "Braça (Orguia)", val: "~1,8 m", strong: "G3715", ref: "At 27:28", theo: "Medida de profundidade. A sonda lançada no mar revolto antes do naufrágio." },
  { category: 'navegacao', label: "Estádio Marítimo", val: "~185 m", strong: "G4712", ref: "Jo 6:19", theo: "Distância remada no mar da Galileia. Onde o esforço humano falha, Cristo caminha." },
  { category: 'navegacao', label: "Capacidade de Carga", val: "276 almas", strong: "G5590", ref: "At 27:37", theo: "A grandeza dos navios graneleiros romanos e o valor supremo da vida humana." },
  
  // Conversões
  { category: 'conversoes', label: "Equivalência Formal", val: "Literal", strong: "N/A", ref: "Gn 6:15", theo: "Preserva o termo original (ex: côvado). Mantém a distância cultural e a precisão histórica." },
  { category: 'conversoes', label: "Equivalência Dinâmica", val: "Adaptada", strong: "N/A", ref: "Gn 6:15", theo: "Converte para o sistema moderno (ex: metros). Facilita a compreensão imediata." },
  { category: 'conversoes', label: "Falsa Precisão", val: "Aproximada", strong: "N/A", ref: "Ap 21:16", theo: "O perigo de ler números simbólicos ou ordens de grandeza como engenharia exata." },
  
  // Teologia
  { category: 'teologia', label: "Balança Justa", val: "Equidade", strong: "H3976", ref: "Lv 19:36", theo: "A exigência moral de Deus no comércio. O peso falso é abominação ao Senhor." },
  { category: 'teologia', label: "O Prumo", val: "Julgamento", strong: "H594", ref: "Am 7:7", theo: "A linha de medir divina que revela a tortuosidade moral de Israel." },
  { category: 'teologia', label: "A Cana de Medir", val: "Preservação", strong: "G2563", ref: "Ap 11:1", theo: "O ato de medir o templo como símbolo de proteção espiritual durante a tribulação." },
  { category: 'teologia', label: "Sem Medida", val: "Graça Infinita", strong: "G3358", ref: "Jo 3:34", theo: "O Espírito dado a Cristo não tem limites. A graça que transborda a balança humana." },
  
  // Calendário
  { category: 'calendario', label: "1. NISÃ (Abibe)", val: "Mar/Abr", strong: "H24", ref: "Ex 12:2", theo: "O Mês da Redenção. Páscoa e início do ano espiritual judeu.", extra: "Festa: Páscoa e Pães Ázimos" },
  { category: 'calendario', label: "2. IYAR (Zive)", val: "Abr/Mai", strong: "H2116", ref: "1Rs 6:1", theo: "Mês do Brilho das Flores. Início da construção do Templo de Salomão.", extra: "Estação: Chuvas de Primavera" },
  { category: 'calendario', label: "3. SIVAN", val: "Mai/Jun", strong: "H5510", ref: "Et 8:9", theo: "O Mês da Revelação. Pentecostes e entrega da Lei no Sinai.", extra: "Festa: Pentecostes (Semanas)" },
  { category: 'calendario', label: "4. TAMUZ", val: "Jun/Jul", strong: "H8542", ref: "Ez 8:14", theo: "Calor do Verão. Memória do bezerro de ouro e quebra das tábuas.", extra: "Estação: Início da Colheita" },
  { category: 'calendario', label: "5. AV (Ab)", val: "Jul/Ago", strong: "N/A", ref: "Ed 7:9", theo: "Mês do Luto. Destruição do Primeiro e Segundo Templos.", extra: "Festa: 9 de Av (Jejum)" },
  { category: 'calendario', label: "6. ELUL", val: "Ago/Set", strong: "H435", ref: "Ne 6:15", theo: "Mês do Arrependimento. Muros de Jerusalém terminados por Neemias.", extra: "Preparo para o Novo Ano" },
  { category: 'calendario', label: "7. TISHREI", val: "Set/Out", strong: "H388", ref: "1Rs 8:2", theo: "O Mês das Festas. Trombetas, Expiação e Tabernáculos.", extra: "Festa: Tabernáculos / Yom Kippur" },
  { category: 'calendario', label: "8. HESHVAN", val: "Out/Nov", strong: "H945", ref: "1Rs 6:38", theo: "Mês das Chuvas Temporãs. Período de plantio após colheita.", extra: "Estação: Plantio de Inverno" },
  { category: 'calendario', label: "9. KISLEV", val: "Nov/Dez", strong: "H3691", ref: "Ne 1:1", theo: "Mês da Luz. Hanukkah (Dedicação) e vitória sobre o paganismo.", extra: "Festa: Hanukkah" },
  { category: 'calendario', label: "10. TEVET", val: "Dez/Jan", strong: "H2887", ref: "Et 2:16", theo: "Rigor do Inverno. Fé resiliente em meio ao frio e trevas.", extra: "Estação: Meio do Inverno" },
  { category: 'calendario', label: "11. SHEVAT", val: "Jan/Fev", strong: "H7627", ref: "Zc 1:7", theo: "Florescer da amendoeira. Vigilância e cumprimento da Palavra.", extra: "Ano Novo das Árvores" },
  { category: 'calendario', label: "12. ADAR", val: "Fev/Mar", strong: "H144", ref: "Et 9:1", theo: "Mês da Alegria. Purim e a reversão divina da sorte humana.", extra: "Festa: Purim" },
  
  // Monumentos
  { category: 'monumentos', label: "Arca de Noé", val: "300x50x30 côv.", strong: "Prisma", ref: "Gn 6:15", theo: "Refúgio tríptico contra o juízo. Estrutura de salvação flutuante.", extra: "Volume: ~40.000 ton" },
  { category: 'monumentos', label: "Santíssimo (Tabernáculo)", val: "10x10x10 côv.", strong: "Cubo", ref: "Ex 26", theo: "O Cubo da Presença. Perfeição absoluta onde Deus habita.", extra: "Escala Base: 10" },
  { category: 'monumentos', label: "Santíssimo (Templo)", val: "20x20x20 côv.", strong: "Cubo", ref: "1Rs 6:20", theo: "O Cubo da Glória Ampliada. Fixidez da promessa em Sião.", extra: "Escala Base: 20" },
  { category: 'monumentos', label: "Cidade Santa", val: "12.000 est.", strong: "Cubo", ref: "Ap 21:16", theo: "O Cubo da Consumação Final. Espaço ilimitado e eterno.", extra: "Escala Base: 12000" },
  
  // Padrões
  { category: 'padroes', label: "Número 3", val: "Espiritual", strong: "Trindade", ref: "Gn 6:16", theo: "Plenitude espiritual e ressurreição. 3 pavimentos para salvação." },
  { category: 'padroes', label: "Número 7", val: "Perfeição", strong: "Criação", ref: "Gn 2:2", theo: "Completude divina. O descanso que sela a obra perfeita." },
  { category: 'padroes', label: "Número 10", val: "Ordinal", strong: "Responsab.", ref: "Ex 20", theo: "Responsabilidade humana. Base dimensional do Tabernáculo." },
  { category: 'padroes', label: "Número 12", val: "Governo", strong: "Autoridade", ref: "Ap 21", theo: "Governo divino. 12 Tribos, 12 Apóstolos, 12000 Estádios." },
  { category: 'padroes', label: "Número 40", val: "Provação", strong: "Tempo", ref: "Mt 4:2", theo: "Teste e transição. 40 dias no deserto; 40 anos de jornada." },
  { category: 'padroes', label: "Número 60", val: "Templo", strong: "Estrutural", ref: "1Rs 6", theo: "Dimensão do templo de Salomão. Ordem e magnitude real." },
];
