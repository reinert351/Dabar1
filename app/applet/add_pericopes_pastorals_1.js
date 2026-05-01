const fs = require('fs');

const newPericopes = [
  {
    id: 'phm_1_8_18',
    bookId: 'PHM',
    chapter: 1,
    startVerse: 8,
    endVerse: 18,
    title: 'O Evangelho da Reconciliação',
    theme: 'O Perdão Prático e a Imputação da Graça',
    introduction: `A carta a Filemom é a menor de Paulo, mas contém uma das mais belas ilustrações práticas do evangelho em toda a Bíblia. Onésimo, um escravo fugitivo que havia roubado o seu senhor Filemom, encontra Paulo na prisão em Roma e se converte a Cristo. Paulo agora o envia de volta, não mais como um escravo rebelde, mas como um irmão amado. O apelo de Paulo a Filemom é um retrato perfeito do que Jesus Cristo fez por nós diante de Deus Pai: assumindo a nossa dívida e pedindo que sejamos aceitos com base nos Seus méritos.`,
    points: [
      {
        verseRef: 'v. 8-11',
        title: 'O Apelo do Amor em vez da Ordem',
        description: `A Transformação do Inútil. Paulo, como apóstolo, tinha autoridade para ordenar que Filemom perdoasse Onésimo. No entanto, ele escolhe o caminho da graça: "por amor peço-te". Ele apela como "o velho, e agora também prisioneiro de Jesus Cristo". Ele intercede por Onésimo, chamando-o de "meu filho, que gerei nas minhas prisões". Paulo faz um trocadilho com o nome Onésimo (que significa "útil"): antes de conhecer a Cristo, ele era inútil para Filemom (um ladrão fugitivo), mas agora, transformado pelo evangelho, ele se tornou muito útil tanto para Paulo quanto para Filemom.`
      },
      {
        verseRef: 'v. 12-16',
        title: 'A Providência Divina e a Nova Identidade',
        description: `De Escravo a Irmão. Paulo envia Onésimo de volta, o que era um grande risco legal e pessoal. Ele reconhece que a fuga de Onésimo, embora pecaminosa, foi usada pela providência de Deus para um propósito maior (v. 15): "Porque bem pode ser que ele se tenha separado de ti por algum tempo, para que o retivesses para sempre". A relação entre eles mudou eternamente. Filemom deve recebê-lo "não já como servo, antes, mais do que servo, como irmão amado". O evangelho não apenas perdoa pecados, mas destrói as barreiras sociais e de classe, criando uma nova família em Cristo.`
      },
      {
        verseRef: 'v. 17-18',
        title: 'A Imputação: "Põe isso na minha conta"',
        description: `O Coração da Substituição. O clímax do apelo de Paulo é a essência da doutrina da justificação e imputação. Ele diz a Filemom (v. 17): "recebe-o como a mim mesmo". Paulo pede que Filemom trate Onésimo com o mesmo amor e honra que daria ao próprio apóstolo. E sobre a dívida do roubo? Paulo declara (v. 18): "E, se te fez algum dano, ou te deve alguma coisa, põe isso à minha conta". Paulo assume a dívida de Onésimo. É exatamente isso que Jesus fez por nós: Ele disse ao Pai para nos receber como receberia a Ele, e colocou todos os nossos pecados e dívidas na Sua própria conta na cruz.`
      }
    ],
    conclusion: `A carta a Filemom nos ensina que o evangelho não é apenas uma teoria sobre ir para o céu, mas um poder que transforma relacionamentos quebrados na terra. Se fomos perdoados de uma dívida infinita por Cristo, que assumiu a nossa culpa, não temos o direito de reter o perdão àqueles que nos ofenderam. O verdadeiro cristianismo sempre resulta em reconciliação prática.`
  },
  {
    id: 'tit_2_11_14',
    bookId: 'TIT',
    chapter: 2,
    startVerse: 11,
    endVerse: 14,
    title: 'A Graça Salvadora e Educadora',
    theme: 'O Equilíbrio entre a Salvação Gratuita e a Vida Santa',
    introduction: `Em Tito 2, Paulo resume a teologia da graça de forma magistral. Ele combate a ideia perigosa de que a graça de Deus é uma licença para pecar (antinomianismo). Paulo mostra que a verdadeira graça tem um papel duplo e inseparável: ela nos resgata da condenação no passado e nos educa rigorosamente para a santidade no presente, enquanto aguardamos a glória no futuro. A graça não apenas perdoa o pecado; ela quebra o poder do pecado nas nossas vidas.`,
    points: [
      {
        verseRef: 'v. 11',
        title: 'A Manifestação Universal da Graça',
        description: `A Salvação Oferecida a Todos. "Porque a graça salvadora de Deus se há manifestado a todos os homens". A graça (o favor imerecido de Deus) não permaneceu oculta no céu; ela se manifestou historicamente e visivelmente na pessoa e obra de Jesus Cristo. Esta salvação não é restrita a uma elite religiosa ou a uma nação específica, mas é oferecida a "todos os homens" (judeus e gentios, escravos e livres, homens e mulheres). A iniciativa da salvação é inteiramente de Deus.`
      },
      {
        verseRef: 'v. 12',
        title: 'A Pedagogia da Graça: Renúncia e Piedade',
        description: `A Escola da Santificação. A mesma graça que salva é a graça que ensina (educa, treina). "Ensinando-nos que, renunciando à impiedade e às concupiscências mundanas, vivamos neste presente século sóbria, e justa, e piamente". A graça é uma professora rigorosa. Ela nos ensina a dizer um "não" definitivo ao pecado (impiedade e paixões mundanas) e um "sim" ativo à santidade. A vida cristã deve ser equilibrada em três direções: "sóbria" (em relação a nós mesmos, autocontrole), "justa" (em relação ao próximo, integridade) e "piamente" (em relação a Deus, reverência).`
      },
      {
        verseRef: 'v. 13-14',
        title: 'A Esperança Bendita e o Povo Purificado',
        description: `O Foco no Futuro e o Propósito da Cruz. Vivemos o presente "aguardando a bem-aventurada esperança e o aparecimento da glória do grande Deus e nosso Salvador Jesus Cristo" (uma das declarações mais claras da divindade de Cristo no Novo Testamento). A expectativa do retorno de Cristo é o maior incentivo para a pureza. O versículo 14 explica o propósito da cruz: Jesus se deu por nós não apenas para nos livrar do inferno, mas "para nos remir de toda a iniquidade, e purificar para si um povo seu especial, zeloso de boas obras". Fomos salvos para sermos propriedade exclusiva de Deus, apaixonados por fazer o bem.`
      }
    ],
    conclusion: `Tito 2:11-14 destrói a falsa dicotomia entre graça e obras. A graça de Deus não nos deixa como nos encontrou. Se afirmamos ter sido salvos pela graça, mas continuamos vivendo no pecado e na impiedade, provamos que nunca conhecemos a verdadeira graça. A graça que nos justifica é a mesma graça que nos santifica e nos prepara para o encontro com o nosso grande Deus e Salvador.`
  },
  {
    id: 'tit_3_3_8',
    bookId: 'TIT',
    chapter: 3,
    startVerse: 3,
    endVerse: 8,
    title: 'A Lavagem da Regeneração',
    theme: 'A Transformação Radical pela Misericórdia de Deus',
    introduction: `Para motivar os cristãos a serem bons cidadãos e a tratarem os descrentes com mansidão, Paulo lembra a Tito quem nós éramos antes de Cristo. Esta passagem é um dos resumos mais completos do evangelho nas epístolas pastorais. Ela destrói qualquer orgulho religioso, mostrando que a salvação não é uma reforma moral baseada no nosso esforço, mas uma ressurreição espiritual operada exclusivamente pela bondade e misericórdia de Deus através do Espírito Santo.`,
    points: [
      {
        verseRef: 'v. 3',
        title: 'O Retrato da Nossa Miséria Passada',
        description: `A Escravidão do Pecado. Paulo não nos deixa esquecer as nossas raízes: "Porque também nós éramos noutro tempo insensatos, desobedientes, extraviados, servindo a várias concupiscências e deleites, vivendo em malícia e inveja, odiosos, odiando-nos uns aos outros". Este é o diagnóstico divino da humanidade caída. Não éramos apenas pessoas boas que cometeram alguns erros; éramos escravos dos nossos próprios desejos, cegos e presos em um ciclo de ódio e egoísmo. Lembrar de onde Deus nos tirou é o antídoto perfeito contra a arrogância espiritual e a falta de paciência com os pecadores.`
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Intervenção da Bondade e a Lavagem do Espírito',
        description: `Salvos pela Misericórdia, não por Obras. A mudança não veio de nós, mas de Deus: "Mas quando apareceu a benignidade e amor de Deus, nosso Salvador...". A salvação é baseada no caráter de Deus, não no nosso. Paulo é categórico sobre o método (v. 5): "Não pelas obras de justiça que houvéssemos feito, mas segundo a sua misericórdia, nos salvou". A salvação é operada "pela lavagem da regeneração e da renovação do Espírito Santo". A regeneração (o novo nascimento) é uma lavagem espiritual profunda que nos dá uma nova natureza e uma nova vida, algo que nenhuma obra humana poderia alcançar.`
      },
      {
        verseRef: 'v. 6-8',
        title: 'A Justificação e o Fruto das Boas Obras',
        description: `Herdeiros da Esperança. Este Espírito Santo foi derramado sobre nós "abundantemente, por Jesus Cristo nosso Salvador". O resultado legal dessa obra é a justificação (v. 7): "Para que, sendo justificados pela sua graça, sejamos feitos herdeiros segundo a esperança da vida eterna". Fomos declarados justos diante de Deus e adotados como herdeiros. O versículo 8 conclui com o propósito prático de toda essa teologia: "Fiel é a palavra... para que os que creem em Deus procurem aplicar-se às boas obras". As boas obras não são a raiz da salvação, mas são o fruto inevitável e necessário dela.`
      }
    ],
    conclusion: `Tito 3:3-8 nos ensina que o evangelho é a história de uma intervenção divina radical. Quando compreendemos a profundidade da nossa miséria passada e a grandeza imerecida da misericórdia de Deus que nos regenerou e justificou, somos naturalmente impulsionados a viver uma vida de boas obras. Servimos a Deus e ao próximo não para sermos salvos, mas porque já fomos salvos pela Sua maravilhosa graça.`
  },
  {
    id: '2ti_1_6_10',
    bookId: '2TI',
    chapter: 1,
    startVerse: 6,
    endVerse: 10,
    title: 'O Espírito de Poder e a Vocação Santa',
    theme: 'Vencendo a Timidez e Abraçando o Sofrimento pelo Evangelho',
    introduction: `A Segunda Epístola a Timóteo é o testamento final de Paulo, escrito de uma masmorra fria em Roma pouco antes da sua execução. Ele escreve para encorajar o seu jovem discípulo Timóteo, que aparentemente estava lutando contra o medo, a intimidação e a tentação de recuar diante da perseguição crescente. Paulo o lembra do dom que recebeu, da natureza do Espírito de Deus que habita nele e da glória eterna do evangelho, chamando-o a não se envergonhar de Cristo, mas a sofrer corajosamente por Ele.`,
    points: [
      {
        verseRef: 'v. 6-7',
        title: 'Despertando o Dom e Rejeitando a Covardia',
        description: `O Fogo do Espírito. Paulo exorta Timóteo: "Por cujo motivo te lembro que despertes o dom de Deus que existe em ti pela imposição das minhas mãos". O verbo "despertar" (anazopyrein) significa "atiçar o fogo" ou "soprar as brasas para que voltem a queimar". Os dons espirituais podem esfriar se não forem usados com ousadia. A razão para essa ousadia é a natureza do Espírito que recebemos (v. 7): "Porque Deus não nos deu o espírito de temor (covardia, timidez paralisante), mas de fortaleza (poder), e de amor, e de moderação (autocontrole, mente sã)". O medo do homem não vem de Deus; o Espírito nos dá poder para agir, amor para servir e clareza mental para não entrarmos em pânico.`
      },
      {
        verseRef: 'v. 8',
        title: 'Não se Envergonhando do Testemunho',
        description: `Participando das Aflições. Baseado no poder do Espírito, Paulo dá a ordem central: "Portanto, não te envergonhes do testemunho de nosso Senhor, nem de mim, que sou prisioneiro seu". No Império Romano, ser associado a um criminoso executado (Jesus) e a um prisioneiro do estado (Paulo) era motivo de profunda vergonha social e perigo físico. Paulo chama Timóteo a abraçar essa vergonha: "antes participa das aflições do evangelho segundo o poder de Deus". Não somos chamados apenas para desfrutar das bênçãos do evangelho, mas para sofrer por ele, sustentados não pela nossa força, mas pelo poder de Deus.`
      },
      {
        verseRef: 'v. 9-10',
        title: 'A Vocação Eterna e a Abolição da Morte',
        description: `O Propósito da Graça. Por que vale a pena sofrer? Paulo resume a grandeza do evangelho (v. 9): Deus "nos salvou, e chamou com uma santa vocação; não segundo as nossas obras, mas segundo o seu próprio propósito e graça". Esta graça nos foi dada em Cristo "antes dos tempos dos séculos" (na eternidade passada). Agora, essa graça eterna foi manifestada historicamente "pelo aparecimento de nosso Salvador Jesus Cristo" (v. 10). O que Jesus fez? Ele "aboliu a morte, e trouxe à luz a vida e a incorrupção pelo evangelho". Se Jesus destruiu o nosso maior inimigo (a morte), não há razão para termos medo de imperadores, prisões ou perseguições.`
      }
    ],
    conclusion: `2 Timóteo 1:6-10 é um antídoto poderoso contra o medo e a intimidação. O medo é o maior inimigo do ministério e do testemunho cristão. Paulo nos lembra que o Espírito que habita em nós é um Espírito de poder e coragem. Porque fomos salvos por uma graça eterna e porque Cristo já venceu a morte, podemos atiçar o fogo dos nossos dons e enfrentar qualquer sofrimento pelo evangelho sem nos envergonharmos do nosso Senhor.`
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
  console.log('Successfully added 4 new pericopes for Philemon, Titus, and 2 Timothy.');
} else {
  console.error('Could not find the end of the pericopes array.');
}
