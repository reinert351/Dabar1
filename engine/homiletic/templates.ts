
import { HomileticStyle, OutlinePoint } from './types';

/**
 * Fix: Added missing 'prayer_seminary' property to STYLE_LABELS to satisfy Record<HomileticStyle, string>
 */
export const STYLE_LABELS: Record<HomileticStyle, string> = {
  expository: 'Exposição Analítica',
  christocentric: 'Foco na Glória de Cristo',
  pastoral: 'Cuidado e Consolo',
  prophetic: 'Chamado ao Arrependimento',
  didactic: 'Ensino Doutrinário',
  intercessory: 'Clamor e Dependência',
  discipleship: 'Custo do Seguimento',
  evangelistic: 'Convite à Salvação',
  prayer_seminary: 'Seminário de Oração'
};

/**
 * Fix: Added missing 'prayer_seminary' property to STYLE_TEMPLATES to satisfy Record<HomileticStyle, template>
 */
export const STYLE_TEMPLATES: Record<HomileticStyle, {
  bigIdea: string;
  points: (tags: string[]) => OutlinePoint[];
}> = {
  expository: {
    bigIdea: 'A verdade imutável de Deus revelada no fluxo do texto.',
    points: () => [
      { title: 'O Contexto da Revelação', explanation: 'Análise do ambiente original e intenção do autor.' },
      { title: 'O Núcleo da Mensagem', explanation: 'A exegese gramatical e histórica do ponto central.' },
      { title: 'A Relevância Eterna', explanation: 'Como a verdade do texto cruza o tempo até nós.' }
    ]
  },
  christocentric: {
    bigIdea: 'Como este trecho aponta para a suficiência e obra de Jesus.',
    points: () => [
      { title: 'A Sombra no Texto', explanation: 'Elementos que prefiguram a necessidade de um Redentor.' },
      { title: 'A Realidade em Cristo', explanation: 'Como Jesus cumpre ou amplia esta verdade.' },
      { title: 'O Descanso na Graça', explanation: 'Nossa resposta baseada no que Ele já realizou.' }
    ]
  },
  evangelistic: {
    bigIdea: 'O chamado urgente para o arrependimento e fé no Salvador.',
    points: () => [
      { title: 'A Condição Humana', explanation: 'Nossa necessidade desesperada revelada no texto.' },
      { title: 'A Provisão Divina', explanation: 'O amor de Deus manifesto em Cristo.' },
      { title: 'A Decisão de Fé', explanation: 'O chamado para uma resposta imediata.' }
    ]
  },
  pastoral: {
    bigIdea: 'O consolo e a direção do Bom Pastor para a vida diária.',
    points: () => [
      { title: 'Deus Vê a Nossa Dor', explanation: 'Identificação divina com o sofrimento humano.' },
      { title: 'A Promessa que Sustenta', explanation: 'Ancorando a alma nas garantias da Palavra.' },
      { title: 'O Próximo Passo', explanation: 'Direções práticas para caminhar em paz.' }
    ]
  },
  prophetic: {
    bigIdea: 'Um alerta sobre a santidade de Deus e a urgência de retorno.',
    points: () => [
      { title: 'O Desvio Detectado', explanation: 'Onde o coração humano se afastou do padrão.' },
      { title: 'O Risco da Indiferença', explanation: 'As consequências de ignorar a voz de Deus.' },
      { title: 'O Caminho do Retorno', explanation: 'Arrependimento e restauração da Aliança.' }
    ]
  },
  didactic: {
    bigIdea: 'A instrução sistemática sobre os fundamentos da nossa fé.',
    points: () => [
      { title: 'O Fundamento Bíblico', explanation: 'As bases textuais para esta doutrina.' },
      { title: 'A Definição Correta', explanation: 'Evitando distorções e heresias comuns.' },
      { title: 'A Prática da Verdade', explanation: 'Como a sã doutrina informa a conduta.' }
    ]
  },
  intercessory: {
    bigIdea: 'A oração como motor da história e canal de milagres.',
    points: () => [
      { title: 'O Clamor do Necessitado', explanation: 'A postura de humildade diante do Trono.' },
      { title: 'A Fidelidade que Ouve', explanation: 'O caráter de Deus como resposta ao clamor.' },
      { title: 'A Atitude de Espera', explanation: 'Permanecendo firme até o cumprimento da promessa.' }
    ]
  },
  discipleship: {
    bigIdea: 'O caminho da cruz e o processo de transformação à imagem de Cristo.',
    points: () => [
      { title: 'O Chamado ao Abandono', explanation: 'Negar a si mesmo para ganhar o Reino.' },
      { title: 'A Disciplina do Seguimento', explanation: 'O custo e a alegria de obedecer ao Mestre.' },
      { title: 'O Fruto da Obediência', explanation: 'Crescimento espiritual e maturidade em Cristo.' }
    ]
  },
  prayer_seminary: {
    bigIdea: 'A anatomia do clamor e a resposta do Trono.',
    points: () => [
      { title: 'O Contexto do Clamor', explanation: 'A situação que gerou a necessidade da oração.' },
      { title: 'A Base da Petição', explanation: 'Os argumentos teológicos usados pelo intercessor.' },
      { title: 'O Resultado da Fé', explanation: 'A manifestação da resposta divina.' }
    ]
  }
};
