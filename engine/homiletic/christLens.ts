
import { PericopeData } from './types';

export const applyChristLens = (pericope: PericopeData): string => {
  if (pericope.christConnections && pericope.christConnections.length > 0) {
    return pericope.christConnections.join(". ");
  }
  
  // Fallback genérico baseado no gênero
  switch(pericope.genre) {
    case 'narrative': return "Cristo é o Herói final desta história, cumprindo o que os personagens humanos falharam.";
    case 'argument': return "Cristo é a base lógica da verdade aqui apresentada e o cumprimento da justiça divina.";
    case 'poetic': return "Cristo é o centro da afeição e o cumprimento da promessa que traz o real consolo.";
    default: return "Toda a Escritura converge para a suficiência de Jesus Cristo.";
  }
};
