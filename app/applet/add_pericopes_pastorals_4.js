const fs = require('fs');

const newPericopes = [
  {
    id: '1ti_6_6_10',
    bookId: '1TI',
    chapter: 6,
    startVerse: 6,
    endVerse: 10,
    title: 'A Piedade com Contentamento',
    theme: 'O Perigo da Riqueza e a Verdadeira Fonte de Lucro',
    introduction: `Em Éfeso, havia falsos mestres que viam a religião como um meio de enriquecimento (a antiga versão da teologia da prosperidade). Paulo ataca essa mentalidade de frente. Ele não condena o dinheiro em si, nem diz que a pobreza é uma virtude. O que ele condena é o "amor ao dinheiro" e a ilusão de que a riqueza material pode satisfazer a alma. Paulo redefine o que significa ser verdadeiramente rico, apontando para o contentamento como o maior lucro que um ser humano pode alcançar.`,
    points: [
      {
        verseRef: 'v. 6-7',
        title: 'O Grande Lucro e a Perspectiva da Eternidade',
        description: `A Verdadeira Riqueza. Paulo corrige a falsa teologia do lucro: "Mas é grande ganho a piedade com contentamento" (v. 6). A piedade (reverência a Deus e vida santa) combinada com o contentamento (a paz interior que não depende das circunstâncias externas) é a maior riqueza possível. Por quê? Paulo usa o argumento da eternidade (v. 7): "Porque nada trouxemos para este mundo, e manifesto é que nada podemos levar dele". A vida terrena é uma breve jornada entre duas nudezes. Acumular tesouros na terra é irracional, pois o caixão não tem gavetas.`
      },
      {
        verseRef: 'v. 8',
        title: 'O Padrão do Contentamento',
        description: `A Simplicidade Voluntária. Qual deve ser o nosso padrão de satisfação material? Paulo responde (v. 8): "Tendo, porém, sustento, e com que nos cobrirmos, estejamos com isso contentes". Comida e roupa (e, por extensão, abrigo) são as necessidades básicas. Se temos isso, temos o suficiente para estarmos satisfeitos. O contentamento cristão não é estoicismo (reprimir desejos), mas a profunda convicção de que Deus é o nosso Pai provedor e que a Sua presença é melhor do que qualquer bem material.`
      },
      {
        verseRef: 'v. 9-10',
        title: 'O Laço da Cobiça e a Raiz de Todos os Males',
        description: `O Perigo de Querer Ficar Rico. Paulo adverte sobre o perigo espiritual da ambição financeira (v. 9): "Mas os que querem ser ricos caem em tentação, e em laço, e em muitas concupiscências loucas e nocivas, que submergem os homens na perdição e ruína". O problema não é ter dinheiro, mas *querer* ser rico (a cobiça como objetivo de vida). Isso é uma armadilha que afoga a alma. O versículo 10 é o famoso diagnóstico: "Porque o amor ao dinheiro é a raiz de toda a espécie de males". O amor ao dinheiro leva à mentira, ao roubo, à traição e, o pior de tudo, à apostasia: "e nessa cobiça alguns se desviaram da fé, e se traspassaram a si mesmos com muitas dores".`
      }
    ],
    conclusion: `1 Timóteo 6:6-10 é um antídoto vital contra o materialismo da nossa cultura. A busca frenética por mais dinheiro e mais coisas é uma corrida que termina em ruína espiritual e dor emocional. A verdadeira liberdade financeira não é ter tudo o que queremos, mas aprender a estar plenamente satisfeitos com o que Deus nos deu, encontrando em Cristo o nosso tesouro inesgotável.`
  },
  {
    id: '2th_2_1_12',
    bookId: '2TH',
    chapter: 2,
    startVerse: 1,
    endVerse: 12,
    title: 'O Homem do Pecado e o Mistério da Iniquidade',
    theme: 'Os Eventos que Precedem o Dia do Senhor e a Grande Apostasia',
    introduction: `A igreja em Tessalônica estava em pânico. Falsos mestres (talvez usando cartas forjadas em nome de Paulo) estavam ensinando que o "Dia do Senhor" (o tempo do julgamento final e da vinda de Cristo) já havia chegado, e que eles haviam sido deixados para trás no meio da perseguição. Paulo escreve o capítulo 2 para acalmá-los e corrigir a sua escatologia. Ele explica que o Dia do Senhor não pode acontecer até que dois eventos históricos específicos ocorram primeiro: a grande apostasia e a revelação do "homem do pecado" (o Anticristo).`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'Os Pré-requisitos: A Apostasia e o Anticristo',
        description: `O Engano e a Rebelião. Paulo pede que eles não se deixem abalar facilmente (v. 1-2). Ele estabelece a ordem dos eventos (v. 3): "Ninguém de maneira alguma vos engane; porque não será assim sem que antes venha a apostasia, e se manifeste o homem do pecado, o filho da perdição". A "apostasia" é uma rebelião global e massiva contra Deus e a verdade cristã. O "homem do pecado" (o Anticristo final) é descrito no versículo 4: ele "se opõe, e se levanta contra tudo o que se chama Deus... de sorte que se assentará, como Deus, no templo de Deus, querendo parecer Deus". Ele exigirá adoração absoluta.`
      },
      {
        verseRef: 'v. 5-8',
        title: 'O Mistério da Iniquidade e o Detentor',
        description: `A Força Restritiva e a Destruição. Paulo os lembra do que já havia ensinado (v. 5). Atualmente, há algo que impede a manifestação total do Anticristo (v. 6): "E agora vós sabeis o que o detém, para que a seu próprio tempo seja manifestado". O "mistério da iniquidade" (o espírito de rebelião) já opera no mundo, mas há "um que agora o retém" (v. 7 - frequentemente interpretado como o Espírito Santo operando através da Igreja, ou o governo humano ordenado por Deus). Quando esse detentor for retirado, o iníquo será revelado. Mas o seu fim é certo (v. 8): "a quem o Senhor desfará pelo assopro da sua boca, e aniquilará pelo esplendor da sua vinda". O Anticristo não é rival para Jesus; ele será destruído com um simples sopro.`
      },
      {
        verseRef: 'v. 9-12',
        title: 'A Operação do Erro e o Julgamento dos Incrédulos',
        description: `O Engano Satânico. O Anticristo virá "segundo a eficácia de Satanás, com todo o poder, e sinais e prodígios de mentira" (v. 9). Ele usará milagres falsos para enganar as massas. Quem será enganado? Aqueles "que perecem; porque não receberam o amor da verdade para se salvarem" (v. 10). O julgamento de Deus sobre aqueles que rejeitam deliberadamente o evangelho é terrível (v. 11-12): "E por isso Deus lhes enviará a operação do erro, para que creiam a mentira; Para que sejam julgados todos os que não creram a verdade, antes tiveram prazer na iniquidade". A rejeição da verdade leva à cegueira judicial.`
      }
    ],
    conclusion: `2 Tessalonicenses 2:1-12 nos dá uma perspectiva sóbria sobre o futuro. O mundo não está evoluindo para uma utopia, mas caminhando para uma rebelião final liderada pelo Anticristo. No entanto, esta passagem não foi escrita para nos causar medo, mas para nos dar paz. O mal tem limites estabelecidos por Deus, o Anticristo será destruído facilmente pela vinda de Cristo, e aqueles que amam a verdade do evangelho estão eternamente seguros.`
  },
  {
    id: '1th_4_13_18',
    bookId: '1TH',
    chapter: 4,
    startVerse: 13,
    endVerse: 18,
    title: 'O Arrebatamento e o Consolo dos Crentes',
    theme: 'A Esperança da Ressurreição e o Encontro com o Senhor',
    introduction: `Os cristãos em Tessalônica estavam sofrendo de uma tristeza profunda e teológica. Alguns dos seus irmãos na fé haviam morrido, e eles temiam que esses crentes falecidos perdessem a glória da segunda vinda de Cristo. Paulo escreve esta passagem clássica sobre o "arrebatamento" (rapto) não para criar um cronograma escatológico complexo, mas com um propósito pastoral muito específico: consolar os corações enlutados com a certeza da ressurreição e da reunião eterna.`,
    points: [
      {
        verseRef: 'v. 13-14',
        title: 'A Tristeza com Esperança e o Fundamento da Ressurreição',
        description: `A Morte como Sono. Paulo começa: "Não quero, porém, irmãos, que sejais ignorantes acerca dos que já dormem, para que não vos entristeçais, como os demais, que não têm esperança". Os cristãos choram a morte, mas não com o desespero dos ateus. Para o crente, a morte do corpo é apenas um "sono" temporário. O fundamento desta esperança é histórico (v. 14): "Porque, se cremos que Jesus morreu e ressuscitou, assim também aos que em Jesus dormem, Deus os tornará a trazer com ele". A ressurreição física de Jesus é a garantia absoluta da nossa própria ressurreição.`
      },
      {
        verseRef: 'v. 15-16',
        title: 'A Ordem dos Eventos e a Ressurreição dos Mortos',
        description: `A Prioridade dos Falecidos. Paulo revela uma "palavra do Senhor" (v. 15): "nós, os que ficarmos vivos para a vinda do Senhor, não precederemos os que dormem". Os vivos não terão nenhuma vantagem sobre os mortos. O versículo 16 descreve a descida majestosa de Cristo: "Porque o mesmo Senhor descerá do céu com alarido (um grito de comando militar), e com voz de arcanjo, e com a trombeta de Deus". O evento mais espetacular acontece primeiro: "e os que morreram em Cristo ressuscitarão primeiro". Os corpos mortos serão recriados e glorificados antes que qualquer outra coisa aconteça.`
      },
      {
        verseRef: 'v. 17-18',
        title: 'O Arrebatamento dos Vivos e a Reunião Eterna',
        description: `O Encontro nos Ares. Depois da ressurreição dos mortos, vem a transformação dos vivos (v. 17): "Depois nós, os que ficarmos vivos, seremos arrebatados (harpazo, agarrados com força, raptados) juntamente com eles nas nuvens, a encontrar o Senhor nos ares". A igreja (ressurretos e transformados) é reunida como um só povo para receber o Rei que retorna. A promessa final é a mais doce de todas: "e assim estaremos sempre com o Senhor". O propósito de toda essa revelação é dado no versículo 18: "Portanto, consolai-vos uns aos outros com estas palavras".`
      }
    ],
    conclusion: `1 Tessalonicenses 4:13-18 é a resposta definitiva de Deus ao terror da morte e à dor da separação. O túmulo não é o fim da história para o cristão. O mesmo Jesus que venceu a morte voltará para buscar o Seu povo. Naquele dia glorioso, a morte será desfeita, as lágrimas serão enxugadas, seremos reunidos com os nossos irmãos que partiram e, o mais importante, estaremos para sempre na presença física do nosso Senhor.`
  },
  {
    id: '1th_5_1_11',
    bookId: '1TH',
    chapter: 5,
    startVerse: 1,
    endVerse: 11,
    title: 'O Dia do Senhor e a Vigilância',
    theme: 'A Prontidão Espiritual e o Contraste entre a Luz e as Trevas',
    introduction: `Após explicar o arrebatamento, Paulo muda o foco para o "Dia do Senhor" (o período de julgamento divino sobre o mundo incrédulo). Os tessalonicenses queriam saber "os tempos e as estações" (quando isso aconteceria). Paulo responde que a data exata é irrelevante e impossível de saber. O que importa não é calcular o calendário profético, mas viver em estado de prontidão constante. Ele usa o contraste entre luz e trevas, dia e noite, sobriedade e embriaguez, para ilustrar como a igreja deve viver na expectativa do retorno de Cristo.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Chegada Repentina e a Falsa Paz do Mundo',
        description: `O Ladrão de Noite. Paulo lembra que eles já sabiam (v. 2) "que o dia do Senhor virá como o ladrão de noite". O Dia do Senhor será repentino, inesperado e catastrófico para o mundo. O versículo 3 descreve a atitude dos incrédulos antes do julgamento: "Pois que, quando disserem: Há paz e segurança, então lhes sobrevirá repentina destruição, como as dores de parto àquela que está grávida, e de modo nenhum escaparão". O mundo estará iludido por uma falsa sensação de segurança política e econômica, ignorando os sinais iminentes do julgamento de Deus.`
      },
      {
        verseRef: 'v. 4-8',
        title: 'Filhos da Luz e a Necessidade de Sobriedade',
        description: `A Nova Identidade. A situação da igreja é completamente diferente (v. 4): "Mas vós, irmãos, já não estais em trevas, para que aquele dia vos surpreenda como um ladrão". Os crentes não serão pegos de surpresa porque a sua natureza mudou (v. 5): "Porque todos vós sois filhos da luz e filhos do dia". Baseado nessa identidade, Paulo dá os imperativos éticos (v. 6-8): "Não durmamos, pois, como os demais, mas vigiemos, e sejamos sóbrios". A "embriaguez" espiritual (estar entorpecido pelos prazeres e cuidados deste mundo) pertence à noite. Nós devemos estar acordados, vestidos com a armadura de Deus: "vestidos da couraça da fé e do amor, e tendo por capacete a esperança da salvação".`
      },
      {
        verseRef: 'v. 9-11',
        title: 'O Destino da Salvação e a Edificação Mútua',
        description: `Livres da Ira. Por que podemos ter confiança no Dia do Senhor? O versículo 9 dá a garantia teológica: "Porque Deus não nos destinou para a ira, mas para a aquisição da salvação, por nosso Senhor Jesus Cristo". O crente não enfrentará a ira de Deus porque Cristo já a suportou na cruz. O propósito da morte de Cristo (v. 10) é "para que, quer vigiemos, quer durmamos (quer estejamos vivos ou mortos na Sua vinda), vivamos juntamente com ele". A conclusão prática (v. 11) é a mesma do capítulo 4: "Por isso exortai-vos uns aos outros, e edificai-vos uns aos outros, como também o fazeis".`
      }
    ],
    conclusion: `1 Tessalonicenses 5:1-11 nos ensina que a escatologia bíblica não foi dada para satisfazer a nossa curiosidade sobre o futuro, mas para transformar o nosso comportamento no presente. Saber que Cristo pode voltar a qualquer momento deve nos manter espiritualmente acordados, sóbrios e focados no amor e na fé. Não temos motivos para temer o julgamento, pois fomos destinados à salvação, mas temos todas as razões para vivermos vidas santas que reflitam a luz do Dia que se aproxima.`
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
  console.log('Successfully added 4 new pericopes for 1 Tim and 1/2 Thes.');
} else {
  console.error('Could not find the end of the pericopes array.');
}
