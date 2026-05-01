const fs = require('fs');

const newPericopes = [
  {
    id: 'est_2_1_18',
    bookId: 'EST',
    chapter: 2,
    startVerse: 1,
    endVerse: 18,
    title: 'A Escolha de Ester como Rainha',
    theme: 'A Providência Invisível, a Preparação e a Soberania de Deus',
    introduction: 'O livro de Ester é único na Bíblia porque não menciona o nome de Deus nenhuma vez. No entanto, a Sua providência invisível está presente em cada detalhe. Após a rainha Vasti ser deposta, o rei Assuero (Xerxes) busca uma nova rainha. Em Ester 2, vemos como uma jovem órfã judia, exilada na Pérsia e criada por seu primo Mardoqueu, é levada ao palácio. Através de um concurso de beleza que parecia puramente secular, Deus estava posicionando a Sua serva no centro do maior império do mundo para, no futuro, salvar o Seu povo.',
    points: [
      {
        verseRef: 'v. 5-7',
        title: 'A Identidade Oculta e a Adoção',
        description: 'Mardoqueu, um judeu da tribo de Benjamim, adota a sua prima Hadassa (cujo nome persa é Ester) após a morte dos pais dela. Ela era "bela de presença e formosa". A sua identidade judaica é mantida em segredo por ordem de Mardoqueu.'
      },
      {
        verseRef: 'v. 8-11',
        title: 'O Favor no Palácio',
        description: 'Ester é levada para a casa das mulheres sob a guarda de Hegai. Imediatamente, ela "alcança favor" aos olhos dele, recebendo os melhores tratamentos e aposentos. Mardoqueu passeia diariamente pelo pátio para saber do bem-estar dela. O favor que ela encontra não é apenas carisma humano, mas a graça de Deus operando.'
      },
      {
        verseRef: 'v. 15-18',
        title: 'A Coroação de Ester',
        description: 'Quando chega a vez de Ester se apresentar ao rei, ela não pede nada além do que Hegai aconselha. O rei Assuero a ama mais do que a todas as outras mulheres, coloca a coroa real na sua cabeça e faz um grande banquete em sua honra. A órfã exilada torna-se a rainha da Pérsia.'
      }
    ],
    conclusion: 'A ascensão de Ester nos ensina que Deus frequentemente trabalha nos bastidores da história. Ele usa circunstâncias aparentemente seculares e decisões de reis pagãos para posicionar os Seus filhos estrategicamente. Ester não forçou a sua entrada no palácio; ela foi levada, mas manteve a sua submissão e caráter. Onde quer que Deus nos coloque, por mais improvável que pareça, Ele tem um propósito salvífico. A providência divina está sempre orquestrando os eventos para o bem do Seu povo.'
  },
  {
    id: 'est_3_1_11',
    bookId: 'EST',
    chapter: 3,
    startVerse: 1,
    endVerse: 11,
    title: 'A Trama de Hamã contra os Judeus',
    theme: 'O Ódio do Mundo, o Orgulho e a Ameaça de Extermínio',
    introduction: 'Após a ascensão de Ester, surge o grande antagonista da história: Hamã, o agagita (descendente dos amalequitas, antigos inimigos de Israel). O rei Assuero o exalta acima de todos os príncipes. Em Ester 3, a recusa de Mardoqueu em se curvar diante de Hamã desencadeia um ódio desproporcional. Hamã não quer apenas punir Mardoqueu; ele planeja o primeiro genocídio registrado na história bíblica: a aniquilação de todos os judeus no império persa. O texto revela a natureza irracional do antissemitismo e o perigo do orgulho ferido.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Recusa de Mardoqueu',
        description: 'O rei ordena que todos se prostrem diante de Hamã. Mardoqueu, no entanto, recusa-se a curvar-se, revelando aos servos do rei que é judeu (e, portanto, só se prostra diante de Deus). A sua desobediência civil é baseada na sua fidelidade religiosa.'
      },
      {
        verseRef: 'v. 5-6',
        title: 'O Orgulho Ferido e o Plano de Genocídio',
        description: 'Quando Hamã vê que Mardoqueu não se curva, enche-se de furor. O seu orgulho é tão doentio que ele acha pouco punir apenas um homem; ele decide destruir todo o povo de Mardoqueu, todos os judeus em todo o reino de Assuero.'
      },
      {
        verseRef: 'v. 7-11',
        title: 'O Lançamento de Sortes e o Decreto',
        description: 'Hamã lança o "Pur" (sorte) para determinar o dia do massacre. Ele então vai ao rei com meias-verdades, dizendo que há um povo com leis diferentes que não cumpre as leis do rei. Ele oferece uma fortuna em prata para financiar a matança. O rei lhe dá o anel de selar, autorizando o genocídio.'
      }
    ],
    conclusion: 'A trama de Hamã nos lembra que o povo de Deus sempre enfrentará oposição no mundo. A recusa de Mardoqueu em se curvar a um homem arrogante foi um ato de fidelidade a Deus, mas teve um custo altíssimo. O inimigo frequentemente usa o engano e o poder político para tentar destruir a semente da promessa. No entanto, mesmo quando as "sortes" (Pur) parecem lançadas contra nós, o Deus que não é mencionado no livro é Aquele que controla o resultado de cada sorte lançada (Provérbios 16:33).'
  },
  {
    id: 'est_5_1_8',
    bookId: 'EST',
    chapter: 5,
    startVerse: 1,
    endVerse: 8,
    title: 'Ester Perante o Rei',
    theme: 'Coragem, Sabedoria e o Risco da Fé',
    introduction: 'Após o jejum de três dias de todos os judeus em Susã (Ester 4), chega o momento decisivo. Ester precisa entrar no pátio interior do rei sem ser chamada, um crime punível com a morte. Em Ester 5, vemos a rainha colocar a própria vida em risco pela salvação do seu povo. A sua abordagem, no entanto, não é desesperada, mas cheia de sabedoria, paciência e graça. Ela não faz a sua petição imediatamente, mas convida o rei e Hamã para um banquete. O texto nos ensina sobre o equilíbrio perfeito entre a coragem ousada e a sabedoria estratégica.',
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'O Risco de Vida e o Cetro Estendido',
        description: 'Ao terceiro dia, Ester veste os seus trajes reais e coloca-se no pátio interior. Quando o rei a vê, ela alcança graça aos seus olhos, e ele estende-lhe o cetro de ouro. Ester toca a ponta do cetro, sendo poupada da morte. A coragem baseada na oração encontra o favor real.'
      },
      {
        verseRef: 'v. 3-4',
        title: 'O Convite Estratégico',
        description: 'O rei pergunta: "Qual é a tua petição? Até metade do reino se te dará". Em vez de despejar o seu desespero, Ester age com sabedoria e domínio próprio. Ela convida o rei e Hamã para um banquete que ela havia preparado.'
      },
      {
        verseRef: 'v. 5-8',
        title: 'A Paciência e o Segundo Banquete',
        description: 'Durante o banquete de vinho, o rei insiste novamente no pedido. Ester, guiada pela sabedoria divina, adia a petição para o dia seguinte, convidando-os para um segundo banquete. Este adiamento foi crucial para permitir que a providência de Deus agisse naquela mesma noite.'
      }
    ],
    conclusion: 'A atitude de Ester é um modelo de intercessão. Ela se preparou espiritualmente (jejum) e agiu com coragem ("se perecer, pereci"). Quando o rei estendeu o cetro, ela encontrou graça. Da mesma forma, nós temos acesso ao Rei dos reis, não com medo da morte, mas com a certeza de que o "cetro" da graça já nos foi estendido através de Jesus Cristo (Hebreus 4:16). A sabedoria de Ester em adiar o pedido mostra que, às vezes, Deus nos guia a esperar o momento exato para agir, permitindo que Ele trabalhe nos bastidores.'
  },
  {
    id: 'est_6_1_11',
    bookId: 'EST',
    chapter: 6,
    startVerse: 1,
    endVerse: 11,
    title: 'A Insônia do Rei e a Honra de Mardoqueu',
    theme: 'A Providência Divina, a Ironia e a Reversão de Destinos',
    introduction: 'O capítulo 6 de Ester é o grande ponto de virada do livro e uma das maiores ironias da literatura bíblica. Na noite anterior ao segundo banquete de Ester, enquanto Hamã constrói uma forca de 20 metros para enforcar Mardoqueu, o rei Assuero perde o sono. Sem Netflix ou calmantes, ele pede que leiam os registros do reino. "Coincidentemente", a leitura cai exatamente na página onde Mardoqueu havia salvo a vida do rei anos antes. A insônia de um rei pagão torna-se o instrumento de Deus para iniciar a queda do inimigo e a exaltação do justo.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Insônia Providencial e a Dívida Esquecida',
        description: 'Naquela noite, o sono fugiu do rei. Ele manda ler o livro das crônicas. A leitura revela que Mardoqueu havia denunciado um complô de assassinato contra o rei. O rei pergunta que honra foi dada a Mardoqueu por isso, e os servos respondem: "Coisa nenhuma se lhe fez".'
      },
      {
        verseRef: 'v. 4-6',
        title: 'A Chegada de Hamã e a Pergunta do Rei',
        description: 'Hamã entra no pátio de madrugada para pedir autorização para enforcar Mardoqueu. Antes que ele possa falar, o rei pergunta: "Que se fará ao homem de cuja honra o rei se agrada?". O orgulho cega Hamã, que pensa: "De quem se agradaria o rei para lhe fazer honra mais do que a mim?".'
      },
      {
        verseRef: 'v. 7-11',
        title: 'A Ironia da Honra',
        description: 'Hamã sugere um desfile com vestes reais, o cavalo do rei e a coroa. O rei ordena a Hamã: "Apressa-te... e faze assim para com o judeu Mardoqueu". A suprema humilhação de Hamã é ter que puxar o cavalo do homem que ele queria matar, proclamando a sua honra pelas ruas da cidade.'
      }
    ],
    conclusion: 'A insônia do rei Assuero prova que Deus não dorme. Ele governa sobre os detalhes mais insignificantes, como a falta de sono de um monarca e a página exata de um livro de crônicas. A humilhação de Hamã é a demonstração perfeita do princípio bíblico: "A soberba precede a ruína" (Provérbios 16:18) e "Deus resiste aos soberbos, mas dá graça aos humildes" (Tiago 4:6). Deus sabe o momento exato de exaltar os Seus servos. O que o inimigo planeja para a nossa destruição, Deus pode reverter para a nossa honra.'
  },
  {
    id: 'est_7_1_10',
    bookId: 'EST',
    chapter: 7,
    startVerse: 1,
    endVerse: 10,
    title: 'O Banquete de Ester e a Queda de Hamã',
    theme: 'A Revelação da Verdade, a Justiça e o Fim do Inimigo',
    introduction: 'O clímax do livro de Ester ocorre durante o segundo banquete. O rei Assuero, pela terceira vez, pergunta a Ester qual é a sua petição, prometendo dar-lhe até metade do reino. Em Ester 7, a rainha finalmente revela a sua identidade judaica e expõe o plano genocida de Hamã. A transição de Hamã, de convidado de honra a condenado à morte, acontece em questão de minutos. A justiça poética de Deus se manifesta quando Hamã é enforcado na exata forca que ele havia preparado para Mardoqueu.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Petição de Ester e a Revelação',
        description: 'Ester finalmente faz o seu pedido: "Dê-se-me a minha vida... e o meu povo". Ela revela que ela e o seu povo foram vendidos para serem destruídos, mortos e aniquilados. Se tivessem sido vendidos apenas como escravos, ela teria se calado, mas o decreto era de extermínio.'
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Exposição do Inimigo',
        description: 'O rei, chocado, pergunta: "Quem é esse...?". Ester aponta o dedo e profere as palavras fatais: "O homem, o opressor, e o inimigo, é este mau Hamã". O terror toma conta de Hamã perante o rei e a rainha.'
      },
      {
        verseRef: 'v. 7-10',
        title: 'A Ira do Rei e a Forca de Hamã',
        description: 'O rei sai furioso para o jardim. Hamã fica para implorar pela vida a Ester, caindo sobre o leito onde ela estava. O rei volta, interpreta a cena como uma tentativa de violência contra a rainha e condena Hamã. Um eunuco aponta a forca que Hamã fizera para Mardoqueu, e o rei ordena: "Enforcai-o nela".'
      }
    ],
    conclusion: 'A queda de Hamã é um lembrete aterrorizante de que a justiça de Deus não falha. O mal que o ímpio planeja contra o justo frequentemente se volta contra ele mesmo (Salmo 7:15-16). Ester usou a sua posição, beleza e influência não para o seu próprio conforto, mas para expor as obras das trevas. A história nos encoraja a confiar que, por mais poderoso que o inimigo pareça, o seu fim está determinado. Deus é o juiz supremo que reverte as sentenças de morte e vindica o Seu povo.'
  },
  {
    id: 'est_8_1_17',
    bookId: 'EST',
    chapter: 8,
    startVerse: 1,
    endVerse: 17,
    title: 'O Novo Decreto e a Salvação dos Judeus',
    theme: 'A Reversão do Mal, a Nova Lei e a Alegria da Salvação',
    introduction: 'Embora Hamã estivesse morto, o seu decreto de extermínio contra os judeus ainda estava em vigor, pois as leis dos medos e persas não podiam ser revogadas. Em Ester 8, a rainha chora aos pés do rei, implorando pela salvação do seu povo. O rei dá a Mardoqueu o anel de selar para escrever um novo decreto. Este novo documento não cancela o primeiro, mas dá aos judeus o direito de se defenderem e destruírem os seus atacantes. O resultado é uma explosão de alegria, luz e honra para o povo de Deus em todo o império.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Lágrima de Ester e a Necessidade de Salvação',
        description: 'O rei dá a casa de Hamã a Ester e o anel a Mardoqueu. Mas Ester cai aos pés do rei com lágrimas, implorando que revogue o intento de Hamã. Ela diz: "Como poderei ver o mal que sobrevirá ao meu povo?". A salvação pessoal não era suficiente para ela; o seu povo precisava ser salvo.'
      },
      {
        verseRef: 'v. 7-14',
        title: 'O Novo Decreto de Mardoqueu',
        description: 'O rei autoriza Mardoqueu a escrever o que bem parecer em nome do rei. O novo decreto concede aos judeus o direito de se reunirem e defenderem as suas vidas, destruindo qualquer força armada que os atacasse. Os correios saem apressadamente em cavalos velozes para espalhar a boa notícia.'
      },
      {
        verseRef: 'v. 15-17',
        title: 'A Alegria, a Luz e o Temor',
        description: 'Mardoqueu sai com vestes reais azuis e brancas e uma grande coroa de ouro. A cidade de Susã exulta. Para os judeus, houve "luz, e alegria, e gozo, e honra". O impacto foi tão grande que muitos dos povos da terra se fizeram judeus, porque o temor dos judeus caiu sobre eles.'
      }
    ],
    conclusion: 'O capítulo 8 de Ester é uma bela analogia do Evangelho. A "lei do pecado e da morte" (como o decreto de Hamã) pairava sobre nós, e a justiça de Deus não podia simplesmente ser cancelada. No entanto, o Rei do Universo emitiu um "novo decreto" através de Jesus Cristo: a lei do Espírito de vida (Romanos 8:2), que nos dá o poder de vencer o inimigo. Quando o novo decreto foi promulgado, o luto transformou-se em festa. Da mesma forma, a mensagem da salvação em Cristo traz luz, alegria e honra àqueles que estavam condenados à morte.'
  },
  {
    id: 'job_2_1_10',
    bookId: 'JOB',
    chapter: 2,
    startVerse: 1,
    endVerse: 10,
    title: 'A Segunda Provação e a Integridade de Jó',
    theme: 'O Sofrimento Físico, a Pressão Íntima e a Fé Incondicional',
    introduction: 'Após perder os seus bens e os seus dez filhos num único dia (Jó 1), Jó manteve a sua adoração a Deus. Satanás, frustrado, argumenta diante de Deus que a fé de Jó só permanecia porque a sua saúde estava intacta: "Toca-lhe nos ossos e na carne, e verás se não blasfema". Deus permite a segunda provação. Em Jó 2, Jó é ferido com úlceras malignas da cabeça aos pés. Sentado nas cinzas, ele enfrenta o golpe mais duro: a sua própria esposa sugere que ele amaldiçoe a Deus e morra. A resposta de Jó é um dos maiores monumentos à fé incondicional na história da humanidade.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'O Desafio de Satanás e a Permissão Divina',
        description: 'Satanás apresenta-se novamente. Deus elogia a integridade de Jó, que se manteve firme "sem causa". Satanás argumenta que o instinto de sobrevivência ("pele por pele") faria Jó blasfemar se a sua saúde fosse tocada. Deus permite a provação, impondo apenas um limite: poupar a vida de Jó.'
      },
      {
        verseRef: 'v. 7-8',
        title: 'A Doença Terrível e a Humilhação',
        description: 'Jó é ferido com uma chaga maligna desde a planta do pé até o alto da cabeça. A dor física e a repulsa social são extremas. Ele senta-se na cinza (sinal de luto e miséria) e usa um caco de telha para se raspar, tentando aliviar a coceira e a dor.'
      },
      {
        verseRef: 'v. 9-10',
        title: 'A Tentação da Esposa e a Resposta de Integridade',
        description: 'A esposa de Jó, quebrada pela dor de perder os filhos e ver o marido em agonia, diz: "Ainda reténs a tua sinceridade? Amaldiçoa a Deus, e morre". Jó a repreende com sabedoria profunda: "Receberemos o bem de Deus, e não receberíamos o mal?". Em tudo isso, Jó não pecou com os seus lábios.'
      }
    ],
    conclusion: 'A segunda provação de Jó destrói a "teologia da prosperidade", que afirma que a fé sempre garante saúde e riqueza. Jó perdeu tudo, inclusive o apoio da sua esposa, mas recusou-se a usar Deus apenas como um meio para obter bênçãos. A sua pergunta ("não receberíamos o mal?") revela uma submissão profunda à soberania de Deus. A verdadeira fé não é aquela que adora a Deus pelo que Ele dá, mas pelo que Ele é. Mesmo na dor excruciante e no isolamento, Jó provou que o amor a Deus pode ser totalmente desinteressado.'
  },
  {
    id: 'job_3_1_11',
    bookId: 'JOB',
    chapter: 3,
    startVerse: 1,
    endVerse: 11,
    title: 'O Lamento de Jó',
    theme: 'A Dor Insuportável, a Depressão e o Desejo da Morte',
    introduction: 'Após sete dias de silêncio absoluto com os seus amigos, a dor de Jó atinge o limite do suportável. Em Jó 3, o homem que havia dito "Bendito seja o nome do Senhor" agora abre a boca para amaldiçoar o dia do seu próprio nascimento. Este capítulo é um dos poemas de lamento mais sombrios e honestos da Bíblia. Jó não amaldiçoa a Deus (como Satanás queria), mas expressa um desespero tão profundo que ele deseja nunca ter existido. O texto nos ensina sobre a realidade crua do sofrimento humano e a permissão bíblica para o lamento.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Maldição do Dia do Nascimento',
        description: 'Jó quebra o silêncio e amaldiçoa o seu dia. Ele deseja que o dia em que nasceu e a noite em que foi concebido pereçam e sejam apagados do calendário. A dor tornou a sua existência um fardo intolerável.'
      },
      {
        verseRef: 'v. 4-5',
        title: 'O Desejo de Trevas',
        description: 'Ele pede que as trevas e a sombra da morte cubram o dia do seu nascimento, que Deus não se importe com ele e que nenhuma luz resplandeça sobre ele. É a linguagem clássica da depressão profunda, onde a luz da vida perde todo o seu brilho.'
      },
      {
        verseRef: 'v. 11',
        title: 'A Pergunta Angustiante: "Por Quê?"',
        description: 'Jó faz a pergunta que ecoa no coração de todos os que sofrem intensamente: "Por que não morri eu na madre? Por que não expirei ao sair do ventre?". Ele questiona o propósito de ter recebido a vida apenas para experimentar tamanha agonia.'
      }
    ],
    conclusion: 'O lamento de Jó choca muitos cristãos que acreditam que a fé exige um sorriso constante. A Bíblia, no entanto, é brutalmente honesta sobre a dor. Jó estava em depressão profunda, sentindo que a vida havia perdido todo o sentido. É crucial notar que Deus não repreende Jó por este desabafo de dor. O lamento é uma forma de oração; é derramar a nossa angústia diante de Deus quando não entendemos os Seus caminhos. A fé verdadeira tem espaço para as lágrimas, para a confusão e para os "porquês" gritados no escuro.'
  },
  {
    id: 'job_19_23_27',
    bookId: 'JOB',
    chapter: 19,
    startVerse: 23,
    endVerse: 27,
    title: 'A Esperança do Redentor Vivo',
    theme: 'A Revelação no Fundo do Poço, a Ressurreição e a Fé Triunfante',
    introduction: 'No meio de debates exaustivos e acusações cruéis dos seus "amigos", Jó atinge o fundo do poço emocional e físico. Ele sente-se abandonado por Deus e rejeitado pelos homens. No entanto, exatamente no ponto mais baixo do livro, Jó tem um vislumbre profético espetacular. Em Jó 19, ele profere uma das declarações de fé mais famosas do Antigo Testamento. Ele deseja que as suas palavras sejam gravadas na rocha para sempre, e então declara a sua convicção inabalável de que o seu Redentor vive e que, mesmo após a morte, ele verá a Deus.',
    points: [
      {
        verseRef: 'v. 23-24',
        title: 'O Desejo de um Registro Eterno',
        description: 'Jó quer que a sua defesa, a sua inocência e a sua fé sejam escritas num livro, ou melhor, esculpidas com pena de ferro e chumbo na rocha para sempre. Ele quer que as gerações futuras saibam que ele não perdeu a fé.'
      },
      {
        verseRef: 'v. 25',
        title: 'A Certeza do Redentor',
        description: 'A declaração triunfante: "Porque eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra". O "Redentor" (Goel) era o parente próximo que resgatava a propriedade, vingava o sangue ou defendia a causa do oprimido. Jó confia que Deus mesmo será o seu Defensor.'
      },
      {
        verseRef: 'v. 26-27',
        title: 'A Esperança da Ressurreição e da Visão de Deus',
        description: 'Jó declara que, mesmo que a sua pele seja destruída pela doença e pela morte, "em minha carne verei a Deus". Ele tem a certeza de uma visão pessoal e futura de Deus: "Vê-lo-ei por mim mesmo, e os meus olhos, e não outros o contemplarão".'
      }
    ],
    conclusion: 'A declaração de Jó é um milagre teológico. Sem ter a revelação completa do Novo Testamento, Jó compreendeu a figura do "Goel" (o Redentor). Ele sabia que, mesmo que o seu corpo apodrecesse na sepultura, haveria uma vindicação futura. Esta é a essência da esperança cristã: a certeza da ressurreição. No meio do nosso maior sofrimento, quando todas as vozes ao redor nos acusam ou nos mandam desistir, a nossa âncora deve ser esta: "Eu sei que o meu Redentor (Jesus Cristo) vive". A morte não tem a última palavra; a visão de Deus face a face é o nosso destino final.'
  },
  {
    id: 'job_38_1_11',
    bookId: 'JOB',
    chapter: 38,
    startVerse: 1,
    endVerse: 11,
    title: 'Deus Responde do Redemoinho',
    theme: 'A Majestade do Criador, a Limitação Humana e o Silêncio da Reverência',
    introduction: 'Durante 34 capítulos, Jó e os seus amigos debateram sobre a justiça de Deus, o sofrimento e o pecado. Jó exigiu repetidamente uma audiência com Deus para apresentar a sua defesa. Finalmente, em Jó 38, Deus quebra o silêncio. Ele não responde com um sussurro suave, mas fala de dentro de um redemoinho. Surpreendentemente, Deus não explica a Jó os motivos do seu sofrimento, nem menciona a aposta com Satanás. Em vez disso, Deus faz a Jó um teste de teologia e ciência, bombardeando-o com perguntas sobre a criação do universo. O objetivo não é esmagar Jó, mas expandir a sua visão sobre a grandeza e a soberania do Criador.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Aparição no Redemoinho e o Desafio',
        description: 'Deus responde a Jó do meio de um redemoinho (símbolo de poder incontrolável). Ele confronta Jó: "Quem é este que escurece o conselho com palavras sem conhecimento?". Deus manda Jó cingir os lombos como homem e preparar-se para responder às Suas perguntas.'
      },
      {
        verseRef: 'v. 4-7',
        title: 'A Fundação da Terra',
        description: 'O interrogatório divino começa com a arquitetura do planeta: "Onde estavas tu, quando eu fundava a terra?". Deus fala de medidas, cordéis e pedras de esquina, enquanto as estrelas da alva cantavam e os anjos jubilavam. Jó é lembrado da sua ausência e pequenez na criação.'
      },
      {
        verseRef: 'v. 8-11',
        title: 'O Controle sobre o Mar',
        description: 'Deus descreve como encerrou o mar com portas, como se fosse um bebê envolto em faixas de nuvens. Ele impôs limites ao caos do oceano, dizendo: "Até aqui virás, e não mais adiante, e aqui se quebrarão as tuas ondas orgulhosas". O Deus que controla o mar furioso também controla as tempestades da vida.'
      }
    ],
    conclusion: 'A resposta de Deus a Jó é a cura definitiva para o nosso orgulho intelectual e para a nossa ansiedade. Quando sofremos, queremos explicações. Deus, no entanto, oferece algo melhor do que uma explicação: Ele oferece a Si mesmo. Ao mostrar a complexidade, o poder e a precisão com que governa o cosmos (desde as galáxias até as ondas do mar), Deus está dizendo a Jó: "Se Eu sou capaz de cuidar de todo o universo com tamanha sabedoria, você não acha que Eu sou capaz de cuidar da sua vida?". A verdadeira paz no sofrimento não vem de entender todos os "porquês", mas de conhecer e confiar no "Quem" está no controle do redemoinho.'
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
console.log(`Added ${addedCount} new pericopes (Batch 22 - Esther/Job).`);
