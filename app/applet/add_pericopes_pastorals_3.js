const fs = require('fs');

const newPericopes = [
  {
    id: '1ti_1_12_17',
    bookId: '1TI',
    chapter: 1,
    startVerse: 12,
    endVerse: 17,
    title: 'A Graça Transbordante para o Principal dos Pecadores',
    theme: 'O Testemunho Pessoal de Paulo e o Propósito da Salvação',
    introduction: `Ao instruir Timóteo sobre como lidar com falsos mestres que usavam a lei de forma ilegítima, Paulo faz uma pausa para compartilhar o seu próprio testemunho. Ele não se apresenta como um modelo de virtude que mereceu o apostolado, mas como o exemplo supremo da graça imerecida de Deus. A conversão de Saulo de Tarso, o perseguidor violento, é a prova definitiva de que o evangelho tem poder para salvar qualquer pessoa, não importa quão profundo seja o seu pecado.`,
    points: [
      {
        verseRef: 'v. 12-13',
        title: 'O Passado de Blasfêmia e Violência',
        description: `O Pior Inimigo. Paulo expressa profunda gratidão a Cristo Jesus, que o "fortaleceu" e o "teve por fiel, pondo-me no ministério". O contraste com o seu passado é chocante (v. 13): "A mim, que dantes fui blasfemo, e perseguidor, e insolente (violento)". Paulo não era apenas um pecador passivo; ele era um inimigo ativo e agressivo de Cristo e da igreja. No entanto, ele diz: "mas alcancei misericórdia, porque o fiz ignorantemente, na incredulidade". A sua ignorância não o justificava (ele ainda precisava de misericórdia), mas mostra que o seu pecado, embora terrível, não era o pecado imperdoável contra o Espírito Santo.`
      },
      {
        verseRef: 'v. 14-15',
        title: 'A Graça Superabundante e o Principal dos Pecadores',
        description: `O Coração do Evangelho. Onde o pecado abundou, a graça superabundou (v. 14): "E a graça de nosso Senhor superabundou com a fé e o amor que há em Cristo Jesus". O versículo 15 é uma das declarações mais famosas e condensadas do evangelho em toda a Bíblia: "Fiel é a palavra e digna de toda a aceitação, que Cristo Jesus veio ao mundo, para salvar os pecadores, dos quais eu sou o principal". Paulo não diz que *foi* o principal, mas que *é* o principal. Quanto mais perto chegamos da luz de Cristo, mais vemos a profundidade da nossa própria pecaminosidade e a grandeza da Sua graça.`
      },
      {
        verseRef: 'v. 16-17',
        title: 'O Exemplo de Longanimidade e a Doxologia',
        description: `O Propósito da Conversão de Paulo. Por que Deus salvou o pior dos pecadores? Paulo explica (v. 16): "Mas por isso alcancei misericórdia, para que em mim, que sou o principal, Jesus Cristo mostrasse toda a sua longanimidade, para exemplo dos que haviam de crer nele para a vida eterna". A salvação de Paulo é um "exemplo" (um protótipo, um modelo de demonstração). Se Deus teve paciência para salvar Paulo, Ele pode salvar qualquer um. A única resposta adequada a essa graça é a adoração (v. 17): "Ora, ao Rei dos séculos, imortal, invisível, ao único Deus sábio, seja honra e glória para todo o sempre. Amém".`
      }
    ],
    conclusion: `1 Timóteo 1:12-17 destrói a mentira de que alguém pode ir longe demais para ser salvo. O evangelho não é para pessoas boas que precisam de uma pequena ajuda, mas para pecadores perdidos que precisam de um Salvador. A história de Paulo nos dá esperança para nós mesmos e para aqueles por quem oramos. Se a graça de Deus pôde transformar o principal dos pecadores no maior dos apóstolos, não há limites para o que Ele pode fazer.`
  },
  {
    id: '1ti_2_1_6',
    bookId: '1TI',
    chapter: 2,
    startVerse: 1,
    endVerse: 6,
    title: 'Oração por Todos e o Único Mediador',
    theme: 'A Universalidade do Evangelho e a Exclusividade de Cristo',
    introduction: `No capítulo 2, Paulo dá instruções sobre a adoração pública da igreja. A primeira e mais importante prioridade é a oração. A igreja não deve ser um clube fechado, focado apenas nas suas próprias necessidades, mas deve ter um coração voltado para o mundo inteiro. Paulo fundamenta esta ordem de orar por "todos os homens" na natureza do próprio Deus, que deseja a salvação de todos, e na obra de Jesus Cristo, que é o único mediador entre Deus e a humanidade.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Prioridade da Oração e a Paz na Sociedade',
        description: `Orando pelas Autoridades. "Admoesto-te, pois, antes de tudo, que se façam deprecações, orações, intercessões, e ações de graças, por todos os homens". A oração da igreja deve ser abrangente. Especificamente (v. 2), devemos orar "pelos reis, e por todos os que estão em eminência". O propósito dessa oração não é apenas político, mas prático e espiritual: "para que tenhamos uma vida quieta e sossegada, em toda a piedade e honestidade". A paz social facilita a pregação do evangelho e a vida santa da igreja. Orar pelos governantes (mesmo os corruptos ou perseguidores, como Nero na época) é "bom e agradável diante de Deus" (v. 3).`
      },
      {
        verseRef: 'v. 4',
        title: 'O Desejo Salvífico de Deus',
        description: `A Vontade de Deus para a Humanidade. Por que devemos orar por todos? Porque Deus "quer que todos os homens se salvem, e venham ao conhecimento da verdade". O coração de Deus não é exclusivista; Ele não tem prazer na morte do ímpio. O evangelho não é uma mensagem tribal ou nacionalista, mas uma oferta universal de salvação. A salvação está intrinsecamente ligada ao "conhecimento da verdade" (o evangelho). Não há salvação na ignorância ou na sinceridade de outras religiões; a salvação exige o conhecimento da verdade revelada em Cristo.`
      },
      {
        verseRef: 'v. 5-6',
        title: 'O Único Deus, o Único Mediador e o Resgate',
        description: `A Exclusividade de Cristo. O versículo 5 é um dos pilares da teologia cristã: "Porque há um só Deus, e um só Mediador entre Deus e os homens, Jesus Cristo homem". Assim como o monoteísmo é absoluto (há apenas um Deus), a mediação de Cristo é absoluta (há apenas um caminho para esse Deus). Não há espaço para santos, anjos ou outros líderes religiosos como mediadores. Jesus pode mediar perfeitamente porque Ele é o Deus-Homem. O que o Mediador fez? (v. 6): "O qual se deu a si mesmo em preço de redenção (resgate) por todos". Ele pagou o preço exigido pela justiça divina para nos libertar da escravidão do pecado.`
      }
    ],
    conclusion: `1 Timóteo 2:1-6 nos chama a ter um coração tão largo quanto o coração de Deus. A nossa oração e a nossa evangelização devem alcançar todas as pessoas, de todas as classes e nações. Ao mesmo tempo, esta passagem nos ancora na verdade inegociável de que Jesus Cristo é o único caminho, a única verdade e a única vida. Somente o Seu sacrifício de resgate pode nos reconciliar com o único Deus verdadeiro.`
  },
  {
    id: '1ti_3_1_7',
    bookId: '1TI',
    chapter: 3,
    startVerse: 1,
    endVerse: 7,
    title: 'As Qualificações do Bispo',
    theme: 'O Caráter como o Requisito Supremo para a Liderança Espiritual',
    introduction: `A igreja de Éfeso, onde Timóteo pastoreava, estava sofrendo com falsos líderes que causavam divisão e escândalo. Em resposta, Paulo estabelece o padrão oficial para a liderança da igreja. O que é mais impressionante nesta lista de qualificações para o "bispo" (pastor, presbítero, supervisor) não é o que está nela, mas o que falta. Paulo não exige carisma, talentos extraordinários, sucesso empresarial ou educação formal. Quase todas as qualificações são traços de caráter moral e maturidade espiritual. A liderança cristã é baseada em quem a pessoa é, não apenas no que ela sabe fazer.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Caráter Irrepreensível e o Domínio Próprio',
        description: `A Base Moral. Desejar o episcopado (a supervisão pastoral) é desejar uma "excelente obra", mas exige um padrão elevado. A qualificação abrangente é (v. 2): "Convém, pois, que o bispo seja irrepreensível" (não sem pecado, mas sem nenhuma falha moral grave que traga vergonha ao evangelho). Ele deve ser "marido de uma mulher" (fiel no casamento, pureza sexual), "vigilante, sóbrio, honesto (respeitável), hospitaleiro". A única habilidade técnica exigida é ser "apto para ensinar". Em relação aos vícios (v. 3), ele "não dado ao vinho, não espancador, não cobiçoso de torpe ganância, mas moderado, não contencioso (não briguento), não avarento".`
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Liderança Comprovada no Lar',
        description: `O Campo de Treinamento. A liderança na igreja começa na liderança em casa (v. 4): "Que governe bem a sua própria casa, tendo seus filhos em sujeição, com toda a modéstia (respeito)". O lar é o laboratório do caráter. A lógica de Paulo é irrefutável (v. 5): "Porque, se alguém não sabe governar a sua própria casa, terá cuidado da igreja de Deus?". Um homem que é um tirano em casa, ou que negligencia a sua família, não tem a capacidade espiritual ou moral para pastorear a família de Deus com amor e sabedoria.`
      },
      {
        verseRef: 'v. 6-7',
        title: 'A Maturidade Espiritual e o Testemunho Público',
        description: `Evitando o Orgulho e o Escândalo. O líder não pode ser um "neófito" (um recém-convertido, v. 6). Por quê? "Para que, ensoberbecendo-se, não caia na condenação do diabo". Dar autoridade e plataforma a alguém que não tem maturidade espiritual é uma receita para o orgulho destrutivo (o mesmo pecado que derrubou Satanás). Finalmente (v. 7), o líder deve ter "bom testemunho dos que estão de fora" (os não cristãos). A igreja não vive em um vácuo. Se o pastor é conhecido na comunidade como um mau pagador, um mentiroso ou um homem de mau gênio, o evangelho é difamado e ele "cai na afronta, e no laço do diabo".`
      }
    ],
    conclusion: `1 Timóteo 3:1-7 é um lembrete vital de que Deus valoriza o caráter acima do carisma. A igreja não precisa de CEOs corporativos ou celebridades do entretenimento para liderá-la; ela precisa de homens santos, fiéis às suas famílias, controlados pelo Espírito Santo, aptos para ensinar a Palavra e respeitados pela sociedade. Quando a igreja compromete esses padrões de caráter em troca de talentos, ela inevitavelmente colhe desastres espirituais.`
  },
  {
    id: '1ti_4_12_16',
    bookId: '1TI',
    chapter: 4,
    startVerse: 12,
    endVerse: 16,
    title: 'O Exemplo do Jovem Obreiro',
    theme: 'A Autoridade Moral, a Devoção à Palavra e a Perseverança',
    introduction: `Timóteo era um pastor relativamente jovem (provavelmente na faixa dos 30 anos) liderando uma igreja complexa em Éfeso, que tinha membros mais velhos e falsos mestres arrogantes. É fácil para um jovem líder sentir-se intimidado ou tentar impor autoridade de forma carnal. Paulo lhe dá a estratégia divina para a liderança: a verdadeira autoridade espiritual não é exigida pela idade ou pelo título, mas é conquistada através de um exemplo de vida inatacável e de uma devoção profunda à Palavra de Deus.`,
    points: [
      {
        verseRef: 'v. 12',
        title: 'A Autoridade Conquistada pelo Exemplo',
        description: `O Padrão Visível. "Ninguém despreze a tua mocidade; mas sê o exemplo dos fiéis, na palavra, no trato, no amor, no espírito, na fé, na pureza". Paulo não diz a Timóteo para exigir respeito, mas para inspirar respeito. Como? Sendo o modelo (typos) do que significa ser cristão. O exemplo deve cobrir todas as áreas: "na palavra" (o que ele diz), "no trato" (como ele se comporta), "no amor" (a sua motivação), "na fé" (a sua confiança em Deus) e "na pureza" (a sua integridade moral e sexual). Um caráter santo fala mais alto do que qualquer argumento.`
      },
      {
        verseRef: 'v. 13-14',
        title: 'A Devoção ao Ministério da Palavra e ao Dom',
        description: `O Foco do Ministério. Enquanto Paulo não chegava, Timóteo tinha três prioridades públicas (v. 13): "persiste em ler (a leitura pública das Escrituras no culto), exortar (a aplicação prática) e ensinar (a explicação doutrinária)". O ministério cristão é centrado na Palavra. Além disso (v. 14), Paulo o adverte: "Não desprezes o dom que há em ti, o qual te foi dado por profecia, com a imposição das mãos do presbitério". Timóteo havia sido chamado e capacitado pelo Espírito Santo para o ministério pastoral. Negligenciar o estudo, a pregação e o cuidado do rebanho seria um pecado contra o dom de Deus.`
      },
      {
        verseRef: 'v. 15-16',
        title: 'O Progresso Visível e a Salvação',
        description: `A Perseverança que Salva. "Medita estas coisas; ocupa-te nelas, para que o teu aproveitamento (progresso) seja manifesto a todos" (v. 15). O pastor não deve estagnar; a congregação deve ver o seu crescimento espiritual e teológico ao longo do tempo. O resumo de todo o conselho pastoral está no versículo 16: "Tem cuidado de ti mesmo e da doutrina. Persevera nestas coisas; porque, fazendo isto, te salvarás, tanto a ti mesmo como aos que te ouvem". A vida (ti mesmo) e a teologia (a doutrina) devem andar juntas. Uma vida santa com má teologia é perigosa; uma boa teologia com uma vida hipócrita é destrutiva. A perseverança em ambas é o meio pelo qual Deus preserva o pastor e o seu rebanho para a salvação final.`
      }
    ],
    conclusion: `1 Timóteo 4:12-16 é um manual atemporal para qualquer pessoa em posição de liderança ou influência espiritual. A influência duradoura não vem de técnicas de gestão, mas de uma vida de integridade transparente e de uma paixão ardente pela Palavra de Deus. Quando cuidamos da nossa própria alma e da pureza da nossa mensagem, tornamo-nos instrumentos nas mãos de Deus para a salvação e edificação de muitos.`
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
  console.log('Successfully added 4 new pericopes for 1 Timothy.');
} else {
  console.error('Could not find the end of the pericopes array.');
}
