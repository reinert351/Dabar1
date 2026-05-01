const fs = require('fs');

const newPericopes = [
  {
    id: 'gen_22_1_14',
    bookId: 'GEN',
    chapter: 22,
    startVerse: 1,
    endVerse: 14,
    title: 'O Sacrifício de Isaque',
    theme: 'A Provação da Fé e a Provisão Divina',
    introduction: `Gênesis 22 é um dos capítulos mais dramáticos e teologicamente ricos do Antigo Testamento. Deus pede a Abraão o impensável: sacrificar o seu filho Isaque, o filho da promessa, por quem ele esperou 25 anos. Esta não é uma história sobre sacrifício infantil (prática que Deus abomina), mas o teste supremo da fé de Abraão e uma tipologia impressionante do sacrifício de Jesus Cristo. A narrativa nos leva ao limite da compreensão humana para nos mostrar a profundidade da provisão divina.`,
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'O Pedido Incompreensível e o Teste do Amor',
        description: `Toma Agora o Teu Filho, o Teu Único Filho. Deus chama Abraão e dá uma ordem que parece contradizer todas as Suas promessas anteriores (v. 2): "Toma agora o teu filho, o teu único filho, Isaque, a quem amas, e vai-te à terra de Moriá, e oferece-o ali em holocausto". Deus enfatiza o amor de Abraão por Isaque. O teste era claro: Abraão amava mais a dádiva (Isaque) ou o Doador (Deus)? A verdadeira fé é provada quando Deus nos pede para abrirmos mão daquilo que nos é mais precioso.`
      },
      {
        verseRef: 'v. 3-8',
        title: 'A Obediência Imediata e a Fé na Ressurreição',
        description: `Deus Proverá para Si o Cordeiro. Abraão não discute nem hesita. Ele levanta-se de madrugada (v. 3). No terceiro dia, ele vê o lugar de longe (v. 4). Ele diz aos servos (v. 5): "Ficai-vos aqui... e eu e o moço iremos até ali; e havendo adorado, tornaremos a vós". Ele disse "tornaremos" (nós voltaremos). Hebreus 11:19 explica que Abraão cria que Deus era poderoso para ressuscitar Isaque dos mortos. Quando Isaque pergunta pelo cordeiro (v. 7), Abraão profetiza (v. 8): "Deus proverá para si o cordeiro para o holocausto, meu filho".`
      },
      {
        verseRef: 'v. 9-14',
        title: 'O Substituto e o Nome do Senhor',
        description: `O Senhor Proverá (Jeová-Jireh). Abraão amarra Isaque (que se submete voluntariamente, como Cristo) e levanta o cutelo (v. 9-10). No último segundo, o Anjo do Senhor o impede (v. 11-12): "Não estendas a tua mão sobre o moço... porquanto agora sei que temes a Deus". Abraão vê um carneiro preso pelos chifres e o oferece em lugar do seu filho (v. 13). O carneiro é o substituto. Abraão chama o lugar de "O Senhor Proverá" (v. 14). Dois mil anos depois, no mesmo monte Moriá (Jerusalém), Deus não poupou o Seu próprio Filho, mas O entregou como o Cordeiro definitivo por nós.`
      }
    ],
    conclusion: `Gênesis 22:1-14 nos ensina que a fé autêntica confia em Deus mesmo quando as Suas ordens não fazem sentido para a nossa lógica humana. Deus nunca nos pedirá para sacrificar os nossos filhos, mas Ele nos pedirá para colocar os nossos "Isaques" (nossos sonhos, carreiras, relacionamentos) no altar, reconhecendo que Ele é o Senhor de tudo. E a maior lição de Moriá é a graça: onde a nossa obediência é exigida, a provisão de Deus é garantida. O Cordeiro já foi providenciado na cruz do Calvário.`
  },
  {
    id: 'exo_3_1_10',
    bookId: 'EXO',
    chapter: 3,
    startVerse: 1,
    endVerse: 10,
    title: 'A Sarça Ardente',
    theme: 'O Chamado de Deus e a Santidade da Sua Presença',
    introduction: `Moisés, que fora príncipe no Egito, passou 40 anos no deserto de Midiã como um simples pastor de ovelhas. Aos 80 anos, a sua vida parecia ter chegado ao fim em termos de grandes realizações. Mas é exatamente na rotina do deserto que Deus o encontra. A visão da sarça ardente é um dos encontros teofânicos mais importantes da Bíblia, revelando o caráter santo de Deus, a Sua compaixão pelo sofrimento do Seu povo e o Seu método de usar vasos improváveis para cumprir propósitos extraordinários.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Visão Incomum e a Iniciativa Divina',
        description: `A Sarça Ardia no Fogo, e Não se Consumia. Moisés estava apascentando ovelhas no monte Horebe quando viu algo impossível (v. 2): um espinheiro (uma sarça comum do deserto) em chamas, mas que não virava cinzas. A sarça representa o povo de Israel (humilde e oprimido no fogo da aflição do Egito, mas não destruído porque Deus estava no meio deles). Moisés decide desviar-se para ver a grande visão (v. 3). Deus frequentemente usa o extraordinário no meio do ordinário para capturar a nossa atenção.`
      },
      {
        verseRef: 'v. 4-6',
        title: 'A Santidade de Deus e a Reverência Exigida',
        description: `Tira os Sapatos dos Pés. Quando Deus vê que Moisés se aproxima, Ele o chama pelo nome: "Moisés, Moisés!" (v. 4). A primeira instrução de Deus é um limite de santidade (v. 5): "Não te chegues para cá; tira os sapatos de teus pés; porque o lugar em que tu estás é terra santa". A terra não era santa por si mesma, mas a presença de Deus a santificava. Tirar as sandálias era um sinal de reverência, submissão e reconhecimento da impureza humana diante do Deus três vezes Santo. Moisés encobre o rosto, temendo olhar para Deus (v. 6).`
      },
      {
        verseRef: 'v. 7-10',
        title: 'A Compaixão Divina e a Comissão do Libertador',
        description: `Tenho Visto a Aflição... Vem Agora, Pois. Deus revela o Seu coração pastoral (v. 7): "Tenho visto atentamente a aflição do meu povo... tenho ouvido o seu clamor... conheço as suas dores". Deus não é apático ao sofrimento humano. Ele declara a Sua intenção de descer para livrá-los (v. 8). Mas o método de Deus é surpreendente (v. 10): "Vem agora, pois, e eu te enviarei a Faraó para que tires o meu povo (os filhos de Israel) do Egito". Deus desce para salvar, mas Ele envia um homem para executar a salvação.`
      }
    ],
    conclusion: `Êxodo 3:1-10 nos ensina que Deus nunca esquece as Suas promessas, mesmo quando passam décadas de silêncio. Ele ouve o clamor dos oprimidos. A sarça ardente nos lembra que Deus não precisa de "cedros do Líbano" (pessoas poderosas e influentes) para manifestar a Sua glória; Ele pode usar um simples espinheiro (um pastor gago de 80 anos), desde que esse espinheiro esteja em chamas com a presença do Espírito Santo. O chamado de Deus exige reverência (tirar as sandálias) e obediência (ir ao Faraó).`
  },
  {
    id: 'exo_14_15_31',
    bookId: 'EXO',
    chapter: 14,
    startVerse: 15,
    endVerse: 31,
    title: 'A Travessia do Mar Vermelho',
    theme: 'O Livramento Impossível e o Poder do Senhor',
    introduction: `O povo de Israel havia acabado de sair do Egito, mas logo se viu encurralado: o Mar Vermelho à frente, montanhas dos lados e o exército enfurecido do Faraó vindo por trás. O pânico tomou conta da nação, e eles começaram a murmurar contra Moisés. A resposta de Deus a essa crise impossível é o maior milagre do Antigo Testamento, um evento que definiria a identidade de Israel para sempre e que serve como a metáfora definitiva da salvação: Deus abrindo um caminho onde não há caminho.`,
    points: [
      {
        verseRef: 'v. 15-18',
        title: 'A Ordem para Marchar e a Autoridade Delegada',
        description: `Dize aos Filhos de Israel que Marchem. Moisés estava clamando a Deus, mas Deus lhe diz (v. 15): "Por que clamas a mim? Dize aos filhos de Israel que marchem". Há tempo para orar e tempo para agir. Deus instrui Moisés a usar a autoridade que lhe foi dada (v. 16): "E tu, levanta a tua vara, e estende a tua mão sobre o mar, e fende-o". O milagre seria realizado pelo poder de Deus, mas exigia a ação obediente de Moisés e o passo de fé do povo em direção à água antes mesmo dela se abrir.`
      },
      {
        verseRef: 'v. 19-22',
        title: 'A Proteção Divina e a Divisão das Águas',
        description: `As Águas Foram-lhes Como Muro. Antes de abrir o mar, Deus protege a retaguarda. O Anjo de Deus e a coluna de nuvem movem-se para trás de Israel, colocando-se entre eles e os egípcios (v. 19-20). Para Israel, a nuvem era luz; para o Egito, era trevas. Moisés estende a mão, e Deus envia um forte vento oriental que divide o mar (v. 21). O milagre é espetacular (v. 22): "E os filhos de Israel entraram pelo meio do mar em seco; e as águas foram-lhes como muro à sua direita e à sua esquerda".`
      },
      {
        verseRef: 'v. 23-31',
        title: 'O Julgamento do Inimigo e o Temor do Senhor',
        description: `O Senhor Peleja por Eles. Os egípcios, cegos pela arrogância, entram no mar atrás de Israel (v. 23). Na vigília da manhã, Deus "olha" para o exército egípcio e os perturba, tirando as rodas dos seus carros (v. 24-25). Os egípcios percebem tarde demais que estão lutando contra Deus. Moisés estende a mão novamente, e as águas retornam, afogando todo o exército de Faraó (v. 26-28). O resultado do livramento é a fé (v. 31): "E viu Israel a grande obra... e o povo temeu ao Senhor, e creram no Senhor e em Moisés, seu servo".`
      }
    ],
    conclusion: `Êxodo 14:15-31 é a prova definitiva de que as situações sem saída para os homens são o palco perfeito para os milagres de Deus. Quando o inimigo nos persegue e os obstáculos à nossa frente parecem intransponíveis, a ordem de Deus não é para recuar ou nos desesperarmos, mas para "marchar" pela fé. O mesmo Deus que abriu o Mar Vermelho abriu o caminho para a vida eterna através da morte e ressurreição de Jesus Cristo. Ele é o Deus que peleja por nós e destrói os inimigos que tentam nos escravizar.`
  },
  {
    id: 'jos_1_1_9',
    bookId: 'JOS',
    chapter: 1,
    startVerse: 1,
    endVerse: 9,
    title: 'A Comissão de Josué',
    theme: 'Coragem, Presença Divina e a Centralidade da Palavra',
    introduction: `Moisés, o grande libertador e legislador, está morto. A responsabilidade de liderar milhões de israelitas para conquistar a Terra Prometida agora recai sobre os ombros de Josué. É um momento de transição assustador. Em Josué 1, Deus não dá a Josué um mapa detalhado das batalhas ou uma nova arma secreta. Em vez disso, Deus lhe dá três coisas fundamentais para o sucesso de qualquer liderança espiritual: a promessa da Sua presença inabalável, o mandamento para ser corajoso e a ordem de meditar constantemente na Palavra.`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Nova Liderança e a Promessa da Presença',
        description: `Como Fui com Moisés, Assim Serei Contigo. Deus confirma a transição (v. 2): "Moisés, meu servo, é morto; levanta-te, pois, agora, passa este Jordão". A obra de Deus continua mesmo quando os Seus grandes servos morrem. Deus reafirma a promessa da terra (v. 3-4) e dá a Josué a garantia mais importante que um líder pode ter (v. 5): "Ninguém te poderá resistir, todos os dias da tua vida; como fui com Moisés, assim serei contigo; não te deixarei nem te desampararei". A força de Josué não estava na sua habilidade militar, mas na presença de Deus.`
      },
      {
        verseRef: 'v. 6-7',
        title: 'O Mandamento Triplo: Esforça-te e Tem Bom Ânimo',
        description: `Sê Forte e Corajoso. Deus repete três vezes a ordem para ter coragem (v. 6, 7, 9). A coragem não é a ausência de medo, mas a ação obediente apesar do medo. No versículo 7, Deus liga a coragem à obediência estrita: "Tão-somente esforça-te e tem mui grande ânimo, para que tenhas o cuidado de fazer conforme a toda a lei que meu servo Moisés te ordenou; dela não te desvies, nem para a direita nem para a esquerda, para que prudentemente te conduzas por onde quer que andares". A verdadeira coragem é a coragem de obedecer a Deus quando o mundo diz o contrário.`
      },
      {
        verseRef: 'v. 8-9',
        title: 'A Chave do Sucesso: A Meditação na Palavra',
        description: `Não se Aparte da Tua Boca o Livro Desta Lei. O segredo da vitória de Josué é revelado no versículo 8: "Não se aparte da tua boca o livro desta lei; antes medita nele dia e noite, para que tenhas cuidado de fazer conforme a tudo quanto nele está escrito; porque então farás prosperar o teu caminho, e serás bem sucedido". A meditação bíblica não é esvaziar a mente, mas enchê-la com a verdade de Deus até que ela molde as nossas ações. O texto conclui com a ordem final (v. 9): "Não to mandei eu? Esforça-te... porque o Senhor teu Deus é contigo".`
      }
    ],
    conclusion: `Josué 1:1-9 é o manual de Deus para o sucesso espiritual. O sucesso bíblico não é medido por riqueza ou fama, mas por cumprir a vontade de Deus. Quando enfrentamos "Jordões" intransponíveis ou "Jericós" fortificadas nas nossas vidas, a receita divina permanece a mesma: confiar na presença inabalável de Deus, ter a coragem de agir pela fé e manter a nossa mente e o nosso coração saturados com a Palavra de Deus. Aquele que prometeu estar conosco nunca nos desamparará.`
  },
  {
    id: 'jdg_4_4_10',
    bookId: 'JDG',
    chapter: 4,
    startVerse: 4,
    endVerse: 10,
    title: 'Débora e Baraque',
    theme: 'A Liderança Profética e a Hesitação Humana',
    introduction: `Durante o período sombrio dos Juízes, Israel foi oprimido por Jabim, rei de Canaã, que possuía 900 carros de ferro. Em uma sociedade patriarcal, Deus levanta uma mulher, Débora, como profetisa e juíza para libertar a nação. A história de Débora e Baraque ilustra como Deus escolhe instrumentos improváveis para confundir os fortes, e como a hesitação e a falta de fé podem nos custar a honra da vitória, embora não impeçam os propósitos soberanos de Deus.`,
    points: [
      {
        verseRef: 'v. 4-7',
        title: 'A Juíza Profetisa e a Ordem Divina',
        description: `Débora Julgava a Israel. O texto apresenta Débora como profetisa e juíza, que se assentava debaixo das palmeiras para atender o povo (v. 4-5). Ela não usurpou a autoridade; Deus a levantou. Ela manda chamar Baraque e lhe entrega a palavra do Senhor (v. 6-7): "Porventura o Senhor Deus de Israel não deu ordem, dizendo: Vai, e atrai gente ao monte Tabor... E atrairei a ti para o ribeiro de Quisom, a Sísera... e o darei na tua mão". A estratégia e a garantia da vitória vieram diretamente de Deus através de Débora.`
      },
      {
        verseRef: 'v. 8',
        title: 'A Hesitação de Baraque e a Condição Imposta',
        description: `Se Fores Comigo, Irei. Apesar da clareza da ordem divina, Baraque hesita. Ele responde a Débora (v. 8): "Se fores comigo, irei; porém, se não fores comigo, não irei". Baraque tinha fé suficiente para ir à guerra, mas a sua fé estava mais ancorada na presença visível da profetisa do que na promessa invisível de Deus. Ele precisava da "muleta" espiritual da presença de Débora para ter coragem de enfrentar os carros de ferro de Sísera.`
      },
      {
        verseRef: 'v. 9-10',
        title: 'A Consequência da Dúvida e a Transferência da Honra',
        description: `A Honra Não Será Tua. Débora concorda em ir, mas profetiza a consequência da hesitação de Baraque (v. 9): "Certamente irei contigo, porém não será tua a honra da jornada que empreendes; pois à mão de uma mulher o Senhor venderá a Sísera". A vitória estava garantida, mas a glória de derrotar o general inimigo seria transferida para outra mulher (Jael, que mais tarde mata Sísera na sua tenda). Baraque convoca o exército e sobe com Débora (v. 10). Deus usa Baraque, mas a sua falta de fé lhe custou a coroa da vitória.`
      }
    ],
    conclusion: `Juízes 4:4-10 nos ensina que Deus não está limitado pelas convenções sociais ou pelas nossas fraquezas. Ele usa quem Ele quer, como Ele quer. A história de Baraque é um aviso sobre a fé condicional ("Eu obedeço, Senhor, SE..."). Quando Deus nos dá uma ordem clara, a obediência imediata e confiante é a única resposta adequada. Se hesitarmos ou exigirmos garantias humanas, Deus ainda cumprirá o Seu propósito, mas nós podemos perder a honra e a alegria de sermos os instrumentos principais do Seu milagre.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 16a).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
