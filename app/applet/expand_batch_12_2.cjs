const fs = require('fs');

const expandedPericopes = [
  {
    id: 'jos_3_1_17',
    bookId: 'JOS',
    chapter: 3,
    startVerse: 1,
    endVerse: 17,
    title: 'A Travessia do Jordão',
    theme: 'O Passo de Fé, a Arca da Aliança e o Milagre das Águas',
    introduction: 'Quarenta anos após a travessia do Mar Vermelho, a nova geração de Israel enfrenta o seu próprio obstáculo aquático: o rio Jordão. Josué 3 descreve este momento monumental. Diferente do Mar Vermelho, onde Moisés levantou o cajado e as águas se abriram antes de o povo marchar, a travessia do Jordão exigiu um nível diferente de fé. As águas não se abririam até que os sacerdotes pisassem nelas. Este episódio estabelece Josué como o líder escolhido por Deus e demonstra que a posse da promessa exige que coloquemos os nossos pés na água antes de vermos o milagre.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Ordem de Marcha e o Foco na Arca',
        description: 'Josué levanta-se de madrugada e o povo acampa junto ao Jordão por três dias. A instrução dos oficiais é clara: "Quando virdes a arca da aliança do Senhor... partireis do vosso lugar, e ireis após ela". A Arca (símbolo da presença de Deus) deve ir à frente, com uma distância de dois mil côvados (cerca de 900 metros) entre ela e o povo. O motivo dessa distância é profundo: "para que saibais o caminho pelo qual haveis de ir; porquanto por este caminho nunca passastes antes". A presença de Deus deve liderar, não seguir.'
      },
      {
        verseRef: 'v. 7-13',
        title: 'A Santificação e a Promessa do Milagre',
        description: 'Josué dá uma ordem crucial: "Santificai-vos, porque amanhã fará o Senhor maravilhas no meio de vós". O milagre exige preparação espiritual. Deus diz a Josué que este dia o engrandeceria perante Israel, provando que Deus estava com ele assim como esteve com Moisés. Josué profetiza ao povo que, assim que as plantas dos pés dos sacerdotes que levam a Arca tocarem as águas do Jordão, as águas que vêm de cima se "pararão num montão".'
      },
      {
        verseRef: 'v. 14-17',
        title: 'O Passo de Fé e o Rio Seco',
        description: 'O texto destaca um detalhe geográfico que aumenta a magnitude do milagre: "o Jordão transbordava sobre todas as suas ribanceiras, todos os dias da sega". Era a época das cheias da primavera. O rio era violento e intransponível. Mas, no momento em que os pés dos sacerdotes se molharam na borda das águas, as águas que desciam pararam e se amontoaram muito longe dali, na cidade de Adã. Os sacerdotes pararam firmes no meio do Jordão em seco, e todo o Israel passou a pé enxuto.'
      }
    ],
    conclusion: 'A travessia do Jordão é uma lição poderosa sobre a fé em ação. Deus frequentemente espera que demos o primeiro passo de obediência antes de intervir sobrenaturalmente. Se os sacerdotes tivessem ficado na margem esperando as águas se abrirem, eles nunca teriam cruzado. A Arca parada no meio do rio seco é uma imagem da fidelidade de Deus segurando as águas do caos e do juízo para que o Seu povo possa passar em segurança. Espiritualmente, cruzar o Jordão representa deixar a vida de peregrinação no deserto (derrota e carnalidade) e entrar na vida de vitória e posse das promessas em Cristo.'
  },
  {
    id: 'jos_4_1_24',
    bookId: 'JOS',
    chapter: 4,
    startVerse: 1,
    endVerse: 24,
    title: 'As Doze Pedras do Memorial',
    theme: 'A Memória da Graça, o Testemunho Geracional e o Temor do Senhor',
    introduction: 'Assim que toda a nação termina de cruzar o Jordão em seco, Deus dá uma ordem surpreendente. Antes que as águas voltem ao seu curso normal, Israel deve construir um memorial. Josué 4 descreve a retirada de doze pedras do meio do leito do rio para serem erguidas em Gilgal. Deus sabe que a memória humana é falha e que as vitórias de hoje são facilmente esquecidas amanhã. Este capítulo enfatiza a importância de criar marcos físicos e espirituais para garantir que a história da redenção seja contada às próximas gerações.',
    points: [
      {
        verseRef: 'v. 1-9',
        title: 'A Ordem Divina e as Doze Pedras do Leito do Rio',
        description: 'Deus ordena a Josué que escolha doze homens (um de cada tribo) para pegar doze pedras do meio do Jordão, exatamente do lugar onde os pés dos sacerdotes estavam parados. Eles devem levar essas pedras para o lugar onde acampariam naquela noite (Gilgal). Josué também levanta outras doze pedras no meio do rio, onde os sacerdotes estavam, como um memorial submerso. As pedras retiradas do rio representam a nação inteira (12 tribos) sendo resgatada da morte e trazida para a nova vida.'
      },
      {
        verseRef: 'v. 10-18',
        title: 'A Conclusão da Travessia e o Retorno das Águas',
        description: 'Os sacerdotes com a Arca permanecem no meio do rio até que tudo se cumpra. Mais de 40.000 homens armados das tribos de Rúben, Gade e Manassés passam à frente para a batalha. Naquele dia, o Senhor engrandece Josué. Finalmente, Josué ordena que os sacerdotes subam do Jordão. Assim que as plantas dos seus pés tocam a terra seca, as águas do Jordão retornam ao seu lugar e transbordam sobre as ribanceiras como antes. O milagre foi cirúrgico e perfeitamente cronometrado.'
      },
      {
        verseRef: 'v. 19-24',
        title: 'O Propósito do Memorial: Para que os Filhos Saibam',
        description: 'Josué levanta as doze pedras em Gilgal e explica o seu propósito. No futuro, quando os filhos perguntarem: "Que significam estas pedras?", os pais deverão contar a história do milagre: "Israel passou em seco este Jordão... como o Senhor vosso Deus fez ao mar Vermelho". O memorial tinha dois objetivos finais (v. 24): 1) "Para que todos os povos da terra conheçam a mão do Senhor, que é forte" (testemunho evangelístico às nações); 2) "Para que temais ao Senhor vosso Deus todos os dias" (reverência contínua do próprio Israel).'
      }
    ],
    conclusion: 'As doze pedras de Gilgal nos ensinam a importância de cultivar a memória espiritual. O esquecimento é o primeiro passo para a apostasia. Nós também precisamos de "pedras de memorial" em nossas vidas — diários, testemunhos públicos, celebrações da Ceia do Senhor (o nosso maior memorial) — para nos lembrarmos de onde Deus nos tirou e dos "rios" que Ele abriu para nós. A fé cristã não é apenas uma experiência pessoal isolada; é uma história de redenção que temos a obrigação sagrada de contar aos nossos filhos, para que eles também aprendam a temer e confiar no Senhor.'
  },
  {
    id: 'jos_5_1_12',
    bookId: 'JOS',
    chapter: 5,
    startVerse: 1,
    endVerse: 12,
    title: 'A Circuncisão e a Páscoa em Gilgal',
    theme: 'A Renovação da Aliança, a Remoção do Opróbrio e o Fim do Maná',
    introduction: 'Israel cruzou o Jordão e está acampado em Gilgal, em pleno território inimigo. Estrategicamente, o próximo passo lógico seria um ataque surpresa imediato a Jericó. No entanto, Deus ordena uma pausa. Em Josué 5, antes de qualquer batalha militar, Israel precisa travar uma batalha espiritual. Eles precisam renovar a aliança através da circuncisão e celebrar a Páscoa. Este texto demonstra que a vitória na Terra Prometida não depende da força das armas, mas da pureza espiritual e do alinhamento total com a aliança de Deus.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Terror dos Inimigos e a Ordem da Circuncisão',
        description: 'Quando os reis cananeus ouvem sobre o milagre do Jordão, o coração deles se derrete de medo. É neste exato momento de vulnerabilidade tática que Deus ordena a Josué: "Faze facas de pederneira, e torna a circuncidar os filhos de Israel". A circuncisão incapacitaria todos os homens de guerra por vários dias (como em Gênesis 34). Foi um teste extremo de fé: eles teriam que confiar inteiramente na proteção de Deus enquanto estivessem fisicamente indefesos diante dos inimigos.'
      },
      {
        verseRef: 'v. 4-9',
        title: 'A Geração do Deserto e a Remoção do Opróbrio',
        description: 'O texto explica o motivo: a geração que saiu do Egito era circuncidada, mas todos os que nasceram durante os 40 anos no deserto não haviam sido circuncidados. A nação estava vivendo fora do sinal da aliança abraâmica. Após a obediência, Deus declara: "Hoje retirei de sobre vós o opróbrio do Egito". O lugar é chamado Gilgal (que soa como "rolar" em hebraico). O opróbrio (a vergonha da escravidão, da rebelião e da peregrinação sem rumo) foi finalmente "rolado" para longe.'
      },
      {
        verseRef: 'v. 10-12',
        title: 'A Celebração da Páscoa e a Cessação do Maná',
        description: 'Agora purificados e inseridos na aliança, eles celebram a Páscoa no dia catorze do mês. No dia seguinte, eles comem do fruto da terra de Canaã (pães asmos e espigas tostadas). O versículo 12 registra um marco histórico: "E cessou o maná no dia seguinte... e não tiveram mais os filhos de Israel maná; porém no mesmo ano comeram dos frutos da terra de Canaã". O milagre da provisão no deserto termina porque a promessa da abundância na terra começou.'
      }
    ],
    conclusion: 'Os eventos em Gilgal nos ensinam que Deus prioriza a nossa santificação acima do nosso serviço ou sucesso. Antes de conquistarmos "Jericós" em nossas vidas, precisamos passar por "Gilgal" — o lugar onde a nossa carne é cortada (a circuncisão do coração, Colossenses 2:11) e onde a nossa vergonha passada é removida pela graça de Deus. A celebração da Páscoa antes da batalha nos lembra que a nossa vitória se baseia no sangue do Cordeiro. E a cessação do maná nos ensina que Deus muda os Seus métodos de provisão; devemos estar prontos para deixar os milagres do deserto para trás e começar a trabalhar e colher os frutos da maturidade espiritual.'
  },
  {
    id: 'jos_5_13_15',
    bookId: 'JOS',
    chapter: 5,
    startVerse: 13,
    endVerse: 15,
    title: 'O Príncipe do Exército do Senhor',
    theme: 'A Teofania, a Submissão do Líder e a Verdadeira Liderança da Batalha',
    introduction: 'Com a aliança renovada em Gilgal, Josué se aproxima de Jericó, provavelmente estudando as imensas muralhas e planejando a estratégia militar. É neste momento de tensão pré-batalha que ocorre um dos encontros mais misteriosos e cruciais do Antigo Testamento. Josué se depara com um homem com uma espada desembainhada. Este breve texto (Josué 5:13-15) muda completamente a perspectiva da conquista de Canaã. Ele revela que a guerra não é de Israel contra os cananeus, mas do próprio Deus contra a iniquidade, e que Josué não é o comandante supremo, mas o segundo em comando.',
    points: [
      {
        verseRef: 'v. 13',
        title: 'O Encontro e a Pergunta de Josué',
        description: 'Josué levanta os olhos e vê um homem em pé diante dele, com uma espada nua na mão. Como um general vigilante, Josué vai até ele e faz a pergunta lógica de identificação militar: "És tu dos nossos, ou dos nossos inimigos?". Josué vê o conflito em termos binários: ou você está do lado de Israel, ou está do lado de Jericó. Ele presume que a guerra gira em torno dos interesses da sua nação.'
      },
      {
        verseRef: 'v. 14',
        title: 'A Resposta Inesperada e a Revelação da Identidade',
        description: 'A resposta do homem destrói a dicotomia de Josué: "Não; mas venho agora como príncipe do exército do Senhor". Ele não tomou o lado de Israel; Ele veio para assumir o comando. A questão não era se Deus estava do lado de Josué, mas se Josué estava do lado de Deus. Reconhecendo a divindade (ou a autoridade angelical suprema) do mensageiro, Josué cai com o rosto em terra, adora e pergunta: "Que diz meu senhor ao seu servo?". O general de Israel submete-se instantaneamente ao verdadeiro Comandante.'
      },
      {
        verseRef: 'v. 15',
        title: 'O Solo Santo e a Preparação para a Vitória',
        description: 'O Príncipe do exército do Senhor dá uma ordem que ecoa exatamente a experiência de Moisés na sarça ardente (Êxodo 3:5): "Descalça os sapatos de teus pés, porque o lugar em que estás é santo". Josué obedece. A presença de Deus transforma um campo de batalha em um santuário. Antes de receber as instruções táticas para derrubar os muros de Jericó (que virão no capítulo 6), Josué precisa entender que a vitória virá através da adoração e da submissão à santidade de Deus.'
      }
    ],
    conclusion: 'O encontro com o Príncipe do exército do Senhor (frequentemente interpretado como uma Cristofania, uma aparição de Cristo antes da encarnação) é a chave para entender todo o livro de Josué. Muitas vezes, em nossos conflitos e projetos, perguntamos a Deus: "O Senhor está do meu lado ou do lado dos meus adversários?". A resposta de Deus é: "Não. Eu vim para assumir o comando". Deus não existe para abençoar as nossas agendas; nós existimos para nos submetermos à agenda dEle. A verdadeira vitória espiritual não começa com estratégias brilhantes, mas tirando os sapatos em adoração e reconhecendo que a batalha pertence ao Senhor.'
  },
  {
    id: 'jos_7_1_26',
    bookId: 'JOS',
    chapter: 7,
    startVerse: 1,
    endVerse: 26,
    title: 'O Pecado de Acã e a Derrota em Ai',
    theme: 'O Pecado Oculto, a Solidariedade da Culpa e a Santidade de Deus',
    introduction: 'Após a vitória espetacular e milagrosa em Jericó (cap. 6), Israel estava no auge da confiança. A próxima cidade, Ai, era pequena e parecia um alvo fácil. No entanto, Josué 7 narra uma derrota humilhante e chocante. O motivo não foi falha tática, mas um pecado oculto no acampamento. Acã havia desobedecido à ordem direta de Deus de não pegar nenhum despojo de Jericó (que era "anátema", consagrado à destruição). Este capítulo é um aviso severo de que o pecado privado de um indivíduo pode trazer consequências catastróficas para toda a comunidade da aliança.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Transgressão Oculta e a Derrota Humilhante',
        description: 'O capítulo começa com o veredito divino: "E prevaricaram os filhos de Israel no anátema". Embora apenas Acã tenha pecado, Deus vê a nação corporativamente. Josué, ignorando o pecado oculto, envia espias a Ai. Cheios de autoconfiança, eles sugerem enviar apenas dois ou três mil homens. O resultado é um desastre: os homens de Ai os derrotam, matam 36 israelitas e os perseguem. O coração do povo se derrete e se torna como água. A confiança carnal rapidamente se transforma em pânico.'
      },
      {
        verseRef: 'v. 6-15',
        title: 'O Clamor de Josué e a Revelação Divina',
        description: 'Josué rasga as vestes e cai com o rosto em terra diante da Arca, questionando por que Deus os trouxe até ali para serem destruídos. A resposta de Deus é dura: "Levanta-te; por que estás prostrado assim sobre o teu rosto? Israel pecou...". Deus explica que eles roubaram, mentiram e esconderam o anátema. Deus declara que não será mais com eles a menos que destruam o anátema. A derrota militar foi apenas o sintoma; a causa era a quebra da aliança. Deus ordena um processo de santificação e sorteio para descobrir o culpado.'
      },
      {
        verseRef: 'v. 16-26',
        title: 'A Confissão de Acã e o Vale de Acor',
        description: 'No dia seguinte, o sorteio divino aponta implacavelmente para a tribo de Judá, a família dos zeraítas, a casa de Zabdi, e finalmente, Acã. Josué pede que ele dê glória a Deus confessando a verdade. Acã confessa o processo da tentação: "vi... cobicei... e tomei" (uma capa babilônica, prata e ouro), e os escondeu na terra debaixo de sua tenda. O juízo é executado: Acã, sua família, seus bens e o anátema são apedrejados e queimados no Vale de Acor (Vale da Perturbação). Só então a ira do Senhor se aplacou.'
      }
    ],
    conclusion: 'A história de Acã é uma das mais perturbadoras do Antigo Testamento, mas ensina verdades vitais. Primeiro, não existe "pecado particular" na igreja; o pecado oculto de um membro enfraquece todo o corpo (1 Coríntios 5:6). Segundo, revela a anatomia da tentação (ver, cobiçar, tomar, esconder), o mesmo padrão de Eva no Éden e de Davi com Bate-Seba. Terceiro, mostra que Deus não tolera a desobediência, mesmo após grandes vitórias. O Vale de Acor tornou-se um memorial de juízo, mas profeticamente, Oséias (2:15) promete que Deus transformaria o "Vale de Acor em porta de esperança", apontando para a graça restauradora que triunfa sobre o nosso pecado.'
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
console.log(`Expanded ${replacedCount} pericopes (Batch 12.2).`);
