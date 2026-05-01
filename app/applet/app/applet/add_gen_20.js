const fs = require('fs');

const newPericopes = [
  {
    id: 'gen_2_1_3',
    bookId: 'GEN',
    chapter: 2,
    startVerse: 1,
    endVerse: 3,
    title: 'O Descanso de Deus',
    theme: 'O Sábado e a Conclusão da Criação',
    introduction: `Após seis dias de intensa atividade criativa, onde o universo e tudo o que nele há foram formados pela palavra de Deus, o relato do Gênesis nos apresenta um momento de pausa. Deus não estava cansado, pois o Criador não se fatiga. O Seu descanso é uma celebração da obra concluída, um selo de perfeição sobre tudo o que foi feito.`,
    points: [
      {
        title: 'A Obra Concluída',
        description: `O texto enfatiza que "foram acabados" os céus e a terra. Deus não deixou nada pela metade. A criação estava completa, harmoniosa e perfeita, refletindo a glória e a sabedoria do seu Autor.`
      },
      {
        title: 'O Descanso Divino',
        description: `No sétimo dia, Deus "descansou" (shabat). Este descanso não é inatividade, mas a cessação da obra de criação. É Deus assumindo o Seu trono sobre o universo concluído, desfrutando da Sua obra.`
      },
      {
        title: 'A Santificação do Sétimo Dia',
        description: `Deus abençoou e santificou o sétimo dia. Ele o separou como um dia especial, um memorial perpétuo da criação. Este princípio do sábado (descanso) foi mais tarde incorporado na Lei para o benefício físico e espiritual da humanidade.`
      }
    ],
    conclusion: `O descanso de Deus em Gênesis 2 nos convida a reconhecer a soberania do Criador e a perfeição de Sua obra. Ele nos chama a entrar no Seu descanso, confiando que Ele tem o controle de todas as coisas. Em Cristo, encontramos o verdadeiro descanso para as nossas almas, celebrando a obra consumada da redenção, assim como Deus celebrou a obra consumada da criação.`
  },
  {
    id: 'gen_2_4_14',
    bookId: 'GEN',
    chapter: 2,
    startVerse: 4,
    endVerse: 14,
    title: 'O Jardim do Éden',
    theme: 'A Provisão e o Cuidado de Deus',
    introduction: `Gênesis 2 nos dá um olhar mais detalhado e íntimo sobre a criação da humanidade e o ambiente preparado para ela. Deus não apenas criou o homem, mas plantou um jardim especial no Éden para ser o seu lar. Este jardim representa o ideal de Deus para a habitação humana: um lugar de beleza, abundância, propósito e comunhão com o Criador.`,
    points: [
      {
        title: 'O Sopro de Vida',
        description: `Deus formou o homem do pó da terra, demonstrando nossa fragilidade e conexão com a criação material. Mas Ele também soprou em suas narinas o fôlego de vida, tornando o homem um ser vivente, com uma capacidade única de se relacionar com Deus.`
      },
      {
        title: 'O Jardim Plantado por Deus',
        description: `Deus mesmo plantou o jardim no Éden. Era um lugar de provisão abundante, com árvores agradáveis à vista e boas para comida. O Éden era um santuário, um lugar onde a presença de Deus habitava com o homem.`
      },
      {
        title: 'As Árvores no Centro',
        description: `No meio do jardim estavam a Árvore da Vida e a Árvore do Conhecimento do Bem e do Mal. Elas representavam a escolha diante da humanidade: a dependência contínua de Deus para a vida, ou a autonomia moral que leva à morte.`
      }
    ],
    conclusion: `O relato do Jardim do Éden nos mostra o coração de Deus para a humanidade: Ele deseja nos abençoar, prover para nós e ter comunhão conosco. Embora o paraíso tenha sido perdido pelo pecado, a promessa bíblica é a restauração desse paraíso na Nova Jerusalém, onde a Árvore da Vida estará novamente acessível aos redimidos.`
  },
  {
    id: 'gen_2_15_25',
    bookId: 'GEN',
    chapter: 2,
    startVerse: 15,
    endVerse: 25,
    title: 'A Criação da Mulher e o Casamento',
    theme: 'O Propósito de Deus para a Família',
    introduction: `Após colocar o homem no jardim para cultivá-lo e guardá-lo, Deus faz uma declaração surpreendente: "Não é bom que o homem esteja só". Esta é a primeira vez que Deus diz que algo "não é bom" na criação. Para resolver essa solidão, Deus cria a mulher, estabelecendo o fundamento para o casamento e a família humana.`,
    points: [
      {
        title: 'O Propósito do Trabalho e a Lei',
        description: `Antes da criação da mulher, Deus dá ao homem um propósito (cultivar e guardar o jardim) e um limite (não comer da árvore do conhecimento). O trabalho e a obediência à Palavra de Deus são fundamentais para a vida humana.`
      },
      {
        title: 'A Necessidade de uma Auxiliadora',
        description: `Nenhum dos animais era uma "ajudadora idônea" (adequada, correspondente) para o homem. A mulher foi criada da costela do homem, não para ser inferior ou superior, mas para estar ao seu lado como sua igual e parceira essencial.`
      },
      {
        title: 'A Instituição do Casamento',
        description: `Deus traz a mulher ao homem, e Adão a recebe com alegria. O texto estabelece o padrão para o casamento: deixar pai e mãe, unir-se à esposa e tornarem-se uma só carne. É uma união de intimidade, compromisso e transparência (estavam nus e não se envergonhavam).`
      }
    ],
    conclusion: `A criação da mulher e a instituição do casamento não são invenções humanas, mas o design perfeito de Deus. O casamento reflete a imagem de Deus na união de homem e mulher, e aponta para o mistério maior da união entre Cristo e a Sua Igreja. Devemos honrar e proteger o casamento como uma dádiva sagrada do Criador.`
  },
  {
    id: 'gen_3_8_24',
    bookId: 'GEN',
    chapter: 3,
    startVerse: 8,
    endVerse: 24,
    title: 'As Consequências da Queda',
    theme: 'O Julgamento e a Graça de Deus',
    introduction: `Após a desobediência de Adão e Eva, a harmonia do Éden é estilhaçada. O pecado introduz o medo, a vergonha e a separação. Gênesis 3:8-24 descreve o confronto de Deus com o homem caído, as consequências trágicas do pecado, mas também os primeiros raios da graça redentora.`,
    points: [
      {
        title: 'A Fuga e a Busca',
        description: `Ouvindo a voz de Deus, o casal se esconde. O pecado sempre nos faz fugir de Deus. No entanto, Deus toma a iniciativa de buscá-los: "Onde estás?". É a voz da justiça, mas também do amor que busca o pecador.`
      },
      {
        title: 'As Sentenças do Julgamento',
        description: `Deus pronuncia as consequências do pecado: a serpente é amaldiçoada, a mulher experimentará dor na maternidade e conflito no casamento, e o homem enfrentará o trabalho árduo em uma terra amaldiçoada, culminando na morte física.`
      },
      {
        title: 'A Promessa e a Provisão',
        description: `No meio do julgamento, brilha a graça. Deus promete que o descendente da mulher esmagará a cabeça da serpente (o Protoevangelho). Além disso, Deus faz roupas de pele para cobrir a nudez deles, o primeiro sacrifício que aponta para a cobertura dos nossos pecados por Cristo.`
      }
    ],
    conclusion: `A Queda trouxe consequências devastadoras para toda a humanidade e para a criação. Fomos expulsos do paraíso. Mas a história não termina em desespero. O Deus que julgou o pecado é o mesmo que providenciou a salvação. Através de Jesus Cristo, o descendente prometido, a maldição é revertida e o caminho de volta à presença de Deus é aberto.`
  },
  {
    id: 'gen_4_1_16',
    bookId: 'GEN',
    chapter: 4,
    startVerse: 1,
    endVerse: 16,
    title: 'Caim e Abel',
    theme: 'A Oferta Aceitável e o Perigo do Pecado',
    introduction: `A história de Caim e Abel é o primeiro relato de vida familiar fora do Éden e demonstra quão rapidamente o pecado se espalhou e se intensificou na humanidade. O que começou como desobediência no jardim, agora escala para o assassinato do próprio irmão. Esta narrativa nos ensina sobre a adoração verdadeira e o perigo de abrigar o pecado no coração.`,
    points: [
      {
        title: 'As Duas Ofertas',
        description: `Ambos os irmãos trouxeram ofertas a Deus. Abel trouxe das primícias do seu rebanho, uma oferta de fé e excelência. Caim trouxe do fruto da terra, mas sem a mesma atitude de coração. Deus aceitou Abel e sua oferta, mas rejeitou a de Caim.`
      },
      {
        title: 'O Aviso de Deus',
        description: `Diante da ira de Caim, Deus o adverte graciosamente. Ele diz que se Caim fizesse o bem, seria aceito. Mas se não, o pecado estava à porta, desejando dominá-lo, e Caim precisava dominá-lo. É um alerta claro sobre a responsabilidade pessoal diante da tentação.`
      },
      {
        title: 'O Primeiro Homicídio',
        description: `Caim ignora o aviso de Deus, cede à inveja e ao ódio, e mata seu irmão Abel. Quando confrontado por Deus, ele responde com cinismo: "Sou eu o guardador do meu irmão?". O pecado quebra não apenas nossa relação com Deus, mas também com o próximo.`
      }
    ],
    conclusion: `A história de Caim e Abel nos chama a examinar nossos corações e nossa adoração. Deus não olha apenas para o que oferecemos, mas para a atitude com que oferecemos. Além disso, somos lembrados de que o pecado é uma força destrutiva que deve ser dominada pela graça de Deus, antes que nos destrua e àqueles ao nosso redor.`
  },
  {
    id: 'gen_6_13_22',
    bookId: 'GEN',
    chapter: 6,
    startVerse: 13,
    endVerse: 22,
    title: 'A Instrução para a Arca',
    theme: 'Julgamento e Salvação',
    introduction: `A maldade da humanidade havia chegado a um ponto insustentável. A terra estava corrompida e cheia de violência. Deus, em Sua justiça, decide trazer o dilúvio para purificar a terra. No entanto, no meio desse julgamento iminente, Deus encontra um homem justo, Noé, e lhe dá instruções detalhadas para a salvação de sua família e da criação.`,
    points: [
      {
        title: 'A Revelação do Julgamento',
        description: `Deus confidencia a Noé o Seu plano: o fim de toda a carne havia chegado. O julgamento de Deus não é arbitrário; é a resposta santa à corrupção total e à violência que destruíam a Sua boa criação.`
      },
      {
        title: 'O Projeto da Salvação',
        description: `Deus dá a Noé o projeto exato da arca: as dimensões, os materiais e a estrutura. A salvação não seria alcançada pelas ideias de Noé, mas pela obediência estrita ao plano revelado por Deus. A arca é um tipo de Cristo, o único refúgio seguro contra o julgamento divino.`
      },
      {
        title: 'A Aliança e a Obediência',
        description: `Deus promete estabelecer a Sua aliança com Noé. Em resposta, o texto diz que "Noé fez tudo exatamente como Deus lhe tinha ordenado". A fé de Noé foi demonstrada por sua obediência prática e perseverante, construindo a arca durante anos sem ver uma gota de chuva.`
      }
    ],
    conclusion: `A construção da arca nos ensina que Deus leva o pecado a sério e que o julgamento é real. No entanto, Ele sempre providencia um meio de salvação para aqueles que creem. Assim como Noé encontrou segurança na arca, nós encontramos segurança em Jesus Cristo. A nossa resposta à revelação de Deus deve ser a mesma de Noé: fé obediente.`
  },
  {
    id: 'gen_7_1_16',
    bookId: 'GEN',
    chapter: 7,
    startVerse: 1,
    endVerse: 16,
    title: 'O Dilúvio',
    theme: 'A Execução do Julgamento Divino',
    introduction: `Após anos de construção e pregação, o tempo da graça se esgota. Gênesis 7 descreve o momento solene em que Noé e sua família entram na arca e as águas do dilúvio começam a cair. É um relato de julgamento catastrófico sobre um mundo impenitente, mas também de preservação miraculosa para os que confiaram em Deus.`,
    points: [
      {
        title: 'O Convite para Entrar',
        description: `Deus convida Noé: "Entra na arca, tu e toda a tua casa". Deus reconhece a justiça de Noé no meio de uma geração perversa. Os animais também são trazidos para a arca, preservando a biodiversidade da criação.`
      },
      {
        title: 'O Início do Julgamento',
        description: `Noé obedece e, após sete dias, as águas do dilúvio vêm sobre a terra. As fontes do grande abismo se rompem e as comportas dos céus se abrem. É uma reversão da criação, onde as águas que haviam sido separadas agora voltam a cobrir a terra.`
      },
      {
        title: 'A Porta Fechada por Deus',
        description: `O versículo 16 contém um detalhe comovente e terrível: "e o Senhor fechou a porta após ele". Deus garantiu a segurança dos que estavam dentro, mas também selou o destino dos que ficaram de fora. O tempo de oportunidade havia passado.`
      }
    ],
    conclusion: `O dilúvio é um lembrete histórico da severidade da justiça de Deus contra o pecado. Jesus usou os dias de Noé como um aviso para a Sua segunda vinda: as pessoas viviam desatentas até que o julgamento veio. A porta da graça ainda está aberta hoje através de Cristo. Devemos entrar enquanto há tempo, antes que a porta se feche.`
  },
  {
    id: 'gen_8_1_19',
    bookId: 'GEN',
    chapter: 8,
    startVerse: 1,
    endVerse: 19,
    title: 'O Fim do Dilúvio',
    theme: 'Deus se Lembra e Restaura',
    introduction: `Após 150 dias de águas prevalecendo sobre a terra, a situação na arca devia parecer interminável. Mas Gênesis 8 começa com uma das frases mais reconfortantes da Bíblia: "Lembrou-se Deus de Noé". Este capítulo narra o recuo das águas, a espera paciente de Noé e o novo começo para a humanidade e a criação.`,
    points: [
      {
        title: 'Deus se Lembra',
        description: `Deus não havia esquecido Noé. "Lembrar" na Bíblia não significa que Deus havia esquecido e de repente recordou; significa que Deus agiu em favor daqueles com quem fez uma aliança. Ele fez soprar um vento, e as águas começaram a baixar.`
      },
      {
        title: 'A Espera Paciente',
        description: `A arca repousa sobre as montanhas de Ararate. Noé não sai imediatamente. Ele envia um corvo e depois uma pomba para verificar as condições da terra. Ele espera o tempo de Deus, demonstrando paciência e submissão à vontade divina.`
      },
      {
        title: 'A Ordem para Sair',
        description: `Finalmente, Deus fala a Noé: "Sai da arca". Noé só saiu quando Deus ordenou. Eles saem para uma terra purificada, com a ordem de se multiplicarem e povoarem a terra novamente, um eco do mandato original da criação.`
      }
    ],
    conclusion: `A história do fim do dilúvio nos ensina que, mesmo nas tempestades mais longas e escuras da vida, Deus não se esquece dos Seus filhos. Ele tem o controle sobre as águas do caos. Devemos aprender a esperar pacientemente pelo tempo de Deus e estar prontos para recomeçar quando Ele nos der a ordem, confiando na Sua fidelidade.`
  },
  {
    id: 'gen_8_20_22',
    bookId: 'GEN',
    chapter: 8,
    startVerse: 20,
    endVerse: 22,
    title: 'O Altar de Noé e a Promessa de Deus',
    theme: 'Adoração e a Graça Preservadora',
    introduction: `A primeira atitude de Noé ao pisar na terra seca e purificada não foi construir uma casa para si, mas edificar um altar ao Senhor. Esta passagem descreve a resposta de adoração do homem salvo e a resposta de graça do Deus salvador, estabelecendo a base para a continuidade da vida na terra.`,
    points: [
      {
        title: 'O Altar da Gratidão',
        description: `Noé edificou um altar e ofereceu holocaustos de animais limpos. Foi um ato de adoração, gratidão pela salvação e reconhecimento da soberania de Deus. A adoração deve ser a nossa primeira resposta à graça de Deus.`
      },
      {
        title: 'O Aroma Suave',
        description: `O Senhor "aspirou o aroma suave" da oferta. Isso não significa que Deus precise de comida, mas que Ele aceitou a adoração sincera de Noé. O sacrifício de Noé apontava para o sacrifício perfeito de Cristo, que seria um aroma suave a Deus (Efésios 5:2).`
      },
      {
        title: 'A Promessa de Preservação',
        description: `No Seu coração, Deus decide nunca mais amaldiçoar a terra por causa do homem, nem destruir todos os seres vivos. Ele reconhece que a inclinação do coração humano é má desde a juventude, mas decide agir com graça preservadora, garantindo a continuidade das estações do ano.`
      }
    ],
    conclusion: `O altar de Noé nos lembra da prioridade da adoração em nossas vidas. A promessa de Deus nos assegura que a estabilidade do nosso mundo não depende da nossa bondade (pois somos falhos), mas da graça e da fidelidade de Deus. Podemos viver com segurança, sabendo que Deus sustenta a criação enquanto a história avança para a redenção final.`
  },
  {
    id: 'gen_9_1_17',
    bookId: 'GEN',
    chapter: 9,
    startVerse: 1,
    endVerse: 17,
    title: 'A Aliança com Noé e o Arco-íris',
    theme: 'O Pacto da Graça Comum',
    introduction: `Após o dilúvio, Deus estabelece um novo começo com Noé e seus filhos. Ele renova o mandato da criação, estabelece novas regras para a vida humana e, o mais importante, faz uma aliança incondicional com toda a criação, selando-a com um sinal visível nos céus: o arco-íris.`,
    points: [
      {
        title: 'O Novo Mandato e a Santidade da Vida',
        description: `Deus abençoa Noé e repete a ordem: "Sede fecundos, multiplicai-vos". Ele permite o consumo de carne, mas proíbe o consumo de sangue, pois o sangue representa a vida. Deus também institui a pena capital para o assassinato, enfatizando o valor supremo da vida humana, criada à imagem de Deus.`
      },
      {
        title: 'A Aliança Incondicional',
        description: `Deus estabelece Sua aliança não apenas com Noé, mas com seus descendentes e com todos os seres vivos. É uma promessa de que nunca mais haverá um dilúvio para destruir a terra. Esta é uma aliança de graça comum, dada a todos, independentemente do seu mérito.`
      },
      {
        title: 'O Sinal do Arco-íris',
        description: `Deus coloca o Seu arco nas nuvens como sinal da aliança. O arco, uma arma de guerra, é pendurado no céu, apontando para cima, não para a terra. É um lembrete visual da misericórdia de Deus. Quando Deus "vê" o arco, Ele se lembra da Sua promessa de não destruir a terra pelas águas.`
      }
    ],
    conclusion: `A aliança com Noé é o fundamento da estabilidade do nosso mundo. O arco-íris não é apenas um fenômeno meteorológico, mas um testemunho da fidelidade de Deus. Toda vez que o vemos, devemos nos lembrar de que Deus é misericordioso, que Ele valoriza a vida e que Ele cumpre as Suas promessas. Nossa vida está segura nas mãos do Deus da aliança.`
  },
  {
    id: 'gen_13_1_18',
    bookId: 'GEN',
    chapter: 13,
    startVerse: 1,
    endVerse: 18,
    title: 'A Separação de Abrão e Ló',
    theme: 'Escolhas Baseadas na Visão ou na Fé',
    introduction: `Após retornarem do Egito, Abrão e seu sobrinho Ló haviam enriquecido muito. A abundância de rebanhos gerou conflitos entre seus pastores. Para preservar a paz, Abrão propõe uma separação. A forma como cada um escolhe seu caminho revela a diferença entre andar por vista e andar por fé.`,
    points: [
      {
        title: 'A Generosidade de Abrão',
        description: `Como o mais velho e o líder da família, Abrão tinha o direito de escolher primeiro. No entanto, ele abre mão desse direito em favor da paz e permite que Ló escolha a terra que desejar. A verdadeira grandeza se manifesta na humildade e na generosidade.`
      },
      {
        title: 'A Escolha de Ló: Andando por Vista',
        description: `Ló levantou os olhos e viu a campina do Jordão, que era bem regada, "como o jardim do Senhor". Ele escolheu com base na aparência e na vantagem material, ignorando o fato de que os habitantes de Sodoma eram grandes pecadores. Sua escolha o levou para perto da corrupção.`
      },
      {
        title: 'A Recompensa de Abrão: Andando por Fé',
        description: `Após Ló partir, Deus fala com Abrão. Deus manda Abrão levantar os olhos e promete dar a ele e à sua descendência toda a terra que ele podia ver. Abrão escolheu confiar em Deus, e Deus lhe deu uma visão muito maior do que a campina do Jordão. Abrão respondeu edificando um altar.`
      }
    ],
    conclusion: `A história de Abrão e Ló nos desafia a examinar como tomamos nossas decisões. Escolhemos com base no que é atraente aos olhos e vantajoso materialmente, mesmo que isso comprometa nossa vida espiritual? Ou escolhemos confiar em Deus, sendo generosos e buscando a paz, sabendo que a nossa verdadeira herança vem do Senhor? A fé sempre nos leva a um lugar melhor do que a nossa própria visão.`
  },
  {
    id: 'gen_14_17_24',
    bookId: 'GEN',
    chapter: 14,
    startVerse: 17,
    endVerse: 24,
    title: 'Abrão e Melquisedeque',
    theme: 'O Sacerdote do Deus Altíssimo',
    introduction: `Após uma vitória militar impressionante para resgatar Ló, Abrão é recebido por dois reis muito diferentes: o rei de Sodoma e Melquisedeque, rei de Salém. Este encontro misterioso e profundo revela verdades sobre o sacerdócio, o dízimo e a dependência exclusiva de Deus para o enriquecimento.`,
    points: [
      {
        title: 'O Encontro com Melquisedeque',
        description: `Melquisedeque, cujo nome significa "Rei de Justiça" e que é rei de Salém (Paz), traz pão e vinho. Ele é sacerdote do Deus Altíssimo (El Elyon). Ele abençoa Abrão e bendiz a Deus pela vitória. Melquisedeque é um tipo de Cristo, um sacerdote real superior ao sacerdócio levítico (Hebreus 7).`
      },
      {
        title: 'O Dízimo de Abrão',
        description: `Em resposta à bênção, Abrão dá a Melquisedeque o dízimo de tudo o que havia recuperado. Este é o primeiro registro do dízimo na Bíblia, muito antes da Lei de Moisés. Foi um ato voluntário de gratidão e reconhecimento de que a vitória e as posses vieram de Deus.`
      },
      {
        title: 'A Rejeição da Oferta de Sodoma',
        description: `O rei de Sodoma oferece a Abrão os bens materiais recuperados. Abrão recusa categoricamente, declarando que havia feito um juramento ao Deus Altíssimo. Ele não queria que ninguém, especialmente o rei de uma cidade ímpia, dissesse: "Eu enriqueci a Abrão".`
      }
    ],
    conclusion: `O encontro com Melquisedeque nos ensina a reconhecer Deus como o "Possuidor dos céus e da terra" e a fonte de todas as nossas vitórias. A atitude de Abrão nos desafia a honrar a Deus com os nossos bens (dízimos) e a recusar qualquer compromisso ou riqueza que possa roubar a glória de Deus em nossas vidas. Nossa dependência deve ser exclusivamente do Senhor.`
  },
  {
    id: 'gen_16_1_16',
    bookId: 'GEN',
    chapter: 16,
    startVerse: 1,
    endVerse: 16,
    title: 'Agar e Ismael',
    theme: 'O Deus que Vê',
    introduction: `Dez anos após a promessa de Deus de dar um filho a Abrão, Sarai continua estéril. A impaciência leva o casal a tentar cumprir a promessa de Deus com seus próprios esforços, resultando em conflito e sofrimento. No entanto, no meio da dor e da fuga, uma serva egípcia tem um encontro transformador com o Deus que vê os marginalizados.`,
    points: [
      {
        title: 'A Impaciência e o Erro Humano',
        description: `Sarai sugere que Abrão tenha um filho com sua serva Agar, um costume da época, mas não o plano de Deus. Abrão concorda. Quando Agar engravida, ela despreza Sarai, e Sarai a maltrata. Tentar "ajudar" Deus com métodos carnais sempre gera conflito e dor.`
      },
      {
        title: 'A Fuga e o Encontro no Deserto',
        description: `Agar foge para o deserto. Lá, o Anjo do Senhor a encontra junto a uma fonte. Ele a chama pelo nome, reconhece sua dor e lhe dá uma promessa sobre seu filho, Ismael ("Deus ouve"). Ele também a instrui a voltar e se submeter a Sarai, ensinando que a fuga não resolve os problemas.`
      },
      {
        title: 'El-Roi: O Deus que Me Vê',
        description: `Agar dá um nome a Deus: "Tu és o Deus que me vê" (El-Roi). Ela se maravilha por ter sido vista e cuidada por Deus no deserto. Ela era uma escrava, estrangeira e fugitiva, mas Deus não a ignorou.`
      }
    ],
    conclusion: `A história de Agar nos adverte sobre os perigos de agir com impaciência e tentar cumprir as promessas de Deus com a nossa própria força. Mas, acima de tudo, é uma bela revelação do caráter de Deus. Ele é El-Roi, o Deus que vê a nossa dor, que nos encontra nos nossos desertos e que cuida dos que são rejeitados e marginalizados. Podemos confiar que Ele ouve o nosso clamor.`
  },
  {
    id: 'gen_17_1_14',
    bookId: 'GEN',
    chapter: 17,
    startVerse: 1,
    endVerse: 14,
    title: 'A Aliança da Circuncisão',
    theme: 'O Sinal do Pacto e a Mudança de Identidade',
    introduction: `Quando Abrão tinha 99 anos, Deus aparece a ele novamente para reafirmar e expandir a Sua aliança. Neste encontro, Deus se revela com um novo nome, muda os nomes de Abrão e Sarai, e institui a circuncisão como o sinal físico e perpétuo da aliança entre Ele e a descendência de Abraão.`,
    points: [
      {
        title: 'El Shaddai e o Chamado à Perfeição',
        description: `Deus se apresenta como "El Shaddai" (o Deus Todo-Poderoso). Ele tem o poder para cumprir o que prometeu, mesmo quando as circunstâncias (a idade avançada do casal) parecem impossíveis. O chamado de Deus é claro: "Anda na minha presença e sê perfeito" (íntegro).`
      },
      {
        title: 'A Mudança de Nomes',
        description: `Deus muda o nome de Abrão ("pai exaltado") para Abraão ("pai de uma multidão") e Sarai para Sara ("princesa"). A mudança de nome significa uma mudança de identidade e destino. Deus estava declarando o que eles seriam pela fé, antes mesmo do filho nascer.`
      },
      {
        title: 'O Sinal da Circuncisão',
        description: `Deus institui a circuncisão para todos os homens da casa de Abraão. Era um sinal físico na carne, lembrando-os constantemente de que pertenciam a Deus e que a promessa da descendência dependia do poder de Deus, não da carne humana.`
      }
    ],
    conclusion: `A aliança em Gênesis 17 nos lembra que servimos ao Deus Todo-Poderoso, para quem nada é impossível. Quando entramos em aliança com Ele, recebemos uma nova identidade. Hoje, o sinal da nossa aliança não é a circuncisão física, mas a circuncisão do coração pelo Espírito Santo (Romanos 2:29), que nos marca como povo de Deus, chamados a andar em integridade na Sua presença.`
  },
  {
    id: 'gen_18_16_33',
    bookId: 'GEN',
    chapter: 18,
    startVerse: 16,
    endVerse: 33,
    title: 'A Intercessão de Abraão por Sodoma',
    theme: 'A Ousadia da Oração Intercessória',
    introduction: `Após prometer o nascimento de Isaque, o Senhor revela a Abraão o Seu plano de julgar as cidades de Sodoma e Gomorra devido à gravidade dos seus pecados. O que se segue é um dos diálogos mais notáveis da Bíblia: Abraão se coloca diante de Deus e intercede apaixonadamente pela cidade onde seu sobrinho Ló vivia.`,
    points: [
      {
        title: 'A Amizade e a Revelação de Deus',
        description: `Deus diz: "Ocultarei a Abraão o que estou para fazer?". Deus trata Abraão como um amigo e parceiro na aliança, revelando Seus propósitos. A verdadeira intercessão nasce da intimidade com Deus e da compreensão do Seu caráter.`
      },
      {
        title: 'O Apelo à Justiça Divina',
        description: `Abraão baseia sua oração no caráter de Deus: "Não fará justiça o Juiz de toda a terra?". Ele argumenta que não seria justo destruir os justos junto com os ímpios. A intercessão eficaz se apoia na natureza justa e misericordiosa de Deus.`
      },
      {
        title: 'A Persistência na Oração',
        description: `Abraão negocia com Deus, diminuindo o número de justos necessários para poupar a cidade, de 50 até chegar a 10. Ele ora com ousadia, mas também com profunda humildade ("eu que sou pó e cinza"). Deus concorda em poupar a cidade se houver 10 justos.`
      }
    ],
    conclusion: `Embora não houvesse 10 justos em Sodoma e a cidade tenha sido destruída, a oração de Abraão não foi em vão (Deus salvou Ló). Esta passagem nos ensina a importância da intercessão. Somos chamados a ser "amigos de Deus" que se colocam na brecha, orando com ousadia, persistência e compaixão por um mundo que está sob o julgamento divino, confiando na justiça e misericórdia do Senhor.`
  },
  {
    id: 'gen_19_1_29',
    bookId: 'GEN',
    chapter: 19,
    startVerse: 1,
    endVerse: 29,
    title: 'A Destruição de Sodoma e Gomorra',
    theme: 'O Julgamento do Pecado e o Resgate do Justo',
    introduction: `O capítulo 19 de Gênesis é um relato sombrio e dramático do julgamento divino sobre a extrema depravação moral. Os anjos que visitaram Abraão chegam a Sodoma e confirmam a maldade da cidade. A narrativa contrasta a corrupção total da sociedade com a misericórdia de Deus em resgatar Ló e sua família antes da destruição.`,
    points: [
      {
        title: 'A Depravação de Sodoma',
        description: `A atitude dos homens de Sodoma em relação aos visitantes angelicais revela uma sociedade totalmente entregue à imoralidade e à violência, sem nenhum temor a Deus ou respeito pelo próximo. O pecado havia atingido sua medida completa.`
      },
      {
        title: 'A Misericórdia e a Hesitação de Ló',
        description: `Os anjos alertam Ló para fugir com sua família. Tragicamente, os genros de Ló acham que ele está brincando. Ainda mais surpreendente é a hesitação do próprio Ló. Os anjos precisam pegá-lo pela mão e arrastá-lo para fora da cidade, "sendo-lhe o Senhor misericordioso".`
      },
      {
        title: 'O Julgamento e a Mulher de Ló',
        description: `Deus faz chover fogo e enxofre sobre as cidades. A ordem era clara: "Não olhes para trás". A mulher de Ló desobedece, olha para trás com saudade da cidade e se transforma numa estátua de sal. Seu coração ainda pertencia a Sodoma.`
      }
    ],
    conclusion: `A destruição de Sodoma é um aviso perene de que Deus é santo e julgará o pecado impenitente. Mas também é uma história de resgate. Deus lembrou-se de Abraão e salvou Ló (v. 29). A tragédia da mulher de Ló nos adverte: não podemos ser salvos do mundo se o nosso coração continua apegado a ele. Devemos fugir do pecado sem olhar para trás, correndo para a salvação em Cristo.`
  },
  {
    id: 'gen_21_1_7',
    bookId: 'GEN',
    chapter: 21,
    startVerse: 1,
    endVerse: 7,
    title: 'O Nascimento de Isaque',
    theme: 'A Fidelidade de Deus às Suas Promessas',
    introduction: `Após 25 anos de espera, dúvidas, erros e renovações da aliança, o momento tão aguardado finalmente chega. Gênesis 21 registra o cumprimento da promessa de Deus a Abraão e Sara com o nascimento de Isaque. É um testemunho poderoso de que Deus é fiel à Sua palavra e de que o Seu tempo é perfeito.`,
    points: [
      {
        title: 'O Cumprimento da Promessa',
        description: `O texto enfatiza repetidamente que o Senhor visitou Sara e fez "como tinha dito" e "no tempo determinado". A Palavra de Deus não falha. O que Ele promete, Ele tem o poder e a fidelidade para cumprir, independentemente das impossibilidades humanas.`
      },
      {
        title: 'O Nome Isaque: Riso',
        description: `Abraão dá ao filho o nome de Isaque, que significa "ele ri". Antes, Abraão e Sara haviam rido de incredulidade. Agora, o riso é de alegria e admiração pelo milagre de Deus. Deus transformou a dúvida deles em celebração.`
      },
      {
        title: 'A Obediência de Abraão',
        description: `Abraão circuncida Isaque ao oitavo dia, exatamente como Deus havia ordenado. A fé verdadeira não apenas recebe as promessas de Deus, mas também obedece aos Seus mandamentos. Isaque é o filho da promessa, o herdeiro da aliança.`
      }
    ],
    conclusion: `O nascimento de Isaque nos encoraja a confiar nas promessas de Deus, mesmo quando o tempo de espera é longo e as circunstâncias parecem contrárias. Deus não está limitado pela nossa idade, fraqueza ou lógica. Ele é o Deus do impossível. Quando Ele cumpre a Sua palavra, Ele transforma o nosso choro e a nossa dúvida em riso de alegria e louvor.`
  },
  {
    id: 'gen_21_8_21',
    bookId: 'GEN',
    chapter: 21,
    startVerse: 8,
    endVerse: 21,
    title: 'A Expulsão de Agar e Ismael',
    theme: 'A Escolha de Deus e o Cuidado com os Rejeitados',
    introduction: `A alegria pelo crescimento de Isaque logo é ofuscada por um conflito familiar profundo. A presença de Ismael, o filho da escrava, torna-se uma ameaça para Isaque, o filho da promessa. A decisão de expulsar Agar e Ismael é dolorosa para Abraão, mas revela a soberania de Deus na escolha do herdeiro da aliança e o Seu cuidado compassivo pelos que sofrem.`,
    points: [
      {
        title: 'O Conflito das Duas Naturezas',
        description: `Ismael zomba de Isaque durante a festa de desmame. O apóstolo Paulo usa este evento como uma alegoria (Gálatas 4): aquele que nasceu segundo a carne persegue o que nasceu segundo o Espírito. A lei e a graça, a carne e o espírito, não podem herdar juntos.`
      },
      {
        title: 'A Decisão Difícil e a Direção de Deus',
        description: `Sara exige a expulsão de Agar e Ismael. Abraão fica muito angustiado, pois amava Ismael. Mas Deus intervém, dizendo a Abraão para ouvir Sara, pois a aliança seria continuada através de Isaque. Deus promete cuidar de Ismael também.`
      },
      {
        title: 'O Choro no Deserto e a Provisão Divina',
        description: `Agar e Ismael vagam no deserto até a água acabar. Agar se afasta para não ver o filho morrer. Mas Deus ouve a voz do menino. O Anjo de Deus conforta Agar, abre os olhos dela para ver um poço de água e promete fazer de Ismael uma grande nação.`
      }
    ],
    conclusion: `Esta narrativa nos ensina verdades difíceis, mas essenciais. Primeiro, a salvação e a herança vêm exclusivamente pela promessa (graça), não pelo esforço humano (carne). Segundo, mesmo quando as consequências dos nossos erros causam dor e separação, Deus continua sendo compassivo. Ele ouve o choro dos rejeitados no deserto e providencia água viva para sustentá-los.`
  },
  {
    id: 'gen_24_1_27',
    bookId: 'GEN',
    chapter: 24,
    startVerse: 1,
    endVerse: 27,
    title: 'A Busca de uma Esposa para Isaque',
    theme: 'A Providência e a Direção de Deus',
    introduction: `Gênesis 24 é o capítulo mais longo do livro e narra a bela história de como Deus providenciou uma esposa para Isaque. Abraão, já idoso, envia seu servo mais de confiança à sua terra natal para buscar uma noiva para o filho da promessa. É uma história rica em lições sobre fé, oração, providência divina e obediência.`,
    points: [
      {
        title: 'A Missão e o Juramento',
        description: `Abraão faz o servo jurar que não tomará uma esposa cananeia para Isaque, mas buscará alguém da sua parentela. Ele também proíbe que Isaque volte para lá. A fé de Abraão é clara: o Deus que prometeu a terra providenciará a esposa para garantir a descendência.`
      },
      {
        title: 'A Oração Específica do Servo',
        description: `Ao chegar ao poço na cidade de Naor, o servo não confia em sua própria sabedoria. Ele ora a Deus, pedindo um sinal específico: a moça que lhe der de beber e também oferecer água aos seus camelos será a escolhida. É uma oração que busca caráter (serviço e hospitalidade), não apenas aparência.`
      },
      {
        title: 'A Resposta Imediata e a Adoração',
        description: `Antes mesmo de terminar a oração, Rebeca aparece e faz exatamente o que o servo havia pedido. Ao descobrir que ela é da família de Abraão, o servo se prostra e adora a Deus, reconhecendo que o Senhor o havia guiado pelo caminho certo.`
      }
    ],
    conclusion: `A busca por Rebeca é um belo exemplo de como Deus guia aqueles que confiam nEle. O servo orou, agiu com sabedoria e esteve atento à providência de Deus. Da mesma forma, em nossas decisões importantes, devemos buscar a direção de Deus em oração, valorizar o caráter acima das aparências e estar prontos para adorar a Deus quando Ele nos guiar pelo caminho certo.`
  },
  {
    id: 'gen_25_19_34',
    bookId: 'GEN',
    chapter: 25,
    startVerse: 19,
    endVerse: 34,
    title: 'O Nascimento de Esaú e Jacó e a Venda da Primogenitura',
    theme: 'O Valor das Bênçãos Espirituais',
    introduction: `A história da próxima geração da aliança começa com esterilidade, oração respondida e um conflito que se inicia no ventre. O nascimento dos gêmeos Esaú e Jacó e o episódio da venda da primogenitura revelam o contraste entre um homem que despreza as coisas de Deus e outro que as deseja, ainda que por meios errados.`,
    points: [
      {
        title: 'A Profecia Antes do Nascimento',
        description: `Rebeca, estéril, concebe após a oração de Isaque. Os bebês lutam no ventre, e Deus revela que duas nações estão ali, e que "o maior servirá ao menor". Deus escolhe Jacó antes de nascerem, demonstrando que a eleição divina é baseada na Sua soberania, não em méritos humanos (Romanos 9).`
      },
      {
        title: 'O Desprezo de Esaú',
        description: `Esaú, o primogênito, chega do campo exausto e faminto. Ele pede o ensopado vermelho que Jacó estava fazendo. Jacó exige a primogenitura em troca. Esaú, focado apenas na sua necessidade física imediata, jura e vende seu direito. O texto conclui: "Assim desprezou Esaú a sua primogenitura".`
      },
      {
        title: 'A Ambição de Jacó',
        description: `Jacó valorizava a primogenitura (que incluía a liderança espiritual da família e a promessa da aliança), mas agiu de forma carnal e oportunista para obtê-la. Ele explorou a fraqueza do irmão em vez de confiar que Deus cumpriria a profecia no Seu tempo.`
      }
    ],
    conclusion: `A venda da primogenitura é um aviso solene contra a mentalidade profana de Esaú (Hebreus 12:16), que trocou o eterno pelo temporário, a bênção espiritual por um prato de comida. Quantas vezes somos tentados a sacrificar nossos princípios e nossa herança em Cristo por prazeres ou alívios imediatos? Devemos valorizar as promessas de Deus acima de tudo, buscando-as com integridade e fé, não com engano.`
  }
];

const filePath = 'data/pericopes.ts';
let fileContent = fs.readFileSync(filePath, 'utf8');

// Remove the closing bracket and semicolon
fileContent = fileContent.replace(/\];\s*$/, '');

// Append each new pericope
newPericopes.forEach(pericope => {
  fileContent += ',\n  ' + JSON.stringify(pericope, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'").replace(/\\'/g, "\\'") + '\n';
});

// Since JSON.stringify doesn't handle backticks for multiline strings well, 
// let's just append the raw string representation for simplicity and correctness.

let rawAppend = '';
newPericopes.forEach(p => {
  rawAppend += ',\n  {\n';
  rawAppend += `    id: '${p.id}',\n`;
  rawAppend += `    bookId: '${p.bookId}',\n`;
  rawAppend += `    chapter: ${p.chapter},\n`;
  rawAppend += `    startVerse: ${p.startVerse},\n`;
  rawAppend += `    endVerse: ${p.endVerse},\n`;
  rawAppend += `    title: '${p.title}',\n`;
  rawAppend += `    theme: '${p.theme}',\n`;
  rawAppend += `    introduction: \`${p.introduction}\`,\n`;
  rawAppend += `    points: [\n`;
  p.points.forEach((pt, idx) => {
    rawAppend += `      {\n`;
    rawAppend += `        title: '${pt.title}',\n`;
    rawAppend += `        description: \`${pt.description}\`\n`;
    rawAppend += `      }${idx < p.points.length - 1 ? ',' : ''}\n`;
  });
  rawAppend += `    ],\n`;
  rawAppend += `    conclusion: \`${p.conclusion}\`\n`;
  rawAppend += `  }`;
});

// Re-read to start fresh
fileContent = fs.readFileSync(filePath, 'utf8');
fileContent = fileContent.replace(/\];\s*$/, '');
fileContent += rawAppend + '\n];\n';

fs.writeFileSync(filePath, fileContent);
console.log('Successfully added 20 pericopes.');
