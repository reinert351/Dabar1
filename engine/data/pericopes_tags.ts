import { PericopeBias } from '../homiletic/types';

/**
 * Fix: Changed array type from PericopeData[] to PericopeBias[] to match the actual data structure.
 * This resolves multiple 'Object literal may only specify known properties' errors.
 */
export const PERICOPES_TAGS: PericopeBias[] = [
  { ref: 'ACT 7:59-60', tags: ['estevao', 'martirio', 'perdao', 'visao'], bias: ['intercessory', 'christocentric', 'evangelistic'] },
  { ref: 'GEN 1:1', tags: ['criacao', 'inicio', 'soberania'], bias: ['didactic', 'expository'] },
  { ref: 'PSA 23:1', tags: ['pastor', 'cuidado', 'consolo'], bias: ['pastoral'] },
  { ref: 'JHN 3:16', tags: ['amor', 'salvacao', 'mundo'], bias: ['evangelistic', 'christocentric'] },
  { ref: 'ROM 8:1', tags: ['condenacao', 'espirito', 'vida'], bias: ['didactic', 'expository', 'pastoral'] },
  { ref: 'MAT 5:3-12', tags: ['bem-aventurancas', 'reino', 'carater'], bias: ['discipleship', 'didactic'] },
  { ref: 'ISA 53:5', tags: ['sofrimento', 'cura', 'substituicao'], bias: ['christocentric', 'evangelistic'] },
  { ref: 'EPH 2:8', tags: ['graca', 'fe', 'salvacao'], bias: ['didactic', 'evangelistic'] },
  { ref: 'PSA 51:1', tags: ['pecado', 'misericordia', 'arrependimento'], bias: ['prophetic', 'pastoral'] },
  { ref: 'REV 21:1', tags: ['novo ceu', 'eternidade', 'vitoria'], bias: ['prophetic', 'christocentric'] },
  { ref: 'JOS 1:9', tags: ['coragem', 'presenca', 'forca'], bias: ['pastoral', 'discipleship'] },
  { ref: '1CO 13:1', tags: ['amor', 'dons', 'supremacia'], bias: ['discipleship', 'didactic'] },
  { ref: 'PHI 4:13', tags: ['forca', 'cristo', 'tudo'], bias: ['pastoral'] },
  { ref: 'HEB 11:1', tags: ['fe', 'certeza', 'historia'], bias: ['didactic', 'expository'] },
  { ref: 'ACT 1:8', tags: ['poder', 'espirito', 'testemunho'], bias: ['evangelistic', 'prophetic'] },
  { ref: 'GAL 5:22', tags: ['fruto', 'espirito', 'carater'], bias: ['discipleship', 'didactic'] },
  { ref: '1JN 1:9', tags: ['confissao', 'fidelidade', 'justica'], bias: ['pastoral', 'didactic'] },
  { ref: 'ROM 12:1', tags: ['sacrificio', 'culto', 'mente'], bias: ['discipleship', 'didactic'] },
  { ref: 'MAT 28:19', tags: ['ide', 'nacoes', 'batismo'], bias: ['evangelistic', 'discipleship'] },
  { ref: 'PSA 119:105', tags: ['lampada', 'caminho', 'palavra'], bias: ['didactic', 'pastoral'] }
];
