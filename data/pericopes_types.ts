export interface PericopeOutline {
  id: string;
  bookId: string;
  chapter: number;
  startVerse: number;
  endVerse: number;
  title: string;
  theme: string;
  introduction: string;
  points: { verseRef: string; title: string; description: string }[];
  conclusion: string;
}
