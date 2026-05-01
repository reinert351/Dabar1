const fs = require('fs');

const newPericopes = [
  {
    id: 'hos_3_1_5',
    bookId: 'HOS',
    chapter: 3,
    startVerse: 1,
    endVerse: 5,
    title: 'O Amor Inabalável de Deus',
    theme: 'A Redenção da Esposa Infiel',
    introduction: `O livro de Oseias é uma parábola viva. Deus ordena que o profeta se case com uma prostituta, Gômer, para ilustrar o relacionamento de Deus com Israel. Gômer abandona Oseias e volta para os seus amantes, acabando como escrava. No capítulo 3, Deus dá a Oseias a ordem mais difícil da sua vida: ir e comprar a sua esposa de volta. Esta ação dolorosa e humilhante é o retrato mais comovente do Antigo Testamento sobre a graça redentora de Deus, que compra de volta pecadores que O traíram.`,
    points: [
      {
        verseRef: 'v. 1',
        title: 'A Ordem do Amor e o Reflexo Divino',
        description: `Vai Outra Vez. O Senhor diz a Oseias: "Vai outra vez, ama uma mulher, amada de seu amigo, e adúltera, como o Senhor ama os filhos de Israel, embora eles olhem para outros deuses, e amem os bolos de uvas". O amor humano natural acaba quando há traição. Mas o amor de Deus (hesed) é incondicional e pactual. Deus não ama Israel porque Israel é fiel, mas porque Deus é fiel. Oseias é chamado a amar a sua esposa adúltera exatamente da mesma forma que Deus ama o Seu povo idólatra.`
      },
      {
        verseRef: 'v. 2',
        title: 'O Preço da Redenção e a Compra da Escrava',
        description: `Eu a Comprei. Gômer havia caído na miséria e estava sendo vendida como escrava. Oseias vai ao mercado e paga o preço (v. 2): "E a comprei para mim por quinze peças de prata, e um ômer, e meio de cevada". O preço era o valor de um escravo comum (trinta siclos de prata, Êxodo 21:32, pago metade em dinheiro e metade em grãos). Oseias não a recebe de volta gratuitamente; ele tem que pagar por ela. A redenção sempre tem um custo. Cristo pagou o preço da nossa escravidão ao pecado não com prata ou ouro, mas com o Seu próprio sangue (1 Pedro 1:18-19).`
      },
      {
        verseRef: 'v. 3-5',
        title: 'A Disciplina Restauradora e o Retorno ao Rei',
        description: `Tu Ficarás Comigo. Após comprá-la, Oseias não a trata como escrava, mas restaura a sua dignidade com uma condição de disciplina (v. 3): "Tu ficarás comigo muitos dias; não te prostituirás, nem serás de outro homem; assim também eu serei para ti". Haverá um período de purificação. Isso profetiza o exílio de Israel (v. 4): ficarão muitos dias sem rei, sem sacrifício e sem ídolos. O objetivo da disciplina é a restauração (v. 5): "Depois tornarão os filhos de Israel, e buscarão ao Senhor seu Deus, e a Davi, seu rei; e temerão ao Senhor, e à sua bondade, no fim dos dias".`
      }
    ],
    conclusion: `Oseias 3:1-5 é o evangelho em miniatura. Nós somos Gômer. Nós abandonamos o nosso Criador para buscar prazer e segurança nos ídolos do mundo, e acabamos escravizados pelos nossos próprios pecados. Mas Deus, o nosso Marido celestial, não nos abandonou no mercado de escravos. Ele desceu, pagou o preço infinito na cruz e nos comprou de volta para Si mesmo. A resposta a um amor tão escandaloso só pode ser uma vida de fidelidade e temor à Sua bondade.`
  },
  {
    id: 'hos_6_1_6',
    bookId: 'HOS',
    chapter: 6,
    startVerse: 1,
    endVerse: 6,
    title: 'O Conhecimento de Deus',
    theme: 'Arrependimento Superficial vs. Relacionamento Verdadeiro',
    introduction: `Oseias 6 começa com o que parece ser uma bela canção de arrependimento do povo de Israel. Eles convidam uns aos outros a voltar para o Senhor, confiando que Ele os curará. No entanto, a resposta de Deus nos versículos seguintes revela que o arrependimento deles era superficial e passageiro, motivado apenas pelo desejo de alívio da dor, e não por um amor genuíno. Deus expõe a futilidade da religião externa e declara o que Ele realmente deseja: misericórdia e conhecimento íntimo dEle.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Arrependimento Superficial e a Presunção da Cura',
        description: `Vinde, e Tornemos ao Senhor. O povo diz (v. 1): "Vinde, e tornemos ao Senhor, porque ele despedaçou, e nos sarará; feriu, e nos atará a ferida". Eles reconhecem que a disciplina veio de Deus e presumem que a cura será rápida (v. 2): "Depois de dois dias nos dará a vida; ao terceiro dia nos ressuscitará". Eles dizem (v. 3): "Conheçamos, e prossigamos em conhecer ao Senhor". As palavras são corretas, mas o coração está errado. Eles tratam Deus como uma máquina de curativos: basta dizer as palavras certas, e Ele é obrigado a abençoar.`
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Frustração Divina e a Bondade Passageira',
        description: `Como a Nuvem da Manhã. Deus responde com frustração e dor (v. 4): "Que te farei, ó Efraim? Que te farei, ó Judá? Porque a vossa benignidade (hesed - amor leal) é como a nuvem da manhã e como o orvalho da madrugada, que cedo passa". O amor deles por Deus evaporava assim que o sol das provações ou das tentações aparecia. Por causa dessa superficialidade, Deus enviou os profetas com palavras duras (v. 5): "Por isso os abati pelos profetas; pelas palavras da minha boca os matei; e os teus juízos sairão como a luz". A Palavra de Deus corta para curar.`
      },
      {
        verseRef: 'v. 6',
        title: 'O Coração da Religião: Misericórdia e Conhecimento',
        description: `Misericórdia Quero, e Não Sacrifício. O versículo 6 é o clímax teológico do livro (citado duas vezes por Jesus em Mateus 9:13 e 12:7): "Porque eu quero a misericórdia, e não o sacrifício; e o conhecimento de Deus, mais do que os holocaustos". O povo estava oferecendo sacrifícios no templo, achando que isso apaziguaria a Deus, enquanto continuavam vivendo em injustiça e idolatria. Deus rejeita a religião mecânica. Ele deseja "misericórdia" (hesed - amor leal a Deus e ao próximo) e "conhecimento de Deus" (um relacionamento íntimo e transformador), não apenas rituais vazios.`
      }
    ],
    conclusion: `Oseias 6:1-6 é um alerta contra o perigo de usar Deus apenas como um solucionador de problemas. O verdadeiro arrependimento não é apenas querer que Deus tire a nossa dor; é querer o próprio Deus. Podemos frequentar a igreja e oferecer os nossos "sacrifícios" (tempo, dinheiro, serviço), mas se o nosso amor por Ele for como o orvalho da manhã que evapora rapidamente, a nossa religião é inútil. Deus não quer o nosso ativismo religioso; Ele quer o nosso coração.`
  },
  {
    id: 'jol_2_12_17',
    bookId: 'JOL',
    chapter: 2,
    startVerse: 12,
    endVerse: 17,
    title: 'O Chamado ao Arrependimento',
    theme: 'O Coração Rasgado e a Misericórdia de Deus',
    introduction: `O livro de Joel foi escrito no contexto de uma devastadora praga de gafanhotos que destruiu a economia de Judá. Joel interpreta esse desastre natural como um aviso do "Dia do Senhor", um julgamento divino iminente. Diante dessa crise nacional, a única resposta adequada não é a recuperação econômica, mas o arrependimento espiritual. O chamado de Joel no capítulo 2 é um dos apelos mais urgentes e profundos do Antigo Testamento para um retorno sincero a Deus, focando na atitude interna em vez do ritual externo.`,
    points: [
      {
        verseRef: 'v. 12-13a',
        title: 'O Arrependimento Interno: Rasgai o Coração',
        description: `Convertei-vos a Mim de Todo o Vosso Coração. Deus faz o convite (v. 12): "Ainda assim, agora mesmo diz o Senhor: Convertei-vos a mim de todo o vosso coração; e isso com jejuns, e com choro, e com pranto". A urgência é "agora mesmo". O arrependimento deve ser total. O versículo 13a contém a instrução crucial: "E rasgai o vosso coração, e não as vossas vestes". Rasgar as roupas era um sinal cultural de luto e arrependimento, mas era fácil de falsificar. Deus não quer teatro religioso; Ele quer corações quebrantados e contritos.`
      },
      {
        verseRef: 'v. 13b-14',
        title: 'A Base do Arrependimento: O Caráter de Deus',
        description: `Ele é Misericordioso e Compassivo. Por que devemos voltar para Deus? Não apenas porque temos medo do julgamento, mas por causa de quem Ele é (v. 13b): "e convertei-vos ao Senhor vosso Deus; porque ele é misericordioso, e compassivo, e tardio em irar-se, e grande em benignidade, e se arrepende do mal". O arrependimento bíblico é sempre motivado pela revelação da graça de Deus. Joel introduz uma esperança humilde (v. 14): "Quem sabe se não se voltará e se arrependerá, e deixará após si uma bênção...". Não podemos exigir a graça, mas podemos confiar no caráter do Doador.`
      },
      {
        verseRef: 'v. 15-17',
        title: 'A Convocação Nacional e a Oração dos Sacerdotes',
        description: `Tocai a Trombeta em Sião. O arrependimento deve ser corporativo e público (v. 15-16). Ninguém está isento: os anciãos, as crianças, os bebês, e até os noivos devem sair dos seus aposentos. A crise exige que as alegrias normais da vida sejam suspensas para buscar a Deus. Os sacerdotes recebem uma oração específica para fazer entre o pórtico e o altar (v. 17): "Poupa a teu povo, ó Senhor, e não entregues a tua herança ao opróbrio... Por que diriam entre os povos: Onde está o seu Deus?". A motivação final da oração é a glória e a reputação do nome de Deus entre as nações.`
      }
    ],
    conclusion: `Joel 2:12-17 nos ensina que a verdadeira crise da humanidade não é econômica, política ou ambiental, mas espiritual. Quando enfrentamos os "gafanhotos" da vida, a nossa primeira resposta não deve ser o pânico, mas o quebrantamento. Deus não se impressiona com as nossas roupas rasgadas (nossas demonstrações externas de piedade), mas Ele nunca resiste a um coração rasgado. O convite permanece aberto: voltemos para Ele, porque Ele é misericordioso e compassivo.`
  },
  {
    id: 'jol_2_28_32',
    bookId: 'JOL',
    chapter: 2,
    startVerse: 28,
    endVerse: 32,
    title: 'O Derramamento do Espírito',
    theme: 'A Promessa Pentecostal e a Salvação Universal',
    introduction: `Após o chamado ao arrependimento e a promessa de restauração material (a devolução dos anos consumidos pelos gafanhotos), Joel eleva a sua visão profética para o futuro distante. Ele profetiza a maior de todas as restaurações: o derramamento do Espírito Santo. No Antigo Testamento, o Espírito vinha apenas sobre indivíduos específicos (reis, sacerdotes, profetas) para tarefas específicas. A promessa de Joel é revolucionária porque anuncia uma era em que a presença de Deus será democratizada, disponível a todos os crentes, culminando no Dia de Pentecostes.`,
    points: [
      {
        verseRef: 'v. 28-29',
        title: 'A Democratização do Espírito Santo',
        description: `Sobre Toda a Carne. A promessa é universal dentro do povo de Deus (v. 28): "E há de ser que, depois derramarei o meu Espírito sobre toda a carne". O verbo "derramar" implica abundância, não apenas gotas. As barreiras sociais, de gênero e de idade são derrubadas: "vossos filhos e vossas filhas profetizarão, os vossos velhos terão sonhos, os vossos jovens terão visões". Até mesmo as barreiras de classe são eliminadas (v. 29): "E também sobre os servos e sobre as servas naqueles dias derramarei o meu Espírito". Na Nova Aliança, todo crente é um templo do Espírito Santo.`
      },
      {
        verseRef: 'v. 30-31',
        title: 'Os Sinais Cósmicos e o Dia do Senhor',
        description: `Sangue, Fogo e Colunas de Fumaça. O derramamento do Espírito está ligado a eventos escatológicos (v. 30-31): "E mostrarei prodígios no céu, e na terra, sangue e fogo, e colunas de fumaça. O sol se converterá em trevas, e a lua em sangue, antes que venha o grande e terrível dia do Senhor". O "Dia do Senhor" é o momento da intervenção definitiva de Deus na história para julgar o mal e salvar o Seu povo. A era do Espírito (a era da Igreja) é o período entre a primeira vinda de Cristo (inaugurada no Pentecostes) e a Sua segunda vinda (o grande e terrível Dia).`
      },
      {
        verseRef: 'v. 32',
        title: 'A Promessa de Salvação e a Invocação do Nome',
        description: `Todo Aquele que Invocar. No meio do julgamento cósmico, há uma promessa de resgate absoluto (v. 32): "E há de ser que todo aquele que invocar o nome do Senhor será salvo". A salvação não é baseada em etnia, mérito moral ou status social, mas na invocação (fé e clamor) do nome de Yahweh. O apóstolo Pedro citou esta passagem inteira no Dia de Pentecostes (Atos 2) para explicar o derramamento do Espírito, e o apóstolo Paulo a usou em Romanos 10:13 para provar que o evangelho da graça é para todos, judeus e gentios.`
      }
    ],
    conclusion: `Joel 2:28-32 é a certidão de nascimento da era do Espírito. Nós vivemos no cumprimento desta promessa. Não precisamos de mediadores humanos especiais para ouvir a voz de Deus, porque o Seu Espírito foi derramado sobre nós. Esta passagem nos enche de esperança e urgência: esperança, porque o poder de Deus habita em nós; e urgência, porque o "grande e terrível dia do Senhor" se aproxima, e a nossa missão é anunciar a todos que "todo aquele que invocar o nome do Senhor será salvo".`
  },
  {
    id: 'amo_5_21_24',
    bookId: 'AMO',
    chapter: 5,
    startVerse: 21,
    endVerse: 24,
    title: 'A Justiça como um Rio',
    theme: 'A Rejeição da Religião Falsa e a Exigência de Justiça',
    introduction: `Amós era um pastor de ovelhas e cultivador de sicômoros do sul (Judá) que foi enviado por Deus para profetizar no norte (Israel) durante um período de grande prosperidade econômica. No entanto, essa prosperidade foi construída sobre a opressão dos pobres e a corrupção dos tribunais. O povo continuava frequentando os santuários, oferecendo sacrifícios e cantando louvores, acreditando que Deus estava satisfeito. Em Amós 5, Deus profere uma das condenações mais chocantes da Bíblia contra a religião hipócrita que separa a adoração da ética social.`,
    points: [
      {
        verseRef: 'v. 21-22',
        title: 'O Ódio Divino pelas Festas Religiosas Vazias',
        description: `Aborreço, Desprezo as Vossas Festas. A linguagem de Deus é de repulsa absoluta (v. 21): "Odeio, desprezo as vossas festas, e as vossas assembleias solenes não me exalarão bom cheiro". Eles estavam cumprindo o calendário religioso, mas Deus não suportava o "cheiro" da adoração deles. Ele rejeita as ofertas deles (v. 22): "E ainda que me ofereçais holocaustos, ofertas de alimentos, não me agradarei delas; nem atentarei para as ofertas pacíficas de vossos animais gordos". Sacrifícios caros não podem subornar a Deus para que Ele ignore a injustiça.`
      },
      {
        verseRef: 'v. 23',
        title: 'O Silêncio Exigido e a Rejeição do Louvor',
        description: `Afasta de Mim o Estrépito dos Teus Cânticos. A condenação atinge o ministério de louvor (v. 23): "Afasta de mim o estrépito dos teus cânticos; porque não ouvirei as melodias das tuas violas". A palavra "estrépito" significa barulho, ruído irritante. Para Deus, a música mais bem executada, cantada por pessoas que exploram os pobres e oprimem os fracos durante a semana, não é adoração; é poluição sonora. Deus prefere o silêncio a um louvor hipócrita.`
      },
      {
        verseRef: 'v. 24',
        title: 'A Verdadeira Adoração: Justiça e Retidão',
        description: `Corra, Porém, o Juízo como as Águas. O que Deus realmente deseja não é mais liturgia, mas transformação ética (v. 24): "Corra, porém, o juízo como as águas, e a justiça como o ribeiro impetuoso". O "juízo" (mishpat) refere-se a tratar as pessoas de forma equitativa, especialmente os vulneráveis. A "justiça" (tsedaqah) refere-se a viver em um relacionamento correto com Deus e com o próximo. Deus quer que a justiça flua na sociedade não como um riacho intermitente que seca no verão, mas como um rio perene e impetuoso que varre a corrupção.`
      }
    ],
    conclusion: `Amós 5:21-24 é um soco no estômago da religião confortável. Ele nos ensina que não podemos separar o que fazemos no domingo do que fazemos na segunda-feira. Deus não se impressiona com o tamanho das nossas ofertas, a beleza dos nossos cânticos ou a frequência dos nossos cultos se as nossas vidas são marcadas por egoísmo, desonestidade e indiferença para com os necessitados. A verdadeira adoração que agrada a Deus é uma vida onde a justiça e a retidão fluem como um rio constante.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 13b).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
