
import { TextMovement, OutlinePoint } from './types';

export const detectMovement = (genre: TextMovement, title: string): OutlinePoint[] => {
  switch(genre) {
    case 'narrative':
      return [
        { title: 'O Cenário e o Conflito', explanation: 'A situação original que exige uma intervenção divina.' },
        { title: 'A Ação de Deus na Crise', explanation: 'Como a mão do Senhor altera o curso natural dos eventos.' },
        { title: 'A Resolução Redentiva', explanation: 'O novo estado estabelecido após o encontro com a verdade.' }
      ];
    case 'argument':
      return [
        { title: 'A Premissa Doutrinária', explanation: 'O fundamento teológico estabelecido pelo autor.' },
        { title: 'O Desenvolvimento Lógico', explanation: 'As implicações e defesas do ponto central.' },
        { title: 'A Conclusão Imperativa', explanation: 'A resposta ética exigida pela verdade apresentada.' }
      ];
    case 'poetic':
      return [
        { title: 'A Expressão do Coração', explanation: 'O sentimento humano perante a majestade ou a dor.' },
        { title: 'O Atributo Divino em Foco', explanation: 'Quem Deus se revela ser neste poema/oração.' },
        { title: 'O Repouso da Fé', explanation: 'O alinhamento da alma com a fidelidade de Deus.' }
      ];
    default:
      return [
        { title: 'Observação do Texto', explanation: 'O que o texto diz originalmente.' },
        { title: 'Interpretação do Texto', explanation: 'O que o texto significa teologicamente.' },
        { title: 'Aplicação do Texto', explanation: 'O que o texto exige de nós hoje.' }
      ];
  }
};
