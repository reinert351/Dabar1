export interface BibleChain {
  id: string;
  topic: string;
  description: string;
  verses: string[];
}

export const BIBLE_CHAINS: BibleChain[] = [
  {
    id: 'justificacao_fe',
    topic: 'Justificação pela Fé',
    description: 'A doutrina de que o homem é declarado justo diante de Deus unicamente pela fé, e não por obras.',
    verses: ['GEN 15:6', 'HAB 2:4', 'ROM 1:17', 'ROM 3:28', 'ROM 4:3', 'ROM 5:1', 'GAL 3:6', 'GAL 3:11', 'EPH 2:8', 'JAM 2:23']
  },
  {
    id: 'palavra_deus',
    topic: 'A Palavra de Deus',
    description: 'O poder, a inspiração e a eternidade das Escrituras Sagradas.',
    verses: ['PSA 119:105', 'ISA 40:8', 'JER 23:29', 'MAT 24:35', 'JHN 17:17', '2TI 3:16', 'HEB 4:12', '1PE 1:23']
  },
  {
    id: 'oracao_intercessoria',
    topic: 'Oração Intercessória',
    description: 'O ato de orar em favor de outras pessoas, intercedendo por suas necessidades.',
    verses: ['GEN 18:23', 'EXO 32:11', '1SA 12:23', 'JOB 42:10', 'JHN 17:9', 'ROM 8:34', 'EPH 6:18', '1TI 2:1', 'JAM 5:16']
  },
  {
    id: 'amor_divino',
    topic: 'O Amor de Deus',
    description: 'A natureza amorosa de Deus e Sua expressão máxima na cruz.',
    verses: ['DEU 7:8', 'JER 31:3', 'ZEC 2:8', 'JHN 3:16', 'ROM 5:8', 'ROM 8:38', 'EPH 2:4', '1JN 4:8']
  },
  {
    id: 'sangue_cristo',
    topic: 'O Sangue de Cristo',
    description: 'O poder redentor, purificador e reconciliador do sacrifício de Jesus.',
    verses: ['EXO 12:13', 'LEV 17:11', 'MAT 26:28', 'ROM 5:9', 'EPH 1:7', 'HEB 9:22', '1PE 1:18', '1JN 1:7', 'REV 12:11']
  },
  {
    id: 'graca_deus',
    topic: 'A Graça de Deus',
    description: 'O favor imerecido de Deus concedido à humanidade.',
    verses: ['GEN 6:8', 'EXO 33:19', 'JHN 1:14', 'ACT 15:11', 'ROM 3:24', 'ROM 11:6', '2CO 12:9', 'EPH 2:8', 'TIT 2:11']
  },
  {
    id: 'espirito_santo_consolador',
    topic: 'O Espírito Santo como Consolador',
    description: 'O papel do Espírito Santo em guiar, consolar e ensinar os crentes.',
    verses: ['JHN 14:16', 'JHN 14:26', 'JHN 15:26', 'JHN 16:7', 'JHN 16:13', 'ACT 9:31', 'ROM 8:26']
  },
  {
    id: 'volta_cristo',
    topic: 'A Segunda Volta de Cristo',
    description: 'A promessa e a esperança do retorno glorioso de Jesus.',
    verses: ['MAT 24:30', 'MAT 25:31', 'JHN 14:3', 'ACT 1:11', '1TH 4:16', 'HEB 9:28', 'REV 1:7', 'REV 22:20']
  },
  {
    id: 'temor_do_senhor',
    topic: 'O Temor do Senhor',
    description: 'A reverência profunda e o respeito devidos a Deus, que são o princípio da verdadeira sabedoria.',
    verses: ['DEU 10:12', 'JOB 28:28', 'PSA 25:14', 'PSA 34:11', 'PSA 111:10', 'PRO 1:7', 'PRO 9:10', 'ECC 12:13', 'ACT 9:31', '2CO 7:1']
  },
  {
    id: 'santificacao',
    topic: 'A Santificação do Crente',
    description: 'O chamado e o processo contínuo de separação do pecado para viver uma vida santa dedicada a Deus.',
    verses: ['LEV 20:7', 'ROM 6:22', 'ROM 12:1', '2CO 7:1', 'EPH 4:24', '1TH 4:3', '1TH 5:23', 'HEB 12:14', '1PE 1:15', '1JN 3:3']
  },
  {
    id: 'soberania_deus',
    topic: 'A Soberania de Deus',
    description: 'O governo absoluto e indeclinável de Deus sobre toda a criação, história e salvação.',
    verses: ['1CH 29:11', 'JOB 42:2', 'PSA 103:19', 'PSA 135:6', 'PRO 21:1', 'ISA 46:10', 'DAN 4:35', 'ROM 8:28', 'ROM 9:15', 'EPH 1:11']
  },
  {
    id: 'paternidade_deus',
    topic: 'A Paternidade de Deus',
    description: 'O relacionamento íntimo de adoção onde o Criador se torna nosso Pai (Abba).',
    verses: ['PSA 103:13', 'ISA 63:16', 'MAT 6:9', 'JHN 1:12', 'ROM 8:15', '2CO 6:18', 'GAL 4:6', 'EPH 1:5', '1JN 3:1']
  },
  {
    id: 'combate_espiritual',
    topic: 'O Combate Espiritual',
    description: 'A realidade da guerra contra as trevas e a provisão da armadura de Deus para a vitória.',
    verses: ['2CO 10:4', 'EPH 6:11', 'EPH 6:12', '1TI 6:12', 'JAM 4:7', '1PE 5:8', '1JN 4:4', 'REV 12:11']
  },
  {
    id: 'perdao_reconciliacao',
    topic: 'Perdão e Reconciliação',
    description: 'A ordem para perdoarmos uns aos outros com a mesma graça com que fomos perdoados por Cristo.',
    verses: ['MAT 6:14', 'MAT 18:21', 'MRK 11:25', 'LUK 17:3', 'EPH 4:32', 'COL 3:13', 'PHM 1:17', 'JAM 2:13']
  },
  {
    id: 'confianca_aflicoes',
    topic: 'Confiança nas Aflições',
    description: 'O consolo, a paz e o propósito que Deus provê no meio do sofrimento e das provações.',
    verses: ['PSA 34:19', 'PSA 46:1', 'JHN 16:33', 'ROM 5:3', 'ROM 8:18', '2CO 1:4', '2CO 4:17', 'JAM 1:2', '1PE 4:12']
  },
  {
    id: 'fruto_do_espirito',
    topic: 'O Fruto do Espírito',
    description: 'O caráter de Cristo sendo formado no crente vivificado pelo Espírito Santo.',
    verses: ['MAT 7:16', 'JHN 15:5', 'ROM 8:9', 'GAL 5:22', 'GAL 5:23', 'EPH 5:9', 'PHP 1:11', 'COL 3:12', '2PE 1:5']
  },
  {
    id: 'poder_do_jejum',
    topic: 'O Poder do Jejum',
    description: 'A disciplina espiritual de abstenção em busca de maior intimidade e do poder de Deus.',
    verses: ['EZR 8:21', 'NEH 1:4', 'EST 4:16', 'ISA 58:6', 'JOL 2:12', 'MAT 6:16', 'MAT 17:21', 'ACT 13:2']
  },
  {
    id: 'esperanca_ressurreicao',
    topic: 'A Esperança da Ressurreição',
    description: 'A fundação da nossa fé e a garantia da nossa vitória sobre a morte em Cristo.',
    verses: ['JOB 19:25', 'PSA 16:10', 'DAN 12:2', 'JHN 5:28', 'JHN 11:25', 'ROM 6:5', '1CO 15:20', '1TH 4:14', 'REV 20:6']
  },
  {
    id: 'generosidade_mordomia',
    topic: 'Generosidade e Mordomia',
    description: 'O uso fiel dos recursos e a bênção espiritual de ser um doador alegre.',
    verses: ['PRO 3:9', 'PRO 11:24', 'MAL 3:10', 'MAT 6:19', 'LUK 6:38', 'ACT 20:35', '2CO 9:7', '1TI 6:17', 'HEB 13:16']
  },
  {
    id: 'adoracao_verdadeira',
    topic: 'A Verdadeira Adoração',
    description: 'O louvor em espírito e em verdade que agrada o coração do Senhor.',
    verses: ['1CH 16:29', 'PSA 29:2', 'PSA 95:6', 'ISA 29:13', 'JHN 4:23', 'JHN 4:24', 'ROM 12:1', 'HEB 13:15']
  },
  {
    id: 'poder_das_palavras',
    topic: 'O Poder das Palavras',
    description: 'A influência da nossa língua para dar a vida e a urgência do domínio próprio.',
    verses: ['PRO 12:18', 'PRO 15:1', 'PRO 18:21', 'MAT 12:36', 'EPH 4:29', 'COL 4:6', 'JAM 3:5', 'JAM 3:9', '1PE 3:10']
  },
  {
    id: 'obediencia_deus',
    topic: 'A Obediência a Deus',
    description: 'A prova tangível do nosso amor a Cristo e o segredo para uma vida frutífera.',
    verses: ['1SA 15:22', 'JHN 14:15', 'JHN 14:21', 'ACT 5:29', 'ROM 5:19', 'HEB 5:8', 'HEB 5:9', '1JN 2:3', '1JN 5:3']
  },
  {
    id: 'paz_de_deus',
    topic: 'A Paz de Deus',
    description: 'A tranquilidade sobrenatural que guarda a mente e o coração no meio do caos.',
    verses: ['NUM 6:26', 'PSA 29:11', 'PSA 119:165', 'ISA 26:3', 'JHN 14:27', 'JHN 16:33', 'PHP 4:7', 'COL 3:15']
  },
  {
    id: 'providencia_divina',
    topic: 'A Providência Divina',
    description: 'A mão invisível de Deus orquestrando todas as circunstâncias para realizar os Seus propósitos.',
    verses: ['GEN 50:20', 'RUT 2:3', 'EST 4:14', 'PRO 16:9', 'PRO 19:21', 'ROM 8:28', 'EPH 1:11', 'PHP 1:12']
  },
  {
    id: 'nova_alianca',
    topic: 'A Nova Aliança',
    description: 'O pacto superior estabelecido no sangue de Jesus, que escreve a lei no coração do crente.',
    verses: ['JER 31:31', 'JER 31:33', 'EZE 36:26', 'MAT 26:28', 'LUK 22:20', '1CO 11:25', '2CO 3:6', 'HEB 8:6', 'HEB 9:15']
  },
  {
    id: 'casamento_familia',
    topic: 'O Casamento e a Família',
    description: 'O projeto original de Deus para a aliança conjugal e a instrução familiar.',
    verses: ['GEN 2:24', 'MAL 2:15', 'MAT 19:5', 'MAT 19:6', 'EPH 5:25', 'EPH 5:31', 'EPH 6:1', 'EPH 6:4', 'HEB 13:4']
  },
  {
    id: 'presenca_de_deus',
    topic: 'A Presença de Deus',
    description: 'A promessa contínua do próprio Deus habitando com Seu povo e os acompanhando.',
    verses: ['EXO 33:14', 'JOS 1:9', 'PSA 16:11', 'PSA 139:7', 'ISA 43:2', 'MAT 28:20', 'HEB 13:5', 'REV 21:3']
  },
  {
    id: 'novo_nascimento',
    topic: 'O Novo Nascimento',
    description: 'O milagre da regeneração espiritual, onde o homem morto no pecado é vivificado em Cristo.',
    verses: ['EZE 36:26', 'JHN 1:13', 'JHN 3:3', 'JHN 3:5', 'JHN 3:7', '2CO 5:17', 'TIT 3:5', '1PE 1:3', '1PE 1:23']
  },
  {
    id: 'julgamento_final',
    topic: 'O Julgamento Final',
    description: 'A prestação de contas definitiva diante de Deus, que julgará vivos e mortos com justiça.',
    verses: ['ECC 12:14', 'MAT 25:31', 'MAT 25:32', 'JHN 5:22', 'ACT 17:31', 'ROM 14:10', '2CO 5:10', 'REV 20:11', 'REV 20:12']
  },
  {
    id: 'humildade_crista',
    topic: 'A Humildade Cristã',
    description: 'A atitude de despojamento e submissão que atrai a graça de Deus e reflete Cristo.',
    verses: ['2CH 7:14', 'PRO 22:4', 'ISA 57:15', 'MIC 6:8', 'MAT 23:12', 'PHP 2:3', 'PHP 2:5', 'PHP 2:8', 'JAM 4:6', '1PE 5:5']
  },
  {
    id: 'alegria_no_senhor',
    topic: 'A Alegria no Senhor',
    description: 'Um regozijo espiritual profundo que transcende e independe das circunstâncias temporais.',
    verses: ['NEH 8:10', 'PSA 16:11', 'PSA 37:4', 'HAB 3:18', 'JHN 15:11', 'ROM 14:17', 'ROM 15:13', 'PHP 4:4', '1PE 1:8']
  },
  {
    id: 'arrependimento',
    topic: 'O Chamado ao Arrependimento',
    description: 'O retorno a Deus e o abandono do pecado, essenciais para a salvação e restauração.',
    verses: ['2CH 7:14', 'PSA 51:17', 'ISA 55:7', 'EZE 18:30', 'MAT 3:2', 'MAT 4:17', 'LUK 13:3', 'ACT 2:38', 'ACT 3:19', '1JN 1:9']
  },
  {
    id: 'gloria_de_deus',
    topic: 'A Glória de Deus',
    description: 'A manifestação gloriosa da essência, perfeição e grandeza do Senhor a toda a criação.',
    verses: ['EXO 33:18', 'PSA 19:1', 'ISA 6:3', 'ISA 42:8', 'HAB 2:14', 'JHN 1:14', 'ROM 11:36', '1CO 10:31', 'REV 4:11', 'REV 21:23']
  },
  {
    id: 'missoes_evangelismo',
    topic: 'Missões e Evangelismo',
    description: 'O envio da Igreja para proclamar as boas novas da salvação até os confins da terra.',
    verses: ['PSA 96:3', 'ISA 6:8', 'MAT 9:37', 'MAT 28:19', 'MRK 16:15', 'ACT 1:8', 'ROM 10:14', 'ROM 10:15', '2CO 5:20']
  },
  {
    id: 'ira_de_deus',
    topic: 'A Ira de Deus',
    description: 'A justa e santa reação de Deus contra o mal, a injustiça e o pecado impenitente.',
    verses: ['EXO 34:7', 'DEU 32:35', 'PSA 7:11', 'NAH 1:2', 'JHN 3:36', 'ROM 1:18', 'ROM 2:5', 'ROM 12:19', 'EPH 5:6', 'REV 6:17']
  },
  {
    id: 'vida_eterna',
    topic: 'A Vida Eterna',
    description: 'A promessa de vida abundante e infindável na presença de Deus para os que creem.',
    verses: ['DAN 12:2', 'MAT 25:46', 'JHN 3:15', 'JHN 3:16', 'JHN 10:28', 'JHN 17:3', 'ROM 6:23', '1JN 2:25', '1JN 5:11', '1JN 5:12']
  },
  {
    id: 'justica_divina',
    topic: 'A Justiça de Deus',
    description: 'O caráter incorruptível de Deus, sempre agindo com retidão, e a equidade do Seu governo.',
    verses: ['DEU 32:4', 'PSA 89:14', 'ISA 30:18', 'ISA 61:8', 'JER 9:24', 'MAT 6:33', 'ROM 3:25', 'ROM 3:26', '2TI 4:8', 'REV 15:3']
  },
  {
    id: 'protecao_divina',
    topic: 'A Proteção Divina',
    description: 'A segurança, o cuidado providencial e a fortaleza concedidos ao crente no meio do perigo.',
    verses: ['PSA 27:1', 'PSA 46:1', 'PSA 91:1', 'PSA 91:2', 'PSA 121:7', 'PRO 18:10', 'ISA 41:10', '2TH 3:3', '1PE 1:5']
  },
  {
    id: 'cuidado_pobres',
    topic: 'Cuidado com os Pobres',
    description: 'O coração de Deus voltado aos vulneráveis, marginais, e o Seu chamado à Igreja para compaixão.',
    verses: ['LEV 19:9', 'PRO 14:31', 'PRO 19:17', 'PRO 21:13', 'ISA 1:17', 'ISA 58:7', 'MAT 25:40', 'LUK 14:13', 'JAM 1:27', '1JN 3:17']
  }
];
