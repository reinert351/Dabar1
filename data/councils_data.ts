export interface CouncilEvent {
  id: string;
  title: string;
  period: string;
  scripture?: string;
  heresy?: string;
  response?: string;
  context?: string;
  decision?: string;
  throneRevelation?: string;
  warning?: string;
  color: string;
  icon?: string;
  imageUrl?: string;
}

export interface CouncilCategory {
  id: string;
  title: string;
  events: CouncilEvent[];
}

export const councilsData: CouncilCategory[] = [
  {
    id: "early-church",
    title: "1. JERUSALÉM — O DNA DA IGREJA",
    events: [
      {
        id: "jerusalem",
        title: "CONCÍLIO DE JERUSALÉM",
        period: "c. 50 d.C.",
        scripture: "Atos 15:11",
        context: "O Concílio de Jerusalém é considerado o primeiro concílio oficial da Igreja cristã, registrado detalhadamente em Atos 15. Ele surgiu de uma controvérsia fundamental: os gentios que se convertiam a Cristo precisavam ser circuncidados e guardar toda a Lei de Moisés para serem salvos? Essa questão ameaçava dividir a Igreja nascente entre os cristãos judeus, que mantinham as tradições mosaicas, e os gentios convertidos pela pregação de Paulo e Barnabé. A assembleia reuniu os apóstolos e anciãos em Jerusalém. Pedro tomou a palavra e relembrou como Deus havia concedido o Espírito Santo aos gentios na casa de Cornélio (Atos 10), sem exigir a circuncisão. Paulo e Barnabé relataram os sinais e maravilhas que Deus operara entre os gentios durante suas viagens missionárias. Tiago, irmão do Senhor e líder da igreja de Jerusalém, pronunciou o veredito final, citando os profetas do Antigo Testamento (Amós 9:11-12) para fundamentar a decisão. A decisão foi histórica e libertadora: os gentios não precisavam se submeter à circuncisão nem à totalidade da Lei mosaica. Deveriam apenas abster-se de coisas sacrificadas a ídolos, de sangue, de carne sufocada e de imoralidade sexual. Essa resolução foi enviada por carta às igrejas gentílicas, acompanhada por Judas Barsabás e Silas como emissários oficiais. Este concílio estabeleceu um princípio teológico crucial: a salvação é pela graça mediante a fé, não pelas obras da Lei. Ele também demonstrou o modelo de governo eclesiástico baseado em deliberação coletiva, oração e busca pela orientação do Espírito Santo. A frase 'pareceu bem ao Espírito Santo e a nós' (Atos 15:28) tornou-se paradigmática para a tomada de decisões na Igreja.",
        decision: "• Questão central: os gentios precisam guardar a Lei de Moisés?\n• Pedro testemunhou a conversão de Cornélio sem circuncisão\n• Paulo e Barnabé relataram sinais entre os gentios\n• Tiago citou Amós 9:11-12 como base profética\n• Decisão: não impor a Lei, apenas 4 restrições práticas\n• Carta enviada às igrejas gentílicas com Judas e Silas\n• Princípio firmado: salvação pela graça, não pelas obras da Lei",
        throneRevelation: "Aqui nasce a Igreja universal. Deus separa o Sistema (Lei) da Essência (Graça).",
        color: "amber",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Council_of_Jerusalem.jpg/800px-Council_of_Jerusalem.jpg"
      }
    ]
  },
  {
    id: "spiritual-warfare",
    title: "2. OS CONCÍLIOS COMO GUERRA ESPIRITUAL",
    events: [
      {
        id: "warfare",
        title: "BATALHA PELA VERDADE",
        period: "História da Igreja",
        scripture: "Colossenses 2:8",
        context: "Ao longo dos séculos, a Igreja enfrentou ataques sistemáticos contra o núcleo central do Evangelho. Cada concílio não foi apenas uma reunião administrativa ou um debate intelectual, mas uma frente de guerra espiritual onde a identidade de Jesus Cristo e a natureza de Deus estavam em jogo. O inimigo da verdade sempre utilizou sutilezas filosóficas e distorções teológicas para tentar esvaziar o poder da cruz e a divindade do Salvador. Defender a ortodoxia (a crença correta) era, e continua sendo, um ato de preservação da própria vida espiritual da Igreja. Sem uma definição clara de quem é Cristo e como somos salvos, a Igreja se torna apenas um clube social ou uma escola de filosofia, perdendo sua autoridade celestial e seu fogo transformador.",
        decision: "• O inferno ataca primeiro a identidade de Cristo\n• A teologia correta protege a experiência espiritual\n• Concílios como marcos de resistência contra o erro\n• A importância de 'batalhar pela fé que uma vez foi dada aos santos'\n• O discernimento espiritual como ferramenta de governo eclesiástico",
        throneRevelation: "O inferno ataca primeiro a identidade de Cristo, antes de atacar a moralidade ou a liturgia da Igreja.",
        color: "red"
      }
    ]
  },
  {
    id: "christology-trinity",
    title: "3. A FUNDAÇÃO CRISTOLÓGICA E TRINITÁRIA",
    events: [
      {
        id: "nicea",
        title: "NICEIA — A DIVINDADE DE CRISTO",
        period: "325 d.C.",
        scripture: "João 1:1, Colossenses 2:9",
        context: "O Primeiro Concílio de Niceia foi convocado para resolver a crise provocada pelo arianismo. Ário ensinava que o Filho de Deus era uma criatura, superior aos anjos, mas não eterno nem da mesma substância que o Pai. Isso negava a divindade plena de Cristo e a eficácia da salvação. Cerca de 318 bispos se reuniram, muitos trazendo as marcas da perseguição em seus corpos. Atanásio foi o grande defensor da ortodoxia. O concílio declarou que o Filho é 'homoousios' (da mesma substância) que o Pai. Foi redigido o Credo de Niceia, estabelecendo que Jesus é 'Deus de Deus, Luz da Luz, Deus verdadeiro de Deus verdadeiro, gerado, não criado'. A vitória da ortodoxia garantiu que a Igreja continuasse a adorar a Cristo como o Deus encarnado, o único capaz de reconciliar a humanidade com o Criador.",
        heresy: "Arianismo (Jesus = criatura, houve um tempo em que o Filho não existia)",
        response: "Jesus é Deus eterno, consubstancial (homoousios) com o Pai.",
        decision: "• Questão central: Jesus é Deus ou uma criatura?\n• Ário defendia que o Filho teve um início\n• Atanásio liderou a defesa da divindade plena\n• Termo chave: Homoousios (mesma substância)\n• Credo de Niceia: 'Deus verdadeiro de Deus verdadeiro'\n• Condenação do Arianismo como heresia destrutiva\n• Princípio firmado: Se Cristo não é Deus, não pode salvar",
        throneRevelation: "O inferno ataca primeiro a identidade de Cristo. Se Ele não é Deus, Seu sacrifício não tem valor infinito.",
        color: "blue"
      },
      {
        id: "constantinople",
        title: "CONSTANTINOPLA — O ESPÍRITO SANTO",
        period: "381 d.C.",
        scripture: "Atos 5:3-4",
        context: "O Primeiro Concílio de Constantinopla expandiu o Credo de Niceia para tratar especificamente da divindade do Espírito Santo. Surgiram os 'pneumatômacos' (adversários do Espírito), que negavam que o Espírito Santo fosse Deus, tratando-o como uma força ou criatura subordinada. O concílio reafirmou a divindade de Cristo e declarou que o Espírito Santo é o 'Senhor e Dador da Vida, que procede do Pai, e com o Pai e o Filho é adorado e glorificado'. Esta definição completou a formulação trinitária da Igreja, estabelecendo que adoramos um só Deus em três pessoas coiguais e coeternas. Sem a divindade do Espírito, a vida sacramental e a santificação da Igreja seriam meros ritos humanos, desprovidos de poder divino.",
        heresy: "Macedonianismo (O Espírito Santo não é Deus, mas uma força ou criatura)",
        response: "O Espírito Santo é Deus, coigual e coeterno com o Pai e o Filho. Trindade completa.",
        decision: "• Questão central: o Espírito Santo é Deus ou apenas uma força?\n• Oposição aos pneumatômacos (negadores do Espírito)\n• Reafirmação e expansão do Credo Niceno-Constantinopolitano\n• Definição: o Espírito é 'Senhor e Dador da Vida'\n• Adoração coigual: Pai, Filho e Espírito Santo\n• Consolidação da doutrina da Trindade\n• Princípio firmado: a Igreja é movida pela Pessoa de Deus (Espírito)",
        throneRevelation: "Negar o Espírito = matar o mover. A Igreja não sobrevive sem a pessoa do Espírito Santo.",
        color: "sky"
      },
      {
        id: "ephesus",
        title: "ÉFESO — A ENCARNAÇÃO",
        period: "431 d.C.",
        scripture: "João 1:14",
        context: "O Concílio de Éfeso enfrentou o nestorianismo, que propunha uma divisão radical em Cristo, como se houvesse duas pessoas distintas habitando o mesmo corpo: uma humana e uma divina. Nestório rejeitava o título 'Theotokos' (Mãe de Deus) para Maria, preferindo 'Christotokos' (Mãe de Cristo), alegando que Deus não poderia nascer de uma mulher. Cirilo de Alexandria argumentou que, se as naturezas estivessem separadas, a morte de Cristo na cruz não teria valor redentor divino. O concílio confirmou a união hipostática: Cristo é uma única pessoa com duas naturezas inseparáveis. Maria foi confirmada como Theotokos, não porque ela gerou a divindade eterna, mas porque Aquele que ela carregou no ventre era verdadeiramente Deus encarnado.",
        heresy: "Nestorianismo (Cristo dividido em duas pessoas distintas, uma divina e uma humana)",
        response: "Cristo é UMA pessoa com duas naturezas. Maria é Theotokos (Mãe de Deus, portadora de Deus).",
        decision: "• Questão central: Cristo é uma pessoa ou duas?\n• Nestório dividia Cristo em duas personalidades\n• Cirilo de Alexandria defendeu a unidade da Pessoa de Cristo\n• Título Theotokos: garantia da encarnação real de Deus\n• União Hipostática: Deus e homem unidos sem divisão\n• Condenação da separação das naturezas em Cristo\n• Princípio firmado: o Redentor deve ser Deus e homem em uma só Pessoa",
        throneRevelation: "Se Cristo não é um → a redenção quebra. A união hipostática é o pilar da salvação.",
        color: "emerald"
      },
      {
        id: "chalcedon",
        title: "CALCEDÔNIA — O EQUILÍBRIO PERFEITO",
        period: "451 d.C.",
        context: "O Concílio de Calcedônia é o ápice das definições cristológicas. Ele surgiu para corrigir o erro oposto ao nestorianismo: o monofisismo de Eutiques, que ensinava que a natureza humana de Cristo foi absorvida pela divina, como uma gota de mel no oceano. Isso resultaria em uma natureza híbrida que não seria nem divina nem humana. Calcedônia estabeleceu o 'Equilíbrio Perfeito', definindo que Cristo possui duas naturezas (divina e humana) que coexistem em uma só pessoa 'sem confusão, sem mudança, sem divisão e sem separação'. Esta definição protege a integridade de Cristo como nosso Mediador: Ele deve ser plenamente humano para nos representar e plenamente Deus para nos salvar.",
        heresy: "Eutiquianismo/Monofisismo (A natureza humana de Cristo foi absorvida pela divina)",
        response: "Jesus é 100% Deus e 100% Homem, em uma só pessoa, sem confusão, sem mudança, sem divisão, sem separação.",
        decision: "• Questão central: como as duas naturezas coexistem em Cristo?\n• Eutiques ensinava que a humanidade foi absorvida pela divindade\n• Definição das 'Quatro Negativas': sem confusão, mudança, divisão ou separação\n• Cristo é 'consubstancial a nós segundo a humanidade'\n• O Tomo de Leão (Papa Leão I) foi a base teológica\n• Equilíbrio entre a divindade plena e a humanidade real\n• Princípio firmado: Jesus é 100% Deus e 100% Homem",
        throneRevelation: "Se Ele não é homem → não nos representa na cruz. Se não é Deus → não tem poder para nos salvar.",
        color: "purple"
      }
    ]
  },
  {
    id: "images-division",
    title: "4. IMAGENS E A GRANDE DIVISÃO",
    events: [
      {
        id: "nicea2",
        title: "NICEIA II — A QUESTÃO DAS IMAGENS",
        period: "787 d.C.",
        context: "O Segundo Concílio de Niceia tratou da controvérsia iconoclasta que assolava o Oriente. Imperadores bizantinos haviam proibido e destruído imagens sacras, temendo a idolatria. João Damasceno defendeu o uso de ícones baseando-se na Encarnação: se Deus se tornou visível em Cristo, a arte pode retratar o sagrado. O concílio distinguiu entre 'latria' (adoração devida apenas a Deus) e 'proskynesis' (veneração ou honra relativa). A decisão permitiu o uso de imagens como 'janelas para o invisível', auxiliando a fé dos iletrados e celebrando a realidade da matéria assumida por Deus.",
        heresy: "Idolatria vs rejeição total da arte sacra",
        decision: "• Questão central: o uso de imagens é idolatria ou celebração da Encarnação?\n• Iconoclastas (destruidores) vs Iconódulos (veneradores)\n• João Damasceno: a Encarnação santificou a matéria visível\n• Distinção teológica: Latria (adoração) vs Dulia (veneração)\n• Imagens como auxílio pedagógico e devocional\n• Fim da primeira grande crise sobre a estética na fé\n• Princípio firmado: o visível pode apontar para o invisível",
        warning: "A Igreja sempre vive no pêndulo entre: idolatria (apego ao visível) e frieza espiritual (rejeição do belo).",
        color: "rose"
      },
      {
        id: "trent",
        title: "TRENTO — A CONTRA-REFORMA",
        period: "1545–1563",
        scripture: "Efésios 2:8-9",
        context: "O Concílio de Trento foi a resposta da Igreja Católica à Reforma Protestante. Durante dezoito anos, em várias sessões, a Igreja buscou reformar abusos internos e definir dogmas contra as teses de Lutero e Calvino. Trento reafirmou a autoridade conjunta da Escritura e da Tradição, a doutrina dos sete sacramentos e a necessidade da cooperação humana (obras) com a graça para a justificação. Embora tenha corrigido a venda de indulgências, o concílio cristalizou a divisão entre católicos e protestantes, estabelecendo o perfil do catolicismo romano moderno por séculos.",
        heresy: "Visão Católica: Bíblia + Tradição, Fé + Obras. Visão Protestante: Sola Scriptura, Sola Fide.",
        decision: "• Questão central: como responder aos desafios da Reforma Protestante?\n• Reafirmação da Vulgata Latina e da Tradição Apostólica\n• Justificação: graça de Deus + cooperação humana\n• Confirmação dos sete sacramentos e do Purgatório\n• Reforma disciplinar do clero e fim da venda de indulgências\n• Criação do Catecismo Romano e do Missal\n• Princípio firmado: a autoridade da Igreja é o intérprete final da fé",
        throneRevelation: "Aqui nasce a divisão visível e institucional definitiva da Igreja Ocidental.",
        color: "orange"
      }
    ]
  },
  {
    id: "modern-councils",
    title: "5. OS CONCÍLIOS MODERNOS",
    events: [
      {
        id: "vatican1",
        title: "VATICANO I — AUTORIDADE",
        period: "1870",
        context: "O Concílio Vaticano I ocorreu em um momento de grandes mudanças políticas e sociais na Europa. O principal objetivo foi fortalecer a autoridade do Papa frente ao racionalismo e ao liberalismo. O concílio definiu o dogma da Infalibilidade Papal: o Papa é preservado de erro pelo Espírito Santo quando fala 'ex cathedra' (da cadeira de Pedro) definindo uma doutrina sobre fé ou moral para toda a Igreja. Também tratou da relação entre fé e razão, afirmando que ambas são compatíveis e necessárias. O concílio foi interrompido pela eclosão da Guerra Franco-Prussiana e pela ocupação de Roma.",
        decision: "• Questão central: qual a autoridade do Papa no mundo moderno?\n• Definição da Infalibilidade Papal (ex cathedra)\n• Primado de jurisdição do Papa sobre toda a Igreja\n• Constituição Dei Filius: harmonia entre fé e razão\n• Resposta ao racionalismo e ao secularismo do século XIX\n• Fortalecimento da centralização romana\n• Princípio firmado: a unidade da Igreja repousa na autoridade petrina",
        warning: "ALERTA TRONO: Quando a autoridade humana cresce demais, há o risco iminente de substituir a autoridade suprema da Palavra de Deus.",
        color: "stone"
      },
      {
        id: "vatican2",
        title: "VATICANO II — ADAPTAÇÃO",
        period: "1962–1965",
        context: "O Concílio Vaticano II foi convocado pelo Papa João XXIII com o intuito de promover um 'aggiornamento' (atualização) da Igreja. Diferente dos anteriores, não foi convocado para combater uma heresia específica, mas para abrir as janelas da Igreja ao mundo moderno. Resultou em mudanças litúrgicas profundas (missa no vernáculo), uma nova ênfase no papel dos leigos, o diálogo ecumênico com outros cristãos e o diálogo inter-religioso. O concílio apresentou a Igreja não apenas como uma hierarquia, mas como o 'Povo de Deus' em peregrinação.",
        decision: "• Questão central: como a Igreja deve se comunicar com o mundo contemporâneo?\n• Aggiornamento: atualização sem mudar o depósito da fé\n• Reforma Litúrgica: missa voltada para o povo e no idioma local\n• Ênfase na Igreja como 'Povo de Deus' e colegialidade episcopal\n• Abertura ao ecumenismo e liberdade religiosa\n• Diálogo com a cultura e as ciências modernas\n• Princípio firmado: a Igreja deve ser missionária e dialogante",
        throneRevelation: "O desafio perpétuo: A Igreja tenta dialogar com a cultura sem perder a sua essência e santidade.",
        color: "zinc"
      }
    ]
  }
];

export const propheticVision = {
  title: "11. VISÃO PROFÉTICA (DANIEL + APOCALIPSE)",
  deepConnection: [
    "Daniel 7: Sistemas religiosos + poder político (A mistura perigosa ao longo da história).",
    "Apocalipse 2–3: As sete igrejas enfrentando: falsa doutrina, esfriamento e mistura com o mundo."
  ],
  centralRevelation: [
    "Os concílios mostram 3 ciclos históricos:",
    "1. PUREZA (Atos): A Igreja viva, movida pelo Espírito.",
    "2. DEFINIÇÃO (Concílios): A necessidade de defender a doutrina contra lobos.",
    "3. INSTITUCIONALIZAÇÃO: O risco de ganhar a teologia e perder o fogo do Espírito."
  ]
};

export const heresiesMap = [
  { attack: "Cristo não é Deus", response: "Niceia (325)" },
  { attack: "Espírito não é Deus", response: "Constantinopla (381)" },
  { attack: "Cristo dividido", response: "Éfeso (431)" },
  { attack: "Cristo não é humano", response: "Calcedônia (451)" },
  { attack: "Autoridade fora da Palavra", response: "Reforma / Trento" }
];

export const finalInsight = {
  title: "13. INSIGHT FINAL (NÍVEL TRONO)",
  content: [
    "Satanás nunca atacou costumes primeiro.",
    "Satanás nunca atacou liturgia primeiro.",
    "Ele sempre atacou: QUEM É CRISTO.",
    "Mateus 16:15 - 'E vós, quem dizeis que eu sou?'"
  ]
};
