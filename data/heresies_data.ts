import { HeresyBlock } from '../types';

export const HERESIES_DATA: HeresyBlock[] = [
  {
    id: "block_a",
    title: "A. Cristologia: Natureza de Cristo",
    color: "indigo",
    items: [
      {
        id: "h1",
        title: "DOCETISMO",
        subtitle: "Cristo parecia humano, mas não era realmente",
        context: ["Séculos I-II", "Ligado ao gnosticismo", "Se a matéria é má, Cristo não pode ter assumido um corpo real."],
        errorNucleus: ["Jesus só aparentava ser humano.", "O sofrimento foi ilusório."],
        deepProblem: [
          "não teve corpo real -> não morreu realmente",
          "não morreu realmente -> não houve expiação real",
          "não assumiu humanidade real -> não redimiu humanidade real"
        ],
        destroys: ["cruz", "encarnação", "ressurreição corporal", "sacerdócio de Cristo"],
        sequestratedTexts: ["Linguagem simbólica sobre corpo espiritual", "Ênfase exagerada na divindade"],
        biblicalResponse: [
          { ref: "João 1:14", text: "O Verbo se fez carne" },
          { ref: "Hebreus 2:14", text: "participou de carne e sangue" },
          { ref: "1 João 4:2-3", text: "negar que veio em carne é espírito do anticristo" },
          { ref: "Lucas 24:39", text: "um espírito não tem carne nem ossos" }
        ],
        modernSymptoms: ["Jesus como energia", "Cristo apenas como símbolo espiritual", "Desvalorização do sofrimento físico", "Desprezo pelo corpo"],
        pastoralRemedy: ["Ressurreição corporal", "Sacramentos (fé encarnada)", "Valor do corpo como criação boa"]
      },
      {
        id: "h2",
        title: "NESTORIANISMO",
        subtitle: "Cristo dividido em duas pessoas",
        context: ["Século V - Nestório, patriarca de Constantinopla", "Tentativa de proteger a divindade de Cristo"],
        errorNucleus: ["Pessoa humana separada", "Pessoa divina separada", "Dois sujeitos agindo lado a lado"],
        deepProblem: [
          "Quem morreu na cruz? A pessoa humana?",
          "Então Deus não sofreu?",
          "Então o sacrifício não tem valor infinito?",
          "Divide o Salvador."
        ],
        destroys: ["Unidade pessoal de Cristo", "Valor do sacrifício"],
        sequestratedTexts: ["Passagens que mostram fraqueza humana", "Passagens que mostram autoridade divina"],
        biblicalResponse: [
          { ref: "João 1:14", text: "União inseparável" },
          { ref: "Colossenses 2:9", text: "nele habita corporalmente toda plenitude" },
          { ref: "Filipenses 2:6-8", text: "A mesma pessoa se esvaziou" },
          { ref: "Hebreus 4:15", text: "O Senhor que se compadece" }
        ],
        modernSymptoms: ["O homem Jesus fez isso, mas o Deus Cristo não", "Separar Cristo da cruz", "Negar que Deus participou da redenção"],
        pastoralRemedy: ["Cristo é o único mediador", "O mesmo que acalma o mar é o que chora", "Unidade pessoal indivisível"]
      },
      {
        id: "h3",
        title: "MONOFISISMO",
        subtitle: "Cristo tem apenas uma natureza",
        context: ["Reação ao Nestorianismo", "Se Nestório dividiu demais, o monofisismo fundiu demais."],
        errorNucleus: ["Cristo teria uma única natureza - divina absorvendo a humana.", "Humanidade diluída."],
        deepProblem: [
          "Se humanidade foi absorvida -> Ele não é verdadeiramente humano",
          "Não experimentou tentação real",
          "Não pode ser nosso sumo sacerdote empático"
        ],
        destroys: ["mediação", "identificação", "obediência humana real"],
        sequestratedTexts: ["Ênfase na divindade exaltada"],
        biblicalResponse: [
          { ref: "Hebreus 4:15", text: "Tentado em tudo" },
          { ref: "Lucas 2:52", text: "crescia em sabedoria" },
          { ref: "João 11:35", text: "chorou" },
          { ref: "Mateus 26:39", text: "agonia real" }
        ],
        modernSymptoms: ["Jesus super-humano", "Negação da vulnerabilidade real", "Espiritualização exagerada"],
        pastoralRemedy: ["Cristo como verdadeiro homem", "Valor da humanidade redimida", "Sofrimento como parte da redenção"]
      },
      {
        id: "h14",
        title: "ARIANISMO",
        subtitle: "Cristo como a primeira e maior criatura",
        context: ["Século IV - Ário, presbítero de Alexandria", "Concílio de Niceia (325 d.C.)"],
        errorNucleus: ["Jesus não é coeterno com o Pai.", "Houve um tempo em que o Filho não existia.", "Cristo é um deus inferior."],
        deepProblem: [
          "Se Cristo é criatura -> não pode salvar criaturas",
          "Adoração a Cristo vira idolatria",
          "A natureza de Deus é dividida"
        ],
        destroys: ["Divindade de Cristo", "Eficácia da Salvação", "Trindade"],
        sequestratedTexts: ["João 14:28 (O Pai é maior do que eu)", "Colossenses 1:15 (Primogênito)"],
        biblicalResponse: [
          { ref: "João 1:1", text: "O Verbo era Deus" },
          { ref: "João 10:30", text: "Eu e o Pai somos um" },
          { ref: "Colossenses 1:16-17", text: "Tudo foi criado por Ele e para Ele" }
        ],
        modernSymptoms: ["Testemunhas de Jeová", "Jesus apenas como mestre ou profeta", "Negação da Trindade"],
        pastoralRemedy: ["Consubstancialidade (Homoousios)", "Adoração exclusiva a Deus", "Cristo como Criador não criado"]
      },
      {
        id: "h15",
        title: "SABELIANISMO",
        subtitle: "Deus em três modos, não três pessoas",
        context: ["Século III - Sabélio", "Tentativa de preservar o monoteísmo rígido"],
        errorNucleus: ["Pai, Filho e Espírito são apenas 'máscaras' de uma única pessoa.", "Deus se manifesta sucessivamente, não simultaneamente."],
        deepProblem: [
          "Quem Jesus orava no Getsêmani? A si mesmo?",
          "A relação de amor na Trindade desaparece",
          "A encarnação vira um teatro"
        ],
        destroys: ["Distinção de Pessoas", "Relacionamento Trinitário", "Mediação de Cristo"],
        sequestratedTexts: ["Isaías 9:6 (Pai da Eternidade)", "João 10:30"],
        biblicalResponse: [
          { ref: "Mateus 3:16-17", text: "Batismo de Jesus (três pessoas presentes)" },
          { ref: "João 14:16", text: "Rogarei ao Pai e Ele vos dará outro Consolador" },
          { ref: "2 Coríntios 13:13", text: "Bênção Apostólica trinitária" }
        ],
        modernSymptoms: ["Unicismo", "Jesus é o Pai", "Confusão entre as funções da Trindade"],
        pastoralRemedy: ["Trindade Econômica e Ontológica", "Distinção sem separação", "Oração ao Pai, pelo Filho, no Espírito"]
      },
      {
        id: "h16",
        title: "APOLINARISMO",
        subtitle: "Cristo com mente divina e corpo humano",
        context: ["Século IV - Apolinário de Laodiceia", "Reação ao Arianismo"],
        errorNucleus: ["Jesus tinha corpo humano, mas o 'Logos' substituiu a mente humana.", "Cristo não tinha uma psicologia humana completa."],
        deepProblem: [
          "O que não foi assumido não foi curado",
          "Se Jesus não tinha mente humana -> não foi tentado na mente",
          "Humanidade incompleta"
        ],
        destroys: ["Humanidade Plena de Cristo", "Integridade da Redenção"],
        sequestratedTexts: ["João 1:14 (foco apenas na carne)"],
        biblicalResponse: [
          { ref: "Hebreus 4:15", text: "Tentado em todas as coisas" },
          { ref: "Lucas 2:52", text: "Crescia em sabedoria" },
          { ref: "Mateus 26:38", text: "A minha alma está profundamente triste" }
        ],
        modernSymptoms: ["Jesus como um robô controlado por Deus", "Negação das emoções humanas de Jesus"],
        pastoralRemedy: ["União Hipostática", "Cristo como nosso exemplo humano", "Cura da mente humana por Cristo"]
      },
      {
        id: "h17",
        title: "ADOCIONISMO",
        subtitle: "Jesus tornou-se Filho de Deus por mérito",
        context: ["Século II e VIII", "Tentativa de explicar a humanidade de Jesus"],
        errorNucleus: ["Jesus nasceu apenas homem.", "Deus o 'adotou' como Filho no batismo devido à sua obediência."],
        deepProblem: [
          "Salvação por obras (Jesus como modelo de auto-salvação)",
          "Negação da preexistência de Cristo",
          "Cristo não é Deus por natureza"
        ],
        destroys: ["Preexistência de Cristo", "Natureza Divina", "Graça"],
        sequestratedTexts: ["Salmos 2:7 (Hoje te gerei)", "Romanos 1:4"],
        biblicalResponse: [
          { ref: "João 1:1-2", text: "No princípio era o Verbo" },
          { ref: "Filipenses 2:6", text: "Subsistindo em forma de Deus" },
          { ref: "Miqueias 5:2", text: "Suas saídas são desde os tempos antigos" }
        ],
        modernSymptoms: ["Jesus como 'o homem que chegou mais perto de Deus'", "Espiritismo (Jesus como espírito evoluído)"],
        pastoralRemedy: ["Filiação Eterna", "Preexistência", "Encarnação real"]
      }
    ],
    conclusion: "1 pessoa | 2 naturezas | 100% Deus | 100% homem | sem confusão | sem divisão | sem absorção | sem separação."
  },
  {
    id: "block_b",
    title: "B. Autoridade e Revelação",
    color: "amber",
    items: [
      {
        id: "h4",
        title: "MARCIONISMO",
        subtitle: "Separar o Deus do AT do Deus do NT",
        context: ["Marcião (séc. II)", "Influenciado por dualismo e repulsa à severidade do AT"],
        errorNucleus: ["O Deus do Antigo Testamento é um deus inferior, irado e legalista.", "O Pai revelado por Jesus é outro Deus - amoroso e superior."],
        deepProblem: [
          "Jesus não cumpre profecias",
          "A história da redenção se rompe",
          "A cruz perde coerência",
          "A unidade da Bíblia desaparece"
        ],
        destroys: ["Unidade da Bíblia", "Coerência da redenção"],
        sequestratedTexts: ["Ênfase isolada na graça do NT", "Leitura superficial das guerras no AT"],
        biblicalResponse: [
          { ref: "Mateus 5:17", text: "Jesus afirma o AT" },
          { ref: "2 Tm 3:16", text: "Toda Escritura é inspirada" },
          { ref: "Malaquias 3:6", text: "Deus é imutável" },
          { ref: "Romanos 15:4", text: "o AT foi escrito para nossa instrução" }
        ],
        modernSymptoms: ["O Deus do AT era violento", "Prefiro o Deus do Novo Testamento", "Desprezo por Levítico, Juízes, etc."],
        pastoralRemedy: ["Unidade da aliança", "Progressão da revelação", "Tipologia (Cristo no AT)", "Justiça e graça inseparáveis"]
      },
      {
        id: "h5",
        title: "MONTANISMO",
        subtitle: "Nova revelação superior à apostólica",
        context: ["Montano (séc. II)", "Movimento carismático extremo"],
        errorNucleus: ["O Espírito estava trazendo revelações novas", "Profecias que superavam os apóstolos"],
        deepProblem: [
          "O cânon nunca fecha",
          "A Bíblia nunca é suficiente",
          "A igreja vive instável",
          "Líder carismático vira autoridade suprema"
        ],
        destroys: ["Suficiência das Escrituras", "Estabilidade da Igreja"],
        sequestratedTexts: ["Joel 2 (derramamento)", "Atos 2 (profecia)", "1Co 14 (profetizar)"],
        biblicalResponse: [
          { ref: "Judas 3", text: "fé entregue de uma vez por todas" },
          { ref: "Hebreus 1:1-2", text: "Deus falou plenamente no Filho" },
          { ref: "Apocalipse 22:18-19", text: "advertência contra acréscimos" }
        ],
        modernSymptoms: ["Deus me disse algo novo além da Bíblia", "Profecias que anulam Escritura"],
        pastoralRemedy: ["Suficiência das Escrituras", "Discernimento espiritual", "Submissão à Palavra escrita"]
      },
      {
        id: "h6",
        title: "LIBERALISMO RADICAL",
        subtitle: "Desconstruir o sobrenatural",
        context: ["Séculos XIX-XX", "Influência do Iluminismo"],
        errorNucleus: ["Milagres são mitos", "Ressurreição é simbólica", "Escritura é produto humano"],
        deepProblem: [
          "Ressurreição não é literal -> 1Co 15:14 destrói a fé",
          "Milagres não são reais -> Deus não intervém",
          "Escritura não é inspirada -> autoridade desaparece"
        ],
        destroys: ["Sobrenaturalidade", "Autoridade Bíblica", "Certeza da fé"],
        sequestratedTexts: ["Ressurreição como experiência interior", "Milagres reinterpretados como metáforas"],
        biblicalResponse: [
          { ref: "2 Tm 3:16", text: "Inspirada por Deus" },
          { ref: "2 Pe 1:21", text: "Homens falaram da parte de Deus" },
          { ref: "1 Coríntios 15", text: "Testemunho histórico da ressurreição" }
        ],
        modernSymptoms: ["Importa o que Jesus ensinou, não se Ele ressuscitou", "Moral sem cruz", "Fé sem intervenção divina"],
        pastoralRemedy: ["Historicidade dos Evangelhos", "Evidências da ressurreição", "Unidade da fé apostólica"]
      },
      {
        id: "h18",
        title: "GNOSTICISMO",
        subtitle: "Salvação por conhecimento secreto e desprezo à matéria",
        context: ["Séculos I-III", "Grande ameaça à igreja primitiva"],
        errorNucleus: ["A matéria é má, o espírito é bom.", "Salvação através de uma 'gnosis' (conhecimento) mística.", "O Deus criador é inferior ou mau."],
        deepProblem: [
          "Negação da criação como boa",
          "Negação da encarnação real",
          "Elite espiritual (iniciados)"
        ],
        destroys: ["Doutrina da Criação", "Encarnação", "Unidade da Igreja"],
        sequestratedTexts: ["Linguagem sobre 'mistérios' nas epístolas"],
        biblicalResponse: [
          { ref: "Gênesis 1:31", text: "Viu Deus que tudo era muito bom" },
          { ref: "1 João 4:2", text: "Jesus Cristo veio em carne" },
          { ref: "Colossenses 2:8-9", text: "Cuidado com vãs sutilezas... nele habita a plenitude" }
        ],
        modernSymptoms: ["Esoterismo cristão", "Busca por 'revelações bombásticas' fora da Bíblia", "Desprezo pelo mundo físico"],
        pastoralRemedy: ["Bondade da Criação", "Suficiência da Revelação Bíblica", "Ressurreição do corpo"]
      },
      {
        id: "h19",
        title: "TEÍSMO ABERTO",
        subtitle: "Deus não conhece o futuro de forma absoluta",
        context: ["Final do Século XX", "Tentativa de resolver o problema do mal e livre-arbítrio"],
        errorNucleus: ["O futuro é aberto e Deus 'aprende' com as escolhas humanas.", "Deus corre riscos e pode se frustrar."],
        deepProblem: [
          "Deus deixa de ser onisciente",
          "As profecias viram palpites",
          "A segurança do crente desaparece"
        ],
        destroys: ["Onisciência de Deus", "Soberania Divina", "Confiabilidade das Promessas"],
        sequestratedTexts: ["Gênesis 6:6 (Deus se arrependeu)", "Êxodo 32:14"],
        biblicalResponse: [
          { ref: "Isaías 46:10", text: "Anuncio o fim desde o princípio" },
          { ref: "Salmos 139:16", text: "No teu livro foram escritos todos os meus dias" },
          { ref: "Atos 15:18", text: "Conhecidas são a Deus todas as suas obras" }
        ],
        modernSymptoms: ["Deus pode mudar de ideia", "Oração para 'ajudar' Deus a decidir o futuro"],
        pastoralRemedy: ["Onisciência Absoluta", "Soberania e Responsabilidade", "Descanso na Presciência de Deus"]
      }
    ],
    conclusion: "Marcionismo (Unidade) | Montanismo (Suficiência) | Liberalismo (Sobrenaturalidade)."
  },
  {
    id: "block_c",
    title: "C. Salvação e Vida Cristã",
    color: "emerald",
    items: [
      {
        id: "h7",
        title: "ANTINOMIANISMO",
        subtitle: "Graça sem lei. Salvação sem santidade.",
        context: ["Aparece já no Novo Testamento", "Paulo combate isso em Romanos 6"],
        errorNucleus: ["Graça elimina qualquer obrigação moral.", "Se somos salvos pela graça, então não importa como vivemos."],
        deepProblem: [
          "Cristo salva da culpa, mas não do pecado",
          "A cruz não produz nova vida",
          "A igreja vira comunidade sem disciplina"
        ],
        destroys: ["Santificação", "Disciplina espiritual", "Novo nascimento"],
        sequestratedTexts: ["Romanos 5:20 - Onde abundou o pecado, superabundou a graça."],
        biblicalResponse: [
          { ref: "Romanos 6:1-4", text: "Morremos para o pecado" },
          { ref: "Tiago 2:17", text: "Fé sem obras é morta" },
          { ref: "Hebreus 12:14", text: "Sem santificação ninguém verá o Senhor" }
        ],
        modernSymptoms: ["Deus entende meu coração", "Desprezo por disciplina espiritual", "Vida cristã sem mudança visível"],
        pastoralRemedy: ["União com Cristo", "Novo nascimento", "Santificação como fruto inevitável"]
      },
      {
        id: "h8",
        title: "UNIVERSALISMO EXTREMO",
        subtitle: "Todos serão salvos inevitavelmente",
        context: ["Correntes patrísticas especulativas", "Ressurgiu no liberalismo moderno"],
        errorNucleus: ["O amor de Deus anula qualquer juízo eterno."],
        deepProblem: [
          "arrependimento perde urgência",
          "evangelismo perde sentido",
          "cruz perde necessidade",
          "juízo se torna teatro"
        ],
        destroys: ["Urgência missionária", "Justiça divina", "Necessidade da cruz"],
        sequestratedTexts: ["Deus quer que todos se salvem (1Tm 2:4)", "Assim como em Adão todos morrem... (1Co 15:22)"],
        biblicalResponse: [
          { ref: "Mateus 25:46", text: "punição eterna" },
          { ref: "Apocalipse 20", text: "Juízo do Trono Branco" },
          { ref: "2 Ts 1:8-9", text: "Punição de eterna destruição" }
        ],
        modernSymptoms: ["No fim, Deus salva todo mundo.", "Evangelho sem urgência", "Inferno como metáfora"],
        pastoralRemedy: ["Justiça divina", "Santidade de Deus", "Seriedade do pecado", "Centralidade da cruz"]
      },
      {
        id: "h9",
        title: "LEGALISMO",
        subtitle: "Lei sem graça. Santidade sem coração.",
        context: ["Farisaísmo no NT", "Reaparece continuamente na igreja."],
        errorNucleus: ["Obediência externa como base de aceitação diante de Deus."],
        deepProblem: [
          "Cristo não é suficiente",
          "orgulho cresce",
          "hipocrisia floresce",
          "condenação domina"
        ],
        destroys: ["Certeza da salvação", "Graça de Cristo", "Alegria do Evangelho"],
        sequestratedTexts: ["Sermão do Monte usado como lista de mérito."],
        biblicalResponse: [
          { ref: "Romanos 3:28", text: "justificação pela fé" },
          { ref: "Gálatas 5:1", text: "não vos submetais novamente a jugo de escravidão" },
          { ref: "Lucas 18:9-14", text: "fariseu e publicano" }
        ],
        modernSymptoms: ["Se você não faz X, Deus não te aceita.", "Cristão medido por aparência externa"],
        pastoralRemedy: ["Justificação pela fé", "Santificação como resposta amorosa", "Segurança na obra de Cristo"]
      },
      {
        id: "h20",
        title: "PELAGIANISMO",
        subtitle: "Salvação pelo esforço humano sem pecado original",
        context: ["Século V - Pelágio", "Confrontado por Agostinho de Hipona"],
        errorNucleus: ["Não existe pecado original.", "O homem nasce neutro e pode escolher não pecar.", "A graça é apenas um auxílio externo."],
        deepProblem: [
          "A cruz vira apenas um bom exemplo",
          "O homem é seu próprio salvador",
          "Negação da depravação total"
        ],
        destroys: ["Necessidade da Graça", "Pecado Original", "Suficiência de Cristo"],
        sequestratedTexts: ["Ezequiel 18:20 (O filho não levará a iniquidade do pai)"],
        biblicalResponse: [
          { ref: "Romanos 5:12", text: "Pelo pecado de um, todos pecaram" },
          { ref: "Efésios 2:8-9", text: "Pela graça sois salvos... não vem de vós" },
          { ref: "Salmos 51:5", text: "Em iniquidade fui formado" }
        ],
        modernSymptoms: ["Humanismo cristão", "Basta ser uma boa pessoa", "Negação da maldade do coração"],
        pastoralRemedy: ["Depravação Total", "Monergismo (Deus salva)", "Necessidade do Novo Nascimento"]
      },
      {
        id: "h21",
        title: "SEMIPELAGIANISMO",
        subtitle: "O homem dá o primeiro passo, Deus completa",
        context: ["Século V-VI", "Tentativa de meio-termo entre Pelágio e Agostinho"],
        errorNucleus: ["O homem tem a iniciativa da fé.", "A vontade humana não está totalmente morta, apenas doente.", "Deus coopera com o desejo humano inicial."],
        deepProblem: [
          "A glória da salvação é dividida",
          "A fé vira uma obra humana",
          "Incerteza da salvação"
        ],
        destroys: ["Soberania de Deus na Salvação", "Graça Preveniente"],
        sequestratedTexts: ["Apocalipse 3:20 (Eis que estou à porta e bato)"],
        biblicalResponse: [
          { ref: "João 6:44", text: "Ninguém pode vir a mim se o Pai não o trouxer" },
          { ref: "Filipenses 1:6", text: "Aquele que começou a boa obra" },
          { ref: "Romanos 9:16", text: "Não depende do que quer, nem do que corre" }
        ],
        modernSymptoms: ["Decidismo extremo", "Fé como mérito humano", "Sinergismo antropocêntrico"],
        pastoralRemedy: ["Graça Irresistível/Eficaz", "Iniciativa Divina", "Fé como dom de Deus"]
      },
      {
        id: "h22",
        title: "DONATISMO",
        subtitle: "Eficácia dos sacramentos depende da pureza do líder",
        context: ["Século IV - Norte da África", "Surgiu após perseguições romanas"],
        errorNucleus: ["Líderes que falharam na perseguição perderam autoridade.", "Batismos e ceias realizados por eles são inválidos."],
        deepProblem: [
          "A igreja vira uma elite de 'puros'",
          "A segurança do crente depende do homem, não de Deus",
          "Falta de perdão e restauração"
        ],
        destroys: ["Eclesiologia", "Graça na Restauração", "Objetividade dos Sacramentos"],
        sequestratedTexts: ["Salmos 24:3-4 (Quem subirá ao monte... o limpo de mãos)"],
        biblicalResponse: [
          { ref: "2 Timóteo 2:13", text: "Se somos infiéis, Ele permanece fiel" },
          { ref: "1 Coríntios 3:5-7", text: "Nem o que planta é alguma coisa... mas Deus" },
          { ref: "Gálatas 6:1", text: "Restaurai o tal com espírito de mansidão" }
        ],
        modernSymptoms: ["Igrejas que rebatizam por causa do pastor", "Perfeccionismo eclesiástico excludente"],
        pastoralRemedy: ["Cristo como o verdadeiro celebrante", "Igreja como hospital de pecadores", "Graça que restaura o caído"]
      }
    ],
    conclusion: "Antinomianismo (Graça sem santidade) | Legalismo (Santidade sem graça) | Universalismo (Amor sem justiça)."
  },
  {
    id: "block_d",
    title: "D. Distorções Culturais da Fé",
    color: "rose",
    items: [
      {
        id: "h10",
        title: "RELATIVISMO",
        subtitle: "A verdade depende da experiência",
        context: ["Pós-modernismo (século XX)", "Reação contra absolutismos filosóficos."],
        errorNucleus: ["Não existe verdade objetiva universal.", "Existe minha verdade."],
        deepProblem: [
          "doutrina vira opinião",
          "pecado vira perspectiva",
          "evangelho vira sugestão",
          "Cristo deixa de ser O Caminho"
        ],
        destroys: ["Autoridade da Verdade", "Absolutismo de Cristo"],
        sequestratedTexts: ["João 14:6 tratado como linguagem cultural."],
        biblicalResponse: [
          { ref: "João 17:17", text: "A tua palavra é a verdade" },
          { ref: "Isaías 40:8", text: "Palavra permanece eternamente" },
          { ref: "Hebreus 13:8", text: "Cristo imutável" }
        ],
        modernSymptoms: ["Para você pode ser pecado, para mim não.", "Evangelho adaptado ao público."],
        pastoralRemedy: ["Autoridade das Escrituras", "Cosmovisão cristã", "Cristo como verdade absoluta"]
      },
      {
        id: "h11",
        title: "SINCRETISMO",
        subtitle: "Mistura com outras práticas",
        context: ["Pluralismo religioso moderno", "Misticismo e espiritualismo"],
        errorNucleus: ["Cristo não é suficiente; precisa complementar com outras fontes espirituais."],
        deepProblem: [
          "Cruz perde suficiência",
          "Espírito Santo é substituído",
          "Escritura é relativizada"
        ],
        destroys: ["Suficiência de Cristo", "Pureza da Doutrina"],
        sequestratedTexts: ["Colossenses 2:8", "2 Coríntios 6:14"],
        biblicalResponse: [
          { ref: "Colossenses 2:9-10", text: "Cristo é suficiente" },
          { ref: "Deuteronômio 12", text: "Não misturar culto" },
          { ref: "Atos 4:12", text: "Exclusividade de Cristo" }
        ],
        modernSymptoms: ["Cristão que consulta energia", "Evangelho com rituais paralelos"],
        pastoralRemedy: ["Suficiência de Cristo", "Discernimento espiritual", "Santidade exclusiva"]
      },
      {
        id: "h12",
        title: "AUTO-AJUDA GOSPEL",
        subtitle: "Cristianismo centrado no potencial",
        context: ["Pensamento motivacional moderno", "Mistura de Psicologia Positiva e Coaching"],
        errorNucleus: ["Evangelho como ferramenta para sucesso pessoal."],
        deepProblem: [
          "Deus vira meio, não fim",
          "Cruz vira metáfora motivacional",
          "Pecado vira baixa autoestima"
        ],
        destroys: ["Glória de Deus", "Arrependimento Real", "Centralidade da Cruz"],
        sequestratedTexts: ["Jeremias 29:11", "Filipenses 4:13 (fora de contexto)"],
        biblicalResponse: [
          { ref: "Lucas 9:23", text: "negar-se a si mesmo" },
          { ref: "Gálatas 2:20", text: "morrer para viver" },
          { ref: "2 Coríntios 5:15", text: "viver para Ele" }
        ],
        modernSymptoms: ["Pregação sem arrependimento", "Evangelho como destravar potencial"],
        pastoralRemedy: ["Cristo como fim, não meio", "Arrependimento e novo nascimento", "Centralidade da cruz"]
      },
      {
        id: "h13",
        title: "DEÍSMO CRISTIANIZADO",
        subtitle: "Deus existe, mas não intervém",
        context: ["Iluminismo", "Racionalismo teológico"],
        errorNucleus: ["Deus distante, impessoal. Criou o mundo e o deixou sob leis naturais."],
        deepProblem: [
          "Oração perde sentido",
          "Milagres viram lenda",
          "Providência desaparece"
        ],
        destroys: ["Vida de Oração", "Providência Divina", "Fé no Sobrenatural"],
        sequestratedTexts: ["Mateus 6", "Hebreus 1:3", "Atos"],
        biblicalResponse: [
          { ref: "Hebreus 1:3", text: "Deus sustenta todas as coisas" },
          { ref: "Filipenses 4:6", text: "Deus responde oração" },
          { ref: "João 1:14", text: "Encarnação prova intervenção" }
        ],
        modernSymptoms: ["Cristianismo frio e intelectual", "Deus como conceito abstrato"],
        pastoralRemedy: ["Providência", "Milagres", "Vida de oração", "Presença ativa de Deus"]
      },
      {
        id: "h23",
        title: "TEOLOGIA DA PROSPERIDADE",
        subtitle: "A fé como contrato de barganha financeira",
        context: ["Século XX-XXI", "Movimento Fé (E.W. Kenyon, Kenneth Hagin)"],
        errorNucleus: ["Deus é obrigado a abençoar financeiramente quem 'determina'.", "Sofrimento e pobreza são falta de fé ou pecado."],
        deepProblem: [
          "Deus vira um gênio da lâmpada",
          "A cruz vira meio de conforto terreno",
          "Desprezo pelos pobres e sofredores"
        ],
        destroys: ["Soberania de Deus", "Teologia da Cruz", "Contentamento Cristão"],
        sequestratedTexts: ["Jeremias 29:11", "Filipenses 4:13", "Malaquias 3:10"],
        biblicalResponse: [
          { ref: "1 Timóteo 6:9-10", text: "Os que querem ser ricos caem em laço" },
          { ref: "Mateus 6:19-20", text: "Não ajunteis tesouros na terra" },
          { ref: "Lucas 9:23", text: "Tome a sua cruz cada dia" }
        ],
        modernSymptoms: ["Campanhas de arrecadação agressivas", "Confissão positiva", "Foco no 'ter' em vez do 'ser'"],
        pastoralRemedy: ["Teologia da Cruz", "Providência e Contentamento", "Dignidade no sofrimento"]
      }
    ],
    conclusion: "Cristo | Escritura | Graça | Santidade | Suficiência."
  }
];