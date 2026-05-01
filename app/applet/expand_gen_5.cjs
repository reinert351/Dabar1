const fs = require('fs');

const expandedPericopes = [
  {
    id: 'gen_1_1_31',
    bookId: 'GEN',
    chapter: 1,
    startVerse: 1,
    endVerse: 31,
    title: 'A Criação do Mundo: O Palco da Glória Divina',
    theme: 'O Poder Criativo, a Ordem Perfeita e a Soberania Absoluta de Deus',
    introduction: 'O relato da criação em Gênesis 1 transcende a mera curiosidade científica sobre as origens do cosmos; é, fundamentalmente, uma majestosa declaração teológica e litúrgica sobre a identidade do Criador. Escrito em um contexto onde as nações vizinhas acreditavam em deuses limitados, caprichosos e caóticos que formavam o mundo através de guerras cósmicas e violência, Gênesis apresenta o único Deus verdadeiro (Elohim). Ele é soberano, transcendente e incriado. Ele não luta contra o caos; Ele simplesmente fala, e o caos se submete. A criação é apresentada como a construção de um grande templo cósmico, onde Deus traz ordem absoluta, luz resplandecente e vida abundante ao vazio primordial, revelando Seu poder inesgotável, Seu propósito intencional e a bondade intrínseca de toda a Sua obra criadora.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'O Princípio Absoluto e a Presença no Caos',
        description: 'O texto sagrado inaugura a revelação com a declaração mais profunda e abrangente da Escritura: "No princípio, criou Deus os céus e a terra". Deus já existia na eternidade antes da fundação do tempo, do espaço e da matéria (creatio ex nihilo - criação do nada). A terra inicial é descrita como "sem forma e vazia" (tohu va bohu), um estado de caos aquoso e escuridão profunda, inóspito para a vida. No entanto, o texto revela uma esperança imediata: o "Espírito de Deus pairava sobre as águas". A palavra hebraica sugere o movimento de uma ave chocando e protegendo seus ovos. Isso demonstra que o caos não estava fora de controle; era, na verdade, o palco cuidadosamente preparado e guardado pelo Espírito para a manifestação gloriosa da Palavra criadora de Deus.'
      },
      {
        verseRef: 'v. 3-25',
        title: 'A Palavra Soberana que Traz Ordem e Plenitude',
        description: 'Diferente dos mitos pagãos, Deus não cria com esforço físico ou batalhas, mas através do poder absoluto e irresistível da Sua Palavra ("E disse Deus: Haja... e houve"). A estrutura dos seis dias revela um padrão divino de "separar e preencher". Nos primeiros três dias, Deus forma os domínios do universo: separa a luz das trevas (Dia 1), as águas de cima das de baixo criando o firmamento (Dia 2), e a terra seca dos mares, fazendo brotar a vegetação (Dia 3). Nos três dias seguintes, Ele preenche esses domínios com seus respectivos habitantes: os astros no céu para governar o dia e a noite (Dia 4), os peixes e aves para os mares e céus (Dia 5), e os animais terrestres para a terra seca (Dia 6). Este padrão meticuloso demonstra que Ele é um Deus de ordem perfeita, beleza simétrica e abundância inesgotável.'
      },
      {
        verseRef: 'v. 26-31',
        title: 'O Ápice da Criação: A Imago Dei',
        description: 'O clímax e a coroa de toda a obra criadora ocorrem no sexto dia com a formação da humanidade. Há uma pausa deliberada e um conselho divino ("Façamos o homem..."). Diferente de todas as outras criaturas que foram feitas "segundo a sua espécie", o homem e a mulher são criados "à imagem e semelhança de Deus" (Imago Dei). Eles não são divinos, mas são reflexos do Criador. Eles recebem o mandato cultural e espiritual para dominar a terra, governar sobre a criação com justiça e ser os representantes visíveis e vice-regentes do Rei invisível no templo cósmico. Ao final de toda a obra, Deus contempla tudo o que fez e, diferentemente dos dias anteriores que eram apenas "bons", Ele declara que a criação com a humanidade era "muito boa", estabelecendo a perfeição original, a harmonia relacional e a paz (shalom) antes da Queda.'
      }
    ],
    conclusion: 'A narrativa da criação nos convoca à adoração reverente. Ela revela um Criador intencional, infinitamente poderoso e essencialmente bom, desmentindo qualquer ideia de que o universo seja fruto de um acaso cósmico cego. Nós, como portadores da imagem de Deus, não somos acidentes biológicos sem propósito; fomos criados com a vocação suprema de refletir o caráter santo de Deus, cuidar responsavelmente da Sua obra e viver em comunhão eterna e alegre com Aquele que nos formou do pó e nos soprou o fôlego da vida.'
  },
  {
    id: 'gen_2_1_25',
    bookId: 'GEN',
    chapter: 2,
    startVerse: 1,
    endVerse: 25,
    title: 'O Jardim do Éden e a Coroa da Criação',
    theme: 'A Intimidade Divina, o Propósito Humano e a Instituição do Casamento',
    introduction: 'Enquanto Gênesis 1 apresenta uma visão cósmica e panorâmica da criação, focando na transcendência e no poder de Elohim (o Deus Criador), Gênesis 2 oferece uma perspectiva íntima, relacional e detalhada, focando na imanência de Yahweh Elohim (o Senhor Deus da Aliança). Este capítulo não é um relato contraditório, mas um "zoom" no sexto dia, detalhando a criação da humanidade e o ambiente perfeito preparado para ela. Aqui vemos Deus não apenas como o Arquiteto do universo, mas como o Oleiro cuidadoso, o Jardineiro providente e o Pai amoroso que estabelece os fundamentos da vida humana: o trabalho, a lei, a responsabilidade moral e a comunhão matrimonial.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Sétimo Dia: O Descanso e a Santificação',
        description: 'A obra da criação é concluída, e Deus "descansa" no sétimo dia. Este descanso (shabat) não implica cansaço físico ou exaustão divina, mas a cessação da obra criadora porque ela estava perfeita e completa. Deus abençoa e santifica (separa como sagrado) o sétimo dia. Ao descansar, Deus toma o Seu lugar no trono do Seu templo cósmico, estabelecendo um ritmo sagrado para a humanidade. O sábado torna-se um lembrete perpétuo de que a vida não se resume à produção e ao trabalho, mas encontra seu ápice na adoração, na contemplação da obra de Deus e no desfrute da Sua presença.'
      },
      {
        verseRef: 'v. 4-17',
        title: 'O Sopro da Vida, o Jardim e o Mandato',
        description: 'O texto descreve a formação do homem (Adam) do pó da terra (adamah). Deus, como um oleiro, molda o corpo humano, mas ele só se torna "alma vivente" quando o próprio Deus sopra em suas narinas o fôlego da vida. Isso estabelece a dependência absoluta do homem em relação a Deus para a sua existência. Deus planta um jardim no Éden, um paraíso de delícias e provisão abundante, e coloca o homem lá com um propósito duplo: "lavrar e guardar" (trabalho e proteção). No centro do jardim estão a Árvore da Vida e a Árvore do Conhecimento do Bem e do Mal. Deus estabelece o primeiro limite moral: a proibição de comer da árvore do conhecimento, sob pena de morte. A verdadeira liberdade humana é exercida dentro dos limites da obediência à Palavra de Deus.'
      },
      {
        verseRef: 'v. 18-25',
        title: 'A Criação da Mulher e a Instituição do Casamento',
        description: 'Pela primeira vez, Deus declara que algo "não é bom": a solidão do homem. Para demonstrar a Adão sua necessidade, Deus traz os animais para serem nomeados, revelando que nenhum deles era uma "ajudadora idônea" (uma parceira correspondente e complementar). Deus então faz cair um sono profundo sobre Adão, retira uma de suas costelas (lado) e "edifica" a mulher. A mulher não é feita da cabeça para governar, nem dos pés para ser pisada, mas do lado para ser igual, debaixo do braço para ser protegida e perto do coração para ser amada. Ao vê-la, Adão profere a primeira poesia da história, reconhecendo-a como "osso dos meus ossos e carne da minha carne". O capítulo culmina com a instituição divina do casamento: deixar pai e mãe, unir-se à esposa e tornar-se uma só carne, vivendo em intimidade perfeita, nudez sem vergonha e total transparência.'
      }
    ],
    conclusion: 'Gênesis 2 nos lembra que fomos criados para a intimidade com Deus, para o trabalho com propósito e para relacionamentos profundos e complementares. A nossa verdadeira identidade e satisfação não são encontradas na autonomia ou na rebelião contra os limites divinos, mas na submissão amorosa ao nosso Criador, desfrutando da Sua provisão e cultivando a comunhão que Ele planejou para nós desde o princípio.'
  },
  {
    id: 'gen_3_1_24',
    bookId: 'GEN',
    chapter: 3,
    startVerse: 1,
    endVerse: 24,
    title: 'A Queda do Homem e a Promessa de Redenção',
    theme: 'A Anatomia da Tentação, as Consequências do Pecado e a Graça Soberana',
    introduction: 'Gênesis 3 é, indiscutivelmente, um dos capítulos mais trágicos e fundamentais de toda a Bíblia. Ele explica a condição atual do mundo: por que existe morte, sofrimento, vergonha, conflito relacional e separação de Deus. A narrativa descreve a invasão do mal no paraíso através da serpente, a rebelião deliberada da humanidade contra o seu Criador e a subsequente queda de toda a criação. No entanto, mesmo no momento mais sombrio da história humana, quando o juízo divino é pronunciado, a luz da graça brilha intensamente através da primeira promessa do evangelho (o Protoevangelho), revelando que Deus não abandonaria Sua criação à destruição.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Estratégia da Serpente e a Rebelião',
        description: 'A serpente, o mais astuto dos animais (representando Satanás), não ataca com força física, mas com engano sutil. Sua tática envolve três passos: primeiro, ela questiona a Palavra de Deus ("É assim que Deus disse?"); segundo, ela nega o juízo de Deus ("Certamente não morrereis"); terceiro, ela difama o caráter de Deus, sugerindo que Ele está retendo algo bom e que a desobediência trará divindade e autonomia ("sereis como Deus"). Eva, ao invés de rejeitar a mentira, dialoga com a tentação. Ela vê que o fruto é bom para comer (desejo da carne), agradável aos olhos (desejo dos olhos) e desejável para dar entendimento (soberba da vida). Ela come e dá a Adão, que estava com ela e falhou em proteger sua esposa e o jardim. A rebelião não foi apenas quebrar uma regra dietética, mas uma tentativa de usurpar o trono de Deus e definir por si mesmos o que é o bem e o mal.'
      },
      {
        verseRef: 'v. 7-13',
        title: 'A Vergonha, o Medo e a Fuga',
        description: 'As consequências do pecado são imediatas e devastadoras. Os olhos de ambos são abertos, não para a divindade prometida, mas para a sua própria nudez e vulnerabilidade. A inocência é perdida, substituída pela vergonha. Eles tentam cobrir-se com folhas de figueira (a primeira tentativa da religião humana de cobrir o pecado com obras próprias). Quando ouvem a voz do Senhor caminhando no jardim, a comunhão é quebrada pelo medo, e eles se escondem. Deus, em Sua graça, toma a iniciativa de buscá-los: "Onde estás?". Quando confrontados, em vez de arrependimento, há transferência de culpa: Adão culpa a mulher (e indiretamente a Deus que a deu), e a mulher culpa a serpente. O pecado destrói a harmonia com Deus, consigo mesmo e com o próximo.'
      },
      {
        verseRef: 'v. 14-24',
        title: 'O Juízo, o Protoevangelho e o Exílio',
        description: 'Deus pronuncia o juízo sobre os três envolvidos. A serpente é amaldiçoada. A mulher sofrerá dores de parto e conflito na submissão ao marido. A terra é amaldiçoada por causa do homem, e o trabalho, antes um prazer, torna-se árduo e cheio de suor, culminando na morte física ("ao pó tornarás"). Contudo, no meio da maldição da serpente (v. 15), Deus declara o Protoevangelho (o primeiro evangelho): Ele colocará inimizade entre a semente da serpente e a semente da mulher. A semente da mulher (Cristo) esmagará a cabeça da serpente (vitória total), embora a serpente lhe fira o calcanhar (o sofrimento na cruz). Deus então veste Adão e Eva com túnicas de peles, o que exigiu o primeiro derramamento de sangue e a morte de um animal inocente para cobrir a vergonha do pecador (um prenúncio do sacrifício de Cristo). Finalmente, eles são expulsos do Éden, e querubins com espadas flamejantes guardam o caminho da Árvore da Vida, um ato de misericórdia para impedir que vivessem eternamente em estado de pecado.'
      }
    ],
    conclusion: 'A Queda nos ensina a gravidade do pecado e a futilidade de tentar esconder nossas falhas de Deus. No entanto, a mensagem central de Gênesis 3 não é o desespero, mas a esperança redentora. Desde o momento em que o homem pecou, Deus já havia providenciado o plano de resgate. A túnica de peles aponta para a justiça de Cristo que nos cobre, e a promessa da Semente da Mulher garante que o mal não terá a última palavra. A história da Bíblia é a história de Deus buscando e restaurando a humanidade caída.'
  },
  {
    id: 'gen_4_1_16',
    bookId: 'GEN',
    chapter: 4,
    startVerse: 1,
    endVerse: 16,
    title: 'Caim e Abel: O Primeiro Homicídio',
    theme: 'A Propagação do Pecado, a Adoração Rejeitada e a Misericórdia Divina',
    introduction: 'Gênesis 4 demonstra a rapidez e a brutalidade com que o pecado, introduzido no capítulo anterior, se espalha e corrompe a humanidade. O que começou como uma rebelião contra Deus no Éden rapidamente se transforma em violência fratricida fora do jardim. A história de Caim e Abel não é apenas sobre o primeiro assassinato, mas fundamentalmente sobre a natureza da verdadeira adoração, a periculosidade da inveja não tratada e a responsabilidade que temos uns para com os outros. Ela revela que o coração não regenerado é capaz das maiores atrocidades, mesmo no contexto da adoração religiosa.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'As Ofertas e a Rejeição',
        description: 'Eva dá à luz Caim ("adquirido") e Abel ("sopro" ou "vaidade"). Caim torna-se agricultor e Abel, pastor de ovelhas. Ambos trazem ofertas ao Senhor. Abel traz os primogênitos do seu rebanho e a gordura (o melhor e o primeiro), demonstrando fé, reverência e um coração devotado a Deus (Hebreus 11:4). Caim traz do fruto da terra, mas a narrativa sugere uma oferta rotineira, sem o coração ou a excelência exigida. O Senhor atenta para Abel e sua oferta, mas rejeita a de Caim. A rejeição divina não foi arbitrária; Deus olha primeiro para o coração do ofertante antes de olhar para a oferta. A reação de Caim é de ira profunda e depressão ("descaiu-lhe o semblante"), revelando um orgulho ferido em vez de arrependimento.'
      },
      {
        verseRef: 'v. 6-8',
        title: 'O Alerta Divino e o Ato de Violência',
        description: 'Deus, em Sua graça, intervém e confronta Caim antes que ele cometa o crime. Ele faz perguntas para levar Caim à reflexão: "Por que te iraste?". Deus adverte Caim sobre o perigo iminente: "o pecado jaz à porta; o seu desejo será contra ti, mas a ti cumpre dominá-lo". O pecado é personificado como uma fera selvagem pronta para dar o bote. Caim tinha a escolha de dominar seus impulsos ou ser devorado por eles. Tragicamente, Caim ignora o aviso divino. Ele convida seu irmão para o campo e, longe dos olhos dos pais, levanta-se contra Abel e o mata. A inveja religiosa culmina no primeiro derramamento de sangue humano.'
      },
      {
        verseRef: 'v. 9-16',
        title: 'O Confronto, o Castigo e a Marca da Graça',
        description: 'Deus confronta Caim com a pergunta: "Onde está Abel, teu irmão?". A resposta de Caim é o cúmulo da insolência e da negação da responsabilidade humana: "Não sei; sou eu o guardador do meu irmão?". Deus declara que a voz do sangue de Abel clama da terra por justiça. O castigo de Caim é severo: a terra não lhe dará mais sua força, e ele será fugitivo e errante pela terra. Caim reclama que o castigo é maior do que ele pode suportar e teme ser morto por outros. Mesmo diante de um assassino impenitente, Deus demonstra misericórdia: Ele coloca um "sinal" (uma marca de proteção) em Caim para que ninguém o mate, garantindo a vingança divina sete vezes maior contra quem o ferisse. Caim sai da presença do Senhor e vai habitar na terra de Node (Fuga/Exílio).'
      }
    ],
    conclusion: 'A história de Caim e Abel é um alerta solene sobre os perigos da religiosidade vazia e da inveja. Ela nos ensina que Deus não se impressiona com rituais externos se o nosso coração estiver distante dEle e cheio de amargura contra o nosso próximo. Além disso, somos lembrados de que somos, sim, os "guardadores dos nossos irmãos". O pecado sempre busca nos dominar, mas através da graça de Deus e do poder do Espírito Santo, somos chamados a dominá-lo antes que ele destrua nossas vidas e as daqueles ao nosso redor.'
  },
  {
    id: 'gen_6_5_22',
    bookId: 'GEN',
    chapter: 6,
    startVerse: 5,
    endVerse: 22,
    title: 'A Corrupção da Humanidade e o Chamado de Noé',
    theme: 'O Juízo Divino sobre o Pecado e a Graça Preservadora',
    introduction: 'Gênesis 6 descreve o ponto mais baixo da degradação moral da humanidade antediluviana. O pecado, que começou com uma mordida em um fruto e escalou para o assassinato de um irmão, agora atingiu proporções globais e epidêmicas. A terra estava cheia de violência e corrupção total. Neste cenário de trevas absolutas, o texto revela o coração de Deus: Ele não é um juiz apático, mas um Criador que se entristece profundamente com a ruína de Sua obra. No entanto, em meio à declaração de um juízo universal (o Dilúvio), brilha a luz da graça soberana através de um homem: Noé. Esta passagem contrasta a depravação humana com a justiça divina e a salvação providenciada para aqueles que andam com Deus.',
    points: [
      {
        verseRef: 'v. 5-8',
        title: 'A Depravação Total e a Tristeza de Deus',
        description: 'O diagnóstico divino sobre a humanidade é devastador: "a maldade do homem se multiplicara sobre a terra e que toda a imaginação dos pensamentos de seu coração era só má continuamente". Não havia áreas neutras; o pecado havia infectado a mente, a vontade e as emoções humanas de forma contínua e exclusiva. A reação de Deus é descrita com profundo antropopatismo (atribuindo emoções humanas a Deus): Ele "arrependeu-se" de ter feito o homem e "pesou-lhe em seu coração". Isso não indica que Deus cometeu um erro, mas expressa Sua dor e tristeza infinita diante da rebelião de Suas criaturas. Deus decreta a destruição de todos os seres vivos. Contudo, o versículo 8 é o pivô da esperança: "Noé, porém, achou graça aos olhos do Senhor". A salvação de Noé não começou com seus méritos, mas com a graça imerecida de Deus.'
      },
      {
        verseRef: 'v. 9-13',
        title: 'O Caráter de Noé e o Decreto do Fim',
        description: 'O texto descreve o caráter de Noé como resultado da graça que ele encontrou: ele era "varão justo e perfeito em suas gerações" e "andava com Deus". Em uma sociedade dominada pela violência e corrupção, Noé destacava-se pela sua integridade e comunhão íntima com o Criador, assim como seu bisavô Enoque. Deus confia a Noé o Seu conselho secreto: "O fim de toda a carne é chegado perante mim; porque a terra está cheia de violência... eis que os desfarei com a terra". O juízo do Dilúvio não é um ato de crueldade caprichosa, mas uma intervenção cirúrgica e necessária de um Deus santo para purificar uma terra irremediavelmente corrompida e preservar a linhagem da promessa.'
      },
      {
        verseRef: 'v. 14-22',
        title: 'A Arca da Salvação e a Obediência da Fé',
        description: 'Deus dá a Noé instruções precisas e detalhadas para a construção da arca (uma enorme embarcação de madeira de gofer, com compartimentos, betumada por dentro e por fora, com dimensões específicas de comprimento, largura e altura). A arca não tinha leme nem velas; seu destino seria controlado inteiramente por Deus. Deus estabelece Sua aliança com Noé, garantindo a salvação de sua família e de casais de todos os animais para repovoar a terra. A resposta de Noé é o epítome da fé obediente (Hebreus 11:7): "Assim fez Noé; consoante a tudo o que Deus lhe mandou, assim o fez". Ele construiu uma arca gigante em terra seca, suportando a zombaria de sua geração por décadas, movido apenas pelo temor a Deus e pela confiança em Sua Palavra.'
      }
    ],
    conclusion: 'A história do Dilúvio é um lembrete solene de que Deus é santo e não deixará o pecado impune para sempre. A corrupção contínua atrai o juízo divino. No entanto, ela é também uma das mais belas ilustrações da salvação. Assim como a arca foi o único refúgio seguro contra as águas do juízo para Noé e sua família, Jesus Cristo é a nossa Arca de salvação. Todos os que estão "em Cristo" pela fé estão seguros do juízo vindouro. A obediência perseverante de Noé nos desafia a andar com Deus e a obedecer à Sua Palavra, mesmo quando o mundo inteiro caminha na direção oposta.'
  }
];

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

// Replace the first 5 pericopes
for (const expanded of expandedPericopes) {
  const index = arr.findIndex(p => p.id === expanded.id);
  if (index !== -1) {
    arr[index] = expanded;
  }
}

// Write back
const newArrayContent = JSON.stringify(arr, null, 2);
const newContent = content.substring(0, startIndex) + newArrayContent + content.substring(endIndex + 1);
fs.writeFileSync('data/pericopes_temp.ts', newContent, 'utf8');
console.log('Expanded the first 5 Genesis pericopes.');
