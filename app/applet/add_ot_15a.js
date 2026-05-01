const fs = require('fs');

const newPericopes = [
  {
    id: 'gen_15_1_6',
    bookId: 'GEN',
    chapter: 15,
    startVerse: 1,
    endVerse: 6,
    title: 'A Aliança com Abrão',
    theme: 'A Promessa e a Justificação pela Fé',
    introduction: `Após uma grande vitória militar e a recusa de enriquecer com os despojos do rei de Sodoma (capítulo 14), Abrão sente medo e incerteza sobre o seu futuro. Ele ainda não tem filhos, e a promessa de Deus parece distante. Em Gênesis 15, Deus aparece a Abrão em uma visão para reafirmar a Sua aliança. O diálogo que se segue culmina em um dos versículos mais importantes de toda a Bíblia (v. 6), que se torna o pilar da doutrina da justificação pela fé no Novo Testamento, citado repetidamente pelo apóstolo Paulo.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Escudo Divino e a Dúvida Humana',
        description: `Eu Sou o Teu Escudo. Deus inicia com uma palavra de conforto (v. 1): "Não temas, Abrão, eu sou o teu escudo, o teu grandíssimo galardão". Deus promete proteção e recompensa. Mas Abrão responde com uma queixa honesta (v. 2-3): "Senhor Deus, que me hás de dar, pois ando sem filhos... Eis que não me tens dado filhos, e eis que um nascido na minha casa será o meu herdeiro". A fé de Abrão estava vacilando diante da realidade biológica. Ele tentava encontrar uma solução humana (Eliezer de Damasco) para uma promessa divina.`
      },
      {
        verseRef: 'v. 4-5',
        title: 'A Promessa Reafirmada e a Visão das Estrelas',
        description: `Conta as Estrelas. Deus rejeita a solução humana de Abrão (v. 4): "Este não será o teu herdeiro; mas aquele que de tuas entranhas sair, este será o teu herdeiro". Deus então tira Abrão da sua tenda (da sua visão limitada) e o leva para fora, sob o céu noturno (v. 5): "Olha agora para os céus, e conta as estrelas, se as podes contar. E disse-lhe: Assim será a tua descendência". Deus usa a vastidão da criação para ilustrar a magnitude da Sua promessa, desafiando Abrão a olhar para o poder do Criador, e não para a sua própria esterilidade.`
      },
      {
        verseRef: 'v. 6',
        title: 'A Resposta da Fé e a Imputação da Justiça',
        description: `E Creu Ele no Senhor. A resposta de Abrão é o momento decisivo da história da redenção (v. 6): "E creu ele no Senhor, e imputou-lhe isto por justiça". Abrão não fez nenhuma obra, não ofereceu nenhum sacrifício e não foi circuncidado neste momento. Ele simplesmente confiou na palavra de Deus. A palavra "imputou" (hashab) é um termo contábil: Deus creditou a fé de Abrão na sua conta como se fosse justiça perfeita. A salvação nunca foi baseada no mérito humano, mas sempre na fé na promessa de Deus.`
      }
    ],
    conclusion: `Gênesis 15:1-6 é a semente do evangelho no Antigo Testamento. Paulo usa este texto em Romanos 4 e Gálatas 3 para provar que somos salvos exclusivamente pela graça, mediante a fé. Quando as nossas circunstâncias gritam que as promessas de Deus são impossíveis, somos chamados a sair da "tenda" das nossas limitações e olhar para as "estrelas" do poder de Deus. A justificação não é algo que alcançamos; é um presente que recebemos quando, como Abrão, simplesmente cremos Naquele que justifica o ímpio.`
  },
  {
    id: 'gen_28_10_17',
    bookId: 'GEN',
    chapter: 28,
    startVerse: 10,
    endVerse: 17,
    title: 'O Sonho de Jacó em Betel',
    theme: 'A Escada para o Céu e a Presença Inesperada',
    introduction: `Jacó está fugindo de casa. Ele enganou o seu pai, roubou a bênção do seu irmão Esaú e agora é um fugitivo solitário, temendo pela sua vida, a caminho de Harã. No meio do nada, ele para para dormir, usando uma pedra como travesseiro. É no ponto mais baixo e vulnerável da sua vida que Deus se revela a ele em um sonho extraordinário. A visão da escada em Betel é uma demonstração profunda da graça de Deus, que busca os pecadores mesmo quando eles estão fugindo das consequências dos seus próprios erros.`,
    points: [
      {
        verseRef: 'v. 10-12',
        title: 'A Fuga Solitária e a Escada Celestial',
        description: `Uma Escada Posta na Terra. Jacó adormece em um lugar desolado (v. 11). Ele tem um sonho (v. 12): "E sonhou: e eis uma escada posta na terra, cujo topo tocava nos céus; e eis que os anjos de Deus subiam e desciam por ela". A escada representa a comunicação e o acesso ininterrupto entre o céu e a terra. Os anjos não estão parados; eles estão ativamente ministrando. Jesus mais tarde aplicaria esta imagem a Si mesmo (João 1:51), revelando que Ele é a verdadeira "escada", o único mediador que liga Deus à humanidade.`
      },
      {
        verseRef: 'v. 13-15',
        title: 'A Promessa Incondicional e a Graça Surpreendente',
        description: `Eu Sou Contigo. O Senhor está no topo da escada e fala (v. 13). Surpreendentemente, Deus não repreende Jacó pelos seus enganos. Em vez disso, Ele reafirma a aliança feita com Abraão e Isaque (v. 13-14), prometendo a terra e uma descendência inumerável. A promessa mais doce é pessoal (v. 15): "E eis que eu sou contigo, e te guardarei por onde quer que fores, e te farei tornar a esta terra; porque não te deixarei, até que haja cumprido o que te tenho falado". A graça de Deus persegue os fugitivos.`
      },
      {
        verseRef: 'v. 16-17',
        title: 'O Despertar Assombrado e a Casa de Deus',
        description: `O Senhor Está Neste Lugar, e Eu Não o Sabia. Jacó acorda e a sua perspectiva muda radicalmente (v. 16): "Na verdade o Senhor está neste lugar; e eu não o sabia". Ele pensava estar sozinho e abandonado, mas descobre que estava no centro da atenção divina. Ele é tomado por um temor reverente (v. 17): "Quão terrível é este lugar! Este não é outro lugar, senão a casa de Deus; e esta é a porta dos céus". Ele chama o lugar de Betel (Casa de Deus). Qualquer lugar, por mais desolado que seja, torna-se um santuário quando Deus se revela ali.`
      }
    ],
    conclusion: `Gênesis 28:10-17 nos ensina que não podemos fugir da presença de Deus. Muitas vezes, é nos nossos momentos de maior isolamento, culpa e medo (quando a nossa cabeça repousa sobre as "pedras" da vida) que Deus abre os céus para nos mostrar a Sua graça. Nós não precisamos construir uma torre para alcançar a Deus (como em Babel); Deus desceu uma escada até nós na pessoa de Jesus Cristo. A promessa a Jacó é a promessa a nós: "Eu sou contigo, e não te deixarei".`
  },
  {
    id: 'gen_50_15_21',
    bookId: 'GEN',
    chapter: 50,
    startVerse: 15,
    endVerse: 21,
    title: 'O Perdão de José',
    theme: 'O Mal Transformado em Bem pela Providência',
    introduction: `O livro de Gênesis termina com a morte do patriarca Jacó. Com a morte do pai, os irmãos de José são tomados pelo pânico. Eles temem que José, agora o homem mais poderoso do Egito, finalmente se vingue por eles o terem vendido como escravo décadas antes. Eles enviam uma mensagem implorando perdão. A resposta de José é um dos ápices morais e teológicos do Antigo Testamento, revelando um coração totalmente curado pela compreensão da soberania e da providência de Deus.`,
    points: [
      {
        verseRef: 'v. 15-17',
        title: 'O Medo dos Irmãos e a Culpa Persistente',
        description: `Porventura Nos Odiará José. A culpa é um fardo pesado. Mesmo tendo sido sustentados por José durante anos, os irmãos não conseguiam acreditar que o perdão dele era real (v. 15). Eles inventam (ou transmitem) uma mensagem do pai falecido, implorando que José perdoe a transgressão deles (v. 16-17). Eles se prostram e se oferecem como escravos. Quando José ouve a mensagem, ele chora (v. 17). Ele chora porque percebe que, após tantos anos de amor demonstrado, os seus irmãos ainda não confiavam no seu perdão.`
      },
      {
        verseRef: 'v. 18-19',
        title: 'A Rejeição da Vingança e o Lugar de Deus',
        description: `Estou Eu em Lugar de Deus? Os irmãos caem aos pés de José (v. 18). A resposta de José é imediata e libertadora (v. 19): "Não temais; porque porventura estou eu em lugar de Deus?". José recusa-se a assumir o papel de juiz e vingador. Ele entende que a vingança pertence a Deus (Romanos 12:19). O verdadeiro perdão só é possível quando abrimos mão do nosso "direito" de punir aqueles que nos feriram, confiando que Deus é o juiz justo de toda a terra.`
      },
      {
        verseRef: 'v. 20-21',
        title: 'A Lente da Providência e o Cuidado Amoroso',
        description: `Vós Intentastes o Mal, Deus o Tornou em Bem. O versículo 20 é a chave hermenêutica para toda a história de José e para o sofrimento humano: "Vós bem intentastes mal contra mim; porém Deus o intentou para bem, para fazer como se vê neste dia, para conservar muita gente com vida". José não nega o mal que os irmãos fizeram (foi pecado real e doloroso), mas ele vê uma mão maior por trás das ações deles. A soberania de Deus não anula a maldade humana, mas a sobrepuja, usando-a para cumprir propósitos redentores. José promete sustentá-los e os consola (v. 21).`
      }
    ],
    conclusion: `Gênesis 50:15-21 nos ensina o segredo para perdoar o imperdoável: a lente da providência divina. Se olharmos apenas para as pessoas que nos feriram, ficaremos cheios de amargura. Mas se olharmos para o Deus que governa todas as coisas, podemos ver como Ele usa até as traições mais cruéis para forjar o nosso caráter e cumprir os Seus propósitos. A cruz de Cristo é a prova final de Gênesis 50:20: os homens intentaram o maior mal da história ao crucificar o Filho de Deus, mas Deus o intentou para o bem supremo, para conservar muita gente com vida.`
  },
  {
    id: 'exo_12_1_13',
    bookId: 'EXO',
    chapter: 12,
    startVerse: 1,
    endVerse: 13,
    title: 'A Instituição da Páscoa',
    theme: 'O Sangue do Cordeiro e o Livramento do Julgamento',
    introduction: `Após nove pragas devastadoras, o Faraó ainda se recusa a libertar o povo de Israel. Deus anuncia a décima e última praga: a morte de todos os primogênitos na terra do Egito. No entanto, Deus providencia um meio de escape para o Seu povo. As instruções dadas no capítulo 12 para a primeira Páscoa (Pesach) não são apenas regras para um ritual histórico, mas o retrato mais claro e detalhado do Antigo Testamento sobre a expiação substitutiva, apontando diretamente para o sacrifício de Jesus Cristo, o Cordeiro de Deus.`,
    points: [
      {
        verseRef: 'v. 1-5',
        title: 'A Escolha do Cordeiro e a Perfeição Exigida',
        description: `Um Cordeiro Sem Defeito. Deus muda o calendário de Israel (v. 2), marcando a redenção como o novo começo da nação. A instrução central é dada (v. 3): cada família deve tomar um cordeiro. O cordeiro não podia ser qualquer animal (v. 5): "O cordeiro, ou cabrito, será sem mácula (sem defeito), um macho de um ano, o qual tomareis das ovelhas ou das cabras". A perfeição do animal apontava para a impecabilidade de Cristo (1 Pedro 1:19). O cordeiro devia ser guardado por quatro dias antes do sacrifício, sendo examinado para garantir a sua pureza.`
      },
      {
        verseRef: 'v. 6-11',
        title: 'O Sacrifício, o Sangue e a Refeição da Pressa',
        description: `Tomarão do Sangue e Pô-lo-ão nas Umbreiras. No dia catorze, toda a congregação deveria imolar o cordeiro ao crepúsculo (v. 6). O cordeiro tinha que morrer para que o primogênito vivesse. O sangue do cordeiro deveria ser aplicado nas duas ombreiras e na verga da porta das casas (v. 7). A carne deveria ser assada no fogo e comida com pães ázimos (sem fermento, símbolo de pureza) e ervas amargas (lembrança da escravidão) (v. 8). Eles deveriam comer apressadamente, com os lombos cingidos e cajado na mão (v. 11), prontos para a libertação.`
      },
      {
        verseRef: 'v. 12-13',
        title: 'O Julgamento Divino e a Proteção do Sangue',
        description: `Vendo Eu o Sangue, Passarei por Cima de Vós. Deus anuncia o juízo (v. 12): Ele passaria pela terra do Egito naquela noite e feriria todos os primogênitos, executando juízo contra os deuses do Egito. Mas a promessa de salvação é dada no versículo 13: "E aquele sangue vos será por sinal nas casas em que estiverdes; vendo eu sangue, passarei por cima de vós, e não haverá entre vós praga de mortandade, quando eu ferir a terra do Egito". O anjo da morte não olharia para a moralidade de quem estava dentro da casa, mas apenas para a presença do sangue na porta.`
      }
    ],
    conclusion: `Êxodo 12:1-13 é o coração do evangelho no Antigo Testamento. O apóstolo Paulo declara: "Cristo, nossa páscoa, foi sacrificado por nós" (1 Coríntios 5:7). No dia do julgamento final, a nossa salvação não dependerá das nossas boas obras, da nossa etnia ou da nossa religiosidade. A única coisa que nos protegerá da ira justa de Deus é o sangue do Cordeiro perfeito aplicado pela fé nas portas do nosso coração. Quando Deus vê o sangue de Cristo, a Sua justiça é satisfeita, e o julgamento "passa por cima" de nós.`
  },
  {
    id: 'exo_33_12_23',
    bookId: 'EXO',
    chapter: 33,
    startVerse: 12,
    endVerse: 23,
    title: 'A Glória de Deus e a Intercessão',
    theme: 'A Presença Divina como o Maior Bem',
    introduction: `Após o terrível pecado do bezerro de ouro (Êxodo 32), Deus diz a Moisés que o povo pode subir para a Terra Prometida e que um anjo irá adiante deles para garantir a vitória, mas o próprio Deus não irá no meio deles, para não os consumir (33:1-3). Para Moisés, a Terra Prometida sem a presença de Deus era um deserto. Em Êxodo 33, Moisés entra em uma intercessão ousada e apaixonada, recusando-se a mover-se sem a presença de Deus e pedindo a maior de todas as revelações: ver a glória do Senhor.`,
    points: [
      {
        verseRef: 'v. 12-14',
        title: 'O Clamor pela Presença e a Resposta de Descanso',
        description: `A Tua Presença Irá Comigo. Moisés argumenta com Deus (v. 12-13): "Tu me dizes: Faze subir a este povo... rogo-te que agora me faças saber o teu caminho". Ele lembra a Deus que Israel é o Seu povo. Deus responde com uma promessa reconfortante (v. 14): "A minha presença irá contigo, e eu te darei descanso". A palavra "presença" no hebraico é "face". Deus promete que a Sua própria face (a Sua presença pessoal e íntima) os acompanhará, e isso trará o verdadeiro descanso que nenhuma terra física poderia dar.`
      },
      {
        verseRef: 'v. 15-17',
        title: 'A Condição Inegociável e a Marca da Distinção',
        description: `Se a Tua Presença Não For Conosco, Não Nos Faças Subir. Moisés faz uma declaração radical (v. 15): "Se a tua presença não for conosco, não nos faças subir daqui". Moisés prefere morrer no deserto com Deus do que herdar Canaã sem Ele. Ele entende que a única coisa que distingue Israel das outras nações não é a sua moralidade ou poder militar, mas a presença de Deus (v. 16): "Porventura não é em andares tu conosco, de modo a sermos separados, eu e o teu povo, de todos os povos da terra?". Deus atende ao pedido de Moisés (v. 17).`
      },
      {
        verseRef: 'v. 18-23',
        title: 'O Pedido Ousado e a Revelação da Bondade',
        description: `Rogo-te que Me Mostres a Tua Glória. Encorajado pela graça de Deus, Moisés faz o pedido mais ousado da Bíblia (v. 18): "Rogo-te que me mostres a tua glória". Ele quer ver a essência de Deus. Deus responde (v. 19): "Eu farei passar toda a minha bondade por diante de ti... e terei misericórdia de quem eu tiver misericórdia". A glória de Deus é inseparável da Sua bondade e soberania. Deus avisa que nenhum homem pode ver a Sua face e viver (v. 20), mas providencia um lugar na fenda da rocha (v. 21-23), cobrindo Moisés com a mão enquanto a Sua glória passa, permitindo-lhe ver apenas as Suas "costas" (o rastro da Sua glória).`
      }
    ],
    conclusion: `Êxodo 33:12-23 nos desafia a avaliar os nossos desejos mais profundos. Nós queremos as bênçãos de Deus (a Terra Prometida, a saúde, a prosperidade) mais do que queremos a presença do próprio Deus? Moisés entendeu que os presentes de Deus não têm valor sem o Doador. A verdadeira marca de um cristão é uma fome insaciável pela glória de Deus. E a boa notícia do evangelho é que a glória que Moisés só pôde ver de relance na fenda da rocha, nós agora contemplamos plenamente "na face de Jesus Cristo" (2 Coríntios 4:6).`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 15a).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
