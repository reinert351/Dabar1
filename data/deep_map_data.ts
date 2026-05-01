import { DeepMapEvent } from '../types';

export const DEEP_MAP_DATA: DeepMapEvent[] = [
  // 1. LINHA DO TRONO
  {
    id: 'throne_1', line: 'throne', event: 'Éden: Teocracia Original', baseText: 'Gênesis 2:8-15',
    theme: 'Deus como Rei Criador',
    theology: 'No Éden, o trono de Deus era estabelecido sem resistência. O homem governava como um vice-regente sob a autoridade direta de Yahweh. O governo era baseado na harmonia da criação e na soberania absoluta do Criador.',
    application: 'Deus sempre governou e continuará governando. Sua soberania não depende do nosso reconhecimento.',
    connections: ['kingdom_1', 'presence_1'],
    chronology: 'Criação'
  },
  {
    id: 'throne_4', line: 'throne', event: 'Apocalipse 4: A Consumação', baseText: 'Apocalipse 4:1-11',
    theme: 'O Governo Final',
    theology: 'O clímax da metanarrativa. O trono não está mais oculto, mas é o centro gravitacional de toda a adoração cósmica. O Cordeiro assume o centro do governo eterno.',
    application: 'O fim da história é a submissão total ao Rei.',
    connections: ['kingdom_5', 'presence_4'],
    chronology: 'Eternidade'
  },

  // 2. LINHA DO SANGUE
  {
    id: 'blood_1', line: 'blood', event: 'Abel: O Primeiro Sacrifício', baseText: 'Gênesis 4:10',
    theme: 'Justiça e Expiação',
    theology: 'O sangue de Abel clama da terra por justiça, estabelecendo que o pecado exige um pagamento de vida. Aponta para a necessidade de um sangue superior.',
    application: 'Deus ouve o clamor dos oprimidos e a terra não oculta o sangue dos justos.',
    connections: ['tree_1'],
    chronology: 'Antediluviano'
  },
  {
    id: 'blood_3', line: 'blood', event: 'Calvário: O Sangue do Pacto', baseText: 'João 19:34',
    theme: 'Purificação Definitiva',
    theology: 'A fusão da Linha do Sangue com a Água. O sangue de Cristo limpa a consciência e cancela a dívida eterna.',
    application: 'Nada além do sangue de Jesus pode nos purificar totalmente.',
    connections: ['tree_4', 'water_4'],
    chronology: 'Evangelhos'
  },

  // 3. LINHA DA ÁGUA
  {
    id: 'water_1', line: 'water', event: 'Espírito sobre as Águas', baseText: 'Gênesis 1:2',
    theme: 'Ordem no Caos',
    theology: 'As águas representam o potencial de vida e o caos ordenado pela Palavra. O Espírito Santo traz a estrutura vital original.',
    application: 'O Espírito de Deus traz ordem onde há caos na alma humana.',
    connections: ['presence_1'],
    chronology: 'Criação'
  },
  {
    id: 'water_4', line: 'water', event: 'O Rio da Vida', baseText: 'Apocalipse 22:1',
    theme: 'Eternidade Fluida',
    theology: 'Um rio que flui do trono de Deus, comunicando vida contínua aos remidos sem interrupção.',
    application: 'Nossa sede espiritual será plenamente saciada na fonte da eternidade.',
    connections: ['throne_4', 'presence_4'],
    chronology: 'Eternidade'
  },

  // 4. LINHA DO FOGO
  {
    id: 'fire_1', line: 'fire', event: 'A Sarça Ardente', baseText: 'Êxodo 3:1-6',
    theme: 'Santidade Consumidora',
    theology: 'O fogo que não consome revela a autossuficiência divina. O ambiente é santificado pela chama que exige reverência.',
    application: 'Deus nos chama no meio do fogo, exigindo temor antes da missão.',
    connections: ['presence_2'],
    chronology: 'Êxodo'
  },
  {
    id: 'fire_3', line: 'fire', event: 'Pentecostes', baseText: 'Atos 2:1-4',
    theme: 'Fogo no Homem',
    theology: 'O fogo do Sinai agora repousa sobre indivíduos. A Igreja torna-se o novo santuário onde o fogo purifica o testemunho.',
    application: 'O fogo do Espírito é para incandescer o testemunho cristão.',
    connections: ['presence_3'],
    chronology: 'Igreja'
  },

  // 5. LINHA DA ÁRVORE
  {
    id: 'tree_1', line: 'tree', event: 'Árvore da Vida (Éden)', baseText: 'Gênesis 2:9',
    theme: 'Provisão de Imortalidade',
    theology: 'Representa a comunhão contínua com o Criador. A queda interrompeu o acesso à vida biológica eterna.',
    application: 'Nossas escolhas definem de qual fruto nos alimentamos.',
    connections: ['throne_1'],
    chronology: 'Éden'
  },
  {
    id: 'tree_4', line: 'tree', event: 'O Madeiro da Cruz', baseText: 'Gálatas 3:13',
    theme: 'Redenção na Árvore',
    theology: 'Cristo se fez maldição no madeiro para reverter a maldição da árvore do Éden. A cruz é a árvore da vida restaurada.',
    application: 'Suas dores foram pregadas no madeiro para nos dar vida.',
    connections: ['blood_3'],
    chronology: 'Calvário'
  },

  // 6. LINHA DO REINO
  {
    id: 'kingdom_2', line: 'kingdom', event: 'Aliança Davídica', baseText: '2 Samuel 7:12',
    theme: 'Governo Eterno',
    theology: 'Deus estabelece uma dinastia messiânica. O trono de Davi é o protótipo político do reinado milenar de Jesus.',
    application: 'Nossa segurança está no Rei que governa o universo.',
    connections: ['throne_3'],
    chronology: 'Monarquia'
  },

  // 7. LINHA DA PRESENÇA
  {
    id: 'presence_2', line: 'presence', event: 'Shekinah no Tabernáculo', baseText: 'Êxodo 40:34',
    theme: 'Habitação Habitual',
    theology: 'Deus aceita morar entre pecadores através de um modelo exato de santidade.',
    application: 'Deus deseja habitar conosco mesmo em solos de deserto.',
    connections: ['fire_1', 'throne_2'],
    chronology: 'Êxodo'
  },
  {
    id: 'presence_4', line: 'presence', event: 'A Nova Jerusalém', baseText: 'Apocalipse 21:3',
    theme: 'Tabernáculo Eterno',
    theology: 'O fim da história: a presença de Deus é total e imediata, sem necessidade de templos ou véus.',
    application: 'Nossa jornada termina no abraço eterno da Presença Divina.',
    connections: ['throne_4', 'water_4'],
    chronology: 'Estado Eterno'
  }
];