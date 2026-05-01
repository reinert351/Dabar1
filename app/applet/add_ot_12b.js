const fs = require('fs');

const newPericopes = [
  {
    id: '2sa_12_1_7',
    bookId: '2SA',
    chapter: 12,
    startVerse: 1,
    endVerse: 7,
    title: 'O Confronto de Natã',
    theme: 'O Pecado Oculto e a Graça do Confronto',
    introduction: `Davi cometeu adultério com Bate-Seba e, para encobrir o seu pecado, orquestrou o assassinato do marido dela, Urias. Por quase um ano, Davi viveu em silêncio e negação, com o coração endurecido. Mas Deus, em Sua graça disciplinadora, não permite que o Seu servo permaneça no engano. Ele envia o profeta Natã com uma parábola magistral que contorna as defesas de Davi e expõe a feiura do seu pecado, levando-o ao arrependimento genuíno.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Parábola do Profeta e a Ovelhinha Roubada',
        description: `A Armadilha da História. Natã não chega acusando; ele conta uma história (v. 1-4). Havia dois homens: um rico, com muitas ovelhas, e um pobre, que tinha apenas uma cordeirinha, criada como uma filha. Quando o homem rico recebe uma visita, em vez de pegar do seu próprio rebanho, ele rouba e mata a cordeirinha do pobre para servir ao hóspede. A parábola é um espelho perfeito da situação: Davi (o rico com muitas esposas) roubou Bate-Seba (a única esposa) de Urias (o pobre).`
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Indignação de Davi e o Auto-Julgamento',
        description: `A Ira Hipócrita. A história atinge o alvo. "Então o furor de Davi se acendeu em grande maneira contra aquele homem" (v. 5). Davi, que havia perdido a sensibilidade para o seu próprio pecado monstruoso, fica indignado com o pecado fictício de outro. Ele declara uma sentença de morte e exige restituição quádrupla (v. 6). O pecado nos torna cegos para as nossas próprias falhas, mas hipercríticos em relação às falhas dos outros. Davi, sem saber, pronunciou a sua própria condenação.`
      },
      {
        verseRef: 'v. 7',
        title: 'A Revelação Fulminante: Tu És o Homem',
        description: `A Espada da Verdade. Natã deixa a parábola de lado e aponta o dedo diretamente para o rei (v. 7): "Tu és este homem". É uma das frases mais curtas e devastadoras da Bíblia. Natã então passa a declarar a palavra do Senhor, lembrando Davi de toda a graça que ele havia recebido (unção, livramento, o trono) e como ele havia desprezado a palavra do Senhor fazendo o mal. O confronto profético destrói a ilusão de Davi. A resposta imediata de Davi (v. 13) seria: "Pequei contra o Senhor", marcando o início da sua restauração.`
      }
    ],
    conclusion: `2 Samuel 12:1-7 nos ensina que o pecado prospera no escuro, mas a graça de Deus frequentemente vem disfarçada de confronto. Quando Deus envia um "Natã" para as nossas vidas — seja um amigo, um sermão ou a convicção do Espírito Santo — é um ato de amor para nos salvar da autodestruição. A verdadeira medida de um homem segundo o coração de Deus não é a perfeição sem pecado, mas a prontidão para se arrepender quando confrontado com a verdade: "Tu és o homem".`
  },
  {
    id: '1ki_18_30_39',
    bookId: '1KI',
    chapter: 18,
    startVerse: 30,
    endVerse: 39,
    title: 'Elias no Monte Carmelo',
    theme: 'O Fogo do Céu e a Exclusividade de Deus',
    introduction: `Israel está afundado na idolatria sob o reinado de Acabe e Jezabel. O povo está "coxeando entre dois pensamentos", tentando adorar a Yahweh e a Baal (o falso deus da chuva e da fertilidade) ao mesmo tempo. O profeta Elias convoca um confronto épico no Monte Carmelo. Após os 450 profetas de Baal passarem o dia inteiro gritando e se cortando sem resposta, Elias prepara o altar do Senhor. O milagre que se segue não é apenas uma demonstração de poder, mas uma chamada ao arrependimento nacional.`,
    points: [
      {
        verseRef: 'v. 30-35',
        title: 'A Restauração do Altar e a Água da Impossibilidade',
        description: `Preparando o Palco. Elias chama o povo (v. 30) e "reparou o altar do Senhor, que estava quebrado". Ele toma doze pedras, representando a unidade das doze tribos de Israel (v. 31), lembrando-os da sua identidade pactual. Para provar que não haveria truques e para tornar o milagre humanamente impossível, Elias manda derramar quatro cântaros de água sobre o holocausto e a lenha, três vezes, até que a água enchesse o rego ao redor do altar (v. 33-35). A fé autêntica não teme colocar as circunstâncias no nível do impossível.`
      },
      {
        verseRef: 'v. 36-37',
        title: 'A Oração de Elias e o Propósito do Milagre',
        description: `Para que Saibam que Tu És Deus. Na hora do sacrifício da tarde, Elias faz uma oração curta (apenas cerca de 60 palavras em hebraico), em contraste com os gritos histéricos dos profetas de Baal. Ele invoca o Deus da aliança (Deus de Abraão, Isaque e Israel) e declara o seu propósito (v. 36-37): "Manifeste-se hoje que tu és Deus em Israel, e que eu sou teu servo... Responde-me, Senhor... para que este povo conheça que tu és o Senhor Deus, e que tu fizeste voltar o seu coração". O objetivo não era a glória de Elias, mas a conversão do povo.`
      },
      {
        verseRef: 'v. 38-39',
        title: 'O Fogo Consumidor e a Confissão do Povo',
        description: `O Senhor é Deus! A resposta é imediata e avassaladora (v. 38): "Então caiu fogo do Senhor, e consumiu o holocausto, e a lenha, e as pedras, e o pó, e ainda lambeu a água que estava no rego". O fogo de Deus não consome apenas o sacrifício, mas até as pedras e a água. Diante dessa demonstração inegável de soberania, o povo cai com o rosto em terra e grita (v. 39): "O Senhor é Deus! O Senhor é Deus!". A idolatria é exposta como uma fraude, e a exclusividade de Yahweh é vindicada.`
      }
    ],
    conclusion: `1 Reis 18:30-39 é um desafio direto à nossa tendência de tentar servir a dois senhores. Não podemos misturar a adoração ao Deus verdadeiro com a devoção aos ídolos da nossa cultura. A oração de Elias nos ensina que o verdadeiro avivamento não vem por esforço humano ou histeria emocional, mas quando a Palavra de Deus é obedecida e o altar é restaurado. O fogo de Deus sempre cai onde o sacrifício está preparado, consumindo a nossa incredulidade e fazendo o nosso coração voltar para Ele.`
  },
  {
    id: '1ki_19_9_18',
    bookId: '1KI',
    chapter: 19,
    startVerse: 9,
    endVerse: 18,
    title: 'Elias na Caverna',
    theme: 'A Depressão Espiritual e a Brisa Suave',
    introduction: `Imediatamente após a maior vitória da sua vida no Monte Carmelo, Elias entra em colapso. Ameaçado de morte por Jezabel, ele foge para o deserto, pede para morrer e acaba escondido em uma caverna no Monte Horebe (Sinai). Ele está exausto, deprimido e sentindo-se o único crente fiel que restou. O encontro de Deus com Elias na caverna é uma das mais belas demonstrações de como Deus lida com o esgotamento espiritual dos Seus servos: não com repreensão severa, mas com cuidado físico, revelação gentil e um novo propósito.`,
    points: [
      {
        verseRef: 'v. 9-10',
        title: 'A Pergunta Divina e a Autopiedade do Profeta',
        description: `Que Fazes Aqui, Elias? Deus encontra Elias na caverna e faz uma pergunta de sondagem (v. 9). Elias responde com um desabafo cheio de zelo e autopiedade (v. 10): "Tenho sido muito zeloso pelo Senhor... porque os filhos de Israel deixaram a tua aliança... e eu fiquei só, e buscam a minha vida para ma tirarem". Elias perdeu a perspectiva. Ele acha que todo o seu trabalho foi em vão e que ele é o único justo na terra. A depressão espiritual frequentemente distorce a nossa visão da realidade e da obra de Deus.`
      },
      {
        verseRef: 'v. 11-14',
        title: 'O Vento, o Terremoto, o Fogo e a Voz Mansa',
        description: `A Brisa Suave. Deus manda Elias sair da caverna. Passa um vento forte que fende os montes, depois um terremoto, depois um fogo. Mas o texto repete: "o Senhor não estava no vento... não estava no terremoto... não estava no fogo" (v. 11-12). Elias esperava que Deus agisse com poder destrutivo (como no Carmelo), mas Deus se revela em "uma voz mansa e delicada" (um murmúrio suave). Quando Elias ouve isso, ele cobre o rosto (v. 13). Deus não está limitado a demonstrações espetaculares; Ele frequentemente trabalha de forma silenciosa e invisível.`
      },
      {
        verseRef: 'v. 15-18',
        title: 'A Nova Comissão e os Sete Mil Fiéis',
        description: `Volta Pelo Teu Caminho. Deus não discute com a depressão de Elias; Ele lhe dá trabalho a fazer. Ele ordena que Elias volte e unja novos reis (Hazael e Jeú) e um novo profeta para sucedê-lo (Eliseu) (v. 15-16). A obra de Deus é maior do que um único homem. Finalmente, Deus corrige a teologia distorcida de Elias (v. 18): "Também deixei ficar em Israel sete mil: todos os joelhos que não se dobraram a Baal". Elias não estava sozinho. Deus sempre preserva um remanescente fiel pela Sua graça.`
      }
    ],
    conclusion: `1 Reis 19:9-18 é um bálsamo para crentes exaustos. Ensina-nos que até os maiores heróis da fé sofrem de depressão e medo. Quando estamos escondidos nas nossas "cavernas" de autopiedade, Deus não nos esmaga. Ele nos alimenta, nos faz ouvir a Sua voz mansa e delicada, corrige a nossa visão distorcida da realidade e nos dá um novo propósito. A obra de Deus não depende do nosso sucesso visível, mas da Sua fidelidade silenciosa em preservar o Seu povo.`
  },
  {
    id: 'neh_2_1_8',
    bookId: 'NEH',
    chapter: 2,
    startVerse: 1,
    endVerse: 8,
    title: 'A Ousadia de Neemias',
    theme: 'Oração, Planejamento e a Boa Mão de Deus',
    introduction: `Neemias é o copeiro do rei persa Artaxerxes, uma posição de grande confiança e conforto. No entanto, ao saber que Jerusalém está em ruínas e o seu povo em miséria, ele entra em um período de luto, jejum e oração (cap. 1). O capítulo 2 descreve o momento crítico em que Neemias arrisca a sua vida para apresentar o seu pedido ao rei. A narrativa é uma aula magistral sobre como a dependência absoluta de Deus (oração) não anula, mas potencializa a responsabilidade humana (planejamento e coragem).`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Rosto Triste e o Risco de Vida',
        description: `O Temor e a Coragem. Neemias serve vinho ao rei, mas pela primeira vez, ele está triste na presença do monarca (v. 1). Na corte persa, mostrar tristeza diante do rei era uma ofensa que podia ser punida com a morte. O rei percebe e pergunta o motivo. Neemias relata: "temi muito em grande maneira" (v. 2). A coragem não é a ausência de medo, mas agir apesar dele. Ele responde com respeito, mas com verdade (v. 3): "Como não estaria triste o meu rosto, estando a cidade, o lugar dos sepulcros de meus pais, assolada?".`
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Oração Relâmpago e o Pedido Específico',
        description: `Orei ao Deus dos Céus. O rei faz a pergunta de ouro (v. 4): "Que me pedes agora?". Neste momento de pressão extrema, Neemias faz algo extraordinário: "Então orei ao Deus dos céus". Foi uma oração silenciosa e instantânea, baseada em meses de oração prévia. Após orar, ele faz um pedido ousado e específico (v. 5): "peço-te que me envies a Judá... para que eu a edifique". Ele não pede apenas permissão para ir; ele pede para ser o construtor da cidade.`
      },
      {
        verseRef: 'v. 6-8',
        title: 'O Planejamento Detalhado e a Provisão Divina',
        description: `A Boa Mão do Meu Deus. O rei pergunta sobre o prazo, e Neemias tem um plano pronto (v. 6). Ele não apenas orou; ele planejou. Ele pede cartas de salvo-conduto para os governadores (v. 7) e uma carta para o guarda da floresta do rei para fornecer madeira para a construção (v. 8). O rei concede tudo. Neemias não atribui o sucesso ao seu próprio charme ou planejamento, mas à providência divina (v. 8): "E o rei mas deu, segundo a boa mão de Deus sobre mim".`
      }
    ],
    conclusion: `Neemias 2:1-8 destrói a falsa dicotomia entre fé e ação. Neemias orou como se tudo dependesse de Deus e planejou como se tudo dependesse dele. Ele nos ensina que a oração constante nos prepara para as oportunidades repentinas. Quando a "boa mão de Deus" está sobre nós, podemos ter a ousadia de pedir o impossível a reis terrenos, sabendo que o coração do rei está nas mãos do Senhor (Provérbios 21:1).`
  },
  {
    id: 'job_1_13_22',
    bookId: 'JOB',
    chapter: 1,
    startVerse: 13,
    endVerse: 22,
    title: 'A Provação de Jó',
    theme: 'A Soberania de Deus no Sofrimento',
    introduction: `Jó é descrito como um homem íntegro, reto, temente a Deus e que se desviava do mal. Ele era também o homem mais rico do Oriente. Satanás desafia Deus, argumentando que Jó só O serve por causa das bênçãos materiais. Com a permissão soberana de Deus, Satanás ataca a vida de Jó. Em um único dia, Jó perde a sua riqueza, os seus servos e, tragicamente, os seus dez filhos. A resposta de Jó a esta catástrofe inimaginável é uma das maiores declarações de fé e submissão em toda a Escritura.`,
    points: [
      {
        verseRef: 'v. 13-19',
        title: 'A Tempestade de Calamidades e a Perda Total',
        description: `O Dia da Ruína. O texto descreve uma sucessão rápida e brutal de más notícias. Enquanto um mensageiro ainda falava, outro chegava. Sabeus roubam os bois e jumentos (v. 14-15); fogo do céu (raio) consome as ovelhas (v. 16); caldeus roubam os camelos (v. 17). Todos os servos são mortos. O golpe final é o mais devastador (v. 18-19): um grande vento atinge a casa onde os dez filhos de Jó estavam banqueteando, e todos morrem esmagados. Em questão de minutos, o homem mais abençoado do Oriente perde tudo o que tinha no mundo.`
      },
      {
        verseRef: 'v. 20',
        title: 'O Luto Profundo e a Adoração Inesperada',
        description: `Lançando-se em Terra, Adorou. A reação de Jó é profundamente humana e profundamente teológica. Ele não reprime a sua dor: "Então Jó se levantou, e rasgou o seu manto, e rapou a sua cabeça" (v. 20) — sinais culturais de luto extremo. A fé não anula o choro. Mas o que ele faz em seguida desafia a lógica de Satanás: "e lançou-se em terra, e adorou". No momento da sua maior agonia, Jó não amaldiçoa a Deus (como Satanás previu), mas prostra-se em adoração. Ele reconhece que Deus é digno de louvor, independentemente das circunstâncias.`
      },
      {
        verseRef: 'v. 21-22',
        title: 'A Confissão de Soberania e a Integridade Mantida',
        description: `O Senhor o Deu, e o Senhor o Tomou. Jó profere palavras que ecoam pela eternidade (v. 21): "Nu saí do ventre de minha mãe e nu tornarei para lá; o Senhor o deu, e o Senhor o tomou: bendito seja o nome do Senhor". Jó reconhece que ele não era dono de nada; ele era apenas um mordomo. Deus tem o direito soberano de dar e de retirar. O narrador conclui (v. 22): "Em tudo isto Jó não pecou, nem atribuiu a Deus falta alguma". Jó manteve a sua integridade, provando que o seu amor por Deus era maior do que o seu amor pelas bênçãos de Deus.`
      }
    ],
    conclusion: `Jó 1:13-22 é o teste definitivo da nossa teologia. Nós amamos a Deus por quem Ele é, ou apenas pelo que Ele nos dá? A adoração de Jó no meio das cinzas destrói a teologia da prosperidade, que afirma que a retidão sempre resulta em riqueza e saúde. O sofrimento de Jó nos aponta para o sofrimento de Cristo, o único homem verdadeiramente inocente que perdeu tudo na cruz para que nós pudéssemos ganhar tudo na eternidade. Na dor, a nossa âncora é a soberania absoluta e a bondade inescrutável de Deus.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 12b).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
