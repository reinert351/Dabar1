const fs = require('fs');

const newPericopes = [
  {
    id: 'psa_1_1_6',
    bookId: 'PSA',
    chapter: 1,
    startVerse: 1,
    endVerse: 6,
    title: 'Os Dois Caminhos',
    theme: 'A Meditação na Palavra e o Fruto da Justiça',
    introduction: `O Salmo 1 é o portal de entrada para todo o livro dos Salmos. Ele funciona como um prefácio sapiencial que divide toda a humanidade em duas categorias absolutas: o justo e o ímpio. Não há meio-termo. O salmo não foca em como nos tornamos justos (isso é tratado em outros salmos), mas em como o justo vive e qual é o seu destino final. A tese central é que a verdadeira bem-aventurança (felicidade) não é encontrada seguindo os conselhos do mundo, mas na meditação constante e deleitosa na Palavra de Deus.`,
    points: [
      {
        verseRef: 'v. 1',
        title: 'A Separação do Mundo e a Progressão do Pecado',
        description: `O Caminho Não Trilhado. O salmo começa com uma bem-aventurança negativa, descrevendo o que o homem feliz NÃO faz (v. 1): "Bem-aventurado o homem que não anda segundo o conselho dos ímpios, nem se detém no caminho dos pecadores, nem se assenta na roda dos escarnecedores". Há uma progressão perigosa aqui: primeiro, ouve-se o conselho (andar); depois, adota-se o estilo de vida (deter-se); finalmente, junta-se aos cínicos que zombam de Deus (assentar-se). A santidade exige uma separação consciente das influências que nos afastam de Deus.`
      },
      {
        verseRef: 'v. 2-3',
        title: 'A Meditação na Palavra e a Árvore Frutífera',
        description: `O Prazer na Lei. O caráter do justo é definido positivamente (v. 2): "Antes tem o seu prazer na lei do Senhor, e na sua lei medita de dia e de noite". A obediência não é um fardo, mas um "prazer". Meditar não é esvaziar a mente (como no misticismo oriental), mas encher a mente com a Escritura, ruminando-a constantemente. O resultado (v. 3) é estabilidade e vitalidade: ele é como uma "árvore plantada junto a ribeiros de águas", que dá fruto na estação certa e cujas folhas não caem. A sua prosperidade é espiritual e eterna.`
      },
      {
        verseRef: 'v. 4-6',
        title: 'A Futilidade do Ímpio e o Julgamento Final',
        description: `A Moinha que o Vento Espalha. O contraste com os ímpios é absoluto (v. 4): "Não são assim os ímpios; mas são como a moinha que o vento espalha". A moinha (palha) é leve, sem raiz, sem fruto e inútil. O destino final é o julgamento (v. 5): eles não subsistirão no juízo, nem na congregação dos justos. O salmo conclui com a razão fundamental para esses dois destinos (v. 6): "Porque o Senhor conhece o caminho dos justos; porém o caminho dos ímpios perecerá". O conhecimento de Deus aqui implica amor, cuidado e aprovação.`
      }
    ],
    conclusion: `O Salmo 1 nos confronta com uma escolha inevitável: seremos árvores ou palha? A nossa cultura nos incentiva a buscar a felicidade na roda dos escarnecedores, mas a Bíblia nos garante que a verdadeira alegria só é encontrada quando as nossas raízes estão profundamente fincadas na Palavra de Deus. Jesus Cristo é o Homem Bem-Aventurado definitivo do Salmo 1, a Árvore da Vida, e somente quando estamos enxertados nEle podemos dar frutos que permanecem para a eternidade.`
  },
  {
    id: 'psa_23_1_6',
    bookId: 'PSA',
    chapter: 23,
    startVerse: 1,
    endVerse: 6,
    title: 'O Senhor é o Meu Pastor',
    theme: 'A Provisão, Proteção e Presença de Deus',
    introduction: `O Salmo 23 é, sem dúvida, o poema mais amado e conhecido da Bíblia. Escrito por Davi, que foi pastor de ovelhas na sua juventude, o salmo usa a metáfora do pastoreio para descrever o cuidado íntimo de Deus pelo Seu povo. Ele nos leva em uma jornada desde os pastos verdes da provisão, passando pelos vales escuros do sofrimento, até o banquete da vitória e a habitação eterna. A tônica do salmo não é a ausência de problemas, mas a presença constante do Pastor.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Provisão Abundante e a Restauração da Alma',
        description: `Nada me Faltará. A declaração inicial é a base de tudo (v. 1): "O Senhor é o meu pastor, nada me faltará". Se Yahweh é o meu pastor, eu tenho tudo o que preciso. Ele providencia descanso e nutrição (v. 2): "Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas". Ovelhas são animais medrosos que só se deitam quando estão seguras e saciadas. O Pastor também cura o cansaço interno (v. 3): "Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome". A nossa santificação é para a glória dEle.`
      },
      {
        verseRef: 'v. 4',
        title: 'O Vale da Sombra da Morte e a Presença Confortadora',
        description: `Tu Estás Comigo. O cenário muda abruptamente dos pastos verdes para o perigo (v. 4): "Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo". O crente não está isento do sofrimento, da doença ou da morte. A diferença é que não passamos por esses vales sozinhos. Note a mudança de pronome: Davi para de falar *sobre* Deus ("Ele me guia") e começa a falar *com* Deus ("Tu estás comigo"). A vara (para defesa contra lobos) e o cajado (para resgatar a ovelha) trazem consolo e segurança.`
      },
      {
        verseRef: 'v. 5-6',
        title: 'O Banquete da Vitória e a Habitação Eterna',
        description: `O Cálice Transbordante. A metáfora muda de um pastor para um anfitrião real (v. 5): "Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda". Deus não apenas nos salva; Ele nos honra e nos dá alegria abundante, mesmo quando estamos cercados por hostilidade. A conclusão é uma certeza inabalável (v. 6): "Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do Senhor por longos dias". A graça de Deus nos persegue até chegarmos em casa.`
      }
    ],
    conclusion: `O Salmo 23 é a garantia de que não somos ovelhas perdidas em um universo impessoal. Temos um Pastor que nos conhece pelo nome. Jesus Cristo aplicou este salmo a Si mesmo quando disse: "Eu sou o bom Pastor; o bom Pastor dá a sua vida pelas ovelhas" (João 10:11). Porque Ele passou pelo vale da sombra da morte na cruz e sofreu a ira de Deus em nosso lugar, nós podemos ter a certeza de que o nosso cálice transbordará e habitaremos na casa do Pai para sempre.`
  },
  {
    id: 'psa_51_1_12',
    bookId: 'PSA',
    chapter: 51,
    startVerse: 1,
    endVerse: 12,
    title: 'A Oração de Arrependimento',
    theme: 'Quebrantamento, Confissão e Restauração',
    introduction: `O Salmo 51 é o maior salmo penitencial da Bíblia. Foi escrito por Davi após o profeta Natã o confrontar sobre o seu adultério com Bate-Seba e o assassinato de Urias. É um raio-X da anatomia do verdadeiro arrependimento. Davi não dá desculpas, não culpa as circunstâncias e não tenta minimizar o seu erro. Ele apela unicamente para a misericórdia de Deus, reconhece a profundidade da sua depravação e clama por uma purificação que só Deus pode realizar.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Apelo à Misericórdia e a Confissão Absoluta',
        description: `Contra Ti Somente Pequei. Davi não apela para os seus méritos passados, mas para o caráter de Deus (v. 1): "Tem misericórdia de mim, ó Deus, segundo a tua benignidade; apaga as minhas transgressões, segundo a multidão das tuas misericórdias". Ele usa três palavras para o seu erro: transgressão (rebelião), iniquidade (distorção) e pecado (errar o alvo). Ele assume total responsabilidade (v. 3): "o meu pecado está sempre diante de mim". A essência do pecado é revelada no v. 4: "Contra ti, contra ti somente pequei". Embora ele tenha ferido pessoas, todo pecado é, em última análise, uma ofensa cósmica contra o Deus Santo.`
      },
      {
        verseRef: 'v. 5-9',
        title: 'A Depravação Original e o Clamor por Purificação',
        description: `Purifica-me com Hissope. Davi reconhece que o seu problema não foi apenas um erro isolado, mas uma condição de nascença (v. 5): "Eis que em iniquidade fui formado, e em pecado me concebeu minha mãe". A natureza humana é caída. Deus exige verdade no íntimo (v. 6). Davi clama por uma limpeza cerimonial e espiritual (v. 7): "Purifica-me com hissope, e ficarei puro; lava-me, e ficarei mais branco do que a neve". Ele pede que Deus desvie o rosto dos seus pecados e apague todas as suas iniquidades (v. 9).`
      },
      {
        verseRef: 'v. 10-12',
        title: 'A Criação de um Novo Coração e a Alegria da Salvação',
        description: `Cria em Mim, ó Deus. Davi percebe que não precisa apenas de perdão, mas de uma cirurgia espiritual (v. 10): "Cria em mim, ó Deus, um coração puro, e renova em mim um espírito reto". O verbo "criar" (bara) é o mesmo usado em Gênesis 1; só Deus pode fazer isso do nada. O seu maior medo não é perder o trono, mas perder a presença de Deus (v. 11): "Não me lances fora da tua presença, e não retires de mim o teu Espírito Santo". Ele pede a restauração da "alegria da tua salvação" (v. 12). O pecado rouba a alegria, mas o arrependimento a restaura.`
      }
    ],
    conclusion: `O Salmo 51 é o modelo de como devemos nos aproximar de Deus quando falhamos. O verdadeiro arrependimento não é apenas sentir remorso pelas consequências, mas sentir tristeza por ter ofendido a Deus. A boa notícia do evangelho é que o clamor de Davi por purificação foi respondido na cruz. O sangue de Jesus Cristo, o Cordeiro de Deus, é o "hissope" definitivo que nos lava e nos torna mais brancos do que a neve (1 João 1:7), criando em nós um novo coração.`
  },
  {
    id: 'psa_139_1_12',
    bookId: 'PSA',
    chapter: 139,
    startVerse: 1,
    endVerse: 12,
    title: 'O Deus que me Conhece',
    theme: 'A Onisciência e a Onipresença Divina',
    introduction: `O Salmo 139 é uma das meditações teológicas mais profundas e poéticas de toda a Escritura sobre os atributos de Deus. Davi contempla a onisciência (Deus sabe tudo) e a onipresença (Deus está em todo lugar) do Senhor. Longe de ser uma doutrina fria ou aterrorizante, o conhecimento absoluto de Deus sobre nós é apresentado como uma fonte de profundo conforto e segurança. Não podemos nos esconder de Deus, mas, para o crente, não há lugar melhor para estar do que sob o Seu olhar constante.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Onisciência: O Conhecimento Íntimo de Deus',
        description: `Tu me Sondas e me Conheces. O salmo começa com uma declaração de intimidade (v. 1): "Senhor, tu me sondaste, e me conheces". Deus conhece as nossas ações mais triviais: o nosso assentar e o nosso levantar (v. 2). Ele conhece os nossos pensamentos de longe. Ele esquadrinha o nosso andar e o nosso deitar (v. 3). O conhecimento de Deus é tão exaustivo que Ele sabe o que vamos dizer antes mesmo de falarmos (v. 4): "Não havendo ainda palavra alguma na minha língua, eis que logo, ó Senhor, tudo conheces". Não há segredos diante de Deus.`
      },
      {
        verseRef: 'v. 5-6',
        title: 'O Cerco Protetor e a Maravilha do Conhecimento',
        description: `A Mão Sobre Mim. Este conhecimento absoluto poderia ser assustador, mas Davi o vê como proteção (v. 5): "Tu me cercaste por detrás e por diante, e puseste sobre mim a tua mão". Deus nos cerca como uma fortaleza, protegendo-nos do inimigo e de nós mesmos. Diante da vastidão da mente de Deus, a mente humana entra em colapso em adoração (v. 6): "Tal ciência é para mim maravilhosíssima; tão alta que não a posso atingir". A teologia verdadeira sempre leva à doxologia (louvor).`
      },
      {
        verseRef: 'v. 7-12',
        title: 'A Onipresença: A Impossibilidade de Fuga',
        description: `Para Onde Fugirei? Davi faz uma pergunta retórica (v. 7): "Para onde me irei do teu espírito, ou para onde fugirei da tua face?". A resposta é: para lugar nenhum. Se ele subir ao céu, Deus está lá; se descer ao inferno (Seol, a sepultura), Deus está lá (v. 8). Se ele voar para as extremidades do mar (v. 9), "ainda ali a tua mão me guiará e a tua destra me susterá" (v. 10). Mesmo que ele tente se esconder na escuridão (v. 11), é inútil, porque para Deus "as trevas e a luz são a mesma coisa" (v. 12). A presença de Deus permeia todo o universo.`
      }
    ],
    conclusion: `O Salmo 139 destrói a ilusão da autonomia humana. Não podemos fugir de Deus, e não podemos esconder os nossos pecados dEle. Mas para aqueles que estão em Cristo, esta é a notícia mais libertadora do mundo. Significa que Deus nos conhecia até o fundo da nossa depravação e, ainda assim, escolheu nos amar e nos salvar. Significa que, não importa quão escuro seja o vale em que nos encontremos, a Sua mão direita está lá para nos guiar e nos sustentar.`
  },
  {
    id: 'pro_3_1_8',
    bookId: 'PRO',
    chapter: 3,
    startVerse: 1,
    endVerse: 8,
    title: 'Confia no Senhor',
    theme: 'A Sabedoria Prática e a Direção Divina',
    introduction: `O livro de Provérbios é o manual de sabedoria prática do Antigo Testamento. Ele não oferece promessas incondicionais, mas princípios gerais sobre como o mundo moral de Deus funciona. O capítulo 3 contém um dos conselhos mais fundamentais para a vida cristã: a necessidade de abandonar a autossuficiência e confiar inteiramente na direção de Deus. A verdadeira sabedoria não é saber tudo, mas conhecer Aquele que sabe tudo e submeter a nossa vontade à dEle em cada aspecto da nossa vida.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Guarda da Palavra e a Promessa de Paz',
        description: `Misericórdia e Verdade. O pai instrui o filho a não esquecer a lei e a guardar os mandamentos no coração (v. 1). O resultado geral da obediência é "longura de dias, e anos de vida e paz" (v. 2). A instrução central é (v. 3): "Não te desamparem a benignidade (hesed) e a fidelidade; ata-as ao teu pescoço; escreve-as na tábua do teu coração". O amor leal e a verdade devem ser os ornamentos visíveis da nossa vida e a essência do nosso caráter. Isso resulta em "graça e bom entendimento aos olhos de Deus e do homem" (v. 4).`
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Confiança Absoluta e a Direção dos Caminhos',
        description: `Não Te Estribes no Teu Próprio Entendimento. O versículo 5 é o coração do livro: "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento". O nosso entendimento é limitado, falho e frequentemente corrompido pelo pecado. Apoiar-se nele é como apoiar-se em uma bengala quebrada. A alternativa é (v. 6): "Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas". Reconhecer a Deus significa submeter cada decisão (carreira, casamento, finanças) à Sua vontade. Quando fazemos isso, Ele remove os obstáculos morais e nos guia ao destino certo.`
      },
      {
        verseRef: 'v. 7-8',
        title: 'A Humildade, o Temor do Senhor e a Saúde',
        description: `Não Sejas Sábio a Teus Próprios Olhos. O maior inimigo da confiança em Deus é o orgulho intelectual (v. 7): "Não sejas sábio a teus próprios olhos; teme ao Senhor e aparta-te do mal". O temor do Senhor (reverência e submissão) é o princípio da sabedoria. Quando abandonamos a arrogância de achar que sabemos o que é melhor para nós e nos afastamos do pecado, há um benefício holístico (v. 8): "Isto será saúde para o teu âmago, e medula para os teus ossos". A paz espiritual frequentemente se traduz em bem-estar físico e emocional.`
      }
    ],
    conclusion: `Provérbios 3:1-8 é um convite para entregar o controle da nossa vida a Deus. A ansiedade e o estresse modernos muitas vezes nascem da nossa tentativa exaustiva de "estribar-nos no nosso próprio entendimento" para resolver todos os problemas. A sabedoria bíblica nos chama a descansar na soberania de Deus. Quando confiamos nEle de todo o coração e O reconhecemos em todas as nossas escolhas, Ele assume a responsabilidade de endireitar os nossos caminhos.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 12c).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
