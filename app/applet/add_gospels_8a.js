const fs = require('fs');

const newPericopes = [
  {
    id: 'mat_5_13_16',
    bookId: 'MAT',
    chapter: 5,
    startVerse: 13,
    endVerse: 16,
    title: 'O Sal da Terra e a Luz do Mundo',
    theme: 'A Identidade e a Influência do Cristão na Sociedade',
    introduction: `Logo após descrever o caráter do cidadão do Reino nas Bem-Aventuranças, Jesus define a função desse cidadão no mundo. Usando duas metáforas domésticas e universais — sal e luz —, Ele ilustra que a igreja não foi chamada para o isolamento, mas para a penetração e transformação da sociedade. O cristão deve ser um agente de preservação moral e um farol de revelação divina.`,
    points: [
      {
        verseRef: 'v. 13',
        title: 'O Sal da Terra: Preservação e Sabor',
        description: `A Influência Invisível. "Vós sois o sal da terra". No mundo antigo, o sal era vital para preservar a carne da putrefação e para dar sabor. O mundo, deixado à sua própria sorte, está em estado de decomposição moral. A presença da igreja atua como um conservante que retarda a corrupção da sociedade. No entanto, Jesus adverte: "se o sal for insípido... para nada mais presta senão para se lançar fora". Um cristianismo mundano, que perdeu a sua santidade, é inútil para Deus e desprezado pelo mundo.`
      },
      {
        verseRef: 'v. 14-15',
        title: 'A Luz do Mundo: Revelação e Evidência',
        description: `A Influência Visível. "Vós sois a luz do mundo". Enquanto o sal age secretamente, a luz age abertamente. A luz tem duas funções: dissipar as trevas e revelar a verdade. Jesus diz que "não se pode esconder uma cidade edificada sobre um monte" (v. 14) e que ninguém acende uma candeia para colocá-la debaixo do alqueire (um cesto), mas no velador (v. 15). A fé cristã é pessoal, mas nunca privada. O crente autêntico não pode esconder a sua identidade; a sua vida transformada deve ser evidente.`
      },
      {
        verseRef: 'v. 16',
        title: 'As Boas Obras e a Glória do Pai',
        description: `O Propósito da Influência. "Assim resplandeça a vossa luz diante dos homens, para que vejam as vossas boas obras e glorifiquem a vosso Pai, que está nos céus". O objetivo de brilhar não é atrair atenção para nós mesmos, mas direcionar o olhar do mundo para Deus. As "boas obras" são a refração da luz de Cristo através do nosso caráter. Quando o mundo vê um amor inexplicável e uma integridade inabalável, eles são forçados a reconhecer a realidade do Pai celestial que opera em nós.`
      }
    ],
    conclusion: `Mateus 5:13-16 nos desafia a avaliar o nosso impacto no mundo. Não podemos ser sal se não sairmos do saleiro, e não podemos ser luz se nos escondermos com medo da escuridão. O mundo precisa desesperadamente da preservação moral e da iluminação espiritual que apenas o evangelho pode oferecer. Que a nossa vida seja tão distinta e cheia de graça que, ao olharem para nós, as pessoas não vejam a nossa grandeza, mas a glória do nosso Pai.`
  },
  {
    id: 'mat_14_13_21',
    bookId: 'MAT',
    chapter: 14,
    startVerse: 13,
    endVerse: 21,
    title: 'A Multiplicação dos Pães e Peixes',
    theme: 'A Compaixão de Cristo e a Provisão Abundante',
    introduction: `Este é o único milagre de Jesus registrado nos quatro Evangelhos. Ocorrendo logo após a trágica notícia da morte de João Batista, Jesus busca um lugar deserto para descansar, mas é seguido por uma multidão faminta. O milagre que se segue não apenas demonstra o poder de Jesus sobre a criação, mas revela o Seu coração pastoral e ensina aos discípulos que a insuficiência humana, quando entregue nas mãos do Mestre, torna-se a base para a abundância divina.`,
    points: [
      {
        verseRef: 'v. 13-14',
        title: 'A Compaixão que Interrompe o Luto',
        description: `O Coração do Pastor. Jesus estava de luto pela morte do Seu primo, João Batista. Ele se retira para um lugar deserto (v. 13), mas a multidão O segue a pé. Quando Jesus sai do barco e vê a grande multidão, Ele não sente irritação pela invasão da Sua privacidade, mas "possuído de íntima compaixão para com ela, curou os seus enfermos" (v. 14). A palavra grega para compaixão indica uma emoção profunda e visceral. O amor de Cristo pelas ovelhas perdidas sempre supera o Seu próprio conforto.`
      },
      {
        verseRef: 'v. 15-18',
        title: 'A Lógica Humana e o Desafio da Fé',
        description: `A Matemática do Desespero. Ao cair da tarde, os discípulos apresentam uma solução pragmática (v. 15): "despede a multidão, para que vão pelas aldeias, e comprem de comer". Eles veem o problema, mas excluem Jesus da equação. Jesus os choca com uma ordem impossível (v. 16): "Dai-lhes vós de comer". Eles respondem com a sua total insuficiência (v. 17): "Não temos aqui senão cinco pães e dois peixes". Jesus exige que entreguem o pouco que têm (v. 18): "Trazei-mos aqui". O milagre começa com a rendição da nossa insuficiência.`
      },
      {
        verseRef: 'v. 19-21',
        title: 'A Ação de Graças, o Milagre e a Abundância',
        description: `O Pão da Vida em Ação. Jesus manda a multidão assentar-se. Ele toma os cinco pães e os dois peixes, olha para o céu, abençoa, parte e entrega aos discípulos para distribuírem (v. 19). O milagre acontece nas mãos de Jesus, não nas mãos dos discípulos. O resultado é esmagador (v. 20): "E comeram todos, e saciaram-se; e levantaram dos pedaços que sobejaram doze alcofas cheias". Havia cerca de cinco mil homens, além de mulheres e crianças. Deus provê com uma abundância transbordante que excede as nossas expectativas.`
      }
    ],
    conclusion: `Mateus 14:13-21 nos ensina que Deus frequentemente nos coloca em situações de total insuficiência para nos ensinar a depender inteiramente dEle. Quando olhamos para os nossos recursos, eles sempre parecerão como "cinco pães e dois peixes" diante das demandas do mundo. Mas quando entregamos o nosso pouco nas mãos do Salvador com gratidão, Ele o multiplica para saciar os famintos e ainda faz sobejar a Sua graça em nossas vidas.`
  },
  {
    id: 'mat_21_1_11',
    bookId: 'MAT',
    chapter: 21,
    startVerse: 1,
    endVerse: 11,
    title: 'A Entrada Triunfal em Jerusalém',
    theme: 'O Rei Humilde e a Falsa Expectativa da Multidão',
    introduction: `No início da semana da Paixão, Jesus orquestra deliberadamente a Sua entrada em Jerusalém para cumprir as profecias messiânicas. Ao contrário dos conquistadores romanos que entravam em cavalos de guerra, Jesus entra montado em um jumentinho, declarando-se Rei, mas um Rei de paz e humildade. A recepção eufórica da multidão esconde uma profunda incompreensão sobre a verdadeira natureza do Seu Reino.`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Ordem Soberana e o Cumprimento Profético',
        description: `O Rei que Planeja a Sua Coroação. Jesus envia dois discípulos para buscar uma jumenta e um jumentinho, demonstrando a Sua onisciência e autoridade soberana. Mateus destaca que isso ocorreu para cumprir a profecia de Zacarias 9:9 (v. 4-5): "Dizei à filha de Sião: Eis que o teu Rei aí te vem, manso, e assentado sobre uma jumenta". Jesus está fazendo uma declaração pública de que Ele é o Messias prometido, mas redefine o messianismo: Ele não vem com espadas, mas com mansidão.`
      },
      {
        verseRef: 'v. 6-9',
        title: 'A Adoração da Multidão e o Grito de Hosana',
        description: `A Celebração Superficial. Os discípulos obedecem, e a multidão estende as suas vestes e ramos de árvores pelo caminho (v. 8). Eles clamam (v. 9): "Hosana ao Filho de Davi; bendito o que vem em nome do Senhor". "Hosana" significa "Salva-nos agora". A multidão estava certa na sua teologia, mas errada na sua expectativa. Eles queriam que Jesus os salvasse da opressão política de Roma, não da opressão espiritual do pecado. Eles queriam um libertador nacional, não um Salvador crucificado.`
      },
      {
        verseRef: 'v. 10-11',
        title: 'O Alvoroço na Cidade e a Identidade Limitada',
        description: `Quem é Este? Quando Jesus entra em Jerusalém, "toda a cidade se alvoroçou, dizendo: Quem é este?" (v. 10). A cidade inteira foi abalada. A resposta da multidão revela a limitação da sua fé (v. 11): "Este é Jesus, o profeta de Nazaré da Galileia". Eles O reconhecem como um grande profeta, mas falham em ver a totalidade da Sua divindade e missão. A mesma multidão que gritou "Hosana" no domingo gritaria "Crucifica-o" na sexta-feira, quando percebessem que Ele não atenderia à agenda política deles.`
      }
    ],
    conclusion: `Mateus 21:1-11 nos adverte contra o perigo de adorarmos um Jesus criado pela nossa própria imaginação. É fácil louvar a Deus quando achamos que Ele vai resolver todos os nossos problemas terrenos e políticos. Mas a verdadeira adoração exige que nos submetamos a Ele como o Rei manso que veio para morrer pelos nossos pecados. Precisamos recebê-Lo não apenas como Aquele que nos dá o que queremos, mas como o Senhor soberano que nos dá a salvação eterna.`
  },
  {
    id: 'mat_26_36_46',
    bookId: 'MAT',
    chapter: 26,
    startVerse: 36,
    endVerse: 46,
    title: 'A Agonia no Getsêmani',
    theme: 'O Cálice da Ira e a Submissão Perfeita do Filho',
    introduction: `O Jardim do Getsêmani é o cenário da maior batalha espiritual da história. Aqui, a angústia de Jesus atinge o seu ápice, não pelo medo da dor física da crucificação, mas pelo terror espiritual de beber o cálice da ira de Deus contra o pecado. A oração de Jesus no Getsêmani é o modelo supremo de submissão à vontade do Pai, contrastando dolorosamente com a fraqueza e o sono dos Seus discípulos mais íntimos.`,
    points: [
      {
        verseRef: 'v. 36-38',
        title: 'A Tristeza Mortal e a Solidão do Salvador',
        description: `O Peso do Pecado do Mundo. Jesus leva Pedro, Tiago e João para mais perto, e começa a "entristecer-se e a angustiar-se muito" (v. 37). Ele confessa a eles (v. 38): "A minha alma está cheia de tristeza até a morte; ficai aqui, e velai comigo". O Filho de Deus, que sempre teve comunhão ininterrupta com o Pai, está prestes a ser feito pecado por nós. A antecipação de carregar a culpa da humanidade e enfrentar o abandono divino O esmaga com uma tristeza letal.`
      },
      {
        verseRef: 'v. 39, 42, 44',
        title: 'A Oração de Submissão e o Cálice da Ira',
        description: `Não a Minha Vontade, Mas a Tua. Jesus prostra-se sobre o Seu rosto e ora (v. 39): "Meu Pai, se é possível, passe de mim este cálice; todavia, não seja como eu quero, mas como tu queres". O "cálice" no Antigo Testamento é frequentemente uma metáfora para a ira e o julgamento de Deus. A humanidade santa de Jesus recua diante de se tornar o objeto da ira divina. Ele ora três vezes, mas a Sua oração não é uma rebelião; é a submissão perfeita. Ele escolhe abraçar o horror da cruz por amor ao Pai e a nós.`
      },
      {
        verseRef: 'v. 40-41, 43-46',
        title: 'O Sono dos Discípulos e a Fraqueza da Carne',
        description: `A Falha na Vigilância. Enquanto Jesus trava a batalha cósmica, os discípulos dormem. Jesus os repreende (v. 40): "Então nem uma hora pudestes velar comigo?". Ele lhes dá um aviso crucial (v. 41): "Vigiai e orai, para que não entreis em tentação; na verdade, o espírito está pronto, mas a carne é fraca". As boas intenções não são suficientes contra o poder do inimigo; é necessária a vigilância na oração. Jesus os encontra dormindo três vezes. Finalmente, Ele os acorda, pronto para enfrentar a cruz sozinho.`
      }
    ],
    conclusion: `Mateus 26:36-46 nos leva ao solo sagrado do sofrimento de Cristo. No Getsêmani, vemos o preço infinito da nossa salvação. Jesus bebeu o cálice da ira de Deus até a última gota para que nós pudéssemos beber o cálice da graça e da salvação. A Sua submissão perfeita reverteu a rebelião de Adão no Éden. Diante de um amor tão agonizante e profundo, a nossa única resposta deve ser a adoração, a vigilância em oração e a submissão total da nossa própria vontade a Deus.`
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
  console.log('Successfully added 4 new pericopes for Matthew (Batch 8a).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
