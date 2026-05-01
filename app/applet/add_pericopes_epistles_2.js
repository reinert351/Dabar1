const fs = require('fs');

const newPericopes = [
  {
    id: '1pe_1_3_9',
    bookId: '1PE',
    chapter: 1,
    startVerse: 3,
    endVerse: 9,
    title: 'A Viva Esperança e a Provação da Fé',
    theme: 'A Segurança da Salvação em Meio ao Sofrimento',
    introduction: `A Primeira Epístola de Pedro foi escrita para cristãos dispersos e perseguidos na Ásia Menor. Pedro não oferece a eles uma fuga do sofrimento, mas uma perspectiva radicalmente nova sobre ele. Os versículos 3 a 9 formam uma única e majestosa frase no grego original, uma explosão de louvor a Deus pela salvação. Pedro ensina que a nossa esperança não é um otimismo vago, mas uma âncora viva, baseada na ressurreição de Cristo, que nos sustenta e purifica através do fogo das provações.`,
    points: [
      {
        verseRef: 'v. 3-5',
        title: 'A Herança Incorruptível e a Proteção Divina',
        description: `O Novo Nascimento. Pedro começa bendizendo a Deus, que "segundo a sua grande misericórdia, nos gerou de novo para uma viva esperança, pela ressurreição de Jesus Cristo dentre os mortos". A nossa esperança está viva porque Cristo está vivo. O propósito desse novo nascimento é uma herança "incorruptível, incontaminável, e que não se pode murchar, guardada nos céus para vós". Enquanto as riquezas terrenas apodrecem, são roubadas ou perdem o valor, a nossa herança celestial é absolutamente segura. Mais do que isso, não apenas a herança está guardada para nós, mas nós somos "guardados pelo poder de Deus, mediante a fé", até a salvação final.`
      },
      {
        verseRef: 'v. 6-7',
        title: 'O Propósito do Fogo e a Provação da Fé',
        description: `A Alegria no Sofrimento. Pedro reconhece o paradoxo da vida cristã: "Em que vós grandemente vos alegrais, ainda que agora importa, sendo necessário, que estejais por um pouco contristados com várias tentações (provações)". A alegria profunda e a tristeza circunstancial podem coexistir no coração do crente. Pedro explica o propósito do sofrimento (v. 7): ele é como o fogo que refina o ouro. A nossa fé é "muito mais preciosa do que o ouro que perece". As provações não vêm para destruir a nossa fé, mas para provar a sua genuinidade, purificá-la das impurezas da autoconfiança e resultar em "louvor, e honra, e glória, na revelação de Jesus Cristo".`
      },
      {
        verseRef: 'v. 8-9',
        title: 'O Amor Invisível e a Alegria Indizível',
        description: `A Fé que Vê o Invisível. Pedro, que andou fisicamente com Jesus, escreve para crentes que nunca O viram: "Ao qual, não o havendo visto, amais; no qual, não o vendo agora, mas crendo, vos alegrais com gozo inefável e glorioso". A verdadeira fé cristã não depende da visão física, mas do testemunho do Espírito e da Palavra. Esse amor e confiança em Cristo invisível produzem uma alegria que as palavras não podem expressar ("inefável"). O resultado final dessa jornada de fé provada pelo fogo é "a salvação das vossas almas" (v. 9).`
      }
    ],
    conclusion: `A mensagem de Pedro é clara: o sofrimento na vida do cristão não é um acidente cósmico ou um sinal do abandono de Deus, mas um crisol divino. Quando as provações vierem, não devemos nos desesperar, mas lembrar que a nossa herança está segura no céu, a nossa fé está sendo purificada na terra, e o nosso Salvador nos aguarda com glória e honra.`
  },
  {
    id: '1pe_2_4_10',
    bookId: '1PE',
    chapter: 2,
    startVerse: 4,
    endVerse: 10,
    title: 'A Pedra Viva e o Povo Escolhido',
    theme: 'A Nova Identidade e a Missão da Igreja',
    introduction: `Nesta passagem, Pedro usa a rica linguagem do Antigo Testamento para descrever a nova identidade da Igreja. Ele contrasta a rejeição de Cristo pelo mundo com a Sua preciosidade para Deus e para os crentes. A igreja é descrita não como uma organização humana, mas como um edifício espiritual vivo e um sacerdócio santo. Compreender quem somos em Cristo é o fundamento absoluto para vivermos de forma santa e corajosa em um mundo que nos é hostil.`,
    points: [
      {
        verseRef: 'v. 4-5',
        title: 'A Pedra Viva e o Edifício Espiritual',
        description: `Aproximando-se de Cristo. Pedro convida os crentes a chegarem a Cristo, descrevendo-O como "uma pedra viva, reprovada, na verdade, pelos homens, mas para com Deus eleita e preciosa". Jesus é o fundamento vivo da igreja. Ao nos unirmos a Ele pela fé, nós também "como pedras vivas, sois edificados casa espiritual". A igreja não é um templo de tijolos e cimento, mas um edifício feito de pessoas transformadas. Além de sermos o templo, somos também o "sacerdócio santo, para oferecer sacrifícios espirituais agradáveis a Deus por Jesus Cristo". Não precisamos mais de sacerdotes humanos para mediar o nosso acesso a Deus; todos os crentes são sacerdotes que oferecem sacrifícios de louvor, oração e obediência.`
      },
      {
        verseRef: 'v. 6-8',
        title: 'A Pedra de Esquina e a Pedra de Tropeço',
        description: `O Divisor de Águas da Humanidade. Citando Isaías 28 e o Salmo 118, Pedro mostra que a atitude de uma pessoa em relação a Jesus Cristo determina o seu destino. Para Deus, Jesus é a "principal pedra da esquina, eleita e preciosa". Para os que creem, Ele é a fonte de honra e segurança ("o que nela crer não será confundido"). Mas para os rebeldes e desobedientes, a mesma pedra se torna "uma pedra de tropeço e rocha de escândalo". Jesus não deixa ninguém neutro; ou construímos a nossa vida sobre Ele, ou tropeçamos nEle para a nossa própria ruína.`
      },
      {
        verseRef: 'v. 9-10',
        title: 'A Nova Identidade e a Missão do Povo de Deus',
        description: `Os Títulos de Israel Aplicados à Igreja. No versículo 9, Pedro aplica à igreja os títulos mais gloriosos que Deus havia dado a Israel no Sinai (Êxodo 19): "Mas vós sois a geração eleita, o sacerdócio real, a nação santa, o povo adquirido". Esta é a nossa identidade inabalável. Mas esta identidade tem um propósito missionário claro: "para que anuncieis as virtudes (as grandezas, os atos poderosos) daquele que vos chamou das trevas para a sua maravilhosa luz". A igreja existe para ser uma vitrine da glória e da graça de Deus. Pedro conclui lembrando-os da graça que os alcançou (v. 10): antes não eram povo, agora são povo de Deus; antes não tinham alcançado misericórdia, agora alcançaram.`
      }
    ],
    conclusion: `1 Pedro 2:4-10 nos liberta da crise de identidade. O mundo pode nos rejeitar, zombar de nós ou nos marginalizar, mas diante de Deus somos pedras vivas, sacerdotes reais e um povo de propriedade exclusiva. A nossa resposta a esse privilégio infinito não deve ser o orgulho, mas a proclamação apaixonada das virtudes dAquele que nos resgatou das trevas.`
  },
  {
    id: '1pe_5_6_11',
    bookId: '1PE',
    chapter: 5,
    startVerse: 6,
    endVerse: 11,
    title: 'Humildade e Vigilância na Batalha Espiritual',
    theme: 'A Postura do Crente Diante de Deus, da Ansiedade e do Diabo',
    introduction: `No encerramento da sua primeira carta, o apóstolo Pedro oferece instruções vitais para a sobrevivência espiritual. Ele aborda três dos maiores inimigos da alma: o orgulho, a ansiedade e o diabo. Pedro, que conhecia por experiência própria o perigo da autoconfiança e a realidade do ataque satânico (tendo negado a Jesus após ser peneirado por Satanás), ensina que a verdadeira guerra espiritual não é travada com arrogância, mas com profunda humildade diante de Deus, dependência da Sua graça e vigilância constante.`,
    points: [
      {
        verseRef: 'v. 6-7',
        title: 'A Humildade Sob a Mão de Deus e o Lançar da Ansiedade',
        description: `O Antídoto para o Orgulho e a Preocupação. Pedro ordena: "Humilhai-vos, pois, debaixo da potente mão de Deus, para que a seu tempo vos exalte". A "potente mão de Deus" representa a Sua soberania e disciplina, frequentemente experimentada através das provações. A humildade significa aceitar a vontade de Deus sem murmuração, confiando que Ele nos exaltará no momento certo. O versículo 7 está intimamente ligado ao 6: "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós". A ansiedade é, na sua raiz, uma forma de orgulho (a ilusão de que podemos controlar o futuro). Lançar a ansiedade sobre Deus é um ato de humildade, reconhecendo a nossa impotência e descansando no cuidado amoroso do Pai.`
      },
      {
        verseRef: 'v. 8-9',
        title: 'A Vigilância e a Resistência ao Leão que Ruge',
        description: `O Inimigo Invisível. Pedro muda o foco de Deus para o inimigo: "Sede sóbrios; vigiai; porque o diabo, vosso adversário, anda em derredor, bramando como leão, buscando a quem possa tragar". O diabo não é um mito, mas um adversário real, feroz e faminto. Ele usa a perseguição (o rugido do leão) e a tentação para destruir a fé dos crentes. A resposta não é o pânico, mas a vigilância sóbria e a resistência ativa (v. 9): "Ao qual resisti firmes na fé". Não resistimos ao diabo com a nossa própria força, mas permanecendo inabaláveis nas verdades do evangelho ("na fé"). Pedro também conforta os crentes lembrando que o sofrimento deles não é único; a irmandade global está passando pelas mesmas aflições.`
      },
      {
        verseRef: 'v. 10-11',
        title: 'A Promessa de Restauração e o Domínio Eterno',
        description: `A Obra Final de Deus. Após a exortação à batalha, Pedro oferece uma das promessas mais belas do Novo Testamento: "E o Deus de toda a graça, que em Cristo Jesus vos chamou à sua eterna glória, depois de haverdes padecido um pouco, ele mesmo vos aperfeiçoará, confirmará, fortificará e estabelecerá". O sofrimento é temporário ("um pouco"), mas a glória é eterna. Deus não nos abandona no fogo; Ele mesmo está ativamente usando o sofrimento para nos restaurar (aperfeiçoar), nos dar firmeza, força e um fundamento inabalável. A passagem termina com uma doxologia (v. 11): "A ele seja a glória e o poderio para todo o sempre. Amém".`
      }
    ],
    conclusion: `A vitória na vida cristã exige uma postura dupla: devemos nos curvar em total humildade e dependência diante de Deus, lançando sobre Ele os nossos fardos, e ao mesmo tempo devemos nos levantar em vigilância e resistência firme contra o diabo. Podemos enfrentar o rugido do leão com coragem, sabendo que o Deus de toda a graça está nos moldando através do sofrimento para a Sua glória eterna.`
  },
  {
    id: '2pe_1_3_11',
    bookId: '2PE',
    chapter: 1,
    startVerse: 3,
    endVerse: 11,
    title: 'A Confirmação da Vocação e Eleição',
    theme: 'O Poder Divino e a Responsabilidade Humana no Crescimento Espiritual',
    introduction: `A Segunda Epístola de Pedro é o testamento final do apóstolo antes do seu martírio. Ele escreve para combater falsos mestres que promoviam a imoralidade e negavam o retorno de Cristo. Nesta passagem fundamental, Pedro estabelece o equilíbrio perfeito entre a soberania de Deus e a responsabilidade humana. Ele afirma que Deus já nos deu tudo o que precisamos para a santidade, mas que a graça de Deus não anula o nosso esforço; pelo contrário, ela o capacita. Pedro nos chama a um crescimento moral intencional e vigoroso para confirmarmos a nossa eleição e não tropeçarmos.`,
    points: [
      {
        verseRef: 'v. 3-4',
        title: 'O Poder Divino e as Grandíssimas Promessas',
        description: `A Provisão Completa. Pedro começa com uma declaração de suficiência absoluta: "Visto como o seu divino poder nos deu tudo o que diz respeito à vida e piedade". O crente não precisa de uma "segunda bênção" ou de uma revelação secreta; ele já tem tudo o que precisa em Cristo. Isso nos foi dado através do "conhecimento daquele que nos chamou". Além do poder, Deus nos deu "grandíssimas e preciosas promessas" (v. 4). O propósito dessas promessas é impressionante: "para que por elas fiqueis participantes da natureza divina, havendo escapado da corrupção, que pela concupiscência há no mundo". Através do Espírito Santo, compartilhamos o caráter moral de Deus (santidade, amor, verdade), libertando-nos da decadência do pecado.`
      },
      {
        verseRef: 'v. 5-7',
        title: 'A Matemática do Crescimento Espiritual',
        description: `O Esforço Diligente. Porque Deus nos deu tudo (v. 3-4), nós devemos responder com esforço máximo (v. 5): "E vós também, pondo nisto mesmo toda a diligência". A graça não é desculpa para a preguiça. Pedro lista uma cadeia de sete virtudes que devem ser adicionadas à nossa fé: à fé, a virtude (excelência moral); à virtude, a ciência (conhecimento prático de Deus); à ciência, a temperança (autocontrole); à temperança, a paciência (perseverança sob pressão); à paciência, a piedade (reverência a Deus); à piedade, o amor fraternal (afeição pelos irmãos); e ao amor fraternal, a caridade (o amor ágape, incondicional e sacrificial). O crescimento cristão é intencional e progressivo.`
      },
      {
        verseRef: 'v. 8-11',
        title: 'A Confirmação da Vocação e a Entrada Abundante',
        description: `O Resultado do Crescimento. Pedro explica as consequências de possuir ou não essas virtudes. Se elas estiverem presentes e crescendo (v. 8), não seremos ociosos nem estéreis no conhecimento de Cristo. Se faltarem (v. 9), a pessoa é "cega, e nada vê ao longe, havendo-se esquecido da purificação dos seus antigos pecados" (uma amnésia espiritual perigosa). O clímax é o versículo 10: "Portanto, irmãos, procurai fazer cada vez mais firme a vossa vocação e eleição; porque, fazendo isto, nunca jamais tropeçareis". Nós não causamos a nossa eleição pelas nossas obras, mas nós a confirmamos e a provamos para nós mesmos e para os outros através do nosso crescimento moral. O resultado final (v. 11) é que nos será "amplamente concedida a entrada no reino eterno de nosso Senhor e Salvador Jesus Cristo" (uma chegada triunfal, não apenas escapando do fogo).`
      }
    ],
    conclusion: `2 Pedro 1:3-11 destrói a ideia de um cristianismo passivo. Deus nos equipou com o Seu próprio poder e promessas, mas Ele espera que entremos na academia espiritual e exercitemos a nossa fé com diligência. A certeza da nossa salvação não é encontrada apenas olhando para o passado, mas observando o fruto presente do nosso caráter em transformação.`
  },
  {
    id: '2pe_3_8_13',
    bookId: '2PE',
    chapter: 3,
    startVerse: 8,
    endVerse: 13,
    title: 'A Promessa da Vinda do Senhor',
    theme: 'A Paciência de Deus, o Dia do Julgamento e a Vida Santa',
    introduction: `No capítulo 3 da sua segunda carta, Pedro confronta os "escarnecedores" que zombavam da promessa da Segunda Vinda de Cristo. Eles argumentavam que, como muito tempo havia passado e o mundo continuava o mesmo, Jesus nunca voltaria. Pedro responde a esse ceticismo explicando a perspectiva de Deus sobre o tempo, o verdadeiro motivo da aparente "demora" e a certeza absoluta do julgamento cósmico final. Ele usa essa realidade escatológica não para satisfazer a curiosidade sobre o futuro, mas para exigir santidade radical no presente.`,
    points: [
      {
        verseRef: 'v. 8-9',
        title: 'O Tempo de Deus e a Paciência da Graça',
        description: `A Razão da Demora. Pedro corrige a visão humana do tempo: "um dia para o Senhor é como mil anos, e mil anos como um dia" (v. 8). Deus não está preso ao nosso calendário; Ele transcende o tempo. Portanto, o que parece um longo atraso para nós é apenas um instante para Deus. O versículo 9 revela o coração de Deus: "O Senhor não retarda a sua promessa... mas é longânimo para conosco, não querendo que alguns se percam, senão que todos venham a arrepender-se". A "demora" da Segunda Vinda não é sinal de impotência ou esquecimento divino, mas uma extensão da Sua misericórdia. Cada dia que Jesus não volta é mais um dia de graça concedido para que pecadores se arrependam e sejam salvos.`
      },
      {
        verseRef: 'v. 10',
        title: 'O Dia do Senhor e a Dissolução Cósmica',
        description: `O Ladrão de Noite e o Fogo Purificador. Apesar da paciência de Deus, o julgamento é inevitável: "Mas o dia do Senhor virá como o ladrão de noite". A vinda será repentina, inesperada e inescapável para os que não estiverem preparados. Pedro descreve a magnitude desse evento em termos cósmicos: "no qual os céus passarão com grande estrondo, e os elementos, ardendo, se desfarão, e a terra, e as obras que nela há, se queimarão". O universo físico atual, manchado pelo pecado, será purificado e desfeito pelo fogo (assim como o mundo antigo foi destruído pela água no dilúvio). Todas as realizações humanas, impérios e riquezas serão reduzidos a cinzas.`
      },
      {
        verseRef: 'v. 11-13',
        title: 'A Implicação Ética e os Novos Céus',
        description: `A Santidade à Luz da Eternidade. A profecia bíblica sempre tem um propósito prático. Pedro pergunta (v. 11): "Havendo, pois, de perecer todas estas coisas, que pessoas vos convém ser em santo trato, e piedade?". Se o mundo material e tudo o que as pessoas idolatram será destruído, é loucura viver para essas coisas. Devemos viver vidas santas, "aguardando, e apressando-vos para a vinda do dia de Deus" (v. 12). A nossa esperança não termina na destruição, mas na recriação (v. 13): "Mas nós, segundo a sua promessa, aguardamos novos céus e nova terra, em que habita a justiça". O nosso destino é um universo restaurado, onde o pecado e a injustiça não existirão mais.`
      }
    ],
    conclusion: `A mensagem de Pedro sobre o fim dos tempos é um poderoso antídoto contra o materialismo e a complacência. Não devemos confundir a paciência de Deus com a Sua ausência. O Dia do Senhor virá. Saber que este mundo será purificado pelo fogo deve nos libertar do amor às coisas terrenas e nos motivar a investir a nossa vida na santidade, na piedade e na proclamação do evangelho, enquanto aguardamos o nosso lar eterno de perfeita justiça.`
  },
  {
    id: 'jam_1_2_8',
    bookId: 'JAM',
    chapter: 1,
    startVerse: 2,
    endVerse: 8,
    title: 'A Provação da Fé e a Busca pela Sabedoria',
    theme: 'O Propósito do Sofrimento e a Oração com Fé Inabalável',
    introduction: `A Epístola de Tiago, frequentemente chamada de "os Provérbios do Novo Testamento", é um manual de cristianismo prático. Tiago começa a sua carta com um dos mandamentos mais contraintuitivos da Bíblia: considerar motivo de grande alegria passar por provações. Ele não está promovendo o masoquismo ou a negação da dor, mas revelando a matemática espiritual de Deus: as provações têm um propósito divino de forjar o nosso caráter. E quando o sofrimento nos deixa confusos e sem saber o que fazer, Deus nos oferece uma fonte inesgotável de sabedoria, desde que a peçamos com fé.`,
    points: [
      {
        verseRef: 'v. 2-4',
        title: 'A Matemática da Provação e a Obra da Paciência',
        description: `Alegria no Fogo. Tiago ordena: "Meus irmãos, tende grande gozo quando cairdes em várias tentações (provações)". A alegria não está na dor em si, mas no resultado que ela produz. O versículo 3 explica o processo: "sabendo que a prova da vossa fé opera a paciência (perseverança)". A fé não testada é uma fé não confiável. As provações são a academia onde o músculo da perseverança é desenvolvido. O versículo 4 mostra o objetivo final: "Tenha, porém, a paciência a sua obra perfeita, para que sejais perfeitos e completos, sem faltar em coisa alguma". Deus usa o sofrimento para nos amadurecer ("perfeitos" aqui significa maduros, completos), moldando o nosso caráter à imagem de Cristo.`
      },
      {
        verseRef: 'v. 5',
        title: 'A Oração por Sabedoria e a Generosidade de Deus',
        description: `O Recurso na Confusão. As provações frequentemente nos deixam desorientados, sem saber como agir ou entender o propósito de Deus. Tiago oferece a solução: "E, se algum de vós tem falta de sabedoria, peça-a a Deus". A sabedoria bíblica não é apenas conhecimento intelectual, mas a capacidade de ver a vida (e o sofrimento) da perspectiva de Deus e tomar as decisões corretas. A promessa de Tiago sobre o caráter de Deus é maravilhosa: Ele "a todos dá liberalmente, e o não lança em rosto (sem censura)". Deus não é um doador mesquinho que nos humilha por precisarmos de ajuda; Ele é um Pai generoso que se alegra em dar sabedoria aos Seus filhos quando eles pedem.`
      },
      {
        verseRef: 'v. 6-8',
        title: 'A Fé Inabalável e o Perigo da Mente Dúbia',
        description: `A Condição para Receber. Há, no entanto, uma condição crucial para a oração respondida: "Peça-a, porém, com fé, em nada duvidando" (v. 6). A dúvida aqui não é uma luta intelectual honesta, mas uma lealdade dividida (querer a Deus, mas também querer o mundo). Tiago compara a pessoa que duvida à "onda do mar, que é levada pelo vento, e lançada de uma para outra parte" (instável, sem direção, controlada pelas circunstâncias). O veredito sobre essa pessoa é severo (v. 7-8): "Não pense tal homem que receberá do Senhor alguma coisa. O homem de coração dobre (mente dividida) é inconstante em todos os seus caminhos". Deus exige confiança exclusiva no Seu caráter e na Sua bondade.`
      }
    ],
    conclusion: `Tiago 1:2-8 transforma a nossa visão sobre o sofrimento. As provações não são becos sem saída, mas ferramentas nas mãos de um Deus amoroso para nos tornar espiritualmente maduros. Quando o fogo da provação nos cegar, não devemos entrar em pânico, mas dobrar os joelhos e pedir sabedoria a um Pai generoso, confiando nEle com um coração indiviso e uma fé inabalável.`
  },
  {
    id: 'jam_1_19_27',
    bookId: 'JAM',
    chapter: 1,
    startVerse: 19,
    endVerse: 27,
    title: 'Ouvintes e Praticantes da Palavra',
    theme: 'A Verdadeira Religião e o Perigo do Autoengano',
    introduction: `Tiago é implacável contra a religião hipócrita e teórica. Nesta seção, ele aborda a nossa relação com a Palavra de Deus. Não basta apenas ouvir a Palavra, discuti-la teologicamente ou admirá-la; a Palavra deve ser recebida com mansidão e, crucialmente, deve ser obedecida na prática. Tiago usa a poderosa metáfora de um espelho para mostrar o absurdo de ouvir a verdade sobre nós mesmos e não fazer nada a respeito. Ele conclui definindo a "verdadeira religião" não em termos de rituais, mas de controle da língua, compaixão social e pureza moral.`,
    points: [
      {
        verseRef: 'v. 19-21',
        title: 'A Prontidão para Ouvir e a Mansidão para Receber',
        description: `Preparando o Solo do Coração. Tiago estabelece três regras de ouro para a comunicação e para a recepção da Palavra: "todo o homem seja pronto para ouvir, tardio para falar, tardio para se irar" (v. 19). A ira humana, frequentemente justificada como "ira justa", raramente produz "a justiça de Deus" (v. 20). Para que a Palavra de Deus crie raízes em nós, precisamos preparar o solo do nosso coração (v. 21): "rejeitando toda a imundícia e superfluidade de malícia". O pecado bloqueia a audição espiritual. Somente após essa limpeza podemos "receber com mansidão a palavra em vós enxertada, a qual pode salvar as vossas almas". A atitude correta diante da Bíblia é a submissão humilde.`
      },
      {
        verseRef: 'v. 22-25',
        title: 'O Espelho da Palavra e o Perigo do Autoengano',
        description: `A Ação Exigida. O versículo 22 é o coração da epístola: "E sede cumpridores da palavra, e não somente ouvintes, enganando-vos a vós mesmos". Ouvir sermões sem mudar de vida é a pior forma de autoengano. Tiago ilustra isso com o homem que olha o seu rosto natural num espelho (a Palavra de Deus revela quem realmente somos), vê a sujeira ou a desordem, mas vai embora e "logo se esquece de como era" (v. 23-24), sem fazer nenhuma correção. Em contraste (v. 25), aquele que "atenta bem para a lei perfeita da liberdade" (o evangelho que transforma) e persevera na obediência prática, "esse tal será bem-aventurado no seu feito". A bênção de Deus não está no ouvir, mas no fazer.`
      },
      {
        verseRef: 'v. 26-27',
        title: 'A Religião Pura e Imaculada',
        description: `A Prova Prática da Fé. Tiago oferece três testes práticos para verificar se a religião de alguém é genuína ou inútil. 1) O Teste da Língua (v. 26): "Se alguém entre vós cuida ser religioso, e não refreia a sua língua... a sua religião é vã". A espiritualidade que não controla as palavras (fofoca, ira, mentira) é uma farsa. 2) O Teste da Compaixão (v. 27a): A religião pura diante de Deus é "visitar os órfãos e as viúvas nas suas tribulações". O amor a Deus deve se traduzir em cuidado prático pelos mais vulneráveis e marginalizados da sociedade. 3) O Teste da Pureza (v. 27b): "e guardar-se da corrupção do mundo". A verdadeira fé mantém a santidade moral em meio a uma cultura caída.`
      }
    ],
    conclusion: `A mensagem de Tiago é um antídoto contra o cristianismo de fachada. Deus não está impressionado com o nosso conhecimento bíblico, com as nossas anotações de sermões ou com a nossa eloquência teológica, se essas coisas não resultarem em obediência. A verdadeira marca de que a Palavra de Deus nos salvou é uma vida caracterizada por palavras controladas, mãos estendidas aos necessitados e um coração incontaminado pelo mundo.`
  },
  {
    id: 'heb_1_1_4',
    bookId: 'HEB',
    chapter: 1,
    startVerse: 1,
    endVerse: 4,
    title: 'A Supremacia da Revelação do Filho',
    theme: 'A Identidade Divina, a Obra Criadora e a Exaltação de Jesus Cristo',
    introduction: `O livro de Hebreus começa com um dos prólogos mais majestosos e teologicamente densos de toda a Escritura. Escrito para cristãos judeus que estavam sofrendo perseguição e sendo tentados a abandonar a fé em Cristo para voltar às sombras do judaísmo, o autor não começa com exortações, mas com uma declaração avassaladora sobre a supremacia absoluta de Jesus. Os primeiros quatro versículos estabelecem a tese central do livro: Jesus Cristo não é apenas mais um profeta, um mestre ou um anjo; Ele é a revelação final, definitiva e suprema de Deus, o Criador, Sustentador e Purificador do universo.`,
    points: [
      {
        verseRef: 'v. 1-2a',
        title: 'A Revelação Progressiva e a Palavra Final',
        description: `Dos Profetas ao Filho. O autor contrasta a revelação do Antigo Testamento com a do Novo. No passado, Deus falou aos pais "pelos profetas, a muitas vezes e de muitas maneiras" (através de visões, sonhos, anjos, leis, tipos). A revelação antiga era verdadeira, mas era fragmentada e progressiva. No entanto, "nestes últimos dias" (a era messiânica inaugurada por Cristo), Deus "a nós nos falou pelo Filho". Jesus não é apenas um mensageiro que traz a Palavra de Deus; Ele é a própria Palavra de Deus encarnada. A revelação em Cristo é final, completa e insuperável. Não há nada mais que Deus precise dizer que já não tenha dito em Seu Filho.`
      },
      {
        verseRef: 'v. 2b-3a',
        title: 'A Identidade Cósmica e Divina do Filho',
        description: `O Criador e Sustentador. O autor empilha sete descrições gloriosas de Cristo. 1) Ele é o "herdeiro de tudo" (o dono do universo). 2) "Pelo qual também fez o universo" (Cristo é o agente ativo da criação). 3) Ele é "o resplendor da sua glória" (assim como os raios de sol não podem ser separados do sol, Cristo é a irradiação da glória de Deus). 4) Ele é "a expressa imagem do seu ser" (a representação exata da natureza de Deus; ver Jesus é ver Deus). 5) Ele "sustenta todas as coisas pela palavra do seu poder" (Cristo não apenas criou o universo como um relojoeiro que o abandona, mas Ele o mantém existindo e funcionando a cada milissegundo pelo Seu poder).`
      },
      {
        verseRef: 'v. 3b-4',
        title: 'A Obra Redentora e a Exaltação Suprema',
        description: `A Purificação e o Trono. Após descrever a majestade cósmica de Cristo, o autor foca na Sua obra redentora: "havendo feito por si mesmo a purificação dos nossos pecados". O Criador do universo desceu para lidar com a nossa sujeira moral na cruz. Tendo completado essa obra com sucesso, Ele "assentou-se à destra da Majestade nas alturas". No tabernáculo terrestre, não havia cadeiras, pois o trabalho dos sacerdotes nunca terminava. O fato de Jesus ter se assentado prova que o Seu sacrifício foi definitivo e aceito. O versículo 4 conclui afirmando que Ele foi "feito tanto mais excelente do que os anjos", herdando um nome (Senhor/Filho) superior ao deles, provando a Sua divindade absoluta.`
      }
    ],
    conclusion: `O prólogo de Hebreus nos chama a tirar os olhos das sombras e fixá-los na realidade suprema: Jesus Cristo. Se Ele é o Criador que sustenta o universo com a Sua palavra, a expressão exata de Deus e Aquele que purificou os nossos pecados, é loucura espiritual buscar salvação, revelação ou satisfação em qualquer outra pessoa, anjo ou sistema religioso. Cristo é suficiente e supremo.`
  },
  {
    id: 'heb_4_14_16',
    bookId: 'HEB',
    chapter: 4,
    startVerse: 14,
    endVerse: 16,
    title: 'O Nosso Grande Sumo Sacerdote',
    theme: 'A Simpatia de Cristo e o Acesso Confiante ao Trono da Graça',
    introduction: `Um dos temas centrais da Epístola aos Hebreus é o sacerdócio de Cristo. No Antigo Testamento, o sumo sacerdote era o mediador entre Deus e o povo, mas ele era falho, mortal e precisava oferecer sacrifícios pelos seus próprios pecados antes de interceder pelos outros. Em Hebreus 4, o autor nos apresenta a Jesus como o nosso "grande sumo sacerdote", infinitamente superior a Arão. Esta passagem oferece um conforto inestimável aos crentes em luta: o nosso Salvador não está distante, frio ou indiferente às nossas fraquezas. Ele experimentou a nossa humanidade, venceu a tentação e agora nos convida a nos aproximarmos do Seu trono com total confiança.`,
    points: [
      {
        verseRef: 'v. 14',
        title: 'O Grande Sumo Sacerdote e a Firmeza da Confissão',
        description: `A Ascensão e a Posição de Cristo. O autor declara: "Visto que temos um grande sumo sacerdote, Jesus, Filho de Deus, que penetrou nos céus, retenhamos firmemente a nossa confissão". O sumo sacerdote terreno entrava no Santo dos Santos terrestre (uma tenda) uma vez por ano. Jesus, o Filho de Deus, atravessou os céus atmosféricos e estelares e entrou na própria presença de Deus no céu, abrindo o caminho para nós de forma definitiva. Por causa de quem Jesus é e de onde Ele está, os crentes são exortados a não desistirem da fé sob perseguição, mas a reterem firmemente a sua confissão pública de Cristo.`
      },
      {
        verseRef: 'v. 15',
        title: 'A Simpatia Divina e a Vitória sobre a Tentação',
        description: `Tentado em Tudo, mas Sem Pecado. A grandeza de Jesus não O torna inacessível; pelo contrário, torna-O perfeitamente compreensivo. "Porque não temos um sumo sacerdote que não possa compadecer-se das nossas fraquezas". A palavra "compadecer-se" (sympathesai) significa sofrer junto, sentir a mesma dor. Jesus não nos olha com desprezo do céu. Ele se encarnou e "em tudo foi tentado, mas sem pecado". Ele experimentou a fome, a traição, a dor física, a angústia emocional e os ataques diretos de Satanás. Porque Ele resistiu à tentação até o fim (sem nunca ceder), Ele sentiu o peso total da tentação de uma forma que nós (que frequentemente cedemos cedo) nunca sentimos. Ele entende a nossa luta perfeitamente.`
      },
      {
        verseRef: 'v. 16',
        title: 'O Trono da Graça e o Socorro Oportuno',
        description: `Achegando-se com Confiança. A conclusão lógica da simpatia e da posição de Cristo é um convite maravilhoso: "Cheguemos, pois, com confiança ao trono da graça". No Antigo Testamento, aproximar-se do trono de Deus (a arca da aliança) inspirava terror e medo de morte. Por causa do sangue de Cristo, o trono de julgamento tornou-se um "trono da graça" para os crentes. A palavra "confiança" (parrhesia) significa liberdade de fala, a ousadia de um filho falando com o pai. O propósito de nos aproximarmos é duplo: "para que possamos alcançar misericórdia (para os nossos fracassos e pecados passados) e achar graça, a fim de sermos ajudados em tempo oportuno (poder e força para as lutas presentes e futuras)".`
      }
    ],
    conclusion: `Hebreus 4:14-16 é o antídoto perfeito para o desespero e a vergonha. Quando pecamos ou somos esmagados pelas pressões da vida, o nosso instinto é fugir de Deus. Mas o evangelho nos diz que temos um Sumo Sacerdote que entende a nossa dor e já pagou a nossa dívida. Não precisamos nos esconder; somos convidados a correr com confiança para o trono do universo, sabendo que ali não encontraremos condenação, mas misericórdia e graça para a hora da nossa maior necessidade.`
  },
  {
    id: 'heb_11_1_6',
    bookId: 'HEB',
    chapter: 11,
    startVerse: 1,
    endVerse: 6,
    title: 'A Natureza e a Necessidade da Fé',
    theme: 'A Convicção no Invisível e o Caminho para Agradar a Deus',
    introduction: `O capítulo 11 de Hebreus é universalmente conhecido como a "Galeria dos Heróis da Fé". Escrito para encorajar cristãos que estavam desanimando sob perseguição, o autor não lhes oferece uma nova teologia, mas os lembra do caminho trilhado por todos os santos do Antigo Testamento: o caminho da fé. Antes de listar os grandes exemplos históricos (Abraão, Moisés, etc.), os primeiros seis versículos definem a natureza essencial da fé e a sua necessidade absoluta para o relacionamento com Deus. A fé bíblica não é um salto no escuro, um pensamento positivo ou uma negação da realidade, mas uma convicção profunda baseada no caráter dAquele que prometeu.`,
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Definição da Fé e o Testemunho dos Antigos',
        description: `A Certeza e a Prova. O versículo 1 fornece a definição clássica: "Ora, a fé é o firme fundamento (ou a certeza, a substância) das coisas que se esperam, e a prova (ou convicção) das coisas que se não veem". A fé dá substância presente às promessas futuras de Deus. Ela trata as realidades invisíveis (como o céu, o perdão, o julgamento) como fatos absolutos que governam o nosso comportamento hoje. A fé é o "sexto sentido" da alma que percebe a realidade espiritual. O versículo 2 acrescenta: "Porque por ela os antigos alcançaram bom testemunho". Deus aprovou os patriarcas não porque eles eram perfeitos, mas porque eles confiaram nEle.`
      },
      {
        verseRef: 'v. 3',
        title: 'A Fé e a Compreensão da Criação',
        description: `A Palavra que Forma o Universo. O autor dá o primeiro exemplo prático de fé, que se aplica a todos os crentes: "Pela fé entendemos que os mundos pela palavra de Deus foram criados; de maneira que aquilo que se vê não foi feito do que é aparente". A ciência pode observar e medir o universo existente, mas não pode explicar a sua origem absoluta a partir do nada (creatio ex nihilo). Somente pela fé na revelação divina (Gênesis 1) podemos entender que a matéria visível foi trazida à existência pelo comando invisível de Deus. Se podemos confiar em Deus para a criação do universo, podemos confiar nEle para a nossa salvação e futuro.`
      },
      {
        verseRef: 'v. 4-6',
        title: 'A Necessidade Absoluta da Fé para Agradar a Deus',
        description: `Abel, Enoque e o Princípio Fundamental. O autor cita Abel (que ofereceu um sacrifício melhor pela fé) e Enoque (que andou com Deus e foi transladado sem ver a morte). O testemunho sobre Enoque foi que "agradou a Deus". Isso leva à declaração teológica central do versículo 6: "Ora, sem fé é impossível agradar-lhe". Deus não se impressiona com a nossa moralidade, riqueza ou rituais religiosos se eles não forem motivados pela confiança nEle. O autor explica os dois requisitos mínimos da fé que se aproxima de Deus: 1) "creia que ele existe" (não apenas um assentimento intelectual, mas crer no Deus revelado nas Escrituras); 2) "e que é galardoador dos que o buscam" (crer que Deus é bom, que Ele recompensa a busca sincera e que Ele cumpre as Suas promessas).`
      }
    ],
    conclusion: `Hebreus 11:1-6 nos ensina que a fé é a moeda do Reino de Deus. É impossível ter um relacionamento com o Criador sem ela. A verdadeira fé não é fechar os olhos para a realidade, mas abrir os olhos espirituais para a realidade suprema: as promessas infalíveis de Deus. É essa convicção no invisível que nos dá força para perseverar no visível, sabendo que Deus sempre recompensa aqueles que O buscam de todo o coração.`
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
  console.log('Successfully added 10 more new pericopes for 1/2 Peter, James, and Hebrews.');
} else {
  console.error('Could not find the end of the pericopes array.');
}
