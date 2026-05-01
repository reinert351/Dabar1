
import { Outline, HomileticStyle, TextMovement } from './types';
import { normalizeRefToOsis } from '../ref/normalizeOsis';
import { findPericopeForRef, getPericopeFallback } from '../pericope/index';
import { detectMovement } from './movement';
import { applyChristLens } from './christLens';
import { isPrayerText } from '../detectors/isPrayerText';
import { STYLE_LABELS } from './templates';

export const buildOfflineOutline = async (refs: string[], opts?: {topic?: string}): Promise<Outline> => {
  const rawRef = refs[0] || "";
  const normRef = normalizeRefToOsis(rawRef);
  const pericope = findPericopeForRef(normRef) || getPericopeFallback(normRef);
  
  if (pericope.id === 'fallback') {
    if (opts?.topic) pericope.title = opts.topic;
    else pericope.title = `Oração e Soberania em ${rawRef || normRef}`;
    
    // Guess genre better
    if (['PSA', 'PRO', 'ECC', 'SNG', 'JOB'].includes(pericope.book)) {
      pericope.genre = 'poetic';
    } else if (['ROM', '1CO', '2CO', 'GAL', 'EPH', 'PHP', 'COL', '1TH', '2TH', '1TI', '2TI', 'TIT', 'PHM', 'HEB', 'JAM', '1PE', '2PE', '1JN', '2JN', '3JN', 'JUD'].includes(pericope.book)) {
      pericope.genre = 'argument';
    } else if (pericope.book === 'REV') {
      pericope.genre = 'apocalyptic';
    }
  }

  const isPrayer = isPrayerText(normRef);

  // Determinação de Estilo Titan
  let style: HomileticStyle = 'expository';
  const tags = pericope.tags || [];
  if (isPrayer || tags.includes('prayer')) style = 'prayer_seminary';
  else if (tags.includes('persecution')) style = 'pastoral';
  else if (tags.includes('creation') || pericope.genre === 'argument') style = 'didactic';

  let movementPoints = detectMovement(pericope.genre as TextMovement, pericope.title);
  const christLens = applyChristLens(pericope as any);

  return {
    style,
    styleName: style === 'prayer_seminary' ? '🏛️ Seminário de Oração' : STYLE_LABELS[style] || 'Sermão Expositivo',
    reasons: [`Ref: ${normRef}`, `Gênero: ${pericope.genre}`, isPrayer ? "Oração Detectada" : "Texto Bíblico Analisado"],
    bigIdea: `A mensagem teológica central: ${pericope.title}`,
    introduction: `Iniciamos nossa jornada teológica no texto de ${pericope.book} ${pericope.chapter}, com o propósito de aplicarmos: ${pericope.title}.`,
    points: movementPoints.map((p, i) => ({
      ...p,
      title: `${p.title} em ${pericope.title}`,
      explanation: i === 1 ? `${p.explanation} ${christLens}` : p.explanation
    })),
    applications: [
      `Como a verdade sobre "${pericope.title}" altera nossas decisões práticas nesta semana?`,
      "Qual área do nosso ministério precisa se render a esta exegese?"
    ],
    conclusion: "Que o Espírito Santo consolide os princípios revelados nesta exposição bíblica.",
    pericopeTitle: pericope.title,
    pericopeRange: `${pericope.book} ${pericope.chapter}:${pericope.vStart}-${pericope.vEnd}`,
    movement: pericope.genre as TextMovement,
    lenses: {
      historical: `Contexto do livro de ${pericope.book} sob a ótica do movimento de ${pericope.genre}.`,
      exgetical: `Fluxo literário e teológico no texto da perícope escolhida.`,
      christocentric: christLens,
      practical: `Ação transformadora pautada pelos mandamentos do texto.`
    },
    formationQuestions: isPrayer ? [
      "Quais os argumentos teológicos desta oração?",
      "Como o caráter de Deus é invocado aqui?",
      "Qual o resultado prático deste clamor?"
    ] : []
  };
};
