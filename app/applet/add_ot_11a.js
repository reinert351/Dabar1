const fs = require('fs');

const newPericopes = [
  {
    id: 'gen_1_1_5',
    bookId: 'GEN',
    chapter: 1,
    startVerse: 1,
    endVerse: 5,
    title: 'A Criação: Luz nas Trevas',
    theme: 'A Soberania do Criador e o Poder da Palavra',
    introduction: `O livro de Gênesis não tenta provar a existência de Deus; ele simplesmente a declara como o fato fundamental do universo. Os primeiros versículos da Bíblia estabelecem a base de toda a visão de mundo cristã: o universo não é um acidente cósmico, mas o produto da vontade intencional de um Criador soberano. A criação da luz no primeiro dia não é apenas um evento físico, mas um paradigma teológico de como Deus age, trazendo ordem ao caos e luz às trevas através do poder da Sua Palavra.`,
    points: [
      {
        verseRef: 'v. 1',
        title: 'O Princípio Absoluto e o Deus Eterno',
        description: `O Criador Incriado. "No princípio criou Deus os céus e a terra". Antes que houvesse tempo, espaço ou matéria, Deus já existia. A palavra hebraica para criar é "bara", um verbo usado no Antigo Testamento exclusivamente com Deus como sujeito. Significa criar do nada (ex nihilo). O universo não é eterno, nem é uma extensão da substância de Deus (panteísmo); é uma obra de arte distinta do seu Artista. Esta verdade destrói o ateísmo, o materialismo e a idolatria em uma única frase.`
      },
      {
        verseRef: 'v. 2',
        title: 'O Caos Original e a Presença do Espírito',
        description: `A Esperança no Vazio. "E a terra era sem forma e vazia; e havia trevas sobre a face do abismo". O estado inicial da criação era "tohu va-bohu" (desolado e vazio), envolto em trevas e águas profundas. Mas o caos não tem a última palavra. "E o Espírito de Deus se movia sobre a face das águas". A palavra "movia" (rachaph) descreve uma ave pairando sobre o seu ninho, cuidando e preparando-se para trazer vida. Mesmo na escuridão mais profunda, a presença de Deus está ativamente preparando o cenário para a redenção.`
      },
      {
        verseRef: 'v. 3-5',
        title: 'O Poder da Palavra e a Separação da Luz',
        description: `Haja Luz. "E disse Deus: Haja luz; e houve luz" (v. 3). Deus não luta contra as trevas; Ele simplesmente fala, e a realidade obedece. A Palavra de Deus (que o Novo Testamento revela ser Cristo, João 1:1-3) é o agente da criação. Deus vê que a luz é boa e faz uma separação (v. 4). A criação envolve não apenas fazer coisas, mas separar e ordenar (luz das trevas, dia da noite). Onde Deus fala, a escuridão é dissipada e a bondade é estabelecida.`
      }
    ],
    conclusion: `Gênesis 1:1-5 nos convida à adoração. Se Deus tem o poder de criar o cosmos do nada com uma simples palavra, Ele certamente tem o poder de trazer ordem ao caos das nossas vidas. O mesmo Deus que disse "Haja luz" no primeiro dia da criação é Aquele que resplandece nos nossos corações para nos dar a luz do conhecimento da Sua glória na face de Cristo (2 Coríntios 4:6). A nossa única resposta diante de tal majestade é a submissão e o louvor.`
  },
  {
    id: 'gen_3_1_7',
    bookId: 'GEN',
    chapter: 3,
    startVerse: 1,
    endVerse: 7,
    title: 'A Queda e a Origem do Pecado',
    theme: 'A Estratégia da Tentação e a Ruína da Humanidade',
    introduction: `Gênesis 3 é o capítulo mais trágico da Bíblia, explicando por que o mundo está cheio de dor, morte e maldade. A queda da humanidade não ocorreu através de um ataque frontal, mas através de uma conversa sutil. A serpente (Satanás) usa uma estratégia magistral para minar a confiança de Eva na bondade e na Palavra de Deus. A anatomia desta primeira tentação revela o padrão de todo pecado humano: duvidar de Deus, distorcer a Sua Palavra e buscar autonomia em vez de submissão.`,
    points: [
      {
        verseRef: 'v. 1',
        title: 'A Dúvida Semeada: Questionando a Palavra',
        description: `A Serpente Astuta. A serpente, a mais astuta das alimárias, aproxima-se de Eva com uma pergunta aparentemente inocente: "É assim que Deus disse: Não comereis de toda a árvore do jardim?". O primeiro passo da tentação é sempre questionar a revelação divina. A serpente não nega Deus imediatamente; ela distorce a Sua palavra, sugerindo que Deus é restritivo e mesquinho, focando na única proibição em vez da abundância de todas as outras árvores permitidas.`
      },
      {
        verseRef: 'v. 2-5',
        title: 'A Mentira Direta e a Promessa de Autonomia',
        description: `Sereis Como Deus. Eva responde, mas adiciona à Palavra de Deus ("nem tocareis nela", v. 3), mostrando que a sua compreensão da bondade de Deus já estava vacilando. A serpente então ataca abertamente (v. 4): "Certamente não morrereis". É a primeira mentira da história, negando o julgamento divino. Em seguida, vem a isca final (v. 5): "Deus sabe que... os vossos olhos se abrirão, e sereis como Deus, sabendo o bem e o mal". A essência do pecado não é apenas quebrar uma regra, mas o desejo de usurpar o trono de Deus e definir por si mesmo o que é certo e errado.`
      },
      {
        verseRef: 'v. 6-7',
        title: 'A Queda, a Vergonha e a Perda da Inocência',
        description: `A Ilusão Desfeita. Eva olha para a árvore através das lentes da mentira: ela parece boa para comer, agradável aos olhos e desejável para dar entendimento. Ela toma, come e dá a Adão, que estava com ela e falha em protegê-la (v. 6). A promessa da serpente cumpre-se de forma perversa (v. 7): os olhos deles realmente se abrem, mas não para a divindade, e sim para a sua própria nudez, vulnerabilidade e culpa. A primeira ação deles é tentar cobrir-se com folhas de figueira, o início da religião humana tentando esconder a vergonha do pecado.`
      }
    ],
    conclusion: `Gênesis 3:1-7 é o espelho da nossa própria alma. O pecado sempre promete liberdade e sabedoria, mas entrega escravidão e vergonha. A queda nos ensina que a raiz de toda desobediência é a incredulidade na bondade de Deus. Quando acreditamos que Deus está retendo algo bom de nós, tornamo-nos vulneráveis à mentira do inimigo. A nossa única esperança não está em costurar folhas de figueira de justiça própria, mas em confiar no "descendente da mulher" (Cristo) que esmagaria a cabeça da serpente.`
  },
  {
    id: 'gen_12_1_3',
    bookId: 'GEN',
    chapter: 12,
    startVerse: 1,
    endVerse: 3,
    title: 'O Chamado de Abrão',
    theme: 'A Eleição Incondicional e a Promessa da Bênção',
    introduction: `Após a rebelião global em Babel (Gênesis 11), Deus muda a Sua estratégia de redenção. Em vez de lidar com as nações como um todo, Ele escolhe um homem idoso, casado com uma mulher estéril, vivendo em uma cultura pagã (Ur dos Caldeus). O chamado de Abrão é o ponto de virada do Antigo Testamento. É o início da aliança abraâmica, baseada inteiramente na graça soberana de Deus, que promete abençoar um homem para que, através dele, a salvação alcance todas as famílias da terra.`,
    points: [
      {
        verseRef: 'v. 1',
        title: 'A Ordem Radical: O Abandono do Passado',
        description: `Sai da Tua Terra. "Ora, o Senhor disse a Abrão: Sai-te da tua terra, da tua parentela e da casa de teu pai, para a terra que eu te mostrarei". Deus exige uma ruptura total com o passado. Abrão teve que abandonar a sua segurança geográfica (terra), a sua segurança social (parentela) e a sua segurança financeira/hereditária (casa do pai). A fé bíblica sempre envolve um "sair" antes de um "chegar". Deus não lhe dá um mapa, apenas uma promessa: "a terra que eu te mostrarei". A obediência exige confiança no caráter do Guia.`
      },
      {
        verseRef: 'v. 2',
        title: 'A Promessa Pessoal: Nação, Nome e Bênção',
        description: `Eu Te Abençoarei. Deus faz promessas extraordinárias a um homem sem filhos: "E far-te-ei uma grande nação, e abençoar-te-ei e engrandecerei o teu nome; e tu serás uma bênção". Em Babel, os homens tentaram fazer um grande nome para si mesmos através do esforço humano e falharam. Aqui, Deus promete dar um grande nome a Abrão através da graça divina. A bênção de Deus não é apenas para o conforto pessoal de Abrão ("abençoar-te-ei"), mas tem um propósito missional ("tu serás uma bênção"). Somos abençoados para abençoar.`
      },
      {
        verseRef: 'v. 3',
        title: 'O Propósito Global: A Redenção das Nações',
        description: `Em Ti Serão Benditas. "E abençoarei os que te abençoarem, e amaldiçoarei os que te amaldiçoarem; e em ti serão benditas todas as famílias da terra". Deus atrela o Seu próprio nome e reputação ao destino de Abrão. Mas o clímax da promessa é a sua abrangência universal. O plano de Deus para Israel nunca foi o exclusivismo, mas usar uma nação como canal para alcançar o mundo inteiro. Esta promessa encontra o seu cumprimento final em Jesus Cristo, o "filho de Abraão" (Mateus 1:1), através de quem o evangelho da graça alcança todas as nações (Gálatas 3:8).`
      }
    ],
    conclusion: `Gênesis 12:1-3 nos ensina que a vida de fé é uma jornada de abandono e confiança. Como Abrão, somos chamados a deixar os nossos ídolos e seguranças terrenas para seguir a voz de Deus em direção a um futuro que não podemos ver. A promessa abraâmica nos lembra que a salvação é uma iniciativa puramente graciosa de Deus, que escolhe o improvável para realizar o impossível, com o objetivo final de que a Sua glória e bênção alcancem todos os povos da terra.`
  },
  {
    id: 'gen_15_1_6',
    bookId: 'GEN',
    chapter: 15,
    startVerse: 1,
    endVerse: 6,
    title: 'A Aliança e a Justificação pela Fé',
    theme: 'A Promessa Impossível e a Resposta do Coração',
    introduction: `Anos se passaram desde o chamado inicial de Abrão, e a promessa de um filho ainda não se cumpriu. Abrão está envelhecendo, a sua esposa continua estéril, e o medo e a dúvida começam a assombrar a sua mente. Neste momento de crise, Deus aparece a ele em uma visão. O diálogo que se segue culmina em um dos versículos mais importantes de toda a Bíblia (v. 6), o texto fundamental que os apóstolos Paulo e Tiago usariam para explicar a doutrina da justificação pela fé.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Medo de Abrão e a Proteção Divina',
        description: `Eu Sou o Teu Escudo. A palavra do Senhor vem a Abrão em visão: "Não temas, Abrão, eu sou o teu escudo, o teu grandíssimo galardão" (v. 1). Deus oferece a Si mesmo como a maior recompensa. Mas Abrão responde com honestidade dolorosa (v. 2-3): "Senhor Deus, que me hás de dar, pois ando sem filhos... Eis que não me tens dado filhos, e eis que um nascido na minha casa será o meu herdeiro". Abrão olha para as suas circunstâncias (a biologia morta) e tenta encontrar uma solução pragmática (Eliezer, o servo). A fé autêntica não esconde as suas dúvidas de Deus.`
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Promessa Reafirmada e as Estrelas do Céu',
        description: `Olha Agora para os Céus. Deus rejeita o plano B de Abrão (v. 4): "Este não será o teu herdeiro; mas aquele que de tuas entranhas sair, este será o teu herdeiro". Deus não diminui a promessa para se adequar à realidade de Abrão; Ele eleva a fé de Abrão para se adequar à Sua promessa. Deus o leva para fora da tenda na escuridão da noite e diz (v. 5): "Olha agora para os céus, e conta as estrelas, se as podes contar... Assim será a tua descendência". Deus usa a vastidão do universo criado para provar que Ele tem poder para criar vida em um ventre estéril.`
      },
      {
        verseRef: 'v. 6',
        title: 'A Fé que Justifica e a Justiça Imputada',
        description: `E Creu Ele no Senhor. "E creu ele no Senhor, e imputou-lhe isto por justiça". Este é o ponto de virada da teologia bíblica. Abrão não realizou nenhuma obra, não ofereceu nenhum sacrifício e não foi circuncidado (isso ocorreria no cap. 17). Ele simplesmente "creu" (aman - disse amém, confiou, apoiou-se) na promessa de Deus. Em resposta a essa confiança nua, Deus "imputou-lhe" (creditou na sua conta) a justiça. Abrão não se tornou moralmente perfeito naquele momento, mas foi declarado legalmente justo diante do tribunal de Deus puramente pela fé.`
      }
    ],
    conclusion: `Gênesis 15:1-6 é o farol da graça no Antigo Testamento. Ele nos ensina que Deus não exige que resolvamos os nossos próprios problemas ou que apresentemos um currículo de boas obras para sermos aceitos por Ele. Ele exige apenas que saiamos da nossa tenda de dúvidas, olhemos para a grandeza das Suas promessas (especialmente a promessa cumprida em Cristo) e digamos "Amém". A justificação é o presente de Deus para pecadores que confiam nEle quando tudo ao redor parece impossível.`
  },
  {
    id: 'gen_22_1_14',
    bookId: 'GEN',
    chapter: 22,
    startVerse: 1,
    endVerse: 14,
    title: 'O Sacrifício de Isaque',
    theme: 'O Teste Supremo e o Cordeiro Providenciado',
    introduction: `O capítulo 22 de Gênesis é uma das narrativas mais tensas e teologicamente ricas da Bíblia. Após décadas de espera, Abraão finalmente recebe o filho da promessa, Isaque. Então, Deus lhe dá uma ordem incompreensível: sacrificar o próprio filho. Este não é um ato de crueldade divina, mas um teste supremo de lealdade e uma profunda tipologia profética. No Monte Moriá, Deus encena o que Ele mesmo faria séculos depois no Calvário: oferecer o Seu único Filho como sacrifício pelo pecado.`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Ordem Incompreensível e a Obediência Silenciosa',
        description: `Toma Agora o Teu Filho. Deus prova Abraão (v. 1) com uma ordem que fere a alma: "Toma agora o teu filho, o teu único filho, Isaque, a quem amas, e vai-te à terra de Moriá, e oferece-o ali em holocausto" (v. 2). A ordem parecia contradizer a própria promessa de Deus de que a descendência viria através de Isaque. No entanto, Abraão levanta-se de madrugada, sem argumentar (v. 3). A sua fé havia amadurecido a ponto de confiar que Deus poderia até mesmo ressuscitar Isaque dos mortos (Hebreus 11:19). Ele diz aos servos (v. 5): "adoraremos, e tornaremos a vós".`
      },
      {
        verseRef: 'v. 6-8',
        title: 'A Caminhada para Moriá e a Pergunta de Isaque',
        description: `Onde Está o Cordeiro? Abraão coloca a lenha sobre os ombros de Isaque (um eco de Cristo carregando a cruz), e leva o fogo e o cutelo (v. 6). Isaque, percebendo que algo faltava, faz a pergunta que ecoaria por todo o Antigo Testamento (v. 7): "Eis aqui o fogo e a lenha, mas onde está o cordeiro para o holocausto?". A resposta de Abraão é uma declaração de fé profética (v. 8): "Deus proverá para si o cordeiro para o holocausto, meu filho". A humanidade não tem o cordeiro necessário para pagar pelos seus pecados; Deus mesmo deve providenciá-lo.`
      },
      {
        verseRef: 'v. 9-14',
        title: 'O Anjo do Senhor e o Cordeiro Substituto',
        description: `Jeová-Jiré. Abraão amarra Isaque e levanta o cutelo (v. 9-10). No último segundo, o Anjo do Senhor brada do céu (v. 11-12): "Não estendas a tua mão sobre o moço... porquanto agora sei que temes a Deus, e não me negaste o teu filho, o teu único filho". Abraão levanta os olhos e vê um carneiro preso pelos chifres num mato. Ele o oferece em sacrifício "em lugar de seu filho" (v. 13). Este é o princípio da substituição penal. Abraão chama o lugar de "Jeová-Jiré" (O Senhor Proverá, v. 14). Em Moriá, Deus poupou o filho de Abraão, mas no Calvário, Ele não poupou o Seu próprio Filho.`
      }
    ],
    conclusion: `Gênesis 22:1-14 nos leva ao limite da fé. Deus tem o direito de nos pedir o nosso "Isaque" — aquilo que mais amamos e no qual baseamos a nossa segurança. O teste revela se amamos mais a promessa ou o Prometedor. Mas, acima de tudo, esta história não é sobre a grandeza da fé de Abraão, mas sobre a grandeza da provisão de Deus. A pergunta de Isaque ("Onde está o cordeiro?") é finalmente respondida por João Batista séculos depois: "Eis o Cordeiro de Deus, que tira o pecado do mundo".`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 11a).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
