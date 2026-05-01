export interface CustomItem {
  id: string;
  title: string;
  biblicalReference: string;
  description: string;
  details: string[];
  spiritualMeaning: string;
  throneRevelation: string;
  color: string;
  icon?: string;
  imageUrl?: string;
}

export interface CustomCategory {
  id: string;
  title: string;
  items: CustomItem[];
}

export const customsData: CustomCategory[] = [
  {
    id: "habitacao",
    title: "1. HABITAÇÃO E HOSPITALIDADE",
    items: [
      {
        id: "hospitality",
        title: "🤝 Hospitalidade",
        biblicalReference: "Gênesis 18:1-8, Lucas 7:44-46, Hebreus 13:2",
        description: "A hospitalidade era considerada uma das mais sagradas obrigações no antigo Oriente Próximo e especialmente na cultura judaica. Recusar acolhimento a um viajante era visto como grave pecado, enquanto oferecer hospedagem generosa era sinal de piedade e temor a Deus. Abraão é o modelo supremo: ao ver três estranhos (que eram anjos), correu ao encontro deles, prostrou-se, ofereceu água para lavar os pés, sombra sob a árvore, e preparou um banquete com vitela, pães frescos, coalhada e leite (Gn 18:1-8).\n\nO ritual de hospitalidade seguia uma ordem precisa: o anfitrião recebia o hóspede com um beijo de paz, oferecia água para lavar os pés (tarefa normalmente feita por um servo), ungia a cabeça com azeite perfumado e preparava uma refeição. Jesus repreendeu Simão, o fariseu, exatamente por não ter cumprido esses costumes quando O recebeu: 'Não me deste água para os pés... não me deste ósculo... não me ungiste a cabeça com óleo' (Lc 7:44-46). O hóspede, uma vez acolhido, ficava sob a proteção total do anfitrião. Essa obrigação era tão forte que Ló ofereceu suas próprias filhas para proteger os anjos hóspedes em Sodoma (Gn 19:8) — um episódio que revela a intensidade desse dever cultural, embora a ação de Ló seja moralmente reprovável.\n\nO hóspede também tinha obrigações: não podia abusar da hospitalidade, deveria elogiar a refeição e jamais prejudicar o anfitrião. O Novo Testamento eleva a hospitalidade a mandamento cristão. Hebreus 13:2 exorta: 'Não vos esqueçais da hospitalidade, porque por ela alguns, sem o saber, hospedaram anjos.' Paulo inclui a hospitalidade entre os requisitos para bispos (1Tm 3:2) e a lista como virtude cristã essencial (Rm 12:13). Jesus enviou os discípulos dependendo da hospitalidade das casas que os recebessem (Mt 10:11-14) e disse que acolher um estranho era acolhê-Lo (Mt 25:35).",
        details: [
          "Abraão como modelo supremo de hospitalidade",
          "Ritual: água para os pés, ósculo, unção com óleo",
          "Proteção total ao hóspede acolhido",
          "Repreensão de Jesus a Simão por falha na hospitalidade",
          "Hebreus 13:2 — hospedar anjos sem saber",
          "Requisito para bispos: ser hospitaleiro",
          "Acolher estranho = acolher a Cristo (Mt 25:35)"
        ],
        spiritualMeaning: "Acolher o próximo é acolher o próprio Cristo. A hospitalidade cristã não é apenas cortesia, mas um ato de adoração e serviço que reflete o coração acolhedor de Deus Pai, que nos recebeu quando éramos forasteiros e inimigos.",
        throneRevelation: "Jesus é o Hóspede Divino que bate à porta (Ap 3:20). Quando abrimos, Ele entra e transforma a refeição em comunhão eterna. O Rei do Universo se faz dependente da nossa hospitalidade para derramar Sua glória em nossa casa, transformando o anfitrião em convidado de honra do Seu banquete.",
        color: "emerald",
        icon: "🤝"
      },
      {
        id: "washing-feet",
        title: "🦶 O Lavar dos Pés",
        biblicalReference: "Gênesis 18:4, João 13:1-17, 1 Timóteo 5:10",
        description: "As estradas da Palestina eram poeirentas, rochosas e frequentemente sujas com dejetos de animais. Como as pessoas usavam sandálias abertas, lavar os pés era a primeira e mais essencial regra de hospitalidade e higiene. Era a tarefa reservada ao escravo mais baixo da casa (o escravo gentio, pois a um escravo hebreu não se podia exigir tal humilhação).\n\nQuando um hóspede chegava, a água era oferecida imediatamente. Se o anfitrião quisesse honrar profundamente o hóspede, ele mesmo lavaria os pés, demonstrando extrema submissão e respeito. A recusa em oferecer água para os pés era um grave insulto social e uma demonstração pública de desprezo.\n\nNo cenáculo, antes da crucificação, os discípulos discutiam quem era o maior, e nenhum deles se dispôs a assumir a toalha e a bacia. Jesus, o Mestre e Senhor, levanta-se, tira a túnica, cinge-se com a toalha de escravo e lava os pés dos Seus seguidores, incluindo os de Judas. Este ato chocou Pedro, pois subvertia completamente a ordem social e religiosa do mundo antigo.",
        details: [
          "A água era oferecida imediatamente ao hóspede na entrada.",
          "Tarefa exclusiva do escravo mais baixo da hierarquia.",
          "Sinal de honra suprema quando feito pelo próprio anfitrião.",
          "A recusa era um insulto deliberado (caso de Simão, o fariseu).",
          "Jesus assume a posição de escravo no cenáculo.",
          "Tornou-se marca de serviço cristão na Igreja Primitiva (1Tm 5:10)."
        ],
        spiritualMeaning: "Simboliza a purificação diária necessária na caminhada cristã. O banho completo (salvação/justificação) já ocorreu, mas os pés (contato diário com o mundo e suas contaminações) precisam de limpeza constante através do arrependimento e da Palavra.",
        throneRevelation: "Quando Jesus lavou os pés dos discípulos, Ele não apenas demonstrou humildade extrema, mas assumiu a posição do menor escravo, subvertendo toda a pirâmide de poder do mundo antigo. O Rei do Universo com uma toalha na cintura é a maior revelação do caráter de Deus: o amor que se esvazia para servir e purificar os Seus.",
        color: "blue",
        icon: "🦶"
      },
      {
        id: "flat-roofs",
        title: "🏠 O Teto Plano das Casas",
        biblicalReference: "Deuteronômio 22:8, Josué 2:6, Marcos 2:4, Atos 10:9",
        description: "As casas israelitas possuíam tetos planos (terraços) acessíveis por uma escada externa. O teto era construído com pesadas vigas de madeira cobertas com ramos, uma espessa camada de barro e argila comprimida com um rolo de pedra para impermeabilização. Este espaço era essencialmente um cômodo adicional ao ar livre.\n\nO terraço tinha múltiplas utilidades na vida diária. Era usado para secar grãos, linho (como Raabe fez em Jericó) e figos. No calor sufocante do verão, as famílias dormiam no teto para aproveitar a brisa noturna. Era também o local mais silencioso e fresco da casa, tornando-se o lugar ideal para oração e meditação, como vemos Pedro fazendo em Jope (Atos 10:9).\n\nA Lei de Moisés exigia a construção de um parapeito (mureta) ao redor do teto para evitar quedas acidentais, demonstrando o cuidado de Deus com a preservação da vida (Dt 22:8). A estrutura de barro e galhos explica como os amigos do paralítico puderam 'destelhar' a casa em Cafarnaum (Mc 2:4) cavando através do teto para descer o leito diante de Jesus.",
        details: [
          "Acessível por escada externa, sem precisar entrar na casa.",
          "Construído com vigas, ramos, barro e argila comprimida.",
          "Usado como área de serviço para secar grãos e linho (Js 2:6).",
          "Dormitório de verão devido ao calor interno.",
          "Lugar de retiro, oração e visões proféticas (At 10:9).",
          "Exigência legal de um parapeito para segurança (Dt 22:8).",
          "Possibilidade de ser 'cavado' ou destelhado rapidamente (Mc 2:4)."
        ],
        spiritualMeaning: "O teto representa o lugar secreto de comunhão com Deus, acima do barulho, da poeira e das distrações da vida terrena. É o lugar de visão ampliada, onde recebemos revelações do céu antes de descermos para ministrar na terra.",
        throneRevelation: "Os amigos do paralítico destelharam a casa. Eles literalmente cavaram através do barro e galhos, destruindo a propriedade alheia. A fé que chama a atenção de Jesus é aquela que está disposta a quebrar as estruturas normais, remover os tetos da religiosidade e superar qualquer barreira para colocar a necessidade humana diretamente diante do Mestre.",
        color: "amber",
        icon: "🏠"
      }
    ]
  },
  {
    id: "alimentacao",
    title: "2. ALIMENTAÇÃO E REFEIÇÕES",
    items: [
      {
        id: "breaking-bread",
        title: "🍞 O Partir do Pão",
        biblicalReference: "Mateus 14:19, Lucas 24:30, Atos 2:46",
        description: "Na cultura bíblica, o pão não era apenas um acompanhamento, mas o alimento principal e o sustentáculo da vida. O pão nunca era cortado com faca, pois isso era visto como um ato de violência contra a provisão de Deus; ele era sempre 'partido' com as mãos. Deixar cair migalhas intencionalmente ou pisá-las era considerado um grave desrespeito ao Criador.\n\nA refeição era um profundo ato de aliança e comunhão. Comer com alguém significava: 'Eu estou em paz com você, nós compartilhamos a mesma vida'. O chefe da família sempre tomava o pão, dava graças (a bênção ou 'berakhah'), partia-o e distribuía aos presentes. Mergulhar o pão no mesmo prato (o sopão) era um sinal de intimidade profunda, o que torna a traição de Judas, que comeu do mesmo prato que Jesus, uma ofensa cultural e espiritual terrível (João 13:26).\n\nApós a ressurreição, os discípulos no caminho de Emaús não reconheceram Jesus pelas Suas palavras, mas seus olhos foram abertos no momento exato em que Ele tomou o pão, abençoou e o partiu (Lc 24:30-31). O 'partir do pão' tornou-se o termo técnico na Igreja Primitiva para a Ceia do Senhor e a comunhão dos santos.",
        details: [
          "O pão nunca era cortado com faca, apenas partido com as mãos.",
          "Considerado dom sagrado; desperdiçá-lo era ofensa a Deus.",
          "Comer junto era selar um pacto de paz e lealdade mútua.",
          "O chefe da casa sempre proferia a bênção antes de partir.",
          "Mergulhar no mesmo prato indicava intimidade profunda.",
          "Os olhos dos discípulos de Emaús se abriram no partir do pão.",
          "Tornou-se o símbolo central da comunhão cristã (At 2:46)."
        ],
        spiritualMeaning: "Cristo é o Pão da Vida. Assim como o grão de trigo precisa ser esmagado e o pão precisa ser partido para alimentar a família, o corpo de Cristo precisou ser moído e partido na cruz para dar vida eterna ao mundo.",
        throneRevelation: "Comer com pecadores era o maior escândalo do ministério de Jesus. Na cultura judaica, compartilhar a mesa era compartilhar a vida e a pureza (ou impureza) do outro. Jesus, ao comer com publicanos, subverteu a lei da contaminação: Ele estava declarando que a Sua santidade é mais contagiosa e poderosa do que o pecado deles.",
        color: "emerald",
        icon: "🍞"
      },
      {
        id: "reclining-table",
        title: "🛋️ Reclinar-se à Mesa (Triclínio)",
        biblicalReference: "João 13:23, Lucas 7:36-38, Amós 6:4",
        description: "Nos tempos do Novo Testamento, fortemente influenciados pela cultura greco-romana, as refeições festivas e banquetes não eram feitas sentadas em cadeiras ao redor de uma mesa alta. Em vez disso, os convidados reclinavam-se em almofadas ou divãs ao redor de uma mesa baixa em forma de 'U', conhecida como Triclínio (três leitos).\n\nOs convidados apoiavam-se no cotovelo esquerdo, deixando a mão direita livre para pegar a comida na mesa central. Os corpos ficavam dispostos diagonalmente, com as cabeças próximas à mesa e os pés estendidos para trás, em direção à parede. Essa postura explica perfeitamente como a mulher pecadora pôde chorar, lavar e ungir os pés de Jesus enquanto Ele comia na casa do fariseu, sem interromper a refeição (Lc 7:38).\n\nA disposição dos lugares indicava a hierarquia social. O lugar de maior honra era à direita do anfitrião. Recostar a cabeça no peito de alguém era a posição do amigo mais íntimo, pois a pessoa à direita ficava com a cabeça naturalmente próxima ao peito de quem estava à sua esquerda. Foi exatamente essa a posição de João, o 'discípulo amado', na Última Ceia (João 13:23).",
        details: [
          "Uso do Triclínio (mesa em forma de U) em banquetes festivos.",
          "Apoio no cotovelo esquerdo, comendo com a mão direita.",
          "Pés estendidos para trás, longe da comida (permitindo a unção em Lc 7).",
          "Lugares marcados por estrita hierarquia social e honra.",
          "O lugar à direita do anfitrião era o de maior prestígio.",
          "Recostar no peito indicava a mais profunda intimidade e confiança."
        ],
        spiritualMeaning: "A postura de reclinar indica descanso absoluto na presença do Senhor. A ceia com Deus não é feita com pressa ou ansiedade, mas em intimidade, repouso e confiança na Sua provisão e proteção.",
        throneRevelation: "João reclinou a cabeça no peito de Jesus. Naquela posição, João podia ouvir as batidas do coração de Deus encarnado. Não é coincidência que a revelação mais profunda do futuro (o Livro do Apocalipse) e o evangelho mais teológico tenham sido dados àquele que conhecia o som do coração do Mestre. A verdadeira revelação nasce da intimidade, não do intelecto.",
        color: "rose",
        icon: "🛋️"
      }
    ]
  },
  {
    id: "vestuario",
    title: "3. VESTUÁRIO E APARÊNCIA",
    items: [
      {
        id: "tzitzit",
        title: "🧵 As Franjas (Tzitzit) e o Manto",
        biblicalReference: "Números 15:37-40, Mateus 9:20, Malaquias 4:2",
        description: "Deus ordenou que os israelitas fizessem franjas (Tzitzit) nas bordas de suas vestes, com um cordão azul, para se lembrarem de todos os mandamentos do Senhor e não seguirem as paixões dos seus próprios corações. O manto externo (simlah ou talit) era a peça de roupa mais importante, usada como cobertor à noite e casaco de dia. A lei proibia tomar o manto de um pobre como penhor noturno, pois era sua única proteção contra o frio (Ex 22:26).\n\nAs franjas representavam a autoridade, o status e a identidade do homem judeu. Elas eram a 'assinatura' visual de que aquele homem pertencia à aliança de Yahweh. Nos tempos de Jesus, os fariseus alongavam exageradamente suas franjas para ostentar piedade e atrair a atenção pública, prática que Jesus condenou severamente (Mt 23:5).\n\nA mulher com fluxo de sangue não tocou em qualquer lugar da roupa de Jesus; ela tocou especificamente na 'orla' (Tzitzit). Ela tocou na autoridade da Palavra de Deus encarnada, buscando a cura que a religião não pôde lhe dar.",
        details: [
          "Manto externo usado como cobertor e proteção.",
          "Franjas como lembrete visual e tátil da Lei de Deus.",
          "Cordão azul representando o céu e a origem divina da Lei.",
          "Alongamento das franjas pelos fariseus como ostentação.",
          "Proibição de reter o manto do pobre durante a noite."
        ],
        spiritualMeaning: "A Palavra de Deus deve cercar e envolver toda a nossa vida, ditando nosso comportamento e nos lembrando constantemente de nossa identidade como povo santo, separado para o Senhor.",
        throneRevelation: "Malaquias 4:2 profetizou que o Sol da Justiça traria cura em suas 'asas' (kanaph, a mesma palavra hebraica para as bordas do manto onde ficavam as franjas). Quando a mulher tocou a orla de Jesus, ela ativou essa profecia messiânica. O poder de Cristo flui para aqueles que se agarram à autoridade da Sua Palavra.",
        color: "indigo",
        icon: "🧵"
      },
      {
        id: "rasgar-vestes",
        title: "👕 O Rasgar das Vestes",
        biblicalReference: "Gênesis 37:34, Joel 2:13, Mateus 26:65",
        description: "Rasgar as próprias vestes (Keriah) era a expressão física e visual mais profunda de luto, dor, indignação ou arrependimento na cultura bíblica. Não era um ato descontrolado de fúria, mas um ritual culturalmente codificado e respeitado. Quando Jacó achou que José estava morto, rasgou suas vestes. Quando Jó perdeu tudo, fez o mesmo.\n\nO rasgo era feito em pé, geralmente na parte superior da túnica, perto do coração, expondo o peito em sinal de vulnerabilidade e coração partido. A Lei proibia estritamente o Sumo Sacerdote de rasgar suas vestes sagradas, pois elas representavam a perfeição e a integridade do ofício diante de Deus (Lv 21:10).\n\nNo julgamento de Jesus, quando o Sumo Sacerdote Caifás ouviu a declaração de Cristo de que Ele era o Filho de Deus, Caifás rasgou sua própria túnica acusando-O de blasfêmia. Ironicamente, ao fazer isso, Caifás profanou seu próprio ofício e sinalizou o fim do sacerdócio levítico.",
        details: [
          "Expressão máxima de luto, dor ou indignação profunda.",
          "Feito em pé, rasgando a roupa perto do coração.",
          "O Sumo Sacerdote era proibido por lei de rasgar suas vestes.",
          "Caifás rasgou suas vestes no julgamento de Jesus.",
          "Sinalizava que o coração da pessoa estava 'rasgado' pela dor."
        ],
        spiritualMeaning: "Deus não quer apenas a demonstração externa de tristeza ou rituais religiosos vazios, mas o quebrantamento interno e genuíno. Como o profeta clamou: 'Rasgai o vosso coração, e não as vossas vestes' (Jl 2:13).",
        throneRevelation: "Na cruz, quando Jesus morreu, o véu do templo rasgou-se de alto a baixo. O próprio Deus Pai rasgou Suas 'vestes' em luto pela morte do Seu Filho Único. E através desse rasgo divino, o caminho para o Santo dos Santos foi aberto para sempre a toda a humanidade.",
        color: "slate",
        icon: "👕"
      },
      {
        id: "pano-saco",
        title: "🥻 Pano de Saco e Cinzas",
        biblicalReference: "Jonas 3:6, Ester 4:1, Mateus 11:21",
        description: "Vestir-se de pano de saco e cobrir-se de cinzas era o sinal universal de humilhação, luto e arrependimento profundo no antigo Oriente Médio. O pano de saco era uma tela grossa, escura e extremamente áspera, tecida com pelo de cabra ou camelo. Era o mesmo material usado para fazer sacos de grãos, muito desconfortável quando em contato direto com a pele.\n\nAs cinzas (ou pó da terra) eram jogadas sobre a cabeça para simbolizar a mortalidade humana, a ruína e o reconhecimento de que o homem não passa de pó (Gn 3:19). Era uma forma de dizer a Deus: 'Eu não sou nada, sou apenas cinzas'.\n\nEsse costume era adotado tanto em luto pessoal quanto em calamidades nacionais. Reis desciam de seus tronos, tiravam suas vestes reais e vestiam pano de saco para clamar a Deus, como fez o rei de Nínive após a pregação de Jonas, levando toda a cidade ao arrependimento e evitando o julgamento divino.",
        details: [
          "Tecido escuro e áspero feito de pelo de cabra.",
          "Causava desconforto físico, refletindo a dor da alma.",
          "Cinzas na cabeça simbolizavam mortalidade e ruína.",
          "Usado em tempos de calamidade nacional ou luto pessoal.",
          "Sinal visível de humilhação e arrependimento perante Deus."
        ],
        spiritualMeaning: "O verdadeiro arrependimento exige o abandono do orgulho, do conforto e da autossuficiência. É reconhecer nossa total miséria espiritual e dependência absoluta da misericórdia divina para a salvação.",
        throneRevelation: "Cristo, o Rei da Glória, não vestiu pano de saco, mas assumiu a nossa carne e o nosso pecado. Ele foi humilhado, despido e reduzido ao 'pó da morte' (Salmo 22:15) na cruz, para que nós pudéssemos trocar o nosso pano de saco por vestes de alegria e salvação (Salmo 30:11).",
        color: "zinc",
        icon: "🥻"
      }
    ]
  },
  {
    id: "casamento",
    title: "4. CASAMENTO E FAMÍLIA",
    items: [
      {
        id: "betrothal",
        title: "💍 O Noivado (Kiddushin) e as Bodas",
        biblicalReference: "Mateus 1:18, Mateus 25:1-13, João 14:2-3",
        description: "O casamento judaico antigo tinha duas fases distintas e separadas por um longo período: o Noivado (Kiddushin) e as Bodas (Nisuin). O noivado não era apenas uma promessa como hoje, mas um contrato legal e vinculativo. Os noivos já eram considerados marido e mulher perante a lei, e a união só podia ser desfeita por um divórcio formal (motivo pelo qual José cogitou repudiar Maria secretamente).\n\nDurante o período de noivado (que geralmente durava cerca de um ano), o noivo retornava à casa de seu pai para construir uma extensão ou preparar os aposentos onde a nova família moraria. A noiva ficava na casa de seus pais, preparando seu enxoval e aguardando. Ela não sabia o dia nem a hora exata em que o noivo viria buscá-la; portanto, precisava estar sempre pronta, com as lâmpadas acesas e o óleo preparado.\n\nO noivo chegava geralmente à noite, de surpresa, anunciado pelo som de trombetas e acompanhado por amigos com tochas. Ele levava a noiva em um cortejo festivo para a casa de seu pai, onde as portas eram fechadas e a festa de casamento (as Bodas) durava sete dias de grande alegria.",
        details: [
          "Noivado era um compromisso legal, equivalente ao casamento moderno.",
          "O noivo construía a casa durante o período de espera (cerca de 1 ano).",
          "A noiva não sabia a data do retorno e devia estar sempre vigilante.",
          "A chegada era à noite, de surpresa, anunciada com trombetas.",
          "A festa das bodas durava sete dias com portas fechadas."
        ],
        spiritualMeaning: "A Igreja está atualmente no período de noivado com Cristo. O contrato já foi selado com o Seu sangue na cruz e o dote (o penhor do Espírito Santo) já foi pago. Nossa missão é manter as lâmpadas acesas, vivendo em santidade enquanto aguardamos o Seu retorno.",
        throneRevelation: "Jesus disse: 'Vou preparar-vos lugar... na casa de meu Pai' (Jo 14:2). Ele estava usando a exata linguagem de um noivo judeu. Ele está construindo nossos aposentos na glória. Quando o Pai der a ordem, a trombeta de Deus soará, e o Noivo virá buscar Sua Igreja para as Bodas do Cordeiro.",
        color: "purple",
        icon: "💍"
      },
      {
        id: "goel",
        title: "🛡️ O Resgate (Goel) e o Levirato",
        biblicalReference: "Rute 4:1-10, Levítico 25:25, Deuteronômio 25:5-10",
        description: "A lei do Parente-Resgatador (Goel) e o casamento de Levirato eram instituições divinas criadas para proteger a herança, o nome e as viúvas vulneráveis em Israel. Se um homem morresse sem deixar filhos, seu irmão (ou o parente mais próximo) tinha o dever de casar-se com a viúva. O primeiro filho dessa nova união levaria o nome do falecido, garantindo que sua linhagem não fosse apagada e que a terra permanecesse na família.\n\nO Goel (Redentor) também tinha a obrigação de resgatar terras que um parente pobre tivesse vendido, ou comprar a liberdade de um familiar que tivesse se vendido como escravo para pagar dívidas. Para ser um Goel, o homem precisava preencher três requisitos: ter o direito de resgate (ser parente de sangue), ter os recursos para pagar o preço, e ter a vontade de fazê-lo.\n\nO livro de Rute é a ilustração mais bela e completa desse costume. Boaz atua como o redentor perfeito para Noemi e Rute. Quando um parente mais próximo recusa o dever do resgate para não prejudicar sua própria herança, ele tira a sandália e a entrega a Boaz, selando publicamente a transferência do direito de redenção.",
        details: [
          "Levirato: Casamento com a cunhada viúva para suscitar descendência ao irmão morto.",
          "Goel: O parente com o dever de resgatar terras ou parentes escravizados.",
          "Requisitos do Goel: Ser parente, ter recursos e ter vontade de resgatar.",
          "A cerimônia da sandália selava a transferência ou recusa do direito.",
          "Protegia as viúvas da miséria total em uma sociedade patriarcal."
        ],
        spiritualMeaning: "Nós éramos escravos do pecado e havíamos perdido nossa herança espiritual. Precisávamos de um Redentor que fosse nosso parente (humano), que tivesse o preço exigido (sangue sem pecado) e a vontade amorosa de nos salvar.",
        throneRevelation: "Jesus Cristo é o nosso Goel definitivo. Ele se fez carne para se tornar nosso 'parente de sangue'. Ele pagou o preço infinito da nossa dívida com Sua própria vida e nos devolveu a herança eterna. A Igreja, assim como a gentia Rute, foi resgatada da miséria e da viuvez espiritual para se casar com o Senhor da colheita.",
        color: "rose",
        icon: "🛡️"
      }
    ]
  },
  {
    id: "agricultura",
    title: "5. AGRICULTURA E PASTOREIO",
    items: [
      {
        id: "shepherd",
        title: "🐑 O Pastor e o Aprisco",
        biblicalReference: "João 10:1-15, Salmo 23, Ezequiel 34",
        description: "O pastoreio era uma das profissões mais antigas e vitais no Oriente Médio. A relação entre o pastor oriental e suas ovelhas era profundamente pessoal, diferente da pecuária moderna. O pastor conhecia cada ovelha pelo nome, suas fraquezas e cicatrizes, e elas conheciam e seguiam exclusivamente a sua voz, fugindo de estranhos.\n\nÀ noite, as ovelhas eram guardadas em um aprisco (um curral de pedras). No campo, o aprisco não tinha uma porta de madeira ou portão de ferro. O próprio pastor deitava-se na abertura, tornando-se literalmente a porta. Ovelhas de diferentes rebanhos podiam se misturar no aprisco comunal da cidade durante a noite, mas pela manhã, ao ouvir o chamado específico de seu pastor, elas se separavam naturalmente e o seguiam.\n\nO pastor usava duas ferramentas principais: o cajado (um bastão longo com a ponta curva, usado para guiar o rebanho e resgatar ovelhas presas em buracos) e a vara (uma clava curta e pesada, usada como arma para afastar lobos, leões e ursos). Juntas, elas traziam consolo e segurança ao rebanho.",
        details: [
          "Relação pessoal: o pastor chama pelo nome, a ovelha reconhece a voz.",
          "O pastor deitava-se na entrada do aprisco como a 'porta' viva.",
          "Uso distinto da vara (defesa contra inimigos) e do cajado (resgate e guia).",
          "Separação de rebanhos misturados feita apenas pela voz do pastor.",
          "O pastor ia à frente do rebanho, não o empurrava por trás."
        ],
        spiritualMeaning: "Cristo não apenas nos guia, Ele é a nossa proteção absoluta. Ele conhece cada um de nós intimamente e nos chama para fora do sistema do mundo. A vara da Sua disciplina e o cajado da Sua direção nos trazem paz.",
        throneRevelation: "Quando Jesus diz 'Eu sou a porta das ovelhas' (Jo 10:7), Ele está descrevendo a cena do aprisco no campo. Ele está declarando: 'Eu sou a garantia da sua segurança. O lobo só toca em você se passar por cima do meu cadáver'. E na cruz, o Bom Pastor deu a Sua vida para que o rebanho vivesse.",
        color: "stone",
        icon: "🐑"
      },
      {
        id: "threshing-floor",
        title: "🌾 A Eira e a Pá de Joeirar",
        biblicalReference: "Rute 3:2, Mateus 3:12, 2 Samuel 24:18",
        description: "A eira era um local plano, de terra batida ou rocha sólida, geralmente situado em um lugar alto onde o vento soprava forte, especialmente no final da tarde. O trigo colhido era espalhado ali e pisado por bois ou trilhado com tábuas pesadas (equipadas com pedras ou ferro na base) para esmagar a espiga e soltar o grão da palha.\n\nApós a debulha, ocorria o processo de joeirar. O agricultor usava uma pá de madeira (ou forcado) para jogar a mistura de grãos e palha para o alto. O vento levava a palha (que era leve, seca e inútil) para longe, enquanto o grão (pesado e valioso) caía de volta no chão, formando um monte limpo para ser recolhido nos celeiros. A palha restante era frequentemente varrida e queimada.\n\nA eira era um lugar de trabalho árduo, mas também de celebração pela colheita. Foi na eira de Boaz que Rute fez seu pedido de resgate, marcando um ponto de virada na história da redenção.",
        details: [
          "Localizada em lugares altos para aproveitar a força do vento.",
          "Uso de bois ou trilhos pesados para esmagar as espigas.",
          "O processo de joeirar jogando a mistura ao vento com uma pá.",
          "A separação natural entre o grão pesado (útil) e a palha leve (inútil).",
          "A palha era queimada em fogo inextinguível para limpar o local."
        ],
        spiritualMeaning: "A eira é o lugar de separação e purificação. Deus permite os ventos da provação em nossas vidas para separar o que é precioso e eterno (o fruto do Espírito) do que é carnal e passageiro (a palha do nosso ego).",
        throneRevelation: "João Batista descreveu Jesus com a 'pá na mão' para limpar Sua eira (Mt 3:12). O Templo de Salomão foi construído exatamente sobre a eira de Araúna (2Sm 24). O lugar da adoração suprema é o lugar onde a palha do nosso orgulho é separada pelo vento do Espírito Santo. Não há adoração verdadeira sem passar pela eira de Deus.",
        color: "amber",
        icon: "🌾"
      },
      {
        id: "winepress",
        title: "🍇 O Lagar (Pisar as Uvas)",
        biblicalReference: "Isaías 63:2-3, Apocalipse 19:15, Mateus 21:33",
        description: "O lagar era o local onde as uvas eram esmagadas para a produção de vinho. Geralmente consistia em dois tanques escavados na rocha calcária, em níveis diferentes, conectados por um canal. As uvas maduras eram colocadas no tanque superior (o lagar propriamente dito), onde as pessoas as pisavam descalças.\n\nPisar as uvas era um trabalho comunitário, festivo e exaustivo. Os pisadores frequentemente cantavam e gritavam de alegria para manter o ritmo e celebrar a colheita. O suco escorria pelo canal para o tanque inferior (o tanque de captação), onde era recolhido em jarras. As roupas e os pés dos pisadores ficavam invariavelmente manchados de vermelho escuro com o suco das uvas.\n\nDevido à cor vermelha do suco e ao ato de esmagar, o lagar tornou-se na Bíblia uma das metáforas mais poderosas e terríveis para o julgamento divino, onde os inimigos de Deus são esmagados sob os pés do Seu furor.",
        details: [
          "Tanques duplos escavados na rocha em níveis diferentes.",
          "Pisar as uvas era feito descalço, para não esmagar as sementes (que amargariam o vinho).",
          "Trabalho festivo, acompanhado de gritos de alegria (Jeremias 48:33).",
          "Roupas manchadas de vermelho pelo suco da uva.",
          "Símbolo bíblico de colheita abundante ou de julgamento severo."
        ],
        spiritualMeaning: "O lagar representa o esmagamento necessário para extrair o melhor de nós. Assim como a uva precisa ser pisada para liberar o vinho, muitas vezes nosso caráter é forjado sob as pressões e aflições da vida.",
        throneRevelation: "Em Isaías 63 e Apocalipse 19, o Messias guerreiro é retratado com as vestes manchadas de vermelho, pisando sozinho o 'lagar da ira de Deus'. No entanto, na cruz do Calvário, Jesus foi a própria uva esmagada no lagar do sofrimento, derramando o Seu sangue para que nós pudéssemos beber o vinho da nova e eterna aliança.",
        color: "red",
        icon: "🍇"
      }
    ]
  },
  {
    id: "pactos",
    title: "6. PACTOS E ALIANÇAS",
    items: [
      {
        id: "salt-covenant",
        title: "🧂 O Pacto de Sal",
        biblicalReference: "Números 18:19, 2 Crônicas 13:5, Levítico 2:13",
        description: "No antigo Oriente Médio, o sal era um produto de imenso valor, usado não apenas para temperar, mas principalmente para preservar alimentos da corrupção e decadência. Por causa de suas propriedades conservantes, o sal tornou-se o símbolo supremo de incorruptibilidade, permanência e fidelidade eterna.\n\nFazer uma 'Aliança de Sal' (Berit Melach) significava estabelecer um pacto inquebrável e perpétuo. Quando duas partes faziam um acordo, elas frequentemente comiam juntas uma refeição temperada com sal, ou cada um colocava uma pitada de sal de sua própria bolsa na bolsa do outro, misturando-os. Uma vez misturados, era impossível separar os grãos de sal de um dos grãos do outro, simbolizando que a aliança jamais poderia ser desfeita.\n\nDeus exigiu que todas as ofertas de cereais apresentadas no altar fossem temperadas com sal (Lv 2:13), lembrando constantemente a Israel que o relacionamento deles com Deus era baseado em uma aliança eterna que Ele não quebraria.",
        details: [
          "O sal era altamente valioso como conservante contra a corrupção.",
          "Símbolo de permanência, lealdade e incorruptibilidade.",
          "Misturar o sal de duas bolsas tornava a aliança inseparável.",
          "Todas as ofertas levíticas precisavam conter sal.",
          "Deus fez uma Aliança de Sal com a linhagem real de Davi (2Cr 13:5)."
        ],
        spiritualMeaning: "A graça de Deus em nossas vidas é uma aliança de sal: permanente, que nos preserva da corrupção do pecado e dá sabor (sentido) à nossa existência. Quando Jesus nos chama de 'o sal da terra', Ele nos chama para sermos agentes de preservação moral no mundo.",
        throneRevelation: "A aliança que Deus fez conosco através do sangue de Cristo é uma Aliança de Sal. O sangue de Jesus não tem prazo de validade. Ele não se corrompe. A salvação não é um contrato temporário que Deus cancela quando falhamos, mas um pacto eterno garantido pela fidelidade do próprio Deus.",
        color: "zinc",
        icon: "🧂"
      },
      {
        id: "blood-covenant",
        title: "🩸 O Pacto de Sangue (Cortar Aliança)",
        biblicalReference: "Gênesis 15:9-18, Jeremias 34:18-19",
        description: "A forma mais solene e terrível de firmar um acordo no mundo antigo era o Pacto de Sangue. Em hebraico, não se 'fazia' uma aliança, se 'cortava' uma aliança (karat berit). Animais (como novilhos, cabras ou carneiros) eram cortados ao meio, e as metades eram colocadas frente a frente, formando um corredor de sangue.\n\nAs duas partes que estavam fazendo o acordo caminhavam juntas por entre as metades ensanguentadas, em forma de um 'oito' (símbolo de infinito). Ao fazer isso, eles estavam proferindo uma maldição sobre si mesmos: 'Que Deus faça comigo o mesmo que foi feito com estes animais se eu quebrar a minha parte deste acordo'. Era um pacto de vida ou morte.\n\nEm Gênesis 15, quando Deus faz a aliança com Abraão, Ele manda Abraão preparar os animais cortados. Mas Deus faz Abraão cair em profundo sono e, na forma de um fogareiro fumegante e uma tocha de fogo, o próprio Deus passa sozinho por entre as metades. Deus assumiu sobre Si mesmo a maldição caso a aliança fosse quebrada.",
        details: [
          "A expressão hebraica é 'cortar' uma aliança, não 'fazer'.",
          "Animais eram partidos ao meio formando um corredor.",
          "Caminhar entre as metades era invocar uma maldição de morte sobre si mesmo em caso de quebra.",
          "Em Gn 15, apenas Deus caminha entre as metades, tornando a aliança incondicional.",
          "A quebra do pacto exigia o sangue do infrator."
        ],
        spiritualMeaning: "A Nova Aliança não depende da nossa capacidade de cumpri-la perfeitamente, mas da fidelidade de Deus. Se dependesse de nós, seríamos cortados ao meio. Mas Deus assumiu a responsabilidade de cumprir ambos os lados do acordo.",
        throneRevelation: "Na cruz, Jesus Cristo sofreu a maldição do pacto quebrado. A humanidade quebrou a aliança, mas Deus, lembrando-se de Gênesis 15 (onde Ele passou sozinho entre as metades), assumiu a penalidade. O corpo de Cristo foi 'rasgado' no Calvário para que a aliança eterna pudesse ser mantida.",
        color: "red",
        icon: "🩸"
      }
    ]
  },
  {
    id: "guerra",
    title: "7. GUERRA E EXÉRCITO",
    items: [
      {
        id: "armor",
        title: "🛡️ A Armadura do Soldado Romano",
        biblicalReference: "Efésios 6:11-17, 1 Tessalonicenses 5:8",
        description: "O exército romano era a máquina de guerra mais formidável do mundo antigo, e sua eficácia devia-se em grande parte ao equipamento de seus legionários. Quando o apóstolo Paulo escreveu sobre a 'Armadura de Deus' em Efésios 6, ele estava acorrentado a um soldado romano (a Guarda Pretoriana) e usou o equipamento que via diariamente como metáfora para a guerra espiritual.\n\nO cinto (Cingulum) não era apenas para segurar as calças; era a peça central que amarrava a túnica solta para permitir o combate e onde a espada era embainhada. A couraça (Lorica Segmentata) protegia os órgãos vitais. As sandálias (Caligae) tinham cravos de ferro na sola, como chuteiras modernas, permitindo que o soldado mantivesse sua posição (ficasse firme) sem escorregar durante o impacto do inimigo.\n\nO escudo (Scutum) não era um pequeno escudo redondo, mas uma porta de madeira coberta de couro, medindo cerca de 1,20m de altura. Antes da batalha, o couro era encharcado em água para apagar as flechas incendiárias (dardos inflamados) do inimigo. Os soldados podiam juntar seus escudos formando a formação 'Tartaruga' (Testudo), tornando a unidade impenetrável.",
        details: [
          "Cinto (Verdade): Prende as pontas soltas da vida e sustenta a espada.",
          "Couraça (Justiça): Protege o coração e os órgãos vitais de ataques mortais.",
          "Sandálias com cravos (Evangelho da Paz): Dão tração para não recuar no combate.",
          "Escudo grande (Fé): Encharcado em água para apagar flechas de fogo.",
          "Capacete (Salvação): Protege a mente do desespero e das mentiras.",
          "Espada curta (Palavra): O Gládio, arma de combate corpo a corpo."
        ],
        spiritualMeaning: "A guerra espiritual não é lutada com misticismo, mas com caráter e verdade. A armadura não nos é dada para atacar o diabo, mas para 'resistir' e 'ficar firmes' na vitória que Cristo já conquistou.",
        throneRevelation: "A armadura descrita por Paulo não é originalmente do soldado romano, mas é a própria armadura de Yahweh descrita em Isaías 59:17, quando Deus veste a couraça da justiça e o capacete da salvação para intervir por Seu povo. Quando vestimos a armadura, estamos nos revestindo do próprio Cristo.",
        color: "slate",
        icon: "🛡️"
      },
      {
        id: "triumph",
        title: "🏛️ O Desfile Triunfal Romano",
        biblicalReference: "2 Coríntios 2:14, Colossenses 2:15",
        description: "O Triunfo Romano era a maior honra que um general (Imperator) poderia receber após uma vitória esmagadora em solo estrangeiro. Para que o Senado concedesse um Triunfo, o general precisava ter matado pelo menos 5.000 inimigos, expandido o território de Roma e trazido as tropas de volta em segurança.\n\nO desfile entrava em Roma com grande pompa. Na frente iam os magistrados; depois, as carroças exibindo os tesouros saqueados; em seguida, os reis e generais inimigos capturados, acorrentados e humilhados publicamente. O general vitorioso vinha em uma carruagem dourada, vestido de púrpura, com o rosto pintado de vermelho (como o deus Júpiter). Atrás dele vinha o exército vitorioso gritando 'Io Triumphe!'.\n\nDurante todo o desfile, sacerdotes queimavam incenso doce. Para os soldados romanos e cidadãos, aquele cheiro significava vida, vitória e glória. Mas para os prisioneiros acorrentados que marchavam para a execução no final do desfile, aquele mesmo cheiro era o 'cheiro de morte', anunciando sua condenação iminente.",
        details: [
          "A maior honra militar concedida pelo Senado Romano.",
          "Exibição pública de reis inimigos acorrentados e despojados de seu poder.",
          "O general desfilava como um deus, distribuindo os despojos.",
          "Incenso era queimado durante todo o trajeto.",
          "O mesmo cheiro significava vida para os vencedores e morte para os cativos."
        ],
        spiritualMeaning: "Paulo usa essa imagem em 2 Coríntios 2:14. Cristo é o General Vitorioso, e nós somos Seus soldados (ou Seus cativos de amor) desfilando em Seu triunfo. O Evangelho que pregamos é o incenso: para os que se salvam é cheiro de vida, mas para os que perecem é cheiro de morte.",
        throneRevelation: "Em Colossenses 2:15, Paulo diz que Cristo, na cruz, 'despojou os principados e potestades e os expôs publicamente ao desprezo, triunfando sobre eles'. O que parecia a derrota de Jesus (a cruz) foi, na verdade, a carruagem do Seu Triunfo Romano. Ele arrastou Satanás e seus demônios acorrentados pelas ruas do mundo espiritual, declarando vitória absoluta.",
        color: "purple",
        icon: "🏛️"
      }
    ]
  },
  {
    id: "morte",
    title: "8. MORTE E SEPULTAMENTO",
    items: [
      {
        id: "crucifixion",
        title: "✝️ A Crucificação",
        biblicalReference: "Mateus 27:35, Filipenses 2:8, Gálatas 3:13",
        description: "A crucificação não foi inventada pelos romanos (provavelmente pelos persas), mas foi aperfeiçoada por eles como a forma mais cruel, humilhante e agonizante de execução pública. Era reservada apenas para escravos rebeldes, piratas, assassinos e traidores do Estado. Cidadãos romanos eram isentos dessa punição, exceto por alta traição.\n\nO objetivo da crucificação não era apenas matar, mas torturar a vítima pelo maior tempo possível (às vezes dias) e servir como um outdoor de terror para quem desafiasse Roma. A vítima era açoitada com o flagrum (chicote com ossos e chumbo), o que já a deixava à beira da morte. Depois, carregava a trave horizontal (patibulum) até o local da execução, sempre fora dos muros da cidade.\n\nOs cravos (pregos de ferro de 15 a 18 cm) não eram pregados nas palmas das mãos (que rasgariam com o peso), mas nos pulsos, atingindo o nervo mediano e causando choques de dor indescritíveis. A morte ocorria por asfixia: para respirar, a vítima precisava se erguer apoiando-se nos cravos dos pés, causando dor excruciante. Quando não aguentava mais se erguer, sufocava.",
        details: [
          "A punição mais degradante do mundo antigo, proibida para cidadãos romanos.",
          "O açoitamento prévio (flagelação) rasgava a pele e expunha músculos.",
          "A vítima carregava apenas a trave horizontal (patibulum), pesando cerca de 30-40kg.",
          "Pregos nos pulsos e calcanhares para suportar o peso do corpo.",
          "A causa da morte era exaustão e asfixia lenta.",
          "As pernas eram quebradas (crurifragium) para acelerar a asfixia, se necessário."
        ],
        spiritualMeaning: "A cruz demonstra a gravidade infinita do pecado humano e a extensão infinita do amor de Deus. O pecado não é apenas um erro moral; é uma rebelião cósmica que exigiu a morte mais terrível para ser expiada.",
        throneRevelation: "A lei judaica declarava: 'Maldito todo aquele que for pendurado no madeiro' (Dt 21:23). Jesus não apenas morreu; Ele absorveu a maldição da Lei em nosso lugar. A cruz, que era o símbolo supremo de derrota e vergonha do Império Romano, foi transformada pelo Rei do Universo no trono da graça e no símbolo universal de salvação.",
        color: "red",
        icon: "✝️"
      },
      {
        id: "tomb",
        title: "🪦 O Sepulcro e o Ossuário",
        biblicalReference: "João 19:41, Mateus 23:27, João 11:38",
        description: "No primeiro século, os judeus ricos não eram enterrados na terra, mas em sepulcros escavados na rocha calcária, geralmente em encostas de colinas fora da cidade. O sepulcro era uma caverna artificial com uma pequena entrada, fechada por uma pesada pedra circular (em forma de mó) que rolava em um trilho para selar a tumba contra animais e ladrões de túmulos.\n\nO sepultamento judaico ocorria no mesmo dia da morte, devido ao clima quente e à lei da impureza. O corpo não era embalsamado (como no Egito), mas lavado, envolto em faixas de linho com especiarias aromáticas (mirra e aloés) e colocado sobre uma prateleira de pedra (arcosólio) dentro do sepulcro.\n\nApós cerca de um ano, quando a carne já havia se decomposto, a família retornava ao sepulcro para o 'segundo sepultamento'. Os ossos eram recolhidos e colocados em uma pequena caixa de pedra chamada Ossuário. Isso permitia que o mesmo sepulcro familiar fosse usado por gerações ('foi reunido aos seus pais').",
        details: [
          "Túmulos escavados na rocha, fechados por uma grande pedra rolante.",
          "Sepultamento imediato, no mesmo dia da morte.",
          "Corpo envolto em linho com dezenas de quilos de especiarias.",
          "Prática do 'segundo sepultamento' após um ano (recolhimento dos ossos).",
          "Uso de ossuários (caixas de pedra) para armazenar os ossos.",
          "Túmulos eram caiados de branco antes da Páscoa para evitar que peregrinos se contaminassem acidentalmente (Mt 23:27)."
        ],
        spiritualMeaning: "O sepulcro representa a finalidade da morte humana e o fim de toda esperança terrena. O linho e as especiarias tentam apenas mascarar o cheiro da corrupção, mas não podem impedir a morte.",
        throneRevelation: "O sepulcro de Jesus era 'novo, onde ninguém ainda havia sido posto' (Jo 19:41). Isso garantiu que, quando Ele ressuscitasse, não houvesse confusão sobre de quem eram os ossos. Jesus não precisou de um ossuário. Ele deixou os lençóis de linho dobrados para trás, transformando o sepulcro de um lugar de corrupção final em um ventre de onde nasceu a nova criação.",
        color: "stone",
        icon: "🪦"
      }
    ]
  },
  {
    id: "justica",
    title: "9. JUSTIÇA E TRIBUNAIS",
    items: [
      {
        id: "city-gates",
        title: "🚪 As Portas da Cidade",
        biblicalReference: "Rute 4:1, Provérbios 31:23, Amós 5:15",
        description: "No mundo bíblico, as portas da cidade não eram apenas passagens na muralha, mas complexos arquitetônicos fortificados que funcionavam como o centro cívico, comercial e judicial da comunidade. Era o equivalente à praça central, ao tribunal e à prefeitura das cidades modernas.\n\nO espaço dentro e imediatamente ao redor das portas era onde os anciãos (os líderes e juízes da cidade) se sentavam para ouvir casos, resolver disputas de terras, julgar crimes e testemunhar contratos legais. Quando Boaz precisou resolver a questão do resgate de Rute, ele foi sentar-se à porta da cidade e convocou dez anciãos como testemunhas e júri (Rt 4:1-2).\n\nAlém da justiça, a porta era o principal mercado. Mercadores montavam suas barracas ali, e profetas frequentemente usavam esse local de grande fluxo para entregar suas mensagens à nação. Ter o 'marido conhecido nas portas' (Pv 31:23) significava que ele era um líder respeitado no tribunal da cidade.",
        details: [
          "Complexo fortificado, muitas vezes com várias câmaras internas.",
          "Local do tribunal de justiça e resolução de disputas.",
          "Os 'anciãos à porta' formavam o conselho municipal e o júri.",
          "Centro comercial e mercado principal da cidade.",
          "Local estratégico para proclamações proféticas e reais."
        ],
        spiritualMeaning: "A porta representa autoridade, julgamento e acesso. A justiça de Deus não é feita em segredo, mas publicamente. É nas 'portas' da nossa vida (nossas decisões e transações) que a nossa integridade é testada.",
        throneRevelation: "Jesus disse que as 'portas do inferno não prevalecerão contra a igreja' (Mt 16:18). Portas não atacam; portas defendem. Jesus está dizendo que o conselho, a autoridade e as fortalezas do império das trevas não conseguirão resistir ao avanço da Igreja. Nós somos a força invasora, e as portas deles vão cair.",
        color: "amber",
        icon: "🚪"
      }
    ]
  },
  {
    id: "sacerdocio",
    title: "10. UNÇÃO E SACERDÓCIO",
    items: [
      {
        id: "anointing-oil",
        title: "🫒 A Unção com Óleo",
        biblicalReference: "Êxodo 30:22-33, Salmo 133:2, Tiago 5:14",
        description: "A unção com óleo (Mashach) era um dos rituais mais sagrados e significativos do Antigo Testamento. O óleo da unção sagrada era uma mistura exclusiva de azeite de oliva puro com especiarias raras (mirra, canela, cálamo e cássia). A Lei proibia estritamente que essa fórmula fosse reproduzida para uso comum ou derramada sobre a carne de um homem não consagrado, sob pena de morte (Ex 30:32-33).\n\nA unção tinha dois propósitos principais: consagração (separar algo ou alguém exclusivamente para o serviço de Deus) e capacitação (o derramamento do Espírito Santo para realizar uma tarefa divina). Apenas três ofícios eram ungidos em Israel: o Profeta (para falar por Deus), o Sacerdote (para interceder diante de Deus) e o Rei (para governar em nome de Deus).\n\nQuando o Sumo Sacerdote era ungido, o óleo não era apenas esfregado, mas derramado abundantemente sobre sua cabeça, escorrendo pela barba e descendo até a orla de suas vestes (Salmo 133). Isso simbolizava que a presença e a autoridade do Espírito Santo deveriam cobrir o líder por completo, da cabeça aos pés.",
        details: [
          "Fórmula sagrada exclusiva, proibida para uso secular.",
          "Significava separação total para Deus (consagração).",
          "Simbolizava o derramamento e a capacitação do Espírito Santo.",
          "Apenas Profetas, Sacerdotes e Reis recebiam a unção oficial.",
          "No Novo Testamento, tornou-se também um símbolo de cura (Tg 5:14)."
        ],
        spiritualMeaning: "A unção não é um misticismo mágico, mas a presença capacitadora do Espírito Santo. Onde há unção verdadeira, há separação do mundo (santidade) e poder para cumprir o propósito divino. O jugo do pecado só é quebrado por causa da unção (Is 10:27).",
        throneRevelation: "O título 'Cristo' (em grego) ou 'Messias' (em hebraico) significa literalmente 'O Ungido'. Jesus é o cumprimento perfeito dos três ofícios: Ele é o Profeta definitivo, o Sumo Sacerdote eterno e o Rei dos Reis. O óleo que foi derramado sobre Ele no Jordão não foi físico, mas o próprio Espírito Santo sem medida, que agora escorre da Cabeça (Cristo) para cobrir todo o Seu Corpo (a Igreja).",
        color: "emerald",
        icon: "🫒"
      },
      {
        id: "urim-thummim",
        title: "💎 Urim e Tumim",
        biblicalReference: "Êxodo 28:30, 1 Samuel 28:6, Esdras 2:63",
        description: "O Urim e o Tumim eram objetos sagrados (provavelmente duas pedras preciosas) guardados dentro do peitoral do Sumo Sacerdote, diretamente sobre o seu coração. Seus nomes em hebraico significam, respectivamente, 'Luzes' e 'Perfeições' (ou 'Revelação' e 'Verdade'). Eles eram o meio divinamente instituído para consultar a vontade de Deus em questões de importância nacional, quando a resposta exigia um 'Sim' ou 'Não'.\n\nEmbora a Bíblia não descreva exatamente como funcionavam, a tradição judaica sugere que, quando o Sumo Sacerdote fazia uma pergunta a Deus, as pedras brilhavam de maneira específica ou eram retiradas do peitoral como sortes sagradas. Se saísse o Urim, a resposta era negativa; se saísse o Tumim, a resposta era positiva.\n\nO uso do Urim e Tumim era restrito ao Sumo Sacerdote e apenas para decisões que afetavam toda a congregação de Israel (como ir à guerra ou dividir terras). Após o exílio babilônico, com a ausência da arca e a ascensão do ministério profético, o uso do Urim e Tumim desapareceu completamente da história de Israel.",
        details: [
          "Guardados na bolsa do peitoral do Sumo Sacerdote, sobre o coração.",
          "Significam 'Luzes' (Urim) e 'Perfeições' (Tumim).",
          "Usados exclusivamente para buscar a direção de Deus em decisões nacionais.",
          "Forneciam respostas binárias (Sim/Não, Culpado/Inocente).",
          "Desapareceram após o exílio babilônico."
        ],
        spiritualMeaning: "Deus deseja guiar o Seu povo com luz e perfeição. No Antigo Testamento, a vontade de Deus estava escondida no peito de um homem. Hoje, a vontade de Deus é revelada a todos os crentes através da Palavra (Luz) e do Espírito Santo (Perfeição).",
        throneRevelation: "O Sumo Sacerdote carregava o Urim e o Tumim sobre o coração ao entrar na presença de Deus. Jesus, nosso Sumo Sacerdote perfeito, não carrega pedras, mas carrega os nossos nomes gravados em Seu coração diante do Pai. Nele, temos acesso direto a toda a Luz e a toda a Verdade, pois Ele mesmo é a Luz do mundo e a Verdade encarnada.",
        color: "blue",
        icon: "💎"
      }
    ]
  }
];
