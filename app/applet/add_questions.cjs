const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'data', 'academy_data.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const antropologiaQuestions = `,
          {
            question: "O que significa a visão 'Dicotomista'?",
            options: ["O homem é corpo e alma/espírito", "O homem é apenas corpo", "O homem tem três partes", "O homem é um ser divino"],
            correctAnswerIndex: 0,
            explanation: "A dicotomia entende que o homem é composto de uma parte material (corpo) e uma imaterial (alma/espírito)."
          },
          {
            question: "Qual é a visão do 'Monismo Holístico'?",
            options: ["Corpo e alma são inimigos", "A pessoa humana é uma unidade indivisível", "Apenas o espírito importa", "A alma morre com o corpo"],
            correctAnswerIndex: 1,
            explanation: "O monismo holístico enfatiza a unidade indivisível da pessoa humana, não separando rigidamente corpo e alma."
          },
          {
            question: "O que a 'Imago Dei' implica sobre a dignidade humana?",
            options: ["Apenas os cristãos têm dignidade", "A dignidade humana é intrínseca e dada por Deus a todos", "A dignidade depende da utilidade social", "A dignidade é uma construção cultural"],
            correctAnswerIndex: 1,
            explanation: "Por serem criados à imagem de Deus, todos os seres humanos possuem uma dignidade intrínseca e inalienável."
          },
          {
            question: "Na antropologia cristã, qual é o efeito da Queda?",
            options: ["A imagem de Deus foi totalmente destruída", "A imagem de Deus foi distorcida, mas não apagada", "O homem tornou-se um animal irracional", "Não houve efeito real na natureza humana"],
            correctAnswerIndex: 1,
            explanation: "A Queda distorceu e manchou a imagem de Deus no homem, mas ela não foi completamente destruída."
          },
          {
            question: "Como o Novo Testamento descreve a restauração da Imago Dei?",
            options: ["Através do esforço moral humano", "Através da conformação à imagem de Cristo", "Através da evolução biológica", "Através do conhecimento filosófico"],
            correctAnswerIndex: 1,
            explanation: "A salvação envolve ser transformado e renovado à imagem de Cristo, que é a perfeita imagem de Deus."
          },
          {
            question: "Qual é a esperança final para o corpo humano na teologia cristã?",
            options: ["A aniquilação", "A libertação do corpo como uma prisão", "A ressurreição corporal glorificada", "A reencarnação em outro corpo"],
            correctAnswerIndex: 2,
            explanation: "A esperança cristã não é escapar do corpo, mas a ressurreição e glorificação do corpo, seguindo o padrão de Cristo."
          },
          {
            question: "O que a dimensão 'relacional' da Imago Dei enfatiza?",
            options: ["A capacidade de raciocínio lógico", "O domínio sobre a natureza", "A capacidade de comunhão com Deus e com o próximo", "A imortalidade da alma"],
            correctAnswerIndex: 2,
            explanation: "A dimensão relacional destaca que fomos criados para o relacionamento, refletindo a comunhão da Trindade."
          }`;

const eticaQuestions = `,
          {
            question: "O que é a 'Deontologia Cristã'?",
            options: ["Ética baseada nas consequências", "Ética focada no dever e obediência aos mandamentos", "Ética do prazer", "Ética baseada na intuição"],
            correctAnswerIndex: 1,
            explanation: "A deontologia cristã enfatiza o dever moral e a obediência aos mandamentos divinos como padrão de conduta."
          },
          {
            question: "Como a Ética Cristã vê a relação entre os fins e os meios?",
            options: ["Os fins justificam os meios", "Bons fins exigem meios moralmente lícitos", "Os meios não importam", "Apenas os fins são avaliados por Deus"],
            correctAnswerIndex: 1,
            explanation: "Na ética cristã, um objetivo nobre não justifica o uso de meios pecaminosos ou imorais para alcançá-lo."
          },
          {
            question: "Qual é o princípio bíblico central na Bioética Personalista?",
            options: ["A sobrevivência do mais apto", "O avanço tecnológico a qualquer custo", "A dignidade intrínseca da pessoa humana", "O controle populacional"],
            correctAnswerIndex: 2,
            explanation: "A bioética personalista defende a dignidade da pessoa humana desde a concepção até a morte natural, baseada na Imago Dei."
          },
          {
            question: "O que a Ética da Responsabilidade (Bonhoeffer) enfatiza?",
            options: ["A fuga do mundo", "A obediência cega ao Estado", "A ação responsável diante de Deus e do próximo no mundo real", "A busca pelo martírio"],
            correctAnswerIndex: 2,
            explanation: "Bonhoeffer propôs uma ética onde o cristão assume a responsabilidade por suas ações no mundo, em conformidade com Cristo."
          },
          {
            question: "Qual é a visão cristã tradicional sobre o início da vida humana?",
            options: ["No nascimento", "Na viabilidade fetal", "Na concepção/fertilização", "No desenvolvimento do sistema nervoso"],
            correctAnswerIndex: 2,
            explanation: "A visão cristã tradicional e a bioética personalista sustentam que a vida humana começa na concepção."
          },
          {
            question: "Como a Ética Cristã aborda a questão da eutanásia?",
            options: ["Como um direito de escolha", "Como um ato de compaixão aceitável", "Como uma violação da soberania de Deus sobre a vida", "Como uma necessidade médica"],
            correctAnswerIndex: 2,
            explanation: "A eutanásia é geralmente rejeitada na ética cristã tradicional por violar a sacralidade da vida e a soberania de Deus sobre a morte."
          },
          {
            question: "O que é a 'Lei Natural' na ética tomista?",
            options: ["A lei da selva", "A participação da criatura racional na lei eterna de Deus", "As leis da física", "As leis do Antigo Testamento apenas"],
            correctAnswerIndex: 1,
            explanation: "Para Tomás de Aquino, a lei natural é a forma como os seres humanos participam da lei eterna de Deus através da razão."
          },
          {
            question: "Qual é o papel do Espírito Santo na 'Ética da Virtude' cristã?",
            options: ["Ele dita regras detalhadas", "Ele é irrelevante para a ética", "Ele transforma o caráter e produz o fruto do Espírito", "Ele anula o livre-arbítrio"],
            correctAnswerIndex: 2,
            explanation: "Na ética da virtude cristã, o Espírito Santo atua internamente para transformar o caráter, gerando virtudes (o fruto do Espírito)."
          }`;

const missiologiaQuestions = `,
          {
            question: "O que significa o termo 'Inculturação' na Missiologia?",
            options: ["A destruição da cultura local", "A imposição da cultura do missionário", "A encarnação do Evangelho em uma cultura específica sem perder sua essência", "O sincretismo religioso"],
            correctAnswerIndex: 2,
            explanation: "Inculturação é o processo de comunicar o Evangelho de forma que ele crie raízes e se expresse através da cultura local, mantendo a fidelidade bíblica."
          },
          {
            question: "O que é a 'Missão Integral'?",
            options: ["Focar apenas na pregação", "Focar apenas na ação social", "A união inseparável entre a proclamação do Evangelho e a responsabilidade social", "A missão feita apenas por pastores"],
            correctAnswerIndex: 2,
            explanation: "A Missão Integral, defendida por teólogos como René Padilla, entende que o Evangelho abrange o ser humano em todas as suas dimensões (espiritual, física, social)."
          },
          {
            question: "Qual é a base trinitariana da missão?",
            options: ["Apenas Jesus é missionário", "O Pai envia o Filho, o Pai e o Filho enviam o Espírito, e o Deus Triúno envia a Igreja", "A missão é uma invenção humana", "O Espírito Santo atua independentemente do Pai e do Filho"],
            correctAnswerIndex: 1,
            explanation: "A missão tem sua raiz na própria natureza de Deus (Trindade), onde há um envio mútuo que culmina no envio da Igreja ao mundo."
          },
          {
            question: "O que caracteriza a 'Missão de Presença'?",
            options: ["Pregação em praça pública", "Distribuição de folhetos", "O testemunho cristão silencioso através da vida e serviço em locais restritos", "Programas de rádio e TV"],
            correctAnswerIndex: 2,
            explanation: "Em contextos onde a pregação aberta é proibida, a missão de presença foca em viver o Evangelho através do amor, serviço e caráter cristão."
          },
          {
            question: "Qual é o objetivo final da missão cristã segundo a perspectiva escatológica?",
            options: ["Apenas melhorar a sociedade atual", "A glória de Deus e a reunião de adoradores de todas as nações", "A expansão territorial da igreja institucional", "O enriquecimento dos missionários"],
            correctAnswerIndex: 1,
            explanation: "O fim último da missão é a glória de Deus, resultando em uma multidão de todas as tribos, povos e línguas adorando diante do trono (Apocalipse 7:9)."
          }`;

// Replace for Antropologia
const antroTarget = 'explanation: "A tricotomia defende que o homem é composto por três partes distintas: corpo (físico), alma (psique) e espírito (pneuma)."\n          }';
content = content.replace(antroTarget, antroTarget + antropologiaQuestions);

// Replace for Ética
const eticaTarget = 'explanation: "A ética da virtude foca em quem a pessoa se torna (caráter) através do cultivo de hábitos santos, e não apenas em atos isolados."\n          }';
content = content.replace(eticaTarget, eticaTarget + eticaQuestions);

// Replace for Missiologia
const missioTarget = 'explanation: "A inculturação busca comunicar o Evangelho de forma que ele faça sentido dentro de uma cultura específica, sem comprometer a verdade bíblica."\n          }';
content = content.replace(missioTarget, missioTarget + missiologiaQuestions);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Added questions to academy_data.ts');
