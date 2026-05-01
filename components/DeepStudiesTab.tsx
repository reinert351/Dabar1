
import React, { useState } from 'react';
import { UserState, CaptureTarget } from '../types';
import { ICON_TABERNACLE, ICON_BIBLE, ICON_SERMON, ICON_STUDY } from '../constants';
import { addTextToStudio } from '../core/studioFunnel';
import { motion, AnimatePresence } from 'motion/react';
import TabernacleVisualExplorer from './TabernacleVisualExplorer';
import AbrahamJourney from './AbrahamJourney';
import MartyrsExplorer from './MartyrsExplorer';
import ApocryphaExplorer from './ApocryphaExplorer';
import SpecialStudiesExplorer from './SpecialStudiesExplorer';
import { PARABLES_DATA, Parable } from '../data/parables_data';
import { SPECIAL_STUDIES_DATA } from '../data';
import { BookOpen, Search, ChevronRight, ChevronDown, Filter, Map, Flame, ScrollText, Component } from 'lucide-react';

interface DeepStudiesTabProps {
  userState: UserState;
  captureTarget?: CaptureTarget | null;
}

const DeepStudiesTab: React.FC<DeepStudiesTabProps> = ({ userState, captureTarget }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [studyType, setStudyType] = useState<'tabernacle' | 'eden' | 'parables' | 'abraham' | 'martyrs' | 'apocrypha' | 'intertestamental'>('tabernacle');
  const [parableFilter, setParableFilter] = useState<'Todos' | 'Antigo' | 'Novo'>('Todos');
  const [parableSearch, setParableSearch] = useState('');
  const [expandedParable, setExpandedParable] = useState<string | null>(null);

  const filteredParables = PARABLES_DATA.filter(p => {
    const matchesFilter = parableFilter === 'Todos' || p.testament === parableFilter;
    const matchesSearch = p.title.toLowerCase().includes(parableSearch.toLowerCase()) || 
                          p.reference.toLowerCase().includes(parableSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleInjectParable = (parable: Parable) => {
    const content = `📖 PARÁBOLA: ${parable.title} (${parable.reference})
Testamento: ${parable.testament}

Contexto: ${parable.context}
Contexto Histórico/Cultural: ${parable.historicalCultural}
Exegese: ${parable.exegesis}
Significado Teológico: ${parable.theologicalMeaning}
Aplicação Prática: ${parable.practicalApplication}`;
    
    addTextToStudio(`[ESTUDO PROFUNDO - PARÁBOLA: ${parable.title}]\n\n${content}`);
  };

  const handleInject = (title: string, content: string) => {
    addTextToStudio(`[ESTUDO PROFUNDO - ${title}]\n\n${content}`);
  };

  const tabernacleContent = `👑 TABERNÁCULO — REVELAÇÃO DO TRONO
As 4 cores → Cristo → Evangelhos → Apocalipse → GOVERNO ETERNO

🏕️ A PORTA NÃO É DECORAÇÃO — É UM MAPA DO TRONO
📖 Êxodo 27:16
- A porta é o primeiro contato com Deus
- E Deus já revela ali: Quem é Cristo, Como Ele vem, Como Ele salva, Como Ele reina

🔥 REVELAÇÃO CENTRAL DO NÍVEL TRONO
O que está na entrada da Terra (Tabernáculo) é o que está ao redor do Trono no Céu.

👁️ OS 4 SERES VIVENTES — O GOVERNO DE DEUS (Ap 4:7)
Leão: Autoridade (Reino)
Boi: Serviço (Sacrifício)
Homem: Relacionamento (Consciência)
Águia: Relacionamento (Espírito)

🔗 CONEXÃO PROFÉTICA COMPLETA (EXPANDIDA)
Azul | Deus | João | Águia | Espírito
Púrpura | Rei | Mateus | Leão | Governo
Escarlate | Servo | Marcos | Boi | Sacrifício
Linho | Homem | Lucas | Homem | Relacionamento

🧠 SEGREDO PROFUNDO: SISTEMA QUADRIFORME DIVINO
Deus governa TODA a criação em 4 dimensões simultâneas: Tabernáculo, Evangelhos, Querubins (Ez 1), Trono (Ap 4).

⚡ AS 4 DIMENSÕES DO CRISTO REVELADO
1. AZUL (DEUS): Origem Céu, Natureza Divina, Águia (Visão Eterna), Verbo Eterno.
2. PÚRPURA (REI): Origem Realeza, Natureza Autoridade, Leão (Autoridade Absoluta), Rei Soberano.
3. ESCARLATE (SACRIFÍCIO): Origem Sangue, Natureza Substituição, Boi (Entrega Total), Cordeiro Morto.
4. LINHO (PERFEIÇÃO): Origem Terra, Natureza Justiça, Homem (Consciência), Último Adão.

🔥 MISTÉRIO DO CENTRO: As 4 cores são a “versão terrestre” dos 4 seres do trono.
👑 CRISTO É O PONTO DE ENCONTRO: Ele conecta Céu ↔ Terra, Deus ↔ Homem.

🔥 NÍVEL TRONO — INTERPRETAÇÃO PROFÉTICA
“Você só entra no Reino se aceitar o Cristo completo”: Deus (Azul), Rei (Púrpura), Sacrifício (Escarlate), Homem perfeito (Linho).

⚡ CÓDIGO ESPIRITUAL:
Azul: Revelação
Púrpura: Autoridade
Escarlate: Quebrantamento
Linho: Santidade

🧬 APLICAÇÃO NO CRENTE: Vida espiritual, Autoridade, Cruz diária, Santidade.

“A porta do Tabernáculo não era tecido… era o Evangelho antes da cruz existir.”

📖 OS 4 EVANGELHOS E OS POVOS (VISÃO PROFUNDA)
- MATEUS (Judeus): Rei, Púrpura, Leão. Estratégia: Genealogia, Profecias, Reino.
- MARCOS (Romanos): Servo, Escarlate, Boi. Estratégia: Ação, Milagres, Serviço.
- LUCAS (Gregos): Homem Perfeito, Linho, Homem. Estratégia: Sabedoria, Detalhes, Humanidade.
- JOÃO (Mundo): Filho de Deus, Azul, Águia. Estratégia: Identidade Divina, "Eu Sou", Espiritualidade.

✝️ A CRUZ NO DESERTO (GEOMETRIA DO MOBILIÁRIO)
O Tabernáculo não era um labirinto, era uma jornada em linha reta que desenha uma cruz:
1. Altar de Bronze (Base da Cruz) -> Justificação
2. Pia de Bronze (Haste Vertical) -> Santificação
3. Mesa dos Pães (Braço Esquerdo) -> Comunhão
4. Candelabro (Braço Direito) -> Iluminação
5. Altar de Incenso (Centro da Cruz) -> Intercessão
6. Arca da Aliança (Topo da Cruz) -> Glorificação

🛡️ AS 4 COBERTURAS (O EXTERIOR VS INTERIOR)
1. Peles de Texugo (Exterior): Sem beleza, resistente. Cristo em Sua humanidade humilde.
2. Peles de Carneiro (Vermelho): O sacrifício substitutivo.
3. Pelos de Cabra: O dia da expiação (o bode emissário).
4. Linho Fino (Interior): A glória e justiça de Deus revelada apenas para quem entra.

💎 O SUMO SACERDOTE (O REPRESENTANTE)
- Peitoral (12 Pedras): Cristo nos carrega no peito (amor) e nos ombros (força).
- Urim e Tumim: Luz e Perfeição. A vontade de Deus revelada em Cristo.
- Mitra (Santidade ao Senhor): A mente de Cristo focada na glória do Pai.

🏗️ AS BASES DE PRATA (O FUNDAMENTO)
- 100 bases de prata sustentavam todo o Tabernáculo.
- Prata = Redenção (o preço pago pelo resgate).
- Lição: Nada no Reino de Deus subsiste sem o fundamento da Redenção.

👁️ FUNDAMENTOS PROFÉTICOS DO SISTEMA
1. Ezequiel 1:10 - A raiz dos 4 seres.
2. Apocalipse 5:5-6 - O Leão e o Cordeiro.
3. Isaías 53:5 - O Servo (Escarlate).
4. Filipenses 2:6-8 - Deus -> Homem (Céu -> Terra).
5. Salmo 24:7-10 - O Rei da Glória (Porta + Rei).
6. João 1:14 - O Verbo habitou (Tabernaculou).
7. Hebreus 9:12 - O caminho pelo sangue (Escarlate).
8. João 10:9 - Jesus é a Porta.
9. Gênesis 9:13 - Cores e Aliança.
10. Êxodo 28:5-6 - Cores no Sacerdote.
11. Colossenses 1:16-17 - Cristo é Tudo.

🔥 FRASE FINAL: "A Bíblia inteira é um único desenho: Cristo na porta, Cristo no caminho, e Cristo no trono."`;

  const edenContent = `🌿 JARDIM DO ÉDEN — ESTUDO DEFINITIVO (NÍVEL TRONO + CÓDIGOS OCULTOS)

🧠 1. ETIMOLOGIA PROFUNDA (HEBRAICO + RAIZ ESPIRITUAL)
Éden — עֵדֶן (ʿeden)
Significados: prazer, delícia, abundância, luxo espiritual.
Ligação acadiana: edinnu (planície fértil, região irrigada).
🔥 CÓDIGO OCULTO: Éden não é só “lugar bonito” — é ambiente de prazer na presença de Deus. 👉 Ou seja: Presença = prazer verdadeiro.

🌍 2. GEOGRAFIA + DIMENSÃO OCULTA
Gênesis 2:10–14: Um rio saía do Éden. Dividia-se em 4: Pisom, Giom, Tigre, Eufrates.
🌊 Código dos 4 rios:
- Pisom: provisão
- Giom: vida / fluxo
- Tigre: rapidez / direção
- Eufrates: fertilidade
🔥 REVELAÇÃO: O Éden era uma fonte espiritual que alimentava toda a terra.

🌳 3. ESTRUTURA CENTRAL DO ÉDEN
No centro: 🌳 Árvore da Vida, 🌳 Árvore do Conhecimento.
🔥 CÓDIGO OCULTO: Duas árvores representam:
- Vida: dependência de Deus
- Conhecimento: autonomia humana
👉 A escolha nunca foi sobre comida… foi sobre governo espiritual.

👑 4. ADÃO — SACERDOTE DO ÉDEN
Hebraico: עָבַד (‘abad) → servir / adorar / trabalhar; שָׁמַר (shamar) → guardar / vigiar.
🔥 CÓDIGO OCULTO: Essas palavras são usadas depois para sacerdotes no templo. 👉 Logo: Adão era o primeiro sacerdote da história.

👁️🔥 5. ADÃO E EVA VIAM A FACE DE DEUS
📖 Gênesis 3:8: “Deus passeava no jardim”.
🧠 Interpretação profunda: presença visível (teofania), comunhão contínua, acesso sem véu.
🔥 REVELAÇÃO: O homem foi criado para viver vendo Deus.
⚠️ Aparente contradição resolvida (Ex 33:20): Não viam a essência infinita, viam manifestação (teofania).
🔥 Código espiritual: Antes da queda: sem pecado, sem medo, sem separação. Depois: esconderam-se, perderam acesso. 👉 O problema não foi Deus se afastar… foi o homem perder capacidade de permanecer.

🐍 6. A QUEDA — QUEBRA DO SISTEMA
A serpente introduz: dúvida, distorção da Palavra, autonomia.
🔥 CÓDIGO: Pecado = independência de Deus. Resultado: morte espiritual, separação, expulsão.

🔥 7. QUERUBINS — BLOQUEIO DA PRESENÇA
Querubins + espada flamejante.
🔥 CÓDIGO OCULTO: Querubins sempre aparecem guardando a glória e protegendo a presença. 👉 Conexão: Éden, Arca da Aliança, Ezequiel 1, Apocalipse 4.

🧬 8. ÉDEN = TEMPLO ORIGINAL
- Éden: presença direta, querubins, árvore, homem.
- Tabernáculo: Shekinah, arca, menorá, sacerdote.
🔥 REVELAÇÃO: A Bíblia inteira é sobre reconstruir o Éden.

🌋 9. ÉDEN COMO MONTE DE DEUS (EZEQUIEL)
Ezequiel 28 revela: “monte santo de Deus”, pedras preciosas, querubim.
🔥 CÓDIGO OCULTO: O Éden era também um monte espiritual. 👉 padrão repetido: Éden, Sinai, Sião. Todos = lugares de encontro com Deus.

🌌 10. DIMENSÃO DUPLA (FÍSICO + ESPIRITUAL)
O Éden era real (jardim) e espiritual (presença aberta).
🔥 REVELAÇÃO: Era um “portal” entre céu e terra.

✝️ 11. CRISTO — RESTAURAÇÃO DO ÉDEN
- Éden: árvore proibida, morte entrou, acesso fechado.
- Cristo: cruz, vida venceu, véu rasgado.
João 14:9: “Quem me vê a mim vê o Pai”.
🔥 CÓDIGO: Jesus é a face de Deus restaurada.

🩸 12. O CAMINHO DE VOLTA
Gênesis: acesso bloqueado. Evangelhos: cruz abre caminho. Hebreus: novo e vivo caminho.
👉 Processo: queda -> sacrifício -> redenção -> acesso restaurado.

🌳 13. APOCALIPSE — ÉDEN RESTAURADO
Apocalipse 22: árvore da vida, rio da vida, presença total.
🔥 O MAIS FORTE: “Verão a sua FACE”.

🧠 14. CÓDIGOS OCULTOS DO ÉDEN (RESUMO FINAL)
🔥 Código 1 — Presença: Éden = lugar onde Deus habita com o homem.
🔥 Código 2 — Sacerdócio: Homem foi criado para ministrar diante de Deus.
🔥 Código 3 — Governo: Escolha entre depender ou ser independente.
🔥 Código 4 — Acesso: Pecado fecha → Cristo reabre.
🔥 Código 5 — Face de Deus: O objetivo final não é o jardim… é ver Deus.

👑 15. REVELAÇÃO SUPREMA (NÍVEL TRONO)
O Éden não é apenas o início da Bíblia… é o projeto original de Deus para o homem. E Apocalipse não é o fim… é o retorno ao Éden em nível eterno.

🔥 FRASE FINAL (IMPACTO DE PREGAÇÃO)
“O homem perdeu um jardim… mas Deus nunca quis apenas restaurar um lugar — Ele quer restaurar o acesso à Sua FACE.”`;

  return (
    <div className="max-w-6xl mx-auto py-8 space-y-12 animate-in fade-in duration-700 pb-40 px-4">
      {/* HEADER */}
      <header className="bg-slate-950 p-8 md:p-14 rounded-[40px] md:rounded-[60px] text-white shadow-2xl relative overflow-hidden border border-indigo-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-2xl rotate-3">
              {studyType === 'tabernacle' ? ICON_TABERNACLE('w-8 h-8 md:w-10 h-10') : 
               studyType === 'eden' ? <span className="text-3xl">🌳</span> :
               studyType === 'abraham' ? <Map className="w-8 h-8 md:w-10 h-10" /> :
               studyType === 'martyrs' ? <Flame className="w-8 h-8 md:w-10 h-10" /> :
               studyType === 'apocrypha' ? <ScrollText className="w-8 h-8 md:w-10 h-10" /> :
               <BookOpen className="w-8 h-8 md:w-10 h-10" />}
            </div>
            <div>
              <span className="text-amber-500 font-black uppercase tracking-[0.5em] text-[8px] md:text-[10px] block italic">Dabar Titan • Nível Trono</span>
              <h2 className="text-2xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">Estudos <br/><span className="text-indigo-400">Profundos</span></h2>
            </div>
          </div>
          <p className="text-slate-400 max-w-3xl text-base md:text-xl leading-relaxed bible-text italic">
            {studyType === 'tabernacle' ? (
              <>
                👑 TABERNÁCULO — REVELAÇÃO DO TRONO<br/>
                <span className="text-indigo-300">As 4 cores → Cristo → Evangelhos → Apocalipse → GOVERNO ETERNO</span>
              </>
            ) : studyType === 'eden' ? (
              <>
                🌳 JARDIM DO ÉDEN — O PROTÓTIPO DO SANTUÁRIO<br/>
                <span className="text-emerald-400">Presença Face a Face → Sacerdócio de Adão → Geografia do Trono</span>
              </>
            ) : studyType === 'abraham' ? (
              <>
                🗺️ A JORNADA DE ABRAÃO — O PAI DA FÉ<br/>
                <span className="text-sky-400">Geografia → Costumes → Cronologia → Dispensações</span>
              </>
            ) : studyType === 'martyrs' ? (
              <>
                🩸 O CÁLICE DOS MÁRTIRES — PROFETAS E APÓSTOLOS<br/>
                <span className="text-red-400">História e detalhes profundos do martírio dos grandes homens de Deus</span>
              </>
            ) : studyType === 'apocrypha' ? (
              <>
                📜 A BIBLIOTECA APÓCRIFA — TEXTOS EXTRA-BÍBLICOS<br/>
                <span className="text-violet-400">Contexto histórico, canonicidade e valor documental do período interbíblico</span>
              </>
            ) : studyType === 'intertestamental' ? (
              <>
                ⏳ TÓPICOS ESPECIAIS & PERÍODO INTERTESTAMENTÁRIO<br/>
                <span className="text-fuchsia-400">Silêncio profético, impérios e as doutrinas centrais</span>
              </>
            ) : (
              <>
                📖 PARÁBOLAS DA BÍBLIA — O ENSINO POR FIGURAS<br/>
                <span className="text-amber-400">Antigo e Novo Testamento → Contexto Histórico → Exegese e Aplicação</span>
              </>
            )}
          </p>
        </div>
      </header>

      {/* SELETOR DE ESTUDO */}
      <div className="flex flex-wrap justify-center gap-4">
        <button 
          onClick={() => setStudyType('tabernacle')}
          className={`px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${studyType === 'tabernacle' ? 'bg-indigo-600 text-white shadow-lg scale-105' : 'bg-white dark:bg-slate-900 text-slate-400 border border-slate-100 dark:border-slate-800'}`}
        >
          Tabernáculo
        </button>
        <button 
          onClick={() => setStudyType('eden')}
          className={`px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${studyType === 'eden' ? 'bg-emerald-600 text-white shadow-lg scale-105' : 'bg-white dark:bg-slate-900 text-slate-400 border border-slate-100 dark:border-slate-800'}`}
        >
          Jardim do Éden
        </button>
        <button 
          onClick={() => setStudyType('abraham')}
          className={`px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${studyType === 'abraham' ? 'bg-sky-600 text-white shadow-lg scale-105' : 'bg-white dark:bg-slate-900 text-slate-400 border border-slate-100 dark:border-slate-800'}`}
        >
          A Jornada de Abraão
        </button>
        <button 
          onClick={() => setStudyType('parables')}
          className={`px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${studyType === 'parables' ? 'bg-amber-600 text-white shadow-lg scale-105' : 'bg-white dark:bg-slate-900 text-slate-400 border border-slate-100 dark:border-slate-800'}`}
        >
          Parábolas
        </button>
        <button 
          onClick={() => setStudyType('martyrs')}
          className={`px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${studyType === 'martyrs' ? 'bg-red-900 text-white shadow-lg scale-105' : 'bg-white dark:bg-slate-900 text-slate-400 border border-slate-100 dark:border-slate-800'}`}
        >
          Mártires
        </button>
        <button 
          onClick={() => setStudyType('apocrypha')}
          className={`px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${studyType === 'apocrypha' ? 'bg-violet-600 text-white shadow-lg scale-105' : 'bg-white dark:bg-slate-900 text-slate-400 border border-slate-100 dark:border-slate-800'}`}
        >
          Apócrifos
        </button>
        <button 
          onClick={() => setStudyType('intertestamental')}
          className={`px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all ${studyType === 'intertestamental' ? 'bg-fuchsia-600 text-white shadow-lg scale-105' : 'bg-white dark:bg-slate-900 text-slate-400 border border-slate-100 dark:border-slate-800'}`}
        >
          Tópicos Especiais
        </button>
      </div>

      {studyType === 'tabernacle' ? (
        <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
          {/* EXPLORADOR VISUAL */}
          <TabernacleVisualExplorer />

          {/* SEÇÃO 1: A PORTA */}
          <section className="bg-white dark:bg-slate-900 p-6 md:p-12 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-3xl md:text-4xl">🏕️</span>
              <h3 className="text-xl md:text-3xl font-black uppercase italic tracking-tighter text-slate-800 dark:text-white">A Porta não é decoração — é um mapa do trono</h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 dark:bg-amber-900/20 text-amber-600 rounded-full text-xs font-black uppercase tracking-widest border border-amber-100 dark:border-amber-800">
              {ICON_BIBLE('w-3 h-3')} Êxodo 27:16
            </div>
            <ul className="space-y-3">
              {["A porta é o primeiro contato com Deus", "E Deus já revela ali:", "Quem é Cristo", "Como Ele vem", "Como Ele salva", "Como Ele reina"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-base md:text-lg font-bold text-slate-600 dark:text-slate-300 italic">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 bg-slate-50 dark:bg-slate-800 p-6 rounded-[30px] border border-slate-100 dark:border-slate-700 text-center">
             <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-3">Revelação Central</span>
             <p className="text-lg md:text-xl font-black text-indigo-600 uppercase italic tracking-tighter leading-tight">
               O que está na entrada da Terra é o que está ao redor do Trono no Céu.
             </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: OS 4 SERES VIVENTES */}
      <section className="space-y-6">
        <div className="flex items-center gap-4 px-4">
          <div className="w-1.5 h-8 bg-indigo-600 rounded-full"></div>
          <h3 className="text-xl md:text-3xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter">👁️ Os 4 Seres Viventes — O Governo de Deus</h3>
          <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest ml-auto">Apocalipse 4:7</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { face: 'Leão', nature: 'Autoridade', gov: 'Reino', color: 'border-amber-500', text: 'text-amber-600', bg: 'bg-amber-50' },
            { face: 'Boi', nature: 'Serviço', gov: 'Sacrifício', color: 'border-rose-500', text: 'text-rose-600', bg: 'bg-rose-50' },
            { face: 'Homem', nature: 'Relacionamento', gov: 'Consciência', color: 'border-slate-500', text: 'text-slate-600', bg: 'bg-slate-50' },
            { face: 'Águia', nature: 'Revelação', gov: 'Espírito', color: 'border-blue-500', text: 'text-blue-600', bg: 'bg-blue-50' }
          ].map((ser, i) => (
            <div key={i} className={`p-6 rounded-[30px] border-t-4 md:border-t-8 ${ser.color} bg-white dark:bg-slate-800 shadow-lg text-center group hover:scale-105 transition-transform`}>
              <span className={`text-[9px] font-black uppercase tracking-widest ${ser.text} block mb-2`}>{ser.face}</span>
              <h4 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter mb-3">{ser.nature}</h4>
              <div className={`py-1.5 px-3 rounded-full ${ser.bg} dark:bg-slate-900 text-[9px] font-black uppercase tracking-widest ${ser.text} inline-block`}>
                {ser.gov}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-slate-900 p-6 rounded-[30px] text-center">
          <p className="text-indigo-400 font-black uppercase tracking-[0.2em] text-[10px]">👉 Isso é o DNA do governo de Deus</p>
        </div>
      </section>

      {/* SEÇÃO 3: CONEXÃO PROFÉTICA COMPLETA */}
      <section className="bg-slate-950 p-8 md:p-14 rounded-[40px] md:rounded-[60px] text-white shadow-2xl relative overflow-hidden border border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/10 via-transparent to-rose-600/10"></div>
        <div className="relative z-10 space-y-8">
          <div className="text-center">
            <span className="text-indigo-400 font-black uppercase tracking-[0.5em] text-[9px] mb-3 block italic">Matriz de Engenharia Dabar</span>
            <h3 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter text-white leading-none">🔗 Conexão Profética Completa</h3>
          </div>

          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-2 text-[9px] font-black uppercase tracking-widest text-slate-500">Cor</th>
                  <th className="py-4 px-2 text-[9px] font-black uppercase tracking-widest text-slate-500">Cristo</th>
                  <th className="py-4 px-2 text-[9px] font-black uppercase tracking-widest text-slate-500">Evangelho</th>
                  <th className="py-4 px-2 text-[9px] font-black uppercase tracking-widest text-slate-500">Ser Vivente</th>
                  <th className="py-4 px-2 text-[9px] font-black uppercase tracking-widest text-slate-500">Dimensão</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { cor: 'Azul', cristo: 'Deus', ev: 'João', ser: 'Águia', dim: 'Espírito', color: 'text-blue-400' },
                  { cor: 'Púrpura', cristo: 'Rei', ev: 'Mateus', ser: 'Leão', dim: 'Governo', color: 'text-purple-400' },
                  { cor: 'Escarlate', cristo: 'Servo', ev: 'Marcos', ser: 'Boi', dim: 'Sacrifício', color: 'text-rose-400' },
                  { cor: 'Linho', cristo: 'Homem', ev: 'Lucas', ser: 'Homem', dim: 'Relacionamento', color: 'text-slate-300' }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors group">
                    <td className={`py-6 px-2 font-black uppercase italic tracking-tighter text-lg ${row.color}`}>{row.cor}</td>
                    <td className="py-6 px-2 font-bold text-base text-slate-300">{row.cristo}</td>
                    <td className="py-6 px-2 font-bold text-base text-slate-300 italic">{row.ev}</td>
                    <td className="py-6 px-2 font-bold text-base text-slate-300">{row.ser}</td>
                    <td className="py-6 px-2 font-black uppercase text-[9px] tracking-widest text-indigo-400">{row.dim}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: SEGREDO PROFUNDO */}
      <section className="bg-amber-50 dark:bg-amber-900/10 p-8 md:p-14 rounded-[40px] md:rounded-[60px] border border-amber-100 dark:border-amber-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
          <span className="text-6xl md:text-8xl font-black italic text-amber-600">🧠</span>
        </div>
        <div className="relative z-10 max-w-4xl">
          <span className="text-amber-600 font-black uppercase tracking-[0.4em] text-[9px] mb-4 block italic underline underline-offset-8">Segredo Profundo (Poucos Ensinam)</span>
          <h3 className="text-2xl md:text-4xl font-black italic uppercase tracking-tighter text-amber-900 dark:text-amber-100 mb-6 leading-none">Sistema Quadriforme Divino</h3>
          <p className="text-lg md:text-2xl text-amber-800 dark:text-amber-200 font-bold italic leading-relaxed mb-8 bible-text">
            Não são apenas símbolos isolados. Eles formam um sistema que aparece no Tabernáculo, Evangelhos, Querubins (Ezequiel 1) e no Trono (Apocalipse 4).
          </p>
          <div className="p-6 bg-white dark:bg-slate-900 rounded-[30px] border border-amber-200 dark:border-amber-800 shadow-xl">
             <p className="text-base md:text-xl font-black text-amber-900 dark:text-amber-100 uppercase tracking-tighter">
               👉 Isso significa: Deus governa TODA a criação em 4 dimensões simultâneas.
             </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: AS 4 DIMENSÕES DETALHADAS */}
      <section className="space-y-8">
        <div className="text-center">
           <h3 className="text-2xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-800 dark:text-white">⚡ As 4 Dimensões do Cristo Revelado</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            { id: '1', cor: 'Azul', titulo: 'Dimensão Espiritual (Deus)', origem: 'Céu', natureza: 'Divina', funcao: 'Revelar Deus', ref: 'João 1:1', ser: 'Águia → visão eterna', cristo: 'O Verbo eterno', colorClass: 'border-blue-500 text-blue-600 bg-blue-50' },
            { id: '2', cor: 'Púrpura', titulo: 'Dimensão Governamental (Rei)', origem: 'Realeza', natureza: 'Autoridade', funcao: 'Governar', ref: 'Mateus 28:18', ser: 'Leão → autoridade absoluta', cristo: 'Rei soberano', colorClass: 'border-purple-500 text-purple-600 bg-purple-50' },
            { id: '3', cor: 'Escarlate', titulo: 'Dimensão Redentiva (Sacrifício)', origem: 'Sangue', natureza: 'Substituição', funcao: 'Salvar', ref: 'Isaías 53', ser: 'Boi → entrega total', cristo: 'Cordeiro morto', colorClass: 'border-rose-500 text-rose-600 bg-rose-50' },
            { id: '4', cor: 'Linho', titulo: 'Dimensão Humana (Perfeição)', origem: 'Terra', natureza: 'Justiça', funcao: 'Representar o homem', ref: 'Lucas 19:10', ser: 'Homem → consciência e identidade', cristo: 'O último Adão', colorClass: 'border-slate-400 text-slate-600 bg-slate-50' }
          ].map((dim, i) => (
            <div key={i} className={`bg-white dark:bg-slate-800 p-8 rounded-[40px] border-l-[12px] ${dim.colorClass.split(' ')[0]} shadow-xl space-y-4 group hover:scale-[1.02] transition-all`}>
               <div className="flex justify-between items-start">
                  <span className={`text-3xl font-black italic ${dim.colorClass.split(' ')[1]} opacity-20`}>{dim.id}</span>
                  <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${dim.colorClass.split(' ')[1]} ${dim.colorClass.split(' ')[2]}`}>{dim.cor}</span>
               </div>
               <h4 className="text-xl md:text-3xl font-black uppercase italic tracking-tighter text-slate-800 dark:text-white leading-none">{dim.titulo}</h4>
               <div className="grid grid-cols-2 gap-3">
                  <div><span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1">Origem</span><p className="text-sm font-bold text-slate-600 dark:text-slate-300">{dim.origem}</p></div>
                  <div><span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1">Natureza</span><p className="text-sm font-bold text-slate-600 dark:text-slate-300">{dim.natureza}</p></div>
                  <div><span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1">Função</span><p className="text-sm font-bold text-slate-600 dark:text-slate-300">{dim.funcao}</p></div>
                  <div><span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1">Referência</span><p className="text-sm font-bold text-indigo-500">{dim.ref}</p></div>
               </div>
               <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                  <p className="text-base font-black text-slate-800 dark:text-white uppercase italic tracking-tighter mb-1">🔥 No Trono: <span className={dim.colorClass.split(' ')[1]}>{dim.ser}</span></p>
                  <p className="text-lg font-black text-indigo-600 uppercase tracking-widest">👉 Cristo aqui é: {dim.cristo}</p>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 6: OS 4 EVANGELHOS E OS POVOS */}
      <section className="space-y-8">
        <div className="text-center">
           <span className="text-indigo-600 font-black uppercase tracking-[0.5em] text-[10px] mb-4 block italic">Estratégia Divina de Revelação</span>
           <h3 className="text-2xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-800 dark:text-white leading-tight">📖 Os 4 Evangelhos e os Povos</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { cor: 'Púrpura', povo: 'Judeus', titulo: 'Mateus — O Rei', icon: '🦁', strategy: 'Genealogia desde Abraão, cumprimento de profecias, foco no Reino dos Céus.', ref: 'Mateus 1:1', connection: 'Púrpura (Realeza) -> Leão (Governo)', colorClass: 'border-purple-500 text-purple-600 bg-purple-50' },
            { cor: 'Escarlate', povo: 'Romanos', titulo: 'Marcos — O Servo', icon: '🐂', strategy: 'Evangelho dinâmico, muitos milagres, foco na ação e no serviço imediato.', ref: 'Marcos 10:45', connection: 'Escarlate (Sacrifício) -> Boi (Serviço)', colorClass: 'border-rose-500 text-rose-600 bg-rose-50' },
            { cor: 'Linho', povo: 'Gregos', titulo: 'Lucas — O Homem Perfeito', icon: '👤', strategy: 'Detalhes históricos e humanos, foco na sabedoria e no ideal humano.', ref: 'Lucas 19:10', connection: 'Linho (Pureza) -> Homem (Humanidade)', colorClass: 'border-slate-400 text-slate-600 bg-slate-50' },
            { cor: 'Azul', povo: 'Mundo', titulo: 'João — O Filho de Deus', icon: '🦅', strategy: 'Linguagem espiritual profunda, as 7 declarações "Eu Sou", foco na divindade.', ref: 'João 1:1', connection: 'Azul (Céu) -> Águia (Revelação)', colorClass: 'border-blue-500 text-blue-600 bg-blue-50' }
          ].map((item, i) => (
            <div key={i} className={`bg-white dark:bg-slate-800 p-8 rounded-[40px] border-l-[12px] ${item.colorClass.split(' ')[0]} shadow-xl space-y-4`}>
              <div className="flex justify-between items-center">
                <span className="text-3xl">{item.icon}</span>
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${item.colorClass.split(' ')[1]} ${item.colorClass.split(' ')[2]}`}>{item.povo}</span>
              </div>
              <h4 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-slate-800 dark:text-white leading-none">{item.titulo}</h4>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed italic">"{item.strategy}"</p>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                <p className="text-xs font-black text-indigo-500 uppercase tracking-widest mb-1">{item.ref}</p>
                <p className="text-sm font-black text-slate-800 dark:text-white uppercase italic tracking-tighter">🔥 Conexão: {item.connection}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-950 p-8 md:p-12 rounded-[40px] text-white text-center relative overflow-hidden border border-white/5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600/20 via-transparent to-rose-600/20"></div>
          <p className="text-lg md:text-2xl font-black italic tracking-tighter leading-tight uppercase relative z-10">
            “A porta do Tabernáculo pregava para 4 povos… antes de existirem os Evangelhos.”
          </p>
        </div>
      </section>

      {/* SEÇÃO 7: A CRUZ NO DESERTO */}
      <section className="bg-white dark:bg-slate-900 p-8 md:p-14 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none"></div>
        <div className="text-center mb-12">
          <span className="text-rose-600 font-black uppercase tracking-[0.5em] text-[9px] mb-4 block italic">Geometria do Mobiliário</span>
          <h3 className="text-2xl md:text-5xl font-black uppercase italic tracking-tighter text-slate-800 dark:text-white leading-tight">✝️ A Cruz no Deserto</h3>
          <p className="text-slate-500 font-bold italic mt-4">O Tabernáculo desenha uma cruz perfeita no chão do deserto.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { pos: 'Base', item: 'Altar de Bronze', sign: 'Justificação', desc: 'Onde o pecado é julgado.', color: 'text-rose-600', bg: 'bg-rose-50' },
            { pos: 'Haste', item: 'Pia de Bronze', sign: 'Santificação', desc: 'Lavagem pela Palavra.', color: 'text-blue-600', bg: 'bg-blue-50' },
            { pos: 'Braço Esq.', item: 'Mesa dos Pães', sign: 'Comunhão', desc: 'Alimento espiritual.', color: 'text-amber-600', bg: 'bg-amber-50' },
            { pos: 'Braço Dir.', item: 'Candelabro', sign: 'Iluminação', desc: 'Luz do Espírito.', color: 'text-yellow-600', bg: 'bg-yellow-50' },
            { pos: 'Centro', item: 'Altar de Incenso', sign: 'Intercessão', desc: 'Oração dos santos.', color: 'text-purple-600', bg: 'bg-purple-50' },
            { pos: 'Topo', item: 'Arca da Aliança', sign: 'Glorificação', desc: 'Presença de Deus.', color: 'text-indigo-600', bg: 'bg-indigo-50' }
          ].map((movel, i) => (
            <div key={i} className="p-6 rounded-[30px] border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-rose-400 transition-all">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1">{movel.pos}</span>
              <h4 className={`text-lg font-black uppercase italic tracking-tighter ${movel.color}`}>{movel.item}</h4>
              <div className={`inline-block px-2 py-0.5 rounded-full ${movel.bg} dark:bg-slate-900 text-[9px] font-black uppercase tracking-widest ${movel.color} mb-2`}>
                {movel.sign}
              </div>
              <p className="text-xs text-slate-500 italic leading-tight">{movel.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 8: AS 4 COBERTURAS */}
      <section className="bg-slate-900 p-8 md:p-14 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-600/20 to-transparent"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1.5 h-10 bg-indigo-500 rounded-full"></div>
            <h3 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">🛡️ As 4 Coberturas: O Mistério do Exterior</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { layer: '1. Peles de Texugo', focus: 'Exterior', meaning: 'Humildade', desc: 'Sem beleza aparente. Cristo como homem comum.', color: 'text-slate-400' },
              { layer: '2. Peles de Carneiro', focus: 'Vermelho', meaning: 'Sacrifício', desc: 'O sangue que cobre a congregação.', color: 'text-rose-400' },
              { layer: '3. Pelos de Cabra', focus: 'Expiação', meaning: 'Substituição', desc: 'O bode emissário levando o pecado.', color: 'text-amber-400' },
              { layer: '4. Linho Fino', focus: 'Interior', meaning: 'Glória', desc: 'A justiça divina revelada aos sacerdotes.', color: 'text-indigo-300' }
            ].map((layer, i) => (
              <div key={i} className="p-6 rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className={`text-base font-black uppercase italic tracking-tighter ${layer.color} mb-2`}>{layer.layer}</h4>
                <div className="flex gap-2 mb-3">
                  <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 bg-white/10 rounded-full">{layer.focus}</span>
                  <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded-full">{layer.meaning}</span>
                </div>
                <p className="text-xs text-slate-400 italic leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 9: O SUMO SACERDOTE & AS BASES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="bg-indigo-50 dark:bg-indigo-900/10 p-8 md:p-12 rounded-[40px] border border-indigo-100 dark:border-indigo-800">
          <h3 className="text-xl md:text-3xl font-black uppercase italic tracking-tighter text-indigo-900 dark:text-indigo-100 mb-8 flex items-center gap-3">
            <span>💎</span> O Sumo Sacerdote
          </h3>
          <div className="space-y-6">
            {[
              { item: 'Peitoral (12 Pedras)', desc: 'Cristo nos carrega no peito (amor) e nos ombros (força).' },
              { item: 'Urim e Tumim', desc: 'Luz e Perfeição. A vontade de Deus revelada plenamente.' },
              { item: 'Mitra de Santidade', desc: 'A mente de Cristo totalmente focada na glória do Pai.' }
            ].map((p, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-black">{i+1}</div>
                <div>
                  <h4 className="text-base font-black uppercase italic tracking-tighter text-indigo-800 dark:text-indigo-200">{p.item}</h4>
                  <p className="text-sm text-indigo-600/70 dark:text-indigo-400/70 italic">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 dark:bg-slate-800/50 p-8 md:p-12 rounded-[40px] border border-slate-200 dark:border-slate-700 flex flex-col justify-center">
          <span className="text-slate-400 font-black uppercase tracking-[0.4em] text-[9px] mb-4 block italic">O Fundamento de Tudo</span>
          <h3 className="text-xl md:text-3xl font-black uppercase italic tracking-tighter text-slate-800 dark:text-white mb-4">🏗️ As Bases de Prata</h3>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 italic leading-relaxed mb-6">
            100 bases de prata sustentavam todo o Tabernáculo. No código bíblico, a prata representa a <strong>Redenção</strong> (o preço pago pelo resgate).
          </p>
          <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
            <p className="text-xs font-black text-indigo-600 uppercase tracking-widest">👉 Lição: Nada no Reino subsiste sem o fundamento da Redenção.</p>
          </div>
        </section>
      </div>

      {/* SEÇÃO 10: FUNDAMENTOS PROFÉTICOS */}
      <section className="space-y-8">
        <div className="text-center">
           <h3 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-slate-800 dark:text-white">👁️ Fundamentos Proféticos do Sistema</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { id: 1, title: 'Ezequiel 1:10', desc: 'A raiz dos 4 seres. Estrutura eterna do governo de Deus.', icon: '👁️' },
            { id: 2, title: 'Apocalipse 5:5-6', desc: 'O Leão e o Cordeiro. Cristo como Rei e Sacrifício.', icon: '👑' },
            { id: 3, title: 'Isaías 53:5', desc: 'O Servo (Escarlate). O coração da redenção.', icon: '🩸' },
            { id: 4, title: 'Filipenses 2:6-8', desc: 'Deus -> Homem. O movimento da porta: Céu -> Terra.', icon: '👤' },
            { id: 5, title: 'Salmo 24:7-10', desc: 'O Rei da Glória. Conecta Porta + Rei (Mateus).', icon: '👑' },
            { id: 6, title: 'João 1:14', desc: 'O Verbo habitou. Jesus = Tabernáculo Vivo.', icon: '🕊️' },
            { id: 7, title: 'Hebreus 9:12', desc: 'O caminho pelo sangue. Escarlate -> Acesso.', icon: '🩸' },
            { id: 8, title: 'João 10:9', desc: 'Jesus é a Porta. Literal espiritual.', icon: '🚪' },
            { id: 9, title: 'Gênesis 9:13', desc: 'Cores e Aliança. Misericórdia no céu.', icon: '🌈' },
            { id: 10, title: 'Êxodo 28:5-6', desc: 'Cores no Sacerdote. Cristo é Porta e Sacerdote.', icon: '🔥' },
            { id: 11, title: 'Colossenses 1:16-17', desc: 'Cristo é Tudo. Convergência das 4 dimensões.', icon: '👑' }
          ].map((point) => (
            <div key={point.id} className="bg-white dark:bg-slate-800 p-6 rounded-[30px] border border-slate-100 dark:border-slate-700 shadow-md flex items-start gap-4 hover:border-indigo-400 transition-all">
              <span className="text-2xl">{point.icon}</span>
              <div>
                <h4 className="text-base font-black uppercase italic tracking-tighter text-indigo-600">{point.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 italic leading-tight mt-1">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
        </div>
      ) : studyType === 'eden' ? (
        <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
          {/* HEADER ÉDEN */}
          <div className="text-center space-y-4">
            <span className="text-emerald-500 font-black uppercase tracking-[0.5em] text-[10px] block italic">Estudo Definitivo • Nível Trono</span>
            <h3 className="text-3xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-800 dark:text-white leading-none">🌿 Jardim do Éden <br/><span className="text-emerald-600">+ Códigos Ocultos</span></h3>
          </div>

          {/* GRID DE 15 PONTOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: '01', icon: '🧠', title: 'Etimologia Profunda', desc: 'Éden (ʿeden) = Prazer, Delícia. Ligação com "edinnu" (planície fértil). Presença = Prazer verdadeiro.' },
              { id: '02', icon: '🌍', title: 'Geografia Oculta', desc: '4 Rios: Pisom (Provisão), Giom (Vida), Tigre (Rapidez), Eufrates (Fertilidade). Fonte espiritual da terra.' },
              { id: '03', icon: '🌳', title: 'Estrutura Central', desc: 'Árvore da Vida (Dependência) vs Conhecimento (Autonomia). A escolha foi sobre governo espiritual.' },
              { id: '04', icon: '👑', title: 'Adão Sacerdote', desc: 'Abad (Servir) e Shamar (Guardar). Termos técnicos do Templo. Adão foi o primeiro Sumo Sacerdote.' },
              { id: '05', icon: '👁️', title: 'Face a Face', desc: 'Teofania visível. O homem foi criado para viver vendo Deus. Acesso sem véu e glória como veste.' },
              { id: '06', icon: '🐍', title: 'A Queda', desc: 'Dúvida e Autonomia. Pecado = Independência de Deus. Resultado: Morte espiritual e separação.' },
              { id: '07', icon: '⚔️', title: 'Querubins', desc: 'Guardiões da Glória. Bloqueio da presença para proteção. Conexão com Arca e Apocalipse.' },
              { id: '08', icon: '🧬', title: 'Templo Original', desc: 'Éden é o protótipo do Tabernáculo. A Bíblia é o projeto de reconstrução do Éden.' },
              { id: '09', icon: '🌋', title: 'Monte de Deus', desc: 'Ezequiel 28 revela o Éden como monte santo. Padrão repetido no Sinai e Sião.' },
              { id: '10', icon: '🌌', title: 'Dimensão Dupla', desc: 'Portal entre Céu e Terra. Realidade física e espiritual em perfeita convergência.' },
              { id: '11', icon: '✝️', title: 'Cristo: Restauração', desc: 'Jesus é a Face de Deus restaurada. Onde a morte entrou pela árvore, a vida venceu na Cruz.' },
              { id: '12', icon: '🩸', title: 'Caminho de Volta', desc: 'Queda -> Sacrifício -> Redenção -> Acesso. O véu rasgado reabre o portal do Éden.' },
              { id: '13', icon: '🌳', title: 'Apocalipse', desc: 'O retorno ao Éden em nível eterno. Rio da Vida e Árvore da Vida. "Verão a Sua Face".' },
              { id: '14', icon: '🧠', title: 'Códigos Finais', desc: 'Presença, Sacerdócio, Governo, Acesso e Face. O objetivo final é ver Deus.' },
              { id: '15', icon: '👑', title: 'Revelação Suprema', desc: 'O Éden é o projeto original. Apocalipse é o retorno. Deus quer restaurar o acesso à Sua FACE.' }
            ].map((point, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-xl hover:border-emerald-500 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="text-6xl font-black italic">{point.id}</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{point.icon}</span>
                  <h4 className="text-xl font-black uppercase italic tracking-tighter text-slate-800 dark:text-white">{point.title}</h4>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 italic leading-relaxed relative z-10">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-emerald-600 p-12 rounded-[60px] text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
            <p className="text-xl md:text-4xl font-black italic tracking-tighter leading-tight uppercase relative z-10">
              “O homem perdeu um jardim… mas Deus nunca quis apenas restaurar um lugar — Ele quer restaurar o acesso à Sua FACE.”
            </p>
          </div>
        </div>
      ) : studyType === 'abraham' ? (
        <AbrahamJourney />
      ) : studyType === 'martyrs' ? (
        <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
          <MartyrsExplorer />
        </div>
      ) : studyType === 'apocrypha' ? (
        <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
          <ApocryphaExplorer />
        </div>
      ) : studyType === 'intertestamental' ? (
        <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
          <SpecialStudiesExplorer onInject={handleInject} />
        </div>
      ) : (
        <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
          {/* BUSCA E FILTROS */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-slate-900 p-6 rounded-[30px] border border-slate-100 dark:border-slate-800 shadow-xl">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar parábola ou referência..."
                value={parableSearch}
                onChange={(e) => setParableSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-amber-500 transition-all text-slate-800 dark:text-white font-bold"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
              {(['Todos', 'Antigo', 'Novo'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setParableFilter(f)}
                  className={`px-6 py-2 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all whitespace-nowrap ${parableFilter === f ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* LISTA DE PARÁBOLAS */}
          <div className="grid grid-cols-1 gap-6">
            {filteredParables.map((parable) => (
              <div 
                key={parable.id}
                className={`bg-white dark:bg-slate-900 rounded-[40px] border transition-all overflow-hidden ${expandedParable === parable.id ? 'border-amber-500 ring-4 ring-amber-500/10 shadow-2xl' : 'border-slate-100 dark:border-slate-800 shadow-lg hover:border-amber-300'}`}
              >
                <button 
                  onClick={() => setExpandedParable(expandedParable === parable.id ? null : parable.id)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black shadow-lg ${parable.testament === 'Antigo' ? 'bg-slate-700' : 'bg-amber-600'}`}>
                      {parable.testament === 'Antigo' ? 'AT' : 'NT'}
                    </div>
                    <div>
                      <span className="text-amber-600 font-black uppercase tracking-widest text-[10px] block mb-1">{parable.reference}</span>
                      <h4 className="text-xl md:text-3xl font-black uppercase italic tracking-tighter text-slate-800 dark:text-white leading-none">{parable.title}</h4>
                    </div>
                  </div>
                  {expandedParable === parable.id ? <ChevronDown className="w-8 h-8 text-amber-600" /> : <ChevronRight className="w-8 h-8 text-slate-300" />}
                </button>

                <AnimatePresence>
                  {expandedParable === parable.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                    >
                      <div className="px-6 md:px-12 pb-12 space-y-10 border-t border-slate-50 dark:border-slate-800 pt-10">
                        {/* CONTEXTO */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-6 bg-amber-600 rounded-full"></div>
                              <h5 className="text-sm font-black uppercase tracking-widest text-slate-400">Contexto Bíblico</h5>
                            </div>
                            <p className="text-lg text-slate-700 dark:text-slate-300 italic leading-relaxed bible-text">
                              {parable.context}
                            </p>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-6 bg-indigo-600 rounded-full"></div>
                              <h5 className="text-sm font-black uppercase tracking-widest text-slate-400">Contexto Histórico & Cultural</h5>
                            </div>
                            <p className="text-lg text-slate-700 dark:text-slate-300 italic leading-relaxed bible-text">
                              {parable.historicalCultural}
                            </p>
                          </div>
                        </div>

                        {/* EXEGESE E SIGNIFICADO */}
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[40px] border border-slate-100 dark:border-slate-700 space-y-6">
                          <div className="space-y-2">
                            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600">Análise Exegética (Originais)</h5>
                            <p className="text-xl font-bold text-slate-800 dark:text-white italic leading-relaxed">
                              {parable.exegesis}
                            </p>
                          </div>
                          <div className="h-px bg-slate-200 dark:bg-slate-700 w-full"></div>
                          <div className="space-y-2">
                            <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600">Significado Teológico Central</h5>
                            <p className="text-xl font-black text-slate-900 dark:text-slate-100 uppercase italic tracking-tighter leading-tight">
                              {parable.theologicalMeaning}
                            </p>
                          </div>
                        </div>

                        {/* APLICAÇÃO */}
                        <div className="bg-amber-600 p-8 md:p-12 rounded-[40px] text-white shadow-xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
                            <span className="text-6xl font-black italic">⚡</span>
                          </div>
                          <div className="relative z-10">
                            <h5 className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-80">Aplicação Prática para Hoje</h5>
                            <p className="text-xl md:text-3xl font-black italic tracking-tighter leading-tight uppercase">
                              {parable.practicalApplication}
                            </p>
                          </div>
                        </div>

                        {/* AÇÕES */}
                        <div className="flex flex-wrap gap-4 pt-4">
                          <button 
                            onClick={() => handleInjectParable(parable)}
                            className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3"
                          >
                            {ICON_SERMON('w-5 h-5')} Injetar Estudo
                          </button>
                          <button 
                            onClick={() => setExpandedParable(null)}
                            className="px-8 bg-white dark:bg-slate-800 text-slate-400 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest border border-slate-100 dark:border-slate-700"
                          >
                            Fechar
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {filteredParables.length === 0 && (
              <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-[40px] border border-dashed border-slate-200 dark:border-slate-800">
                <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500 font-bold italic">Nenhuma parábola encontrada para sua busca.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* BOTÕES DE INJEÇÃO - FIXOS NO FINAL DO TEXTO */}
      <div className="pt-12 flex flex-col sm:flex-row gap-4 w-full max-w-2xl mx-auto">
         <button 
           onClick={() => handleInject(studyType === 'tabernacle' ? 'Revelação do Trono Completa' : studyType === 'eden' ? 'Jardim do Éden Completo' : studyType === 'abraham' ? 'Jornada de Abraão' : 'Parábolas da Bíblia', studyType === 'tabernacle' ? tabernacleContent : studyType === 'eden' ? edenContent : studyType === 'abraham' ? 'Estudo sobre a Jornada de Abraão injetado com sucesso.' : 'Selecione uma parábola individual para injetar.')}
           className={`flex-1 ${studyType === 'tabernacle' ? 'bg-indigo-600' : studyType === 'eden' ? 'bg-emerald-600' : studyType === 'abraham' ? 'bg-sky-600' : studyType === 'martyrs' ? 'bg-red-900' : studyType === 'apocrypha' ? 'bg-violet-600' : studyType === 'intertestamental' ? 'bg-fuchsia-600' : 'bg-amber-600'} text-white py-6 rounded-[30px] font-black uppercase text-xs tracking-widest shadow-2xl transition-all flex items-center justify-center gap-4 border-4 border-white dark:border-slate-900`}
           disabled={studyType === 'parables' || studyType === 'abraham' || studyType === 'martyrs' || studyType === 'apocrypha'}
         >
            {ICON_SERMON('w-6 h-6')} {studyType === 'parables' || studyType === 'intertestamental' ? 'Injeção Individual Ativa' : (studyType === 'abraham' || studyType === 'martyrs' || studyType === 'apocrypha') ? 'Injeção Indisponível' : 'Injetar no Sermão'}
         </button>
         <button 
           onClick={() => handleInject(studyType === 'tabernacle' ? 'Aula: Matriz Nível Trono' : studyType === 'eden' ? 'Aula: Éden Protótipo' : studyType === 'abraham' ? 'Aula: Jornada de Abraão' : 'Aula: Parábolas', studyType === 'tabernacle' ? tabernacleContent : studyType === 'eden' ? edenContent : studyType === 'abraham' ? 'Estudo sobre a Jornada de Abraão injetado com sucesso.' : 'Selecione uma parábola individual para injetar.')}
           className="flex-1 bg-slate-900 text-white py-6 rounded-[30px] font-black uppercase text-xs tracking-widest shadow-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-4 border-4 border-white dark:border-slate-900"
           disabled={studyType === 'parables' || studyType === 'abraham' || studyType === 'martyrs' || studyType === 'apocrypha'}
         >
            {ICON_STUDY('w-6 h-6')} {studyType === 'parables' || studyType === 'intertestamental' ? 'Injeção Individual Ativa' : (studyType === 'abraham' || studyType === 'martyrs' || studyType === 'apocrypha') ? 'Injeção Indisponível' : 'Injetar na Aula'}
         </button>
      </div>
    </div>
  );
};

export default DeepStudiesTab;
