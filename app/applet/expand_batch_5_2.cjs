const fs = require('fs');

const expandedPericopes = [
  {
    id: 'exo_20_18_26',
    bookId: 'EXO',
    chapter: 20,
    startVerse: 18,
    endVerse: 26,
    title: 'O Temor do Povo e as Leis do Altar',
    theme: 'A Necessidade de um Mediador e a Adoração sem Artifícios',
    introduction: 'Imediatamente após Deus proferir os Dez Mandamentos com Sua própria voz, a reação do povo é de pânico absoluto. Êxodo 20:18-26 descreve o recuo aterrorizado de Israel diante da santidade divina e o pedido desesperado por um mediador. Moisés explica que o terror tinha um propósito pedagógico: produzir o temor do Senhor. Em seguida, Deus dá as primeiras instruções sobre como Ele deve ser adorado, proibindo ídolos e estabelecendo regras estritas para a construção de altares, enfatizando que a adoração verdadeira não depende da arte humana, mas da revelação divina.',
    points: [
      {
        verseRef: 'v. 18-21',
        title: 'O Pânico e o Pedido por um Mediador',
        description: 'Ouvindo os trovões, o som da buzina e vendo o monte fumegando, o povo não suporta a experiência direta com Deus. Eles se retiram e ficam de longe. Eles imploram a Moisés: "Fala tu conosco, e ouviremos: e não fale Deus conosco, para que não morramos". O povo reconhece sua pecaminosidade e a impossibilidade de estar diante de um Deus santo sem ser consumido. Moisés os tranquiliza, explicando que Deus veio para "prová-los" e para que o "seu temor esteja diante de vós, a fim de que não pequeis". O temor de Deus é o antídoto contra o pecado. O povo fica de longe, enquanto Moisés se aproxima da "escuridão onde Deus estava".'
      },
      {
        verseRef: 'v. 22-23',
        title: 'A Proibição Absoluta da Idolatria',
        description: 'Deus fala a Moisés desde os céus e reafirma o princípio central da adoração: a exclusividade. "Não fareis outros deuses comigo; deuses de prata ou deuses de ouro não fareis para vós". Tendo acabado de sair do Egito (uma cultura saturada de ídolos), a tentação de materializar a divindade era imensa. Deus proíbe qualquer tentativa de reduzi-Lo a uma imagem esculpida. Ele é o Deus invisível que fala, não um objeto mudo que pode ser manipulado.'
      },
      {
        verseRef: 'v. 24-26',
        title: 'A Simplicidade do Altar e a Rejeição da Arte Humana',
        description: 'Deus instrui sobre a construção do altar, o local de encontro e sacrifício. O altar deve ser de terra ou de pedras brutas (não lavradas). Se eles usassem ferramentas para esculpir as pedras, o altar seria "profanado". A adoração não deve ser um monumento à habilidade arquitetônica ou artística do homem, mas um lugar de sacrifício simples e humilde. Deus promete: "Em todo o lugar em que eu fizer celebrar a memória do meu nome, virei a ti e te abençoarei". Além disso, o altar não deve ter degraus, para evitar a exposição da nudez (uma rejeição aos rituais pagãos que frequentemente envolviam imoralidade).'
      }
    ],
    conclusion: 'A reação do povo no Sinai sublinha a necessidade desesperada da humanidade por um Mediador. Nós não podemos nos aproximar de Deus por nossos próprios méritos sem sermos consumidos. Jesus Cristo é o Mediador perfeito que o povo pediu, Aquele que suportou o terror do juízo para que pudéssemos ouvir a voz de Deus em graça. As leis do altar nos lembram que Deus rejeita a adoração baseada na performance ou na ostentação humana ("pedras lavradas"). Ele busca corações quebrantados que se aproximam dEle através da simplicidade do sacrifício perfeito de Cristo.'
  },
  {
    id: 'exo_23_20_33',
    bookId: 'EXO',
    chapter: 23,
    startVerse: 20,
    endVerse: 33,
    title: 'O Anjo e as Promessas da Conquista',
    theme: 'A Liderança Divina, a Obediência Exigida e a Vitória Progressiva',
    introduction: 'Após a entrega do "Livro da Aliança" (as leis civis e sociais), Deus conclui com uma série de promessas e advertências cruciais para a jornada e a conquista de Canaã. Êxodo 23:20-33 introduz a figura misteriosa e poderosa do "Anjo do Senhor", que guiará o povo. O texto estabelece o princípio da guerra santa: a vitória sobre as nações cananeias não dependerá da força militar de Israel, mas da sua obediência exclusiva a Deus e da recusa absoluta em fazer alianças com a idolatria da terra.',
    points: [
      {
        verseRef: 'v. 20-23',
        title: 'A Liderança e a Autoridade do Anjo',
        description: 'Deus promete enviar um Anjo adiante do povo para guardá-los no caminho e levá-á-los ao lugar preparado. Este não é um anjo comum. Deus adverte: "Guarda-te diante dele, e ouve a sua voz... porque o meu nome está nele". Este Anjo tem a autoridade de perdoar ou não perdoar transgressões, uma prerrogativa exclusiva de Deus. A maioria dos teólogos identifica este Anjo como uma teofania pré-encarnada de Cristo. Se Israel obedecer a este Anjo, Deus será inimigo dos seus inimigos.'
      },
      {
        verseRef: 'v. 24-26',
        title: 'A Destruição da Idolatria e a Promessa de Bênção',
        description: 'A condição para a vitória é a intolerância radical com a idolatria. Israel não deve se inclinar aos deuses cananeus, mas deve "destruí-los totalmente" e quebrar suas estátuas. A adoração exclusiva ao Senhor trará bênçãos abrangentes sobre a vida nacional: Deus abençoará o pão e a água, tirará as enfermidades do meio deles, impedirá o aborto e a esterilidade, e garantirá longevidade ("o número dos teus dias cumprirei"). A saúde e a prosperidade da nação estavam diretamente ligadas à sua fidelidade espiritual.'
      },
      {
        verseRef: 'v. 27-33',
        title: 'A Conquista Progressiva e o Perigo das Alianças',
        description: 'Deus promete enviar o Seu "terror" e "vespões" adiante de Israel para expulsar os inimigos. No entanto, a conquista não será instantânea: "Pouco a pouco os lançarei de diante de ti, até que te multipliques e possuas a terra por herança". Se a terra fosse esvaziada de uma vez, as feras do campo se multiplicariam. Deus age com sabedoria estratégica. O capítulo termina com uma advertência severa: Israel não deve fazer aliança com os habitantes da terra nem com seus deuses, pois eles seriam um "laço" (uma armadilha mortal) que os levaria a pecar contra o Senhor.'
      }
    ],
    conclusion: 'A promessa do Anjo nos garante que Deus não nos envia para a batalha sozinhos; Cristo vai adiante de nós. A estratégia da "conquista progressiva" (pouco a pouco) é um princípio espiritual profundo: Deus muitas vezes nos dá vitórias e crescimento espiritual gradualmente, para que possamos administrar as bênçãos sem sermos destruídos pelo orgulho ou pelos "animais selvagens" da nossa própria carne. A advertência final permanece válida: não podemos fazer alianças com os ídolos deste mundo sem que eles se tornem uma armadilha para a nossa alma.'
  },
  {
    id: 'exo_24_1_11',
    bookId: 'EXO',
    chapter: 24,
    startVerse: 1,
    endVerse: 11,
    title: 'A Confirmação da Aliança',
    theme: 'O Sangue da Aliança, o Compromisso do Povo e a Visão de Deus',
    introduction: 'Êxodo 24 é um dos capítulos mais grandiosos do Antigo Testamento. Ele descreve a cerimônia formal de ratificação da Aliança Sinaítica entre Deus e Israel. Após ouvir as leis, o povo concorda em obedecer. A aliança é então selada com sacrifícios e com a aspersão de sangue, estabelecendo o princípio de que não há comunhão com Deus sem expiação. O clímax da cerimônia é uma refeição pactual no topo do monte, onde os líderes de Israel têm uma visão deslumbrante da glória de Deus e, incrivelmente, sobrevivem para comer e beber em Sua presença.',
    points: [
      {
        verseRef: 'v. 1-4a',
        title: 'O Chamado e o Compromisso Unânime',
        description: 'Deus chama Moisés, Arão, Nadabe, Abiú e setenta anciãos para subirem ao monte, mas apenas Moisés pode se aproximar do Senhor. Moisés desce e relata ao povo todas as palavras e estatutos do Senhor. A resposta do povo é unânime e resoluta: "Todas as palavras que o Senhor tem falado, faremos". Moisés, então, escreve todas as palavras do Senhor (o "Livro da Aliança"), documentando os termos do pacto.'
      },
      {
        verseRef: 'v. 4b-8',
        title: 'O Altar, os Sacrifícios e o Sangue da Aliança',
        description: 'De manhã cedo, Moisés edifica um altar ao pé do monte e ergue doze colunas de pedra (representando as doze tribos). Jovens oferecem holocaustos e sacrifícios pacíficos de bois. Moisés realiza um ato profundamente simbólico: ele coloca metade do sangue em bacias e a outra metade ele asperge sobre o altar (representando Deus). Após ler o Livro da Aliança e o povo confirmar novamente sua obediência, Moisés asperge o sangue das bacias sobre o povo, declarando: "Eis aqui o sangue da aliança que o Senhor tem feito convosco". O sangue une as duas partes e expia os pecados, tornando a aliança válida.'
      },
      {
        verseRef: 'v. 9-11',
        title: 'A Visão da Glória e o Banquete Pactual',
        description: 'Moisés, Arão, seus filhos e os setenta anciãos sobem o monte. O que acontece a seguir é impressionante: "E viram o Deus de Israel". Eles não viram a face de Deus (o que seria fatal), mas viram o que estava debaixo de Seus pés: "como uma obra de pedra de safira, e como o próprio céu na sua clareza". Apesar de verem a manifestação divina, Deus "não estendeu a sua mão" contra eles para destruí-los. Em vez disso, eles "viram a Deus, e comeram e beberam". É a refeição que sela a aliança, um momento de paz e comunhão inimaginável entre o Deus santo e homens pecadores.'
      }
    ],
    conclusion: 'A cerimônia de Êxodo 24 é a sombra da qual Cristo é a realidade. Quando Jesus instituiu a Ceia, Ele usou as exatas palavras de Moisés, mas com uma diferença eterna: "Este cálice é o Novo Testamento no meu sangue" (Lucas 22:20). A Antiga Aliança foi selada com sangue de animais sobre um povo que logo a quebraria. A Nova Aliança é selada com o sangue do Filho de Deus, que garante o perdão eterno. O banquete dos anciãos no Sinai aponta para a Ceia das Bodas do Cordeiro, onde todos os redimidos comerão e beberão na presença gloriosa de Deus, sem medo de condenação.'
  },
  {
    id: 'exo_24_12_18',
    bookId: 'EXO',
    chapter: 24,
    startVerse: 12,
    endVerse: 18,
    title: 'Moisés Sobe ao Monte',
    theme: 'A Glória Consumidora, a Espera e a Revelação Escrita',
    introduction: 'Após a ratificação da aliança, Deus chama Moisés para uma intimidade ainda maior. Êxodo 24:12-18 descreve a ascensão de Moisés ao cume do Sinai para receber as tábuas de pedra escritas pelo próprio dedo de Deus. Este texto destaca a majestade aterrorizante da glória de Deus (a Shekinah), que repousa sobre o monte como um fogo consumidor. A longa espera de Moisés no monte testa a paciência do povo lá embaixo, preparando o cenário tanto para a revelação do Tabernáculo quanto para a tragédia do Bezerro de Ouro.',
    points: [
      {
        verseRef: 'v. 12-14',
        title: 'O Chamado para as Tábuas de Pedra e a Delegação',
        description: 'Deus chama Moisés para subir ao monte e esperar lá, com um propósito específico: "dar-te-ei tábuas de pedra e a lei, e os mandamentos que tenho escrito, para os ensinar". A lei oral agora se tornará um documento permanente, gravado em pedra pelo próprio Deus. Moisés sobe acompanhado apenas por seu fiel servidor, Josué. Antes de partir, Moisés delega a liderança temporária do acampamento a Arão e Hur, instruindo o povo a levar suas questões legais a eles.'
      },
      {
        verseRef: 'v. 15-17',
        title: 'A Nuvem e a Glória Consumidora',
        description: 'Quando Moisés sobe, uma nuvem cobre o monte. A "glória do Senhor" (Shekinah) repousa sobre o Sinai. Durante seis dias, a nuvem cobre o monte, um período de silêncio e preparação. Para os filhos de Israel que observavam do acampamento, a aparência da glória do Senhor no cume do monte era "como um fogo consumidor". A santidade de Deus é bela, mas também é terrível e inacessível para aqueles que não são convidados.'
      },
      {
        verseRef: 'v. 16b-18',
        title: 'O Chamado no Sétimo Dia e os Quarenta Dias',
        description: 'No sétimo dia, Deus chama Moisés do meio da nuvem. Moisés, com extraordinária coragem e fé, entra no meio da nuvem e sobe ao cume do monte. Ele permanece lá "quarenta dias e quarenta noites" (um período bíblico clássico de provação e revelação, sem comer nem beber, sustentado sobrenaturalmente). Durante este tempo, ele receberá as instruções detalhadas para a construção do Tabernáculo (capítulos 25-31), o lugar onde a glória que estava no monte desceria para habitar no meio do povo.'
      }
    ],
    conclusion: 'A ascensão de Moisés ao monte nos lembra que a revelação profunda de Deus exige separação, tempo e espera. Moisés teve que esperar seis dias antes que Deus falasse, ensinando-nos que não podemos apressar a voz de Deus. A glória como "fogo consumidor" deve inspirar em nós um profundo temor reverente. Enquanto Moisés estava no monte recebendo o projeto do Tabernáculo (o meio da graça), o povo lá embaixo, incapaz de esperar, logo se voltaria para a idolatria. Isso nos alerta sobre o perigo da impaciência espiritual quando parece que Deus está em silêncio.'
  },
  {
    id: 'exo_25_1_9',
    bookId: 'EXO',
    chapter: 25,
    startVerse: 1,
    endVerse: 9,
    title: 'As Ofertas para o Santuário',
    theme: 'A Oferta Voluntária, o Propósito da Habitação e o Modelo Celestial',
    introduction: 'Êxodo 25 inicia a longa e detalhada seção sobre a construção do Tabernáculo. Após libertar o povo e estabelecer a aliança, o desejo supremo de Deus é revelado: Ele quer habitar no meio deles. No entanto, a casa de Deus não seria construída com impostos forçados, mas com ofertas voluntárias de corações dispostos. Este texto estabelece três princípios fundamentais para a adoração e o serviço a Deus: a generosidade voluntária, o desejo de Deus por intimidade com Seu povo, e a necessidade estrita de seguir o padrão revelado por Deus, e não a imaginação humana.',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'A Oferta do Coração Voluntário',
        description: 'Deus instrui Moisés a pedir uma oferta aos filhos de Israel. O critério para a oferta é crucial: "de todo o homem cujo coração se mover voluntariamente, dele tomareis a minha oferta". Deus não quer doações dadas por obrigação ou constrangimento, mas movidas pela gratidão. Os materiais solicitados são preciosos e variados: ouro, prata, cobre, tecidos finos (azul, púrpura, carmesim), peles, madeira de acácia, azeite e pedras preciosas. Ironicamente, a maioria desses materiais eram os despojos que eles haviam tirado do Egito. Deus pede que eles devolvam uma parte do que Ele mesmo lhes havia dado.'
      },
      {
        verseRef: 'v. 8',
        title: 'O Propósito Supremo: Habitar no Meio Deles',
        description: 'O versículo 8 é o coração de toda a segunda metade do livro de Êxodo: "E me farão um santuário, e habitarei no meio deles". O Deus infinito, que não pode ser contido pelos céus, deseja uma tenda no deserto para estar perto do Seu povo. O Tabernáculo resolveria o problema do Sinai: como um Deus santo pode viver no meio de um povo pecador sem consumi-los? O santuário, com seus sacrifícios e sacerdotes, providenciaria o meio de expiação e comunhão contínua.'
      },
      {
        verseRef: 'v. 9',
        title: 'O Modelo Celestial (O Padrão Exato)',
        description: 'Deus impõe uma restrição absoluta à construção: "Conforme a tudo o que eu te mostrar para modelo do tabernáculo, e para modelo de todos os seus pertences, assim mesmo o fareis". Moisés não tinha liberdade criativa para projetar o santuário. Ele tinha que copiar exatamente o "modelo" (padrão) que lhe foi mostrado no monte. O autor de Hebreus (Hb 8:5) explica que o Tabernáculo terreno era uma "sombra das coisas celestiais". Cada detalhe, medida e material apontava profeticamente para a pessoa e a obra de Jesus Cristo.'
      }
    ],
    conclusion: 'O pedido de ofertas para o Tabernáculo nos ensina que Deus ama quem dá com alegria (2 Coríntios 9:7). Tudo o que temos veio dEle, e a nossa oferta é apenas a devolução grata da Sua própria provisão. O desejo de Deus de "habitar no meio deles" encontrou seu cumprimento final na encarnação, quando o Verbo se fez carne e "tabernaculou" entre nós (João 1:14), e culminará na Nova Jerusalém, onde o tabernáculo de Deus estará com os homens para sempre (Ap 21:3). A exigência do "modelo" nos adverte que não podemos adorar a Deus da nossa própria maneira, mas apenas através do caminho que Ele estabeleceu: Jesus Cristo.'
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
console.log(`Expanded ${replacedCount} pericopes (Batch 5.2).`);
