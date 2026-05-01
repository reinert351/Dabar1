const fs = require('fs');

const newPericopes = [
  {
    id: 'deu_6_4_9',
    bookId: 'DEU',
    chapter: 6,
    startVerse: 4,
    endVerse: 9,
    title: 'O Shemá e a Devoção Integral',
    theme: 'O Único Deus e o Amor que Transforma o Lar',
    introduction: `O livro de Deuteronômio é o último sermão de Moisés à nova geração de Israel antes de entrarem na Terra Prometida. O capítulo 6 contém o "Shemá" (Ouve), a confissão de fé central do judaísmo e o mandamento que Jesus chamou de "o maior e o primeiro mandamento". Esta passagem não apenas declara o monoteísmo absoluto, mas exige que a resposta a esse Deus único seja um amor total e apaixonado, que deve permear cada aspecto da vida e ser transmitido intencionalmente à próxima geração.`,
    points: [
      {
        verseRef: 'v. 4',
        title: 'A Confissão de Fé: O Único Senhor',
        description: `Ouve, Israel. "Ouve, Israel, o Senhor nosso Deus é o único Senhor". Em um mundo antigo dominado pelo politeísmo (onde cada nação, rio e colheita tinha o seu próprio deus), Israel é chamado a testemunhar a verdade radical de que há apenas um Deus soberano. Yahweh não é apenas o maior dos deuses; Ele é o único. Esta exclusividade divina é o fundamento de toda a ética e adoração bíblica.`
      },
      {
        verseRef: 'v. 5-6',
        title: 'O Maior Mandamento: Amor Total e Internalizado',
        description: `Com Todo o Teu Coração. A resposta ao único Deus não é apenas submissão fria, mas amor apaixonado (v. 5): "Amarás, pois, o Senhor teu Deus de todo o teu coração, e de toda a tua alma, e de todas as tuas forças". Deus exige a totalidade do nosso ser: as nossas emoções, o nosso intelecto, a nossa vontade e a nossa energia física. Para que este amor seja real, a Palavra de Deus não pode ficar apenas em tábuas de pedra (v. 6): "E estas palavras, que hoje te ordeno, estarão no teu coração". A verdadeira obediência nasce de dentro para fora.`
      },
      {
        verseRef: 'v. 7-9',
        title: 'A Transmissão Geracional e a Vida Diária',
        description: `A Pedagogia do Lar. A fé não sobrevive se não for transmitida. Moisés ordena aos pais (v. 7): "E as intimarás a teus filhos, e falarás delas assentado em tua casa, e andando pelo caminho, e deitando-te e levantando-te". A educação espiritual não é um evento semanal, mas um estilo de vida contínuo, tecido nas conversas diárias. A Palavra de Deus deve governar as nossas ações (atadas na mão), os nossos pensamentos (frontais entre os olhos) e a nossa vida pública e familiar (escritas nos umbrais das portas, v. 8-9).`
      }
    ],
    conclusion: `Deuteronômio 6:4-9 nos desafia a avaliar a profundidade da nossa devoção. O nosso amor por Deus é fragmentado ou total? A nossa fé é apenas uma confissão dominical ou ela governa a nossa casa, as nossas conversas e a forma como criamos os nossos filhos? O Shemá nos lembra que o Deus único exige um amor único, e que a maior herança que podemos deixar para a próxima geração não é riqueza material, mas o exemplo de um coração que ama o Senhor com todas as suas forças.`
  },
  {
    id: 'jos_1_1_9',
    bookId: 'JOS',
    chapter: 1,
    startVerse: 1,
    endVerse: 9,
    title: 'A Comissão de Josué',
    theme: 'A Sucessão da Liderança e a Força da Palavra',
    introduction: `Moisés, o maior líder da história de Israel, está morto. O povo está acampado nas margens do rio Jordão, prestes a iniciar a conquista militar de Canaã. O peso da liderança cai sobre os ombros de Josué. Neste momento de transição e incerteza, Deus fala com Josué para comissioná-lo. A mensagem de Deus não é um manual de estratégia militar, mas uma promessa da Sua presença contínua e uma ordem absoluta para meditar e obedecer à Sua Palavra.`,
    points: [
      {
        verseRef: 'v. 1-4',
        title: 'O Fim de uma Era e a Promessa da Terra',
        description: `Moisés é Morto; Levanta-te. Deus não esconde a realidade (v. 2): "Moisés, meu servo, é morto; levanta-te, pois, agora, passa este Jordão, tu e todo este povo". Os líderes morrem, mas o propósito de Deus continua. A promessa feita a Abraão séculos antes está prestes a se cumprir. Deus garante a vitória antes mesmo da batalha começar (v. 3): "Todo o lugar que pisar a planta do vosso pé, vo-lo tenho dado". A terra já foi dada por graça; agora eles devem marchar em fé para tomar posse dela.`
      },
      {
        verseRef: 'v. 5-6',
        title: 'A Presença Inabalável e o Chamado à Coragem',
        description: `Serei Contigo. O maior medo de Josué não eram os gigantes de Canaã, mas a ausência de Moisés. Deus substitui a presença do líder humano pela Sua própria presença divina (v. 5): "Ninguém te poderá resistir, todos os dias da tua vida; como fui com Moisés, assim serei contigo; não te deixarei nem te desampararei". Com base nesta promessa, Deus dá a ordem que será repetida três vezes (v. 6): "Esforça-te, e tem bom ânimo". A coragem cristã não é a ausência de medo, mas a confiança na presença de Deus.`
      },
      {
        verseRef: 'v. 7-9',
        title: 'A Centralidade da Palavra e a Garantia do Sucesso',
        description: `Medita Nela de Dia e de Noite. A chave para a vitória de Josué não seria a força militar, mas a obediência teológica (v. 7). Ele não deve se desviar da lei "nem para a direita nem para a esquerda". A instrução mais famosa é o versículo 8: "Não se aparte da tua boca o livro desta lei; antes medita nele dia e noite, para que tenhas cuidado de fazer conforme a tudo quanto nele está escrito; porque então farás prosperar o teu caminho". O sucesso espiritual é o resultado direto de uma mente saturada com a Palavra de Deus e uma vida submissa a ela.`
      }
    ],
    conclusion: `Josué 1:1-9 é o manual de Deus para qualquer pessoa que enfrenta uma transição assustadora ou uma tarefa impossível. Quando os nossos "Moisés" morrem (nossas seguranças, líderes ou planos), Deus nos chama a levantar e atravessar o Jordão. A nossa força não vem da nossa própria capacidade, mas da promessa inquebrável de que Ele nunca nos deixará. E a nossa bússola para a vitória é a meditação constante e a obediência radical à Sua Palavra.`
  },
  {
    id: 'jos_24_14_24',
    bookId: 'JOS',
    chapter: 24,
    startVerse: 14,
    endVerse: 24,
    title: 'A Escolha em Siquém',
    theme: 'O Confronto com a Idolatria e o Compromisso Exclusivo',
    introduction: `No final da sua vida, após a conquista da terra, Josué reúne todas as tribos de Israel em Siquém para uma renovação da aliança. Ele sabe que a maior ameaça a Israel não são os exércitos inimigos, mas a atração sutil da idolatria. Em um dos discursos mais confrontadores do Antigo Testamento, Josué exige que o povo pare de tentar servir a Deus e aos ídolos simultaneamente. Ele os força a tomar uma decisão clara e pública sobre a quem eles servirão.`,
    points: [
      {
        verseRef: 'v. 14-15',
        title: 'O Ultimato de Josué: Escolhei Hoje',
        description: `Eu e a Minha Casa. Josué começa exigindo temor e sinceridade, ordenando que lancem fora os deuses que os seus pais serviram no Egito e além do rio (v. 14). A idolatria é um problema persistente. Então, ele lança o desafio (v. 15): "Porém, se vos parece mal aos vossos olhos servir ao Senhor, escolhei hoje a quem sirvais". A neutralidade espiritual é impossível. Josué não espera pela decisão da maioria para tomar a sua própria; ele declara a sua liderança familiar: "Porém eu e a minha casa serviremos ao Senhor".`
      },
      {
        verseRef: 'v. 16-18',
        title: 'A Resposta Superficial do Povo',
        description: `Nunca Nos Aconteça. O povo responde rapidamente, quase ofendido com a sugestão de que poderiam abandonar a Deus (v. 16): "Nunca nos aconteça que deixemos ao Senhor para servirmos a outros deuses". Eles recitam a história da salvação: como Deus os tirou do Egito, fez grandes sinais e os guardou no caminho (v. 17). Eles concluem com entusiasmo (v. 18): "Nós também serviremos ao Senhor, porquanto ele é nosso Deus". A resposta deles é teologicamente correta, mas Josué sabe que o coração deles é superficial.`
      },
      {
        verseRef: 'v. 19-24',
        title: 'O Confronto da Santidade e o Compromisso Real',
        description: `Não Podereis Servir ao Senhor. Em vez de celebrar a resposta do povo, Josué os choca (v. 19): "Não podereis servir ao Senhor, porquanto é Deus santo, é Deus zeloso, que não perdoará a vossa transgressão nem os vossos pecados". Josué destrói a confiança carnal deles. Servir a um Deus santo não é um hobby de fim de semana; exige exclusividade absoluta. Se eles O abandonarem, Ele se voltará contra eles (v. 20). O povo insiste (v. 21): "Não, mas ao Senhor serviremos". Josué os faz testemunhas contra si mesmos e exige que a prova da sua decisão seja deitar fora os deuses estranhos (v. 22-24).`
      }
    ],
    conclusion: `Josué 24:14-24 nos lembra que o cristianismo não admite lealdades divididas. Não podemos adicionar Jesus à nossa prateleira de deuses (dinheiro, sucesso, conforto, aprovação humana). O Deus da Bíblia é um Deus zeloso que exige o trono exclusivo dos nossos corações. A declaração "eu e a minha casa serviremos ao Senhor" não é apenas um quadro bonito para pendurar na parede, mas um compromisso diário de jogar fora os ídolos modernos e viver em submissão radical à santidade de Deus.`
  },
  {
    id: 'jdg_6_11_24',
    bookId: 'JDG',
    chapter: 6,
    startVerse: 11,
    endVerse: 24,
    title: 'O Chamado de Gideão',
    theme: 'A Fraqueza Humana e a Força do Chamado Divino',
    introduction: `O livro de Juízes descreve um ciclo sombrio de rebelião, opressão, clamor e libertação. Israel está sendo devastado pelos midianitas, que roubam todas as suas colheitas. O povo está escondido em cavernas. É neste cenário de medo e miséria que o Anjo do Senhor aparece a Gideão, um homem que está malhando o trigo às escondidas em um lagar. O diálogo revela como Deus vê o potencial na nossa fraqueza e como a Sua presença transforma covardes em "homens valorosos".`,
    points: [
      {
        verseRef: 'v. 11-13',
        title: 'O Medo, a Saudação e a Dúvida Honesta',
        description: `Onde Estão as Maravilhas? Gideão está escondido no lagar por medo dos midianitas (v. 11). O Anjo do Senhor aparece e o saúda com uma ironia divina (v. 12): "O Senhor é contigo, homem valoroso". Gideão não se sentia valoroso; ele se sentia derrotado. A sua resposta é cheia de dor e dúvida teológica (v. 13): "Ai, Senhor meu, se o Senhor é conosco, por que tudo isto nos sobreveio? E que é feito de todas as suas maravilhas que nossos pais nos contaram... o Senhor nos desamparou". Gideão confunde a disciplina de Deus com o abandono de Deus.`
      },
      {
        verseRef: 'v. 14-16',
        title: 'A Comissão e a Desculpa da Insignificância',
        description: `Vai Nesta Tua Força. O Senhor não debate teologia com Gideão; Ele lhe dá uma missão (v. 14): "Vai nesta tua força, e livrarás a Israel das mãos dos midianitas; porventura não te enviei eu?". A força de Gideão não estava nos seus músculos, mas no fato de ter sido enviado por Deus. Gideão apresenta o seu currículo de fraqueza (v. 15): a sua família é a mais pobre de Manassés, e ele é o menor na casa do seu pai. Deus responde com a única qualificação que importa (v. 16): "Porquanto eu hei de ser contigo, tu ferirás aos midianitas como se fossem um só homem".`
      },
      {
        verseRef: 'v. 17-24',
        title: 'O Sinal, a Oferta e o Altar da Paz',
        description: `O Senhor é Paz. Gideão, ainda inseguro, pede um sinal e prepara uma oferta (v. 17-19). O Anjo manda colocar a carne e os pães sobre a penha e derramar o caldo. O Anjo toca a oferta com o cajado, e fogo sobe da penha, consumindo tudo, e o Anjo desaparece (v. 20-21). Gideão percebe que viu Deus face a face e entra em pânico, temendo a morte (v. 22). O Senhor o conforta (v. 23): "Paz seja contigo; não temas; não morrerás". Gideão edifica um altar e o chama de "O Senhor é Paz" (Yahweh-Shalom) (v. 24). A paz com Deus precede a guerra contra os inimigos.`
      }
    ],
    conclusion: `Juízes 6:11-24 nos ensina que Deus não chama os capacitados, mas capacita os chamados. Ele não procura pessoas que confiam na sua própria força, riqueza ou status, mas pessoas que conhecem a sua própria fraqueza e dependem inteiramente da promessa: "Eu serei contigo". Quando nos sentimos menores e mais insignificantes, estamos na posição perfeita para que Deus nos use, para que a excelência do poder seja dEle e não nossa.`
  },
  {
    id: 'jdg_16_15_21',
    bookId: 'JDG',
    chapter: 16,
    startVerse: 15,
    endVerse: 21,
    title: 'A Queda de Sansão',
    theme: 'A Sedução do Pecado e a Perda da Unção',
    introduction: `Sansão é uma das figuras mais trágicas da Bíblia. Ele tinha tudo: um nascimento milagroso, um chamado divino desde o ventre (nazireu) e uma força sobrenatural dada pelo Espírito Santo. No entanto, ele carecia de domínio próprio e caráter. A sua história é um aviso contundente de que dons espirituais não substituem a santidade pessoal. A sua queda nas mãos de Dalila ilustra o processo gradual e destrutivo da sedução do pecado, que cega e escraviza aqueles que brincam com ele.`,
    points: [
      {
        verseRef: 'v. 15-17',
        title: 'A Pressão Emocional e a Quebra do Voto',
        description: `O Segredo Revelado. Dalila, subornada pelos filisteus, usa a manipulação emocional para quebrar as defesas de Sansão (v. 15): "Como dirás: Amo-te, não estando comigo o teu coração?". Ela o importuna todos os dias com as suas palavras, até que a alma dele se angustia até a morte (v. 16). O pecado é persistente. Finalmente, Sansão cede e revela todo o seu coração (v. 17): ele é nazireu de Deus desde o ventre materno; se o seu cabelo for cortado (o símbolo do seu voto de separação), a sua força se retirará. Ele trocou a sua consagração a Deus pelo afeto de uma mulher.`
      },
      {
        verseRef: 'v. 18-20',
        title: 'A Traição, o Sono e a Partida do Espírito',
        description: `Ele Não Sabia que o Senhor se Tinha Retirado. Dalila percebe que ele falou a verdade e chama os príncipes dos filisteus (v. 18). Ela o faz dormir sobre os seus joelhos (o falso conforto do pecado) e manda cortar as sete tranças do seu cabelo (v. 19). Ela grita: "Os filisteus vêm sobre ti, Sansão!". Ele acorda pensando que se livraria como das outras vezes. Mas o versículo 20 contém uma das frases mais tristes da Bíblia: "ele não sabia que já o Senhor se tinha retirado dele". A força não estava no cabelo, mas na presença do Espírito, que partiu quando o voto foi quebrado.`
      },
      {
        verseRef: 'v. 21',
        title: 'A Cegueira, as Cadeias e o Moinho',
        description: `O Salário do Pecado. As consequências são imediatas e brutais (v. 21). Os filisteus o agarram, arrancam-lhe os olhos e o levam para Gaza. Eles o amarram com duas cadeias de bronze e o colocam a virar um moinho no cárcere (trabalho de animal). O homem que foi chamado para libertar Israel agora é um escravo cego, divertindo os inimigos de Deus. Este é o ciclo do pecado: ele primeiro cega (espiritualmente e depois fisicamente), depois amarra (vícios e cadeias) e finalmente mói (destrói a vida e o propósito).`
      }
    ],
    conclusion: `Juízes 16:15-21 é um alerta vermelho para todo crente. Não importa quão ungidos ou talentosos sejamos, se brincarmos com o pecado e negligenciarmos a nossa consagração a Deus, cairemos. O pecado nunca cumpre as suas promessas de prazer duradouro; ele nos embala para dormir apenas para roubar a nossa força, cegar a nossa visão e nos escravizar. A tragédia de Sansão nos chama ao arrependimento e à vigilância, lembrando-nos de que a nossa verdadeira força está na obediência e na presença do Senhor.`
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
  console.log('Successfully added 5 new pericopes for OT (Batch 11d).');
} else {
  console.error('Could not find the end of the pericopes array.');
}
