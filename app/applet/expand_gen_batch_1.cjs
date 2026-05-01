const fs = require('fs');

const expandedPericopes = [
  {
    id: 'gen_21_1_21',
    bookId: 'GEN',
    chapter: 21,
    startVerse: 1,
    endVerse: 21,
    title: 'O Nascimento de Isaque e a Expulsão de Ismael',
    theme: 'O Cumprimento da Promessa e o Conflito das Duas Naturezas',
    introduction: 'Após vinte e cinco anos de espera, a promessa de Deus finalmente se cumpre com o nascimento de Isaque. A alegria do nascimento milagroso, no entanto, logo é ofuscada pelo conflito inevitável entre o filho da promessa (Isaque) e o filho da carne (Ismael). Este episódio, que o apóstolo Paulo mais tarde usa como uma alegoria profunda em Gálatas 4, ilustra a impossibilidade de a carne e o espírito coexistirem pacificamente, e a necessidade dolorosa, mas necessária, de lançar fora o que não pertence à aliança.',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'A Fidelidade de Deus e o Riso de Sara',
        description: 'O texto enfatiza repetidamente que o Senhor visitou Sara "como tinha dito" e fez "como havia falado". O nascimento de Isaque não foi resultado do esforço humano, mas da pura fidelidade de Deus à Sua palavra, no "tempo determinado". Abraão circuncida Isaque ao oitavo dia, obedecendo à aliança. Sara, que antes havia rido de incredulidade (Gênesis 18), agora ri de pura alegria e assombro diante do milagre. O nome Isaque ("ele ri") torna-se um testemunho perpétuo da graça que transforma a dúvida em júbilo.'
      },
      {
        verseRef: 'v. 8-11',
        title: 'A Zombaria de Ismael e a Exigência de Sara',
        description: 'No dia em que Isaque é desmamado (um grande marco na antiguidade), Abraão faz um banquete. Durante a festa, Sara vê Ismael (agora um adolescente) "zombando" de Isaque. Esta zombaria não era uma mera brincadeira de criança, mas uma expressão de desprezo e rivalidade pela herança (Paulo a chama de "perseguição" em Gl 4:29). Sara exige que Abraão expulse Agar e Ismael, declarando que o filho da escrava não herdaria com o filho livre. A exigência parece dura e causa profunda angústia a Abraão, que amava Ismael.'
      },
      {
        verseRef: 'v. 12-21',
        title: 'A Aprovação Divina e a Provisão no Deserto',
        description: 'Deus intervém e diz a Abraão para ouvir Sara. Deus confirma que a linhagem da aliança será chamada "em Isaque". A expulsão de Ismael era teologicamente necessária: a lei (Agar/Ismael) não pode compartilhar a herança com a graça (Sara/Isaque). Abraão despede Agar com pão e água. No deserto de Berseba, a água acaba, e Agar se desespera, esperando a morte do menino. Mas Deus, mais uma vez, ouve a voz do rapaz, abre os olhos de Agar para ver um poço e promete fazer de Ismael uma grande nação. Deus protege o rejeitado, mesmo enquanto preserva a pureza da linhagem da promessa.'
      }
    ],
    conclusion: 'O nascimento de Isaque prova que Deus nunca falha em Suas promessas, por mais impossíveis que pareçam. A expulsão de Ismael nos ensina uma dura lição espiritual: não podemos misturar a obra da carne com a obra do Espírito. O que nasce da carne deve ser "expulso" para que o que nasce do Espírito possa herdar plenamente. Ao mesmo tempo, vemos a compaixão de Deus, que não abandona Agar e Ismael no deserto, mostrando que Sua providência se estende além das fronteiras da aliança abraâmica.'
  },
  {
    id: 'gen_24_1_27',
    bookId: 'GEN',
    chapter: 24,
    startVerse: 1,
    endVerse: 27,
    title: 'A Busca por uma Esposa para Isaque',
    theme: 'A Providência Divina, a Oração e a Preparação da Noiva',
    introduction: 'Gênesis 24 é o capítulo mais longo do livro, destacando a importância crucial de encontrar a esposa certa para Isaque, o herdeiro da promessa. Abraão, já idoso, envia seu servo mais de confiança (tradicionalmente identificado como Eliezer) à sua terra natal para buscar uma noiva, proibindo estritamente que Isaque se case com uma cananeia ou que retorne à Mesopotâmia. A jornada do servo é uma obra-prima narrativa sobre a providência de Deus, a oração respondida e, tipologicamente, ilustra a obra do Espírito Santo buscando uma Noiva (a Igreja) para o Filho (Cristo).',
    points: [
      {
        verseRef: 'v. 1-9',
        title: 'O Juramento e a Missão',
        description: 'Abraão faz seu servo jurar que não tomará esposa para Isaque entre as filhas dos cananeus (cujas práticas eram abomináveis e corromperiam a fé da família). A noiva deve vir da parentela de Abraão. Quando o servo questiona o que fazer se a mulher não quiser segui-lo, Abraão é categórico: Isaque não deve voltar para lá. A promessa da terra exige que Isaque permaneça em Canaã. Abraão demonstra profunda fé de que o Senhor enviará Seu anjo adiante do servo para garantir o sucesso da missão.'
      },
      {
        verseRef: 'v. 10-14',
        title: 'A Oração Específica do Servo',
        description: 'O servo chega a Naor, na Mesopotâmia, e para junto a um poço ao entardecer. Em vez de confiar em sua própria sabedoria para escolher, ele ora. Ele pede a Deus que mostre "benevolência" (hesed - amor leal) a Abraão. Ele propõe um teste específico: a moça escolhida não apenas lhe daria de beber, mas também se ofereceria voluntariamente para dar de beber aos seus dez camelos. Este teste não era mágica, mas uma prova de caráter: revelaria uma mulher hospitaleira, trabalhadora, generosa e com atitude de serva.'
      },
      {
        verseRef: 'v. 15-27',
        title: 'A Resposta Imediata e a Adoração',
        description: 'Antes mesmo de ele terminar de orar, Rebeca (neta do irmão de Abraão) aparece. Ela é formosa e virgem. O servo pede água, e ela responde exatamente conforme o sinal pedido: dá-lhe de beber e, prontamente, tira água para todos os dez camelos (uma tarefa exaustiva). O servo a observa em silêncio, maravilhado. Ao confirmar a identidade dela, ele lhe dá presentes de ouro. A resposta do servo é imediata: ele se prostra e adora ao Senhor, reconhecendo que Deus o guiou "pelo caminho" diretamente à casa dos parentes de seu senhor.'
      }
    ],
    conclusion: 'A jornada do servo de Abraão é um modelo de como buscar a vontade de Deus: com obediência aos princípios estabelecidos (não casar com cananeus), oração dependente e observação atenta do caráter. Deus honra a fé de Abraão e a oração do servo com uma providência exata. Espiritualmente, vemos um belo quadro do Pai enviando o Espírito Santo ao mundo para convidar uma Noiva disposta a deixar tudo para se unir ao Filho que ela ainda não viu, mas a quem já ama.'
  },
  {
    id: 'gen_25_19_34',
    bookId: 'GEN',
    chapter: 25,
    startVerse: 19,
    endVerse: 34,
    title: 'O Nascimento de Esaú e Jacó e a Venda da Primogenitura',
    theme: 'A Soberania da Escolha Divina e o Desprezo pelas Coisas Espirituais',
    introduction: 'A história da próxima geração começa com um eco do passado: Rebeca, assim como Sara, é estéril. Após a oração de Isaque, Deus concede filhos, mas o conflito começa antes mesmo do nascimento. Gênesis 25 introduz os gêmeos Esaú e Jacó, cujas naturezas e destinos opostos moldarão a história bíblica. O capítulo culmina na famosa cena da venda da primogenitura, um evento que revela a profanidade do coração de Esaú e a ambição calculista de Jacó, servindo como um alerta eterno sobre o perigo de trocar o eterno pelo imediato.',
    points: [
      {
        verseRef: 'v. 19-26',
        title: 'A Luta no Ventre e a Profecia',
        description: 'Rebeca sofre com a luta violenta dos bebês em seu ventre e busca ao Senhor. Deus revela que duas nações estão em seu ventre, que um povo será mais forte que o outro, e que "o maior servirá ao menor". Esta profecia inverte a ordem natural e cultural da primogenitura, demonstrando a soberania da eleição divina (como Paulo argumenta em Romanos 9). No nascimento, Esaú sai ruivo e peludo, enquanto Jacó sai agarrado ao calcanhar do irmão (daí seu nome, que significa "suplantador" ou "aquele que agarra").'
      },
      {
        verseRef: 'v. 27-28',
        title: 'O Favoritismo dos Pais',
        description: 'Os meninos crescem com personalidades opostas. Esaú é um homem do campo, um caçador habilidoso; Jacó é um homem pacato, que habita em tendas. Tragicamente, os pais dividem suas afeições: Isaque ama Esaú porque apreciava a sua caça (um amor baseado no apetite carnal), enquanto Rebeca ama Jacó (provavelmente lembrando-se da profecia divina). Este favoritismo parental lançará as sementes para a destruição e o engano que devastarão a família no futuro.'
      },
      {
        verseRef: 'v. 29-34',
        title: 'A Venda da Primogenitura',
        description: 'Esaú volta do campo exausto e faminto, e vê Jacó cozinhando um guisado vermelho (lentilhas). Esaú exige a comida. Jacó, calculista e oportunista, vê a chance de obter o que a cultura lhe negou, mas que a profecia lhe prometeu: ele exige a primogenitura em troca do prato. A primogenitura incluía a liderança da família, uma porção dupla da herança e, mais importante, a bênção da aliança abraâmica. Esaú, dominado pelo apetite imediato, jura e vende seu direito. O texto conclui de forma sombria: "Assim desprezou Esaú a sua primogenitura".'
      }
    ],
    conclusion: 'A venda da primogenitura é uma das transações mais trágicas da Bíblia. O autor de Hebreus chama Esaú de "profano" (Hb 12:16) porque ele tratou algo sagrado e eterno como se não tivesse valor, trocando-o pela satisfação de um desejo físico momentâneo. Embora Jacó tenha agido com astúcia carnal para obter a bênção, ele pelo menos a valorizava. A lição para nós é clara: devemos vigiar para não sacrificarmos as promessas eternas de Deus no altar das nossas necessidades e impulsos imediatos.'
  },
  {
    id: 'gen_27_1_40',
    bookId: 'GEN',
    chapter: 27,
    startVerse: 1,
    endVerse: 40,
    title: 'Jacó Engana Isaque',
    theme: 'A Ruína da Família pelo Engano e a Soberania Irrevogável de Deus',
    introduction: 'Gênesis 27 é um dos capítulos mais dramáticos e disfuncionais da Bíblia. Isaque, velho e cego, decide abençoar seu filho favorito, Esaú, ignorando tanto a profecia divina (de que o maior serviria ao menor) quanto o fato de que Esaú havia vendido sua primogenitura. O que se segue é uma teia de engano orquestrada por Rebeca e executada por Jacó. Embora o propósito de Deus (abençoar Jacó) seja cumprido, os métodos carnais utilizados destroem a paz da família e resultam em décadas de exílio e sofrimento para Jacó.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Intenção Carnal de Isaque',
        description: 'Isaque, sentindo que a morte se aproxima, chama Esaú em segredo. Ele pede que Esaú cace e prepare uma comida saborosa para que sua alma o abençoe. Isaque está agindo na carne: ele está sendo guiado por seu estômago e por suas emoções, tentando usar sua autoridade patriarcal para reverter a vontade revelada de Deus e abençoar o filho profano que havia desprezado a aliança.'
      },
      {
        verseRef: 'v. 5-17',
        title: 'O Plano Enganoso de Rebeca',
        description: 'Rebeca escuta a conversa e age rapidamente. Em vez de confiar em Deus para cumprir Sua própria palavra, ela toma o controle da situação através da manipulação. Ela ordena que Jacó traga cabritos, prepara a comida que Isaque gosta, veste Jacó com as roupas de Esaú e cobre suas mãos e pescoço com peles de cabrito para simular os pelos do irmão. Jacó hesita, não por medo de pecar, mas por medo de ser pego e amaldiçoado. Rebeca assume a maldição sobre si, demonstrando uma determinação cega.'
      },
      {
        verseRef: 'v. 18-29',
        title: 'A Mentira e a Bênção Roubada',
        description: 'Jacó entra na tenda e mente repetidamente ao pai: ele diz que é Esaú, que fez o que foi pedido, e até blasfema ao dizer que o Senhor lhe deu a caça rapidamente. Isaque desconfia da voz ("A voz é de Jacó, mas as mãos são de Esaú"), mas é enganado pelo tato e pelo cheiro das roupas. Isaque come e pronuncia a bênção irrevogável sobre Jacó: prosperidade agrícola, domínio sobre as nações e sobre seus irmãos, e a proteção da aliança ("malditos os que te amaldiçoarem").'
      },
      {
        verseRef: 'v. 30-40',
        title: 'O Desespero de Esaú e a Consequência do Pecado',
        description: 'Assim que Jacó sai, Esaú entra. A descoberta do engano faz Isaque tremer violentamente. Ele percebe que, apesar de sua tentativa de frustrar Deus, a vontade divina prevaleceu ("e ele será abençoado"). Esaú chora com "grande e mui amargo brado", buscando uma bênção, mas é tarde demais. A bênção que resta para Esaú é, na verdade, uma anti-bênção: ele viverá da espada e servirá a seu irmão. O engano de Jacó lhe custará caro: ele terá que fugir de casa, nunca mais verá sua mãe viva, e será enganado por seu sogro Labão por 20 anos.'
      }
    ],
    conclusion: 'Este capítulo é um estudo profundo sobre a graça e a disciplina de Deus. Deus usou pessoas falhas e métodos pecaminosos para cumprir Seu propósito soberano, mas Ele não isentou ninguém das consequências de seus pecados. Isaque colheu a rebelião; Esaú colheu a perda do que havia desprezado; Rebeca perdeu o filho que amava; e Jacó iniciou uma longa jornada de disciplina onde provaria do seu próprio veneno. A lição é que os fins de Deus não justificam os nossos meios carnais. Devemos confiar nEle para cumprir Suas promessas no Seu tempo e do Seu jeito.'
  },
  {
    id: 'gen_29_15_30',
    bookId: 'GEN',
    chapter: 29,
    startVerse: 15,
    endVerse: 30,
    title: 'Jacó, Lia e Raquel',
    theme: 'A Lei da Semeadura e a Disciplina do Enganador',
    introduction: 'Fugindo da fúria de Esaú, Jacó chega a Padã-Arã, à casa de seu tio Labão. Jacó, o homem que passou a vida enganando os outros (seu irmão e seu pai), agora encontra alguém mais astuto do que ele. A história do casamento de Jacó com Lia e Raquel é uma demonstração clássica da lei da semeadura e da colheita. Deus não abandonou Jacó, mas o colocou na "escola" de Labão para quebrar o seu caráter enganador e moldá-lo em um patriarca digno da aliança.',
    points: [
      {
        verseRef: 'v. 15-20',
        title: 'O Acordo e o Amor por Raquel',
        description: 'Labão, percebendo o valor do trabalho de Jacó, propõe um salário. Jacó, que havia se apaixonado profundamente por Raquel (a filha mais nova, que era "formosa de porte e de semblante"), oferece trabalhar sete anos por ela. O texto nos dá um dos vislumbres mais românticos da Bíblia: "E os sete anos pareceram-lhe como poucos dias, pelo muito que a amava". Jacó está disposto a pagar um preço altíssimo (sete anos de trabalho escravo) pela mulher que ama.'
      },
      {
        verseRef: 'v. 21-25',
        title: 'O Enganador é Enganado',
        description: 'Cumprido o prazo, Jacó exige sua esposa. Labão faz um banquete, mas à noite, aproveitando-se da escuridão e dos véus nupciais, ele traz Lia (a filha mais velha, que tinha "olhos tenros" ou sem brilho) para a tenda de Jacó. Na manhã seguinte, a chocante descoberta: "Eis que era Lia". A ironia divina é inescapável. Jacó, o filho mais novo que se passou pelo mais velho para enganar seu pai cego na escuridão da tenda, agora é enganado na escuridão da noite, recebendo a filha mais velha em vez da mais nova.'
      },
      {
        verseRef: 'v. 26-30',
        title: 'A Justificativa de Labão e o Preço Dobrado',
        description: 'Quando Jacó confronta Labão ("Por que me enganaste?"), a resposta de Labão é uma facada no coração de Jacó: "Não se faz assim no nosso lugar, que a menor se dê antes da primogênita". Labão usa a exata questão da primogenitura — o próprio pecado de Jacó — para justificar seu engano. Labão propõe que Jacó cumpra a semana de núpcias de Lia e, em seguida, receba Raquel também, em troca de mais sete anos de trabalho. Jacó aceita, mas o resultado é um lar poligâmico cheio de ciúme, rivalidade e dor, onde Jacó amava Raquel mais do que a Lia.'
      }
    ],
    conclusion: 'A experiência de Jacó com Labão ilustra perfeitamente Gálatas 6:7: "Aquilo que o homem semear, isso também ceifará". O pecado de Jacó o alcançou. Deus usou o engano de Labão como um espelho para mostrar a Jacó a feiura de seu próprio caráter. No entanto, mesmo no meio dessa confusão familiar e disciplina severa, a graça de Deus estava operando. Através dessas duas irmãs rivais, Deus estava construindo a casa de Israel (as doze tribos). Deus disciplina aqueles a quem ama, não para destruí-los, mas para transformá-los.'
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
console.log(`Expanded ${replacedCount} Genesis pericopes (Batch 1).`);
