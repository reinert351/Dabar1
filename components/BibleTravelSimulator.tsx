import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Location {
  id: string;
  name: string;
  x: number;
  y: number;
  description: string;
}

interface Journey {
  id: string;
  name: string;
  color: string;
  points: string[]; // IDs of locations
  description: string;
}

const LOCATIONS: Location[] = [
  { id: 'ur', name: 'Ur', x: 850, y: 750, description: 'Cidade natal de Abraão na Caldeia.' },
  { id: 'haran', name: 'Harã', x: 650, y: 450, description: 'Onde Abraão parou antes de entrar em Canaã.' },
  { id: 'shechem', name: 'Siquém', x: 550, y: 650, description: 'Primeiro altar de Abraão em Canaã.' },
  { id: 'goshen', name: 'Gozen', x: 350, y: 850, description: 'Região do Egito onde os israelitas habitaram.' },
  { id: 'sinai', name: 'Monte Sinai', x: 450, y: 950, description: 'Onde Moisés recebeu a Lei.' },
  { id: 'kadesh', name: 'Cades-Barneia', x: 500, y: 850, description: 'Base dos israelitas no deserto.' },
  { id: 'jericho', name: 'Jericó', x: 560, y: 680, description: 'Primeira cidade conquistada por Josué.' },
  { id: 'jerusalem', name: 'Jerusalém', x: 550, y: 700, description: 'Cidade Santa, capital do Reino.' },
  { id: 'antioch', name: 'Antioquia', x: 600, y: 400, description: 'Base missionária de Paulo.' },
  { id: 'ephesus', name: 'Éfeso', x: 300, y: 400, description: 'Importante centro cristão na Ásia Menor.' },
  { id: 'corinth', name: 'Corinto', x: 150, y: 450, description: 'Cidade grega visitada por Paulo.' },
  { id: 'rome', name: 'Roma', x: 50, y: 200, description: 'Destino final de Paulo.' },
  { id: 'damascus', name: 'Damasco', x: 620, y: 580, description: 'Onde Paulo teve sua conversão.' },
  { id: 'nazareth', name: 'Nazaré', x: 560, y: 620, description: 'Cidade onde Jesus cresceu.' },
  { id: 'capernaum', name: 'Cafarnaum', x: 580, y: 610, description: 'Centro do ministério de Jesus na Galileia.' },
];

const JOURNEYS: Journey[] = [
  {
    id: 'abraham',
    name: 'Jornada de Abraão',
    color: '#F59E0B',
    points: ['ur', 'haran', 'shechem'],
    description: 'A chamada de Deus para Abraão sair de sua terra para a Terra Prometida.'
  },
  {
    id: 'exodus',
    name: 'O Êxodo',
    color: '#EF4444',
    points: ['goshen', 'sinai', 'kadesh', 'jericho'],
    description: 'A libertação do Egito e os 40 anos no deserto rumo a Canaã.'
  },
  {
    id: 'paul_1',
    name: '1ª Viagem de Paulo',
    color: '#3B82F6',
    points: ['antioch', 'ephesus', 'antioch'],
    description: 'Paulo e Barnabé pregando na Ásia Menor.'
  },
  {
    id: 'jesus_ministry',
    name: 'Ministério de Jesus',
    color: '#10B981',
    points: ['nazareth', 'capernaum', 'jerusalem'],
    description: 'Os principais pontos do ministério terreno do Messias.'
  }
];

const BibleTravelSimulator: React.FC = () => {
  const [selectedJourney, setSelectedJourney] = useState<Journey | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);
  const [animationStep, setAnimationStep] = useState(0);

  const activePoints = useMemo(() => {
    if (!selectedJourney) return [];
    return selectedJourney.points.map(id => LOCATIONS.find(l => l.id === id)).filter(Boolean) as Location[];
  }, [selectedJourney]);

  const handleJourneySelect = (journey: Journey) => {
    if (selectedJourney?.id === journey.id) {
      setSelectedJourney(null);
      setAnimationStep(0);
    } else {
      setSelectedJourney(journey);
      setAnimationStep(0);
      // Trigger animation sequence
      let step = 0;
      const interval = setInterval(() => {
        step++;
        setAnimationStep(step);
        if (step >= journey.points.length) clearInterval(interval);
      }, 800);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-950 text-white overflow-hidden font-sans">
      {/* Header */}
      <div className="p-6 border-b border-white/10 bg-slate-900/50 backdrop-blur-md z-20">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-indigo-400">Simulador de Viagens Bíblicas</h2>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Cartografia Dinâmica e Fluxo Histórico</p>
          </div>
          <div className="flex gap-2">
            {JOURNEYS.map(j => (
              <button
                key={j.id}
                onClick={() => handleJourneySelect(j)}
                className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                  selectedJourney?.id === j.id 
                    ? 'bg-white text-slate-950 border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                    : 'bg-slate-800 text-slate-400 border-white/5 hover:border-white/20'
                }`}
              >
                {j.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 relative overflow-hidden">
        {/* Map Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Simple stylized landmasses */}
            <path d="M 0,200 Q 100,150 200,250 T 400,200 T 600,300 T 800,250 T 1000,350 L 1000,1000 L 0,1000 Z" fill="rgba(255,255,255,0.05)" />
          </svg>
        </div>

        {/* Interactive Map Layer */}
        <div className="absolute inset-0 cursor-crosshair">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
            {/* Draw Paths */}
            {selectedJourney && (
              <motion.path
                d={`M ${activePoints.map(p => `${p.x},${p.y}`).join(' L ')}`}
                fill="none"
                stroke={selectedJourney.color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]"
              />
            )}

            {/* Draw Locations */}
            {LOCATIONS.map(loc => {
              const isPartOfJourney = selectedJourney?.points.includes(loc.id);
              const isVisible = !selectedJourney || isPartOfJourney;
              
              return (
                <g 
                  key={loc.id} 
                  onMouseEnter={() => setHoveredLocation(loc)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  className="cursor-pointer group"
                >
                  <motion.circle
                    cx={loc.x}
                    cy={loc.y}
                    r={hoveredLocation?.id === loc.id ? 8 : 4}
                    fill={isPartOfJourney ? selectedJourney?.color : '#475569'}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: isVisible ? 1 : 0.5,
                      opacity: isVisible ? 1 : 0.2
                    }}
                    className="transition-all duration-300"
                  />
                  {isVisible && (
                    <text
                      x={loc.x}
                      y={loc.y - 12}
                      textAnchor="middle"
                      className={`text-[10px] font-black uppercase tracking-tighter fill-current ${
                        isPartOfJourney ? 'text-white' : 'text-slate-500'
                      } pointer-events-none`}
                    >
                      {loc.name}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Info Overlays */}
        <AnimatePresence>
          {hoveredLocation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-6 rounded-[30px] shadow-2xl max-w-md z-30"
            >
              <h4 className="text-xl font-black italic uppercase tracking-tighter text-indigo-400 mb-2">{hoveredLocation.name}</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{hoveredLocation.description}</p>
            </motion.div>
          )}

          {selectedJourney && !hoveredLocation && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute top-32 left-10 bg-slate-900/80 backdrop-blur-lg border border-white/10 p-8 rounded-[40px] shadow-2xl max-w-xs z-30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedJourney.color }}></div>
                <h4 className="text-2xl font-black italic uppercase tracking-tighter text-white">{selectedJourney.name}</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">{selectedJourney.description}</p>
              
              <div className="space-y-4">
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-500 block">Itinerário</span>
                {activePoints.map((p, i) => (
                  <div key={`${p.id}-${i}`} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-black text-slate-500 border border-white/5">
                      {i + 1}
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-widest ${i < animationStep ? 'text-indigo-400' : 'text-slate-600'}`}>
                      {p.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Legend */}
        <div className="absolute bottom-10 right-10 flex flex-col gap-2 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/5">
          <span className="text-[8px] font-black uppercase tracking-widest text-slate-500 mb-2">Legenda Cartográfica</span>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-slate-600"></div>
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Localidade Bíblica</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Ponto de Interesse</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BibleTravelSimulator;
