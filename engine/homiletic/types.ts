export type HomileticStyle = 
  | 'expository' 
  | 'christocentric' 
  | 'pastoral' 
  | 'prophetic' 
  | 'didactic' 
  | 'intercessory' 
  | 'discipleship' 
  | 'evangelistic'
  | 'prayer_seminary';

export type TextMovement = 'narrative' | 'argument' | 'poetic' | 'proverbial' | 'apocalyptic';

export interface OutlinePoint {
  title: string;
  explanation: string;
  supportRef?: string;
}

export interface Lenses {
  historical: string;
  exgetical: string;
  christocentric: string;
  practical: string;
}

export interface Outline {
  style: HomileticStyle;
  styleName: string;
  reasons: string[];
  bigIdea: string;
  introduction: string;
  points: OutlinePoint[];
  applications: string[];
  conclusion: string;
  // Enriquecimento Titan v2.0
  pericopeTitle?: string;
  pericopeRange?: string;
  movement?: TextMovement;
  lenses?: Lenses;
  moduleLinks?: string[];
  // Campos do Modo Seminário
  prayerContext?: string;
  prayerExegesis?: string;
  prayerTheology?: string;
  spiritualDNA?: string;
  prayerFlow?: string;
  formationQuestions?: string[];
}

export interface PericopeData {
  id: string;
  book: string;
  vStart: number;
  vEnd: number;
  chapter: number;
  title: string;
  genre: TextMovement;
  tags: string[];
  christConnections: string[];
  suggestedModules: string[];
}

/**
 * Fix: Added PericopeBias interface to support homiletic scoring based on specific references.
 * This resolves type mismatch errors where PericopeData was being used for data that only contains ref, tags, and bias.
 */
export interface PericopeBias {
  ref: string;
  tags: string[];
  bias: HomileticStyle[];
}

export interface PericopeData {
  id: string;
  book: string;
  vStart: number;
  vEnd: number;
  chapter: number;
  title: string;
  genre: TextMovement;
  tags: string[];
  christConnections: string[];
  suggestedModules: string[];
}
