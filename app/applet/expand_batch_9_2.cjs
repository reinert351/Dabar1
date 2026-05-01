const fs = require('fs');

const expandedPericopes = [
  {
    id: 'num_12_1_15',
    bookId: 'NUM',
    chapter: 12,
    startVerse: 1,
    endVerse: 15,
    title: 'A Rebelião de Miriã e Arão',
    theme: 'O Ciúme na Liderança, a Defesa Divina e a Mansidão de Moisés',
    introduction: 'A murmuração que começou com o "vulgo" (cap. 11) agora atinge o círculo mais íntimo da liderança de Israel. Em Números 12, Miriã (a profetisa) e Arão (o Sumo Sacerdote) se voltam contra seu irmão mais novo, Moisés. Usando o casamento de Moisés como pretexto, eles atacam a sua autoridade profética exclusiva. Este capítulo é uma lição profunda sobre os perigos da inveja espiritual, a natureza da verdadeira mansidão e a forma como Deus defende aqueles que Ele chamou, punindo a rebelião mesmo quando ela vem dos líderes mais respeitados da nação.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Pretexto, o Ciúme e a Mansidão',
        description: 'Miriã e Arão falam contra Moisés por causa da "mulher cuxita" (etíope) que ele havia tomado. No entanto, o verdadeiro motivo da rebelião é revelado no versículo 2: "Falou porventura o Senhor somente por Moisés? Não falou também por nós?". Eles estavam com ciúmes da autoridade singular de Moisés, especialmente após a recente distribuição do Espírito para os setenta anciãos. O texto insere um parêntese crucial: "E era o homem Moisés mui manso, mais do que todos os homens que havia sobre a terra". Moisés não se defende; sua mansidão deixa a defesa inteiramente nas mãos de Deus.'
      },
      {
        verseRef: 'v. 4-9',
        title: 'A Intervenção e a Defesa Divina',
        description: 'Deus age imediatamente. Ele chama os três à Tenda da Congregação. O Senhor desce na coluna de nuvem e chama Arão e Miriã à frente. Deus faz uma distinção clara entre os profetas comuns e Moisés. Aos profetas, Deus fala em visões e sonhos; mas com Moisés, Deus fala "boca a boca, visão clara e não por enigmas", e ele vê a "semelhança do Senhor". Deus os repreende severamente: "Por que, pois, não tivestes temor de falar contra o meu servo, contra Moisés?". A ira do Senhor se acende contra eles.'
      },
      {
        verseRef: 'v. 10-15',
        title: 'O Juízo da Lepra e a Intercessão',
        description: 'Quando a nuvem se retira, o juízo é visível: Miriã está leprosa, branca como a neve. Como instigadora principal (o verbo no v. 1 está no feminino singular), ela recebe a punição. Arão, horrorizado, confessa o pecado e implora a Moisés que não a deixe morrer. Moisés, demonstrando a mesma mansidão do início, clama a Deus: "Ó Deus, rogo-te que a cures". Deus atende a oração, mas exige que a disciplina seja cumprida: Miriã deve ficar excluída do acampamento por sete dias, suportando a vergonha pública. A marcha de toda a nação é interrompida até que ela seja purificada.'
      }
    ],
    conclusion: 'A rebelião de Miriã e Arão nos ensina que o ciúme ministerial é um pecado destrutivo que atrai o juízo de Deus. Quando atacamos a autoridade que Deus estabeleceu, estamos atacando o próprio Deus. A atitude de Moisés é o padrão ouro para a liderança cristã: quando somos atacados injustamente, não precisamos nos defender com amargura ou vingança. A verdadeira mansidão confia que Deus é o nosso defensor. Além disso, a intercessão imediata de Moisés por Miriã mostra que o líder espiritual deve orar pela cura e restauração daqueles que o feriram, refletindo o coração perdoador de Cristo.'
  },
  {
    id: 'num_13_1_24',
    bookId: 'NUM',
    chapter: 13,
    startVerse: 1,
    endVerse: 24,
    title: 'O Envio dos Espias a Canaã',
    theme: 'A Exploração da Promessa, a Visão da Fé vs. a Visão da Carne',
    introduction: 'Israel finalmente chega a Cades-Barneia, na fronteira da Terra Prometida. A jornada pelo deserto deveria ter terminado aqui. Números 13 descreve o envio de doze líderes (um de cada tribo) para espiar a terra de Canaã. O que deveria ser uma missão de reconhecimento tático para planejar a conquista transforma-se no maior teste de fé da nação. Este texto ilustra o contraste brutal entre a realidade das promessas de Deus (a terra que mana leite e mel) e a realidade dos obstáculos humanos (os gigantes e as cidades fortificadas), forçando o povo a escolher qual realidade eles iriam crer.',
    points: [
      {
        verseRef: 'v. 1-16',
        title: 'A Ordem Divina e a Escolha dos Líderes',
        description: 'Deus diz a Moisés: "Envia homens que espiem a terra de Canaã, que eu hei de dar aos filhos de Israel". (Deuteronômio 1:22 revela que a ideia original de enviar espias partiu do povo, e Deus a permitiu). Moisés escolhe doze homens, todos eles "cabeças dos filhos de Israel" (líderes de destaque). Entre eles estão Oseias (da tribo de Efraim), a quem Moisés muda o nome para Josué ("Yahweh é salvação"), e Calebe (da tribo de Judá). A missão é confiada à elite da nação.'
      },
      {
        verseRef: 'v. 17-20',
        title: 'As Instruções da Missão',
        description: 'Moisés dá instruções detalhadas: eles devem subir pelo Neguebe até a região montanhosa e observar a terra. Devem avaliar o povo (se são fortes ou fracos, poucos ou muitos), as cidades (se são acampamentos abertos ou fortalezas) e a terra em si (se é fértil ou estéril, se tem árvores ou não). Moisés os encoraja: "Esforçai-vos, e tomai do fruto da terra". A missão não era para decidir *se* eles deveriam entrar, mas para descobrir *como* a terra era boa, a fim de encorajar a fé do povo.'
      },
      {
        verseRef: 'v. 21-24',
        title: 'A Exploração e o Cacho de Uvas de Escol',
        description: 'Os doze espias percorrem a terra de sul a norte durante quarenta dias. Eles chegam a Hebrom, uma cidade antiga onde viviam os descendentes de Anaque (gigantes). No vale de Escol, eles encontram a prova irrefutável da bondade de Deus: eles cortam um ramo com um único cacho de uvas tão grande e pesado que precisa ser carregado por dois homens numa vara, além de romãs e figos. A terra era exatamente como Deus havia prometido: abundante e fértil. A evidência da bênção estava literalmente em suas mãos.'
      }
    ],
    conclusion: 'O envio dos espias nos ensina que Deus não tem medo de que investiguemos Suas promessas; a terra realmente "mana leite e mel". No entanto, a exploração revela que as promessas de Deus frequentemente vêm acompanhadas de grandes obstáculos (cidades fortificadas e gigantes). A fé não nega a existência dos gigantes, mas foca no tamanho do cacho de uvas e, mais importante, no tamanho do Deus que prometeu a terra. Quando enfrentamos os desafios da vida cristã, devemos escolher se vamos carregar o fruto da promessa para encorajar os outros ou se vamos focar nos gigantes para espalhar o medo.'
  },
  {
    id: 'num_14_1_12',
    bookId: 'NUM',
    chapter: 14,
    startVerse: 1,
    endVerse: 12,
    title: 'A Rebelião do Povo e a Intercessão de Moisés',
    theme: 'O Pânico da Incredulidade, a Rejeição de Deus e a Oração que Salva',
    introduction: 'O relatório negativo de dez dos doze espias (Números 13:31-33) espalhou o terror pelo acampamento. Números 14:1-12 descreve a noite mais sombria da história de Israel no deserto. O medo dos gigantes cananeus transforma-se em uma rebelião aberta contra Moisés, contra Arão e, em última análise, contra o próprio Deus. A nação decide abortar o plano da redenção e voltar para a escravidão do Egito. Diante dessa apostasia total, a glória de Deus aparece com uma ameaça de aniquilação, e Moisés precisa interceder mais uma vez para salvar o povo da destruição.',
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Choro, a Rebelião e o Desejo de Voltar',
        description: 'A congregação inteira levanta a voz e chora a noite toda. A murmuração atinge o seu ápice: "Ah! se fôramos mortos na terra do Egito! ou, ah! se fôramos mortos neste deserto!". Eles acusam Deus de intenções malignas, dizendo que o Senhor os trouxe ali para caírem à espada e para que suas mulheres e filhos fossem saqueados. O pânico cega a razão. Eles tomam uma decisão fatal: "Levantemos um capitão, e voltemos para o Egito". Eles preferem a certeza da escravidão à incerteza da liberdade que exige fé.'
      },
      {
        verseRef: 'v. 5-10',
        title: 'O Apelo de Josué e Calebe e a Ameaça de Apedrejamento',
        description: 'Moisés e Arão caem sobre seus rostos diante do povo. Josué e Calebe, os únicos espias fiéis, rasgam suas vestes e fazem um apelo desesperado à fé: "A terra... é muitíssimo boa... Se o Senhor se agradar de nós, então nos porá nesta terra... Tão somente não sejais rebeldes contra o Senhor, e não temais o povo dessa terra, porquanto são eles nosso pão... o Senhor é conosco". A resposta da congregação é a violência: eles ordenam que Josué e Calebe sejam apedrejados. Neste momento crítico, a glória do Senhor aparece na Tenda da Congregação.'
      },
      {
        verseRef: 'v. 11-12',
        title: 'A Ira de Deus e a Proposta a Moisés',
        description: 'Deus fala a Moisés, expressando Sua profunda frustração com a incredulidade crônica de Israel: "Até quando me provocará este povo? e até quando não crerá em mim, por todos os sinais que fiz no meio dele?". Deus propõe um juízo radical: "Com pestilência o ferirei, e o rejeitarei; e farei de ti povo maior e mais forte do que este". Deus oferece a Moisés a chance de se tornar o novo Abraão, o pai de uma nova nação. A aliança com Israel estava por um fio.'
      }
    ],
    conclusion: 'A rebelião em Cades-Barneia é o exemplo clássico do perigo da incredulidade. O autor de Hebreus (Hb 3:19) conclui sobre esta geração: "não puderam entrar por causa da incredulidade". O medo dos gigantes fez com que Israel esquecesse os milagres do Egito e do Mar Vermelho. A atitude de Josué e Calebe ("eles são nosso pão") nos ensina que a fé verdadeira vê os obstáculos não como ameaças, mas como alimento para o nosso crescimento espiritual. A proposta de Deus a Moisés testou o coração do líder: ele escolheria a sua própria glória ou a glória do nome de Deus e a salvação do seu povo rebelde?'
  },
  {
    id: 'num_14_26_35',
    bookId: 'NUM',
    chapter: 14,
    startVerse: 26,
    endVerse: 35,
    title: 'O Juízo de Deus: Quarenta Anos no Deserto',
    theme: 'A Consequência da Incredulidade, a Morte de uma Geração e a Fidelidade aos Fiéis',
    introduction: 'Moisés intercede brilhantemente por Israel (v. 13-19), apelando para a reputação de Deus entre as nações e para a Sua grande misericórdia. Deus perdoa o pecado da nação, evitando a aniquilação imediata. No entanto, o perdão não anula as consequências da rebelião. Números 14:26-35 pronuncia a sentença divina sobre a geração incrédula. Este texto marca o ponto de virada mais trágico do Antigo Testamento: a jornada que deveria durar semanas se transformará em um funeral de quarenta anos. A geração que saiu do Egito morrerá no deserto, e apenas seus filhos herdarão a promessa.',
    points: [
      {
        verseRef: 'v. 26-29',
        title: 'A Sentença: A Morte no Deserto',
        description: 'Deus declara que ouviu as murmurações do povo. A sentença é uma ironia trágica e justa: "Assim como falastes aos meus ouvidos, assim farei a vós". Eles haviam dito (v. 2): "Ah! se fôramos mortos neste deserto!". Deus concede o desejo deles. Todos os que foram contados no censo, de vinte anos para cima, que murmuraram contra Deus, terão seus cadáveres caídos naquele deserto. A incredulidade os desqualificou para a herança.'
      },
      {
        verseRef: 'v. 30-33',
        title: 'A Exceção de Calebe e Josué e a Promessa aos Filhos',
        description: 'Deus faz uma exceção explícita para Calebe e Josué, os únicos que tiveram um "espírito diferente" e seguiram o Senhor totalmente. Eles entrarão na terra. Quanto aos filhos (as crianças que os rebeldes disseram que seriam presas dos cananeus), Deus promete: "a eles introduzirei, e eles conhecerão a terra que vós desprezastes". Os filhos, no entanto, sofrerão as consequências do pecado dos pais, pastoreando no deserto por quarenta anos até que o último cadáver da geração rebelde seja consumido.'
      },
      {
        verseRef: 'v. 34-35',
        title: 'O Princípio do Juízo: Um Ano para Cada Dia',
        description: 'Deus estabelece a duração do juízo com base no tempo da exploração da terra: "Segundo o número dos dias em que espiastes esta terra, quarenta dias, cada dia representando um ano, levareis sobre vós as vossas iniquidades quarenta anos". Quarenta anos de peregrinação sem rumo, experimentando o "afastamento" de Deus (a quebra da promessa imediata). Deus jura por Si mesmo que fará isso a toda aquela "má congregação". A sentença é final e irrevogável.'
      }
    ],
    conclusion: 'O juízo dos quarenta anos no deserto é uma das lições mais sombrias da Bíblia sobre a gravidade da incredulidade. Deus perdoou o pecado (a nação não foi destruída), mas a consequência permaneceu (a geração perdeu a herança). Isso nos ensina que as nossas escolhas têm peso. A graça de Deus nos salva do inferno, mas a nossa incredulidade e desobediência podem nos fazer perder as bênçãos e o propósito de Deus para as nossas vidas aqui na terra. A fidelidade de Deus, porém, brilha na promessa feita a Josué, Calebe e à nova geração: os propósitos de Deus nunca falham, mesmo quando uma geração inteira falha em crer.'
  },
  {
    id: 'num_16_1_11',
    bookId: 'NUM',
    chapter: 16,
    startVerse: 1,
    endVerse: 11,
    title: 'A Rebelião de Corá',
    theme: 'A Insubordinação, a Ambição pelo Sacerdócio e o Desafio à Autoridade Divina',
    introduction: 'A condenação a quarenta anos de peregrinação no deserto gerou profunda amargura em Israel. Em Números 16, essa amargura se cristaliza em um motim organizado e perigoso. Corá (um levita), junto com Datã, Abirão e Om (da tribo de Rúben), lideram 250 príncipes da congregação em uma rebelião direta contra Moisés e Arão. Este não é um simples protesto por comida, mas um ataque teológico à estrutura de autoridade estabelecida por Deus. O episódio de Corá é o exemplo clássico da ambição espiritual e do perigo de usurpar ofícios sagrados para os quais não fomos chamados.',
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'A Coalizão Rebelde e a Acusação de Orgulho',
        description: 'Corá, que era primo de Moisés e Arão (todos descendentes de Coate), une-se a líderes da tribo de Rúben (a tribo do primogênito de Jacó, que talvez sentisse ter perdido seu status). Eles reúnem 250 líderes de renome e confrontam Moisés e Arão publicamente. A acusação deles soa muito espiritual e democrática: "Basta-vos, pois que toda a congregação é santa... por que, pois, vos elevais sobre a congregação do Senhor?". Eles usam a verdade da santidade do povo (Êx 19:6) para justificar a insubordinação, acusando Moisés e Arão de se exaltarem orgulhosamente acima dos outros.'
      },
      {
        verseRef: 'v. 4-7',
        title: 'A Reação de Moisés e o Desafio dos Incensários',
        description: 'Ao ouvir a acusação, Moisés cai sobre o seu rosto (um ato de humildade e busca por Deus). Ele não discute, mas propõe um teste divino para a manhã seguinte: "O Senhor fará saber quem é seu, e quem é o santo". Ele instrui Corá e seu grupo a pegarem incensários, colocarem fogo e incenso neles, e se apresentarem perante o Senhor. Oferecer incenso era um privilégio exclusivo dos sacerdotes (filhos de Arão). Moisés está dizendo: "Vocês querem o sacerdócio? Então venham oficiar, e veremos a quem Deus escolhe".'
      },
      {
        verseRef: 'v. 8-11',
        title: 'A Repreensão à Ambição Levítica',
        description: 'Moisés dirige-se especificamente a Corá e aos levitas, expondo a verdadeira raiz da rebelião: a ambição. Ele os lembra do imenso privilégio que já possuíam: Deus os havia separado para o serviço do Tabernáculo e para estarem perante a congregação. "Acaso é pouco para vós... que também buscais o sacerdócio?". Corá não estava satisfeito em servir; ele queria governar e oficiar. Moisés conclui revelando a gravidade do ato: "tu e toda a tua congregação estais congregados contra o Senhor; e Arão, que é ele, para que murmureis contra ele?". A rebelião contra a liderança delegada era, na verdade, uma rebelião contra o próprio Deus.'
      }
    ],
    conclusion: 'A rebelião de Corá (mencionada em Judas 1:11 como um aviso para a Igreja) nos ensina sobre os perigos da ambição e da insubordinação. Corá usou uma linguagem espiritual ("toda a congregação é santa") para encobrir um coração invejoso. Ele desprezou o ministério vital que Deus lhe havia dado (cuidar do Tabernáculo) porque cobiçava o ministério de outro (o sacerdócio de Arão). A resposta de Moisés nos lembra que a verdadeira autoridade espiritual não é algo que se toma por força ou por voto popular, mas é uma designação soberana de Deus. Devemos servir com alegria no lugar onde Deus nos plantou, sem cobiçar a posição do nosso irmão.'
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
console.log(`Expanded ${replacedCount} pericopes (Batch 9.2).`);
