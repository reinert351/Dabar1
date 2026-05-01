
/**
 * Normaliza o texto hebraico removendo niqqud (vogais), acentos e caracteres especiais.
 * Também lida com o maqaf (־) convertendo-o em espaço para facilitar a tokenização se necessário,
 * ou removendo-o para comparação de strings.
 */
export const normalizeHebrew = (text: string): string => {
  if (!text) return '';
  
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove Niqqud e acentos (combining marks)
    .replace(/־/g, '') // Remove Maqaf para comparação de palavras
    .replace(/[^\u05D0-\u05EA]/g, '') // Mantém apenas letras hebraicas (removendo espaços, pontuação, etc)
    .trim();
};

/**
 * Tokeniza um texto hebraico respeitando o Maqaf e espaços como delimitadores,
 * mas mantendo-os para que a reconstrução do texto original seja possível.
 */
export const tokenizeHebrew = (text: string): string[] => {
  if (!text) return [];
  // Divide mantendo os delimitadores (espaços e maqaf)
  return text.split(/([\s־]+)/).filter(p => p.length > 0);
};

/**
 * Verifica se um token é uma palavra hebraica (contém letras hebraicas)
 */
export const isHebrewWord = (text: string): boolean => {
  return /[\u05D0-\u05EA]/.test(text);
};
