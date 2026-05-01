const fs = require('fs');

const newPericopes = [
  {
    id: '1co_13_1_13',
    bookId: '1CO',
    chapter: 13,
    startVerse: 1,
    endVerse: 13,
    title: 'A Supremacia do Amor',
    theme: 'O Caminho Mais Excelente e a Essência do Caráter Cristão',
    introduction: `O capítulo 13 de 1 Coríntios, frequentemente chamado de "Hino ao Amor", é um dos textos mais belos da literatura mundial, mas o seu contexto original não era um casamento romântico. Paulo o escreveu como uma repreensão severa a uma igreja dividida, imatura e orgulhosa dos seus dons espirituais. Ele interrompe a sua discussão sobre os dons (capítulos 12 e 14) para mostrar "um caminho ainda mais excelente": o caráter de Cristo expresso através do amor ágape, sem o qual toda a atividade religiosa é inútil.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Inutilidade dos Dons Sem Amor',
        description: `O Zero Espiritual. Paulo usa hipérboles para chocar os coríntios. Mesmo que alguém falasse as línguas dos homens e dos anjos (v. 1), tivesse o dom de profecia, conhecesse todos os mistérios e tivesse fé para mover montanhas (v. 2), ou até mesmo doasse todos os seus bens e entregasse o seu corpo para ser queimado como mártir (v. 3) — se não tivesse amor, seria "como o metal que soa", "nada seria" e "nada disso me aproveitaria". Dons espirituais, conhecimento teológico e sacrifício extremo não impressionam a Deus se o motivo não for o amor.`
      },
      {
        verseRef: 'v. 4-7',
        title: 'O Perfil do Amor Verdadeiro',
        description: `O Amor em Ação. Paulo não define o amor como um sentimento, mas como uma série de ações e atitudes (15 verbos no grego). O amor é paciente e benigno (v. 4). Ele não tem inveja, não se vangloria, não se ensoberbece. Não se porta com indecência, não busca os seus próprios interesses, não se irrita, não suspeita mal (v. 5). Não folga com a injustiça, mas folga com a verdade (v. 6). Tudo sofre, tudo crê, tudo espera, tudo suporta (v. 7). Este é o retrato exato do caráter de Jesus Cristo.`
      },
      {
        verseRef: 'v. 8-13',
        title: 'A Permanência e a Eternidade do Amor',
        description: `O Que Fica Quando Tudo Passa. "O amor nunca falha" (v. 8). Paulo contrasta a eternidade do amor com a temporalidade dos dons espirituais. As profecias, as línguas e a ciência (conhecimento) passarão, pois são ferramentas temporárias para a era presente, onde conhecemos "em parte" (v. 9-10). Quando vier o que é perfeito (a consumação na volta de Cristo), os dons cessarão. Paulo conclui (v. 13): "Agora, pois, permanecem a fé, a esperança e o amor, estes três, mas o maior destes é o amor". O amor é o maior porque é o único que continuará na eternidade, pois Deus é amor.`
      }
    ],
    conclusion: `1 Coríntios 13 é um espelho que revela as nossas falhas e o nosso egoísmo. A igreja de Corinto tinha todos os dons, mas faltava-lhe a graça principal. Podemos ter a melhor teologia, a liturgia mais vibrante e os ministérios mais ativos, mas se não amarmos os nossos irmãos com o amor sacrificial de Cristo, somos um zero espiritual diante de Deus. O amor não é uma opção para o cristão; é a própria evidência de que nascemos de Deus.`
  },
  {
    id: '1co_15_1_11',
    bookId: '1CO',
    chapter: 15,
    startVerse: 1,
    endVerse: 11,
    title: 'A Essência do Evangelho e a Ressurreição',
    theme: 'O Fundamento Histórico e Teológico da Fé Cristã',
    introduction: `Alguns na igreja de Corinto estavam negando a ressurreição corporal dos mortos. Paulo responde a esta heresia no capítulo 15, o tratamento mais extenso sobre a ressurreição na Bíblia. Ele começa lembrando-os da mensagem fundamental que os salvou. O evangelho não é um mito ou uma filosofia abstrata; é baseado em fatos históricos inegáveis: a morte substitutiva, o sepultamento e a ressurreição corporal de Jesus Cristo, atestados por centenas de testemunhas oculares.`,
    points: [
      {
        verseRef: 'v. 1-3a',
        title: 'O Evangelho Recebido e Transmitido',
        description: `A Tradição Apostólica. Paulo lembra aos coríntios o evangelho que lhes pregou, que eles receberam, no qual estão firmes e pelo qual são salvos (v. 1-2). Ele enfatiza que não inventou esta mensagem, mas a recebeu e a entregou "primeiramente" (como de primeira importância) (v. 3a). O cristianismo é uma fé revelada e histórica; a nossa tarefa não é inovar a mensagem, mas transmiti-la fielmente como a recebemos dos apóstolos.`
      },
      {
        verseRef: 'v. 3b-4',
        title: 'Os Fatos Históricos da Redenção',
        description: `O Núcleo da Mensagem. Paulo resume o evangelho em três fatos históricos, todos validados pelas Escrituras: 1) "Cristo morreu por nossos pecados, segundo as Escrituras". A Sua morte não foi um acidente, mas um sacrifício expiatório planejado por Deus. 2) "Foi sepultado". O sepultamento prova a realidade da Sua morte física. 3) "Ressuscitou ao terceiro dia, segundo as Escrituras". A ressurreição prova a vitória sobre a morte e a aceitação do sacrifício pelo Pai. Sem estes três pilares, não há evangelho.`
      },
      {
        verseRef: 'v. 5-11',
        title: 'As Testemunhas Oculares e a Graça Transformadora',
        description: `A Prova Irrefutável. Para provar que a ressurreição não foi uma alucinação, Paulo lista as testemunhas oculares: Cefas (Pedro), os doze, mais de quinhentos irmãos de uma só vez (a maioria ainda viva na época da carta), Tiago (o meio-irmão cético de Jesus), e todos os apóstolos (v. 5-7). Por fim, ele apareceu a Paulo, "como a um abortivo" (v. 8). Paulo reconhece a sua indignidade por ter perseguido a igreja (v. 9), mas exalta a graça de Deus (v. 10): "Mas pela graça de Deus sou o que sou". A ressurreição não apenas garante a vida eterna, mas transforma perseguidores em apóstolos.`
      }
    ],
    conclusion: `1 Coríntios 15:1-11 é a âncora histórica da nossa fé. O cristianismo não se baseia em sentimentos ou ideias morais, mas no túmulo vazio de Jesus de Nazaré. Se Cristo não ressuscitou, a nossa fé é vã e ainda estamos nos nossos pecados. Mas porque Ele vive, o evangelho tem o poder de salvar, transformar e garantir a nossa própria ressurreição no último dia. Devemos nos firmar nesta verdade e nunca nos desviarmos dela.`
  },
  {
    id: '2co_5_17_21',
    bookId: '2CO',
    chapter: 5,
    startVerse: 17,
    endVerse: 21,
    title: 'A Nova Criação e o Ministério da Reconciliação',
    theme: 'A Transformação em Cristo e a Missão da Igreja',
    introduction: `Nesta passagem profunda, Paulo descreve a magnitude da salvação e a responsabilidade que ela traz. A salvação não é apenas uma reforma moral ou um perdão judicial; é um milagre de recriação cósmica no nível individual. Aqueles que experimentaram esta nova criação são imediatamente comissionados por Deus para serem os Seus embaixadores, levando a mensagem de reconciliação a um mundo alienado, baseados na grande troca que ocorreu na cruz.`,
    points: [
      {
        verseRef: 'v. 17',
        title: 'O Milagre da Nova Criação',
        description: `Tudo se Fez Novo. "Assim que, se alguém está em Cristo, nova criatura é; as coisas velhas já passaram; eis que tudo se fez novo". A união com Cristo ("estar em Cristo") resulta em uma mudança ontológica. O crente não é apenas uma versão melhorada de si mesmo; ele é uma "nova criação" (kaine ktisis). A velha natureza, a condenação e a escravidão ao pecado passaram. Uma nova vida, com novos desejos, nova identidade e um novo destino, começou.`
      },
      {
        verseRef: 'v. 18-19',
        title: 'A Iniciativa Divina da Reconciliação',
        description: `Deus Estava em Cristo. "E tudo isto provém de Deus, que nos reconciliou consigo mesmo por Jesus Cristo" (v. 18). O pecado criou inimizade e alienação entre o homem e Deus. O homem ofendeu a Deus, mas foi Deus quem tomou a iniciativa de buscar a paz. "Deus estava em Cristo reconciliando consigo o mundo, não lhes imputando os seus pecados" (v. 19). Na cruz, Deus não estava punindo um terceiro inocente; o próprio Deus, em Cristo, estava absorvendo a penalidade para não ter que imputar (creditar) os pecados na nossa conta.`
      },
      {
        verseRef: 'v. 20-21',
        title: 'Os Embaixadores e a Dupla Imputação',
        description: `A Grande Troca. Tendo nos reconciliado, Deus nos deu a "palavra da reconciliação". Portanto, "somos embaixadores da parte de Cristo" (v. 20). Um embaixador não fala por si mesmo, mas representa a autoridade do seu soberano. O apelo é urgente: "Reconciliai-vos com Deus". O fundamento deste apelo é a doutrina da dupla imputação (v. 21): "Àquele que não conheceu pecado, o fez pecado por nós; para que nele fôssemos feitos justiça de Deus". Os nossos pecados foram creditados a Cristo (Ele foi tratado como pecador), e a justiça perfeita de Cristo foi creditada a nós (somos tratados como justos).`
      }
    ],
    conclusion: `2 Coríntios 5:17-21 resume o coração do evangelho e a missão da igreja. Fomos recriados pela graça e justificados pela "grande troca" na cruz. Mas a salvação não termina em nós; ela nos transforma em embaixadores. O mundo ao nosso redor está em guerra contra Deus, caminhando para a destruição. A nossa tarefa não é condenar o mundo, mas implorar em nome de Cristo: "Reconciliai-vos com Deus", pois o preço da paz já foi totalmente pago.`
  },
  {
    id: 'gal_2_15_21',
    bookId: 'GAL',
    chapter: 2,
    startVerse: 15,
    endVerse: 21,
    title: 'A Justificação pela Fé e a Vida Crucificada',
    theme: 'A Inutilidade da Lei e a Suficiência de Cristo',
    introduction: `A Carta aos Gálatas é o grito de guerra de Paulo em defesa do evangelho da graça. Falsos mestres (judaizantes) estavam ensinando que a fé em Cristo não era suficiente; os gentios também precisavam guardar a lei de Moisés (como a circuncisão) para serem salvos. Neste trecho, que se segue a um confronto público com Pedro, Paulo estabelece a doutrina central da justificação pela fé somente, e explica o que significa viver em união com Cristo.`,
    points: [
      {
        verseRef: 'v. 15-16',
        title: 'A Impossibilidade da Justificação pelas Obras',
        description: `A Fé Somente. Paulo, sendo judeu de nascimento, reconhece que "sabendo que o homem não é justificado pelas obras da lei, mas pela fé em Jesus Cristo" (v. 16). A palavra "justificado" (dikaioo) é um termo jurídico que significa ser declarado justo diante do tribunal de Deus. Paulo é categórico: "porquanto pelas obras da lei nenhuma carne será justificada". A lei é um espelho que mostra a nossa sujeira, mas não é um sabão que pode nos limpar. A única maneira de sermos aceitos por Deus é confiando exclusivamente na obra de Cristo.`
      },
      {
        verseRef: 'v. 17-19',
        title: 'A Morte para a Lei',
        description: `O Fim do Legalismo. Se buscamos ser justificados em Cristo e ainda somos achados pecadores (porque abandonamos a lei judaica), seria Cristo ministro do pecado? (v. 17). De modo nenhum! Paulo argumenta que voltar a confiar na lei depois de conhecer a Cristo é que é a verdadeira transgressão (v. 18). Ele declara uma verdade libertadora (v. 19): "Porque eu, pela lei, morri para a lei, para viver para Deus". A lei exigia a morte do pecador; Cristo morreu essa morte por Paulo. Portanto, a exigência da lei foi satisfeita, e Paulo está livre do seu domínio para viver uma nova vida para Deus.`
      },
      {
        verseRef: 'v. 20-21',
        title: 'A Vida Crucificada com Cristo',
        description: `Cristo Vive em Mim. O versículo 20 é o ápice da experiência cristã: "Já estou crucificado com Cristo; e vivo, não mais eu, mas Cristo vive em mim". A união com Cristo significa que o velho "eu" egocêntrico e confiante nas próprias obras foi pregado na cruz. A vida que Paulo agora vive na carne, ele vive "na fé do Filho de Deus, o qual me amou, e se entregou a si mesmo por mim". Ele conclui com um aviso severo (v. 21): "Não aniquilo a graça de Deus; porque, se a justiça provém da lei, segue-se que Cristo morreu em vão". Adicionar obras à salvação é um insulto à cruz.`
      }
    ],
    conclusion: `Gálatas 2:15-21 é o antídoto contra a religião do desempenho humano. O legalismo nos diz que devemos trabalhar para alcançar a aprovação de Deus; o evangelho nos diz que a aprovação de Deus já foi alcançada por Cristo e nos é dada como presente. A verdadeira vida cristã não é tentar guardar regras com as nossas próprias forças, mas render-nos diariamente, reconhecendo que fomos crucificados com Cristo, para que a vida dEle possa fluir através de nós pela fé.`
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
  console.log('Successfully added 4 new pericopes for Epistles (Batch 10b).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
