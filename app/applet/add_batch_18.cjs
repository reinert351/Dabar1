const fs = require('fs');

const newPericopes = [
  {
    id: '2ki_4_8_37',
    bookId: '2KI',
    chapter: 4,
    startVerse: 8,
    endVerse: 37,
    title: 'A Sunamita e a Ressurreição do seu Filho',
    theme: 'A Hospitalidade, a Fé Inabalável e o Poder sobre a Morte',
    introduction: 'O ministério de Eliseu é marcado por milagres de compaixão e provisão. Em 2 Reis 4, uma mulher rica de Suném demonstra hospitalidade extraordinária ao construir um quarto para o profeta. Como recompensa, Deus lhe concede um filho na sua velhice. No entanto, anos depois, o menino morre subitamente. A reação da sunamita é uma das maiores demonstrações de fé do Antigo Testamento. Ela não se desespera publicamente, mas cavalga até o profeta declarando: "Tudo vai bem". A ressurreição do menino prova que Deus não apenas dá a vida, mas tem o poder de restaurá-la quando tudo parece perdido.',
    points: [
      {
        verseRef: 'v. 8-17',
        title: 'A Hospitalidade e a Promessa do Filho',
        description: 'A sunamita percebe que Eliseu é um "santo homem de Deus" e constrói um quarto no terraço para ele descansar. Eliseu, querendo retribuir, descobre através de seu servo Geazi que ela não tem filhos e o marido é velho. Eliseu profetiza: "A este tempo determinado... abraçarás um filho". A promessa se cumpre, demonstrando que Deus recompensa a generosidade e a honra aos Seus servos.'
      },
      {
        verseRef: 'v. 18-26',
        title: 'A Morte Súbita e a Confissão de Fé',
        description: 'O menino cresce, mas um dia sofre uma forte dor de cabeça no campo e morre no colo da mãe. A sunamita o coloca na cama do profeta, fecha a porta e pede uma jumenta ao marido para ir até Eliseu. Quando o marido pergunta o motivo, ela responde simplesmente: "Tudo vai bem" (Shalom). Ela recusa-se a aceitar a morte como a palavra final antes de falar com o representante de Deus.'
      },
      {
        verseRef: 'v. 27-37',
        title: 'A Intercessão de Eliseu e a Ressurreição',
        description: 'Ao encontrar Eliseu, ela se agarra aos seus pés em amargura. Eliseu envia Geazi com o seu bordão, mas a mulher recusa-se a deixar o profeta: "Vive o Senhor... que não te deixarei". O bordão de Geazi não funciona. Eliseu entra no quarto, fecha a porta, ora ao Senhor e deita-se sobre o menino duas vezes. O menino espirra sete vezes e abre os olhos. A vida é restaurada através da oração fervorosa e do contato pessoal.'
      }
    ],
    conclusion: 'A história da sunamita nos ensina que a fé verdadeira não nega a realidade da dor, mas recusa-se a dar à morte a última palavra. A sua declaração "Tudo vai bem" não era negação psicológica, mas uma confiança profunda de que Deus, que deu o filho milagrosamente, poderia intervir novamente. Além disso, o fracasso do bordão de Geazi nos lembra que métodos e objetos religiosos não têm poder em si mesmos; os milagres exigem oração agonizante e o poder direto de Deus. A ressurreição do menino antecipa o ministério de Jesus, que é a própria Ressurreição e a Vida.'
  },
  {
    id: '2ki_5_15_27',
    bookId: '2KI',
    chapter: 5,
    startVerse: 15,
    endVerse: 27,
    title: 'A Cobiça de Geazi',
    theme: 'A Graça Gratuita, a Ganância e a Lepra do Pecado',
    introduction: 'Após a cura milagrosa de Naamã, o comandante sírio, 2 Reis 5 apresenta um contraste chocante. Naamã, o general pagão curado da lepra, tenta pagar pelo milagre, mas Eliseu recusa categoricamente, demonstrando que a graça de Deus não pode ser comprada. No entanto, Geazi, o servo de Eliseu, que havia testemunhado inúmeros milagres, é dominado pela cobiça. Ele corre atrás de Naamã, mente para obter dinheiro e roupas, e tenta esconder o seu pecado. O resultado é trágico: a lepra que saiu de Naamã apega-se a Geazi. O texto é um alerta severo contra o amor ao dinheiro e a comercialização do sagrado.',
    points: [
      {
        verseRef: 'v. 15-19',
        title: 'A Recusa de Eliseu e a Graça Gratuita',
        description: 'Naamã retorna a Eliseu, confessa que só há Deus em Israel e insiste em dar um presente (uma "bênção"). Eliseu jura pelo Senhor que não aceitará nada. O profeta protege a integridade do milagre: a salvação e a cura são dons gratuitos de Deus, não transações comerciais. Naamã parte em paz, levando terra de Israel para adorar a Yahweh.'
      },
      {
        verseRef: 'v. 20-24',
        title: 'A Cobiça e a Mentira de Geazi',
        description: 'Geazi pensa: "Meu senhor poupou a este sírio... hei de correr atrás dele e tomar dele alguma coisa". A ganância o cega. Ele alcança Naamã e inventa uma mentira sobre dois jovens profetas que acabaram de chegar, pedindo um talento de prata e duas mudas de roupa. Naamã, generosamente, lhe dá o dobro. Geazi esconde o tesouro em casa.'
      },
      {
        verseRef: 'v. 25-27',
        title: 'O Confronto e a Transferência da Lepra',
        description: 'Geazi apresenta-se diante de Eliseu como se nada tivesse acontecido. Eliseu pergunta: "De onde vens, Geazi?". Ele mente novamente: "Teu servo não foi a parte alguma". Eliseu, com discernimento profético, expõe o coração de Geazi: "Era isto ocasião para tomares prata...?". A sentença é imediata e terrível: a lepra de Naamã se apegará a Geazi e à sua descendência para sempre.'
      }
    ],
    conclusion: 'A história de Geazi é uma das advertências mais fortes da Bíblia para aqueles que estão no ministério ou próximos às coisas sagradas. A familiaridade com o poder de Deus não imunizou Geazi contra a cobiça. Ele tentou transformar a graça de Deus em lucro pessoal. O apóstolo Paulo adverte que "o amor ao dinheiro é a raiz de toda a espécie de males" (1 Timóteo 6:10). Geazi ganhou prata e roupas, mas perdeu a sua saúde, o seu ministério e a sua comunhão com Deus. O pecado oculto sempre será exposto pela luz da santidade de Deus. A graça não tem preço, e tentar vendê-la atrai o juízo divino.'
  },
  {
    id: '2ki_6_1_7',
    bookId: '2KI',
    chapter: 6,
    startVerse: 1,
    endVerse: 7,
    title: 'O Machado Flutuante',
    theme: 'O Cuidado de Deus nos Detalhes, o Trabalho e a Restauração',
    introduction: 'O ministério de Eliseu não se limitou a reis, exércitos e grandes crises nacionais. Em 2 Reis 6:1-7, vemos um milagre que parece pequeno e quase doméstico, mas que revela o coração de Deus para com as ansiedades cotidianas dos Seus servos. Os discípulos dos profetas estão construindo um novo alojamento quando o machado emprestado de um deles cai no rio Jordão. O desespero do jovem não é apenas pela perda da ferramenta, mas pela dívida que ele não pode pagar. O milagre do machado flutuante demonstra que Deus se importa com as nossas "pequenas" perdas e tem poder para restaurar o que afundou.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Crescimento e o Trabalho Comunitário',
        description: 'A escola dos profetas cresceu tanto que o espaço ficou pequeno. Eles propõem a Eliseu ir ao Jordão para cortar madeira e construir um lugar maior. Eles pedem que Eliseu vá com eles, demonstrando submissão e desejo pela presença do líder espiritual. O trabalho é manual, humilde e comunitário.'
      },
      {
        verseRef: 'v. 5',
        title: 'O Acidente e o Desespero da Dívida',
        description: 'Enquanto um deles cortava uma árvore, o ferro do machado cai na água. O jovem clama em desespero: "Ai, meu senhor! Porque era emprestado". Naquela época, o ferro era extremamente caro. Perder uma ferramenta emprestada significava não apenas vergonha, mas a possibilidade de ser vendido como escravo para pagar a dívida (2 Reis 4:1).'
      },
      {
        verseRef: 'v. 6-7',
        title: 'O Milagre da Restauração',
        description: 'Eliseu pergunta: "Onde caiu?". O profeta corta um pedaço de pau, lança-o na água naquele exato lugar, e o ferro flutua. Eliseu diz: "Levanta-o". O jovem estende a mão e o pega. O milagre contraria as leis da física para resolver um problema financeiro e emocional de um servo fiel.'
      }
    ],
    conclusion: 'O milagre do machado flutuante é um lembrete reconfortante de que Deus não é apenas o Senhor dos exércitos e das nações, mas também o Deus dos detalhes da nossa vida. Ele se importa com as nossas ferramentas perdidas, as nossas dívidas e as nossas ansiedades diárias (1 Pedro 5:7). Espiritualmente, a história também serve como uma metáfora: muitas vezes, no meio do trabalho para Deus, perdemos o nosso "ferro" (a nossa unção, alegria ou eficácia) e afundamos. Deus, através da cruz (o pedaço de pau lançado na água), tem o poder de fazer flutuar aquilo que perdemos e restaurar a nossa capacidade de servir.'
  },
  {
    id: '2ki_7_1_20',
    bookId: '2KI',
    chapter: 7,
    startVerse: 1,
    endVerse: 20,
    title: 'Os Quatro Leprosos e o Acampamento Sírio',
    theme: 'A Provisão Milagrosa, a Incredulidade e a Partilha das Boas Novas',
    introduction: 'Samaria estava sob um cerco brutal do exército sírio, resultando em uma fome tão severa que as pessoas estavam recorrendo ao canibalismo. O rei de Israel culpa Eliseu e tenta matá-lo. Em 2 Reis 7, Eliseu profetiza que no dia seguinte haverá abundância de comida a preços irrisórios. Um oficial do rei zomba da profecia. O milagre acontece através dos instrumentos mais improváveis: quatro leprosos famintos que decidem se render aos sírios. Eles descobrem que Deus havia afugentado o exército inimigo. A história é uma poderosa ilustração do Evangelho: mendigos descobrindo um banquete e compartilhando a boa notícia com uma cidade condenada.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Profecia da Abundância e a Zombaria da Incredulidade',
        description: 'Eliseu declara a palavra do Senhor: amanhã, a farinha e a cevada serão vendidas a preços baixíssimos na porta de Samaria. O capitão do rei zomba: "Ainda que o Senhor fizesse janelas no céu, poder-se-ia fazer isso?". Eliseu responde com uma sentença terrível: ele verá a abundância com os próprios olhos, mas não comerá dela.'
      },
      {
        verseRef: 'v. 3-8',
        title: 'O Desespero dos Leprosos e a Descoberta do Banquete',
        description: 'Quatro leprosos, sentados à porta da cidade, raciocinam: se ficarem, morrem de fome; se entrarem na cidade, morrem de fome; se forem ao acampamento sírio, podem ser mortos ou poupados. Eles escolhem o risco. Ao chegarem no crepúsculo, encontram o acampamento deserto. O Senhor havia feito os sírios ouvirem o ruído de um grande exército, fazendo-os fugir em pânico, deixando tudo para trás. Os leprosos comem, bebem e escondem tesouros.'
      },
      {
        verseRef: 'v. 9-20',
        title: 'O Dia de Boas Novas e o Cumprimento da Palavra',
        description: 'A consciência dos leprosos pesa: "Não fazemos bem; este dia é dia de boas novas, e nós nos calamos". Eles avisam a cidade. O povo sai e saqueia o acampamento sírio. A profecia de Eliseu se cumpre exatamente: a comida torna-se barata. E o capitão incrédulo? Ele é atropelado pela multidão na porta da cidade e morre, vendo a bênção, mas não participando dela.'
      }
    ],
    conclusion: 'A atitude dos quatro leprosos é a definição perfeita de evangelismo: um mendigo dizendo a outro mendigo onde encontrar pão. Nós, que estávamos espiritualmente mortos e famintos, descobrimos o banquete da graça de Cristo. Não podemos guardar essa boa notícia apenas para nós enquanto o mundo perece de fome ("este dia é dia de boas novas, e nós nos calamos"). Além disso, a morte do capitão incrédulo é um alerta solene: a incredulidade zomba das promessas de Deus e, no final, nos exclui de desfrutar da Sua salvação. A Palavra de Deus sempre se cumpre, quer acreditemos nela ou não.'
  },
  {
    id: '2ki_17_6_23',
    bookId: '2KI',
    chapter: 17,
    startVerse: 6,
    endVerse: 23,
    title: 'A Queda e o Exílio de Israel (Reino do Norte)',
    theme: 'A Paciência Esgotada, a Idolatria Obstinada e o Juízo do Exílio',
    introduction: 'O capítulo 17 de 2 Reis é o obituário teológico do Reino do Norte (Israel). Após mais de 200 anos de rebelião contínua, idolatria e rejeição aos profetas, a paciência de Deus chega ao fim. Em 722 a.C., o império Assírio conquista Samaria e deporta as dez tribos de Israel para o exílio. O autor bíblico faz uma pausa na narrativa histórica para explicar o "porquê" desta catástrofe. A queda de Israel não foi apenas uma derrota militar, mas o juízo divino direto por quebrarem a aliança. O texto é um dos resumos mais contundentes da Bíblia sobre as consequências da obstinação no pecado.',
    points: [
      {
        verseRef: 'v. 6-12',
        title: 'A Ingratidão e a Adoção da Idolatria',
        description: 'O texto declara o motivo fundamental do exílio: "Isto sucedeu porque os filhos de Israel pecaram contra o Senhor seu Deus, que os fizera subir da terra do Egito". Eles esqueceram a redenção e adotaram os costumes das nações pagãs. Construíram altos, levantaram estátuas e postes-ídolos, e serviram aos ídolos, provocando a ira do Senhor.'
      },
      {
        verseRef: 'v. 13-17',
        title: 'A Rejeição dos Profetas e a Dureza de Cerviz',
        description: 'Deus não os destruiu sem aviso. Ele advertiu Israel repetidamente através de todos os profetas e videntes: "Voltai de vossos maus caminhos". Mas eles "endureceram a sua cerviz" e rejeitaram os estatutos e a aliança. O ápice da sua depravação foi a prática de feitiçaria e o sacrifício de seus próprios filhos e filhas no fogo.'
      },
      {
        verseRef: 'v. 18-23',
        title: 'A Remoção da Presença e o Exílio',
        description: 'A consequência da rebelião contínua é a rejeição divina: "O Senhor muito se indignou contra Israel, e os tirou de diante da sua face". Eles seguiram o pecado original de Jeroboão (os bezerros de ouro) e nunca se apartaram dele. Finalmente, Deus os entregou nas mãos dos assírios, e Israel foi levado cativo para longe da Terra Prometida.'
      }
    ],
    conclusion: 'A queda do Reino do Norte é uma prova histórica de que Deus é santo e não tolerará o pecado para sempre. A graça e a paciência de Deus são imensas (Ele enviou profetas por séculos), mas elas têm um limite quando encontram um coração obstinado e impenitente. A história de Israel nos adverte que a religião sincrética (tentar adorar a Deus enquanto servimos aos ídolos do mundo) sempre termina em cativeiro espiritual. O exílio foi a forma severa de Deus dizer: "Se vocês preferem viver como as nações pagãs, então viverão entre elas". A verdadeira liberdade só é encontrada na obediência exclusiva à Aliança de Deus.'
  },
  {
    id: '2ki_18_1_8',
    bookId: '2KI',
    chapter: 18,
    startVerse: 1,
    endVerse: 8,
    title: 'O Reinado e as Reformas de Ezequias',
    theme: 'A Confiança em Deus, a Destruição dos Ídolos e a Prosperidade Espiritual',
    introduction: 'Enquanto o Reino do Norte era destruído pela Assíria devido à sua idolatria, o Reino do Sul (Judá) experimenta um dos maiores avivamentos de sua história sob a liderança do rei Ezequias. 2 Reis 18:1-8 apresenta o currículo espiritual deste rei notável. Ezequias não apenas fez o que era reto aos olhos do Senhor, mas teve a coragem de destruir os "altos" (locais de adoração pagã) que reis anteriores haviam tolerado. Ele até mesmo destruiu a serpente de bronze de Moisés, que havia se tornado um objeto de idolatria. O seu reinado prova que a verdadeira reforma exige coragem para quebrar tradições mortas e uma confiança inabalável em Deus.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Padrão de Davi Restaurado',
        description: 'Ezequias começa a reinar aos 25 anos. O texto lhe dá o maior elogio possível para um rei de Judá: "Fez o que era reto aos olhos do Senhor, conforme tudo o que fizera Davi, seu pai". Ele não se contentou com a mediocridade espiritual dos seus antecessores imediatos; ele buscou o padrão original de devoção a Deus.'
      },
      {
        verseRef: 'v. 4',
        title: 'A Destruição dos Altos e de Neustã',
        description: 'A reforma de Ezequias foi radical. Ele tirou os altos, quebrou as estátuas e deitou abaixo os bosques. O ato mais corajoso foi despedaçar a serpente de bronze que Moisés fizera no deserto (Números 21). O povo estava queimando incenso a ela. Ezequias a chamou de "Neustã" (apenas um pedaço de bronze). Ele destruiu uma relíquia histórica porque ela havia se tornado um ídolo.'
      },
      {
        verseRef: 'v. 5-8',
        title: 'A Confiança Inabalável e o Sucesso Divino',
        description: 'O segredo de Ezequias é revelado: "No Senhor Deus de Israel confiou... apegou-se ao Senhor, não se apartou de após ele". Como resultado de sua obediência aos mandamentos, "o Senhor era com ele; e para onde quer que saía se portava com prudência". Ele teve coragem para se rebelar contra o rei da Assíria e derrotar os filisteus.'
      }
    ],
    conclusion: 'A reforma de Ezequias nos ensina que o verdadeiro avivamento sempre envolve a destruição de ídolos. Muitas vezes, os nossos maiores ídolos não são coisas más em si mesmas, mas coisas boas (como a serpente de bronze, que foi um instrumento de cura no passado) que elevamos ao lugar de Deus. Quando a tradição, a liturgia ou um objeto se tornam mais importantes do que o próprio Senhor, eles precisam ser chamados de "Neustã" (apenas um pedaço de bronze) e removidos. A prosperidade e a vitória de Ezequias não vieram de alianças políticas, mas da sua decisão de se apegar exclusivamente a Deus e confiar nEle de todo o coração.'
  },
  {
    id: '2ki_19_14_37',
    bookId: '2KI',
    chapter: 19,
    startVerse: 14,
    endVerse: 37,
    title: 'A Oração de Ezequias e o Livramento de Jerusalém',
    theme: 'A Ameaça Impossível, a Oração Soberana e a Defesa de Deus',
    introduction: 'O rei Senaqueribe da Assíria, o império mais poderoso do mundo na época, cerca Jerusalém. O seu porta-voz, Rabsaqué, profere blasfêmias contra Yahweh, afirmando que nenhum deus das outras nações pôde livrá-las da Assíria, e o Deus de Judá também não poderia. Diante do terror absoluto e de uma carta de ameaça, o rei Ezequias não convoca um conselho de guerra, mas vai ao Templo. Em 2 Reis 19, vemos uma das orações mais poderosas da Bíblia. Ezequias estende a carta diante de Deus, apelando não para a sua própria justiça, mas para a glória do Nome do Senhor. A resposta divina é um livramento espetacular e sobrenatural.',
    points: [
      {
        verseRef: 'v. 14-19',
        title: 'A Carta Estendida e o Apelo à Glória de Deus',
        description: 'Ezequias pega a carta de ameaça, sobe à Casa do Senhor e a estende perante Deus. A sua oração reconhece a soberania absoluta de Deus: "Tu mesmo, só tu és Deus de todos os reinos da terra". Ele admite que os assírios destruíram as outras nações, mas explica o porquê: "porque não eram deuses, mas obra de mãos de homens". O seu pedido de livramento tem um propósito missional: "para que todos os reinos da terra saibam que só tu és o Senhor Deus".'
      },
      {
        verseRef: 'v. 20-34',
        title: 'A Resposta Profética através de Isaías',
        description: 'Deus responde através do profeta Isaías. O Senhor zomba da arrogância de Senaqueribe, declarando que o rei assírio foi apenas um instrumento nas mãos de Deus, e agora o seu orgulho será punido. Deus promete defender Jerusalém: "Eu ampararei a esta cidade, para a livrar, por amor de mim e por amor do meu servo Davi".'
      },
      {
        verseRef: 'v. 35-37',
        title: 'O Anjo do Senhor e a Derrota Assíria',
        description: 'Naquela mesma noite, o Anjo do Senhor sai e fere 185.000 homens no acampamento assírio. A maior máquina de guerra do mundo é aniquilada em silêncio, sem que Judá dispare uma única flecha. Senaqueribe foge envergonhado para Nínive, onde é assassinado por seus próprios filhos enquanto adorava o seu falso deus. Yahweh triunfa sobre os deuses da Assíria.'
      }
    ],
    conclusion: 'A atitude de Ezequias diante da ameaça assíria é o modelo perfeito de como lidar com crises esmagadoras. Quando recebemos as "cartas de ameaça" da vida (um diagnóstico médico, uma crise financeira, um ataque espiritual), o nosso primeiro instinto deve ser subir à presença de Deus e estender o problema diante dEle. A oração de Ezequias foi poderosa porque não focou no tamanho do exército inimigo, mas na grandeza do Criador. Deus defendeu Jerusalém por amor ao Seu próprio Nome. A derrota de Senaqueribe prova que nenhum poder terreno ou arrogância humana pode resistir ao Deus Todo-Poderoso quando o Seu povo clama em fé.'
  },
  {
    id: '2ki_22_8_20',
    bookId: '2KI',
    chapter: 22,
    startVerse: 8,
    endVerse: 20,
    title: 'A Descoberta do Livro da Lei por Josias',
    theme: 'A Palavra Perdida, o Quebrantamento e a Misericórdia Divina',
    introduction: 'Após os reinados perversos de Manassés e Amom, que mergulharam Judá na idolatria profunda e no derramamento de sangue, o jovem rei Josias inicia uma reforma. Durante a restauração do Templo, ocorre um dos eventos mais significativos da história de Israel: o sumo sacerdote Hilquias encontra o "Livro da Lei" (provavelmente o livro de Deuteronômio), que havia sido perdido e esquecido dentro da própria Casa de Deus. Em 2 Reis 22, a leitura da Palavra de Deus produz um choque espiritual em Josias. A sua reação de quebrantamento e temor diante das maldições da Lei resulta em uma promessa de misericórdia de Deus.',
    points: [
      {
        verseRef: 'v. 8-10',
        title: 'O Livro Encontrado no Templo',
        description: 'Hilquias encontra o Livro da Lei e o entrega ao escrivão Safã. A ironia trágica é que a Palavra de Deus estava perdida dentro do próprio Templo. A religião havia continuado por décadas sem a revelação escrita de Deus. Safã lê o livro diante do rei Josias.'
      },
      {
        verseRef: 'v. 11-13',
        title: 'O Rasgar das Vestes e o Temor do Juízo',
        description: 'Ao ouvir as palavras da Lei, Josias rasga as suas vestes em profundo desespero e arrependimento. Ele percebe a imensidão do pecado da nação e a ira acumulada de Deus: "Grande é o furor do Senhor que se acendeu contra nós, porquanto nossos pais não deram ouvidos às palavras deste livro". O conhecimento da Palavra traz convicção de pecado.'
      },
      {
        verseRef: 'v. 14-20',
        title: 'A Profetisa Hulda e a Promessa de Paz',
        description: 'Josias envia uma delegação para consultar a profetisa Hulda. Ela confirma que o juízo de Deus cairá sobre Jerusalém devido à idolatria. No entanto, ela traz uma mensagem pessoal de graça para Josias: porque o seu coração se enterneceu, ele se humilhou, chorou e rasgou as vestes perante o Senhor, ele será recolhido em paz e não verá a destruição da cidade.'
      }
    ],
    conclusion: 'A descoberta do Livro da Lei nos dias de Josias é um alerta para a Igreja contemporânea. É possível ter o "Templo" (as estruturas religiosas, os cultos, as atividades) e, ao mesmo tempo, ter a Palavra de Deus perdida e esquecida no meio de tudo isso. O verdadeiro avivamento sempre começa com a redescoberta e a submissão à autoridade das Escrituras. A reação de Josias é o padrão do verdadeiro arrependimento: ele não tentou justificar o pecado da nação, mas rasgou o coração diante da santidade de Deus. A misericórdia que Josias recebeu prova que Deus sempre responde com graça a um coração quebrantado e contrito (Salmo 51:17).'
  },
  {
    id: '2ki_24_10_16',
    bookId: '2KI',
    chapter: 24,
    startVerse: 10,
    endVerse: 16,
    title: 'A Primeira Deportação para a Babilônia',
    theme: 'O Cerco, a Rendição e o Início do Exílio de Judá',
    introduction: 'Apesar das reformas de Josias, o coração do povo de Judá permaneceu apegado à idolatria, e os pecados de Manassés selaram o destino da nação (2 Reis 24:3). O juízo profetizado por décadas finalmente chega. Em 597 a.C., Nabucodonosor, rei da Babilônia, cerca Jerusalém. O jovem rei Joaquim, percebendo a futilidade da resistência, rende-se. 2 Reis 24:10-16 descreve a primeira grande deportação de Judá. A elite da nação, os tesouros do Templo e os guerreiros são levados cativos. É o início do fim, marcando o cumprimento das advertências divinas de que a desobediência à aliança resultaria na perda da Terra Prometida.',
    points: [
      {
        verseRef: 'v. 10-12',
        title: 'O Cerco Babilônico e a Rendição de Joaquim',
        description: 'Os servos de Nabucodonosor sobem contra Jerusalém e a cercam. O próprio rei da Babilônia chega durante o cerco. O rei Joaquim, junto com sua mãe, seus servos e príncipes, sai e se rende ao rei da Babilônia. A dinastia de Davi, que antes derrotava impérios sob Ezequias, agora se curva em submissão a um rei pagão.'
      },
      {
        verseRef: 'v. 13',
        title: 'O Saque do Templo e do Palácio',
        description: 'Nabucodonosor leva todos os tesouros da Casa do Senhor e do palácio real. Ele quebra todos os vasos de ouro que Salomão havia feito no Templo, "como o Senhor tinha dito". A glória material de Israel é despojada. O Templo, que havia se tornado um falso amuleto de segurança para o povo (Jeremias 7), é violado.'
      },
      {
        verseRef: 'v. 14-16',
        title: 'A Deportação da Elite e dos Artífices',
        description: 'A estratégia babilônica era decapitar a liderança da nação conquistada. Nabucodonosor leva cativos todos os príncipes, os homens valentes (10.000 pessoas), e todos os artífices e ferreiros (para impedir a fabricação de armas). "Ninguém ficou, senão o povo pobre da terra". Entre esses exilados estavam o profeta Ezequiel e, possivelmente, Daniel e seus amigos.'
      }
    ],
    conclusion: 'A primeira deportação para a Babilônia é a prova dolorosa de que Deus não blefa. As Suas advertências sobre o juízo são tão certas quanto as Suas promessas de bênção. Quando o povo de Deus confia nos tesouros do Templo em vez de confiar no Deus do Templo, eles perdem ambos. O exílio foi uma cirurgia radical para arrancar a idolatria do coração de Judá. No entanto, mesmo neste juízo severo, a graça de Deus estava operando. Ao levar a elite para a Babilônia, Deus estava preservando um remanescente fiel (como Daniel e Ezequiel) que manteria a fé viva no exílio e prepararia o caminho para o retorno futuro. Deus disciplina os Seus filhos, mas não os abandona.'
  },
  {
    id: '2ki_25_1_12',
    bookId: '2KI',
    chapter: 25,
    startVerse: 1,
    endVerse: 12,
    title: 'A Queda de Jerusalém e a Destruição do Templo',
    theme: 'O Fim da Monarquia, o Fogo do Juízo e a Desolação',
    introduction: 'O capítulo 25 de 2 Reis narra o evento mais traumático da história do Antigo Testamento: a destruição total de Jerusalém e do Templo de Salomão em 586 a.C. O rei Zedequias, colocado no trono por Nabucodonosor, rebela-se contra a Babilônia, ignorando os conselhos do profeta Jeremias. O resultado é um cerco de 18 meses que traz fome extrema à cidade. A queda de Jerusalém não é apenas uma derrota militar; é o colapso teológico da nação. A cidade santa é queimada, os muros são derrubados, a linhagem real é humilhada, e o povo é levado para o cativeiro. É o dia da ira do Senhor.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Cerco, a Fome e a Brecha no Muro',
        description: 'Nabucodonosor monta acampamento e constrói trincheiras ao redor de Jerusalém. O cerco dura até o décimo primeiro ano de Zedequias. A fome na cidade torna-se tão severa que "não havia pão para o povo da terra". Finalmente, uma brecha é feita no muro, e o exército de Judá foge de noite, tentando escapar pelo caminho da campina.'
      },
      {
        verseRef: 'v. 5-7',
        title: 'A Captura e a Cegueira de Zedequias',
        description: 'Os caldeus perseguem e capturam o rei Zedequias nas campinas de Jericó. Ele é levado a Nabucodonosor em Ribla para julgamento. A punição é cruel e simbólica: os filhos de Zedequias são degolados diante de seus olhos, e em seguida, os olhos de Zedequias são vazados. A última coisa que ele viu foi a morte de seus herdeiros. Ele é levado acorrentado para a Babilônia, cumprindo a profecia de Ezequiel de que ele iria para a Babilônia, mas não a veria (Ezequiel 12:13).'
      },
      {
        verseRef: 'v. 8-12',
        title: 'A Destruição do Templo e o Fogo em Jerusalém',
        description: 'Nebuzaradã, capitão da guarda babilônica, entra em Jerusalém e executa a destruição sistemática. Ele queima a Casa do Senhor (o Templo de Salomão), a casa do rei e todas as casas grandes de Jerusalém. Os muros da cidade são derrubados. O restante do povo é levado cativo, deixando apenas os mais pobres da terra para serem vinhateiros e lavradores. O centro da adoração e da identidade de Israel é reduzido a cinzas.'
      }
    ],
    conclusion: 'A destruição de Jerusalém e do Templo é o clímax do juízo de Deus sobre a rebelião persistente do Seu povo. O Templo de Salomão, que havia sido dedicado com tanta glória (1 Reis 8), agora está em ruínas, provando que Deus não habita em edifícios de pedra quando o coração do povo está longe dEle. A cegueira física de Zedequias é uma metáfora trágica da cegueira espiritual de toda a nação, que se recusou a ver os avisos dos profetas. No entanto, o livro de 2 Reis não termina em desespero total. O último parágrafo (v. 27-30) relata a libertação do rei Joaquim na Babilônia, um pequeno raio de esperança de que a linhagem de Davi não foi extinta e que a misericórdia de Deus, um dia, restaurará o Seu povo.'
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
console.log(`Added ${addedCount} new pericopes (Batch 18).`);
