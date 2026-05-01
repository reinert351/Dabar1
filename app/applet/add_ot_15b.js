const fs = require('fs');

const newPericopes = [
  {
    id: 'lev_16_1_10',
    bookId: 'LEV',
    chapter: 16,
    startVerse: 1,
    endVerse: 10,
    title: 'O Dia da Expiação',
    theme: 'O Sangue, o Bode Emissário e a Remoção do Pecado',
    introduction: `O livro de Levítico detalha como um Deus santo pode habitar no meio de um povo pecador. O capítulo 16 descreve o Yom Kippur, o Dia da Expiação, o dia mais sagrado do calendário judaico. Era o único dia do ano em que o Sumo Sacerdote podia entrar no Santo dos Santos. O ritual envolvia dois bodes que, juntos, ilustravam a obra completa da expiação: um morria para pagar o preço do pecado (propiciação), e o outro era enviado para o deserto para remover a culpa do povo (expiação). É uma das sombras mais perfeitas da obra de Cristo na cruz.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Santidade de Deus e a Preparação do Sacerdote',
        description: `Não Entre no Santuário em Todo o Tempo. Deus adverte Arão, após a morte dos seus filhos (Nadabe e Abiú), que a presença divina é perigosa para o pecador (v. 2): "Dize a Arão... que não entre no santuário em todo o tempo... para que não morra". O acesso a Deus era severamente restrito. Para entrar, Arão não podia usar as suas vestes gloriosas de Sumo Sacerdote, mas tinha que se lavar e vestir túnicas simples de linho branco (v. 4), simbolizando a pureza e a humilhação necessárias para comparecer diante de Deus.`
      },
      {
        verseRef: 'v. 5-8',
        title: 'Os Dois Bodes e o Lançar das Sortes',
        description: `Um para o Senhor, e Outro para Azazel. Arão devia trazer um novilho para expiação dos seus próprios pecados (v. 6) e dois bodes da congregação (v. 5). Ele apresentava os dois bodes diante do Senhor e lançava sortes sobre eles (v. 7-8): "uma sorte pelo Senhor, e a outra sorte por Azazel (o bode emissário)". Os dois bodes representavam dois aspectos inseparáveis da salvação: o pagamento da dívida (o bode do Senhor) e a remoção da culpa (o bode emissário).`
      },
      {
        verseRef: 'v. 9-10',
        title: 'A Morte e a Remoção: A Obra Completa',
        description: `Fará Expiação com Ele. O bode que caía a sorte para o Senhor era oferecido como sacrifício pelo pecado (v. 9). O seu sangue seria levado para dentro do véu e aspergido sobre o propiciatório para apaziguar a ira de Deus. O outro bode era apresentado vivo (v. 10). Mais tarde no capítulo (v. 21-22), Arão colocaria as mãos sobre a cabeça deste bode, confessaria os pecados de Israel, e o bode seria enviado para o deserto, levando sobre si as iniquidades do povo para uma terra solitária, para nunca mais voltar.`
      }
    ],
    conclusion: `Levítico 16:1-10 é o evangelho em forma de ritual. Jesus Cristo cumpriu perfeitamente o papel dos dois bodes. Como o primeiro bode, Ele derramou o Seu sangue para satisfazer a justiça de Deus (Romanos 3:25). Como o segundo bode (o bode emissário), Ele carregou os nossos pecados para fora do acampamento, removendo a nossa culpa para tão longe quanto o Oriente dista do Ocidente (Salmo 103:12). Por causa do Seu sacrifício perfeito, o véu foi rasgado, e nós agora temos livre acesso à presença de Deus em todo o tempo (Hebreus 10:19-20).`
  },
  {
    id: 'num_21_4_9',
    bookId: 'NUM',
    chapter: 21,
    startVerse: 4,
    endVerse: 9,
    title: 'A Serpente de Bronze',
    theme: 'O Julgamento, a Fé e a Cura',
    introduction: `O povo de Israel está no fim da sua jornada no deserto, mas a sua atitude não mudou. Impacientes com o caminho, eles voltam a murmurar contra Deus e contra Moisés, desprezando o maná (o pão do céu). Como disciplina, Deus envia serpentes venenosas que mordem e matam muitos. Quando o povo se arrepende, Deus providencia um meio de cura que parece estranho à mente humana, mas que Jesus Cristo mais tarde usaria como a ilustração perfeita da Sua morte na cruz e da salvação pela fé (João 3:14-15).`,
    points: [
      {
        verseRef: 'v. 4-5',
        title: 'A Impaciência e o Desprezo pela Provisão Divina',
        description: `A Nossa Alma Tem Fastio Deste Pão Vil. A raiz do pecado de Israel foi a impaciência com o caminho que Deus escolheu (v. 4). A impaciência gerou murmuração (v. 5): "Por que nos fizestes subir do Egito, para que morramos neste deserto?". A pior parte da rebelião foi o desprezo pela graça de Deus: "a nossa alma tem fastio deste pão vil". Eles chamaram o maná, a provisão milagrosa de Deus, de "pão vil" (miserável). Desprezar a provisão de Deus é um convite direto ao Seu julgamento.`
      },
      {
        verseRef: 'v. 6-7',
        title: 'O Julgamento Venenoso e o Arrependimento',
        description: `O Senhor Enviou Serpentes Ardentes. A resposta de Deus à rebelião foi imediata e letal (v. 6): "Então o Senhor mandou entre o povo serpentes ardentes, que morderam o povo; e morreu muito povo de Israel". O veneno das serpentes era uma manifestação física do veneno da rebelião que já estava no coração deles. A dor traz o povo de volta à sanidade (v. 7): "Pecamos, porquanto falamos contra o Senhor e contra ti; ora ao Senhor que tire de nós estas serpentes". Moisés, o mediador, ora pelo povo.`
      },
      {
        verseRef: 'v. 8-9',
        title: 'O Olhar da Fé e a Cura Sobrenatural',
        description: `Todo Aquele que For Mordido, Olhando para Ela, Sarará. Deus não tira as serpentes. Em vez disso, Ele providencia um antídoto (v. 8): "Faze-te uma serpente ardente, e põe-na sobre uma haste; e será que viverá todo o que, tendo sido mordido, olhar para ela". Moisés faz uma serpente de metal (bronze) e a levanta (v. 9). A cura não exigia obras, rituais ou remédios; exigia apenas que o moribundo reconhecesse a sua condição e olhasse com fé para o objeto que Deus havia providenciado.`
      }
    ],
    conclusion: `Números 21:4-9 é uma das imagens mais poderosas da salvação. Todos nós fomos mordidos pela "serpente" do pecado, e o veneno da morte corre nas nossas veias. A religião nos diz para tentarmos curar a nós mesmos com boas obras. Mas Jesus disse a Nicodemos: "E, como Moisés levantou a serpente no deserto, assim importa que o Filho do homem seja levantado; para que todo aquele que nele crê não pereça, mas tenha a vida eterna" (João 3:14-15). A salvação vem simplesmente por olhar para Cristo crucificado com os olhos da fé.`
  },
  {
    id: 'deu_6_4_9',
    bookId: 'DEU',
    chapter: 6,
    startVerse: 4,
    endVerse: 9,
    title: 'O Shemá',
    theme: 'A Devoção Exclusiva e a Transmissão da Fé',
    introduction: `O livro de Deuteronômio é uma série de sermões de Moisés à nova geração de Israel, preparando-os para entrar na Terra Prometida. Deuteronômio 6:4-9 é conhecido como o "Shemá" (a palavra hebraica para "Ouve"), a confissão de fé central do judaísmo. Jesus citou esta passagem como o "grande e primeiro mandamento" (Mateus 22:37-38). O texto não apenas declara a unicidade de Deus, mas exige uma devoção total e incondicional, e estabelece o lar como o principal centro de discipulado e transmissão da fé para a próxima geração.`,
    points: [
      {
        verseRef: 'v. 4',
        title: 'A Confissão Central: A Unicidade de Deus',
        description: `O Senhor Nosso Deus é o Único Senhor. O chamado à atenção é absoluto (v. 4): "Ouve, Israel, o Senhor nosso Deus é o único Senhor". Num mundo antigo dominado pelo politeísmo (onde cada nação e cada aspecto da natureza tinha o seu próprio deus), esta declaração era revolucionária. Yahweh não é apenas o melhor deus entre muitos; Ele é o único Deus verdadeiro. Porque Ele é único, Ele exige e merece lealdade exclusiva.`
      },
      {
        verseRef: 'v. 5',
        title: 'O Grande Mandamento: O Amor Total',
        description: `Amarás, Pois, o Senhor Teu Deus. A resposta à unicidade de Deus não é apenas o assentimento intelectual, mas o amor apaixonado (v. 5): "Amarás, pois, o Senhor teu Deus de todo o teu coração, e de toda a tua alma, e de todas as tuas forças". O amor bíblico não é apenas um sentimento, mas uma lealdade pactual. Deus exige o ser humano inteiro: o "coração" (mente e vontade), a "alma" (vida e emoções) e as "forças" (energia e recursos). Não há espaço para um coração dividido.`
      },
      {
        verseRef: 'v. 6-9',
        title: 'O Discipulado Contínuo: A Palavra no Lar',
        description: `As Intimarás a Teus Filhos. O amor a Deus deve ser internalizado (v. 6): "E estas palavras... estarão no teu coração". Mas não pode parar aí; deve ser transmitido (v. 7): "E as intimarás (ensinarás diligentemente) a teus filhos". O discipulado não é um evento semanal, mas um estilo de vida contínuo: "falando delas assentado em tua casa, e andando pelo caminho, e deitando-te e levantando-te". A Palavra de Deus deve permear cada aspecto da vida, visível nas ações (mão), nos pensamentos (testa) e no ambiente familiar (umbrais das portas) (v. 8-9).`
      }
    ],
    conclusion: `Deuteronômio 6:4-9 nos lembra que o cristianismo não é uma religião de meio-termo. O Deus único exige um amor total. Além disso, o texto coloca a responsabilidade primária da educação espiritual onde ela pertence: nos pais. A igreja não pode substituir o lar. Se quisermos que a próxima geração ame a Deus, a Palavra de Deus deve estar primeiro nos nossos próprios corações, e depois deve ser o assunto natural e constante das nossas conversas diárias, desde o momento em que acordamos até a hora de dormir.`
  },
  {
    id: 'jos_24_14_18',
    bookId: 'JOS',
    chapter: 24,
    startVerse: 14,
    endVerse: 18,
    title: 'A Escolha de Josué',
    theme: 'O Compromisso Inegociável com o Senhor',
    introduction: `No final da sua vida, após liderar Israel na conquista da Terra Prometida, Josué reúne todas as tribos em Siquém para um discurso de despedida. Ele reconta a história da fidelidade de Deus desde Abraão até aquele dia. No clímax do seu discurso, Josué confronta o povo com uma escolha inevitável. Ele sabe que a idolatria é uma tentação constante, e exige que o povo decida de uma vez por todas a quem irão servir. A sua declaração pessoal tornou-se um dos lemas mais famosos da fé cristã.`,
    points: [
      {
        verseRef: 'v. 14',
        title: 'O Chamado à Sinceridade e o Abandono dos Ídolos',
        description: `Temei ao Senhor, e Servi-o com Sinceridade. Josué baseia o seu apelo na misericórdia passada de Deus (v. 14): "Agora, pois, temei ao Senhor, e servi-o com sinceridade e com verdade". O serviço a Deus não pode ser hipócrita. Para servir a Deus, é necessário um corte radical com o passado: "e deitai fora os deuses aos quais serviram vossos pais dalém do rio e no Egito, e servi ao Senhor". A idolatria não era apenas um problema das nações vizinhas; era um câncer que ainda estava presente dentro do próprio acampamento de Israel.`
      },
      {
        verseRef: 'v. 15',
        title: 'O Ultimato e a Declaração de Josué',
        description: `Escolhei Hoje a Quem Sirvais. Josué não permite a neutralidade (v. 15): "Porém, se vos parece mal aos vossos olhos servir ao Senhor, escolhei hoje a quem sirvais". Eles podiam escolher os deuses antigos da Mesopotâmia ou os deuses novos dos amorreus, mas não podiam misturá-los com Yahweh. A indecisão já é uma decisão contra Deus. Então, Josué faz a sua declaração de liderança: "Porém eu e a minha casa serviremos ao Senhor". Ele não espera para ver o que a maioria fará; a sua fé não é ditada pelo consenso popular.`
      },
      {
        verseRef: 'v. 16-18',
        title: 'A Resposta do Povo e a Memória da Salvação',
        description: `Nunca Nos Aconteça que Deixemos ao Senhor. O povo responde com veemência (v. 16): "Nunca nos aconteça que deixemos ao Senhor para servirmos a outros deuses". Eles baseiam a sua decisão na memória da salvação (v. 17-18): foi o Senhor quem os tirou da casa da servidão no Egito, fez grandes sinais e os guardou por todo o caminho, expulsando os inimigos de diante deles. A verdadeira adoração e o compromisso duradouro nascem sempre da gratidão por aquilo que Deus já fez por nós.`
      }
    ],
    conclusion: `Josué 24:14-18 nos ensina que a fé exige uma escolha diária e intencional. Não podemos servir a Deus e aos ídolos do nosso tempo (dinheiro, sucesso, aprovação humana). O chamado de Josué ecoa hoje: "Escolhei hoje a quem sirvais". A verdadeira liderança espiritual, seja na igreja ou no lar, começa com a coragem de ficar sozinho, se necessário, e declarar: "Não importa o que a cultura faça, não importa o que a maioria escolha, eu e a minha casa serviremos ao Senhor".`
  },
  {
    id: 'jdg_16_15_21',
    bookId: 'JDG',
    chapter: 16,
    startVerse: 15,
    endVerse: 21,
    title: 'A Queda de Sansão',
    theme: 'O Brincar com o Pecado e a Perda da Força',
    introduction: `Sansão foi um juiz de Israel abençoado com força sobrenatural, destinado desde o ventre a começar a livrar Israel dos filisteus. No entanto, a sua vida foi marcada pela falta de domínio próprio e pela atração fatal por mulheres filisteias. O capítulo 16 narra o seu relacionamento tóxico com Dalila, que foi subornada para descobrir o segredo da sua força. A queda de Sansão é uma das histórias mais trágicas da Bíblia, ilustrando o perigo mortal de brincar com a tentação e a ilusão de que podemos pecar sem consequências.`,
    points: [
      {
        verseRef: 'v. 15-17',
        title: 'A Pressão Emocional e a Quebra do Voto',
        description: `Descobriu-lhe Todo o Seu Coração. Dalila usa a manipulação emocional após três tentativas frustradas (v. 15): "Como dirás: Tenho-te amor, não estando comigo o teu coração?". Ela o importuna todos os dias até que a alma dele se angustia até a morte (v. 16). Exausto, Sansão cede e quebra o seu voto de nazireu (v. 17): "Nunca passou navalha pela minha cabeça, porque sou nazireu de Deus desde o ventre de minha mãe; se vier a ser rapado, ir-se-á de mim a minha força". O segredo não estava no cabelo em si, mas na consagração que o cabelo representava.`
      },
      {
        verseRef: 'v. 18-20a',
        title: 'O Sono do Pecado e a Ilusão da Força',
        description: `Sairei Ainda Esta Vez. Dalila percebe que ele finalmente falou a verdade. Ela o faz dormir nos seus joelhos (o sono da complacência espiritual) e manda cortar as sete tranças do seu cabelo (v. 19). A sua força se retira. Quando os filisteus chegam, Dalila grita: "Os filisteus vêm sobre ti, Sansão!" (v. 20). Sansão acorda e diz a frase mais iludida da sua vida: "Sairei ainda esta vez como dantes, e me sacudirei". Ele achava que podia continuar brincando com o pecado e mantendo a unção de Deus.`
      },
      {
        verseRef: 'v. 20b-21',
        title: 'A Tragédia Suprema e as Consequências da Queda',
        description: `O Senhor Já se Tinha Retirado Dele. O final do versículo 20 é uma das frases mais tristes das Escrituras: "Porque ele não sabia que já o Senhor se tinha retirado dele". A força de Sansão não era dele; era a presença do Espírito de Deus. Quando Deus se retirou, Sansão tornou-se como qualquer outro homem. As consequências foram imediatas e brutais (v. 21): os filisteus o prenderam, arrancaram-lhe os olhos (ele foi destruído por aquilo que cobiçava olhar), amarraram-no com cadeias de bronze e o forçaram a moer no cárcere como um animal.`
      }
    ],
    conclusion: `Juízes 16:15-21 é um alerta aterrorizante sobre o poder destrutivo do pecado acariciado. Sansão não perdeu a sua força de uma vez; foi um processo gradual de concessões. Ele achava que estava no controle, mas o pecado é um mestre cruel que sempre nos cega antes de nos escravizar. A história de Sansão nos ensina que os dons e talentos naturais não substituem o caráter e a consagração. Não podemos dormir no colo de Dalila e esperar acordar no poder do Espírito Santo.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 15b).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
