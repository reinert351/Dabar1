
import React, { useState, useEffect } from 'react';
import { getSermons, saveSermon, deleteSermon, clearAllSermons } from '../services/database';
import { Sermon, SermonType, UserState, SermonBlock, CaptureTarget } from '../types';
import SermonEditor from './SermonEditor';
import PulpitMode from './PulpitMode';
import SermonGenerator from './SermonGenerator';
import { buildOfflineOutline } from '../engine/homiletic/builder';
import { outlineToSermonBlocks } from '../engine/homiletic/toBlocks';

interface SermonStudioProps {
  userState: UserState;
  captureTarget: CaptureTarget | null;
  setCaptureTarget: (target: CaptureTarget | null) => void;
  activeSermonId: string | null;
  setActiveSermonId: (id: string | null) => void;
  filter: SermonType | 'all';
  setFilter: (filter: SermonType | 'all') => void;
  setUserState: any;
}

const SermonStudio: React.FC<SermonStudioProps> = ({ 
  userState, captureTarget, setCaptureTarget, activeSermonId, setActiveSermonId,
  filter, setFilter, setUserState
}: any) => {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [isPulpitMode, setIsPulpitMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showGenerator, setShowGenerator] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<{ id: string | 'all', title: string } | null>(null);

  const loadSermons = React.useCallback(async () => {
    const data = await getSermons();
    setSermons(data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
  }, []);

  useEffect(() => { loadSermons(); }, [loadSermons]);
  useEffect(() => {
    const handleSync = () => loadSermons();
    window.addEventListener('dabar-sync', handleSync);
    return () => window.removeEventListener('dabar-sync', handleSync);
  }, [loadSermons]);

  const createNewSermon = (type: SermonType) => {
    const newSermon: Sermon = {
      id: `sermon_${Date.now()}`,
      title: 'Novo Projeto Teológico',
      type, date: new Date().toISOString(), tags: [], status: 'draft', version: 1,
      blocks: [{ id: 'b1', type: 'text-base', title: 'Texto Áureo', content: '' }]
    };
    saveSermon(newSermon).then(() => {
      setActiveSermonId(newSermon.id);
      loadSermons();
    });
  };

  const activeSermon = sermons.find(s => s.id === activeSermonId);

  const renderDeleteModal = () => {
    if (!deleteConfirm) return null;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div className="bg-white dark:bg-slate-800 p-8 rounded-[40px] shadow-2xl max-w-md w-full border border-slate-100 dark:border-slate-700">
          <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase italic mb-4">Confirmar Exclusão</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            {deleteConfirm.id === 'all' 
              ? 'CUIDADO: Isso excluirá TODOS os seus projetos permanentemente. Deseja continuar?'
              : `Tem certeza que deseja excluir o projeto "${deleteConfirm.title}" permanentemente?`}
          </p>
          <div className="flex gap-4 justify-end">
            <button 
              onClick={() => setDeleteConfirm(null)}
              className="px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              Cancelar
            </button>
            <button 
              onClick={async () => {
                try {
                  if (deleteConfirm.id === 'all') {
                    await clearAllSermons();
                    setCaptureTarget(null);
                  } else {
                    await deleteSermon(deleteConfirm.id);
                    if (captureTarget?.sermonId === deleteConfirm.id) {
                      setCaptureTarget(null);
                    }
                    if (activeSermonId === deleteConfirm.id) {
                      setActiveSermonId(null);
                    }
                  }
                  await loadSermons();
                  window.dispatchEvent(new CustomEvent("dabar-sync"));
                } catch (err) {
                  console.error("Erro ao excluir:", err);
                } finally {
                  setDeleteConfirm(null);
                }
              }}
              className="px-6 py-3 bg-rose-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 transition-colors shadow-lg shadow-rose-500/30"
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (isPulpitMode && activeSermon) return <PulpitMode sermon={activeSermon} onClose={() => setIsPulpitMode(false)} />;
  
  if (activeSermon) {
    return (
      <div className="space-y-6">
        {renderDeleteModal()}
        <div className="flex gap-2">
           <button onClick={() => setActiveSermonId(null)} className="bg-slate-100 dark:bg-slate-700 text-slate-500 px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest">Fechar Projeto</button>
        </div>
        
        <SermonEditor 
          sermon={activeSermon} 
          onSave={(s) => saveSermon(s).then(loadSermons)} 
          onClose={() => setActiveSermonId(null)} 
          onDelete={() => setDeleteConfirm({ id: activeSermon.id, title: activeSermon.title })}
          onPulpit={() => setIsPulpitMode(true)}
          captureTarget={captureTarget}
          setCaptureTarget={setCaptureTarget}
        />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in pb-20">
      {renderDeleteModal()}
      <div className="bg-white dark:bg-slate-800 p-10 rounded-[50px] border border-slate-100 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-4xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic">Dabar Pro Studio</h2>
              <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em]">Gestor de Projetos Teológicos</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => setDeleteConfirm({ id: 'all', title: 'Todos os Projetos' })}
                className="bg-rose-50 dark:bg-rose-900/20 text-rose-500 px-4 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest"
              >
                Limpar Tudo
              </button>
              <button onClick={() => createNewSermon('expository')} className="bg-indigo-600 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-lg">+ Novo Sermão</button>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sermons.filter(s => s.title.toLowerCase().includes(searchTerm.toLowerCase())).map(sermon => (
          <div key={sermon.id} className="bg-white dark:bg-slate-800 p-8 rounded-[40px] border border-slate-100 shadow-sm flex flex-col justify-between hover:border-indigo-400 transition-all group">
            <h3 className="text-xl font-black text-slate-800 dark:text-white uppercase italic">{sermon.title}</h3>
            <div className="mt-8 flex items-center gap-2">
              <button onClick={() => setActiveSermonId(sermon.id)} className="flex-1 py-3 bg-slate-50 dark:bg-slate-700 text-indigo-600 rounded-xl font-black uppercase text-[9px] hover:bg-indigo-50 transition-colors">Abrir Projeto</button>
              <button 
                onClick={(e) => { 
                  e.preventDefault();
                  e.stopPropagation();
                  setDeleteConfirm({ id: sermon.id, title: sermon.title });
                }} 
                className="px-4 py-3 bg-rose-50 dark:bg-rose-900/20 text-rose-500 hover:text-rose-600 hover:bg-rose-100 rounded-xl transition-all flex items-center gap-2"
                title="Excluir Projeto"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                <span className="text-[8px] font-black uppercase">Excluir</span>
              </button>
            </div>
          </div>
        ))}
        {sermons.length === 0 && (
          <div className="col-span-full py-20 text-center border-4 border-dashed border-slate-100 rounded-[50px]">
            <p className="text-slate-400 font-black uppercase tracking-widest text-xs">Crie seu primeiro projeto teológico acima.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SermonStudio;
