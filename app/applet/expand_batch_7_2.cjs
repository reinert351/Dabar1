const fs = require('fs');

const expandedPericopes = [
  {
    id: 'lev_11_1_47',
    bookId: 'LEV',
    chapter: 11,
    startVerse: 1,
    endVerse: 47,
    title: 'As Leis de Pureza Alimentar',
    theme: 'A Separação, a Distinção e a Santidade Prática',
    introduction: 'Levítico 11 introduz as leis dietéticas (Kashrut), que dividem os animais em "limpos" (permitidos para consumo) e "imundos" (proibidos). Para o leitor moderno, essas leis podem parecer arbitrárias ou meramente higiênicas, mas seu propósito principal era teológico e pedagógico. Deus estava ensinando a Israel o conceito de santidade (separação) através das atividades mais básicas da vida diária: comer. A dieta de Israel seria um lembrete constante de que eles eram um povo separado por Deus, distinto das nações pagãs ao seu redor.',
    points: [
      {
        verseRef: 'v. 1-8',
        title: 'Os Animais Terrestres: Ruminantes e Unha Fendida',
        description: 'A regra para os animais terrestres é dupla: eles devem ter a unha fendida (casco dividido) e ruminar. Animais como bois, ovelhas e cabras são limpos. O camelo (rumina, mas não tem unha fendida) e o porco (tem unha fendida, mas não rumina) são imundos. O porco, em particular, era frequentemente usado em sacrifícios pagãos cananeus. A exigência dessas duas características limitava severamente a dieta de Israel, forçando-os a serem intencionais sobre o que consumiam e evitando a comunhão à mesa com os idólatras.'
      },
      {
        verseRef: 'v. 9-23',
        title: 'As Criaturas Aquáticas e as Aves',
        description: 'Para as criaturas das águas, a regra é ter "barbatanas e escamas". Peixes comuns são permitidos, mas mariscos, crustáceos e enguias são abominações. Quanto às aves, não há uma regra anatômica geral, mas uma lista de aves proibidas, que são predominantemente aves de rapina (águias, falcões) e aves que se alimentam de carniça (corvos, abutres). A proibição de comer animais que se alimentam de sangue ou de carne morta reforça o respeito pela vida e a aversão à morte, que é a consequência do pecado.'
      },
      {
        verseRef: 'v. 44-47',
        title: 'O Propósito Teológico: Sede Santos',
        description: 'O capítulo conclui revelando o motivo por trás de todas essas restrições: "Porque eu sou o Senhor vosso Deus; portanto vós vos santificareis, e sereis santos, porque eu sou santo... para fazer diferença entre o imundo e o limpo". A dieta era uma disciplina diária de santificação. Cada refeição era uma oportunidade para Israel lembrar que Yahweh os havia tirado do Egito para serem Sua propriedade exclusiva. A distinção entre animais limpos e imundos espelhava a distinção entre Israel e as nações gentílicas.'
      }
    ],
    conclusion: 'As leis de pureza alimentar do Antigo Testamento cumpriram seu propósito de manter Israel separado até a vinda de Cristo. No Novo Testamento, Jesus declarou puros todos os alimentos (Marcos 7:19), e a visão de Pedro (Atos 10) revelou que a distinção entre judeus e gentios havia sido abolida na cruz. No entanto, o princípio espiritual de Levítico 11 permanece: Deus chama Seu povo para ser santo e separado em todas as áreas da vida. O que consumimos (física, mental e espiritualmente) afeta nossa comunhão com um Deus santo. Devemos viver com discernimento, fazendo "diferença entre o imundo e o limpo" em nossa cultura.'
  },
  {
    id: 'lev_16_11_22',
    bookId: 'LEV',
    chapter: 16,
    startVerse: 11,
    endVerse: 22,
    title: 'O Bode Emissário (Yom Kippur)',
    theme: 'A Expiação Nacional, a Propiciação e a Remoção do Pecado',
    introduction: 'Levítico 16 descreve o Yom Kippur (O Dia da Expiação), o dia mais sagrado do calendário judaico. É o único dia do ano em que o Sumo Sacerdote pode entrar no Santo dos Santos. O ritual central deste dia envolve dois bodes, que juntos ilustram as duas facetas da expiação: a propiciação (o pagamento da dívida através do derramamento de sangue) e a expiação (a remoção da culpa para longe do povo). O bode sacrificado e o bode emissário (Azazel) formam o quadro mais completo da obra redentora de Cristo no Antigo Testamento.',
    points: [
      {
        verseRef: 'v. 11-14',
        title: 'A Purificação do Sacerdote e a Nuvem de Incenso',
        description: 'Antes de expiar os pecados do povo, Arão deve oferecer um novilho por seus próprios pecados. Ele entra no Santo dos Santos com um incensário cheio de brasas do altar e incenso aromático. A nuvem de incenso cobre o Propiciatório "para que não morra". A santidade de Deus é tão intensa que o pecador precisa de uma "nuvem" mediadora para sobreviver à Sua presença. Arão asperge o sangue do novilho sete vezes sobre o Propiciatório e diante dele, satisfazendo a justiça de Deus por seus próprios pecados.'
      },
      {
        verseRef: 'v. 15-19',
        title: 'O Primeiro Bode: A Propiciação pelo Sangue',
        description: 'Arão degola o primeiro bode (a oferta pelo pecado do povo) e leva seu sangue para dentro do véu, aspergindo-o sobre o Propiciatório, como fez com o novilho. Este ato faz expiação pelo santuário, purificando-o das "imundícies dos filhos de Israel, e das suas transgressões". O sangue derramado do primeiro bode representa a vida entregue para pagar a penalidade do pecado. A justiça de Deus é satisfeita (propiciada) pelo sangue inocente.'
      },
      {
        verseRef: 'v. 20-22',
        title: 'O Bode Emissário: A Remoção da Culpa',
        description: 'Após purificar o santuário, Arão traz o segundo bode (o bode vivo). Ele impõe ambas as mãos sobre a cabeça do bode e confessa sobre ele "todas as iniquidades dos filhos de Israel... pondo-as sobre a cabeça do bode". Em seguida, o bode é enviado para o deserto por mão de um homem designado. O versículo 22 declara: "Assim aquele bode levará sobre si todas as iniquidades deles à terra solitária". Este bode (o bode emissário ou Azazel) representa a remoção total e definitiva do pecado para longe da presença de Deus e do acampamento.'
      }
    ],
    conclusion: 'O ritual dos dois bodes no Dia da Expiação é a ilustração perfeita do que Jesus Cristo fez por nós na cruz. Como o primeiro bode, Jesus derramou Seu sangue para satisfazer a justiça de Deus (Romanos 3:25). Como o segundo bode (o bode emissário), Jesus levou sobre Si as nossas iniquidades e as removeu para sempre (Isaías 53:6; João 1:29). O Salmo 103:12 celebra esta realidade: "Quanto está longe o oriente do ocidente, assim afasta de nós as nossas transgressões". Em Cristo, o nosso pecado não é apenas pago, mas é levado embora, para nunca mais ser lembrado contra nós.'
  },
  {
    id: 'lev_17_10_14',
    bookId: 'LEV',
    chapter: 17,
    startVerse: 10,
    endVerse: 14,
    title: 'A Santidade do Sangue',
    theme: 'O Valor da Vida, a Proibição do Consumo e o Meio de Expiação',
    introduction: 'Levítico 17 estabelece o lugar central do Tabernáculo para todos os sacrifícios e profere uma das proibições mais severas de toda a Lei: a proibição absoluta de comer sangue. Esta lei não era apenas uma regra dietética, mas um princípio teológico profundo sobre a santidade da vida e o propósito exclusivo do sangue na economia divina. O texto explica por que o sangue é sagrado e por que ele é o único meio aceitável para a expiação da alma, lançando as bases para a compreensão do sacrifício de Cristo no Novo Testamento.',
    points: [
      {
        verseRef: 'v. 10',
        title: 'A Proibição Absoluta e o Juízo Divino',
        description: 'Deus declara que qualquer homem da casa de Israel, ou dos estrangeiros que peregrinam entre eles, que comer algum sangue, enfrentará a oposição direta do próprio Deus: "porei a minha face contra a alma que comer sangue, e a extirparei do seu povo". A severidade da punição (ser cortado do povo) demonstra a gravidade da ofensa. O sangue não deve ser tratado como alimento comum; ele pertence a uma categoria sagrada e intocável.'
      },
      {
        verseRef: 'v. 11',
        title: 'O Princípio Teológico: A Vida está no Sangue',
        description: 'O versículo 11 é um dos textos mais importantes de todo o Antigo Testamento para entender a expiação: "Porque a alma (vida) da carne está no sangue; pelo que vo-lo tenho dado sobre o altar, para fazer expiação pelas vossas almas; porquanto é o sangue que fará expiação pela alma". Deus revela duas verdades: 1) O sangue representa a vida da criatura. 2) Deus designou o sangue exclusivamente para o altar, como o meio de pagamento pelo pecado. O pecado exige a morte (a perda da vida); portanto, apenas a vida (o sangue) de um substituto inocente pode fazer expiação.'
      },
      {
        verseRef: 'v. 12-14',
        title: 'O Respeito pela Vida na Caça',
        description: 'A lei se estende até mesmo aos animais caçados para alimentação (que não eram sacrificados no altar). Se um israelita caçar um animal ou ave limpa, ele deve "derramar o seu sangue, e cobri-lo com pó". O sangue não deve ser consumido nem deixado exposto, mas devolvido à terra com reverência. O texto reitera: "a vida de toda a carne é o seu sangue". Consumir o sangue seria um ato de profanação, tratando o meio de expiação dado por Deus como uma refeição comum.'
      }
    ],
    conclusion: 'A santidade do sangue em Levítico 17 é a chave para entender todo o sistema sacrificial e a cruz de Cristo. O autor de Hebreus resume este princípio: "sem derramamento de sangue não há remissão" (Hb 9:22). O sangue dos animais no Antigo Testamento era sagrado porque apontava para o "precioso sangue de Cristo, como de um cordeiro imaculado e incontaminado" (1 Pedro 1:19). A proibição de comer sangue ensinava a Israel a reverenciar a vida e a reconhecer que a salvação tem um custo infinito. Hoje, nós "bebemos" o sangue de Cristo (João 6:53-54) não de forma literal, mas apropriando-nos pela fé da Sua vida entregue por nós.'
  },
  {
    id: 'lev_18_1_5',
    bookId: 'LEV',
    chapter: 18,
    startVerse: 1,
    endVerse: 5,
    title: 'A Proibição das Práticas Pagãs',
    theme: 'A Identidade Exclusiva, a Rejeição da Cultura Corrupta e a Vida na Lei',
    introduction: 'Levítico 18 inicia uma seção conhecida como o "Código de Santidade". Antes de listar as proibições específicas sobre incesto, imoralidade sexual e sacrifícios infantis (práticas comuns entre os cananeus e egípcios), Deus estabelece o princípio fundamental da ética israelita. A moralidade do povo de Deus não deve ser ditada pela cultura em que viveram (Egito) nem pela cultura para onde estão indo (Canaã), mas exclusivamente pelo caráter e pelos estatutos de Yahweh. A obediência não é apenas uma obrigação legal, mas o caminho para a verdadeira vida.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'O Fundamento da Ética: "Eu Sou o Senhor"',
        description: 'Deus instrui Moisés a falar aos filhos de Israel e declarar: "Eu sou o Senhor vosso Deus". Esta frase é o refrão de todo o Código de Santidade. A base para a moralidade bíblica não é o consenso social, a conveniência ou a tradição humana, mas a autoridade e o caráter do próprio Deus. Porque Ele é o Senhor e porque Ele os resgatou, Ele tem o direito absoluto de ditar como eles devem viver. A identidade deles está enraizada no seu relacionamento com Yahweh.'
      },
      {
        verseRef: 'v. 3',
        title: 'A Rejeição das Culturas do Egito e de Canaã',
        description: 'Deus proíbe explicitamente a assimilação cultural: "Não fareis segundo as obras da terra do Egito, em que habitastes, nem fareis segundo as obras da terra de Canaã, para a qual eu vos levo, nem andareis nos seus estatutos". Israel estava espremido entre duas superpotências culturais e morais profundamente corruptas. Deus os adverte a não imitarem o passado (Egito) nem se conformarem com o futuro ambiente (Canaã). O povo de Deus é chamado a ser uma contracultura radical, vivendo de forma distinta do mundo ao seu redor.'
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Vida Através da Obediência',
        description: 'Em contraste com os costumes pagãos, Israel deve praticar os juízos de Deus e guardar os Seus estatutos. O versículo 5 traz uma promessa profunda: "os quais, cumprindo-os o homem, viverá por eles". A lei de Deus não é um fardo projetado para oprimir, mas um manual para a vida florescente. A imoralidade das nações cananeias as levou à destruição e à morte (a terra os vomitaria, v. 28). A obediência aos estatutos de Deus é o caminho para a preservação, a saúde espiritual e a vida abundante na terra prometida.'
      }
    ],
    conclusion: 'A introdução de Levítico 18 é um chamado atemporal para a Igreja. Assim como Israel, nós vivemos em uma cultura que frequentemente celebra o que Deus condena. O apóstolo Paulo ecoa este princípio em Romanos 12:2: "Não vos conformeis com este século, mas transformai-vos pela renovação da vossa mente". A nossa ética sexual, familiar e social não deve ser moldada pelas tendências do "Egito" ou de "Canaã" modernos, mas pela Palavra de Deus. A obediência aos mandamentos do Senhor não é uma restrição à nossa liberdade, mas a única maneira de experimentarmos a verdadeira vida para a qual fomos criados.'
  },
  {
    id: 'lev_19_1_4',
    bookId: 'LEV',
    chapter: 19,
    startVerse: 1,
    endVerse: 4,
    title: 'O Chamado à Santidade',
    theme: 'A Imitação de Deus, o Respeito aos Pais e a Rejeição da Idolatria',
    introduction: 'Levítico 19 é frequentemente considerado o coração ético do Pentateuco (contendo o famoso mandamento "amarás o teu próximo como a ti mesmo"). O capítulo começa com o chamado mais sublime de toda a Bíblia: o mandamento para ser santo porque Deus é santo. A santidade aqui não é apresentada apenas como pureza ritual no Tabernáculo, mas como um comportamento moral prático na vida cotidiana. Os primeiros versículos estabelecem que a verdadeira santidade se manifesta no respeito à família, na observância do descanso sagrado e na rejeição absoluta de falsos deuses.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'O Padrão Supremo: "Sereis Santos, Porque Eu Sou Santo"',
        description: 'Moisés é instruído a falar a "toda a congregação" (este não é um mandamento apenas para os sacerdotes, mas para todo o povo). O mandamento é direto e abrangente: "Santos sereis, porque eu, o Senhor vosso Deus, sou santo". A santidade (separação do mal e dedicação a Deus) não é uma opção para o crente; é a essência da sua vocação. O padrão para a nossa conduta não é a moralidade dos nossos vizinhos, mas o caráter perfeito do próprio Deus. Somos chamados a imitar o nosso Pai celestial.'
      },
      {
        verseRef: 'v. 3',
        title: 'A Santidade no Lar: Pais e Sábados',
        description: 'Imediatamente após o chamado à santidade, Deus não fala de rituais complexos, mas de atitudes práticas. A primeira expressão da santidade é o respeito filial: "Cada um temerá a sua mãe e a seu pai". Notavelmente, a mãe é mencionada antes do pai, enfatizando a igualdade de honra devida a ambos. A segunda expressão é: "e guardareis os meus sábados". O respeito pela autoridade delegada por Deus (os pais) e o respeito pelo tempo sagrado de Deus (o sábado) são os fundamentos de uma sociedade santa e ordenada.'
      },
      {
        verseRef: 'v. 4',
        title: 'A Santidade na Adoração: Rejeição dos Ídolos',
        description: 'A terceira expressão da santidade é a pureza na adoração: "Não vos virareis para os ídolos nem vos fareis deuses de fundição. Eu sou o Senhor vosso Deus". A palavra usada para ídolos aqui (elilim) significa literalmente "coisas de nada" ou "coisas inúteis". Voltar-se para ídolos é virar as costas para o Deus vivo em troca de vaidade. A santidade exige lealdade exclusiva a Yahweh. A verdadeira religião começa com o temor a Deus no lar e a adoração exclusiva no coração.'
      }
    ],
    conclusion: 'O chamado de Levítico 19:2 ecoa por toda a Escritura e é repetido pelo apóstolo Pedro à Igreja: "Mas, como é santo aquele que vos chamou, sede vós também santos em toda a vossa maneira de viver" (1 Pedro 1:15). A santidade bíblica não é um misticismo isolado em um mosteiro; ela é vivida na cozinha, no trabalho e nos relacionamentos familiares. Ela se prova na forma como tratamos nossos pais, como administramos nosso tempo (o descanso) e a quem entregamos a lealdade do nosso coração. Ser santo é, simplesmente, refletir o caráter de Deus no mundo.'
  }
];

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

let replacedCount = 0;
for (const expanded of expandedPericopes) {
  const index = arr.findIndex(p => p.id === expanded.id);
  if (index !== -1) {
    arr[index] = expanded;
    replacedCount++;
  }
}

const newArrayContent = JSON.stringify(arr, null, 2);
const newContent = content.substring(0, startIndex) + newArrayContent + content.substring(endIndex + 1);
fs.writeFileSync('data/pericopes_temp.ts', newContent, 'utf8');
console.log(`Expanded ${replacedCount} pericopes (Batch 7.2).`);
