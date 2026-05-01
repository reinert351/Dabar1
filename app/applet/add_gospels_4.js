const fs = require('fs');

const newPericopes = [
  {
    id: 'mat_11_25_30',
    bookId: 'MAT',
    chapter: 11,
    startVerse: 25,
    endVerse: 30,
    title: 'O Convite do Salvador e o Jugo Suave',
    theme: 'A Revelação aos Humildes e o Descanso para a Alma',
    introduction: `Em meio à rejeição das cidades onde fez a maioria dos seus milagres, Jesus profere uma das mais belas orações e o convite mais reconfortante de toda a Bíblia. Ele revela que a salvação não é uma conquista intelectual, mas uma revelação divina dada aos humildes. Aos exaustos pela religião legalista e pelo peso do pecado, Jesus não oferece um novo conjunto de regras, mas a Si mesmo como o descanso definitivo.`,
    points: [
      {
        verseRef: 'v. 25-26',
        title: 'A Soberania Divina e a Ocultação aos Sábios',
        description: `A Lógica Invertida do Reino. Jesus ora: "Graças te dou, ó Pai, Senhor do céu e da terra, que ocultaste estas coisas aos sábios e entendidos, e as revelaste aos pequeninos" (v. 25). Os líderes religiosos (os "sábios" aos próprios olhos) rejeitaram Jesus porque Ele não se encaixava na teologia acadêmica deles. Deus, em Sua soberania, esconde a verdade dos orgulhosos e a revela aos "pequeninos" (aqueles que reconhecem a sua ignorância e dependência espiritual). Isso não é um acidente, mas o "beneplácito" (a boa vontade perfeita) do Pai (v. 26).`
      },
      {
        verseRef: 'v. 27',
        title: 'A Exclusividade do Filho na Revelação do Pai',
        description: `O Único Mediador. Jesus faz uma declaração impressionante de divindade: "Todas as coisas me foram entregues por meu Pai". Ele possui autoridade cósmica. Em seguida, Ele declara a Sua exclusividade relacional: "ninguém conhece o Filho, senão o Pai; e ninguém conhece o Pai, senão o Filho, e aquele a quem o Filho o quiser revelar". A única maneira de conhecer a Deus não é através da filosofia, da meditação ou da religião, mas exclusivamente através da revelação dada por Jesus Cristo. Ele é a única janela pela qual podemos ver o Pai.`
      },
      {
        verseRef: 'v. 28-30',
        title: 'O Convite Universal e a Troca de Jugos',
        description: `O Descanso Verdadeiro. Baseado nessa autoridade absoluta, Jesus faz o convite (v. 28): "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei". O cansaço aqui é o peso esmagador de tentar alcançar a salvação por obras (o fardo dos fariseus) e o peso da culpa do pecado. A solução não é um método, é uma Pessoa: "Vinde a mim". Jesus propõe uma troca (v. 29): "Tomai sobre vós o meu jugo, e aprendei de mim, que sou manso e humilde de coração; e encontrareis descanso para as vossas almas". O "jugo" era uma canga de madeira colocada sobre bois para o trabalho. O jugo de Cristo (a submissão a Ele) é "suave" e o Seu fardo é "leve" (v. 30), porque Ele mesmo carrega o peso maior conosco.`
      }
    ],
    conclusion: `Mateus 11:25-30 é o antídoto contra a exaustão espiritual. A religião humana sempre nos diz "faça mais, tente mais, seja melhor", deixando-nos esgotados e vazios. O evangelho de Cristo nos diz "venha a mim e descanse". Quando abandonamos o nosso orgulho intelectual e as nossas tentativas de autojustificação, e nos submetemos à liderança mansa e humilde de Jesus, encontramos o único descanso verdadeiro para as nossas almas.`
  },
  {
    id: 'mat_16_13_20',
    bookId: 'MAT',
    chapter: 16,
    startVerse: 13,
    endVerse: 20,
    title: 'A Confissão de Pedro e a Edificação da Igreja',
    theme: 'A Identidade do Messias e a Autoridade Apostólica',
    introduction: `Em Cesareia de Filipe, um centro de adoração pagã e culto ao imperador, Jesus faz a pergunta definitiva aos Seus discípulos: "Quem dizeis que eu sou?". A resposta de Pedro marca um divisor de águas no ministério de Jesus. A partir desta confissão cristológica, Jesus anuncia pela primeira vez o Seu propósito de edificar a Igreja, uma instituição invencível que triunfará sobre as próprias portas do inferno, baseada na verdade de quem Ele é.`,
    points: [
      {
        verseRef: 'v. 13-15',
        title: 'A Opinião Pública vs. A Convicção Pessoal',
        description: `A Pergunta Inevitável. Jesus começa sondando a opinião popular (v. 13): "Quem dizem os homens ser o Filho do homem?". Os discípulos relatam as teorias do povo (v. 14): João Batista ressuscitado, Elias, Jeremias ou um dos profetas. O povo via Jesus como um grande homem de Deus, mas não como Deus. Jesus então estreita o foco e faz a pergunta mais importante que qualquer ser humano deve responder (v. 15): "E vós, quem dizeis que eu sou?". A salvação não depende do que a sociedade pensa sobre Jesus, mas da nossa convicção pessoal sobre a Sua identidade.`
      },
      {
        verseRef: 'v. 16-17',
        title: 'A Confissão de Pedro e a Revelação Divina',
        description: `O Cristo, o Filho do Deus Vivo. Pedro, falando em nome do grupo, acerta o alvo (v. 16): "Tu és o Cristo (o Messias prometido), o Filho do Deus vivo (divindade absoluta)". Ele não é apenas um profeta; Ele é o Ungido e o próprio Deus encarnado. Jesus responde abençoando Pedro (v. 17): "Bem-aventurado és tu, Simão Barjonas, porque to não revelou a carne e o sangue, mas meu Pai, que está nos céus". A compreensão espiritual de quem Jesus é não é fruto de inteligência humana ou dedução lógica ("carne e sangue"), mas de uma revelação sobrenatural concedida pelo Pai.`
      },
      {
        verseRef: 'v. 18-20',
        title: 'A Pedra Fundamental e as Chaves do Reino',
        description: `A Igreja Invencível. Jesus faz um jogo de palavras (v. 18): "Pois também eu te digo que tu és Pedro (Petros, uma pedra pequena), e sobre esta pedra (petra, uma rocha maciça - a confissão de que Jesus é o Cristo) edificarei a minha igreja". A igreja não é construída sobre um homem falho, mas sobre a verdade apostólica de quem Cristo é. A promessa é absoluta: "e as portas do inferno (o poder da morte e de Satanás) não prevalecerão contra ela". Jesus confia a autoridade apostólica (v. 19): "E eu te darei as chaves do reino dos céus". As chaves representam a autoridade para abrir as portas do Reino através da pregação do evangelho e para declarar o perdão ou a retenção de pecados com base na Palavra de Deus.`
      }
    ],
    conclusion: `Mateus 16:13-20 nos coloca diante da mesma pergunta feita a Pedro: Quem é Jesus para você? Se Ele é apenas um bom mestre, a nossa fé é inútil. Mas se Ele é o Cristo, o Filho do Deus vivo, então devemos submeter toda a nossa vida a Ele. A Igreja de Cristo, construída sobre esta verdade, pode enfrentar perseguições, heresias e o próprio inferno, com a garantia absoluta de que sairá vitoriosa, porque o seu Construtor é o Senhor do universo.`
  },
  {
    id: 'mat_18_21_35',
    bookId: 'MAT',
    chapter: 18,
    startVerse: 21,
    endVerse: 35,
    title: 'A Parábola do Credor Incompassivo',
    theme: 'A Dívida Impagável e a Obrigação do Perdão',
    introduction: `Quando Pedro pergunta a Jesus quantas vezes deve perdoar um irmão, sugerindo o número sete como um limite generoso (os rabinos ensinavam três vezes), Jesus responde com "setenta vezes sete", indicando um perdão ilimitado. Para ilustrar essa exigência radical, Jesus conta uma parábola sobre um rei e dois servos. A história revela a assimetria chocante entre o quanto fomos perdoados por Deus e o quão pouco somos chamados a perdoar os outros.`,
    points: [
      {
        verseRef: 'v. 23-27',
        title: 'A Dívida Infinita e a Compaixão do Rei',
        description: `O Perdão Inimaginável. O rei começa a acertar as contas e encontra um servo que lhe deve "dez mil talentos" (v. 24). Um talento equivalia a cerca de 20 anos de salário de um trabalhador comum. Dez mil talentos era uma dívida astronômica, impagável (bilhões de dólares na moeda atual). Representa a nossa dívida de pecado contra um Deus infinito. O servo, desesperado, pede paciência, prometendo o impossível: "Sê generoso para comigo, e tudo te pagarei" (v. 26). O rei, movido de íntima compaixão (v. 27), não apenas lhe dá mais tempo, mas cancela a dívida inteira. Este é o retrato da graça justificadora de Deus.`
      },
      {
        verseRef: 'v. 28-30',
        title: 'A Dívida Insignificante e a Crueldade do Servo',
        description: `A Hipocrisia da Falta de Perdão. O mesmo servo que acabou de ser perdoado de bilhões sai e encontra um conservo que lhe deve "cem dinheiros" (cem dias de trabalho, uma quantia irrisória comparada à sua dívida anterior). Ele o agarra pelo pescoço e exige o pagamento (v. 28). O conservo usa exatamente as mesmas palavras de súplica que ele havia usado diante do rei (v. 29): "Sê generoso para comigo, e tudo te pagarei". Mas o servo perdoado recusa a misericórdia e lança o seu devedor na prisão (v. 30). Esta é a imagem grotesca de um cristão que, tendo sido perdoado por Deus de uma vida inteira de rebelião, recusa-se a perdoar uma ofensa humana.`
      },
      {
        verseRef: 'v. 31-35',
        title: 'O Julgamento Severo e a Lei do Perdão',
        description: `A Consequência da Dureza de Coração. Os outros servos relatam o ocorrido ao rei. O rei o chama de "servo malvado" (v. 32) e aponta a falha lógica e moral: "Não devias tu, igualmente, ter compaixão do teu companheiro, como eu também tive misericórdia de ti?" (v. 33). O perdão recebido deve resultar em perdão concedido. Indignado, o rei entrega o servo aos verdugos (torturadores) até que pague toda a dívida (o que seria impossível, significando punição eterna). Jesus aplica a parábola com um aviso aterrorizante (v. 35): "Assim vos fará, também, meu Pai celestial, se do coração não perdoardes, cada um a seu irmão, as suas ofensas". A recusa contínua em perdoar prova que a pessoa nunca experimentou verdadeiramente a graça de Deus.`
      }
    ],
    conclusion: `Mateus 18:21-35 nos adverte que reter o perdão não é um pequeno defeito de caráter, mas um pecado mortal que bloqueia a nossa comunhão com Deus. Quando achamos difícil perdoar alguém que nos feriu, o remédio não é focar na ofensa do outro, mas olhar para a cruz e lembrar da montanha de pecados que Deus nos perdoou gratuitamente. Pessoas perdoadas perdoam; se não perdoamos, devemos questionar se realmente fomos perdoados.`
  },
  {
    id: 'mat_25_1_13',
    bookId: 'MAT',
    chapter: 25,
    startVerse: 1,
    endVerse: 13,
    title: 'A Parábola das Dez Virgens',
    theme: 'A Prontidão Espiritual e a Volta do Noivo',
    introduction: `No Seu discurso escatológico (Sermão Profético), Jesus enfatiza a necessidade de vigilância constante em relação à Sua segunda vinda. A Parábola das Dez Virgens ilustra que a familiaridade com as coisas de Deus e a associação com a igreja não garantem a salvação. A verdadeira fé exige uma preparação interior e pessoal (o azeite) que não pode ser emprestada no momento da crise final.`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Espera Prolongada e o Sono de Todas',
        description: `A Aparência de Igualdade. O Reino dos céus é comparado a dez virgens que saem com as suas lâmpadas para encontrar o noivo (v. 1). Exteriormente, todas parecem iguais: todas têm lâmpadas, todas usam roupas de festa, todas estão esperando o noivo (representando os membros visíveis da igreja). No entanto, há uma diferença invisível e crucial (v. 2-4): cinco são loucas (levaram as lâmpadas, mas não levaram azeite de reserva) e cinco são prudentes (levaram azeite em suas vasilhas). O azeite representa a realidade interna da fé, a presença do Espírito Santo e a verdadeira regeneração. Como o noivo demorou (a aparente demora da segunda vinda), todas tosquenejaram e adormeceram (v. 5). O sono não é o pecado; a falta de preparação é.`
      },
      {
        verseRef: 'v. 6-9',
        title: 'O Clamor da Meia-Noite e a Falta de Azeite',
        description: `A Crise que Revela a Verdade. "Mas à meia-noite ouviu-se um clamor: Aí vem o esposo, saí-lhe ao encontro" (v. 6). A volta de Cristo será repentina e inegável. Todas as virgens acordam e preparam as suas lâmpadas (v. 7). É neste momento de crise que a realidade espiritual é exposta. As loucas percebem que as suas lâmpadas estão se apagando e pedem azeite às prudentes (v. 8). A resposta das prudentes não é egoísmo, mas realidade espiritual (v. 9): "Não seja caso que nos falte a nós e a vós, ide antes aos que o vendem, e comprai-o para vós". A fé salvadora, o caráter transformado e o relacionamento com Deus não podem ser transferidos ou emprestados de outra pessoa. Cada um deve ter o seu próprio.`
      },
      {
        verseRef: 'v. 10-13',
        title: 'A Porta Fechada e o Veredito Final',
        description: `Tarde Demais. Enquanto as loucas vão comprar azeite, o noivo chega. "E as que estavam preparadas entraram com ele para as bodas, e fechou-se a porta" (v. 10). A porta da graça, que esteve aberta por tanto tempo, um dia se fechará definitivamente. As loucas chegam atrasadas e clamam (v. 11): "Senhor, Senhor, abre-nos". A resposta do noivo é aterrorizante (v. 12): "Em verdade vos digo que vos não conheço". Elas tinham a religião, mas não tinham o relacionamento. Jesus conclui com a lição central (v. 13): "Vigiai, pois, porque não sabeis o dia nem a hora em que o Filho do homem há de vir".`
      }
    ],
    conclusion: `Mateus 25:1-13 é um alerta solene contra a falsa segurança religiosa. Estar na igreja, carregar uma Bíblia (a lâmpada) e esperar ir para o céu não é suficiente. Quando a trombeta soar, a única coisa que importará é se temos o "azeite" da verdadeira conversão e da habitação do Espírito Santo. Não podemos depender da fé dos nossos pais, do nosso cônjuge ou do nosso pastor. A preparação para a eternidade é uma responsabilidade pessoal e intransferível que deve ser feita hoje, antes que a porta se feche.`
  },
  {
    id: 'mrk_5_1_20',
    bookId: 'MRK',
    chapter: 5,
    startVerse: 1,
    endVerse: 20,
    title: 'O Endemoninhado Gadareno',
    theme: 'O Poder Libertador de Cristo e o Valor de uma Alma',
    introduction: `Jesus atravessa o Mar da Galileia e entra em território gentílico, apenas para ser confrontado por um homem possuído por uma legião de demônios. Este homem vivia nos sepulcros, nu, cortando-se e aterrorizando a região. A sociedade o havia descartado e acorrentado, mas Jesus cruza o mar no meio de uma tempestade especificamente para resgatá-lo. Esta narrativa demonstra o poder absoluto de Cristo sobre as forças das trevas e o Seu amor incondicional pelos marginalizados.`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Miséria Extrema e a Incapacidade Humana',
        description: `O Retrato da Destruição. Assim que Jesus sai do barco, o homem vem ao Seu encontro. Marcos descreve a miséria absoluta deste homem (v. 3-5): ele morava nos sepulcros (lugar de morte e impureza), tinha força sobre-humana (despedaçava as correntes com as quais a sociedade tentava controlá-lo), e andava de dia e de noite gritando e ferindo-se com pedras. Satanás não quer apenas afastar o homem de Deus; ele quer destruir a imagem de Deus no homem, reduzindo-o a um animal selvagem e autodestrutivo. A sociedade humana tentou contê-lo com correntes, mas falhou. Apenas o poder divino poderia curá-lo.`
      },
      {
        verseRef: 'v. 6-13',
        title: 'A Submissão dos Demônios e a Libertação',
        description: `A Legião Derrotada. Apesar de estar possuído por milhares de demônios ("Legião", v. 9, um termo militar romano para cerca de 6.000 soldados), o homem corre e adora a Jesus (v. 6). Os demônios reconhecem a autoridade suprema do "Filho do Deus Altíssimo" e imploram para não serem atormentados (v. 7). Jesus ordena que o espírito imundo saia. Os demônios pedem para entrar em uma manada de dois mil porcos (animais impuros para os judeus). Jesus permite, e os porcos se precipitam no mar e se afogam (v. 12-13). A destruição dos porcos prova a realidade da possessão, a magnitude da libertação e o fato de que uma única alma humana vale mais do que a economia inteira de uma cidade.`
      },
      {
        verseRef: 'v. 14-20',
        title: 'A Rejeição da Cidade e o Primeiro Missionário',
        description: `O Medo da Graça. Os porqueiros fogem e contam o ocorrido na cidade. Quando o povo chega, encontra o homem "assentado, vestido e em perfeito juízo" (v. 15). Em vez de se alegrarem com a restauração do homem, eles "começaram a ter medo" e "rogaram-lhe que se retirasse dos seus termos" (v. 17). Eles preferiam os seus porcos (lucro econômico) e o seu status quo do que a presença transformadora de Jesus. Quando Jesus entra no barco, o homem curado implora para ir com Ele (v. 18). Jesus recusa, mas lhe dá uma missão (v. 19): "Vai para tua casa, para os teus, e anuncia-lhes quão grandes coisas o Senhor te fez, e como teve misericórdia de ti". O ex-endemoninhado torna-se o primeiro grande missionário gentílico na região de Decápolis (v. 20).`
      }
    ],
    conclusion: `Marcos 5:1-20 nos prova que ninguém está além do alcance da graça de Deus. Não importa quão acorrentada, destruída ou dominada pelo mal uma pessoa possa estar, uma única palavra de Jesus Cristo tem o poder de quebrar todas as cadeias e restaurar a mente e a alma. Além disso, a história nos desafia: valorizamos mais os nossos "porcos" (o nosso conforto material e econômico) do que a libertação de almas perdidas? O verdadeiro encontro com Jesus sempre nos transforma em testemunhas da Sua misericórdia.`
  },
  {
    id: 'mrk_5_21_43',
    bookId: 'MRK',
    chapter: 5,
    startVerse: 21,
    endVerse: 43,
    title: 'A Mulher do Fluxo de Sangue e a Filha de Jairo',
    theme: 'A Fé no Desespero e o Senhor sobre a Doença e a Morte',
    introduction: `Marcos entrelaça duas histórias de cura para mostrar que Jesus é acessível tanto aos líderes religiosos influentes quanto aos marginalizados invisíveis. Jairo, um chefe da sinagoga, implora pela vida de sua filha de doze anos. No caminho, uma mulher impura e doente há doze anos toca nas vestes de Jesus. Ambas as histórias exigem uma fé que ultrapassa o medo, a vergonha, a decepção e até mesmo a aparente finalidade da morte.`,
    points: [
      {
        verseRef: 'v. 21-24, 35-43',
        title: 'O Desespero de Jairo e a Vitória sobre a Morte',
        description: `Não Temas, Crê Somente. Jairo, um homem de status, humilha-se caindo aos pés de Jesus, implorando pela sua filha que está à beira da morte (v. 22-23). Jesus vai com ele, mas a multidão O atrasa. Enquanto Jesus cura a mulher, chegam mensageiros da casa de Jairo (v. 35): "A tua filha está morta; para que enfadas mais o Mestre?". É o pior pesadelo de um pai. Jesus ignora a notícia e diz a Jairo (v. 36): "Não temas, crê somente". Jesus entra na casa, expulsa os pranteadores incrédulos (v. 39-40), toma a mão da menina morta e diz: "Talita cumi" (Menina, levanta-te). A morte obedece instantaneamente ao Autor da Vida (v. 41-42).`
      },
      {
        verseRef: 'v. 25-29',
        title: 'A Aflição da Mulher e o Toque da Fé',
        description: `A Ousadia dos Marginalizados. No meio do caminho para a casa de Jairo, a narrativa foca em uma mulher anônima. Ela sofria de uma hemorragia há 12 anos (v. 25). Ela havia gastado todo o seu dinheiro com médicos e só piorava (v. 26). Pior ainda, a lei levítica a declarava cerimonialmente impura; ela não podia tocar em ninguém nem ir ao templo. Desesperada, ela pensa (v. 28): "Se eu tão-somente tocar nas suas vestes, sararei". Ela se esgueira pela multidão, toca na orla da veste de Jesus e, imediatamente, a fonte do seu sangue seca (v. 29). A fé dela, embora misturada com um pouco de superstição, foi suficiente para extrair poder do Salvador.`
      },
      {
        verseRef: 'v. 30-34',
        title: 'A Confissão Pública e a Paz da Salvação',
        description: `Mais que Cura Física. Jesus percebe que "virtude" (poder) saiu dEle e pergunta quem O tocou (v. 30). Os discípulos acham a pergunta absurda no meio da multidão apertada (v. 31). Mas Jesus não queria apenas curá-la fisicamente; Ele queria restaurá-la social e espiritualmente. A mulher, tremendo de medo (pois havia tocado em um rabino sendo impura), prostra-se e conta toda a verdade (v. 33). Jesus não a repreende. Ele a chama por um termo de profunda afeição e adoção (v. 34): "Filha, a tua fé te salvou; vai em paz, e sê curada deste teu mal". Ela não roubou uma cura; ela recebeu a salvação completa.`
      }
    ],
    conclusion: `Marcos 5:21-43 nos mostra que Jesus nunca está ocupado demais para atender ao clamor do desespero. Seja você um líder respeitado enfrentando uma tragédia familiar, ou uma pessoa marginalizada, quebrada e envergonhada pelo seu passado, a resposta de Jesus é a mesma: "Não temas, crê somente". A nossa fé é o canal que nos conecta ao poder de Cristo, um poder que é maior do que a doença incurável e mais forte do que a própria morte.`
  },
  {
    id: 'mrk_9_14_29',
    bookId: 'MRK',
    chapter: 9,
    startVerse: 14,
    endVerse: 29,
    title: 'A Cura do Jovem Possesso',
    theme: 'A Batalha da Fé e o Poder da Oração',
    introduction: `Descendo do Monte da Transfiguração, onde experimentaram a glória celestial, Jesus e três discípulos encontram o caos no vale. Os outros nove discípulos haviam falhado em expulsar um demônio de um menino. O pai do menino está desesperado e com a fé vacilante. Esta passagem expõe a nossa impotência espiritual quando tentamos operar sem dependência de Deus e revela a honestidade brutal da fé que clama: "ajuda a minha incredulidade".`,
    points: [
      {
        verseRef: 'v. 14-18',
        title: 'O Fracasso dos Discípulos e a Agonia do Pai',
        description: `A Impotência no Vale. Jesus encontra uma grande multidão e os escribas discutindo com os Seus discípulos (v. 14). Um pai se aproxima e explica a situação (v. 17-18): o seu filho é possuído por um espírito mudo que o lança no fogo e na água para destruí-lo. O pai relata a sua frustração: "e eu disse aos teus discípulos que o expulsassem, e não puderam". Os discípulos haviam recebido autoridade sobre os demônios anteriormente (Marcos 6:7), mas aqui eles falham miseravelmente. A ausência de Jesus revela a fraqueza deles. Jesus lamenta a incredulidade daquela geração (v. 19) e manda trazer o menino.`
      },
      {
        verseRef: 'v. 19-24',
        title: 'A Exigência da Fé e o Clamor Honesto',
        description: `Tudo é Possível ao que Crê. Quando o demônio vê Jesus, ele convulsiona o menino violentamente (v. 20). O pai, exausto por anos de sofrimento, faz um pedido hesitante (v. 22): "Mas, se tu podes fazer alguma coisa, tem compaixão de nós, e ajuda-nos". Jesus devolve a responsabilidade para o pai (v. 23): "Se tu podes crer, tudo é possível ao que crê". O problema não é a capacidade de Jesus, mas a fé do pai. A resposta do pai é uma das orações mais autênticas da Bíblia (v. 24): "Eu creio, Senhor! ajuda a minha incredulidade". Ele reconhece que tem um pouco de fé, mas admite que ela é fraca e misturada com dúvidas, e pede que o próprio Jesus supra a fé que lhe falta.`
      },
      {
        verseRef: 'v. 25-29',
        title: 'A Libertação e a Necessidade de Oração',
        description: `O Segredo do Poder Espiritual. Jesus repreende o espírito imundo com autoridade absoluta, proibindo-o de voltar (v. 25). O demônio sai, deixando o menino como morto, mas Jesus o toma pela mão e o levanta (v. 26-27). Mais tarde, em particular, os discípulos perguntam a Jesus por que eles falharam (v. 28). A resposta de Jesus é o diagnóstico da fraqueza espiritual deles (v. 29): "Esta casta não pode sair com coisa alguma, a não ser com oração e jejum". Os discípulos haviam tentado expulsar o demônio confiando na sua experiência passada ou na sua própria autoridade, em vez de dependerem de Deus através da oração. O poder espiritual não é uma posse permanente, mas flui de uma comunhão contínua com o Pai.`
      }
    ],
    conclusion: `Marcos 9:14-29 nos ensina que o ministério cristão no "vale" deste mundo quebrado é impossível sem uma dependência desesperada de Deus. Quando a nossa fé vacila diante de problemas que parecem insuperáveis, não precisamos fingir uma fé que não temos; podemos clamar honestamente: "Senhor, ajuda a minha incredulidade!". E quando falhamos em ver o poder de Deus operando através de nós, devemos examinar a nossa vida de oração, lembrando que a vitória espiritual só é alcançada de joelhos.`
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
  console.log('Successfully added 8 new pericopes for Matthew and Mark.');
} else {
  console.error('Could not find the end of the pericopes array.');
}
