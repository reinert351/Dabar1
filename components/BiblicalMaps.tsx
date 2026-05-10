import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation, Search, X, Compass, BookOpen, Map as MapIcon, Layers, Ruler, Play, Pause, Clock, Mountain, Info, Eye, Anchor, Footprints } from 'lucide-react';
import { BiblicalLocation, MapRoute, RoutePoint, BiblicalEra } from '../types';
import { BIBLICAL_LOCATIONS } from '../data/biblical_geography';
import { BIBLICAL_ROUTES } from '../data/biblical_routes';
import { BIBLICAL_TERRITORIES } from '../data/biblical_territories';
import { saveMapRoute, getMapRoutes } from '../services/database';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import Map, { NavigationControl, Marker as MapMarker, Source, Layer, ViewStateChangeEvent } from 'react-map-gl/maplibre';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

// Polyfill for MapLibre to avoid getSky error from Mapbox-compatible code
if (typeof window !== 'undefined' && maplibregl.Map && !(maplibregl.Map.prototype as any).getSky) {
  (maplibregl.Map.prototype as any).getSky = () => null;
}

// Haversine distance
function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; 
}

const eras: { id: BiblicalEra, label: string }[] = [
  { id: 'all', label: 'Todos os Períodos' },
  { id: 'patriarchs', label: 'Patriarcas' },
  { id: 'exodus', label: 'Êxodo & Juízes' },
  { id: 'kings', label: 'Reinos' },
  { id: 'exile', label: 'Exílio' },
  { id: 'jesus', label: 'Ministério de Jesus' },
  { id: 'church', label: 'Igreja Primitiva' }
];

const ElevationProfile: React.FC<{ route: MapRoute }> = ({ route }) => {
  const data = useMemo(() => {
    let cumulativeDist = 0;
    return route.points.map((p, i) => {
      if (i > 0) {
        const prev = route.points[i - 1];
        cumulativeDist += getDistanceFromLatLonInKm(prev.lat, prev.lng, p.lat, p.lng);
      }
      return {
        name: p.name,
        elevation: p.elevation || 0,
        distance: Math.round(cumulativeDist),
      };
    });
  }, [route]);

  const hasElevationData = route.points.some(p => p.elevation !== undefined);

  if (!hasElevationData) return null;

  return (
    <div className="bg-slate-950/50 border border-slate-700/50 rounded-2xl p-4 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Mountain className="w-3 h-3 text-amber-500" />
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Perfil de Elevação</p>
      </div>
      <div className="h-32 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorElev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis 
              dataKey="distance" 
              hide 
            />
            <YAxis 
              hide 
              domain={['auto', 'auto']}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px', fontSize: '10px' }}
              itemStyle={{ color: '#f59e0b', fontWeight: 'bold' }}
              labelStyle={{ display: 'none' }}
              formatter={(value: any) => [`${value}m`, 'Elevação']}
            />
            <Area 
              type="monotone" 
              dataKey="elevation" 
              stroke="#f59e0b" 
              fillOpacity={1} 
              fill="url(#colorElev)" 
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between mt-2 text-[8px] font-black text-slate-500 uppercase tracking-tighter italic">
        <span>Partida</span>
        <span>Destino</span>
      </div>
    </div>
  );
};

const parseVerseRef = (ref: string) => {
  const bookMap: Record<string, string> = {
    'gênesis': 'GEN', 'êxodo': 'EXO', 'levítico': 'LEV', 'números': 'NUM', 'deuteronômio': 'DEU',
    'josué': 'JOS', 'juízes': 'JDG', 'rute': 'RUT', '1 samuel': '1SA', '2 samuel': '2SA',
    '1 reis': '1KI', '2 reis': '2KI', '1 crônicas': '1CH', '2 crônicas': '2CH', 'esdras': 'EZR',
    'neemias': 'NEH', 'ester': 'EST', 'jó': 'JOB', 'salmos': 'PSA', 'provérbios': 'PRO',
    'eclesiastes': 'ECC', 'cantares': 'SNG', 'isaías': 'ISA', 'jeremias': 'JER', 'lamentações': 'LAM',
    'ezequiel': 'EZK', 'daniel': 'DAN', 'oséias': 'HOS', 'joel': 'JOL', 'amós': 'AMO',
    'obadias': 'OBA', 'jonas': 'JON', 'miquéias': 'MIC', 'naum': 'NAM', 'habacuque': 'HAB',
    'sofonias': 'ZEP', 'ageu': 'HAG', 'zacarias': 'ZEC', 'malaquias': 'MAL',
    'mateus': 'MAT', 'marcos': 'MRK', 'lucas': 'LUK', 'joão': 'JHN', 'atos': 'ACT',
    'romanos': 'ROM', '1 coríntios': '1CO', '2 coríntios': '2CO', 'gálatas': 'GAL', 'efésios': 'EPH',
    'filipenses': 'PHP', 'colossenses': 'COL', '1 tessalonicenses': '1TH', '2 tessalonicenses': '2TH',
    '1 timóteo': '1TI', '2 timóteo': '2TI', 'tito': 'TIT', 'filemom': 'PHM', 'hebreus': 'HEB',
    'tiago': 'JAS', '1 pedro': '1PE', '2 pedro': '2PE', '1 joão': '1JN', '2 joão': '2JN',
    '3 joão': '3JN', 'judas': 'JUD', 'apocalipse': 'REV', 'salmo': 'PSA'
  };

  const match = ref.toLowerCase().match(/^([\d\s]*[a-záéíóúâêôãõç]+.*?)\s+(\d+):(\d+)/i);
  if (match) {
    const bookName = match[1].trim();
    // Resolve basic name mapping
    let matchedKey = Object.keys(bookMap).find(k => bookName.includes(k) || k.includes(bookName));
    const bookId = matchedKey ? bookMap[matchedKey] : 'GEN';
    return { bookId: bookId.toUpperCase(), chapter: parseInt(match[2]), verse: parseInt(match[3]) };
  }
  return null;
};

const BiblicalMaps: React.FC<{ onClose: () => void; onNavigate?: (tab: string, meta?: any) => void }> = ({ onClose, onNavigate }) => {
  const [selectedLocation, setSelectedLocation] = useState<BiblicalLocation | RoutePoint | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEra, setSelectedEra] = useState<BiblicalEra>('all');
  const [showReconstruction, setShowReconstruction] = useState(false);
  const [currentRoute, setCurrentRoute] = useState<MapRoute | null>(null);
  const [savedRoutes, setSavedRoutes] = useState<MapRoute[]>([]);
  
  // Animation state for route tracing
  const [animationProgress, setAnimationProgress] = useState(0);
  const [isAnimatingRoute, setIsAnimatingRoute] = useState(false);
  const animationRef = useRef<number | null>(null);

  const startRouteAnimation = () => {
    setAnimationProgress(0);
    setIsAnimatingRoute(true);
    const startTime = performance.now();
    const duration = 3000; // 3 seconds for the whole route

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.max(0, Math.min(elapsed / duration, 1));
      setAnimationProgress(progress);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimatingRoute(false);
      }
    };

    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (currentRoute) {
      startRouteAnimation();
    } else {
      setAnimationProgress(0);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    }
  }, [currentRoute]);
  const [measureAnchor, setMeasureAnchor] = useState<{name: string, lat: number, lng: number} | null>(null);
  
  // Map View State
  const mapRef = useRef<any>(null);
  const [viewState, setViewState] = useState({
    longitude: 35.2137,
    latitude: 31.7683,
    zoom: 8,
    pitch: 0,
    bearing: 0
  });
  
  const [mapStyle, setMapStyle] = useState<'streets' | 'satellite' | 'terrain' | '3d'>('3d');
  
  useEffect(() => {
    const handleResize = () => {
      mapRef.current?.getMap().resize();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    seedAndLoadRoutes();
  }, []);

  const [tourState, setTourState] = useState<{ isPlaying: boolean; stopIndex: number }>({ isPlaying: false, stopIndex: 0 });
  const tourRef = useRef<NodeJS.Timeout | null>(null);

  const toggleTour = () => {
    if (!currentRoute) return;
    
    if (tourState.isPlaying) {
      setTourState(prev => ({ ...prev, isPlaying: false }));
      if (tourRef.current) clearTimeout(tourRef.current);
    } else {
      setTourState(prev => ({ ...prev, isPlaying: true }));
    }
  };

  useEffect(() => {
    if (tourState.isPlaying && currentRoute) {
      if (tourState.stopIndex >= currentRoute.points.length) {
        setTourState({ isPlaying: false, stopIndex: 0 });
        return;
      }
      
      const p = currentRoute.points[tourState.stopIndex];
      handleLocate(p);
      
      tourRef.current = setTimeout(() => {
        setTourState(prev => ({ ...prev, stopIndex: prev.stopIndex + 1 }));
      }, 5000);
    }
    
    return () => {
      if (tourRef.current) clearTimeout(tourRef.current);
    };
  }, [tourState.isPlaying, tourState.stopIndex, currentRoute]);

  useEffect(() => {
    // Reset tour on route change
    setTourState({ isPlaying: false, stopIndex: 0 });
    if (tourRef.current) clearTimeout(tourRef.current);
  }, [currentRoute]);

  const seedAndLoadRoutes = async () => {
    try {
      const existing = await getMapRoutes();
      
      // Force update system routes with local data (images, elevation, etc)
      for (const route of BIBLICAL_ROUTES) {
        await saveMapRoute(route);
      }
      
      const routes = await getMapRoutes();
      setSavedRoutes(routes);
    } catch (error) {
      console.error("Erro ao carregar rotas:", error);
    }
  };

  const getEnrichedImage = () => {
    if (!selectedLocation) return null;
    
    // 1. Try directly from the object
    if ((selectedLocation as any).imageUrl) return (selectedLocation as any).imageUrl;

    // 2. Try to find in BIBLICAL_LOCATIONS if it's a location marker
    if ('id' in selectedLocation) {
        const loc = BIBLICAL_LOCATIONS.find(l => l.id === (selectedLocation as BiblicalLocation).id);
        if (loc?.imageUrl) return loc.imageUrl;
    }

    // 3. Try to find in BIBLICAL_ROUTES if it's a route point
    if ('order' in selectedLocation && currentRoute) {
        const route = BIBLICAL_ROUTES.find(r => r.id === currentRoute.id);
        if (route) {
            const point = route.points.find(p => p.name === selectedLocation.name);
            if (point?.imageUrl) return point.imageUrl;
        }
    }

    return null;
  };

  const getEnrichedReconstruction = () => {
    if (!selectedLocation) return null;
    if ((selectedLocation as any).reconstructionUrl) return (selectedLocation as any).reconstructionUrl;

    if ('id' in selectedLocation) {
        const loc = BIBLICAL_LOCATIONS.find(l => l.id === (selectedLocation as BiblicalLocation).id);
        if (loc?.reconstructionUrl) return loc.reconstructionUrl;
    }
    return null;
  };

  const getEnrichedElevation = () => {
    if (!selectedLocation) return null;
    if ((selectedLocation as any).elevation !== undefined) return (selectedLocation as any).elevation;

    if ('id' in selectedLocation) {
        const loc = BIBLICAL_LOCATIONS.find(l => l.id === (selectedLocation as BiblicalLocation).id);
        if (loc?.elevation !== undefined) return loc.elevation;
    }

    if ('order' in selectedLocation && currentRoute) {
        const route = BIBLICAL_ROUTES.find(r => r.id === currentRoute.id);
        if (route) {
            const point = route.points.find(p => p.name === selectedLocation.name);
            if (point?.elevation !== undefined) return point.elevation;
        }
    }
    return null;
  };

  const getTravelTime = (km: number) => {
    const walkingDays = Math.ceil(km / 30); // ~30km per day for a traveler
    const camelDays = Math.ceil(km / 45);   // ~45km for a caravan
    return { walking: walkingDays, camel: camelDays };
  };

  const isTypological = (loc: any) => {
    const criticalIds = ['jerusalem', 'bethlehem', 'hebron', 'sinai', 'moriah'];
    const name = loc.name.toLowerCase();
    return criticalIds.includes(loc.id) || 
           name.includes('jerusalém') || 
           name.includes('belém') || 
           (loc.importance && (loc.importance.toLowerCase().includes('sacrifício') || loc.importance.toLowerCase().includes('messias')));
  };

  const getJerusalemDistance = () => {
    if (!selectedLocation) return null;
    const jerusalem = BIBLICAL_LOCATIONS.find(l => l.id === 'jerusalem');
    if (!jerusalem) return null;
    return getDistanceFromLatLonInKm(jerusalem.lat, jerusalem.lng, selectedLocation.lat, selectedLocation.lng).toFixed(1);
  };

  const getArchaeologicalStatus = () => {
    if (!selectedLocation) return "Verificado";
    const loc = BIBLICAL_LOCATIONS.find(l => 'id' in selectedLocation && l.id === (selectedLocation as any).id);
    if (!loc) return "Sítio de Passagem";
    
    // Logic for archaeological status based on importance
    if (loc.importance.includes('Centro') || loc.importance.includes('Capital')) return "Sítio Arqueológico Maior";
    if (loc.importance.includes('Nascimento') || loc.importance.includes('Infância')) return "Local de Preservação Sacra";
    return "Identificação Geográfica Confirmada";
  };

  const filteredLocations = useMemo(() => {
    return BIBLICAL_LOCATIONS.filter(loc => {
      const matchSearch = loc.name.toLowerCase().includes(searchTerm.toLowerCase()) || loc.biblicalName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchEra = selectedEra === 'all' || (loc.era && loc.era.includes(selectedEra));
      return matchSearch && matchEra;
    });
  }, [searchTerm, selectedEra]);

  const filteredRoutes = useMemo(() => {
    return savedRoutes.filter(route => {
      const matchSearch = route.title.toLowerCase().includes(searchTerm.toLowerCase()) || route.character.toLowerCase().includes(searchTerm.toLowerCase());
      const matchEra = selectedEra === 'all' || route.era === selectedEra;
      return matchSearch && matchEra;
    });
  }, [searchTerm, selectedEra, savedRoutes]);

  const filteredTerritories = useMemo(() => {
    if (selectedEra === 'all') return []; // Don't show territories on 'all' unless selected
    return BIBLICAL_TERRITORIES.filter(t => t.era === selectedEra);
  }, [selectedEra]);

  const handleLocate = (loc: BiblicalLocation | RoutePoint) => {
    setSelectedLocation(loc);
    setShowReconstruction(false);
    mapRef.current?.flyTo({
      center: [loc.lng, loc.lat],
      zoom: 11,
      duration: 1500
    });
  };

  const getMapboxStyle = () => {
    const isSatellite = mapStyle === 'satellite' || mapStyle === '3d';
    const tileUrl = isSatellite
      ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
      : mapStyle === 'terrain'
      ? 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}'
      : 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png';

    const style: any = {
      version: 8,
      sources: {
        'base-tiles': {
          type: 'raster',
          tiles: [tileUrl],
          tileSize: 256,
          attribution: isSatellite ? 'Esri' : '&copy; OpenStreetMap Contributors'
        }
      },
      layers: [
        {
          id: 'base-layer',
          type: 'raster',
          source: 'base-tiles',
          minzoom: 0,
          maxzoom: 22
        }
      ]
    };

    if (mapStyle === '3d') {
      style.sources['terrain-dem'] = {
        type: 'raster-dem',
        tiles: ['https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'],
        encoding: 'terrarium',
        tileSize: 256,
        maxzoom: 14
      };
      
      style.terrain = { source: 'terrain-dem', exaggeration: 2 };
      // Sky effect can also be added here for pitch
    }

    return style;
  };

  const routeGeoJSON = useMemo(() => {
    if (!currentRoute) return null;
    
    const allCoords = currentRoute.points.map(p => [p.lng, p.lat]);
    const pointCount = allCoords.length;
    
    if (pointCount < 2) return null;

    // Calculate how many segments to show based on progress
    const totalSegments = pointCount - 1;
    const progressSegments = animationProgress * totalSegments;
    const wholeSegments = Math.floor(progressSegments);
    const remainder = progressSegments - wholeSegments;

    const animatedCoords = allCoords.slice(0, wholeSegments + 1);

    // If there's a remainder, interpolate the next point
    if (remainder > 0 && wholeSegments < totalSegments) {
      const p1 = allCoords[wholeSegments];
      const p2 = allCoords[wholeSegments + 1];
      const interpolated = [
        p1[0] + (p2[0] - p1[0]) * remainder,
        p1[1] + (p2[1] - p1[1]) * remainder
      ];
      animatedCoords.push(interpolated);
    }

    return {
      type: 'FeatureCollection',
      features: [
        // The background "ghost" line
        {
          type: 'Feature',
          properties: { type: 'ghost' },
          geometry: {
            type: 'LineString',
            coordinates: allCoords
          }
        },
        // The active "traced" line
        {
          type: 'Feature',
          properties: { type: 'active' },
          geometry: {
            type: 'LineString',
            coordinates: animatedCoords
          }
        },
        // The "head" pulse point
        {
          type: 'Feature',
          properties: { type: 'head' },
          geometry: {
            type: 'Point',
            coordinates: animatedCoords[animatedCoords.length - 1]
          }
        }
      ]
    };
  }, [currentRoute, animationProgress]);
  
  const focusRoute = () => {
    if (!currentRoute || currentRoute.points.length === 0) return;
    const lats = currentRoute.points.map(p => p.lat);
    const lngs = currentRoute.points.map(p => p.lng);
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLng = Math.min(...lngs);
    const maxLng = Math.max(...lngs);
    
    // Add some padding
    mapRef.current?.fitBounds(
      [[minLng, minLat], [maxLng, maxLat]],
      { padding: { top: 100, bottom: 200, left: 100, right: 100 }, duration: 1500 }
    );
  };

  const getRouteDistances = (point: RoutePoint) => {
    if (!currentRoute) return null;
    let total = 0;
    let fromPrev = 0;
    
    for (let i = 0; i < currentRoute.points.length; i++) {
        const p = currentRoute.points[i];
        if (i > 0) {
            const prev = currentRoute.points[i - 1];
            const dist = getDistanceFromLatLonInKm(prev.lat, prev.lng, p.lat, p.lng);
            total += dist;
            if (p.order === point.order) {
                fromPrev = dist;
            }
        }
        if (p.order === point.order) {
            return { cumulative: total, fromPrev };
        }
    }
    return null;
  }

  const enable3D = () => {
    setMapStyle('3d');
    mapRef.current?.flyTo({
      pitch: 65,
      bearing: 30, // Turn slightly to make it look dramatic
      duration: 1500
    });
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900 flex flex-col md:flex-row overflow-hidden font-sans">
      {/* Sidebar */}
      <div className="w-full md:w-80 h-1/3 md:h-full bg-slate-800 border-r border-slate-700 flex flex-col z-[110] shadow-2xl relative">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Compass className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <h2 className="text-xl font-black text-white uppercase tracking-tighter italic leading-tight">Atlas</h2>
                <p className="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Cartografia 3D</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-700 rounded-full text-slate-400 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text"
              placeholder="Buscar no Atlas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all shadow-lg"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-4 custom-scrollbar">
          {currentRoute && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3 px-2">
                <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Expedição Ativa</p>
                <div className="flex items-center gap-2">
                   <button onClick={() => setCurrentRoute(null)} className="text-slate-500 hover:text-rose-500 text-[10px] font-bold tracking-tighter">FECHAR</button>
                </div>
              </div>
              <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-4 shadow-inner">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{currentRoute.title}</h4>
                    <p className="text-[10px] text-slate-500 uppercase font-black">{currentRoute.character}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={focusRoute}
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md shrink-0 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                      title="Focar no Percurso Inteiro"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={toggleTour}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md shrink-0 ${tourState.isPlaying ? 'bg-rose-600 text-white animate-pulse' : 'bg-amber-500 text-slate-900 hover:scale-110'}`}
                      title={tourState.isPlaying ? 'Pausar Tour' : 'Iniciar Tour Automático'}
                    >
                      {tourState.isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                    </button>
                  </div>
                </div>
                <ElevationProfile route={currentRoute} />
                <div className="space-y-1.5 max-h-[30vh] overflow-y-auto pr-1 custom-scrollbar">
                  {currentRoute.points.map(p => (
                    <button 
                      key={p.order}
                      onClick={() => handleLocate(p)}
                      className={`w-full text-left p-2 rounded-lg text-[11px] flex items-center gap-2 border border-transparent transition-all ${selectedLocation && 'name' in selectedLocation && (selectedLocation as RoutePoint).name === p.name ? 'bg-amber-500/10 border-amber-500/20 text-amber-500 font-bold px-3' : 'text-slate-400 hover:bg-slate-800'}`}
                    >
                      <span className="w-5 h-5 flex-shrink-0 bg-slate-800 rounded flex items-center justify-center font-bold text-[10px]">{p.order}</span>
                      <span className="truncate">{p.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {filteredRoutes.length > 0 && !currentRoute && (
            <div className="mb-6">
              <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-3 px-2 flex items-center gap-2">
                <MapIcon className="w-3 h-3" /> Mapas de Rotas
              </p>
              <div className="space-y-2">
                {filteredRoutes.map(route => (
                  <div key={route.id} className="group relative">
                    <button
                      onClick={() => {
                        setCurrentRoute(route);
                        if (route.points.length > 0) {
                           handleLocate(route.points[0]);
                        }
                      }}
                      className="w-full text-left p-4 bg-slate-900/50 hover:bg-amber-500/10 border border-slate-700/50 hover:border-amber-500/30 rounded-2xl transition-all shadow-lg"
                    >
                      <div className="flex items-center gap-3 mb-2">
                         <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                            <Compass className="w-4 h-4 text-amber-500" />
                         </div>
                         <h5 className="text-slate-200 font-bold text-xs mb-0.5 pr-6 leading-tight">{route.title}</h5>
                      </div>
                      <p className="text-[9px] text-slate-500 uppercase font-black ml-11">{route.character}</p>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 px-2">Locais em Destaque</p>
            <div className="space-y-2">
              {filteredLocations.map(loc => (
                <button
                  key={loc.id}
                  onClick={() => handleLocate(loc)}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-center gap-3 group border border-transparent ${
                    selectedLocation && 'id' in selectedLocation && (selectedLocation as BiblicalLocation).id === loc.id ? 'bg-amber-500 border-amber-600 shadow-lg shadow-amber-500/20' : 'hover:bg-slate-700/50 text-slate-400'
                  }`}
                >
                  <div className={`p-2 rounded-lg transition-colors ${selectedLocation && 'id' in selectedLocation && (selectedLocation as BiblicalLocation).id === loc.id ? 'bg-white/20' : 'bg-slate-900 group-hover:bg-slate-700'}`}>
                    <Navigation className={`w-4 h-4 ${selectedLocation && 'id' in selectedLocation && (selectedLocation as BiblicalLocation).id === loc.id ? 'text-slate-900' : 'text-amber-500'}`} />
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${selectedLocation && 'id' in selectedLocation && (selectedLocation as BiblicalLocation).id === loc.id ? 'text-slate-900' : 'text-slate-200'}`}>{loc.name}</p>
                    <p className={`text-[10px] uppercase font-black opacity-60 tracking-widest ${selectedLocation && 'id' in selectedLocation && (selectedLocation as BiblicalLocation).id === loc.id ? 'text-slate-800' : ''}`}>{loc.category}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map Content - MapLibre GL */}
      <div className="flex-1 relative bg-slate-800 z-0 overflow-hidden h-full w-full min-h-0 min-w-0">
        {/* Style Selector */}
        <div className="absolute top-4 right-4 z-[1000] bg-white p-1 rounded-lg shadow-xl flex gap-1 border border-slate-200">
           <button 
             onClick={() => setMapStyle('streets')}
             className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${mapStyle === 'streets' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
           >
             Ruas
           </button>
           <button 
             onClick={() => setMapStyle('terrain')}
             className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${mapStyle === 'terrain' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
           >
             Terreno
           </button>
           <button 
             onClick={() => setMapStyle('satellite')}
             className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors ${mapStyle === 'satellite' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
           >
             Satélite 2D
           </button>
           <button 
             onClick={enable3D}
             className={`px-3 py-1.5 text-xs font-bold flex items-center gap-1 rounded-md transition-colors ${mapStyle === '3d' ? 'bg-[#9e3b22] text-white shadow-inner' : 'text-slate-600 hover:bg-slate-100'}`}
           >
             <Layers className="w-3 h-3" />
             Satélite 3D
           </button>
        </div>

        <div className="w-full h-full">
          <Map
            ref={mapRef}
            {...viewState}
            onMove={evt => setViewState(evt.viewState)}
            mapStyle={getMapboxStyle()}
            minZoom={2}
            mapLib={maplibregl as any}
            style={{ width: '100%', height: '100%' }}
            trackResize={true}
            onLoad={(e) => {
              const map = e.target as any;
              // Double down on polyfill
              if (map && !map.getSky) {
                map.getSky = () => null;
              }
              if (map && !map.getTerrain) {
                map.getTerrain = () => null;
              }
              
              // Force multiple resizes to handle layout settling
              map.resize();
              setTimeout(() => map.resize(), 100);
              setTimeout(() => map.resize(), 500);
              setTimeout(() => map.resize(), 1000);
            }}
          >
          <NavigationControl position="bottom-right" />
          
          {/* Territories Rendering */}
          {filteredTerritories.map(t => (
             <Source 
               key={t.id} 
               id={`source-${t.id}`} 
               type="geojson" 
               data={{
                 type: 'Feature',
                 geometry: { type: 'Polygon', coordinates: t.coordinates },
                 properties: {}
               } as any}
             >
               <Layer 
                 id={`fill-${t.id}`} 
                 type="fill" 
                 paint={{
                   'fill-color': t.color,
                   'fill-opacity': 0.2
                 }} 
               />
               <Layer 
                 id={`line-${t.id}`} 
                 type="line" 
                 paint={{
                   'line-color': t.color,
                   'line-width': 2,
                   'line-dasharray': [2, 2]
                 }} 
               />
             </Source>
          ))}

          {/* Static Locations */}
          {!currentRoute && filteredLocations.map(loc => {
             const isSelected = selectedLocation && 'id' in selectedLocation && (selectedLocation as BiblicalLocation).id === loc.id;
             return (
               <MapMarker
                 key={loc.id}
                 longitude={loc.lng}
                 latitude={loc.lat}
                 onClick={e => {
                   e.originalEvent.stopPropagation();
                   handleLocate(loc);
                 }}
               >
                 <div className={`relative cursor-pointer group ${isSelected ? 'z-50' : 'z-10'}`}>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                       <div className={`w-3 h-3 rotate-45 transform origin-center border-2 border-white ${isSelected ? 'bg-rose-600 scale-125' : 'bg-slate-800'}`} />
                    </div>
                    <div className={`relative px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-800 shadow-md transform -translate-x-1/2 -translate-y-full mb-2 whitespace-nowrap transition-transform ${isSelected ? 'scale-110 shadow-xl border-amber-500' : 'group-hover:scale-105'}`}>
                      {loc.name}
                    </div>
                 </div>
               </MapMarker>
             )
          })}

          {/* Route Rendering */}
          {currentRoute && routeGeoJSON && (
            <>
              <Source id="route-source" type="geojson" data={routeGeoJSON as any}>
                <Layer 
                  id="route-ghost" 
                  type="line" 
                  filter={['==', ['get', 'type'], 'ghost']}
                  paint={{
                    'line-color': '#ea580c',
                    'line-width': 3,
                    'line-opacity': 0.15,
                    'line-dasharray': [2, 2]
                  }} 
                />
                <Layer 
                  id="route-active" 
                  type="line" 
                  filter={['==', ['get', 'type'], 'active']}
                  layout={{
                    'line-cap': 'round',
                    'line-join': 'round'
                  }}
                  paint={{
                    'line-color': '#f59e0b',
                    'line-width': 5
                  }} 
                />
                <Layer 
                  id="route-head" 
                  type="circle" 
                  filter={['==', ['get', 'type'], 'head']}
                  paint={{
                    'circle-radius': 6,
                    'circle-color': '#f59e0b',
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#fff'
                  }} 
                />
              </Source>
              
              {currentRoute.points.map(p => {
                 const isSelected = selectedLocation && 'order' in selectedLocation && (selectedLocation as RoutePoint).order === p.order;
                 
                 // Only show marker if animation has reached it
                 const totalSegments = currentRoute.points.length - 1;
                 const progressIndex = animationProgress * totalSegments;
                 if (p.order - 1 > progressIndex + 0.1 && !isSelected) return null;

                 return (
                 <MapMarker
                   key={p.order}
                   longitude={p.lng}
                   latitude={p.lat}
                   onClick={e => {
                     e.originalEvent.stopPropagation();
                     handleLocate(p);
                   }}
                 >
                   <motion.div 
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                     className="relative cursor-pointer group"
                   >
                      <div className={`w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-black shadow-md transition-all ${isSelected ? 'bg-rose-600 text-white scale-125 shadow-xl' : 'bg-[#f59e0b] text-white hover:scale-110'}`}>
                        {p.order}
                      </div>
                   </motion.div>
                 </MapMarker>
               )})}
            </>
          )}

        </Map>
      </div>

        {/* Era Timeline / Filter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[500] w-[90%] md:w-auto overflow-x-auto custom-scrollbar bg-white/90 backdrop-blur-md p-1.5 shadow-2xl rounded-2xl border border-slate-200 flex items-center gap-1">
           {eras.map(era => (
             <button
               key={era.id}
               onClick={() => setSelectedEra(era.id)}
               className={`shrink-0 px-3 py-2 font-bold text-[10px] uppercase tracking-widest whitespace-nowrap rounded-xl transition-all flex items-center gap-1.5 ${selectedEra === era.id ? 'bg-[#9e3b22] text-white shadow-md' : 'text-slate-600 hover:bg-slate-200/50'}`}
             >
               {era.id === 'all' ? <Layers className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
               {era.label}
             </button>
           ))}
        </div>

        {/* Selected Location Card */}
        <AnimatePresence>
          {selectedLocation && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="absolute bottom-20 md:bottom-24 left-4 right-4 md:left-auto md:right-6 md:w-[24rem] max-h-[calc(100vh-12rem)] bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-[32px] shadow-2xl z-[1000] flex flex-col overflow-hidden"
            >
              <div className="p-5 md:p-6 overflow-y-auto custom-scrollbar flex-1">
                  <div className="flex items-start justify-between mb-4 pr-8 text-left">
                    <div>
                      <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter leading-tight mb-1">
                        {currentRoute ? currentRoute.title : selectedLocation.name}
                      </h4>
                      <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest">
                        {currentRoute ? `Expedição de ${currentRoute.character}` : ('importance' in selectedLocation ? (selectedLocation as BiblicalLocation).importance : 'Vértice de Expedição')}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {currentRoute && (
                        <button 
                          onClick={startRouteAnimation}
                          className="p-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 rounded-full transition-all"
                          title="Replay Animação"
                        >
                          <Play className="w-4 h-4" />
                        </button>
                      )}
                      <button 
                        onClick={() => {
                          setSelectedLocation(null);
                          setShowReconstruction(false);
                        }}
                        className="p-2 hover:bg-white/10 rounded-full transition-all group"
                      >
                        <X className="w-5 h-5 text-slate-400 group-hover:text-white" />
                      </button>
                    </div>
                  </div>

                {/* Technical Dossier */}
                <div className="relative mb-6 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-950/40 backdrop-blur-md">
                  <div className="p-4 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.9)] animate-pulse" />
                        <span className="text-[10px] font-black text-amber-500 uppercase tracking-wider">Logística & Dados</span>
                      </div>
                      {isTypological(selectedLocation) && (
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-[7px] font-black text-rose-400 uppercase animate-bounce">
                          <Anchor className="w-2.5 h-2.5" />
                          Tipologia Messiânica
                        </div>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5">
                        <p className="text-[7px] font-black text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                          <Mountain className="w-2.5 h-2.5" /> Elevação
                        </p>
                        <p className="text-sm font-black text-white italic">
                          {getEnrichedElevation() !== null ? `${getEnrichedElevation()}m` : '±750m'}
                        </p>
                      </div>
                      <div className="bg-slate-900/60 p-3 rounded-xl border border-white/5">
                        <p className="text-[7px] font-black text-slate-500 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                          <MapIcon className="w-2.5 h-2.5" /> Jerusalém
                        </p>
                        <p className="text-sm font-black text-white italic">
                          {getJerusalemDistance()} km
                        </p>
                      </div>
                    </div>

                    {/* Travel Time Estimate */}
                    <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-3 mb-4">
                       <p className="text-[7px] font-black text-amber-500/70 uppercase tracking-widest mb-2">Estimativa de Jornada Antiga</p>
                       <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                             <Footprints className="w-4 h-4 text-slate-400" />
                             <div className="flex flex-col">
                                <span className="text-[10px] font-black text-white">{getTravelTime(parseFloat(getJerusalemDistance() || '0')).walking} dias</span>
                                <span className="text-[6px] font-bold text-slate-500 uppercase">A Pé</span>
                             </div>
                          </div>
                          <div className="w-px h-6 bg-white/5" />
                          <div className="flex items-center gap-2">
                             <div className="w-4 h-4 text-slate-400 flex items-center justify-center">🐪</div>
                             <div className="flex flex-col">
                                <span className="text-[10px] font-black text-white">{getTravelTime(parseFloat(getJerusalemDistance() || '0')).camel} dias</span>
                                <span className="text-[6px] font-bold text-slate-500 uppercase">Cáfila/Caravana</span>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-slate-900/40 p-3 rounded-xl border border-white/5">
                        <h5 className="text-[8px] font-black text-amber-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <BookOpen className="w-3 h-3" /> Relevância
                        </h5>
                        <p className="text-[11px] text-slate-300 leading-relaxed font-medium text-left">
                          {'importance' in selectedLocation ? (selectedLocation as BiblicalLocation).importance : 'Ponto geo-estratégico fundamental.'}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-black/40 p-2 rounded-lg border border-white/5">
                          <h5 className="text-[7px] font-black text-slate-500 uppercase tracking-widest mb-1 pl-1">Coordenadas</h5>
                          <div className="font-mono text-[9px] text-amber-500/80 tracking-tight text-center">
                            {selectedLocation.lat.toFixed(3)}°N, {selectedLocation.lng.toFixed(3)}°E
                          </div>
                        </div>
                        <div className="bg-black/40 p-2 rounded-lg border border-white/5">
                          <h5 className="text-[7px] font-black text-slate-500 uppercase tracking-widest mb-1 pl-1">Preservação</h5>
                          <div className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter italic text-center">
                            {getArchaeologicalStatus()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {currentRoute && 'order' in selectedLocation && (
                  (() => {
                    const dists = getRouteDistances(selectedLocation as RoutePoint);
                    if (dists && dists.cumulative > 0) {
                      return (
                        <div className="bg-slate-950 rounded-xl p-3 mb-4 flex gap-4 divide-x divide-slate-800 border border-slate-800">
                          <div className="flex-1">
                            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">Do ponto anterior</p>
                            <p className="text-amber-500 font-black text-sm">{dists.fromPrev.toFixed(1)} km</p>
                          </div>
                          <div className="flex-1 pl-4">
                            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">Caminho total</p>
                            <p className="text-slate-300 font-black text-sm">{dists.cumulative.toFixed(1)} km</p>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })()
                )}

                {!currentRoute && (
                  <div className="bg-slate-950 rounded-xl p-3 mb-4 border border-slate-800 flex items-center justify-between">
                    {measureAnchor ? (
                      <>
                        <div className="text-left">
                          <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mb-1">Distância de {measureAnchor.name}</p>
                          <p className="text-amber-500 font-black text-sm">
                            {getDistanceFromLatLonInKm(measureAnchor.lat, measureAnchor.lng, selectedLocation.lat, selectedLocation.lng).toFixed(1)} km
                          </p>
                        </div>
                        <button onClick={() => setMeasureAnchor(null)} className="p-2 hover:bg-slate-800 rounded-lg text-slate-500 transition-colors">
                          <X className="w-4 h-4" />
                        </button>
                      </>
                    ) : (
                      <button onClick={() => setMeasureAnchor({ name: selectedLocation.name, lat: selectedLocation.lat, lng: selectedLocation.lng })} className="w-full flex items-center justify-center gap-2 text-[10px] text-amber-500 font-black uppercase tracking-widest hover:text-amber-400 transition-colors">
                        <Ruler className="w-4 h-4" />
                        Medir a partir daqui
                      </button>
                    )}
                  </div>
                )}

                <div className="space-y-4 mb-8 text-left">
                  <p className="text-sm text-slate-400 leading-relaxed italic">"{selectedLocation.description}"</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedLocation.verses.map(v => (
                      <span 
                        key={v} 
                        className="px-2 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[9px] font-bold rounded-lg uppercase tracking-tight"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 mt-4">
                  {(selectedLocation.verses && selectedLocation.verses.length > 0) && (
                    <button 
                      onClick={() => {
                        if (onNavigate) {
                          const parsed = parseVerseRef(selectedLocation.verses[0]);
                          if (parsed) {
                            onNavigate('bible', parsed);
                          }
                        }
                      }}
                      className="flex-1 bg-amber-500 hover:bg-amber-400 h-14 rounded-2xl text-slate-950 font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95">
                      <BookOpen className="w-5 h-5" />
                      Sondar Escrituras
                    </button>
                  )}
                  <button 
                    onClick={() => setSelectedLocation(null)}
                    className="flex-1 h-14 bg-slate-800 hover:bg-slate-700 rounded-2xl text-white font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg border border-white/10 active:scale-95"
                  >
                    <X className="w-5 h-5" />
                    Fechar
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BiblicalMaps;

