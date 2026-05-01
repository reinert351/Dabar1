
import { HomileticStyle } from './types';
import { PERICOPES_TAGS } from '../data/pericopes_tags';

export const scoreStyle = (verseRefs: string[], verseTexts: string[]) => {
  /**
   * Fix: Added missing 'prayer_seminary' property to scores object to satisfy Record<HomileticStyle, number>
   */
  const scores: Record<HomileticStyle, number> = {
    expository: 10,
    christocentric: 5,
    pastoral: 5,
    prophetic: 5,
    didactic: 5,
    intercessory: 5,
    discipleship: 5,
    evangelistic: 5,
    prayer_seminary: 0
  };

  const reasons: string[] = ["Baseado no gênero do texto (Padrão: Expositivo)"];

  // 1. Checar dataset fixo
  verseRefs.forEach(ref => {
    const data = PERICOPES_TAGS.find(p => ref.includes(p.ref));
    if (data) {
      data.bias.forEach(style => {
        scores[style] += 30;
        reasons.push(`Referência histórica detectada (${ref}): Bias para ${style}.`);
      });
    }
  });

  // 2. Análise de palavras-chave simples
  const fullText = verseTexts.join(' ').toLowerCase();
  const keywords: Record<string, HomileticStyle[]> = {
    'sangue': ['evangelistic', 'christocentric'],
    'cruz': ['evangelistic', 'christocentric'],
    'perdão': ['evangelistic', 'pastoral'],
    'arrependimento': ['prophetic', 'evangelistic'],
    'oração': ['intercessory'],
    'clamou': ['intercessory'],
    'lei': ['didactic', 'expository'],
    'mandamento': ['didactic', 'discipleship'],
    'seguir': ['discipleship'],
    'discípulo': ['discipleship'],
    'soberano': ['prophetic', 'expository'],
    'consolo': ['pastoral'],
    'paz': ['pastoral'],
    'rei': ['prophetic', 'christocentric'],
    'morte': ['evangelistic', 'prophetic']
  };

  Object.entries(keywords).forEach(([word, styles]) => {
    if (fullText.includes(word)) {
      styles.forEach(s => {
        scores[s] += 15;
        reasons.push(`Palavra-chave detectada: "${word}" (+15 ${s})`);
      });
    }
  });

  const winner = (Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]) as HomileticStyle;
  
  return { winner, reasons: Array.from(new Set(reasons)).slice(0, 4) };
};
