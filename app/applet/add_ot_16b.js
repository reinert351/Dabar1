const fs = require('fs');

const newPericopes = [
  {
    id: '1sa_17_38_51',
    bookId: '1SA',
    chapter: 17,
    startVerse: 38,
    endVerse: 51,
    title: 'Davi e Golias',
    theme: 'A Batalha do Senhor e a Fé Inabalável',
    introduction: `A história de Davi e Golias é a narrativa mais famosa sobre a vitória do fraco sobre o forte. O exército de Israel estava paralisado de medo diante do gigante filisteu, que blasfemava contra Deus há 40 dias. Davi, um jovem pastor, chega ao acampamento e fica indignado não com o tamanho do gigante, mas com a ofensa à glória de Deus. A vitória de Davi não é um manual sobre como usar uma funda, mas uma aula magistral de teologia prática: a batalha não é decidida pelas armas humanas, mas pelo zelo do Senhor dos Exércitos.`,
    points: [
      {
        verseRef: 'v. 38-40',
        title: 'A Armadura Rejeitada e a Identidade Autêntica',
        description: `Não Posso Andar Com Isto. O rei Saul tenta vestir Davi com a sua própria armadura de bronze (v. 38). Davi tenta andar, mas percebe o erro (v. 39): "Não posso andar com isto, pois nunca o experimentei". Davi recusa a armadura do rei. Ele entende que não pode vencer a batalha de Deus usando os métodos do mundo ou tentando ser quem ele não é. Ele pega o seu cajado, escolhe cinco seixos lisos do ribeiro e pega a sua funda de pastor (v. 40). Deus usa o que temos nas mãos quando a nossa identidade está firmada nEle.`
      },
      {
        verseRef: 'v. 41-47',
        title: 'O Desafio do Gigante e a Teologia de Davi',
        description: `A Batalha é do Senhor. Golias despreza Davi pela sua juventude e aparência (v. 42-44), amaldiçoando-o pelos seus deuses. A resposta de Davi é um dos maiores discursos de fé da Bíblia (v. 45-47): "Tu vens a mim com espada, e com lança, e com escudo; porém eu venho a ti em nome do Senhor dos Exércitos... Hoje mesmo o Senhor te entregará na minha mão... para que toda a terra saiba que há Deus em Israel". Davi não foca no tamanho do gigante, mas no tamanho do seu Deus. Ele declara que "do Senhor é a guerra" (v. 47).`
      },
      {
        verseRef: 'v. 48-51',
        title: 'A Ação Corajosa e a Vitória Decisiva',
        description: `Davi Apressou-se, e Correu ao Combate. A fé verdadeira não é passiva. Quando o filisteu avança, Davi não recua; ele corre em direção à linha de batalha (v. 48). Ele atira uma única pedra com a funda, que atinge a testa do gigante, derrubando-o com o rosto em terra (v. 49). Como Davi não tinha espada, ele usa a própria espada de Golias para cortar-lhe a cabeça (v. 50-51). O instrumento que o inimigo pretendia usar para destruir Israel foi usado para a sua própria destruição.`
      }
    ],
    conclusion: `1 Samuel 17:38-51 nos ensina que os "gigantes" nas nossas vidas (problemas insuperáveis, vícios, oposição) não são derrotados com as armas da carne (a armadura de Saul), mas com a confiança absoluta no Nome do Senhor. Davi é um tipo de Cristo: o Rei ungido, aparentemente fraco e desprezado, que desce ao vale para lutar a batalha que o Seu povo não podia vencer, esmagando a cabeça do inimigo (Satanás) e garantindo a vitória e a liberdade para todos os que confiam nEle.`
  },
  {
    id: '1ki_18_30_40',
    bookId: '1KI',
    chapter: 18,
    startVerse: 30,
    endVerse: 40,
    title: 'Elias no Monte Carmelo',
    theme: 'O Confronto dos Deuses e o Fogo do Céu',
    introduction: `A nação de Israel, sob o reinado de Acabe e Jezabel, havia se afundado na idolatria a Baal. O profeta Elias convoca um confronto épico no Monte Carmelo: 450 profetas de Baal contra ele sozinho. O desafio é simples: o Deus que responder com fogo, esse é o verdadeiro Deus. Após os profetas de Baal passarem o dia inteiro gritando e se cortando sem obter resposta, Elias toma a frente. O que se segue é uma demonstração inegável da supremacia absoluta de Yahweh e uma chamada radical ao arrependimento.`,
    points: [
      {
        verseRef: 'v. 30-35',
        title: 'A Restauração do Altar e a Preparação do Sacrifício',
        description: `Reparou o Altar do Senhor Que Estava Quebrado. Antes de orar por fogo, Elias chama o povo para perto (v. 30) e faz algo simbólico: ele repara o altar do Senhor que estava em ruínas. Ele usa doze pedras, lembrando a unidade das doze tribos de Israel e a aliança original (v. 31-32). Para provar que não haveria truque, Elias manda derramar quatro cântaros de água sobre o sacrifício e a lenha, três vezes, até encher o rego ao redor do altar (v. 33-35). A fé verdadeira não teme as impossibilidades; ela prepara o cenário para que o milagre seja inegavelmente divino.`
      },
      {
        verseRef: 'v. 36-37',
        title: 'A Oração Focada e o Propósito da Glória',
        description: `Para Que Este Povo Conheça Que Tu És o Senhor. A oração de Elias é curta (apenas 63 palavras no hebraico), em contraste com as horas de gritaria dos profetas de Baal. A sua oração tem três propósitos (v. 36-37): 1) Que fique conhecido que Deus é Deus em Israel; 2) Que fique conhecido que Elias é servo de Deus e fez tudo por ordem divina; 3) Que o coração do povo se converta de volta a Deus. Elias não orou para dar um show ou para se exaltar, mas exclusivamente pela glória de Deus e pela salvação do povo.`
      },
      {
        verseRef: 'v. 38-40',
        title: 'O Fogo Consumidor e o Arrependimento da Nação',
        description: `O Senhor é Deus! O Senhor é Deus! A resposta de Deus é imediata e avassaladora (v. 38): "Então caiu fogo do Senhor, e consumiu o holocausto, e a lenha, e as pedras, e o pó, e ainda lambeu a água que estava no rego". O fogo não consumiu apenas o sacrifício, mas até as pedras e a água. O impacto no povo é total (v. 39): eles caem sobre os seus rostos e confessam a soberania de Yahweh. O falso sistema religioso é destruído, e os falsos profetas são executados (v. 40), limpando a terra da idolatria.`
      }
    ],
    conclusion: `1 Reis 18:30-40 nos lembra que não podemos "coxear entre dois pensamentos" (v. 21). Deus exige devoção exclusiva. A história do Carmelo nos ensina que o fogo de Deus (o avivamento e a presença do Espírito Santo) não cai sobre altares quebrados. Precisamos primeiro restaurar o altar da adoração e da obediência nas nossas vidas. Quando oramos com o motivo puro de glorificar a Deus e trazer os corações de volta para Ele, Deus responde com poder. O Senhor é Deus, e não há outro.`
  },
  {
    id: '1ki_19_9_18',
    bookId: '1KI',
    chapter: 19,
    startVerse: 9,
    endVerse: 18,
    title: 'Elias na Caverna',
    theme: 'A Depressão Espiritual e a Brisa Suave',
    introduction: `Logo após a maior vitória da sua vida no Monte Carmelo, Elias recebe uma ameaça de morte da rainha Jezabel. O grande profeta entra em pânico, foge para o deserto e pede para morrer. Exausto, deprimido e sentindo-se o único crente fiel na terra, ele se esconde em uma caverna no Monte Horebe (Sinai). O encontro de Deus com Elias na caverna é uma das passagens mais ternas da Bíblia sobre como Deus lida com o esgotamento emocional e espiritual dos Seus servos, revelando-se não no caos, mas no silêncio.`,
    points: [
      {
        verseRef: 'v. 9-10',
        title: 'A Pergunta Divina e a Queixa do Profeta',
        description: `Que Fazes Aqui, Elias? A palavra do Senhor vem a Elias na caverna com uma pergunta perscrutadora (v. 9). Deus não pergunta para obter informação, mas para fazer Elias refletir sobre a sua fuga. Elias responde com uma mistura de autojustificação e autopiedade (v. 10): "Tenho sido muito zeloso pelo Senhor... porque os filhos de Israel deixaram a tua aliança... e eu fiquei só, e buscam a minha vida para ma tirarem". Elias foca no seu próprio zelo e na maldade dos outros, perdendo a perspectiva da soberania de Deus.`
      },
      {
        verseRef: 'v. 11-14',
        title: 'O Vento, o Terremoto, o Fogo e a Voz Mansa',
        description: `Uma Voz Mansa e Delicada. Deus manda Elias sair da caverna (v. 11). Segue-se uma demonstração de poder natural: um vento forte que fende os montes, um terremoto e um fogo. Mas o texto repete: "o Senhor não estava no vento... não estava no terremoto... não estava no fogo" (v. 11-12). Após o caos, vem "uma voz mansa e delicada" (um murmúrio suave). Elias reconhece a presença de Deus no silêncio, cobre o rosto e sai (v. 13). Deus lhe faz a mesma pergunta, e Elias dá a mesma resposta deprimida (v. 14).`
      },
      {
        verseRef: 'v. 15-18',
        title: 'A Nova Comissão e a Correção da Perspectiva',
        description: `Conservei em Israel Sete Mil. Deus não discute com a depressão de Elias; Ele lhe dá um novo propósito. Deus manda Elias voltar pelo seu caminho e ungir novos reis (Hazael e Jeú) e um novo profeta para sucedê-lo (Eliseu) (v. 15-16). Deus garante que o julgamento sobre a idolatria virá (v. 17). Finalmente, Deus corrige a matemática distorcida de Elias (v. 18): "Também deixei ficar em Israel sete mil: todos os joelhos que não se dobraram a Baal". Elias não estava sozinho; Deus tinha um remanescente fiel.`
      }
    ],
    conclusion: `1 Reis 19:9-18 é um bálsamo para a alma cansada. A depressão espiritual frequentemente ataca logo após grandes vitórias, quando estamos fisicamente e emocionalmente esgotados. A nossa tendência é nos isolarmos na "caverna" da autopiedade. Deus nos ensina que Ele nem sempre fala através de eventos espetaculares (fogo e terremoto), mas frequentemente através da brisa suave da Sua Palavra. A cura para o esgotamento envolve descanso físico, ouvir a voz suave de Deus, receber uma nova missão e lembrar que nunca estamos sozinhos na obra do Senhor.`
  },
  {
    id: '2ki_2_1_14',
    bookId: '2KI',
    chapter: 2,
    startVerse: 1,
    endVerse: 14,
    title: 'A Ascensão de Elias',
    theme: 'A Transição de Liderança e a Porção Dobrada',
    introduction: `O ministério de Elias está chegando ao fim. Deus está prestes a levá-lo ao céu num redemoinho. O seu discípulo, Eliseu, sabe disso e recusa-se a deixá-lo, seguindo-o de Gilgal a Betel, a Jericó e, finalmente, ao rio Jordão. A jornada é um teste da persistência e do desejo espiritual de Eliseu. O clímax da história não é apenas a partida espetacular de Elias em carros de fogo, mas a transferência da unção profética para Eliseu, que pede ousadamente uma "porção dobrada" do espírito do seu mestre.`,
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Jornada Final e a Persistência do Discípulo',
        description: `Vive o Senhor... Que Não Te Deixarei. Três vezes Elias testa Eliseu, dizendo-lhe para ficar para trás, primeiro em Gilgal, depois em Betel e Jericó (v. 2, 4, 6). Em cada parada, os "filhos dos profetas" avisam Eliseu que o seu mestre será levado, mas ele os manda calar. Eliseu responde a Elias com um juramento inabalável: "Vive o Senhor, e vive a tua alma, que não te deixarei". A verdadeira sucessão espiritual exige tenacidade. Eliseu não estava interessado em conforto; ele queria estar presente no momento da transferência da unção.`
      },
      {
        verseRef: 'v. 7-10',
        title: 'A Travessia do Jordão e o Pedido Ousado',
        description: `Peço-te Que Haja Porção Dobrada. Elias fere as águas do Jordão com o seu manto, e elas se dividem (v. 8). Do outro lado, Elias faz a pergunta final (v. 9): "Pede-me o que queres que te faça, antes que seja tomado de ti". Eliseu não pede riqueza ou fama; ele pede a herança espiritual do primogênito: "Peço-te que haja porção dobrada de teu espírito sobre mim". Elias reconhece que é um pedido difícil (v. 10), pois a unção não é algo que um homem pode dar, mas estabelece uma condição: "Se me vires quando for tomado de ti, assim se te fará".`
      },
      {
        verseRef: 'v. 11-14',
        title: 'Os Carros de Fogo e o Manto de Elias',
        description: `Onde Está o Senhor Deus de Elias? De repente, carros e cavalos de fogo separam os dois, e Elias sobe ao céu num redemoinho (v. 11). Eliseu vê tudo, cumpre a condição e clama: "Meu pai, meu pai, carros de Israel e seus cavaleiros!" (v. 12). Ele pega o manto que caiu de Elias, volta à margem do Jordão, fere as águas e clama (v. 14): "Onde está o Senhor Deus de Elias?". As águas se dividem novamente. O milagre prova que o poder não estava em Elias ou no manto, mas no Deus de Elias, que agora repousava sobre Eliseu.`
      }
    ],
    conclusion: `2 Reis 2:1-14 nos ensina sobre a fome espiritual e a sucessão ministerial. Deus procura discípulos que tenham a persistência de Eliseu, que não se contentam com uma religião superficial, mas buscam desesperadamente a unção do Espírito Santo para cumprir o seu chamado. O manto da liderança passa de uma geração para outra, mas o poder pertence exclusivamente a Deus. A pergunta da Igreja hoje não deve ser "Onde estão os grandes homens do passado?", mas sim "Onde está o Senhor Deus de Elias?", pois Ele é o mesmo ontem, hoje e eternamente.`
  },
  {
    id: '2ch_7_11_16',
    bookId: '2CH',
    chapter: 7,
    startVerse: 11,
    endVerse: 16,
    title: 'A Promessa de Avivamento',
    theme: 'As Condições para a Cura da Terra',
    introduction: `Após Salomão terminar a construção do magnífico Templo em Jerusalém e oferecer a oração de dedicação (capítulo 6), o Senhor lhe aparece de noite. Deus aceita o Templo como o Seu lugar de habitação, mas também emite um aviso solene sobre o futuro. Deus sabe que o povo pecará e enfrentará o julgamento divino (secas, gafanhotos, pestes). No meio desse aviso, Deus entrega 2 Crônicas 7:14, o versículo mais famoso da Bíblia sobre avivamento espiritual, estabelecendo as quatro condições inegociáveis para a restauração de uma nação.`,
    points: [
      {
        verseRef: 'v. 11-13',
        title: 'A Aceitação do Templo e a Realidade do Julgamento',
        description: `Se Eu Cerrar os Céus... Deus confirma a Salomão que ouviu a sua oração e escolheu o lugar para casa de sacrifício (v. 12). Mas Deus imediatamente aborda a realidade do pecado humano e a disciplina divina (v. 13): "Se eu cerrar os céus, e não houver chuva; ou se ordenar aos gafanhotos que consumam a terra; ou se enviar a peste entre o meu povo". Deus assume a responsabilidade soberana sobre os desastres naturais como ferramentas de disciplina para chamar o Seu povo de volta à aliança.`
      },
      {
        verseRef: 'v. 14a',
        title: 'As Quatro Condições do Povo de Deus',
        description: `Se o Meu Povo... Se Humilhar, e Orar... A promessa de avivamento não é para o mundo, mas para a Igreja: "Se o meu povo, que se chama pelo meu nome..." (v. 14). Deus estabelece quatro passos: 1) "Se humilhar" (reconhecer o orgulho e a falência espiritual); 2) "E orar" (buscar a Deus em dependência desesperada); 3) "E buscar a minha face" (desejar a presença de Deus mais do que as Suas bênçãos); 4) "E se converter dos seus maus caminhos" (o arrependimento prático, abandonando o pecado). A oração sem arrependimento é inútil.`
      },
      {
        verseRef: 'v. 14b-16',
        title: 'As Três Promessas de Deus e a Presença Contínua',
        description: `Então Eu Ouvirei, Perdoarei e Sararei. Se o povo cumprir as condições, Deus garante três respostas (v. 14b): 1) "Então eu ouvirei dos céus" (restauração da comunhão); 2) "E perdoarei os seus pecados" (restauração moral); 3) "E sararei a sua terra" (restauração física e social). O avivamento espiritual sempre resulta em cura prática. Deus promete que os Seus olhos estarão abertos e os Seus ouvidos atentos às orações feitas naquele lugar (v. 15), e que o Seu coração estará ali todos os dias (v. 16).`
      }
    ],
    conclusion: `2 Crônicas 7:11-16 é o mapa divino para o avivamento. Quando a nossa vida, a nossa igreja ou a nossa nação estão secas e assoladas por "pragas" espirituais, a solução não é a política, a economia ou novos métodos eclesiásticos. A solução começa quando o povo de Deus assume a responsabilidade, desce do pedestal do orgulho, dobra os joelhos em oração, busca a face do Senhor e abandona os seus pecados de estimação. O avivamento não é um acidente; é a resposta garantida de Deus ao arrependimento genuíno do Seu povo.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 16b).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
