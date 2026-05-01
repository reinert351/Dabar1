/**
 * DABAR LOGOS - LOADER
 * Gerencia o carregamento de shards em public/index/
 */

const CACHE = new Map<string, any>();
const BASE_URL = './index';

export async function fetchFragment(path: string): Promise<any> {
  const fullPath = `${BASE_URL}/${path}`;
  if (CACHE.has(fullPath)) return CACHE.get(fullPath);

  try {
    const res = await fetch(fullPath);
    if (!res.ok) return null; // Retorno silencioso para shards inexistentes
    const data = await res.json();
    CACHE.set(fullPath, data);
    return data;
  } catch (e) {
    // Falha silenciosa em ambiente offline/incompleto
    return null;
  }
}

export async function clearLoaderCache() {
  CACHE.clear();
}