const fs = require('fs');

const expandedPericopes = [
  {
    id: 'exo_34_1_9',
    bookId: 'EXO',
    chapter: 34,
    startVerse: 1,
    endVerse: 9,
    title: 'As Novas Tábuas e o Caráter de Deus',
    theme: 'A Renovação da Aliança, a Revelação da Graça e a Justiça Divina',
    introduction: 'Após a intercessão bem-sucedida de Moisés (que pediu para ver a glória de Deus no capítulo 33), o Senhor concorda em renovar a aliança quebrada. Êxodo 34 descreve a subida de Moisés ao monte com duas novas tábuas de pedra. O clímax deste evento não é a reescrita da Lei, mas a proclamação audível do próprio Nome e caráter de Deus. Esta revelação (frequentemente chamada de "Os Treze Atributos da Misericórdia" na tradição judaica) é a descrição mais profunda de quem Deus é em todo o Antigo Testamento, equilibrando perfeitamente Sua graça abundante com Sua justiça inflexível.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'As Novas Tábuas e a Subida Solitária',
        description: 'Deus ordena que Moisés lavre duas tábuas de pedra, semelhantes às primeiras que ele havia quebrado. Deus promete escrever nelas as mesmas palavras. A quebra das primeiras tábuas foi obra do homem (em ira contra o pecado); a provisão das segundas exige o trabalho do homem (lavrar a pedra), mas a escrita continua sendo obra exclusiva da graça de Deus. Moisés deve subir o Sinai pela manhã, completamente sozinho. Nem homens nem animais podem ser vistos em todo o monte, enfatizando novamente a santidade exclusiva do encontro.'
      },
      {
        verseRef: 'v. 5-7',
        title: 'A Proclamação do Nome e do Caráter Divino',
        description: 'O Senhor desce na nuvem e proclama o Seu próprio nome: "Senhor, Senhor Deus (Yahweh, Yahweh El)". Ele revela Seu coração em uma cadência majestosa: "misericordioso e piedoso, tardio em irar-se e grande em beneficência e verdade". Deus enfatiza Sua graça, que guarda a misericórdia para milhares e perdoa a iniquidade, a transgressão e o pecado. No entanto, Ele não é um avô tolerante com o mal: "que ao culpado não tem por inocente; que visita a iniquidade dos pais sobre os filhos... até à terceira e quarta geração". A graça de Deus é infinita, mas Sua justiça exige que o pecado impenitente seja punido.'
      },
      {
        verseRef: 'v. 8-9',
        title: 'A Adoração e a Intercessão Renovada',
        description: 'A resposta imediata de Moisés a esta revelação de glória não é o medo paralisante, mas a adoração reverente: ele "apressou-se, e inclinou a cabeça à terra, e adorou". Conhecer o verdadeiro caráter de Deus sempre produz adoração. Moisés usa essa revelação da graça como base para sua oração: "Se agora, Senhor, tenho achado graça aos teus olhos, vá agora o Senhor no meio de nós". Ironicamente, Moisés usa o próprio defeito do povo ("porque é povo de dura cerviz") como o motivo pelo qual eles precisam desesperadamente do perdão e da presença de Deus para tomá-los como Sua herança.'
      }
    ],
    conclusion: 'A revelação do caráter de Deus em Êxodo 34 é o fundamento do evangelho no Antigo Testamento. Deus é essencialmente compassivo e perdoador. No entanto, o dilema apresentado no versículo 7 (Ele perdoa o pecado, mas não tem o culpado por inocente) só encontra sua resolução perfeita na cruz de Cristo. Em Jesus, Deus puniu o pecado (satisfazendo Sua justiça) para que pudesse justificar e perdoar o pecador (demonstrando Sua misericórdia). Como Moisés, a nossa única esperança é nos apegarmos à graça de Deus e pedirmos que Ele caminhe no meio de nós, apesar da nossa dura cerviz.'
  },
  {
    id: 'exo_34_29_35',
    bookId: 'EXO',
    chapter: 34,
    startVerse: 29,
    endVerse: 35,
    title: 'O Rosto Resplandecente de Moisés',
    theme: 'O Reflexo da Glória, o Temor do Povo e o Véu do Mediador',
    introduction: 'Após passar mais quarenta dias e quarenta noites na presença de Deus no Monte Sinai, recebendo a aliança renovada, Moisés desce para o acampamento. Ele traz consigo não apenas as tábuas da Lei, mas uma evidência física e visível de seu encontro com o divino. Êxodo 34:29-35 descreve o fenômeno do rosto resplandecente de Moisés. Este evento ilustra o poder transformador da comunhão com Deus, mas também revela a incapacidade do povo pecador de suportar até mesmo o reflexo da glória divina, necessitando que o mediador cubra seu rosto com um véu.',
    points: [
      {
        verseRef: 'v. 29-30',
        title: 'A Glória Inconsciente e o Temor de Israel',
        description: 'Moisés desce do monte com as duas tábuas do Testemunho. O texto destaca um detalhe fascinante: "não sabia Moisés que a pele do seu rosto resplandecia, depois que falara com ele". A verdadeira santidade e a glória espiritual são frequentemente inconscientes para aquele que as possui; quem está focado em Deus não está focado em seu próprio brilho. Quando Arão e os filhos de Israel veem Moisés, eles percebem o resplendor e "temeram chegar-se a ele". A glória de Deus, mesmo refletida no rosto de um homem, é aterrorizante para os pecadores.'
      },
      {
        verseRef: 'v. 31-33',
        title: 'A Comunicação da Lei e a Colocação do Véu',
        description: 'Moisés os chama, e Arão e os príncipes da congregação se aproximam com hesitação. Moisés fala com eles e, em seguida, com todos os filhos de Israel, transmitindo-lhes todos os mandamentos que o Senhor lhe dera no Sinai. O versículo 33 diz: "Assim que Moisés acabou de falar com eles, pôs um véu sobre o seu rosto". O véu não era para esconder a glória enquanto ele falava a Palavra de Deus, mas para cobrir o rosto depois, protegendo o povo do brilho contínuo que eles não podiam suportar (e, como Paulo argumenta mais tarde, para esconder o fato de que a glória da Antiga Aliança era passageira).'
      },
      {
        verseRef: 'v. 34-35',
        title: 'A Dinâmica da Presença: Rosto Descoberto diante de Deus',
        description: 'A rotina de Moisés é estabelecida: quando ele entrava na presença do Senhor (na Tenda) para falar com Ele, ele "tirava o véu até que saía". Diante de Deus, não há necessidade de ocultação; a comunhão é face a face e sem barreiras. Ao sair, ele falava aos filhos de Israel o que lhe era ordenado, e eles viam o rosto resplandecente. Depois, ele tornava a colocar o véu. Moisés vivia em dois mundos: com o rosto descoberto diante da glória de Deus, e com o rosto velado diante da fragilidade do povo.'
      }
    ],
    conclusion: 'O rosto resplandecente de Moisés é um testemunho de que passamos a nos parecer com aquilo que adoramos; a comunhão prolongada com Deus transforma o nosso ser. No entanto, o apóstolo Paulo usa este evento em 2 Coríntios 3 para mostrar a superioridade do Evangelho. O véu de Moisés representava a glória passageira e o ministério da condenação da Lei. Em Cristo, o véu foi removido. Hoje, todos os crentes, "com o rosto descoberto, refletindo como um espelho a glória do Senhor, somos transformados de glória em glória na mesma imagem" (2 Co 3:18). Não precisamos mais de véus, pois a glória do Evangelho traz vida e liberdade.'
  },
  {
    id: 'lev_1_1_9',
    bookId: 'LEV',
    chapter: 1,
    startVerse: 1,
    endVerse: 9,
    title: 'O Holocausto (A Oferta Queimada)',
    theme: 'A Consagração Total, a Substituição e a Aceitação Divina',
    introduction: 'O livro de Levítico começa onde Êxodo termina. Com o Tabernáculo construído e a glória de Deus habitando nele, a questão agora é: como um povo pecador pode se aproximar desse Deus santo? Levítico responde com o sistema de sacrifícios. O primeiro e mais importante sacrifício é o Holocausto (em hebraico, "Olah", que significa "aquilo que sobe"). Diferente de outras ofertas onde partes eram comidas pelos sacerdotes ou pelo ofertante, o Holocausto era inteiramente consumido pelo fogo no altar. Ele representa a consagração total e absoluta da vida a Deus, bem como a expiação substitutiva que torna o adorador aceitável.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Oferta Voluntária e a Exigência de Perfeição',
        description: 'Deus chama Moisés da Tenda da Congregação e dá as instruções. Se alguém oferecer gado, deve ser um "macho sem defeito". A exigência de perfeição física do animal é absoluta. Deus não aceita o que é manco, cego ou doente. O animal perfeito aponta para a santidade exigida por Deus e prefigura a perfeição sem pecado de Jesus Cristo. A oferta deve ser trazida voluntariamente à porta da Tenda, o único lugar autorizado para o sacrifício, demonstrando o desejo do adorador de ser aceito perante o Senhor.'
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Imposição de Mãos e a Substituição',
        description: 'O momento mais teológico do ritual ocorre no versículo 4: "E porá a sua mão sobre a cabeça do holocausto, para que seja aceito a favor dele, para a sua expiação". A imposição de mãos não é um gesto vazio; é um ato de identificação e transferência. O ofertante está dizendo: "Este animal inocente está tomando o meu lugar. O meu pecado passa para ele, e a perfeição dele passa para mim". Imediatamente após essa transferência, o animal é degolado. O salário do pecado é a morte, e o sangue (a vida) é derramado. Os sacerdotes então aspergem o sangue ao redor do altar.'
      },
      {
        verseRef: 'v. 6-9',
        title: 'A Consagração Total e o Cheiro Suave',
        description: 'O animal é esfolado e cortado em pedaços. As entranhas e as pernas são lavadas com água (simbolizando a purificação interior e o caminhar puro). Então, o sacerdote queima tudo sobre o altar. Nada é guardado. O fogo consome a oferta inteira, que "sobe" a Deus em fumaça. O texto conclui dizendo que é uma "oferta queimada, de cheiro suave ao Senhor". O cheiro não agrada a Deus pelo aroma da carne, mas porque representa a obediência, a expiação realizada e a dedicação total do adorador.'
      }
    ],
    conclusion: 'O Holocausto é a imagem perfeita da obra de Cristo e da resposta do cristão. Jesus foi o Cordeiro sem defeito que tomou nossos pecados sobre Si (imposição de mãos) e foi totalmente consumido pelo fogo do juízo de Deus na cruz, oferecendo-se como um sacrifício de "cheiro suave" (Efésios 5:2). Em resposta a essa graça, somos chamados a oferecer nossos próprios corpos como "sacrifício vivo, santo e agradável a Deus" (Romanos 12:1). O Holocausto nos ensina que Deus não quer apenas uma parte do nosso tempo ou dinheiro; Ele exige a consagração total de nossas vidas.'
  },
  {
    id: 'lev_2_1_11',
    bookId: 'LEV',
    chapter: 2,
    startVerse: 1,
    endVerse: 11,
    title: 'A Oferta de Manjares (Cereais)',
    theme: 'O Reconhecimento da Provisão, a Pureza e a Aliança de Sal',
    introduction: 'A segunda oferta descrita em Levítico é a Oferta de Manjares (ou Oferta de Cereais/Grãos, em hebraico "Minchah", que significa "tributo" ou "presente"). Ao contrário do Holocausto, esta é uma oferta incruenta (sem derramamento de sangue). Ela era frequentemente oferecida junto com o Holocausto. Se o Holocausto representava a consagração da vida (expiação), a Oferta de Manjares representava a consagração do trabalho e dos bens (gratidão). É um ato de adoração onde o israelita reconhece que Deus é a fonte de toda a sua provisão diária e dedica o fruto do seu labor ao Senhor.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Flor de Farinha, o Azeite e o Incenso',
        description: 'A oferta consiste em "flor de farinha" (a farinha mais fina e pura, moída com grande esforço, representando o melhor do trabalho humano). Sobre ela, derrama-se azeite (símbolo do Espírito Santo e da alegria) e coloca-se incenso (símbolo da oração e da adoração que sobe a Deus). O sacerdote queima apenas um "punhado" dessa mistura no altar como "porção memorial" de cheiro suave ao Senhor. O restante da farinha pertence a Arão e seus filhos (os sacerdotes), sendo considerada "coisa santíssima". Deus compartilha a oferta de gratidão com Seus servos.'
      },
      {
        verseRef: 'v. 4-10',
        title: 'As Formas de Preparo e a Dedicação do Trabalho',
        description: 'A oferta podia ser trazida de várias formas preparadas: assada no forno (bolos ázimos ou coscorões untados com azeite), cozida na caçoula (frigideira) ou na sertã. Independentemente do método de preparo, a regra era a mesma: deveria ser feita com a melhor farinha e misturada com azeite. Isso mostra que Deus aceita a adoração que vem do nosso trabalho diário, seja ele qual for, desde que seja feito com excelência (flor de farinha) e sob a unção de Deus (azeite).'
      },
      {
        verseRef: 'v. 11',
        title: 'A Proibição do Fermento e do Mel',
        description: 'Deus estabelece uma proibição estrita: "Nenhuma oferta de manjares... se fará com fermento; porque de nenhum fermento, nem de mel algum, oferecereis oferta queimada ao Senhor". Na Bíblia, o fermento frequentemente simboliza o pecado, a corrupção e a hipocrisia, pois ele incha e azeda a massa. O mel, embora doce, fermenta facilmente quando aquecido, representando os prazeres naturais e carnais que podem corromper a adoração. A oferta a Deus deve ser pura, livre da corrupção do pecado e das motivações egoístas.'
      }
    ],
    conclusion: 'A Oferta de Manjares nos ensina que a nossa adoração não se limita aos domingos ou aos cânticos; ela inclui a dedicação do nosso trabalho diário, do nosso sustento e dos nossos talentos a Deus. Jesus Cristo é a verdadeira "Flor de Farinha", o homem perfeito, ungido com o Espírito Santo (azeite), cuja vida foi uma oração contínua (incenso) e sem qualquer traço de pecado (sem fermento). Como seguidores de Cristo, somos chamados a viver vidas sem o "fermento da maldade e da malícia", oferecendo a Deus o melhor do nosso labor com corações puros e gratos.'
  },
  {
    id: 'lev_3_1_5',
    bookId: 'LEV',
    chapter: 3,
    startVerse: 1,
    endVerse: 5,
    title: 'A Oferta Pacífica (Comunhão)',
    theme: 'A Paz com Deus, a Alegria da Comunhão e a Porção do Senhor',
    introduction: 'A terceira oferta de Levítico é a Oferta Pacífica (ou Oferta de Comunhão, em hebraico "Shelamim", derivada de Shalom, que significa paz, integridade e bem-estar). Enquanto o Holocausto foca na expiação e consagração total, a Oferta Pacífica foca na celebração da paz já estabelecida com Deus. É a única oferta onde o ofertante, o sacerdote e Deus (simbolicamente) comem juntos da mesma refeição. É um banquete sagrado que expressa gratidão, cumprimento de votos e a alegria profunda de estar em comunhão com o Criador.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'O Animal sem Defeito e a Imposição de Mãos',
        description: 'O ofertante pode trazer gado (macho ou fêmea, diferentemente do Holocausto que exigia macho), mas deve ser "sem defeito diante do Senhor". A paz com Deus requer perfeição. Assim como no Holocausto, o adorador põe a mão sobre a cabeça da oferta e a degola à porta da Tenda da Congregação. O sangue é aspergido sobre o altar. A paz e a comunhão com Deus nunca são baseadas em nossos próprios méritos, mas sempre requerem o derramamento de sangue inocente. Não há banquete de comunhão sem o sacrifício prévio.'
      },
      {
        verseRef: 'v. 3-4',
        title: 'A Porção do Senhor: A Gordura e os Órgãos Vitais',
        description: 'Na Oferta Pacífica, o animal não é totalmente queimado. O ofertante deve separar partes específicas para serem queimadas no altar como a "oferta queimada ao Senhor". Estas partes são: toda a gordura que cobre as entranhas, os dois rins com sua gordura, e o redenho (lóbulo) do fígado. Na cultura antiga, a gordura era considerada a parte mais rica, saborosa e valiosa do animal (o melhor). Os rins e o fígado eram vistos como a sede das emoções mais profundas. O adorador está entregando a Deus o melhor e o mais íntimo de sua oferta.'
      },
      {
        verseRef: 'v. 5',
        title: 'O Fogo sobre o Holocausto e o Cheiro Suave',
        description: 'Os sacerdotes queimam essa gordura no altar "sobre o holocausto, que está sobre a lenha no fogo". A Oferta Pacífica é colocada em cima do Holocausto (que queimava continuamente). Isso ensina uma verdade teológica vital: a nossa comunhão e paz com Deus (Oferta Pacífica) só são possíveis porque repousam sobre o fundamento da expiação e consagração total (Holocausto). O resultado é, mais uma vez, um "cheiro suave ao Senhor". (O restante da carne era comido pelo sacerdote e pelo ofertante com sua família, em um banquete de alegria).'
      }
    ],
    conclusion: 'A Oferta Pacífica é uma bela prefiguração da Ceia do Senhor e da nossa comunhão em Cristo. Jesus é a nossa paz (Efésios 2:14). Porque Ele derramou Seu sangue e se ofereceu como sacrifício perfeito, nós fomos reconciliados com Deus e agora podemos nos sentar à mesa com Ele em alegria e gratidão. A exigência de dar a gordura (o melhor) a Deus nos lembra que, em nossa adoração e comunhão, não devemos dar ao Senhor as sobras do nosso tempo, energia ou afeto, mas a porção mais rica e profunda dos nossos corações.'
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
console.log(`Expanded ${replacedCount} pericopes (Batch 6.2).`);
