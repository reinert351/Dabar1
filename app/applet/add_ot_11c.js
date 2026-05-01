const fs = require('fs');

const newPericopes = [
  {
    id: 'exo_14_15_31',
    bookId: 'EXO',
    chapter: 14,
    startVerse: 15,
    endVerse: 31,
    title: 'A Travessia do Mar Vermelho',
    theme: 'O Beco Sem Saída e o Livramento Sobrenatural',
    introduction: `Israel está livre do Egito, mas a liberdade é imediatamente testada. Faraó muda de ideia e persegue os israelitas com o seu exército de elite. O povo encontra-se encurralado: o mar à frente, as montanhas aos lados e o exército egípcio atrás. O pânico se instala. A travessia do Mar Vermelho não é apenas o clímax da libertação física de Israel, mas a demonstração definitiva de que a salvação pertence exclusivamente ao Senhor, que abre caminhos onde não há caminhos.`,
    points: [
      {
        verseRef: 'v. 15-18',
        title: 'A Ordem para Marchar e a Promessa de Glória',
        description: `Dize aos Filhos de Israel que Marchem. Moisés clama a Deus, e a resposta é surpreendente (v. 15): "Por que clamas a mim? Dize aos filhos de Israel que marchem". Há tempo para orar e tempo para agir em fé. Deus ordena que Moisés levante a sua vara e fenda o mar (v. 16). O propósito deste milagre não é apenas salvar Israel, mas julgar o Egito e glorificar a Deus (v. 17-18): "E os egípcios saberão que eu sou o Senhor, quando for glorificado em Faraó, nos seus carros e nos seus cavaleiros".`
      },
      {
        verseRef: 'v. 19-22',
        title: 'A Proteção Divina e o Caminho no Mar',
        description: `A Nuvem e a Luz. Antes de abrir o mar, Deus protege a retaguarda. O Anjo de Deus e a coluna de nuvem movem-se para trás de Israel, colocando-se entre eles e os egípcios (v. 19-20). Para os egípcios, a nuvem era escuridão; para Israel, era luz. Deus é um escudo impenetrável para o Seu povo. Moisés estende a mão, e o Senhor faz o mar retirar-se por um forte vento oriental (v. 21). Os israelitas entram pelo meio do mar em seco, com as águas como muros à direita e à esquerda (v. 22). O impossível torna-se o caminho da salvação.`
      },
      {
        verseRef: 'v. 23-31',
        title: 'O Julgamento do Inimigo e o Temor do Senhor',
        description: `A Vitória Completa. Os egípcios tentam seguir Israel pelo mesmo caminho, mas o que é salvação para o crente é destruição para o ímpio. Deus perturba o exército egípcio e tira as rodas dos seus carros (v. 24-25). Ao amanhecer, Moisés estende a mão novamente, e o mar volta ao seu leito, afogando Faraó e todo o seu exército (v. 26-28). "Não ficou nem sequer um deles". Israel vê a grande obra do Senhor, e o resultado é adoração e confiança (v. 31): "e o povo temeu ao Senhor, e creram no Senhor e em Moisés, seu servo".`
      }
    ],
    conclusion: `Êxodo 14:15-31 é a garantia de que Deus nunca nos leva a um beco sem saída sem ter um plano de livramento. Quando os inimigos nos cercam e os obstáculos parecem intransponíveis, devemos lembrar que o nosso Deus tem o poder de abrir o mar. A nossa salvação não depende da nossa força para lutar, mas da nossa fé para marchar quando Ele ordena, confiando que Ele lutará por nós e silenciará os nossos inimigos para sempre.`
  },
  {
    id: 'exo_20_1_17',
    bookId: 'EXO',
    chapter: 20,
    startVerse: 1,
    endVerse: 17,
    title: 'Os Dez Mandamentos',
    theme: 'O Padrão Moral de Deus e a Revelação do Pecado',
    introduction: `Cinquenta dias após a saída do Egito, Israel chega ao Monte Sinai. Deus desce com fogo, fumaça e som de trombeta para estabelecer uma aliança com o Seu povo. O coração desta aliança é o Decálogo (As Dez Palavras). Os Dez Mandamentos não são um meio de salvação (Israel já havia sido salvo pela graça no Mar Vermelho), mas um guia de como um povo redimido deve viver para refletir a santidade do seu Libertador. Eles revelam o caráter de Deus e expõem o pecado humano.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Fundamento da Graça e a Exclusividade de Deus',
        description: `Eu Sou o Senhor Teu Deus. A lei começa com o evangelho (v. 2): "Eu sou o Senhor teu Deus, que te tirei da terra do Egito, da casa da servidão". A obediência não é para obter a libertação, mas uma resposta à libertação já recebida. O Primeiro Mandamento (v. 3) é o alicerce de todos os outros: "Não terás outros deuses diante de mim". Deus exige lealdade exclusiva. Qualquer coisa que amemos, temamos ou confiemos mais do que em Deus é um falso deus.`
      },
      {
        verseRef: 'v. 4-11',
        title: 'A Adoração Pura, o Nome Santo e o Dia de Descanso',
        description: `A Relação com Deus (Tábuas 1-4). O Segundo Mandamento (v. 4-6) proíbe fazer imagens de escultura. Não podemos reduzir o Deus infinito a uma forma finita; devemos adorá-Lo como Ele se revelou, não como nós O imaginamos. O Terceiro (v. 7) proíbe tomar o nome do Senhor em vão (usar Deus para os nossos próprios fins egoístas ou tratá-Lo com leviandade). O Quarto (v. 8-11) ordena lembrar o dia de sábado, um dia de descanso e adoração que reconhece Deus como o Criador e o Provedor do nosso tempo.`
      },
      {
        verseRef: 'v. 12-17',
        title: 'A Ética do Reino e o Amor ao Próximo',
        description: `A Relação com o Próximo (Tábuas 5-10). O Quinto Mandamento (v. 12) ordena honrar pai e mãe, a base de toda autoridade humana. O Sexto (v. 13) protege a vida ("Não matarás"). O Sétimo (v. 14) protege o casamento ("Não adulterarás"). O Oitavo (v. 15) protege a propriedade ("Não furtarás"). O Nono (v. 16) protege a verdade e a reputação ("Não dirás falso testemunho"). O Décimo (v. 17) é único porque julga o coração, não apenas a ação: "Não cobiçarás". Ele prova que a lei de Deus exige pureza interna, não apenas conformidade externa.`
      }
    ],
    conclusion: `Êxodo 20:1-17 é o raio-X da alma humana. Quando olhamos honestamente para os Dez Mandamentos, especialmente o décimo, percebemos que todos nós quebramos a lei de Deus em pensamentos, palavras e ações. A Lei nos condena e nos mostra a nossa necessidade desesperada de um Salvador. Jesus Cristo foi o único que guardou perfeitamente esta lei em nosso lugar, e agora, através do Seu Espírito, Ele escreve esta mesma lei nos nossos corações para que possamos viver para a Sua glória.`
  },
  {
    id: 'exo_32_1_14',
    bookId: 'EXO',
    chapter: 32,
    startVerse: 1,
    endVerse: 14,
    title: 'O Bezerro de Ouro',
    theme: 'A Idolatria do Coração e a Necessidade de um Mediador',
    introduction: `Enquanto Moisés está no Monte Sinai recebendo as tábuas da Lei (incluindo a proibição de fazer imagens), o povo no acampamento comete o maior ato de traição espiritual da sua história. Impacientes com a demora de Moisés, eles exigem deuses visíveis. A criação do bezerro de ouro revela a rapidez com que o coração humano se desvia da graça para a idolatria. A crise que se segue destaca a ira santa de Deus e a necessidade absoluta de um mediador que interceda pelos pecadores.`,
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Impaciência, a Idolatria e a Falsa Adoração',
        description: `Faze-nos Deuses. O povo vê que Moisés demora e pressiona Arão (v. 1): "Levanta-te, faze-nos deuses, que vão adiante de nós". Eles não queriam abandonar a religião; eles queriam uma religião que pudessem controlar. Arão, cedendo à pressão, pede o ouro deles e molda um bezerro (v. 2-4). O povo declara: "Estes são teus deuses, ó Israel, que te tiraram da terra do Egito". Eles tentam adorar a Yahweh através da imagem de um touro (símbolo de força e fertilidade no Egito). A idolatria frequentemente mistura o nome do verdadeiro Deus com as práticas do mundo (v. 5-6).`
      },
      {
        verseRef: 'v. 7-10',
        title: 'A Ira Divina e a Ameaça de Destruição',
        description: `O Teu Povo se Corrompeu. Deus informa Moisés sobre a traição (v. 7-8). Note a mudança de pronome: Deus diz a Moisés "o *teu* povo, que *tu* tiraste do Egito". Deus distancia-se deles devido ao pecado. Ele descreve o povo como "de dura cerviz" (teimoso, como um boi que recusa o jugo) (v. 9). A ira de Deus se acende, e Ele faz uma proposta a Moisés (v. 10): "Agora, pois, deixa-me, para que o meu furor se acenda contra eles, e os consuma; e eu farei de ti uma grande nação". Deus testa o coração do mediador.`
      },
      {
        verseRef: 'v. 11-14',
        title: 'A Intercessão de Moisés e a Base da Misericórdia',
        description: `Lembrando a Aliança. Moisés recusa a oferta de glória pessoal e intercede apaixonadamente pelo povo. Ele usa três argumentos: 1) Eles são o *Teu* povo, salvos pelo *Teu* poder (v. 11). 2) A reputação de Deus entre os egípcios seria arruinada se Ele os matasse no deserto (v. 12). 3) A aliança incondicional feita com Abraão, Isaque e Israel (v. 13). Moisés não apela para a bondade do povo (eles eram culpados), mas para o caráter e as promessas de Deus. O resultado (v. 14): "Então o Senhor arrependeu-se do mal que dissera que havia de fazer ao seu povo".`
      }
    ],
    conclusion: `Êxodo 32:1-14 é um aviso sombrio sobre a fábrica de ídolos que é o coração humano. Quando Deus parece demorar, somos tentados a criar substitutos visíveis e controláveis para Ele. Mas a passagem também é um retrato glorioso da graça. Moisés atua como um tipo de Cristo, o Mediador perfeito que desce do monte, não para nos destruir, mas para interceder por nós com base na aliança, garantindo que a ira de Deus seja desviada e a misericórdia triunfe.`
  },
  {
    id: 'lev_16_1_10',
    bookId: 'LEV',
    chapter: 16,
    startVerse: 1,
    endVerse: 10,
    title: 'O Dia da Expiação (Yom Kippur)',
    theme: 'A Santidade Exigida e o Bode Expiatório',
    introduction: `O livro de Levítico responde à pergunta: Como pode um Deus santo habitar no meio de um povo pecador? A resposta culmina no capítulo 16, que descreve o Yom Kippur, o Dia da Expiação, o dia mais sagrado do calendário judaico. Uma vez por ano, o Sumo Sacerdote entrava no Santo dos Santos para fazer expiação pelos pecados da nação. Este ritual complexo com dois bodes é a ilustração mais gráfica do Antigo Testamento sobre a propiciação (aplacar a ira de Deus) e a expiação (remover a culpa do pecado).`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Restrição do Acesso e a Preparação do Sacerdote',
        description: `O Perigo da Presença. Deus adverte Arão, após a morte dos seus filhos Nadabe e Abiú, que ele não pode entrar no Santuário (o Santo dos Santos) em qualquer tempo, "para que não morra" (v. 2). A presença de Deus é letal para o pecador. Para entrar, Arão deve primeiro oferecer um sacrifício por si mesmo e lavar o seu corpo com água. Ele não veste as suas roupas sacerdotais gloriosas, mas túnicas simples de linho branco (v. 4). O mediador deve aproximar-se de Deus com pureza e humildade absolutas.`
      },
      {
        verseRef: 'v. 5-8',
        title: 'Os Dois Bodes e o Lançamento de Sortes',
        description: `A Dupla Representação. Arão deve tomar da congregação dois bodes para expiação do pecado (v. 5). Ele os apresenta perante o Senhor à porta da tenda e lança sortes sobre eles (v. 7-8): "uma sorte pelo Senhor, e a outra sorte pelo bode emissário (Azazel)". Os dois bodes representam duas facetas essenciais da mesma obra redentora. Um bode será sacrificado para satisfazer a justiça de Deus; o outro será enviado para longe para remover a culpa do povo.`
      },
      {
        verseRef: 'v. 9-10',
        title: 'O Sacrifício e a Remoção do Pecado',
        description: `Propiciação e Expiação. O bode que cai a sorte para o Senhor é oferecido como sacrifício pelo pecado (v. 9). O seu sangue será levado para dentro do véu e aspergido sobre o propiciatório para aplacar a ira de Deus (propiciação). O outro bode é apresentado vivo (v. 10). Mais tarde no capítulo (v. 21-22), Arão imporá as mãos sobre a cabeça deste bode vivo, confessará todos os pecados de Israel, e o enviará para o deserto. O bode leva sobre si as iniquidades do povo para uma terra solitária (expiação). O pecado é pago e removido.`
      }
    ],
    conclusion: `Levítico 16:1-10 é a sombra da qual Cristo é a realidade. No Calvário, Jesus cumpriu o papel de ambos os bodes. Como o primeiro bode, o Seu sangue foi derramado para satisfazer a justiça santa de Deus. Como o segundo bode (o emissário), Ele carregou os nossos pecados para fora do acampamento, removendo a nossa culpa para tão longe quanto o Oriente dista do Ocidente. Por causa do Seu sacrifício perfeito, o véu foi rasgado, e nós temos acesso contínuo à presença de Deus.`
  },
  {
    id: 'num_21_4_9',
    bookId: 'NUM',
    chapter: 21,
    startVerse: 4,
    endVerse: 9,
    title: 'A Serpente de Bronze',
    theme: 'A Rebelião no Deserto e o Olhar que Cura',
    introduction: `O livro de Números relata a jornada de Israel no deserto, marcada por repetidas rebeliões. No capítulo 21, o povo perde a paciência novamente e murmura contra Deus e contra Moisés, desprezando a provisão divina do maná. O julgamento de Deus vem na forma de serpentes venenosas. No entanto, a cura providenciada por Deus é tão surpreendente quanto o julgamento: uma serpente de bronze levantada em uma haste. Este evento histórico tornou-se a ilustração favorita de Jesus para explicar a salvação pela fé (João 3:14-15).`,
    points: [
      {
        verseRef: 'v. 4-5',
        title: 'A Impaciência, a Murmuração e o Desprezo pela Graça',
        description: `A Alma Cansada. O povo contorna a terra de Edom, e "a alma do povo angustiou-se neste caminho" (v. 4). A impaciência gera ingratidão. Eles falam contra Deus e contra Moisés (v. 5): "Por que nos fizestes subir do Egito para que morrêssemos neste deserto?". Eles distorcem a realidade e, o pior de tudo, desprezam a graça de Deus: "a nossa alma tem fastio deste pão tão vil" (o maná). Chamar a provisão milagrosa de Deus de "pão vil" é o auge da rebelião espiritual.`
      },
      {
        verseRef: 'v. 6-7',
        title: 'O Julgamento das Serpentes e o Arrependimento',
        description: `O Veneno do Pecado. Em resposta à rebelião, "o Senhor mandou entre o povo serpentes ardentes, que picaram o povo; e morreu muita gente em Israel" (v. 6). O julgamento divino frequentemente envolve entregar as pessoas às consequências da sua própria natureza venenosa. A dor traz o povo de volta à realidade. Eles vão a Moisés, confessam o seu pecado ("Pecamos, porquanto temos falado contra o Senhor e contra ti") e pedem intercessão (v. 7). O verdadeiro arrependimento nomeia o pecado e busca o mediador.`
      },
      {
        verseRef: 'v. 8-9',
        title: 'A Serpente Levantada e a Cura pela Fé',
        description: `Olha e Vive. Deus não retira as serpentes, mas providencia um antídoto (v. 8): "Faze-te uma serpente ardente, e põe-na sobre uma haste; e será que viverá todo o que, tendo sido picado, olhar para ela". Moisés faz a serpente de metal (v. 9). A cura não vinha de remédios, boas obras ou rituais, mas de um simples olhar de fé para o objeto que Deus havia providenciado. A serpente de bronze representava o próprio pecado julgado. Jesus disse que, assim como a serpente foi levantada, Ele seria levantado na cruz, feito pecado por nós, para que todo o que nEle crê tenha a vida eterna.`
      }
    ],
    conclusion: `Números 21:4-9 nos ensina que o veneno do pecado corre nas nossas veias, e a morte é certa se confiarmos nos nossos próprios méritos. A salvação não exige que escalemos montanhas ou realizemos grandes feitos; exige apenas que reconheçamos a nossa condição mortal e "olhemos" com fé para Jesus Cristo crucificado. Não importa quão grave seja a mordida do pecado, há vida, cura e perdão para todo aquele que fixa os seus olhos no Salvador levantado na cruz.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 11c).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
