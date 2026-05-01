const fs = require('fs');

const expandedPericopes = [
  {
    id: 'jos_8_1_35',
    bookId: 'JOS',
    chapter: 8,
    startVerse: 1,
    endVerse: 35,
    title: 'A Vitória sobre Ai e a Renovação da Aliança',
    theme: 'A Restauração após o Pecado, a Estratégia Divina e a Centralidade da Palavra',
    introduction: 'A derrota em Ai (capítulo 7) havia paralisado Israel, mas a remoção do pecado de Acã abriu novamente as portas da graça. Em Josué 8, Deus não apenas perdoa a nação, mas a encoraja a voltar ao campo de batalha. A vitória sobre Ai não é alcançada por um milagre passivo (como os muros de Jericó caindo), mas por uma emboscada militar estrategicamente orquestrada pelo próprio Deus. Após a vitória, Josué interrompe a campanha militar para um ato de adoração monumental no Monte Ebal, demonstrando que a obediência à Palavra de Deus é mais importante do que a conquista de territórios.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'O Encorajamento Divino e a Nova Estratégia',
        description: 'Deus diz a Josué: "Não temas, e não te espantes". O perdão traz a restauração da confiança. Deus instrui Josué a levar "toda a gente de guerra" (corrigindo a presunção anterior de enviar apenas três mil homens). A estratégia é uma emboscada. Desta vez, Deus permite que eles tomem os despojos e o gado para si. A ironia trágica é que, se Acã tivesse esperado apenas alguns dias, ele poderia ter enriquecido licitamente com os despojos de Ai.'
      },
      {
        verseRef: 'v. 18-28',
        title: 'A Emboscada e a Lança Estendida',
        description: 'A estratégia funciona perfeitamente. O rei de Ai é atraído para fora da cidade, pensando que Israel está fugindo novamente. A emboscada toma a cidade e a incendeia. No clímax da batalha, Deus ordena a Josué: "Estende a lança que tens na tua mão, para Ai". Josué obedece e não recolhe a mão até que todos os inimigos sejam destruídos. A lança estendida de Josué ecoa as mãos levantadas de Moisés contra Amaleque (Êxodo 17), simbolizando a dependência contínua do poder de Deus para a vitória.'
      },
      {
        verseRef: 'v. 30-35',
        title: 'O Altar no Monte Ebal e a Leitura da Lei',
        description: 'No auge do sucesso militar, Josué faz uma pausa surpreendente. Ele viaja cerca de 50 km para o norte, até o Monte Ebal, cumprindo a ordem de Moisés (Deuteronômio 27). Ele constrói um altar de pedras brutas (não lavradas), oferece sacrifícios de paz e escreve uma cópia da lei nas pedras. Com metade do povo no monte Gerizim (bênção) e metade no Ebal (maldição), Josué lê "todas as palavras da lei" perante toda a congregação, incluindo mulheres, crianças e estrangeiros. A nação renova sua aliança com Deus.'
      }
    ],
    conclusion: 'A vitória sobre Ai nos ensina que o fracasso não precisa ser o fim da nossa história. Quando o pecado é tratado com arrependimento, Deus nos encoraja a nos levantarmos e enfrentarmos novamente os nossos "Ais". A pausa no Monte Ebal é uma das maiores lições de prioridade na Bíblia. No meio de uma guerra de conquista, a coisa mais urgente que Israel tinha a fazer era adorar a Deus e ouvir a Sua Palavra. O sucesso verdadeiro não é medido pelas batalhas que vencemos, mas pela nossa fidelidade inegociável à aliança do Senhor.'
  },
  {
    id: 'jos_9_1_27',
    bookId: 'JOS',
    chapter: 9,
    startVerse: 1,
    endVerse: 27,
    title: 'O Engano dos Gibeonitas',
    theme: 'A Astúcia Inimiga, a Falta de Oração e a Fidelidade ao Juramento',
    introduction: 'As vitórias de Israel em Jericó e Ai provocaram duas reações distintas entre os cananeus. Enquanto a maioria dos reis se uniu para a guerra, os habitantes de Gibeão escolheram a astúcia. Sabendo que Deus havia ordenado a destruição de todos os povos de Canaã, os gibeonitas se disfarçaram de embaixadores de uma terra muito distante para forjar um tratado de paz. Josué 9 é um estudo de caso clássico sobre o perigo de confiar nas aparências e tomar decisões baseadas no bom senso humano sem consultar a Deus. O texto também destaca a sacralidade de um juramento feito em nome do Senhor.',
    points: [
      {
        verseRef: 'v. 3-6',
        title: 'O Disfarce e a Estratégia da Decepção',
        description: 'Os gibeonitas elaboram um plano meticuloso. Eles usam sacos velhos, odres de vinho rotos, sapatos remendados e pão seco e bolorento. Eles chegam ao acampamento em Gilgal e dizem a Josué: "De uma terra mui distante viemos; fazei, pois, agora aliança conosco". Eles sabiam que a lei de Israel permitia fazer paz com cidades distantes, mas exigia a destruição das cidades de Canaã (Deuteronômio 20:10-15). A mentira deles foi construída sobre um conhecimento teológico preciso das leis de Israel.'
      },
      {
        verseRef: 'v. 14-15',
        title: 'O Erro Fatal: Não Consultar o Senhor',
        description: 'Os líderes de Israel examinam as evidências (o pão bolorento e as roupas velhas). O versículo 14 revela a raiz do fracasso: "Então os homens de Israel tomaram da provisão deles e não pediram conselho ao Senhor". Eles confiaram em seus próprios sentidos e no raciocínio lógico. Convencido pelas aparências, Josué faz paz com eles e os príncipes da congregação lhes prestam juramento. A falta de oração transformou a sabedoria humana em uma armadilha.'
      },
      {
        verseRef: 'v. 16-27',
        title: 'A Descoberta e a Honra do Juramento',
        description: 'Três dias depois, a verdade vem à tona: os gibeonitas eram vizinhos. A congregação murmura contra os líderes, mas os príncipes mantêm a palavra: "Nós lhes juramos pelo Senhor Deus de Israel; por isso não lhes podemos tocar". Quebrar um juramento feito em nome de Deus traria a ira divina sobre Israel (como aconteceu séculos depois com Saul em 2 Samuel 21). Josué amaldiçoa o engano deles, mas poupa suas vidas, transformando-os em "rachadores de lenha e tiradores de água" para a casa de Deus.'
      }
    ],
    conclusion: 'O engano dos gibeonitas é um alerta permanente contra a autoconfiança espiritual. As maiores armadilhas do inimigo muitas vezes não vêm como ataques frontais, mas como propostas razoáveis que apelam ao nosso bom senso. A frase "não pediram conselho ao Senhor" é o epitáfio de muitas decisões desastrosas em nossas vidas, casamentos e negócios. No entanto, a história também exalta a integridade. Mesmo tendo sido enganados, os líderes de Israel honraram o seu juramento. Deus valoriza a fidelidade à palavra empenhada, mesmo quando ela nos custa caro (Salmo 15:4).'
  },
  {
    id: 'jos_10_6_14',
    bookId: 'JOS',
    chapter: 10,
    startVerse: 6,
    endVerse: 14,
    title: 'O Sol e a Lua Param',
    theme: 'A Intervenção Cósmica, a Oração Ousada e o Deus que Luta por Israel',
    introduction: 'O tratado de paz com Gibeão (capítulo 9) teve consequências imediatas. Cinco reis amorreus se uniram para atacar Gibeão por sua traição. Os gibeonitas pedem socorro a Josué, forçando Israel a lutar para defender aqueles que os haviam enganado. O que se segue em Josué 10 é uma das batalhas mais épicas e sobrenaturais de toda a Bíblia. Deus não apenas encoraja Josué, mas intervém diretamente no combate com pedras de granizo e, em resposta a uma oração audaciosa, altera o curso da natureza, fazendo o sol e a lua pararem para garantir a vitória total.',
    points: [
      {
        verseRef: 'v. 6-10',
        title: 'O Apelo de Gibeão e o Encorajamento Divino',
        description: 'Gibeão clama a Josué: "Não retires as tuas mãos de teus servos; sobe apressadamente a nós, e livra-nos". Josué honra a aliança e marcha a noite toda desde Gilgal. Antes da batalha, Deus lhe dá a garantia absoluta: "Não os temas, porque os tenho dado na tua mão; nenhum deles parará diante de ti". Israel ataca de surpresa, e o Senhor "os conturbou diante de Israel", causando uma grande matança em Gibeão e perseguindo-os pela subida de Bete-Horom.'
      },
      {
        verseRef: 'v. 11',
        title: 'A Artilharia Celestial: As Pedras de Granizo',
        description: 'Enquanto os amorreus fugiam, o próprio Deus entra na batalha de forma visível e letal. "O Senhor lançou sobre eles, do céu, grandes pedras, até Azeca, e morreram". O texto faz questão de enfatizar a magnitude da intervenção divina: "foram muitos mais os que morreram das pedras da saraiva do que os que os filhos de Israel mataram à espada". A vitória não foi conquistada pelo poder militar de Israel, mas pela fúria da criação respondendo ao comando do Criador.'
      },
      {
        verseRef: 'v. 12-14',
        title: 'A Oração de Josué e o Sol que Parou',
        description: 'No calor da perseguição, Josué percebe que a noite se aproxima, o que permitiria a fuga dos inimigos. Cheio de fé, ele fala ao Senhor e, na presença de Israel, comanda o cosmos: "Sol, detém-te em Gibeão, e tu, lua, no vale de Ajalom". O milagre acontece: o sol parou no meio do céu e não se apressou a pôr-se por quase um dia inteiro. O autor conclui maravilhado: "E não houve dia semelhante a este, nem antes nem depois dele, ouvindo o Senhor assim a voz de um homem; porque o Senhor pelejava por Israel".'
      }
    ],
    conclusion: 'O dia em que o sol parou é um testemunho espetacular do poder da oração e da soberania de Deus sobre a criação. Josué não orou por uma estratégia melhor; ele orou pelo impossível, e Deus respondeu. Este evento nos ensina que, quando estamos alinhados com a vontade de Deus (lutando as batalhas que Ele nos chamou para lutar), podemos pedir com ousadia. O Deus que criou o universo não está limitado pelas leis da física quando se trata de defender o Seu povo e cumprir as Suas promessas. A maior lição do capítulo é a sua conclusão: "o Senhor pelejava por Israel".'
  },
  {
    id: 'jos_14_6_15',
    bookId: 'JOS',
    chapter: 14,
    startVerse: 6,
    endVerse: 15,
    title: 'A Herança de Calebe',
    theme: 'A Fé Perseverante, o Vigor Espiritual e a Recompensa da Fidelidade',
    introduction: 'Após anos de campanhas militares, a terra de Canaã foi amplamente subjugada, e chegou o momento de dividir a herança entre as tribos. Em Josué 14, um dos heróis mais antigos e fiéis de Israel dá um passo à frente: Calebe. Quarenta e cinco anos antes, ele e Josué foram os únicos espias que creram que Deus lhes daria a terra (Números 13-14). Agora, aos 85 anos, Calebe não pede uma aposentadoria tranquila em um vale fértil. Ele pede a montanha mais difícil, habitada pelos gigantes que aterrorizaram a geração anterior. A história de Calebe é um monumento à fé que não envelhece.',
    points: [
      {
        verseRef: 'v. 6-9',
        title: 'A Memória da Promessa e a Fidelidade Comprovada',
        description: 'Calebe aproxima-se de Josué em Gilgal e relembra a promessa feita por Moisés em Cades-Barneia. Ele recorda como os outros espias "fizeram derreter o coração do povo", mas ele "perseverou em seguir ao Senhor meu Deus". Por causa dessa fidelidade, Moisés jurou que a terra onde Calebe pisou seria sua herança. Calebe baseia o seu pedido não em seu próprio mérito militar, mas na promessa inquebrável da Palavra de Deus.'
      },
      {
        verseRef: 'v. 10-11',
        title: 'O Vigor Preservado por Deus',
        description: 'Calebe dá um testemunho impressionante da fidelidade de Deus: "Eis que o Senhor me conservou em vida... quarenta e cinco anos... e eis que hoje tenho já oitenta e cinco anos". Apesar da idade avançada, ele declara: "Ainda hoje estou tão forte como no dia em que Moisés me enviou; qual era a minha força então, tal é agora a minha força, tanto para a guerra como para sair e entrar". O vigor físico e espiritual de Calebe foi um dom de Deus, preservado durante as décadas de peregrinação no deserto.'
      },
      {
        verseRef: 'v. 12-15',
        title: 'O Pedido Ousado: "Dá-me Este Monte"',
        description: 'O clímax do pedido de Calebe é audacioso: "Agora, pois, dá-me este monte de que o Senhor falou naquele dia". O monte era Hebrom, a fortaleza dos enaquins (os gigantes) e das cidades grandes e fortificadas. Calebe não quer o caminho mais fácil. Sua fé é expressa com humildade e coragem: "porventura o Senhor será comigo, para os expulsar, como o Senhor disse". Josué o abençoa e lhe dá Hebrom por herança. A terra finalmente "repousou da guerra".'
      }
    ],
    conclusion: 'Calebe é o antídoto bíblico contra o cinismo e a fadiga espiritual. Enquanto a maioria das pessoas busca conforto na velhice, Calebe buscou conquista. Sua fé não diminuiu com o tempo; ela amadureceu. Ele nos ensina que a verdadeira vitalidade espiritual vem de "perseverar em seguir ao Senhor". Os gigantes (enaquins) que aterrorizaram os incrédulos foram vistos por Calebe como uma oportunidade para provar o poder de Deus. A oração de Calebe ("Dá-me este monte") deve ser a oração de todo crente que se recusa a se acomodar e deseja possuir tudo o que Deus prometeu, independentemente dos obstáculos.'
  },
  {
    id: 'jos_20_1_9',
    bookId: 'JOS',
    chapter: 20,
    startVerse: 1,
    endVerse: 9,
    title: 'As Cidades de Refúgio',
    theme: 'A Justiça Misericordiosa, a Proteção do Inocente e o Refúgio em Deus',
    introduction: 'No mundo antigo, a justiça frequentemente assumia a forma de vingança de sangue. Se alguém fosse morto, o parente mais próximo (o "vingador do sangue") tinha o dever de matar o homicida. Para evitar o derramamento de sangue inocente em casos de morte acidental, Deus instruiu Moisés (Números 35) e agora ordena a Josué (Josué 20) que estabeleça seis "Cidades de Refúgio" espalhadas por Israel. Esta instituição é uma das mais belas demonstrações da misericórdia de Deus entrelaçada com a Sua justiça, e serve como um poderoso tipo profético da salvação que encontramos em Cristo.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Propósito: Proteção contra o Vingador do Sangue',
        description: 'Deus ordena a Josué que designe as cidades de refúgio. O propósito é estritamente definido: "para que fuja para ali o homicida que matar alguma pessoa por erro e não com intenção". A lei fazia uma distinção clara entre assassinato premeditado (que exigia a pena de morte) e homicídio culposo (acidental). A cidade servia como um asilo seguro para proteger o homicida acidental da ira do "vingador do sangue" até que houvesse um julgamento justo.'
      },
      {
        verseRef: 'v. 4-6',
        title: 'O Processo de Admissão e o Julgamento',
        description: 'O fugitivo deveria chegar à porta da cidade (o local do tribunal) e expor o seu caso aos anciãos. Se aceito, ele receberia asilo. Se o vingador do sangue o perseguisse, os anciãos não poderiam entregá-lo, pois a morte foi sem ódio prévio. O fugitivo deveria permanecer na cidade até ser julgado perante a congregação e, se absolvido de intenção maligna, deveria viver ali "até à morte do sumo sacerdote que houver naqueles dias". A morte do sumo sacerdote expiava a culpa do derramamento de sangue, permitindo que o homem voltasse para casa.'
      },
      {
        verseRef: 'v. 7-9',
        title: 'A Distribuição Estratégica das Cidades',
        description: 'Seis cidades foram separadas: três a oeste do Jordão (Quedes, Siquém e Hebrom) e três a leste (Bezer, Ramote e Golã). Elas foram distribuídas estrategicamente do norte ao sul, garantindo que qualquer pessoa (israelita ou estrangeiro) pudesse alcançar uma delas em menos de um dia de viagem. O refúgio de Deus é sempre acessível. O caminho para essas cidades deveria ser mantido limpo e bem sinalizado (Deuteronômio 19:3).'
      }
    ],
    conclusion: 'As Cidades de Refúgio são uma ilustração perfeita do Evangelho. Assim como o homicida acidental estava sob a sentença de morte do vingador do sangue, nós estávamos sob a sentença da lei devido ao nosso pecado. Deus, em Sua misericórdia, providenciou um refúgio. O autor de Hebreus (Hb 6:18) diz que nós "fugimos para o refúgio, para lançar mão da esperança proposta". Jesus Cristo é a nossa Cidade de Refúgio. N’Ele estamos eternamente seguros da condenação. Além disso, assim como a liberdade do fugitivo era garantida pela morte do Sumo Sacerdote, a nossa liberdade eterna foi comprada pela morte de Jesus, o nosso Grande Sumo Sacerdote.'
  },
  {
    id: 'jos_22_1_6',
    bookId: 'JOS',
    chapter: 22,
    startVerse: 1,
    endVerse: 6,
    title: 'A Despedida das Tribos Transjordanianas',
    theme: 'A Promessa Cumprida, a Unidade da Nação e a Exortação à Fidelidade',
    introduction: 'Anos antes, as tribos de Rúben, Gade e a meia tribo de Manassés pediram a Moisés para herdar as terras a leste do rio Jordão. Moisés concordou, sob uma condição estrita: os homens armados dessas tribos deveriam cruzar o Jordão e lutar na linha de frente até que seus irmãos conquistassem Canaã. Em Josué 22, após anos de guerra sangrenta, a missão está cumprida. Josué convoca essas tribos, elogia a sua fidelidade à promessa e os despede com uma bênção e uma exortação vital. É um momento de honra militar e de profunda responsabilidade espiritual.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Reconhecimento da Fidelidade e do Dever Cumprido',
        description: 'Josué chama os rubenitas, os gaditas e a meia tribo de Manassés e lhes dá um testemunho honroso: "Vós guardastes tudo o que Moisés, servo do Senhor, vos ordenou... a vossos irmãos não desamparastes... mas guardastes o mandamento do Senhor vosso Deus". Eles deixaram suas famílias e rebanhos do outro lado do rio por anos, arriscando suas vidas em batalhas que não lhes dariam mais terras, apenas para ajudar seus irmãos. Eles demonstraram uma lealdade exemplar à aliança e à unidade da nação.'
      },
      {
        verseRef: 'v. 4',
        title: 'O Descanso Alcançado e a Permissão para Voltar',
        description: 'Josué declara o fim da campanha: "E agora o Senhor vosso Deus deu repouso a vossos irmãos, como lhes tinha dito". O objetivo foi alcançado. Josué os libera de seu juramento militar: "Voltai-vos, pois, agora, e ide-vos para as vossas tendas, à terra da vossa possessão". A promessa que fizeram a Moisés foi integralmente cumprida. Eles recebem a dispensa honrosa para voltar para casa com os despojos da guerra.'
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Exortação Espiritual e a Bênção',
        description: 'Antes de partirem, Josué lhes dá uma advertência crucial. A separação geográfica (o rio Jordão) poderia levar à separação espiritual. Por isso, ele os exorta: "Tão-somente tende cuidado de guardar com diligência o mandamento e a lei... amando ao Senhor vosso Deus, e andando em todos os seus caminhos... e servindo-o com todo o vosso coração e com toda a vossa alma". A verdadeira segurança deles não estava no rio que os protegia, mas na devoção do coração. Josué os abençoa e os despede em paz.'
      }
    ],
    conclusion: 'A atitude das tribos transjordanianas é um modelo de responsabilidade comunitária. Eles nos ensinam que no Reino de Deus não podemos nos acomodar quando nós já alcançamos a nossa "bênção", enquanto nossos irmãos ainda estão lutando. A Igreja é um corpo; a vitória de um é a vitória de todos. A exortação final de Josué nos lembra que o maior perigo após uma grande vitória não é o inimigo externo, mas o relaxamento interno. O sucesso e o descanso devem ser seguidos por uma vigilância ainda maior para amar e servir a Deus de todo o coração, evitando que a distância ou o conforto nos afastem do Senhor.'
  },
  {
    id: 'jos_23_1_16',
    bookId: 'JOS',
    chapter: 23,
    startVerse: 1,
    endVerse: 16,
    title: 'O Discurso de Despedida de Josué',
    theme: 'A Fidelidade de Deus, o Perigo da Assimilação e a Certeza do Juízo',
    introduction: 'Josué está velho e sabe que seus dias estão contados. Assim como Moisés fez antes dele, Josué convoca todos os líderes de Israel (anciãos, cabeças, juízes e oficiais) para um discurso de despedida. Josué 23 não é um discurso de autoengrandecimento sobre suas vitórias militares, mas um apelo apaixonado à fidelidade à aliança. Ele relembra que foi Deus quem lutou por eles e adverte severamente que a permanência na terra depende da separação absoluta da idolatria das nações remanescentes. É um chamado à pureza espiritual em um ambiente hostil.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Atribuição da Vitória ao Senhor',
        description: 'Josué começa lembrando os líderes do que eles mesmos testemunharam: "Vós já tendes visto tudo quanto o Senhor vosso Deus fez a todas estas nações por causa de vós; porque o Senhor vosso Deus é o que pelejou por vós". Josué recusa qualquer glória pessoal. Ele garante que Deus continuará a expulsar as nações remanescentes, desde que Israel permaneça fiel. A vitória passada e a segurança futura repousam inteiramente na ação de Yahweh.'
      },
      {
        verseRef: 'v. 6-11',
        title: 'O Chamado à Coragem, à Separação e ao Amor',
        description: 'Josué dá a receita para a permanência na terra. Primeiro, obediência estrita: "Esforçai-vos, pois, muito para guardardes e para fazerdes tudo quanto está escrito no livro da lei de Moisés". Segundo, separação radical: não se misturar com as nações, não mencionar o nome de seus deuses, não jurar por eles, nem servi-los. Terceiro, o apego a Deus: "chegai-vos ao Senhor vosso Deus". O clímax da exortação é o versículo 11: "Portanto, guardai muito as vossas almas, para amardes ao Senhor vosso Deus". O amor a Deus é a única proteção real contra a idolatria.'
      },
      {
        verseRef: 'v. 12-16',
        title: 'O Aviso Severo sobre a Assimilação e a Ira Divina',
        description: 'Josué muda o tom para uma advertência aterrorizante. Se eles se unirem em casamento com as nações pagãs, Deus deixará de expulsar os inimigos. Em vez disso, essas nações se tornarão "laço e rede para vós, e açoite para as vossas ilhargas, e espinhos para os vossos olhos". A assimilação cultural e religiosa levará à destruição. Josué garante que, assim como todas as boas palavras de Deus se cumpriram, Deus também trará sobre eles todas as maldições da aliança se eles a transgredirem, culminando na expulsão da boa terra.'
      }
    ],
    conclusion: 'O discurso de despedida de Josué é incrivelmente profético, pois descreve exatamente o que aconteceria no livro de Juízes. A advertência de Josué ressoa para a Igreja hoje: o nosso maior perigo não é a perseguição do mundo, mas a assimilação pelo mundo. Quando o povo de Deus começa a adotar os valores, as práticas e os "deuses" da cultura ao seu redor, eles perdem o seu poder e a proteção divina. A exortação "guardai muito as vossas almas, para amardes ao Senhor" é o antídoto. A pureza espiritual não é mantida apenas por regras, mas por um amor ardente e exclusivo por Jesus Cristo.'
  },
  {
    id: 'jos_24_1_13',
    bookId: 'JOS',
    chapter: 24,
    startVerse: 1,
    endVerse: 13,
    title: 'A Revisão da História da Salvação',
    theme: 'A Graça Soberana, a Ação de Deus na História e a Dádiva da Terra',
    introduction: 'No seu último ato público, Josué reúne todas as tribos de Israel em Siquém, um lugar de profundo significado histórico (onde Deus apareceu a Abraão e onde a aliança foi renovada no Monte Ebal). Em Josué 24, Josué atua como o porta-voz de Deus, apresentando um resumo magistral da história da salvação, desde o chamado de Abraão na idolatria até a posse de Canaã. O pronome mais repetido neste texto é "Eu" (referindo-se a Deus). A mensagem é clara: a existência de Israel não é o resultado do esforço humano, mas da graça soberana e da intervenção contínua de Deus na história.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Origem na Idolatria e a Eleição dos Patriarcas',
        description: 'Deus começa a história lembrando as origens humildes e pagãs de Israel: "Além do rio habitaram antigamente vossos pais, Tera, pai de Abraão e pai de Naor; e serviram a outros deuses". Abraão não foi escolhido porque era um monoteísta justo; ele foi tirado da idolatria pela graça. Deus diz: "Eu, porém, tomei a vosso pai Abraão... e o fiz andar por toda a terra de Canaã". Deus traça a linhagem da promessa através de Isaque, Jacó e Esaú, mostrando que Ele é o autor da história da família.'
      },
      {
        verseRef: 'v. 5-7',
        title: 'A Libertação do Egito e o Milagre do Mar',
        description: 'A narrativa avança para o evento central da redenção: o Êxodo. "Então enviei a Moisés e a Arão, e feri ao Egito... e depois vos tirei de lá". Deus descreve como os pais clamaram ao Senhor no Mar Vermelho, e como Ele colocou trevas entre Israel e os egípcios, e trouxe o mar sobre eles. Deus enfatiza: "os vossos olhos viram o que eu fiz no Egito". A libertação foi uma obra exclusiva do poder de Yahweh, sem nenhuma contribuição militar de Israel.'
      },
      {
        verseRef: 'v. 8-13',
        title: 'A Conquista de Canaã e a Terra Imerecida',
        description: 'Deus relata as vitórias sobre os amorreus a leste do Jordão, o livramento da maldição de Balaão e a travessia do Jordão. Sobre a conquista de Jericó e das nações cananeias, Deus declara: "e os entreguei na vossa mão". A vitória não foi "pela tua espada nem pelo teu arco", mas porque Deus enviou vespões (terror) adiante deles. O clímax da graça é o versículo 13: "E eu vos dei a terra em que não trabalhastes, e cidades que não edificastes... e comeis das vinhas e dos olivais que não plantastes". Tudo foi pura graça.'
      }
    ],
    conclusion: 'A revisão histórica em Siquém é um lembrete poderoso de que a teologia bíblica é baseada em eventos históricos reais. A nossa fé não se baseia em filosofias abstratas, mas no que Deus fez no espaço e no tempo. O uso repetido do "Eu" por Deus destrói qualquer orgulho espiritual. Assim como Israel, nós fomos tirados da idolatria do pecado, fomos libertos pelo sangue do Cordeiro sem o nosso próprio esforço, e recebemos uma herança eterna (a salvação) pela qual não trabalhamos. A lembrança constante da graça soberana de Deus é o único fundamento sólido para a adoração e a lealdade.'
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
console.log(`Expanded ${replacedCount} pericopes (Batch 13.1).`);
