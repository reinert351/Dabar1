
import { Outline } from './types';
import { SermonBlock } from '../../types';

export const outlineToSermonBlocks = (outline: Outline): SermonBlock[] => {
  const blocks: SermonBlock[] = [];
  const isSeminary = outline.style === 'prayer_seminary';

  // Bloco de Identificação de Perícope
  if (outline.pericopeTitle) {
    blocks.push({
      id: `p_meta_${Date.now()}`,
      type: 'context',
      title: '📍 Perícope Identificada',
      content: `TÍTULO: ${outline.pericopeTitle}\nALVO: ${outline.pericopeRange}\nMOVIMENTO: ${outline.movement}`
    });
  }

  // Bloco de Lentes Titan
  if (outline.lenses) {
    blocks.push({
      id: `lens_hist_${Date.now()}`,
      type: 'context',
      title: '⏳ Lente Histórica',
      content: outline.lenses.historical
    });
    blocks.push({
      id: `lens_christ_${Date.now()}`,
      type: 'ai-commentary',
      title: '👑 Lente Cristocêntrica',
      content: outline.lenses.christocentric
    });
  }

  // Bloco de Tópicos (Movimento)
  outline.points.forEach((p, i) => {
    blocks.push({
      id: `off_p${i}_${Date.now()}`,
      type: 'point',
      title: `Ponto 0${i + 1}: ${p.title}`,
      content: p.explanation
    });
  });

  // Bloco de Links de Módulos Dabar
  if (outline.moduleLinks && outline.moduleLinks.length > 0) {
    blocks.push({
      id: `mod_links_${Date.now()}`,
      type: 'note',
      title: '🔍 Aprofundamento (Módulos Dabar)',
      content: `Para enriquecer este estudo, explore os módulos:\n${outline.moduleLinks.map(l => `• ${l}`).join('\n')}`
    });
  }

  blocks.push({
    id: `off_app_${Date.now()}`,
    type: 'application',
    title: 'Aplicação Pastoral',
    content: outline.applications.join('\n')
  });

  blocks.push({
    id: `off_conc_${Date.now()}`,
    type: 'conclusion',
    title: 'Conclusão',
    content: outline.conclusion
  });

  return blocks;
};
