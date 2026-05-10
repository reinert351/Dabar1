import { FlashcardProgress } from '../types';

/**
 * Algoritmo de Repetição Espaçada (SM-2 Simplificado)
 * Qualidade: 0 (Errei), 1 (Difícil), 2 (Bom), 3 (Fácil)
 */
export function calculateNextReview(
  quality: number,
  current: Partial<FlashcardProgress>
): Omit<FlashcardProgress, 'cardId' | 'deckId'> {
  const easeFactor = current.easeFactor || 2.5;
  const interval = current.interval || 0;
  const consecutiveCorrect = current.consecutiveCorrect || 0;

  let nextInterval: number;
  let nextEaseFactor: number = easeFactor;
  let nextConsecutiveCorrect: number;

  if (quality >= 2) { // Bom ou Fácil
    if (consecutiveCorrect === 0) {
      nextInterval = 1;
    } else if (consecutiveCorrect === 1) {
      nextInterval = 6;
    } else {
      nextInterval = Math.round(interval * easeFactor);
    }
    nextConsecutiveCorrect = consecutiveCorrect + 1;
  } else { // Novato ou Erro
    nextConsecutiveCorrect = 0;
    nextInterval = 1;
  }

  // Ajuste do Fator de Facilidade (EF)
  // EF' = EF + (0.1 - (3 - q) * (0.08 + (3 - q) * 0.02))
  nextEaseFactor = easeFactor + (0.1 - (3 - quality) * 0.12);
  if (nextEaseFactor < 1.3) nextEaseFactor = 1.3;

  return {
    nextReview: Date.now() + (nextInterval * 24 * 60 * 60 * 1000),
    interval: nextInterval,
    easeFactor: nextEaseFactor,
    consecutiveCorrect: nextConsecutiveCorrect,
    lastReviewed: Date.now()
  };
}
