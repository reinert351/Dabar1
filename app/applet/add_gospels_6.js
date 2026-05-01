const fs = require('fs');

const newPericopes = [
  {
    id: 'mat_4_1_11',
    bookId: 'MAT',
    chapter: 4,
    startVerse: 1,
    endVerse: 11,
    title: 'A Tentação de Jesus no Deserto',
    theme: 'A Vitória sobre o Inimigo e a Suficiência da Palavra',
    introduction: `Logo após o Seu batismo, onde o Pai declarou o Seu amor e filiação, Jesus é conduzido pelo Espírito ao deserto para ser tentado pelo Diabo. Onde o primeiro Adão falhou em um paraíso perfeito, o Último Adão (Cristo) triunfa em um deserto hostil. Esta passagem revela as táticas fundamentais do inimigo e nos ensina que a única arma eficaz contra a tentação é a submissão absoluta e o conhecimento profundo da Palavra de Deus.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'A Provação da Fome e a Suficiência de Deus',
        description: `A Tentação da Carne. Após jejuar 40 dias, Jesus teve fome. O tentador ataca no ponto de maior vulnerabilidade física (v. 3): "Se tu és o Filho de Deus, manda que estas pedras se tornem em pães". Satanás tenta Jesus a usar o Seu poder divino para satisfazer uma necessidade legítima de forma ilegítima, duvidando da provisão do Pai. Jesus responde citando Deuteronômio 8:3 (v. 4): "Nem só de pão viverá o homem, mas de toda a palavra que sai da boca de Deus". A obediência a Deus é mais necessária para a vida do que a própria comida.`
      },
      {
        verseRef: 'v. 5-7',
        title: 'A Presunção e o Teste da Fidelidade',
        description: `A Tentação do Orgulho Espiritual. Satanás leva Jesus ao pináculo do templo e muda a tática: ele usa a própria Bíblia (v. 6). Ele cita o Salmo 91, omitindo partes, para tentar Jesus a pular e forçar Deus a um resgate espetacular. É a tentação de testar Deus, exigindo que Ele prove o Seu amor através de um milagre. Jesus rebate o uso distorcido da Escritura com a própria Escritura (Deuteronômio 6:16), dizendo (v. 7): "Também está escrito: Não tentarás o Senhor teu Deus". A verdadeira fé confia em Deus no vale, não exige espetáculos no pináculo.`
      },
      {
        verseRef: 'v. 8-11',
        title: 'A Idolatria e o Atalho para a Glória',
        description: `A Tentação do Poder. Na última investida, Satanás mostra a Jesus todos os reinos do mundo e a sua glória (v. 8). Ele oferece um atalho (v. 9): "Tudo isto te darei se, prostrado, me adorares". Era a oferta da coroa sem a cruz, o domínio do mundo sem o sofrimento do Calvário. Jesus rejeita a idolatria com veemência, citando Deuteronômio 6:13 (v. 10): "Vai-te, Satanás, porque está escrito: Ao Senhor teu Deus adorarás, e só a ele servirás". O Diabo foge, e os anjos vêm servir a Jesus (v. 11). A vitória foi conquistada pela submissão inabalável à vontade do Pai.`
      }
    ],
    conclusion: `Mateus 4:1-11 nos mostra que não temos um sumo sacerdote que não possa compadecer-se das nossas fraquezas. Jesus enfrentou as mesmas categorias de tentação que nós (a concupiscência da carne, dos olhos e a soberba da vida) e venceu. A Sua vitória é a nossa vitória. Quando somos tentados, não devemos confiar na nossa própria força de vontade, mas na Palavra de Deus e na graça dAquele que já derrotou o tentador por nós.`
  },
  {
    id: 'mat_14_22_33',
    bookId: 'MAT',
    chapter: 14,
    startVerse: 22,
    endVerse: 33,
    title: 'Jesus Anda Sobre as Águas',
    theme: 'A Fé no Meio da Tempestade e o Foco em Cristo',
    introduction: `Após a multiplicação dos pães, Jesus obriga os Seus discípulos a entrarem no barco enquanto Ele sobe ao monte para orar. Durante a madrugada, o barco é açoitado por uma tempestade violenta. A caminhada de Jesus sobre as águas e a subsequente tentativa de Pedro revelam lições profundas sobre o medo, a natureza da fé e o poder salvador de Cristo quando os nossos próprios recursos falham.`,
    points: [
      {
        verseRef: 'v. 22-27',
        title: 'A Tempestade, o Fantasma e a Presença',
        description: `O Medo do Desconhecido. Os discípulos estavam no meio do mar, "açoitados pelas ondas" (v. 24). Na quarta vigília da noite (entre 3h e 6h da manhã), a hora mais escura, Jesus vai até eles andando sobre o mar (v. 25). O milagre aterroriza os discípulos, que pensam ver um fantasma e gritam de medo (v. 26). O medo frequentemente nos cega para a presença de Deus nas nossas provações. Jesus imediatamente os acalma com uma declaração de divindade (v. 27): "Tende bom ânimo, sou eu (Ego eimi - Eu Sou), não temais". A presença do "Eu Sou" é a resposta para o medo.`
      },
      {
        verseRef: 'v. 28-29',
        title: 'O Chamado e o Passo de Fé de Pedro',
        description: `Saindo do Barco. Pedro, impulsivo e ousado, faz um pedido extraordinário (v. 28): "Senhor, se és tu, manda-me ir ter contigo por cima das águas". Ele não pede para a tempestade parar; ele pede para experimentar o poder de Cristo na tempestade. Jesus diz apenas uma palavra: "Vem" (v. 29). Pedro desce do barco e, milagrosamente, anda sobre as águas para ir ter com Jesus. A fé verdadeira exige que abandonemos as nossas falsas seguranças (o barco) e nos aventuremos na palavra de Cristo.`
      },
      {
        verseRef: 'v. 30-33',
        title: 'A Dúvida, o Afundamento e o Resgate',
        description: `O Foco Desviado. O milagre de Pedro dura pouco. "Mas, sentindo o vento forte, teve medo; e, começando a ir para o fundo, clamou, dizendo: Senhor, salva-me!" (v. 30). Pedro afundou não porque a tempestade piorou, mas porque ele tirou os olhos de Jesus e olhou para as circunstâncias (o vento). A dúvida afunda a fé. Jesus estende a mão imediatamente, o segura e o repreende com amor (v. 31): "Homem de pouca fé, por que duvidaste?". Quando eles entram no barco, o vento cessa, e os discípulos O adoram (v. 32-33): "És verdadeiramente o Filho de Deus".`
      }
    ],
    conclusion: `Mateus 14:22-33 nos ensina que a fé não é a ausência de tempestades, mas a manutenção do nosso foco em Jesus Cristo no meio delas. Quando olhamos para os "ventos fortes" dos nossos problemas, começamos a afundar no desespero. Mas mesmo quando a nossa fé vacila e afundamos, a oração mais curta e eficaz da Bíblia ("Senhor, salva-me!") é suficiente para mover a mão forte do Salvador em nosso resgate.`
  },
  {
    id: 'mrk_10_17_27',
    bookId: 'MRK',
    chapter: 10,
    startVerse: 17,
    endVerse: 27,
    title: 'O Jovem Rico e o Ídolo do Coração',
    theme: 'A Impossibilidade da Auto-Salvação e o Custo do Discipulado',
    introduction: `Um jovem rico, moral e entusiasmado corre até Jesus com a pergunta mais importante da vida: "Que farei para herdar a vida eterna?". Ele parece o candidato perfeito para o discipulado. No entanto, Jesus não lhe oferece uma oração rápida, mas faz um diagnóstico cirúrgico do seu coração. Esta passagem expõe o perigo mortal da idolatria da riqueza e demonstra que a salvação é uma obra impossível para os homens, mas possível apenas pela graça de Deus.`,
    points: [
      {
        verseRef: 'v. 17-20',
        title: 'A Pergunta Certa e a Moralidade Superficial',
        description: `O Engano da Religião. O jovem se ajoelha e chama Jesus de "Bom Mestre" (v. 17). Jesus o desafia sobre o significado de "bom" (v. 18), apontando para Deus. Jesus então lista os mandamentos da segunda tábua da lei (relacionamentos humanos, v. 19). O jovem responde com sinceridade cega (v. 20): "Mestre, tudo isso guardei desde a minha mocidade". Ele tinha uma moralidade exterior impecável, mas não compreendia a profundidade espiritual da Lei. Ele achava que a vida eterna era algo que ele poderia "fazer" ou comprar com o seu bom comportamento.`
      },
      {
        verseRef: 'v. 21-22',
        title: 'O Diagnóstico de Amor e a Exigência Radical',
        description: `O Bisturi na Alma. Marcos registra um detalhe comovente (v. 21): "E Jesus, olhando para ele, o amou". O que Jesus diz a seguir não é por crueldade, mas por amor redentor: "Falta-te uma coisa: vai, vende tudo quanto tens, e dá-o aos pobres, e terás um tesouro no céu; e vem, toma a cruz, e segue-me". Jesus não está ensinando a salvação por filantropia. Ele está aplicando o Primeiro Mandamento ("Não terás outros deuses"). O dinheiro era o deus daquele jovem. Para seguir a Jesus, o ídolo precisava ser destruído. O resultado é trágico (v. 22): "Mas ele, pesaroso desta palavra, retirou-se triste; porque possuía muitas propriedades". Ele amava mais a sua riqueza do que a sua alma.`
      },
      {
        verseRef: 'v. 23-27',
        title: 'A Impossibilidade Humana e o Milagre da Graça',
        description: `O Camelo e a Agulha. Jesus usa a tristeza do jovem para ensinar os discípulos (v. 23): "Quão dificilmente entrarão no reino de Deus os que têm riquezas!". Os discípulos ficam maravilhados, pois a teologia da época via a riqueza como sinal do favor de Deus. Jesus usa uma hipérbole chocante (v. 25): "É mais fácil passar um camelo pelo fundo de uma agulha, do que entrar um rico no reino de Deus". Os discípulos, desesperados, perguntam (v. 26): "Quem poderá, pois, salvar-se?". Jesus dá a resposta definitiva sobre a salvação (v. 27): "Para os homens é impossível, mas não para Deus, porque para Deus todas as coisas são possíveis".`
      }
    ],
    conclusion: `Marcos 10:17-27 destrói a ilusão de que podemos adicionar Jesus à nossa vida enquanto mantemos os nossos ídolos no trono do nosso coração. A salvação exige rendição total. O jovem rico foi embora triste porque percebeu que o custo era alto demais. A lição final, porém, é de esperança: a salvação é impossível para o esforço humano, mas é o milagre que Deus opera quando quebra os nossos ídolos e nos atrai pela Sua graça.`
  },
  {
    id: 'luk_10_38_42',
    bookId: 'LUK',
    chapter: 10,
    startVerse: 38,
    endVerse: 42,
    title: 'Marta, Maria e a Boa Parte',
    theme: 'A Prioridade da Devoção sobre o Ativismo Religioso',
    introduction: `Imediatamente após a Parábola do Bom Samaritano (que enfatiza o serviço ativo ao próximo), Lucas insere a história de Marta e Maria (que enfatiza a devoção passiva a Cristo). Jesus é recebido na casa de Marta. Enquanto Maria senta-se aos pés de Jesus para ouvir a Sua palavra, Marta se afoga em ansiedade e trabalho para servir o Mestre. A repreensão amorosa de Jesus a Marta é um diagnóstico atemporal para a igreja: o ativismo religioso, mesmo com boas intenções, nunca deve substituir a intimidade com o Salvador.`,
    points: [
      {
        verseRef: 'v. 38-39',
        title: 'A Hospitalidade de Marta e a Devoção de Maria',
        description: `Aos Pés do Mestre. Marta recebe Jesus em sua casa (v. 38). O seu desejo de servir o Senhor era nobre e culturalmente esperado. A sua irmã, Maria, faz algo radical para uma mulher do primeiro século (v. 39): "a qual, assentando-se também aos pés de Jesus, ouvia a sua palavra". Sentar aos pés de um rabino era a postura de um discípulo oficial. Maria ignorou as expectativas sociais e as tarefas domésticas porque reconheceu que a presença e o ensino de Jesus eram a oportunidade de uma vida.`
      },
      {
        verseRef: 'v. 40',
        title: 'A Distração, a Ansiedade e a Acusação de Marta',
        description: `O Perigo do Serviço Desfocado. O texto diz que Marta "andava distraída em muitos serviços" (v. 40). A palavra grega para "distraída" (periespato) significa ser puxada em várias direções. O serviço que deveria ser uma alegria tornou-se um fardo. A ansiedade de Marta a leva a fazer algo chocante: ela interrompe o sermão de Jesus, acusa o Senhor de não se importar e dá uma ordem a Ele: "Senhor, não se te dá de que minha irmã me deixe servir só? Dize-lhe que me ajude". Quando o nosso serviço a Deus substitui a nossa comunhão com Deus, rapidamente nos tornamos amargos, críticos dos outros e exigentes com o próprio Deus.`
      },
      {
        verseRef: 'v. 41-42',
        title: 'A Repreensão Amorosa e a Única Coisa Necessária',
        description: `A Escolha da Boa Parte. Jesus responde com profunda ternura, repetindo o nome dela (v. 41): "Marta, Marta, estás ansiosa e afadigada com muitas coisas". Jesus não condena o serviço dela, mas a sua ansiedade e o seu foco dividido. Ele então estabelece a prioridade absoluta da vida cristã (v. 42): "Mas uma só é necessária; e Maria escolheu a boa parte, a qual não lhe será tirada". A "única coisa necessária" não é um banquete elaborado, mas a nutrição espiritual que vem de ouvir a Palavra de Cristo. O serviço é importante, mas a devoção é indispensável.`
      }
    ],
    conclusion: `Lucas 10:38-42 é um aviso urgente para a igreja moderna, frequentemente obcecada com programas, eventos e ativismo. É muito fácil estarmos tão ocupados trabalhando *para* Jesus que nos esquecemos de estar *com* Jesus. O Senhor não precisa do nosso serviço frenético; Ele deseja a nossa atenção, o nosso amor e a nossa adoração. Devemos lutar contra a ansiedade das "muitas coisas" e escolher deliberadamente a "boa parte": sentar aos pés do Mestre e ouvir a Sua voz.`
  },
  {
    id: 'jhn_13_1_17',
    bookId: 'JHN',
    chapter: 13,
    startVerse: 1,
    endVerse: 17,
    title: 'O Lava-Pés e o Servo Sofredor',
    theme: 'A Humildade, a Purificação e o Exemplo de Liderança',
    introduction: `Na noite da Última Ceia, sabendo que a Sua morte estava iminente e que um dos Seus discípulos O trairia, Jesus realiza um ato profético e chocante. Em uma cultura onde lavar os pés era a tarefa do escravo mais baixo da casa, o Rei do Universo tira a Sua túnica, pega uma bacia e uma toalha, e lava a sujeira dos pés dos Seus seguidores. Este ato não é apenas uma lição de humildade, mas uma parábola visual da purificação que Ele realizaria na cruz.`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'O Amor até o Fim e a Bacia de Água',
        description: `A Majestade na Toalha. João estabelece o cenário teológico (v. 1-3): Jesus sabia que a Sua hora havia chegado, Ele amou os Seus "até o fim" (até o extremo), e Ele sabia que o Pai Lhe dera tudo nas mãos. A resposta de Jesus à Sua própria majestade absoluta não é exigir adoração, mas assumir a forma de escravo. "Levantou-se da ceia, tirou as vestes, e, tomando uma toalha, cingiu-se" (v. 4). Ele derrama água na bacia e começa a lavar e enxugar os pés dos discípulos (v. 5). O Criador está lavando a poeira dos pés das Suas criaturas, incluindo os pés de Judas, o traidor.`
      },
      {
        verseRef: 'v. 6-11',
        title: 'A Resistência de Pedro e a Necessidade de Purificação',
        description: `O Banho e a Lavagem. Pedro, escandalizado com a inversão de papéis, recusa-se a permitir que Jesus lave os seus pés (v. 6-8). Jesus responde: "Se eu te não lavar, não tens parte comigo" (v. 8). A lavagem dos pés simboliza a purificação do pecado; sem ela, não há salvação ou comunhão com Cristo. Pedro, extremista, pede um banho completo (v. 9). Jesus explica a doutrina da justificação e santificação (v. 10): "Aquele que está lavado (justificado, o banho completo da salvação) não necessita de lavar senão os pés (santificação diária, o perdão dos pecados cotidianos), pois no mais todo está limpo".`
      },
      {
        verseRef: 'v. 12-17',
        title: 'O Exemplo do Mestre e a Bem-Aventurança do Serviço',
        description: `A Liderança Invertida. Após lavar os pés de todos, Jesus reassume as Suas vestes e o Seu lugar de autoridade (v. 12). Ele explica o significado ético do que fez (v. 13-14): "Vós me chamais Mestre e Senhor, e dizeis bem, porque eu o sou. Ora, se eu, Senhor e Mestre, vos lavei os pés, vós deveis também lavar os pés uns aos outros". Jesus destrói a hierarquia de poder do mundo. Na igreja, a autoridade é exercida através do serviço humilde. Jesus conclui com uma promessa (v. 17): "Se sabeis estas coisas, bem-aventurados sois se as fizerdes". A felicidade espiritual não vem do conhecimento teológico, mas da prática da humildade.`
      }
    ],
    conclusion: `João 13:1-17 nos confronta com o escândalo da graça e o chamado ao serviço. Se o próprio Filho de Deus não considerou indigno lavar os pés sujos de pescadores e de um traidor, não há nenhuma tarefa na igreja ou na vida que seja "baixa demais" para nós. O lava-pés nos lembra que fomos purificados pelo sangue de Cristo e nos convoca a pegar a toalha e a bacia para servirmos uns aos outros em amor sacrificial.`
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
  console.log('Successfully added 5 new pericopes for the Gospels (Part 6).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
