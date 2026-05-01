const fs = require('fs');

const expandedPericopes = [
  {
    id: 'num_16_28_35',
    bookId: 'NUM',
    chapter: 16,
    startVerse: 28,
    endVerse: 35,
    title: 'O Julgamento de Corá, Datã e Abirão',
    theme: 'A Vindicação Divina, a Fenda na Terra e o Fogo do Juízo',
    introduction: 'A rebelião liderada por Corá, Datã e Abirão (Números 16:1-11) não foi apenas um protesto político, mas um desafio direto à autoridade que Deus havia estabelecido. Em Números 16:28-35, a paciência divina se esgota, e o confronto atinge seu clímax aterrorizante. Moisés não usa a força militar para se defender; ele coloca sua liderança à prova diante de toda a congregação, apelando para que o próprio Deus decida a questão de forma sobrenatural. O juízo que se segue é um dos mais dramáticos de toda a Bíblia, provando de uma vez por todas que a rebelião contra a ordem divina traz consequências catastróficas.',
    points: [
      {
        verseRef: 'v. 28-30',
        title: 'O Teste Profético de Moisés',
        description: 'Moisés declara ao povo como eles saberão que ele foi enviado por Deus e não agiu por vontade própria. Ele propõe um teste de vida ou morte: se os rebeldes morrerem de morte natural ou comum, então o Senhor não o enviou. Mas, se o Senhor "criar alguma coisa nova", e a terra abrir a sua boca e os engolir vivos com tudo o que lhes pertence, "então sabereis que estes homens irritaram ao Senhor". Moisés coloca sua própria credibilidade profética na linha, dependendo de um milagre imediato e sem precedentes.'
      },
      {
        verseRef: 'v. 31-33',
        title: 'A Terra Abre a Sua Boca',
        description: 'Assim que Moisés termina de falar, o chão se fende debaixo de Datã e Abirão (e das tendas de Corá). A terra "abriu a sua boca" e os engoliu vivos, junto com suas famílias, seus bens e todos os homens que pertenciam a Corá. Eles descem "vivos ao abismo" (Sheol), e a terra os cobre. A rebelião que começou com palavras arrogantes termina no silêncio do túmulo. A punição reflete o crime: aqueles que tentaram se elevar acima da congregação foram rebaixados às profundezas da terra.'
      },
      {
        verseRef: 'v. 34-35',
        title: 'O Pânico do Povo e o Fogo Consumidor',
        description: 'O grito dos rebeldes ao serem engolidos causa pânico generalizado. Todo o Israel que estava ao redor foge, temendo que a terra os engolisse também. Simultaneamente, o juízo atinge o outro grupo de rebeldes: os 250 príncipes que estavam na porta da Tenda oferecendo incenso. "Então saiu fogo do Senhor, e consumiu os duzentos e cinquenta homens que ofereciam o incenso". O mesmo fogo que matou Nadabe e Abiú (Levítico 10) agora consome aqueles que usurparam o ofício sacerdotal.'
      }
    ],
    conclusion: 'O julgamento de Corá, Datã e Abirão é um aviso solene sobre a gravidade da insubordinação espiritual. Deus não trata a rebelião contra a Sua autoridade delegada como um crime menor. O apóstolo Paulo nos lembra que a autoridade é instituída por Deus (Romanos 13:1-2). Embora a liderança humana seja falha, a rebelião motivada por inveja e ambição (como a de Corá) atrai o juízo divino. A vindicação de Moisés nos ensina que não precisamos lutar com armas carnais para defender nosso chamado; quando andamos em obediência, o próprio Deus se levanta para justificar os Seus servos.'
  },
  {
    id: 'num_17_1_11',
    bookId: 'NUM',
    chapter: 17,
    startVerse: 1,
    endVerse: 11,
    title: 'A Vara de Arão que Floresceu',
    theme: 'A Escolha Divina, a Vida a Partir da Morte e o Fim das Murmurações',
    introduction: 'Mesmo após o terrível juízo sobre Corá e seus seguidores (cap. 16), a congregação de Israel continuou murmurando contra Moisés e Arão, acusando-os de matar o povo do Senhor. Para acabar de vez com a disputa sobre quem tinha o direito legítimo ao sacerdócio, Deus propõe um teste final e pacífico em Números 17. Este teste não envolveria fogo ou terremotos, mas um milagre silencioso de ressurreição. A vara de Arão, um pedaço de madeira morta, floresceria, provando que a verdadeira autoridade espiritual não é baseada em ambição política, mas na vida que Deus concede.',
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'O Teste das Doze Varas',
        description: 'Deus instrui Moisés a recolher doze varas (cajados), uma de cada príncipe das doze tribos de Israel. O nome de cada líder deve ser escrito em sua respectiva vara, e o nome de Arão deve ser escrito na vara da tribo de Levi. As varas devem ser colocadas na Tenda da Congregação, diante do Testemunho (a Arca da Aliança). Deus declara o propósito do teste: "a vara do homem que eu escolher florescerá; assim farei cessar as murmurações dos filhos de Israel contra mim". A escolha não seria por voto, mas por um sinal vital.'
      },
      {
        verseRef: 'v. 6-8',
        title: 'O Milagre da Vida: Flores e Amêndoas',
        description: 'Moisés obedece e deixa as varas perante o Senhor. No dia seguinte, quando Moisés entra na Tenda, o milagre aconteceu. A vara de Arão não apenas brotou, mas passou por todo o ciclo de vida em uma única noite: "brotara, e produzira renovos, e dera flores, e dera amêndoas maduras". Um pedaço de madeira seca, cortada de sua raiz, produziu vida abundante. A amendoeira é a primeira árvore a florescer na primavera em Israel (simbolizando o despertar). Deus estava dizendo: "Eu sou a fonte da vida e do sacerdócio de Arão".'
      },
      {
        verseRef: 'v. 9-11',
        title: 'O Memorial e o Fim da Rebelião',
        description: 'Moisés traz todas as varas para fora e as mostra aos filhos de Israel. Cada líder reconhece e toma a sua vara (que continuava morta e seca). Deus então ordena que a vara de Arão seja colocada de volta diante do Testemunho, para ser guardada como um "sinal para os filhos rebeldes", a fim de que suas murmurações cessassem e eles não morressem. A vara florescida tornou-se um dos três itens sagrados guardados dentro da Arca da Aliança (Hebreus 9:4), um memorial perpétuo da escolha soberana de Deus.'
      }
    ],
    conclusion: 'A vara de Arão que floresceu é uma das mais belas ilustrações da ressurreição de Cristo e da natureza do ministério cristão. A verdadeira autoridade espiritual não vem de títulos, carisma ou força, mas da vida de ressurreição operando através de nós. Assim como a vara seca só pôde dar frutos porque foi colocada na presença de Deus, nós só podemos dar frutos espirituais se permanecermos ligados a Cristo (João 15:5). O ministério aprovado por Deus é aquele que, mesmo sendo "madeira morta" em si mesmo, floresce e alimenta outros pelo poder do Espírito Santo.'
  },
  {
    id: 'num_20_1_13',
    bookId: 'NUM',
    chapter: 20,
    startVerse: 1,
    endVerse: 13,
    title: 'As Águas de Meribá (O Pecado de Moisés)',
    theme: 'A Ira Descontrolada, a Desobediência e a Perda da Promessa',
    introduction: 'Quase quarenta anos se passaram desde a rebelião em Cades-Barneia. A velha geração está quase toda morta, mas a nova geração demonstra o mesmo padrão de murmuração. Em Números 20, o povo novamente fica sem água e ataca Moisés e Arão. O que se segue é um dos episódios mais tristes da Bíblia: o momento em que o grande líder Moisés, exausto e irado, falha em santificar a Deus diante do povo. Este único ato de desobediência custará a Moisés e a Arão a entrada na Terra Prometida, ensinando uma lição severa sobre a responsabilidade da liderança.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Morte de Miriã e a Nova Murmuração',
        description: 'O capítulo começa com a morte e o sepultamento de Miriã no deserto de Zim. Imediatamente depois, falta água para a congregação. O povo se levanta contra Moisés e Arão com a mesma queixa de seus pais: "Antes tivéssemos expirado quando expiraram nossos irmãos... Por que nos trouxestes a este deserto, para morrermos aqui?". Moisés e Arão respondem da maneira correta: eles se retiram da presença da congregação, vão para a porta da Tenda e caem sobre os seus rostos. A glória do Senhor aparece a eles.'
      },
      {
        verseRef: 'v. 7-11',
        title: 'A Ordem Divina e a Ira de Moisés',
        description: 'Deus instrui Moisés: "Toma a vara... e falai à rocha perante os seus olhos, e dará a sua água". Quarenta anos antes, em Refidim (Êx 17), Deus mandou Moisés *ferir* a rocha. Agora, ele devia apenas *falar* com ela. Moisés pega a vara, mas a amargura acumulada toma conta dele. Ele chama o povo de "rebeldes" e diz: "Tiraremos nós água desta rocha para vós?". Em vez de falar à rocha, Moisés levanta a mão e fere a rocha duas vezes com a vara. A água sai abundantemente (Deus é fiel à necessidade do povo, apesar do pecado do líder).'
      },
      {
        verseRef: 'v. 12-13',
        title: 'O Juízo Severo: A Perda da Terra Prometida',
        description: 'A resposta de Deus a Moisés e Arão é devastadora: "Porquanto não crestes em mim, para me santificardes diante dos filhos de Israel, por isso não introduzireis esta congregação na terra que lhes tenho dado". O pecado de Moisés foi múltiplo: ele desobedeceu à instrução exata (feriu em vez de falar), ele agiu com ira carnal, e ele roubou a glória de Deus ao dizer "tiraremos *nós* água". O lugar foi chamado Meribá (Contenda). A punição parece severa, mas reflete o princípio de que a quem muito é dado, muito é exigido (Lucas 12:48).'
      }
    ],
    conclusion: 'O pecado de Moisés em Meribá é um alerta solene para todos os líderes espirituais. O cansaço e a frustração com o povo de Deus nunca justificam a desobediência ou a ira carnal. Teologicamente, a rocha ferida no Êxodo representava Cristo crucificado (1 Coríntios 10:4). Cristo foi ferido uma única vez pelos nossos pecados. Agora, para recebermos a "água viva", precisamos apenas *falar* com a Rocha (oração e fé). Ao ferir a rocha duas vezes, Moisés arruinou a tipologia divina. A exclusão de Moisés de Canaã também mostra que a Lei (representada por Moisés) não pode nos introduzir na promessa; apenas a graça (representada por Josué/Jesus) pode nos levar até lá.'
  },
  {
    id: 'num_22_22_35',
    bookId: 'NUM',
    chapter: 22,
    startVerse: 22,
    endVerse: 35,
    title: 'Balaão e a Jumenta',
    theme: 'A Cegueira Espiritual, o Anjo do Senhor e a Soberania Divina',
    introduction: 'Israel está acampado nas planícies de Moabe, prestes a entrar em Canaã. O rei de Moabe, Balaque, aterrorizado com a multidão, contrata um profeta mercenário, Balaão, para amaldiçoar Israel. Embora Deus tenha dito a Balaão para não ir, a ganância o leva a tentar manipular a vontade divina. Números 22:22-35 descreve a jornada de Balaão e o famoso episódio em que sua jumenta fala. É uma narrativa cheia de ironia divina: o "grande vidente" está cego para o perigo espiritual, enquanto um animal irracional vê o Anjo do Senhor e salva a vida de seu dono.',
    points: [
      {
        verseRef: 'v. 22-27',
        title: 'A Cegueira do Profeta e a Visão da Jumenta',
        description: 'A ira de Deus se acende porque Balaão vai com o coração inclinado à recompensa de Balaque. O Anjo do Senhor (uma teofania) põe-se no caminho como adversário, com uma espada desembainhada. Balaão não vê nada, mas a jumenta vê. Três vezes a jumenta tenta salvar a vida de Balaão: primeiro, desvia-se para o campo; segundo, aperta o pé de Balaão contra o muro; terceiro, deita-se debaixo dele. A cada vez, Balaão, cego pela fúria e pela pressa de ganhar dinheiro, espanca o animal inocente.'
      },
      {
        verseRef: 'v. 28-30',
        title: 'O Milagre da Fala e a Repreensão Irracional',
        description: 'Deus abre a boca da jumenta, que questiona Balaão: "Que te fiz eu, que me espancaste estas três vezes?". A ironia atinge o ápice: Balaão, que se orgulhava de ouvir a voz de deuses, está tão cego pela ira que responde ao animal como se fosse normal conversar com um asno. Ele diz que a mataria se tivesse uma espada (enquanto o Anjo estava ali com uma espada real para matá-lo). A jumenta apela para o seu histórico de lealdade, expondo a irracionalidade do profeta.'
      },
      {
        verseRef: 'v. 31-35',
        title: 'Os Olhos Abertos e a Submissão Forçada',
        description: 'Finalmente, o Senhor abre os olhos de Balaão. Ele vê o Anjo com a espada e cai com o rosto em terra. O Anjo o repreende severamente: "O teu caminho é perverso diante de mim... se ela não se desviasse de diante de mim, decerto que já agora te teria matado, e a ela deixaria com vida". Balaão confessa o seu pecado (embora seu coração continue ganancioso). O Anjo permite que ele prossiga, mas com uma restrição absoluta: "somente a palavra que eu te falar, essa falarás". Deus usará a ganância de Balaão para abençoar Israel publicamente.'
      }
    ],
    conclusion: 'A história de Balaão e a jumenta é uma sátira divina sobre a presunção humana. O apóstolo Pedro (2 Pedro 2:15-16) usa Balaão como o arquétipo do falso mestre que ama o "prêmio da injustiça", notando que "um mudo jumento, falando com voz humana, impediu a loucura do profeta". O texto nos ensina que a ganância e a ambição cegam os nossos olhos espirituais, fazendo-nos lutar contra a própria vontade de Deus. Além disso, mostra a soberania absoluta de Deus: se Ele pode usar a boca de uma jumenta para repreender um profeta, Ele certamente pode usar qualquer circunstância para cumprir os Seus propósitos e proteger o Seu povo de maldições ocultas.'
  },
  {
    id: 'num_27_12_23',
    bookId: 'NUM',
    chapter: 27,
    startVerse: 12,
    endVerse: 23,
    title: 'A Sucessão de Josué',
    theme: 'O Fim de uma Era, o Pastor para a Congregação e a Imposição de Mãos',
    introduction: 'Com a morte da velha geração e a proximidade da entrada em Canaã, o ministério de Moisés chega ao fim. Deus o lembra de que ele não entrará na Terra Prometida devido ao seu pecado em Meribá. Em Números 27:12-23, vemos a grandeza do caráter de Moisés: em vez de lamentar sua própria sorte ou tentar se agarrar ao poder, sua única preocupação é o bem-estar do povo de Deus. Ele pede a Deus que nomeie um sucessor. A escolha de Josué e sua investidura pública garantem que a transição de liderança seja pacífica, clara e abençoada por Deus.',
    points: [
      {
        verseRef: 'v. 12-14',
        title: 'A Visão da Terra e o Lembrete do Juízo',
        description: 'Deus ordena que Moisés suba ao monte Abarim (Nebo) para ver a terra que Ele dará aos filhos de Israel. É um ato de graça (permitir que ele veja a promessa) e de justiça (lembrar que ele será "recolhido ao seu povo" sem entrar nela). Deus repete o motivo: "Porquanto, no deserto de Zim, na rebelião da congregação, fostes rebeldes ao meu mandamento de me santificardes nas águas". Deus não varre o pecado dos líderes para debaixo do tapete; a santidade de Deus é inegociável.'
      },
      {
        verseRef: 'v. 15-17',
        title: 'A Oração de Moisés: Um Pastor para o Rebanho',
        description: 'A resposta de Moisés é um dos exemplos mais nobres de liderança altruísta. Ele não pede perdão para si mesmo nem mais tempo de vida. Ele ora: "O Senhor, Deus dos espíritos de toda a carne, ponha um homem sobre esta congregação... para que a congregação do Senhor não seja como ovelhas que não têm pastor". Moisés entende que o povo precisa de um líder que vá adiante deles na batalha e os guie no dia a dia. A preocupação central de um verdadeiro líder cristão deve ser sempre a saúde e a segurança do rebanho de Deus.'
      },
      {
        verseRef: 'v. 18-23',
        title: 'A Escolha de Josué e a Transferência de Autoridade',
        description: 'Deus responde imediatamente, apontando Josué, filho de Num, "homem em quem há o Espírito". A qualificação principal de Josué não é sua habilidade militar, mas a presença do Espírito Santo. Moisés deve impor as mãos sobre ele perante o sacerdote Eleazar e toda a congregação. Moisés deve colocar sobre Josué "da sua glória" (autoridade), para que o povo lhe obedeça. Diferente de Moisés (que falava face a face com Deus), Josué seria guiado pelo Urim (o julgamento sacerdotal). Moisés obedece prontamente, transferindo o manto da liderança.'
      }
    ],
    conclusion: 'A sucessão de Josué nos ensina que o ministério não pertence a nenhum homem, mas a Deus. Os líderes vêm e vão, mas o propósito de Deus continua. A atitude de Moisés é o antídoto contra a "síndrome do fundador" nas igrejas e organizações; um líder de sucesso é aquele que prepara um sucessor e sabe a hora de sair de cena. A escolha de Josué (cujo nome é a variante hebraica de Jesus) é profundamente profética. Moisés (a Lei) pode nos levar até a fronteira da promessa, mas ele não pode nos introduzir nela. Apenas Josué (Jesus, a Graça) tem o poder de nos fazer herdar a Terra Prometida e o descanso eterno.'
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
console.log(`Expanded ${replacedCount} pericopes (Batch 10.1).`);
