
import { PERICOPES_INDEX, PericopeRecord } from '../data/pericopes_index';
import { parseOsisRef } from '../ref/parseOsis';

export const findPericopeForRef = (osisRef: string): PericopeRecord | null => {
  const parsed = parseOsisRef(osisRef);
  if (!parsed) return null;

  // Busca por interseção exata
  return PERICOPES_INDEX.find(p => 
    p.book === parsed.book && 
    p.chapter === parsed.chapter && 
    ((parsed.vStart && parsed.vStart >= p.vStart && parsed.vStart <= p.vEnd) || !parsed.hasVerses)
  ) || null;
};

export const getPericopeFallback = (osisRef: string): PericopeRecord => {
  const parsed = parseOsisRef(osisRef) || { book: "???", chapter: 1, vStart: 1, vEnd: 1 };
  return {
    id: "fallback",
    book: parsed.book,
    chapter: parsed.chapter,
    vStart: (parsed as any).vStart || 1,
    vEnd: (parsed as any).vEnd || 1,
    title: `Estudo em ${osisRef}`,
    genre: "narrative",
    tags: [],
    christLinks: []
  };
};
