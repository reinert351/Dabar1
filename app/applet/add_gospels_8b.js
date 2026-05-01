const fs = require('fs');

const newPericopes = [
  {
    id: 'mrk_1_14_20',
    bookId: 'MRK',
    chapter: 1,
    startVerse: 14,
    endVerse: 20,
    title: 'O Chamado dos Primeiros Discípulos',
    theme: 'A Urgência do Reino e o Abandono Radical',
    introduction: `Após a prisão de João Batista, Jesus inicia o Seu ministério público na Galileia com uma mensagem de urgência cósmica: o Reino de Deus chegou. Imediatamente, Ele começa a reunir o núcleo da Sua nova comunidade, chamando quatro pescadores comuns. O chamado de Jesus é caracterizado pela autoridade soberana, e a resposta dos discípulos é marcada por um abandono imediato e radical das suas antigas vidas para segui-Lo.`,
    points: [
      {
        verseRef: 'v. 14-15',
        title: 'O Evangelho do Reino: Arrependimento e Fé',
        description: `O Tempo Está Cumprido. Jesus resume a Sua mensagem (v. 15): "O tempo está cumprido, e o reino de Deus está próximo. Arrependei-vos, e crede no evangelho". O "tempo" não é apenas o relógio avançando, mas o momento decisivo da história da salvação. A longa espera do Antigo Testamento acabou; o Rei chegou. A resposta exigida tem duas faces da mesma moeda: arrependimento (mudança de mente e direção) e fé (confiança absoluta nas boas novas de Cristo).`
      },
      {
        verseRef: 'v. 16-17',
        title: 'O Chamado de Autoridade e a Nova Identidade',
        description: `Vinde Após Mim. Caminhando junto ao Mar da Galileia, Jesus vê Simão e André lançando as redes. Ele não os convida para um seminário teológico, mas emite um comando com autoridade divina (v. 17): "Vinde após mim, e eu farei que sejais pescadores de homens". Jesus toma a profissão deles e a eleva a um propósito eterno. O discipulado cristão não é apenas aprender informações; é seguir uma Pessoa e ser transformado por ela para uma missão de resgate de almas.`
      },
      {
        verseRef: 'v. 18-20',
        title: 'A Resposta Imediata e o Custo do Discipulado',
        description: `Deixando Tudo para Trás. A resposta dos pescadores é impressionante pela sua rapidez. "E eles, deixando logo as suas redes, o seguiram" (v. 18). Um pouco mais adiante, Ele chama Tiago e João. "E, deixando a seu pai Zebedeu no barco com os jornaleiros, foram após ele" (v. 20). Eles abandonaram a sua segurança financeira (as redes) e os seus laços familiares (o pai) para seguir um rabino itinerante. A autoridade da palavra de Cristo tem o poder de quebrar as amarras do mundo e gerar obediência radical.`
      }
    ],
    conclusion: `Marcos 1:14-20 nos lembra que o evangelho não é um convite casual para adicionar um pouco de religião à nossa vida; é uma convocação do Rei do universo para abandonarmos o nosso próprio reino e nos submetermos ao dEle. Jesus ainda passa pelas margens da nossa vida cotidiana, no meio do nosso trabalho, e diz: "Vinde após mim". A verdadeira fé não hesita nem calcula os lucros; ela deixa as "redes" para trás e segue o Mestre.`
  },
  {
    id: 'mrk_2_13_17',
    bookId: 'MRK',
    chapter: 2,
    startVerse: 13,
    endVerse: 17,
    title: 'O Chamado de Levi e o Médico dos Doentes',
    theme: 'A Graça Escandalosa e a Salvação dos Pecadores',
    introduction: `Jesus continua a chocar a sociedade religiosa da Sua época. Depois de curar um paralítico e perdoar os seus pecados, Jesus chama Levi (Mateus), um cobrador de impostos, para ser Seu discípulo. Os cobradores de impostos eram considerados traidores da nação e os piores pecadores. O banquete que se segue na casa de Levi provoca a ira dos fariseus, mas dá a Jesus a oportunidade de declarar a essência do Seu ministério: Ele não veio para os que se acham justos, mas para os doentes espirituais.`,
    points: [
      {
        verseRef: 'v. 13-14',
        title: 'O Chamado do Pior Pecador e a Obediência Imediata',
        description: `A Graça que Alcança o Fundo do Poço. Jesus vê Levi "assentado na alfândega" (v. 14). Levi trabalhava para o Império Romano, extorquindo o seu próprio povo. Ele era rico, mas socialmente e religiosamente banido. Jesus não o evita; Ele o olha e diz: "Segue-me". É um chamado de pura graça, não baseado em mérito, mas na soberania de Cristo. A resposta de Levi é tão radical quanto o chamado: "E, levantando-se, o seguiu". Ele deixou a sua mesa de impostos, o seu dinheiro e a sua carreira lucrativa para seguir a Jesus.`
      },
      {
        verseRef: 'v. 15-16',
        title: 'O Banquete da Graça e a Indignação Religiosa',
        description: `Comendo com os Impuros. Levi dá um grande banquete em sua casa para celebrar a sua nova vida, e convida os seus amigos: "muitos publicanos e pecadores" (v. 15). Jesus e os Seus discípulos sentam-se à mesa com eles. Na cultura oriental, compartilhar uma refeição era um sinal de profunda comunhão e aceitação. Os escribas e fariseus, obcecados com a pureza ritual, ficam escandalizados (v. 16): "Por que come e bebe ele com os publicanos e pecadores?". Para a religião legalista, a santidade é contaminação evitada; para Jesus, a santidade é graça estendida.`
      },
      {
        verseRef: 'v. 17',
        title: 'O Diagnóstico do Médico e o Propósito da Missão',
        description: `Não Vim Chamar os Justos. Jesus ouve a murmuração e responde com um provérbio irrefutável (v. 17): "Os sãos não necessitam de médico, mas sim os que estão doentes". Ele diagnostica a condição espiritual da humanidade: o pecado é uma doença terminal. Em seguida, Ele declara a Sua missão: "eu não vim chamar os justos, mas sim os pecadores, ao arrependimento". A ironia é profunda: não existem pessoas "justas", mas os fariseus achavam que eram. A graça de Cristo não pode salvar aqueles que não reconhecem a sua própria doença.`
      }
    ],
    conclusion: `Marcos 2:13-17 é uma das passagens mais libertadoras do Novo Testamento. O evangelho não é um prêmio para os moralmente perfeitos, mas um hospital para os quebrantados. Jesus não tem medo da nossa sujeira, do nosso passado ou da nossa reputação arruinada. Ele se senta à mesa conosco e nos chama para segui-Lo. O único obstáculo para a salvação é a ilusão farisaica de que não precisamos de um Médico. Quando admitimos a nossa doença espiritual, encontramos em Cristo a cura perfeita.`
  },
  {
    id: 'mrk_12_41_44',
    bookId: 'MRK',
    chapter: 12,
    startVerse: 41,
    endVerse: 44,
    title: 'A Oferta da Viúva Pobre',
    theme: 'A Verdadeira Generosidade e o Olhar de Deus',
    introduction: `Nos últimos dias do Seu ministério no templo, Jesus observa as pessoas dando as suas ofertas no gazofilácio. Esta pequena narrativa contrasta fortemente com a hipocrisia dos escribas que Ele acabara de condenar. Através da oferta de duas pequenas moedas de uma viúva pobre, Jesus redefine completamente a matemática da generosidade no Reino de Deus: Deus não mede as nossas ofertas pelo tamanho do que damos, mas pelo tamanho do que retemos para nós mesmos.`,
    points: [
      {
        verseRef: 'v. 41',
        title: 'O Olhar Atento de Jesus sobre as Ofertas',
        description: `Deus Observa o que Fazemos. "E, estando Jesus assentado defronte da arca do tesouro, observava a maneira como a multidão lançava o dinheiro na arca do tesouro". Jesus não estava distraído; Ele estava deliberadamente observando *como* as pessoas davam. O texto diz que "muitos ricos deitavam muito". Aos olhos humanos, os ricos eram os grandes benfeitores do templo, sustentando a religião com as suas grandes doações. Mas Jesus vê além do valor monetário; Ele vê o coração e a proporção do sacrifício.`
      },
      {
        verseRef: 'v. 42',
        title: 'A Viúva Pobre e as Duas Pequenas Moedas',
        description: `A Oferta Invisível aos Homens. No meio da multidão de ricos, aproxima-se "uma pobre viúva" (v. 42). Naquela sociedade, as viúvas eram o grupo mais vulnerável e desamparado. Ela lança "duas pequenas moedas, que valiam um quadrante" (a menor moeda de cobre em circulação, de valor quase insignificante). Para os tesoureiros do templo, a oferta dela não faria nenhuma diferença no orçamento. Mas ela deu duas moedas; ela poderia ter guardado uma para si mesma para comprar um pedaço de pão, mas ela escolheu dar ambas. A sua oferta foi um ato de confiança total na provisão de Deus.`
      },
      {
        verseRef: 'v. 43-44',
        title: 'A Matemática do Reino e o Sacrifício Total',
        description: `A Maior Oferta do Dia. Jesus chama os Seus discípulos para lhes dar uma lição teológica (v. 43): "Em verdade vos digo que esta pobre viúva deitou mais do que todos os que deitaram na arca do tesouro". Como duas moedas de cobre podem ser mais do que sacos de ouro? Jesus explica a matemática divina (v. 44): "Porque todos ali deitaram do que lhes sobejava, mas esta, da sua pobreza, deitou tudo o que tinha, todo o seu sustento". Os ricos deram das suas sobras; a doação não lhes custou nada. A viúva deu o seu sustento; a doação lhe custou tudo. A generosidade não é medida pela quantia, mas pelo sacrifício.`
      }
    ],
    conclusion: `Marcos 12:41-44 destrói o nosso orgulho financeiro e a nossa tendência de dar a Deus apenas as sobras do nosso tempo, talento e dinheiro. O Senhor não precisa do nosso dinheiro; Ele quer o nosso coração. A viúva pobre nos ensina que a verdadeira adoração é uma entrega radical que confia que Deus cuidará de nós quando dermos tudo a Ele. Aos olhos de Cristo, o sacrifício invisível e humilde é o que ressoa mais alto nos corredores do céu.`
  },
  {
    id: 'mrk_15_33_39',
    bookId: 'MRK',
    chapter: 15,
    startVerse: 33,
    endVerse: 39,
    title: 'A Morte de Jesus e o Véu Rasgado',
    theme: 'O Desamparo do Filho, o Acesso ao Pai e a Confissão do Gentio',
    introduction: `O clímax do Evangelho de Marcos ocorre na cruz. As três horas finais da vida de Jesus são marcadas por trevas sobrenaturais, um grito de abandono cósmico e a morte do Filho de Deus. Imediatamente após o Seu último suspiro, dois eventos extraordinários acontecem: um no coração do templo judaico (o véu rasgado) e outro no coração de um soldado romano (a confissão de fé). A morte de Cristo é o evento que destrói as barreiras entre Deus e a humanidade.`,
    points: [
      {
        verseRef: 'v. 33-36',
        title: 'As Trevas e o Grito de Desamparo',
        description: `O Julgamento Divino. Ao meio-dia, "houve trevas sobre toda a terra, até a hora nona" (v. 33). Estas trevas não foram um eclipse, mas um sinal do julgamento cósmico de Deus contra o pecado. Às três da tarde, Jesus dá um grande grito (v. 34): "Deus meu, Deus meu, por que me desamparaste?". Citando o Salmo 22, Jesus expressa a agonia suprema da cruz: a separação espiritual do Pai. Ele, que não conhecia pecado, foi feito pecado por nós, suportando a ira e o abandono que nós merecíamos.`
      },
      {
        verseRef: 'v. 37-38',
        title: 'O Último Suspiro e o Véu Rasgado',
        description: `O Acesso Direto a Deus. "E Jesus, dando um grande brado, expirou" (v. 37). Ele não morreu de exaustão; Ele entregou a Sua vida com um grito de vitória. No exato momento da Sua morte, ocorre um milagre teológico no templo (v. 38): "E o véu do templo se rasgou em dois, de alto a baixo". O véu separava o Santo dos Santos (a presença de Deus) do resto do templo; apenas o sumo sacerdote podia entrar lá uma vez por ano. O rasgar do véu "de alto a baixo" (ação de Deus) significa que o sacrifício perfeito foi aceito. A barreira do pecado foi destruída.`
      },
      {
        verseRef: 'v. 39',
        title: 'A Confissão do Centurião Romano',
        description: `A Revelação aos Gentios. O primeiro convertido após a morte de Jesus não é um sacerdote judeu, mas o centurião romano encarregado da execução. Ele viu como Jesus sofreu, ouviu o Seu grito final e sentiu o terremoto. A sua conclusão é a confissão central do Evangelho de Marcos (v. 39): "Verdadeiramente este homem era o Filho de Deus". No início do livro, Deus o Pai declarou Jesus como Filho (1:11); no meio, os demônios o reconheceram (3:11); mas no final, é um gentio pagão, aos pés da cruz, que faz a confissão salvadora.`
      }
    ],
    conclusion: `Marcos 15:33-39 é o coração do evangelho. Jesus suportou as trevas e o abandono de Deus para que nós nunca tivéssemos que enfrentá-los. O véu rasgado é o convite permanente de Deus: "O caminho está aberto, venha a mim". Não precisamos mais de sacrifícios de animais ou de mediadores humanos; Cristo fez tudo. E a confissão do centurião nos lembra que a cruz tem o poder de quebrar o coração mais duro. Diante do Filho de Deus crucificado, a única resposta adequada é a adoração e a entrega total.`
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
  console.log('Successfully added 4 new pericopes for Mark (Batch 8b).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
