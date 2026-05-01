import React, { useState, useEffect } from 'react';
import { Verse, StrongToken } from '../types';
import { getVerseTokens } from '../services/database';
import { STRONGS_DATA } from '../data';

interface HighlightedVerseProps {
  verse: Verse;
  activeStrongId: string | null;
  isLexicalActive: boolean;
  handleStrongClick: (e: React.MouseEvent, id: string) => void;
  skipGemini?: boolean;
}

const STOP_WORDS = new Set(['que', 'para', 'com', 'por', 'uma', 'dos', 'das', 'aos', 'nas', 'nos', 'como', 'mas', 'ele', 'ela', 'eles', 'elas', 'sua', 'seu', 'teu', 'tua', 'meu', 'minha', 'este', 'esta', 'esse', 'essa', 'isso', 'isto', 'aquilo', 'aquele', 'aquela', 'pelo', 'pela', 'sobre', 'entre', 'sem', 'sob', 'ante', 'após', 'até', 'contra', 'desde', 'perante', 'trás', 'não', 'sim', 'nem', 'ou', 'se', 'já', 'só', 'tão', 'bem', 'mal', 'mais', 'menos', 'muito', 'pouco', 'tudo', 'nada', 'alguém', 'ninguém', 'qualquer', 'cada', 'outro', 'outra', 'outros', 'outras', 'mesmo', 'mesma', 'mesmos', 'mesmas', 'tal', 'tais', 'qual', 'quais', 'quem', 'onde', 'quando', 'porque', 'porquê', 'pois', 'portanto', 'logo', 'então', 'assim', 'ainda', 'sempre', 'nunca', 'jamais', 'também', 'agora', 'hoje', 'ontem', 'amanhã', 'aqui', 'ali', 'lá', 'aí', 'cá', 'acolá', 'longe', 'perto', 'antes', 'depois', 'dentro', 'fora', 'acima', 'abaixo', 'diante', 'detrás', 'além', 'aquém', 'de', 'do', 'da', 'em', 'no', 'na', 'a', 'o', 'os', 'as', 'um', 'uns', 'umas', 'e']);

const normalize = (w: string) => w.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]/g, "");

const HighlightedVerse: React.FC<HighlightedVerseProps> = ({ verse, activeStrongId, isLexicalActive, handleStrongClick, skipGemini = true }) => {
  const [tokens, setTokens] = useState<StrongToken[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLexicalActive) return;

    const fetchTokens = async () => {
      setLoading(true);
      try {
        const data = await getVerseTokens(verse.id, verse.text, skipGemini);
        setTokens(data);
      } catch (error) {
        console.error(`Erro ao carregar tokens para ${verse.id}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchTokens();
  }, [verse.id, verse.text, isLexicalActive, skipGemini]);

  if (!isLexicalActive) return <span>{verse.text}</span>;

  // Se tivermos a nova estrutura de palavras (mapeamento exato)
  if (verse.words && verse.words.length > 0) {
    return (
      <>
        {verse.words.map((word: any, i) => {
          const strongId = Array.isArray(word.strong) ? word.strong[0] : word.strong;
          const isHighlighted = activeStrongId === strongId;
          
          if (strongId && strongId !== 'H0000' && strongId !== 'G0000' && strongId !== 'H0' && strongId !== 'G0') {
            const lemmaStr = Array.isArray(word.lemma) ? word.lemma.join(', ') : (word.lemma || '');
            return (
              <span key={i}>
                <span 
                  onClick={(e) => handleStrongClick(e, strongId)}
                  className={`transition-colors cursor-pointer ${isHighlighted ? 'bg-indigo-600 text-white rounded px-1' : 'hover:text-indigo-500 underline decoration-dotted decoration-indigo-300/50'}`}
                  title={`Strong: ${strongId}${lemmaStr ? ` | Lemma: ${lemmaStr}` : ''}`}
                >
                  {word.text || word.t}
                </span>
              </span>
            );
          }
          return <span key={i}>{word.text || word.t}</span>;
        })}
      </>
    );
  }

  // Fallback para a lógica heurística se 'words' não existir
  if (loading) return <span className="animate-pulse text-gray-400">{verse.text}</span>;
  if (!tokens || tokens.length === 0) return <span>{verse.text}</span>;

  const parts = verse.text.split(/([\s.,;:!?]+)/);
  return (
    <>
      {parts.map((part: string, i: number) => {
        if (/^[\s.,;:!?]+$/.test(part)) return <span key={i}>{part}</span>;
        
      const normPart = normalize(part);
      
      // 1. Tenta correspondência direta com os tokens (que vêm do Gemini com a palavra em português)
      const directToken = tokens.find(t => {
        const normT = normalize(t.text || t.t || t.surface || '');
        return normT === normPart || (normT.length > 3 && normPart.startsWith(normT.substring(0, 4)));
      });

      if (directToken && directToken.strong) {
        const strongId = Array.isArray(directToken.strong) ? directToken.strong[0] : directToken.strong;
        if (strongId && strongId !== 'H0000' && strongId !== 'G0000' && strongId !== 'H0' && strongId !== 'G0') {
          const isHighlighted = activeStrongId === strongId;
          return (
            <span 
              key={i} 
              onClick={(e) => handleStrongClick(e, strongId)}
              className={`transition-colors cursor-pointer ${isHighlighted ? 'bg-indigo-600 text-white rounded px-1' : 'hover:text-indigo-500 underline decoration-dotted decoration-indigo-300/50'}`}
              title={`Strong: ${strongId}`}
            >
              {part}
            </span>
          );
        }
      }

        // 2. Heurística baseada em definições (fallback)
        if (!STOP_WORDS.has(normPart) && normPart.length > 2) {
          const strongCodes: string[] = [];
          tokens.forEach(t => {
            if (Array.isArray(t.strong)) {
              strongCodes.push(...t.strong);
            } else if (t.strong) {
              strongCodes.push(t.strong);
            }
          });
          const uniqueCodes = Array.from(new Set(strongCodes));
          for (const code of uniqueCodes) {
            const entry = (STRONGS_DATA as any)[code];
            if (entry) {
              const def = normalize(entry.lemma + " " + entry.gloss + " " + (entry.definition || ""));
              if (def.includes(normPart)) {
                const isHighlighted = activeStrongId === code;
                return (
                  <span 
                    key={i} 
                    onClick={(e) => handleStrongClick(e, code)}
                    className={`transition-colors cursor-pointer ${isHighlighted ? 'bg-indigo-600 text-white rounded px-1' : 'hover:text-indigo-500 underline decoration-dotted decoration-indigo-300/50'}`}
                    title={`Strong (Heurística): ${code}`}
                  >
                    {part}
                  </span>
                );
              }
            }
          }
        }

        return <span key={i}>{part}</span>;
      })}
    </>
  );
};

export default HighlightedVerse;
