
import { DEEP_MAP_DATA } from '../data/deep_map_data';
import { PROPHECIES_DATA } from '../data/prophecies_data';
import { TYPOLOGY_DATA } from '../components/TypologyTab'; // Exported data
import { BIBLE_METADATA } from '../constants';

export type CrossLinkCategory = 'map' | 'prophecy' | 'typology';

export interface CrossLink {
  category: CrossLinkCategory;
  title: string;
  id: string;
}

const normalizeRef = (ref: string): string => {
  let normalized = ref.toUpperCase();
  // Replace full names and abbreviations with IDs if found
  Object.values(BIBLE_METADATA).forEach(meta => {
    const fullName = meta.name.toUpperCase();
    const abbrev = meta.abbreviation.toUpperCase();
    
    if (normalized.includes(fullName)) {
      normalized = normalized.replace(fullName, meta.id);
    }
    
    const abbrevRegex = new RegExp(`\\b${abbrev}\\b`, 'g');
    normalized = normalized.replace(abbrevRegex, meta.id);
  });
  return normalized;
};

const isVerseMatch = (verseId: string, refString: string): boolean => {
  const normalizedVerseId = normalizeRef(verseId);
  const normalizedRefs = normalizeRef(refString).split(/[\/;,]/).map(s => s.trim());

  const [vBook, vChapVerse] = normalizedVerseId.split(' ');
  if (!vChapVerse) return false;
  const [vChapter, vVerse] = vChapVerse.split(':');
  const vChapNum = parseInt(vChapter);
  const vVerseNum = parseInt(vVerse);

  for (const nRef of normalizedRefs) {
    if (normalizedVerseId === nRef) return true;

    const refParts = nRef.split(' ');
    if (refParts.length < 2) continue;
    const rBook = refParts[0];
    if (rBook !== vBook) continue;

    const rRest = refParts.slice(1).join(' '); // e.g. "1:2-4"

    if (rRest === vChapter) {
      if (vVerseNum === 1) return true;
      continue;
    }

    if (rRest.includes('-') && !rRest.includes(':')) {
      const [startC, endC] = rRest.split('-');
      if (vChapNum >= parseInt(startC) && vChapNum <= parseInt(endC)) {
        if (vVerseNum === 1) return true;
      }
      continue;
    }

    if (rRest.includes(':')) {
      const [rChapter, rVerses] = rRest.split(':');
      if (parseInt(rChapter) !== vChapNum) continue;

      if (rVerses.includes('-')) {
        const [startV, endV] = rVerses.split('-');
        if (vVerseNum >= parseInt(startV) && vVerseNum <= parseInt(endV)) return true;
      } else {
        if (parseInt(rVerses) === vVerseNum) return true;
      }
    }
  }

  return false;
};

export const getLinkDetails = (category: CrossLinkCategory, id: string): any => {
  if (category === 'map') {
    return DEEP_MAP_DATA.find(e => e.id === id);
  }
  if (category === 'prophecy') {
    return PROPHECIES_DATA.find(p => p.id === id);
  }
  if (category === 'typology') {
    return TYPOLOGY_DATA.find(t => t.id === id);
  }
  return null;
};

export const getLinksForVerse = (verseId: string): CrossLink[] => {
  const links: CrossLink[] = [];

  // 1. Busca no Mapa Dinâmico
  DEEP_MAP_DATA.forEach(event => {
    if (isVerseMatch(verseId, event.baseText)) {
      links.push({ category: 'map', title: event.event, id: event.id });
    }
  });

  // 2. Busca nas Profecias
  PROPHECIES_DATA.forEach(p => {
    if (isVerseMatch(verseId, p.prophecyRef) || (p.fulfillmentRef && isVerseMatch(verseId, p.fulfillmentRef))) {
      links.push({ category: 'prophecy', title: p.theme, id: p.id });
    }
  });

  // 3. Busca na Tipologia
  TYPOLOGY_DATA.forEach(t => {
    if (t.refs.some(r => isVerseMatch(verseId, r))) {
      links.push({ category: 'typology', title: t.title, id: t.id });
    }
  });

  return links;
};
