const fs = require('fs');

const expandedPericopes = [
  {
    id: 'deu_10_12_22',
    bookId: 'DEU',
    chapter: 10,
    startVerse: 12,
    endVerse: 22,
    title: 'O Que Deus Exige',
    theme: 'A Essência da Religião, o Temor, o Amor e a Circuncisão do Coração',
    introduction: 'Após relembrar o terrível episódio do bezerro de ouro e a quebra das primeiras tábuas da Lei, Moisés chega ao cerne da sua mensagem em Deuteronômio 10. Ele resume toda a complexidade da Lei em uma pergunta simples e profunda: "O que o Senhor teu Deus pede de ti?". A resposta não é uma lista exaustiva de rituais, mas uma atitude do coração. Este texto é o equivalente no Antigo Testamento ao "Grande Mandamento" e a Miqueias 6:8, revelando que Deus não quer apenas obediência externa, mas um relacionamento de temor, amor e serviço integral.',
    points: [
      {
        verseRef: 'v. 12-13',
        title: 'Os Cinco Verbos da Devoção',
        description: 'Moisés resume o dever de Israel em cinco verbos inseparáveis: Temer (reverência profunda), Andar nos Seus caminhos (obediência prática), Amar (afeição e lealdade), Servir de todo o coração e alma (dedicação total), e Guardar os mandamentos (fidelidade à aliança). O temor e o amor não são contraditórios na Bíblia; o temor nos impede de pecar contra Deus, e o amor nos impulsiona a agradá-Lo. Moisés acrescenta que tudo isso é "para o teu bem". Os mandamentos de Deus não são restrições arbitrárias, mas o manual do Criador para a nossa felicidade e prosperidade.'
      },
      {
        verseRef: 'v. 14-16',
        title: 'A Soberania de Deus e a Circuncisão do Coração',
        description: 'Moisés exalta a grandeza de Deus: "Eis que os céus e os céus dos céus são do Senhor... a terra e tudo o que nela há". O Criador do universo, no entanto, escolheu amar os patriarcas e a sua descendência. Diante dessa graça imensa, a resposta exigida é radical: "Circuncidai, pois, o prepúcio do vosso coração, e não mais endureçais a vossa cerviz". A circuncisão física era apenas um sinal externo; Deus exige a remoção da obstinação e do orgulho interno. A verdadeira religião é uma cirurgia no coração.'
      },
      {
        verseRef: 'v. 17-22',
        title: 'O Deus Grande e o Cuidado com o Estrangeiro',
        description: 'O texto descreve Deus como o "Deus dos deuses... o Deus grande, poderoso e terrível, que não faz acepção de pessoas". Mas esse Deus transcendente é também imanente e compassivo: Ele "faz justiça ao órfão e à viúva, e ama o estrangeiro". A teologia deve se transformar em ética. Porque Deus ama o vulnerável, Israel deve amar o estrangeiro, lembrando-se de que eles também foram estrangeiros no Egito. A adoração a Deus (v. 20-21) é inseparável da justiça social.'
      }
    ],
    conclusion: 'A essência do que Deus exige não mudou. A religião verdadeira não é um fardo de regras, mas uma resposta de amor à eleição graciosa de Deus. A "circuncisão do coração" (a remoção da obstinação) é algo que, em última análise, só o Espírito Santo pode fazer (Romanos 2:29; Deuteronômio 30:6). Quando o nosso coração é transformado pelo amor de Deus, a obediência aos Seus mandamentos deixa de ser uma obrigação pesada e passa a ser o nosso maior prazer, refletindo o caráter justo e compassivo do nosso Criador no trato com o nosso próximo.'
  },
  {
    id: 'deu_11_13_21',
    bookId: 'DEU',
    chapter: 11,
    startVerse: 13,
    endVerse: 21,
    title: 'A Bênção da Chuva e a Palavra no Coração',
    theme: 'A Dependência Diária, a Palavra no Lar e a Promessa de Prosperidade',
    introduction: 'A terra de Canaã era muito diferente do Egito. No Egito, a agricultura dependia da irrigação mecânica a partir do rio Nilo (o esforço humano). Em Canaã, a agricultura dependeria inteiramente da chuva que cai do céu (a providência divina). Deuteronômio 11:13-21 atrela essa provisão climática diretamente à fidelidade espiritual de Israel. Este texto, que forma a segunda parte do famoso "Shemá" judaico, enfatiza que a Palavra de Deus deve permear cada aspecto da vida familiar para garantir a bênção contínua na terra.',
    points: [
      {
        verseRef: 'v. 13-15',
        title: 'A Chuva Temporã e Serôdia como Resposta à Obediência',
        description: 'Deus promete que, se Israel amar e servir ao Senhor de todo o coração, Ele dará a chuva no tempo certo: a "temporã" (chuvas de outono para o plantio) e a "serôdia" (chuvas de primavera para amadurecer a colheita). O resultado será abundância de cereal, mosto (vinho) e azeite, além de pasto para o gado. A economia de Israel não dependeria apenas de técnicas agrícolas, mas da obediência à aliança. A natureza responderia à fidelidade do povo.'
      },
      {
        verseRef: 'v. 16-17',
        title: 'O Perigo da Idolatria e o Céu Fechado',
        description: 'O aviso é severo: "Guardai-vos, que o vosso coração não se engane, e vos desvieis, e sirvais a outros deuses". A tentação em Canaã seria adorar Baal, o falso deus cananeu da tempestade e da fertilidade, para garantir as colheitas. Se fizessem isso, a ira do Senhor se acenderia, Ele fecharia os céus, não haveria chuva, a terra não daria o seu fruto, e eles pereceriam. A idolatria é um suicídio espiritual e físico.'
      },
      {
        verseRef: 'v. 18-21',
        title: 'A Palavra no Coração, nas Mãos e nas Portas',
        description: 'Para evitar a idolatria, a solução é a imersão total na Palavra de Deus. As palavras devem ser postas "no vosso coração e na vossa alma". Elas devem ser atadas como sinal nas mãos (ações) e como frontais entre os olhos (pensamentos). O ensino deve ser constante: assentado em casa, andando pelo caminho, ao deitar e ao levantar. Devem ser escritas nos umbrais das portas (o lar como santuário). O resultado dessa imersão é a longevidade: "para que se multipliquem os vossos dias... como os dias dos céus sobre a terra".'
      }
    ],
    conclusion: 'A lição de Canaã é que a nossa sobrevivência depende da graça que vem "de cima". Deus usa as circunstâncias naturais (como a chuva) para nos ensinar dependência espiritual. O antídoto contra a idolatria e a seca espiritual é a imersão constante na Palavra de Deus. A fé não deve ser confinada ao templo; ela deve ser o assunto principal nas nossas casas, ensinada aos nossos filhos e visível em nossas ações e lares. Quando a Palavra governa o lar, experimentamos um pedaço do céu na terra, e a provisão de Deus flui abundantemente.'
  },
  {
    id: 'deu_15_1_11',
    bookId: 'DEU',
    chapter: 15,
    startVerse: 1,
    endVerse: 11,
    title: 'O Ano da Remissão (Cancelamento de Dívidas)',
    theme: 'A Justiça Econômica, a Generosidade e a Erradicação da Pobreza',
    introduction: 'A economia do Reino de Deus é radicalmente diferente da economia do mundo. Em Deuteronômio 15, Deus institui o "Ano da Remissão" (Shemitá), que ocorria a cada sete anos. Durante este ano, não apenas a terra descansava, mas todas as dívidas entre israelitas deveriam ser perdoadas. Esta lei impedia que a pobreza se tornasse um ciclo perpétuo e que uma classe de super-ricos oprimisse os vulneráveis. O texto é um apelo apaixonado à generosidade de coração aberto, refletindo a graça que Israel recebeu ao ser liberto das dívidas da escravidão no Egito.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Cancelamento das Dívidas e o Ideal de Não Haver Pobres',
        description: 'A lei é clara: "Ao fim de cada sete anos farás remissão". Todo credor deveria perdoar a dívida do seu próximo e irmão israelita (a regra não se aplicava ao estrangeiro comercial). O versículo 4 apresenta o ideal divino: "Para que entre ti não haja pobre". A bênção de Deus sobre a terra seria tão grande que a pobreza estrutural seria erradicada, desde que o povo obedecesse a essa lei de redistribuição e perdão.'
      },
      {
        verseRef: 'v. 7-8',
        title: 'A Proibição do Coração Duro e da Mão Fechada',
        description: 'Deus conhece a natureza humana e sabe que a lei da remissão poderia gerar avareza. Se houvesse um pobre na cidade, o mandamento é: "não endurecerás o teu coração, nem fecharás a tua mão a teu irmão que for pobre". Em vez disso, o israelita deveria "abrir-lhe de todo a mão" e emprestar-lhe o suficiente para a sua necessidade. A generosidade não é opcional; é um dever moral.'
      },
      {
        verseRef: 'v. 9-11',
        title: 'O Perigo do Cálculo Egoísta e a Promessa de Bênção',
        description: 'O texto adverte contra um pensamento maligno: recusar o empréstimo a um pobre só porque o sétimo ano (o ano do perdão da dívida) está próximo. Deus vê essa atitude como pecado e diz que o pobre clamará ao Senhor contra o avarento. A doação deve ser feita sem tristeza no coração, com a promessa de que "por isso te abençoará o Senhor teu Deus em toda a tua obra". O versículo 11 reconhece a realidade da queda: "Pois nunca deixará de haver pobre na terra", e usa isso como o motivo exato para o mandamento contínuo de abrir a mão ao necessitado.'
      }
    ],
    conclusion: 'O Ano da Remissão nos desafia a ver o dinheiro e as posses através das lentes da graça. Deus nos perdoou uma dívida impagável (o pecado), e Ele espera que sejamos generosos com os nossos irmãos. Jesus ecoou este princípio ao ensinar a orar: "Perdoa as nossas dívidas, assim como nós perdoamos aos nossos devedores". Embora Jesus tenha dito que "sempre tereis pobres convosco" (citando o v. 11), isso não é uma desculpa para a inação, mas o chamado constante da Igreja para ser as mãos abertas de Deus, aliviando o sofrimento e praticando a justiça econômica.'
  },
  {
    id: 'deu_16_13_17',
    bookId: 'DEU',
    chapter: 16,
    startVerse: 13,
    endVerse: 17,
    title: 'A Festa dos Tabernáculos e a Alegria',
    theme: 'A Celebração da Colheita, a Alegria Inclusiva e a Gratidão Prática',
    introduction: 'Deuteronômio 16 revisa as três grandes festas de peregrinação de Israel (Páscoa, Semanas e Tabernáculos). Os versículos 13 a 17 focam na Festa dos Tabernáculos (Sukkot), a celebração final do ano agrícola. O que se destaca nesta passagem é o mandamento explícito e repetido para se alegrar. A religião bíblica não é um estoicismo sombrio; é uma celebração efusiva da bondade de Deus. Esta alegria, no entanto, não é egoísta, mas profundamente comunitária, exigindo a inclusão dos marginalizados e a apresentação de ofertas voluntárias.',
    points: [
      {
        verseRef: 'v. 13-14',
        title: 'A Alegria Inclusiva (O Órfão, a Viúva e o Estrangeiro)',
        description: 'A Festa dos Tabernáculos durava sete dias, celebrada após a colheita da eira (trigo) e do lagar (vinho). O mandamento central é: "E na tua festa alegrar-te-ás". Mas a alegria bíblica nunca é solitária. O israelita deveria se alegrar junto com seu filho, filha, servo, serva, e crucialmente, com "o levita, o estrangeiro, o órfão e a viúva". A verdadeira celebração da provisão de Deus exige que aqueles que não têm terras ou recursos sejam convidados para a mesa da abundância.'
      },
      {
        verseRef: 'v. 15',
        title: 'A Celebração no Lugar Escolhido e a Bênção Total',
        description: 'A festa deveria ser celebrada "no lugar que o Senhor escolher" (mais tarde, Jerusalém). O motivo da alegria é claro: "porque o Senhor teu Deus te abençoará em toda a tua colheita, e em todo o trabalho das tuas mãos". A alegria não é baseada nas circunstâncias, mas na fidelidade do Abençoador. O versículo termina com uma ordem enfática: "por isso te alegrarás certamente" (ou "serás totalmente alegre"). A tristeza e a murmuração eram proibidas durante esta festa.'
      },
      {
        verseRef: 'v. 16-17',
        title: 'A Proibição de Aparecer Vazio perante o Senhor',
        description: 'Moisés resume a obrigação das três festas anuais: todo homem deve comparecer perante o Senhor. A regra de ouro da adoração é estabelecida: "ninguém aparecerá vazio perante o Senhor". A adoração exige sacrifício. No entanto, Deus não exige o que a pessoa não tem. A oferta deve ser proporcional: "Cada um oferecerá na proporção em que possa dar, segundo a bênção que o Senhor teu Deus lhe houver concedido". A gratidão dita a generosidade.'
      }
    ],
    conclusion: 'A Festa dos Tabernáculos nos ensina que a alegria é um mandamento, não apenas uma emoção. É a resposta apropriada de um coração que reconhece que toda a sua provisão vem de Deus. A verdadeira alegria cristã é sempre inclusiva; ela não se isola na abundância, mas convida o vulnerável para a comunhão. Além disso, a gratidão genuína sempre se expressa em generosidade prática. Não podemos nos apresentar diante de um Deus tão rico em graça com as mãos vazias e o coração mesquinho. A nossa oferta a Deus deve refletir a medida da bênção que Ele derramou sobre nós.'
  },
  {
    id: 'deu_17_14_20',
    bookId: 'DEU',
    chapter: 17,
    startVerse: 14,
    endVerse: 20,
    title: 'A Lei do Rei',
    theme: 'A Liderança Submissa à Palavra, a Rejeição do Orgulho e o Rei Ideal',
    introduction: 'Séculos antes de Israel pedir um rei (nos dias de Samuel), Deus já havia previsto essa demanda e estabelecido a "Constituição" da monarquia israelita em Deuteronômio 17. Ao contrário dos reis das nações vizinhas, que eram considerados deuses e governavam com poder absoluto e ostentação, o rei de Israel deveria ser radicalmente diferente. Ele seria um súdito da Lei de Deus. Este texto estabelece limites estritos para o poder real e exige que o líder seja um estudante vitalício das Escrituras, apontando profeticamente para o Rei perfeito, Jesus Cristo.',
    points: [
      {
        verseRef: 'v. 14-15',
        title: 'A Escolha Divina e a Proibição do Rei Estrangeiro',
        description: 'Quando Israel entrasse na terra e desejasse um rei "como todas as nações", eles não poderiam escolher qualquer um. A primeira regra é a soberania divina: "porás certamente sobre ti como rei aquele que escolher o Senhor teu Deus". O rei não é a fonte da autoridade, mas um delegado de Yahweh. A segunda regra é a identidade: o rei deve ser "dentre teus irmãos"; é estritamente proibido colocar um estrangeiro no trono, garantindo que o rei compartilhe a mesma aliança e fé do povo.'
      },
      {
        verseRef: 'v. 16-17',
        title: 'As Três Proibições (Cavalos, Mulheres e Ouro)',
        description: 'Deus impõe três restrições severas ao rei para evitar a corrupção do poder. 1) Ele não deve multiplicar para si cavalos (nem voltar ao Egito para comprá-los), proibindo a confiança no poderio militar carnal. 2) Ele não deve multiplicar para si mulheres, "para que o seu coração não se desvie", proibindo alianças políticas através de casamentos pagãos (o pecado que destruiu Salomão). 3) Ele não deve multiplicar muita prata e ouro, proibindo a ganância e a opressão econômica do povo para sustentar o luxo da corte.'
      },
      {
        verseRef: 'v. 18-20',
        title: 'O Rei Copista e a Submissão à Palavra',
        description: 'O dever principal do rei não é liderar exércitos, mas estudar a Bíblia. Ao sentar no trono, ele deve escrever para si uma cópia da Lei (Deuteronômio) em um livro. Ele deve ler esse livro "todos os dias da sua vida". O propósito é triplo: aprender a temer o Senhor, guardar as palavras da lei, e "para que o seu coração não se exalte sobre os seus irmãos". O rei de Israel não está acima da lei; ele está debaixo dela. A submissão à Palavra é o que garante um reinado longo e justo.'
      }
    ],
    conclusion: 'A "Lei do Rei" é um manual atemporal sobre liderança espiritual. Deus proíbe a confiança no poder militar, nas alianças mundanas e na segurança financeira, pois essas coisas desviam o coração do Senhor. A maior proteção de um líder contra o orgulho e a tirania é a submissão diária à Palavra de Deus. A história de Israel mostra que a maioria dos reis falhou miseravelmente neste teste (especialmente Salomão). O único Rei que cumpriu perfeitamente esta lei foi Jesus Cristo, que não veio montado em cavalos de guerra, mas em um jumentinho, e que governou não pela força, mas pela obediência absoluta à vontade do Pai.'
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
console.log(`Expanded ${replacedCount} pericopes (Batch 11.1).`);
