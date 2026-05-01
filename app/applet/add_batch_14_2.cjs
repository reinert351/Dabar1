const fs = require('fs');

const newPericopes = [
  {
    id: 'jdg_7_1_8',
    bookId: 'JDG',
    chapter: 7,
    startVerse: 1,
    endVerse: 8,
    title: 'Os Trezentos de Gideão',
    theme: 'A Redução do Exército, o Teste Divino e a Glória Exclusiva de Deus',
    introduction: 'Gideão havia reunido um exército de 32.000 homens para lutar contra os midianitas, que eram "como gafanhotos em multidão" (cerca de 135.000 homens). Humanamente falando, Israel já estava em desvantagem de 4 para 1. No entanto, em Juízes 7:1-8, Deus aplica uma matemática invertida. Ele diz a Gideão que o exército é grande demais. O processo de redução do exército de Gideão de 32.000 para apenas 300 homens é uma das lições mais profundas da Bíblia sobre como Deus protege a Sua própria glória e nos ensina a depender exclusivamente do Seu poder.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Problema do Exército Grande e a Despedida dos Medrosos',
        description: 'Deus diz a Gideão: "Muito é o povo que está contigo, para eu dar aos midianitas em sua mão; a fim de que Israel não se glorie contra mim, dizendo: A minha mão me livrou". A preocupação de Deus não é a derrota militar, mas o orgulho espiritual de Israel. Deus ordena que Gideão proclame: "Quem for medroso e tímido, volte". Surpreendentemente, 22.000 homens vão embora. O medo é contagioso e desqualifica para a batalha espiritual.'
      },
      {
        verseRef: 'v. 4-6',
        title: 'O Teste das Águas',
        description: 'Ainda restavam 10.000 homens. Deus diz: "Ainda muito povo há". Ele manda Gideão levá-los às águas para um teste final. O critério de separação é a forma como bebem água: os que se ajoelham e bebem diretamente com a boca na água (9.700 homens) são separados dos que lambem a água levando a mão à boca (300 homens). Os 300 demonstraram vigilância, mantendo a cabeça erguida e os olhos no horizonte, prontos para a batalha mesmo enquanto satisfaziam uma necessidade básica.'
      },
      {
        verseRef: 'v. 7-8',
        title: 'A Escolha dos Trezentos',
        description: 'Deus declara: "Com estes trezentos homens que lamberam as águas vos livrarei, e darei os midianitas na tua mão". Os outros 9.700 são mandados para casa. Gideão fica com apenas 300 homens e as provisões e trombetas do exército que partiu. A desvantagem agora é de 450 para 1. Qualquer possibilidade de vitória humana foi completamente eliminada. Se eles vencerem agora, será inegável que foi um milagre do Senhor.'
      }
    ],
    conclusion: 'A história dos 300 de Gideão nos ensina que Deus não precisa de multidões para realizar a Sua obra; Ele precisa de pessoas totalmente dependentes dEle. Frequentemente, Deus reduz os nossos recursos, as nossas opções e a nossa força para nos levar a um ponto onde não podemos confiar em nós mesmos. O objetivo de Deus é sempre garantir que "nenhuma carne se glorie perante Ele" (1 Coríntios 1:29). Quando nos sentimos em desvantagem, fracos ou em menor número, estamos exatamente na posição onde Deus pode manifestar o Seu poder de forma mais gloriosa.'
  },
  {
    id: 'jdg_7_16_25',
    bookId: 'JDG',
    chapter: 7,
    startVerse: 16,
    endVerse: 25,
    title: 'A Vitória dos Trezentos',
    theme: 'A Estratégia Inusitada, a Luz no Vaso Quebrado e o Pânico Inimigo',
    introduction: 'Com apenas 300 homens contra um exército de 135.000 midianitas, um ataque frontal seria suicídio. Juízes 7:16-25 descreve a estratégia militar mais inusitada da história. Gideão não arma seus homens com espadas e escudos, mas com trombetas, cântaros vazios e tochas. O ataque ocorre no meio da noite. A vitória que se segue não é conquistada pelo derramamento de sangue por parte de Israel, mas pelo terror psicológico e pela confusão que Deus instaura no acampamento inimigo. É uma ilustração vívida de que as armas da nossa milícia não são carnais, mas poderosas em Deus.',
    points: [
      {
        verseRef: 'v. 16-18',
        title: 'As Armas Improváveis e a Ordem de Gideão',
        description: 'Gideão divide os 300 homens em três companhias de 100. Ele lhes dá as "armas": uma trombeta (shofar) na mão direita, e um cântaro vazio com uma tocha acesa dentro na mão esquerda. A ordem é simples: "Olhai para mim, e fazei como eu fizer... tocaremos a trombeta... e direis: Pelo Senhor e por Gideão". A estratégia dependia de sincronia absoluta e obediência cega.'
      },
      {
        verseRef: 'v. 19-22',
        title: 'O Cântaro Quebrado e o Pânico no Acampamento',
        description: 'No princípio da vigília da meia-noite (quando a guarda havia acabado de ser trocada e o acampamento estava sonolento), os 300 homens cercam o arraial. Ao sinal de Gideão, eles tocam as 300 trombetas simultaneamente, quebram os cântaros (revelando a luz das tochas) e gritam: "Espada do Senhor, e de Gideão". O som ensurdecedor, o brilho repentino do fogo e o grito de guerra causam pânico total. Os midianitas, acreditando estarem cercados por um exército imenso, começam a matar uns aos outros na escuridão e fogem.'
      },
      {
        verseRef: 'v. 23-25',
        title: 'A Perseguição e a Vitória Completa',
        description: 'Os 300 homens permanecem parados em seus lugares ao redor do acampamento, apenas assistindo ao livramento de Deus. Após a fuga dos midianitas, Gideão convoca os homens de Naftali, Aser e Manassés (aqueles que haviam sido dispensados anteriormente) para perseguirem os inimigos em fuga. Eles capturam e matam os dois príncipes midianitas, Orebe e Zeebe. A vitória é total e esmagadora.'
      }
    ],
    conclusion: 'A vitória de Gideão é uma poderosa metáfora para a vida cristã. O apóstolo Paulo usa uma imagem semelhante em 2 Coríntios 4:7: "Temos, porém, este tesouro em vasos de barro, para que a excelência do poder seja de Deus, e não de nós". A luz da tocha só pôde brilhar e aterrorizar o inimigo quando o cântaro de barro foi quebrado. Da mesma forma, a luz de Cristo só brilha através de nós quando o nosso "eu" (o nosso orgulho e autossuficiência) é quebrado. A vitória não vem da nossa força (espadas), mas de proclamarmos a Palavra (trombetas) e deixarmos a luz de Deus brilhar através da nossa fraqueza.'
  },
  {
    id: 'jdg_11_29_40',
    bookId: 'JDG',
    chapter: 11,
    startVerse: 29,
    endVerse: 40,
    title: 'O Voto de Jefté',
    theme: 'O Perigo das Palavras Precipitadas, a Tragédia e a Fidelidade ao Juramento',
    introduction: 'Jefté era um guerreiro valente, mas rejeitado por seus irmãos por ser filho de uma prostituta. Quando os amonitas atacam Israel, os líderes de Gileade imploram para que Jefté os lidere. Em Juízes 11, o Espírito do Senhor vem sobre Jefté, garantindo a vitória. No entanto, impulsionado pela insegurança ou por um desejo carnal de garantir o favor divino, Jefté faz um voto precipitado e desnecessário. A vitória militar é ofuscada por uma tragédia familiar devastadora. Este texto é um dos mais sombrios de Juízes, servindo como um alerta eterno sobre o peso das nossas palavras.',
    points: [
      {
        verseRef: 'v. 29-31',
        title: 'O Espírito do Senhor e o Voto Insensato',
        description: 'O texto afirma claramente: "Então o Espírito do Senhor veio sobre Jefté". Ele já tinha o poder de Deus para a vitória. Mas Jefté faz um voto ao Senhor: "Se tu me deres os filhos de Amom na minha mão, aquilo que, saindo da porta de minha casa, me vier ao encontro... será do Senhor, e o oferecerei em holocausto". Jefté tentou barganhar com Deus, prometendo um sacrifício humano (uma prática pagã abominável a Yahweh) em troca de vitória.'
      },
      {
        verseRef: 'v. 32-35',
        title: 'A Vitória e o Encontro Trágico',
        description: 'Deus entrega os amonitas nas mãos de Jefté, e ele os derrota com grande mortandade. Ao retornar vitorioso para sua casa em Mizpá, a tragédia se desenrola: quem sai ao seu encontro, com adufes e danças, é a sua filha única. Ao vê-la, Jefté rasga as suas vestes em desespero e clama: "Ah, filha minha! Muito me abateste... porque abri a minha boca ao Senhor, e não tornarei atrás". A alegria da vitória nacional transforma-se em luto pessoal profundo.'
      },
      {
        verseRef: 'v. 36-40',
        title: 'A Submissão da Filha e o Cumprimento do Voto',
        description: 'A resposta da filha é de uma submissão dolorosa: "Pai meu, se abriste a tua boca ao Senhor, faze de mim como saiu da tua boca". Ela pede apenas dois meses para chorar a sua virgindade pelos montes com suas amigas (pois morrer sem filhos era uma grande tragédia em Israel). Após os dois meses, Jefté "cumpriu nela o seu voto que tinha feito". O texto não detalha o sacrifício, mas deixa claro que a linhagem de Jefté terminou ali.'
      }
    ],
    conclusion: 'O voto de Jefté é uma lição terrível sobre o perigo de tentar manipular Deus. Deus não precisa das nossas barganhas ou promessas extravagantes para nos abençoar; Ele age por Sua própria graça. Eclesiastes 5:2 adverte: "Não te precipites com a tua boca... porque Deus está nos céus, e tu estás sobre a terra". Além disso, a história mostra a ignorância teológica daquela geração: Deus havia proibido estritamente o sacrifício humano (Levítico 18:21). O zelo religioso sem o conhecimento da Palavra de Deus frequentemente resulta em tragédia e dor.'
  },
  {
    id: 'jdg_13_1_14',
    bookId: 'JDG',
    chapter: 13,
    startVerse: 1,
    endVerse: 14,
    title: 'O Anúncio do Nascimento de Sansão',
    theme: 'A Opressão Filisteia, a Consagração desde o Ventre e o Nazireado',
    introduction: 'Israel cai novamente em pecado, e desta vez Deus os entrega nas mãos dos filisteus por 40 anos — a opressão mais longa registrada no livro de Juízes. Curiosamente, o povo nem sequer clama a Deus por libertação; eles haviam se acostumado com a escravidão. Em Juízes 13, a iniciativa da salvação parte inteiramente de Deus. O Anjo do Senhor aparece a uma mulher estéril para anunciar o nascimento do último e mais famoso juiz: Sansão. A sua vida seria marcada por uma consagração radical (o voto de nazireu) desde o ventre materno.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Esterilidade e a Promessa do Nazireu',
        description: 'O Anjo do Senhor aparece à esposa de Manoá, que era estéril, e anuncia que ela conceberá um filho. Imediatamente, o Anjo impõe restrições severas à mãe: ela não deve beber vinho nem bebida forte, nem comer coisa imunda. O motivo é que o menino será "nazireu de Deus desde o ventre de sua mãe". O nazireado (Números 6) era um voto de separação total para Deus, caracterizado pela abstenção de uvas/vinho, de tocar em cadáveres e de cortar o cabelo. A missão do menino é declarada: "ele começará a livrar a Israel da mão dos filisteus".'
      },
      {
        verseRef: 'v. 6-8',
        title: 'O Relato da Mulher e a Oração de Manoá',
        description: 'A mulher conta ao marido sobre o "homem de Deus" cujo semblante era terrível como o de um anjo. Manoá, em vez de duvidar, faz uma oração exemplar: "Ah! Senhor meu, rogo-te que o homem de Deus, que enviaste, venha aqui outra vez, e nos ensine o que devemos fazer ao menino que há de nascer". Manoá reconhece a responsabilidade de criar um filho consagrado a Deus e pede sabedoria divina para a tarefa da paternidade.'
      },
      {
        verseRef: 'v. 9-14',
        title: 'A Reafirmação das Regras de Consagração',
        description: 'Deus ouve a voz de Manoá, e o Anjo retorna. Manoá pergunta qual será a "regra" (o modo de vida) do menino. O Anjo não dá detalhes sobre como educar a criança, mas repete as restrições feitas à mãe: ela deve se abster de tudo o que procede da videira e de bebidas fortes. A lição é clara: a consagração do filho começa com a consagração dos pais. O ambiente de pureza no lar é o primeiro passo para preparar o libertador.'
      }
    ],
    conclusion: 'O anúncio do nascimento de Sansão nos lembra que Deus frequentemente usa a esterilidade (situações humanamente impossíveis) para trazer ao mundo os Seus maiores propósitos. A oração de Manoá deve ser a oração de todos os pais: "Senhor, ensina-nos o que devemos fazer a esta criança". O voto de nazireu de Sansão aponta para a necessidade de santidade e separação do mundo para aqueles que são chamados a servir a Deus. A força de Sansão não estaria em seus músculos, mas na sua consagração (simbolizada pelo cabelo). Quando a consagração é quebrada, a força se vai.'
  },
  {
    id: 'jdg_16_15_31',
    bookId: 'JDG',
    chapter: 16,
    startVerse: 15,
    endVerse: 31,
    title: 'A Queda e a Morte de Sansão',
    theme: 'O Compromisso com o Pecado, a Força Perdida e a Graça Restauradora',
    introduction: 'Sansão foi o juiz com o maior potencial e o maior fracasso moral. Abençoado com força sobrenatural, ele desperdiçou sua vida em paixões carnais e vinganças pessoais. Juízes 16 narra o clímax trágico de sua vida: seu envolvimento com Dalila. Este texto é um estudo profundo sobre a sedução do pecado, a perda gradual da unção de Deus e as consequências da desobediência. No entanto, a história não termina em derrota total. Nas profundezas da cegueira e da escravidão, Sansão clama a Deus uma última vez, e a graça divina brilha nas trevas do templo pagão.',
    points: [
      {
        verseRef: 'v. 15-20',
        title: 'A Sedução de Dalila e a Perda da Força',
        description: 'Dalila pressiona Sansão diariamente com suas palavras, até que a sua alma se angustia até a morte. Ele cede e revela o segredo do seu nazireado: a navalha nunca passou por sua cabeça. Enquanto ele dorme no colo dela, suas tranças são cortadas. O versículo 20 contém uma das frases mais tristes da Bíblia: Sansão acorda pensando que se livraria como das outras vezes, "porém ele não sabia que já o Senhor se tinha retirado dele". O pecado o cegou para a sua própria condição espiritual.'
      },
      {
        verseRef: 'v. 21-25',
        title: 'A Cegueira, a Escravidão e o Cabelo que Cresce',
        description: 'As consequências são imediatas e brutais: os filisteus furam os olhos de Sansão, o amarram com cadeias de bronze e o colocam para moer grãos no cárcere (trabalho de animais). O herói de Israel torna-se o bobo da corte dos inimigos. Os filisteus celebram e dão glória ao seu deus, Dagom. No entanto, o versículo 22 insere uma nota de esperança silenciosa: "E o cabelo da sua cabeça começou a crescer, como quando foi rapado". A graça de Deus estava trabalhando secretamente na prisão.'
      },
      {
        verseRef: 'v. 26-31',
        title: 'A Última Oração e a Vitória na Morte',
        description: 'Trazido ao templo de Dagom para divertir cerca de três mil filisteus, Sansão pede ao menino que o guia para deixá-lo apalpar as colunas centrais. Ele faz a sua oração mais sincera: "Senhor Deus, peço-te que te lembres de mim, e esforça-me agora só esta vez". Ele empurra as colunas, o templo desaba, e ele morre junto com os inimigos. O texto conclui que "foram mais os mortos que matou na sua morte do que os que matara na sua vida".'
      }
    ],
    conclusion: 'A vida de Sansão é um aviso terrível de que os dons espirituais não garantem caráter espiritual. Brincar com o pecado (como Sansão fez no colo de Dalila) sempre resulta em cegueira e escravidão. A força de Sansão não estava no cabelo em si, mas no que ele representava: a sua consagração a Deus. Quando a consagração foi quebrada, o Senhor se retirou. Contudo, a sua morte revela a profundidade da misericórdia de Deus. Mesmo quebrado, cego e humilhado, quando Sansão clamou com um coração arrependido, Deus o ouviu. A graça de Deus é maior do que os nossos maiores fracassos.'
  }
];

const content = fs.readFileSync('data/pericopes.ts', 'utf8');
const startIndex = content.indexOf('[\n  {');
const endIndex = content.lastIndexOf(']');
const arrayContent = content.substring(startIndex, endIndex + 1);
const arr = new Function('return ' + arrayContent)();

let addedCount = 0;
for (const np of newPericopes) {
  if (!arr.find(p => p.id === np.id)) {
    arr.push(np);
    addedCount++;
  }
}

const newArrayContent = JSON.stringify(arr, null, 2);
const newContent = content.substring(0, startIndex) + newArrayContent + content.substring(endIndex + 1);
fs.writeFileSync('data/pericopes_temp.ts', newContent, 'utf8');
console.log(`Added ${addedCount} new pericopes (Batch 14.2).`);
