import React, { useState } from 'react';

interface Person {
  name: string;
  meaning: string;
  bio: string;
  ref: string;
  isPatriarch?: boolean;
  lifespan?: string;
}

const LINEAGE: Person[] = [
  { name: "Adão", meaning: "Homem, da terra vermelha", bio: "O primeiro homem, criado diretamente do pó da terra à imagem e semelhança de Deus. Foi colocado no Jardim do Éden para cultivá-lo e guardá-lo. Após a Queda, foi expulso do paraíso, mas recebeu a promessa de um Redentor (Gênesis 3:15). Viveu para ver muitas gerações, sendo Noé a décima geração a partir dele.", ref: "Gênesis 1-5", isPatriarch: true, lifespan: "930 anos" },
  { name: "Sete", meaning: "Substituto, concedido", bio: "Filho concedido a Adão e Eva após o trágico assassinato de Abel por Caim. Seu nascimento reacendeu a esperança da linhagem piedosa, e através de sua descendência a adoração e a pureza foram preservadas no mundo antediluviano.", ref: "Gênesis 4:25", lifespan: "912 anos" },
  { name: "Enos", meaning: "Homem fraco, mortal", bio: "Na sua geração, a Bíblia registra que 'começou-se a invocar o nome do Senhor'. Isso marca o início de uma adoração pública e organizada em meio a um mundo que rapidamente se corrompia através da linhagem de Caim.", ref: "Gênesis 4:26", lifespan: "905 anos" },
  { name: "Cainã", meaning: "Possessor, ferreiro", bio: "Filho de Enos, deu continuidade à linhagem dos filhos apontados como 'filhos de Deus', mantendo a fé e passando a herança espiritual para as próximas gerações num período pré-diluviano.", ref: "Gênesis 5:9", lifespan: "910 anos" },
  { name: "Maalalel", meaning: "Louvor a Deus", bio: "Seu nome reflete um ambiente de exaltação divina. Em uma terra que envelhecia, a presença de adoradores sustentava a esperança da promessa inicial.", ref: "Gênesis 5:12", lifespan: "895 anos" },
  { name: "Jarede", meaning: "Descida", bio: "Durante seus dias, acredita-se que ocorreu uma queda ainda mais severa da moralidade na Terra, mas ele permaneceu na linhagem fiel, preparando o caminho para um dos homens mais misteriosos da Bíblia, seu filho Enoque.", ref: "Gênesis 5:15", lifespan: "962 anos" },
  { name: "Enoque", meaning: "Dedicado, iniciado", bio: "Destacou-se por sua íntima comunhão com o Criador. 'Andou Enoque com Deus; e já não era, porque Deus o tomou para si'. Sua translação ao céu sem provar a morte é um tipo do arrebatamento e da vida eterna com Deus. Profetizou sobre o julgamento divino (Judas 1:14).", ref: "Gênesis 5:24", isPatriarch: true, lifespan: "365 anos (Transladado)" },
  { name: "Matusalém", meaning: "Homem do dardo (sua morte trará)", bio: "Seu nome carregava uma profecia: a tradição afirma que no ano de sua morte, o dilúvio viria. Portanto, sua longevidade — a maior registrada na Escritura — atesta a incrível paciência e misericórdia de Deus, retardando o juízo o quanto possível.", ref: "Gênesis 5:21", lifespan: "969 anos" },
  { name: "Lameque", meaning: "Poderoso, forte", bio: "Diferente do Lameque da linhagem de Caim (que foi vingativo), este Lameque profetizou ao olhar para seu filho Noé, declarando que através dele viria o descanso e consolo para o trabalho árduo da humanidade com a terra amaldiçoada.", ref: "Gênesis 5:25", lifespan: "777 anos" },
  { name: "Noé", meaning: "Descanso, consolo", bio: "O construtor da Arca. Em meio a uma geração corrupta, Noé achou favor e graça aos olhos do Senhor. Tornou-se o 'segundo pai' da humanidade e preservou a linhagem messiânica após o Grande Dilúvio, estabelecendo uma nova aliança com Deus (o arco-íris).", ref: "Gênesis 6", isPatriarch: true, lifespan: "950 anos" },
  { name: "Sem", meaning: "Nome, renome", bio: "Recebeu a bênção patriarcal de Noé. A partir dele descendem os povos semitas. Ele carrega a tocha da promessa redentora que um dia encontraria seu clímax através do povo judeu.", ref: "Gênesis 9:26", lifespan: "600 anos" },
  { name: "Arfaxade", meaning: "Curador, fortaleza", bio: "Nasceu dois anos após o dilúvio. Fez parte da geração de reconstrução que povoou a Terra na região da Mesopotâmia. Começou o declínio gradual da longevidade humana.", ref: "Gênesis 11:10", lifespan: "438 anos" },
  { name: "Selá", meaning: "Petição, broto", bio: "Nas trevas que voltariam a cobrir a terra após o Dilúvio, Selá é mais um elo vital da descendência fiel, conduzindo a promessa de Deus cada vez mais perto ao Seu plano central.", ref: "Gênesis 11:12", lifespan: "433 anos" },
  { name: "Héber", meaning: "Da região além", bio: "Considerado a origem da palavra 'hebreus'. Um patriarca extremamente longevo e ilustre, cujo nome serviria para identificar a nação escolhida no futuro (Os Hebreus).", ref: "Gênesis 11:14", lifespan: "464 anos" },
  { name: "Pelegue", meaning: "Divisão", bio: "Nasceu no período caótico e divisor da história humana. 'Em seus dias a terra foi dividida', referindo-se à rebelião de Ninrode e o juízo divino na Torre de Babel, quando as línguas foram confundidas e a humanidade espalhada.", ref: "Gênesis 11:16", lifespan: "239 anos" },
  { name: "Reú", meaning: "Amigo de Deus", bio: "Acompanhou a drástica e contínua redução da expectativa de vida humana, mantendo seu registro no meio de um mundo que se dividia em nações e adorava outros deuses.", ref: "Gênesis 11:18", lifespan: "239 anos" },
  { name: "Serugue", meaning: "Ramo, forte", bio: "Ancestral do pai de Abraão, que passou parte de seus anos estabelecendo famílias que construiriam as bases culturais do caldeus.", ref: "Gênesis 11:20", lifespan: "230 anos" },
  { name: "Naor", meaning: "Roncador, luz forte", bio: "Avô de Abraão e patriarca na Caldeia. Vivendo entre os caldeus, foi testemunha de um mundo que rapidamente esquecia a adoração do Deus único, como advertido nas gerações seguintes.", ref: "Gênesis 11:22", lifespan: "148 anos" },
  { name: "Terá", meaning: "Atraso, estação", bio: "Pai de Abraão, Naor e Harã. Saiu de Ur dos Caldeus com a intenção de ir a Canaã, mas se fixou e morreu em Harã, servindo a outros deuses. Sua jornada até Harã preparou o caminho logístico para o chamado pleno de Abraão.", ref: "Gênesis 11:24", lifespan: "205 anos" },
  { name: "Abraão", meaning: "Pai de multidões", bio: "O Pai da fé. Deixou Ur até Harã e depois por chamado Divino foi a Canaã. Deus firmou com ele o pacto Incondicional - a Aliança Abraâmica: prometendo terra, descendentes infinitos e que por meio dele todas as famílias da Terra seriam benditas. Um campeão da fé que, mesmo falho, creu nAquele que ressuscita os mortos.", ref: "Gênesis 12-25", isPatriarch: true, lifespan: "175 anos" },
  { name: "Isaque", meaning: "Ele ri", bio: "O filho da promessa, nascido miraculosamente quando Abraão tinha 100 e Sara 90 anos. Homem pacífico e meditativo. Foi o sacrifício tipológico de Gênesis 22 (Moriá), prefigurando a oferta perfeitamente amorosa de Deus dando o Seu Filho unigênito.", ref: "Gênesis 21", lifespan: "180 anos" },
  { name: "Jacó (Israel)", meaning: "Aquele que segura o calcanhar / Príncipe de Deus", bio: "Recebeu a bênção e a primogenitura. Após uma vida de conflitos, barganhas e medos, teve um encontro dramático com Deus no Jaboque, onde mancou e teve seu nome mudado para Israel. Seus doze filhos tornaram-se os líderes das doze tribos da Nação Escolhida.", ref: "Gênesis 25-50", isPatriarch: true, lifespan: "147 anos" },
  { name: "Judá", meaning: "Louvor", bio: "O quarto filho de Jacó. Embora repleto de falhas iniciais, redimiu-se oferecendo-se no lugar de Benjamim no Egito. Jacó profetizou sobre ele dizendo que o cetro (realeza) nunca se apartaria de Judá até que viesse o Siló (O Messias). A raiz do Rei Davi.", ref: "Gênesis 29:35", lifespan: "Aprox. 119 anos" },
  { name: "Perez", meaning: "Ruptura, brecha", bio: "Nascido de Tamar e Judá em circunstâncias dramáticas. Ele 'rompeu' no nascimento antes de seu irmão gêmeo, estabelecendo uma herança que demonstrava a soberania e graça de Deus na linhagem mais improvável.", ref: "Gênesis 38:29" },
  { name: "Hezrom", meaning: "Pátio cercado", bio: "Migrou de Canaã para o Egito junto aos descendentes de Jacó durante a grande fome, quando José era o governador.", ref: "Rute 4:18" },
  { name: "Rão", meaning: "Exaltado", bio: "Seu nascimento se dá na imersão profunda dos filhos de Israel na terra dos faraós. Ele sustenta o vínculo de sangue que sobrevive através de séculos de escravidão.", ref: "Rute 4:19" },
  { name: "Aminadabe", meaning: "Meu povo é nobre", bio: "Um chefe da tribo de Judá. Seu notável legado cruza os ramos patriarcais: foi o sogro do sumo sacerdote Arão e pai do príncipe de Judá.", ref: "Números 1:7" },
  { name: "Naassom", meaning: "Encantador", bio: "Nomeado por Deus como o príncipe da tribo de Judá durante a peregrinação no deserto que ajudou a conduzir o acampamento israelita. Um líder firme nas fileiras da libertação rumo à Terra Prometida.", ref: "Números 2:3" },
  { name: "Salmom", meaning: "Manto, paz", bio: "Casou-se com Raabe, a ex-prostituta cananeia de Jericó cuja fé no Deus de Israel não só a salvou da destruição da cidade como a colocou na árvore genealógica de Jesus Cristo.", ref: "Mateus 1:5" },
  { name: "Boaz", meaning: "Nele há força", bio: "O herói magnânimo de Belém. Agiu como o parente-resgatador (Goel), comprando a propriedade de Noemi e casando-se graciosamente com Rute, a moabita, gerando provisão e aliança. O precursor majestoso de Cristo como redentor.", ref: "Rute 4", isPatriarch: true },
  { name: "Obede", meaning: "Servo", bio: "Seu nome reflete o consolo que ele trouxe para a aflita Noemi. Através dele, as amargas tristezas foram transformadas em um futuro de realeza para toda a casa de Judá.", ref: "Rute 4:17" },
  { name: "Jessé", meaning: "Deus existe, dádiva", bio: "Homem da pequena cidade de Belém. Pai de oito filhos; e, pelo direcionamento do Senhor ao profeta Samuel, o menor deles que cuidava das ovelhas esquecido no campo, foi ungido para ser futuro rei.", ref: "1 Samuel 16" },
  { name: "Davi", meaning: "Amado", bio: "O guerreiro, poeta, cantor e o 'rei segundo o coração de Deus'. Conquistou Jerusalém, derrotou Golias, pecou terrivelmente, mas se arrependeu amargamente. Escreveu os imortais Salmos do coração humano vibrando com Deus. Através da Aliança Davídica (2Sm 7), Deus lhe jurou um trono eterno — ocupado perpetuamente por Cristo (Linhagem em Mateus e Lucas).", ref: "1 Samuel 16", isPatriarch: true, lifespan: "70 anos" },
  { name: "Salomão", meaning: "Pacífico", bio: "Construiu o magnífico e glorioso Templo de Jerusalém. Destacou-se em riquezas esplendorosas e em enorme sabedoria, escrevendo Provérbios, Eclesiastes e Cantares. Apesar do declínio moral no fim da vida, sua dinastia real manteve viva a promessa até o fim da era dos Reis.", ref: "1 Reis 1-11", lifespan: "Aprox. 60 anos" },
  { name: "Roboão a Josias", meaning: "Os Reis de Judá", bio: "Uma linhagem caracterizada por altibaixos. Reis imorais e perversos seguidos ocasionalmente por reis justos e avivalistas (como Ezequias e Josias). Os profetas bradaram ininterruptamente o arrependimento em seus tempos antes do cativeiro Babilônico.", ref: "2 Reis" },
  { name: "Jeconias", meaning: "O Senhor estabelece", bio: "Conhecido também como Joaquim. Reinou tragicamente por cerca de 3 meses. Por conta de suas ações malignas, viu o cerco aprofundar-se e acabou preso em Babilônia, tornando-se uma figura de transição histórica nas crônicas de Mateus (Geração do exílio).", ref: "Mateus 1:11" },
  { name: "Sealtiel", meaning: "Pedi a Deus", bio: "Filho e herdeiro gerado durante a depressiva e humilhante estadia do povo judeu nos 70 anos de captura e cativeiro Babilônico, um sinal de que Deus, ainda longe na Terra do julgamento, nunca cancelou a profecia original.", ref: "Mateus 1:12" },
  { name: "Zorobabel", meaning: "Semente de Babilônia", bio: "Nomeado pelo império Medo-Persa para liderar, sob permissão divina, a primeira onda de retorno histórico de judeus para Jerusalém e estabelecer as bases para a construção do Segundo Templo de adoração a Yahweh.", ref: "Esdras 3", isPatriarch: true },
  { name: "Série até José", meaning: "Linhagem Pós-Exílio", bio: "Compreende gerações silenciosas que mantiveram suas raízes hebraicas preservadas em meio as ascensões de reinos e impérios (período intertestamentário), cujos corações secretamente aguardavam a redenção (como Abiúde, Eliaquim, Azor...).", ref: "Mateus 1:13-16" },
  { name: "José / Maria", meaning: "Deus acrescenta / Amarga, Exaltada", bio: "José possuía a linhagem real herdeira de Salomão e Maria vinha da descendência de Davi através do profeta Natã. Sendo humildes trabalhadores na Galileia dominada por Romanos, eles aceitaram através dos anjos o imenso e perigoso desafio de ser o lar terrestre para a encarnação milagrosa do Verbo.", ref: "Lucas 1-2" },
  { name: "Jesus Cristo", meaning: "Yahweh Salva, O Ungido", bio: "O Verbo Eterno encarnado, a consumação de Hebreus, o cumprimento final e cabal da promessa feita no Jardim a Adão. Teve uma vida impecável, redimiu o pecado da humanidade na cruz e venceu a morte no terceiro dia, assumindo o domínio eterno como o Rei dos Reis.", ref: "Evangelhos", isPatriarch: true, lifespan: "Aprox. 33 anos (Terra)" }
];

const GenealogiesTab: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">Genealogias da Redenção</h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
          O fio dourado da graça traçado de Adão até Jesus Cristo. Conheça as gerações, os significados profundos dos nomes e seus papéis no plano de salvação.
        </p>
      </div>

      <div className="relative border-l-4 border-indigo-200 dark:border-indigo-900 ml-4 md:ml-12 space-y-8 py-8">
        {LINEAGE.map((person, idx) => (
          <div key={idx} className="relative pl-8 md:pl-12 group">
            {/* Timeline dot */}
            <div className={`absolute -left-[14px] top-4 w-6 h-6 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center transition-all ${person.isPatriarch ? 'bg-amber-500 scale-125' : 'bg-indigo-500 group-hover:scale-110'}`}>
              {person.isPatriarch && <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
            </div>
            
            <div className={`bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border transition-all ${person.isPatriarch ? 'border-amber-200 dark:border-amber-900 shadow-md ring-1 ring-amber-100 dark:ring-amber-900/30' : 'border-slate-200 dark:border-slate-700 hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800'}`}>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className={`text-xl font-bold ${person.isPatriarch ? 'text-amber-600 dark:text-amber-400' : 'text-slate-900 dark:text-white'}`}>
                      {person.name}
                    </h3>
                    {person.isPatriarch && <span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-[10px] font-black uppercase tracking-widest">Figura Chave</span>}
                  </div>
                  <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3 uppercase tracking-wider">
                    Significado: {person.meaning}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {person.bio}
                  </p>
                </div>
                <div className="shrink-0 flex flex-col items-end gap-2">
                  <div className="text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                    {person.ref}
                  </div>
                  {person.lifespan && (
                    <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1 rounded-md border border-emerald-100 dark:border-emerald-800">
                      Viveu: {person.lifespan}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenealogiesTab;
