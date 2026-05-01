import { normalizeWord } from './normalize';
import { fetchFragment } from './loader';

/**
 * DABAR LOGOS - QUERY ENGINE
 */

let REFS_CACHE: string[] | null = null;

async function getRefsList(): Promise<string[]> {
  if (REFS_CACHE) return REFS_CACHE;
  REFS_CACHE = await fetchFragment('concordance.refs.json');
  return REFS_CACHE || [];
}

export async function getRefsByWord(word: string): Promise<string[]> {
  const norm = normalizeWord(word);
  if (!norm) return [];

  const prefix = norm.substring(0, 2);
  const shard = await fetchFragment(`concordance.words/${prefix}.json`);
  
  if (!shard || !shard[norm]) return [];

  const ids: number[] = shard[norm];
  const allRefs = await getRefsList();

  return ids.map(id => allRefs[id]);
}

export async function suggestWords(prefix: string, limit = 20): Promise<string[]> {
  const norm = normalizeWord(prefix);
  if (!norm) return [];

  // Decisão: Shard baseado sempre nos primeiros 1 ou 2 caracteres
  const shardKey = norm.length === 1 ? norm : norm.slice(0, 2);
  const shard = await fetchFragment(`concordance.suggest/${shardKey}.json`);
  
  if (!shard || !Array.isArray(shard)) return [];

  // Filtragem local: O shard 'de.json' contém 'deus', 'decreto', etc.
  // Se o usuário digitou 'deu', filtramos apenas o que começa com 'deu'.
  return shard
    .filter((w: string) => w.startsWith(norm))
    .slice(0, limit);
}

export async function getTheme(themeId: string): Promise<any> {
  const themes = await fetchFragment('concordance.themes.json');
  if (!themes) return null;

  const theme = themes.find((t: any) => t.id === themeId);
  if (!theme) return null;

  const allRefs = await getRefsList();
  return {
    ...theme,
    refs: theme.refs.map((id: number) => allRefs[id])
  };
}

export async function getMeta(): Promise<any> {
  return await fetchFragment('concordance.meta.json');
}