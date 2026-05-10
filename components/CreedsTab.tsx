import React, { useState } from 'react';

const CREEDS = [
  {
    id: 'apostles',
    title: 'O Credo Apostólico',
    subtitle: 'Séc. II - VIII',
    intro: 'A mais antiga confissão de fé cristã, baseada na regra de fé usada para instrução de novos convertidos.',
    text: `Creio em Deus Pai, Todo-poderoso, Criador do Céu e da terra.
    
Creio em Jesus Cristo, seu único Filho, nosso Senhor, o qual foi concebido por obra do Espírito Santo; nasceu da virgem Maria; padeceu sob o poder de Pôncio Pilatos, foi crucificado, morto e sepultado; ressurgiu dos mortos ao terceiro dia; subiu ao Céu; está sentado à direita de Deus Pai Todo-poderoso, donde há de vir para julgar os vivos e os mortos.

Creio no Espírito Santo; na Santa Igreja Universal; na comunhão dos santos; na remissão dos pecados; na ressurreição do corpo; na vida eterna. Amém.`
  },
  {
    id: 'nicene',
    title: 'O Credo de Niceia',
    subtitle: '325 d.C. e 381 d.C.',
    intro: 'Formulado para defender a fé cristã contra o arianismo, afirmando a divindade plena de Cristo.',
    text: `Cremos em um só Deus, Pai Todo-Poderoso, criador do céu e da terra, de todas as coisas visíveis e invisíveis.

Cremos em um só Senhor, Jesus Cristo, Filho Unigênito de Deus, gerado do Pai desde a eternidade; Luz da Luz, verdadeiro Deus de verdadeiro Deus, gerado, não criado, consubstancial ao Pai. Por ele todas as coisas foram feitas. Por nós, homens, e para a nossa salvação, desceu dos céus: se encarnou pelo Espírito Santo, no seio da Virgem Maria, e se fez homem. Também por nós foi crucificado sob Pôncio Pilatos; padeceu e foi sepultado. Ressuscitou ao terceiro dia, conforme as Escrituras, e subiu aos céus, onde está sentado à direita do Pai. E de novo há de vir, em sua glória, para julgar os vivos e os mortos; e o seu reino não terá fim.

Cremos no Espírito Santo, Senhor e Doador da vida, que procede do Pai e do Filho, que com o Pai e o Filho é juntamente adorado e glorificado, e que falou através dos profetas.

Cremos na Igreja una, santa, católica e apostólica. Professamos um só batismo para remissão dos pecados. E esperamos a ressurreição dos mortos e a vida do mundo que há de vir. Amém.`
  },
  {
    id: '1689',
    title: 'Confissão Batista de 1689',
    subtitle: '1689 (Segunda Confissão de Fé Batista de Londres)',
    intro: 'Um dos documentos mais importantes para os batistas reformados ao longo da história, baseado na Confissão de Westminster com algumas alterações focadas no governo da igreja e no batismo.',
    text: `[Resumo dos Capítulos Principais - Edição de Bolso]

CAPÍTULO 1 - DAS SAGRADAS ESCRITURAS
A Sagrada Escritura é a única regra suficiente, certa e infalível de conhecimento, fé e obediência salvadoras.

CAPÍTULO 2 - DE DEUS E DA SANTÍSSIMA TRINDADE
O Senhor nosso Deus, apenas, é um Deus vivo e verdadeiro, cuja subsistência está em Si mesmo, e que de Si mesmo tem toda vida, sendo perfeitamente incompreensível. Neste ser divino e infinito há três subsistências, o Pai, a Palavra (ou Filho), e o Espírito Santo.

CAPÍTULO 3 - DOS DECRETOS DE DEUS
Deus, desde toda a eternidade, pelo muito sábio e santo conselho de sua própria vontade, ordenou de forma livre e inalterável tudo o que acontece...

CAPÍTULO 4 - DA CRIAÇÃO
No princípio aprouve a Deus, o Pai, o Filho, e o Espírito Santo [...] criar, ou fazer o mundo e todas as coisas nele contidas.

CAPÍTULO 8 - DE CRISTO, O MEDIADOR
Aprouve a Deus, em Seu eterno propósito, escolher e ordenar o Senhor Jesus, Seu Filho Unigênito, de acordo com a aliança feita entre eles dois, para ser o mediador entre Deus e os homens...

CAPÍTULO 11 - DA JUSTIFICAÇÃO
Aqueles a quem Deus chama eficazmente, Ele também justifica gratuitamente; não pela infusão de justiça neles, mas pelo perdão de seus pecados...

CAPÍTULO 14 - DA FÉ SALVADORA
A graça da fé, pela qual os eleitos são capacitados a crerem para a salvação de suas almas, é a obra do Espírito de Cristo em seus corações...

CAPÍTULO 29 - DO BATISMO
O Batismo é uma ordenança do Novo Testamento, instituída por Jesus Cristo, para ser para aquele que é batizado, um sinal da sua comunhão com ele na sua morte e ressurreição... Os que realmente professam arrependimento para com Deus, fé e obediência ao Senhor Jesus Cristo, são os únicos sujeitos apropriados dessa ordenança. A imersão, ou mergulho da pessoa na água, é necessária para a devida administração dessa ordenança.

(*Nota: Esta é uma síntese com trechos chave da confissão de 32 capítulos, destacando a essência da doutrina protestante e particularidades da teologia pactual batista.)`
  }
];

const CreedsTab: React.FC = () => {
  const [activeId, setActiveId] = useState(CREEDS[0].id);
  const activeDoc = CREEDS.find(c => c.id === activeId);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4 mb-2">
        <h1 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">Biblioteca de Credos</h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
          As âncoras da fé que sustentaram a Igreja ao longo dos séculos. Consulte as declarações confessionais que definem a doutrina cristã cristocêntrica.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Menu/Tabs lateral na versão desktop, menu de botões no topo no mobile */}
        <div className="lg:w-1/3 flex flex-col gap-3">
          {CREEDS.map((creed) => (
            <button
              key={creed.id}
              onClick={() => setActiveId(creed.id)}
              className={`text-left p-5 rounded-2xl border transition-all ${activeId === creed.id ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/40 scale-[1.02]' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700'}`}
            >
              <h3 className="font-bold text-lg font-serif mb-1">{creed.title}</h3>
              <p className={`text-xs font-mono ${activeId === creed.id ? 'text-indigo-200' : 'text-slate-500'}`}>{creed.subtitle}</p>
            </button>
          ))}
        </div>

        {/* Conteúdo Ativo */}
        <div className="lg:w-2/3 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-[0.02] pointer-events-none">
            <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L9 8H3L8 12L6 18L12 14L18 18L16 12L21 8H15L12 2Z" />
            </svg>
          </div>
          
          {activeDoc && (
            <div className="space-y-6 relative z-10 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="border-b border-slate-100 dark:border-slate-700 pb-6">
                <h2 className="text-2xl lg:text-4xl font-serif font-black text-slate-900 dark:text-white capitalize leading-tight mb-2">
                  {activeDoc.title}
                </h2>
                <span className="inline-block bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-widest mb-4">
                  {activeDoc.subtitle}
                </span>
                <p className="text-slate-500 dark:text-slate-400 font-medium italic">
                  "{activeDoc.intro}"
                </p>
              </div>
              
              <div className="prose prose-slate dark:prose-invert max-w-none font-serif text-lg leading-loose whitespace-pre-wrap text-slate-800 dark:text-slate-200">
                {activeDoc.text}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreedsTab;
