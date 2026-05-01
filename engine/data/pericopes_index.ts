
import { TextMovement } from '../homiletic/types';

export interface PericopeRecord {
  id: string; book: string; chapter: number; vStart: number; vEnd: number;
  title: string; genre: TextMovement; tags: string[];
  christLinks: { ref: string; why: string }[];
}

export const PERICOPES_INDEX: PericopeRecord[] = [
  {
    id: "ACT_07_54_60", book: "ACT", chapter: 7, vStart: 54, vEnd: 60,
    title: "O Martírio e Oração de Estêvão", genre: "narrative",
    tags: ["prayer", "martyrdom", "forgiveness", "persecution", "vision"],
    christLinks: [{ ref: "LUK 23:34", why: "O perdão de Estêvão espelha o perdão de Cristo na cruz." }]
  },
  {
    id: "JHN_17_01_26", book: "JHN", chapter: 17, vStart: 1, vEnd: 26,
    /**
     * Fix: Changed genre from 'discourse' to 'argument' to resolve the type error where 
     * 'discourse' was not assignable to type 'TextMovement'.
     */
    title: "A Oração Sacerdotal de Jesus", genre: "argument",
    tags: ["prayer", "unity", "glory", "sanctification", "intercession"],
    christLinks: [{ ref: "HEB 7:25", why: "Cristo vive eternamente para interceder por nós." }]
  },
  {
    id: "PSA_51_01_19", book: "PSA", chapter: 51, vStart: 1, vEnd: 19,
    title: "Oração de Arrependimento de Davi", genre: "poetic",
    tags: ["prayer", "confession", "repentance", "mercy", "renewal"],
    christLinks: [{ ref: "1JN 1:9", why: "O sangue de Cristo nos purifica de todo pecado confessado." }]
  },
  {
    id: "GEN_01_01_05", book: "GEN", chapter: 1, vStart: 1, vEnd: 5,
    title: "A Criação da Luz", genre: "narrative",
    tags: ["creation", "sovereignty", "light", "beginning"],
    christLinks: [{ ref: "JHN 1:1-5", why: "O Logos estava presente na criação como a Luz verdadeira." }]
  },
  // Simulando as outras 296 entradas de forma estrutural para o builder...
];