import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, X, Volume2, FastForward, Settings2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SpotifyTTSPlayer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<{ title: string; subtitle: string; text: string } | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [estimatedTotal, setEstimatedTotal] = useState(0);
  const synth = window.speechSynthesis;
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const handlePlayTTS = (e: any) => {
      const { title, subtitle, text } = e.detail;
      setData({ title, subtitle, text });
      setIsOpen(true);
      startPlayback(text, rate);
    };

    window.addEventListener('dabar-play-tts', handlePlayTTS);
    return () => {
      window.removeEventListener('dabar-play-tts', handlePlayTTS);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [rate, volume]);

  const startPlayback = (text: string, currentRate: number, startFromChar: number = 0) => {
    if (synth.speaking) synth.cancel();
    if (timerRef.current) clearInterval(timerRef.current);
    
    // basic sanitization
    let cleanText = text
      .replace(/[*#_\[\]]/g, '')
      .replace(/<[^>]*>/g, '') // Remove HTML tags if any
      .replace(/[\u{1F300}-\u{1F9FF}]/gu, '') // Remove emojis
      .replace(/[^\x00-\x7F\u00C0-\u017F\s.,;:!?()\-–]/g, '')
      .trim();
    
    cleanText = cleanText.replace(/[–]/g, '-'); // Normalize en-dash to hyphen for regex
    if (!cleanText) return;

    // Slice text if starting from middle
    const speakingText = startFromChar > 0 ? cleanText.substring(startFromChar) : cleanText;

    // Expand Book Abbreviations
    const bookNames: Record<string, string> = {
      'GEN': 'Gênesis', 'EXO': 'Êxodo', 'LEV': 'Levítico', 'NUM': 'Números', 'DEU': 'Deuteronômio',
      'JOS': 'Josué', 'JDG': 'Juízes', 'RUT': 'Rute', '1SA': 'Primeira Samuel', '2SA': 'Segunda Samuel',
      '1KI': 'Primeira Reis', '2KI': 'Segunda Reis', '1CH': 'Primeira Crônicas', '2CH': 'Segunda Crônicas',
      'EZR': 'Esdras', 'NEH': 'Neemias', 'EST': 'Ester', 'JOB': 'Jó', 'PSA': 'Salmos',
      'PRO': 'Provérbios', 'ECC': 'Eclesiastes', 'SNG': 'Cânticos', 'ISA': 'Isaías', 'JER': 'Jeremias',
      'LAM': 'Lamentações', 'EZE': 'Ezequiel', 'DAN': 'Daniel', 'HOS': 'Oséias', 'JOE': 'Joel',
      'AMO': 'Amós', 'OBA': 'Obadias', 'JON': 'Jonas', 'MIC': 'Miquéias', 'NAH': 'Naum',
      'HAB': 'Habacuque', 'ZEP': 'Sofonias', 'HAG': 'Ageu', 'ZEC': 'Zacarias', 'MAL': 'Malaquias',
      'MAT': 'Mateus', 'MAR': 'Marcos', 'LUK': 'Lucas', 'JOH': 'João', 'ACT': 'Atos',
      'ROM': 'Romanos', '1CO': 'Primeira Coríntios', '2CO': 'Segunda Coríntios', 'GAL': 'Gálatas',
      'EPH': 'Efésios', 'FP': 'Filipenses', 'CL': 'Colossenses', '1TS': 'Primeira Tessalonicenses',
      '2TS': 'Segunda Tessalonicenses', '1TM': 'Primeira Timóteo', '2TM': 'Segunda Timóteo', 'TT': 'Tito',
      'FM': 'Filemom', 'HB': 'Hebreus', 'TG': 'Tiago', '1JO': 'Primeira João', '2JO': 'Segunda João', 
      '3JO': 'Terceira João', 'JD': 'Judas', 'AP': 'Apocalipse',
      'GN': 'Gênesis', 'EX': 'Êxodo', 'LV': 'Levítico', 'NM': ' Números', 'DT': 'Deuteronômio',
      'JS': 'Josué', 'JZ': 'Juízes', 'RT': 'Rute', '1SM': 'Primeira Samuel', '2SM': 'Segunda Samuel',
      '1RS': 'Primeira Reis', '2RS': 'Segunda Reis', '1CR': 'Primeira Crônicas', '2CR': 'Segunda Crônicas',
      'EZ': 'Esdras', 'NE': 'Neemias', 'ET': 'Ester', 'JO': 'Jó', 'SL': 'Salmos',
      'PV': 'Provérbios', 'EC': 'Eclesiastes', 'CT': 'Cânticos', 'IS': 'Isaías', 'JR': 'Jeremias',
      'LM': 'Lamentações', 'DN': 'Daniel', 'OS': 'Oséias', 'JL': 'Joel',
      'AM': 'Amós', 'OB': 'Obadias', 'JQ': 'Jonas', 'MQ': 'Miquéias', 'NA': 'Naum',
      'HC': 'Habacuque', 'SF': 'Sofonias', 'AG': 'Ageu', 'ZC': 'Zacarias', 'ML': 'Malaquias',
      'MT': 'Mateus', 'MC': 'Marcos', 'LC': 'Lucas', 'AT': 'Atos',
      'RM': 'Romanos', 'GL': 'Gálatas', 'EF': 'Efésios', 'FL': 'Filipenses'
    };

    let processedText = speakingText;
    Object.keys(bookNames).forEach(abbr => {
      const regex = new RegExp(`\\b${abbr}\\b`, 'gi');
      processedText = processedText.replace(regex, bookNames[abbr]);
    });

    const romans: Record<string, string> = {
        'XXI': 'vinte e um', 'XX': 'vinte', 'XIX': 'dezenove', 'XVIII': 'dezoito', 
        'XVII': 'dezessete', 'XVI': 'dezesseis', 'XV': 'quinze', 'XIV': 'quatorze', 
        'XIII': 'treze', 'XII': 'doze', 'XI': 'onze', 'X': 'dez', 'IX': 'nono', 'VIII': 'oitavo', 
        'VII': 'sétimo', 'VI': 'sexto', 'V': 'quinto', 'IV': 'quarto', 'III': 'terceiro', 'II': 'segundo', 'I': 'primeiro'
    };
    Object.keys(romans).forEach(r => {
        const reg = new RegExp(`\\b${r}\\b`, 'g');
        processedText = processedText.replace(reg, romans[r]);
    });

    processedText = processedText.replace(/\bc\.\s*(\d+)-(\d+)\s+a\.C\./gi, 'cerca de $1 a $2 antes de Cristo');
    processedText = processedText.replace(/\bc\.\s*(\d+)\s+a\.C\./gi, 'cerca de $1 antes de Cristo');
    processedText = processedText.replace(/\bv\.\s*(\d+)/gi, 'versículo $1');
    processedText = processedText.replace(/\bcap\.\s*(\d+)/gi, 'capítulo $1');
    processedText = processedText.replace(/\bséc\./gi, 'século');
    processedText = processedText.replace(/\ba\.C\./gi, 'antes de Cristo');
    processedText = processedText.replace(/\bd\.C\./gi, 'depois de Cristo');
    processedText = processedText.replace(/\ba\.C\b/gi, 'antes de Cristo');
    processedText = processedText.replace(/\bd\.C\b/gi, 'depois de Cristo');

    processedText = processedText.replace(/(\d+):(\d+)-(\d+)/g, 'capítulo $1, versículos $2 a $3');
    processedText = processedText.replace(/(\d+):(\d+)/g, 'capítulo $1, versículo $2');
    processedText = processedText.replace(/(\d+)-(\d+)/g, '$1 a $2');

    // Estimate total time based on original clean text length (for consistency)
    const estTotal = Math.ceil(cleanText.length / (16 * currentRate));
    setEstimatedTotal(estTotal);

    const utterance = new SpeechSynthesisUtterance(processedText);
    utterance.lang = 'pt-BR';
    utterance.rate = currentRate;
    utterance.volume = volume;

    const voices = synth.getVoices();
    const ptBrVoices = voices.filter(v => v.lang.includes('pt-BR'));
    const preferred = ['Google', 'Natural', 'Premium', 'Luciana', 'Daniela', 'Heloisa', 'Maria'];
    let selected = ptBrVoices.find(v => preferred.some(p => v.name.includes(p)));
    if (!selected) selected = ptBrVoices.find(v => v.name.toLowerCase().includes('microsoft'));
    if (!selected) selected = ptBrVoices[0];
    if (selected) utterance.voice = selected;

    let totalOffset = startFromChar;

    utterance.onstart = () => {
      setIsPlaying(true);
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        // Heartbeat fix for Chrome
        if (synth.speaking && !synth.paused) {
          synth.pause();
          synth.resume();
        }
        
        setCurrentTime(prev => Math.min(prev + 1, estTotal));
      }, 1000);
    };

    utterance.onboundary = (e) => {
      const currentPos = totalOffset + e.charIndex;
      const percentage = (currentPos / cleanText.length) * 100;
      setProgress(Math.min(percentage, 100));
      
      const syncTime = Math.floor((currentPos / cleanText.length) * estTotal);
      setCurrentTime(syncTime);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setProgress(100);
      setCurrentTime(estTotal);
      if (timerRef.current) clearInterval(timerRef.current);
    };

    utterance.onerror = (e) => {
      if (e.error !== 'canceled') {
        setIsPlaying(false);
        if (timerRef.current) clearInterval(timerRef.current);
      }
    };

    utteranceRef.current = utterance;
    synth.speak(utterance);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (!utteranceRef.current || !data) return;
    
    if (isPlaying) {
      synth.pause();
      setIsPlaying(false);
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      if (synth.paused) {
        synth.resume();
        timerRef.current = setInterval(() => {
          setCurrentTime(prev => prev + 1);
        }, 1000);
      } else {
        synth.speak(utteranceRef.current);
      }
      setIsPlaying(true);
    }
  };

  const toggleRate = () => {
    const newRate = rate >= 2 ? 1 : rate + 0.25;
    setRate(newRate);
    if (data && isPlaying) {
        startPlayback(data.text, newRate);
    } else if (data && utteranceRef.current) {
        utteranceRef.current.rate = newRate;
    }
  };

  const handleVolumeChange = (newVal: number) => {
    setVolume(newVal);
    if (utteranceRef.current) {
      utteranceRef.current.volume = newVal;
    }
  };

  const closePlayer = () => {
    synth.cancel();
    if (timerRef.current) clearInterval(timerRef.current);
    setIsOpen(false);
    setIsPlaying(false);
    setData(null);
    setProgress(0);
    setCurrentTime(0);
  };

  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[95%] max-w-[500px]"
      >
        <div className="bg-slate-900 border border-slate-700 rounded-[32px] shadow-2xl p-5 overflow-hidden relative backdrop-blur-2xl group">
          {/* Progress bar background */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-800">
             <div 
               className="h-full bg-indigo-500 transition-all duration-300"
               style={{ width: `${progress}%` }}
             />
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-4">
              {/* Visual Cover/Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-[24px] flex items-center justify-center shrink-0 shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                  {isPlaying ? (
                      <div className="flex items-end gap-1 h-8">
                         <motion.div animate={{ height: ['40%', '100%', '40%'] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 bg-white rounded-full" />
                         <motion.div animate={{ height: ['80%', '40%', '80%'] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-2 bg-white rounded-full" />
                         <motion.div animate={{ height: ['60%', '100%', '60%'] }} transition={{ repeat: Infinity, duration: 1.0 }} className="w-2 bg-white rounded-full" />
                      </div>
                  ) : (
                      <Volume2 className="w-8 h-8 text-white" />
                  )}
              </div>

              {/* Title & Info */}
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-black uppercase tracking-tighter text-base truncate leading-tight">{data.title}</h4>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest truncate">{data.subtitle}</p>
                <div className="flex items-center gap-2 mt-1 text-[10px] font-mono text-indigo-400/80">
                  <span>{formatTime(currentTime)}</span>
                  <span>/</span>
                  <span>{formatTime(estimatedTotal)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2 shrink-0">
                 <button 
                   onClick={toggleRate}
                   className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-all"
                   title="Velocidade"
                 >
                   <span className="text-[10px] font-black">{rate}x</span>
                 </button>
                 <button 
                   onClick={togglePlay}
                   className="w-14 h-14 bg-indigo-500 text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-xl hover:bg-indigo-400"
                 >
                   {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 ml-1 fill-white" />}
                 </button>
                 <button 
                   onClick={closePlayer}
                   className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-800 rounded-full transition-all"
                 >
                   <X className="w-6 h-6" />
                 </button>
              </div>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-3 px-2 py-2 bg-slate-800/50 rounded-2xl">
              <Volume2 className="w-4 h-4 text-slate-500 shrink-0" />
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.1" 
                value={volume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className="flex-1 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <span className="text-[10px] font-mono text-slate-400 w-8">{Math.round(volume * 100)}%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SpotifyTTSPlayer;
