const fs = require('fs');

const newPericopes = [
  {
    id: 'gen_42_1_38',
    bookId: 'GEN',
    chapter: 42,
    startVerse: 1,
    endVerse: 38,
    title: 'Os Irmãos de José no Egito',
    theme: 'A Fome, o Encontro e o Despertar da Consciência',
    introduction: 'A fome severa atinge Canaã, forçando Jacó a enviar seus filhos ao Egito para comprar mantimentos. Lá, eles se deparam com o governador, sem saber que é o irmão que eles venderam há mais de vinte anos. José os reconhece, mas os trata com dureza para testá-los e despertar suas consciências adormecidas.',
    points: [
      {
        verseRef: 'v. 1-8',
        title: 'A Viagem e a Reverência',
        description: 'Jacó envia dez de seus filhos ao Egito, retendo apenas Benjamim por medo de perdê-lo (v. 1-4). Ao chegarem, os irmãos prostram-se com o rosto em terra diante do governador (v. 6). José os reconhece imediatamente e lembra-se dos seus sonhos de infância (v. 7-9). A profecia cumpriu-se: os feixes dos irmãos curvaram-se perante o seu.'
      },
      {
        verseRef: 'v. 9-24',
        title: 'O Teste e a Culpa',
        description: 'José os acusa de serem espiões e os prende por três dias (v. 9-17). Ele exige que tragam o irmão mais novo para provar que dizem a verdade, retendo Simeão como refém (v. 18-20). A pressão faz com que os irmãos confessem a culpa pelo que fizeram a José anos atrás: "Na verdade, somos culpados no tocante a nosso irmão... por isso, nos vem esta angústia" (v. 21-22). José, ouvindo-os, chora em segredo (v. 24).'
      },
      {
        verseRef: 'v. 25-38',
        title: 'O Retorno e o Desespero de Jacó',
        description: 'José manda encher os sacos de trigo e devolver o dinheiro deles (v. 25). No caminho, ao descobrirem o dinheiro, eles se enchem de medo: "Que é isto que Deus nos fez?" (v. 28). Ao chegarem, contam tudo a Jacó, que se desespera com a exigência de levar Benjamim: "Tendes-me privado de filhos... todas estas coisas me sobrevêm" (v. 36). Rúben tenta garantir a segurança de Benjamim, mas Jacó recusa (v. 37-38).'
      }
    ],
    conclusion: 'O encontro no Egito não foi um acaso, mas a providência de Deus para salvar a família e tratar o pecado oculto dos irmãos. A dureza inicial de José não foi vingança, mas um meio de levá-los ao arrependimento. Deus muitas vezes usa as dificuldades e as "fomes" da vida para nos confrontar com os nossos pecados passados e nos conduzir à reconciliação.'
  },
  {
    id: 'gen_43_1_34',
    bookId: 'GEN',
    chapter: 43,
    startVerse: 1,
    endVerse: 34,
    title: 'A Segunda Viagem ao Egito',
    theme: 'A Rendição de Jacó e o Banquete da Graça',
    introduction: 'A fome continua implacável. Jacó é forçado a tomar a decisão mais difícil de sua vida: liberar Benjamim para ir ao Egito. Esta viagem marca uma mudança na liderança da família, com Judá assumindo a responsabilidade, e culmina em um banquete surpreendente na casa do governador, onde o medo começa a dar lugar à esperança.',
    points: [
      {
        verseRef: 'v. 1-14',
        title: 'A Rendição de Jacó',
        description: 'Quando o mantimento acaba, Jacó manda os filhos voltarem (v. 1-2). Judá é firme: eles não podem voltar sem Benjamim, e ele se oferece como fiador do rapaz (v. 3-10). Jacó, sem alternativas, cede. Ele manda presentes e o dinheiro em dobro, e profere uma oração de entrega: "Deus Todo-Poderoso (El-Shaddai) vos dê misericórdia... se eu for desfilhado, desfilhado ficarei" (v. 11-14). É a rendição do controle a Deus.'
      },
      {
        verseRef: 'v. 15-25',
        title: 'O Medo e a Recepção',
        description: 'Eles chegam ao Egito e são levados à casa de José. O medo toma conta deles, achando que seriam escravizados por causa do dinheiro devolvido (v. 15-18). Eles tentam se explicar ao mordomo, que os tranquiliza: "Paz seja convosco, não temais; o vosso Deus... vos deu tesouro nos vossos sacos" (v. 23). Simeão é libertado, e eles se preparam para o banquete (v. 24-25).'
      },
      {
        verseRef: 'v. 26-34',
        title: 'O Banquete e a Porção de Benjamim',
        description: 'José chega, e eles novamente se prostram (v. 26). José pergunta pelo pai e, ao ver Benjamim, abençoa-o e sai apressadamente para chorar, profundamente comovido (v. 27-30). No banquete, os irmãos são sentados em ordem exata de idade, o que os deixa atônitos (v. 33). A porção de Benjamim é cinco vezes maior que a dos outros (v. 34). O banquete é um prenúncio da graça e da restauração.'
      }
    ],
    conclusion: 'A rendição de Jacó nos ensina que, às vezes, Deus nos leva ao limite das nossas forças para que confiemos inteiramente no "Deus Todo-Poderoso". A atitude de José no banquete reflete o coração de Deus: Ele nos recebe com graça, nos senta à Sua mesa e nos dá uma porção abundante, mesmo quando merecíamos o julgamento.'
  },
  {
    id: 'gen_44_1_34',
    bookId: 'GEN',
    chapter: 44,
    startVerse: 1,
    endVerse: 34,
    title: 'A Taça de Prata e a Intercessão de Judá',
    theme: 'O Teste Final e o Sacrifício Substitutivo',
    introduction: 'José prepara um último e decisivo teste para seus irmãos. Ele precisa saber se eles mudaram ou se ainda são os mesmos homens cruéis que o venderam e enganaram o pai. A crise forjada com a taça de prata revela a profunda transformação no coração de Judá, que oferece a sua própria vida para salvar o irmão mais novo.',
    points: [
      {
        verseRef: 'v. 1-13',
        title: 'A Taça Escondida e a Acusação',
        description: 'José manda colocar sua taça de prata no saco de Benjamim (v. 1-2). Logo após a partida, o mordomo os alcança e os acusa de roubo (v. 3-6). Confiantes em sua inocência, os irmãos declaram que aquele com quem a taça for encontrada morrerá, e os demais serão escravos (v. 7-9). A taça é encontrada com Benjamim. Em desespero, eles rasgam as vestes e voltam à cidade (v. 11-13).'
      },
      {
        verseRef: 'v. 14-17',
        title: 'A Confissão Coletiva',
        description: 'Eles caem por terra diante de José (v. 14). José os repreende. Judá, assumindo a liderança, não tenta se justificar: "Que diremos a meu senhor?... Deus achou a iniquidade de teus servos" (v. 16). Ele aceita a escravidão para todos. José, no entanto, insiste que apenas Benjamim ficará como escravo (v. 17). Este é o teste: eles abandonarão Benjamim como abandonaram José?'
      },
      {
        verseRef: 'v. 18-34',
        title: 'A Intercessão de Judá',
        description: 'Judá se aproxima e faz um dos discursos mais comoventes da Bíblia. Ele relata a dor do pai, a perda do outro filho (José) e como a vida de Jacó está ligada à vida de Benjamim (v. 18-31). O clímax é a oferta substitutiva de Judá: "Agora, pois, fique o teu servo em lugar do moço por escravo de meu senhor, e que suba o moço com os seus irmãos" (v. 33). Ele prefere ser escravo a ver a dor do pai (v. 34).'
      }
    ],
    conclusion: 'O teste de José revelou que os irmãos haviam mudado. A intercessão de Judá é um belo tipo do Evangelho. Assim como Judá se ofereceu para tomar o lugar do irmão culpado para poupar o pai da dor, Jesus Cristo, o "Leão da tribo de Judá", tomou o nosso lugar na cruz, sofrendo o castigo que nós merecíamos, para nos reconciliar com o Pai.'
  },
  {
    id: 'gen_45_1_15',
    bookId: 'GEN',
    chapter: 45,
    startVerse: 1,
    endVerse: 15,
    title: 'José se Revela aos Irmãos',
    theme: 'O Perdão e a Soberania da Providência Divina',
    introduction: 'Ouvindo a intercessão sacrificial de Judá, José não consegue mais se conter. O teste acabou; o amor venceu. A revelação da sua identidade é um momento de choque e terror para os irmãos, mas José rapidamente transforma o medo deles em uma profunda lição de teologia: Deus estava no controle de tudo, transformando o mal em salvação.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Revelação e o Choque',
        description: 'José manda todos os egípcios saírem e chora tão alto que a casa de Faraó ouve (v. 1-2). Ele declara: "Eu sou José; vive ainda meu pai?" (v. 3). Os irmãos ficam pasmos e aterrorizados, incapazes de responder. O homem que eles venderam como escravo agora tem o poder de vida e morte sobre eles. José os chama para perto: "Eu sou José, vosso irmão, a quem vendestes para o Egito" (v. 4).'
      },
      {
        verseRef: 'v. 5-8',
        title: 'A Teologia da Providência',
        description: 'Em vez de vingança, José oferece perdão baseado na soberania de Deus. Ele diz: "Não vos entristeçais, nem vos irriteis contra vós mesmos... porque para conservação da vida, Deus me enviou adiante de vós" (v. 5). Ele repete isso três vezes (v. 5, 7, 8). José não minimiza o pecado deles, mas reconhece que Deus usou a maldade humana para um propósito maior: preservar um remanescente na terra.'
      },
      {
        verseRef: 'v. 9-15',
        title: 'O Convite e a Reconciliação',
        description: 'José manda que voltem rapidamente e tragam Jacó e toda a família para habitar na terra de Gósen, onde ele os sustentaria durante os cinco anos restantes de fome (v. 9-11). Ele abraça Benjamim e chora, e depois beija todos os seus irmãos, chorando sobre eles (v. 14-15). Somente após esse derramamento de graça e perdão é que "seus irmãos falaram com ele" (v. 15).'
      }
    ],
    conclusion: 'A atitude de José é um dos maiores exemplos de perdão na Bíblia. Ele conseguiu perdoar porque viu a mão de Deus por trás das ações dos homens. Quando entendemos que Deus é soberano e que "todas as coisas cooperam para o bem daqueles que amam a Deus" (Rm 8:28), somos libertos da amargura e capacitados a estender graça àqueles que nos feriram.'
  },
  {
    id: 'gen_46_1_7',
    bookId: 'GEN',
    chapter: 46,
    startVerse: 1,
    endVerse: 7,
    title: 'A Viagem de Jacó para o Egito',
    theme: 'A Direção de Deus e a Promessa de Retorno',
    introduction: 'Ao receber a notícia de que José está vivo, o espírito de Jacó revive. No entanto, deixar a Terra Prometida para viver no Egito era um passo perigoso e teologicamente complexo. Antes de cruzar a fronteira, Jacó para em Berseba para buscar a Deus. A resposta divina lhe dá a segurança necessária para a jornada que mudaria a história de Israel.',
    points: [
      {
        verseRef: 'v. 1',
        title: 'O Altar em Berseba',
        description: 'Jacó parte com tudo o que tem e chega a Berseba, a fronteira sul de Canaã. Ali, ele oferece sacrifícios ao Deus de seu pai Isaque (v. 1). Berseba era um lugar de encontros divinos para Abraão e Isaque. Jacó não quer dar um passo fora da Terra Prometida sem a aprovação do Senhor.'
      },
      {
        verseRef: 'v. 2-4',
        title: 'A Visão e a Promessa',
        description: 'Deus fala a Israel em visões noturnas: "Jacó! Jacó!" (v. 2). Deus se identifica: "Eu sou Deus, o Deus de teu pai" (v. 3). Ele dá três promessas cruciais: 1) "Não temas descer para o Egito, porque lá eu farei de ti uma grande nação"; 2) "Eu descerei contigo para o Egito"; 3) "E certamente te farei tornar a subir" (v. 3-4). Deus garante Sua presença, o cumprimento da promessa de multiplicação e o retorno futuro.'
      },
      {
        verseRef: 'v. 5-7',
        title: 'A Jornada Confiante',
        description: 'Com a palavra de Deus confirmada, Jacó levanta-se de Berseba. Seus filhos o levam, junto com as crianças e as mulheres, nos carros enviados por Faraó (v. 5). Eles levam seu gado e seus bens, e toda a descendência de Jacó entra no Egito (v. 6-7). A viagem que começou com hesitação agora prossegue com a certeza da direção divina.'
      }
    ],
    conclusion: 'A parada de Jacó em Berseba nos ensina a importância de buscar a direção de Deus antes de grandes transições na vida. O Egito representava segurança material, mas também perigo espiritual. A promessa de Deus de "descer com ele" garantiu que, mesmo fora da zona de conforto, ele estaria no centro da vontade de Deus. A presença de Deus é a nossa verdadeira pátria.'
  },
  {
    id: 'gen_47_1_12',
    bookId: 'GEN',
    chapter: 47,
    startVerse: 1,
    endVerse: 12,
    title: 'Jacó Abençoa Faraó',
    theme: 'O Testemunho do Peregrino e a Provisão em Gósen',
    introduction: 'A família de Jacó chega ao Egito. José os apresenta a Faraó, e o encontro entre o idoso patriarca hebreu e o poderoso monarca egípcio é cheio de significado. O homem que não tinha terra para chamar de sua acaba abençoando o dono do maior império da época, demonstrando a superioridade espiritual da aliança de Deus.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Apresentação dos Irmãos',
        description: 'José apresenta cinco de seus irmãos a Faraó (v. 1-2). Instruídos por José, eles declaram sua profissão: "Teus servos são pastores de ovelhas" (v. 3). Eles pedem para habitar na terra de Gósen, pois a fome era grave em Canaã (v. 4). Faraó concede o pedido, dando-lhes "o melhor da terra", e ainda os convida a cuidar do seu próprio gado (v. 5-6).'
      },
      {
        verseRef: 'v. 7-10',
        title: 'O Patriarca e o Monarca',
        description: 'José traz seu pai Jacó e o apresenta a Faraó. Imediatamente, "Jacó abençoou a Faraó" (v. 7). Faraó pergunta a idade de Jacó (v. 8). Jacó responde com uma perspectiva teológica da vida: "Os dias dos anos das minhas peregrinações são cento e trinta anos; poucos e maus foram os dias... e não chegaram aos dias... de meus pais" (v. 9). Jacó se vê como um peregrino. Ao sair, ele abençoa Faraó novamente (v. 10).'
      },
      {
        verseRef: 'v. 11-12',
        title: 'A Provisão em Gósen',
        description: 'José estabelece seu pai e seus irmãos na melhor parte da terra do Egito, em Ramessés, conforme a ordem de Faraó (v. 11). José sustenta a todos com pão, segundo o número de seus filhos (v. 12). A família da promessa está segura, isolada em Gósen (protegida da assimilação cultural egípcia) e sustentada pela providência divina através de José.'
      }
    ],
    conclusion: 'O fato de Jacó abençoar Faraó ilustra o princípio de Hebreus 7:7: "o inferior é abençoado pelo superior". Espiritualmente, o peregrino Jacó era maior que o Faraó. A resposta de Jacó sobre seus dias serem "poucos e maus" reflete as lutas da sua vida, mas também a sua esperança em uma pátria celestial. Como cristãos, também somos peregrinos, chamados a abençoar o mundo enquanto esperamos a nossa herança eterna.'
  },
  {
    id: 'gen_48_1_22',
    bookId: 'GEN',
    chapter: 48,
    startVerse: 1,
    endVerse: 22,
    title: 'Jacó Abençoa Efraim e Manassés',
    theme: 'A Adoção Espiritual e a Soberania da Graça',
    introduction: 'Perto da morte, Jacó adoece. José traz seus dois filhos, Manassés e Efraim, nascidos no Egito, para receberem a bênção do avô. Neste ato solene, Jacó adota os netos como seus próprios filhos e, guiado pelo Espírito, cruza as mãos para abençoar o mais novo em vez do primogênito, reafirmando que a graça de Deus não segue as tradições humanas.',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'A Adoção e a Herança',
        description: 'Jacó relembra a aparição de Deus (El-Shaddai) em Luz (Betel) e a promessa da terra (v. 3-4). Ele então faz uma declaração surpreendente: "Os teus dois filhos... serão meus; Efraim e Manassés serão meus, como Rúben e Simeão" (v. 5). Jacó eleva os filhos de José ao status de chefes de tribos, dando a José a porção dobrada da primogenitura.'
      },
      {
        verseRef: 'v. 8-16',
        title: 'A Bênção e as Mãos Cruzadas',
        description: 'José coloca Manassés (o mais velho) à direita de Jacó e Efraim à esquerda (v. 13). Mas Jacó cruza as mãos, colocando a direita sobre Efraim e a esquerda sobre Manassés (v. 14). Ele invoca o Deus que o sustentou e o Anjo que o livrou de todo o mal, pedindo que abençoe os meninos e que neles seja chamado o seu nome (v. 15-16).'
      },
      {
        verseRef: 'v. 17-22',
        title: 'A Soberania da Escolha Divina',
        description: 'José tenta corrigir as mãos do pai, achando que ele havia errado por causa da cegueira (v. 17-18). Jacó recusa: "Eu o sei, meu filho, eu o sei... o seu irmão menor será maior do que ele" (v. 19). A bênção profética subverte a ordem natural, assim como aconteceu com o próprio Jacó e Esaú. Jacó conclui prometendo que Deus os faria voltar à terra de seus pais (v. 21).'
      }
    ],
    conclusion: 'A bênção de Efraim e Manassés é um testemunho da graça soberana de Deus, que não está presa às nossas regras ou expectativas. Deus frequentemente escolhe as coisas fracas e os menores para confundir os fortes. Além disso, a adoção dos filhos de José nos lembra da nossa própria adoção em Cristo: embora fôssemos estrangeiros, fomos feitos filhos e herdeiros plenos das promessas de Deus.'
  },
  {
    id: 'gen_49_1_28',
    bookId: 'GEN',
    chapter: 49,
    startVerse: 1,
    endVerse: 28,
    title: 'As Profecias de Jacó sobre Seus Filhos',
    theme: 'O Julgamento, a Graça e o Leão da Tribo de Judá',
    introduction: 'No seu leito de morte, Jacó reúne seus doze filhos para declarar o que lhes aconteceria "nos últimos dias". Estas não são apenas bênçãos paternas, mas profecias divinas que moldariam o futuro das doze tribos de Israel. O destaque central é a profecia sobre Judá, de onde viria o Messias.',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'O Julgamento dos Mais Velhos',
        description: 'Rúben, o primogênito, perde a sua preeminência por causa da sua instabilidade e do seu pecado de incesto (v. 3-4). Simeão e Levi são repreendidos por sua violência cruel em Siquém; a consequência é que eles seriam espalhados e divididos em Israel (v. 5-7). O pecado passado tem consequências proféticas para o futuro das tribos.'
      },
      {
        verseRef: 'v. 8-12',
        title: 'A Promessa Messiânica a Judá',
        description: 'A bênção de Judá é a mais gloriosa. Ele será louvado pelos irmãos e vitorioso sobre os inimigos (v. 8). Ele é comparado a um leão (v. 9). O versículo 10 é a profecia messiânica central: "O cetro não se arredará de Judá, nem o bastão de entre seus pés, até que venha Siló (Aquele a quem pertence); e a ele obedecerão os povos". É a promessa do Rei eterno.'
      },
      {
        verseRef: 'v. 22-26',
        title: 'A Bênção Abundante de José',
        description: 'José é descrito como um ramo frutífero junto a uma fonte (v. 22). Embora tenha sido atacado por flecheiros (seus irmãos e as provações), o seu arco permaneceu firme pelas mãos do "Poderoso de Jacó" e do "Pastor e Pedra de Israel" (v. 23-24). Jacó derrama sobre José bênçãos dos céus, do abismo e da fertilidade, coroando aquele que foi separado de seus irmãos (v. 25-26).'
      }
    ],
    conclusion: 'As profecias de Gênesis 49 mostram que Deus é o Senhor da história. As falhas de Rúben, Simeão e Levi abriram caminho para que a liderança passasse para Judá, demonstrando que a linhagem messiânica é estabelecida pela graça e pela escolha divina. A promessa de que o cetro não se arredaria de Judá encontrou o seu cumprimento final em Jesus Cristo, o Leão da tribo de Judá, a quem todos os povos obedecerão.'
  },
  {
    id: 'gen_50_1_14',
    bookId: 'GEN',
    chapter: 50,
    startVerse: 1,
    endVerse: 14,
    title: 'A Morte e o Sepultamento de Jacó',
    theme: 'A Esperança na Promessa Além da Morte',
    introduction: 'Jacó morre no Egito, mas o seu coração estava em Canaã. O seu último pedido foi para não ser enterrado no Egito, mas na caverna de Macpela, junto com seus pais. O grande funeral e a procissão do Egito até Canaã são um testemunho público da fé de Jacó nas promessas de Deus e um prenúncio do futuro Êxodo da nação.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Luto e o Embalsamamento',
        description: 'José chora sobre o rosto de seu pai (v. 1). Ele ordena aos médicos que embalsamem Israel, um processo que levou quarenta dias (v. 2-3). Os egípcios choraram por ele setenta dias. O embalsamamento, embora fosse um costume egípcio, serviu ao propósito prático de preservar o corpo para a longa viagem até Canaã.'
      },
      {
        verseRef: 'v. 4-9',
        title: 'A Permissão e a Grande Procissão',
        description: 'José pede permissão a Faraó para cumprir o juramento feito a seu pai de enterrá-lo em Canaã (v. 4-5). Faraó concede (v. 6). A procissão fúnebre é imensa: todos os servos de Faraó, os anciãos do Egito, toda a casa de José e seus irmãos, acompanhados de carros e cavaleiros (v. 7-9). Foi um testemunho de honra sem precedentes.'
      },
      {
        verseRef: 'v. 10-14',
        title: 'O Pranto em Atade e o Sepultamento',
        description: 'Ao chegarem à eira de Atade, além do Jordão, eles fazem um pranto muito grande e pesado por sete dias (v. 10). Os cananeus observam e chamam o lugar de Abel-Mizraim (Pranto dos Egípcios) (v. 11). Os filhos de Jacó cumprem exatamente a sua ordem, sepultando-o na caverna do campo de Macpela, comprada por Abraão (v. 12-13). Após o sepultamento, José e todos retornam ao Egito (v. 14).'
      }
    ],
    conclusion: 'O sepultamento de Jacó em Canaã foi um ato de fé. Ele morreu no Egito, mas não pertencia ao Egito. Ao exigir ser enterrado na Terra Prometida, ele deixou uma mensagem clara para seus descendentes: o Egito não é o nosso lar; Deus nos levará de volta. Como cristãos, também vivemos neste mundo, mas a nossa pátria e a nossa esperança final estão na promessa da ressurreição e da Nova Jerusalém.'
  },
  {
    id: 'gen_50_15_26',
    bookId: 'GEN',
    chapter: 50,
    startVerse: 15,
    endVerse: 26,
    title: 'O Perdão Final e a Morte de José',
    theme: 'A Providência Divina e a Fé no Êxodo Futuro',
    introduction: 'Com a morte de Jacó, os irmãos de José temem que ele finalmente se vingue. A resposta de José é uma das declarações teológicas mais profundas de toda a Bíblia sobre a soberania de Deus sobre o mal. O livro de Gênesis termina com a morte de José, mas com uma promessa inabalável de que Deus visitaria o Seu povo e os tiraria do Egito.',
    points: [
      {
        verseRef: 'v. 15-18',
        title: 'O Medo e a Súplica dos Irmãos',
        description: 'Os irmãos pensam: "Talvez José nos odeie e nos retribua todo o mal que lhe fizemos" (v. 15). Eles enviam um mensageiro com palavras que dizem ser do pai, pedindo perdão (v. 16-17). Depois, eles mesmos vão, prostram-se diante dele e dizem: "Eis-nos aqui por teus servos" (v. 18). O medo ainda os prendia ao passado.'
      },
      {
        verseRef: 'v. 19-21',
        title: 'A Teologia da Providência e o Perdão',
        description: 'José chora ao ouvir a mensagem (v. 17). Ele os tranquiliza com uma pergunta retórica: "Acaso, estou eu em lugar de Deus?" (v. 19). A vingança pertence a Deus. Então, ele profere a grande síntese da sua vida: "Vós, na verdade, intentastes o mal contra mim; porém Deus o tornou em bem, para fazer... que se conserve muita gente em vida" (v. 20). Ele promete sustentá-los e os consola (v. 21).'
      },
      {
        verseRef: 'v. 22-26',
        title: 'A Morte de José e a Esperança do Êxodo',
        description: 'José vive 110 anos e vê a terceira geração de Efraim (v. 22-23). Perto da morte, ele declara aos irmãos: "Eu morro; porém Deus certamente vos visitará e vos fará subir desta terra" (v. 24). Ele faz os filhos de Israel jurarem que levariam os seus ossos quando Deus os visitasse (v. 25). José morre, é embalsamado e colocado num caixão no Egito (v. 26), aguardando a redenção.'
      }
    ],
    conclusion: 'Gênesis termina com um caixão no Egito, mas cheio de esperança. A vida de José prova que nenhum plano maligno pode frustrar o propósito de Deus; Ele transforma o mal em bem para a nossa salvação. A fé de José no leito de morte (Hebreus 11:22) nos inspira a confiar que Deus sempre cumpre as Suas promessas. A nossa história não termina no "Egito" deste mundo, mas na glória da redenção final.'
  },
  {
    id: 'exo_1_1_22',
    bookId: 'EXO',
    chapter: 1,
    startVerse: 1,
    endVerse: 22,
    title: 'A Opressão no Egito',
    theme: 'O Crescimento do Povo e o Medo do Opressor',
    introduction: 'O livro de Êxodo começa séculos após a morte de José. A pequena família de 70 pessoas multiplicou-se e tornou-se uma nação. No entanto, um novo Faraó, que não conhecia José, vê esse crescimento como uma ameaça. A resposta do império é a escravidão cruel e o infanticídio, mas a resposta de Deus é a preservação milagrosa do Seu povo.',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'A Multiplicação Abundante',
        description: 'O texto lista os filhos de Israel que desceram ao Egito, totalizando 70 pessoas (v. 1-5). Após a morte daquela geração, cumpre-se a promessa feita a Abraão: "os filhos de Israel foram fecundos, e aumentaram muito, e se multiplicaram, e grandemente se fortaleceram, de maneira que a terra se encheu deles" (v. 7). A bênção de Deus é imparável.'
      },
      {
        verseRef: 'v. 8-14',
        title: 'A Escravidão e a Resiliência',
        description: 'Levanta-se um novo rei que não conhecia José (v. 8). Temendo uma aliança dos hebreus com inimigos, ele os submete a trabalhos forçados para construir as cidades-celeiros de Pitom e Ramessés (v. 9-11). Mas a opressão tem o efeito reverso: "quanto mais os afligiam, tanto mais se multiplicavam e tanto mais cresciam" (v. 12). O Egito amargura a vida deles com dura servidão (v. 13-14).'
      },
      {
        verseRef: 'v. 15-22',
        title: 'O Infanticídio e o Temor a Deus',
        description: 'Faraó ordena às parteiras hebréias, Sifrá e Puá, que matem os meninos recém-nascidos (v. 15-16). As parteiras, porém, "temeram a Deus e não fizeram como o rei do Egito lhes ordenara" (v. 17). Deus abençoa as parteiras por sua desobediência civil baseada na fé (v. 20-21). Frustrado, Faraó ordena a todo o seu povo que lance os meninos hebreus no rio Nilo (v. 22).'
      }
    ],
    conclusion: 'O capítulo 1 de Êxodo estabelece o cenário para a grande redenção. Ele nos ensina que a bênção de Deus muitas vezes atrai a oposição do mundo. No entanto, a opressão não pode deter os propósitos divinos; pelo contrário, a igreja frequentemente cresce mais sob perseguição. O exemplo das parteiras nos desafia: o temor a Deus deve sempre superar o medo dos homens e das leis injustas.'
  },
  {
    id: 'exo_2_1_10',
    bookId: 'EXO',
    chapter: 2,
    startVerse: 1,
    endVerse: 10,
    title: 'O Nascimento e a Preservação de Moisés',
    theme: 'A Providência Divina no Meio do Caos',
    introduction: 'No auge do decreto de morte de Faraó, nasce um menino que seria o libertador de Israel. A história de como Moisés foi salvo das águas do Nilo e criado no palácio do próprio rei que queria matá-lo é uma das maiores demonstrações da ironia divina e da providência soberana de Deus na história.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Nascimento e a Arca de Juncos',
        description: 'Um homem e uma mulher da tribo de Levi têm um filho. Vendo que era um menino "formoso", a mãe o esconde por três meses (v. 1-2). Quando não pode mais escondê-lo, ela faz um cesto de juncos, calafeta-o com betume, coloca o menino dentro e o põe nos juncos à margem do rio (v. 3). A irmã do menino (Miriã) fica de longe observando (v. 4). A mãe obedece à lei (colocando-o no rio), mas confia na providência.'
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Compaixão da Princesa',
        description: 'A filha de Faraó desce para se banhar no rio e vê o cesto. Ao abri-lo, vê a criança chorando. O texto diz: "E teve compaixão dele e disse: Este é menino dos hebreus" (v. 5-6). Deus usa o choro de um bebê para tocar o coração da filha do opressor. A providência divina age através das emoções humanas.'
      },
      {
        verseRef: 'v. 7-10',
        title: 'A Ironia da Salvação',
        description: 'Miriã age rapidamente e oferece uma ama hebréia para criar o menino. A princesa concorda, e Miriã chama a própria mãe do bebê (v. 7-8). A filha de Faraó paga a mãe para criar o próprio filho! (v. 9). Quando o menino cresce, é levado à princesa, que o adota e o chama de Moisés, dizendo: "Porque das águas o tirei" (v. 10). O libertador é educado na corte do inimigo.'
      }
    ],
    conclusion: 'A salvação de Moisés mostra que Deus não está limitado pelas leis ou pelo poder dos tiranos. Ele usa um cesto frágil, o choro de um bebê e a filha do inimigo para preservar o Seu escolhido. Quando as circunstâncias parecem desesperadoras e o mal parece triunfar, podemos confiar que a mão invisível de Deus está tecendo os fios da nossa redenção.'
  },
  {
    id: 'exo_2_11_25',
    bookId: 'EXO',
    chapter: 2,
    startVerse: 11,
    endVerse: 25,
    title: 'A Fuga de Moisés e o Clamor de Israel',
    theme: 'O Fracasso Humano e a Preparação no Deserto',
    introduction: 'Moisés cresce no palácio, mas não esquece suas raízes. Ele tenta libertar seu povo com as próprias mãos, mas o resultado é um assassinato, a rejeição pelos seus irmãos e a fuga para o deserto. Foram necessários 40 anos no deserto de Midiã para que Deus transformasse o príncipe impetuoso no pastor manso que lideraria Israel.',
    points: [
      {
        verseRef: 'v. 11-15',
        title: 'A Tentativa Carnal e a Fuga',
        description: 'Moisés, já adulto, sai para ver o sofrimento de seus irmãos. Ao ver um egípcio espancando um hebreu, ele olha para os lados e mata o egípcio, escondendo-o na areia (v. 11-12). No dia seguinte, tenta apartar uma briga entre dois hebreus, mas é rejeitado: "Quem te pôs por príncipe e juiz sobre nós?" (v. 13-14). Descobrindo que o crime era conhecido e que Faraó o procurava para matá-lo, Moisés foge para Midiã (v. 15).'
      },
      {
        verseRef: 'v. 16-22',
        title: 'O Refúgio em Midiã',
        description: 'Em Midiã, Moisés defende as sete filhas do sacerdote Reuel (Jetro) contra pastores que as expulsavam do poço, e dá de beber ao rebanho delas (v. 16-17). Reuel o convida para comer, e Moisés concorda em morar com ele. Ele se casa com Zípora e tem um filho, Gérson, dizendo: "Fui peregrino em terra estranha" (v. 18-22). O príncipe do Egito torna-se um pastor estrangeiro.'
      },
      {
        verseRef: 'v. 23-25',
        title: 'O Clamor e a Memória de Deus',
        description: 'O rei do Egito morre, mas a escravidão continua. Os filhos de Israel gemem e clamam a Deus (v. 23). O texto usa quatro verbos poderosos para descrever a resposta divina: "Deus OUVIU o seu gemido; LEMBROU-SE Deus da sua aliança com Abraão, com Isaque e com Jacó; VIU Deus os filhos de Israel e ATENTOU para a sua condição" (v. 24-25). O tempo do silêncio estava acabando.'
      }
    ],
    conclusion: 'A tentativa fracassada de Moisés nos ensina que não podemos fazer a obra de Deus com a força da carne ou com os métodos do mundo (violência). Deus precisou levar Moisés ao deserto para esvaziá-lo de sua autoconfiança. Ao mesmo tempo, os versículos finais nos garantem que Deus nunca é surdo ao clamor dos oprimidos. Ele ouve, lembra-se da Sua aliança, vê a nossa dor e age no tempo certo.'
  },
  {
    id: 'exo_3_1_12',
    bookId: 'EXO',
    chapter: 3,
    startVerse: 1,
    endVerse: 12,
    title: 'A Sarça Ardente e o Chamado',
    theme: 'O Encontro com o Santo e a Missão Divina',
    introduction: 'Após 40 anos pastoreando ovelhas no deserto, Moisés tem um encontro que muda a história. No monte Horebe, Deus se revela em uma sarça que queima mas não se consome. Este é o momento do chamado oficial de Moisés, onde a santidade de Deus se encontra com a fraqueza humana para realizar uma grande obra de libertação.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Sarça e a Santidade',
        description: 'Moisés leva o rebanho ao monte Horebe (Sinai). O Anjo do Senhor aparece numa chama de fogo no meio de uma sarça (um arbusto comum). O milagre é que a sarça ardia, mas não se consumia (v. 1-3). Quando Moisés se aproxima, Deus o chama pelo nome e ordena: "Tira as sandálias dos pés, porque o lugar em que estás é terra santa" (v. 4-5). Deus se identifica como o Deus dos patriarcas, e Moisés esconde o rosto com medo (v. 6).'
      },
      {
        verseRef: 'v. 7-10',
        title: 'A Compaixão e o Comissionamento',
        description: 'Deus declara a Sua compaixão ativa: "Vi, com efeito, a aflição do meu povo... ouvi o seu clamor... conheço-lhe o sofrimento" (v. 7). Deus anuncia o Seu propósito de descer para livrá-los e levá-los a uma terra que mana leite e mel (v. 8). Então vem o chamado surpreendente: "Vem, agora, e eu te enviarei a Faraó, para que tires o meu povo... do Egito" (v. 10). O Deus que desce para salvar envia um homem para agir.'
      },
      {
        verseRef: 'v. 11-12',
        title: 'A Objeção e a Garantia',
        description: 'Moisés, esvaziado de sua antiga autoconfiança, responde: "Quem sou eu para ir a Faraó e tirar do Egito os filhos de Israel?" (v. 11). Deus não responde exaltando as qualidades de Moisés, mas dando a única garantia que importa: "Eu serei contigo" (v. 12a). O sinal de que Deus o enviou seria que, após a libertação, eles adorariam a Deus naquele mesmo monte (v. 12b).'
      }
    ],
    conclusion: 'A sarça ardente é um símbolo da presença de Deus: Ele é um fogo consumidor, mas não destrói aqueles em quem habita. O chamado de Moisés nos ensina que Deus não procura pessoas capacitadas, mas pessoas disponíveis e reverentes à Sua santidade. A nossa insuficiência ("Quem sou eu?") é irrelevante quando temos a promessa da presença divina ("Eu serei contigo").'
  },
  {
    id: 'exo_3_13_22',
    bookId: 'EXO',
    chapter: 3,
    startVerse: 13,
    endVerse: 22,
    title: 'A Revelação do Nome Divino',
    theme: 'O EU SOU e a Promessa de Libertação',
    introduction: 'Diante do chamado para libertar Israel, Moisés levanta uma questão prática e teológica: "Se me perguntarem qual é o nome de Deus, o que direi?". A resposta de Deus é a revelação mais profunda do Seu ser em todo o Antigo Testamento. Ele não apenas revela o Seu nome, mas detalha o plano exato de como a libertação aconteceria.',
    points: [
      {
        verseRef: 'v. 13-15',
        title: 'EU SOU O QUE SOU',
        description: 'Moisés pergunta o nome de Deus (v. 13). Deus responde: "EU SOU O QUE SOU" (Yahweh). Ele instrui Moisés a dizer: "EU SOU me enviou a vós outros" (v. 14). Este nome revela que Deus é autoexistente, eterno, imutável e a realidade absoluta. Ele também se identifica como o Deus de Abraão, Isaque e Jacó, declarando que este é o Seu nome eternamente (v. 15).'
      },
      {
        verseRef: 'v. 16-18',
        title: 'A Mensagem aos Anciãos',
        description: 'Deus manda Moisés reunir os anciãos de Israel e dar-lhes a mensagem: Deus os visitou, viu a opressão e prometeu tirá-los do Egito para a Terra Prometida (v. 16-17). Deus garante que os anciãos o ouvirão. Juntos, eles devem ir ao rei do Egito e pedir permissão para uma jornada de três dias no deserto para oferecer sacrifícios ao Senhor (v. 18).'
      },
      {
        verseRef: 'v. 19-22',
        title: 'A Previsão da Resistência e do Despojo',
        description: 'Deus não esconde as dificuldades: "Eu sei, porém, que o rei do Egito não vos deixará ir, se não for obrigado por mão forte" (v. 19). Deus promete estender a mão e ferir o Egito com maravilhas, após o que Faraó os deixaria ir (v. 20). Além disso, Deus promete que eles não sairiam vazios; as mulheres pediriam joias e roupas às egípcias, despojando o Egito como pagamento pelos anos de escravidão (v. 21-22).'
      }
    ],
    conclusion: 'A revelação do nome "EU SOU" é a âncora da nossa fé. Deus não é o que nós imaginamos que Ele seja; Ele é quem Ele é. Ele é a resposta para todas as nossas necessidades (Jesus diria mais tarde: "Eu sou o pão da vida", "Eu sou a luz do mundo"). A promessa de Deus a Moisés mostra que Ele conhece o futuro, antecipa a resistência do inimigo e já tem o poder preparado para nos dar a vitória e a restituição.'
  },
  {
    id: 'exo_4_1_17',
    bookId: 'EXO',
    chapter: 4,
    startVerse: 1,
    endVerse: 17,
    title: 'As Objeções de Moisés e os Sinais de Deus',
    theme: 'A Relutância Humana e a Capacitação Divina',
    introduction: 'Mesmo após ver a sarça ardente e ouvir o nome de Deus, Moisés continua relutante. Ele apresenta uma série de desculpas: incredulidade do povo, falta de eloquência e, finalmente, pura falta de vontade. A resposta de Deus combina paciência, demonstração de poder e, por fim, ira disciplinadora, provendo tudo o que Moisés precisava para a missão.',
    points: [
      {
        verseRef: 'v. 1-9',
        title: 'A Objeção da Incredulidade e os Três Sinais',
        description: 'Moisés argumenta: "Eles não crerão em mim" (v. 1). Deus lhe dá três sinais milagrosos: 1) O cajado que vira serpente e volta a ser cajado (v. 2-4), demonstrando poder sobre as forças do mal (e sobre o símbolo do Egito). 2) A mão que fica leprosa e depois é curada (v. 6-7), mostrando poder sobre a doença e a pureza. 3) A água do Nilo que vira sangue na terra seca (v. 9), um prenúncio do julgamento sobre os deuses do Egito.'
      },
      {
        verseRef: 'v. 10-12',
        title: 'A Objeção da Ineloquência e o Criador da Boca',
        description: 'Moisés tenta outra desculpa: "Nunca fui eloquente... sou pesado de boca e pesado de língua" (v. 10). A resposta de Deus é uma profunda declaração de soberania sobre a criação: "Quem fez a boca do homem? Ou quem faz o mudo, ou o surdo, ou o que vê, ou o cego? Não sou eu, o Senhor?" (v. 11). Deus promete ser com a boca de Moisés e ensiná-lo o que falar (v. 12).'
      },
      {
        verseRef: 'v. 13-17',
        title: 'A Recusa Final e a Provisão de Arão',
        description: 'Sem mais desculpas, Moisés diz: "Ah! Senhor! Envia aquele que hás de enviar, menos a mim" (v. 13). A ira do Senhor se acende contra Moisés (v. 14). Deus não desiste do chamado, mas providencia Arão, o levita, irmão de Moisés, para ser o seu porta-voz. Moisés seria como Deus para Arão, e Arão seria o profeta de Moisés (v. 14-16). Deus manda Moisés levar o cajado para fazer os sinais (v. 17).'
      }
    ],
    conclusion: 'A relutância de Moisés reflete os nossos próprios medos diante do chamado de Deus. Focamos nas nossas limitações em vez de focar no poder do "EU SOU". Deus nos capacita com o que temos nas mãos (um simples cajado) e promete ser com a nossa boca. Quando resistimos obstinadamente, entristecemos a Deus, mas Ele, em Sua graça, providencia ajuda (como Arão) para que a Sua obra não seja impedida.'
  },
  {
    id: 'exo_5_1_23',
    bookId: 'EXO',
    chapter: 5,
    startVerse: 1,
    endVerse: 23,
    title: 'O Primeiro Confronto com Faraó',
    theme: 'A Oposição Inicial e a Crise de Fé',
    introduction: 'Moisés e Arão obedecem a Deus e vão a Faraó com a exigência divina: "Deixa ir o meu povo". O resultado imediato não é a libertação, mas um aumento brutal da opressão. Este capítulo ilustra uma verdade espiritual profunda: a obediência a Deus frequentemente piora as circunstâncias antes de melhorá-las, levando a uma crise de fé.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Exigência e a Arrogância',
        description: 'Moisés e Arão entregam a mensagem: "Assim diz o Senhor, Deus de Israel: Deixa ir o meu povo" (v. 1). A resposta de Faraó é pura arrogância e desafio: "Quem é o Senhor para que lhe ouça eu a voz... Não conheço o Senhor, nem tampouco deixarei ir a Israel" (v. 2). Faraó acusa Moisés e Arão de distraírem o povo do trabalho (v. 4-5).'
      },
      {
        verseRef: 'v. 6-14',
        title: 'O Aumento da Opressão',
        description: 'Como retaliação, Faraó ordena aos exatores que não deem mais palha aos hebreus para fazer tijolos, mas exige que a mesma quantidade de tijolos seja produzida (v. 6-9). Faraó os chama de "ociosos" (preguiçosos). O povo se espalha para catar restolho, e os capatazes hebreus são espancados por não atingirem a meta (v. 10-14). A tentativa de libertação trouxe mais sofrimento.'
      },
      {
        verseRef: 'v. 15-23',
        title: 'A Rejeição e a Queixa de Moisés',
        description: 'Os capatazes hebreus apelam a Faraó, mas são rejeitados e humilhados (v. 15-19). Ao saírem, encontram Moisés e Arão e os amaldiçoam, dizendo que eles puseram uma espada na mão de Faraó para matá-los (v. 20-21). Moisés, angustiado, volta-se para Deus com uma queixa honesta: "Senhor, por que afligiste a este povo? Por que me enviaste?... e tu de nenhuma sorte livraste o teu povo" (v. 22-23).'
      }
    ],
    conclusion: 'A reação de Faraó mostra a natureza do inimigo: ele não abre mão dos seus cativos sem lutar e tenta nos convencer de que buscar a Deus é "ociosidade". A queixa de Moisés é compreensível. Quando obedecemos a Deus e as coisas dão errado, a nossa tendência é duvidar do chamado. No entanto, Deus permite essa oposição inicial para que a libertação final seja vista claramente como um ato do Seu poder soberano, e não de negociação humana.'
  },
  {
    id: 'exo_6_1_13',
    bookId: 'EXO',
    chapter: 6,
    startVerse: 1,
    endVerse: 13,
    title: 'A Resposta de Deus à Queixa de Moisés',
    theme: 'A Reafirmação da Aliança e os Sete "Eu Farei"',
    introduction: 'Diante do desespero de Moisés e da piora da escravidão, Deus não o repreende, mas responde com uma poderosa reafirmação de quem Ele é e do que Ele fará. Esta passagem é um dos textos mais ricos teologicamente sobre a aliança, onde Deus baseia a futura libertação no Seu próprio nome (Yahweh) e nas Suas promessas inquebráveis.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Revelação do Nome e a Memória da Aliança',
        description: 'Deus diz a Moisés que agora ele verá o que a "mão poderosa" do Senhor fará a Faraó (v. 1). Deus declara: "Eu sou o Senhor (Yahweh)" (v. 2). Ele explica que apareceu aos patriarcas como El-Shaddai (Deus Todo-Poderoso), mas não se fez conhecer plenamente pelo nome Yahweh (o Deus da aliança redentora) (v. 3). Deus reafirma que estabeleceu a Sua aliança para dar-lhes Canaã e que ouviu os gemidos do povo, lembrando-se da aliança (v. 4-5).'
      },
      {
        verseRef: 'v. 6-8',
        title: 'As Sete Promessas de Redenção',
        description: 'Deus manda Moisés dizer ao povo sete promessas baseadas no "Eu sou o Senhor": 1) Eu vos tirarei das cargas; 2) Eu vos livrarei da servidão; 3) Eu vos resgatarei com braço estendido; 4) Eu vos tomarei por meu povo; 5) Eu serei o vosso Deus; 6) Eu vos levarei à terra prometida; 7) Eu vo-la darei por herança (v. 6-8). É um plano completo de salvação, adoção e herança.'
      },
      {
        verseRef: 'v. 9-13',
        title: 'A Angústia de Espírito e o Novo Mandato',
        description: 'Moisés fala essas palavras de esperança ao povo, "mas eles não ouviram a Moisés, por causa da angústia de espírito e da dura servidão" (v. 9). O sofrimento extremo pode ensurdecer as pessoas para a Palavra de Deus. Deus manda Moisés voltar a Faraó. Moisés hesita novamente, argumentando que se Israel não o ouviu, Faraó também não ouvirá, pois ele tem "lábios incircuncisos" (v. 10-12). Deus, porém, renova a ordem a Moisés e Arão (v. 13).'
      }
    ],
    conclusion: 'Quando as circunstâncias gritam derrota, Deus nos chama a focar no Seu nome e na Sua aliança. A salvação de Israel (e a nossa) não depende do nosso mérito ou da nossa capacidade de crer no meio da dor, mas dos "Eu farei" de Deus. Mesmo quando a angústia nos impede de ouvir a promessa, Deus permanece fiel e continua a executar o Seu plano de redenção com "braço estendido".'
  },
  {
    id: 'exo_7_1_13',
    bookId: 'EXO',
    chapter: 7,
    startVerse: 1,
    endVerse: 13,
    title: 'Moisés como Deus para Faraó e o Sinal da Serpente',
    theme: 'A Autoridade Delegada e o Endurecimento do Coração',
    introduction: 'Antes de iniciar a série de pragas, Deus define claramente os papéis de Moisés e Arão e avisa antecipadamente sobre a reação de Faraó. O primeiro milagre diante de Faraó não é uma praga, mas um sinal de autoridade. A imitação do milagre pelos magos egípcios estabelece o palco para o conflito espiritual que se seguirá.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'O Papel de Moisés e o Propósito de Deus',
        description: 'Deus diz a Moisés: "Vê que te constituí como Deus sobre Faraó, e Arão, teu irmão, será o teu profeta" (v. 1). Moisés falaria com a autoridade divina. Deus avisa que endurecerá o coração de Faraó para multiplicar os Seus sinais e maravilhas (v. 3). O objetivo final não é apenas libertar Israel, mas uma revelação global: "Saberão os egípcios que eu sou o Senhor, quando estender a mão sobre o Egito" (v. 5).'
      },
      {
        verseRef: 'v. 6-10',
        title: 'A Obediência e o Sinal do Cajado',
        description: 'Moisés (com 80 anos) e Arão (com 83 anos) obedecem exatamente ao que o Senhor ordenou (v. 6-7). Eles se apresentam a Faraó. Quando Faraó pede um milagre, Arão lança o seu cajado diante do rei, e o cajado se transforma em uma serpente (v. 8-10). É uma demonstração direta de poder sobre o símbolo da realeza egípcia (a serpente no diadema de Faraó).'
      },
      {
        verseRef: 'v. 11-13',
        title: 'A Imitação dos Magos e o Endurecimento',
        description: 'Faraó chama os sábios e encantadores, que, por suas artes mágicas (ocultismo), fazem o mesmo: lançam seus cajados, que viram serpentes (v. 11-12a). O inimigo tem poder para imitar os sinais de Deus até certo ponto. No entanto, a supremacia de Deus é demonstrada: "o bordão de Arão tragou os bordões deles" (v. 12b). Apesar da evidência, o coração de Faraó se endurece, como o Senhor tinha dito (v. 13).'
      }
    ],
    conclusion: 'A autoridade do crente não vem de si mesmo, mas de ser o porta-voz de Deus. O sinal da serpente nos ensina que o diabo pode imitar a obra de Deus para gerar confusão e endurecer corações, mas o poder de Deus sempre "engole" e derrota o poder do inimigo. O endurecimento de Faraó é um aviso terrível: quando rejeitamos a luz evidente de Deus, o nosso coração se torna cada vez mais insensível à verdade.'
  },
  {
    id: 'exo_11_1_10',
    bookId: 'EXO',
    chapter: 11,
    startVerse: 1,
    endVerse: 10,
    title: 'O Anúncio da Décima Praga',
    theme: 'O Julgamento Final e a Distinção do Povo de Deus',
    introduction: 'Após nove pragas devastadoras que destruíram a economia e a religião do Egito, Faraó continua obstinado. O capítulo 11 é o prelúdio do clímax: a décima praga. Deus anuncia o golpe final que forçará Faraó a não apenas deixar Israel ir, mas a expulsá-los do país. É um momento de terror para o Egito e de vindicação para Israel.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Promessa da Expulsão e o Despojo',
        description: 'Deus diz a Moisés que trará apenas mais uma praga. Depois dela, Faraó não apenas os deixará ir, mas os "expulsará totalmente" (v. 1). Deus instrui o povo a pedir objetos de prata e ouro aos seus vizinhos egípcios (v. 2). Deus dá a Israel favor aos olhos dos egípcios, e o próprio Moisés torna-se grandemente respeitado no Egito (v. 3). O que começou em humilhação termina em honra.'
      },
      {
        verseRef: 'v. 4-7',
        title: 'O Anúncio da Morte dos Primogênitos',
        description: 'Moisés entrega a última mensagem a Faraó: À meia-noite, o Senhor passará pelo meio do Egito, e todo primogênito morrerá, desde o primogênito de Faraó no trono até o da escrava no moinho, e até os primogênitos dos animais (v. 4-5). Haverá um grande clamor no Egito (v. 6). Mas entre os israelitas, "nem ainda um cão rosnará", para que saibam que o Senhor faz distinção entre os egípcios e os israelitas (v. 7).'
      },
      {
        verseRef: 'v. 8-10',
        title: 'A Ira de Moisés e a Obstinação Final',
        description: 'Moisés profetiza que os próprios oficiais de Faraó se prostrarão diante dele, implorando que Israel saia. Tendo dito isso, Moisés sai da presença de Faraó "ardendo em ira" (v. 8). É uma ira justa contra a obstinação destrutiva do rei. O texto conclui resumindo a situação: Deus havia dito que Faraó não ouviria, para que as maravilhas se multiplicassem. Moisés e Arão fizeram os sinais, mas o Senhor endureceu o coração de Faraó (v. 9-10).'
      }
    ],
    conclusion: 'A décima praga é o julgamento definitivo sobre os deuses do Egito (especialmente sobre Faraó, considerado um deus, e seu herdeiro). A distinção que Deus faz entre Israel e o Egito demonstra que a salvação envolve separação do mundo. A ira de Moisés reflete a ira de Deus contra o pecado impenitente. O juízo final de Deus é terrível, mas é o meio pelo qual Ele liberta o Seu povo e estabelece a Sua justiça.'
  }
];

let fileContent = fs.readFileSync('data/pericopes.ts', 'utf8');

// Find the last closing bracket of the array
const lastBracketIndex = fileContent.lastIndexOf('];');

if (lastBracketIndex !== -1) {
  // Convert new pericopes to string, remove the outer brackets
  const newContentString = JSON.stringify(newPericopes, null, 2);
  const innerContent = newContentString.substring(newContentString.indexOf('[') + 1, newContentString.lastIndexOf(']')).trim();
  
  // Insert the new content
  const newFileContent = fileContent.substring(0, lastBracketIndex) + ',\n  ' + innerContent + '\n];\n';
  
  fs.writeFileSync('data/pericopes.ts', newFileContent, 'utf8');
  console.log('Added 20 new pericopes to data/pericopes.ts');
} else {
  console.error('Could not find the end of the array in data/pericopes.ts');
}
