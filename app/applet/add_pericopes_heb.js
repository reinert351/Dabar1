const fs = require('fs');

const newPericopes = [
  {
    id: 'heb_2_1_4',
    bookId: 'HEB',
    chapter: 2,
    startVerse: 1,
    endVerse: 4,
    title: 'O Perigo de Negligenciar a Salvação',
    theme: 'A Atenção à Palavra e a Grandeza do Evangelho',
    introduction: `Após estabelecer a supremacia absoluta de Cristo sobre os anjos no capítulo 1, o autor de Hebreus faz a sua primeira grande pausa para uma exortação pastoral. Ele adverte os seus leitores sobre o perigo sutil, mas mortal, da "deriva espiritual". O perigo que eles enfrentavam não era necessariamente uma rebelião aberta, mas uma negligência passiva da verdade que haviam ouvido. O autor argumenta do menor para o maior: se a lei dada por anjos exigia obediência estrita, quão mais terrível será o julgamento para aqueles que ignoram a salvação anunciada pelo próprio Filho de Deus?`,
    points: [
      {
        verseRef: 'v. 1',
        title: 'A Necessidade de Atenção Redobrada',
        description: `A Deriva Espiritual. O autor começa com um imperativo urgente: "Portanto, convém-nos atentar com mais diligência para as coisas que já temos ouvido, para que em tempo algum nos desviemos delas". A imagem no grego é a de um navio que, por falta de atenção do timoneiro, é levado pela correnteza e passa direto pelo porto seguro. O desvio espiritual raramente acontece da noite para o dia; é um processo lento e imperceptível de negligência, de deixar de prestar atenção à Palavra de Deus. A única maneira de evitar a deriva é ancorar a mente ativamente nas verdades do evangelho.`
      },
      {
        verseRef: 'v. 2',
        title: 'A Firmeza da Lei e a Justa Retribuição',
        description: `O Padrão do Antigo Testamento. O autor usa a lei de Moisés como base de comparação: "Porque, se a palavra falada pelos anjos permaneceu firme, e toda a transgressão e desobediência recebeu a justa retribuição...". A tradição judaica (confirmada por Estêvão em Atos 7:53 e Paulo em Gálatas 3:19) ensinava que a lei no Sinai foi mediada por anjos. Essa lei era inflexível; a desobediência trazia consequências severas e justas. Deus não tolerava a rebelião contra a Sua palavra no Antigo Testamento.`
      },
      {
        verseRef: 'v. 3-4',
        title: 'A Grandeza da Salvação e o Testemunho Divino',
        description: `Como Escaparemos? O clímax do argumento é uma pergunta retórica assustadora: "Como escaparemos nós, se não atentarmos para uma tão grande salvação?". Se a lei mediada por anjos era rigorosa, o evangelho mediado pelo Filho é infinitamente mais sério. A salvação é "grande" porque foi anunciada pelo próprio Senhor Jesus, confirmada pelos apóstolos que O ouviram, e testificada pelo próprio Deus com "sinais, e prodígios, e várias maravilhas e dons do Espírito Santo". Negligenciar o evangelho não é apenas ignorar uma doutrina, mas insultar o Filho de Deus e o testemunho do Espírito Santo.`
      }
    ],
    conclusion: `Hebreus 2:1-4 é um alerta contra a apatia espiritual. A salvação que recebemos em Cristo é o evento mais grandioso do universo. Não podemos tratá-la como algo comum ou deixá-la em segundo plano nas nossas vidas. Devemos nos apegar firmemente à verdade, prestando atenção diligente à Palavra de Deus, para não sermos levados pelas correntes do mundo para longe do nosso porto seguro.`
  },
  {
    id: 'heb_4_12_13',
    bookId: 'HEB',
    chapter: 4,
    startVerse: 12,
    endVerse: 13,
    title: 'O Poder Penetrante da Palavra de Deus',
    theme: 'A Eficácia das Escrituras e a Nudez Diante do Juiz',
    introduction: `No contexto de Hebreus 3 e 4, o autor adverte os crentes a não imitarem a geração de israelitas que pereceu no deserto por causa da incredulidade e da desobediência à voz de Deus. Para enfatizar a seriedade de ouvir e obedecer a Deus hoje, o autor descreve a natureza da Palavra de Deus. Ele não a apresenta como um texto morto ou um conselho passivo, mas como uma força viva, ativa e cirúrgica que expõe as intenções mais profundas do coração humano. Não há como esconder a nossa verdadeira condição espiritual diante do Deus que fala.`,
    points: [
      {
        verseRef: 'v. 12a',
        title: 'A Palavra Viva e Eficaz',
        description: `A Dinâmica da Revelação. "Porque a palavra de Deus é viva e eficaz". A Bíblia não é apenas um registro histórico de coisas que Deus disse no passado; é a voz contínua e presente de Deus. Ela é "viva" (tem a própria vida de Deus nela) e "eficaz" (ativa, cheia de energia, operante). Ela sempre cumpre o propósito para o qual Deus a envia. Quando a Palavra é pregada ou lida, ela não é um objeto inerte sendo analisado por nós; é uma força viva que nos analisa.`
      },
      {
        verseRef: 'v. 12b',
        title: 'A Espada de Dois Gumes e a Divisão Interna',
        description: `A Cirurgia Espiritual. O autor usa uma metáfora militar e cirúrgica: "e mais penetrante do que espada alguma de dois gumes, e penetra até à divisão da alma e do espírito, e das juntas e medulas". A espada romana de dois gumes era a arma mais letal da época. A Palavra de Deus corta profundamente, atingindo lugares onde nenhum bisturi humano pode chegar. Ela separa o que é puramente humano e emocional ("alma") do que é verdadeiramente espiritual ("espírito"). Mais importante ainda, ela "é apta para discernir os pensamentos e intenções do coração". Ela expõe as nossas motivações ocultas, revelando se a nossa obediência é genuína ou hipócrita.`
      },
      {
        verseRef: 'v. 13',
        title: 'A Nudez Diante do Criador',
        description: `A Impossibilidade de Ocultação. O versículo 13 muda o foco da Palavra de Deus para o próprio Deus: "E não há criatura alguma encoberta diante dele; antes todas as coisas estão nuas e patentes aos olhos daquele com quem temos de tratar". A palavra "patentes" (tetrachelismena) era usada para descrever um lutador que tinha o pescoço agarrado e exposto, ou um criminoso com uma adaga sob o queixo para forçá-lo a olhar para o juiz. Não podemos usar máscaras religiosas diante de Deus. Ele vê tudo com clareza absoluta. Um dia, todos nós teremos que prestar contas ("com quem temos de tratar") a este Deus onisciente.`
      }
    ],
    conclusion: `Hebreus 4:12-13 nos ensina a reverenciar as Escrituras. Ler a Bíblia é submeter-se a uma cirurgia espiritual. Em vez de tentarmos justificar os nossos pecados ou esconder as nossas falhas, devemos permitir que a Palavra de Deus nos corte, nos exponha e nos cure. É melhor sermos expostos e corrigidos pela Palavra de Deus hoje, em tempo de graça, do que sermos expostos diante dEle no dia do julgamento.`
  },
  {
    id: 'heb_6_13_20',
    bookId: 'HEB',
    chapter: 6,
    startVerse: 13,
    endVerse: 20,
    title: 'A Âncora da Alma',
    theme: 'A Certeza da Promessa de Deus e a Esperança em Cristo',
    introduction: `Após a severa advertência contra a apostasia no início do capítulo 6, o autor muda o tom para encorajar profundamente os crentes. Ele quer que eles tenham "plena certeza da esperança até ao fim". Para fundamentar essa certeza, ele não aponta para o esforço humano, mas para o caráter imutável de Deus. Usando o exemplo de Abraão, o autor demonstra que a nossa salvação está garantida por duas coisas que não podem mudar: a promessa de Deus e o juramento de Deus. Essa dupla garantia nos fornece uma âncora inabalável que está fixada no próprio céu, onde Jesus já entrou por nós.`,
    points: [
      {
        verseRef: 'v. 13-15',
        title: 'O Exemplo de Abraão e o Juramento Divino',
        description: `A Promessa Confirmada. O autor lembra a promessa feita a Abraão: "Certamente abençoando te abençoarei, e multiplicando te multiplicarei". Deus não apenas fez a promessa, mas a confirmou com um juramento. Como não havia ninguém maior por quem jurar, Deus "jurou por si mesmo". Abraão teve que esperar pacientemente (25 anos até o nascimento de Isaque), mas "alcançou a promessa". O ponto é que a demora de Deus não é uma negação; a Sua palavra é absolutamente confiável, mesmo quando as circunstâncias parecem impossíveis.`
      },
      {
        verseRef: 'v. 16-18',
        title: 'As Duas Coisas Imutáveis e o Forte Consolo',
        description: `O Fim da Contradição. Entre os homens, um juramento põe fim a qualquer disputa. Deus, querendo mostrar de forma ainda mais clara aos "herdeiros da promessa" (nós) a imutabilidade do Seu conselho, interveio com um juramento. O versículo 18 é o coração do encorajamento: "Para que por duas coisas imutáveis, nas quais é impossível que Deus minta, tenhamos a firme consolação". Quais são essas duas coisas? A Sua promessa e o Seu juramento. Como Deus não pode mentir, a nossa salvação não é uma possibilidade, mas uma certeza absoluta. Isso nos dá um "forte consolo" para "retermos a esperança proposta".`
      },
      {
        verseRef: 'v. 19-20',
        title: 'A Âncora no Santo dos Santos',
        description: `O Precursor. O autor usa uma bela metáfora náutica: "A qual temos como âncora da alma, segura e firme". Uma âncora normal é lançada para baixo, no fundo do mar escuro. A nossa âncora espiritual é lançada para cima, "penetrando até ao interior do véu" (o Santo dos Santos no céu, a própria presença de Deus). A nossa segurança não está amarrada a nós mesmos, mas ao trono de Deus. E quem levou essa âncora para lá? "Onde Jesus, nosso precursor, entrou por nós". No Antigo Testamento, o sumo sacerdote entrava no véu apenas como representante, e ninguém podia segui-lo. Jesus entrou como "precursor" (prodromos), o que significa que Ele foi na frente para garantir que nós O seguiremos.`
      }
    ],
    conclusion: `Em meio às tempestades da vida, às dúvidas e às perseguições, a nossa alma precisa de uma âncora. Hebreus 6 nos garante que a nossa âncora não é a nossa própria força de vontade ou a nossa perfeição moral, mas a promessa inquebrável de Deus e a obra consumada de Jesus Cristo. Porque Ele está seguro no céu por nós, nós estamos eternamente seguros nEle.`
  },
  {
    id: 'heb_7_23_28',
    bookId: 'HEB',
    chapter: 7,
    startVerse: 23,
    endVerse: 28,
    title: 'O Sacerdócio Perfeito e Eterno de Cristo',
    theme: 'A Superioridade de Jesus sobre o Sacerdócio Levítico',
    introduction: `O capítulo 7 de Hebreus é o ápice do argumento do autor sobre a superioridade de Jesus Cristo. Ele demonstra que Jesus não é um sacerdote da linhagem de Arão (tribo de Levi), mas da ordem de Melquisedeque (um sacerdócio superior, real e eterno). Nos versículos finais do capítulo, o autor contrasta as fraquezas e limitações dos sacerdotes humanos do Antigo Testamento com a perfeição absoluta e a eternidade do sacerdócio de Cristo. Esta passagem nos dá a base teológica para a nossa segurança eterna: somos salvos não apenas porque Jesus morreu por nós, mas porque Ele vive para interceder por nós.`,
    points: [
      {
        verseRef: 'v. 23-24',
        title: 'A Limitação da Morte vs. A Permanência Eterna',
        description: `O Sacerdócio Intransferível. O primeiro contraste é a mortalidade. Sob a lei de Moisés, "foram muitos os sacerdotes, porque a morte os impedia de permanecer". O sacerdócio levítico era uma procissão de funerais. Assim que um sacerdote aprendia o seu ofício e ganhava a confiança do povo, ele morria e precisava ser substituído. Em contraste glorioso, Jesus "permanece eternamente, tem um sacerdócio perpétuo (intransferível)". Jesus nunca morrerá novamente. O Seu sacerdócio não passará para nenhum sucessor. Ele é o nosso único e eterno mediador.`
      },
      {
        verseRef: 'v. 25',
        title: 'A Salvação Perfeita e a Intercessão Contínua',
        description: `Salvos Totalmente. O versículo 25 é um dos maiores versículos sobre a segurança da salvação em toda a Bíblia: "Portanto, pode também salvar perfeitamente os que por ele se chegam a Deus, vivendo sempre para interceder por eles". A palavra "perfeitamente" (panteles) significa salvar completamente, até o fim, para sempre. Jesus não nos salva apenas do passado; Ele garante o nosso futuro. Como Ele faz isso? "Vivendo sempre para interceder por eles". A obra de Cristo não terminou na cruz; a Sua morte pagou a dívida, mas a Sua vida ressurreta no céu garante que os benefícios dessa morte sejam aplicados a nós diariamente. Ele é o nosso advogado constante diante do Pai.`
      },
      {
        verseRef: 'v. 26-28',
        title: 'A Pureza do Sumo Sacerdote e o Sacrifício Único',
        description: `O Sacrifício Definitivo. O segundo contraste é a moralidade. Os sacerdotes humanos eram pecadores e precisavam "oferecer sacrifícios, primeiramente pelos seus próprios pecados, e depois pelos do povo" (v. 27). Jesus é exatamente o Sumo Sacerdote que precisávamos: "santo, inocente, imaculado, separado dos pecadores, e feito mais sublime do que os céus" (v. 26). Porque Ele não tinha pecado próprio, Ele não precisava oferecer sacrifícios diários. Ele resolveu o problema do pecado de uma vez por todas "quando se ofereceu a si mesmo". A lei constituiu homens fracos como sacerdotes; mas o juramento de Deus constituiu o Filho, que é perfeito para sempre.`
      }
    ],
    conclusion: `Hebreus 7:23-28 nos liberta da dependência de mediadores humanos falhos. Não precisamos de santos, anjos ou líderes religiosos para nos dar acesso a Deus. Temos um Sumo Sacerdote perfeito, que nunca morre, que nunca peca e que passa a eternidade intercedendo por nós. A nossa salvação é absolutamente segura porque está nas mãos dAquele que vive para sempre.`
  },
  {
    id: 'heb_9_11_14',
    bookId: 'HEB',
    chapter: 9,
    startVerse: 11,
    endVerse: 14,
    title: 'O Sangue Superior e a Purificação da Consciência',
    theme: 'A Eficácia do Sacrifício de Cristo na Nova Aliança',
    introduction: `No capítulo 9, o autor de Hebreus compara os rituais do Dia da Expiação (Yom Kippur) no Antigo Testamento com a obra redentora de Cristo. No antigo sistema, o sumo sacerdote entrava no Santo dos Santos terrestre uma vez por ano com o sangue de animais, o que proporcionava apenas uma purificação cerimonial e temporária. Nos versículos 11 a 14, o autor descreve o momento culminante da história: a entrada de Cristo no santuário celestial. Ele demonstra que o sangue de Cristo é infinitamente superior ao sangue de animais, pois realiza o que a lei nunca pôde fazer: purificar a nossa consciência e nos garantir a redenção eterna.`,
    points: [
      {
        verseRef: 'v. 11',
        title: 'O Tabernáculo Perfeito e Celestial',
        description: `O Sumo Sacerdote dos Bens Futuros. "Mas, vindo Cristo, o sumo sacerdote dos bens futuros, por um maior e mais perfeito tabernáculo, não feito por mãos, isto é, não desta criação". Quando Jesus completou a Sua obra, Ele não entrou no templo de pedra em Jerusalém (que era apenas uma sombra). Ele entrou na própria presença de Deus no céu, o verdadeiro tabernáculo, que não foi construído por seres humanos nem pertence a esta ordem material caída. Ele oficia no santuário supremo.`
      },
      {
        verseRef: 'v. 12',
        title: 'O Sangue Eficaz e a Redenção Eterna',
        description: `Uma Vez por Todas. O contraste com os sacrifícios animais é absoluto: "Nem por sangue de bodes e bezerros, mas por seu próprio sangue, entrou uma vez no santuário, havendo efetuado uma eterna redenção". O sumo sacerdote judeu tinha que repetir o sacrifício todos os anos porque o sangue animal não pode remover o pecado humano. Jesus entrou "uma vez" (ephapax, de uma vez por todas, nunca precisando ser repetido). Ele não levou o sangue de um substituto irracional, mas ofereceu a Sua própria vida (o Seu sangue). O resultado não foi um perdão temporário de um ano, mas uma "eterna redenção" (libertação definitiva do poder e da penalidade do pecado).`
      },
      {
        verseRef: 'v. 13-14',
        title: 'A Purificação da Consciência para o Serviço',
        description: `Do Exterior para o Interior. O autor usa um argumento do menor para o maior. Se o sangue de touros e as cinzas de uma novilha (Números 19) podiam purificar a "carne" (remover a impureza cerimonial externa para que o israelita pudesse participar do culto), "quanto mais o sangue de Cristo... purificará as vossas consciências das obras mortas, para servirdes ao Deus vivo?". O sacrifício de Cristo, oferecido "pelo Espírito eterno" e "sem mácula" (perfeição moral), atinge o núcleo do nosso ser. Ele limpa a nossa consciência da culpa das "obras mortas" (pecados que levam à morte, ou tentativas inúteis de nos salvarmos por obras religiosas). O propósito dessa purificação não é apenas o alívio da culpa, mas nos libertar para "servirmos ao Deus vivo" com alegria e liberdade.`
      }
    ],
    conclusion: `Hebreus 9:11-14 nos mostra a futilidade de tentar apaziguar a Deus com os nossos próprios esforços ou rituais religiosos. Nenhuma obra humana pode limpar uma consciência culpada. Somente o sangue precioso de Cristo, oferecido no santuário celestial, tem o poder de lavar a nossa culpa mais profunda e nos transformar de escravos do pecado em servos adoradores do Deus vivo.`
  },
  {
    id: 'heb_10_19_25',
    bookId: 'HEB',
    chapter: 10,
    startVerse: 19,
    endVerse: 25,
    title: 'O Novo Caminho e a Vida em Comunidade',
    theme: 'Os Privilégios da Nova Aliança e as Responsabilidades da Igreja',
    introduction: `Após passar dez capítulos construindo um argumento teológico magistral sobre a superioridade de Cristo, o Seu sacerdócio e o Seu sacrifício perfeito, o autor de Hebreus chega ao grande "Portanto" prático da epístola. Hebreus 10:19-25 é a dobradiça do livro, onde a doutrina profunda se transforma em dever prático. Baseado no que Cristo fez por nós (abrindo o caminho para a presença de Deus), o autor nos dá três exortações fundamentais (os três "cheguemo-nos", "retenhamos" e "consideremo-nos") que resumem a vida cristã: fé em Deus, esperança inabalável e amor prático na comunidade da igreja.`,
    points: [
      {
        verseRef: 'v. 19-21',
        title: 'O Acesso pelo Sangue e o Véu Rasgado',
        description: `O Novo e Vivo Caminho. O autor resume os nossos privilégios: "Tendo, pois, irmãos, ousadia (confiança) para entrar no santuário, pelo sangue de Jesus". No Antigo Testamento, a entrada no Santo dos Santos era proibida sob pena de morte. Agora, todo crente tem acesso livre e confiante. Como? "Pelo novo e vivo caminho que ele nos consagrou, pelo véu, isto é, pela sua carne". Quando o corpo de Jesus foi rasgado na cruz, o véu do templo se rasgou de alto a baixo, simbolizando que o caminho para Deus estava aberto. Além do caminho aberto, temos um "grande sacerdote sobre a casa de Deus" (Jesus) para nos receber e interceder por nós.`
      },
      {
        verseRef: 'v. 22-23',
        title: 'A Aproximação com Fé e a Retenção da Esperança',
        description: `Fé e Esperança. Baseado nesses privilégios, vêm as exortações. A primeira (v. 22): "Cheguemo-nos com verdadeiro coração, em inteira certeza de fé, tendo os corações purificados da má consciência, e o corpo lavado com água limpa". Devemos nos aproximar de Deus em oração e adoração com sinceridade, confiando totalmente no sangue de Cristo para a nossa purificação interna, e lembrando do nosso batismo (o corpo lavado) como o sinal externo da nossa nova vida. A segunda exortação (v. 23): "Retenhamos firmes a confissão da nossa esperança; porque fiel é o que prometeu". Em meio à perseguição, não devemos vacilar na nossa esperança pública no evangelho, porque a nossa esperança não se baseia na nossa força, mas na fidelidade de Deus.`
      },
      {
        verseRef: 'v. 24-25',
        title: 'O Estímulo Mútuo e a Importância da Congregação',
        description: `Amor e Comunidade. A terceira exortação muda o foco de Deus para os irmãos (v. 24): "E consideremo-nos uns aos outros, para nos estimularmos ao amor e às boas obras". A vida cristã não é solitária; devemos pensar ativamente em como encorajar e provocar os nossos irmãos a viverem de forma santa. O versículo 25 dá o método para isso: "Não deixando a nossa congregação, como é costume de alguns, antes admoestando-nos uns aos outros; e tanto mais, quanto vedes que se vai aproximando aquele dia". O isolamento espiritual é perigoso. A reunião da igreja local é essencial para a sobrevivência espiritual, especialmente à medida que o Dia do Julgamento (e o aumento da oposição do mundo) se aproxima.`
      }
    ],
    conclusion: `Hebreus 10:19-25 nos mostra que a teologia profunda deve resultar em uma vida de igreja vibrante. Porque Cristo rasgou o véu e nos deu acesso a Deus, não temos desculpa para a frieza espiritual. Somos chamados a viver em comunhão íntima com Deus, a manter a nossa esperança firme diante do mundo e a nos reunirmos fielmente com os nossos irmãos para nos encorajarmos mutuamente na jornada da fé.`
  },
  {
    id: 'heb_12_1_3',
    bookId: 'HEB',
    chapter: 12,
    startVerse: 1,
    endVerse: 3,
    title: 'A Corrida da Fé e o Foco em Jesus',
    theme: 'A Perseverança Cristã e o Antídoto contra o Desânimo',
    introduction: `Após listar os heróis da fé no capítulo 11, o autor de Hebreus usa a imagem de uma corrida de atletismo em um grande estádio greco-romano para descrever a vida cristã. Os crentes são os corredores, os heróis do passado são os espectadores inspiradores, e Jesus é a linha de chegada e o exemplo supremo. Esta passagem é um chamado apaixonado à perseverança. O autor nos ensina como correr a maratona da fé: livrando-nos do que nos atrapalha, mantendo os olhos fixos no nosso Salvador e lembrando do Seu sofrimento para não desistirmos no meio do caminho.`,
    points: [
      {
        verseRef: 'v. 1',
        title: 'A Nuvem de Testemunhas e o Peso do Pecado',
        description: `Preparando-se para Correr. "Portanto nós também, pois que estamos rodeados de uma tão grande nuvem de testemunhas...". Os santos do capítulo 11 não são testemunhas no sentido de nos observarem passivamente do céu, mas no sentido de que a vida deles "testemunha" para nós que Deus é fiel e que a vida de fé é possível. Para correr bem, o autor dá duas ordens: "deixemos todo o embaraço, e o pecado que tão de perto nos rodeia". O "embaraço" (peso) pode não ser um pecado em si, mas qualquer coisa (hobbies, relacionamentos, ambições) que nos distrai e nos atrasa na vida cristã. O "pecado" (especialmente o pecado da incredulidade) é como uma roupa apertada que nos enreda e nos faz tropeçar. Devemos correr "com paciência (perseverança) a carreira que nos está proposta".`
      },
      {
        verseRef: 'v. 2',
        title: 'Olhando para Jesus, o Autor e Consumador',
        description: `O Foco Exclusivo. O segredo da perseverança não é olhar para as nossas próprias pernas cansadas ou para os outros corredores, mas "olhando para Jesus, autor e consumador da fé". A palavra "olhando" (aphorontes) significa desviar o olhar de todas as outras coisas para fixá-lo em uma só. Jesus é o "autor" (o pioneiro que abriu o caminho da fé) e o "consumador" (o exemplo perfeito e Aquele que leva a nossa fé à conclusão). O autor descreve como Jesus correu a Sua própria corrida: "o qual, pelo gozo que lhe estava proposto, suportou a cruz, desprezando a afronta, e assentou-se à destra do trono de Deus". Jesus suportou a agonia e a vergonha da cruz porque Ele olhava além dela, para a alegria da ressurreição, da exaltação e da salvação do Seu povo.`
      },
      {
        verseRef: 'v. 3',
        title: 'O Antídoto contra o Cansaço Espiritual',
        description: `Considerando o Sofrimento de Cristo. Os leitores de Hebreus estavam exaustos sob a perseguição e queriam desistir. O autor lhes dá o remédio para a fadiga da alma: "Considerai, pois, aquele que suportou tais contradições dos pecadores contra si mesmo, para que não enfraqueçais, desfalecendo em vossos ânimos". A palavra "considerai" (analogisasthe) é um termo matemático que significa calcular, comparar cuidadosamente. Quando comparamos as nossas lutas e perseguições com a hostilidade brutal, a injustiça e a crucificação que o Filho de Deus suportou por nós, os nossos problemas ganham a perspectiva correta. Lembrar do sofrimento de Cristo nos dá força para não desmaiarmos na nossa própria corrida.`
      }
    ],
    conclusion: `Hebreus 12:1-3 nos ensina que a vida cristã não é uma corrida de cem metros, mas uma maratona extenuante. Para cruzarmos a linha de chegada, precisamos ser implacáveis em remover o pecado e as distrações das nossas vidas. Mas, acima de tudo, precisamos manter os nossos olhos cravados em Jesus Cristo. Ele correu a corrida mais difícil, venceu, e agora está no trono nos dando graça para chegarmos até Ele.`
  },
  {
    id: 'heb_12_4_11',
    bookId: 'HEB',
    chapter: 12,
    startVerse: 4,
    endVerse: 11,
    title: 'A Disciplina do Pai Amoroso',
    theme: 'O Significado do Sofrimento e o Fruto da Justiça',
    introduction: `Quando os cristãos enfrentam sofrimento prolongado, a tentação imediata é pensar que Deus está irado com eles ou que os abandonou. Em Hebreus 12, o autor muda a metáfora de uma corrida atlética para a dinâmica de uma família. Ele ensina que as dificuldades, perseguições e provações que os crentes enfrentam não são sinais da ira de um Juiz, mas a disciplina amorosa de um Pai. Usando Provérbios 3, o autor nos ajuda a reinterpretar a nossa dor: a disciplina divina, embora dolorosa no momento, é a prova inegável da nossa adoção e a ferramenta indispensável para a nossa santificação.`,
    points: [
      {
        verseRef: 'v. 4-6',
        title: 'A Perspectiva Correta e a Prova do Amor',
        description: `O Esquecimento da Filiação. O autor começa com um choque de realidade: "Ainda não resististes até ao sangue, combatendo contra o pecado" (v. 4). Eles estavam sofrendo, mas ainda não haviam sido martirizados como Cristo foi. O problema deles era teológico: "E já vos esquecestes da exortação que argumenta convosco como filhos: Filho meu, não desprezes a correção do Senhor, e não desmaies quando por ele fores repreendido". O autor cita Provérbios para mostrar que Deus disciplina aqueles que Ele ama (v. 6). O sofrimento na vida do crente não é punição retributiva (Cristo já pagou pelos nossos pecados na cruz), mas correção formativa e amorosa.`
      },
      {
        verseRef: 'v. 7-8',
        title: 'A Disciplina como Prova de Adoção Genuína',
        description: `Filhos Legítimos. "Se suportais a correção, Deus vos trata como filhos; porque, que filho há a quem o pai não corrija?". Na cultura antiga, um pai só disciplinava e educava rigorosamente o filho legítimo que seria o seu herdeiro; ele ignorava os filhos ilegítimos. O autor tira uma conclusão surpreendente (v. 8): "Mas, se estais sem disciplina, da qual todos são feitos participantes, sois então bastardos, e não filhos". Uma vida cristã completamente livre de provações e correção divina não é um sinal de grande bênção, mas um motivo de alarme. A disciplina de Deus é a prova de que pertencemos à Sua família e de que Ele se importa o suficiente para não nos deixar no nosso pecado.`
      },
      {
        verseRef: 'v. 9-11',
        title: 'O Propósito da Disciplina e o Fruto Pacífico',
        description: `Participantes da Sua Santidade. O autor compara a disciplina humana com a divina. Os nossos pais terrenos nos disciplinavam "como bem lhes parecia" (frequentemente com falhas e impaciência), e nós os respeitávamos. "Não nos sujeitaremos muito mais ao Pai dos espíritos, para vivermos?". A disciplina de Deus é sempre perfeita e tem um propósito glorioso (v. 10): "para sermos participantes da sua santidade". O versículo 11 reconhece a realidade da dor: "E na verdade toda a correção, ao presente, não parece ser de gozo, senão de tristeza". Deus não nos pede para fingir que a dor não dói. Mas Ele nos pede para olhar para o resultado: "mas depois produz um fruto pacífico de justiça nos exercitados por ela". A dor é temporária; o caráter transformado é eterno.`
      }
    ],
    conclusion: `Hebreus 12:4-11 transforma a nossa visão sobre as provações da vida. Quando somos esmagados pelas circunstâncias, não devemos ver a mão de um carrasco, mas a mão de um Pai sábio e amoroso que está esculpindo a imagem de Cristo em nós. A disciplina dói, mas é infinitamente melhor suportar a dor cirúrgica que traz cura e santidade do que ser abandonado por Deus à nossa própria destruição.`
  },
  {
    id: 'heb_13_1_8',
    bookId: 'HEB',
    chapter: 13,
    startVerse: 1,
    endVerse: 8,
    title: 'A Vida Prática e o Cristo Imutável',
    theme: 'O Amor Fraternal, a Pureza, o Contentamento e a Fidelidade',
    introduction: `O último capítulo de Hebreus é uma série de exortações práticas em estilo de metralhadora, típicas do final das epístolas do Novo Testamento. O autor desce das alturas da teologia do sumo sacerdócio e do tabernáculo celestial para o chão da vida diária: como tratamos os visitantes, como lidamos com o casamento, como usamos o nosso dinheiro e como seguimos os nossos líderes. O fundamento para todas essas exigências éticas radicais é revelado no versículo 8: a natureza imutável de Jesus Cristo. Porque Cristo nunca muda, os valores do Seu Reino também não mudam.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Amor Fraternal e a Hospitalidade',
        description: `Amor em Ação. O capítulo começa com o imperativo fundamental: "Permaneça o amor fraternal" (philadelphia). O amor entre os crentes não deve ser uma fase passageira, mas uma realidade permanente. Esse amor se expressa de formas muito práticas. Primeiro (v. 2), "Não vos esqueçais da hospitalidade, porque por ela alguns, não o sabendo, hospedaram anjos" (uma referência a Abraão e Ló). A hospitalidade no primeiro século era vital para os missionários e cristãos em viagem. Segundo (v. 3), a empatia radical: "Lembrai-vos dos presos, como se estivésseis presos com eles, e dos maltratados, como sendo-o vós mesmos também no corpo". O amor cristão exige que sintamos a dor dos irmãos perseguidos como se fosse a nossa própria dor.`
      },
      {
        verseRef: 'v. 4-6',
        title: 'A Honra no Casamento e o Contentamento Financeiro',
        description: `Pureza e Confiança. O autor aborda duas áreas onde o mundo mais se opõe a Deus: sexo e dinheiro. Sobre o sexo (v. 4): "Venerado seja entre todos o matrimônio e o leito sem mácula; porém, aos que se dão à prostituição, e aos adúlteros, Deus os julgará". O casamento deve ser honrado e protegido da imoralidade, pois Deus é o juiz dessas questões. Sobre o dinheiro (v. 5): "Sejam os vossos costumes sem avareza, contentando-vos com o que tendes". O antídoto para a ganância não é a riqueza, mas o contentamento baseado na promessa de Deus: "Não te deixarei, nem te desampararei". Se temos a presença de Deus, temos tudo o que precisamos, e podemos dizer com ousadia (v. 6): "O Senhor é o meu ajudador, e não temerei o que me possa fazer o homem".`
      },
      {
        verseRef: 'v. 7-8',
        title: 'O Exemplo dos Líderes e a Rocha Imutável',
        description: `A Fundação da Fé. O autor exorta os crentes a lembrarem dos seus pastores e líderes do passado (que provavelmente já haviam morrido, alguns talvez como mártires): "Lembrai-vos dos vossos pastores, que vos falaram a palavra de Deus, a fé dos quais imitai, atentando para a sua maneira de viver". Não devemos imitar as falhas dos líderes, mas a sua fé e o resultado fiel das suas vidas. O motivo pelo qual a fé deles ainda é válida para nós hoje é dado no versículo 8, uma das maiores declarações cristológicas da Bíblia: "Jesus Cristo é o mesmo, ontem, e hoje, e eternamente". Os líderes morrem, as culturas mudam, as circunstâncias variam, mas o Salvador em quem confiamos permanece absolutamente inabalável.`
      }
    ],
    conclusion: `Hebreus 13:1-8 nos mostra que a verdadeira espiritualidade não é mística ou desconectada da realidade. Ela se prova na forma como abrimos as nossas casas, como honramos os nossos votos de casamento, como lidamos com as nossas finanças e como amamos os nossos irmãos. Podemos viver essa vida radical e contracultural porque a nossa segurança não está em um mundo em constante mudança, mas no Cristo que é o mesmo ontem, hoje e para sempre.`
  },
  {
    id: 'heb_13_10_16',
    bookId: 'HEB',
    chapter: 13,
    startVerse: 10,
    endVerse: 16,
    title: 'O Sacrifício de Louvor Fora do Acampamento',
    theme: 'A Identificação com a Vergonha de Cristo e a Verdadeira Adoração',
    introduction: `Nos versículos finais de Hebreus, o autor faz um último e poderoso apelo aos cristãos judeus que estavam tentados a voltar à segurança e à aceitação social do judaísmo. Ele usa a tipologia do Dia da Expiação para mostrar que seguir a Jesus significa abandonar o sistema religioso antigo e abraçar a rejeição do mundo. Jesus foi crucificado "fora da porta" da cidade, como um criminoso impuro. O autor chama a igreja a sair da sua zona de conforto, juntar-se a Cristo na Sua vergonha e oferecer a Deus os únicos sacrifícios que Ele agora aceita: o louvor dos nossos lábios e o amor prático ao próximo.`,
    points: [
      {
        verseRef: 'v. 10-11',
        title: 'O Altar Exclusivo e a Tipologia do Sacrifício',
        description: `A Incompatibilidade dos Sistemas. O autor declara: "Temos um altar, de que não têm direito de comer os que servem ao tabernáculo". O nosso "altar" é a cruz de Cristo. Aqueles que insistem em buscar a salvação através dos rituais do Antigo Testamento (ou de qualquer sistema de obras) excluem-se dos benefícios do sacrifício de Cristo. O autor explica a tipologia (v. 11): no Dia da Expiação, o sangue dos animais era levado para o santuário, mas os corpos dos animais eram "queimados fora do arraial" (considerados impuros e carregando o pecado do povo).`
      },
      {
        verseRef: 'v. 12-14',
        title: 'Saindo ao Encontro de Cristo na Sua Vergonha',
        description: `A Cruz Fora da Porta. Jesus cumpriu esse tipo perfeitamente (v. 12): "E por isso também Jesus, para santificar o povo pelo seu próprio sangue, padeceu fora da porta". Jesus foi expulso de Jerusalém e crucificado no Gólgota, o lugar da rejeição, da impureza e da vergonha. O apelo radical vem no versículo 13: "Saiamos, pois, a ele fora do arraial, levando o seu vitupério (vergonha, desonra)". O autor está dizendo aos crentes: "Não tentem ser aceitos pela sociedade que rejeitou o vosso Salvador. Abandonem o judaísmo oficial, aceitem a perseguição e identifiquem-se publicamente com o Cristo crucificado". A razão para essa coragem é escatológica (v. 14): "Porque não temos aqui cidade permanente, mas buscamos a futura". O nosso lar não é a Jerusalém terrena ou qualquer nação deste mundo, mas a Nova Jerusalém.`
      },
      {
        verseRef: 'v. 15-16',
        title: 'Os Sacrifícios Agradáveis a Deus',
        description: `Louvor e Boas Obras. Se o sistema de sacrifícios de animais acabou, o que oferecemos a Deus? O autor define a verdadeira adoração da Nova Aliança. Primeiro (v. 15), o sacrifício verbal: "Portanto, ofereçamos sempre por ele a Deus sacrifício de louvor, isto é, o fruto dos lábios que confessam o seu nome". A nossa adoração deve ser contínua ("sempre") e mediada por Cristo ("por ele"). Segundo (v. 16), o sacrifício prático: "E não vos esqueçais da beneficência e comunicação (compartilhar com os outros), porque com tais sacrifícios Deus se agrada". A adoração que Deus aceita não é o sangue de touros, mas lábios que cantam a Sua graça e mãos que ajudam os necessitados.`
      }
    ],
    conclusion: `Hebreus 13:10-16 é um chamado ao cristianismo autêntico e corajoso. Não podemos seguir a Jesus e, ao mesmo tempo, buscar a aprovação e o conforto de um mundo que O crucificou. Somos chamados a sair "fora do acampamento", abraçando a vergonha do evangelho, com os olhos fixos na cidade celestial. E enquanto caminhamos como peregrinos, a nossa vida deve ser um altar contínuo, oferecendo a Deus o sacrifício do nosso louvor e o sacrifício do nosso amor prático ao próximo.`
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
  console.log('Successfully added 10 more new pericopes for Hebrews.');
} else {
  console.error('Could not find the end of the pericopes array.');
}
