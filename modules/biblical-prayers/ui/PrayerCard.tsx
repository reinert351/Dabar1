import React from 'react';
import { BiblicalPrayer } from '../domain/types';

interface PrayerCardProps {
  prayer: BiblicalPrayer;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

const typeLabels: Record<string, string> = {
  intercession: 'Intercessão',
  confession: 'Confissão',
  gratitude: 'Gratidão',
  sovereignty: 'Soberania',
  petition: 'Petição',
  warfare: 'Batalha Espiritual',
  lament: 'Lamento'
};

const PrayerCard: React.FC<PrayerCardProps> = ({ prayer, onSelect, isSelected }) => {
  const typeColors: Record<string, string> = {
    intercession: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
    confession: 'text-rose-500 bg-rose-50 dark:bg-rose-900/20',
    gratitude: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20',
    sovereignty: 'text-amber-500 bg-amber-50 dark:bg-amber-900/20',
    petition: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20',
    warfare: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20',
    lament: 'text-slate-500 bg-slate-50 dark:bg-slate-900/20'
  };

  return (
    <div 
      className={`bg-white dark:bg-slate-800 rounded-[35px] border-2 transition-all cursor-pointer overflow-hidden ${isSelected ? 'border-indigo-500 shadow-xl scale-[1.02]' : 'border-transparent shadow-sm hover:border-slate-200 dark:hover:border-slate-700'}`}
      onClick={() => onSelect(prayer.id)}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${typeColors[prayer.type] || 'bg-slate-100 text-slate-500'}`}>
            {typeLabels[prayer.type] || prayer.type}
          </span>
          <span className="text-[10px] font-bold text-slate-300 uppercase italic">{prayer.ref}</span>
        </div>
        <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter leading-tight">{prayer.title}</h3>
        <p className="text-[10px] font-black text-indigo-500 mt-2 uppercase tracking-widest">{prayer.author}</p>
      </div>
    </div>
  );
};

export default PrayerCard;