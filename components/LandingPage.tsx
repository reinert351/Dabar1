import React from 'react';
import { motion } from 'motion/react';
import { 
  ICON_BIBLE, ICON_STUDY, ICON_SERMON, ICON_DNA, 
  ICON_CHRONOLOGY, ICON_COUNCIL, ICON_REVIVAL, 
  ICON_ARCHEOLOGY, ICON_MESSAGES, ICON_DIARY, 
  ICON_HYMNAL, ICON_TABERNACLE, ICON_TYPOLOGY,
  ICON_CUSTOMS, ICON_HERESIES, ICON_MEASURES,
  ICON_QUOTES, ICON_NOTE, ICON_FLASHCARDS
} from '../constants';

interface LandingPageProps {
  onNavigate: (tab: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const academySection = {
    title: "Dabar Academy",
    items: [
      { id: 'academy', label: 'Academy', icon: <span className="text-3xl">🎓</span>, color: 'bg-slate-900' },
      { id: 'courses', label: 'Idiomas Bíblicos', icon: <span className="text-3xl">🌍</span>, color: 'bg-indigo-600' },
    ]
  };

  const appFunctions = [
    {
      title: "Bíblia Interligada & Exegese",
      desc: "Acesse o texto bíblico com conexões expositivas, temas em cadeias e ferramentas de exegese avançada. Explore nosso acervo com 469 esboços no Antigo Testamento e 269 no Novo Testamento.",
      icon: ICON_BIBLE('w-6 h-6'),
      tab: 'bible'
    },
    {
      title: "Estúdio de Sermões Pro",
      desc: "Desenvolva suas mensagens com auxílio de IA, organize seus esboços e utilize o Preaching Coach para aprimorar sua oratória e conteúdo.",
      icon: ICON_SERMON('w-6 h-6'),
      tab: 'sermons'
    },
    {
      title: "Cronologia & Arqueologia",
      desc: "Viaje pela história com a Cronologia Titan e explore descobertas arqueológicas que confirmam e iluminam o texto sagrado.",
      icon: ICON_CHRONOLOGY('w-6 h-6'),
      tab: 'timeline'
    },
    {
      title: "Vida Espiritual & Devocional",
      desc: "Mantenha um diário espiritual, acesse o hinário inteligente e receba mensagens diárias no Manancial de Vida.",
      icon: ICON_DIARY('w-6 h-6'),
      tab: 'diary'
    },
    {
      title: "Escatologia Comparada",
      desc: "Analise visões milenaristas e tribulacionais com filtros de correntes teológicas interativos.",
      icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0zM12 2v2m0 16v2m10-10h-2M4 12H2m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636" /> </svg>,
      tab: 'eschatology'
    },
    {
      title: "Academia de Memorização (SRS)",
      desc: "Domine o vocabulário bíblico e fatos teológicos com nosso sistema de repetição espaçada estilo Anki.",
      icon: ICON_FLASHCARDS('w-6 h-6'),
      tab: 'flashcards'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-20">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6 pt-10 px-4 mb-16"
      >
        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-[40px] shadow-2xl border border-amber-900/40 bg-slate-900">
          {/* Imagem de Fundo (Pergaminho em foco) */}
          <img 
            src="https://images.unsplash.com/photo-1577744390623-8c4d3af2bc79?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Pergaminho em Mesa Rústica"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 pointer-events-none"
            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1603953504193-4e4b5dfd4681?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" }}
          />
          
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-900/20 pointer-events-none"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex items-center justify-center opacity-[0.06] pointer-events-none">
            <span className="text-[250px] font-black italic tracking-tighter text-amber-500 leading-none select-none">
              דָּבָר
            </span>
          </div>

          <div className="relative z-10 p-12 md:p-20">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none text-white drop-shadow-2xl mb-6">
              דָּבָר dabar
            </h1>
            <p className="text-lg md:text-xl text-amber-50/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg">
              Aparece 1.441 vezes no AT. A Palavra de Deus como poder criador e revelador. <br/><br/>
              Dabar é uma plataforma de estudo bíblico profundo projetada para pastores e líderes que levam a sério o estudo das Escrituras.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button 
            onClick={() => onNavigate('bible')}
            className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20"
          >
            Começar Estudo
          </button>
          <button 
            onClick={() => onNavigate('academy')}
            className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
          >
            Dabar Academy
          </button>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[
          { title: "Estudo Interligado", desc: "Conecte versículos, dicionários e história em uma interface única.", icon: "🔗" },
          { title: "Preparação Ministerial", desc: "Ferramentas avançadas para criação de sermões e gestão ministerial.", icon: "📖" },
          { title: "Idiomas Originais", desc: "Aprenda e aplique Hebraico, Grego e Latim no seu estudo.", icon: "📜" },
          { title: "História & Contexto", desc: "Explore o contexto bíblico com mapas e cronologias.", icon: "🏛️" },
        ].map((benefit, bIdx) => (
          <div key={bIdx} className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl border border-indigo-100 dark:border-indigo-500/20">
            <div className="text-3xl mb-4">{benefit.icon}</div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-2 dark:text-white">{benefit.title}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{benefit.desc}</p>
          </div>
        ))}
      </motion.section>

      {/* Academy Section - Keep as shortcuts */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="px-4"
      >
        <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8 border-b border-slate-200 dark:border-slate-800 pb-2">
          {academySection.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {academySection.items.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="group relative flex items-center gap-6 p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-indigo-500 transition-all hover:shadow-2xl hover:shadow-indigo-500/10 text-left"
            >
              <div className={`w-16 h-16 shrink-0 ${item.color || 'bg-slate-100 dark:bg-slate-800'} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <div>
                <span className="text-sm font-black uppercase tracking-widest dark:text-white block mb-1">
                  {item.label}
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400">Acesse agora sua trilha de aprendizado.</p>
              </div>
            </button>
          ))}
        </div>
      </motion.section>

      {/* App Functions Information Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="px-4"
      >
        <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8 border-b border-slate-200 dark:border-slate-800 pb-2">
          Recursos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {appFunctions.map((func, idx) => (
            <div 
              key={idx}
              className="group p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-indigo-500/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl">
                  {func.icon}
                </div>
                <h3 className="text-lg font-black tracking-tight dark:text-white">{func.title}</h3>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                {func.desc}
              </p>
              <button 
                onClick={() => onNavigate(func.tab)}
                className="text-[10px] font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-700 flex items-center gap-2"
              >
                Explorar Recurso 
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="px-4 pb-10"
      >
        <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8 border-b border-slate-200 dark:border-slate-800 pb-2">
          O que dizem nossos alunos e obreiros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Pr. André Santos", role: "Ministério Local", text: "A melhor ferramenta que já usei para preparar minhas mensagens. A conexão entre os textos é fantástica." },
            { name: "Prof. Lucas Oliveira", role: "Seminarista", text: "O aprendizado de Hebraico ficou muito mais intuitivo com a Dabar Academy. Recomendo a todos." },
            { name: "Missionária Carla", role: "Estudos Bíblicos", text: "A profundidade teológica e a facilidade de uso são impressionantes. Transformou meu tempo de estudo." },
          ].map((testimonial, tIdx) => (
            <div key={tIdx} className="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl italic text-slate-600 dark:text-slate-300 relative">
              <span className="text-4xl text-indigo-200 dark:text-indigo-900 absolute top-4 left-4 font-serif">"</span>
              <p className="relative z-10 mb-6 text-sm leading-relaxed">{testimonial.text}</p>
              <div className="not-italic">
                <p className="font-black text-[10px] uppercase tracking-widest text-indigo-600">{testimonial.name}</p>
                <p className="text-[9px] text-slate-400 uppercase tracking-tighter">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default LandingPage;
