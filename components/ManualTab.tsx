
import React from 'react';
import { 
  BookOpen, RefreshCw, Search, GraduationCap, Settings, UserCheck, 
  ShieldCheck, Database, FileText, Share2, PenTool, Users, 
  Book, Layers, Type, Library, MessageSquare, Droplets, Heart, Maximize,
  Target, Mic
} from 'lucide-react';

const ManualTab: React.FC = () => {
  const sections = [
    {
      id: 'sync',
      title: 'PASSO ZERO: Sincronização Vital',
      icon: <RefreshCw className="text-rose-500" />,
      color: 'bg-rose-50 border-rose-200',
      content: 'O Dabar foi projetado para funcionar de forma ultrarrápida e offline.\n\n1. No menu lateral, navegue até a aba Sistema (engrenagem).\n2. Encontre a seção "Motor Teológico - Omni-Shield".\n3. Clique separadamente para baixar a Bíblia e o Dicionário Strong.\n4. Aguarde a indexação de cada um chegar a 100%.\n5. Sem isso as buscas não funcionarão.'
    },
    {
      id: 'search',
      title: 'Barra de Pesquisa Universal',
      icon: <Search className="text-zinc-500" />,
      color: 'bg-zinc-50 border-zinc-200',
      content: 'A barra de pesquisa no topo é seu atalho principal.\n\n1. Clique na barra em qualquer lugar do app.\n2. Digite uma palavra (ex: "amor"), referência (ex: "João 3:16") ou código (ex: "H125").\n3. Pressione Enter ou clique no resultado desejado para acessá-lo.'
    },
    {
      id: 'bible',
      title: 'Santuário (Concordância & Bíblia)',
      icon: <BookOpen className="text-indigo-500" />,
      color: 'bg-indigo-50 border-indigo-200',
      content: 'Sua base de leitura e exegese.\n\n1. Use os menus no topo para escolher o Livro e Capítulo.\n2. Leia e medite nos versículos.\n3. Utilize os atalhos em cada versículo para investigar no Dicionário Strong ou abrir visões paralelas.\n4. Explore nosso acervo com 469 esboços no Antigo Testamento e 269 no Novo Testamento.\n5. No rodapé, ative "Conexões Expositivas" (visualiza referências cruzadas e o encadeamento de ideias) ou "Contexto Global" (entenda o panorama histórico-redentivo de cada seção).'
    },
    {
      id: 'strong',
      title: 'Dicionário Strong',
      icon: <FileText className="text-emerald-500" />,
      color: 'bg-emerald-50 border-emerald-200',
      content: 'Acesso direto aos originais grego e hebraico.\n\n1. Clique na aba Dicionário Strong no menu esquerdo.\n2. Digite o código de Strong (Ex: H125 para hebraico ou G2424 para grego).\n3. Explore a fonética, definição, origem e todas as ocorrências na Bíblia.'
    },
    {
      id: 'teia',
      title: 'Aba Teia',
      icon: <Share2 className="text-blue-500" />,
      color: 'bg-blue-50 border-blue-200',
      content: 'Um mapa interativo conectando a Bíblia.\n\n1. Abra a Aba Teia.\n2. Procure por um livro, termo ou pessoa.\n3. A plataforma desenha bolinhas e linhas mostrando como temas de Gênesis a Apocalipse se ligam organicamente. Arraste-os pela tela para reorganizar visualmente.'
    },
    {
      id: 'studio',
      title: 'Estúdio Pro',
      icon: <PenTool className="text-purple-500" />,
      color: 'bg-purple-50 border-purple-200',
      content: 'O seu local de montagem de pregações.\n\n1. Clique em "+ Novo Esboço" para gerar um texto em branco.\n2. Aplique formatações como Títulos e Marcadores.\n3. Use o botão Hub no menu superior da Bíblia ou Quotes para jogar trechos diretamente no seu editor de sermões. Tudo é salvo no seu dispositivo.'
    },
    {
      id: 'pastor',
      title: 'Pastor DNA',
      icon: <Users className="text-orange-500" />,
      color: 'bg-orange-50 border-orange-200',
      content: 'Bancada do ministério e esboços estruturados.\n\n1. Em Pastor DNA você gerencia coleções de pregações.\n2. Crie um Rascunho com o "DNA" do sermão: Defina se ele é de ensino, de exortação, pastoral ou evangelistico.\n3. Salve para revisar e lapidar os pontos antes do púlpito.'
    },
    {
      id: 'journal',
      title: 'Diário',
      icon: <Book className="text-teal-500" />,
      color: 'bg-teal-50 border-teal-200',
      content: 'Um caderno digital confidencial e intocável.\n\n1. Vá na aba Diário.\n2. Adicione uma reflexão sobre a meditação do dia com a data atual.\n3. Volte aqui para ler antigas orações e testemunhos, visualizando a mão e direção de Deus no longo prazo em sua vida.'
    },
    {
      id: 'hub',
      title: 'Hub',
      icon: <Layers className="text-cyan-500" />,
      color: 'bg-cyan-50 border-cyan-200',
      content: 'O seu painel de controle central.\n\n1. Entre em Hub e veja todos os "cartões" (cards) de navegação do Dabar.\n2. Em um único lugar você descobre o que estudar e atalhos fáceis.\n3. Excelente visão geral das ferramentas escondidas do software.'
    },
    {
      id: 'typology',
      title: 'Tipologia Bíblica',
      icon: <Type className="text-fuchsia-500" />,
      color: 'bg-fuchsia-50 border-fuchsia-200',
      content: 'O estudo da sombra e substância.\n\n1. Selecione Tipologia e encontre pessoas, eventos ou coisas do Antigo Testamento.\n2. Clique no título da sombra (ex: A Arca de Noé).\n3. O sistema abre os versos mostrando como aquilo era um símbolo profético cujo "antítipo" se cumpre totalmente em Cristo ou Sua cruz.'
    },
    {
      id: 'library',
      title: 'Biblioteca OCR',
      icon: <Library className="text-rose-500" />,
      color: 'bg-rose-50 border-rose-200',
      content: 'Extração de texto de câmeras ou imagens.\n\n1. Abra a Biblioteca OCR e clique em "Novo Documento".\n2. Dê um nome ao seu livro ou nota. Clique no botão de câmera.\n3. Fotografe a página física de um livro teológico que estiver lendo e clique em Extrair. O texto salta para o editor digital.'
    },
    {
      id: 'quotes',
      title: 'Vozes da História',
      icon: <MessageSquare className="text-red-500" />,
      color: 'bg-red-50 border-red-200',
      content: 'A sabedoria dos séculos pasasdos à mão.\n\n1. Navegue por uma vasta coletânea de citações dos heróis da fé (pais da igreja, reformadores).\n2. Procure por autor (Ex: "Calvino") ou tema.\n3. Copie o texto ou envie para o Estúdio Pro para rechear sua exposição.'
    },
    {
      id: 'messages',
      title: 'Manancial de Vida',
      icon: <Droplets className="text-sky-500" />,
      color: 'bg-sky-50 border-sky-200',
      content: 'Mensagens devocionais selecionadas.\n\n1. Deseja um fôlego no meio do dia? Vá no Manancial de Vida.\n2. Cale o silêncio lendo meditações e encorajamentos de vida fundamentados em passagens transformadoras.\n3. Receba incentivos vitais e diretos ao coração.'
    },
    {
      id: 'prayers',
      title: 'Orações Bíblicas',
      icon: <Heart className="text-pink-500" />,
      color: 'bg-pink-50 border-pink-200',
      content: 'Aprenda dos maiores homens de oração.\n\n1. Aqui nós listamos as orações originais mais poderosas registradas na Escritura.\n2. Clique em uma oração como as de Jó, Davi ou de Jesus no Getsêmani.\n3. Analise o contexto teológico em que elas foram feitas, seu conteúdo e aprenda o modelo para as suas próprias.'
    },
    {
      id: 'academy',
      title: 'Dabar Academy & Idiomas Bíblicos',
      icon: <GraduationCap className="text-amber-500" />,
      color: 'bg-amber-50 border-amber-200',
      content: 'A sua universidade de teologia.\n\n1. Esta seção comporta trilhas e PDFs.\n2. Veja aulas sobre Hermenêutica, História da Igreja e os guias completos dos idiomas.\n3. Expanda seus horizontes sendo um aluno em um núcleo focado no acesso direto aos materiais mais valiosos.'
    },
    {
      id: 'settings',
      title: 'Sistema (Configurações & Sincronização)',
      icon: <Settings className="text-slate-500" />,
      color: 'bg-slate-50 border-slate-200',
      content: 'Aqui está a engrenagem profunda da ferramenta.\n\n1. Aqui você realiza o Passo Zero (Sincronizar Bíblia DB).\n2. Na parte de Personalização, mude do Modo Claro para os três modos noturnos lindíssimos.\n3. Mude também sua matriz teológica na seção "Lente" caso ela esteja habilitada.'
    },
    {
      id: 'account',
      title: 'Ajustes da Conta (Entitlement Gate)',
      icon: <UserCheck className="text-slate-600" />,
      color: 'bg-slate-100 border-slate-300',
      content: 'Autentique sua conta e libere amarras.\n\n1. Esta seção monitora seu vínculo corporativo e plano com o Dabar (Firebase).\n2. Em "Conta & Segurança" você visualiza quem está logado ou se deve sair (Logout) do modo Visitante.'
    },
    {
      id: 'injection',
      title: 'Captura de Conteúdo (Botão Alvo)',
      icon: <Target className="text-amber-500" />,
      color: 'bg-amber-50 border-amber-200',
      content: 'Envie versículos ou tesouros teológicos diretamente para o seu sermão.\n\n1. Primeiro, abra um projeto no "Estúdio Pro" e clique em "Pinar como Alvo" (localizado no editor).\n2. Navegue pela Bíblia ou ferramentas exegéticas e procure pelo ícone de Alvo (🎯).\n3. Ao clicar, o conteúdo é capturado e injetado automaticamente na sua pregação sem precisar copiar e colar.'
    },
    {
      id: 'pulpit',
      title: 'Modo Púlpito (Ministração)',
      icon: <Mic className="text-zinc-700" />,
      color: 'bg-zinc-50 border-zinc-200',
      content: 'Interface limpa para o momento da pregação.\n\n1. Dentro de qualquer projeto no "Estúdio Pro", clique no botão "Acessar Púlpito".\n2. O app removerá todos os menus e distrações, aumentando a fonte do seu texto.\n3. Use em tablets ou celulares para acompanhar seu esboço no altar com foco total.'
    },
    {
      id: 'fullscreen',
      title: 'Modo Tela Cheia (Foco Total)',
      icon: <Maximize className="text-slate-700" />,
      color: 'bg-slate-50 border-slate-200',
      content: 'Para uma imersão completa sem distrações.\n\n1. Olhe para o topo superior direito do aplicativo (ao lado da barra de pesquisa).\n2. Clique no ícone de quatro cantos (quadrado aberto).\n3. O app ocupará toda a sua tela monitor/celular.\n4. Para sair, clique no mesmo botão ou pressione "ESC" no seu teclado.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 pb-32">
      <header className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-600 rounded-3xl shadow-xl mb-6 transform -rotate-3">
          <BookOpen className="text-white w-10 h-10" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white uppercase tracking-tighter italic leading-none">
          Manual do <span className="text-indigo-600">Usuário</span>
        </h1>
        <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em] mt-4">Guia de Exploração Dabar</p>
      </header>

      <div className="space-y-8">
        {/* AVISO CRÍTICO */}
        <div className="bg-rose-600 p-8 rounded-[40px] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
             <ShieldCheck size={120} />
          </div>
          <div className="relative z-10">
             <div className="flex items-center gap-3 mb-4">
                <Database className="text-white animate-pulse" />
                <span className="text-white font-black uppercase text-[10px] tracking-widest">Atenção Prioritária</span>
             </div>
             <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4">Sincronização do Motor (Passo a Passo)</h2>
             <div className="text-rose-100 text-sm leading-relaxed font-bold space-y-2">
               <p>O Dabar foi projetado para funcionar de forma ultrarrápida e offline após a primeira carga, mas ele precisa ser populado primeiro.</p>
               <ol className="list-decimal pl-5 space-y-1 mt-2">
                 <li>No menu lateral, navegue até a aba <strong>Sistema</strong> (ícone de engrenagem).</li>
                 <li>Role até a seção "Motor Teológico - Omni-Shield".</li>
                 <li><strong>Sincronização 1</strong>: Clique no botão da <strong>Bíblia (ACF)</strong> e aguarde a indexação chegar a 100%.</li>
                 <li><strong>Sincronização 2</strong>: Depois, clique no botão do <strong>Dicionário Strong</strong> e aguarde a indexação completa.</li>
                 <li>Pronto! Sem isso, as buscas, dicionários e ferramentas de exegese não funcionarão ou mostrarão resultados em branco.</li>
               </ol>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.slice(1).map((section) => (
            <div key={section.id} className={`p-8 rounded-[40px] border-2 ${section.color} shadow-sm hover:shadow-md transition-all`}>
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm mb-6">
                {section.icon}
              </div>
              <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tighter italic mb-3">
                {section.title}
              </h3>
              <div className="text-slate-500 dark:text-slate-400 text-[11px] font-medium leading-relaxed uppercase tracking-wider whitespace-pre-wrap">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-900 p-10 rounded-[40px] border border-slate-100 dark:border-slate-800 text-center">
            <UserCheck className="mx-auto text-indigo-600 mb-4" size={32} />
            <h4 className="text-xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter mb-2">Suporte & Comunidade</h4>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest max-w-sm mx-auto">
              Se encontrar qualquer dificuldade técnica, verifique sua conexão com o Firebase na aba de Ajustes ou entre em contato com nosso suporte via Hotmart.
            </p>
        </div>
      </div>
    </div>
  );
};

export default ManualTab;
