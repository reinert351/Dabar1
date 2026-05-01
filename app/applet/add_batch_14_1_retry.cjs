const fs = require('fs');

const newPericopes = [
  {
    id: 'jdg_2_1_5',
    bookId: 'JDG',
    chapter: 2,
    startVerse: 1,
    endVerse: 5,
    title: 'O Anjo do Senhor em Boquim',
    theme: 'A Quebra da Aliança, o Confronto Divino e o Choro Incompleto',
    introduction: 'O livro de Juízes marca um declínio espiritual drástico na história de Israel. Após a morte de Josué, a nova geração falha em expulsar completamente os cananeus, optando por fazer acordos e conviver com a idolatria. Em Juízes 2:1-5, o Anjo do Senhor (uma manifestação do próprio Deus) aparece em Boquim para confrontar a nação. Este episódio estabelece o tom teológico de todo o livro: a desobediência traz consequências amargas. O choro do povo, embora intenso, revela-se superficial, pois não é seguido de um arrependimento genuíno e abandono dos ídolos.',
    points: [
      {
        verseRef: 'v. 1',
        title: 'A Fidelidade de Deus Relembrada',
        description: 'O Anjo do Senhor sobe de Gilgal (o lugar da renovação da aliança e da circuncisão) para Boquim. Ele começa lembrando a graça soberana de Deus: "Do Egito vos fiz subir, e vos trouxe à terra que a vossos pais tinha jurado". Deus cumpriu a Sua parte do acordo perfeitamente. Ele reafirma a Sua fidelidade inquebrável: "Nunca invalidarei a minha aliança convosco". O problema nunca esteve na fidelidade de Deus, mas na infidelidade do povo.'
      },
      {
        verseRef: 'v. 2-3',
        title: 'A Acusação e a Consequência',
        description: 'Deus aponta a transgressão específica: Israel desobedeceu à ordem de não fazer aliança com os moradores da terra e de derrubar os seus altares. A pergunta divina ecoa: "Por que fizestes isso?". Como consequência da quebra da aliança, Deus retira a Sua proteção ativa: Ele não expulsará mais os inimigos. Em vez disso, os cananeus se tornarão "por espinhos nas vossas ilhargas", e os seus deuses serão "por laço" (uma armadilha mortal) para Israel. O pecado tolerado torna-se o nosso próprio carrasco.'
      },
      {
        verseRef: 'v. 4-5',
        title: 'O Choro em Boquim',
        description: 'Ao ouvirem estas palavras, o povo levanta a voz e chora amargamente. Eles chamam o lugar de "Boquim" (que significa "chorões") e oferecem sacrifícios ao Senhor. No entanto, a história subsequente de Juízes mostra que este choro foi de remorso pelas consequências, não de arrependimento pelo pecado. Eles choraram porque perderam a bênção, mas não destruíram os altares de Baal. A emoção religiosa sem mudança de comportamento é inútil.'
      }
    ],
    conclusion: 'O episódio em Boquim é um alerta solene sobre o perigo da acomodação espiritual. Quando toleramos "pequenos" pecados e fazemos alianças com os valores do mundo, essas mesmas coisas se tornam armadilhas que nos escravizam. Além disso, Boquim nos ensina a discernir entre o remorso e o verdadeiro arrependimento (2 Coríntios 7:10). Lágrimas no altar não impressionam a Deus se não forem acompanhadas pela destruição dos ídolos em nossas vidas. Deus deseja obediência prática, não apenas emoções religiosas.'
  },
  {
    id: 'jdg_2_11_19',
    bookId: 'JDG',
    chapter: 2,
    startVerse: 11,
    endVerse: 19,
    title: 'O Ciclo dos Juízes',
    theme: 'Apostasia, Opressão, Clamor e a Persistência da Graça',
    introduction: 'Juízes 2:11-19 funciona como o "índice teológico" de todo o livro. Este trecho descreve o padrão cíclico e trágico que se repetirá por séculos na história de Israel: a nação abandona a Deus, Deus os entrega aos inimigos, o povo clama na sua angústia, e Deus, em Sua infinita misericórdia, levanta um libertador (um juiz). No entanto, assim que o juiz morre, o povo volta a pecar de forma ainda pior. Este ciclo revela tanto a profunda depravação do coração humano quanto a escandalosa e persistente graça de Deus.',
    points: [
      {
        verseRef: 'v. 11-13',
        title: 'A Apostasia: O Abandono do Senhor',
        description: 'A nova geração "fez o que parecia mal aos olhos do Senhor". O pecado não foi apenas moral, mas espiritual: eles abandonaram o Deus que os tirou do Egito e começaram a servir aos baalins e a Astarote (deuses cananeus da fertilidade e da guerra). A idolatria era atraente porque prometia prosperidade agrícola e envolvia práticas imorais. Eles trocaram a santidade da aliança pela conveniência da cultura local, provocando a ira do Senhor.'
      },
      {
        verseRef: 'v. 14-15',
        title: 'A Ira Divina e a Opressão',
        description: 'A ira de Deus se acende contra Israel. O juízo de Deus não é um ataque de raiva descontrolada, mas a entrega do povo às consequências de suas próprias escolhas. Ele os entrega nas mãos dos roubadores e os vende aos inimigos. A promessa de Deuteronômio 28 se cumpre: "a mão do Senhor era contra eles para mal". Eles perdem a liberdade, a paz e a prosperidade, ficando "em grande aperto".'
      },
      {
        verseRef: 'v. 16-19',
        title: 'A Misericórdia e os Juízes',
        description: 'No auge da opressão, o povo geme. O versículo 18 revela o coração de Deus: "o Senhor se compadecia deles por causa do seu gemido". Deus levanta juízes (líderes militares e espirituais carismáticos) para livrá-los. O Espírito do Senhor era com o juiz, garantindo a vitória. Contudo, a reforma era superficial. Assim que o juiz morria, o povo "tornava a corromper-se mais do que seus pais". A espiral não era apenas um círculo, mas um redemoinho descendente.'
      }
    ],
    conclusion: 'O ciclo dos juízes é um espelho da nossa própria luta contra o pecado. Quantas vezes clamamos a Deus na angústia, prometemos mudança, somos libertos pela Sua graça, apenas para voltarmos aos velhos hábitos quando a crise passa? A grande lição de Juízes não é sobre os heróis humanos, mas sobre o Herói Divino. A paciência de Deus é impressionante. Ele continua enviando libertadores a um povo obstinado. Em última análise, o livro de Juízes clama pela necessidade de um Rei perfeito (Juízes 21:25) e de um Libertador definitivo, Jesus Cristo, que não apenas nos livra dos inimigos externos, mas transforma o nosso coração para que não voltemos à idolatria.'
  },
  {
    id: 'jdg_3_12_30',
    bookId: 'JDG',
    chapter: 3,
    startVerse: 12,
    endVerse: 30,
    title: 'Eúde e o Rei Eglom',
    theme: 'O Libertador Improvável, a Estratégia Oculta e o Fim da Opressão',
    introduction: 'A história de Eúde é uma das narrativas mais gráficas e inusitadas da Bíblia. Israel havia caído novamente em apostasia e foi entregue nas mãos de Eglom, o obeso rei de Moabe, que os oprimiu por 18 anos. Quando o povo clama, Deus levanta Eúde, um benjamita canhoto. Naquela cultura, ser canhoto era frequentemente visto como uma desvantagem ou um defeito. No entanto, Deus usa exatamente essa característica "defeituosa" como a arma secreta para a libertação. A história demonstra que Deus não está limitado pelas expectativas humanas para realizar os Seus propósitos.',
    points: [
      {
        verseRef: 'v. 12-15',
        title: 'A Opressão e o Libertador Canhoto',
        description: 'Israel faz o mal, e Deus fortalece Eglom contra eles. Após 18 anos de servidão, o povo clama. Deus levanta Eúde, filho de Gera. O texto destaca que ele era "canhoto" (literalmente, "impedido da mão direita"). Israel o envia para levar o tributo (imposto) ao rei Eglom. Eúde fabrica uma espada de dois gumes, de um côvado de comprimento, e a esconde debaixo da roupa, na coxa direita (onde os guardas, esperando um destro, não revistariam).'
      },
      {
        verseRef: 'v. 16-23',
        title: 'O Encontro Secreto e o Golpe Fatal',
        description: 'Após entregar o tributo, Eúde despede a sua comitiva, mas volta a Eglom dizendo: "Tenho uma palavra secreta para ti, ó rei". O rei, intrigado, dispensa seus servos. Eúde se aproxima do rei, que estava sentado em sua sala de verão, e declara: "Tenho para ti uma palavra de Deus". Quando o rei obeso se levanta em reverência, Eúde usa a sua mão esquerda inesperada, saca a espada da coxa direita e a crava na barriga do rei, tão profundamente que a gordura encobre a lâmina. Eúde tranca as portas e foge.'
      },
      {
        verseRef: 'v. 24-30',
        title: 'A Confusão Inimiga e a Vitória de Israel',
        description: 'Os servos de Eglom encontram as portas trancadas e presumem que o rei está "cobrindo seus pés" (usando o banheiro). A demora deles em arrombar a porta dá a Eúde tempo suficiente para escapar até Seirata. Chegando a Efraim, ele toca a trombeta, convoca o exército de Israel e declara: "O Senhor vos tem dado vossos inimigos". Eles tomam os vaus do Jordão, matam dez mil guerreiros moabitas e garantem 80 anos de paz para Israel.'
      }
    ],
    conclusion: 'A história de Eúde nos ensina que Deus frequentemente escolhe os instrumentos mais improváveis para realizar as Suas maiores vitórias. O que a sociedade (e talvez o próprio Eúde) via como uma fraqueza ou anomalia (ser canhoto) foi exatamente o que Deus usou para enganar o inimigo e trazer libertação. Paulo ecoa este princípio em 1 Coríntios 1:27: "Deus escolheu as coisas fracas deste mundo para confundir as fortes". Não devemos desprezar as nossas limitações ou peculiaridades; nas mãos do Senhor, elas podem se tornar a "espada escondida" que derruba os gigantes que nos oprimem.'
  },
  {
    id: 'jdg_4_1_16',
    bookId: 'JDG',
    chapter: 4,
    startVerse: 1,
    endVerse: 16,
    title: 'Débora e Baraque',
    theme: 'A Liderança Profética, a Coragem Compartilhada e a Vitória de Deus',
    introduction: 'Em uma época dominada por homens e marcada pela opressão brutal de Jabim, rei de Canaã, e seu general Sísera (que possuía 900 carros de ferro), Deus levanta uma líder extraordinária: Débora. Ela era profetisa e juíza em Israel. Juízes 4 narra como Débora convoca Baraque para liderar o exército. A hesitação de Baraque em ir sem ela resulta em uma profecia de que a honra final da batalha iria para uma mulher. A história destaca a importância da liderança espiritual, a parceria no ministério e a soberania de Deus sobre os exércitos mais poderosos.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Opressão de Canaã e a Juíza Débora',
        description: 'Após a morte de Eúde, Israel peca novamente e é vendido a Jabim. A opressão dura 20 anos, agravada pela tecnologia militar superior dos cananeus (carros de ferro). No meio desse terror, surge Débora. Ela julgava Israel debaixo das palmeiras entre Ramá e Betel. O povo subia a ela para juízo. Sua autoridade não vinha da força militar, mas do seu dom profético e sabedoria divina.'
      },
      {
        verseRef: 'v. 6-9',
        title: 'O Chamado a Baraque e a Condição',
        description: 'Débora manda chamar Baraque e lhe entrega a ordem do Senhor: reunir 10.000 homens no Monte Tabor. Deus promete atrair Sísera e seus carros para o ribeiro de Quisom e entregá-los nas mãos de Baraque. Baraque responde com uma condição: "Se fores comigo, irei; porém, se não fores comigo, não irei". Débora concorda em ir, mas profetiza que a honra da expedição não será de Baraque, pois o Senhor venderá Sísera "à mão de uma mulher" (Jael).'
      },
      {
        verseRef: 'v. 10-16',
        title: 'A Batalha do Quisom e a Derrota dos Carros de Ferro',
        description: 'Baraque reúne o exército. Quando Sísera avança com seus 900 carros de ferro, Débora dá o sinal de ataque: "Levanta-te, porque este é o dia em que o Senhor tem dado a Sísera na tua mão; porventura o Senhor não saiu adiante de ti?". Baraque desce o monte. O Senhor "desbaratou a Sísera, e a todos os seus carros". (Juízes 5 revela que Deus enviou uma tempestade que fez o ribeiro Quisom transbordar, atolando os carros de ferro na lama). O exército cananeu é aniquilado, e Sísera foge a pé.'
      }
    ],
    conclusion: 'A história de Débora e Baraque quebra paradigmas culturais e nos ensina sobre a dinâmica do Reino de Deus. Deus levanta quem Ele quer, independentemente de gênero ou status social. A hesitação de Baraque não o desqualificou (ele está na galeria da fé em Hebreus 11:32), mas o fez compartilhar a glória com Débora e Jael. A vitória sobre os 900 carros de ferro prova que nenhuma tecnologia humana ou poderio militar pode resistir ao Senhor. Quando a Palavra de Deus (representada por Débora) e a ação corajosa (representada por Baraque) se unem, o inimigo é derrotado.'
  },
  {
    id: 'jdg_6_1_16',
    bookId: 'JDG',
    chapter: 6,
    startVerse: 1,
    endVerse: 16,
    title: 'O Chamado de Gideão',
    theme: 'O Medo, a Identidade Divina e a Força na Fraqueza',
    introduction: 'A opressão dos midianitas sobre Israel era tão devastadora que o povo se escondia em cavernas. Os inimigos destruíam as colheitas como uma nuvem de gafanhotos. É neste cenário de fome e terror absoluto que o Anjo do Senhor aparece a Gideão. Juízes 6:1-16 narra um dos chamados mais encorajadores da Bíblia. Deus encontra Gideão escondido, malhando o trigo no lagar (lugar de pisar uvas) por medo dos inimigos. O diálogo que se segue revela como Deus enxerga o nosso potencial, mesmo quando nós só enxergamos as nossas limitações e fracassos.',
    points: [
      {
        verseRef: 'v. 1-11',
        title: 'O Terror Midianita e o Esconderijo no Lagar',
        description: 'Israel fez o mal e foi entregue aos midianitas por 7 anos. A opressão era econômica e psicológica; os inimigos roubavam todo o sustento. O povo clama a Deus. O Anjo do Senhor desce e senta-se debaixo de um carvalho em Ofra. Ele encontra Gideão malhando trigo no lagar (um buraco no chão) para escondê-lo dos midianitas. Gideão é o retrato do medo e da sobrevivência desesperada.'
      },
      {
        verseRef: 'v. 12-13',
        title: 'A Saudação Divina e a Dúvida Humana',
        description: 'O Anjo saúda Gideão com palavras que parecem uma ironia cruel: "O Senhor é contigo, homem valoroso". Gideão, cheio de amargura, questiona a teologia do Anjo: "Se o Senhor é conosco, por que tudo isto nos sobreveio? E que é feito de todas as suas maravilhas que nossos pais nos contaram?". Gideão olha para as circunstâncias e conclui que Deus os abandonou. Ele confunde a disciplina de Deus com o abandono de Deus.'
      },
      {
        verseRef: 'v. 14-16',
        title: 'A Comissão e a Promessa da Presença',
        description: 'O Senhor não repreende a dúvida de Gideão, mas olha para ele e diz: "Vai nesta tua força, e livrarás a Israel... porventura não te enviei eu?". Gideão apresenta suas credenciais de fraqueza: sua família é a mais pobre de Manassés, e ele é o menor na casa de seu pai. A resposta de Deus é a garantia definitiva de todo chamado bíblico: "Porquanto eu hei de ser contigo, tu ferirás aos midianitas como se fossem um só homem". A força não estava em Gideão, mas no "Eu serei contigo".'
      }
    ],
    conclusion: 'O chamado de Gideão nos mostra que Deus não chama os capacitados, mas capacita os escolhidos. Quando Deus olhou para Gideão no lagar, Ele não viu um fazendeiro assustado; Ele viu um "homem valoroso". Deus nos define não pelos nossos medos atuais ou pelo nosso passado, mas pelo que Ele fará através de nós. As nossas desculpas de fraqueza, pobreza ou insignificância (v. 15) são irrelevantes quando ouvimos a promessa: "Eu serei contigo". A verdadeira coragem não é a ausência de medo, mas a obediência baseada na certeza da presença de Deus.'
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
    // Insert before jdg_7_1_8 to maintain order
    const insertIdx = arr.findIndex(p => p.id === 'jdg_7_1_8');
    if (insertIdx !== -1) {
      arr.splice(insertIdx, 0, np);
    } else {
      arr.push(np);
    }
    addedCount++;
  }
}

const newArrayContent = JSON.stringify(arr, null, 2);
const newContent = content.substring(0, startIndex) + newArrayContent + content.substring(endIndex + 1);
fs.writeFileSync('data/pericopes_temp.ts', newContent, 'utf8');
console.log(`Added ${addedCount} missing pericopes (Batch 14.1 retry).`);
