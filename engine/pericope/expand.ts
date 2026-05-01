
import { PERICOPES_INDEX } from '../data/pericopes_index';
import { parseOsisRef } from '../ref/parseOsis';
import { normalizeRefToOsis } from '../ref/normalizeOsis';
import { PericopeData } from '../homiletic/types';

export const expandToPericope = (ref: string): PericopeData | null => {
  const norm = normalizeRefToOsis(ref);
  const parsed = parseOsisRef(norm);
  if (!parsed) return null;

  /**
   * Fix: Find the pericope record and map it to the PericopeData structure. 
   * This resolves the error where 'PericopeRecord' was missing properties required 
   * by 'PericopeData' (christConnections and suggestedModules).
   */
  const found = PERICOPES_INDEX.find(p => 
    p.book === parsed.book && 
    p.chapter === parsed.chapter &&
    ((parsed.vStart && parsed.vStart >= p.vStart && parsed.vStart <= p.vEnd) || !parsed.vStart)
  );

  if (!found) return null;

  return {
    id: found.id,
    book: found.book,
    chapter: found.chapter,
    vStart: found.vStart,
    vEnd: found.vEnd,
    title: found.title,
    genre: found.genre,
    tags: found.tags,
    christConnections: found.christLinks.map(l => `${l.ref}: ${l.why}`),
    suggestedModules: []
  };
};