
export interface ParsedRef {
  book: string;
  chapter: number;
  vStart?: number;
  vEnd?: number;
  hasVerses: boolean;
  raw: string;
}

export const parseOsisRef = (ref: string): ParsedRef | null => {
  if (!ref) return null;
  const regex = /^([A-Z1-3]+)\s+(\d+)(?::(\d+)(?:-(\d+))?)?$/;
  const match = ref.match(regex);
  if (!match) return null;
  const book = match[1];
  const chapter = parseInt(match[2]);
  const vStart = match[3] ? parseInt(match[3]) : undefined;
  const vEnd = match[4] ? parseInt(match[4]) : vStart;
  return { book, chapter, vStart, vEnd, hasVerses: vStart !== undefined, raw: ref };
};
