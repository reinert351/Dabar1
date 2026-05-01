const fs = require('fs');

const newPericopes = [
  {
    id: 'luk_15_11_32',
    bookId: 'LUK',
    chapter: 15,
    startVerse: 11,
    endVerse: 32,
    title: 'A Parábola do Pai Misericordioso',
    theme: 'O Arrependimento, a Graça e os Dois Tipos de Filhos Perdidos',
    introduction: `A "Parábola do Filho Pródigo" é talvez a história mais famosa contada por Jesus. Ela foi contada em resposta aos fariseus que murmuravam porque Jesus recebia pecadores e comia com eles. Na verdade, a parábola deveria se chamar "A Parábola do Pai Misericordioso e dos Dois Filhos Perdidos". Jesus usa esta história para mostrar que existem duas maneiras de se afastar de Deus: quebrando as regras (o filho mais novo) ou guardando as regras por motivos egoístas (o filho mais velho). Em ambos os casos, a única cura é a graça escandalosa do Pai.`,
    points: [
      {
        verseRef: 'v. 11-20a',
        title: 'A Rebelião do Filho Mais Novo e a Miséria do Pecado',
        description: `A Busca Falsa por Liberdade. O filho mais novo pede a sua herança antes da morte do pai (v. 12), o que na cultura do Oriente Médio equivalia a dizer: "Pai, eu gostaria que você estivesse morto; eu quero o seu dinheiro, não você". O pai, surpreendentemente, concede o pedido. O filho vai para uma "terra longínqua" (v. 13) e desperdiça tudo em uma vida dissoluta. A ilusão de liberdade rapidamente se transforma em escravidão. Quando a fome chega, ele acaba alimentando porcos (o fundo do poço para um judeu) e desejando comer a comida deles (v. 15-16). O pecado sempre promete liberdade, mas entrega degradação. Finalmente, ele "cai em si" (v. 17), reconhece o seu pecado contra o céu e contra o pai, e decide voltar não como filho, mas como um servo assalariado (v. 18-19).`
      },
      {
        verseRef: 'v. 20b-24',
        title: 'A Graça Escandalosa e a Restauração do Pai',
        description: `O Amor que Corre. O clímax da história acontece antes que o filho possa recitar o seu discurso de arrependimento. "E, quando ainda estava longe, viu-o seu pai, e se moveu de íntima compaixão, e, correndo, lançou-se-lhe ao pescoço e o beijou" (v. 20). Naquela cultura, um patriarca idoso nunca corria (era considerado humilhante). O pai assume a vergonha para proteger o filho da rejeição da aldeia. O filho tenta fazer o seu discurso (v. 21), mas o pai o interrompe com ordens de restauração total (v. 22-23): o melhor vestido (honra), o anel (autoridade), as alparcas (status de filho livre, não escravo) e o bezerro cevado (celebração). A justificativa do pai (v. 24): "Porque este meu filho estava morto, e reviveu, tinha-se perdido, e foi achado". A graça de Deus não apenas perdoa, ela restaura completamente.`
      },
      {
        verseRef: 'v. 25-32',
        title: 'A Rebelião do Filho Mais Velho e o Perigo do Legalismo',
        description: `Perdido Dentro de Casa. O filho mais velho volta do campo, ouve a festa e se recusa a entrar (v. 25-28). O pai, mais uma vez, humilha-se e sai para implorar ao filho. A resposta do filho mais velho revela o seu coração (v. 29): "Eis que te sirvo há tantos anos, sem nunca transgredir o teu mandamento, e nunca me deste um cabrito para alegrar-me com os meus amigos". Ele via o pai como um patrão exigente, não como um pai amoroso. Ele obedecia não por amor, mas para receber um pagamento. Ele estava tão perdido e alienado do coração do pai quanto o irmão mais novo, mas a sua perdição estava mascarada pela sua moralidade. O pai responde com ternura (v. 31-32): "Filho, tu sempre estás comigo, e todas as minhas coisas são tuas; Mas era justo alegrarmo-nos...". A parábola termina sem conclusão: os fariseus (representados pelo irmão mais velho) entrariam na festa da graça de Deus ou ficariam de fora com o seu orgulho?`
      }
    ],
    conclusion: `Lucas 15:11-32 é um espelho para a nossa alma. Quer sejamos rebeldes declarados que fugiram para o mundo, quer sejamos religiosos orgulhosos que tentam controlar Deus com a nossa obediência, ambos precisamos desesperadamente da mesma coisa: a graça do Pai. Deus não é um patrão exigente nem um juiz implacável; Ele é o Pai que corre ao nosso encontro, abraça a nossa sujeira e nos veste com a justiça de Cristo.`
  },
  {
    id: 'mrk_8_34_38',
    bookId: 'MRK',
    chapter: 8,
    startVerse: 34,
    endVerse: 38,
    title: 'O Custo do Discipulado',
    theme: 'A Renúncia de Si Mesmo e a Perda da Vida para Ganhá-la',
    introduction: `No Evangelho de Marcos, o capítulo 8 é o ponto de virada. Pedro acaba de confessar que Jesus é o Cristo (o Messias). Imediatamente, Jesus começa a ensinar que o Messias deve sofrer, ser rejeitado e morto. Pedro tenta repreendê-Lo, mostrando que os discípulos esperavam um rei conquistador, não um salvador sofredor. Jesus então convoca a multidão e os discípulos e estabelece os termos inegociáveis para quem deseja segui-Lo. O verdadeiro discipulado não é um convite para uma vida fácil, mas um chamado para a cruz.`,
    points: [
      {
        verseRef: 'v. 34',
        title: 'As Três Exigências do Discipulado',
        description: `O Chamado para a Morte. Jesus estabelece a condição: "Se alguém quiser vir após mim, negue-se a si mesmo, e tome a sua cruz, e siga-me". 1) "Negar a si mesmo" não é negar coisas a si mesmo (como fazer jejum de chocolate), mas renunciar ao direito de governar a própria vida. É destronar o "eu" e entronizar Cristo. 2) "Tomar a sua cruz" não é suportar uma doença ou uma sogra difícil. No primeiro século, a cruz significava apenas uma coisa: uma execução brutal e humilhante. Tomar a cruz significa estar disposto a sofrer rejeição, vergonha e até a morte por causa de Jesus. 3) "Siga-me" é o compromisso contínuo de imitar a vida e a obediência de Cristo.`
      },
      {
        verseRef: 'v. 35',
        title: 'O Paradoxo da Vida e da Morte',
        description: `A Matemática do Reino. Jesus apresenta um paradoxo profundo: "Porque qualquer que quiser salvar a sua vida, perdê-la-á, mas, qualquer que perder a sua vida por amor de mim e do evangelho, esse a salvará". Se você tentar proteger a sua vida, viver para os seus próprios prazeres e evitar o sacrifício, você acabará perdendo a sua alma eternamente. Mas se você entregar a sua vida a Cristo, gastando-a por amor a Ele e à propagação do evangelho, você encontrará a verdadeira vida, tanto agora quanto na eternidade. A segurança real só é encontrada na rendição total.`
      },
      {
        verseRef: 'v. 36-38',
        title: 'O Valor da Alma e o Falso Lucro do Mundo',
        description: `O Pior Negócio do Mundo. Jesus faz duas perguntas econômicas (v. 36-37): "Pois, que aproveitaria ao homem ganhar todo o mundo e perder a sua alma? Ou, que daria o homem pelo resgate da sua alma?". Mesmo que você pudesse acumular toda a riqueza, poder e prazer do planeta inteiro, de que adiantaria se você fosse para o inferno no final? A alma humana tem um valor infinito; nada no mundo pode comprá-la de volta depois de perdida. O versículo 38 traz a advertência final: "Porquanto, qualquer que, entre esta geração adúltera e pecadora, se envergonhar de mim e das minhas palavras, também o Filho do homem se envergonhará dele, quando vier na glória de seu Pai, com os santos anjos". A nossa lealdade pública a Cristo hoje determina o nosso destino no dia do juízo.`
      }
    ],
    conclusion: `Marcos 8:34-38 destrói a versão superficial do cristianismo que promete apenas bênçãos e sucesso. Jesus não nos chama para adicionar um pouco de religião a uma vida egoísta; Ele nos chama para morrermos para nós mesmos. O custo de seguir a Jesus é alto (custa tudo o que somos e temos), mas o custo de não segui-Lo é infinitamente maior (a perda eterna da alma). A verdadeira vida só é encontrada quando a perdemos por amor a Ele.`
  },
  {
    id: 'mat_5_1_12',
    bookId: 'MAT',
    chapter: 5,
    startVerse: 1,
    endVerse: 12,
    title: 'As Bem-Aventuranças',
    theme: 'O Caráter do Cidadão do Reino dos Céus',
    introduction: `O Sermão do Monte (Mateus 5-7) é o maior discurso ético de Jesus. Ele não é um manual de como ser salvo, mas uma descrição de como vivem aqueles que já foram salvos e pertencem ao Reino dos Céus. O sermão começa com as "Bem-Aventuranças" (do latim beatus, que significa feliz, abençoado, favorecido por Deus). Jesus vira o sistema de valores do mundo de cabeça para baixo. O mundo diz que felizes são os ricos, os orgulhosos, os implacáveis e os populares. Jesus diz que a verdadeira bênção pertence aos humildes, aos que choram, aos misericordiosos e aos perseguidos.`,
    points: [
      {
        verseRef: 'v. 3-5',
        title: 'A Atitude Interior em Relação a Si Mesmo e a Deus',
        description: `A Falência Espiritual e a Mansidão. 1) "Bem-aventurados os pobres de espírito, porque deles é o reino dos céus" (v. 3). A pobreza de espírito não é pobreza material, mas o reconhecimento da nossa total falência espiritual diante de Deus. É admitir que não temos nada a oferecer a Deus para comprar a nossa salvação. Esta é a porta de entrada para o Reino. 2) "Bem-aventurados os que choram, porque eles serão consolados" (v. 4). Este não é o choro do luto comum, mas o choro de arrependimento pelo próprio pecado e pelo pecado do mundo. Deus consola aqueles que se entristecem com o que O entristece. 3) "Bem-aventurados os mansos, porque eles herdarão a terra" (v. 5). Mansidão não é fraqueza, mas poder sob controle. É a recusa de usar a força para exigir os próprios direitos, confiando que Deus fará justiça.`
      },
      {
        verseRef: 'v. 6-8',
        title: 'A Atitude Interior em Relação à Justiça e aos Outros',
        description: `Fome, Misericórdia e Pureza. 4) "Bem-aventurados os que têm fome e sede de justiça, porque eles serão fartos" (v. 6). O cidadão do Reino tem um apetite desesperado (como um homem faminto no deserto) para ver a justiça de Deus em sua própria vida e no mundo. Deus promete satisfazer essa fome. 5) "Bem-aventurados os misericordiosos, porque eles alcançarão misericórdia" (v. 7). Porque recebemos misericórdia infinita de Deus, devemos estender compaixão e perdão aos outros. 6) "Bem-aventurados os limpos de coração, porque eles verão a Deus" (v. 8). A pureza aqui não é apenas a ausência de pensamentos impuros, mas uma devoção não dividida, uma sinceridade total diante de Deus. Apenas aqueles com um coração focado em Deus terão a capacidade espiritual de "vê-Lo".`
      },
      {
        verseRef: 'v. 9-12',
        title: 'A Ação no Mundo e a Reação do Mundo',
        description: `Pacificadores e Perseguidos. 7) "Bem-aventurados os pacificadores, porque eles serão chamados filhos de Deus" (v. 9). Os cristãos não são apenas pacíficos, eles ativamente fazem a paz, reconciliando pessoas com Deus e umas com as outras, refletindo o caráter do seu Pai celestial. 8) "Bem-aventurados os que sofrem perseguição por causa da justiça, porque deles é o reino dos céus" (v. 10). A consequência de viver as sete bem-aventuranças anteriores em um mundo caído não é a popularidade, mas a perseguição. Jesus personaliza isso (v. 11): "Bem-aventurados sois vós, quando vos injuriarem e perseguirem... por minha causa". A resposta a essa perseguição não deve ser a vingança, mas a alegria (v. 12): "Exultai e alegrai-vos, porque é grande o vosso galardão nos céus".`
      }
    ],
    conclusion: `Mateus 5:1-12 é o raio-X do coração cristão. As Bem-Aventuranças não são oito tipos diferentes de cristãos, mas oito qualidades que devem estar presentes em cada discípulo. Elas nos mostram que a verdadeira felicidade não é encontrada na busca pelo poder, prazer ou aprovação humana, mas em um caráter transformado pela graça que reflete a beleza de Jesus Cristo, mesmo que isso custe a rejeição do mundo.`
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
  console.log('Successfully added 4 new pericopes for Luke, Mark, and Matthew.');
} else {
  console.error('Could not find the end of the pericopes array.');
}
