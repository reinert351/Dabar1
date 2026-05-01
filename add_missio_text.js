const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'data', 'academy_data.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const newParagraphs = [
  "A evangelização, em sua manifestação mais visível e imediata — como a distribuição de folhetos nas esquinas, a proclamação em praças públicas ou a simples menção do nome de Jesus em uma conversa casual —, é, paradoxalmente, a etapa mais elementar e fácil do mandato missionário. Muitas vezes, a igreja contemporânea confunde o ato de semear com a totalidade da colheita, celebrando o mero contato inicial como se fosse a consumação do discipulado. No entanto, o lançamento da semente, embora fundamental e glorioso, exige apenas um momento de coragem ou uma breve articulação teológica. O verdadeiro labor missionário, aquele que forja o caráter de Cristo no coração humano e transforma culturas inteiras, começa exatamente quando as palavras cessam e a multidão se dispersa. É nesse silêncio subsequente que a verdadeira batalha espiritual é travada, exigindo uma perseverança que transcende o entusiasmo inicial das campanhas evangelísticas.",
  "Após o lançamento da semente do Evangelho no solo árido do coração humano, inicia-se a fase mais excruciante e vital da missiologia: o regar contínuo com lágrimas de intercessão. O apóstolo Paulo compreendia essa agonia pastoral ao declarar que sofria 'dores de parto' até que Cristo fosse formado nos gálatas. Semear sem chorar é tratar a alma humana como um projeto mecânico, ignorando a profunda resistência espiritual e as fortalezas mentais que se erguem contra o conhecimento de Deus. As lágrimas do missionário e do evangelista não são sinais de fraqueza, mas a própria irrigação divina que amolece a terra endurecida pelo pecado, pelo cinismo e pelas feridas da vida. É no quarto de oração, longe dos holofotes e das estatísticas de conversão, que o destino eterno daquelas sementes é frequentemente decidido, em um clamor desesperado para que o Espírito Santo conceda o arrependimento e a iluminação.",
  "A oração, portanto, não é um mero apêndice da estratégia missiológica, mas o próprio ar que sustenta a vida da semente germinada. Quando falamos de Jesus a alguém, estamos apenas apresentando uma realidade; quando oramos por essa pessoa, estamos engajando as forças celestiais para que essa realidade se torne a verdade fundacional de sua existência. O trabalho de intercessão exige uma disciplina férrea, pois os frutos raramente são imediatos. Dias, meses, anos e até décadas podem se passar sem que haja um sinal visível de que a semente não apodreceu sob a terra. O verdadeiro missionário é aquele que suporta a aparente esterilidade do solo, mantendo a vigilância em oração, recusando-se a abandonar o campo mesmo quando o inverno espiritual parece interminável. Essa intercessão persistente é o que quebra as correntes do inimigo que tentam sufocar a fé nascente com as preocupações deste mundo e a sedução das riquezas.",
  "O crescimento da semente é um mistério insondável, operado exclusivamente pela graça soberana, mas que Deus, em sua infinita sabedoria, decidiu vincular à fidelidade do agricultor espiritual. Regar a semente significa também o acompanhamento paciente, o discipulado relacional que exige o sacrifício do próprio tempo, conforto e, muitas vezes, dos próprios recursos. Significa chorar com os que choram, suportar as recaídas, responder às dúvidas angustiantes com mansidão e encarnar o amor de Cristo de forma tangível. A semente do Evangelho não cresce no vácuo; ela necessita do ecossistema da comunidade de fé e do calor do amor sacrificial. O evangelista que apenas prega e parte, sem garantir que haja quem regue e cuide, assemelha-se a um pai que abandona seu filho recém-nascido. A missiologia profunda exige a disposição de 'gastar e deixar-se gastar' pelas almas, como expressou o apóstolo, assumindo a responsabilidade parental pelo desenvolvimento espiritual daqueles que foram alcançados.",
  "Finalmente, quando o fruto desponta, ele não é o resultado de uma técnica persuasiva ou de um método evangelístico infalível, mas o milagre da vida irrompendo da morte, gerado pela Palavra, regado por lágrimas e sustentado pela oração. Esse fruto — uma vida genuinamente transformada, um coração que agora pulsa em sincronia com o Reino de Deus, uma mente renovada que adora em espírito e em verdade — é a recompensa suprema do labor missionário. A alegria da colheita é diretamente proporcional à agonia da semeadura e da intercessão. Aqueles que semearam com lágrimas, com certeza, colherão com alegria, não porque o processo foi fácil, mas porque a fidelidade de Deus garantiu que nenhum clamor, nenhuma lágrima e nenhum esforço no Senhor fossem vãos. Assim, a missiologia se revela não apenas como a tarefa de alcançar os perdidos, mas como o profundo privilégio de participar das próprias dores e alegrias do coração de Deus na redenção da humanidade."
];

const missioTitle = "title: '🌍 Missiologia',";
const missioIndex = content.indexOf(missioTitle);

if (missioIndex !== -1) {
  const contentKeyIndex = content.indexOf('content: [', missioIndex);
  if (contentKeyIndex !== -1) {
    let bracketCount = 0;
    let endOfContentIndex = -1;
    
    for (let i = contentKeyIndex + 9; i < content.length; i++) {
      if (content[i] === '[') bracketCount++;
      if (content[i] === ']') {
        bracketCount--;
        if (bracketCount === 0) {
          endOfContentIndex = i;
          break;
        }
      }
    }
    
    if (endOfContentIndex !== -1) {
      const formattedParagraphs = newParagraphs.map(p => `\n            "${p}"`).join(',');
      const arrayContent = content.substring(contentKeyIndex + 10, endOfContentIndex).trim();
      const prefix = arrayContent.length > 0 && !arrayContent.endsWith(',') ? ',' : '';
      
      const newContent = content.substring(0, endOfContentIndex) + prefix + formattedParagraphs + '\n          ' + content.substring(endOfContentIndex);
      
      fs.writeFileSync(filePath, newContent, 'utf-8');
      console.log('Successfully added paragraphs to Missiologia');
    } else {
      console.log('Could not find end of content array');
    }
  } else {
    console.log('Could not find content array');
  }
} else {
  console.log('Could not find Missiologia topic');
}
