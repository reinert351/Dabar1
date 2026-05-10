import React, { useState } from 'react';
import { CaptureTarget } from '../types';

interface GreatInstrumentsTabProps {
  captureTarget?: CaptureTarget | null;
  onInject?: (title: string, text: string) => void;
}

const INSTRUMENTS = [
  {
    name: 'Maria Woodworth-Etter',
    title: 'A Avó do Movimento Pentecostal',
    quote: 'Eu não sou curadora; Jesus de Nazaré é quem cura. Mostre-me sua fé e eu lhe mostrarei os sinais da Sua presença.',
    paragraphs: [
      'Maria Woodworth-Etter foi uma mulher muito simples, mas incrivelmente usada por Deus. Ela nasceu no ano de 1844, em uma cidadezinha chamada Lisbon, no estado de Ohio, nos Estados Unidos. A época em que ela nasceu era muito difícil. Não existiam as facilidades e os remédios que temos hoje. A vida no campo exigia muito suor e sacrifício diário. Desde bem pequena, Maria já sentia que Deus tinha um plano para ela, mas a vida dura e cheia de obstáculos parecia mostrar o contrário. A sua infância não foi de brincadeiras tranquilas, mas de muito trabalho pesado para ajudar dentro de casa.',
      'Quando ela ainda era muito jovem, uma grande dor atingiu sua família: seu pai faleceu. Essa perda foi um golpe duro e mudou tudo. Maria precisou abandonar a escola e seus estudos para ajudar a mãe e as irmãs a sobreviverem. O trabalho na roça se multiplicou. Ela passava os dias limpando, plantando, colhendo e cuidando dos animais. Mesmo no meio de toda essa pobreza e sem ter tido a chance de estudar direito, o coração dela sempre buscava a Deus. Ela orava escondida e sentia o Senhor bem perto, mesmo sem entender como Ele poderia usá-la no futuro.',
      'Mais tarde, Maria se casou com um homem chamado Philo Hart. Juntos, eles foram morar em uma fazenda e começaram a construir a vida. O sonho de Maria era ter uma família grande, cheia de crianças correndo pelo quintal e trazendo alegria para a casa de madeira onde viviam. Eles trabalhavam incansavelmente na lavoura para tentar garantir o pão de cada dia. A rotina como esposa de um fazendeiro era exaustiva. Ela cozinhava, lavava roupas no rio, ajudava no campo e cuidava da casa. Tudo era feito com muito esforço, esperando dias melhores que pareciam nunca chegar.',
      'Foi então que a vida de Maria foi atingida por uma tragédia impossível de descrever. Em um tempo onde até uma febre comum podia ser fatal, doenças terríveis começaram a rondar sua casa. Um a um, ela viu seus filhos adoecerem gravemente. Sem médicos por perto e sem remédios eficazes, ela passava noites inteiras em claro, segurando seus bebês nos braços, orando com lágrimas no rosto. Mesmo assim, a morte levou cinco dos seus seis filhos ainda muito pequenos. O som do choro daquela mãe ecoava na fazenda enquanto ela enterrava parte do seu coração.',
      'A dor de perder cinco filhos foi tão pesada que Maria entrou em uma tristeza profunda e escura. Ela ficou muito doente, a ponto de quase perder a própria vida. O luto a consumia dia e noite. Qualquer pessoa comum que passasse por isso teria ficado com o coração cheio de ódio, revoltada com o mundo e com raiva de Deus. Ela se perguntava o motivo de tanto sofrimento. Parecia que o sol nunca mais ia brilhar na vida dela. Deitada na cama, fraca e sem vontade de viver, Maria sentia que o fim de sua jornada estava muito próximo.',
      'Mas Deus não havia esquecido de Maria. Foi ali, naquele quarto escuro e cheio de dor, que Ele falou com ela de forma muito clara. Ela ouviu a voz de Jesus chamando para que ela se levantasse e fosse pregar o Evangelho. A princípio, ela teve muito medo e resistiu. Ela pensava: "Como eu posso pregar? Sou apenas uma mulher da roça, não tenho estudos, perdi meus filhos e estou doente." Naquela época, as igrejas não aceitavam que mulheres pregassem, e o preconceito era enorme. Ela achou que seria humilhada e que ninguém daria ouvidos a uma mãe tão ferida.',
      'Após lutar muito com esse chamado, Maria finalmente tomou a decisão mais importante de todas: ela disse "sim" para Deus. Ela fez uma oração sincera, dizendo ao Senhor que se Ele a capacitasse, ela iria a qualquer lugar. Assim que ela entregou sua vida e seus medos totalmente nas mãos de Cristo, algo maravilhoso aconteceu. Ela teve uma visão do céu e sentiu o Espírito Santo a enchendo de força e de um poder que não era humano. A cama de doença ficou vazia, e o coração que antes só tinha luto foi preenchido por um amor gigantesco pelas pessoas perdidas.',
      'As suas primeiras reuniões foram muito simples, realizadas ali mesmo na sua comunidade, para as pessoas da vizinhança. Quando ela levantou para falar pela primeira vez, estava tremendo muito. Mas assim que ela abriu a boca, as palavras não saíram dela, mas do próprio Deus. As pessoas começaram a chorar profundamente, se arrependendo de seus pecados e pedindo perdão a Jesus. O poder de Deus desceu naquele lugar de uma forma tão real que vizinhos pararam o que estavam fazendo para ir ouvir aquela mulher simples falando do amor de Cristo com tanta autoridade.',
      'Rapidamente, as notícias sobre o que estava acontecendo se espalharam. Maria começou a viajar para outras cidades. No entanto, muitas portas se fecharam para ela. Homens de paletó, líderes religiosos, donos de grandes igrejas de tijolos e pessoas importantes da sociedade tinham raiva dela. Eles diziam que era um absurdo uma mulher pregar daquele jeito e que o poder de Deus não se manifestava daquela forma. Muitas vezes, eles expulsaram Maria de seus templos luxuosos e proibiram o povo de ir aos cultos dela, mas a multidão faminta por Deus não se importava com as proibições.',
      'Como não tinha igrejas para pregar, Maria teve uma ideia que mudou o seu ministério. Ela começou a comprar tendas de circo gigantes e lonas muito pesadas, feitas de lona grossa. Ela chegava nas cidades, encontrava um terreno vazio e armava sua tenda. Não importava se estava chovendo, ventando frio ou fazendo muito calor: os terrenos se enchiam. Essas tendas se tornaram lugares sagrados, verdadeiros hospitais espirituais, onde o Céu encontrava a Terra. Algumas de suas tendas eram tão grandes que chegavam a acomodar milhares de pessoas ao mesmo tempo, todas ouvindo atentas.',
      'Nessas reuniões nas tendas, acontecia algo muito especial que marcou a história de Maria. Era o chamado "transe espiritual". Quando o poder de Deus caía sobre o lugar, muitas pessoas ficavam totalmente paralisadas. Às vezes, elas tombavam no chão como se estivessem dormindo; outras vezes, ficavam em pé, estátuas perfeitas, com as mãos levantadas para o céu, sem se mover por horas. Ninguém conseguia acordar ou mexer essas pessoas. Quando o transe passava, elas voltavam a si chorando de alegria, dizendo que tinham visto Jesus e pedindo para serem batizadas.',
      'Além das salvações, os milagres de cura eram constantes e impressionantes. Charretes e mais charretes chegavam nas tendas trazendo pessoas doentes, leprosos, tuberculosos, pessoas que não andavam, não enxergavam ou não ouviam há anos. Os médicos não tinham mais solução para eles. Maria nunca fez show com isso. Ela não usava roupas chiques, não batia nas pessoas e nem gritava. Ela apenas estendia a mão com muita simplicidade, olhava com amor, e orava em nome de Jesus. As muletas eram jogadas longe, os cegos olhavam admirados, e gritos de alegria tomavam conta da tenda.',
      'Todo esse impacto, claro, trouxe muita perseguição. Onde havia luz intensa, o inimigo tentava trazer trevas. Pessoas maldosas pagavam bandidos para irem aos cultos jogar pedras na tenda, estourar bombas caseiras de fumaça e até tentar bater nela. Policiais e juízes tentaram prendê-la várias vezes, acusando-a de mentir ou curandeirismo falso. Homens cruéis traziam agulhas escondidas e espetavam as pessoas que caíam no poder de Deus, apenas para testar e tentar provar que era teatro. Mas as agulhas não causavam dor nem sangravam as pessoas paralisadas, o que deixava os inimigos ainda mais assustados e furiosos.',
      'No meio de toda a violência e ódio, Maria nunca perdeu a calma. Em uma ocasião, quando homens tentaram invadir o altar para agredi-la, ela apenas fechou os olhos, levantou suas duas mãos magras, e orou. A paz de Deus desceu como um escudo de proteção no lugar. O Espírito Santo tomou conta do ambiente com tanta glória que os agressores não conseguiram dar mais nenhum passo. Alguns deles caíram de joelhos, chorando ali mesmo, implorando pela salvação de suas almas. O Senhor sempre foi o grande guarda-costas de Maria, livrando sua serva de todos os laços perigosos.',
      'Maria não parou de pregar até os últimos momentos de sua vida. Quando ela ficou bem idosa, com os cabelos todos brancos e o corpo franzino e cansado pela idade, sua voz ainda tinha o mesmo poder do começo. Nos seus últimos anos, ela estabeleceu um grande Tabernáculo na cidade de Indianápolis, para que o trabalho maravilhoso continuasse firme. Mesmo bem velhinha e fisicamente fraca, quando ela subia no altar, parecia ter a força de um exército inteiro. Ela pregou por mais de quarenta anos, enfrentando o cansaço, para que mais almas fossem para o céu.',
      'Maria Woodworth-Etter faleceu em 1924, aos 80 anos. Hoje, ela é conhecida por muitos como a grande "avó" do Movimento Pentecostal. O seu legado não é sobre uma mulher incrível, mas sobre o que Deus é capaz de fazer quando encontra um coração quebrantado e entregue. O Senhor transformou as lágrimas mais amargas de luto em rios de águas vivas, a fraqueza de uma viúva doente na maior demonstração de força da Sua glória, e o chão de terra batida das piores cidades em pedaços antecipados do paraíso. Ela viveu e morreu provando que Jesus Cristo é o mesmo ontem, hoje e para todo o sempre.'
    ],
    tags: ['Cura Divina', 'Avivamento', 'Mãe de Multidões', 'Pioneirismo', 'Tendas']
  }
];

const GreatInstrumentsTab: React.FC<GreatInstrumentsTabProps> = ({ captureTarget, onInject }) => {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-3xl lg:text-5xl font-black text-rose-800 dark:text-rose-400 tracking-tighter uppercase">Grandes Instrumentos</h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Mergulhe na biografia detalhada e profunda dos maiores vasos usados por Deus na Terra. Descubra os sacrifícios, as lágrimas e as vitórias incontestáveis daqueles que se renderam totalmente ao Altíssimo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {INSTRUMENTS.map((instrument, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group flex flex-col p-8 md:p-14 relative">
            
            <div className="absolute top-10 right-10 text-[10rem] opacity-[0.03] pointer-events-none font-serif rotate-12">
              "
            </div>

            <div className="relative z-10 space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 dark:border-slate-700 pb-8 gap-6">
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-500 transition-colors uppercase tracking-tight mb-2">
                    {instrument.name}
                  </h3>
                  <p className="text-sm md:text-base font-bold text-slate-500 dark:text-slate-400 tracking-[0.25em] uppercase">
                    {instrument.title}
                  </p>
                </div>
                
                {onInject && (
                  <button 
                    onClick={() => {
                        const contentToInject = instrument.paragraphs.join('\n\n');
                        onInject(`A História de ${instrument.name}`, contentToInject);
                    }}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-[0.2em] shadow-lg shadow-indigo-200 dark:shadow-none flex items-center justify-center gap-2 transition-all shrink-0"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                    Anexar ao Studio Pro
                  </button>
                )}
              </div>

              <blockquote className="border-l-4 border-rose-500 bg-rose-50 dark:bg-rose-950/20 px-8 py-6 rounded-r-3xl text-slate-700 dark:text-slate-300 font-serif italic text-xl md:text-2xl leading-relaxed">
                "{instrument.quote}"
              </blockquote>

              <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-[2.2] text-justify space-y-8 mt-10">
                {instrument.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className="first-letter:text-5xl first-letter:font-black first-letter:text-rose-600 first-letter:mr-1 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-[0.1em]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-12 border-t border-slate-100 dark:border-slate-700 w-full flex flex-wrap gap-3 relative z-10">
              {instrument.tags.map(tag => (
                <span key={tag} className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-[10px] md:text-xs font-black uppercase tracking-widest px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreatInstrumentsTab;
