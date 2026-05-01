const fs = require('fs');

const newPericopes = [
  {
    id: 'psa_23_1_6',
    bookId: 'PSA',
    chapter: 23,
    startVerse: 1,
    endVerse: 6,
    title: 'O Senhor é o Meu Pastor',
    theme: 'A Provisão, Proteção e Presença de Deus',
    introduction: `O Salmo 23 é, sem dúvida, o poema mais amado e recitado de toda a Bíblia. Escrito por Davi, que foi pastor de ovelhas na sua juventude, o salmo usa a metáfora do pastor e do rebanho para descrever o cuidado íntimo, constante e perfeito de Deus para com os Seus filhos. O salmo transita da imagem do pastor guiando as ovelhas no campo para a imagem de um anfitrião gracioso preparando um banquete, culminando na promessa de habitar na casa do Senhor para sempre.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Provisão Plena e o Descanso da Alma',
        description: `Nada Me Faltará. A declaração inicial é a base de todo o salmo (v. 1): "O Senhor é o meu pastor, nada me faltará". Porque Yahweh é o pastor, a ovelha tem a garantia de que todas as suas necessidades (físicas e espirituais) serão supridas. O pastor providencia descanso e nutrição (v. 2): "Deitar-me faz em verdes pastos, guia-me mansamente a águas tranquilas". Ovelhas são animais medrosos e só se deitam quando se sentem totalmente seguras. O resultado desse cuidado é a restauração interior e a direção moral (v. 3): "Refrigera a minha alma; guia-me pelas veredas da justiça, por amor do seu nome".`
      },
      {
        verseRef: 'v. 4',
        title: 'A Proteção no Vale da Sombra da Morte',
        description: `Não Temerei Mal Algum, Porque Tu Estás Comigo. O cenário muda dos pastos verdes para o vale escuro (v. 4). A jornada da vida inevitavelmente passa por vales de sofrimento, luto e perigo ("o vale da sombra da morte"). A grande mudança no texto ocorre aqui: Davi para de falar *sobre* Deus ("Ele me guia") e passa a falar *com* Deus ("Tu estás comigo"). A presença do Pastor elimina o medo. A "vara" (para afastar os predadores) e o "cajado" (para resgatar e guiar a ovelha) trazem consolo e segurança no meio da escuridão.`
      },
      {
        verseRef: 'v. 5-6',
        title: 'O Banquete do Anfitrião e a Morada Eterna',
        description: `Preparas Uma Mesa Perante Mim. A metáfora muda de pastor para um anfitrião real (v. 5). Deus prepara um banquete de honra para Davi "na presença dos meus inimigos". Os inimigos podem assistir, mas não podem tocar no convidado de Deus. A unção com óleo e o cálice transbordante simbolizam alegria e abundância indescritíveis. O salmo termina com uma certeza inabalável (v. 6): "Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do Senhor por longos dias". A graça de Deus nos persegue na terra, e a Sua casa nos aguarda na eternidade.`
      }
    ],
    conclusion: `O Salmo 23 nos ensina que a nossa segurança não depende da ausência de vales escuros ou de inimigos, mas da presença do Bom Pastor. Jesus Cristo assumiu este título em João 10, declarando: "Eu sou o bom Pastor; o bom Pastor dá a sua vida pelas ovelhas". Porque Ele enfrentou o vale da sombra da morte na cruz por nós, nós nunca precisaremos enfrentá-lo sozinhos. Podemos descansar nos pastos verdes da Sua graça hoje e ter a certeza do banquete eterno na Sua casa amanhã.`
  },
  {
    id: 'psa_51_1_12',
    bookId: 'PSA',
    chapter: 51,
    startVerse: 1,
    endVerse: 12,
    title: 'A Oração de Arrependimento de Davi',
    theme: 'A Confissão, a Purificação e o Novo Coração',
    introduction: `O Salmo 51 foi escrito por Davi após o profeta Natã o confrontar sobre o seu adultério com Bate-Seba e o assassinato de Urias. É o modelo definitivo de arrependimento bíblico. Davi não dá desculpas, não culpa as circunstâncias e não tenta minimizar o seu erro. Ele lança-se inteiramente sobre a misericórdia de Deus, reconhecendo a profundidade da sua depravação e clamando por uma purificação que só o Criador pode realizar. É o grito de uma alma quebrantada buscando restauração.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Apelo à Misericórdia e a Confissão Direta',
        description: `Tem Misericórdia de Mim, ó Deus. Davi não apela à sua posição de rei ou às suas boas obras passadas; ele apela exclusivamente ao caráter de Deus (v. 1): "segundo a tua benignidade; apaga as minhas transgressões, segundo a multidão das tuas misericórdias". Ele usa três palavras para o seu erro: transgressão (rebelião), iniquidade (distorção moral) e pecado (errar o alvo) (v. 2-3). O clímax da confissão está no versículo 4: "Contra ti, contra ti somente pequei, e fiz o que é mal à tua vista". Embora ele tenha ferido pessoas, ele reconhece que todo pecado é, em última análise, uma ofensa cósmica contra o Deus Santo.`
      },
      {
        verseRef: 'v. 5-9',
        title: 'O Reconhecimento da Depravação e o Pedido de Purificação',
        description: `Purifica-me com Hissope. Davi reconhece que o seu problema não foi apenas um erro isolado, mas uma condição de nascença (v. 5): "Eis que em iniquidade fui formado, e em pecado me concebeu minha mãe". Ele tem uma natureza pecaminosa. Deus exige a verdade no íntimo (v. 6). Por isso, Davi clama por uma purificação radical (v. 7): "Purifica-me com hissope (usado para aplicar o sangue nos sacrifícios), e ficarei puro; lava-me, e ficarei mais branco do que a neve". Ele pede que Deus esconda o rosto dos seus pecados e apague as suas iniquidades (v. 9).`
      },
      {
        verseRef: 'v. 10-12',
        title: 'A Criação de um Novo Coração e a Restauração da Alegria',
        description: `Cria em Mim, ó Deus, um Coração Puro. Davi percebe que não precisa de uma reforma moral, mas de um milagre criativo (v. 10): "Cria (bara, a mesma palavra usada em Gênesis 1 para criar do nada) em mim, ó Deus, um coração puro, e renova em mim um espírito reto". O seu maior medo não era perder a coroa, mas perder a presença de Deus (v. 11): "Não me lances fora da tua presença, e não retires de mim o teu Espírito Santo". Ele implora pela restauração da alegria da salvação (v. 12), para que possa voltar a adorar livremente.`
      }
    ],
    conclusion: `O Salmo 51 nos ensina que o verdadeiro arrependimento não é o remorso por ter sido apanhado, mas a tristeza profunda por ter ofendido a Deus. Quando pecamos, a nossa tendência é esconder, justificar ou minimizar. Davi nos mostra o caminho de volta: exposição total à luz da misericórdia de Deus. Deus não despreza um coração quebrantado e contrito (v. 17). Através do sangue de Jesus (o nosso "hissope" definitivo), Deus não apenas nos lava para ficarmos mais brancos que a neve, mas cria em nós um novo coração.`
  },
  {
    id: 'psa_91_1_16',
    bookId: 'PSA',
    chapter: 91,
    startVerse: 1,
    endVerse: 16,
    title: 'O Esconderijo do Altíssimo',
    theme: 'A Segurança Absoluta na Intimidade com Deus',
    introduction: `O Salmo 91 é um dos textos mais lidos em tempos de crise, guerra e pandemia. Ele descreve a proteção divina em termos absolutos e abrangentes contra todos os tipos de perigos: laços, pestes, terrores noturnos, flechas e animais selvagens. No entanto, o salmo não é um amuleto mágico que garante imunidade contra o sofrimento físico. É uma promessa teológica profunda de que, para aquele que vive em intimidade com Deus, nenhum mal pode causar dano eterno à sua alma, e até mesmo a morte é apenas a porta para a glória.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Habitação Secreta e a Confissão de Fé',
        description: `Aquele Que Habita no Esconderijo do Altíssimo. A promessa de proteção não é para os "visitantes" ocasionais, mas para quem "habita" (vive continuamente) na intimidade com Deus (v. 1). O salmista faz a sua confissão pessoal (v. 2): "Direi do Senhor: Ele é o meu Deus, o meu refúgio, a minha fortaleza, e nele confiarei". Deus é descrito como uma ave que protege os seus filhotes (v. 4): "Ele te cobrirá com as suas penas, e debaixo das suas asas te confiarás". A verdade de Deus é o nosso escudo e broquel.`
      },
      {
        verseRef: 'v. 5-13',
        title: 'A Libertação dos Terrores e a Guarda dos Anjos',
        description: `Não Temerás o Terror de Noite. O salmista lista os perigos da vida humana: o terror noturno, a flecha de dia, a peste na escuridão e a mortandade ao meio-dia (v. 5-6). A promessa é de segurança mesmo quando milhares caem ao redor (v. 7-8). Porque o Senhor é o nosso refúgio (v. 9), o mal não nos atingirá (v. 10). Deus comissiona os Seus anjos para nos guardarem em todos os nossos caminhos (v. 11-12) — versículos que Satanás tentou usar para tentar Jesus (Mateus 4). O crente recebe poder para pisar o leão e a serpente (v. 13), símbolos de perigos físicos e espirituais.`
      },
      {
        verseRef: 'v. 14-16',
        title: 'A Resposta de Deus e a Promessa de Salvação',
        description: `Porquanto Tão Encarecidamente Me Amou. Nos últimos três versículos, o próprio Deus fala, confirmando as promessas do salmista. Deus promete livrar e colocar em um alto retiro aquele que O ama e conhece o Seu nome (v. 14). A promessa para a oração é clara (v. 15): "Ele me invocará, e eu lhe responderei; estarei com ele na angústia; dela o retirarei, e o glorificarei". Deus não promete nos isentar da angústia, mas promete estar conosco *na* angústia e nos retirar dela. O salmo termina com a promessa de vida longa e a revelação da salvação (v. 16).`
      }
    ],
    conclusion: `O Salmo 91 nos ensina que o lugar mais seguro do universo não é um bunker subterrâneo ou uma conta bancária cheia, mas o centro da vontade de Deus. A proteção prometida aqui não significa que os cristãos nunca adoecem ou morrem (a história da Igreja prova o contrário). Significa que, quando estamos "escondidos" em Cristo, nada pode nos separar do amor de Deus (Romanos 8). Se a doença ou a morte nos atingirem, elas não vêm como julgamento ou acidente, mas como carruagens enviadas para nos levar à presença do nosso Pai.`
  },
  {
    id: 'pro_3_1_8',
    bookId: 'PRO',
    chapter: 3,
    startVerse: 1,
    endVerse: 8,
    title: 'Confia no Senhor',
    theme: 'A Sabedoria da Dependência e a Direção Divina',
    introduction: `O capítulo 3 de Provérbios é um dos discursos mais belos de um pai para um filho sobre os benefícios de viver uma vida guiada pela sabedoria divina. No coração deste capítulo estão os versículos 5 e 6, que formam um dos conselhos mais citados e amados de toda a Bíblia. A passagem contrasta a arrogância da autossuficiência humana (apoiar-se no próprio entendimento) com a paz e a segurança que vêm da confiança total na providência e na direção de Deus.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Guarda dos Mandamentos e o Favor de Deus',
        description: `Não Te Esqueças da Minha Lei. O pai instrui o filho a internalizar o ensino (v. 1): "Filho meu, não te esqueças da minha lei, e o teu coração guarde os meus mandamentos". A obediência traz longevidade e paz (v. 2). As duas virtudes cardeais da aliança devem ser amarradas ao pescoço e escritas no coração (v. 3): "Não te desamparem a benignidade (hesed, amor leal) e a fidelidade (emet, verdade)". O resultado de viver com amor e verdade é achar "graça e bom entendimento aos olhos de Deus e do homem" (v. 4).`
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Confiança Exclusiva e a Promessa de Direção',
        description: `Confia no Senhor de Todo o Teu Coração. Este é o ápice da sabedoria (v. 5): "Confia no Senhor de todo o teu coração, e não te estribes (não te apoies) no teu próprio entendimento". A nossa mente é limitada, falha e frequentemente influenciada pelas nossas emoções. Apoiar-se nela é como encostar-se numa bengala quebrada. O mandamento é reconhecer Deus em todas as áreas da vida (v. 6): "Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas". Deus promete remover os obstáculos e guiar os passos daqueles que O buscam em tudo.`
      },
      {
        verseRef: 'v. 7-8',
        title: 'A Humildade, o Temor e a Saúde Integral',
        description: `Não Sejas Sábio a Teus Próprios Olhos. A maior barreira para confiar em Deus é o orgulho intelectual (v. 7): "Não sejas sábio a teus próprios olhos; teme ao Senhor e aparta-te do mal". O temor do Senhor é o antídoto para a arrogância. Quando reconhecemos a nossa pequenez diante da grandeza de Deus, ganhamos a força para fugir do pecado. Essa postura espiritual tem um efeito psicossomático profundo (v. 8): "Isto será saúde para o teu âmago, e medula para os teus ossos". A paz com Deus traz saúde para o corpo e para a alma.`
      }
    ],
    conclusion: `Provérbios 3:1-8 nos desafia a abrir mão do controle. Nós vivemos na ilusão de que sabemos o que é melhor para nós, e por isso sofremos de ansiedade e estresse tentando orquestrar os nossos próprios caminhos. A sabedoria bíblica nos chama a uma rendição total: confiar em Deus com todo o coração, consultá-Lo em todas as decisões (grandes e pequenas) e rejeitar a nossa própria arrogância. Quando fazemos isso, o Arquiteto do Universo assume a direção da nossa vida, endireitando as nossas veredas para a Sua glória.`
  },
  {
    id: 'pro_31_10_31',
    bookId: 'PRO',
    chapter: 31,
    startVerse: 10,
    endVerse: 31,
    title: 'A Mulher Virtuosa',
    theme: 'A Sabedoria Encarnada no Cotidiano',
    introduction: `O livro de Provérbios termina com um poema acróstico (cada versículo começa com uma letra sucessiva do alfabeto hebraico) que descreve a "mulher virtuosa" (ou mulher de valor). Este poema não é uma lista opressiva de tarefas impossíveis para as mulheres modernas, mas a personificação da própria Sabedoria (que foi personificada como mulher no capítulo 8) vivendo no mundo real. Ela é o retrato de uma vida governada pelo temor do Senhor, demonstrando que a verdadeira espiritualidade se manifesta na diligência, na compaixão e na integridade diária.`,
    points: [
      {
        verseRef: 'v. 10-12',
        title: 'O Valor Inestimável e a Confiança do Marido',
        description: `O Seu Valor Muito Excede ao de Rubis. O poema começa com uma pergunta retórica (v. 10): "Mulher virtuosa quem a achará? O seu valor muito excede ao de rubis". O seu caráter é raro e precioso. A primeira evidência da sua virtude é o impacto na sua família (v. 11): "O coração do seu marido está nela confiado; assim ele não necessitará de despojo". Ela é absolutamente confiável, leal e traz estabilidade. Ela não é um peso, mas uma aliada (v. 12): "Ela só lhe faz bem, e não mal, todos os dias da sua vida".`
      },
      {
        verseRef: 'v. 13-24',
        title: 'A Diligência, a Gestão e a Compaixão',
        description: `Trabalha de Boa Vontade com Suas Mãos. A maior parte do poema descreve a sua ética de trabalho incansável. Ela é uma gestora brilhante: busca lã e linho (v. 13), traz provisões de longe como navios mercantes (v. 14), levanta-se de madrugada para organizar a casa (v. 15), avalia e compra propriedades, e planta vinhas com o seu próprio lucro (v. 16). Ela é forte e empreendedora (v. 17-18). Mas o seu sucesso financeiro não a torna egoísta; ela é profundamente compassiva (v. 20): "Abre a sua mão ao pobre, e estende as suas mãos ao necessitado".`
      },
      {
        verseRef: 'v. 25-31',
        title: 'A Força Interior, a Sabedoria e o Temor do Senhor',
        description: `A Mulher Que Teme ao Senhor, Essa Será Louvada. A sua verdadeira roupa não é a seda, mas o caráter (v. 25): "A força e a honra são seu vestido, e se alegrará com o dia futuro". Ela não teme o amanhã. Quando ela fala, é com sabedoria e bondade (v. 26). O resultado da sua vida é o louvor da sua família (v. 28): os filhos e o marido a chamam de bem-aventurada. O poema conclui com a tese de todo o livro de Provérbios (v. 30): "Enganosa é a beleza e vã a formosura, mas a mulher que teme ao Senhor, essa sim será louvada".`
      }
    ],
    conclusion: `Provérbios 31:10-31 nos ensina que a verdadeira beleza não é encontrada em cosméticos ou padrões estéticos passageiros, mas no caráter forjado pelo temor do Senhor. Esta mulher é um modelo não apenas para as esposas, mas para todos os cristãos. Ela nos mostra que a fé não é uma fuga das responsabilidades terrenas, mas o poder para administrar os negócios, cuidar da família, ajudar os pobres e falar com sabedoria. O louvor eterno pertence àqueles cuja vida cotidiana é uma expressão prática do seu amor a Deus.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 16c).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
