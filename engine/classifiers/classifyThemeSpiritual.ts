
import { Verse } from '../../types';
import { SPIRITUAL_KEYWORDS, SpiritualProfile } from '../data/theme_spiritual_profile';

export interface SpiritualClassification {
  profile: SpiritualProfile;
  intensity: number;
  reason: string;
  detectedKeys: string[];
}

export const classifyThemeSpiritual = (verses: Verse[]): SpiritualClassification => {
  const normalize = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const allText = verses.map(v => normalize(v.text)).join(' ');
  
  const scores: Record<SpiritualProfile, { count: number, matched: Set<string> }> = {
    Doutrinário: { count: 0, matched: new Set() },
    Devocional: { count: 0, matched: new Set() },
    Pastoral: { count: 0, matched: new Set() },
    Profético: { count: 0, matched: new Set() },
    Evangelístico: { count: 0, matched: new Set() },
    Discipulado: { count: 0, matched: new Set() }
  };

  Object.entries(SPIRITUAL_KEYWORDS).forEach(([profile, keys]) => {
    keys.forEach(k => {
      const normK = normalize(k);
      const regex = new RegExp(normK, 'gi');
      const matches = allText.match(regex);
      if (matches) {
        scores[profile as SpiritualProfile].count += matches.length;
        scores[profile as SpiritualProfile].matched.add(k);
      }
    });
  });

  const sorted = Object.entries(scores).sort((a, b) => b[1].count - a[1].count);
  const top = sorted[0];
  const profile = top[0] as SpiritualProfile;
  
  // Intensidade baseada na densidade de matches por verso
  const intensity = Math.min(100, Math.round((top[1].count / (verses.length || 1)) * 25));
  
  const matchedList = Array.from(top[1].matched).slice(0, 5);
  const reason = matchedList.length > 0 
    ? `palavras-chave detectadas: ${matchedList.join(', ')}` 
    : "baseado em contexto teológico geral";

  return { 
    profile, 
    intensity, 
    reason,
    detectedKeys: matchedList
  };
};
