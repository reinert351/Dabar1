/**
 * DABAR LOGOS - TEXT ENGINE
 */

export function normalizeWord(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, ' ')
    .trim();
}

export function tokenize(text: string): string[] {
  return normalizeWord(text)
    .split(/[\s-]+/)
    .filter(t => t.length > 1);
}
