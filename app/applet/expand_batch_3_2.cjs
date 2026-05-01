const fs = require('fs');

const expandedPericopes = [
  {
    id: 'gen_48_1_22',
    bookId: 'GEN',
    chapter: 48,
    startVerse: 1,
    endVerse: 22,
    title: 'Jacó Abençoa Efraim e Manassés',
    theme: 'A Adoção Patriarcal e o Cruzamento das Mãos da Graça',
    introduction: 'Próximo da morte, Jacó convoca José e seus dois filhos nascidos no Egito, Manassés e Efraim. Este capítulo não é apenas uma despedida familiar, mas um ato legal e profético de imensa importância teológica. Jacó adota os filhos de José como seus próprios, garantindo a José uma porção dupla na herança de Israel (o direito da primogenitura que Rúben perdeu). O momento mais marcante, no entanto, é quando Jacó, guiado pelo Espírito e não pela visão natural, cruza as mãos para abençoar o mais novo acima do mais velho, reafirmando que a graça de Deus não segue as convenções humanas.',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'A Adoção e a Elevação de José',
        description: 'Jacó, doente e cego pela idade, reúne suas forças para sentar-se na cama. Ele reconta a aparição de Deus (El-Shaddai) em Luz (Betel) e a promessa da terra. Então, ele faz uma declaração surpreendente: "Os teus dois filhos... serão meus; Efraim e Manassés serão meus, como Rúben e Simeão". Jacó está adotando os netos como filhos diretos, elevando-os ao status de cabeças de tribos. Isso significa que a tribo de José receberá duas porções na Terra Prometida, o privilégio legal do primogênito (1 Crônicas 5:1-2).'
      },
      {
        verseRef: 'v. 8-16',
        title: 'A Bênção e a Invocação do Anjo Redentor',
        description: 'José traz os filhos para perto. Jacó os beija e abraça, maravilhando-se com a bondade de Deus que lhe permitiu ver não apenas José, mas também sua descendência. Jacó profere uma bênção trinitária profunda: ele invoca o Deus diante de quem andaram seus pais, o Deus que o sustentou (pastoreou) toda a sua vida, e "o Anjo que me livrou (redimiu) de todo o mal". Esta é a primeira vez na Bíblia que Deus é chamado de Pastor e Redentor. Jacó reconhece que sua vida foi preservada não por sua própria astúcia, mas pela graça redentora de Deus.'
      },
      {
        verseRef: 'v. 17-22',
        title: 'O Cruzamento das Mãos e a Soberania da Graça',
        description: 'José posiciona os filhos cuidadosamente: Manassés (o mais velho) à direita de Jacó, e Efraim (o mais novo) à esquerda. Mas Jacó cruza as mãos propositalmente, colocando a mão direita sobre a cabeça de Efraim. José tenta corrigir o pai, achando que era um erro da cegueira. Jacó recusa: "Eu o sei, meu filho, eu o sei". Ele profetiza que o mais novo será maior que o mais velho. Assim como Deus escolheu Isaque sobre Ismael, e Jacó sobre Esaú, Ele escolhe Efraim sobre Manassés. A graça de Deus cruza as mãos das expectativas humanas e da tradição.'
      }
    ],
    conclusion: 'A bênção de Efraim e Manassés é um lembrete poderoso de que as bênçãos de Deus não são distribuídas com base no mérito natural, na ordem de nascimento ou nas expectativas da sociedade. A graça é soberana. Além disso, a confissão final de Jacó sobre o Deus que o "pastoreou" e o "redimiu" mostra o amadurecimento de um homem que passou a vida tentando controlar seu próprio destino, mas que no fim reconheceu que foi a mão invisível do Bom Pastor que o guiou em cada passo do caminho.'
  },
  {
    id: 'gen_49_1_28',
    bookId: 'GEN',
    chapter: 49,
    startVerse: 1,
    endVerse: 28,
    title: 'As Profecias de Jacó sobre Seus Filhos',
    theme: 'O Julgamento do Caráter e o Surgimento do Leão de Judá',
    introduction: 'Gênesis 49 é um dos capítulos proféticos mais importantes do Antigo Testamento. Jacó, em seu leito de morte, reúne seus doze filhos para declarar "o que vos há de acontecer nos dias vindouros". Estas não são meras bênçãos paternas, mas oráculos divinamente inspirados que delineiam o destino das doze tribos de Israel com base no caráter e nas ações passadas de seus fundadores. O clímax do capítulo é a profecia messiânica sobre Judá, que estabelece a linhagem real da qual viria o Cristo.',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'A Perda da Primogenitura: Rúben, Simeão e Levi',
        description: 'Jacó começa com os três filhos mais velhos, mas em vez de bênçãos, profere juízos severos. Rúben, o primogênito, perde sua excelência por ser "impetuoso como a água" e por ter profanado o leito de seu pai (Gn 35:22). Simeão e Levi são amaldiçoados por sua ira violenta e cruel no massacre de Siquém (Gn 34). Jacó profetiza que eles serão divididos e espalhados em Israel. (Mais tarde, a tribo de Simeão seria absorvida por Judá, e a tribo de Levi, embora espalhada, teria sua maldição transformada em bênção ao se tornarem os sacerdotes da nação).'
      },
      {
        verseRef: 'v. 8-12',
        title: 'A Realeza de Judá e o Siló',
        description: 'A bênção de Judá é a mais gloriosa. Embora fosse o quarto filho, ele recebe a promessa do domínio real. Seus irmãos o louvarão e se prostrarão diante dele. Judá é comparado a um leão invencível. O versículo 10 é a profecia messiânica central: "O cetro não se arredará de Judá, nem o legislador dentre seus pés, até que venha Siló (Aquele a quem pertence, ou o Pacífico); e a ele se congregarão os povos". Esta é a promessa de que a realeza pertenceria a Judá (cumprida em Davi) até a vinda do Messias definitivo (Jesus Cristo), que governará sobre todas as nações.'
      },
      {
        verseRef: 'v. 13-28',
        title: 'Os Destinos das Outras Tribos e a Bênção de José',
        description: 'Jacó profetiza sobre os outros filhos com metáforas vívidas: Zebulom (portos), Issacar (jumento de carga), Dã (serpente no caminho), Gade (guerreiro), Aser (fartura), e Naftali (gazela solta). A bênção de José é a mais longa e afetuosa. José é um "ramo frutífero junto à fonte". Jacó relembra como os arqueiros (seus irmãos e inimigos) atiraram contra ele, mas o seu arco permaneceu firme pelas mãos do "Poderoso de Jacó", do "Pastor" e da "Pedra de Israel". José recebe bênçãos dos céus, do abismo e da fertilidade, coroando aquele que foi separado de seus irmãos.'
      }
    ],
    conclusion: 'As profecias de Jacó demonstram que o caráter tem consequências geracionais. Os pecados de Rúben, Simeão e Levi custaram-lhes a liderança da nação. No entanto, a profecia sobre Judá brilha como um farol de esperança. Deus, em Sua graça, escolheu a tribo de Judá (um homem que também teve falhas graves, mas que demonstrou arrependimento sacrifical) para ser a linhagem do Rei dos reis. Toda a história bíblica a partir deste ponto flui em direção ao cumprimento da promessa de que o Leão da Tribo de Judá reinará para sempre.'
  },
  {
    id: 'gen_50_1_14',
    bookId: 'GEN',
    chapter: 50,
    startVerse: 1,
    endVerse: 14,
    title: 'A Morte e o Sepultamento de Jacó',
    theme: 'O Luto, a Honra e a Esperança da Terra Prometida',
    introduction: 'A morte de Jacó marca o fim da era dos grandes patriarcas. Gênesis 50:1-14 descreve o luto prolongado e o funeral majestoso concedido a Jacó, refletindo o imenso respeito que José havia conquistado no Egito. No entanto, o aspecto mais teológico deste evento não é a pompa egípcia, mas a insistência absoluta de Jacó em não ser enterrado no Egito. O sepultamento de Jacó na caverna de Macpela, em Canaã, é um ato final de fé nas promessas de Deus e uma âncora profética para o futuro Êxodo da nação.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Luto de José e o Embalsamamento',
        description: 'A reação imediata de José à morte do pai é de profunda dor humana: ele se lança sobre o rosto do pai, chora e o beija. José ordena que os médicos egípcios embalsamem Jacó. O processo de embalsamamento (mumificação) leva quarenta dias, e os egípcios choram por Jacó durante setenta dias (um período de luto reservado quase exclusivamente para a realeza). Embora o embalsamamento fosse uma prática pagã egípcia, aqui é usado providencialmente para preservar o corpo para a longa viagem de volta a Canaã.'
      },
      {
        verseRef: 'v. 4-9',
        title: 'A Permissão de Faraó e a Grande Caravana',
        description: 'José, respeitando o protocolo da corte, pede permissão a Faraó para cumprir o juramento feito a seu pai de enterrá-lo em Canaã. Faraó consente. O funeral que se segue é um dos maiores registrados na antiguidade. Uma procissão massiva sobe do Egito: todos os servos de Faraó, os anciãos da corte, os anciãos da terra do Egito, além de toda a casa de José e seus irmãos. Carros e cavaleiros acompanham a comitiva. A glória do Egito curva-se para honrar o patriarca de Israel.'
      },
      {
        verseRef: 'v. 10-14',
        title: 'O Pranto em Atade e o Sepultamento em Macpela',
        description: 'Ao chegarem à eira de Atade, além do Jordão, eles fazem um pranto tão grande e pesado durante sete dias que os cananeus locais ficam maravilhados e chamam o lugar de Abel-Mizraim ("O Pranto dos Egípcios"). Finalmente, os filhos de Jacó cumprem a ordem do pai: eles o sepultam na caverna do campo de Macpela, em frente a Manre (Hebrom), o túmulo que Abraão havia comprado, onde estavam enterrados Abraão, Sara, Isaque, Rebeca e Lia. Após o sepultamento, José e todos os que subiram com ele retornam ao Egito.'
      }
    ],
    conclusion: 'O sepultamento de Jacó em Canaã foi o seu último grande ato de fé (Hebreus 11:21-22). Mesmo desfrutando do conforto e da honra do Egito, Jacó sabia que o Egito não era o seu lar. Ao exigir ser enterrado na Terra Prometida, ele estava plantando a semente da esperança no coração de seus descendentes. O túmulo de Jacó em Canaã seria um lembrete silencioso e perpétuo para as futuras gerações escravizadas de que o Egito era apenas uma morada temporária, e que o destino final deles estava nas promessas de Deus.'
  },
  {
    id: 'gen_50_15_26',
    bookId: 'GEN',
    chapter: 50,
    startVerse: 15,
    endVerse: 26,
    title: 'O Perdão Final e a Morte de José',
    theme: 'A Soberania de Deus sobre o Mal e a Esperança do Êxodo',
    introduction: 'O livro de Gênesis termina com a resolução final do conflito entre os irmãos e a morte de José. Com a morte do pai, o medo antigo ressurge no coração dos irmãos de José: será que ele estava apenas esperando Jacó morrer para se vingar? A resposta de José a este medo é uma das declarações teológicas mais sublimes de toda a Escritura, resumindo a mensagem central do livro de Gênesis: a providência soberana de Deus que transforma o mal humano em salvação. O livro que começou com a vida em um jardim termina com um caixão no Egito, mas apontando firmemente para a redenção futura.',
    points: [
      {
        verseRef: 'v. 15-18',
        title: 'O Medo dos Irmãos e a Mensagem de Perdão',
        description: 'A culpa é um fardo pesado. Os irmãos de José projetam seus próprios corações não perdoadores nele. Eles enviam um mensageiro (ou uma mensagem) dizendo que Jacó, antes de morrer, ordenou que José perdoasse a transgressão deles. Em seguida, eles mesmos vêm, prostram-se diante dele (cumprindo os sonhos mais uma vez) e se oferecem como escravos. José chora ao ouvir isso. Ele chora porque percebe que, após todos esses anos e todas as demonstrações de amor, eles ainda não haviam compreendido a profundidade da sua graça.'
      },
      {
        verseRef: 'v. 19-21',
        title: 'A Teologia da Providência: O Mal Transformado em Bem',
        description: 'A resposta de José é o ápice teológico de Gênesis: "Não temais; porventura estou eu em lugar de Deus?". José recusa o papel de juiz vingador. Então, ele profere a frase que define sua vida: "Vós bem intentastes mal contra mim; porém Deus o intentou para bem, para fazer como se vê neste dia, para conservar muita gente com vida". José não minimiza o pecado deles (foi mal), mas reconhece que a soberania de Deus é maior que a maldade humana. Deus usou o pecado deles como o próprio instrumento para a salvação deles. José os consola e promete sustentá-los.'
      },
      {
        verseRef: 'v. 22-26',
        title: 'A Morte de José e a Promessa da Visitação',
        description: 'José vive 110 anos e vê a terceira geração de Efraim. Em seu leito de morte, ele não fala sobre suas glórias no Egito, mas sobre as promessas de Deus: "Eu morro; mas Deus certamente vos visitará, e vos fará subir desta terra à terra que jurou a Abraão, a Isaque e a Jacó". José faz os filhos de Israel jurarem que, quando Deus os visitar (no Êxodo), eles levarão os seus ossos para Canaã. José morre, é embalsamado e colocado num caixão no Egito. O caixão de José permaneceu insepulto por mais de 400 anos como um monumento de fé e uma promessa de libertação.'
      }
    ],
    conclusion: 'A declaração de José ("Deus o intentou para bem") é a versão do Antigo Testamento de Romanos 8:28. Ela nos ensina que nenhum plano maligno pode frustrar os propósitos redentores de Deus. A cruz de Cristo é a prova definitiva disso: o maior ato de maldade humana (a crucificação do Filho de Deus) foi o instrumento que Deus usou para a maior salvação da história. O livro de Gênesis termina com um caixão, lembrando-nos da realidade da morte e do exílio, mas os ossos de José apontam para a esperança inabalável de que Deus visitará o Seu povo e os levará para o Lar.'
  },
  {
    id: 'exo_1_1_22',
    bookId: 'EXO',
    chapter: 1,
    startVerse: 1,
    endVerse: 22,
    title: 'A Opressão no Egito',
    theme: 'O Crescimento na Aflição e a Resistência Temerosa a Deus',
    introduction: 'O livro de Êxodo começa fazendo a ponte com Gênesis, listando os filhos de Israel que desceram ao Egito. No entanto, o cenário muda drasticamente. Séculos se passaram, os patriarcas morreram, e a pequena família de 70 pessoas se transformou em uma nação numerosa, cumprindo a promessa de Deus a Abraão. Mas a bênção do crescimento atrai a hostilidade do mundo. Levanta-se um novo rei que não conhecia José, e o refúgio de Gósen se transforma em uma fornalha de escravidão. Êxodo 1 estabelece o palco para a grande narrativa da redenção: um povo oprimido por um império cruel, precisando desesperadamente da intervenção divina.',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'O Cumprimento da Promessa de Multiplicação',
        description: 'O texto lista os nomes dos filhos de Jacó para mostrar a continuidade da aliança. A geração de José morre, mas a promessa de Deus vive. O versículo 7 usa uma linguagem explosiva, ecoando o mandato da criação (Gn 1:28): os filhos de Israel "frutificaram, aumentaram muito, e multiplicaram-se, e foram fortalecidos grandemente; de maneira que a terra se encheu deles". A bênção de Deus sobre Israel é inegável e imparável, mesmo em solo estrangeiro.'
      },
      {
        verseRef: 'v. 8-14',
        title: 'O Novo Faraó e a Escravidão Amarga',
        description: 'Levanta-se um novo rei "que não conhecera a José" (uma amnésia política deliberada). Faraó vê o crescimento de Israel não como uma bênção, mas como uma ameaça à segurança nacional. Ele propõe agir "sabiamente" (astutamente) para contê-los. A estratégia é a escravidão brutal: construção de cidades-celeiros (Pitom e Ramessés) com rigor e amargura de espírito. No entanto, a astúcia humana falha contra a providência divina: "mas quanto mais os afligiam, tanto mais se multiplicavam e tanto mais cresciam". A opressão não pode anular a bênção de Deus.'
      },
      {
        verseRef: 'v. 15-22',
        title: 'O Decreto de Morte e o Temor das Parteiras',
        description: 'Frustrado, Faraó escala a violência do trabalho escravo para o genocídio. Ele ordena às parteiras hebréias (Sifrá e Puá) que matem todos os meninos recém-nascidos. Mas as parteiras "temeram a Deus, e não fizeram como o rei do Egito lhes dissera". A desobediência civil delas é um ato de fé heroica: elas temiam mais o Deus invisível do que o monarca visível. Deus abençoa as parteiras, dando-lhes famílias. Faraó, então, emite um decreto público e desesperado a todo o seu povo: todo menino hebreu deve ser lançado no rio Nilo. O rio que dava vida ao Egito se torna um instrumento de morte.'
      }
    ],
    conclusion: 'Êxodo 1 nos ensina que a bênção de Deus frequentemente atrai a oposição do mundo. A igreja, assim como Israel, muitas vezes cresce mais forte sob perseguição. A história de Faraó é um aviso sobre a futilidade de lutar contra os propósitos de Deus; quanto mais ele tentava esmagar Israel, mais eles cresciam. As parteiras Sifrá e Puá são exemplos atemporais de coragem moral, lembrando-nos que quando as leis dos homens entram em conflito direto com as leis de Deus, "mais importa obedecer a Deus do que aos homens" (Atos 5:29).'
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
console.log(`Expanded ${replacedCount} pericopes (Batch 3.2).`);
