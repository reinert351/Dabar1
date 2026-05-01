const fs = require('fs');

const expandedPericopes = [
  {
    id: 'gen_42_1_38',
    bookId: 'GEN',
    chapter: 42,
    startVerse: 1,
    endVerse: 38,
    title: 'Os Irmãos de José no Egito',
    theme: 'O Despertar da Consciência e o Início da Restauração',
    introduction: 'A fome severa atinge Canaã, forçando os filhos de Jacó a descerem ao Egito em busca de mantimento. Vinte anos após terem vendido seu irmão como escravo, eles se encontram prostrados diante dele, cumprindo os sonhos proféticos que tanto odiavam. José, agora governador do Egito, os reconhece, mas eles não o reconhecem. O que se segue não é um ato de vingança, mas um teste magistral e doloroso orquestrado por José para despertar a consciência adormecida de seus irmãos e verificar se houve arrependimento genuíno. Este capítulo marca o início do processo de cura de uma família profundamente fraturada pelo pecado.',
    points: [
      {
        verseRef: 'v. 1-8',
        title: 'A Necessidade e o Cumprimento da Profecia',
        description: 'Jacó envia dez de seus filhos ao Egito para comprar trigo, retendo apenas Benjamim (o único filho restante de Raquel, a quem ele superprotege). Ao chegarem diante do governador (José), os irmãos "prostraram-se a ele com o rosto em terra". Neste exato momento, José "lembrou-se dos sonhos que havia tido a respeito deles". A palavra de Deus, dada décadas antes, cumpre-se literalmente. A fome foi o instrumento divino para trazer os irmãos rebeldes aos pés daquele que Deus havia escolhido para salvá-los.'
      },
      {
        verseRef: 'v. 9-24',
        title: 'O Teste Severo e a Culpa Despertada',
        description: 'José os trata com dureza e os acusa de serem espiões. Ele os prende por três dias e depois exige que tragam o irmão mais novo para provar que dizem a verdade, retendo Simeão como refém. A pressão extrema finalmente quebra a casca de negação deles. Eles confessam uns aos outros: "Na verdade somos culpados acerca de nosso irmão... por isso nos vem esta angústia". A consciência, adormecida por vinte anos, é despertada pela aflição. José, ouvindo tudo através de um intérprete, retira-se e chora, revelando que sua dureza não era ódio, mas amor disciplinador.'
      },
      {
        verseRef: 'v. 25-38',
        title: 'O Dinheiro Devolvido e o Pânico de Jacó',
        description: 'José ordena que os sacos de trigo sejam cheios e que o dinheiro de cada um seja secretamente devolvido. Quando eles descobrem o dinheiro no caminho, o coração lhes falta e eles tremem, dizendo: "Que é isto que Deus nos tem feito?". A graça imerecida (o dinheiro devolvido) os aterroriza mais do que a ira, pois uma consciência culpada interpreta até a bênção como um laço. Ao retornarem, Jacó reage com desespero egoísta: "A mim me tendes desfilhado... todas estas coisas vieram sobre mim", recusando-se a enviar Benjamim e paralisando o processo de restauração.'
      }
    ],
    conclusion: 'Gênesis 42 nos ensina que o tempo não apaga o pecado não confessado. Deus, em Sua misericórdia, frequentemente usa a aflição e as circunstâncias difíceis para despertar nossa consciência e nos levar ao arrependimento. A atitude de José reflete o agir de Deus: Ele pode parecer duro conosco, não para nos destruir, mas para nos quebrar, a fim de nos curar. A verdadeira reconciliação exige que enfrentemos a verdade sobre o nosso passado.'
  },
  {
    id: 'gen_43_1_34',
    bookId: 'GEN',
    chapter: 43,
    startVerse: 1,
    endVerse: 34,
    title: 'A Segunda Viagem ao Egito',
    theme: 'A Rendição de Jacó, a Intercessão de Judá e o Banquete da Graça',
    introduction: 'A fome continua implacável, e os suprimentos trazidos do Egito acabam. Jacó é forçado a tomar a decisão mais difícil de sua vida: abrir mão de Benjamim, seu filho favorito, para salvar a família da inanição. Gênesis 43 mostra a transformação gradual no caráter de Judá, que assume a responsabilidade como fiador, e o reencontro emocionante no Egito. O capítulo culmina em um banquete misterioso onde José testa a atitude de seus irmãos em relação ao novo filho favorito, preparando o cenário para a revelação final.',
    points: [
      {
        verseRef: 'v. 1-14',
        title: 'A Fome, a Fiança e a Rendição de Israel',
        description: 'Jacó manda os filhos voltarem, mas Judá é firme: eles não podem ver o rosto do governador sem Benjamim. Judá, que antes havia sugerido vender José como escravo (Gn 37), agora se oferece como fiador ("Eu serei fiador por ele; da minha mão o requererás"). Jacó, sem alternativas, finalmente se rende. Ele envia presentes e o dinheiro em dobro, e profere uma oração de resignação: "Deus Todo-Poderoso (El-Shaddai) vos dê misericórdia... e, se eu for desfilhado, desfilhado ficarei". A fé verdadeira exige que entreguemos a Deus aquilo que mais amamos.'
      },
      {
        verseRef: 'v. 15-25',
        title: 'O Temor da Graça e a Paz do Mordomo',
        description: 'Ao chegarem, José ordena que sejam levados à sua casa para um banquete. Os irmãos entram em pânico, achando que serão escravizados por causa do dinheiro devolvido na primeira viagem. Eles tentam se justificar para o mordomo de José, mas a resposta dele é teológica e tranquilizadora: "Paz seja convosco, não temais; o vosso Deus, e o Deus de vosso pai, vos tem dado um tesouro... o vosso dinheiro chegou a mim". O mordomo traz Simeão para fora. A graça de Deus frequentemente nos assusta antes de nos confortar.'
      },
      {
        verseRef: 'v. 26-34',
        title: 'O Banquete e o Teste do Favoritismo',
        description: 'Quando José vê Benjamim, seu irmão de mãe, suas emoções transbordam. Ele abençoa o jovem ("Deus te seja clemente, filho meu") e corre para chorar em seu quarto. Ao voltarem para o banquete, José os assenta exatamente em ordem de idade (do mais velho ao mais novo), deixando-os maravilhados. O teste final ocorre na distribuição da comida: a porção de Benjamim é cinco vezes maior que a dos outros. José está testando se eles sentirão a mesma inveja assassina que sentiram dele anos atrás. Mas o texto diz que "beberam e se alegraram com ele". O ciúme havia sido curado.'
      }
    ],
    conclusion: 'A rendição de Jacó nos lembra que Deus muitas vezes nos leva ao fim dos nossos próprios recursos para que possamos confiar inteiramente nEle. A atitude de Judá mostra que o arrependimento genuíno produz responsabilidade sacrifical pelos outros. O banquete na casa de José é um belo quadro da graça do evangelho: somos convidados para a mesa do Rei não por nossos méritos, mas pela Sua misericórdia, onde nossos medos são dissipados e a comunhão é restaurada.'
  },
  {
    id: 'gen_44_1_34',
    bookId: 'GEN',
    chapter: 44,
    startVerse: 1,
    endVerse: 34,
    title: 'A Taça de Prata e a Intercessão de Judá',
    theme: 'O Teste Final, a Substituição e o Verdadeiro Arrependimento',
    introduction: 'Gênesis 44 é o clímax emocional da história de José e um dos capítulos mais comoventes de toda a Bíblia. José arma um último e dramático teste para seus irmãos, colocando uma taça de prata na sacola de Benjamim. O objetivo não é torturá-los, mas criar uma situação idêntica à do passado: eles teriam a chance perfeita de abandonar o filho favorito do pai para salvar a própria pele. A resposta deles, liderada pelo discurso apaixonado e sacrifical de Judá, prova que a transformação deles é real. Judá se torna o maior exemplo de amor substitutivo no Antigo Testamento.',
    points: [
      {
        verseRef: 'v. 1-13',
        title: 'A Armadilha da Taça e o Desespero',
        description: 'José ordena que seu mordomo coloque o dinheiro de volta nos sacos e esconda sua taça de prata no saco de Benjamim. Assim que eles saem da cidade, o mordomo os alcança e os acusa de roubo. Confiantes em sua inocência, os irmãos declaram que aquele com quem a taça for encontrada morrerá, e os demais serão escravos. A busca começa do mais velho ao mais novo. Quando a taça é encontrada no saco de Benjamim, eles rasgam suas vestes (um sinal de luto extremo). Em vez de abandonar Benjamim e voltar para Canaã, todos eles retornam à cidade. O teste revelou lealdade.'
      },
      {
        verseRef: 'v. 14-17',
        title: 'A Confissão Coletiva',
        description: 'Eles caem por terra diante de José. Judá, assumindo a liderança, não tenta dar desculpas ou culpar Benjamim. Ele faz uma confissão profunda: "Que diremos a meu senhor?... Deus achou a iniquidade de teus servos". Judá não está confessando o roubo da taça (que eles não cometeram), mas o pecado de vinte anos atrás (a venda de José). Ele aceita que todos sejam escravos. José, no entanto, aperta o teste: apenas o culpado (Benjamim) será escravo; os outros podem ir em paz para seu pai.'
      },
      {
        verseRef: 'v. 18-34',
        title: 'O Discurso de Judá e a Oferta Substitutiva',
        description: 'Judá se aproxima de José e profere o discurso mais longo de Gênesis. Ele reconta a dor de seu pai, o amor de Jacó por Benjamim (o único filho restante de Raquel, na mente deles) e a garantia que ele mesmo deu. O clímax do discurso é uma oferta de substituição voluntária: "Agora, pois, fique teu servo em lugar deste moço por escravo de meu senhor, e que suba o moço com os seus irmãos". Judá prefere a escravidão perpétua no Egito a ver a dor matar seu pai. Ele oferece sua vida pela vida do irmão.'
      }
    ],
    conclusion: 'A intercessão de Judá é o ponto de virada de toda a narrativa. Ela prova que o coração dos irmãos mudou radicalmente: da inveja assassina para o amor sacrifical. A oferta de Judá de se tornar escravo no lugar de Benjamim é uma das mais belas prefigurações de Jesus Cristo (o Leão da Tribo de Judá), que se ofereceu como nosso substituto na cruz, tomando sobre Si a nossa culpa para que pudéssemos voltar em paz para o Pai.'
  },
  {
    id: 'gen_46_1_7',
    bookId: 'GEN',
    chapter: 46,
    startVerse: 1,
    endVerse: 7,
    title: 'A Viagem de Jacó para o Egito',
    theme: 'A Confirmação Divina, o Fim do Medo e a Preservação da Nação',
    introduction: 'Após descobrir que José está vivo e é governador de todo o Egito, o espírito de Jacó revive. Ele parte com toda a sua família para o Egito. No entanto, deixar a Terra Prometida era um passo teologicamente perigoso. Abraão e Isaque haviam tido problemas ao descerem ao Egito. Em Berseba, a fronteira sul de Canaã, Jacó para para buscar a Deus. Gênesis 46 relata a última teofania (aparição de Deus) a Jacó, onde o Senhor não apenas aprova a viagem, mas revela que o Egito será a "incubadora" onde a família de 70 pessoas se transformará em uma grande nação.',
    points: [
      {
        verseRef: 'v. 1',
        title: 'A Parada em Berseba e os Sacrifícios',
        description: 'Jacó parte com tudo o que tem e chega a Berseba, um lugar sagrado onde seu pai Isaque e seu avô Abraão haviam adorado e recebido promessas. Antes de cruzar a fronteira para o Egito pagão, Jacó oferece sacrifícios ao "Deus de seu pai Isaque". Ele não age por impulso, mesmo com o desejo ardente de ver José. Ele busca a aprovação divina, demonstrando que a vontade de Deus é mais importante do que seus próprios desejos.'
      },
      {
        verseRef: 'v. 2-4',
        title: 'A Visão Noturna e as Promessas de Deus',
        description: 'Deus fala a Israel em visões de noite. Ele se identifica: "Eu sou Deus, o Deus de teu pai". Deus aborda diretamente o medo de Jacó: "Não temas descer ao Egito". Deus dá quatro promessas cruciais: 1) Ele fará de Jacó uma grande nação lá; 2) Ele descerá com Jacó ao Egito (a presença de Deus não está confinada a Canaã); 3) Ele certamente o fará tornar a subir (a promessa do Êxodo); e 4) José fechará os olhos de Jacó na morte (uma promessa de paz e consolo final).'
      },
      {
        verseRef: 'v. 5-7',
        title: 'A Jornada da Família da Aliança',
        description: 'Confortado e autorizado pela palavra de Deus, Jacó levanta-se de Berseba. Seus filhos o levam nos carros que Faraó havia enviado. Eles levam seu gado e seus bens. O texto enfatiza que Jacó levou "toda a sua semente consigo": filhos, netos, filhas e netas. A semente da promessa, que começou com um homem (Abraão), agora é uma família estendida que está sendo transplantada para o Egito para ser preservada da fome e isolada da corrupção cananeia.'
      }
    ],
    conclusion: 'A parada de Jacó em Berseba nos ensina a importância de buscar a direção de Deus antes de grandes transições na vida, mesmo quando a porta parece escancarada. A promessa de Deus a Jacó nos lembra que o Senhor está conosco em nossos "Egitos" (tempos de exílio, dificuldade ou mudança). Deus usou o Egito como uma incubadora segura para multiplicar Seu povo. Os planos de Deus muitas vezes nos levam por caminhos inesperados, mas a Sua presença constante é a garantia de que Ele cumprirá todas as Suas promessas.'
  },
  {
    id: 'gen_47_1_12',
    bookId: 'GEN',
    chapter: 47,
    startVerse: 1,
    endVerse: 12,
    title: 'Jacó Abençoa Faraó',
    theme: 'A Dignidade do Patriarca, a Confissão da Peregrinação e a Provisão em Gósen',
    introduction: 'A chegada da família de Jacó ao Egito culmina em um encontro extraordinário: o velho patriarca hebreu, líder de uma família de pastores nômades (uma profissão abominável para os egípcios), é apresentado ao monarca mais poderoso do mundo antigo. Gênesis 47 descreve este encontro não como a submissão de um refugiado, mas com a dignidade espiritual de um embaixador de Deus. O fato de Jacó abençoar Faraó revela a superioridade espiritual da aliança abraâmica sobre o poder imperial, e estabelece a terra de Gósen como o refúgio seguro para o crescimento de Israel.',
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Apresentação dos Irmãos e a Concessão de Gósen',
        description: 'José apresenta cinco de seus irmãos a Faraó. Conforme instruídos por José, eles declaram abertamente sua profissão: "Teus servos são pastores de ovelhas". Eles pedem permissão para habitar na terra de Gósen (uma região fértil no delta do Nilo, ideal para o gado e estrategicamente separada do centro da cultura egípcia). Faraó, em gratidão a José, não apenas concede a melhor parte da terra, mas também oferece aos irmãos de José a posição de chefes do gado real.'
      },
      {
        verseRef: 'v. 7-10',
        title: 'O Encontro de Jacó e Faraó: A Bênção Maior',
        description: 'José traz seu pai, Jacó, à presença de Faraó. O texto diz duas vezes que "Jacó abençoou a Faraó" (na chegada e na partida). Como o autor de Hebreus observa: "sem contradição alguma, o menor é abençoado pelo maior" (Hb 7:7). Espiritualmente, o velho patriarca manco era maior que o imperador divino do Egito. Faraó pergunta a idade de Jacó. A resposta de Jacó é uma profunda confissão teológica: "Os dias dos anos das minhas peregrinações são cento e trinta anos; poucos e maus foram os dias...". Jacó reconhece que a vida é uma peregrinação temporária e cheia de aflições, e que sua verdadeira pátria não é terrena.'
      },
      {
        verseRef: 'v. 11-12',
        title: 'A Provisão e o Descanso',
        description: 'José obedece à ordem de Faraó e estabelece seu pai e seus irmãos na melhor parte da terra do Egito, na terra de Ramessés (Gósen). José "sustentou de pão a seu pai, e a seus irmãos, e a toda a casa de seu pai". O filho que foi odiado e vendido agora é o provedor e protetor de toda a família. A promessa de Deus a Abraão de que sua descendência seria peregrina em terra alheia (Gn 15:13) começa a se cumprir em um ambiente de paz e fartura.'
      }
    ],
    conclusion: 'O encontro de Jacó com Faraó nos ensina sobre a dignidade do crente. Mesmo diante dos poderosos deste mundo, não precisamos nos envergonhar de nossa identidade ou de nossa fé. Somos portadores da bênção de Deus. A confissão de Jacó de que a vida é uma peregrinação deve ser a nossa também; não devemos nos apegar excessivamente a este mundo, pois somos cidadãos dos céus. A provisão de José para sua família é um reflexo do cuidado de Cristo, que nos sustenta e nos dá um lugar seguro em meio às fomes deste mundo.'
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
console.log(`Expanded ${replacedCount} pericopes (Batch 3.1).`);
