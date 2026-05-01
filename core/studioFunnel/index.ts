
import { SermonBlockType } from '../../types';

export type FunnelMode = "sermon" | "lesson";

export type StudioBridge = {
  addRefs: (refs: string[], mode?: FunnelMode) => void;
  addBlocks: (blocks: any[], mode?: FunnelMode) => void;
  addText: (payload: { title?: string; text: string; refs?: string[]; type?: SermonBlockType }, mode?: FunnelMode) => void;
};

let bridge: StudioBridge | null = null;

/**
 * Registra a ponte de comando (chamado no App.tsx)
 */
export function registerStudioBridge(b: StudioBridge) {
  bridge = b;
}

/**
 * Adiciona referências (versículos) ao cesto do Estúdio
 */
export function addRefsToStudio(refs: string[], mode?: FunnelMode) {
  if (!bridge) {
    console.warn("[StudioFunnel] Bridge não registrada");
    return;
  }
  bridge.addRefs(refs, mode);
}

/**
 * Adiciona blocos homiléticos prontos ao Estúdio
 */
export function addBlocksToStudio(blocks: any[], mode?: FunnelMode) {
  bridge?.addBlocks(blocks, mode);
}

/**
 * Injeta texto puro no bloco travado (alvo 🎯) do Estúdio
 */
export function addTextToStudio(text: string, title?: string, refs?: string[], type?: SermonBlockType) {
  bridge?.addText({ title, text, refs, type });
}
