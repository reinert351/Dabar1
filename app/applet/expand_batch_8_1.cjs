const fs = require('fs');

const expandedPericopes = [
  {
    id: 'lev_19_9_18',
    bookId: 'LEV',
    chapter: 19,
    startVerse: 9,
    endVerse: 18,
    title: 'O Amor ao Próximo e a Justiça Social',
    theme: 'A Ética do Cotidiano, a Proteção aos Vulneráveis e a Lei do Amor',
    introduction: 'Levítico 19 continua a detalhar o que significa "ser santo porque Deus é santo". Os versículos 9 a 18 demonstram que a santidade bíblica nunca é apenas vertical (nossa relação com Deus), mas profundamente horizontal (nossa relação com o próximo). Este texto estabelece as bases da justiça social em Israel, protegendo os pobres, os trabalhadores e os vulneráveis contra a exploração. O clímax desta passagem é o mandamento que Jesus mais tarde chamaria de o segundo maior de toda a Lei: "Amarás o teu próximo como a ti mesmo".',
    points: [
      {
        verseRef: 'v. 9-10',
        title: 'A Lei da Rebusco: Provisão para os Pobres',
        description: 'Deus ordena aos proprietários de terras que, ao fazerem a colheita, não seguem os cantos do campo nem recolham as espigas caídas. O mesmo se aplica às vinhas: não devem colher os bagos caídos. Essa sobra não é desperdício, mas uma provisão divina intencional "para o pobre e para o estrangeiro". A santidade afeta a economia. Deus ensina que a propriedade privada tem uma função social; o lucro máximo não deve ser o objetivo final do crente, mas sim a generosidade que reflete o cuidado de Deus pelos necessitados.'
      },
      {
        verseRef: 'v. 11-16',
        title: 'A Integridade nos Negócios e a Justiça Imparcial',
        description: 'A seção seguinte proíbe uma série de pecados sociais: furtar, mentir, reter o salário do trabalhador diarista até a manhã seguinte, amaldiçoar o surdo ou colocar tropeço diante do cego. Deus exige compaixão pelos deficientes e justiça absoluta nos tribunais: "não favorecerás o pobre, nem honrarás o poderoso". A justiça de Deus é cega às classes sociais. Além disso, a fofoca e a calúnia ("andar como mexeriqueiro") são estritamente proibidas, pois destroem a reputação e a vida da comunidade.'
      },
      {
        verseRef: 'v. 17-18',
        title: 'A Repreensão Sincera e o Amor ao Próximo',
        description: 'O texto aborda a atitude interior: "Não odiarás a teu irmão no teu coração". Em vez de guardar rancor, o israelita deve repreender o seu próximo abertamente, para não levar a culpa do pecado dele. A vingança e o ressentimento são proibidos. O ápice da lei ética é então declarado: "amarás o teu próximo como a ti mesmo. Eu sou o Senhor". O amor aqui não é apenas um sentimento, mas uma ação prática de buscar o bem do outro com o mesmo zelo com que buscamos o nosso próprio bem, fundamentado na autoridade do próprio Deus.'
      }
    ],
    conclusion: 'Levítico 19:9-18 destrói a ilusão de que podemos ser espiritualmente santos enquanto somos socialmente injustos. A maneira como tratamos o pobre, o trabalhador, o deficiente e o nosso vizinho é o verdadeiro teste da nossa religião. Jesus e os apóstolos citaram o versículo 18 repetidamente (Mateus 22:39, Romanos 13:9, Tiago 2:8) como o resumo de toda a lei ética. O amor ao próximo não é uma invenção do Novo Testamento; é o coração do Antigo Testamento. Porque Deus nos amou e nos supriu, somos chamados a ser canais do Seu amor e justiça em um mundo quebrado.'
  },
  {
    id: 'lev_20_22_26',
    bookId: 'LEV',
    chapter: 20,
    startVerse: 22,
    endVerse: 26,
    title: 'A Separação das Nações',
    theme: 'A Herança da Terra, a Distinção e a Propriedade Exclusiva de Deus',
    introduction: 'O capítulo 20 de Levítico conclui com uma exortação poderosa que resume o propósito de todas as leis de santidade, pureza e moralidade dadas a Israel. Deus lembra ao povo que a terra de Canaã, para a qual eles estão indo, "vomitou" seus antigos habitantes exatamente por causa das práticas abomináveis que Ele acabou de proibir. A sobrevivência e a prosperidade de Israel na Terra Prometida dependem inteiramente de sua separação moral e espiritual das nações ao redor. Eles foram escolhidos para serem diferentes.',
    points: [
      {
        verseRef: 'v. 22-23',
        title: 'O Perigo da Assimilação e o Vômito da Terra',
        description: 'Deus adverte: "Guardareis, pois, todos os meus estatutos... para que a terra, para a qual eu vos levo para habitar nela, não vos vomite". A terra é personificada como tendo uma intolerância moral à iniquidade. Deus proíbe Israel de andar nos costumes da nação que Ele está expulsando. O juízo sobre os cananeus não foi arbitrário; foi a consequência direta de suas abominações (idolatria, incesto, sacrifícios de crianças). Se Israel imitasse essas práticas, sofreria o mesmo destino. A eleição divina não é uma licença para pecar, mas um chamado à responsabilidade.'
      },
      {
        verseRef: 'v. 24',
        title: 'A Promessa da Herança: Leite e Mel',
        description: 'Em contraste com o juízo sobre os ímpios, Deus reafirma a promessa da aliança a Israel: "Herdareis a sua terra, e eu vo-la darei para a possuirdes, terra que mana leite e mel". A abundância da terra é um presente da graça de Deus. No entanto, a base para desfrutar desse presente é a identidade exclusiva de Israel: "Eu sou o Senhor vosso Deus, que vos separei dos povos". A separação (santidade) é o pré-requisito para a bênção.'
      },
      {
        verseRef: 'v. 25-26',
        title: 'A Distinção Visível e a Propriedade Divina',
        description: 'Como um lembrete diário dessa separação, Deus reitera a lei dos animais limpos e imundos. A dieta deles deve refletir a sua teologia. O clímax da passagem é o versículo 26: "E sereis para mim santos, porque eu, o Senhor, sou santo, e vos separei dos povos, para serdes meus". A santidade não é apenas evitar o mal; é pertencer exclusivamente a Deus. Israel foi "cortado" do resto da humanidade não porque fossem melhores, mas para serem o tesouro particular de Deus e Seus representantes na terra.'
      }
    ],
    conclusion: 'A exortação de Levítico 20 nos lembra que o povo de Deus é chamado a viver na contramão da cultura. A assimilação aos valores do mundo sempre resulta em desastre espiritual e perda de herança. A Igreja do Novo Testamento herda este mesmo chamado: somos "geração eleita, sacerdócio real, nação santa, povo de propriedade exclusiva de Deus" (1 Pedro 2:9). A nossa separação do mundo não deve ser física (isolamento), mas moral e espiritual. Fomos separados do pecado para pertencermos inteiramente ao Senhor, refletindo a Sua santidade em um mundo que precisa desesperadamente de luz.'
  },
  {
    id: 'lev_23_1_8',
    bookId: 'LEV',
    chapter: 23,
    startVerse: 1,
    endVerse: 8,
    title: 'O Sábado e a Páscoa',
    theme: 'O Tempo Sagrado, a Redenção e a Vida sem Fermento',
    introduction: 'Levítico 23 é o calendário profético de Deus. Ele detalha as "festas fixas do Senhor" (Moedim, que significa "tempos designados" ou "encontros marcados"). Estas festas não eram apenas feriados agrícolas ou celebrações históricas; elas eram ensaios proféticos do plano de redenção de Deus através do Messias. O capítulo começa estabelecendo o fundamento de todo o tempo sagrado (o Sábado) e, em seguida, introduz as duas primeiras festas anuais da primavera: a Páscoa e a Festa dos Pães Asmos, que apontam diretamente para a morte de Cristo e a santificação do crente.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Fundamento do Tempo: O Sábado',
        description: 'Antes de listar as festas anuais, Deus reafirma a festa semanal: o Sábado (Shabbat). "Seis dias trabalho se fará, mas o sétimo dia será o sábado do descanso, santa convocação". O Sábado é a âncora do calendário de Israel. Ele lembra o povo de duas verdades fundamentais: Deus é o Criador (que descansou no sétimo dia) e Deus é o Redentor (que os libertou da escravidão contínua do Egito). O descanso sabático é um ato de fé, declarando que o mundo continua girando pela providência de Deus, não apenas pelo nosso trabalho incessante.'
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Páscoa: O Cordeiro da Redenção',
        description: 'A primeira festa anual ocorre no décimo quarto dia do primeiro mês (Nisã): a Páscoa do Senhor (Pessach). Ela comemora a noite em que o anjo destruidor "passou por cima" das casas dos israelitas no Egito, protegidas pelo sangue do cordeiro. A Páscoa é o fundamento da redenção de Israel; sem ela, não haveria nação nem outras festas. Profeticamente, a Páscoa aponta para o sacrifício exato de Jesus Cristo. Paulo declara em 1 Coríntios 5:7: "Cristo, nossa páscoa, foi sacrificado por nós".'
      },
      {
        verseRef: 'v. 6-8',
        title: 'A Festa dos Pães Asmos: A Vida Santificada',
        description: 'Imediatamente após a Páscoa (no dia 15), começa a Festa dos Pães Asmos (Matzot), que dura sete dias. Durante este período, nenhum fermento podia ser encontrado em suas casas ou consumido. O primeiro e o sétimo dia eram "santas convocações" (dias de descanso como o sábado). Historicamente, lembrava a pressa da saída do Egito. Teologicamente, o fermento representa o pecado. A lição é clara: a redenção (Páscoa) deve ser imediatamente seguida por uma vida de pureza e separação do pecado (Pães Asmos).'
      }
    ],
    conclusion: 'O calendário de Levítico 23 nos mostra que Deus é o Senhor do tempo. O Sábado nos convida a descansar na obra consumada de Deus. A conexão inseparável entre a Páscoa e a Festa dos Pães Asmos é o coração do Evangelho: fomos salvos pelo sangue do Cordeiro não para continuarmos pecando, mas para vivermos uma vida nova. Como Paulo exorta a Igreja: "Limpai o fermento velho... celebremos a festa, não com o fermento da maldade e da malícia, mas com os asmos da sinceridade e da verdade" (1 Co 5:7-8). A salvação gratuita exige uma vida santificada.'
  },
  {
    id: 'lev_23_15_22',
    bookId: 'LEV',
    chapter: 23,
    startVerse: 15,
    endVerse: 22,
    title: 'A Festa de Pentecostes (Semanas)',
    theme: 'A Colheita, a Provisão do Espírito e a Inclusão dos Gentios',
    introduction: 'A terceira grande festa do calendário bíblico é a Festa das Semanas (Shavuot), mais conhecida pelo seu nome grego: Pentecostes (que significa "quinquagésimo"). Celebrada exatamente cinquenta dias após a Festa das Primícias (que prefigurava a ressurreição de Cristo), esta festa marcava o fim da colheita do trigo. No Antigo Testamento, era um tempo de profunda gratidão pela provisão de Deus. No Novo Testamento, Pentecostes ganhou um significado eterno quando, exatamente neste dia, o Espírito Santo foi derramado, marcando o nascimento da Igreja e o início da grande colheita de almas entre todas as nações.',
    points: [
      {
        verseRef: 'v. 15-16',
        title: 'A Contagem dos Cinquenta Dias',
        description: 'Deus instrui o povo a contar sete semanas inteiras a partir do dia seguinte ao sábado (o dia da oferta do molho das primícias). "Até ao dia seguinte ao sétimo sábado, contareis cinquenta dias". Esta contagem precisa (o Ômer) criava um senso de expectativa. A Festa das Primícias celebrava o início da colheita da cevada; o Pentecostes celebrava a colheita do trigo. Profeticamente, as Primícias apontam para a ressurreição de Cristo (o primeiro fruto), e os cinquenta dias de espera apontam para o período em que os discípulos aguardaram em Jerusalém a promessa do Pai.'
      },
      {
        verseRef: 'v. 17-21',
        title: 'Os Dois Pães Levedados e a Nova Oferta',
        description: 'O ritual central do Pentecostes é único: o sacerdote deve mover perante o Senhor "dois pães... cozidos com fermento, por primícias ao Senhor". Esta é a única vez que o fermento é permitido em uma oferta no altar. Por que dois pães com fermento? Profeticamente, os dois pães representam a Igreja, composta por Judeus e Gentios, unidos em um só corpo. O fato de terem fermento reconhece que, embora a Igreja seja aceita por Deus através do sacrifício de Cristo (os animais sacrificados junto com os pães), ela ainda é composta por pecadores redimidos que lutam contra a natureza carnal.'
      },
      {
        verseRef: 'v. 22',
        title: 'A Lei da Colheita e a Graça para os Excluídos',
        description: 'No meio das instruções da festa, Deus insere um mandamento social (repetindo Levítico 19:9): ao fazerem a colheita, não devem segar os cantos do campo nem recolher as espigas caídas, mas deixá-las "para o pobre e para o estrangeiro". A verdadeira celebração da provisão de Deus deve transbordar em generosidade. Teologicamente, isso aponta para o fato de que a colheita do Pentecostes (o derramamento do Espírito) não seria apenas para os judeus, mas alcançaria os "estrangeiros" (os gentios), trazendo-os para a família de Deus.'
      }
    ],
    conclusion: 'A Festa de Pentecostes é a ponte entre a obra de Cristo e a missão da Igreja. A ressurreição de Jesus (Primícias) garantiu a nossa justificação, mas foi o derramamento do Espírito Santo no dia de Pentecostes que nos capacitou para a colheita. Os dois pães levedados nos lembram que a Igreja é imperfeita, mas é aceita por Deus e unida pelo Seu Espírito. A inclusão do mandamento para alimentar o estrangeiro no dia de Pentecostes é um lembrete profético de que o Evangelho é para todas as nações. A colheita começou em Jerusalém, mas os "cantos do campo" se estendem até os confins da terra.'
  },
  {
    id: 'lev_23_33_43',
    bookId: 'LEV',
    chapter: 23,
    startVerse: 33,
    endVerse: 43,
    title: 'A Festa dos Tabernáculos (Cabanas)',
    theme: 'A Memória da Peregrinação, a Alegria da Colheita e a Glória Futura',
    introduction: 'A Festa dos Tabernáculos (Sukkot) é a última e a mais alegre das festas do calendário bíblico. Celebrada no outono, após a colheita final (a vindima e o azeite), ela encerra o ciclo agrícola e profético de Israel. Durante sete dias, o povo deveria sair de suas casas confortáveis e morar em tendas (cabanas) feitas de ramos de árvores. Esta festa tinha um propósito duplo: olhar para o passado, lembrando a provisão de Deus durante a peregrinação no deserto, e olhar para o futuro, antecipando o Reino Messiânico, quando Deus "tabernaculará" definitivamente com a humanidade.',
    points: [
      {
        verseRef: 'v. 33-36',
        title: 'O Tempo da Festa e a Santa Convocação',
        description: 'A festa começa no décimo quinto dia do sétimo mês (Tishrei), apenas cinco dias após o solene Dia da Expiação (Yom Kippur). Após a alma ser afligida e o pecado perdoado, vem a alegria transbordante. A festa dura sete dias, com sacrifícios diários, e termina no oitavo dia com uma "santa convocação" (um dia de descanso solene). O oitavo dia simboliza novos começos e a eternidade. É a festa da consumação, celebrando o fim de todo o trabalho agrícola do ano.'
      },
      {
        verseRef: 'v. 39-40',
        title: 'Os Ramos Formosos e a Ordem para se Alegrar',
        description: 'Deus instrui o povo a tomar "fruto de árvores formosas, ramos de palmeiras, ramos de árvores espessas, e salgueiros de ribeiras". Com esses elementos, eles deveriam construir suas cabanas e se alegrar perante o Senhor por sete dias. A Festa dos Tabernáculos é a única festa onde a alegria é um mandamento explícito ("e vos alegrareis"). A colheita foi recolhida, o pecado foi expiado; não há mais nada a fazer a não ser celebrar a bondade e a provisão abundante do Criador.'
      },
      {
        verseRef: 'v. 41-43',
        title: 'O Propósito Memorial: Morar em Cabanas',
        description: 'O propósito de morar em cabanas frágeis é declarado claramente: "Para que saibam as vossas gerações que eu fiz habitar os filhos de Israel em cabanas, quando os tirei da terra do Egito". Mesmo quando estivessem morando em casas de pedra em Canaã, eles precisavam lembrar que sua sobrevivência no deserto dependeu inteiramente da graça de Deus. As cabanas lembravam a fragilidade da vida humana e a proteção constante da "nuvem" da presença divina durante a peregrinação.'
      }
    ],
    conclusion: 'A Festa dos Tabernáculos é a celebração mais escatológica (voltada para o fim dos tempos) da Bíblia. Zacarias 14 profetiza que, no Reino Milenar, todas as nações subirão a Jerusalém para celebrar os Tabernáculos. Para o cristão, morar em "cabanas" nos lembra que nossos corpos atuais são tendas temporárias (2 Coríntios 5:1) e que somos peregrinos neste mundo. A alegria desta festa antecipa o dia em que a grande colheita de almas estará completa, e ouviremos a voz do céu dizer: "Eis aqui o tabernáculo de Deus com os homens, pois com eles habitará" (Apocalipse 21:3). A peregrinação terminará, e a alegria será eterna.'
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
console.log(`Expanded ${replacedCount} pericopes (Batch 8.1).`);
