import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'academy_data.ts');
let content = fs.readFileSync(filePath, 'utf-8');

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

const missioTarget = 'explanation: "Contextualização busca tornar o Evangelho compreensível e relevante dentro de cada cultura."\n          }';
content = content.replace(missioTarget, missioTarget + missiologiaQuestions);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Added questions to Missiologia');
