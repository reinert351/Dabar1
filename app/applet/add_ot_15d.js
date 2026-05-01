const fs = require('fs');

const newPericopes = [
  {
    id: 'psa_1_1_6',
    bookId: 'PSA',
    chapter: 1,
    startVerse: 1,
    endVerse: 6,
    title: 'Os Dois Caminhos',
    theme: 'A Árvore Plantada e a Palha Dispersa',
    introduction: `O Salmo 1 serve como o portal de entrada para todo o livro dos Salmos. Ele estabelece o tema fundamental da literatura de sabedoria bíblica: existem apenas dois caminhos na vida, e eles levam a dois destinos radicalmente diferentes. O salmo contrasta a vida do justo, que é enraizada e frutífera devido à sua imersão na Palavra de Deus, com a vida do ímpio, que é superficial, instável e destinada à destruição. É um convite claro para escolhermos onde plantaremos as raízes da nossa vida.`,
    points: [
      {
        verseRef: 'v. 1-2',
        title: 'A Separação do Mal e a Imersão na Palavra',
        description: `O Seu Prazer Está na Lei do Senhor. O salmo começa descrevendo o que o homem bem-aventurado (feliz) não faz (v. 1): ele não anda no conselho dos ímpios (pensamento), não se detém no caminho dos pecadores (comportamento) e não se assenta na roda dos escarnecedores (pertencimento). Há uma progressão descendente no pecado. Em contraste, o versículo 2 descreve o que ele faz: "Antes tem o seu prazer na lei do Senhor, e na sua lei medita de dia e de noite". A sua alegria não está no pecado, mas na comunhão constante com a Palavra de Deus.`
      },
      {
        verseRef: 'v. 3',
        title: 'A Árvore Plantada e a Frutificação Constante',
        description: `Como a Árvore Plantada Junto a Ribeiros. O resultado dessa meditação contínua é estabilidade e vida (v. 3). Ele é comparado a uma árvore "plantada" (não que cresceu por acaso, mas foi intencionalmente cultivada por Deus) junto a ribeiros de águas (a fonte inesgotável do Espírito e da Palavra). Essa árvore dá o seu fruto na estação própria (paciência e propósito), as suas folhas não caem (vitalidade mesmo na seca ou no inverno das provações), e tudo o que ele faz prospera (do ponto de vista eterno de Deus).`
      },
      {
        verseRef: 'v. 4-6',
        title: 'A Palha Dispersa e o Destino Final',
        description: `Não São Assim os Ímpios. O contraste é absoluto (v. 4): "Não são assim os ímpios; mas são como a moinha (palha) que o vento espalha". A palha é a casca vazia do grão: leve, sem raiz, sem fruto e à mercê de qualquer vento de doutrina ou circunstância. Por causa dessa superficialidade, os ímpios não subsistirão no juízo (v. 5). O salmo conclui com a razão final dos dois destinos (v. 6): "Porque o Senhor conhece o caminho dos justos; porém o caminho dos ímpios perecerá". O conhecimento de Deus é a garantia da salvação.`
      }
    ],
    conclusion: `O Salmo 1 nos confronta com uma escolha inadiável. Nós não podemos ser uma árvore e uma palha ao mesmo tempo. A nossa cultura nos incentiva a sermos como a palha: levados pelas emoções do momento, pelas tendências sociais e pela busca superficial de prazer. Mas Deus nos chama a sermos árvores plantadas. A única maneira de termos raízes profundas que suportem as tempestades da vida é através da meditação diária, prazerosa e obediente na Palavra de Deus. Onde você está plantado?`
  },
  {
    id: 'psa_139_1_12',
    bookId: 'PSA',
    chapter: 139,
    startVerse: 1,
    endVerse: 12,
    title: 'A Onisciência e Onipresença de Deus',
    theme: 'O Conhecimento Íntimo e a Fuga Impossível',
    introduction: `O Salmo 139 é uma das meditações mais profundas e poéticas da Bíblia sobre os atributos de Deus. Davi contempla a onisciência de Deus (Ele sabe tudo) e a Sua onipresença (Ele está em todo lugar). Para o ímpio, a ideia de um Deus que vê tudo e de quem não se pode fugir é aterrorizante. Mas para o crente, como Davi, essa verdade é a fonte do maior conforto e segurança. O salmo nos convida a descansar no fato de que somos completamente conhecidos e perfeitamente amados pelo nosso Criador.`,
    points: [
      {
        verseRef: 'v. 1-6',
        title: 'A Onisciência: O Conhecimento Íntimo e Total',
        description: `Tu Me Sondas e Me Conheces. Davi começa declarando que o conhecimento de Deus não é apenas geral, mas intensamente pessoal (v. 1). Deus conhece as nossas ações mais comuns (o assentar e o levantar, v. 2), os nossos pensamentos de longe, os nossos caminhos e até o nosso deitar (v. 3). Deus conhece as nossas palavras antes mesmo de as pronunciarmos (v. 4). Esse conhecimento não é frio e distante; é envolvente e protetor (v. 5): "Tu me cercaste por detrás e por diante, e puseste sobre mim a tua mão". Davi conclui que esse nível de conhecimento é maravilhoso demais para a mente humana (v. 6).`
      },
      {
        verseRef: 'v. 7-10',
        title: 'A Onipresença: A Fuga Impossível e a Mão que Guia',
        description: `Para Onde Me Irei do Teu Espírito? Davi faz uma pergunta retórica (v. 7): é possível fugir da presença de Deus? Ele explora os extremos do universo para provar que a resposta é não. Se ele subir ao céu, Deus está lá; se fizer a sua cama no inferno (Seol, o mundo dos mortos), Deus também está lá (v. 8). Se ele voar com as asas da alva (para o extremo leste) ou habitar nas extremidades do mar (extremo oeste) (v. 9), a conclusão é a mesma (v. 10): "Até ali a tua mão me guiará e a tua destra me susterá". A presença de Deus não é uma ameaça, mas um sustento.`
      },
      {
        verseRef: 'v. 11-12',
        title: 'A Luz nas Trevas e a Visão Perfeita de Deus',
        description: `As Trevas e a Luz São para Ti a Mesma Coisa. Se Davi não pode fugir pela distância, talvez possa se esconder na escuridão (v. 11): "Se disser: Decerto que as trevas me encobrirão; então a noite será luz à roda de mim". Mas a escuridão física ou emocional não é um obstáculo para Deus (v. 12): "Nem ainda as trevas me encobrem de ti; mas a noite resplandece como o dia; as trevas e a luz são para ti a mesma coisa". Deus vê perfeitamente no escuro. Não há segredo, depressão ou vale de sombra da morte onde a luz do Seu olhar não possa nos alcançar.`
      }
    ],
    conclusion: `O Salmo 139:1-12 destrói a ilusão de que podemos viver vidas secretas longe dos olhos de Deus. Ele sabe tudo o que pensamos, dizemos e fazemos. Isso deveria nos levar ao arrependimento profundo. Mas, ao mesmo tempo, é a verdade mais libertadora do mundo. Deus nos conhece até o fundo da nossa alma, com todas as nossas falhas e pecados ocultos, e mesmo assim, Ele não retira a Sua mão de sobre nós. Nós não precisamos nos esconder no escuro; podemos descansar na luz do Seu amor onisciente.`
  },
  {
    id: 'ecc_3_1_8',
    bookId: 'ECC',
    chapter: 3,
    startVerse: 1,
    endVerse: 8,
    title: 'Tempo para Todo Propósito',
    theme: 'A Soberania de Deus sobre as Estações da Vida',
    introduction: `O livro de Eclesiastes, escrito por Salomão, é uma busca filosófica pelo sentido da vida "debaixo do sol" (a vida vista apenas de uma perspectiva terrena). No capítulo 3, Salomão apresenta um dos poemas mais famosos da literatura mundial. Ele lista 14 pares de opostos que abrangem a totalidade da experiência humana. A mensagem central é que a vida não é estática; ela é composta de estações que mudam continuamente. A sabedoria consiste em reconhecer que Deus é soberano sobre o tempo e que há um propósito divino em cada fase da nossa existência.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Ciclo da Vida, da Morte e da Construção',
        description: `Tudo Tem o Seu Tempo Determinado. O poema começa com uma tese universal (v. 1): "Tudo tem o seu tempo determinado, e há tempo para todo o propósito debaixo do céu". Salomão começa com os extremos da existência humana (v. 2): "Tempo de nascer, e tempo de morrer; tempo de plantar, e tempo de arrancar o que se plantou". Nós não controlamos o dia do nosso nascimento nem o dia da nossa morte. Ele continua com ações de destruição e construção (v. 3): "Tempo de matar, e tempo de curar; tempo de derrubar, e tempo de edificar". A vida exige tanto a desconstrução do que é ruim quanto a construção do que é bom.`
      },
      {
        verseRef: 'v. 4-5',
        title: 'O Ciclo das Emoções e dos Relacionamentos',
        description: `Tempo de Chorar, e Tempo de Rir. As emoções humanas também têm as suas estações (v. 4): "Tempo de chorar, e tempo de rir; tempo de prantear, e tempo de dançar". É tolice tentar estar feliz o tempo todo; o luto tem o seu lugar necessário na cura da alma. Salomão fala sobre as interações sociais e a intimidade (v. 5): "Tempo de espalhar pedras, e tempo de ajuntar pedras; tempo de abraçar, e tempo de afastar-se de abraçar". Há momentos para a proximidade e momentos em que a distância é a atitude mais sábia e protetora.`
      },
      {
        verseRef: 'v. 6-8',
        title: 'O Ciclo das Posses, das Palavras e da Paz',
        description: `Tempo de Buscar, e Tempo de Perder. A nossa relação com as coisas materiais muda (v. 6): "Tempo de buscar, e tempo de perder; tempo de guardar, e tempo de lançar fora". A maturidade nos ensina quando devemos lutar por algo e quando devemos simplesmente deixar ir. Há um tempo para o silêncio e um tempo para falar (v. 7). Finalmente, o poema termina com as grandes forças que movem a sociedade (v. 8): "Tempo de amar, e tempo de odiar; tempo de guerra, e tempo de paz". Odiar o mal é tão necessário quanto amar o bem.`
      }
    ],
    conclusion: `Eclesiastes 3:1-8 nos liberta da ansiedade de tentar forçar uma estação da vida a ser o que ela não é. Se você está em um "tempo de chorar", não sinta culpa por não estar rindo. Se você está em um "tempo de perder", confie que Deus está abrindo espaço para algo novo. A frustração humana nasce quando tentamos viver no verão enquanto Deus determinou que é inverno. A paz é encontrada quando nos submetemos ao Relógio Divino, sabendo que Ele "fez tudo formoso no seu tempo" (v. 11).`
  },
  {
    id: 'isa_9_2_7',
    bookId: 'ISA',
    chapter: 9,
    startVerse: 2,
    endVerse: 7,
    title: 'O Menino Nos Nasceu',
    theme: 'A Luz nas Trevas e o Rei Eterno',
    introduction: `O profeta Isaías ministrou durante um período de grande escuridão política e espiritual em Judá, sob a ameaça constante do império Assírio. O capítulo 8 termina descrevendo o povo em "angústia e trevas" (8:22). Mas o capítulo 9 irrompe com uma das profecias messiânicas mais gloriosas do Antigo Testamento. Isaías vê além da escuridão imediata e profetiza o nascimento de uma criança que não apenas traria luz à região da Galileia, mas que seria o próprio Deus encarnado, estabelecendo um reino eterno de paz e justiça.`,
    points: [
      {
        verseRef: 'v. 2-5',
        title: 'A Grande Luz e a Quebra do Jugo',
        description: `O Povo Que Andava em Trevas Viu Uma Grande Luz. A profecia começa com a promessa de iluminação (v. 2). A Galileia, a primeira região a ser devastada pelos assírios (trevas), seria a primeira a ver a luz do Messias (cumprido no ministério de Jesus, Mateus 4:13-16). Essa luz traria uma alegria indescritível, comparada à alegria da colheita ou da divisão de despojos (v. 3). A razão dessa alegria é a libertação (v. 4): "Porque tu quebraste o jugo da sua carga... como no dia dos midianitas". O Messias destruiria o poder do opressor e acabaria com a guerra para sempre (v. 5).`
      },
      {
        verseRef: 'v. 6',
        title: 'O Nascimento do Menino e os Seus Títulos Divinos',
        description: `Um Menino Nos Nasceu, Um Filho Se Nos Deu. O versículo 6 revela o meio pelo qual essa libertação viria: não através de um exército, mas do nascimento de uma criança. "O principado está sobre os seus ombros". Ele carregará o peso do governo do mundo. Os Seus quatro títulos revelam a Sua natureza divino-humana: 1) Maravilhoso Conselheiro (sabedoria perfeita); 2) Deus Forte (El Gibbor, onipotência divina); 3) Pai da Eternidade (o originador da vida eterna e protetor do Seu povo); 4) Príncipe da Paz (Sar Shalom, aquele que traz a reconciliação final entre Deus e o homem).`
      },
      {
        verseRef: 'v. 7',
        title: 'O Reino Eterno e o Zelo do Senhor',
        description: `Do Aumento Deste Principado e da Paz Não Haverá Fim. A profecia conclui descrevendo a natureza do Seu reino (v. 7). Diferente dos impérios humanos que sobem e caem, o reino do Messias crescerá continuamente e a Sua paz será infinita. Ele se assentará "sobre o trono de Davi e no seu reino", cumprindo a aliança davídica (2 Samuel 7). O Seu governo será estabelecido "com juízo e com justiça, desde agora e para sempre". Como isso é possível? "O zelo do Senhor dos Exércitos fará isto". A garantia do cumprimento não é o esforço humano, mas a paixão e o poder do próprio Deus.`
      }
    ],
    conclusion: `Isaías 9:2-7 é a essência da mensagem do Natal e a esperança da Igreja. A escuridão do nosso mundo (guerras, doenças, pecado) é real e opressora. Mas a promessa de Deus é que a Luz já brilhou. O Menino nasceu em Belém, mas o Deus Forte ressuscitou e reina para sempre. Quando os nossos fardos parecem pesados demais, podemos lembrar que o governo do universo está sobre os ombros de Jesus. Ele é o nosso Maravilhoso Conselheiro nas dúvidas, o nosso Deus Forte nas fraquezas e o nosso Príncipe da Paz nas tempestades.`
  },
  {
    id: 'isa_55_1_7',
    bookId: 'ISA',
    chapter: 55,
    startVerse: 1,
    endVerse: 7,
    title: 'O Convite da Graça',
    theme: 'A Água da Vida e o Arrependimento',
    introduction: `O capítulo 53 de Isaías descreve o sacrifício do Servo Sofredor (Jesus Cristo), que levou sobre Si as nossas iniquidades. O capítulo 54 descreve a glória da Nova Aliança. O capítulo 55 é a consequência lógica dessa obra redentora: um convite universal, apaixonado e gratuito para que todos os sedentos venham e participem do banquete da salvação. É um dos apelos evangelísticos mais claros do Antigo Testamento, chamando o povo a abandonar as suas buscas fúteis e a encontrar a verdadeira satisfação na misericórdia abundante de Deus.`,
    points: [
      {
        verseRef: 'v. 1-3',
        title: 'O Banquete Gratuito e a Futilidade do Mundo',
        description: `Vinde às Águas. O convite é para os necessitados (v. 1): "Ó vós, todos os que tendes sede, vinde às águas, e os que não tendes dinheiro, vinde, comprai, e comei... sem dinheiro e sem preço". A salvação é de graça, porque o preço já foi pago. Deus questiona a nossa busca por satisfação nas coisas erradas (v. 2): "Por que gastais o dinheiro naquilo que não é pão? E o produto do vosso trabalho naquilo que não pode satisfazer?". O mundo oferece prazeres que não saciam. A verdadeira vida é encontrada em ouvir a Deus (v. 3): "Inclinai os vossos ouvidos, e vinde a mim; ouvi, e a vossa alma viverá".`
      },
      {
        verseRef: 'v. 4-5',
        title: 'O Testemunho do Messias e a Chamada das Nações',
        description: `Eis que Eu o Dei por Testemunha. Deus aponta para o Messias (o herdeiro da aliança davídica) como a garantia desta promessa (v. 4): "Eis que eu o dei por testemunha aos povos, como líder e governador aos povos". A salvação não seria restrita a Israel. O versículo 5 profetiza a expansão do evangelho aos gentios: "Eis que chamarás a uma nação que não conheces, e uma nação que nunca te conheceu correrá para ti, por amor do Senhor teu Deus". A atração magnética da graça de Deus atrairá pessoas de todas as tribos e línguas.`
      },
      {
        verseRef: 'v. 6-7',
        title: 'A Urgência da Busca e a Promessa de Perdão',
        description: `Buscai ao Senhor Enquanto se Pode Achar. O convite tem um prazo de validade (v. 6): "Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto". A porta da graça está aberta agora, mas não ficará aberta para sempre. O versículo 7 define o verdadeiro arrependimento: "Deixe o ímpio o seu caminho, e o homem maligno os seus pensamentos, e se converta ao Senhor". O arrependimento envolve mudança de comportamento (caminho) e de mente (pensamentos). A promessa para quem se arrepende é absoluta: "ele se compadecerá dele... porque grandioso é em perdoar".`
      }
    ],
    conclusion: `Isaías 55:1-7 é o grito do coração de Deus para uma humanidade exausta. Nós passamos a vida correndo atrás de dinheiro, status e relacionamentos, tentando saciar uma sede que só Deus pode satisfazer. Estamos gastando o nosso trabalho naquilo que não é pão. O convite de Deus é escandalosamente simples: "Vinde". Não traga o seu dinheiro, não traga os seus méritos; traga apenas a sua sede e os seus pecados. Abandone o seu próprio caminho, volte-se para o Senhor, e você descobrirá que Ele não apenas perdoa, mas perdoa grandiosamente.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 15d).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
