
import { normalizeRefToOsis } from '../ref/normalizeOsis';
import { parseOsisRef, ParsedRef } from '../ref/parseOsis';
import { PRAYER_RANGES, PrayerRange } from '../data/prayer_ranges';

// Cache O(1) para busca por livro + capítulo
const PRAYER_MAP = new Map<string, PrayerRange[]>();

PRAYER_RANGES.forEach(range => {
  const key = `${range.book}${range.chapter}`;
  if (!PRAYER_MAP.has(key)) PRAYER_MAP.set(key, []);
  PRAYER_MAP.get(key)!.push(range);
});

/**
 * TITAN DETECTOR v2.0
 * Detecta se uma referência bíblica (em qualquer formato) intersecta uma oração conhecida.
 */
export const isPrayerText = (ref: string): boolean => {
  if (!ref) return false;

  const norm = normalizeRefToOsis(ref);
  const parsed = parseOsisRef(norm);

  if (!parsed) {
    console.warn("[LOGOS DETECTOR] Falha no parse da ref:", ref);
    return false;
  }

  const key = `${parsed.book}${parsed.chapter}`;
  const candidates = PRAYER_MAP.get(key) || [];

  let found = false;

  for (const range of candidates) {
    // 1. Se a oração registrada cobre o capítulo inteiro
    if (range.wholeChapter) {
      found = true;
      break;
    }

    // 2. Se o input não tem versos (foi pedido o capítulo inteiro)
    // Consideramos true se houver qualquer oração significativa no capítulo
    if (!parsed.hasVerses) {
      found = true; 
      break;
    }

    // 3. Se ambos tem versos, checamos interseção de faixas
    // Input: vStart to vEnd
    // DB: range.vStart to range.vEnd
    const inputStart = parsed.vStart!;
    const inputEnd = parsed.vEnd!;
    const dbStart = range.vStart!;
    const dbEnd = range.vEnd!;

    // Existe interseção se o maior início for menor ou igual ao menor fim
    if (Math.max(inputStart, dbStart) <= Math.min(inputEnd, dbEnd)) {
      found = true;
      break;
    }
  }

  console.log("[LOGOS DETECTOR]", { 
    input: ref, 
    osis: norm, 
    parsed: { book: parsed.book, ch: parsed.chapter, vs: `${parsed.vStart}-${parsed.vEnd}` },
    found 
  });

  return found;
};
