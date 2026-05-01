const fs = require('fs');

const newPericopes = [
  {
    id: 'rut_1_14_18',
    bookId: 'RUT',
    chapter: 1,
    startVerse: 14,
    endVerse: 18,
    title: 'A Lealdade de Rute',
    theme: 'O Amor Fiel e a Providência Divina',
    introduction: `O livro de Rute é uma luz brilhante no período sombrio dos Juízes. A história começa com fome, morte e desespero. Noemi, uma viúva israelita que perdeu o marido e os dois filhos em Moabe, decide voltar amargurada para Belém. Ela tenta convencer as suas noras moabitas a ficarem. Enquanto Orfa volta para os seus deuses, Rute faz uma das declarações de lealdade mais profundas da Bíblia. A sua decisão não é apenas um compromisso familiar, mas uma conversão radical ao Deus de Israel.`,
    points: [
      {
        verseRef: 'v. 14-15',
        title: 'A Encruzilhada e a Escolha de Orfa',
        description: `O Retorno ao Passado. Diante da insistência de Noemi, as duas noras choram. "Orfa beijou a sua sogra, porém Rute se apegou a ela" (v. 14). Orfa representa o afeto natural que não suporta o teste do sacrifício. Ela amava Noemi, mas o custo de segui-la para uma terra estrangeira, como viúva e sem perspectivas, era alto demais. Noemi usa a partida de Orfa para testar Rute (v. 15): "Eis que voltou tua cunhada ao seu povo e aos seus deuses; volta tu também após a tua cunhada". A verdadeira fé é testada quando a porta de saída é aberta.`
      },
      {
        verseRef: 'v. 16',
        title: 'A Declaração de Rute e a Conversão',
        description: `O Teu Deus é o Meu Deus. A resposta de Rute é um poema de devoção incondicional (v. 16): "Não me instes para que te abandone... porque aonde quer que tu fores irei eu, e onde quer que pousares, ali pousarei eu; o teu povo é o meu povo, o teu Deus é o meu Deus". Rute renuncia à sua pátria, à sua cultura e, mais importante, à sua religião pagã. Ela abraça o Deus de Israel, mesmo quando esse Deus parecia ter tratado Noemi com amargura. É uma fé que não se baseia em circunstâncias favoráveis, mas em um compromisso pactual (hesed).`
      },
      {
        verseRef: 'v. 17-18',
        title: 'O Compromisso até a Morte e o Silêncio de Noemi',
        description: `Uma Aliança Inquebrável. Rute sela o seu compromisso com um juramento (v. 17): "Onde quer que morreres morrerei eu, e ali serei sepultada. Faça-me assim o Senhor, e outro tanto, se outra coisa que não seja a morte me separar de ti". Ela usa o nome da aliança de Deus (Yahweh). Vendo Noemi que Rute "estava de todo resolvida a ir com ela, deixou de lhe falar" (v. 18). A determinação de Rute silencia as objeções. Esta lealdade sacrificial colocará Rute, uma gentia, na genealogia do Rei Davi e do próprio Jesus Cristo.`
      }
    ],
    conclusion: `Rute 1:14-18 nos ensina o significado do amor pactual (hesed) — um amor que se apega quando é mais fácil partir. A fé de Rute é um lembrete de que a graça de Deus não tem fronteiras étnicas. Deus usa a lealdade de uma viúva estrangeira para trazer esperança a uma família destruída e, em última análise, para trazer o Salvador ao mundo. A verdadeira conversão sempre envolve deixar os nossos antigos "deuses" para trás e unir o nosso destino ao povo de Deus.`
  },
  {
    id: '1sa_3_1_10',
    bookId: '1SA',
    chapter: 3,
    startVerse: 1,
    endVerse: 10,
    title: 'O Chamado de Samuel',
    theme: 'A Voz de Deus na Escuridão Espiritual',
    introduction: `O sacerdócio de Eli em Siló estava corrompido. Os seus filhos profanavam o tabernáculo, e o próprio Eli era negligente. Neste cenário de decadência, "a palavra do Senhor era de muita valia (rara); não havia visão manifesta" (v. 1). Deus estava em silêncio. Mas Deus estava preparando um menino, Samuel, para ser o profeta que traria a nação de volta à Sua Palavra. O chamado de Samuel no meio da noite ilustra como Deus ignora a hierarquia religiosa corrupta e fala com corações puros e atentos.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Escuridão no Templo e a Lâmpada de Deus',
        description: `O Fim de uma Era. O texto pinta um quadro de escuridão física e espiritual. Eli, o sumo sacerdote, estava com os olhos escurecidos (v. 2), um símbolo da sua cegueira espiritual. Mas há um raio de esperança (v. 3): "E antes que a lâmpada de Deus se apagasse no templo do Senhor... e Samuel estava deitado". A lâmpada do candelabro, que deveria queimar continuamente, estava quase se apagando, assim como o ministério em Israel. Mas Deus não permitiria que a luz se apagasse totalmente; Ele estava prestes a acender uma nova luz através de Samuel.`
      },
      {
        verseRef: 'v. 4-8',
        title: 'A Voz Desconhecida e a Confusão do Menino',
        description: `Eis-me Aqui. O Senhor chama Samuel. O menino, não conhecendo ainda a voz de Deus (v. 7), corre para Eli, dizendo: "Eis-me aqui, porque tu me chamaste" (v. 4-5). Isso acontece três vezes. A prontidão de Samuel em obedecer a Eli no meio da noite mostra o seu coração de servo. O versículo 7 explica: "Samuel ainda não conhecia ao Senhor, e ainda não lhe tinha sido manifestada a palavra do Senhor". É possível crescer na igreja (no templo) e servir religiosamente sem ter um conhecimento pessoal da voz de Deus.`
      },
      {
        verseRef: 'v. 9-10',
        title: 'A Instrução de Eli e a Resposta do Profeta',
        description: `Fala, Porque o Teu Servo Ouve. Finalmente, Eli percebe que é o Senhor quem chama o menino e lhe dá a instrução correta (v. 9): "Se te chamar, dirás: Fala, Senhor, porque o teu servo ouve". O Senhor vem, põe-se ali e chama como das outras vezes: "Samuel, Samuel!" (v. 10). Samuel responde com a atitude fundamental de todo verdadeiro profeta e discípulo: submissão atenta à Palavra de Deus. A partir daquela noite, o silêncio divino foi quebrado, e Samuel tornou-se o canal da revelação de Deus para todo o Israel.`
      }
    ],
    conclusion: `1 Samuel 3:1-10 nos ensina que Deus não está limitado pelas falhas da liderança humana. Quando a religião se torna corrupta e a lâmpada parece estar se apagando, Deus chama uma nova geração. O chamado de Samuel nos desafia a cultivar um coração que escuta. Em um mundo cheio de ruídos e distrações, a oração mais importante que podemos fazer não é "Senhor, ouve o que o teu servo fala", mas "Fala, Senhor, porque o teu servo ouve".`
  },
  {
    id: '1sa_16_6_13',
    bookId: '1SA',
    chapter: 16,
    startVerse: 6,
    endVerse: 13,
    title: 'A Unção de Davi',
    theme: 'O Olhar de Deus para o Coração',
    introduction: `O rei Saul havia sido rejeitado por Deus devido à sua desobediência. Deus envia o profeta Samuel à casa de Jessé, em Belém, para ungir um novo rei. Samuel, mesmo sendo um grande profeta, quase comete o mesmo erro que Israel cometeu com Saul: julgar a capacidade de liderança pela aparência física. O processo de seleção de Davi revela o contraste absoluto entre o sistema de valores do mundo e o sistema de valores de Deus.`,
    points: [
      {
        verseRef: 'v. 6-7',
        title: 'A Ilusão da Aparência e o Padrão Divino',
        description: `O Homem Vê o Exterior. Quando Eliabe, o filho mais velho, alto e formoso, passa diante de Samuel, o profeta pensa (v. 6): "Certamente está perante o Senhor o seu ungido". Mas Deus o repreende com um dos princípios mais importantes da Bíblia (v. 7): "Não atentes para a sua aparência, nem para a grandeza da sua estatura, porque o tenho rejeitado; porque o Senhor não vê como vê o homem, pois o homem vê o que está diante dos olhos, porém o Senhor olha para o coração". Deus não se impressiona com currículos, beleza ou carisma; Ele sonda a integridade e a devoção do coração.`
      },
      {
        verseRef: 'v. 8-11',
        title: 'A Rejeição dos Sete e o Filho Esquecido',
        description: `Falta Ainda o Menor. Jessé faz passar sete dos seus filhos perante Samuel, mas o profeta declara (v. 10): "O Senhor não escolheu a estes". A lógica humana havia se esgotado. Samuel pergunta se acabaram os filhos. Jessé responde (v. 11): "Ainda falta o menor, que está apascentando as ovelhas". Davi era tão insignificante aos olhos da sua própria família que nem sequer foi convidado para o sacrifício. Mas o menino que estava fielmente cuidando das ovelhas no anonimato era exatamente o homem que Deus estava preparando para pastorear a nação.`
      },
      {
        verseRef: 'v. 12-13',
        title: 'A Unção e o Poder do Espírito Santo',
        description: `Levanta-te e Unge-o. Mandaram chamá-lo. Ele era "ruivo e formoso de semblante e de boa presença" (v. 12). O Senhor diz a Samuel: "Levanta-te, e unge-o, porque é este mesmo". Samuel toma o vaso de azeite e o unge no meio dos seus irmãos. O resultado da unção não foi uma coroa imediata (Davi voltaria para as ovelhas e passaria anos fugindo de Saul), mas o poder espiritual (v. 13): "e desde aquele dia em diante o Espírito do Senhor se apoderou de Davi". A verdadeira unção é a capacitação do Espírito Santo para a obra de Deus.`
      }
    ],
    conclusion: `1 Samuel 16:6-13 destrói a nossa obsessão com a imagem e o status. Deus frequentemente ignora aqueles que se acham grandes e escolhe aqueles que o mundo (e até a família) esquece. O que importa para Deus não é o palco onde estamos, mas a fidelidade com que cuidamos das poucas ovelhas que Ele nos confiou no deserto. Se o nosso coração for reto diante dEle, a Sua unção nos encontrará onde quer que estejamos.`
  },
  {
    id: '1sa_17_40_51',
    bookId: '1SA',
    chapter: 17,
    startVerse: 40,
    endVerse: 51,
    title: 'Davi e Golias',
    theme: 'A Batalha do Senhor e a Fé que Vence Gigantes',
    introduction: `A batalha entre Davi e Golias é uma das histórias mais famosas da Bíblia, mas frequentemente é reduzida a um conto moral sobre "derrotar os seus problemas". O texto, no entanto, é uma narrativa teológica profunda sobre a honra de Deus. Enquanto o exército de Israel tremia de medo diante do gigante filisteu, um jovem pastor, armado apenas com uma funda e uma fé inabalável na aliança de Deus, entra no campo de batalha para provar que a salvação não vem pela espada ou pela lança, mas pelo nome do Senhor dos Exércitos.`,
    points: [
      {
        verseRef: 'v. 40-44',
        title: 'O Desprezo do Gigante e as Armas Improváveis',
        description: `A Lógica da Força. Davi recusa a armadura de Saul e toma o seu cajado, cinco seixos do ribeiro e a sua funda (v. 40). Golias, um gigante de quase três metros, coberto de bronze, olha para Davi e o despreza (v. 42), pois era apenas um jovem. O filisteu amaldiçoa Davi pelos seus deuses e promete dar a sua carne às aves do céu (v. 43-44). Aos olhos humanos, a batalha era um suicídio. O mundo sempre desprezará os métodos de Deus, que frequentemente parecem fracos e tolos diante do poder secular.`
      },
      {
        verseRef: 'v. 45-47',
        title: 'A Teologia de Davi: O Nome do Senhor dos Exércitos',
        description: `A Batalha é do Senhor. A resposta de Davi é um sermão teológico no campo de batalha (v. 45): "Tu vens a mim com espada, e com lança, e com escudo; porém eu venho a ti em nome do Senhor dos Exércitos, o Deus dos esquadrões de Israel, a quem tens afrontado". Davi não confia na sua habilidade com a funda, mas no Nome de Deus. Ele declara o propósito da vitória (v. 46-47): "para que toda a terra saiba que há Deus em Israel... e saberá toda esta congregação que o Senhor salva, não com espada, nem com lança; porque do Senhor é a guerra".`
      },
      {
        verseRef: 'v. 48-51',
        title: 'A Vitória Rápida e a Queda do Inimigo',
        description: `A Pedra Certeira. Quando o filisteu se levanta para atacá-lo, Davi não recua; ele "apressou-se, e correu ao combate" (v. 48). A fé verdadeira é proativa. Ele atira uma única pedra com a funda, que crava na testa do gigante, e ele cai com o rosto em terra (v. 49). Davi, que não tinha espada, corre, toma a espada do próprio Golias e corta-lhe a cabeça (v. 50-51). O inimigo é destruído com a sua própria arma. Vendo o seu campeão morto, os filisteus fogem, e Israel alcança uma grande vitória.`
      }
    ],
    conclusion: `1 Samuel 17:40-51 não é sobre como nós podemos ser como Davi e derrotar os nossos problemas. Na verdade, nós somos como o exército de Israel: amedrontados e incapazes de vencer o gigante do pecado e da morte. Davi é um tipo de Cristo, o nosso Campeão, que entrou no campo de batalha em nosso lugar, enfrentou o inimigo que não podíamos vencer e, usando a arma do próprio inimigo (a morte), destruiu o poder do diabo, garantindo a vitória para todo o Seu povo.`
  },
  {
    id: '2sa_7_8_16',
    bookId: '2SA',
    chapter: 7,
    startVerse: 8,
    endVerse: 16,
    title: 'A Aliança Davídica',
    theme: 'O Reino Eterno e o Filho Prometido',
    introduction: `Davi, agora rei sobre todo o Israel e descansando dos seus inimigos, decide construir um templo magnífico para Deus. Ele acha injusto morar em um palácio de cedro enquanto a Arca de Deus está em uma tenda. Mas Deus envia o profeta Natã para inverter a proposta: não é Davi quem construirá uma casa (templo) para Deus; é Deus quem construirá uma casa (dinastia) para Davi. Esta é a Aliança Davídica, o fundamento teológico para a esperança messiânica que culminará em Jesus Cristo.`,
    points: [
      {
        verseRef: 'v. 8-11',
        title: 'A Graça Soberana: Do Pasto ao Trono',
        description: `Eu Te Tomei da Malhada. Deus lembra a Davi as Suas credenciais de graça (v. 8): "Eu te tomei da malhada, de detrás das ovelhas, para que fosses o soberano sobre o meu povo". Davi não conquistou o trono; Deus o deu. Deus esteve com ele, destruiu os seus inimigos e engrandeceu o seu nome (v. 9). Deus promete dar um lugar seguro para Israel (v. 10). A mensagem é clara: Deus é o doador, e Davi é o recebedor. Não podemos colocar Deus em dívida conosco através das nossas obras religiosas (como construir um templo).`
      },
      {
        verseRef: 'v. 12-13',
        title: 'O Descendente Prometido e a Construção do Templo',
        description: `Ele Edificará uma Casa. Deus faz a promessa central (v. 12): "Quando teus dias forem completos... suscitarei a tua descendência depois de ti... e estabelecerei o seu reino". Esta promessa tem um cumprimento imediato e um cumprimento escatológico. O cumprimento imediato é Salomão, que edificará a casa (o templo físico) ao nome de Deus (v. 13a). Mas a promessa vai muito além de Salomão: "e confirmarei o trono do seu reino para sempre" (v. 13b). Um reino eterno exige um rei eterno.`
      },
      {
        verseRef: 'v. 14-16',
        title: 'A Relação de Pai e Filho e o Trono Eterno',
        description: `A Misericórdia que Não se Afasta. Deus promete uma relação pactual íntima com o descendente de Davi (v. 14): "Eu lhe serei por pai, e ele me será por filho". Se ele pecar, será disciplinado com varas de homens (como aconteceu com Salomão e os reis subsequentes), mas a misericórdia de Deus não se apartará dele, como se apartou de Saul (v. 15). A aliança é incondicional. A promessa culmina no versículo 16: "Porém a tua casa e o teu reino serão firmados para sempre diante de ti; teu trono será firme para sempre".`
      }
    ],
    conclusion: `2 Samuel 7:8-16 é a ponte entre o Antigo e o Novo Testamento. A dinastia terrena de Davi falhou e o trono ficou vazio por séculos após o exílio babilônico. Mas a promessa de Deus não falhou. O anjo Gabriel disse a Maria sobre Jesus: "O Senhor Deus lhe dará o trono de Davi, seu pai... e o seu reino não terá fim" (Lucas 1:32-33). Jesus Cristo é o Filho de Davi definitivo, o Rei eterno que construiu a verdadeira casa de Deus (a Igreja) e cujo trono está firme para sempre.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 12a).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
