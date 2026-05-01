# Concordância Suprema Dabar (Titan Engine)

Este sistema provê uma busca exaustiva offline e ultrarrápida.

## Como funciona
1. **Build Time**: No build, o script `tools/build-concordance.mjs` lê o arquivo `public/bible/acf.json`.
2. **Sharding**: Gera fragmentos de índices em `public/index/`.
3. **Runtime**: O app carrega apenas os fragmentos necessários baseados no prefixo das palavras digitadas.

## Comandos
- `npm run concordance:build`: Gera os índices manualmente.
- `npm run build`: Gera os índices e compila o app.

## Uso no Código
```typescript
import { getRefsByWord, suggestWords } from './core/concordance';

const refs = await getRefsByWord('graça'); // ["EPH 2:8", ...]
const sugestoes = await suggestWords('gr'); // ["graca", "grande", ...]
```

## Requisitos de Dados
A Bíblia deve estar em `public/bible/acf.json`.
Texto bíblico: Almeida Corrigida Fiel (ACF) – uso gratuito para divulgação das Escrituras.
