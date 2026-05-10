
export type BiblicalEra = 'all' | 'patriarchs' | 'exodus' | 'judges' | 'kings' | 'exile' | 'jesus' | 'church';

export interface Territory {
  id: string;
  name: string;
  era: BiblicalEra;
  color: string;
  coordinates: [number, number][][]; // Polygon geometry
}

export interface BiblicalLocation {
  id: string;
  name: string;
  biblicalName: string;
  lat: number;
  lng: number;
  category: string;
  description: string;
  verses: string[];
  importance: string;
  era?: BiblicalEra[];
  imageUrl?: string;
  reconstructionUrl?: string;
  elevation?: number;
}

export interface RoutePoint {
  name: string;
  lat: number;
  lng: number;
  description: string;
  verses: string[];
  order: number;
  elevation?: number;
  imageUrl?: string;
}

export interface MapRoute {
  id: string;
  title: string;
  character: string;
  points: RoutePoint[];
  distanceKm?: number;
  historicalContext: string;
  era?: BiblicalEra;
}

export type TheologicalLens = 'expository' | 'historical' | 'lexical' | 'doctrinal' | 'homiletical' | 'typological' | 'practical';

export interface Entitlement {
  status: 'ACTIVE' | 'PAST_DUE' | 'CANCELED' | 'REVOKED';
  validUntil: number;
  lastCheckedAt: number;
  planType: 'monthly' | 'yearly' | 'none';
}

export interface UserState {
  isPremium: boolean;
  entitlement?: Entitlement;
  theme: 'light' | 'dark' | 'sepia' | 'midnight' | 'ocean' | 'forest' | 'gold';
  fontFamily: 'serif' | 'sans';
  fontSize: 'small' | 'medium' | 'large' | 'xl';
  savedForSermons: string[];
  devotionalEntries: DevotionalEntry[];
  installedPacks: string[];
  aiPreference: 'lite' | 'deep';
  theologicalMode: 'christian' | 'neutral';
  activeLayers: TheologicalLens[]; // Novas camadas de visualização
  academyScores?: Record<string, number>; // Histórico Escolar (topicId -> score percentage)
  courseProgress?: Record<string, { completed: boolean; xp: number }>; // Histórico de Cursos (lessonId -> status)
  flashcardProgress?: Record<string, FlashcardProgress>; // Progresso de Memorização (cardId -> SRS data)
}

export interface FlashcardProgress {
  cardId: string;
  deckId: string;
  nextReview: number; // timestamp
  interval: number; // em dias
  easeFactor: number; // padrão 2.5
  consecutiveCorrect: number;
  lastReviewed: number;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  hint?: string;
  category?: string;
  sourceId?: string;
}

export interface FlashcardDeck {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  cards: Flashcard[];
}

export interface DiaryEntry {
  id: string;
  date: number;
  title: string;
  content: string;
  refs: string[];
  isPromise: boolean;
  tags: string[];
}

export interface Hymn {
  id: string;
  number: number;
  title: string;
  lyrics: string;
  author: string;
  themes: string[];
  relatedRefs: string[];
  history: string;
}

export interface MinisterialDNA {
  topThemes: { name: string; count: number }[];
  preferredBooks: { name: string; count: number }[];
  style: 'expository' | 'topical' | 'narrative';
  lastActivity: number;
}

// ... manter as outras interfaces existentes sem alteração ...
export interface BibleWord {
  id: string;
  text: string;
  strong?: string;
  lemma?: string;
  morph?: string;
}

export interface VerseWord {
  text: string;
  strong: string[];
  lemma: string[];
  morph: string[];
  transliteration?: string[];
  definition?: string[];
}

export interface DitoDuro {
  id: string;
  bookId: string;
  chapter: number;
  verse: number;
  problem: string;
  exegesis: string;
  harmonization: string;
}

export interface Verse {
  id: string;
  bookId: string;
  book: string;
  chapter: number;
  verse: number;
  text: string;
  strongs?: string[];
  words?: VerseWord[] | BibleWord[];
  historicalNote?: string;
  typology?: string;
  practicalApp?: string;
}

export interface SermonBlock {
  id: string;
  type: SermonBlockType;
  title: string;
  content: string;
  metadata?: any;
}

export type SermonBlockType = 
  | 'text-base' | 'introduction' | 'context' | 'exegesis' 
  | 'point' | 'strong-word' | 'illustration' | 'application' 
  | 'conclusion' | 'note' | 'chronology' | 'student-questions' 
  | 'lesson-goal' | 'ai-commentary' | 'library-clip' | 'coaching-insight'
  | 'prescription' | 'quote' | 'media-action' | 'homiletic-template';

export interface Sermon {
  id: string;
  title: string;
  type: SermonType;
  date: string;
  tags: string[];
  blocks: SermonBlock[];
  status: 'draft' | 'completed';
  version: number;
  folder?: string;
  metadata?: {
    location?: string;
    audience?: string;
    objective?: string;
  };
}

export type SermonType = 'expository' | 'thematic' | 'bible-class' | 'theological-study';

export interface CaptureTarget {
  sermonId: string;
  blockId: string;
  blockTitle: string;
}

// Mantendo os tipos do Dabar Hub e outros
export interface BookIntroduction {
  bookId: string;
  abbreviation: string;
  author: string;
  date: string;
  audience: string;
  genre: string;
  theme: string;
  outline: { title: string; range: string }[];
  chapters: number;
  verses: number;
  usualOrder: number;
  chronologicalOrder: number;
  fulfilledPromises: string[];
  unfulfilledPromises: string[];
  keyVerse?: string;
  christType?: string;
  description?: string;
  location?: string;
}

/**
 * Fix: Added missing interfaces for theological data structures
 */
export interface Dispensation {
  id: string;
  title: string;
  period: string;
  duration: string;
  color: string;
  startText: string;
  startRef: string;
  endText: string;
  endRef: string;
  description: string;
  exegeticalDefinition: string;
  transitionMechanism: string;
  responsibility: string;
  humanFailure: string;
  divineJudgment: string;
  divineGrace: string;
  transition: string;
  keyTexts: string[];
  promisesLink: string;
  covenantsLink: string;
  todayLessons: string;
  interpretationErrors: string;
  howToNotConfuse: string;
  events: Array<{ title: string; ref: string; description: string }>;
}

export interface CommentaryAuthor {
  id: string;
  name: string;
  period: string;
  bio: string;
}

export interface Commentary {
  id: string;
  authorId: string;
  bookId: string;
  chapter: number;
  title: string;
  content: string;
  references: string[];
}

export interface MapData {
  id: string;
  name: string;
  description: string;
  regions: Array<{ name: string; bibleRef: string }>;
}

export interface SpecialStudy {
  id: string;
  title: string;
  content: string;
  themeColor?: 'indigo' | 'amber' | 'rose' | 'emerald' | 'sky' | 'violet' | 'fuchsia';
  tags?: string[];
  readingTime?: string;
  theologicalSymbolism?: string;
  crossReferences?: string;
  events?: Array<{ year: string; title: string; description: string; customColor?: string }>;
}

export interface TopicalTheme {
  id: string;
  title: string;
  description: string;
  subthemes: Subtheme[];
}

export interface Subtheme {
  title: string;
  verses: string[];
}

export type CommentaryKind = 'micro' | 'expository' | 'doctrinal' | 'homiletical' | 'historical';

export interface CommentaryPack {
  id: string;
  name: string;
  author: string;
  description: string;
  kind: CommentaryKind;
  isPremium: boolean;
  size: string;
}

export interface CommentaryEntry {
  id: string;
  packId: string;
  scope: 'verse' | 'chapter' | 'book';
  refStart: string;
  kind: CommentaryKind;
  title: string;
  body: string;
}

export interface AICommentCache {
  id: string;
  scope: 'verse' | 'range';
  refStart: string;
  refEnd: string;
  mode: 'christian' | 'neutral';
  lenses: Record<TheologicalLens, string>;
  createdAt: number;
}

export interface PulpitSession {
  id: string;
  sermonId: string;
  startTime: number;
  endTime?: number;
  blockTimestamps: Record<string, number>;
}

export interface DetailedDispensation extends Dispensation {}

export interface HistoricalPeriod {
  id: string;
  title: string;
  icon: string;
  period: string;
  reference: string;
  summary: string;
  events: Array<{ year: string; title: string }>;
  characters: string[];
  books: string;
}

export interface ThematicPrayer {
  id: string;
  theme: string;
  text: string;
  refs: string[];
}

export interface King {
  id: string;
  name: string;
  years: string;
  duration: string;
  prophets: string[];
  evaluation: 'good' | 'bad' | 'mixed';
  dynasty: string;
  summary: string;
  bibleRef: string;
  spiritualProfile?: string;
  relationshipWithGod?: string;
  spiritualInfluence?: string;
  keyEvents?: Array<{ title: string; desc: string }>;
  contemporaryProphetsDesc?: string;
  leadershipLessons?: string;
  spiritualAlerts?: string;
  homileticalPrinciples?: string;
  booksWritten?: string[];
  dispensationContext?: string;
}

export interface MonarchyData {
  united: King[];
  judah: King[];
  israel: King[];
}

export interface Prophecy {
  id: string;
  testament: 'OT' | 'NT';
  prophet: string;
  year: string;
  ruler: any;
  theme: string;
  prophecyRef: string;
  prophecyText: string;
  fulfillmentStatus: 'fulfilled' | 'pending';
  fulfillmentRef?: string;
  fulfillmentText?: string;
  description: string;
}

export interface ModuleManifest {
  id: string;
  title: string;
  subTitle: string;
  type: 'fundamental' | 'acrostic' | 'conclusion';
  chunkCount: number;
}

export interface BookChunk {
  id: string;
  moduleId: string;
  order: number;
  content: string[];
  anchors: string[];
  refs: string[];
}

export interface Psalm119Section {
  id: string;
  title: string;
  subTitle: string;
  content: string[];
  keywords: string[];
  theologicalInsights: string[];
  application: string;
  prayer: string;
}

export interface Psalm119Book {
  author: string;
  title: string;
  modules: {
    fundamentals: Psalm119Section[];
    acrostic: Psalm119Section[];
    conclusion: Psalm119Section;
  };
}

export interface Quote {
  id: string;
  century: string;
  category: 'father' | 'reformer' | 'puritan' | 'revivalist' | 'modern' | 'contemporary';
  author: string;
  text: string;
}

export interface DeepMapEvent {
  id: string;
  line: 'throne' | 'blood' | 'water' | 'fire' | 'tree' | 'kingdom' | 'presence';
  event: string;
  baseText: string;
  theme: string;
  theology: string;
  application: string;
  connections: string[];
  chronology: string;
}

export interface HeresyContent {
  id: string;
  title: string;
  subtitle: string;
  context: string[];
  errorNucleus: string[];
  deepProblem: string[];
  destroys: string[];
  sequestratedTexts: string[];
  biblicalResponse: Array<{ ref: string; text: string }>;
  modernSymptoms: string[];
  pastoralRemedy: string[];
}

export interface HeresyBlock {
  id: string;
  title: string;
  color: string;
  items: HeresyContent[];
  conclusion?: string;
}

export interface BibleQuote {
  id: string;
  text: string;
  ref: string;
  testament: 'AT' | 'NT';
  category: string;
}

export interface ReadingPlan {
  id: string;
  title: string;
  description: string;
  totalDays: number;
  items: { day: number; ref: string; description: string }[];
}

export interface UserNote {
  id: string;
  title: string;
  content: string;
  date: number;
  tags?: string[];
  connectedRef?: string; // Ex: "GEN 1:1"
}

export interface TimelineGlobalEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  category: 'Biblical' | 'Secular' | 'Church';
  bookContext?: string[]; // Livros relacionados
}

export interface HistoricalContext { id: string; title: string; category: string; content: string; bibleRefs: string[]; }
export interface TimelineEvent { id: string; year: string; title: string; category: string; description: string; refs: string[]; }
export interface DictionaryEntry { term: string; definition: string; usage: string; keyRefs: string[]; }
export interface TheologicalTopic { id: string; title: string; development: string; systematic: string; refs: string[]; }
export interface SermonOutline { id: string; title: string; keyVerse: string; points: { title: string; explanation: string; ref: string }[]; applications: { general: string }; questions: string[]; }
export interface DevotionalReflection { id: string; title: string; content: string; prayer: string; ref: string; }
export interface CommonError { id: string; mistake: string; correction: string; context: string; ref: string; }
export interface BiblicalProfile { id: string; name: string; strengths: string[]; failures: string[]; mainLessons: string; appearances: string[]; }
export interface NT_OT_Connection { id: string; ot_shadow: string; nt_fulfillment: string; type: 'typology' | 'prophecy'; description: string; }
export interface IntertestamentalContext { id: string; title: string; group: string; description: string; impact: string; }
export interface ChristValue {
  id: string;
  title: string;
  icon: string;
  description: string[];
  question?: string;
}

export interface StrongEntry { 
  id: string; 
  original: string; 
  originalWord?: string; // Alias para compatibilidade
  transliteration: string; 
  pronunciation?: string; 
  definition: string; 
  shortDefinition?: string; // Alias para compatibilidade
  occurrences: number; 
  lemma?: string; 
}
export interface StrongToken { 
  surface?: string; 
  normalized?: string; 
  strong?: string | string[] | null; 
  lemma?: string | string[]; 
  morph?: string | string[];
  transliteration?: string | string[];
  definition?: string | string[];
  t?: string; // Mantido para compatibilidade com dados legados
  text?: string; // Novo campo para o formato do usuário
}
export interface VerseStrongToken extends StrongToken {}
export interface StrongTokenSeed { [verseId: string]: StrongToken[]; }
export interface VerseStrongData { [verseId: string]: StrongToken[]; }
export interface DevotionalEntry { date: string; text: string; }
export interface LibraryClip { id: string; type: 'ocr' | 'voice' | 'text'; title: string; content: string; tags: string[]; bibleRefs: string[]; createdAt: number; }
export interface CoachingReport { id: string; sessionId: string; metrics: { totalDuration: number; avgWordsPerMinute: number; energyVariance: number; silencePercentage: number; }; suggestions: string; createdAt: number; }
export interface TeiaGraph { nodes: TeiaNode[]; edges: TeiaEdge[]; queryHash: string; createdAt: number; }
export interface TeiaNode { id: string; type: TeiaNodeType; title: string; summary: string; refs: string[]; tags: string[]; score: number; x?: number; y?: number; vx?: number; vy?: number; }
export interface TeiaEdge { id: string; from: string; to: string; relationType: string; }
export type TeiaNodeType = 'theme' | 'bible_ref' | 'person' | 'doctrine' | 'user_sermon' | 'event' | 'prophecy' | 'king';

export interface AcademyQuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface PrimarySource {
  id: string;
  title: string;
  author: string;
  period: 'Patrística' | 'Reformada' | 'Puritana' | 'Moderna' | 'Contemporânea' | 'Escolástica' | 'Patrística/Medieval' | 'Reformada Escocesa' | 'Reformada Holandesa' | 'Reforma';
  year: string;
  content: string;
  summary: string;
  tags: string[];
}

export interface PastoralDilemma {
  id: string;
  title: string;
  scenario: string;
  questions: string[];
  biblicalPrinciples: string[];
  suggestedResolution: string;
}

export interface DogmaticTimelineEvent {
  year: string;
  event: string;
  significance: string;
}

export interface ComparativeMatrix {
  category: string;
  views: {
    tradition: string;
    position: string;
  }[];
}

export interface AcademyTopic {
  id: string;
  title: string;
  content: string[]; // Mínimo 22 parágrafos por doutrina principal
  subItems: string[];
  etymology?: {
    term: string;
    original: string;
    transliteration: string;
    strong: string;
    meaning: string;
  }[];
  currents?: {
    name: string;
    description: string;
  }[];
  thesis?: string;
  quiz?: AcademyQuizQuestion[];
  primarySources?: PrimarySource[];
  dilemmas?: PastoralDilemma[];
  bibliography?: string[];
  timeline?: DogmaticTimelineEvent[];
  comparativeMatrix?: ComparativeMatrix[];
  audioLesson?: string; // Script para a aula em áudio via Gemini TTS
}

export interface CourseLesson {
  id: string;
  title: string;
  content: string[];
  vocabulary: {
    word: string;
    transliteration: string;
    translation: string;
    strong?: string;
    audioLang: 'he-IL' | 'el-GR' | 'la';
  }[];
  drawingPractice?: {
    characters: string[];
    instruction: string;
  };
  quiz?: AcademyQuizQuestion[];
  xpReward: number;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  lessons: CourseLesson[];
}

export interface Course {
  id: string;
  title: string;
  icon: string;
  description: string;
  language?: 'hebrew' | 'greek' | 'hermeneutics' | 'latin';
  progress?: number;
  totalLessons?: number;
  image?: string;
  modules: CourseModule[];
}

export interface AcademyModule {
  id: string;
  title: string;
  icon: string;
  description: string;
  topics: AcademyTopic[];
}
