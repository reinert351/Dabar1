const fs = require('fs');

const newPericopes = [
  {
    id: 'hab_3_17_19',
    bookId: 'HAB',
    chapter: 3,
    startVerse: 17,
    endVerse: 19,
    title: 'A Alegria na Desolação',
    theme: 'A Fé Incondicional e a Força em Deus',
    introduction: `O profeta Habacuque começa o seu livro questionando a Deus sobre a injustiça em Judá. Deus responde que usará os cruéis babilônios para julgar a nação. Habacuque fica horrorizado, mas Deus o chama a viver pela fé (2:4). O capítulo 3 é a oração final do profeta, após ele ter aceitado a soberania de Deus. Os versículos finais são uma das maiores declarações de fé em toda a Bíblia: uma decisão consciente de adorar e encontrar alegria em Deus, mesmo quando todas as fontes terrenas de segurança e provisão são destruídas.`,
    points: [
      {
        verseRef: 'v. 17',
        title: 'O Cenário de Devastação e a Perda Total',
        description: `Ainda Que a Figueira Não Floresça. Habacuque descreve o pior cenário possível para uma sociedade agrária (v. 17): "Porque ainda que a figueira não floresça, nem haja fruto na vide; ainda que decepcione o produto da oliveira, e os campos não produzam mantimento; ainda que as ovelhas da malhada sejam arrebatadas, e nos currais não haja gado". É um colapso econômico e agrícola total, o resultado da iminente invasão babilônica. Toda a segurança material, o alimento e a fonte de renda desapareceram.`
      },
      {
        verseRef: 'v. 18',
        title: 'A Decisão da Vontade e a Alegria em Deus',
        description: `Todavia Eu me Alegrarei. A resposta natural à devastação do versículo 17 seria o desespero ou a amargura contra Deus. Mas Habacuque faz uma escolha radical (v. 18): "Todavia eu me alegrarei no Senhor; exultarei no Deus da minha salvação". A palavra "todavia" é a dobradiça da fé. A sua alegria não é uma emoção baseada nas circunstâncias (que eram terríveis), mas uma decisão teológica baseada no caráter de Deus. Ele perdeu os frutos da terra, mas não perdeu o "Deus da sua salvação".`
      },
      {
        verseRef: 'v. 19',
        title: 'A Força Divina e os Pés como os das Corças',
        description: `O Senhor Deus é a Minha Força. O profeta conclui explicando como essa alegria é possível (v. 19): "O Senhor Deus é a minha força, e fará os meus pés como os das corças, e me fará andar sobre as minhas alturas". Quando a força humana acaba, a força de Deus se manifesta. A corça (ou gazela) é um animal capaz de andar com firmeza e agilidade nos lugares mais altos, íngremes e perigosos das montanhas. Deus não promete remover as montanhas de dificuldade, mas promete dar-nos "pés de corça" para caminharmos sobre elas com segurança e vitória.`
      }
    ],
    conclusion: `Habacuque 3:17-19 é o teste definitivo da nossa adoração. Nós adoramos a Deus pelas bênçãos que Ele nos dá, ou O adoramos por quem Ele é? A fé madura é capaz de olhar para uma conta bancária vazia, um diagnóstico médico terrível ou um futuro incerto e dizer: "Todavia, eu me alegrarei no Senhor". Quando Deus é a nossa única porção, descobrimos que Ele é mais do que suficiente para nos sustentar e nos fazer andar nas alturas.`
  },
  {
    id: 'zep_3_14_17',
    bookId: 'ZEP',
    chapter: 3,
    startVerse: 14,
    endVerse: 17,
    title: 'O Deus que Canta',
    theme: 'A Restauração de Sião e a Alegria do Senhor',
    introduction: `O livro de Sofonias é dominado pelo tema do "Dia do Senhor", um dia de ira e julgamento severo contra Judá e as nações devido à idolatria e corrupção. No entanto, o livro termina com uma das mais belas e surpreendentes promessas de restauração. Após o julgamento purificador, Deus promete salvar um remanescente humilde. A passagem culmina com uma imagem extraordinária: não apenas o povo cantando de alegria por causa de Deus, mas o próprio Deus cantando de alegria por causa do Seu povo.`,
    points: [
      {
        verseRef: 'v. 14-15',
        title: 'O Fim do Julgamento e a Presença do Rei',
        description: `Canta Alegremente, ó Filha de Sião. O profeta convoca o remanescente salvo a uma celebração exuberante (v. 14). A razão para essa alegria é dupla (v. 15): "O Senhor afastou os teus juízos, exterminou o teu inimigo". O perdão dos pecados e a derrota dos inimigos estão garantidos. Mas a maior bênção é a presença restaurada de Deus: "o Senhor, o rei de Israel, está no meio de ti; tu não verás mais mal algum". A presença do Rei no meio do Seu povo é a garantia definitiva de segurança e paz.`
      },
      {
        verseRef: 'v. 16-17a',
        title: 'O Encorajamento e o Poder do Salvador',
        description: `Não se Afrouxem as Tuas Mãos. Por causa da presença de Deus, o medo deve ser banido (v. 16): "Naquele dia se dirá a Jerusalém: Não temas, ó Sião, não se afrouxem as tuas mãos". Mãos frouxas representam desânimo e paralisia. O versículo 17a descreve a natureza deste Deus que está no meio deles: "O Senhor teu Deus, o poderoso, está no meio de ti, ele salvará". Ele não é um observador passivo, mas um Guerreiro Poderoso (Gibbor) que intervém ativamente para salvar e proteger os Seus.`
      },
      {
        verseRef: 'v. 17b',
        title: 'A Alegria Divina e o Cântico de Amor',
        description: `Ele se Alegrará em Ti com Júbilo. A segunda metade do versículo 17 é uma das revelações mais íntimas do coração de Deus: "ele se alegrará em ti com júbilo; calar-se-á por seu amor, regozijar-se-á em ti com júbilo (cânticos)". Deus não apenas nos tolera ou nos perdoa com relutância; Ele tem um prazer extasiante no Seu povo redimido. O Seu amor é tão profundo que traz descanso ("calar-se-á por seu amor"), e a Sua alegria é tão grande que Ele irrompe em cânticos sobre nós. O Criador do universo canta canções de amor sobre os Seus filhos.`
      }
    ],
    conclusion: `Sofonias 3:14-17 destrói a imagem de um Deus frio, distante ou perpetuamente irritado. O evangelho nos diz que, através da obra de Cristo, os nossos juízos foram afastados e o Rei está no meio de nós. A maior motivação para a nossa adoração e serviço não deve ser o medo, mas a revelação de que somos o objeto da alegria e do cântico de Deus. Quando compreendemos o quanto Ele se deleita em nós, as nossas mãos não se afrouxam mais na obra do Reino.`
  },
  {
    id: 'hag_1_2_8',
    bookId: 'HAG',
    chapter: 1,
    startVerse: 2,
    endVerse: 8,
    title: 'Considerai os Vossos Caminhos',
    theme: 'As Prioridades Invertidas e a Reconstrução do Templo',
    introduction: `Os judeus haviam retornado do exílio babilônico com a missão de reconstruir o templo de Jerusalém. No entanto, após lançarem os alicerces, enfrentaram oposição e pararam a obra por cerca de 16 anos. Eles usaram a oposição como desculpa para focar nos seus próprios interesses, construindo casas luxuosas para si mesmos enquanto a casa de Deus permanecia em ruínas. O profeta Ageu é levantado por Deus para confrontar essa apatia espiritual e chamar o povo a reordenar as suas prioridades.`,
    points: [
      {
        verseRef: 'v. 2-4',
        title: 'A Desculpa do Tempo e o Conforto Egoísta',
        description: `Casas Forradas vs. Casa Deserta. O povo dizia (v. 2): "Não é ainda chegado o tempo de se edificar a casa do Senhor". Eles racionalizavam a sua desobediência com desculpas de "tempo de Deus". A palavra do Senhor vem através de Ageu com uma ironia cortante (v. 3-4): "Porventura é para vós tempo de habitardes nas vossas casas forradas, enquanto esta casa fica deserta?". Eles tinham tempo e recursos para embelezar as suas próprias casas com painéis de madeira (luxo), mas alegavam não ter tempo para a obra de Deus. As prioridades estavam invertidas.`
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Futilidade do Esforço sem a Bênção de Deus',
        description: `Saco Furado. Deus faz um chamado à reflexão (v. 5): "Considerai os vossos caminhos". Ele aponta para a frustração econômica deles (v. 6): "Semeais muito, e recolheis pouco; comeis, porém não vos fartais... e o que recebe salário, recebe-o num saco furado". Eles estavam trabalhando exaustivamente para enriquecer, mas nunca estavam satisfeitos. Deus estava retendo a Sua bênção (soprando sobre o lucro deles, v. 9) para lhes ensinar que buscar a prosperidade material negligenciando o Reino de Deus resulta em vazio e frustração.`
      },
      {
        verseRef: 'v. 7-8',
        title: 'A Ordem para Agir e o Propósito da Obra',
        description: `Subi ao Monte, e Edificai a Casa. Deus repete a ordem: "Considerai os vossos caminhos" (v. 7) e dá a solução prática (v. 8): "Subi ao monte, e trazei madeira, e edificai a casa". O arrependimento exige ação. O propósito da reconstrução não era apenas ter um edifício bonito, mas a glória e a presença de Deus: "e dela me agradarei, e serei glorificado, diz o Senhor". Quando colocamos Deus em primeiro lugar, a nossa vida e o nosso trabalho encontram o seu verdadeiro propósito e significado.`
      }
    ],
    conclusion: `Ageu 1:2-8 é uma mensagem extremamente atual. Somos frequentemente tentados a investir todo o nosso tempo, energia e dinheiro na construção dos nossos próprios "impérios" (carreira, conforto, casas), enquanto a obra de Deus (a Igreja, missões, discipulado) fica em segundo plano. A mensagem de Ageu nos lembra que a verdadeira satisfação nunca será encontrada em um "saco furado" de conquistas materiais. A bênção de Deus flui quando buscamos primeiro o Seu Reino e a Sua justiça (Mateus 6:33).`
  },
  {
    id: 'zec_4_1_6',
    bookId: 'ZEC',
    chapter: 4,
    startVerse: 1,
    endVerse: 6,
    title: 'Não por Força, mas pelo Espírito',
    theme: 'O Poder Divino na Fraqueza Humana',
    introduction: `Zacarias foi contemporâneo de Ageu e também profetizou para encorajar os judeus a reconstruírem o templo após o exílio. O líder político, Zorobabel, estava enfrentando montanhas de oposição, falta de recursos e desânimo do povo. No capítulo 4, Zacarias tem a visão de um castiçal de ouro alimentado continuamente por duas oliveiras. A mensagem central desta visão é uma das declarações mais famosas sobre a dependência do Espírito Santo para a realização da obra de Deus.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Visão do Castiçal e as Duas Oliveiras',
        description: `O Suprimento Contínuo. O anjo acorda Zacarias e lhe mostra uma visão (v. 2-3): um castiçal (menorá) todo de ouro, com um vaso de azeite no topo e sete lâmpadas. Ao lado do castiçal, há duas oliveiras que derramam azeite diretamente no vaso através de tubos de ouro. O azeite flui continuamente das árvores para as lâmpadas, sem necessidade de intervenção humana. O castiçal representa o testemunho do povo de Deus, e o azeite é o símbolo clássico do Espírito Santo.`
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Pergunta do Profeta e a Necessidade de Revelação',
        description: `Que São Estas Coisas? Zacarias vê a visão, mas não entende o seu significado. Ele pergunta ao anjo (v. 4): "Que são estas coisas, meu senhor?". O anjo responde com outra pergunta (v. 5): "Não sabes tu o que são estas coisas?". Zacarias admite a sua ignorância: "Não, meu senhor". A verdadeira sabedoria espiritual começa com o reconhecimento da nossa própria incapacidade de entender os mistérios de Deus sem a revelação divina.`
      },
      {
        verseRef: 'v. 6',
        title: 'A Palavra a Zorobabel e o Poder do Espírito',
        description: `Não por Força, Nem por Violência. O anjo dá a interpretação, que é uma mensagem direta para o líder exausto (v. 6): "Esta é a palavra do Senhor a Zorobabel, dizendo: Não por força nem por violência, mas sim pelo meu Espírito, diz o Senhor dos Exércitos". A palavra "força" (chayil) refere-se a recursos militares ou financeiros; "violência" (koach) refere-se à força física ou humana. Zorobabel não conseguiria terminar o templo com os seus próprios recursos escassos. A obra de Deus só pode ser feita pelo poder contínuo e sobrenatural do Espírito de Deus.`
      }
    ],
    conclusion: `Zacarias 4:1-6 é o antídoto contra o esgotamento no ministério e na vida cristã. Quando enfrentamos "grandes montes" de dificuldade (v. 7), a nossa tendência natural é tentar resolver com mais esforço humano, mais dinheiro ou melhores estratégias. Mas Deus nos lembra que o Seu Reino não avança pelo poder da carne. Assim como o castiçal era alimentado diretamente pelas oliveiras, nós precisamos estar conectados à fonte inesgotável do Espírito Santo. Onde a força humana falha, o Espírito de Deus triunfa.`
  },
  {
    id: 'mal_3_1_6',
    bookId: 'MAL',
    chapter: 3,
    startVerse: 1,
    endVerse: 6,
    title: 'O Mensageiro da Aliança',
    theme: 'A Preparação do Caminho e o Fogo Purificador',
    introduction: `Malaquias é o último livro do Antigo Testamento. O povo de Israel, de volta à sua terra, havia caído novamente em apatia espiritual, cinismo e corrupção (oferecendo animais defeituosos, divorciando-se injustamente e retendo os dízimos). Eles perguntavam com sarcasmo: "Onde está o Deus do juízo?" (2:17). Em Malaquias 3, Deus responde anunciando a vinda do Messias e do Seu precursor. A passagem revela que a vinda de Deus não será apenas um evento de salvação, mas um processo doloroso de purificação para o Seu próprio povo.`,
    points: [
      {
        verseRef: 'v. 1',
        title: 'O Precursor e a Chegada Repentina do Senhor',
        description: `Eis que Eu Envio o Meu Mensageiro. Deus anuncia dois mensageiros (v. 1). O primeiro é o precursor: "Eis que eu envio o meu mensageiro, que preparará o caminho diante de mim" (cumprido em João Batista, Mateus 11:10). O segundo é o próprio Senhor: "e de repente virá ao seu templo o Senhor, a quem vós buscais; e o mensageiro da aliança, a quem vós desejais". O povo dizia desejar a vinda de Deus para julgar os seus inimigos, mas Deus avisa que Ele virá primeiro para julgar a Sua própria casa.`
      },
      {
        verseRef: 'v. 2-4',
        title: 'O Fogo do Ourives e a Purificação dos Sacerdotes',
        description: `Quem Suportará o Dia da Sua Vinda? A vinda do Senhor não será confortável para os hipócritas (v. 2): "Mas quem suportará o dia da sua vinda? E quem subsistirá, quando ele aparecer? Porque ele será como o fogo do ourives e como o sabão dos lavandeiros". O fogo do ourives não destrói o ouro, mas queima as impurezas (escórias). Deus se assentará como refinador (v. 3) para purificar os filhos de Levi (os líderes espirituais), para que eles possam oferecer sacrifícios em justiça. O objetivo do julgamento divino sobre a Igreja é a restauração da adoração pura (v. 4).`
      },
      {
        verseRef: 'v. 5-6',
        title: 'O Julgamento da Injustiça e a Imutabilidade de Deus',
        description: `Eu, o Senhor, Não Mudo. Deus lista os pecados que Ele julgará rapidamente (v. 5): feitiçaria, adultério, falso juramento, opressão dos trabalhadores (retenção de salário), injustiça contra viúvas, órfãos e estrangeiros, e a falta de temor a Deus. A ética social e a adoração estão inseparavelmente ligadas. O versículo 6 oferece a âncora da esperança no meio deste julgamento: "Porque eu, o Senhor, não mudo; por isso vós, ó filhos de Jacó, não sois consumidos". A imutabilidade de Deus (o Seu caráter pactual e fiel) é a única razão pela qual o Seu povo não é totalmente destruído pelos seus pecados.`
      }
    ],
    conclusion: `Malaquias 3:1-6 encerra o Antigo Testamento com uma promessa e um aviso. O Messias veio (Jesus Cristo) e virá novamente. A Sua presença é como um fogo purificador. Ele não nos deixa confortáveis nos nossos pecados; Ele nos refina através das provações para que possamos refletir a Sua imagem (como o ouro puro reflete o rosto do ourives). A nossa esperança não está na nossa própria fidelidade, mas na imutabilidade do nosso Deus, cuja graça nos purifica e nos preserva para a eternidade.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 13d).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
