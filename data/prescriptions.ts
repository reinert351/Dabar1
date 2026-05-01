
export interface Prescription {
  id: string;
  symptom: string;
  diagnosis: string;
  jesusPrescription: string;
  simpleExplanation: string;
  practicalApplication: string;
  expectedResult: string;
  category: string;
}

export const PRESCRIPTIONS: Prescription[] = [
  {
    id: '1',
    symptom: 'Ansiedade e Preocupação Excessiva',
    diagnosis: 'Falta de confiança na providência divina e foco excessivo no amanhã.',
    jesusPrescription: 'Mateus 6:33-34 - "Buscai primeiro o reino de Deus... não vos inquieteis pelo dia de amanhã."',
    simpleExplanation: 'Jesus ensina que Deus cuida de nós mais do que das aves e flores. Se Ele cuida do que é menor, cuidará de você.',
    practicalApplication: 'Liste 3 coisas que te preocupam hoje. Entregue-as em oração e foque apenas nas tarefas de hoje.',
    expectedResult: 'Paz interior e clareza mental para resolver os problemas reais do presente.',
    category: 'Emocional'
  },
  {
    id: '2',
    symptom: 'Vazio Existencial e Falta de Propósito',
    diagnosis: 'Busca de satisfação em fontes temporais que não preenchem a alma eterna.',
    jesusPrescription: 'João 4:14 - "Aquele que beber da água que eu lhe der nunca terá sede."',
    simpleExplanation: 'O vazio que sentimos é do tamanho de Deus. Só o que é eterno pode preencher um coração que foi feito para a eternidade.',
    practicalApplication: 'Dedique 15 minutos hoje para conversar com Deus sobre quem você é para Ele, além do que você faz.',
    expectedResult: 'Sentimento de pertencimento e descoberta de um valor que não depende de conquistas externas.',
    category: 'Espiritual'
  },
  {
    id: '3',
    symptom: 'Raiva e Ressentimento',
    diagnosis: 'Ego ferido e retenção de perdão, gerando uma raiz de amargura.',
    jesusPrescription: 'Mateus 5:44 - "Amai a vossos inimigos, bendizei os que vos maldizem."',
    simpleExplanation: 'Perdoar não é concordar com o erro, é soltar o prisioneiro e descobrir que o prisioneiro era você.',
    practicalApplication: 'Ore por uma pessoa que te feriu. Peça a Deus que a abençoe, mesmo que seu sentimento ainda não queira.',
    expectedResult: 'Libertação emocional e interrupção do ciclo de dor que a raiva alimenta.',
    category: 'Relacional'
  },
  {
    id: '4',
    symptom: 'Comparação e Inveja',
    diagnosis: 'Falta de gratidão pela própria jornada e desconhecimento da identidade única.',
    jesusPrescription: 'João 21:22 - "Se eu quero que ele fique até que eu venha, que te importa a ti? Segue-me tu."',
    simpleExplanation: 'Jesus diz que o caminho do outro não é da sua conta. Sua única missão é segui-Lo no seu próprio caminho.',
    practicalApplication: 'Passe o dia sem olhar redes sociais e escreva 5 bênçãos exclusivas da sua vida atual.',
    expectedResult: 'Contentamento e foco na própria evolução e chamado.',
    category: 'Mental'
  },
  {
    id: '5',
    symptom: 'Medo do Futuro e Insegurança',
    diagnosis: 'Perda de vista da soberania de Deus sobre o tempo e as circunstâncias.',
    jesusPrescription: 'Mateus 10:29-31 - "Não se vendem dois pardais por um asse? ... Não temais, pois; mais valeis vós do que muitos pardais."',
    simpleExplanation: 'Se Deus tem o controle até dos detalhes insignificantes da natureza, Ele não deixaria sua vida ao acaso.',
    practicalApplication: 'Identifique o seu maior medo. Escreva ao lado: "Deus é maior que isso" e ore entregando o controle.',
    expectedResult: 'Coragem baseada na confiança e não na ausência de perigo.',
    category: 'Emocional'
  },
  {
    id: '6',
    symptom: 'Orgulho e Autossuficiência',
    diagnosis: 'Ilusão de controle e esquecimento da dependência vital do Criador.',
    jesusPrescription: 'João 15:5 - "Eu sou a videira, vós as varas... sem mim nada podeis fazer."',
    simpleExplanation: 'Como um galho que morre longe da árvore, nossa vida perde o sentido e a força quando tentamos agir sozinhos.',
    practicalApplication: 'Peça ajuda a alguém hoje em algo pequeno, reconhecendo que você não precisa (e não pode) fazer tudo só.',
    expectedResult: 'Humildade libertadora e renovação da força através da conexão com Deus.',
    category: 'Espiritual'
  },
  {
    id: '7',
    symptom: 'Cansaço Extremo e Esgotamento',
    diagnosis: 'Carregar fardos que não foram feitos para você ou tentar salvar o mundo sozinho.',
    jesusPrescription: 'Mateus 11:28-30 - "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei."',
    simpleExplanation: 'Jesus oferece um jugo que é suave. O cansaço excessivo geralmente vem de jugos que nós mesmos criamos.',
    practicalApplication: 'Tire 10 minutos de silêncio absoluto. Não peça nada, apenas descanse na presença de Deus.',
    expectedResult: 'Revigoramento espiritual e discernimento sobre o que é prioridade real.',
    category: 'Mental'
  },
  {
    id: '8',
    symptom: 'Luto e Tristeza Profunda',
    diagnosis: 'Dor da perda e dificuldade de enxergar a esperança além da morte ou do fim.',
    jesusPrescription: 'João 11:25-26 - "Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá."',
    simpleExplanation: 'A morte e o fim não têm a última palavra. Em Jesus, toda perda é temporária e toda dor será consolada.',
    practicalApplication: 'Permita-se chorar, mas termine sua oração agradecendo pela promessa da eternidade onde não haverá mais dor.',
    expectedResult: 'Consolo sobrenatural e força para atravessar o vale da sombra da morte.',
    category: 'Emocional'
  },
  {
    id: '9',
    symptom: 'Falta de Fé e Incredulidade',
    diagnosis: 'Coração endurecido pelas decepções e foco apenas no que é visível.',
    jesusPrescription: 'Marcos 9:23 - "Tudo é possível ao que crê."',
    simpleExplanation: 'A fé não é um sentimento, é uma decisão de confiar na palavra de Deus apesar das circunstâncias contrárias.',
    practicalApplication: 'Escolha uma promessa bíblica e repita-a em voz alta hoje sempre que a dúvida surgir.',
    expectedResult: 'Abertura para o sobrenatural e renovação da esperança.',
    category: 'Espiritual'
  },
  {
    id: '10',
    symptom: 'Solidão e Abandono',
    diagnosis: 'Sentimento de isolamento e falta de percepção da presença constante de Deus.',
    jesusPrescription: 'Mateus 28:20 - "E eis que eu estou convosco todos os dias, até a consumação dos séculos."',
    simpleExplanation: 'Você nunca está sozinho. Jesus prometeu estar ao seu lado em cada segundo, mesmo quando você não O sente.',
    practicalApplication: 'Pratique a "Presença de Deus": imagine Jesus sentado ao seu lado durante suas atividades hoje.',
    expectedResult: 'Conforto na solidão e fortalecimento da comunhão íntima com o Senhor.',
    category: 'Relacional'
  },
  {
    id: '11',
    symptom: 'Culpa e Condenação',
    diagnosis: 'Incapacidade de aceitar o perdão completo de Deus e autopunição por erros passados.',
    jesusPrescription: 'João 8:11 - "Nem eu também te condeno; vai-te, e não peques mais."',
    simpleExplanation: 'Se Deus já te perdoou, quem é você para se condenar? O perdão de Cristo é total e lança seus pecados no mar do esquecimento.',
    practicalApplication: 'Escreva seu erro em um papel e depois rasgue-o, simbolizando que a dívida foi paga na cruz.',
    expectedResult: 'Paz de consciência e liberdade para recomeçar sem o peso do passado.',
    category: 'Espiritual'
  },
  {
    id: '12',
    symptom: 'Impaciência e Ansiedade por Resultados',
    diagnosis: 'Desejo de controlar o tempo e falta de submissão ao cronograma perfeito de Deus.',
    jesusPrescription: 'Atos 1:7 - "Não vos pertence saber os tempos ou as épocas que o Pai estabeleceu pelo seu próprio poder."',
    simpleExplanation: 'Deus não está atrasado. Ele está trabalhando nos bastidores enquanto você espera. O tempo de espera é tempo de preparo.',
    practicalApplication: 'Hoje, quando algo demorar, em vez de reclamar, diga: "Senhor, eu confio no Teu tempo".',
    expectedResult: 'Paciência resiliente e confiança no processo divino.',
    category: 'Mental'
  },
  {
    id: '13',
    symptom: 'Falta de Perdão a Si Mesmo',
    diagnosis: 'Orgulho oculto que acredita que o seu pecado é maior que o sacrifício de Cristo.',
    jesusPrescription: 'Lucas 7:47 - "Perdoados lhe são os seus muitos pecados, porque ela muito amou."',
    simpleExplanation: 'Se o Juiz do Universo já te declarou inocente por causa de Jesus, insistir na culpa é questionar a eficácia da cruz.',
    practicalApplication: 'Olhe-se no espelho e diga: "Eu recebo o perdão de Deus e me perdoo, pois Cristo pagou minha dívida".',
    expectedResult: 'Autoaceitação fundamentada na graça e não no desempenho pessoal.',
    category: 'Espiritual'
  },
  {
    id: '14',
    symptom: 'Medo do Julgamento Alheio',
    diagnosis: 'Idolatria da aprovação humana e esquecimento da aprovação divina.',
    jesusPrescription: 'João 5:44 - "Como podeis vós crer, recebendo honra uns dos outros, e não buscando a honra que vem só de Deus?"',
    simpleExplanation: 'A opinião das pessoas é instável e passageira. O que realmente importa é o que Aquele que te criou pensa de você.',
    practicalApplication: 'Identifique uma decisão que você está adiando por medo do que dirão. Tome essa decisão baseada no que é certo diante de Deus.',
    expectedResult: 'Liberdade para ser quem Deus te chamou para ser, sem as amarras da expectativa alheia.',
    category: 'Mental'
  },
  {
    id: '15',
    symptom: 'Desânimo e Falta de Força',
    diagnosis: 'Focar nas próprias limitações em vez de se apoiar na força sobrenatural do Espírito.',
    jesusPrescription: 'João 16:33 - "No mundo tereis aflições, mas tende bom ânimo, eu venci o mundo."',
    simpleExplanation: 'O ânimo não vem de circunstâncias favoráveis, mas da vitória que Jesus já conquistou por nós.',
    practicalApplication: 'Cante ou ouça um louvor que exalte a vitória de Cristo, mesmo sem vontade, até que seu espírito se alegre.',
    expectedResult: 'Vigor renovado e persistência para continuar a jornada.',
    category: 'Emocional'
  },
  {
    id: '16',
    symptom: 'Conflitos Familiares e Desunião',
    diagnosis: 'Falta de humildade e disposição para servir, priorizando o "ter razão" sobre o amor.',
    jesusPrescription: 'João 13:34 - "Um novo mandamento vos dou: Que vos ameis uns aos outros; como eu vos amei a vós."',
    simpleExplanation: 'O amor cristão não é um sentimento, é um mandamento de serviço e sacrifício pelo bem do outro.',
    practicalApplication: 'Faça um ato de serviço inesperado para um familiar com quem você tem conflitos hoje, sem esperar nada em troca.',
    expectedResult: 'Restauração de vínculos e ambiente doméstico mais pacífico.',
    category: 'Relacional'
  },
  {
    id: '17',
    symptom: 'Inveja e Cobiça',
    diagnosis: 'Insatisfação com o que Deus proveu e desejo desordenado pelo que pertence ao próximo.',
    jesusPrescription: 'Lucas 12:15 - "Acautelai-vos e guardai-vos da avareza; porque a vida de qualquer não consiste na abundância das coisas que possui."',
    simpleExplanation: 'A verdadeira riqueza não está no que acumulamos, mas em quem somos em Deus. A inveja cega para as bênçãos que já temos.',
    practicalApplication: 'Agradeça a Deus por uma conquista de alguém que você sentiu inveja hoje. Abençoe o sucesso do outro.',
    expectedResult: 'Contentamento profundo e libertação da escravidão do "ter sempre mais".',
    category: 'Mental'
  },
  {
    id: '18',
    symptom: 'Falta de Generosidade',
    diagnosis: 'Apego excessivo aos bens materiais e falta de confiança na provisão divina.',
    jesusPrescription: 'Lucas 6:38 - "Dai, e ser-vos-á dado; boa medida, recalcada, sacudida e transbordando, vos deitarão no vosso seio."',
    simpleExplanation: 'Deus é o dono de tudo. Quando retemos o que Ele nos deu, impedimos o fluxo da Sua bênção em nossa vida.',
    practicalApplication: 'Faça uma doação ou ajude alguém financeiramente hoje, mesmo que seja um valor pequeno, como um ato de fé.',
    expectedResult: 'Experiência da alegria de dar e testemunho da provisão sobrenatural.',
    category: 'Espiritual'
  },
  {
    id: '19',
    symptom: 'Medo da Morte',
    diagnosis: 'Falta de compreensão da vitória de Cristo sobre o túmulo e da realidade da vida eterna.',
    jesusPrescription: 'João 11:25 - "Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá."',
    simpleExplanation: 'Para o cristão, a morte não é o fim, mas o portal para a presença plena de Deus. Jesus venceu a morte para nos dar vida.',
    practicalApplication: 'Medite na descrição do céu em Apocalipse 21 e 22 hoje, focando na esperança da glória futura.',
    expectedResult: 'Paz diante da finitude e foco nas coisas que são eternas.',
    category: 'Emocional'
  },
  {
    id: '20',
    symptom: 'Desobediência e Rebeldia',
    diagnosis: 'Desejo de seguir a própria vontade em vez de se submeter à autoridade amorosa de Deus.',
    jesusPrescription: 'João 14:15 - "Se me amais, guardai os meus mandamentos."',
    simpleExplanation: 'A obediência a Deus não é um fardo, mas a maior prova de amor e o caminho mais seguro para a felicidade.',
    practicalApplication: 'Identifique uma área onde você sabe que está desobedecendo a Deus e dê o primeiro passo para alinhar sua vida hoje.',
    expectedResult: 'Alinhamento com a vontade de Deus e recepção das Suas bênçãos plenas.',
    category: 'Espiritual'
  },
  {
    id: '21',
    symptom: 'Falta de Autocontrole',
    diagnosis: 'Escravidão aos impulsos da carne e falta de domínio próprio pelo Espírito.',
    jesusPrescription: 'Mateus 26:41 - "Vigiai e orai, para que não entreis em tentação; na verdade, o espírito está pronto, mas a carne é fraca."',
    simpleExplanation: 'O autocontrole não vem de força de vontade humana, mas de uma vida de oração e vigilância constante.',
    practicalApplication: 'Identifique um gatilho que te faz perder o controle. Quando ele surgir hoje, pare e faça uma oração curta antes de agir.',
    expectedResult: 'Domínio próprio e decisões baseadas na sabedoria, não no impulso.',
    category: 'Mental'
  },
  {
    id: '22',
    symptom: 'Dúvida e Incerteza',
    diagnosis: 'Focar nas impossibilidades humanas em vez de na fidelidade inabalável de Deus.',
    jesusPrescription: 'Mateus 21:21 - "Se tiverdes fé e não duvidardes... até se a este monte disserdes: Ergue-te e lança-te no mar, assim será feito."',
    simpleExplanation: 'A dúvida é o ruído que tenta abafar a voz de Deus. A fé é o silêncio que permite ouvi-Lo e agir conforme Sua palavra.',
    practicalApplication: 'Declare em voz alta: "Eu creio, Senhor! Ajuda-me na minha falta de fé" toda vez que a dúvida bater hoje.',
    expectedResult: 'Certeza interior e coragem para dar passos de fé.',
    category: 'Espiritual'
  },
  {
    id: '23',
    symptom: 'Falta de Gratidão',
    diagnosis: 'Foco no que falta em vez de reconhecer a abundância da graça de Deus já recebida.',
    jesusPrescription: 'Lucas 17:17-18 - "Não foram dez os limpos? E onde estão os nove? Não houve quem voltasse para dar glória a Deus...?"',
    simpleExplanation: 'A gratidão abre as portas para novas bênçãos. Um coração ingrato é um coração cego para a bondade de Deus.',
    practicalApplication: 'Escreva 10 coisas simples pelas quais você é grato hoje (ex: ar, água, pão, sono) e agradeça por cada uma.',
    expectedResult: 'Alegria genuína e percepção da presença de Deus nas pequenas coisas.',
    category: 'Emocional'
  },
  {
    id: '24',
    symptom: 'Julgamento e Crítica',
    diagnosis: 'Orgulho que se coloca como juiz do outro, ignorando as próprias falhas.',
    jesusPrescription: 'Mateus 7:1-3 - "Não julgueis, para que não sejais julgados... Por que vês tu o argueiro no olho do teu irmão, e não reparas na trave que está no teu próprio olho?"',
    simpleExplanation: 'Antes de apontar o erro de alguém, devemos examinar nosso próprio coração. A misericórdia que damos é a que recebemos.',
    practicalApplication: 'Hoje, quando sentir vontade de criticar alguém, pare e pense em uma qualidade dessa pessoa e elogie-a mentalmente.',
    expectedResult: 'Relacionamentos mais leves e um coração mais misericordioso.',
    category: 'Relacional'
  },
  {
    id: '25',
    symptom: 'Orgulho Intelectual',
    diagnosis: 'Confiança excessiva na própria inteligência e desprezo pela sabedoria divina.',
    jesusPrescription: 'Mateus 11:25 - "Graças te dou, ó Pai... porque ocultaste estas coisas aos sábios e entendidos, e as revelaste aos pequeninos."',
    simpleExplanation: 'O conhecimento sem amor e humildade apenas incha o ego. A verdadeira sabedoria começa com o reconhecimento de que nada sabemos sem Deus.',
    practicalApplication: 'Leia um texto bíblico hoje como se fosse a primeira vez, pedindo ao Espírito Santo que te ensine algo novo e simples.',
    expectedResult: 'Mente aberta para o aprendizado espiritual e humildade intelectual.',
    category: 'Mental'
  },
  {
    id: '26',
    symptom: 'Falta de Propósito no Trabalho',
    diagnosis: 'Ver o trabalho apenas como um meio de sobrevivência, ignorando que ele é uma forma de servir a Deus.',
    jesusPrescription: 'João 5:17 - "Meu Pai trabalha até agora, e eu trabalho também."',
    simpleExplanation: 'Todo trabalho honesto é sagrado quando feito para a glória de Deus. Você é um colaborador do Criador na manutenção do mundo.',
    practicalApplication: 'Antes de começar sua jornada hoje, ore: "Senhor, que meu trabalho hoje seja um culto a Ti e um serviço ao próximo".',
    expectedResult: 'Dignidade no labor diário e motivação renovada.',
    category: 'Espiritual'
  },
  {
    id: '27',
    symptom: 'Medo da Escassez',
    diagnosis: 'Insegurança financeira baseada na crença de que os recursos são limitados e Deus não proverá.',
    jesusPrescription: 'Mateus 6:26 - "Olhai para as aves do céu... vosso Pai celestial as alimenta. Não tendes vós muito mais valor do que elas?"',
    simpleExplanation: 'A economia do Reino de Deus é baseada na generosidade e na provisão, não na falta. Deus é o dono do ouro e da prata.',
    practicalApplication: 'Identifique um gasto desnecessário hoje e use esse valor para abençoar alguém em necessidade, exercitando a confiança.',
    expectedResult: 'Liberdade do medo financeiro e fé na provisão divina.',
    category: 'Emocional'
  },
  {
    id: '28',
    symptom: 'Dificuldade em Perdoar Outros',
    diagnosis: 'Desejo de vingança ou justiça própria, esquecendo-se do perdão imenso que recebemos de Deus.',
    jesusPrescription: 'Mateus 18:21-22 - "Senhor, até quantas vezes pecará meu irmão contra mim, e eu lhe perdoarei? ... Até setenta vezes sete."',
    simpleExplanation: 'O perdão não é um sentimento, é uma decisão de cancelar a dívida. Perdoamos porque fomos perdoados primeiro.',
    practicalApplication: 'Escreva o nome de alguém que você precisa perdoar. Ore por essa pessoa e declare: "Eu libero [nome] de toda dívida comigo".',
    expectedResult: 'Coração leve e restauração da paz interior.',
    category: 'Relacional'
  },
  {
    id: '29',
    symptom: 'Vício e Escravidão',
    diagnosis: 'Busca de alívio ou prazer em substâncias ou comportamentos que escravizam a vontade.',
    jesusPrescription: 'João 8:36 - "Se, pois, o Filho vos libertar, verdadeiramente sereis livres."',
    simpleExplanation: 'Qualquer coisa que domine sua vida além de Deus é um ídolo. Só o poder de Jesus pode quebrar as correntes do vício.',
    practicalApplication: 'Confesse sua luta a um irmão de confiança hoje e peça oração. Não tente lutar sozinho contra o que te domina.',
    expectedResult: 'Início do processo de libertação e domínio próprio restaurado.',
    category: 'Mental'
  },
  {
    id: '30',
    symptom: 'Idolatria Moderna (Status, Imagem)',
    diagnosis: 'Colocar a reputação ou o sucesso acima da vontade de Deus e da glória de Cristo.',
    jesusPrescription: 'Mateus 16:26 - "Pois que aproveita ao homem ganhar o mundo inteiro, se perder a sua alma?"',
    simpleExplanation: 'O mundo aplaude o que é visível, mas Deus sonda o coração. O sucesso sem Deus é o maior dos fracassos.',
    practicalApplication: 'Faça algo bom hoje que ninguém fique sabendo. Deixe que apenas Deus receba a glória por isso.',
    expectedResult: 'Foco no que é eterno e libertação da necessidade de aplauso.',
    category: 'Espiritual'
  },
  {
    id: '31',
    symptom: 'Falta de Intimidade com Deus',
    diagnosis: 'Religião baseada em regras e rituais, sem um relacionamento pessoal e vivo com o Pai.',
    jesusPrescription: 'João 15:15 - "Já vos não chamarei servos... mas tenho-vos chamado amigos."',
    simpleExplanation: 'Deus não quer sua performance religiosa, Ele quer seu coração. Jesus abriu o caminho para sermos amigos de Deus.',
    practicalApplication: 'Passe 15 minutos hoje apenas "estando" com Deus, como faria com um melhor amigo, sem roteiros ou pressa.',
    expectedResult: 'Relacionamento vibrante e percepção do amor paternal de Deus.',
    category: 'Espiritual'
  },
  {
    id: '32',
    symptom: 'Ansiedade Social e Medo de Rejeição',
    diagnosis: 'Dependência da aceitação humana para validar o próprio valor.',
    jesusPrescription: 'João 15:19 - "Se vós fôsseis do mundo, o mundo amaria o que era seu, mas porque não sois do mundo... o mundo vos odeia."',
    simpleExplanation: 'Sua identidade não é definida pelo que os outros pensam, mas pelo que Deus diz que você é: Seu filho amado.',
    practicalApplication: 'Sempre que se sentir julgado hoje, repita: "Eu sou aceito no Amado e isso me basta".',
    expectedResult: 'Segurança na identidade em Cristo e paz social.',
    category: 'Relacional'
  },
  {
    id: '33',
    symptom: 'Falta de Esperança no Luto',
    diagnosis: 'Dor profunda pela perda que obscurece a promessa da vida eterna.',
    jesusPrescription: 'João 11:25 - "Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá."',
    simpleExplanation: 'A morte não é o fim para quem está em Cristo, mas uma passagem. Jesus venceu a morte para nos dar esperança viva.',
    practicalApplication: 'Lembre-se de um momento feliz com quem partiu e agradeça a Deus pela esperança de que o reencontro é certo na eternidade.',
    expectedResult: 'Consolo divino e paz que excede o entendimento.',
    category: 'Emocional'
  },
  {
    id: '34',
    symptom: 'Perfeccionismo Paralisante',
    diagnosis: 'Tentativa de ser perfeito por esforço próprio, temendo o erro e o julgamento.',
    jesusPrescription: 'Mateus 11:30 - "Porque o meu jugo é suave e o meu fardo é leve."',
    simpleExplanation: 'Deus não espera perfeição de você, Ele espera dependência. A graça cobre suas imperfeições.',
    practicalApplication: 'Permita-se errar em algo pequeno hoje e ria de si mesmo, lembrando que Deus te ama apesar dos seus erros.',
    expectedResult: 'Liberdade da pressão interna e alegria na imperfeição redimida.',
    category: 'Mental'
  },
  {
    id: '35',
    symptom: 'Ingratidão e Murmuração',
    diagnosis: 'Foco no que falta em vez de reconhecer as inúmeras bênçãos já recebidas.',
    jesusPrescription: 'Lucas 17:17-18 - "Não foram dez os limpos? E onde estão os nove? Não houve quem voltasse para dar glória a Deus...?"',
    simpleExplanation: 'A murmuração fecha portas, mas a gratidão abre o coração para mais de Deus. Reclamar é ignorar a bondade divina.',
    practicalApplication: 'Faça uma lista de 10 coisas simples pelas quais você é grato hoje e ore agradecendo por cada uma.',
    expectedResult: 'Coração satisfeito e mudança de perspectiva para o positivo.',
    category: 'Espiritual'
  },
  {
    id: '36',
    symptom: 'Medo do Futuro (Incerteza)',
    diagnosis: 'Ansiedade sobre o que virá, esquecendo que Deus já está no amanhã.',
    jesusPrescription: 'Mateus 6:34 - "Não vos inquieteis, pois, pelo dia de amanhã, porque o dia de amanhã cuidará de si mesmo."',
    simpleExplanation: 'Deus é o Senhor do tempo. Se Ele cuidou de você até aqui, Ele não te abandonará no futuro.',
    practicalApplication: 'Sempre que pensar no "e se..." negativo, responda com "Deus proverá". Foque apenas nas tarefas de hoje.',
    expectedResult: 'Confiança inabalável e descanso na soberania de Deus.',
    category: 'Emocional'
  },
  {
    id: '37',
    symptom: 'Desejo de Controle',
    diagnosis: 'Orgulho de acreditar que podemos e devemos gerenciar todos os aspectos da nossa vida e dos outros.',
    jesusPrescription: 'Mateus 16:24 - "Se alguém quiser vir após mim, renuncie-se a si mesmo, tome sobre si a sua cruz, e siga-me."',
    simpleExplanation: 'Seguir Jesus significa entregar o volante da vida a Ele. O controle é uma ilusão; a entrega é a realidade do Reino.',
    practicalApplication: 'Identifique uma situação que você está tentando controlar e ore: "Senhor, eu entrego isso em Tuas mãos. Seja feita a Tua vontade".',
    expectedResult: 'Alívio do peso da responsabilidade excessiva e paz na entrega.',
    category: 'Mental'
  },
  {
    id: '38',
    symptom: 'Amargura por Ofensas Antigas',
    diagnosis: 'Rancor guardado que envenena a alma e impede o crescimento espiritual.',
    jesusPrescription: 'Lucas 23:34 - "Pai, perdoa-lhes, porque não sabem o que fazem."',
    simpleExplanation: 'A amargura é como beber veneno esperando que o outro morra. O perdão é a chave da sua própria cela.',
    practicalApplication: 'Ore por alguém que te feriu no passado, pedindo que Deus abençoe a vida dessa pessoa. Isso quebra o poder da amargura.',
    expectedResult: 'Cura emocional profunda e libertação do passado.',
    category: 'Relacional'
  },
  {
    id: '39',
    symptom: 'Preguiça e Procrastinação',
    diagnosis: 'Desperdício do tempo e dos talentos dados por Deus por falta de disciplina ou medo.',
    jesusPrescription: 'João 9:4 - "Convém que eu faça as obras daquele que me enviou, enquanto é dia; a noite vem, quando ninguém pode trabalhar."',
    simpleExplanation: 'O tempo é um recurso sagrado. Procrastinar é adiar o propósito que Deus tem para você hoje.',
    practicalApplication: 'Escolha a tarefa que você mais está adiando e dedique 30 minutos a ela agora mesmo, como um ato de obediência.',
    expectedResult: 'Produtividade com propósito e satisfação no dever cumprido.',
    category: 'Mental'
  },
  {
    id: '40',
    symptom: 'Falta de Foco Espiritual',
    diagnosis: 'Mente distraída por muitas coisas secundárias, perdendo de vista o Reino de Deus.',
    jesusPrescription: 'Mateus 6:33 - "Mas, buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas."',
    simpleExplanation: 'A vida cristã exige prioridade. Se Deus não for o primeiro, Ele não será nada em sua vida.',
    practicalApplication: 'Desligue as notificações do celular por 1 hora hoje e use esse tempo para leitura bíblica e oração focada.',
    expectedResult: 'Clareza espiritual e alinhamento com a vontade de Deus.',
    category: 'Espiritual'
  }
];
