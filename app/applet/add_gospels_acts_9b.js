const fs = require('fs');

const newPericopes = [
  {
    id: 'act_1_1_11',
    bookId: 'ACT',
    chapter: 1,
    startVerse: 1,
    endVerse: 11,
    title: 'A Ascensão e a Promessa do Espírito',
    theme: 'O Fim do Ministério Terreno e o Início da Missão Global',
    introduction: `O livro de Atos começa onde o Evangelho de Lucas termina. Jesus passou quarenta dias após a ressurreição provando que estava vivo e ensinando sobre o Reino de Deus. A Ascensão marca o fim do Seu ministério terreno visível e a Sua exaltação à destra do Pai. No entanto, Ele não deixa os Seus discípulos órfãos; Ele promete o poder do Espírito Santo para capacitá-los a serem Suas testemunhas até os confins da terra.`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'As Provas Infalíveis e a Ordem de Esperar',
        description: `A Preparação para o Poder. Lucas resume o ministério de Jesus e foca no período pós-ressurreição (v. 3): Jesus apresentou-se vivo "com muitas e infalíveis provas", falando do Reino de Deus por quarenta dias. A ressurreição não foi uma ilusão, mas um fato histórico comprovado. Jesus dá uma ordem clara (v. 4): não se ausentem de Jerusalém, mas esperem a promessa do Pai. O batismo com o Espírito Santo (v. 5) era o pré-requisito absoluto para a missão. A igreja não pode fazer a obra de Deus sem o poder de Deus.`
      },
      {
        verseRef: 'v. 6-8',
        title: 'A Pergunta Política e a Missão Espiritual',
        description: `Poder para Testemunhar. Os discípulos ainda estão presos a uma visão política do Reino (v. 6): "Senhor, restaurarás tu neste tempo o reino a Israel?". Jesus corrige o foco deles: não é da conta deles saber os tempos e as estações (v. 7), mas a missão deles é clara (v. 8): "Mas recebereis a virtude (poder) do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas, tanto em Jerusalém como em toda a Judeia e Samaria, e até aos confins da terra". O Espírito não é dado para o nosso entretenimento, mas para o testemunho global.`
      },
      {
        verseRef: 'v. 9-11',
        title: 'A Ascensão e a Promessa do Retorno',
        description: `O Rei Exaltado. Após dizer isso, Jesus é elevado às alturas, e uma nuvem (a glória da Shekinah) O recebe, ocultando-O dos seus olhos (v. 9). Enquanto eles olham fixamente para o céu, dois anjos aparecem e fazem uma declaração escatológica (v. 11): "Varões galileus, por que estais olhando para o céu? Esse Jesus, que dentre vós foi recebido em cima no céu, há de vir assim como para o céu o vistes ir". A Ascensão garante o Seu retorno físico e visível. A igreja agora vive entre a Ascensão e a Segunda Vinda, ocupada com a missão.`
      }
    ],
    conclusion: `Atos 1:1-11 estabelece o fundamento da igreja. Não fomos chamados para ficar olhando para o céu em especulação teológica sobre o fim dos tempos, nem para tentar construir o Reino com força política. Fomos chamados para receber o poder do Espírito Santo e sermos testemunhas ousadas de Cristo em todos os lugares. O Rei está no trono, o Espírito está na igreja, e a missão deve continuar até que Ele volte.`
  },
  {
    id: 'act_2_1_13',
    bookId: 'ACT',
    chapter: 2,
    startVerse: 1,
    endVerse: 13,
    title: 'O Dia de Pentecostes',
    theme: 'O Derramamento do Espírito e o Nascimento da Igreja',
    introduction: `Cinquenta dias após a Páscoa, durante a festa judaica de Pentecostes (que celebrava a colheita e a entrega da Lei no Sinai), Deus cumpre a Sua maior promessa. O Espírito Santo é derramado sobre os 120 discípulos reunidos no cenáculo. Este evento marca o nascimento oficial da igreja cristã, o início da Nova Aliança e a reversão da maldição de Babel, unindo pessoas de todas as nações através do poder do evangelho.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Vento, o Fogo e a Plenitude do Espírito',
        description: `A Invasão Celestial. Os discípulos estavam todos reunidos no mesmo lugar (v. 1). De repente, vêm três sinais sobrenaturais: 1) Um som do céu, como um vento veemente e impetuoso (v. 2), simbolizando o poder invisível e vivificador do Espírito (pneuma). 2) Línguas repartidas, como que de fogo (v. 3), simbolizando a presença purificadora de Deus (como na sarça ardente). 3) Todos foram cheios do Espírito Santo e começaram a falar noutras línguas (v. 4). O Espírito não veio apenas sobre líderes isolados, mas sobre toda a comunidade.`
      },
      {
        verseRef: 'v. 5-11',
        title: 'O Milagre das Línguas e a Reversão de Babel',
        description: `A Proclamação Universal. Havia em Jerusalém judeus devotos de todas as nações (v. 5). Ao ouvirem o som, a multidão se ajunta e fica perplexa, porque cada um os ouvia falar na sua própria língua materna (v. 6). O milagre de Pentecostes não foi um balbuciar ininteligível, mas idiomas humanos reais (dialektos) falados por galileus iletrados. O conteúdo da mensagem era claro (v. 11): "as grandezas de Deus". Em Babel (Gênesis 11), Deus confundiu as línguas para julgar o orgulho e espalhar a humanidade; em Pentecostes, Deus usa as línguas para unir a humanidade na adoração a Cristo.`
      },
      {
        verseRef: 'v. 12-13',
        title: 'A Perplexidade da Multidão e a Zombaria',
        description: `As Duas Reações ao Espírito. A manifestação do poder de Deus sempre divide as multidões. A primeira reação é de espanto e busca por significado (v. 12): "Que quer isto dizer?". A segunda reação é o ceticismo e a zombaria (v. 13): "Estão cheios de mosto (vinho doce)". O mundo natural não pode compreender as coisas do Espírito de Deus (1 Coríntios 2:14) e frequentemente confunde o fervor espiritual com embriaguez ou loucura. Esta zombaria prepara o palco para o primeiro sermão apologético da história da igreja.`
      }
    ],
    conclusion: `Atos 2:1-13 é o cumprimento da promessa de que Deus habitaria no Seu povo. A igreja não é uma organização humana, mas um organismo vivo, nascido do fogo e do vento do Espírito Santo. Pentecostes nos lembra que o evangelho é para todas as nações e línguas, e que a única maneira de proclamarmos "as grandezas de Deus" com eficácia é estarmos continuamente cheios do Espírito Santo, independentemente da zombaria do mundo.`
  },
  {
    id: 'act_2_36_47',
    bookId: 'ACT',
    chapter: 2,
    startVerse: 36,
    endVerse: 47,
    title: 'O Sermão de Pedro e a Primeira Igreja',
    theme: 'O Arrependimento, a Salvação e a Vida em Comunidade',
    introduction: `Após explicar o fenômeno de Pentecostes usando a profecia de Joel e os Salmos de Davi, Pedro atinge o clímax do seu sermão. Ele acusa a multidão de crucificar o Messias, mas declara que Deus O ressuscitou e O fez Senhor. A resposta da multidão e a subsequente formação da primeira comunidade cristã fornecem o modelo definitivo para a vida da igreja: uma comunidade centrada na Palavra, na comunhão, no partilhar do pão e na oração.`,
    points: [
      {
        verseRef: 'v. 36-40',
        title: 'O Coração Compungido e o Apelo ao Arrependimento',
        description: `A Resposta ao Evangelho. Pedro conclui (v. 36): "Saiba, pois, com certeza toda a casa de Israel que a esse Jesus, a quem vós crucificastes, Deus o fez Senhor e Cristo". A Palavra, ungida pelo Espírito, penetra os corações (v. 37): "compungiram-se em seu coração" e perguntaram: "Que faremos?". Pedro dá a resposta evangélica padrão (v. 38): "Arrependei-vos, e cada um de vós seja batizado em nome de Jesus Cristo, para perdão dos pecados; e recebereis o dom do Espírito Santo". A salvação exige uma mudança de mente (arrependimento) e uma identificação pública com Cristo (batismo).`
      },
      {
        verseRef: 'v. 41-42',
        title: 'Os Três Mil Salvos e os Quatro Pilares da Igreja',
        description: `O DNA da Comunidade Cristã. Naquele dia, quase três mil almas foram batizadas e agregadas (v. 41). Lucas então descreve os quatro pilares da vida da igreja primitiva (v. 42): "E perseveravam na doutrina dos apóstolos (ensino bíblico), e na comunhão (koinonia, relacionamento profundo), e no partir do pão (Ceia do Senhor e refeições conjuntas), e nas orações". Uma igreja saudável não é definida por programas ou edifícios, mas pela perseverança obstinada nestas quatro práticas fundamentais.`
      },
      {
        verseRef: 'v. 43-47',
        title: 'O Temor, a Generosidade e o Crescimento Diário',
        description: `O Impacto da Igreja no Mundo. A vida daquela comunidade gerava "temor" (reverência) em toda a alma (v. 43). O amor deles era radical e prático (v. 44-45): "tinham tudo em comum... e repartiam com todos, segundo cada um havia de mister". A comunhão espiritual transbordou para a generosidade financeira. Eles adoravam no templo e nas casas com "alegria e singeleza de coração" (v. 46), caindo na graça de todo o povo. O resultado desse estilo de vida autêntico era o crescimento orgânico (v. 47): "E todos os dias acrescentava o Senhor à igreja aqueles que se haviam de salvar".`
      }
    ],
    conclusion: `Atos 2:36-47 é o espelho no qual toda igreja moderna deve se olhar. O verdadeiro avivamento não termina apenas em emoção; ele resulta em arrependimento profundo, submissão à doutrina apostólica, amor sacrificial pelos irmãos e adoração contagiante. Quando a igreja vive como a igreja de Atos 2, o Senhor mesmo se encarrega de atrair e salvar os perdidos todos os dias.`
  },
  {
    id: 'act_3_1_10',
    bookId: 'ACT',
    chapter: 3,
    startVerse: 1,
    endVerse: 10,
    title: 'A Cura do Coxo à Porta Formosa',
    theme: 'O Poder do Nome de Jesus e a Restauração Total',
    introduction: `O primeiro milagre registrado após Pentecostes ocorre na rotina diária de oração. Pedro e João encontram um homem coxo de nascença mendigando à porta do templo. O milagre que se segue não é apenas um ato de compaixão física, mas uma demonstração teológica de que o poder de Jesus Cristo continua operando através da Sua igreja. O homem curado torna-se um símbolo vivo da salvação: levantado da paralisia do pecado para entrar na presença de Deus com louvor.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Rotina da Oração e a Necessidade Humana',
        description: `O Mendigo à Porta. Pedro e João sobem ao templo à hora da oração, a nona (três da tarde) (v. 1). Na porta chamada Formosa, havia um homem coxo desde o ventre de sua mãe, que era colocado ali todos os dias para pedir esmola (v. 2). Ele representa a condição da humanidade caída: paralisado desde o nascimento, excluído da adoração plena no templo (Levítico 21:18) e dependente das migalhas da religião. Ele pede uma esmola a Pedro e João (v. 3), esperando apenas um alívio temporário para a sua miséria.`
      },
      {
        verseRef: 'v. 4-7',
        title: 'O Olhar Atento e o Poder do Nome de Jesus',
        description: `Ouro e Prata Não Tenho. Pedro e João fixam os olhos nele e dizem: "Olha para nós" (v. 4). O homem espera receber dinheiro (v. 5). A resposta de Pedro é uma das declarações mais famosas da igreja (v. 6): "Não tenho prata nem ouro; mas o que tenho isso te dou. Em nome de Jesus Cristo, o Nazareno, levanta-te e anda". A igreja primitiva era financeiramente pobre, mas espiritualmente rica. O poder não estava em Pedro, mas na autoridade do "Nome de Jesus". Pedro toma-o pela mão direita e o levanta, e imediatamente os seus pés e artelhos se firmam (v. 7).`
      },
      {
        verseRef: 'v. 8-10',
        title: 'O Salto de Alegria e o Testemunho Público',
        description: `Entrando no Templo com Louvor. A cura é instantânea e total. O homem "saltando, pôs-se em pé, e andou, e entrou com eles no templo, andando, e saltando, e louvando a Deus" (v. 8). Ele não vai para casa; ele vai para o templo. A verdadeira cura espiritual sempre resulta em adoração. Todo o povo o vê e o reconhece como o mendigo da Porta Formosa (v. 9-10). Eles ficam "cheios de pasmo e assombro". O milagre físico serve como um "sinal" (semeion) para atrair a atenção da multidão para o sermão de Pedro que se seguirá, onde ele pregará o evangelho da salvação.`
      }
    ],
    conclusion: `Atos 3:1-10 nos desafia a examinar a riqueza da igreja hoje. Muitas vezes temos "prata e ouro", mas perdemos o poder de dizer "levanta-te e anda" em nome de Jesus. O mundo não precisa apenas da nossa assistência social (embora seja importante); o mundo precisa do poder transformador de Cristo que levanta os paralisados pelo pecado e os transforma em adoradores extravagantes na presença de Deus.`
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
  console.log('Successfully added 4 new pericopes for Acts (Batch 9b).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
