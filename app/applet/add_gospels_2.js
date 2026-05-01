const fs = require('fs');

const newPericopes = [
  {
    id: 'luk_18_9_14',
    bookId: 'LUK',
    chapter: 18,
    startVerse: 9,
    endVerse: 14,
    title: 'O Fariseu, o Publicano e a Justificação',
    theme: 'O Orgulho Religioso vs. O Arrependimento Humilde',
    introduction: `Jesus contou esta parábola especificamente para "alguns que confiavam em si mesmos, crendo que eram justos, e desprezavam os outros" (v. 9). A história apresenta dois homens que sobem ao templo para orar. Um é o modelo de excelência moral e religiosa da época (o fariseu); o outro é o símbolo da traição e corrupção (o publicano, cobrador de impostos). O veredito de Jesus no final da parábola chocou os Seus ouvintes e continua a ser uma das declarações mais profundas sobre a doutrina da justificação pela fé em toda a Bíblia.`,
    points: [
      {
        verseRef: 'v. 10-12',
        title: 'O Orgulho Religioso do Fariseu',
        description: `A Oração Centrada no Ego. O fariseu fica em pé e ora "consigo mesmo" (v. 11). A sua oração não é uma petição a Deus, mas um currículo de autoelogio. Ele começa agradecendo a Deus, mas o foco é a sua própria superioridade: "Ó Deus, graças te dou porque não sou como os demais homens, roubadores, injustos e adúlteros; nem ainda como este publicano". Ele define a justiça comparando-se com os piores da sociedade. Em seguida, ele lista os seus méritos (v. 12): "Jejuo duas vezes na semana, e dou os dízimos de tudo quanto possuo". Ele faz mais do que a lei exige. Ele não pede perdão porque não acha que precisa; ele acha que Deus tem sorte de tê-lo.`
      },
      {
        verseRef: 'v. 13',
        title: 'O Arrependimento Desesperado do Publicano',
        description: `O Clamo por Misericórdia. O publicano, ciente da sua indignidade, "estando em pé, de longe, nem ainda queria levantar os olhos ao céu, mas batia no peito" (v. 13). A sua postura corporal grita arrependimento e vergonha. A sua oração é curta, desesperada e teologicamente profunda: "Ó Deus, tem misericórdia de mim, pecador!". No grego original, ele diz "O pecador", reconhecendo-se como o pior de todos. A palavra que ele usa para "misericórdia" (hilaskomai) está ligada à propiciação (o sacrifício que apazigua a ira de Deus). Ele não oferece méritos, apenas implora que a ira de Deus seja desviada dele através de um sacrifício.`
      },
      {
        verseRef: 'v. 14',
        title: 'O Veredito Divino da Justificação',
        description: `A Inversão da Graça. O veredito de Jesus é um terremoto teológico: "Digo-vos que este (o publicano) desceu justificado para sua casa, e não aquele (o fariseu)". O homem moralmente corrupto que clamou por graça foi declarado justo por Deus; o homem moralmente excelente que confiou nas suas próprias obras permaneceu condenado. Jesus explica a lei espiritual do Reino: "porque qualquer que a si mesmo se exalta será humilhado, e qualquer que a si mesmo se humilha será exaltado". A justificação não é uma recompensa para os bons, mas um presente para os culpados que reconhecem a sua falência espiritual.`
      }
    ],
    conclusion: `Lucas 18:9-14 destrói a religião baseada no mérito. O maior perigo espiritual não é a imoralidade escancarada, mas o orgulho religioso que nos cega para o nosso próprio pecado e nos faz desprezar os outros. Não podemos ser justificados diante de Deus apresentando o nosso currículo de boas obras. A única oração que abre as portas do céu é o clamor desesperado de um coração quebrantado: "Ó Deus, tem misericórdia de mim, pecador!".`
  },
  {
    id: 'luk_24_13_35',
    bookId: 'LUK',
    chapter: 24,
    startVerse: 13,
    endVerse: 35,
    title: 'O Caminho de Emaús e o Coração Abrasado',
    theme: 'A Cegueira Espiritual, as Escrituras e a Revelação do Cristo Ressurreto',
    introduction: `No dia da ressurreição, dois discípulos estão caminhando de Jerusalém para a aldeia de Emaús. Eles estão esmagados pela tristeza e pela decepção, acreditando que a morte de Jesus na cruz significava o fim da esperança de redenção para Israel. O Cristo ressuscitado se junta a eles, mas os seus olhos estão "impedidos de o reconhecer". O que se segue é o maior estudo bíblico da história, onde Jesus usa o Antigo Testamento para provar que a cruz não foi um acidente trágico, mas o plano soberano de Deus para a salvação.`,
    points: [
      {
        verseRef: 'v. 13-24',
        title: 'A Cegueira da Decepção e a Esperança Frustrada',
        description: `A Teologia da Glória sem a Cruz. Jesus se aproxima e pergunta sobre o que eles estão discutindo (v. 17). Cleopas, surpreso com a aparente ignorância do forasteiro, resume a vida de Jesus e a Sua crucificação (v. 18-20). O versículo 21 revela a raiz do desespero deles: "E nós esperávamos que fosse ele o que remisse Israel". Eles tinham uma teologia errada do Messias: esperavam um libertador político e militar que traria glória imediata, sem sofrimento. A cruz destruiu essa falsa esperança. Mesmo tendo ouvido os relatos das mulheres sobre o túmulo vazio e os anjos (v. 22-24), a decepção deles os cegava para a verdade da ressurreição.`
      },
      {
        verseRef: 'v. 25-27',
        title: 'A Repreensão e a Exposição Cristocêntrica das Escrituras',
        description: `Cristo em Todo o Antigo Testamento. Jesus os repreende duramente (v. 25): "Ó néscios, e tardos de coração para crer tudo o que os profetas disseram!". O problema deles não era falta de evidência, mas lentidão de coração para crer na Palavra de Deus. Jesus faz a pergunta teológica crucial (v. 26): "Porventura não convinha que o Cristo padecesse estas coisas e entrasse na sua glória?". A cruz era uma necessidade divina. Então, Jesus faz a maior exposição bíblica (v. 27): "E, começando por Moisés, e por todos os profetas, explicava-lhes o que dele se achava em todas as Escrituras". O Antigo Testamento não é uma coleção de histórias morais; é um livro sobre Jesus.`
      },
      {
        verseRef: 'v. 28-35',
        title: 'Os Olhos Abertos e o Coração Abrasado',
        description: `A Revelação na Comunhão. Ao chegarem a Emaús, eles insistem para que o forasteiro fique com eles (v. 28-29). Durante a refeição, Jesus assume o papel de anfitrião: "tomou o pão, e abençoou-o, e, partindo-o, lho deu" (v. 30). Nesse momento de comunhão, "abriram-se-lhes então os olhos, e o conheceram, e ele desapareceu-lhes" (v. 31). A revelação de Cristo não vem apenas pelo intelecto, mas pela iluminação espiritual. Eles refletem sobre a experiência (v. 32): "Porventura não ardia em nós o nosso coração quando, pelo caminho, nos falava, e quando nos abria as Escrituras?". A Palavra de Deus explicada à luz de Cristo incendeia a alma. Imediatamente, eles voltam para Jerusalém para testemunhar (v. 33-35).`
      }
    ],
    conclusion: `Lucas 24:13-35 nos ensina como ler a Bíblia e como lidar com a decepção. Quando as nossas expectativas sobre Deus são frustradas, muitas vezes é porque a nossa teologia está errada. A cura para a nossa cegueira espiritual e para o nosso desespero é voltar para as Escrituras e procurar por Jesus em cada página. Quando vemos que o sofrimento da cruz era o caminho planejado por Deus para a glória da ressurreição, os nossos olhos se abrem, a nossa esperança é restaurada e os nossos corações voltam a arder de amor por Ele.`
  },
  {
    id: 'jhn_4_1_26',
    bookId: 'JHN',
    chapter: 4,
    startVerse: 1,
    endVerse: 26,
    title: 'A Mulher Samaritana e a Água Viva',
    theme: 'A Sede da Alma, a Exposição do Pecado e a Verdadeira Adoração',
    introduction: `O encontro de Jesus com a mulher samaritana no poço de Jacó é uma obra-prima de evangelismo pessoal. Jesus quebra todas as barreiras culturais, raciais e de gênero da Sua época (um rabino judeu falando com uma mulher samaritana de má reputação) para buscar uma única alma perdida. Ele usa a água física do poço para ilustrar a sede espiritual profunda da mulher, expõe gentilmente o seu pecado para levá-la ao arrependimento e revela a natureza da verdadeira adoração que Deus procura.`,
    points: [
      {
        verseRef: 'v. 1-15',
        title: 'O Encontro Inesperado e a Oferta da Água Viva',
        description: `A Sede Insaciável. Jesus, cansado da viagem, pede água à mulher (v. 7). Ela fica chocada com a quebra de protocolo (v. 9). Jesus imediatamente muda a conversa do físico para o espiritual (v. 10): "Se tu conheceras o dom de Deus, e quem é o que te diz: Dá-me de beber, tu lhe pedirias, e ele te daria água viva". A mulher não entende e foca na profundidade do poço físico (v. 11-12). Jesus explica a diferença (v. 13-14): "Qualquer que beber desta água tornará a ter sede; Mas aquele que beber da água que eu lhe der nunca terá sede, porque a água que eu lhe der se fará nele uma fonte de água que salte para a vida eterna". O mundo oferece prazeres que nos deixam com mais sede; Cristo oferece o Espírito Santo que satisfaz a alma eternamente.`
      },
      {
        verseRef: 'v. 16-19',
        title: 'A Exposição do Pecado e a Fuga Religiosa',
        description: `O Diagnóstico do Coração. A mulher pede essa água (v. 15), mas antes de receber a graça, ela precisa confrontar o seu pecado. Jesus diz (v. 16): "Vai, chama o teu marido, e vem cá". Ela responde com uma meia-verdade: "Não tenho marido" (v. 17). Jesus expõe a sua vida de imoralidade e relacionamentos quebrados (v. 18): "tiveste cinco maridos, e o que agora tens não é teu marido". Ela estava tentando saciar a sua sede espiritual com relacionamentos humanos, e estava vazia. Sentindo-se exposta, ela tenta mudar de assunto para um debate teológico sobre o local correto de adoração (v. 19-20).`
      },
      {
        verseRef: 'v. 20-26',
        title: 'A Verdadeira Adoração e a Revelação do Messias',
        description: `Adoração em Espírito e em Verdade. Jesus não foge da pergunta, mas a eleva (v. 21-24). Ele declara que a adoração não está mais presa a um local geográfico (o monte Gerizim ou Jerusalém). "Mas a hora vem, e agora é, em que os verdadeiros adoradores adorarão o Pai em espírito e em verdade; porque o Pai procura a tais que assim o adorem" (v. 23). Deus é Espírito (v. 24). A adoração verdadeira exige o Espírito Santo (o coração engajado e regenerado) e a Verdade (a mente submissa à revelação da Palavra de Deus). A mulher menciona a esperança do Messias (v. 25), e Jesus faz a Sua declaração mais clara de identidade até aquele momento (v. 26): "Eu o sou, eu que falo contigo".`
      }
    ],
    conclusion: `João 4:1-26 nos mostra que Jesus conhece os nossos segredos mais obscuros e, ainda assim, nos procura com graça. Todos nós nascemos com uma sede espiritual profunda que tentamos saciar com dinheiro, sucesso, relacionamentos ou religião, mas acabamos sempre voltando ao "poço" vazios. Apenas Jesus Cristo pode nos dar a "água viva" do Espírito Santo, que perdoa os nossos pecados, satisfaz a nossa alma e nos transforma em verdadeiros adoradores do Pai.`
  },
  {
    id: 'jhn_6_35_51',
    bookId: 'JHN',
    chapter: 6,
    startVerse: 35,
    endVerse: 51,
    title: 'Jesus, o Pão da Vida',
    theme: 'A Satisfação Espiritual, a Soberania de Deus e a Fé',
    introduction: `Após o milagre da multiplicação dos pães e peixes, a multidão procura Jesus querendo fazê-Lo rei, esperando que Ele resolvesse os seus problemas econômicos e políticos. Jesus os confronta, dizendo que eles estão buscando a comida que perece, em vez da comida que permanece para a vida eterna. Neste grande discurso, Jesus faz a primeira das Suas sete declarações "Eu Sou" no Evangelho de João. Ele se apresenta como o verdadeiro maná que desceu do céu, ensinando que a salvação é uma obra soberana do Pai e que a fé é o ato de "comer" esse pão espiritual.`,
    points: [
      {
        verseRef: 'v. 35-40',
        title: 'A Declaração "Eu Sou" e a Segurança Eterna',
        description: `A Fome Saciada. Jesus faz a declaração central (v. 35): "Eu sou o pão da vida; aquele que vem a mim não terá fome, e quem crê em mim nunca terá sede". Ele não apenas *dá* o pão; Ele *é* o pão. A fé é descrita como "vir" a Ele e "crer" nEle. Jesus então explica a mecânica da salvação (v. 37): "Todo o que o Pai me dá virá a mim; e o que vem a mim de maneira nenhuma o lançarei fora". A salvação começa com a eleição soberana do Pai (que dá um povo ao Filho). A resposta humana é vir a Cristo. A garantia divina é que Cristo nunca rejeitará quem vem a Ele. A vontade do Pai é que o Filho não perca nenhum dos eleitos, mas os ressuscite no último dia (v. 39-40).`
      },
      {
        verseRef: 'v. 41-46',
        title: 'A Murmuração e a Atração Soberana do Pai',
        description: `A Incapacidade Humana. Os judeus começam a murmurar (v. 41-42), tropeçando na humanidade de Jesus. Eles conheciam a Sua família terrena e não podiam aceitar a Sua origem celestial. Jesus responde com uma das doutrinas mais fortes sobre a depravação humana (v. 44): "Ninguém pode vir a mim, se o Pai que me enviou o não trouxer (atrair); e eu o ressuscitarei no último dia". O ser humano natural está tão morto no pecado que não tem a capacidade moral ou o desejo de vir a Cristo por si mesmo. É necessária uma atração irresistível e interna operada pelo Pai (através do Espírito Santo) para que alguém creia. Todos os que são assim "ensinados por Deus" vêm a Cristo (v. 45).`
      },
      {
        verseRef: 'v. 47-51',
        title: 'O Pão Vivo que Desceu do Céu e a Dádiva da Vida',
        description: `O Contraste com o Maná. Jesus reitera a promessa (v. 47): "Na verdade, na verdade vos digo que aquele que crê em mim tem a vida eterna". Ele contrasta a Si mesmo com o maná do Antigo Testamento (v. 49-50): "Vossos pais comeram o maná no deserto, e morreram. Este é o pão que desce do céu, para que o que dele comer não morra". O maná físico sustentou a vida biológica temporariamente; Cristo sustenta a vida espiritual eternamente. O clímax do discurso aponta para a cruz (v. 51): "Eu sou o pão vivo que desceu do céu... e o pão que eu der é a minha carne, que eu darei pela vida do mundo". A vida eterna só é possível porque Jesus sacrificou o Seu próprio corpo na cruz.`
      }
    ],
    conclusion: `João 6:35-51 nos confronta com as nossas verdadeiras motivações. Estamos buscando Jesus apenas pelo que Ele pode fazer por nós nesta vida (saúde, prosperidade, conforto), ou O estamos buscando porque Ele é o Pão da Vida que satisfaz a fome eterna da nossa alma? A salvação é um milagre da graça soberana de Deus do começo ao fim. Se viemos a Cristo, é porque o Pai nos atraiu; e se estamos em Cristo, temos a garantia absoluta de que Ele nunca nos lançará fora e nos ressuscitará no último dia.`
  },
  {
    id: 'jhn_10_1_18',
    bookId: 'JHN',
    chapter: 10,
    startVerse: 1,
    endVerse: 18,
    title: 'O Bom Pastor e as Suas Ovelhas',
    theme: 'O Cuidado, o Sacrifício e a Autoridade de Cristo',
    introduction: `No Antigo Testamento, Deus frequentemente repreendia os líderes de Israel chamando-os de pastores falsos e egoístas, e prometia que Ele mesmo viria pastorear o Seu povo (Ezequiel 34). Em João 10, Jesus cumpre essa promessa. Ele usa a metáfora familiar do pastoreio de ovelhas para fazer duas declarações "Eu Sou": Ele é a "Porta das ovelhas" (o único caminho para a salvação) e o "Bom Pastor" (Aquele que dá a vida pelo rebanho). Esta passagem é uma das descrições mais ternas e poderosas do amor sacrificial de Cristo e da segurança eterna dos crentes.`,
    points: [
      {
        verseRef: 'v. 1-10',
        title: 'A Porta das Ovelhas e a Vida em Abundância',
        description: `O Único Caminho. Jesus contrasta o verdadeiro pastor com os ladrões e salteadores (falsos messias e líderes religiosos corruptos). O pastor entra pela porta, e as ovelhas conhecem a sua voz e o seguem (v. 1-5). Como eles não entenderam, Jesus é mais explícito (v. 7): "Eu sou a porta das ovelhas". Não há salvação fora de Cristo (v. 9): "Se alguém entrar por mim, salvar-se-á, e entrará, e sairá, e achará pastagens". O contraste final é sobre o propósito (v. 10): "O ladrão não vem senão a roubar, a matar, e a destruir; eu vim para que tenham vida, e a tenham com abundância". A religião falsa escraviza e destrói; Jesus traz liberdade, nutrição e vida plena.`
      },
      {
        verseRef: 'v. 11-15',
        title: 'O Bom Pastor e o Sacrifício Voluntário',
        description: `O Amor que Morre. Jesus faz a Sua segunda declaração (v. 11): "Eu sou o bom Pastor; o bom Pastor dá a sua vida pelas ovelhas". O mercenário (o líder que trabalha apenas por dinheiro ou status) foge quando o lobo (o perigo) se aproxima, porque não se importa com as ovelhas (v. 12-13). O Bom Pastor, no entanto, tem um relacionamento de conhecimento íntimo e mútuo com as Suas ovelhas, semelhante ao relacionamento entre o Pai e o Filho (v. 14-15). E a prova suprema desse amor é a cruz: "e dou a minha vida pelas ovelhas". Ele não morre como um mártir indefeso, mas como um substituto voluntário.`
      },
      {
        verseRef: 'v. 16-18',
        title: 'O Rebanho Universal e a Autoridade Soberana',
        description: `A Missão Global e a Ressurreição. Jesus revela que a Sua missão vai além de Israel (v. 16): "Ainda tenho outras ovelhas que não são deste aprisco (os gentios); também me convém agregar estas, e elas ouvirão a minha voz, e haverá um rebanho e um Pastor". A cruz criará uma única igreja global. Jesus então enfatiza a Sua autoridade soberana sobre a Sua própria morte e ressurreição (v. 17-18): "Por isto o Pai me ama, porque dou a minha vida para tornar a tomá-la. Ninguém ma tira de mim, mas eu de mim mesmo a dou; tenho poder para a dar, e poder para tornar a tomá-la". A crucificação não foi um assassinato que fugiu do controle de Deus; foi o sacrifício planejado e executado pelo próprio Filho de Deus.`
      }
    ],
    conclusion: `João 10:1-18 nos oferece um conforto inigualável. Não somos ovelhas perdidas à mercê de lobos ou de mercenários. Temos um Bom Pastor que conhece o nosso nome, que nos guia com a Sua voz (a Palavra) e que nos ama tanto que derramou o Seu próprio sangue para nos proteger da condenação. Porque Ele teve o poder de dar a Sua vida e o poder de ressuscitá-la, podemos confiar que Ele tem o poder de nos dar a vida eterna e de nos guardar para sempre.`
  },
  {
    id: 'jhn_11_17_44',
    bookId: 'JHN',
    chapter: 11,
    startVerse: 17,
    endVerse: 44,
    title: 'A Ressurreição de Lázaro',
    theme: 'O Poder sobre a Morte e a Glória de Deus',
    introduction: `A ressurreição de Lázaro é o último e maior dos sete "sinais" milagrosos registrados no Evangelho de João antes da paixão de Cristo. É o clímax do ministério público de Jesus. Quando o Seu amigo Lázaro adoece, Jesus deliberadamente atrasa a Sua ida, permitindo que Lázaro morra. O propósito dessa dor não era a crueldade, mas a revelação da glória de Deus. Neste evento, Jesus não apenas chora com os que choram, mostrando a Sua profunda humanidade, mas também declara ser a própria Ressurreição e a Vida, provando a Sua divindade absoluta ao chamar um homem morto há quatro dias para fora do túmulo.`,
    points: [
      {
        verseRef: 'v. 17-27',
        title: 'A Esperança Adiada e a Declaração "Eu Sou"',
        description: `A Fé na Provação. Quando Jesus chega a Betânia, Lázaro já está no túmulo há quatro dias (garantindo que ele estava inegavelmente morto). Marta vai ao encontro de Jesus com uma mistura de fé e dor (v. 21): "Senhor, se tu estivesses aqui, meu irmão não teria morrido". Jesus promete que Lázaro ressuscitará (v. 23). Marta pensa que Ele está falando da ressurreição escatológica no fim dos tempos (v. 24). Jesus então faz a declaração central (v. 25-26): "Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá; E todo aquele que vive, e crê em mim, nunca morrerá". A ressurreição não é apenas um evento futuro; é uma Pessoa. Marta responde com uma confissão de fé cristalina (v. 27).`
      },
      {
        verseRef: 'v. 28-37',
        title: 'As Lágrimas de Deus Diante da Morte',
        description: `A Humanidade e a Indignação de Cristo. Maria chega até Jesus, cai aos Seus pés e repete as mesmas palavras de Marta (v. 32). Ao ver o choro de Maria e dos judeus, Jesus "moveu-se muito em espírito, e perturbou-se" (v. 33). O verbo grego aqui indica uma indignação profunda, um bufar de raiva. Jesus não está com raiva das pessoas, mas da morte, do pecado e da destruição que Satanás causou na criação de Deus. O versículo 35 é o mais curto da Bíblia, mas um dos mais profundos: "Jesus chorou". O Deus encarnado não é apático ao nosso sofrimento; Ele entra na nossa dor e chora conosco, mesmo sabendo que o milagre está a minutos de distância.`
      },
      {
        verseRef: 'v. 38-44',
        title: 'A Palavra de Poder e a Vida Restaurada',
        description: `O Chamado que Desperta os Mortos. Jesus vai ao túmulo e manda tirar a pedra. Marta, a pragmática, avisa sobre o mau cheiro (v. 39). Jesus a lembra da promessa (v. 40): "Não te hei dito que, se creres, verás a glória de Deus?". Após uma oração de gratidão ao Pai (v. 41-42), Jesus clama com grande voz (v. 43): "Lázaro, sai para fora". Agostinho disse que se Jesus não tivesse chamado Lázaro pelo nome, todos os mortos do cemitério teriam ressuscitado. O impossível acontece (v. 44): "E o defunto saiu, tendo as mãos e os pés ligados com faixas". Jesus ordena que o desatem. A morte foi derrotada pela palavra do Criador.`
      }
    ],
    conclusion: `João 11:17-44 é a prévia da nossa própria ressurreição. A morte é o nosso maior inimigo, o terror que assombra a humanidade, mas diante de Jesus Cristo, a morte não tem mais poder do que o sono. Ele é a Ressurreição e a Vida. Se crermos nEle, a morte física será apenas uma transição para a vida eterna. E no último dia, ouviremos a Sua voz chamando o nosso nome, e os nossos corpos mortais sairão dos túmulos, glorificados e imortais, para estarmos com Ele para sempre.`
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
  console.log('Successfully added 6 new pericopes for Luke and John (Part 2).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
