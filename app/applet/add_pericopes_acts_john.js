const fs = require('fs');

const newPericopes = [
  {
    id: 'act_1_4_8',
    bookId: 'ACT',
    chapter: 1,
    startVerse: 4,
    endVerse: 8,
    title: 'A Promessa do Espírito e a Missão da Igreja',
    theme: 'O Poder para Testemunhar e a Expansão do Reino',
    introduction: `O livro de Atos é a continuação do Evangelho de Lucas. Enquanto o Evangelho relata "tudo o que Jesus começou, não só a fazer, mas a ensinar", Atos relata o que Jesus continuou a fazer através da Sua igreja pelo poder do Espírito Santo. Antes de ascender ao céu, Jesus dá as Suas últimas instruções aos discípulos. Ele os proíbe de iniciar a missão imediatamente, ordenando que esperem pela promessa do Pai. Esta passagem estabelece o princípio fundamental do ministério cristão: a missão global é impossível sem o poder celestial.`,
    points: [
      {
        verseRef: 'v. 4-5',
        title: 'A Ordem de Esperar e a Promessa do Batismo',
        description: `A Dependência do Poder Divino. Jesus reúne os apóstolos e lhes dá uma ordem surpreendente (v. 4): "que não se ausentassem de Jerusalém, mas que esperassem a promessa do Pai". O mundo estava perdido, a mensagem estava pronta, mas os mensageiros não estavam. Tentar fazer a obra de Deus sem o poder de Deus é presunção e resulta em fracasso. A promessa é o batismo no Espírito Santo (v. 5): "Porque, na verdade, João batizou com água, mas vós sereis batizados com o Espírito Santo, não muito depois destes dias". O batismo de João era de arrependimento; o batismo de Jesus é de imersão no próprio poder e presença de Deus.`
      },
      {
        verseRef: 'v. 6-7',
        title: 'A Correção do Foco: Do Político para o Espiritual',
        description: `Os Tempos e as Estações. Os discípulos ainda tinham uma visão nacionalista e política do Reino (v. 6): "Senhor, restaurarás tu neste tempo o reino a Israel?". Eles queriam saber sobre o fim dos tempos e a libertação de Roma. Jesus corrige o foco deles (v. 7): "Não vos pertence saber os tempos ou as estações que o Pai estabeleceu pelo seu próprio poder". A igreja não é chamada para especular sobre o calendário escatológico de Deus, mas para se concentrar na tarefa que lhe foi confiada no presente.`
      },
      {
        verseRef: 'v. 8',
        title: 'O Poder Recebido e o Escopo do Testemunho',
        description: `A Estratégia Global. O versículo 8 é o esboço de todo o livro de Atos e o mandato da igreja: "Mas recebereis a virtude (poder, dynamis) do Espírito Santo, que há de vir sobre vós". O Espírito Santo não é dado apenas para o nosso conforto pessoal, mas para nos capacitar para a missão. O resultado desse poder é o testemunho: "e ser-me-eis testemunhas". Uma testemunha não inventa uma mensagem; ela apenas relata o que viu e ouviu sobre Cristo. O escopo é geográfico e progressivo: "tanto em Jerusalém (a cidade que O crucificou), como em toda a Judeia e Samaria (os inimigos culturais), e até aos confins da terra (as nações gentílicas)".`
      }
    ],
    conclusion: `Atos 1:4-8 nos lembra que a igreja não é uma organização humana sustentada por estratégias de marketing, mas um organismo espiritual movido pelo Espírito Santo. Não podemos ser testemunhas eficazes de Cristo na nossa própria força. Precisamos buscar continuamente o poder do Espírito para que possamos levar o evangelho desde a nossa própria casa (Jerusalém) até os lugares mais distantes e não alcançados do mundo.`
  },
  {
    id: 'act_2_42_47',
    bookId: 'ACT',
    chapter: 2,
    startVerse: 42,
    endVerse: 47,
    title: 'As Marcas da Igreja Autêntica',
    theme: 'Devoção, Comunhão, Adoração e Crescimento',
    introduction: `Após o derramamento do Espírito Santo no Pentecostes e o poderoso sermão de Pedro, três mil pessoas se converteram e foram batizadas. O que aconteceu com essa multidão de novos crentes? Lucas nos fornece um retrato deslumbrante da primeira comunidade cristã. Esta passagem não é apenas um registro histórico, mas o modelo normativo para o que a igreja deve ser em todas as épocas. Uma igreja cheia do Espírito Santo é caracterizada por quatro devoções fundamentais que resultam em um impacto sobrenatural na sociedade.`,
    points: [
      {
        verseRef: 'v. 42',
        title: 'Os Quatro Pilares da Devoção Cristã',
        description: `A Base da Comunidade. "E perseveravam (dedicavam-se continuamente) na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações". A igreja primitiva não era movida por emoções passageiras, mas por uma devoção obstinada a quatro pilares: 1) A Doutrina: o ensino da Palavra de Deus era a autoridade suprema. 2) A Comunhão (koinonia): o compartilhamento profundo de vida, recursos e amor. 3) O Partir do Pão: as refeições em comum e a celebração da Ceia do Senhor, lembrando a cruz. 4) As Orações: a dependência coletiva de Deus. Uma igreja saudável deve equilibrar o ensino teológico, o amor relacional, a adoração sacramental e a oração fervorosa.`
      },
      {
        verseRef: 'v. 43-45',
        title: 'O Temor de Deus e a Generosidade Radical',
        description: `O Impacto do Amor. O resultado dessa devoção foi um profundo senso de reverência (v. 43): "E em toda a alma havia temor, e muitas maravilhas e sinais se faziam pelos apóstolos". Deus estava operando com poder visível. A comunhão espiritual transbordou para a vida material (v. 44-45): "Todos os que criam estavam juntos, e tinham tudo em comum. E vendiam as suas propriedades e bens, e repartiam com todos, segundo cada um havia de mister". Isso não era um comunismo estatal forçado, mas uma generosidade voluntária e radical motivada pelo amor. Eles valorizavam mais as pessoas do que as posses.`
      },
      {
        verseRef: 'v. 46-47',
        title: 'Alegria, Louvor e o Crescimento Soberano',
        description: `O Testemunho Contagiante. A vida deles era marcada pela constância e pela alegria (v. 46): "E, perseverando unânimes todos os dias no templo, e partindo o pão em casa, comiam juntos com alegria e singeleza de coração". Eles se reuniam tanto em grandes ajuntamentos (no templo) quanto em pequenos grupos (nas casas). A atitude deles era de "louvando a Deus, e caindo na graça de todo o povo" (v. 47). A alegria e o amor deles eram tão autênticos que atraíam a simpatia dos não cristãos. O resultado final não foi fruto de técnicas de crescimento de igreja, mas da ação divina: "E todos os dias acrescentava o Senhor à igreja aqueles que se haviam de salvar".`
      }
    ],
    conclusion: `Atos 2:42-47 nos desafia a avaliar as nossas próprias igrejas locais. A verdadeira medida do sucesso de uma igreja não é o tamanho do seu orçamento ou a sofisticação dos seus programas, mas a sua devoção à Palavra, a profundidade do seu amor mútuo, a sua paixão pela oração e a sua alegria contagiante. Quando a igreja vive como a igreja, o Senhor mesmo se encarrega de atrair e salvar os perdidos.`
  },
  {
    id: 'jhn_1_1_14',
    bookId: 'JHN',
    chapter: 1,
    startVerse: 1,
    endVerse: 14,
    title: 'O Verbo Divino e a Encarnação',
    theme: 'A Eternidade, a Divindade e a Humanidade de Jesus Cristo',
    introduction: `O Evangelho de João não começa com uma genealogia humana (como Mateus) ou com o nascimento em Belém (como Lucas), mas na eternidade passada. O Prólogo de João (1:1-18) é o texto cristológico mais profundo da Bíblia. João usa o conceito grego e judaico do "Logos" (o Verbo, a Palavra, a Razão divina que governa o universo) para apresentar Jesus. Ele declara que este Verbo não é uma força impessoal, mas uma Pessoa divina que criou o mundo e que, em um ato de condescendência insondável, tornou-se carne para habitar entre nós.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Eternidade, a Personalidade e a Divindade do Verbo',
        description: `O Criador Incriado. "No princípio era o Verbo" (v. 1). Quando o tempo e a criação começaram (Gênesis 1:1), o Verbo já existia eternamente. "E o Verbo estava com Deus" (distinção de pessoas na Trindade, comunhão face a face com o Pai). "E o Verbo era Deus" (identidade de essência; Ele é plenamente divino). O versículo 3 estabelece a Sua obra criadora: "Todas as coisas foram feitas por ele, e sem ele nada do que foi feito se fez". Jesus não é uma criatura; Ele é o Criador absoluto de todo o universo material e espiritual.`
      },
      {
        verseRef: 'v. 4-13',
        title: 'A Luz do Mundo e a Rejeição Humana',
        description: `A Vida e o Novo Nascimento. "Nele estava a vida, e a vida era a luz dos homens" (v. 4). Jesus é a fonte de toda a vida biológica e espiritual. A luz brilha nas trevas (o mundo caído), e as trevas não puderam derrotá-la (v. 5). João Batista veio apenas como uma testemunha dessa Luz verdadeira (v. 6-9). A grande tragédia da história é a rejeição do Criador (v. 10-11): "Estava no mundo, e o mundo foi feito por ele, e o mundo não o conheceu. Veio para o que era seu (Israel), e os seus não o receberam". Mas há uma promessa gloriosa (v. 12-13): "Mas, a todos quantos o receberam, deu-lhes o poder de serem feitos filhos de Deus". Essa adoção não vem por descendência física ou esforço humano, mas pelo novo nascimento operado por Deus.`
      },
      {
        verseRef: 'v. 14',
        title: 'A Encarnação: O Verbo se Fez Carne',
        description: `O Tabernáculo Divino. O versículo 14 é o clímax do prólogo e o maior milagre da história: "E o Verbo se fez carne, e habitou entre nós". O Deus infinito, eterno e invisível assumiu a natureza humana frágil, mortal e visível (sem deixar de ser Deus). A palavra "habitou" (eskenosen) significa literalmente "armou a sua tenda" ou "tabernaculou". Assim como a glória de Deus habitava no tabernáculo no deserto, agora a glória de Deus habita no corpo humano de Jesus. João testifica: "e vimos a sua glória, como a glória do unigênito do Pai, cheio de graça e de verdade". Em Cristo, a graça (o favor imerecido) e a verdade (a realidade absoluta de Deus) se encontram perfeitamente.`
      }
    ],
    conclusion: `João 1:1-14 nos convida a adorar o mistério da encarnação. O nosso Salvador não é um mero profeta ou um anjo exaltado; Ele é o Criador do universo que se humilhou para se tornar um de nós. Porque Ele é Deus, o Seu sacrifício tem valor infinito para nos salvar. Porque Ele se fez carne, Ele compreende as nossas fraquezas. Se O recebermos pela fé, recebemos o direito eterno de sermos chamados filhos de Deus.`
  },
  {
    id: 'jhn_3_1_16',
    bookId: 'JHN',
    chapter: 3,
    startVerse: 1,
    endVerse: 16,
    title: 'O Novo Nascimento e o Amor de Deus',
    theme: 'A Necessidade da Regeneração e a Salvação pela Fé',
    introduction: `Nicodemos era um fariseu, um membro do Sinédrio (a suprema corte judaica) e um mestre respeitado em Israel. Ele tinha religião, moralidade, status e conhecimento teológico. No entanto, quando ele vem a Jesus de noite, Jesus não o elogia pela sua religiosidade. Em vez disso, Jesus destrói todo o sistema de mérito humano de Nicodemos com uma declaração chocante: a religião não é suficiente. Para ver o Reino de Deus, um homem precisa de um milagre espiritual radical chamado "novo nascimento". Esta conversa culmina no versículo mais famoso da Bíblia, resumindo o evangelho do amor e da graça.`,
    points: [
      {
        verseRef: 'v. 1-8',
        title: 'A Necessidade Absoluta do Novo Nascimento',
        description: `Nascido do Espírito. Nicodemos reconhece Jesus como um mestre vindo de Deus por causa dos milagres (v. 2). Jesus corta a conversa fiada (v. 3): "Na verdade, na verdade te digo que aquele que não nascer de novo (ou do alto), não pode ver o reino de Deus". A natureza humana natural está tão corrompida pelo pecado que não pode ser consertada; ela precisa ser recriada. Nicodemos entende de forma literal e física (v. 4). Jesus explica (v. 5-6): "quem não nascer da água e do Espírito, não pode entrar no reino de Deus. O que é nascido da carne é carne, e o que é nascido do Espírito é espírito". A água (purificação) e o Espírito (nova vida) referem-se à promessa da Nova Aliança em Ezequiel 36. O novo nascimento é uma obra soberana e invisível do Espírito Santo, como o vento (v. 8).`
      },
      {
        verseRef: 'v. 9-15',
        title: 'A Incredulidade Humana e a Serpente Levantada',
        description: `O Olhar que Salva. Nicodemos fica perplexo (v. 9): "Como pode ser isso?". Jesus o repreende suavemente por ser um mestre em Israel e não entender as Escrituras (v. 10). Jesus então muda o foco da obra do Espírito (o novo nascimento) para a obra do Filho (a cruz). Ele usa uma ilustração do Antigo Testamento (Números 21): "E, como Moisés levantou a serpente no deserto, assim importa que o Filho do homem seja levantado" (v. 14). Quando os israelitas foram picados por serpentes venenosas, a única cura era olhar com fé para a serpente de bronze levantada na haste. Da mesma forma, a humanidade está morrendo pelo veneno do pecado; a única cura é olhar com fé para Cristo levantado na cruz, "para que todo aquele que nele crê não pereça, mas tenha a vida eterna" (v. 15).`
      },
      {
        verseRef: 'v. 16',
        title: 'O Coração do Evangelho: O Amor e a Dádiva de Deus',
        description: `A Maior Declaração de Amor. O versículo 16 é o resumo perfeito do evangelho. 1) A Fonte: "Porque Deus amou o mundo de tal maneira". O amor de Deus é a causa da salvação, e a magnitude desse amor é vista no objeto amado (o "mundo" rebelde e pecador). 2) A Ação: "que deu o seu Filho unigênito". O amor verdadeiro sempre dá o seu melhor. Deus não deu um anjo, Ele deu o Seu único Filho para morrer na cruz. 3) A Condição: "para que todo aquele que nele crê". A salvação não é por obras, mas exclusivamente pela fé em Cristo. 4) A Promessa: "não pereça, mas tenha a vida eterna". O destino natural do homem é perecer (inferno), mas o presente de Deus é a vida eterna (uma qualidade de vida divina que começa agora e dura para sempre).`
      }
    ],
    conclusion: `João 3:1-16 nos ensina que a moralidade e a religião não podem nos salvar. Precisamos de um novo coração, que só o Espírito Santo pode dar, e de um Salvador, que só Deus poderia providenciar. O amor de Deus é tão vasto que incluiu o mundo inteiro, mas a salvação é tão pessoal que exige que você, individualmente, olhe para a cruz e creia no Filho de Deus para ter a vida eterna.`
  },
  {
    id: 'jhn_15_1_8',
    bookId: 'JHN',
    chapter: 15,
    startVerse: 1,
    endVerse: 8,
    title: 'A Videira Verdadeira e o Fruto da Permanência',
    theme: 'A União com Cristo e a Necessidade de Produzir Frutos',
    introduction: `Na noite antes da Sua crucificação, Jesus dá aos Seus discípulos a última grande metáfora do Seu ministério: a Videira e os ramos. No Antigo Testamento, Israel era frequentemente comparado a uma videira que Deus plantou, mas que repetidamente falhou em produzir bons frutos. Jesus declara que Ele é a "Videira Verdadeira" (o verdadeiro Israel, Aquele que cumpre o propósito de Deus). Esta passagem ensina que a vida cristã não é uma questão de esforço independente, mas de união vital e contínua com Cristo. A permanência nEle é a única maneira de produzir o fruto que glorifica a Deus.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Videira, o Lavrador e a Poda',
        description: `A Disciplina que Produz Vida. Jesus estabelece os personagens (v. 1): "Eu sou a videira verdadeira, e meu Pai é o lavrador". O Pai cuida ativamente da videira. Ele toma duas ações (v. 2): "Toda a vara em mim, que não dá fruto, a tira; e limpa (poda) toda aquela que dá fruto, para que dê mais fruto". Os ramos que não dão fruto (como Judas Iscariotes) provam que nunca tiveram vida real e são removidos. Os ramos verdadeiros (os crentes) dão fruto, mas precisam ser podados. A poda dói (representa as provações e a disciplina de Deus que cortam o nosso egoísmo e pecado), mas o objetivo é o crescimento e a abundância. Os discípulos já estavam "limpos" (podados/salvos) pela palavra que Jesus lhes falou (v. 3).`
      },
      {
        verseRef: 'v. 4-6',
        title: 'O Segredo da Permanência e a Impossibilidade do Esforço Carnal',
        description: `Sem Mim Nada Podeis Fazer. O imperativo central é (v. 4): "Estai em mim, e eu em vós". Permanecer (meno) significa manter uma comunhão íntima, contínua e dependente com Cristo através da oração, da Palavra e da obediência. A lógica botânica é simples: "Como a vara de si mesma não pode dar fruto, se não estiver na videira, assim também vós, se não estiverdes em mim". Jesus repete para ênfase (v. 5): "Eu sou a videira, vós as varas; quem está em mim, e eu nele, esse dá muito fruto; porque sem mim nada podeis fazer". O esforço humano separado da graça de Cristo produz zero fruto espiritual. Aquele que não permanece seca e é lançado no fogo (v. 6), uma advertência severa sobre a falsa profissão de fé.`
      },
      {
        verseRef: 'v. 7-8',
        title: 'O Poder da Oração e a Glória do Pai',
        description: `O Resultado da União. Quando permanecemos em Cristo e as Suas palavras permanecem em nós (moldando os nossos desejos e pensamentos), a nossa oração torna-se poderosa (v. 7): "pedireis tudo o que quiserdes, e vos será feito". Não é um cheque em branco para desejos egoístas, mas a promessa de que, quando a nossa vontade está alinhada com a Palavra dEle, as nossas orações por frutos espirituais sempre serão respondidas. O objetivo final de tudo isso não é a nossa própria glória, mas a do Lavrador (v. 8): "Nisto é glorificado meu Pai, que deis muito fruto; e assim sereis meus discípulos". O fruto abundante (caráter santo, amor, almas ganhas) é a prova visível de que somos verdadeiros discípulos de Jesus.`
      }
    ],
    conclusion: `João 15:1-8 nos liberta da exaustão do ativismo religioso. Deus não nos chama para produzir frutos na nossa própria força, mas para permanecermos conectados à Fonte de vida. Se focarmos na comunhão íntima com Jesus, o fruto será a consequência natural e inevitável. E quando a tesoura da poda do Pai vier sobre as nossas vidas através das provações, podemos confiar que Ele não está nos punindo, mas nos preparando para uma colheita ainda mais gloriosa.`
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
  console.log('Successfully added 5 new pericopes for Acts and John.');
} else {
  console.error('Could not find the end of the pericopes array.');
}
