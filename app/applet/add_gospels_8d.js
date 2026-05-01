const fs = require('fs');

const newPericopes = [
  {
    id: 'jhn_1_29_34',
    bookId: 'JHN',
    chapter: 1,
    startVerse: 29,
    endVerse: 34,
    title: 'João Batista e o Cordeiro de Deus',
    theme: 'A Identidade de Cristo e a Remoção do Pecado',
    introduction: `O Evangelho de João não relata o batismo de Jesus diretamente, mas apresenta o testemunho teológico de João Batista no dia seguinte. Ao ver Jesus se aproximando, João Batista faz a declaração mais profunda de todo o Antigo e Novo Testamento sobre a missão do Messias. Ele não O apresenta como um rei conquistador ou um grande mestre moral, mas como o sacrifício definitivo que resolveria o problema fundamental da humanidade: o pecado.`,
    points: [
      {
        verseRef: 'v. 29',
        title: 'O Cordeiro que Tira o Pecado do Mundo',
        description: `A Provisão Definitiva. "Eis o Cordeiro de Deus, que tira o pecado do mundo". Esta frase resume toda a tipologia do Antigo Testamento: o cordeiro do sacrifício de Isaque (Gênesis 22), o cordeiro da Páscoa (Êxodo 12) e o cordeiro mudo levado ao matadouro (Isaías 53). Jesus é o Cordeiro providenciado pelo próprio Deus. A Sua missão não é apenas cobrir temporariamente o pecado, mas "tirar" (levantar e carregar para longe) a culpa do mundo inteiro. O pecado é o problema; o Cordeiro é a única solução.`
      },
      {
        verseRef: 'v. 30-31',
        title: 'A Preexistência e a Revelação de Cristo',
        description: `Aquele que é Antes de Mim. João Batista, embora fosse seis meses mais velho que Jesus fisicamente, declara a preexistência eterna de Cristo (v. 30): "Após mim vem um homem que foi antes de mim, porque já era primeiro do que eu". João Batista reconhece que o seu único propósito era preparar o caminho e revelar Jesus a Israel (v. 31). O verdadeiro ministério cristão sempre aponta para longe de si mesmo e direciona todos os holofotes para a supremacia de Cristo.`
      },
      {
        verseRef: 'v. 32-34',
        title: 'O Batismo com o Espírito e o Filho de Deus',
        description: `O Sinal Divino. João testifica como reconheceu o Messias (v. 32-33): Aquele que o enviou a batizar com água lhe disse que sobre quem ele visse descer e repousar o Espírito, esse seria o que batiza com o Espírito Santo. João viu o Espírito descer do céu como uma pomba e repousar sobre Jesus. A água purifica exteriormente, mas Jesus batiza com o Espírito Santo, transformando interiormente. Com base nesta revelação, João Batista conclui com o seu testemunho final (v. 34): "E eu vi, e tenho testificado que este é o Filho de Deus".`
      }
    ],
    conclusion: `João 1:29-34 é o resumo do evangelho. A religião humana tenta lidar com a culpa através de rituais, boas obras e moralidade, mas apenas o Cordeiro de Deus pode tirar o pecado. A nossa resposta diária deve ser a mesma de João Batista: olhar para Jesus, reconhecer a Sua divindade, confiar no Seu sacrifício e apontar os outros para Ele. Não há salvação em nenhum outro nome, pois apenas o Cordeiro foi imolado por nós.`
  },
  {
    id: 'jhn_12_1_8',
    bookId: 'JHN',
    chapter: 12,
    startVerse: 1,
    endVerse: 8,
    title: 'A Unção em Betânia por Maria',
    theme: 'A Adoração Extravagante e a Falsa Piedade',
    introduction: `Seis dias antes da Páscoa, Jesus participa de um jantar em Betânia na casa de Lázaro, a quem Ele havia ressuscitado. Durante a refeição, Maria realiza um ato de adoração que choca todos os presentes pela sua extravagância e quebra de protocolo. A cena contrasta o amor devotado e sacrificial de Maria com a ganância hipócrita de Judas Iscariotes, revelando que a verdadeira adoração a Cristo não calcula custos nem se importa com a opinião pública.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Adoração Extravagante e o Perfume Derramado',
        description: `O Preço do Amor. Enquanto Marta servia e Lázaro estava à mesa, Maria toma uma libra de unguento de nardo puro, de muito preço (v. 3). Ela unge os pés de Jesus e os enxuga com os seus próprios cabelos. O perfume valia 300 denários (quase um ano de salário de um trabalhador). Soltar os cabelos em público era considerado vergonhoso para uma mulher judia. Mas Maria esquece a sua dignidade e o valor do dinheiro; ela derrama o seu bem mais precioso aos pés do Salvador. "E a casa encheu-se do cheiro do unguento". A verdadeira adoração perfuma todo o ambiente.`
      },
      {
        verseRef: 'v. 4-6',
        title: 'A Falsa Piedade e a Ganância de Judas',
        description: `O Coração do Traidor. Judas Iscariotes reage com indignação moralista (v. 5): "Por que não se vendeu este unguento por trezentos dinheiros e não se deu aos pobres?". Aos olhos humanos, a crítica de Judas parecia nobre e pragmática; parecia um desperdício. Mas João, escrevendo anos depois, revela o verdadeiro motivo (v. 6): "Ora, ele disse isto, não pelo cuidado que tivesse dos pobres, mas porque era ladrão e tinha a bolsa, e tirava o que ali se lançava". Judas conhecia o preço de tudo, mas não conhecia o valor de Cristo.`
      },
      {
        verseRef: 'v. 7-8',
        title: 'A Defesa de Jesus e a Preparação para a Morte',
        description: `O Valor Infinito do Salvador. Jesus intervém imediatamente para defender Maria (v. 7): "Deixai-a; para o dia da minha sepultura guardou isto". Jesus revela que o ato de Maria tinha um significado profético que talvez nem ela compreendesse totalmente: ela estava ungindo o Seu corpo antecipadamente para o sepultamento. Jesus conclui (v. 8): "Porque os pobres sempre os tendes convosco, mas a mim nem sempre me tendes". Jesus não está desprezando os pobres, mas estabelecendo a prioridade suprema: a adoração ao Filho de Deus, que estava prestes a dar a Sua vida, tem precedência sobre qualquer outra causa.`
      }
    ],
    conclusion: `João 12:1-8 nos desafia a examinar a qualidade da nossa adoração. Somos como Maria, dispostos a derramar o nosso melhor (tempo, talentos, recursos, reputação) aos pés de Jesus sem calcular o custo? Ou somos como Judas, criticando a devoção dos outros e usando a religião para esconder o nosso próprio egoísmo? Aos olhos do mundo, a adoração extravagante a Cristo sempre parecerá um desperdício. Mas aos olhos de Jesus, é o aroma mais doce e a única resposta adequada ao Seu amor sacrificial.`
  },
  {
    id: 'jhn_18_33_38',
    bookId: 'JHN',
    chapter: 18,
    startVerse: 33,
    endVerse: 38,
    title: 'Jesus Diante de Pilatos',
    theme: 'A Natureza do Reino e a Testemunha da Verdade',
    introduction: `O julgamento de Jesus atinge o seu clímax político quando Ele é levado perante Pôncio Pilatos, o governador romano. Os líderes judeus acusam Jesus de traição contra Roma, alegando que Ele se faz rei. O diálogo privado entre Jesus e Pilatos no pretório é um dos confrontos mais fascinantes da história: o representante do maior império terreno frente a frente com o Rei do Universo. A passagem define a natureza espiritual do Reino de Deus e a cegueira do ceticismo humano.`,
    points: [
      {
        verseRef: 'v. 33-35',
        title: 'O Interrogatório e a Identidade do Rei',
        description: `Tu és o Rei dos Judeus? Pilatos chama Jesus e faz a pergunta central do julgamento político (v. 33). Jesus responde com outra pergunta, sondando o coração de Pilatos (v. 34): "Tu dizes isso de ti mesmo, ou disseram-to outros de mim?". Jesus quer saber se Pilatos está fazendo uma pergunta jurídica romana ou se há uma busca pessoal. Pilatos, com desdém, responde (v. 35): "Porventura sou eu judeu? A tua nação e os principais dos sacerdotes entregaram-te a mim. Que fizeste?". Pilatos tenta manter o controle, ignorando que ele é quem está sendo julgado pela Verdade.`
      },
      {
        verseRef: 'v. 36',
        title: 'A Natureza do Reino: Não Deste Mundo',
        description: `O Reino Espiritual. Jesus responde à acusação política definindo o Seu reino (v. 36): "O meu reino não é deste mundo; se o meu reino fosse deste mundo, pelejariam os meus servos, para que eu não fosse entregue aos judeus; mas agora o meu reino não é daqui". Jesus não nega ser Rei, mas nega ser uma ameaça militar a Roma. O Seu reino não se origina no mundo, não opera pelos métodos do mundo (violência e coerção) e não tem os objetivos do mundo. É um reino espiritual que transforma corações, não fronteiras geográficas.`
      },
      {
        verseRef: 'v. 37-38',
        title: 'O Rei da Verdade e o Ceticismo de Pilatos',
        description: `O Que é a Verdade? Pilatos conclui (v. 37): "Logo tu és rei?". Jesus confirma e declara a Sua missão: "Tu dizes que eu sou rei. Eu para isso nasci, e para isso vim ao mundo, a fim de dar testemunho da verdade. Todo aquele que é da verdade ouve a minha voz". O Reino de Jesus avança através da proclamação da verdade. Pilatos, o político cínico, responde com a famosa pergunta do relativismo (v. 38): "Que é a verdade?". Ele faz a pergunta, mas vira as costas antes de ouvir a resposta, saindo para declarar Jesus inocente. Ele estava diante da Verdade encarnada, mas estava cego para vê-la.`
      }
    ],
    conclusion: `João 18:33-38 nos lembra que o Reino de Cristo não pode ser avançado por meios políticos ou força humana. A igreja perde o seu poder quando tenta lutar com as armas "deste mundo". A nossa única arma é a Verdade do evangelho. Além disso, a tragédia de Pilatos é um aviso para a nossa geração relativista: podemos estar frente a frente com Jesus, ouvir as Suas palavras, e ainda assim virar as costas perguntando cinicamente "o que é a verdade?", perdendo a única oportunidade de salvação.`
  },
  {
    id: 'jhn_19_28_30',
    bookId: 'JHN',
    chapter: 19,
    startVerse: 28,
    endVerse: 30,
    title: 'A Morte de Jesus: Está Consumado',
    theme: 'O Cumprimento da Escritura e a Obra Completa da Redenção',
    introduction: `Os momentos finais de Jesus na cruz, registrados por João, não são o retrato de uma vítima derrotada, mas de um Vencedor soberano que está no controle absoluto do Seu próprio destino. Cada detalhe, até o último suspiro, cumpre o plano eterno de Deus. O grito final de Jesus não é um lamento de desespero, mas a maior declaração de vitória já proferida na história do universo, garantindo que a obra da nossa salvação está perfeita e eternamente concluída.`,
    points: [
      {
        verseRef: 'v. 28',
        title: 'A Sede do Salvador e o Cumprimento da Escritura',
        description: `A Humanidade e a Profecia. "Depois, sabendo Jesus que já todas as coisas estavam terminadas, para que a Escritura se cumprisse, disse: Tenho sede". Jesus suportou a agonia excruciante da crucificação em silêncio, mas agora, consciente de que a obra expiatória estava feita, Ele expressa uma necessidade física real. A Sua sede prova a Sua verdadeira humanidade (Ele sofreu fisicamente). João destaca que Ele disse isso "para que a Escritura se cumprisse" (Salmo 69:21). Até no Seu sofrimento mais profundo, a mente de Cristo estava focada em cumprir a Palavra de Deus.`
      },
      {
        verseRef: 'v. 29-30a',
        title: 'O Grito de Vitória: Tetelestai',
        description: `A Dívida Paga. Deram-lhe vinagre em uma esponja (v. 29). "E, quando Jesus tomou o vinagre, disse: Está consumado" (v. 30). No grego, é uma única palavra: "Tetelestai". Era um termo comercial usado em recibos para dizer "totalmente pago"; um termo militar para "missão cumprida"; e um termo sacerdotal para um sacrifício "perfeito". Jesus não disse "Estou acabado", mas "A obra está terminada". A justiça de Deus foi satisfeita, o poder do pecado foi quebrado, a dívida da humanidade foi paga integralmente. Não há nada que possamos adicionar à nossa salvação.`
      },
      {
        verseRef: 'v. 30b',
        title: 'A Entrega Voluntária do Espírito',
        description: `A Soberania na Morte. Após o grito de vitória, João registra (v. 30): "E, inclinando a cabeça, entregou o espírito". Jesus não foi morto contra a Sua vontade; a morte não O venceu. Como Ele mesmo havia dito (João 10:18): "Ninguém ma tira de mim, mas eu de mim mesmo a dou". Ele escolheu o exato momento de morrer. Ele inclinou a cabeça (uma palavra usada para reclinar a cabeça em um travesseiro para descansar) e entregou o Seu espírito ao Pai. A obra do trabalho estava feita; agora era o momento do descanso sabático no túmulo.`
      }
    ],
    conclusion: `João 19:28-30 é a âncora da nossa fé. A palavra "Tetelestai" destrói qualquer tentativa de salvação por obras. Se a obra está consumada, não podemos acrescentar o nosso próprio esforço para sermos aceitos por Deus; podemos apenas receber o presente da graça com as mãos vazias da fé. Quando o diabo nos acusar dos nossos pecados, ou quando a nossa própria consciência nos condenar, a nossa única e suficiente defesa é o grito do Salvador na cruz: A dívida está totalmente paga.`
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
  console.log('Successfully added 4 new pericopes for John (Batch 8d).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
