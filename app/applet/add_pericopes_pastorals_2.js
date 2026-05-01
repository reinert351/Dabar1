const fs = require('fs');

const newPericopes = [
  {
    id: '2ti_2_1_7',
    bookId: '2TI',
    chapter: 2,
    startVerse: 1,
    endVerse: 7,
    title: 'O Bom Soldado, Atleta e Lavrador',
    theme: 'A Força na Graça e as Metáforas da Perseverança no Ministério',
    introduction: `Para preparar Timóteo para as dificuldades do ministério após a sua morte, Paulo usa três metáforas clássicas do mundo antigo: o soldado, o atleta e o lavrador. Cada uma destas figuras ilustra um aspecto essencial do discipulado cristão e da liderança: dedicação exclusiva, disciplina rigorosa e trabalho árduo e paciente. Antes de apresentar as metáforas, Paulo estabelece o fundamento absoluto para qualquer serviço cristão: a força que vem da graça de Cristo.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Força da Graça e o Foco do Soldado',
        description: `Multiplicação e Sofrimento. Paulo começa: "Tu, pois, meu filho, fortifica-te na graça que há em Cristo Jesus". A força do cristão não vem da autoconfiança, mas da dependência contínua da graça. O versículo 2 estabelece o princípio da sucessão espiritual: Timóteo deve pegar o que aprendeu de Paulo e confiar a "homens fiéis, que sejam idôneos para também ensinarem os outros" (quatro gerações de discipulado: Paulo, Timóteo, homens fiéis, outros). O versículo 3 introduz a primeira metáfora: "Sofre, pois, comigo, as aflições, como bom soldado de Jesus Cristo". O ministério não é um cruzeiro de férias, mas um campo de batalha que exige disposição para sofrer.`
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Dedicação Exclusiva e a Disciplina do Atleta',
        description: `As Regras do Jogo. O soldado (v. 4) "não se embaraça com negócios desta vida, a fim de agradar àquele que o alistou para a guerra". O cristão não deve permitir que as preocupações civis, financeiras ou seculares o distraiam da sua missão principal de servir a Cristo. A segunda metáfora é o atleta (v. 5): "E, se alguém também milita (compete como atleta), não é coroado se não militar legitimamente (segundo as regras)". O atleta não pode inventar atalhos; ele deve treinar com disciplina rigorosa e competir de acordo com as regras de Deus (santidade, integridade, verdade) se quiser receber a coroa da vitória.`
      },
      {
        verseRef: 'v. 6-7',
        title: 'O Trabalho do Lavrador e a Promessa de Entendimento',
        description: `A Paciência e a Recompensa. A terceira metáfora é o agricultor (v. 6): "O lavrador que trabalha deve ser o primeiro a gozar dos frutos". A agricultura exige trabalho duro, suor, madrugadas e muita paciência antes de ver qualquer resultado. Mas a promessa é que o obreiro fiel será sustentado e abençoado pelos frutos do seu próprio trabalho espiritual. Paulo conclui (v. 7): "Considera o que digo, e o Senhor te dê entendimento em tudo". Paulo fornece as ilustrações, mas é o Senhor quem dá a iluminação espiritual para aplicá-las à vida.`
      }
    ],
    conclusion: `A vida cristã e o ministério exigem a dedicação inabalável de um soldado em guerra, a disciplina estrita de um atleta olímpico e a paciência laboriosa de um agricultor. Não há atalhos para a maturidade espiritual ou para um ministério frutífero. No entanto, não fazemos isso na nossa própria força, mas fortificados pela graça de Cristo, sabendo que a recompensa final valerá cada lágrima e cada gota de suor.`
  },
  {
    id: '2ti_2_14_19',
    bookId: '2TI',
    chapter: 2,
    startVerse: 14,
    endVerse: 19,
    title: 'O Obreiro Aprovado',
    theme: 'O Manejo da Palavra e a Frieza contra a Falsa Doutrina',
    introduction: `Em contraste com as metáforas de perseverança, Paulo agora adverte Timóteo sobre os perigos internos que destroem a igreja: discussões inúteis e falsas doutrinas. Ele contrasta o falso mestre, que se envolve em debates vazios que arruínam os ouvintes, com o "obreiro aprovado", que maneja a Palavra de Deus com precisão cirúrgica. A falsa doutrina não é apenas um erro intelectual; ela é descrita como uma doença mortal que corrói a fé.`,
    points: [
      {
        verseRef: 'v. 14-15',
        title: 'Evitando Contendas e Manejando Bem a Palavra',
        description: `O Corte Reto. Paulo ordena a Timóteo que lembre a igreja de não "contender de palavras, que para nada aproveita e subverte os ouvintes". Debates teológicos motivados por orgulho são destrutivos. O antídoto é o versículo 15: "Procura apresentar-te a Deus aprovado, como obreiro que não tem de que se envergonhar, que maneja bem a palavra da verdade". A expressão "maneja bem" (orthotomounta) significa "cortar reto" (como um construtor cortando pedras ou um fazendeiro arando um sulco reto). O obreiro fiel não distorce a Bíblia para se adequar à cultura, mas a expõe com precisão e integridade.`
      },
      {
        verseRef: 'v. 16-18',
        title: 'O Perigo dos Falatórios Profanos e a Gangrena',
        description: `A Doença do Falso Ensino. Paulo adverte contra os "falatórios profanos e vãos", porque eles "produzirão maior impiedade" (v. 16). A má teologia sempre leva à má moralidade. Ele usa uma metáfora médica assustadora (v. 17): "E a palavra desses roerá como gangrena (ou câncer)". A falsa doutrina não fica parada; ela se espalha e mata o tecido espiritual da igreja. Ele cita Himeneu e Fileto como exemplos, que "se desviaram da verdade, dizendo que a ressurreição era já feita, e perverteram a fé de alguns" (v. 18). Eles espiritualizaram a ressurreição, negando a esperança futura do corpo.`
      },
      {
        verseRef: 'v. 19',
        title: 'O Firme Fundamento e o Selo de Deus',
        description: `A Segurança em Meio à Apostasia. Quando líderes proeminentes (como Himeneu) caem e a fé de alguns é pervertida, a igreja pode entrar em pânico. Paulo oferece o consolo supremo: "Todavia o fundamento de Deus fica firme, tendo este selo: O Senhor conhece os que são seus, e qualquer que profere o nome de Cristo aparte-se da iniquidade". A igreja verdadeira não será destruída. O selo de Deus tem dois lados: um invisível (a soberania e a eleição divina: Deus conhece os Seus) e um visível (a responsabilidade humana e a santificação: os verdadeiros crentes abandonam o pecado).`
      }
    ],
    conclusion: `2 Timóteo 2:14-19 nos chama à seriedade no trato com as Escrituras. Não podemos brincar com a Palavra de Deus ou nos perdermos em discussões inúteis. O falso ensino é um câncer que deve ser evitado. A nossa segurança em tempos de apostasia não está na nossa própria inteligência, mas no fato de que Deus conhece os Seus e nos chama a uma vida de pureza e fidelidade à verdade.`
  },
  {
    id: '2ti_3_1_5',
    bookId: '2TI',
    chapter: 3,
    startVerse: 1,
    endVerse: 5,
    title: 'Os Tempos Trabalhosos',
    theme: 'A Corrupção Moral dos Últimos Dias e a Falsa Religião',
    introduction: `Paulo profetiza sobre o caráter dos "últimos dias" (o período entre a primeira e a segunda vinda de Cristo). Ele não descreve um declínio tecnológico ou econômico, mas um colapso moral e espiritual profundo. O aspecto mais chocante desta profecia não é que o mundo secular será mau, mas que essa lista terrível de vícios descreve pessoas que estão dentro da esfera religiosa, pessoas que mantêm uma fachada de cristianismo enquanto negam o seu poder transformador.`,
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'O Egoísmo como Raiz de Todos os Males',
        description: `A Trindade Profana. "Sabe, porém, isto: que nos últimos dias sobrevirão tempos trabalhosos (difíceis, perigosos)". A raiz de toda a crise moral é revelada no versículo 2: "Porque haverá homens amantes de si mesmos, avarentos (amantes do dinheiro)...". O amor desordenado por si mesmo e pelo dinheiro substitui o amor a Deus. Dessa raiz narcisista brota uma lista de 18 vícios, começando com "presunçosos, soberbos, blasfemos, desobedientes a pais e mães, ingratos, profanos". A rebelião contra a autoridade divina e humana torna-se a norma.`
      },
      {
        verseRef: 'v. 3-4',
        title: 'A Destruição dos Relacionamentos e o Amor ao Prazer',
        description: `A Morte da Empatia. O narcisismo destrói a capacidade de amar os outros. Eles serão "sem afeto natural (sem amor familiar), irreconciliáveis, caluniadores, incontinentes (sem autocontrole), cruéis, sem amor para com os bons" (v. 3). A sociedade se torna brutal e implacável. O versículo 4 conclui a lista: "traidores, obstinados, orgulhosos, mais amigos dos deleites (prazeres) do que amigos de Deus". A busca frenética pelo prazer pessoal e pelo entretenimento substitui a busca pela glória de Deus.`
      },
      {
        verseRef: 'v. 5',
        title: 'A Forma de Piedade sem Poder',
        description: `A Religião Vazia. O clímax da advertência é o versículo 5: "Tendo aparência de piedade, mas negando a eficácia dela". Estas pessoas não são ateus declarados; elas frequentam igrejas, usam vocabulário religioso e mantêm uma "forma" (fachada, ritual) de cristianismo. No entanto, elas negam o "poder" (a eficácia) do evangelho para transformar as suas vidas, crucificar o seu egoísmo e libertá-las do pecado. Elas querem a religião para se sentirem bem, mas não querem a cruz para morrerem para si mesmas. A ordem de Paulo é drástica: "Destes afasta-te".`
      }
    ],
    conclusion: `2 Timóteo 3:1-5 é um espelho assustadoramente preciso da nossa época. O maior perigo para a igreja não é a perseguição externa, mas a infiltração do narcisismo e do materialismo sob o disfarce da religião. Somos chamados a examinar os nossos próprios corações: a nossa fé é apenas uma casca vazia de rituais, ou é o poder vivo de Deus que nos liberta do amor a nós mesmos e nos capacita a amar a Deus e ao próximo?`
  },
  {
    id: '2ti_3_14_17',
    bookId: '2TI',
    chapter: 3,
    startVerse: 14,
    endVerse: 17,
    title: 'A Inspiração e Suficiência das Escrituras',
    theme: 'A Autoridade da Palavra de Deus para a Salvação e o Ministério',
    introduction: `Em meio à apostasia e aos "tempos trabalhosos" descritos no início do capítulo 3, qual é a âncora do cristão? Paulo aponta Timóteo para a única base segura: as Escrituras Sagradas. Esta passagem é a declaração mais clara e abrangente do Novo Testamento sobre a inspiração divina, a autoridade absoluta e a suficiência prática da Bíblia. A Palavra de Deus é o único antídoto contra o engano espiritual.`,
    points: [
      {
        verseRef: 'v. 14-15',
        title: 'A Firmeza na Tradição e a Sabedoria para a Salvação',
        description: `O Fundamento da Fé. Paulo exorta Timóteo: "Tu, porém, permanece naquilo que aprendeste, e de que foste inteirado, sabendo de quem o tens aprendido". Em tempos de confusão, a resposta não é buscar novidades teológicas, mas permanecer firme na verdade apostólica recebida. Timóteo tinha uma vantagem: "desde a tua meninice sabes as sagradas Escrituras". O propósito principal das Escrituras é revelado: "as quais podem fazer-te sábio para a salvação, pela fé que há em Cristo Jesus". A Bíblia não é um livro de ciências ou autoajuda; o seu objetivo supremo é nos guiar à salvação através de Cristo.`
      },
      {
        verseRef: 'v. 16',
        title: 'A Inspiração Divina e a Utilidade Quádrupla',
        description: `O Sopro de Deus. O versículo 16 é o pilar da doutrina da inspiração: "Toda a Escritura é divinamente inspirada" (theopneustos, literalmente "soprada por Deus"). A Bíblia não é uma coleção de ideias humanas sobre Deus, mas a própria respiração e palavra de Deus registrada por autores humanos. Por ser a voz de Deus, ela é "proveitosa" (útil, autoritativa) para quatro coisas: 1) "para ensinar" (estabelecer a doutrina correta); 2) "para redarguir" (repreender, expor o erro e o pecado); 3) "para corrigir" (restaurar ao caminho certo); 4) "para instruir em justiça" (treinar na vida santa e na obediência diária).`
      },
      {
        verseRef: 'v. 17',
        title: 'A Capacitação Completa do Homem de Deus',
        description: `A Suficiência Absoluta. O resultado de se submeter à Palavra inspirada é visto no versículo 17: "Para que o homem de Deus seja perfeito, e perfeitamente instruído para toda a boa obra". A palavra "perfeito" (artios) significa completo, capaz, totalmente equipado. A Bíblia é suficiente. O cristão não precisa de revelações extrabíblicas, filosofias seculares ou tradições humanas para saber como viver ou como servir a Deus. A Escritura nos fornece todo o equipamento necessário para realizarmos "toda a boa obra" que Deus nos chamou para fazer.`
      }
    ],
    conclusion: `2 Timóteo 3:14-17 nos garante que, em um mundo de mentiras e confusão moral, temos uma rocha inabalável. A Bíblia é o próprio sopro de Deus. Ela tem o poder de nos salvar através de Cristo e a autoridade para nos ensinar, repreender, corrigir e treinar. Se queremos ser cristãos completos e preparados para o serviço, devemos mergulhar profundamente nas Escrituras e nos submetermos totalmente à sua autoridade.`
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
  console.log('Successfully added 4 more new pericopes for 2 Timothy.');
} else {
  console.error('Could not find the end of the pericopes array.');
}
