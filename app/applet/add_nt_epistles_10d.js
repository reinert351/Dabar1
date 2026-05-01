const fs = require('fs');

const newPericopes = [
  {
    id: '1th_4_13_18',
    bookId: '1TH',
    chapter: 4,
    startVerse: 13,
    endVerse: 18,
    title: 'A Esperança da Igreja e o Arrebatamento',
    theme: 'O Retorno de Cristo e o Consolo dos Crentes',
    introduction: `A igreja em Tessalônica era jovem e enfrentava perseguição. Eles esperavam o retorno iminente de Cristo, mas alguns membros da igreja haviam morrido, gerando confusão e tristeza. Eles temiam que os mortos perdessem a glória da Segunda Vinda. Paulo escreve esta passagem clássica sobre o arrebatamento não para satisfazer a curiosidade escatológica, mas para fornecer consolo pastoral profundo, garantindo que a morte não pode separar o crente da vitória final de Cristo.`,
    points: [
      {
        verseRef: 'v. 13-14',
        title: 'A Ignorância e a Esperança Cristã',
        description: `A Morte como Sono. Paulo não quer que eles sejam ignorantes "acerca dos que já dormem" (v. 13). O Novo Testamento frequentemente chama a morte do crente de "sono" porque é temporária e o corpo acordará. O objetivo de Paulo é que eles não se entristeçam "como os demais, que não têm esperança". O luto cristão é real, mas é diferente do luto do mundo, pois é banhado em esperança. A base dessa esperança é o fato histórico da ressurreição (v. 14): "Porque, se cremos que Jesus morreu e ressuscitou, assim também aos que em Jesus dormem, Deus os tornará a trazer com ele".`
      },
      {
        verseRef: 'v. 15-16',
        title: 'A Ordem dos Eventos e a Ressurreição',
        description: `Os Mortos em Cristo Ressuscitarão Primeiro. Paulo revela um mistério pela "palavra do Senhor" (v. 15): os crentes vivos não precederão (não terão vantagem sobre) os que dormem. A ordem dos eventos é majestosa (v. 16): "Porque o mesmo Senhor descerá do céu com alarido, e com voz de arcanjo, e com a trombeta de Deus". O retorno de Cristo será pessoal, audível e glorioso. O primeiro grande evento será a ressurreição: "e os que morreram em Cristo ressuscitarão primeiro". Os corpos mortos serão transformados em corpos glorificados.`
      },
      {
        verseRef: 'v. 17-18',
        title: 'O Encontro nos Ares e o Consolo Eterno',
        description: `Sempre com o Senhor. Após a ressurreição dos mortos, ocorre o arrebatamento dos vivos (v. 17): "Depois nós, os que ficarmos vivos, seremos arrebatados juntamente com eles nas nuvens, a encontrar o Senhor nos ares". A palavra "arrebatados" (harpazo) significa ser pego com força súbita. O propósito não é apenas escapar do mundo, mas o encontro com o Rei. A promessa final é a mais doce: "e assim estaremos sempre com o Senhor". Paulo conclui com a aplicação prática (v. 18): "Portanto, consolai-vos uns aos outros com estas palavras".`
      }
    ],
    conclusion: `1 Tessalonicenses 4:13-18 é a resposta de Deus ao terror da morte. A sepultura não é o fim da história para o cristão. O mesmo Jesus que venceu a morte voltará para buscar a Sua noiva. Quer estejamos vivos ou já tenhamos partido, participaremos igualmente da Sua glória. A escatologia bíblica não foi dada para gerar debates teológicos intermináveis, mas para nos dar uma esperança inabalável e nos consolar nas horas mais escuras da perda.`
  },
  {
    id: '2ti_3_14_17',
    bookId: '2TI',
    chapter: 3,
    startVerse: 14,
    endVerse: 17,
    title: 'A Inspiração e a Suficiência das Escrituras',
    theme: 'O Poder da Palavra de Deus em Tempos de Apostasia',
    introduction: `A Segunda Carta a Timóteo é o testamento final de Paulo. Preso em Roma e aguardando a execução, ele escreve ao seu jovem discípulo para encorajá-lo a permanecer firme em um tempo de crescente apostasia e perseguição. O antídoto de Paulo contra o engano espiritual não é a inovação metodológica, mas um retorno radical à autoridade, inspiração e suficiência das Sagradas Escrituras. A Bíblia é a única âncora segura quando o mundo e a igreja visível estão à deriva.`,
    points: [
      {
        verseRef: 'v. 14-15',
        title: 'A Permanência na Verdade e a Sabedoria para a Salvação',
        description: `As Sagradas Letras. Paulo exorta Timóteo (v. 14): "Tu, porém, permanece naquilo que aprendeste, e de que foste inteirado, sabendo de quem o tens aprendido". A fé cristã é transmitida. Timóteo havia aprendido as Escrituras desde a infância (v. 15), através da sua mãe e avó (2 Tm 1:5). Paulo declara o propósito principal do Antigo Testamento (e de toda a Bíblia): "as sagradas letras, que podem fazer-te sábio para a salvação, pela fé que há em Cristo Jesus". A Bíblia não é um livro de ciências ou um manual de autoajuda; é o mapa que nos leva a Cristo e à salvação.`
      },
      {
        verseRef: 'v. 16a',
        title: 'A Inspiração Divina da Escritura',
        description: `O Sopro de Deus. "Toda a Escritura é divinamente inspirada" (v. 16a). A palavra grega "theopneustos" significa literalmente "soprada por Deus". A Bíblia não é uma coleção de intuições religiosas humanas; é o produto do próprio fôlego de Deus. Os autores humanos escreveram com os seus próprios estilos e vocabulários, mas o Espírito Santo supervisionou o processo de tal forma que o que eles escreveram é exatamente o que Deus queria dizer, sem erro na sua mensagem original. A autoridade da Bíblia deriva da sua origem divina.`
      },
      {
        verseRef: 'v. 16b-17',
        title: 'A Utilidade e a Suficiência da Palavra',
        description: `O Equipamento Completo. Porque é soprada por Deus, a Escritura é "proveitosa para ensinar (doutrina), para redarguir (repreender o erro), para corrigir (restaurar ao caminho certo), para instruir em justiça (treinamento moral)" (v. 16b). O objetivo desta utilidade é prático (v. 17): "Para que o homem de Deus seja perfeito (maduro, completo), e perfeitamente instruído para toda a boa obra". A Bíblia é suficiente. Não precisamos de novas revelações, visões ou filosofias seculares para vivermos a vida cristã; a Palavra nos equipa completamente para tudo o que Deus exige de nós.`
      }
    ],
    conclusion: `2 Timóteo 3:14-17 é a base da doutrina cristã sobre a Bíblia. Em dias de confusão teológica e relativismo moral, a nossa única segurança é permanecer naquilo que foi "soprado por Deus". Se negligenciarmos a leitura, o estudo e a pregação expositiva das Escrituras, a igreja ficará desarmada e vulnerável. A Palavra de Deus é a nossa luz, a nossa arma e o nosso alimento. Que possamos nos submeter à sua autoridade e confiar na sua suficiência absoluta.`
  },
  {
    id: 'jas_2_14_26',
    bookId: 'JAS',
    chapter: 2,
    startVerse: 14,
    endVerse: 26,
    title: 'A Fé Viva e as Obras Evidentes',
    theme: 'A Inseparabilidade entre a Crença e a Ação',
    introduction: `A Epístola de Tiago é o "Provérbios do Novo Testamento", focada na sabedoria prática. Nesta passagem controversa, Tiago confronta um falso entendimento da graça. Alguns estavam ensinando que a fé intelectual era suficiente para a salvação, mesmo que não houvesse mudança de vida. Tiago não contradiz a doutrina de Paulo da justificação pela fé somente; ele esclarece *qual tipo* de fé justifica. A fé que salva nunca está só; ela sempre produz o fruto das boas obras.`,
    points: [
      {
        verseRef: 'v. 14-17',
        title: 'A Inutilidade da Fé Meramente Verbal',
        description: `A Fé Morta. Tiago faz uma pergunta retórica (v. 14): "Meus irmãos, que aproveita se alguém disser que tem fé, e não tiver as obras? Porventura a fé pode salvá-lo?". Ele ilustra com um exemplo prático (v. 15-16): ver um irmão nu e faminto e dizer "Ide em paz, aquecei-vos e fartai-vos", sem dar-lhe nada, é inútil. Da mesma forma (v. 17), "a fé, se não tiver as obras, é morta em si mesma". Uma profissão de fé verbal que não resulta em compaixão e obediência é um cadáver espiritual.`
      },
      {
        verseRef: 'v. 18-20',
        title: 'A Fé Demonstrada e a Ortodoxia dos Demônios',
        description: `Mostra-me a Tua Fé. Tiago desafia o crente nominal (v. 18): "Mostra-me a tua fé sem as tuas obras, e eu te mostrarei a minha fé pelas minhas obras". A fé é invisível; a única maneira de provar a sua existência é através das ações visíveis. Ele então dá um golpe esmagador no mero assentimento intelectual (v. 19): "Tu crês que há um só Deus; fazes bem. Também os demônios o creem, e estremecem". Os demônios têm uma teologia ortodoxa (eles sabem que Deus existe e quem Jesus é), mas não são salvos porque não têm uma fé submissa e transformadora.`
      },
      {
        verseRef: 'v. 21-26',
        title: 'Os Exemplos de Abraão e Raabe',
        description: `A Fé Aperfeiçoada. Tiago usa dois exemplos extremos do Antigo Testamento: Abraão (o patriarca judeu) e Raabe (a prostituta gentia). Abraão foi justificado pelas obras quando ofereceu Isaque (v. 21). A sua fé "cooperou com as suas obras, e que pelas obras a fé foi aperfeiçoada" (v. 22). A obediência de Abraão foi a prova visível da fé que ele já tinha em Gênesis 15. Raabe foi justificada quando escondeu os espias (v. 25). Tiago conclui (v. 26): "Porque, assim como o corpo sem o espírito está morto, assim também a fé sem obras é morta".`
      }
    ],
    conclusion: `Tiago 2:14-26 não ensina a salvação pelas obras, mas a salvação por uma fé que trabalha. Paulo ensina que somos salvos *pela* fé; Tiago ensina *qual* fé salva. O evangelho da graça gratuita não é um evangelho de graça barata. Se a nossa religião consiste apenas em ir à igreja e concordar com doutrinas, mas não muda a forma como tratamos os pobres, como perdoamos os inimigos e como vivemos em pureza, a nossa fé é morta. A verdadeira fé em Cristo transforma inevitavelmente a vida.`
  },
  {
    id: '1pe_1_3_9',
    bookId: '1PE',
    chapter: 1,
    startVerse: 3,
    endVerse: 9,
    title: 'A Viva Esperança e a Provação da Fé',
    theme: 'A Alegria Inabalável em Meio ao Sofrimento',
    introduction: `O apóstolo Pedro escreve a cristãos que estavam espalhados pela Ásia Menor e enfrentando severa perseguição e marginalização social. Em vez de oferecer falsas promessas de alívio imediato, Pedro ancora a alma deles na eternidade. Ele começa a carta com uma explosão de louvor a Deus pela salvação, explicando que o sofrimento não é um sinal do abandono de Deus, mas a fornalha onde a fé verdadeira é purificada e preparada para a glória final.`,
    points: [
      {
        verseRef: 'v. 3-5',
        title: 'A Regeneração para uma Viva Esperança',
        description: `A Herança Incorruptível. Pedro bendiz a Deus que, "segundo a sua grande misericórdia, nos gerou de novo para uma viva esperança, pela ressurreição de Jesus Cristo dentre os mortos" (v. 3). O novo nascimento não nos dá uma esperança morta baseada em otimismo humano, mas uma esperança viva baseada no túmulo vazio. O destino dessa esperança é "uma herança incorruptível, incontaminável, e que não se pode murchar, guardada nos céus para vós" (v. 4). O mundo pode tirar os bens terrenos dos crentes, mas a herança celestial está guardada por Deus, e nós somos "guardados pelo poder de Deus" (v. 5) até alcançá-la.`
      },
      {
        verseRef: 'v. 6-7',
        title: 'O Propósito da Provação: A Fé Purificada',
        description: `O Ouro no Fogo. Pedro reconhece a realidade da dor (v. 6): "Em que vós grandemente vos alegrais, ainda que agora importa, sendo necessário, que estejais por um pouco contristados com várias tentações (provações)". A alegria cristã coexiste com a tristeza. As provações são "necessárias" e temporárias ("por um pouco"). O propósito é teológico (v. 7): "Para que a prova da vossa fé, muito mais preciosa do que o ouro que perece e é provado pelo fogo, se ache em louvor, e honra, e glória, na revelação de Jesus Cristo". O sofrimento é o cadinho de Deus para remover as impurezas da nossa fé.`
      },
      {
        verseRef: 'v. 8-9',
        title: 'O Amor a Cristo e a Alegria Indizível',
        description: `A Salvação da Alma. Pedro descreve o milagre do amor cristão (v. 8): "Ao qual, não o havendo visto, amais; no qual, não o vendo agora, mas crendo, vos alegrais com gozo inefável e glorioso". Os leitores de Pedro (como nós) nunca tinham visto Jesus fisicamente, mas a fé gerou um amor profundo e uma alegria que as palavras não podem descrever ("inefável"), mesmo no meio da perseguição. O resultado final dessa fé provada e desse amor perseverante é (v. 9) "o fim da vossa fé, a salvação das vossas almas".`
      }
    ],
    conclusion: `1 Pedro 1:3-9 é um manual de sobrevivência para o cristão sofredor. A nossa alegria não depende de circunstâncias favoráveis, mas da nossa herança segura no céu e do nosso amor pelo Salvador invisível. Quando o fogo da provação aquecer, não devemos nos desesperar achando que Deus nos esqueceu. Pelo contrário, Ele está trabalhando como um ourives, purificando a nossa fé para que ela brilhe para a Sua glória no dia em que Jesus Cristo for revelado ao mundo.`
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
  console.log('Successfully added 4 new pericopes for Epistles (Batch 10d).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
