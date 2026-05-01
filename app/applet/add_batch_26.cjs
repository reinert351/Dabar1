const fs = require('fs');

const newPericopes = [
  {
    id: 'isa_1_10_20',
    bookId: 'ISA',
    chapter: 1,
    startVerse: 10,
    endVerse: 20,
    title: 'O Culto Verdadeiro e o Convite ao Arrependimento',
    theme: 'Religiosidade Vazia, Justiça Social e a Purificação dos Pecados',
    introduction: 'O livro de Isaías começa com um tribunal divino. Deus chama os céus e a terra como testemunhas contra a rebelião de Judá. Em Isaías 1:10-20, o profeta ataca diretamente a hipocrisia religiosa do povo. Eles continuavam a frequentar o Templo, a oferecer sacrifícios e a celebrar as festas, mas as suas mãos estavam "cheias de sangue" devido à injustiça social. Deus declara que o culto sem caráter é uma abominação. No entanto, o texto não termina em condenação, mas com um dos convites mais belos da Bíblia à purificação e ao raciocínio com Deus.',
    points: [
      {
        verseRef: 'v. 10-15',
        title: 'A Rejeição da Religiosidade Vazia',
        description: 'Deus compara os líderes de Jerusalém a Sodoma e Gomorra. Ele diz estar farto da multidão de sacrifícios, do incenso e das festas solenes. Quando eles estendem as mãos para orar, Deus esconde os Seus olhos, porque a adoração deles está desconectada da obediência moral.'
      },
      {
        verseRef: 'v. 16-17',
        title: 'O Chamado à Justiça Prática',
        description: 'A verdadeira adoração exige arrependimento prático: "Lavai-vos, purificai-vos... cessai de fazer o mal, aprendei a fazer o bem". Deus define o "fazer o bem" em termos de justiça social: ajudar o oprimido, defender o órfão e pleitear a causa da viúva.'
      },
      {
        verseRef: 'v. 18-20',
        title: 'O Convite da Graça e a Escolha',
        description: 'Deus faz um convite surpreendente: "Vinde então, e argui-me (raciocinemos juntos)". Ele promete que, mesmo que os pecados sejam vermelhos como o carmesim, se tornarão brancos como a neve. A escolha é clara: obediência traz bênção ("comereis o bem da terra"), mas a rebelião traz destruição ("sereis devorados pela espada").'
      }
    ],
    conclusion: 'Isaías 1 destrói a ilusão de que podemos subornar Deus com rituais religiosos enquanto vivemos em pecado e ignoramos o sofrimento do próximo. Deus não quer a nossa "religião"; Ele quer o nosso coração e a nossa justiça. A boa notícia é que o nosso Deus é um Deus que convida ao diálogo. Ele não exige que nos purifiquemos sozinhos antes de nos aproximarmos; Ele nos chama para a mesa de negociação da graça, prometendo que o sangue de Cristo (o sacrifício perfeito) pode transformar o vermelho do nosso pecado na brancura da pureza absoluta.'
  },
  {
    id: 'isa_2_1_5',
    bookId: 'ISA',
    chapter: 2,
    startVerse: 1,
    endVerse: 5,
    title: 'O Monte do Senhor e a Paz Futura',
    theme: 'A Exaltação de Sião, o Ensino da Palavra e o Fim das Guerras',
    introduction: 'Num mundo dilacerado por guerras e conflitos, Isaías 2 oferece uma das visões mais gloriosas do futuro escatológico. O profeta vê um tempo em que o "monte da Casa do Senhor" será exaltado acima de todos os outros montes (símbolos de poder e religião humana). Em vez de as nações marcharem para a guerra, elas marcharão para Jerusalém para aprenderem os caminhos de Deus. O resultado dessa submissão global à Palavra de Deus será uma paz mundial sem precedentes, onde as armas de destruição serão transformadas em ferramentas de agricultura.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Exaltação do Monte do Senhor',
        description: 'Nos "últimos dias", o monte da Casa do Senhor será estabelecido no cume dos montes. Isso não fala de geologia, mas de supremacia espiritual. O verdadeiro culto a Deus atrairá "todas as nações", que afluirão para Ele como um rio que corre para cima (um milagre divino).'
      },
      {
        verseRef: 'v. 3',
        title: 'A Fome pela Palavra de Deus',
        description: 'O motivo da peregrinação das nações não é o turismo, mas a fome espiritual: "Vinde, e subamos ao monte do Senhor... para que nos ensine os seus caminhos, e andemos pelas suas veredas". A lei e a palavra do Senhor sairão de Sião para governar o mundo.'
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Transformação das Armas em Arados',
        description: 'Quando Deus julgar e repreender as nações, a guerra perderá o seu propósito. Eles "forjarão das suas espadas relhas de arado, e das suas lanças podadeiras". A indústria da morte será convertida em indústria da vida. O profeta conclui chamando a casa de Jacó a viver nessa luz hoje.'
      }
    ],
    conclusion: 'A visão de Isaías 2 é a grande esperança da Igreja e do mundo. A verdadeira paz mundial nunca será alcançada por tratados políticos ou pela força militar, mas apenas quando as nações se submeterem ao ensino e ao governo de Jesus Cristo (o Príncipe da Paz). Enquanto aguardamos o cumprimento final desta profecia no retorno de Cristo, somos chamados a viver o versículo 5: "Vinde, ó casa de Jacó, e andemos na luz do Senhor". A Igreja deve ser hoje um vislumbre desse futuro, um lugar onde as "espadas" da inimizade são transformadas em ferramentas de graça e reconciliação.'
  },
  {
    id: 'isa_7_10_14',
    bookId: 'ISA',
    chapter: 7,
    startVerse: 10,
    endVerse: 14,
    title: 'O Sinal de Emanuel',
    theme: 'O Medo Humano, a Promessa Divina e a Encarnação',
    introduction: 'O contexto de Isaías 7 é uma crise política e militar. O rei Acaz, de Judá, está aterrorizado porque uma coalizão de exércitos (Síria e Israel) ameaça invadir Jerusalém. O coração do rei e do povo se agita "como as árvores do bosque com o vento". Deus envia Isaías para acalmar Acaz e oferece-lhe a oportunidade de pedir um sinal milagroso para confirmar a proteção divina. Acaz, com falsa piedade, recusa-se a pedir. Em resposta, o próprio Deus dá um sinal que transcende a crise imediata e aponta para o maior milagre da história: a encarnação do Messias.',
    points: [
      {
        verseRef: 'v. 10-12',
        title: 'A Oferta do Sinal e a Falsa Piedade',
        description: 'O Senhor diz a Acaz para pedir um sinal, "seja nas profundezas, ou em cima nas alturas". Deus está disposto a mover os céus e a terra para fortalecer a fé do rei. Acaz recusa, citando Deuteronômio ("não tentarei ao Senhor"), mas a sua recusa era, na verdade, incredulidade e confiança numa aliança secreta com a Assíria.'
      },
      {
        verseRef: 'v. 13',
        title: 'A Repreensão Profética',
        description: 'Isaías repreende a casa de Davi. Não basta cansar os homens com a sua teimosia política; Acaz agora está cansando a paciência do próprio Deus ao rejeitar a Sua oferta de graça e confirmação.'
      },
      {
        verseRef: 'v. 14',
        title: 'A Promessa da Virgem e do Emanuel',
        description: 'Como Acaz não pediu, o próprio Senhor dá o sinal: "Eis que a virgem conceberá, e dará à luz um filho, e chamará o seu nome Emanuel". O sinal é o nascimento de uma criança que trará a presença de Deus ("Deus conosco") para o meio do Seu povo.'
      }
    ],
    conclusion: 'A profecia de Isaías 7:14 teve um cumprimento parcial nos dias de Acaz (uma criança cujo nascimento marcou o tempo da libertação de Judá), mas o seu cumprimento pleno e glorioso ocorreu séculos depois, no ventre de Maria (Mateus 1:23). Quando os nossos corações tremem diante das ameaças da vida, a nossa tendência é confiar nas nossas próprias "alianças" e rejeitar a ajuda de Deus. Mas a resposta de Deus ao nosso medo é sempre a mesma: Emanuel. A garantia da nossa salvação não é a ausência de inimigos, mas a presença de Deus conosco em Jesus Cristo. Ele é o sinal definitivo de que Deus não nos abandonou.'
  },
  {
    id: 'isa_9_1_7',
    bookId: 'ISA',
    chapter: 9,
    startVerse: 1,
    endVerse: 7,
    title: 'O Menino nos Nasceu',
    theme: 'A Luz nas Trevas, a Alegria da Salvação e os Títulos do Messias',
    introduction: 'Isaías 9 é uma das profecias messiânicas mais triunfantes do Antigo Testamento. O capítulo anterior termina num tom de desespero, descrevendo um povo que vagueia em trevas e angústia. Mas o capítulo 9 irrompe com uma promessa de luz radiante. A região da Galileia, que havia sido devastada e humilhada pelos assírios, seria a primeira a ver a grande luz. A libertação não viria através de um grande exército ou de um político poderoso, mas através do nascimento de uma criança. Os títulos dados a este Menino revelam a Sua natureza divina e o Seu governo eterno.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'Das Trevas para a Grande Luz',
        description: 'O povo que andava em trevas (a Galileia dos gentios) viu uma grande luz. A tristeza é substituída por uma alegria transbordante, comparada à alegria da colheita ou à divisão de despojos após uma vitória militar.'
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Quebra do Jugo e o Fim da Guerra',
        description: 'O motivo da alegria é a libertação: Deus quebra o jugo da opressão e a vara do exator, como no "dia dos midianitas" (a vitória de Gideão). Todo o equipamento militar (calçados de guerra e vestes manchadas de sangue) será queimado, pois a guerra acabará.'
      },
      {
        verseRef: 'v. 6-7',
        title: 'O Menino e os Seus Títulos Divinos',
        description: 'A vitória vem através de um nascimento: "Porque um menino nos nasceu, um filho se nos deu". O governo estará sobre os Seus ombros. Os Seus nomes revelam a Sua divindade: Maravilhoso Conselheiro, Deus Forte, Pai da Eternidade, Príncipe da Paz. O Seu reino de justiça não terá fim.'
      }
    ],
    conclusion: 'A profecia de Isaías 9 cumpre-se perfeitamente em Jesus Cristo, que iniciou o Seu ministério exatamente na região da Galileia (Mateus 4:13-16). A genialidade do plano de Deus é que Ele derrotou os poderes das trevas não com a força bruta de um exército, mas com a vulnerabilidade de um bebê na manjedoura. Os títulos de Cristo garantem que Ele tem a sabedoria para nos guiar (Conselheiro), o poder para nos proteger (Deus Forte), o amor para nos cuidar (Pai da Eternidade) e a capacidade de nos reconciliar (Príncipe da Paz). O Seu governo é a única esperança para um mundo em guerra.'
  },
  {
    id: 'isa_11_1_10',
    bookId: 'ISA',
    chapter: 11,
    startVerse: 1,
    endVerse: 10,
    title: 'O Renovo de Jessé e o Reino de Paz',
    theme: 'O Espírito do Senhor, a Justiça Perfeita e a Restauração da Criação',
    introduction: 'No capítulo 10, Isaías descreve o império assírio como uma grande floresta que Deus cortaria com um machado. A dinastia de Davi também parecia ter sido cortada, restando apenas um "tronco" morto (Jessé, o pai de Davi). No entanto, em Isaías 11, o profeta anuncia que daquele toco aparentemente morto brotaria um "Renovo" (um broto verde). Este Renovo é o Messias. O texto descreve o Seu caráter, o Seu empoderamento pelo Espírito Santo e a transformação cósmica que o Seu governo trará: uma paz tão profunda que até os animais selvagens viverão em harmonia.',
    points: [
      {
        verseRef: 'v. 1-3a',
        title: 'O Broto e a Plenitude do Espírito',
        description: 'Do tronco cortado de Jessé sai um rebento. O Espírito do Senhor repousará sobre Ele em plenitude: espírito de sabedoria e entendimento, conselho e fortaleza, conhecimento e temor do Senhor. O Messias será perfeitamente capacitado para governar.'
      },
      {
        verseRef: 'v. 3b-5',
        title: 'O Juiz Justo e Incorruptível',
        description: 'Ele não julgará pelas aparências (o ver dos olhos) nem por boatos (o ouvir dos ouvidos). Ele julgará os pobres com justiça e ferirá a terra com a "vara da sua boca". A justiça e a fidelidade serão o Seu cinto, a base do Seu caráter.'
      },
      {
        verseRef: 'v. 6-10',
        title: 'A Paz Cósmica e a Raiz Atraente',
        description: 'O governo do Messias reverte a maldição do Éden. O lobo habitará com o cordeiro, o leopardo com o cabrito, e uma criança pequena os guiará. Não haverá dano no santo monte, porque a terra se encherá do conhecimento do Senhor. As nações buscarão a "Raiz de Jessé".'
      }
    ],
    conclusion: 'Isaías 11 é uma das descrições mais belas do caráter de Jesus e do futuro que Ele trará. Quando olhamos para a história ou para a nossa própria vida, muitas vezes vemos apenas "troncos cortados" — sonhos mortos, linhagens falidas, situações sem esperança. Mas o nosso Deus é o Deus que faz brotar vida da madeira morta. Jesus, o Renovo, veio cheio do Espírito para trazer justiça aos oprimidos. A promessa final do lobo com o cordeiro nos lembra que a salvação de Cristo não é apenas para a alma humana, mas para a restauração de toda a criação. Onde Ele reina, a predação e o medo dão lugar à paz perfeita.'
  },
  {
    id: 'isa_25_6_9',
    bookId: 'ISA',
    chapter: 25,
    startVerse: 6,
    endVerse: 9,
    title: 'O Banquete do Senhor e a Destruição da Morte',
    theme: 'A Festa Escatológica, o Fim do Luto e a Salvação Esperada',
    introduction: 'No meio de uma seção conhecida como o "Pequeno Apocalipse de Isaías" (capítulos 24-27), que descreve o juízo global sobre a terra, Isaías 25 irrompe com um hino de louvor e uma visão deslumbrante do fim dos tempos. O profeta vê o Senhor dos Exércitos preparando um banquete suntuoso para todos os povos. Mas o prato principal desta festa não é apenas comida; é a destruição do maior inimigo da humanidade: a morte. Esta passagem é uma das promessas mais claras do Antigo Testamento sobre a ressurreição e a vitória final de Deus sobre o luto e a dor.',
    points: [
      {
        verseRef: 'v. 6',
        title: 'O Banquete para Todos os Povos',
        description: 'O Senhor dos Exércitos dará "neste monte" (Sião) um banquete de coisas gordurosas e vinhos purificados. É uma festa de abundância e alegria, e, surpreendentemente para o contexto judaico, é oferecida a "todos os povos", apontando para a graça global do Evangelho.'
      },
      {
        verseRef: 'v. 7-8',
        title: 'A Morte da Morte e o Fim das Lágrimas',
        description: 'Deus destruirá a "cobertura" (o véu de luto) que envolve todas as nações. A promessa central: "Aniquilará a morte para sempre". O Senhor enxugará as lágrimas de todos os rostos e tirará o opróbrio do Seu povo. A morte, que engole a todos, será finalmente engolida por Deus.'
      },
      {
        verseRef: 'v. 9',
        title: 'O Grito de Vitória e a Espera Recompensada',
        description: 'Naquele dia, o povo dirá: "Eis que este é o nosso Deus, a quem aguardávamos, e ele nos salvará". A paciência no sofrimento será recompensada com uma alegria indescritível: "Na sua salvação exultaremos e nos alegraremos".'
      }
    ],
    conclusion: 'A visão de Isaías 25 é o rascunho do que o apóstolo João veria em Apocalipse 21. A morte é o grande "véu" que lança uma sombra sobre todas as conquistas humanas. Mas o Evangelho declara que, na cruz e na tumba vazia, Jesus Cristo já desferiu o golpe fatal contra a morte. O banquete já está sendo preparado. Quando enfrentamos o luto, a dor e o opróbrio neste mundo, a nossa esperança não é um otimismo vago, mas a promessa de que o próprio Deus enxugará as nossas lágrimas. Aquele que aguarda no Senhor nunca será decepcionado; o fim da história não é um funeral, mas uma festa de casamento.'
  },
  {
    id: 'isa_26_1_4',
    bookId: 'ISA',
    chapter: 26,
    startVerse: 1,
    endVerse: 4,
    title: 'A Paz Perfeita',
    theme: 'A Cidade Forte, a Confiança e a Rocha Eterna',
    introduction: 'Isaías 26 é um cântico de vitória que será entoado na terra de Judá no dia da salvação. O profeta contrasta a cidade arrogante do mundo (que será derrubada) com a "cidade forte" de Deus, cujos muros são a própria salvação divina. O coração deste cântico é o versículo 3, que oferece uma das promessas mais amadas e reconfortantes de toda a Bíblia sobre a paz mental e emocional. Num mundo marcado pela ansiedade e pela instabilidade, Isaías revela o segredo para manter a mente em "paz perfeita" (no hebraico, shalom shalom).',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Cidade Forte e as Portas Abertas',
        description: 'O cântico declara: "Temos uma cidade forte, a que Deus pôs a salvação por muros e antemuros". A segurança não vem de tijolos, mas de Deus. A ordem é dada: "Abri as portas, para que entre nela a nação justa, que guarda a verdade". A entrada é baseada na justiça e na fidelidade.'
      },
      {
        verseRef: 'v. 3',
        title: 'O Segredo da Paz Perfeita',
        description: '"Tu conservarás em paz (shalom shalom) aquele cuja mente está firme em ti; porque ele confia em ti". A paz não é a ausência de problemas, mas o resultado de uma mente "firme" (apoiada, focada) em Deus. A confiança é o âncora da alma.'
      },
      {
        verseRef: 'v. 4',
        title: 'O Chamado à Confiança Eterna',
        description: '"Confiai no Senhor perpetuamente; porque o Senhor Deus é uma rocha eterna". A razão pela qual podemos manter a mente firme em Deus é porque Ele não muda. Ele é a Rocha dos Séculos, inabalável diante das tempestades do tempo.'
      }
    ],
    conclusion: 'A ansiedade é a praga da nossa geração. As nossas mentes estão constantemente agitadas, focadas nas notícias, nos medos do futuro e nas incertezas da vida. Isaías 26:3 nos dá a fórmula divina para a saúde mental e espiritual: o que domina a nossa atenção determina o nosso estado de espírito. Se a nossa mente estiver "firme" nas circunstâncias, teremos caos; se estiver "firme" no Senhor, teremos paz perfeita. A paz de Deus não é um sentimento passageiro, mas uma fortaleza. Quando confiamos na Rocha Eterna, descobrimos que os muros da salvação de Deus são altos demais para que a ansiedade os possa escalar.'
  },
  {
    id: 'isa_49_14_16',
    bookId: 'ISA',
    chapter: 49,
    startVerse: 14,
    endVerse: 16,
    title: 'O Amor Materno de Deus',
    theme: 'O Sentimento de Abandono, a Memória Divina e as Marcas nas Mãos',
    introduction: 'Durante o exílio na Babilônia, o povo de Israel sentiu-se completamente esquecido por Deus. A cidade de Jerusalém estava em ruínas, e a esperança parecia ter morrido. Em Isaías 49:14, Sião verbaliza a dor de muitos crentes em tempos de crise: "O Senhor me desamparou, o meu Senhor se esqueceu de mim". A resposta de Deus a esta queixa é uma das declarações de amor mais ternas, profundas e comoventes de toda a Escritura. Deus usa a imagem do amor materno e a metáfora de uma tatuagem nas Suas próprias mãos para provar que o Seu povo nunca sai da Sua memória.',
    points: [
      {
        verseRef: 'v. 14',
        title: 'A Queixa do Abandono',
        description: 'Sião diz: "O Senhor me desamparou". O sofrimento prolongado frequentemente nos leva a interpretar o silêncio de Deus como esquecimento. A dor cega-nos para a fidelidade passada de Deus.'
      },
      {
        verseRef: 'v. 15',
        title: 'O Amor Superior ao de uma Mãe',
        description: 'Deus responde com uma pergunta retórica: "Pode uma mulher esquecer-se tanto de seu filho que cria... ?". Embora seja raro, o amor humano pode falhar ("ainda que esta se esquecesse"). Mas Deus garante: "Eu, todavia, não me esquecerei de ti". O amor de Deus é mais forte e mais instintivo do que o amor materno.'
      },
      {
        verseRef: 'v. 16',
        title: 'Gravados nas Palmas das Mãos',
        description: '"Eis que nas palmas das minhas mãos eu te gravei; os teus muros estão continuamente diante de mim". Deus não apenas anotou o nosso nome; Ele o esculpiu/gravou nas Suas mãos. É uma marca permanente. Os "muros" em ruínas de Sião estão sempre diante dos olhos de Deus, prontos para serem reconstruídos.'
      }
    ],
    conclusion: 'Quando a vida desmorona, a mentira mais perigosa que o inimigo sussurra é que Deus se esqueceu de nós. Isaías 49 destrói essa mentira. O amor de Deus por nós não é um contrato frio, mas um afeto visceral, superior ao vínculo entre uma mãe e o seu bebê. Para os cristãos, o versículo 16 ganha um significado ainda mais profundo e literal na cruz: Jesus Cristo tem, nas palmas das Suas mãos, as marcas dos cravos. Essas cicatrizes eternas são a prova visível e inegável de que Ele nos amou até o fim e de que nunca, em toda a eternidade, Ele se esquecerá de nós.'
  },
  {
    id: 'isa_54_1_10',
    bookId: 'ISA',
    chapter: 54,
    startVerse: 1,
    endVerse: 10,
    title: 'A Aliança de Paz e a Restauração de Sião',
    theme: 'Expansão, o Fim da Vergonha e o Amor Inabalável',
    introduction: 'O capítulo 54 de Isaías vem imediatamente após o capítulo 53, que descreve o sacrifício do Servo Sofredor (Cristo). O resultado da obra da cruz é uma explosão de graça, crescimento e restauração para o povo de Deus. Isaías 54 é um chamado à mulher estéril (Sião/a Igreja) para que cante de alegria, pois os seus filhos serão inumeráveis. Deus ordena que ela prepare espaço para o crescimento e promete que a vergonha do seu passado será esquecida. O texto culmina com uma garantia inabalável da aliança de paz de Deus, que é mais firme do que as próprias montanhas.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Cântico da Estéril e a Expansão da Tenda',
        description: 'A ordem é para cantar, mesmo antes de ver os filhos. Deus diz: "Alarga o espaço da tua tenda... alonga as tuas cordas, e firma bem as tuas estacas". É um chamado à fé e à preparação para o crescimento. O povo de Deus transbordará para a direita e para a esquerda, herdando as nações.'
      },
      {
        verseRef: 'v. 4-6',
        title: 'O Fim da Vergonha e o Marido Redentor',
        description: '"Não temas, porque não serás envergonhada". Deus promete que a vergonha da juventude e o opróbrio da viuvez serão esquecidos. A razão? "O teu Criador é o teu marido". Deus chama o Seu povo de volta como uma mulher abandonada, para envolvê-la em amor.'
      },
      {
        verseRef: 'v. 7-10',
        title: 'A Ira Breve e a Misericórdia Eterna',
        description: 'Deus admite que os abandonou "por um breve momento" (o exílio/disciplina), mas com "grandes misericórdias" os recolherá. Ele faz um juramento como nos dias de Noé: "As montanhas se desviarão e os outeiros tremerão; mas a minha benignidade não se desviará de ti, e a aliança da minha paz não mudará".'
      }
    ],
    conclusion: 'Isaías 54 é o capítulo da graça transbordante. Porque o Servo sofreu (Isaías 53), a "estéril" pode cantar. Muitas vezes, olhamos para as nossas vidas ou para a Igreja e vemos esterilidade, vergonha e fracasso. Mas Deus nos chama a "alargar a tenda" pela fé, preparando-nos para o que Ele vai fazer. A disciplina de Deus pode parecer dura, mas é apenas um "breve momento" comparada à eternidade da Sua misericórdia. As montanhas (as coisas mais estáveis deste mundo) podem desmoronar, mas a aliança de paz que temos com Deus, selada no sangue de Cristo, jamais será abalada.'
  },
  {
    id: 'isa_58_1_12',
    bookId: 'ISA',
    chapter: 58,
    startVerse: 1,
    endVerse: 12,
    title: 'O Verdadeiro Jejum',
    theme: 'Religiosidade vs. Justiça Social, a Luz nas Trevas e a Restauração',
    introduction: 'Em Isaías 58, Deus ordena ao profeta que levante a voz como uma trombeta para denunciar os pecados do Seu povo. O povo estava confuso e frustrado: eles jejuavam, afligiam as suas almas e buscavam a Deus diariamente, mas Deus não respondia. O Senhor então expõe a raiz do problema: o jejum deles era um ritual egoísta, acompanhado de exploração dos trabalhadores, contendas e violência. Deus redefine o que significa o "verdadeiro jejum": não é apenas deixar de comer, mas quebrar as correntes da injustiça, alimentar o faminto e acolher o desabrigado. A obediência prática destranca as maiores promessas de cura e restauração.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Falsa Piedade e o Jejum Rejeitado',
        description: 'O povo pergunta: "Por que jejuamos nós, e tu não atentas para isso?". Deus responde que, no dia do jejum, eles buscam os seus próprios interesses, oprimem os trabalhadores e debatem com violência. Um jejum que apenas curva a cabeça como um junco, mas não muda o coração, não é aceito no céu.'
      },
      {
        verseRef: 'v. 6-7',
        title: 'O Jejum que Deus Escolheu',
        description: 'O verdadeiro jejum é ação social e justiça: "Soltar as ligaduras da impiedade, desfazer as ataduras do jugo e que deixar livres os oprimidos". Envolve repartir o pão com o faminto, recolher os pobres desabrigados e cobrir o nu. A espiritualidade verdadeira sempre se manifesta no amor ao próximo.'
      },
      {
        verseRef: 'v. 8-12',
        title: 'As Promessas da Luz e da Restauração',
        description: 'Se o povo praticar a justiça, as promessas são extraordinárias: "Então romperá a tua luz como a alva, e a tua cura apressadamente brotará". Deus responderá ao clamor dizendo: "Eis-me aqui". Eles serão chamados de "reparadores de brechas" e "restauradores de veredas", transformando lugares desertos em mananciais de águas.'
      }
    ],
    conclusion: 'Isaías 58 é um dos textos mais contundentes da Bíblia sobre a inseparabilidade entre a fé e a justiça social. Jejuar, orar e ir à igreja são práticas vitais, mas se elas não nos tornam mais compassivos, justos e generosos com os oprimidos, são apenas teatro religioso. Deus não pode ser manipulado por rituais. Quando alinhamos o nosso coração com o coração de Deus — importando-nos com os famintos e quebrando os jugos da opressão — a nossa luz brilha nas trevas, as nossas orações são respondidas com um "Eis-me aqui" divino, e Deus nos usa para reconstruir as ruínas da nossa sociedade e das nossas famílias.'
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
console.log(`Added ${addedCount} new pericopes (Batch 26 - Isaiah).`);
