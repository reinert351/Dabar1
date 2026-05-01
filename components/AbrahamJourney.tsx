import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Clock, Navigation, BookOpen } from 'lucide-react';
import { addTextToStudio } from '../core/studioFunnel';
import { ICON_SERMON } from '../constants';

export const ABRAHAM_JOURNEY = [
  {
    id: 'ur',
    title: 'Ur dos Caldeus',
    age: '75 anos (aprox. início)',
    location: 'Mesopotâmia (Sul do Iraque atual)',
    distance: '0 km',
    desc: 'O chamado original. Ur não era um vilarejo primitivo, mas uma metrópole suméria altamente avançada, com bibliotecas, matemática complexa e um enorme zigurate dedicado ao deus-lua Nanna (Sin). A família de Abrão estava imersa nessa idolatria (Josué 24:2). O chamado de Deus exigiu uma ruptura radical com três esferas de segurança no mundo antigo: seu país (pátria), sua parentela (tribo) e a casa de seu pai (herança e proteção). Abrão teve que trocar a civilização mais avançada de sua época por uma promessa invisível, tornando-se um peregrino em tendas.',
    verses: 'Gênesis 11:28-31, Atos 7:2-4',
    icon: '🌙',
    x: 85,
    y: 80
  },
  {
    id: 'haran',
    title: 'Harã',
    age: '75 anos (partida)',
    location: 'Sul da Turquia atual',
    distance: '~960 km de Ur',
    desc: 'A família de Terá migrou de Ur e se estabeleceu em Harã, que curiosamente também era um grande centro de adoração ao deus-lua. Eles permaneceram ali até a morte de Terá (aos 205 anos). É possível que a idolatria ou a idade avançada do pai tenham atrasado a jornada. Após a morte de Terá, Deus reitera o chamado de forma definitiva. Abrão, agora com 75 anos, parte com Sarai, seu sobrinho Ló e todos os bens e servos que haviam adquirido, deixando para trás o último posto avançado da civilização mesopotâmica para entrar no desconhecido.',
    verses: 'Gênesis 11:31-32, 12:1-4',
    icon: '⛺',
    x: 60,
    y: 20
  },
  {
    id: 'shechem',
    title: 'Siquém (Carvalho de Moré)',
    age: '75+ anos',
    location: 'Canaã (Cisjordânia atual)',
    distance: '~640 km de Harã',
    desc: 'A primeira parada significativa em Canaã. O "Carvalho de Moré" (que significa "professor" ou "oráculo") era provavelmente um local sagrado dos cananeus, onde eles buscavam revelações de seus deuses. Foi exatamente neste reduto pagão que o verdadeiro Deus apareceu a Abrão e declarou: "À tua descendência darei esta terra". Em resposta, Abrão construiu seu primeiro altar ao Senhor. Construir um altar era um ato de adoração, mas também uma declaração profética e legal de propriedade: ele estava reivindicando aquela terra para Yahweh pela fé, mesmo sem possuir um palmo de chão.',
    verses: 'Gênesis 12:6-7',
    icon: '🌳',
    x: 35,
    y: 50
  },
  {
    id: 'bethel',
    title: 'Betel e Ai',
    age: '75+ anos',
    location: 'Canaã',
    distance: '~30 km de Siquém',
    desc: 'Abrão move-se para o sul e arma sua tenda entre Betel (que significa "Casa de Deus") e Ai (que significa "Ruína"). Geograficamente e espiritualmente, ele estava posicionado entre a presença de Deus e a ruína do mundo. Aqui ele constrói outro altar e "invoca o nome do Senhor" (adoração pública). Estabelece-se o padrão da vida de Abraão: a Tenda (simbolizando sua condição de peregrino e forasteiro na terra) e o Altar (simbolizando sua cidadania celestial e comunhão contínua com Deus).',
    verses: 'Gênesis 12:8',
    icon: '🔥',
    x: 34,
    y: 55
  },
  {
    id: 'egypt',
    title: 'Egito',
    age: 'Desconhecida',
    location: 'Egito',
    distance: '~400 km de Betel',
    desc: 'Uma fome severa atinge Canaã (uma terra dependente de chuvas), forçando Abrão a descer ao Egito (sustentado pelo rio Nilo). Aqui vemos uma falha na fé do patriarca: temendo ser morto por causa da beleza de Sarai, ele pede que ela minta dizendo ser apenas sua irmã (era meia-irmã, mas a intenção era enganosa). Faraó a toma para seu harém, colocando em risco a semente prometida. Deus intervém soberanamente, enviando pragas sobre a casa de Faraó — um prenúncio profético do Êxodo que ocorreria séculos depois. Faraó os expulsa, mas Abrão sai muito mais rico.',
    verses: 'Gênesis 12:10-20',
    icon: '🐪',
    x: 15,
    y: 85
  },
  {
    id: 'negev',
    title: 'Neguebe e retorno a Betel',
    age: 'Desconhecida',
    location: 'Sul de Canaã',
    distance: '~400 km do Egito',
    desc: 'Abrão retorna do Egito riquíssimo em gado, prata e ouro. A abundância gera conflito entre os pastores de Abrão e os de Ló. Em um ato de magnanimidade e fé, Abrão cede a primeira escolha a Ló. Ló escolhe por vista: vê a planície do Jordão, bem irrigada "como o jardim do Senhor, como a terra do Egito", e vai para Sodoma. Abrão escolhe por fé, ficando nas montanhas áridas. Imediatamente após Ló partir, Deus manda Abrão "levantar os olhos" e "percorrer a terra" — no Antigo Oriente, andar pelas fronteiras de uma propriedade era um ato legal de reivindicação de posse.',
    verses: 'Gênesis 13:1-18',
    icon: '⚖️',
    x: 30,
    y: 65
  },
  {
    id: 'hebron',
    title: 'Hebrom (Carvalhais de Manre)',
    age: '86 anos (nascimento de Ismael)',
    location: 'Canaã',
    distance: '~40 km de Betel',
    desc: 'O centro de operações de Abraão. Aqui ocorre o resgate de Ló e o encontro com Melquisedeque (Gn 14). Em Gn 15, Deus faz a "Aliança dos Pedaços", passando sozinho como uma tocha fumegante entre os animais divididos, assumindo toda a responsabilidade de cumprir a promessa incondicionalmente. Em Gn 16, a fé vacila: Sarai oferece a serva egípcia Agar para gerar um herdeiro, resultando no nascimento de Ismael (um esforço da carne). Aos 99 anos (Gn 17), Deus muda seus nomes (inserindo a letra "He", o sopro de Deus) e institui a circuncisão.',
    verses: 'Gênesis 13:18, 15-17',
    icon: '📜',
    x: 33,
    y: 60
  },
  {
    id: 'gerar',
    title: 'Gerar e Berseba',
    age: '100 anos (nascimento de Isaque)',
    location: 'Neguebe (Canaã)',
    distance: '~60 km de Hebrom',
    desc: 'Abraão viaja para o sul. Repete o mesmo erro do Egito, mentindo para o rei Abimeleque sobre Sara (mostrando que até os heróis da fé têm falhas persistentes). Deus novamente protege a linhagem. Finalmente, aos 100 anos de Abraão e 90 de Sara, o milagre acontece: nasce Isaque ("Riso"). A tensão na família explode, e Agar e Ismael são expulsos, mas Deus os protege no deserto. Abraão faz um tratado de paz com Abimeleque em Berseba ("Poço do Juramento"), garantindo direitos sobre a água, vital no deserto.',
    verses: 'Gênesis 20-21',
    icon: '👶',
    x: 28,
    y: 68
  },
  {
    id: 'moriah',
    title: 'Monte Moriá',
    age: 'Isaque jovem (aprox. 115+ anos)',
    location: 'Jerusalém atual',
    distance: '~80 km de Berseba',
    desc: 'O clímax teológico da vida de Abraão. Deus pede o inimaginável: "Toma teu filho, teu único filho, Isaque, a quem amas, e oferece-o em holocausto". Após uma angustiante jornada de 3 dias, Abraão obedece, crendo que Deus poderia ressuscitar Isaque das cinzas (Hb 11:19). Isaque carrega a lenha montanha acima (prefigurando Cristo com a cruz). No último segundo, o Anjo do Senhor o impede. Abraão declara "O Senhor Proverá" (Yahweh Jireh). Deus providencia um carneiro substituto, estabelecendo o princípio da expiação substitutiva no exato local onde, séculos depois, Salomão construiria o Templo.',
    verses: 'Gênesis 22:1-19',
    icon: '⛰️',
    x: 34,
    y: 57
  },
  {
    id: 'machpelah',
    title: 'Caverna de Macpela',
    age: '175 anos (morte de Abraão)',
    location: 'Hebrom',
    distance: '~40 km de Moriá',
    desc: 'Sara morre aos 127 anos. Abraão recusa receber a caverna de Macpela como presente dos hititas; ele insiste em pagar o preço integral (400 siclos de prata) em uma transação pública e legal. Esta caverna foi a única parcela de terra na Prometida que Abraão realmente possuiu em vida — um túmulo. Foi um ato de fé, plantando seus mortos na terra que seus descendentes herdariam. Abraão morre aos 175 anos, "em boa velhice, farto de dias", e é sepultado ao lado de Sara por seus filhos reconciliados, Isaque e Ismael.',
    verses: 'Gênesis 23, 25:7-10',
    icon: '⚰️',
    x: 33,
    y: 60
  }
];

const AbrahamJourney: React.FC = () => {
  const [activeStop, setActiveStop] = useState(0);

  const handleInjectStep = () => {
    const stop = ABRAHAM_JOURNEY[activeStop];
    const content = `🗺️ JORNADA DE ABRAÃO: Parada ${activeStop + 1} - ${stop.title}

[Detalhes Históricos]
• Idade: ${stop.age}
• Localização: ${stop.location}
• Base Bíblica: ${stop.verses}

[Contexto e Exegese]
${stop.desc}`;

    addTextToStudio(`[ESTUDO PROFUNDO - ABRAÃO: ${stop.title}]\n\n${content}`);
  };

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
      {/* HEADER ABRAÃO */}
      <div className="text-center space-y-4">
        <span className="text-sky-500 font-black uppercase tracking-[0.5em] text-[10px] block italic">Estudo Definitivo • Peregrinação</span>
        <h3 className="text-3xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-800 dark:text-white leading-none">A Jornada de <br/><span className="text-sky-600">Abraão</span></h3>
      </div>

      {/* MAPA E LINHA DO TEMPO */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* MAPA ESTILIZADO (SVG) */}
        <div className="w-full lg:w-1/2 bg-slate-50 dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative min-h-[400px] lg:min-h-[600px] flex items-center justify-center p-4">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
          
          <div className="relative w-full max-w-[500px] aspect-square">
            {/* Rota (Linhas) */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polyline 
                points={ABRAHAM_JOURNEY.map(stop => `${stop.x},${stop.y}`).join(' ')}
                fill="none" 
                stroke="rgba(14, 165, 233, 0.3)" 
                strokeWidth="1" 
                strokeDasharray="2 2"
              />
              <polyline 
                points={ABRAHAM_JOURNEY.slice(0, activeStop + 1).map(stop => `${stop.x},${stop.y}`).join(' ')}
                fill="none" 
                stroke="rgba(14, 165, 233, 1)" 
                strokeWidth="1.5" 
                className="transition-all duration-1000 ease-in-out"
              />
            </svg>

            {/* Paradas (Pontos) */}
            {ABRAHAM_JOURNEY.map((stop, index) => (
              <button
                key={stop.id}
                onClick={() => setActiveStop(index)}
                className={`absolute w-6 h-6 -ml-3 -mt-3 rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg ${activeStop === index ? 'bg-sky-500 scale-150 ring-4 ring-sky-500/30' : activeStop > index ? 'bg-sky-400 scale-100' : 'bg-slate-300 dark:bg-slate-700 scale-75'}`}
                style={{ left: `${stop.x}%`, top: `${stop.y}%` }}
              >
                <span className="text-[10px]">{stop.icon}</span>
                {activeStop === index && (
                  <span className="absolute -top-8 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-lg whitespace-nowrap">
                    {stop.title}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Legenda do Mapa */}
          <div className="absolute bottom-6 right-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">O Crescente Fértil</h4>
            <div className="space-y-1">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-sky-500"></div><span className="text-xs font-bold text-slate-700 dark:text-slate-300">Rota Atual</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700"></div><span className="text-xs font-bold text-slate-700 dark:text-slate-300">Próximas Paradas</span></div>
            </div>
          </div>
        </div>

        {/* DETALHES DA PARADA ATUAL */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="flex-1 bg-white dark:bg-slate-900 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-xl p-8 md:p-12 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStop}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 relative z-10"
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-4xl">{ABRAHAM_JOURNEY[activeStop].icon}</span>
                  <div>
                    <span className="text-sky-500 font-black uppercase tracking-widest text-[10px] block">Parada {activeStop + 1} de {ABRAHAM_JOURNEY.length}</span>
                    <h4 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter text-slate-800 dark:text-white leading-none">{ABRAHAM_JOURNEY[activeStop].title}</h4>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-2 text-slate-400 mb-1"><Clock className="w-4 h-4" /><span className="text-[10px] font-black uppercase tracking-widest">Idade</span></div>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{ABRAHAM_JOURNEY[activeStop].age}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-2 text-slate-400 mb-1"><MapPin className="w-4 h-4" /><span className="text-[10px] font-black uppercase tracking-widest">Local</span></div>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{ABRAHAM_JOURNEY[activeStop].location}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-2 text-slate-400 mb-1"><Navigation className="w-4 h-4" /><span className="text-[10px] font-black uppercase tracking-widest">Distância</span></div>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{ABRAHAM_JOURNEY[activeStop].distance}</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-2 text-slate-400 mb-1"><BookOpen className="w-4 h-4" /><span className="text-[10px] font-black uppercase tracking-widest">Bíblia</span></div>
                    <p className="text-sm font-bold text-sky-600">{ABRAHAM_JOURNEY[activeStop].verses}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-lg text-slate-600 dark:text-slate-300 italic leading-relaxed whitespace-pre-line mb-6">
                    {ABRAHAM_JOURNEY[activeStop].desc}
                  </p>
                  <button 
                    onClick={handleInjectStep}
                    className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3"
                  >
                    {ICON_SERMON('w-5 h-5')} Injetar Parada no Estúdio
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controles de Navegação */}
            <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-center bg-gradient-to-t from-white dark:from-slate-900 via-white/90 dark:via-slate-900/90 to-transparent pt-12">
              <button 
                onClick={() => setActiveStop(prev => Math.max(0, prev - 1))}
                disabled={activeStop === 0}
                className="px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all bg-slate-100 dark:bg-slate-800 text-slate-500 disabled:opacity-50 hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                Anterior
              </button>
              <button 
                onClick={() => setActiveStop(prev => Math.min(ABRAHAM_JOURNEY.length - 1, prev + 1))}
                disabled={activeStop === ABRAHAM_JOURNEY.length - 1}
                className="px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all bg-sky-600 text-white shadow-lg disabled:opacity-50 hover:bg-sky-500"
              >
                Próxima Parada
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DETALHES TEOLÓGICOS E COSTUMES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="bg-slate-900 p-8 md:p-12 rounded-[40px] text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
            <span className="text-6xl font-black italic">📜</span>
          </div>
          <h4 className="text-xl font-black uppercase italic tracking-tighter text-sky-400 mb-6">Costumes do Antigo Oriente Próximo</h4>
          <ul className="space-y-6">
            <li className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-300 italic leading-relaxed">
                <strong className="text-white block mb-1 text-base">Adoção de Eliezer (Os Tabletes de Nuzi):</strong> 
                Descobertas arqueológicas em Nuzi (Mesopotâmia) revelam que casais sem filhos frequentemente adotavam um servo de confiança para herdar suas propriedades e cuidar deles na velhice, providenciando um sepultamento digno. No entanto, a lei estipulava que, se um filho biológico nascesse posteriormente, o filho adotado perdia o direito à herança principal, recebendo apenas uma porção menor. Isso explica perfeitamente a queixa de Abrão em Gênesis 15:2-4 e a resposta tranquilizadora de Deus de que um herdeiro biológico viria.
              </p>
            </li>
            <li className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-300 italic leading-relaxed">
                <strong className="text-white block mb-1 text-base">O Caso de Agar (Código de Hamurabi):</strong> 
                As leis de Hamurabi e de Lipit-Ishtar permitiam legalmente que uma esposa estéril desse sua serva pessoal ao marido para gerar filhos em seu nome (barriga de aluguel antiga). A lei também dizia que a serva não podia se igualar ou desprezar sua senhora após engravidar. Se o fizesse, a senhora poderia rebaixá-la novamente à escravidão severa. Isso explica a atitude de Sara ao dar Agar a Abraão, a arrogância subsequente de Agar, e a dura opressão de Sara com respaldo legal da época (Gênesis 16). Mais tarde, a exigência de Sara para expulsar Agar foi um choque legal para Abraão, pois a lei proibia expulsar a serva que deu à luz, motivo pelo qual Deus teve que intervir e mandar Abraão obedecer a Sara (Gênesis 21:12).
              </p>
            </li>
            <li className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-300 italic leading-relaxed">
                <strong className="text-white block mb-1 text-base">Compra de Macpela (Leis Hititas):</strong> 
                O diálogo entre Abraão e Efrom, o hitita, em Gênesis 23 não é apenas cortesia oriental, mas uma negociação legal astuta. As antigas leis feudais hititas (ilku) exigiam que quem comprasse uma propriedade inteira assumisse pesados deveres militares e fiscais para com o rei. Abraão queria comprar *apenas* a caverna na extremidade do campo para evitar essas obrigações. Efrom, espertamente, insiste em "dar" (vender) o campo inteiro junto com a caverna, forçando Abraão a assumir os impostos. Abraão aceita e pesa a prata publicamente, garantindo um título de propriedade inquestionável.
              </p>
            </li>
          </ul>
        </div>

        <div className="bg-sky-50 dark:bg-sky-900/10 p-8 md:p-12 rounded-[40px] border border-sky-100 dark:border-sky-800 shadow-xl relative overflow-hidden">
          <h4 className="text-xl font-black uppercase italic tracking-tighter text-sky-900 dark:text-sky-100 mb-6">Dispensações e Aliança</h4>
          <ul className="space-y-6">
            <li className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                <strong className="text-sky-700 dark:text-sky-400 block mb-1 text-base">Transição Dispensacional:</strong> 
                A chamada de Abraão marca uma das maiores viradas na história bíblica. Termina a Dispensação do Governo Humano (que culminou no fracasso global e na rebelião da Torre de Babel) e inicia-se a Dispensação da Promessa (ou Patriarcal). Deus muda Sua estratégia: em vez de lidar com as nações rebeldes como um todo, Ele escolhe um único homem idólatra, pela graça, para formar uma nova nação separada. Através dessa nação (Israel), Deus traria as Escrituras e o Messias para, finalmente, redimir todas as outras nações.
              </p>
            </li>
            <li className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                <strong className="text-sky-700 dark:text-sky-400 block mb-1 text-base">A Aliança Incondicional (Pactual):</strong> 
                A Aliança Abraâmica (Gênesis 12, 15, 17) é o alicerce de toda a escatologia bíblica. Ela contém três promessas irrevogáveis: 1) Terra (de forma literal, do Rio do Egito ao Eufrates); 2) Semente (uma nação inumerável e a linhagem do Messias); 3) Bênção (justificação pela fé para todos os povos). Em Gênesis 15, Deus usa o formato de um tratado de suserania do Antigo Oriente, onde animais eram cortados ao meio. A penalidade para quem quebrasse o pacto era ser cortado como os animais. O detalhe chocante é que Deus põe Abraão para dormir e passa *sozinho* (como uma tocha de fogo) por entre as metades. Deus assumiu a responsabilidade de cumprir a aliança unilateralmente, tornando-a incondicional e eterna, não dependente da perfeição de Abraão.
              </p>
            </li>
            <li className="flex gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                <strong className="text-sky-700 dark:text-sky-400 block mb-1 text-base">O Sinal da Circuncisão:</strong> 
                Instituída em Gênesis 17, a circuncisão foi dada como o selo externo da justiça pela fé que Abraão já possuía (Romanos 4:11). Ocorreu logo após o fracasso com Agar e Ismael (uma tentativa de cumprir a promessa pela força da carne). Ao exigir o corte da carne no órgão reprodutor, Deus estava ensinando uma lição teológica brutal: a semente prometida (Isaque/Cristo) não viria pelo esforço ou capacidade humana, mas unicamente pelo poder e graça de Deus operando na fraqueza (ventre morto de Sara e corpo envelhecido de Abraão). Simbolizava a necessidade de um coração circuncidado e separado para Deus.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AbrahamJourney;
