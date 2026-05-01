const fs = require('fs');

const newPericopes = [
  {
    id: 'act_4_1_12',
    bookId: 'ACT',
    chapter: 4,
    startVerse: 1,
    endVerse: 12,
    title: 'Pedro e João perante o Sinédrio',
    theme: 'A Ousadia do Espírito e a Exclusividade de Cristo',
    introduction: `A cura do coxo e a pregação subsequente de Pedro atraem a ira das autoridades religiosas. Pedro e João são presos e levados perante o Sinédrio, o mesmo tribunal que havia condenado Jesus à morte semanas antes. Em vez de se acovardarem, os apóstolos, cheios do Espírito Santo, transformam o seu julgamento em um púlpito, proclamando com ousadia inabalável que a salvação é encontrada exclusivamente em Jesus Cristo.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Prisão e o Crescimento Incontrolável da Igreja',
        description: `A Oposição Religiosa. Enquanto falavam ao povo, os sacerdotes, o capitão do templo e os saduceus (que não acreditavam na ressurreição) os prendem (v. 1-3). A perseguição não foi iniciada por Roma, mas pela elite religiosa que se sentiu ameaçada pela mensagem da ressurreição de Jesus. No entanto, a Palavra de Deus não pode ser algemada. Apesar da prisão dos líderes, "muitos dos que tinham ouvido a palavra creram, e chegou o número desses homens a quase cinco mil" (v. 4). A perseguição frequentemente atua como combustível para o crescimento da igreja.`
      },
      {
        verseRef: 'v. 5-10',
        title: 'O Interrogatório e a Resposta Cheia do Espírito',
        description: `Com Que Poder? No dia seguinte, o Sinédrio se reúne e faz a pergunta central (v. 7): "Com que poder, ou em nome de quem fizestes isto?". Pedro, "cheio do Espírito Santo" (cumprindo a promessa de Jesus em Lucas 12:11-12), não se defende, mas ataca (v. 8-10). Ele declara que o benefício feito ao homem enfermo foi realizado "em nome de Jesus Cristo, o Nazareno, aquele a quem vós crucificastes e a quem Deus ressuscitou dos mortos". Pedro expõe a culpa deles e exalta a soberania de Deus que reverteu a sentença do Sinédrio através da ressurreição.`
      },
      {
        verseRef: 'v. 11-12',
        title: 'A Pedra Angular e a Exclusividade da Salvação',
        description: `Nenhum Outro Nome. Pedro cita o Salmo 118:22 (v. 11): "Ele é a pedra que foi rejeitada por vós, os edificadores, a qual foi posta por cabeça de esquina". Os líderes religiosos rejeitaram a pedra fundamental do projeto de Deus. Então, Pedro profere uma das declarações mais exclusivistas e absolutas da Bíblia (v. 12): "E em nenhum outro há salvação, porque também debaixo do céu nenhum outro nome há, dado entre os homens, pelo qual devamos ser salvos". O cristianismo não oferece "um" caminho para Deus, mas "o" único caminho: Jesus Cristo.`
      }
    ],
    conclusion: `Atos 4:1-12 nos desafia a manter a ousadia profética em um mundo pluralista. A mensagem de que Jesus é o único Salvador sempre ofenderá a religião humana e a cultura secular. No entanto, como Pedro e João, não podemos recuar. A nossa confiança não vem da nossa própria eloquência ou coragem, mas de estarmos "cheios do Espírito Santo", proclamando o Nome que tem poder para curar os quebrantados e salvar os perdidos.`
  },
  {
    id: 'act_6_1_7',
    bookId: 'ACT',
    chapter: 6,
    startVerse: 1,
    endVerse: 7,
    title: 'A Escolha dos Sete Diáconos',
    theme: 'A Resolução de Conflitos e a Prioridade do Ministério',
    introduction: `O crescimento explosivo da igreja primitiva trouxe o seu primeiro grande desafio interno: um conflito étnico e administrativo sobre a distribuição de alimentos. A forma como os apóstolos lidaram com esta crise é um modelo de liderança sábia. Eles não ignoraram o problema, nem abandonaram a sua vocação principal para resolvê-lo. Em vez disso, eles delegaram autoridade a homens cheios do Espírito, criando o ministério diaconal e garantindo que tanto o serviço social quanto a pregação da Palavra florescessem.`,
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Crise de Crescimento e a Murmuração',
        description: `O Perigo da Distração. Com o aumento do número de discípulos, surge uma murmuração dos judeus helenistas (de fala grega) contra os hebreus (de fala aramaica), porque as suas viúvas estavam sendo esquecidas na distribuição diária de alimentos (v. 1). O inimigo tentou destruir a igreja através da perseguição externa (Atos 4), e agora tenta através da divisão interna. Os doze apóstolos convocam a multidão e estabelecem uma prioridade inegociável (v. 2): "Não é razoável que nós deixemos a palavra de Deus e sirvamos às mesas". O bom (servir mesas) não pode roubar o lugar do melhor (pregar a Palavra).`
      },
      {
        verseRef: 'v. 3-4',
        title: 'A Delegação e os Requisitos para o Serviço',
        description: `Homens Cheios do Espírito. Os apóstolos instruem a igreja a escolher sete homens para cuidar dessa tarefa (v. 3). Os requisitos para administrar a comida não eram apenas habilidades logísticas, mas qualificações espirituais profundas: "de boa reputação, cheios do Espírito Santo e de sabedoria". Na igreja, até o trabalho mais prático é um ministério espiritual. Ao delegar esta responsabilidade, os apóstolos protegem a sua própria vocação (v. 4): "Mas nós perseveraremos na oração e no ministério da palavra". A liderança espiritual morre quando negligencia a oração e o estudo da Bíblia.`
      },
      {
        verseRef: 'v. 5-7',
        title: 'A Escolha, a Imposição de Mãos e o Crescimento',
        description: `A Solução que Multiplica. A proposta agrada a toda a multidão. Eles escolhem sete homens, todos com nomes gregos (incluindo Estêvão e Filipe), mostrando uma sensibilidade incrível para resolver a queixa da minoria helenista (v. 5). Os apóstolos oram e impõem as mãos sobre eles, transferindo autoridade para a tarefa (v. 6). O resultado desta organização sábia não é apenas a paz interna, mas uma explosão de crescimento (v. 7): "E crescia a palavra de Deus, e em Jerusalém se multiplicava muito o número dos discípulos, e grande parte dos sacerdotes obedecia à fé".`
      }
    ],
    conclusion: `Atos 6:1-7 nos ensina que a organização e a espiritualidade não são inimigas. Uma igreja saudável precisa tanto de líderes dedicados à oração e à Palavra quanto de servos dedicados às necessidades práticas da comunidade. Quando os conflitos são tratados com sabedoria, justiça e delegação espiritual, a igreja não apenas sobrevive à crise, mas sai dela mais forte, unida e pronta para um crescimento ainda maior.`
  },
  {
    id: 'act_7_51_60',
    bookId: 'ACT',
    chapter: 7,
    startVerse: 51,
    endVerse: 60,
    title: 'O Martírio de Estêvão',
    theme: 'A Fidelidade até a Morte e a Visão da Glória',
    introduction: `Estêvão, um dos sete diáconos escolhidos, é preso e levado perante o Sinédrio. Em vez de se defender, ele faz uma longa revisão da história de Israel, demonstrando que a nação sempre rejeitou os mensageiros de Deus. O clímax do seu discurso é uma acusação contundente contra os líderes religiosos. A reação violenta deles resulta no primeiro martírio da história da igreja. A morte de Estêvão, espelhando a morte de Cristo, torna-se a semente que espalharia o evangelho para além de Jerusalém.`,
    points: [
      {
        verseRef: 'v. 51-53',
        title: 'A Acusação Profética e a Resistência ao Espírito',
        description: `Duros de Cerviz. Estêvão conclui o seu discurso com uma acusação direta e corajosa (v. 51): "Homens de dura cerviz, e incircuncisos de coração e ouvido, vós sempre resistis ao Espírito Santo; assim vós sois como vossos pais". Ele vira o jogo: os juízes do Sinédrio é que estão no banco dos réus. Ele os acusa de perseguir os profetas e de trair e assassinar o "Justo" (Jesus) (v. 52). Eles se orgulhavam da Lei, mas Estêvão afirma que eles não a guardaram (v. 53). A religião exterior sem submissão interior é uma resistência direta a Deus.`
      },
      {
        verseRef: 'v. 54-56',
        title: 'A Fúria do Sinédrio e a Visão do Céu Aberto',
        description: `Jesus em Pé. Ouvindo estas palavras, os líderes religiosos "enfureciam-se em seus corações, e rangiam os dentes contra ele" (v. 54). O ódio religioso é brutal. Mas Estêvão, "cheio do Espírito Santo", não olha para os seus assassinos; ele fixa os olhos no céu (v. 55). Ele vê a glória de Deus e faz uma declaração que sela a sua sentença de morte (v. 56): "Eis que vejo os céus abertos, e o Filho do homem, que está em pé à mão direita de Deus". Jesus geralmente é descrito "assentado" à destra de Deus, mas aqui Ele está "em pé", levantando-se para receber e honrar o Seu primeiro mártir.`
      },
      {
        verseRef: 'v. 57-60',
        title: 'O Apedrejamento e a Oração de Perdão',
        description: `Morrendo como o Mestre. A multidão tapa os ouvidos, grita e o arrasta para fora da cidade para apedrejá-lo (v. 57-58). Lucas introduz sutilmente um jovem chamado Saulo, que consentia na morte de Estêvão. Enquanto as pedras o esmagam, Estêvão faz duas orações que ecoam as palavras de Jesus na cruz. Primeiro, ele entrega o seu espírito (v. 59): "Senhor Jesus, recebe o meu espírito". Segundo, ele clama por perdão para os seus assassinos (v. 60): "Senhor, não lhes imputes este pecado". E, tendo dito isto, "adormeceu". A graça de Cristo transforma até a morte mais violenta em um sono pacífico.`
      }
    ],
    conclusion: `Atos 7:51-60 nos confronta com o custo extremo do discipulado. Estêvão não foi morto porque fez milagres, mas porque pregou a verdade inegociável do evangelho. A sua morte nos ensina que a vitória cristã não é necessariamente escapar do sofrimento, mas permanecer fiel a Cristo dentro dele. O sangue de Estêvão regou a terra, e daquele solo (e da consciência perturbada de Saulo de Tarso) brotaria o maior missionário da história da igreja.`
  },
  {
    id: 'act_8_26_40',
    bookId: 'ACT',
    chapter: 8,
    startVerse: 26,
    endVerse: 40,
    title: 'Filipe e o Eunuco Etíope',
    theme: 'A Direção do Espírito e a Exposição do Evangelho',
    introduction: `A perseguição após a morte de Estêvão espalhou a igreja. Filipe, outro dos sete diáconos, está tendo um ministério de grande sucesso em Samaria quando um anjo lhe dá uma ordem estranha: ir para uma estrada deserta. Lá, ele encontra um alto oficial do governo etíope lendo o profeta Isaías. Este encontro divino ilustra perfeitamente como o Espírito Santo orquestra o evangelismo, preparando tanto o coração do pecador quanto os passos do mensageiro para a proclamação de Cristo.`,
    points: [
      {
        verseRef: 'v. 26-29',
        title: 'A Obediência Imediata e o Encontro Divino',
        description: `Deixando as Multidões por Uma Alma. O anjo do Senhor manda Filipe ir para o sul, para a estrada deserta que desce de Jerusalém a Gaza (v. 26). Filipe obedece sem questionar (v. 27). Ele encontra um eunuco, mordomo-mor da rainha dos etíopes, que voltava de Jerusalém onde fora adorar. O eunuco estava lendo o profeta Isaías no seu carro (v. 28). O Espírito Santo diz a Filipe (v. 29): "Chega-te, e ajunta-te a esse carro". O evangelismo eficaz requer sensibilidade e obediência imediata à voz do Espírito, mesmo quando a ordem parece ilógica.`
      },
      {
        verseRef: 'v. 30-35',
        title: 'A Pergunta Crucial e a Pregação de Cristo',
        description: `De Isaías a Jesus. Filipe corre, ouve o homem lendo e faz a pergunta evangelística perfeita (v. 30): "Entendes tu o que lês?". O eunuco reconhece a sua necessidade de um guia (v. 31). A passagem que ele lia era Isaías 53:7-8, sobre a ovelha muda levada ao matadouro (v. 32-33). O eunuco pergunta de quem o profeta está falando (v. 34). Filipe não perde a oportunidade (v. 35): "Então Filipe, abrindo a sua boca, e começando nesta Escritura, lhe anunciou a Jesus". O Antigo Testamento é a fechadura, e Jesus é a única chave que a abre.`
      },
      {
        verseRef: 'v. 36-40',
        title: 'A Fé, o Batismo e a Alegria da Salvação',
        description: `O Fruto do Evangelho. Chegando a um lugar com água, o eunuco toma a iniciativa (v. 36): "Eis aqui água; que impede que eu seja batizado?". A resposta (v. 37, presente no Textus Receptus) exige a confissão de fé: "É lícito, se crês de todo o coração... Creio que Jesus Cristo é o Filho de Deus". Eles descem à água, e Filipe o batiza (v. 38). Imediatamente, o Espírito arrebata Filipe (v. 39). O eunuco não lamenta a partida do evangelista, pois "jubiloso, continuou o seu caminho". A verdadeira alegria vem de conhecer o Salvador, não apenas o mensageiro.`
      }
    ],
    conclusion: `Atos 8:26-40 é um manual prático de evangelismo pessoal. Deus está ativamente preparando corações em lugares desertos, pessoas que estão lendo a Bíblia mas não a compreendem. O nosso papel, como o de Filipe, é sermos sensíveis à direção do Espírito, estarmos dispostos a cruzar barreiras culturais, fazermos boas perguntas e, acima de tudo, sabermos como começar em qualquer texto das Escrituras e anunciar a Jesus. Quando a Palavra é explicada e Cristo é revelado, o resultado é fé, obediência e alegria.`
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
  console.log('Successfully added 4 new pericopes for Acts (Batch 9c).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
