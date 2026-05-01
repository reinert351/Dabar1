import React, { useState, useEffect, useRef } from 'react';
import { TeiaNode, TeiaEdge, TeiaNodeType } from '../types';

interface GraphCanvasProps {
  nodes: TeiaNode[];
  edges: TeiaEdge[];
  onNodeClick: (node: TeiaNode) => void;
  theme: 'light' | 'dark' | 'sepia' | 'midnight' | 'ocean' | 'forest' | 'gold';
}

const GraphCanvas: React.FC<GraphCanvasProps> = ({ nodes, edges, onNodeClick, theme }) => {
  const containerRef = useRef<SVGSVGElement>(null);
  const [localNodes, setLocalNodes] = useState<TeiaNode[]>([]);
  const [transform, setTransform] = useState({ x: 0, y: 0, k: 1 });
  const [isDragging, setIsDragging] = useState<{ id: string, startX: number, startY: number } | null>(null);
  const [isPanning, setIsPanning] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  useEffect(() => {
    const existingIds = new Set(localNodes.map(n => n.id));
    const newEntries = nodes
      .filter(n => !existingIds.has(n.id))
      .map(n => ({
        ...n,
        x: n.x ?? 400 + (Math.random() - 0.5) * 600,
        y: n.y ?? 300 + (Math.random() - 0.5) * 400,
        vx: 0,
        vy: 0
      }));
    
    if (newEntries.length > 0) {
      setLocalNodes(prev => [...prev, ...newEntries]);
    }
  }, [nodes]);

  useEffect(() => {
    if (localNodes.length === 0) return;
    
    const interval = setInterval(() => {
      setLocalNodes(prev => {
        const newNodes = prev.map(n => ({ ...n }));
        const k = 0.05;
        const rep = 2500;
        const friction = 0.8;

        newNodes.forEach((n1, i) => {
          if (isDragging?.id === n1.id) return;
          
          let fx = 0, fy = 0;

          // Repulsão (Evita sobreposição)
          newNodes.forEach((n2, j) => {
            if (i === j) return;
            const dx = n1.x! - n2.x!;
            const dy = n1.y! - n2.y!;
            const distSq = dx * dx + dy * dy + 10;
            const force = rep / distSq;
            fx += dx * force;
            fy += dy * force;
          });

          // Atração (Arestas/Conexões)
          edges.forEach(e => {
            if (e.from === n1.id || e.to === n1.id) {
              const otherId = e.from === n1.id ? e.to : e.from;
              const other = newNodes.find(n => n.id === otherId);
              if (other) {
                fx += (other.x! - n1.x!) * k;
                fy += (other.y! - n1.y!) * k;
              }
            }
          });

          // Gravidade Central
          fx += (400 - n1.x!) * 0.005;
          fy += (300 - n1.y!) * 0.005;

          n1.vx = (n1.vx || 0 + fx) * friction;
          n1.vy = (n1.vy || 0 + fy) * friction;
          n1.x! += n1.vx;
          n1.y! += n1.vy;
        });
        return newNodes;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [edges, isDragging]);

  const handleWheel = (e: React.WheelEvent) => {
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const newK = Math.min(Math.max(transform.k * delta, 0.1), 4);
    setTransform(prev => ({ ...prev, k: newK }));
  };

  const handleMouseDown = (e: React.MouseEvent, nodeId?: string) => {
    if (nodeId) {
      setIsDragging({ id: nodeId, startX: e.clientX, startY: e.clientY });
      setSelectedNodeId(nodeId);
    } else {
      setIsPanning(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && containerRef.current) {
      const CTM = containerRef.current.getScreenCTM();
      if (CTM) {
        const x = (e.clientX - CTM.e) / CTM.a;
        const y = (e.clientY - CTM.f) / CTM.d;
        setLocalNodes(prev => prev.map(n => n.id === isDragging.id ? { ...n, x, y, vx: 0, vy: 0 } : n));
      }
    } else if (isPanning) {
      setTransform(prev => ({ ...prev, x: prev.x + e.movementX, y: prev.y + e.movementY }));
    }
  };

  const getNodeColor = (type: TeiaNodeType) => {
    if (theme === 'gold') return '#d4af37';
    switch(type) {
      case 'person': return '#f59e0b'; // Amber
      case 'king': return '#fb923c'; // Orange
      case 'doctrine': return '#10b981'; // Emerald
      case 'bible_ref': return '#8b5cf6'; // Violet
      case 'theme': return '#3b82f6'; // Blue
      case 'event': return '#f43f5e'; // Rose
      case 'prophecy': return '#ec4899'; // Pink
      case 'user_sermon': return '#6366f1'; // Indigo
      default: return '#94a3b8'; // Slate
    }
  };

  return (
    <div className="relative w-full h-[700px] overflow-hidden rounded-[40px] md:rounded-[60px] bg-slate-950 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] border border-slate-800" onWheel={handleWheel}>
      {/* Grade de Background Estilo Sci-Fi */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(${theme === 'gold' ? '#d4af37' : '#4f46e5'} 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }}></div>
      
      <svg 
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={e => handleMouseDown(e)}
        onMouseMove={handleMouseMove}
        onMouseUp={() => { setIsDragging(null); setIsPanning(false); }}
        onMouseLeave={() => { setIsDragging(null); setIsPanning(false); }}
      >
        <defs>
          <filter id="neonGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={theme === 'gold' ? "#d4af37" : "#4f46e5"} stopOpacity="0.2" />
            <stop offset="50%" stopColor={theme === 'gold' ? "#f59e0b" : "#818cf8"} stopOpacity="0.5" />
            <stop offset="100%" stopColor={theme === 'gold' ? "#d4af37" : "#4f46e5"} stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <g transform={`translate(${transform.x},${transform.y}) scale(${transform.k})`}>
          {/* Conexões (Edges) */}
          {edges.map(e => {
            const from = localNodes.find(n => n.id === e.from);
            const to = localNodes.find(n => n.id === e.to);
            if (!from || !to) return null;
            const isRelated = selectedNodeId === from.id || selectedNodeId === to.id;
            return (
              <line 
                key={e.id}
                x1={from.x} y1={from.y} x2={to.x} y2={to.y} 
                stroke={isRelated ? (theme === 'gold' ? "#d4af37" : "#6366f1") : "url(#edgeGradient)"}
                strokeWidth={isRelated ? 2 : 1}
                strokeDasharray={isRelated ? "none" : "5,5"}
                className="transition-all duration-700"
              />
            );
          })}

          {/* Nós (Nodes) */}
          {localNodes.map(n => {
            const isSelected = selectedNodeId === n.id;
            const isHovered = hoveredNode === n.id;
            const color = getNodeColor(n.type);
            
            return (
              <g 
                key={n.id} 
                transform={`translate(${n.x},${n.y})`} 
                className="cursor-pointer"
                onMouseDown={e => { e.stopPropagation(); handleMouseDown(e, n.id); }}
                onMouseEnter={() => setHoveredNode(n.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => onNodeClick(n)}
              >
                {/* Aura de brilho para nós importantes ou selecionados */}
                {(isSelected || n.score > 80) && (
                  <circle r={isSelected ? 45 : 35} fill={color} fillOpacity="0.15" filter="url(#neonGlow)" />
                )}
                
                {/* Círculo Principal */}
                <circle 
                  r={isSelected ? 30 : 22} 
                  fill="#020617" 
                  stroke={color} 
                  strokeWidth={isSelected ? 4 : 2} 
                  className="transition-all duration-300"
                />
                
                {/* Texto Curto (Acrônimo ou Início) */}
                <text 
                  textAnchor="middle" 
                  y="5" 
                  className="text-[8px] font-black fill-white uppercase tracking-tighter pointer-events-none select-none"
                >
                  {n.title.substring(0, 3)}
                </text>

                {/* Label Expansível */}
                {(isSelected || isHovered) && (
                  <g transform="translate(0, 45)">
                    <rect x="-60" y="-12" width="120" height="24" rx="12" fill={color} className="animate-in fade-in zoom-in-90 duration-200" />
                    <text textAnchor="middle" y="4" className="text-[9px] font-black fill-slate-950 uppercase tracking-widest pointer-events-none">
                      {n.title}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </g>
      </svg>

      {/* Mini Mapa de Status */}
      <div className="absolute top-8 left-8 flex flex-col gap-4">
         <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-4">
            <div className="flex -space-x-2">
               <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
               <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]"></div>
               <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]"></div>
            </div>
            <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">Neural Engine v3</span>
         </div>
      </div>

      {/* Controles de Navegação */}
      <div className="absolute bottom-8 right-8 flex gap-2">
         <button onClick={() => setTransform(prev => ({ ...prev, k: prev.k * 1.2 }))} className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white transition-all active:scale-90">+</button>
         <button onClick={() => setTransform(prev => ({ ...prev, k: prev.k * 0.8 }))} className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white transition-all active:scale-90">-</button>
         <button onClick={() => setTransform({ x: 0, y: 0, k: 1 })} className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white transition-all active:scale-90">⟲</button>
      </div>
    </div>
  );
};

export default GraphCanvas;
