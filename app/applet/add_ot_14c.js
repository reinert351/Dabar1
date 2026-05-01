const fs = require('fs');

const newPericopes = [
  {
    id: 'ezr_7_6_10',
    bookId: 'EZR',
    chapter: 7,
    startVerse: 6,
    endVerse: 10,
    title: 'A Devoção de Esdras',
    theme: 'O Estudo, a Prática e o Ensino da Palavra',
    introduction: `Esdras foi um sacerdote e escriba que liderou o segundo grupo de exilados de volta a Jerusalém. A sua missão não era reconstruir os muros físicos (essa seria a tarefa de Neemias), mas reconstruir os muros espirituais da nação através do ensino da Lei de Deus. O capítulo 7 descreve a chegada de Esdras e revela o segredo do seu sucesso espiritual e da "boa mão de Deus" sobre a sua vida. O versículo 10 é um dos resumos mais perfeitos do chamado e da disciplina de um mestre da Palavra de Deus.`,
    points: [
      {
        verseRef: 'v. 6-8',
        title: 'O Escriba Hábil e a Boa Mão de Deus',
        description: `A Mão do Senhor Seu Deus Estava Sobre Ele. Esdras é descrito como "escriba hábil na lei de Moisés" (v. 6). Ele não era apenas um copista, mas um estudioso profundo. O rei Artaxerxes concedeu-lhe tudo o que pediu, "segundo a mão do Senhor seu Deus, que estava sobre ele". A frase "a mão do Senhor estava sobre ele" é repetida várias vezes no livro (v. 6, 9, 28). O sucesso de Esdras não se devia ao seu carisma ou conexões políticas, mas ao favor soberano de Deus que acompanhava a sua vida.`
      },
      {
        verseRef: 'v. 9',
        title: 'A Jornada Perigosa e a Proteção Divina',
        description: `A Boa Mão do Seu Deus. A viagem da Babilônia a Jerusalém durou exatamente quatro meses (v. 9). Era uma jornada de quase 1.500 quilômetros através de territórios perigosos, cheios de salteadores, e Esdras viajava com uma grande quantidade de ouro e prata para o templo. Ele chegou em segurança "segundo a boa mão do seu Deus sobre ele". A proteção de Deus é garantida para aqueles que estão no centro da Sua vontade, cumprindo o Seu propósito.`
      },
      {
        verseRef: 'v. 10',
        title: 'O Tripé do Ministério: Buscar, Cumprir e Ensinar',
        description: `Esdras Tinha Preparado o Seu Coração. O versículo 10 revela a razão pela qual a mão de Deus estava sobre ele: "Porque Esdras tinha preparado o seu coração para buscar a lei do Senhor e para a cumprir e para ensinar em Israel os seus estatutos e os seus juízos". A ordem dos verbos é crucial. Primeiro, ele preparou o coração para *buscar* (estudar diligentemente). Segundo, ele preparou o coração para *cumprir* (praticar o que estudou). Terceiro, ele preparou o coração para *ensinar*. O ensino sem estudo é vazio; o ensino sem prática é hipocrisia.`
      }
    ],
    conclusion: `Esdras 7:6-10 é o modelo definitivo para qualquer pessoa que deseja servir a Deus, especialmente no ministério da Palavra. Não podemos ensinar o que não vivemos, e não podemos viver o que não conhecemos. A "boa mão de Deus" repousa sobre homens e mulheres que, como Esdras, tomam a decisão intencional ("preparou o seu coração") de mergulhar nas Escrituras, submeter as suas vidas à obediência dessa Palavra e, só então, abrir a boca para instruir os outros.`
  },
  {
    id: 'neh_8_1_8',
    bookId: 'NEH',
    chapter: 8,
    startVerse: 1,
    endVerse: 8,
    title: 'A Leitura da Lei',
    theme: 'O Avivamento Através da Palavra de Deus',
    introduction: `Os muros de Jerusalém foram reconstruídos em apenas 52 dias sob a liderança de Neemias. Mas muros fortes não garantem uma nação forte se o povo estiver espiritualmente fraco. No capítulo 8, o foco muda da construção de pedras para a construção de almas. O povo reúne-se na praça e pede a Esdras que traga o Livro da Lei. O que se segue é um dos maiores avivamentos registrados na Bíblia, provando que a verdadeira renovação espiritual sempre começa com a exposição clara e reverente à Palavra de Deus.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Fome pela Palavra e a Atenção do Povo',
        description: `Traze o Livro. O avivamento não foi forçado pela liderança; nasceu da fome do povo (v. 1): "disseram a Esdras, o escriba, que trouxesse o livro da lei de Moisés". Esdras traz a Lei perante a congregação de homens, mulheres e todos os que podiam entender (v. 2). Ele lê o livro desde a alva até o meio-dia (cerca de seis horas), "e os ouvidos de todo o povo estavam atentos ao livro da lei" (v. 3). A marca de um verdadeiro avivamento é uma fome insaciável e uma atenção reverente à Palavra de Deus.`
      },
      {
        verseRef: 'v. 4-6',
        title: 'A Reverência e a Adoração Coletiva',
        description: `Todo o Povo se Pôs em Pé. Esdras sobe a um púlpito de madeira feito para a ocasião (v. 4). Quando ele abre o livro, a reverência do povo é imediata (v. 5): "e, abrindo-o ele, todo o povo se pôs em pé". Esdras louva ao Senhor, e o povo responde com um "Amém, Amém!" uníssono, levantando as mãos, inclinando-se e adorando o Senhor com o rosto em terra (v. 6). A leitura da Palavra não foi um exercício acadêmico, mas um ato profundo de adoração e submissão à autoridade divina.`
      },
      {
        verseRef: 'v. 7-8',
        title: 'A Exposição Clara e a Compreensão do Texto',
        description: `Dando o Sentido. Ler a Palavra é essencial, mas entendê-la é crucial. Os levitas ajudavam o povo a entender a Lei (v. 7). O versículo 8 descreve o método da verdadeira pregação expositiva: "E leram no livro, na lei de Deus; e declarando, e explicando o sentido, faziam que, lendo, se entendesse". Eles não usaram o texto como pretexto para as suas próprias ideias; eles leram o texto, traduziram (se necessário), explicaram o significado e aplicaram à vida do povo, para que todos compreendessem a vontade de Deus.`
      }
    ],
    conclusion: `Neemias 8:1-8 nos lembra que o poder para transformar vidas não reside em programas inovadores, entretenimento ou carisma humano, mas na Palavra de Deus lida, explicada e compreendida. Quando a Palavra de Deus é exposta com clareza e recebida com reverência, o resultado inevitável é o quebrantamento (o povo chorou ao ouvir a Lei, v. 9) e a alegria ("a alegria do Senhor é a vossa força", v. 10). O verdadeiro avivamento é sempre um avivamento bíblico.`
  },
  {
    id: 'est_4_10_16',
    bookId: 'EST',
    chapter: 4,
    startVerse: 10,
    endVerse: 16,
    title: 'Para Tal Tempo Como Este',
    theme: 'A Providência Divina e a Coragem Humana',
    introduction: `O livro de Ester é único na Bíblia porque o nome de Deus não é mencionado nenhuma vez. No entanto, a mão invisível da providência divina está presente em cada página. O povo judeu no império persa enfrenta o aniquilamento total devido a um decreto assinado pelo rei Assuero, manipulado pelo perverso Hamã. A rainha Ester, que é judia em segredo, é a única pessoa na posição de interceder. O diálogo entre ela e o seu primo Mardoqueu no capítulo 4 é o clímax do livro, revelando a interseção entre a soberania de Deus e a responsabilidade humana.`,
    points: [
      {
        verseRef: 'v. 10-12',
        title: 'O Medo da Morte e a Lei do Rei',
        description: `A Lei é Uma Só: A Morte. Ester hesita em ajudar. Ela envia uma mensagem a Mardoqueu explicando o perigo (v. 11): qualquer pessoa que entrasse no pátio interior do rei sem ser chamada seria morta, a menos que o rei estendesse o cetro de ouro. E ela não era chamada à presença do rei havia trinta dias. Ester estava olhando para a situação através das lentes da lei humana e do risco pessoal. A sua posição de rainha não a isentava do perigo; na verdade, tornava a sua intervenção ainda mais arriscada.`
      },
      {
        verseRef: 'v. 13-14',
        title: 'O Desafio de Mardoqueu e a Soberania de Deus',
        description: `Para Tal Tempo Como Este. Mardoqueu responde com um dos discursos mais poderosos da Bíblia. Primeiro, ele destrói a ilusão de segurança dela (v. 13): "Não imagines no teu íntimo que, por estares na casa do rei, escaparás só tu entre todos os judeus". Segundo, ele declara a soberania inabalável de Deus (v. 14a): "Porque, se de todo te calares neste tempo, socorro e livramento de outra parte virá para os judeus, mas tu e a casa de teu pai perecereis". Deus salvará o Seu povo com ou sem Ester. Terceiro, ele revela o propósito da providência (v. 14b): "E quem sabe se para tal tempo como este chegaste a este reino?".`
      },
      {
        verseRef: 'v. 15-16',
        title: 'A Decisão de Ester e o Risco Calculado',
        description: `Se Perecer, Pereci. As palavras de Mardoqueu despertam a fé de Ester. Ela abandona o medo e assume a sua responsabilidade (v. 16). Ela pede que todos os judeus em Susã jejuem por ela durante três dias, prometendo fazer o mesmo com as suas servas. A sua ação não seria baseada na presunção, mas na dependência de Deus. Ela toma a decisão final: "e assim irei ter com o rei, ainda que não seja segundo a lei; e se perecer, pereci". Ela escolhe arriscar a sua vida terrena para cumprir o propósito divino.`
      }
    ],
    conclusion: `Ester 4:10-16 nos ensina que as nossas posições de influência (trabalho, família, status) não são acidentes, mas atribuições divinas. Deus nos coloca onde estamos "para tal tempo como este". A soberania de Deus não anula a nossa responsabilidade; pelo contrário, ela nos dá a coragem para agir. Quando enfrentamos decisões difíceis que exigem sacrifício pessoal, devemos lembrar que Deus pode usar qualquer pessoa para cumprir os Seus propósitos, mas é um privilégio eterno quando dizemos: "Se perecer, pereci", e nos colocamos nas Suas mãos.`
  },
  {
    id: 'job_42_1_6',
    bookId: 'JOB',
    chapter: 42,
    startVerse: 1,
    endVerse: 6,
    title: 'O Arrependimento de Jó',
    theme: 'A Visão de Deus e a Humilhação do Homem',
    introduction: `Durante 37 capítulos, Jó debateu com os seus amigos, defendeu a sua inocência e exigiu uma audiência com Deus para entender o motivo do seu sofrimento. Quando Deus finalmente aparece no redemoinho (capítulos 38-41), Ele não responde a nenhuma das perguntas de Jó sobre o sofrimento. Em vez disso, Deus faz a Jó dezenas de perguntas sobre a criação do universo, revelando a Sua sabedoria e poder insondáveis. A resposta de Jó no capítulo 42 é o clímax do livro: o sofrimento não é resolvido por explicações teológicas, mas por um encontro pessoal com o Deus soberano.`,
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'O Reconhecimento da Soberania Absoluta',
        description: `Bem Sei Eu que Tudo Podes. Jó responde ao Senhor (v. 1). A sua primeira declaração é uma confissão da onipotência e soberania de Deus (v. 2): "Bem sei eu que tudo podes, e que nenhum dos teus propósitos pode ser impedido". Antes, Jó havia questionado a justiça de Deus na administração do mundo. Agora, após ver a complexidade da criação, ele reconhece que Deus governa o universo com um propósito perfeito que não pode ser frustrado, mesmo que a mente humana não consiga compreendê-lo.`
      },
      {
        verseRef: 'v. 3-4',
        title: 'A Confissão de Ignorância e a Presunção Humana',
        description: `Falei do que Não Entendia. Jó cita as próprias palavras de Deus (v. 3a): "Quem é este, que sem conhecimento encobre o conselho?". Ele aplica a repreensão a si mesmo e confessa a sua presunção (v. 3b): "Por isso falei do que não entendia; coisas que para mim eram maravilhosíssimas, e que eu não compreendia". Jó percebe que tentar julgar as ações de Deus com a sua mente finita era como uma formiga tentando entender a física quântica. Ele desiste de exigir respostas e submete-se à instrução divina (v. 4).`
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Visão Pessoal e o Arrependimento Profundo',
        description: `Agora Te Veem os Meus Olhos. O versículo 5 é o coração do livro de Jó: "Com o ouvir dos meus ouvidos ouvi, mas agora te veem os meus olhos". A teologia de Jó passou de conhecimento de segunda mão (ouvir falar) para experiência de primeira mão (ver). O encontro com a majestade de Deus produz o único resultado possível para um pecador (v. 6): "Por isso me abomino e me arrependo no pó e na cinza". Jó não se arrepende de pecados ocultos que causaram o seu sofrimento (como os amigos sugeriram), mas do seu orgulho em questionar a sabedoria de Deus.`
      }
    ],
    conclusion: `Jó 42:1-6 nos ensina que a resposta de Deus para o nosso sofrimento raramente é uma explicação; a resposta de Deus é Ele mesmo. Quando estamos no meio da dor, queremos saber o "porquê". Mas quando finalmente vemos a Deus na Sua glória e soberania, o "porquê" deixa de importar. A visão de Deus nos humilha, silencia as nossas queixas e nos leva ao arrependimento no pó e na cinza. A verdadeira paz não vem de entender todos os mistérios da vida, mas de confiar no caráter Daquele que governa o universo.`
  },
  {
    id: 'psa_19_1_14',
    bookId: 'PSA',
    chapter: 19,
    startVerse: 1,
    endVerse: 14,
    title: 'A Revelação de Deus',
    theme: 'A Criação, a Palavra e o Coração Humano',
    introduction: `O Salmo 19, escrito por Davi, é considerado por C.S. Lewis como "o maior poema do Saltério e uma das melhores letras do mundo". O salmo é magistralmente dividido em três partes que descrevem como Deus se revela à humanidade. Primeiro, Deus se revela através do Seu mundo (revelação geral na criação). Segundo, Deus se revela através da Sua Palavra (revelação especial nas Escrituras). Terceiro, essa dupla revelação exige uma resposta de purificação e submissão no coração humano.`,
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Revelação Geral: A Glória de Deus nos Céus',
        description: `Os Céus Declaram a Glória de Deus. A criação é um pregador silencioso, mas eloquente (v. 1): "Os céus declaram a glória de Deus e o firmamento anuncia a obra das suas mãos". O universo não é um acidente; é uma obra de arte que aponta para o Artista. Esta pregação é contínua (dia e noite, v. 2) e universal (sem palavras, mas a sua linha se estende por toda a terra, v. 3-4). O sol é usado como o exemplo supremo do poder e da majestade de Deus (v. 4-6), iluminando e aquecendo tudo, sem que nada se esconda do seu calor.`
      },
      {
        verseRef: 'v. 7-11',
        title: 'A Revelação Especial: A Perfeição da Lei de Deus',
        description: `A Lei do Senhor é Perfeita. A criação mostra o poder de Deus (El), mas a Sua Palavra revela o Seu caráter pactual (Yahweh). Davi usa seis títulos para a Palavra (lei, testemunho, preceitos, mandamento, temor, juízos), seis adjetivos (perfeita, fiel, retos, puro, limpo, verdadeiros) e seis efeitos na vida humana (refrigera a alma, dá sabedoria, alegra o coração, ilumina os olhos, permanece para sempre, justos). A Palavra de Deus é mais valiosa que o ouro fino e mais doce que o mel (v. 10). Ela nos adverte e nos recompensa (v. 11).`
      },
      {
        verseRef: 'v. 12-14',
        title: 'A Resposta Humana: Purificação e Submissão',
        description: `Sejam Agradáveis as Palavras da Minha Boca. Diante da glória de Deus nos céus e da pureza de Deus na lei, Davi olha para dentro de si mesmo e vê o seu pecado (v. 12): "Quem pode entender os seus erros? Expurga-me tu dos que me são ocultos". Ele pede proteção contra os pecados intencionais (soberba), para que não o dominem (v. 13). O salmo termina com uma das orações mais belas da Bíblia (v. 14): "Sejam agradáveis as palavras da minha boca e a meditação do meu coração perante a tua face, Senhor, Rocha minha e Redentor meu!".`
      }
    ],
    conclusion: `O Salmo 19 nos ensina que Deus não está em silêncio. Ele fala através da vastidão do universo e através da precisão das Escrituras. A criação nos diz que Deus existe e é poderoso, mas somente a Palavra nos diz quem Ele é, o que Ele exige e como podemos ser salvos. Quando somos confrontados com a luz do sol e a luz da Palavra, a nossa única resposta adequada é a oração de Davi: pedir que Deus nos purifique dos nossos pecados ocultos e torne os nossos pensamentos e palavras agradáveis a Ele, o nosso Redentor.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 14c).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
