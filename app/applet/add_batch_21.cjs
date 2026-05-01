const fs = require('fs');

const newPericopes = [
  {
    id: 'ezr_1_1_11',
    bookId: 'EZR',
    chapter: 1,
    startVerse: 1,
    endVerse: 11,
    title: 'O Decreto de Ciro e o Despertar de Deus',
    theme: 'Soberania Divina, Cumprimento da Profecia e o Recomeço',
    introduction: 'O livro de Esdras começa exatamente onde 2 Crônicas termina. Após 70 anos de cativeiro na Babilônia, a esperança parecia morta. No entanto, Deus não havia esquecido a Sua aliança. Em Esdras 1, vemos a soberania absoluta de Deus sobre a história humana. Para cumprir a profecia dada através de Jeremias, o Senhor "desperta" o espírito de Ciro, o rei pagão da Pérsia. Ciro não apenas liberta os judeus, mas financia a reconstrução do Templo e devolve os utensílios sagrados roubados por Nabucodonosor. O texto nos ensina que o coração do rei está nas mãos do Senhor, e Ele pode usar qualquer pessoa para cumprir os Seus propósitos.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Despertar do Rei e o Decreto',
        description: 'No primeiro ano de Ciro, Deus desperta o seu espírito. Ciro emite um decreto reconhecendo que "o Senhor Deus dos céus" lhe deu os reinos e o encarregou de edificar uma casa em Jerusalém. Ele convida o povo judeu a voltar e ordena que os vizinhos os ajudem com prata, ouro e ofertas voluntárias.'
      },
      {
        verseRef: 'v. 5-6',
        title: 'O Despertar do Povo e a Provisão',
        description: 'Assim como Deus despertou o rei, Ele também desperta o espírito dos chefes das famílias de Judá e Benjamim, dos sacerdotes e levitas. O retorno não foi uma iniciativa humana, mas um impulso divino. Os seus vizinhos os ajudam com riquezas, cumprindo um padrão semelhante ao Êxodo do Egito.'
      },
      {
        verseRef: 'v. 7-11',
        title: 'A Restauração dos Utensílios Sagrados',
        description: 'Ciro tira os utensílios da Casa do Senhor que Nabucodonosor havia roubado e colocado no templo de seus deuses. São contadas milhares de bacias de ouro e prata. A devolução desses itens simboliza que a adoração verdadeira seria restaurada exatamente como Deus havia ordenado. O que o inimigo roubou, Deus faz restituir.'
      }
    ],
    conclusion: 'Esdras 1 é um testemunho poderoso de que Deus é o Senhor da história. Quando as circunstâncias parecem impossíveis e o exílio parece permanente, Deus pode "despertar" corações e mudar o cenário da noite para o dia. A fidelidade de Deus à Sua Palavra é inquebrável; os 70 anos profetizados por Jeremias se cumpriram com precisão matemática. Além disso, a história nos encoraja a orar pelos nossos líderes e governantes, sabendo que Deus tem o poder de direcionar as suas decisões para abençoar o Seu povo e avançar o Seu Reino.'
  },
  {
    id: 'ezr_3_1_6',
    bookId: 'EZR',
    chapter: 3,
    startVerse: 1,
    endVerse: 6,
    title: 'A Restauração do Altar',
    theme: 'A Prioridade da Adoração, o Temor e o Sacrifício',
    introduction: 'Quando os exilados retornam a Jerusalém, eles encontram uma cidade em ruínas. Havia muros para reconstruir, casas para erguer e o próprio Templo para edificar. No entanto, em Esdras 3, a primeira estrutura que eles constroem não é um muro de defesa nem o alicerce do Templo, mas o Altar de Deus. Liderados por Jesua (o sumo sacerdote) e Zorobabel (o governador), o povo se reúne "como um só homem". Eles constroem o altar sobre as suas antigas bases, movidos pelo temor dos povos vizinhos. A lição é clara: a verdadeira reconstrução de uma vida ou de uma nação sempre começa pela restauração do altar da adoração.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Unidade e a Prioridade do Altar',
        description: 'No sétimo mês, o povo se ajunta em Jerusalém "como um só homem". Jesua e Zorobabel levantam-se e edificam o altar do Deus de Israel para oferecerem holocaustos, "como está escrito na lei de Moisés". Eles não inventam um novo método de culto; eles retornam à Palavra de Deus.'
      },
      {
        verseRef: 'v. 3',
        title: 'A Adoração como Resposta ao Medo',
        description: 'O texto revela a motivação deles: "E firmaram o altar sobre as suas bases, porque o terror estava sobre eles, por causa dos povos das terras". Em vez de construir muros para se protegerem dos inimigos, eles construíram um altar. Eles entenderam que a maior proteção de Israel não era a força militar, mas a presença e o favor de Deus.'
      },
      {
        verseRef: 'v. 4-6',
        title: 'A Celebração das Festas e o Culto Contínuo',
        description: 'Eles celebram a Festa dos Tabernáculos (que lembrava a provisão de Deus no deserto) e restabelecem o holocausto contínuo (diário). O versículo 6 destaca um detalhe crucial: "Desde o primeiro dia do sétimo mês começaram a oferecer holocaustos ao Senhor; porém ainda não estavam postos os fundamentos do templo". A adoração precedeu a estrutura.'
      }
    ],
    conclusion: 'A atitude dos repatriados em Esdras 3 desafia as nossas prioridades modernas. Quando enfrentamos crises ou precisamos reconstruir a nossa vida, a nossa tendência é focar primeiro nas "estruturas" (finanças, carreira, relacionamentos). Mas a Bíblia nos ensina que o "altar" deve vir primeiro. O nosso relacionamento com Deus, a nossa vida de oração e a nossa adoração diária são a base sobre a qual todo o resto deve ser construído. Além disso, quando o medo dos inimigos nos cerca, a nossa melhor defesa não é a ansiedade ou a autoproteção, mas correr para o altar e confiar o nosso destino nas mãos do Senhor.'
  },
  {
    id: 'ezr_3_8_13',
    bookId: 'EZR',
    chapter: 3,
    startVerse: 8,
    endVerse: 13,
    title: 'O Lançamento dos Alicerces do Templo',
    theme: 'Louvor, Memória do Passado e a Tensão entre Choro e Alegria',
    introduction: 'No segundo ano após o retorno do exílio, o trabalho de reconstrução do Templo finalmente começa. Esdras 3:8-13 descreve a cerimônia emocionante do lançamento dos alicerces. Os sacerdotes vestem os seus trajes, os levitas tocam trombetas e címbalos, e o povo canta o antigo refrão de Davi: "Porque ele é bom, e a sua benignidade dura para sempre". No entanto, a celebração é marcada por uma mistura complexa de emoções. Enquanto os mais jovens gritam de alegria pelo novo começo, os anciãos que haviam visto a glória do primeiro Templo de Salomão choram em alta voz. O som da alegria e do choro se misturam, criando um momento de profunda reflexão sobre a graça e a perda.',
    points: [
      {
        verseRef: 'v. 8-9',
        title: 'O Início da Obra e a Liderança',
        description: 'Zorobabel e Jesua, junto com os sacerdotes e levitas, iniciam a obra. Eles nomeiam levitas de vinte anos para cima para supervisionarem o trabalho. A reconstrução exige ordem, delegação e o envolvimento ativo daqueles que foram chamados para servir na Casa de Deus.'
      },
      {
        verseRef: 'v. 10-11',
        title: 'O Louvor Segundo a Ordem de Davi',
        description: 'Quando os construtores lançam os alicerces, a adoração irrompe. Eles cantam alternadamente, louvando e rendendo graças ao Senhor com as palavras do Salmo 136. O povo jubila com grande brado. Eles celebram a fidelidade de Deus, que os trouxe de volta do exílio para verem os alicerces da Sua Casa restaurados.'
      },
      {
        verseRef: 'v. 12-13',
        title: 'A Mistura de Choro e Alegria',
        description: 'Muitos dos sacerdotes, levitas e chefes dos pais, que eram idosos e tinham visto a magnificência do primeiro Templo (destruído 50 anos antes), choram em alta voz ao verem os novos alicerces, que pareciam modestos em comparação. O som do choro e o som da alegria se misturam de tal forma que o povo não consegue distinguir um do outro, e o barulho é ouvido de longe.'
      }
    ],
    conclusion: 'O lançamento dos alicerces do segundo Templo é um retrato realista da vida cristã e da história da Igreja. Muitas vezes, os nossos recomeços são marcados por alegria pelo que Deus está fazendo hoje, mas também por tristeza pelas perdas do passado ou pelos nossos próprios fracassos que nos levaram ao "exílio". O choro dos anciãos era compreensível, mas Deus enviaria o profeta Ageu mais tarde para encorajá-los: "A glória desta última casa será maior do que a da primeira" (Ageu 2:9). Não devemos deixar que a nostalgia do passado roube a nossa alegria pelo que Deus está construindo no presente. Ele é bom, e a Sua misericórdia dura para sempre, mesmo quando recomeçamos do zero.'
  },
  {
    id: 'ezr_4_1_5',
    bookId: 'EZR',
    chapter: 4,
    startVerse: 1,
    endVerse: 5,
    title: 'A Oposição à Reconstrução',
    theme: 'O Engano do Inimigo, a Recusa de Alianças Mistas e a Perseverança',
    introduction: 'Sempre que a obra de Deus avança, a oposição se levanta. Em Esdras 4, os inimigos de Judá e Benjamim (os samaritanos, povos mistos trazidos pelos assírios) percebem que o Templo está sendo reconstruído. A estratégia deles não é inicialmente um ataque militar, mas a infiltração. Eles se aproximam de Zorobabel com uma oferta enganosa de ajuda: "Deixai-nos edificar convosco, porque, como vós, buscaremos a vosso Deus". A resposta firme e inflexível dos líderes judeus nos ensina uma lição vital sobre o perigo do ecumenismo falso e a necessidade de manter a pureza da obra de Deus, mesmo que isso custe a paz política.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Oferta Enganosa de Ajuda',
        description: 'Os "adversários" se aproximam com palavras suaves. Eles afirmam buscar o mesmo Deus e oferecer sacrifícios a Ele desde os dias do rei da Assíria. No entanto, a religião deles era sincrética (2 Reis 17:33 diz que eles temiam ao Senhor, mas também serviam aos seus próprios deuses). A oferta de ajuda era uma armadilha para corromper a obra por dentro.'
      },
      {
        verseRef: 'v. 3',
        title: 'A Recusa Firme e a Pureza da Obra',
        description: 'Zorobabel, Jesua e os chefes das famílias respondem categoricamente: "Não convém que vós e nós edifiquemos casa a nosso Deus; mas nós, nós mesmos, a edificaremos ao Senhor". Eles recusam a ajuda financeira e braçal porque sabem que uma aliança com idólatras comprometeria a santidade do Templo. Eles preferem a dificuldade com pureza à facilidade com corrupção.'
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Máscara Cai: Intimidação e Frustração',
        description: 'Ao terem a sua oferta rejeitada, os inimigos revelam a sua verdadeira face. Eles começam a "enfraquecer as mãos" do povo de Judá, a inquietá-los e a alugar conselheiros contra eles para frustrar o propósito da reconstrução. A oposição durou todos os dias de Ciro até o reinado de Dario. O falso amigo rapidamente se tornou um inimigo declarado.'
      }
    ],
    conclusion: 'A resposta de Zorobabel à oferta dos samaritanos é um princípio crucial para a liderança espiritual. O inimigo frequentemente ataca a Igreja não com perseguição aberta, mas com ofertas de "ajuda" e compromisso teológico. Misturar a verdade de Deus com as filosofias do mundo pode parecer politicamente correto e vantajoso a curto prazo, mas destrói a essência da fé. A obra de Deus deve ser feita pelo povo de Deus, segundo a Palavra de Deus. Quando nos recusamos a comprometer a verdade, enfrentaremos oposição, intimidação e calúnia (como os judeus enfrentaram). Mas é melhor ter o mundo contra nós e Deus a nosso favor, do que ter a ajuda do mundo e perder a presença de Deus.'
  },
  {
    id: 'ezr_6_13_22',
    bookId: 'EZR',
    chapter: 6,
    startVerse: 13,
    endVerse: 22,
    title: 'A Dedicação do Segundo Templo e a Páscoa',
    theme: 'A Conclusão da Obra, a Alegria da Dedicação e a Pureza',
    introduction: 'Após anos de atrasos, oposição e paralisações, a reconstrução do Templo é finalmente retomada através do encorajamento dos profetas Ageu e Zacarias, e com o apoio de um novo decreto do rei Dario. Em Esdras 6, a obra é concluída. O povo celebra a dedicação da Casa de Deus com grande alegria e sacrifícios. Logo em seguida, eles celebram a Páscoa e a Festa dos Pães Asmos. O texto destaca que a verdadeira alegria espiritual é o resultado da obediência à Palavra de Deus, da separação da imundícia do mundo e da celebração da redenção divina.',
    points: [
      {
        verseRef: 'v. 13-15',
        title: 'A Conclusão pela Palavra e Profecia',
        description: 'O Templo é terminado no sexto ano do rei Dario. O sucesso da obra é atribuído a duas forças: o mandado do Deus de Israel (através das profecias de Ageu e Zacarias) e o decreto dos reis persas. A Palavra de Deus foi o motor que impulsionou o povo a terminar o que haviam começado.'
      },
      {
        verseRef: 'v. 16-18',
        title: 'A Dedicação com Alegria e Sacrifício',
        description: 'Os filhos de Israel, os sacerdotes e os levitas celebram a dedicação "com alegria". Eles oferecem centenas de animais em sacrifício e, significativamente, doze bodes como oferta pelo pecado por todo o Israel (representando as 12 tribos, mostrando a unidade espiritual da nação). Eles organizam os sacerdotes "segundo o que está escrito no livro de Moisés".'
      },
      {
        verseRef: 'v. 19-22',
        title: 'A Páscoa e a Separação do Mundo',
        description: 'No primeiro mês, eles celebram a Páscoa. O texto enfatiza a pureza: os sacerdotes e levitas se purificaram. Quem comeu a Páscoa foram os exilados que retornaram e "todo aquele que, apartando-se da imundícia dos gentios da terra, se chegou a eles para buscar ao Senhor". A alegria da festa (que durou sete dias) veio porque "o Senhor os tinha alegrado".'
      }
    ],
    conclusion: 'A dedicação do segundo Templo é uma celebração da fidelidade de Deus e da perseverança do Seu povo. A obra que começou com choro (Esdras 3) termina com grande alegria. A celebração da Páscoa logo após a dedicação é profundamente simbólica: o Templo era o lugar de encontro, mas a Páscoa lembrava o sangue do cordeiro que os salvou. Hoje, a nossa alegria como Igreja não vem de edifícios concluídos, mas do fato de que Cristo, a nossa Páscoa, foi sacrificado por nós (1 Coríntios 5:7). A verdadeira alegria espiritual sempre exige separação da "imundícia" do mundo e um coração totalmente voltado para buscar ao Senhor.'
  },
  {
    id: 'ezr_8_21_23',
    bookId: 'EZR',
    chapter: 8,
    startVerse: 21,
    endVerse: 23,
    title: 'O Jejum no Rio Aava',
    theme: 'A Dependência de Deus, a Vergonha de Confiar na Carne e a Proteção Divina',
    introduction: 'Quase 80 anos após o primeiro grupo retornar com Zorobabel, um segundo grupo de exilados se prepara para voltar a Jerusalém sob a liderança de Esdras, o escriba. Eles estão prestes a fazer uma viagem perigosa de quatro meses através do deserto, carregando fortunas em ouro e prata para o Templo. Em Esdras 8:21-23, Esdras enfrenta um dilema: pedir uma escolta militar ao rei da Pérsia ou confiar exclusivamente na proteção de Deus. Tendo testemunhado ao rei sobre o poder de Deus, Esdras sente vergonha de pedir soldados. Em vez disso, ele convoca um jejum. O episódio é uma aula magistral sobre a fé que se recusa a depender dos braços de carne.',
    points: [
      {
        verseRef: 'v. 21',
        title: 'A Proclamação do Jejum e a Humilhação',
        description: 'Junto ao rio Aava, Esdras apregoa um jejum para que o povo se humilhe perante Deus. O objetivo é pedir "caminho direito para nós, e para nossos filhos, e para toda a nossa fazenda". Esdras reconhece que a jornada é perigosa e que a sabedoria humana não é suficiente para garantir a chegada segura.'
      },
      {
        verseRef: 'v. 22',
        title: 'A Vergonha Santa e o Testemunho',
        description: 'Esdras revela o motivo do jejum: "Tive vergonha de pedir ao rei exército e cavaleiros para nos defenderem do inimigo no caminho". Por quê? Porque ele havia dito ao rei: "A mão do nosso Deus é sobre todos os que o buscam, para o bem deles". Esdras não queria que o seu testemunho verbal sobre o poder de Deus fosse contradito por uma atitude de medo e dependência do Estado.'
      },
      {
        verseRef: 'v. 23',
        title: 'A Oração Respondida',
        description: 'O povo jejua e pede a Deus por proteção. O versículo termina com uma declaração simples e poderosa: "e moveu-se pelas nossas orações" (ou "Ele nos atendeu"). A viagem foi um sucesso, e eles chegaram a Jerusalém em segurança, provando que a mão de Deus é mais forte do que qualquer exército persa.'
      }
    ],
    conclusion: 'A atitude de Esdras no rio Aava nos confronta profundamente. Quantas vezes nós proclamamos que Deus é Todo-Poderoso e o nosso provedor, mas na primeira crise, corremos para pedir "exército e cavaleiros" ao mundo? Esdras teve uma "vergonha santa" de buscar segurança humana depois de ter testemunhado sobre a suficiência de Deus. O jejum foi a demonstração prática da sua dependência. Quando enfrentamos jornadas perigosas, decisões difíceis ou carregamos responsabilidades pesadas, a nossa primeira estratégia não deve ser o planejamento carnal, mas a humilhação diante de Deus em oração e jejum. Aquele que busca ao Senhor de todo o coração sempre encontrará a Sua mão protetora.'
  },
  {
    id: 'ezr_9_1_15',
    bookId: 'EZR',
    chapter: 9,
    startVerse: 1,
    endVerse: 15,
    title: 'A Oração de Confissão de Esdras',
    theme: 'O Choque com o Pecado, a Identificação com a Culpa e a Graça de Deus',
    introduction: 'Quando Esdras chega a Jerusalém, ele descobre uma realidade devastadora: o povo, os sacerdotes e os levitas haviam se casado com mulheres das nações pagãs vizinhas, misturando a "linhagem santa" com a idolatria. Esta foi a mesma prática que levou Salomão à ruína e a nação ao exílio. Em Esdras 9, a reação do escriba não é de raiva farisaica, mas de luto profundo. Ele rasga as suas vestes, arranca os cabelos e senta-se atônito. Na hora do sacrifício da tarde, ele cai de joelhos e profere uma das orações de confissão mais comoventes das Escrituras, identificando-se com o pecado do povo e apelando para a graça de Deus.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Relatório do Pecado e o Luto Profundo',
        description: 'Os príncipes relatam a Esdras que o povo não se separou das abominações dos povos da terra. O choque de Esdras é físico e emocional: ele rasga as vestes, arranca os cabelos e senta-se atônito até a tarde. Aqueles que "tremiam das palavras do Deus de Israel" se reúnem ao redor dele. O verdadeiro crente não trata o pecado com leviandade, mas com temor.'
      },
      {
        verseRef: 'v. 5-9',
        title: 'A Identificação com a Culpa e a Memória da Graça',
        description: 'Esdras se ajoelha e estende as mãos a Deus. Ele não diz "eles pecaram", mas "as nossas iniquidades se multiplicaram... a nossa culpa tem crescido". Ele se identifica com o pecado da nação. Ele lembra que Deus os puniu com o exílio, mas recentemente lhes deu um "pequeno avivamento" e um "prego no seu santo lugar" (uma posição segura) por pura graça.'
      },
      {
        verseRef: 'v. 10-15',
        title: 'A Confissão de Desobediência e a Justiça de Deus',
        description: 'Esdras reconhece que eles abandonaram os mandamentos de Deus sobre a separação das nações pagãs. Ele admite que Deus os castigou "menos do que merecem as nossas iniquidades". A oração termina sem pedir nada, apenas reconhecendo a justiça de Deus: "Ó Senhor... justo és... eis-nos aqui diante de ti na nossa culpa".'
      }
    ],
    conclusion: 'A oração de Esdras é um modelo de intercessão e confissão. Hoje, é comum vermos líderes apontando o dedo para os pecados da sociedade ou da igreja com arrogância. Esdras, sendo um homem justo, incluiu-se na culpa do seu povo. Ele sentiu a dor do pecado porque conhecia a santidade de Deus e a história do juízo (o exílio). A verdadeira confissão não tenta minimizar o erro ou dar desculpas; ela concorda com o veredito de Deus ("justo és") e lança-se inteiramente sobre a Sua misericórdia. O avivamento que se seguiu no capítulo 10 (onde o povo chorou e abandonou o pecado) foi o resultado direto das lágrimas e da intercessão de um único homem quebrantado.'
  },
  {
    id: 'neh_4_1_14',
    bookId: 'NEH',
    chapter: 4,
    startVerse: 1,
    endVerse: 14,
    title: 'A Oposição e a Defesa dos Muros',
    theme: 'Zombaria, Oração, Vigilância e a Liderança Corajosa',
    introduction: 'Neemias chegou a Jerusalém com a missão de reconstruir os muros da cidade, que estavam em ruínas há mais de um século. Quando o trabalho começa e os muros começam a se erguer, a oposição externa se intensifica. Em Neemias 4, Sambalate e Tobias usam a arma da zombaria e da intimidação psicológica para paralisar a obra. A resposta de Neemias é uma aula de liderança espiritual e resiliência: ele não debate com os críticos, mas ora a Deus; ele não ignora a ameaça, mas arma o povo. A combinação de oração fervorosa e vigilância prática ("a espada e a colher de pedreiro") garantiu o avanço da obra.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Zombaria do Inimigo e a Arma da Oração',
        description: 'Sambalate se indigna e zomba dos judeus: "Que fazem estes fracos judeus?". Tobias acrescenta: "Ainda que edifiquem, vindo uma raposa, derrubará o seu muro de pedra". Neemias não responde a eles; ele fala com Deus: "Ouve, ó nosso Deus, que somos desprezados". O resultado? O povo teve "ânimo para trabalhar", e o muro chegou à metade da sua altura.'
      },
      {
        verseRef: 'v. 7-9',
        title: 'A Ameaça de Ataque e a Vigilância Prática',
        description: 'Vendo que a zombaria não funcionou, os inimigos conspiram para atacar Jerusalém com violência. A resposta de Neemias une a fé à ação: "Porém nós oramos ao nosso Deus e pusemos uma guarda contra eles, de dia e de noite". A oração não substitui a responsabilidade humana; ela a direciona.'
      },
      {
        verseRef: 'v. 10-14',
        title: 'O Desânimo Interno e a Exortação do Líder',
        description: 'O perigo maior vem de dentro: o povo de Judá começa a reclamar do cansaço e do excesso de escombros ("já desfaleceram as forças"). Neemias reorganiza o povo por famílias, armados com espadas, lanças e arcos. Ele se levanta e exorta: "Não os temais; lembrai-vos do Senhor, grande e terrível, e pelejai pelos vossos irmãos, vossos filhos... e vossas casas".'
      }
    ],
    conclusion: 'O capítulo 4 de Neemias revela a anatomia da oposição espiritual. O inimigo sempre tentará nos parar com zombaria (dizendo que o nosso trabalho é inútil) ou com intimidação (ameaçando o nosso bem-estar). A estratégia de Neemias é o equilíbrio perfeito da vida cristã: "Oramos ao nosso Deus e pusemos uma guarda". Devemos confiar em Deus como se tudo dependesse dEle, e trabalhar/vigiar como se tudo dependesse de nós. Quando o cansaço e os "escombros" da vida tentarem nos paralisar, precisamos ouvir o grito de Neemias: "Lembrai-vos do Senhor, grande e terrível". A lembrança da grandeza de Deus é o antídoto definitivo contra o medo do inimigo.'
  },
  {
    id: 'neh_6_1_16',
    bookId: 'NEH',
    chapter: 6,
    startVerse: 1,
    endVerse: 16,
    title: 'A Conspiração contra Neemias',
    theme: 'Foco na Missão, Discernimento Espiritual e a Recusa em Parar',
    introduction: 'Os muros de Jerusalém estão quase concluídos; faltam apenas as portas. Percebendo que não podem parar a obra pela força, os inimigos de Neemias (Sambalate, Tobias e Gesém) mudam de tática. Em Neemias 6, eles tentam destruir o líder. Eles usam convites para reuniões falsas, cartas abertas com calúnias e até mesmo falsos profetas para tentar intimidar Neemias e arruinar a sua reputação. A firmeza de Neemias diante dessas distrações e ataques pessoais é um exemplo brilhante de foco no propósito e discernimento espiritual. O muro é terminado em 52 dias, para a glória de Deus e terror dos inimigos.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Distração e o Foco na Grande Obra',
        description: 'Os inimigos convidam Neemias para um encontro na campina de Ono, com a intenção de lhe fazer mal. Neemias recusa o convite quatro vezes com uma resposta clássica: "Faço uma grande obra, de modo que não poderei descer; por que cessaria esta obra, enquanto eu a deixasse, e fosse ter convosco?". Ele não permite que o urgente (ou o falso urgente) o distraia do importante.'
      },
      {
        verseRef: 'v. 5-9',
        title: 'A Calúnia e a Defesa da Verdade',
        description: 'Sambalate envia uma carta aberta (para que todos leiam) acusando Neemias de rebelião contra o rei da Pérsia e de querer se fazer rei. Neemias não entra em pânico nem tenta se justificar longamente. Ele responde com a verdade: "De tudo o que dizes coisa nenhuma sucedeu; mas tu, do teu coração, o inventas". E ora: "Agora, pois, ó Deus, fortalece as minhas mãos".'
      },
      {
        verseRef: 'v. 10-16',
        title: 'O Falso Profeta e a Conclusão do Muro',
        description: 'Eles subornam Semaías, um falso profeta, para dizer a Neemias que se esconda no Templo para salvar a vida. Neemias percebe o engano: um homem leigo não podia entrar no santuário (pecado de Uzias). Ele responde: "Um homem como eu fugiria?". Aos 52 dias, o muro é terminado. Os inimigos reconhecem que "o nosso Deus fizera esta obra".'
      }
    ],
    conclusion: 'A reta final de qualquer obra de Deus é frequentemente a mais atacada. Quando o inimigo não consegue destruir o projeto, ele tenta destruir o líder através de distrações, calúnias e falsos conselhos espirituais. A resposta de Neemias ("Faço uma grande obra... não poderei descer") deve ser o lema de todo crente. Não podemos descer do nosso chamado para debater com críticos na "campina de Ono". Além disso, o discernimento de Neemias o salvou de pecar contra Deus para salvar a própria pele. Quando mantemos o foco, a integridade e a oração, a obra é concluída, e até os nossos inimigos são forçados a reconhecer que a mão de Deus está sobre nós.'
  },
  {
    id: 'neh_8_1_12',
    bookId: 'NEH',
    chapter: 8,
    startVerse: 1,
    endVerse: 12,
    title: 'A Leitura da Lei e a Alegria do Senhor',
    theme: 'A Fome pela Palavra, o Choro do Arrependimento e a Alegria como Força',
    introduction: 'Os muros de Jerusalém estão reconstruídos e a cidade está segura. Mas Neemias sabia que muros de pedra não podem proteger um povo cujo coração está longe de Deus. Em Neemias 8, ocorre um dos maiores avivamentos bíblicos. O povo se reúne espontaneamente na praça e pede a Esdras, o escriba, que traga o Livro da Lei de Moisés. A leitura e a explicação da Palavra de Deus produzem um impacto profundo: primeiro, um choro coletivo de arrependimento; depois, uma celebração de alegria. O texto nos ensina que o verdadeiro avivamento é sempre centrado nas Escrituras e culmina na alegria do Senhor.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Fome pela Palavra e a Reverência',
        description: 'O povo se ajunta "como um só homem" e pede para ouvir a Lei. Esdras lê desde a alva até o meio-dia, e "os ouvidos de todo o povo estavam atentos". Quando Esdras abre o livro, todo o povo se levanta em reverência à Palavra de Deus. A iniciativa partiu do povo, demonstrando uma fome espiritual genuína.'
      },
      {
        verseRef: 'v. 5-8',
        title: 'A Adoração e a Exposição Clara',
        description: 'Esdras louva ao Senhor, e o povo responde "Amém, Amém!", levantando as mãos e prostrando-se com o rosto em terra. Os levitas ajudam a explicar a Lei: "Leram no livro... declarando e explicando o sentido, faziam que, lendo, se entendesse". A pregação expositiva foi essencial para que a Palavra transformasse os corações.'
      },
      {
        verseRef: 'v. 9-12',
        title: 'Do Choro à Alegria do Senhor',
        description: 'Ao entenderem a Lei, o povo chora, percebendo o quão longe estavam da vontade de Deus. Mas Neemias e Esdras os consolam: "Este dia é consagrado ao Senhor... não vos entristeçais; porque a alegria do Senhor é a vossa força". Eles são instruídos a comer, beber e repartir com os necessitados. O choro do arrependimento deu lugar à alegria da graça compreendida.'
      }
    ],
    conclusion: 'O avivamento da Porta das Águas em Neemias 8 é o modelo perfeito de renovação espiritual. Ele não foi baseado em emoções fabricadas ou entretenimento, mas na leitura clara e na compreensão da Palavra de Deus. A Palavra sempre atua como um espelho, revelando o nosso pecado e produzindo o choro do arrependimento. No entanto, Deus não quer que permaneçamos no luto da culpa. A mensagem do Evangelho é que, através do arrependimento, encontramos perdão, e esse perdão gera uma alegria indescritível. "A alegria do Senhor é a vossa força". Um cristão alegre na graça de Deus é a maior força contra as adversidades do mundo e as tentações do inimigo.'
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
console.log(`Added ${addedCount} new pericopes (Batch 21 - Ezra/Nehemiah).`);
