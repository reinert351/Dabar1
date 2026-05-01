const fs = require('fs');

const newPericopes = [
  {
    id: 'rut_2_1_13',
    bookId: 'RUT',
    chapter: 2,
    startVerse: 1,
    endVerse: 13,
    title: 'Rute no Campo de Boaz',
    theme: 'A Providência Divina, a Graça e o Trabalho Humilde',
    introduction: 'O livro de Rute é uma obra-prima sobre a providência silenciosa de Deus. Após retornar a Belém com sua sogra Noemi, amargurada e pobre, Rute toma a iniciativa de buscar sustento. Em Rute 2, vemos como a "coincidência" humana é, na verdade, a providência divina. Rute vai respigar no campo e, "por casualidade", entra na propriedade de Boaz, um parente rico e resgatador. A história destaca a dignidade do trabalho humilde, a graça surpreendente de Boaz e como Deus orquestra os detalhes mais simples para cumprir Seus grandes propósitos redentores.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Iniciativa Humilde e a "Coincidência" Divina',
        description: 'Rute pede para respigar, aproveitando uma lei de proteção aos pobres (Levítico 19:9-10). Ela vai parar exatamente no campo de Boaz. O que parece um mero acaso ("por casualidade") é a mão invisível de Deus guiando os seus passos para o lugar da sua redenção.'
      },
      {
        verseRef: 'v. 4-9',
        title: 'A Chegada de Boaz e a Proteção',
        description: 'Boaz chega abençoando seus servos. Ele nota Rute e oferece proteção e provisão exclusivas em seu campo, mandando que os jovens não a toquem e que ela beba da água deles. A generosidade de Boaz reflete o coração do próprio Deus para com os estrangeiros e necessitados.'
      },
      {
        verseRef: 'v. 10-13',
        title: 'A Graça Imerecida e o Refúgio sob as Asas',
        description: 'Rute se prostra e pergunta por que achou graça sendo estrangeira. Boaz elogia sua lealdade a Noemi e pronuncia uma bênção profunda: que o Senhor a recompense, sob cujas asas ela veio buscar refúgio. Rute encontra segurança não apenas no campo de Boaz, mas nas asas do Deus de Israel.'
      }
    ],
    conclusion: 'A história de Rute no campo de Boaz nos ensina que Deus está ativamente envolvido nos detalhes cotidianos da nossa vida. Não existem coincidências para o crente, apenas a providência divina. Rute não ficou em casa esperando um milagre; ela foi trabalhar humildemente, e Deus a encontrou no campo. Além disso, Boaz é um belo tipo de Cristo: o Senhor rico e gracioso que nota a estrangeira pobre, oferece-lhe água, protege-a do mal e a convida para a Sua mesa. A graça que Rute experimentou é a mesma graça que nos alcançou.'
  },
  {
    id: 'rut_3_1_13',
    bookId: 'RUT',
    chapter: 3,
    startVerse: 1,
    endVerse: 13,
    title: 'O Pedido na Eira',
    theme: 'A Ousadia da Fé, a Pureza e o Parente Resgatador',
    introduction: 'Noemi, percebendo a providência de Deus através de Boaz, instrui Rute a dar um passo ousado e culturalmente arriscado para garantir o futuro de ambas. Em Rute 3, Rute vai à eira à noite e se deita aos pés de Boaz. Este ato não era uma sedução imoral, mas um pedido formal e legal de casamento e proteção sob a lei do "parente resgatador" (goel). O episódio revela a pureza de caráter de ambos, a ousadia da fé que busca a redenção e aponta para Jesus Cristo, o nosso verdadeiro Resgatador que estende a Sua capa de graça sobre nós.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'O Plano de Noemi e a Obediência de Rute',
        description: 'Noemi busca "descanso" (segurança matrimonial) para Rute. Ela instrui Rute a se lavar, perfumar-se e deitar-se aos pés de Boaz na eira após ele dormir. Rute obedece prontamente, confiando na sabedoria da sogra, mesmo sendo um plano que exigia extrema vulnerabilidade.'
      },
      {
        verseRef: 'v. 6-9',
        title: 'O Despertar de Boaz e o Pedido de Resgate',
        description: 'Boaz acorda assustado à meia-noite. Rute se identifica e faz o pedido crucial: "Estende a tua capa sobre a tua serva, porque tu és o remidor". O ato de estender a capa simbolizava proteção e casamento (Ezequiel 16:8). Ela pede que ele assuma a responsabilidade legal de resgatá-la.'
      },
      {
        verseRef: 'v. 10-13',
        title: 'A Resposta Honrosa e a Promessa',
        description: 'Boaz não se aproveita da situação na escuridão. Ele elogia a virtude de Rute, chamando-a de "mulher virtuosa". Ele promete fazer tudo o que ela pede, mas revela um obstáculo legal: há um parente mais chegado que tem a prioridade do resgate. A integridade de Boaz brilha na sua obediência à lei.'
      }
    ],
    conclusion: 'O encontro na eira é uma das cenas mais puras e belas das Escrituras. Ele nos ensina sobre a ousadia da fé. Rute não exigiu seus direitos; ela se colocou aos pés do resgatador e pediu a sua graça. Espiritualmente, esta é a postura do pecador diante de Cristo. Nós nos prostramos aos Seus pés e pedimos: "Estende a Tua capa de justiça sobre mim, pois Tu és o meu Redentor". Assim como Boaz não rejeitou Rute, Cristo nunca rejeita aquele que vem a Ele em fé e submissão.'
  },
  {
    id: 'rut_4_1_12',
    bookId: 'RUT',
    chapter: 4,
    startVerse: 1,
    endVerse: 12,
    title: 'O Resgate e o Casamento',
    theme: 'A Redenção Legal, o Preço Pago e a Linhagem Real',
    introduction: 'O capítulo 4 de Rute traz o clímax legal e romântico da história. Boaz vai à porta da cidade (o tribunal da época) para resolver a questão do resgate de Rute e das terras de Elimeleque. O parente mais próximo recusa o resgate por medo de prejudicar sua própria herança. Boaz, movido por amor e dever, assume o custo total. A história de Rute culmina não apenas na restauração de uma família pobre, mas na inserção de uma estrangeira moabita na linhagem real do rei Davi e, em última instância, de Jesus Cristo.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'O Tribunal na Porta e a Recusa do Parente',
        description: 'Boaz reúne dez anciãos na porta da cidade. Ele oferece a terra ao parente mais próximo. O parente aceita a terra, mas recusa imediatamente quando descobre que deve casar com Rute para suscitar descendência ao falecido. Ele teme "destruir a sua própria herança". O amor calculista recua diante do custo.'
      },
      {
        verseRef: 'v. 7-10',
        title: 'A Cerimônia do Calçado e a Compra da Redenção',
        description: 'O parente tira o sapato, simbolizando a transferência do direito de resgate. Boaz declara publicamente que comprou tudo o que era de Elimeleque e tomou Rute por mulher. A redenção exigiu um preço alto, mas Boaz estava disposto a pagar por amor a Rute e respeito à memória de sua família.'
      },
      {
        verseRef: 'v. 11-12',
        title: 'A Bênção dos Anciãos e o Fruto da Graça',
        description: 'O povo e os anciãos abençoam Rute, comparando-a a Raquel e Leia, que edificaram a casa de Israel. Desta união nascerá Obede, avô de Davi. A graça de Deus transformou uma viúva estrangeira, amaldiçoada pela lei (Deuteronômio 23:3), em uma matriarca da fé e ancestral do Messias.'
      }
    ],
    conclusion: 'A redenção de Rute por Boaz é a imagem perfeita da nossa redenção em Cristo. A Lei (representada pelo parente mais próximo) não podia nos salvar; ela só podia apontar o nosso dever, mas recuava diante do custo da nossa miséria. Então veio Jesus, o nosso Boaz celestial. Movido por amor, Ele assumiu a nossa dívida, pagou o preço total com o Seu próprio sangue na cruz (a porta da cidade) e nos tomou como Sua noiva. A história de Rute nos lembra que o amor redentor de Deus não conhece fronteiras e transforma tragédias em genealogias de glória.'
  },
  {
    id: '1sa_4_1_11',
    bookId: '1SA',
    chapter: 4,
    startVerse: 1,
    endVerse: 11,
    title: 'A Captura da Arca da Aliança',
    theme: 'A Religião Superficial, o Amuleto Mágico e a Glória que se Foi',
    introduction: 'O início de 1 Samuel revela o estado de decadência espiritual de Israel sob o sacerdócio de Eli e seus filhos ímpios, Hofni e Fineias. Em 1 Samuel 4, Israel é derrotado pelos filisteus. Em vez de se arrependerem, os líderes decidem trazer a Arca da Aliança para o campo de batalha, tratando a presença de Deus como um amuleto mágico para garantir a vitória. O resultado é catastrófico: uma derrota ainda maior, a morte dos sacerdotes e a captura da Arca. O texto é um alerta severo contra a tentativa de manipular Deus para os nossos próprios fins.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Derrota Inicial e a Ideia Supersticiosa',
        description: 'Israel perde 4.000 homens. Os anciãos perguntam: "Por que nos feriu o Senhor hoje?". Em vez de buscarem a Deus em arrependimento e consertarem os seus caminhos, decidem trazer a Arca de Siló, achando que o objeto físico os salvaria. Eles queriam os benefícios de Deus sem a submissão a Deus.'
      },
      {
        verseRef: 'v. 5-9',
        title: 'O Falso Triunfalismo e o Temor Filisteu',
        description: 'Quando a Arca chega, Israel dá um grito tão alto que a terra treme. É um avivamento falso, baseado em emoção e superstição. Os filisteus ficam aterrorizados, lembrando-se das pragas do Egito. No entanto, o medo os motiva a lutar com ainda mais desespero e coragem.'
      },
      {
        verseRef: 'v. 10-11',
        title: 'A Tragédia e a Captura da Arca',
        description: 'Israel é esmagado, perdendo 30.000 homens. Hofni e Fineias são mortos, cumprindo a profecia divina. O pior de tudo: a Arca de Deus é tomada. Deus permitiu que o símbolo de Sua presença fosse capturado para provar que Ele não pode ser controlado pelo homem nem usado como mascote.'
      }
    ],
    conclusion: 'A captura da Arca é uma das lições mais duras sobre a santidade de Deus. Muitas vezes, agimos como os anciãos de Israel: quando enfrentamos derrotas, tentamos usar "fórmulas mágicas" espirituais (um jejum, uma campanha, um objeto ungido) para forçar Deus a nos abençoar, sem tratarmos o pecado no nosso coração. Deus não é um gênio da lâmpada que obedece aos nossos gritos de guerra. A verdadeira vitória não vem de carregar os símbolos da religião, mas de carregar a cruz do arrependimento e da obediência diária.'
  },
  {
    id: '1sa_8_1_9',
    bookId: '1SA',
    chapter: 8,
    startVerse: 1,
    endVerse: 9,
    title: 'O Pedido por um Rei',
    theme: 'A Rejeição da Teocracia, o Desejo de Ser Como o Mundo e a Concessão Divina',
    introduction: 'Samuel envelheceu, e seus filhos, que ele nomeou como juízes, eram corruptos. Diante dessa crise de liderança e da ameaça de nações vizinhas, os anciãos de Israel vão a Samuel com um pedido revolucionário: "Constitui-nos um rei para que nos julgue, como o têm todas as nações". Em 1 Samuel 8, vemos um ponto de virada na história bíblica. O pedido não era apenas por uma mudança política, mas uma rejeição espiritual. Eles queriam segurança visível e conformidade cultural em vez de confiarem no governo invisível de Yahweh.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Corrupção dos Filhos e a Demanda do Povo',
        description: 'Os filhos de Samuel aceitavam subornos e pervertiam a justiça. Os anciãos usam essa falha humana como desculpa para exigir um rei "como todas as nações". O desejo de ser igual ao mundo e ter uma liderança visível e militarizada é a raiz da sua rebelião contra o modelo de Deus.'
      },
      {
        verseRef: 'v. 6-7',
        title: 'A Tristeza de Samuel e a Perspectiva de Deus',
        description: 'Samuel fica desgostoso, sentindo-se rejeitado, e ora ao Senhor. Deus o conforta com uma verdade dolorosa: "Não te rejeitaram a ti, mas a mim, para eu não reinar sobre eles". A rejeição da liderança profética era, na verdade, a rejeição da teocracia divina. Eles não queriam mais andar pela fé.'
      },
      {
        verseRef: 'v. 8-9',
        title: 'O Padrão Histórico e a Concessão com Advertência',
        description: 'Deus diz que eles estão apenas repetindo o que sempre fizeram desde o Egito: abandonando a Deus por outros deuses. Deus ordena que Samuel atenda ao pedido, mas que proteste solenemente e declare os "direitos" (o peso, os impostos e a opressão) que o rei humano trará sobre eles.'
      }
    ],
    conclusion: 'O pedido por um rei nos ensina sobre o perigo de querermos ser "como todas as nações". A Igreja frequentemente cai na mesma armadilha: quando enfrentamos crises, somos tentados a abandonar a dependência do Espírito Santo e adotar os métodos corporativos e as estruturas de poder do mundo. Além disso, este capítulo revela uma verdade assustadora: às vezes, o pior juízo de Deus é nos dar exatamente o que pedimos. Deus concedeu um rei a Israel, mas isso trouxe séculos de dor e opressão. Devemos orar para que a vontade de Deus prevaleça sobre os nossos desejos carnais.'
  },
  {
    id: '1sa_13_1_14',
    bookId: '1SA',
    chapter: 13,
    startVerse: 1,
    endVerse: 14,
    title: 'O Sacrifício Ilícito de Saul',
    theme: 'A Impaciência, a Presunção e a Perda do Reino',
    introduction: 'Saul havia sido ungido o primeiro rei de Israel, mas o seu caráter logo foi testado. Em 1 Samuel 13, diante de um exército filisteu esmagador e vendo o seu próprio exército desertar de medo, Saul entra em pânico. Samuel havia instruído Saul a esperar sete dias em Gilgal. No sétimo dia, como Samuel se atrasou, Saul tomou a iniciativa e ofereceu ele mesmo o holocausto, usurpando a função sacerdotal. Este ato de presunção e impaciência custou-lhe a dinastia. A história revela que a obediência estrita a Deus é mais importante do que o pragmatismo religioso em tempos de crise.',
    points: [
      {
        verseRef: 'v. 1-7',
        title: 'A Crise Militar e o Pânico do Povo',
        description: 'Os filisteus reúnem um exército gigantesco. O povo de Israel fica apavorado, escondendo-se em cavernas e buracos. Saul está em Gilgal, e o povo que o segue está tremendo de medo. A pressão sobre o líder é imensa, e o tempo parece estar se esgotando.'
      },
      {
        verseRef: 'v. 8-10',
        title: 'A Impaciência e a Usurpação do Altar',
        description: 'Saul espera os sete dias, mas Samuel não chega. Vendo o povo se dispersar, Saul decide agir por conta própria: "Trazei-me aqui um holocausto". Assim que ele termina de oferecer o sacrifício, Samuel chega. A pressa e o medo o levaram a cruzar uma linha sagrada de desobediência.'
      },
      {
        verseRef: 'v. 11-14',
        title: 'A Desculpa Esfarrapada e a Sentença Divina',
        description: 'Saul tenta justificar seu pecado com pragmatismo: o povo estava fugindo, os inimigos estavam perto, e ele se sentiu "forçado" a buscar o favor de Deus. Samuel declara a sentença: Saul agiu nesciamente; seu reino não subsistirá. Deus já buscou "um homem segundo o seu coração" para substituí-lo.'
      }
    ],
    conclusion: 'A queda de Saul começou não com um escândalo moral, mas com a impaciência religiosa. Ele achou que o sacrifício (o ritual) era mais importante do que a obediência à palavra do profeta. Quantas vezes, sob pressão, nós "forçamos" a situação e tomamos atitudes precipitadas porque Deus parece estar demorando? O pragmatismo diz: "Os fins justificam os meios". Mas no Reino de Deus, a obediência é o único meio aceitável. Deus não procura líderes que saibam resolver crises com suas próprias mãos, mas homens e mulheres "segundo o Seu coração", que confiam nEle mesmo quando o exército está fugindo.'
  },
  {
    id: '1sa_18_1_9',
    bookId: '1SA',
    chapter: 18,
    startVerse: 1,
    endVerse: 9,
    title: 'A Amizade de Jônatas e a Inveja de Saul',
    theme: 'O Amor Altruísta, o Ciúme Destrutivo e a Ascensão de Davi',
    introduction: 'Após a vitória espetacular de Davi sobre Golias, duas reações opostas emergem na corte real. Por um lado, Jônatas, o príncipe herdeiro, desenvolve uma amizade profunda e pactual com Davi, baseada no amor e no reconhecimento do chamado de Deus. Por outro lado, o rei Saul é consumido por uma inveja doentia ao ouvir as mulheres cantarem os louvores de Davi. 1 Samuel 18:1-9 contrasta o amor altruísta que abre mão do poder com o ciúme egoísta que destrói a alma e o reino.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Aliança de Amor entre Jônatas e Davi',
        description: 'A alma de Jônatas se liga à de Davi. Ele o ama como à sua própria alma. Jônatas faz uma aliança com Davi e, num ato profético de submissão, tira a sua capa, sua armadura, sua espada e seu arco, e os dá a Davi. O príncipe herdeiro reconhece e honra o futuro rei escolhido por Deus.'
      },
      {
        verseRef: 'v. 5-7',
        title: 'O Sucesso de Davi e o Cântico das Mulheres',
        description: 'Davi é bem-sucedido em todas as missões. Ao retornarem da batalha, as mulheres cantam: "Saul feriu os seus milhares, porém Davi os seus dez milhares". O sucesso de Davi, que deveria ser motivo de alegria para o rei, torna-se o estopim para a insegurança de Saul.'
      },
      {
        verseRef: 'v. 8-9',
        title: 'A Raiva de Saul e a Semente da Inveja',
        description: 'Saul se ira profundamente com a comparação. Ele diz: "Só lhe falta o reino". A partir daquele dia, Saul passou a olhar para Davi com suspeita e inveja. O ciúme transformou o herói nacional no maior inimigo pessoal do rei, abrindo a porta para a loucura espiritual.'
      }
    ],
    conclusion: 'Este texto nos apresenta dois caminhos diante do sucesso dos outros. O caminho de Jônatas é o do amor e da humildade: ele reconheceu a unção de Deus sobre Davi e se alegrou, mesmo que isso significasse abrir mão do seu próprio trono. O caminho de Saul é o do orgulho e da inveja: ele viu o sucesso de Davi como uma ameaça ao seu ego. A inveja é um câncer espiritual que cega a nossa visão e destrói os nossos relacionamentos. Devemos orar para ter o coração de Jônatas, capazes de celebrar e apoiar aqueles que Deus está levantando, mesmo que eles nos ultrapassem.'
  },
  {
    id: '1sa_20_1_17',
    bookId: '1SA',
    chapter: 20,
    startVerse: 1,
    endVerse: 17,
    title: 'O Pacto de Davi e Jônatas',
    theme: 'A Lealdade na Adversidade, a Proteção Divina e a Aliança Eterna',
    introduction: 'A perseguição de Saul contra Davi torna-se implacável. Davi foge e procura Jônatas, questionando o que ele fez para merecer a morte. Em 1 Samuel 20, testemunhamos a profundidade da lealdade de Jônatas. Ele se recusa a acreditar na maldade do pai, mas concorda em testar as intenções de Saul durante a festa da Lua Nova. O pacto renovado entre eles no campo é um dos maiores exemplos bíblicos de amizade verdadeira, onde a lealdade a Deus e ao amigo supera os laços de sangue e a ambição política.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Desespero de Davi e a Promessa de Jônatas',
        description: 'Davi diz a famosa frase: "Há apenas um passo entre mim e a morte". Jônatas, ainda tentando ver o melhor em seu pai, promete fazer qualquer coisa que a alma de Davi desejar para protegê-lo. A verdadeira amizade se revela no vale da sombra da morte.'
      },
      {
        verseRef: 'v. 5-11',
        title: 'O Plano da Lua Nova e o Teste de Lealdade',
        description: 'Davi propõe faltar ao banquete real. Se Saul aceitar pacificamente, Davi está seguro; se Saul se irar, o mal está determinado. Jônatas concorda em ser o informante de Davi, arriscando sua própria posição na corte e a ira do seu pai para salvar o amigo.'
      },
      {
        verseRef: 'v. 12-17',
        title: 'A Renovação da Aliança e a Visão do Futuro',
        description: 'Jônatas faz um juramento solene perante o Senhor. Ele reconhece que Deus cortará os inimigos de Davi. Jônatas pede apenas que Davi use de misericórdia com a sua descendência no futuro. Eles juram novamente, "porquanto o amava com todo o amor da sua alma".'
      }
    ],
    conclusion: 'A amizade entre Davi e Jônatas transcende o afeto humano; é uma aliança baseada no temor do Senhor. Jônatas é um herói esquecido. Ele escolheu ficar do lado do ungido de Deus, mesmo quando este era um fugitivo rejeitado pelo sistema. Espiritualmente, Jônatas nos ensina sobre a nossa lealdade a Cristo. O mundo (representado por Saul) rejeita o verdadeiro Rei. Nós somos chamados a fazer uma aliança com o Filho de Davi, amando-O mais do que a nossa própria vida e posição, sabendo que o Seu reino prevalecerá eternamente.'
  },
  {
    id: '1sa_25_2_35',
    bookId: '1SA',
    chapter: 25,
    startVerse: 2,
    endVerse: 35,
    title: 'A Sabedoria de Abigail',
    theme: 'A Insensatez, a Ira Descontrolada e a Intercessão Pacificadora',
    introduction: 'Durante sua fuga no deserto, Davi e seus homens protegeram os rebanhos de um homem rico e insensato chamado Nabal. Quando Davi pede uma contribuição voluntária durante a tosquia, Nabal o insulta grosseiramente. Davi, tomado pela ira, marcha com 400 homens para massacrar a casa de Nabal. Em 1 Samuel 25, a tragédia é evitada pela intervenção brilhante de Abigail, esposa de Nabal. Com sabedoria, humildade e provisões, ela intercepta Davi, apazigua a sua ira e o impede de derramar sangue inocente, salvando o futuro rei de cometer um erro terrível.',
    points: [
      {
        verseRef: 'v. 2-13',
        title: 'A Insensatez de Nabal e a Fúria de Davi',
        description: 'Nabal é descrito como "duro e maligno", enquanto Abigail é "de bom entendimento". Nabal rejeita os mensageiros de Davi com desprezo. Davi reage carnalmente, ordenando que seus homens cinjam as espadas para vingança. O homem segundo o coração de Deus quase perde tudo em um momento de raiva.'
      },
      {
        verseRef: 'v. 14-22',
        title: 'A Ação Rápida de Abigail',
        description: 'Um servo avisa Abigail do perigo iminente. Sem avisar o marido insensato, ela prepara um banquete generoso e cavalga ao encontro de Davi. A sabedoria exige ação rápida, coragem e sacrifício para evitar o desastre e promover a paz.'
      },
      {
        verseRef: 'v. 23-35',
        title: 'A Intercessão e a Prevenção do Pecado',
        description: 'Abigail se prostra diante de Davi, assume a culpa e o lembra do seu chamado divino. Ela argumenta que derramar sangue sem causa seria um peso na consciência do futuro rei. Davi reconhece que Deus a enviou para impedi-lo de pecar, aceita a oferta e a abençoa por sua prudência.'
      }
    ],
    conclusion: 'Abigail é um dos maiores exemplos de sabedoria e intercessão no Antigo Testamento. Ela se colocou entre a ofensa do seu marido e a espada de Davi, assim como Cristo se colocou entre o nosso pecado e a ira de Deus. Além disso, a história é um aviso para nós: mesmo pessoas espirituais como Davi podem ser dominadas pela ira e pelo desejo de vingança quando são insultadas. Deus, em Sua graça, frequentemente usa "Abigails" (pessoas sábias, um sermão, um conselho) para nos interceptar no caminho da nossa fúria e nos impedir de arruinar o nosso testemunho.'
  },
  {
    id: '1sa_28_3_19',
    bookId: '1SA',
    chapter: 28,
    startVerse: 3,
    endVerse: 19,
    title: 'Saul e a Médium de En-Dor',
    theme: 'O Silêncio de Deus, o Desespero e a Consulta às Trevas',
    introduction: 'O fim da vida de Saul é uma das narrativas mais sombrias e trágicas das Escrituras. Samuel havia morrido, e os filisteus estavam acampados para a batalha final. Aterrorizado, Saul busca a orientação de Deus, mas o Senhor não lhe responde "nem por sonhos, nem por Urim, nem por profetas". Em total desespero, Saul, que antes havia expulsado os feiticeiros da terra, disfarça-se e procura uma médium em En-Dor para invocar o espírito de Samuel. O episódio revela o abismo espiritual de um homem que abandonou a Deus e, como resultado, foi abandonado à sua própria ruína.',
    points: [
      {
        verseRef: 'v. 3-7',
        title: 'O Terror Filisteu e o Silêncio Divino',
        description: 'Saul vê o exército filisteu e seu coração treme muito. O silêncio de Deus é a consequência de anos de desobediência obstinada e do massacre dos sacerdotes em Nobe. Sem resposta divina, Saul ordena que busquem uma mulher que tenha "espírito de feiticeira", quebrando a sua própria lei.'
      },
      {
        verseRef: 'v. 8-14',
        title: 'O Disfarce e a Invocação',
        description: 'Saul se disfarça e vai à noite. Ele jura pela vida do Senhor (uma ironia trágica) que a mulher não será punida. Ele pede para ver Samuel. Quando a mulher vê a figura subindo da terra, ela grita aterrorizada, percebendo que o cliente é o próprio rei Saul.'
      },
      {
        verseRef: 'v. 15-19',
        title: 'A Mensagem de Condenação',
        description: 'Samuel (ou uma manifestação permitida por Deus para juízo) pergunta por que Saul o inquietou. A resposta é implacável: Deus se tornou inimigo de Saul, o reino foi rasgado e dado a Davi, e amanhã, Saul e seus filhos estarão mortos. Saul cai por terra, totalmente sem forças e sem esperança.'
      }
    ],
    conclusion: 'A visita de Saul a En-Dor é a prova final de sua falência espiritual. Quando rejeitamos a Palavra de Deus repetidamente, corremos o risco de experimentar o silêncio de Deus. O desespero levou Saul a buscar nas trevas a luz que ele havia rejeitado. A necromancia e o ocultismo são abominações ao Senhor (Deuteronômio 18:10-12) e nunca trazem paz, apenas condenação. A tragédia de Saul nos ensina que não há atalhos espirituais. A única resposta segura para o silêncio de Deus não é buscar vozes alternativas, mas o arrependimento profundo e o retorno à obediência.'
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
console.log(`Added ${addedCount} new pericopes (Batch 15).`);
