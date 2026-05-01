const fs = require('fs');

const expandedPericopes = [
  {
    id: 'deu_18_15_22',
    bookId: 'DEU',
    chapter: 18,
    startVerse: 15,
    endVerse: 22,
    title: 'A Promessa do Grande Profeta',
    theme: 'A Revelação Divina, o Falso Profeta e a Antecipação do Messias',
    introduction: 'Em Deuteronômio 18, Moisés proíbe estritamente que Israel busque orientação através de práticas ocultas (adivinhação, feitiçaria, consulta aos mortos) comuns entre os cananeus. Em contraste com a escuridão do ocultismo, Deus promete uma fonte clara, viva e autoritativa de revelação: Ele levantará um Profeta. Esta passagem é uma das profecias messiânicas mais importantes do Pentateuco. Ela estabelece o critério para distinguir o verdadeiro do falso profeta e aponta para o dia em que o próprio Deus falaria ao Seu povo através de um Mediador perfeito.',
    points: [
      {
        verseRef: 'v. 15-16',
        title: 'A Promessa do Profeta Semelhante a Moisés',
        description: 'Moisés declara: "O Senhor teu Deus te levantará um profeta do meio de ti, de teus irmãos, como eu; a ele ouvireis". A promessa atende a um pedido feito pelo próprio povo no Monte Horebe (Sinai). Aterrorizados pelo fogo e pela voz de Deus, eles pediram um mediador humano para não morrerem. Deus concordou com o pedido deles. O profeta prometido seria humano ("de teus irmãos") e teria um ministério semelhante ao de Moisés (mediador de uma aliança, legislador e libertador).'
      },
      {
        verseRef: 'v. 17-19',
        title: 'A Palavra na Boca do Profeta e a Responsabilidade de Ouvir',
        description: 'Deus confirma a promessa: "E porei as minhas palavras na sua boca, e ele lhes falará tudo o que eu lhe ordenar". A autoridade do profeta não vem de sua própria sabedoria, mas da Palavra de Deus implantada nele. A consequência de rejeitar este Profeta é severa: "E será que qualquer que não ouvir as minhas palavras, que ele falar em meu nome, eu o requererei dele". Rejeitar o mensageiro é rejeitar Aquele que o enviou.'
      },
      {
        verseRef: 'v. 20-22',
        title: 'O Teste do Falso Profeta',
        description: 'Como o povo saberia se a palavra falada era realmente de Deus? Moisés estabelece o teste da infalibilidade profética. Se um profeta falar em nome de outros deuses, ou se falar presunçosamente em nome do Senhor e a palavra não se cumprir, esse profeta é falso e deve morrer. A profecia bíblica não permite margem de erro. A precisão absoluta é a marca da verdadeira revelação divina, protegendo o povo de charlatães e manipuladores.'
      }
    ],
    conclusion: 'A promessa do Grande Profeta encontrou seu cumprimento final e perfeito em Jesus Cristo. No Novo Testamento, tanto Pedro (Atos 3:22) quanto Estêvão (Atos 7:37) citam esta passagem, declarando que Jesus é o Profeta semelhante a Moisés. Diferente dos falsos profetas que falam presunçosamente, Jesus disse: "As palavras que eu vos digo não as digo de mim mesmo" (João 14:10). Em um mundo cheio de vozes confusas e "adivinhos" modernos, a nossa segurança está em ouvir exclusivamente a voz de Cristo, a revelação final e infalível de Deus.'
  },
  {
    id: 'deu_24_17_22',
    bookId: 'DEU',
    chapter: 24,
    startVerse: 17,
    endVerse: 22,
    title: 'A Proteção aos Vulneráveis',
    theme: 'A Justiça Social, a Memória da Redenção e a Generosidade Prática',
    introduction: 'A lei de Deus não se preocupa apenas com rituais de adoração, mas com a forma como os mais fracos da sociedade são tratados. Deuteronômio 24:17-22 é um manifesto de justiça social. Moisés foca em três grupos que não possuíam terras ou defensores legais em Israel: o estrangeiro, o órfão e a viúva. A base para esta ética não é apenas o humanitarismo, mas a teologia da redenção: Israel deve tratar os oprimidos com graça porque eles mesmos foram oprimidos no Egito e resgatados pela graça de Deus.',
    points: [
      {
        verseRef: 'v. 17-18',
        title: 'A Justiça Imparcial e a Memória da Escravidão',
        description: 'O mandamento começa com a proteção legal: "Não perverterás o direito do estrangeiro e do órfão; nem tomarás em penhor a roupa da viúva". Os tribunais e os credores frequentemente exploravam aqueles que não tinham poder para se defender. Deus proíbe estritamente essa opressão. O motivo é teológico: "Lembra-te de que foste servo no Egito, e de que o Senhor teu Deus te livrou dali". A memória da própria vulnerabilidade passada deve gerar empatia e justiça no presente.'
      },
      {
        verseRef: 'v. 19',
        title: 'O Feixe Esquecido no Campo',
        description: 'A lei passa da justiça legal para a generosidade agrícola. Se, durante a colheita do trigo, o agricultor esquecer um feixe no campo, ele não deve voltar para buscá-lo. Aquele feixe pertence agora "ao estrangeiro, ao órfão e à viúva". A ineficiência intencional na colheita torna-se o plano de assistência social de Deus. A promessa atrelada a esta generosidade é que o Senhor abençoará "toda a obra das tuas mãos".'
      },
      {
        verseRef: 'v. 20-22',
        title: 'A Oliveira, a Vinha e a Provisão para o Necessitado',
        description: 'O mesmo princípio se aplica à colheita das azeitonas e das uvas. O agricultor não deve sacudir os ramos da oliveira uma segunda vez, nem rebuscar a vinha após a primeira colheita. O que sobra deve ser deixado para os vulneráveis. Novamente, o mandamento termina com o refrão: "E lembrar-te-ás de que foste servo na terra do Egito". A gratidão pela redenção é o motor da generosidade.'
      }
    ],
    conclusion: 'A proteção aos vulneráveis em Deuteronômio 24 revela o coração compassivo de Deus. A verdadeira religião, como Tiago mais tarde afirmaria (Tiago 1:27), é visitar os órfãos e as viúvas nas suas tribulações. A lei do "feixe esquecido" nos ensina que a eficiência econômica e o lucro máximo não devem ser o nosso objetivo final. Devemos deixar margens em nossas vidas e em nossas finanças para abençoar aqueles que nada têm. A nossa generosidade para com os outros é a prova visível de que realmente compreendemos a graça que nos resgatou da nossa própria escravidão espiritual.'
  },
  {
    id: 'deu_28_1_14',
    bookId: 'DEU',
    chapter: 28,
    startVerse: 1,
    endVerse: 14,
    title: 'As Bênçãos da Obediência',
    theme: 'A Recompensa da Fidelidade, a Exaltação e a Abundância Integral',
    introduction: 'Deuteronômio 28 é o grande capítulo das bênçãos e maldições da Aliança. Os primeiros 14 versículos descrevem o cenário glorioso que aguarda Israel se eles escolherem a obediência radical à voz do Senhor. As bênçãos prometidas não são apenas espirituais, mas abrangem todas as esferas da vida humana: a família, a economia, a agricultura, a segurança nacional e o status internacional. Deus promete que a obediência transformará Israel em uma vitrine da Sua bondade, atraindo o temor e o respeito de todas as nações da terra.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Bênção Abrangente (Na Cidade, no Campo, no Entrar e no Sair)',
        description: 'A condição é clara: "Se atentamente ouvires a voz do Senhor teu Deus, tendo cuidado de guardar todos os seus mandamentos". Se isso acontecer, as bênçãos "virão sobre ti e te alcançarão". A bênção de Deus é descrita como algo que persegue o crente obediente. Ela atinge todas as áreas: a cidade (comércio), o campo (agricultura), o fruto do ventre (filhos), o fruto da terra (colheitas) e os rebanhos. O crente será abençoado ao entrar (início dos projetos) e ao sair (conclusão).'
      },
      {
        verseRef: 'v. 7-10',
        title: 'A Vitória sobre os Inimigos e o Nome do Senhor',
        description: 'Deus promete segurança nacional absoluta. Os inimigos que se levantarem contra Israel serão derrotados; eles virão por um caminho, mas fugirão por sete caminhos (dispersão total em pânico). O Senhor abençoará os celeiros e tudo o que puserem a mão. O resultado final dessa prosperidade é o testemunho global (v. 10): "E todos os povos da terra verão que é invocado sobre ti o nome do Senhor, e terão temor de ti". A bênção tem um propósito missional.'
      },
      {
        verseRef: 'v. 11-14',
        title: 'A Abundância Econômica (A Cabeça e Não a Cauda)',
        description: 'Deus promete abrir o Seu "bom tesouro, o céu, para dar chuva à tua terra no seu tempo". A economia de Israel será tão forte que eles emprestarão a muitas nações, mas não tomarão emprestado. O versículo 13 resume a promessa de exaltação: "E o Senhor te porá por cabeça, e não por cauda; e só estarás em cima, e não debaixo". A condição é repetida no final: não se desviar das palavras da lei, nem para a direita nem para a esquerda, para seguir outros deuses.'
      }
    ],
    conclusion: 'As bênçãos de Deuteronômio 28 demonstram que Deus é um Pai generoso que tem prazer em recompensar a fidelidade dos Seus filhos. No entanto, é crucial entender que, na Nova Aliança, a nossa obediência perfeita foi cumprida por Cristo. Em Cristo, fomos abençoados com "todas as bênçãos espirituais nas regiões celestiais" (Efésios 1:3). Embora Deus ainda abençoe a obediência prática hoje, a nossa maior bênção não é a prosperidade agrícola ou financeira, mas a garantia de que somos filhos de Deus, coerdeiros com Cristo, e que o Seu Nome é invocado sobre nós.'
  },
  {
    id: 'deu_28_15_24',
    bookId: 'DEU',
    chapter: 28,
    startVerse: 15,
    endVerse: 24,
    title: 'As Maldições da Desobediência',
    theme: 'A Quebra da Aliança, o Juízo Divino e a Reversão da Criação',
    introduction: 'O contraste em Deuteronômio 28 é aterrorizante. Enquanto as bênçãos ocupam 14 versículos, as maldições pela desobediência ocupam 54 versículos. A seção de 15 a 24 inicia este catálogo de horrores. Moisés adverte que a quebra da aliança não resultará apenas na perda das bênçãos, mas na ativação de um juízo divino implacável. As maldições são o exato oposto das bênçãos: onde haveria vida, haverá doença; onde haveria chuva, haverá pó; onde haveria vitória, haverá derrota. É a reversão da criação e da redenção.',
    points: [
      {
        verseRef: 'v. 15-19',
        title: 'A Maldição Abrangente (Na Cidade, no Campo, no Entrar e no Sair)',
        description: 'A premissa é a desobediência: "Se não deres ouvidos à voz do Senhor teu Deus...". Assim como as bênçãos perseguiam o obediente, as maldições "virão sobre ti e te alcançarão". A estrutura é um espelho invertido dos versículos 3 a 6. Haverá maldição na cidade e no campo. O cesto e a amassadeira (provisão diária) serão amaldiçoados. O ventre, a terra e os rebanhos serão estéreis. A maldição os acompanhará ao entrar e ao sair.'
      },
      {
        verseRef: 'v. 20-22',
        title: 'A Doença, a Peste e a Destruição Interna',
        description: 'Deus enviará a maldição, a confusão e a derrota em tudo o que puserem a mão. O juízo se manifestará fisicamente: a peste se apegará a eles até os consumir da terra. O Senhor os ferirá com tísica, febre, inflamação, calor ardente, secura, crestamento e ferrugem (doenças humanas e pragas agrícolas). A natureza e o próprio corpo humano se voltarão contra o povo rebelde, "até que pereças".'
      },
      {
        verseRef: 'v. 23-24',
        title: 'O Céu de Bronze e a Terra de Ferro (A Seca)',
        description: 'A imagem mais sufocante do juízo é a seca absoluta: "E os teus céus, que estão sobre a tua cabeça, serão de bronze; e a terra que está debaixo de ti, será de ferro". O céu não dará chuva, e a terra não cederá ao arado. Em vez de chuva, o Senhor dará "pó e poeira" à terra, caindo do céu até que o povo seja destruído. A idolatria aos deuses da fertilidade cananeia resultaria na esterilidade total da terra.'
      }
    ],
    conclusion: 'As maldições de Deuteronômio 28 são difíceis de ler, mas revelam a seriedade da santidade de Deus. O pecado não é inofensivo; ele atrai o juízo e a morte. A história trágica de Israel (culminando no exílio babilônico e na destruição de Jerusalém) é o cumprimento literal destas advertências. Para o cristão, este texto nos leva a olhar para a cruz com profunda gratidão. Como Paulo declara em Gálatas 3:13: "Cristo nos resgatou da maldição da lei, fazendo-se maldição por nós". Jesus suportou o "céu de bronze" e a ira divina para que nós pudéssemos herdar as bênçãos da aliança.'
  },
  {
    id: 'deu_30_11_20',
    bookId: 'DEU',
    chapter: 30,
    startVerse: 11,
    endVerse: 20,
    title: 'A Escolha entre a Vida e a Morte',
    theme: 'A Acessibilidade da Palavra, o Apelo Final e a Decisão do Coração',
    introduction: 'O livro de Deuteronômio atinge o seu clímax emocional e teológico no capítulo 30. Após expor a Lei, as bênçãos e as maldições, Moisés faz o seu apelo final à nação. Ele destrói a desculpa de que a vontade de Deus é muito difícil de entender ou muito distante para ser alcançada. A Palavra está perto, na boca e no coração. Moisés coloca diante de Israel a escolha mais fundamental da existência humana: a vida e o bem, ou a morte e o mal. A neutralidade é impossível. O destino da nação depende da sua escolha de amar e se apegar ao Senhor.',
    points: [
      {
        verseRef: 'v. 11-14',
        title: 'A Palavra Acessível (Não Está no Céu nem Além do Mar)',
        description: 'Moisés declara que o mandamento de Deus não é "encoberto" (misterioso demais) nem "longe". Ele usa duas metáforas: não está no céu (para que alguém tenha que subir e trazê-lo) nem além do mar (para que alguém tenha que navegar para buscá-lo). A revelação de Deus é clara e acessível. "Mas a palavra está mui perto de ti, na tua boca, e no teu coração, para a fazeres". Deus já falou; o problema não é a falta de conhecimento, mas a falta de vontade para obedecer.'
      },
      {
        verseRef: 'v. 15-18',
        title: 'Os Dois Caminhos (A Vida e o Bem vs. A Morte e o Mal)',
        description: 'Moisés resume todas as opções em dois caminhos opostos: "Vês aqui, hoje te tenho proposto a vida e o bem, e a morte e o mal". O caminho da vida consiste em amar a Deus, andar nos Seus caminhos e guardar os Seus mandamentos, resultando em multiplicação e bênção na terra. O caminho da morte ocorre quando o coração se desvia, não ouve, e se deixa seduzir para adorar outros deuses. Moisés denuncia com certeza: "certamente perecereis".'
      },
      {
        verseRef: 'v. 19-20',
        title: 'O Testemunho dos Céus e da Terra e o Apelo à Vida',
        description: 'Moisés chama os céus e a terra como testemunhas cósmicas desta aliança. Ele faz o apelo mais apaixonado de todo o livro: "Escolhe pois a vida, para que vivas, tu e a tua descendência". A escolha da vida é definida no versículo 20: "amando ao Senhor teu Deus, dando ouvidos à sua voz, e apegando-te a ele; pois ele é a tua vida". A vida não é encontrada em guardar regras mecanicamente, mas em um relacionamento de amor e apego profundo ao Próprio Deus.'
      }
    ],
    conclusion: 'O apelo de Moisés ecoa através dos séculos até nós. A salvação não exige que subamos aos céus ou cruzemos os mares em busca de sabedoria oculta; a Palavra da fé está perto de nós (como Paulo aplica este texto em Romanos 10:6-9, referindo-se a Cristo). A escolha que Moisés apresenta não é apenas sobre seguir regras, mas sobre um relacionamento. Hoje, Deus coloca diante de cada pessoa a mesma escolha. Escolher Cristo é escolher a vida; rejeitá-Lo é escolher a morte. A decisão é nossa, e as consequências são eternas.'
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
console.log(`Expanded ${replacedCount} pericopes (Batch 11.2).`);
