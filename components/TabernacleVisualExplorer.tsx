
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TabernacleItem {
  id: string;
  title: string;
  significance: string;
  description: string;
  theology: string;
  color: string;
  icon: string;
  x: number;
  y: number;
}

export const tabernacleData: TabernacleItem[] = [
  {
    id: 'gate',
    title: 'A Porta',
    significance: 'Revelação do Trono',
    description: 'O único, restrito e singular acesso ao Átrio exterior. Uma muralha tecida formidável, onde as 4 cores vibrantes revelam cirurgicamente as engrenagens das 4 dimensões messiânicas monumentais de Cristo.',
    theology: 'Cristo é inquestionavelmente a Porta (João 10:9). As cores estonteantes — o Azul imaculado dos céus, a Púrpura rica e imperial, o Escarlate do sangue do calvário e o Linho branco refinado das purezas — apontam diretamente à Sua imensurável divindade transcendental, realeza absoluta e implacável, o terrível sacrifício substitutivo na cruz e a divina e perfeita humanidade inerrante.',
    color: '#6366f1', // indigo-500
    icon: '🚪',
    x: 50,
    y: 85
  },
  {
    id: 'altar',
    title: 'Altar de Bronze',
    significance: 'Justificação',
    description: 'O madeiro implacável quadrangular forrado a bronze no qual os sacrifícios de animais inocentes eram oferecidos incessantemente na lenha crepitante e nas cinzas. O rigoroso e inegociável local do letal julgamento do pesado fardo do pecado.',
    theology: 'Representa dramaticamente a pesada e sangrenta Cruz de Cristo rasgada fora dos portões. Sem dor e o exaustivo derramamento de sangue inocente não há perdão ou remissão de males. É o altar do julgamento ardente o início fundamental e doloroso de toda a nossa jornada de redenção das correntes da morte.',
    color: '#e11d48', // rose-600
    icon: '🔥',
    x: 50,
    y: 70
  },
  {
    id: 'laver',
    title: 'Pia de Bronze',
    significance: 'Santificação',
    description: 'O cintilante reservatório raso de reflexos cobreados forjado a partir dos esplêndidos espelhos femininos abnegados. Onde os sacerdotes, no peso das poeiras desérticas, lavavam cirurgicamente as manchas das mãos e a sujeira dos pés machucados sob pena capital divina caso não o fizessem.',
    theology: 'Representa a constante inegociável e purificante lavagem inerrante forjada nas águas da viva Palavra, aliada a regeneração do âmago inflamada pelo vento do Espírito Santo. É o retrato severo e imaculado da purificação moral e interior incansavelmente exigida de um filho da luz na sua travessia para se aproximar da Face de Deus.',
    color: '#2563eb', // blue-600
    icon: '💧',
    x: 50,
    y: 55
  },
  {
    id: 'lampstand',
    title: 'Candelabro de Ouro',
    significance: 'Iluminação',
    description: 'A colossal árvore sagrada de lâmpadas incorruptivelmente maciça, marretada de uma única liga pesada de ouro puro divino brilhante. Hospedava o fogo que bebia o azeite esmagado, sendo inexoravelmente a única chama e irrevogável fonte de reconfortante luz quente e radiante que invadia sem recuar as trevas do enigmático Lugar Santo.',
    theology: 'Exalta Cristo como a formidável Estrela da Manhã e insubstituível Luz vivificante do mundo hostil. É o símbolo soberano do divino fogo invencível do Espírito Santo (7 lâmpadas perenes). É a divina, resplandecente e contínua chama de revelação que, inquebrantável, ilumina o caminho, consola e guia inabalavelmente a calejada e poeirenta peregrinação da Igreja em tempo de escuridão.',
    color: '#eab308', // yellow-500
    icon: '🕎',
    x: 42,
    y: 38
  },
  {
    id: 'table',
    title: 'Mesa dos Pães',
    significance: 'Comunhão',
    description: 'A riquíssima e indestrutível base de madeira da glória incorruptível coberta a ouro, onde 12 robustos e perfumados pães maciços eram assados e empilhados solenemente. Expostos perante a glória sagrada e renovados para não faltar.',
    theology: 'Testemunha imperturbavelmente a comunhão relacional sacrosanta com Cristo, o esmagado Pão da Vida encarnado. Representa no deserto o vigoroso fôlego espiritual e a indissociável consanguinidade aliancista das 12 inquebráveis tribos unidas, dispostas ininterruptamente perante a Face que tudo observa.',
    color: '#d97706', // amber-600
    icon: '🍞',
    x: 58,
    y: 38
  },
  {
    id: 'incense',
    title: 'Altar de Incenso',
    significance: 'Intercessão',
    description: 'Um suntuoso e diminuto altar dourado onde moídas fragrâncias aromáticas precisas em receita proibida ardiam sem cessar, tocadas apenas pelo fogo exterior. Levantava uma nuvem cortina constante de cheiro pungente sagrado diante da linha do intransponível véu rasgado na morte.',
    theology: 'Representa misteriosa e poderosamente as intensas orações lacrimosas dos santos subindo aos ares, e espelha a eterna e majestosa intercessão advocatícia e purificadora de sangue do próprio Cristo em ofício sacerdotal nos áureos céus implorando ao Pai pela sobrevivência dos que Nele creem.',
    color: '#9333ea', // purple-600
    icon: '💨',
    x: 50,
    y: 30
  },
  {
    id: 'ark',
    title: 'Arca da Aliança',
    significance: 'Glorificação',
    description: 'A intocável e letal urna folheada a puro ouro na escuridão fúnebre do Santo dos Santos. Resguardava as poeirentas gélidas Tábuas da Lei, o pote transmutado do místico maná caído e a florada e revivida vara morta e amendoada de Arao.',
    theology: 'A inquestionável morada temporal da formidável glória resplandecente Onipotente e presencial de Deus (A temível Shekinah densa e irascível). É a coroa, o epicentro e cume incontestável da jornada, o trono literal redimido pelo sangue aspergido na tampa reluzente das propiciações abissais.',
    color: '#f59e0b', // amber-500
    icon: '👑',
    x: 50,
    y: 18
  },
  {
    id: 'east_camp',
    title: 'Acampamento Leste',
    significance: 'O Estandarte do Leão',
    description: 'No fronte nobre do compasso onde o sol nasce. Judá, Issacar e Zebulom perfilados nas alvoradas guardando incansavelmente a gloriosa Porta frontal. População Total no agrupamento armado: 186.400 soldados de guerra.',
    theology: 'Sob o sangue real de Judá. Enverga como brasão um formidável Leão. Cimenta majestosamente a autoridade do governo real dinástico e reverbera os ecos atordoantes de que o Messias se levantaria não apenas como cordeiro, mas Supremo Vencedor das dores, trazendo nos ventos da redenção a esperança de todo um exército imbatível de resplandecente glória.',
    color: '#f59e0b', // amber-500
    icon: '🦁',
    x: 50,
    y: 97
  },
  {
    id: 'south_camp',
    title: 'Acampamento Sul',
    significance: 'O Estandarte do Homem',
    description: 'Nas trincheiras ardentes do deserto lateral de areia escaldante. Reúne Rúben errante, os destemidos de Simeão e a valente tropa letal de abnegados de Gade nos fardos. População Total no agrupamento armado: 151.450 abnegados combatentes.',
    theology: 'Sob o pendão melancólico primogênito de Rúben, alucina um letal e beligerante estandarte do rosto rústico de um Homem. Ilustra assustadoramente a fragilidade do caimento de barro e a terrível angústia rústica da mortal e depravada humanidade criada formidavelmente, mas destroçada e esmagadoramente faminta pela redenção curadora urgente da cruz sangrenta redentora.',
    color: '#94a3b8', // slate-400
    icon: '👤',
    x: 95,
    y: 50
  },
  {
    id: 'west_camp',
    title: 'Acampamento Oeste',
    significance: 'O Estandarte do Boi',
    description: 'Na pesada sombra de retaguarda, nos fundos dos abrigos tabernaculares. Reúne as fileiras de Efraim, dos irmãos de Manassés e dos cruéis e precisos fundibulários guerreiros ferozes de chumbo de Benjamim. População Total no agrupamento armado: 108.100 guerreiros colossais.',
    theology: 'Liderado sob os punhos fechados potentes da fileira armada de Efraim e envergando o forte e implacável Boi. Remete teologicamente aos exaustivos caldos de sangue do campo, na submissão ao suor amargurado do Servo Sofredor incansável e a dor atroz de abnegação de Cristo a ponto da dor mortal de Cruz pelo seu rebanho resgatado.',
    color: '#e11d48', // rose-600
    icon: '🐂',
    x: 50,
    y: 3
  },
  {
    id: 'north_camp',
    title: 'Acampamento Norte',
    significance: 'O Estandarte da Águia',
    description: 'Na escarpada encosta dos frios ventos gélidos da retaguarda cauda. Enlaça pesadamente as tribos inóspitas formidáveis bélicas de Dã coroados na lei do azeite, as correntes de Aser e agéis pernas das matas do território de Naftali. População Total no agrupamento armado: 157.600 sentinelas letais.',
    theology: 'Sob o rústico comando encoberto da tribo hostil de Dã. Tremula solene perante os ventos de areia o penetrante Estandarte da Águia caçadora de olhos infalíveis. Denota os juízos de olhar que cortam a alma desde os mais altos palácios às covas, alertando sobre o cortante, absoluto e majestoso julgamento divino sobre os corações perdidos.',
    color: '#2563eb', // blue-600
    icon: '🦅',
    x: 5,
    y: 50
  }
];

const TabernacleVisualExplorer: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = tabernacleData.find(item => item.id === selectedId);

  return (
    <div className="bg-slate-950 rounded-[40px] md:rounded-[60px] p-8 md:p-12 border border-indigo-500/20 shadow-2xl overflow-hidden">
      <div className="text-center mb-10">
        <span className="text-amber-500 font-black uppercase tracking-[0.5em] text-[10px] block italic mb-2">Explorador Visual Titan</span>
        <h3 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter">Mapa Interativo do Tabernáculo</h3>
        <p className="text-slate-400 text-sm mt-2 italic">Clique nos elementos para revelar os mistérios do Trono</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* SVG CONTAINER */}
        <div className="relative aspect-[3/4] max-w-md mx-auto w-full bg-slate-900/50 rounded-[40px] border border-white/5 p-4 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
            {/* Tribes Labels (Cardinal Points) */}
            <text x="50" y="99" textAnchor="middle" fill="#475569" fontSize="2" className="font-black uppercase tracking-widest">Leste (Judá)</text>
            <text x="50" y="2" textAnchor="middle" fill="#475569" fontSize="2" className="font-black uppercase tracking-widest">Oeste (Efraim)</text>
            <text x="2" y="50" textAnchor="middle" fill="#475569" fontSize="2" className="font-black uppercase tracking-widest" transform="rotate(-90, 2, 50)">Norte (Dã)</text>
            <text x="98" y="50" textAnchor="middle" fill="#475569" fontSize="2" className="font-black uppercase tracking-widest" transform="rotate(90, 98, 50)">Sul (Rúben)</text>

            {/* Outer Court Boundary */}
            <rect x="15" y="10" width="70" height="80" fill="none" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="2 2" />
            
            {/* Tabernacle Structure (Tent) */}
            <rect x="35" y="12" width="30" height="35" fill="#0f172a" stroke="#334155" strokeWidth="1" />
            
            {/* Holy Place vs Most Holy Place Divider (Veil) */}
            <line x1="35" y1="22" x2="65" y2="22" stroke="#475569" strokeWidth="1" strokeDasharray="1 1" />

            {/* Hotspots */}
            {tabernacleData.map((item) => (
              <g 
                key={item.id} 
                className="cursor-pointer group"
                onClick={() => setSelectedId(item.id)}
              >
                <motion.circle 
                  cx={item.x} 
                  cy={item.y} 
                  r="4" 
                  fill={item.color} 
                  fillOpacity="0.2"
                  initial={{ scale: 1 }}
                  animate={{ scale: selectedId === item.id ? [1, 1.5, 1] : 1 }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <circle 
                  cx={item.x} 
                  cy={item.y} 
                  r="2" 
                  fill={item.color} 
                  className="group-hover:r-3 transition-all"
                />
                <text 
                  x={item.x} 
                  y={item.y + 6} 
                  textAnchor="middle" 
                  fill="white" 
                  fontSize="2.5" 
                  className="font-black uppercase tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none"
                >
                  {item.title}
                </text>
              </g>
            ))}
          </svg>
          
          {/* Labels for Areas */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-600 uppercase tracking-widest">Santo dos Santos</div>
          <div className="absolute top-28 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-600 uppercase tracking-widest">Lugar Santo</div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-600 uppercase tracking-widest">Átrio Exterior</div>
        </div>

        {/* DETAILS PANEL */}
        <div className="min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {selectedItem ? (
              <motion.div 
                key={selectedItem.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-3xl flex items-center justify-center text-3xl shadow-2xl" style={{ backgroundColor: `${selectedItem.color}20`, border: `1px solid ${selectedItem.color}40` }}>
                    {selectedItem.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: selectedItem.color }}>{selectedItem.significance}</span>
                    <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none">{selectedItem.title}</h4>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-[30px] border border-white/10">
                  <p className="text-slate-300 text-lg italic leading-relaxed bible-text">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-indigo-400 font-black uppercase tracking-widest text-[9px] block">Revelação Teológica</span>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {selectedItem.theology}
                  </p>
                </div>

                <div className="pt-4">
                   <button 
                     onClick={() => setSelectedId(null)}
                     className="text-[9px] font-black text-slate-500 uppercase tracking-widest hover:text-white transition-colors"
                   >
                     ← Voltar ao Mapa
                   </button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center space-y-4"
              >
                <div className="w-20 h-20 bg-indigo-600/10 rounded-full flex items-center justify-center mx-auto text-indigo-500 text-3xl animate-pulse">
                  ✨
                </div>
                <h4 className="text-xl font-black text-white uppercase italic tracking-tighter">Selecione um Objeto</h4>
                <p className="text-slate-500 text-sm max-w-xs mx-auto italic">
                  Cada peça do mobiliário é um código profético que revela uma etapa da jornada de Cristo e do crente.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TabernacleVisualExplorer;
