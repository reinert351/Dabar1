const fs = require('fs');

const newPericopes = [
  {
    id: 'mat_17_1_8',
    bookId: 'MAT',
    chapter: 17,
    startVerse: 1,
    endVerse: 8,
    title: 'A Transfiguração de Jesus',
    theme: 'A Glória Oculta Revelada e a Supremacia de Cristo',
    introduction: `Seis dias após o primeiro anúncio da Sua morte e da exigência de tomar a cruz, Jesus leva Pedro, Tiago e João a um alto monte. Lá, o véu da Sua humanidade é temporariamente levantado, revelando a Sua glória divina pré-encarnada. A Transfiguração não é apenas um milagre visual, mas uma declaração teológica profunda sobre a supremacia de Cristo sobre a Lei e os Profetas, e uma garantia da glória futura que aguarda os crentes após o sofrimento.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Glória Revelada e as Testemunhas do Antigo Testamento',
        description: `O Rosto Brilhante e os Visitantes Celestes. Jesus é transfigurado (metamorphoo) diante deles; o Seu rosto brilha como o sol e as Suas vestes tornam-se brancas como a luz (v. 2). A glória que estava escondida sob a carne humana irrompe. De repente, aparecem Moisés (representando a Lei) e Elias (representando os Profetas) conversando com Ele (v. 3). Lucas nos diz que eles falavam sobre a Sua "partida" (êxodo) que Ele iria cumprir em Jerusalém. Todo o Antigo Testamento aponta para a cruz de Cristo.`
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Confusão de Pedro e a Voz do Pai',
        description: `A Supremacia Absoluta. Pedro, atordoado e sem saber o que dizer, propõe fazer três tendas, igualando Jesus a Moisés e Elias (v. 4). Enquanto ele ainda falava, uma nuvem luminosa (a Shekinah, símbolo da presença de Deus) os cobre, e a voz do Pai interrompe Pedro (v. 5): "Este é o meu Filho amado, em quem me comprazo; escutai-o". O Pai corrige a teologia de Pedro: Jesus não é apenas mais um profeta ou legislador; Ele é o Filho amado, a Palavra final de Deus. A Lei e os Profetas testemunham dEle, mas agora a ordem é ouvir apenas a Ele.`
      },
      {
        verseRef: 'v. 6-8',
        title: 'O Temor dos Discípulos e o Toque da Graça',
        description: `Só a Jesus. Ao ouvirem a voz de Deus, os discípulos caem de rosto em terra, aterrorizados pela santidade divina (v. 6). A religião verdadeira sempre produz temor reverente diante da glória de Deus. Mas Jesus se aproxima, toca-os e diz (v. 7): "Levantai-vos, e não temais". O toque do Salvador encarnado traz graça e conforto. Quando eles levantam os olhos (v. 8), "a ninguém viram, senão unicamente a Jesus". Moisés e Elias se foram. A Lei e os Profetas cumpriram o seu papel. Agora, a visão suficiente e exclusiva para a igreja é Cristo.`
      }
    ],
    conclusion: `Mateus 17:1-8 nos ensina que a cruz não foi um acidente trágico, mas o caminho planejado para a glória. No meio das nossas lutas, dores e do chamado diário para carregar a cruz, precisamos da visão da glória de Cristo para nos sustentar. A Transfiguração nos lembra que a religião, os rituais e os grandes homens de Deus do passado devem dar lugar a uma única visão central: "só a Jesus". Ele é suficiente para a nossa salvação e para a nossa eternidade.`
  },
  {
    id: 'mat_25_14_30',
    bookId: 'MAT',
    chapter: 25,
    startVerse: 14,
    endVerse: 30,
    title: 'A Parábola dos Talentos',
    theme: 'A Mordomia Fiel e o Julgamento das Omissões',
    introduction: `No contexto do Seu retorno iminente, Jesus conta a Parábola dos Talentos para ilustrar o que significa "vigiar". Vigiar não é olhar passivamente para o céu, mas trabalhar ativamente na terra com os recursos que Deus nos confiou. A parábola destrói a ideia de que a salvação nos isenta de responsabilidade e revela que o maior perigo espiritual não é necessariamente cometer grandes pecados escandalosos, mas a omissão covarde e a falta de frutos para o Reino.`,
    points: [
      {
        verseRef: 'v. 14-15',
        title: 'A Soberania do Senhor e a Distribuição dos Talentos',
        description: `Deus é o Dono, Nós Somos Administradores. Um homem, ausentando-se do país, entrega os seus bens aos seus servos (v. 14). Ele distribui os talentos (uma quantia enorme de dinheiro) "a cada um segundo a sua capacidade" (v. 15): a um dá cinco, a outro dois, a outro um. A parábola estabelece que tudo o que temos (tempo, dinheiro, dons espirituais, oportunidades) pertence a Deus. A diversidade de dons não é injustiça de Deus, mas sabedoria soberana; e ter menos talentos não é desculpa para a inatividade.`
      },
      {
        verseRef: 'v. 16-23',
        title: 'O Trabalho Diligente e a Recompensa da Fidelidade',
        description: `A Mesma Recompensa para Esforços Diferentes. Os servos que receberam cinco e dois talentos saem imediatamente, negociam e dobram o capital (v. 16-17). Quando o senhor retorna para o acerto de contas, ambos apresentam os lucros. A resposta do senhor é exatamente a mesma para ambos (v. 21, 23): "Bem está, servo bom e fiel. Sobre o pouco foste fiel, sobre muito te colocarei; entra no gozo do teu senhor". Deus não nos julga comparando os nossos resultados com os dos outros, mas avaliando a nossa fidelidade em multiplicar aquilo que Ele nos confiou.`
      },
      {
        verseRef: 'v. 24-30',
        title: 'O Medo Paralisante e o Julgamento do Servo Inútil',
        description: `O Pecado da Omissão. O servo de um talento escondeu o dinheiro na terra. A sua justificativa revela uma visão distorcida de Deus (v. 24-25): ele via o senhor como um "homem duro" e, com medo, não fez nada. O senhor o condena não por ter roubado ou assassinado, mas por ser "mau e negligente" (v. 26). O medo o paralisou, e a omissão foi o seu crime. O talento lhe é tirado, e ele é lançado "nas trevas exteriores" (v. 30). A ausência de frutos prova a ausência de verdadeira fé e relacionamento com o Senhor.`
      }
    ],
    conclusion: `Mateus 25:14-30 nos confronta com a realidade do tribunal de Cristo. Não seremos julgados apenas pelo mal que fizemos, mas pelo bem que deixamos de fazer com os dons e recursos que Deus nos deu. A verdadeira fé sempre produz obras e assume riscos para o Reino de Deus. Não importa se você tem cinco talentos ou apenas um; o que importa é se, no último dia, você ouvirá a voz do Mestre dizendo: "Bem está, servo bom e fiel".`
  },
  {
    id: 'luk_12_13_21',
    bookId: 'LUK',
    chapter: 12,
    startVerse: 13,
    endVerse: 21,
    title: 'A Parábola do Rico Insensato',
    theme: 'A Ilusão da Riqueza e a Pobreza Diante de Deus',
    introduction: `Quando um homem pede a Jesus para resolver uma disputa de herança, Jesus recusa o papel de juiz civil e vai direto à raiz do problema: a avareza. Para ilustrar o perigo mortal da ganância, Ele conta a Parábola do Rico Insensato. Esta história é um diagnóstico cirúrgico do materialismo, mostrando como a obsessão por acumular bens terrenos nos cega para a nossa mortalidade e nos deixa totalmente falidos para a eternidade.`,
    points: [
      {
        verseRef: 'v. 13-15',
        title: 'O Pedido Egoísta e o Alerta contra a Avareza',
        description: `A Falsa Medida da Vida. Alguém da multidão pede a Jesus que mande o seu irmão repartir a herança (v. 13). Jesus rejeita ser um mero árbitro financeiro (v. 14) e emite um alerta solene (v. 15): "Acautelai-vos e guardai-vos da avareza; porque a vida de qualquer não consiste na abundância do que possui". O mundo mede o valor e o sucesso de um homem pelo seu patrimônio líquido; Deus mede pelo seu coração. A avareza é a idolatria do "mais", a crença mentirosa de que a segurança e a felicidade vêm do acúmulo de coisas.`
      },
      {
        verseRef: 'v. 16-19',
        title: 'O Sucesso Material e o Monólogo do Egoísmo',
        description: `A Cegueira da Prosperidade. Jesus conta a história de um homem rico cujo campo produziu com abundância (v. 16). O problema não era a riqueza em si, mas o seu egocentrismo. O seu monólogo interno (v. 17-19) é cheio de "eu" e "meu" (meus frutos, meus celeiros, meus bens, minha alma). Ele não agradece a Deus pela colheita, nem pensa em usar a abundância para abençoar os pobres. Ele decide derrubar os celeiros, construir maiores e diz à sua alma: "Alma, tens em depósito muitos bens para muitos anos; descansa, come, bebe e folga". Ele comete o erro fatal de achar que bens materiais podem satisfazer uma alma imortal.`
      },
      {
        verseRef: 'v. 20-21',
        title: 'O Veredito Divino e a Falência Eterna',
        description: `A Loucura Exposta pela Morte. Deus interrompe os planos de aposentadoria do homem rico com um veredito aterrorizante (v. 20): "Louco! esta noite te pedirão a tua alma; e o que tens preparado, para quem será?". A morte expõe a absoluta loucura do materialismo. Ele viveu como se nunca fosse morrer, e morreu deixando tudo para trás. Jesus conclui com a aplicação universal (v. 21): "Assim é aquele que para si ajunta tesouros, e não é rico para com Deus". Ele era o homem mais rico do cemitério, mas entrou na eternidade como um mendigo espiritual.`
      }
    ],
    conclusion: `Lucas 12:13-21 é um antídoto contra a cultura de consumo e acumulação. O Rico Insensato não foi para o inferno por ser rico, mas por fazer da riqueza o seu deus e ignorar o Doador de todas as bênçãos. A verdadeira segurança não está em construir celeiros maiores ou contas bancárias mais gordas, mas em enriquecer o nosso relacionamento com Deus e usar os nossos recursos com generosidade para o Reino. No fim, a única riqueza que levaremos desta vida é aquela que doamos por amor a Cristo.`
  },
  {
    id: 'luk_23_32_43',
    bookId: 'LUK',
    chapter: 23,
    startVerse: 32,
    endVerse: 43,
    title: 'A Crucificação e o Ladrão Arrependido',
    theme: 'A Graça no Último Suspiro e a Promessa do Paraíso',
    introduction: `O Calvário é o palco da maior injustiça da história e, simultaneamente, da maior demonstração da graça de Deus. Jesus é crucificado entre dois criminosos, cumprindo a profecia de que seria "contado com os transgressores". No meio da agonia, das zombarias e da escuridão, ocorre um dos diálogos mais extraordinários da Bíblia. A conversão do ladrão na cruz é a prova definitiva de que a salvação é exclusivamente pela graça, mediante a fé, sem qualquer mérito ou obra humana.`,
    points: [
      {
        verseRef: 'v. 32-38',
        title: 'O Cordeiro Mudo e a Oração de Perdão',
        description: `A Graça Incompreensível. Jesus é pregado na cruz entre dois malfeitores. A Sua primeira palavra na cruz não é um grito de dor ou vingança, mas uma oração de intercessão (v. 34): "Pai, perdoa-lhes, porque não sabem o que fazem". Enquanto os soldados repartem as Suas vestes e os líderes religiosos zombam dEle ("salve-se a si mesmo, se este é o Cristo", v. 35), Jesus está ativamente comprando o perdão para os Seus inimigos. A placa acima da Sua cabeça, escrita com ironia por Pilatos ("Este é o Rei dos Judeus", v. 38), declarava a verdade cósmica que o mundo rejeitava.`
      },
      {
        verseRef: 'v. 39-41',
        title: 'O Contraste dos Ladrões e o Temor de Deus',
        description: `A Anatomia do Arrependimento. Um dos malfeitores blasfema, exigindo uma salvação física e egoísta (v. 39): "Se tu és o Cristo, salva-te a ti mesmo, e a nós". O outro, tocado pela graça no último momento da vida, o repreende (v. 40-41). A sua fala demonstra os elementos da verdadeira conversão: 1) Temor a Deus ("Nem tu temes a Deus, estando na mesma condenação?"); 2) Reconhecimento da própria culpa e da justiça do castigo ("E nós, na verdade, com justiça, porque recebemos o que os nossos feitos mereciam"); 3) Reconhecimento da impecabilidade de Cristo ("mas este nenhum mal fez").`
      },
      {
        verseRef: 'v. 42-43',
        title: 'O Clamor da Fé e a Garantia do Paraíso',
        description: `A Salvação pela Fé Somente. O ladrão arrependido vira-se para Jesus e faz um pedido simples, mas cheio de fé (v. 42): "Senhor, lembra-te de mim, quando entrares no teu reino". Ele não tem obras para oferecer, não pode descer da cruz para ser batizado, não pode restituir o que roubou. Ele tem apenas a sua fé na misericórdia do Rei moribundo. Jesus responde com a maior garantia do universo (v. 43): "Em verdade te digo que hoje estarás comigo no Paraíso". A salvação é imediata ("hoje"), relacional ("comigo") e gloriosa ("no Paraíso").`
      }
    ],
    conclusion: `Lucas 23:32-43 destrói qualquer teologia de salvação por obras ou mérito humano. O ladrão na cruz foi salvo no último minuto da sua vida arruinada, apenas porque confiou na graça do Salvador crucificado ao seu lado. Isso nos ensina que nunca é tarde demais para clamar a Cristo, e que a nossa entrada no céu não depende do nosso currículo moral, mas exclusivamente do sangue derramado na cruz do meio.`
  },
  {
    id: 'jhn_20_19_29',
    bookId: 'JHN',
    chapter: 20,
    startVerse: 19,
    endVerse: 29,
    title: 'A Aparição a Tomé e a Fé que Vence a Dúvida',
    theme: 'A Paz do Cristo Ressurreto e a Cura da Incredulidade',
    introduction: `No domingo da ressurreição, os discípulos estão trancados em uma sala, paralisados pelo medo. Jesus aparece milagrosamente no meio deles, trazendo paz e os comissionando. No entanto, Tomé não estava presente e recusa-se a crer no testemunho dos outros. Oito dias depois, Jesus retorna especificamente para resgatar a fé de um discípulo cético. Esta passagem nos mostra como Deus lida com as nossas dúvidas e culmina na mais alta confissão de divindade de todo o Evangelho de João.`,
    points: [
      {
        verseRef: 'v. 19-23',
        title: 'A Paz, as Cicatrizes e a Missão',
        description: `O Triunfo sobre o Medo. Jesus entra no cenáculo com as portas trancadas e declara (v. 19): "Paz seja convosco". Ele mostra as mãos e o lado (v. 20). As cicatrizes provam que o Cristo ressurreto é o mesmo Jesus crucificado; a cruz não foi apagada, foi glorificada, tornando-se o troféu eterno do Seu amor. A visão do Senhor transforma o medo dos discípulos em alegria. Jesus então os comissiona (v. 21): "Assim como o Pai me enviou, também eu vos envio a vós", e sopra sobre eles o Espírito Santo (v. 22), capacitando-os para a missão de pregar o perdão dos pecados (v. 23).`
      },
      {
        verseRef: 'v. 24-25',
        title: 'O Ceticismo de Tomé e a Exigência de Provas',
        description: `A Dúvida Racional. Tomé, ausente na primeira aparição, ouve o relato entusiasmado dos outros dez, mas declara o seu ceticismo radical (v. 25): "Se eu não vir o sinal dos cravos em suas mãos, e não puser o meu dedo no lugar dos cravos, e não puser a minha mão no seu lado, de maneira nenhuma o crerei". Tomé representa a mente humana que exige provas empíricas e físicas, recusando-se a aceitar o testemunho apostólico. A sua dor e decepção com a cruz o tornaram duro e cínico.`
      },
      {
        verseRef: 'v. 26-29',
        title: 'A Condescendência de Cristo e a Confissão Suprema',
        description: `A Cura da Incredulidade. Oito dias depois, Jesus aparece novamente, com as portas trancadas. Ele não condena Tomé ao inferno pela sua dúvida; Ele oferece com amor exatamente a prova que Tomé exigiu (v. 27): "Põe aqui o teu dedo, e vê as minhas mãos; e chega a tua mão, e põe-na no meu lado; e não sejas incrédulo, mas crente". A graça condescendente de Cristo quebra o ceticismo de Tomé. Ele não precisa mais tocar; ele responde com a maior confissão teológica do livro (v. 28): "Senhor meu, e Deus meu!". Jesus aceita a adoração e conclui com uma bênção para a igreja futura (v. 29): "Bem-aventurados os que não viram e creram".`
      }
    ],
    conclusion: `João 20:19-29 nos ensina que Jesus é infinitamente paciente com as nossas dúvidas honestas. Ele não nos rejeita quando lutamos para crer, mas vem ao nosso encontro, mesmo com as portas do nosso coração trancadas pelo medo, para nos mostrar as Suas feridas de amor. A fé cristã não é um salto cego no escuro, mas uma resposta racional e espiritual às evidências da ressurreição, culminando na rendição total a Jesus como nosso Senhor e nosso Deus.`
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
  console.log('Successfully added 5 new pericopes for the Gospels (Part 7).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
