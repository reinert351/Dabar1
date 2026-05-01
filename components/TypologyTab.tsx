
import React, { useState } from 'react';
import { UserState, Sermon, SermonBlock, CaptureTarget } from '../types';
import { ICON_SERMON, ICON_BIBLE, ICON_TYPOLOGY } from '../constants';
import { saveSermon, getSermons } from '../services/database';

interface TypologyEntry {
  id: string;
  title: string;
  shadow: string;
  reality: string;
  paragraphs: string[];
  refs: string[];
  color: string;
}

// Fix: Export TYPOLOGY_DATA to allow cross-linking in services/cross_link_engine.ts
export const TYPOLOGY_DATA: TypologyEntry[] = [
  {
    id: 'adam',
    title: 'Adão',
    shadow: 'A Cabeça da Humanidade Caída',
    reality: 'Cristo, o Último Adão',
    color: 'border-l-slate-500',
    refs: ['Gênesis 2', 'Romanos 5:12-21', '1 Coríntios 15:45'],
    paragraphs: [
      "Adão é estabelecido como o 'tipo' original de Cristo, servindo como o representante federal de toda a raça humana. No Éden, ele foi colocado em uma posição de perfeição e autoridade, mas sua queda trouxe a morte e a separação para todos os seus descendentes. Enquanto o primeiro Adão é a fonte da nossa natureza terrena e corruptível, Cristo surge no Novo Testamento como o 'Último Adão', a nova cabeça de uma humanidade redimida e glorificada.",
      "A prova de Adão ocorreu em um jardim de delícias, onde ele falhou em obedecer a um único mandamento negativo. Em contraste, a vitória de Cristo começou em um jardim de agonia (Getsêmani) e culminou em um deserto de provação, onde Ele obedeceu perfeitamente em meio à privação total. A desobediência de um trouxe condenação; a obediência do Outro trouxe justificação e vida eterna para muitos.",
      "O sono profundo de Adão para a formação de Eva é uma das sombras mais belas da cruz. Do lado aberto de Adão adormecido, Deus tirou a costela para formar sua noiva. Do lado traspassado de Cristo na cruz, morto em 'sono profundo', fluiu o sangue e a água que deram origem à Igreja, Sua noiva celestial.",
      "A expulsão do Éden e as túnicas de peles revelam a necessidade de um sacrifício para cobrir a vergonha do pecado. O primeiro Adão tentou se cobrir com folhas de figueira (obras humanas), mas Deus o cobriu com a morte de um inocente. Cristo é o nosso revestimento definitivo, a justiça divina que não murcha como as folhas.",
      "Em suma, a tipologia adâmica nos ensina que a nossa identidade biológica nos liga à derrota, mas nossa identidade espiritual em Cristo nos liga ao triunfo. Onde o pecado abundou por meio do primeiro homem, a graça superabundou por meio do Homem Celestial."
    ]
  },
  {
    id: 'ark',
    title: 'Arca de Noé',
    shadow: 'O Refúgio Único na Ira',
    reality: 'Cristo, o Nosso Abrigo Eterno',
    color: 'border-l-blue-500',
    refs: ['Gênesis 6-8', '1 Pedro 3:20-21'],
    paragraphs: [
      "A Arca de Noé constitui um dos tipos mais vívidos da salvação em Cristo em todo o Antigo Testamento. Assim como Deus determinou um julgamento hídrico sobre a iniquidade da raça humana, a Arca foi projetada por decreto divino para ser o único meio de escape.",
      "Um detalhe arquitetônico fundamental era a porta única da Arca. Não havia múltiplas entradas para diferentes crenças ou méritos; havia apenas uma via de acesso. Cristo, no Novo Testamento, ecoa essa tipologia ao declarar: 'Eu sou a porta'.",
      "A Arca foi revestida de betume (piche) por dentro e por fora, o que no hebraico compartilha a mesma raiz da palavra 'expiação' (kaphar). Esse revestimento impedia que as águas do juízo penetrassem o refúgio. Tipologicamente, o sangue de Cristo é o nosso revestimento de expiação.",
      "A preservação através da Arca não foi um mérito da família de Noé, mas uma demonstração da graça eletiva. O próprio Deus fechou a porta por fora, garantindo que ninguém se perdesse e que nenhum estranho entrasse após o tempo da graça.",
      "Finalmente, a Arca repousou sobre o Monte Ararat no sétimo mês, no dia dezessete — curiosamente a mesma data em que, séculos mais tarde, Cristo ressuscitaria dentre os mortos."
    ]
  },
  {
    id: 'isaac',
    title: 'Isaque',
    shadow: 'O Filho da Promessa no Altar',
    reality: 'O Sacrifício do Filho Unigênito',
    color: 'border-l-amber-500',
    refs: ['Gênesis 22', 'João 3:16', 'Gálatas 3:16'],
    paragraphs: [
      "Isaque é o tipo quintessencial de Cristo como o Filho amado e submisso. Sua própria concepção foi um milagre, nascendo de uma madre considerada morta e de um pai em idade avançada, prefigurando o nascimento sobrenatural do Messias.",
      "O evento no Monte Moriá é a cena mais profunda de tipologia substitutiva da Bíblia. Abraão, o pai, leva seu único filho, o filho a quem ama, para o sacrifício. Esse cenário espelha perfeitamente o coração do Pai Celestial.",
      "A submissão de Isaque é um dos traços mais impactantes. Sendo um jovem vigoroso, ele poderia facilmente ter resistido ao seu pai idoso, mas ele escolheu se deitar sobre o altar. Cristo, no Getsêmani e no Calvário, não foi levado à cruz contra Sua vontade.",
      "No clímax da narrativa, a intervenção divina revela o carneiro preso pelos chifres no matagal. O carneiro assume o lugar de Isaque, morrendo para que o filho vivesse. Aqui vemos a substituição penal clara.",
      "A benção que segue o teste de Moriá confirma que, através da semente de Abraão, todas as nações seriam benditas. Isaque sobreviveu para dar continuidade à linhagem que culminaria em Jesus."
    ]
  },
  {
    id: 'joseph',
    title: 'José',
    shadow: 'Da Cova ao Trono do Egito',
    reality: 'A Humilhação e Exaltação do Messias',
    color: 'border-l-emerald-500',
    refs: ['Gênesis 37-50', 'Atos 7:9-10'],
    paragraphs: [
      "José é talvez o paralelo biográfico mais exaustivo de Jesus Cristo nas Escrituras. Amado de forma especial por seu pai, ele foi enviado para buscar seus irmãos, que o odiavam sem causa. Jesus, o Filho amado, veio para os Seus, mas os Seus não O receberam.",
      "A traição sofrida por José foi física e financeira: vendido por moedas de prata por seus próprios parentes. O paralelo com Judas Iscariotes vendendo o Mestre por trinta moedas de prata é inegável.",
      "A exaltação de José ao trono do Egito é uma imagem poderosa da ressurreição e ascensão de Jesus. De um prisioneiro esquecido, ele se torna o senhor da nação mais poderosa da terra, e o comando é dado: 'Aclemai!'.",
      "O propósito do sofrimento de José foi revelado na sua frase clássica: 'Vós bem intentastes mal contra mim; porém Deus o tornou em bem, para manter com vida a muito povo'. Essa é a lógica da cruz.",
      "A reconciliação final de José com seus irmãos prefigura o reconhecimento futuro de Israel para com o Messias. Ele se revelou a eles em particular e os perdoou plenamente."
    ]
  },
  {
    id: 'moses',
    title: 'Moisés',
    shadow: 'O Libertador e Mediador da Lei',
    reality: 'O Grande Libertador e Mediador da Graça',
    color: 'border-l-indigo-600',
    refs: ['Êxodo 2-3', 'Deuteronômio 18:15', 'Hebreus 3:1-6'],
    paragraphs: [
      "Moisés é o tipo de Cristo no seu ofício profético e mediador. Sua preservação milagrosa no nascimento, quando Faraó decretou a morte dos meninos hebreus, ecoa o livramento de Jesus da fúria de Herodes.",
      "No deserto, Moisés atuou como o mediador entre um Deus santo e um povo rebelde. Ele subiu ao monte para receber a vontade divina e desceu para entregá-la ao povo. Jesus é o Mediador de uma superior aliança.",
      "Moisés foi o libertador que tirou Israel do jugo físico do Egito através de sinais e prodígios. Jesus é o Libertador que nos retira do domínio das trevas e da escravidão espiritual de Satanás.",
      "A promessa de Deuteronômio 18:15, onde Moisés afirma que Deus levantaria um 'profeta como ele', aponta diretamente para o Messias. Moisés deu o maná; Jesus é o Pão Vivo que desceu do céu.",
      "Contudo, a superioridade de Cristo sobre Moisés é enfatizada em Hebreus: Moisés foi fiel em toda a casa de Deus como servo, mas Cristo o é como Filho sobre Sua própria casa."
    ]
  },
  {
    id: 'melchizedek',
    title: 'Melquisedeque',
    shadow: 'O Sacerdote-Rei sem Genealogia',
    reality: 'O Sacerdócio Eterno de Cristo',
    color: 'border-l-indigo-500',
    refs: ['Gênesis 14', 'Salmos 110:4', 'Hebreus 7'],
    paragraphs: [
      "Melquisedeque surge nas páginas da Bíblia como uma figura misteriosa e majestosa, portando dois títulos simultâneos: Rei de Salém (Rei de Paz) e Rei de Justiça. Esse duplo ofício era o protótipo do Messias.",
      "A ausência de genealogia registrada de Melquisedeque — sem pai, sem mãe, sem início de dias ou fim de vida no texto — é uma escolha literária deliberada para tipificar a eternidade de Cristo.",
      "O encontro de Melquisedeque com Abraão estabelece a superioridade do seu sacerdócio. Abraão, o patriarca e antepassado de Levi, pagou dízimos a Melquisedeque e foi por ele abençoado.",
      "Melquisedeque trouxe pão e vinho para Abraão após a batalha. Esse gesto é profundamente profético e eucarístico, apontando para os elementos que simbolizariam o corpo e o sangue do Messias.",
      "A promessa do Salmo 110:4: 'Tu és um sacerdote eterno, segundo a ordem de Melquisedeque', é a âncora da nossa segurança teológica."
    ]
  },
  {
    id: 'tabernacle_type',
    title: 'Tabernáculo',
    shadow: 'A Tenda da Habitação Divina',
    reality: 'O Verbo que Tabernaculou entre Nós',
    color: 'border-l-rose-500',
    refs: ['Êxodo 25-40', 'João 1:14', 'Hebreus 9'],
    paragraphs: [
      "O Tabernáculo é o 'mapa arquitetônico' de Cristo. Quando o evangelista João afirma que o Verbo se fez carne e 'habitou' (tabernaculou) entre nós, ele estava conectando Jesus diretamente à tenda do deserto.",
      "Externamente, o Tabernáculo era humilde, coberto com peles de animais sem beleza aparente, escondendo a glória de ouro no interior. Isso prefigura a encarnação de Jesus, que 'não tinha parecer nem formosura'.",
      "Cada peça do mobiliário é um atributo messiânico. O Altarfala de Sua morte; a Pia de Sua purificação; a Mesa de Sua provisão; o Candelabro de Sua iluminação; e a Arca da Aliança de Sua justiça total.",
      "O Véu que separava o Lugar Santo do Santo dos Santos é especificamente identificado em Hebreus como a 'carne de Cristo'. No momento de Sua morte, o véu do Templo rasgou-se de alto a baixo.",
      "Estudar o Tabernáculo como tipo de Cristo é entender que Deus planejou cada detalhe da nossa comunhão com Ele através de Jesus."
    ]
  },
  {
    id: 'aaron',
    title: 'Arão',
    shadow: 'O Sumo Sacerdote de Israel',
    reality: 'Cristo, o Nosso Grande Sumo Sacerdote',
    color: 'border-l-yellow-600',
    refs: ['Êxodo 28', 'Levítico 8', 'Hebreus 4:14-16', 'Hebreus 5:1-10'],
    paragraphs: [
      "Arão, o primeiro sumo sacerdote de Israel, é um tipo majestoso de Cristo em Seu ofício sacerdotal. Escolhido por Deus e não por homens, Arão era o único autorizado a entrar no Lugar Santíssimo para interceder pelo povo, prefigurando Jesus, que entrou no santuário celestial de uma vez por todas.",
      "As vestes de Arão eram 'para glória e ornamento', repletas de simbolismo. O peitoral com as doze pedras preciosas, cada uma gravada com o nome de uma tribo, mostra que o sacerdote levava o povo sobre o seu coração diante de Deus. Cristo, nosso Sumo Sacerdote, nos carrega em Seu coração eternamente diante do Pai.",
      "Arão era um homem sujeito a fraquezas, o que o tornava capaz de se compadecer dos ignorantes e errantes. Jesus, embora sem pecado, foi tentado em todas as coisas, tornando-Se o Sumo Sacerdote perfeito que pode se compadecer de nossas fraquezas e nos socorrer no tempo oportuno.",
      "A unção de Arão com o óleo sagrado, que descia sobre sua barba e até a orla de suas vestes, tipifica a unção do Espírito Santo sobre Cristo (o Ungido). Essa unção flui da Cabeça (Cristo) para todo o Corpo (a Igreja).",
      "Diferente de Arão, cujo sacerdócio era interrompido pela morte, Jesus possui um sacerdócio imutável e eterno, pois vive para sempre para interceder por nós."
    ]
  },
  {
    id: 'joshua',
    title: 'Josué',
    shadow: 'O Conquistador da Terra Prometida',
    reality: 'Jesus, o Capitão da Nossa Salvação',
    color: 'border-l-red-600',
    refs: ['Josué 1', 'Josué 5:13-15', 'Hebreus 4:8-9'],
    paragraphs: [
      "Josué é um tipo de Cristo já a partir de seu nome: no hebraico, Yehoshua (Josué) e Yeshua (Jesus) são variações do mesmo nome, que significa 'O Senhor é Salvação'. Moisés deu a Lei, mas Josué introduziu o povo na Terra Prometida.",
      "A transição de Moisés para Josué é teologicamente significativa. A Lei (Moisés) pode nos levar até a fronteira da promessa e nos mostrar nossos pecados, mas somente a Graça (Jesus/Josué) pode nos fazer atravessar o Jordão e tomar posse da nossa herança espiritual.",
      "Josué atuou como o comandante militar de Israel, liderando-os em batalhas contra inimigos formidáveis. Jesus é o 'Capitão da nossa salvação' que venceu o pecado, a morte e o diabo, liderando Seu povo em triunfo espiritual.",
      "O encontro de Josué com o 'Príncipe do Exército do Senhor' antes da batalha de Jericó é uma provável cristofania. Josué reconheceu que não era o comandante supremo, mas um servo sob as ordens do Senhor. Jesus é o verdadeiro Comandante que luta por nós.",
      "Assim como Josué repartiu a terra entre as tribos como herança, Jesus nos concedeu o Espírito Santo e nos prepara um lugar nas mansões celestiais, garantindo nossa herança eterna."
    ]
  },
  {
    id: 'boaz',
    title: 'Boaz',
    shadow: 'O Parente Remidor',
    reality: 'Cristo, o Redentor da Nossa Herança',
    color: 'border-l-orange-400',
    refs: ['Rute 2-4', 'Gálatas 4:4-5', 'Efésios 1:7'],
    paragraphs: [
      "Boaz, no livro de Rute, personifica a lei do 'Goel' ou Parente Remidor. Para remir uma propriedade ou uma pessoa, o remidor precisava cumprir três requisitos: ser parente próximo, ter os meios para pagar e ter o desejo de fazê-lo. Boaz cumpriu todos para com Rute.",
      "Jesus Cristo se tornou nosso Parente Próximo através da Encarnação. Ele se fez carne e sangue para que pudesse legalmente nos remir da escravidão do pecado e da morte. Ele se tornou um de nós para nos salvar.",
      "Jesus possuía os meios infinitos para pagar nossa dívida. O preço da nossa redenção não foi ouro ou prata, mas o Seu próprio sangue precioso. Ele pagou o que não devia porque nós devíamos o que não podíamos pagar.",
      "O desejo de Cristo em nos remir é evidente em Sua entrega voluntária. Assim como Boaz não descansou até resolver a questão de Rute, Jesus 'pelo gozo que lhe estava proposto, suportou a cruz', desejando ardentemente nossa salvação.",
      "A união de Boaz e Rute resultou na linhagem real de Davi e, eventualmente, do Messias. Nossa redenção em Cristo nos une a Ele em um casamento espiritual eterno, tornando-nos parte da família de Deus."
    ]
  },
  {
    id: 'david',
    title: 'Davi',
    shadow: 'O Rei Segundo o Coração de Deus',
    reality: 'Cristo, o Rei Eterno de Israel',
    color: 'border-l-blue-700',
    refs: ['1 Samuel 16', '2 Samuel 7', 'Mateus 1:1', 'Apocalipse 22:16'],
    paragraphs: [
      "Davi é o tipo mais proeminente de Cristo como Rei. Escolhido enquanto ainda era um jovem pastor de ovelhas, ele prefigura o 'Bom Pastor' que dá a vida pelas ovelhas. Jesus é frequentemente chamado de 'Filho de Davi' nos Evangelhos.",
      "A vitória de Davi sobre Golias é uma sombra da vitória de Cristo sobre Satanás. Davi enfrentou o gigante que aterrorizava o povo, usando armas humildes e confiando no nome do Senhor. Jesus, na cruz, desarmou os principados e potestades, vencendo o inimigo que nos escravizava.",
      "Davi foi um rei que sofreu perseguição injusta antes de ser coroado. Ele foi ungido por Samuel, mas passou anos no deserto sendo caçado por Saul. Isso prefigura a primeira vinda de Cristo, onde Ele foi rejeitado e perseguido antes de Sua exaltação final.",
      "A aliança davídica em 2 Samuel 7 promete que o trono de Davi seria estabelecido para sempre. Essa promessa não se cumpriu nos reis terrenos de Judá, mas encontrou seu cumprimento final e eterno em Jesus Cristo, cujo reino não terá fim.",
      "Davi foi um homem de guerra que expandiu as fronteiras de Israel. Jesus é o Rei vitorioso que estabelece o Reino de Deus em todo o mundo, conquistando corações e nações para a glória do Pai."
    ]
  },
  {
    id: 'solomon',
    title: 'Salomão',
    shadow: 'O Rei da Paz e Sabedoria',
    reality: 'Cristo, o Príncipe da Paz e Sabedoria de Deus',
    color: 'border-l-yellow-500',
    refs: ['1 Reis 3-10', 'Mateus 12:42', 'Colossenses 2:3'],
    paragraphs: [
      "Salomão tipifica Cristo em Sua glória, paz e sabedoria. Enquanto Davi representa o Cristo sofredor e guerreiro, Salomão representa o Cristo entronizado e reinante em um reino de paz absoluta (Shalom).",
      "A sabedoria de Salomão era lendária, atraindo reis e rainhas de terras distantes para ouvi-lo. Jesus afirmou ser 'maior do que Salomão', pois n'Ele estão escondidos todos os tesouros da sabedoria e do conhecimento divino.",
      "A construção do Templo de Jerusalém por Salomão é uma sombra da edificação da Igreja por Cristo. Salomão usou os melhores materiais e artesãos para criar uma habitação para Deus. Jesus está edificando um templo espiritual composto de pedras vivas.",
      "O reinado de Salomão foi marcado por uma prosperidade e paz sem precedentes. Isso aponta para o futuro Reino Milenar de Cristo, onde a justiça e a paz se beijarão e a terra se encherá do conhecimento da glória do Senhor.",
      "A visita da Rainha de Sabá ilustra como as nações gentílicas viriam à luz do Messias. Jesus é o centro de atração de todos os povos, e Sua glória excede tudo o que se pode ouvir ou imaginar."
    ]
  },
  {
    id: 'jonah',
    title: 'Jonas',
    shadow: 'O Profeta no Ventre do Peixe',
    reality: 'O Sinal da Ressurreição de Cristo',
    color: 'border-l-teal-600',
    refs: ['Jonas 1-2', 'Mateus 12:39-40'],
    paragraphs: [
      "Jonas é o único tipo de Cristo explicitamente mencionado pelo próprio Jesus como o 'sinal de Jonas'. Sua experiência de três dias e três noites no ventre do grande peixe é a prefiguração direta da morte, sepultamento e ressurreição do Messias.",
      "A entrega de Jonas para ser lançado ao mar revolto para salvar a tripulação é um ato de sacrifício substitutivo. Para que a tempestade do juízo divino cessasse sobre os outros, Jonas teve que ser 'entregue à morte'. Jesus foi entregue por nossos pecados para aplacar a ira divina.",
      "A oração de Jonas de dentro do peixe fala de descer às profundezas e ser cercado pelas águas da morte, mas ser trazido de volta pela mão de Deus. Isso espelha a descida de Cristo ao Hades e Sua vitória triunfante sobre a sepultura.",
      "A pregação de Jonas em Nínive resultou em um arrependimento em massa de um povo gentio. Isso tipifica como a ressurreição de Cristo abriria a porta da salvação para todas as nações, não apenas para Israel.",
      "Embora Jonas tenha falhado em sua atitude e compaixão, Cristo é o Profeta perfeito que ama as almas perdidas e se alegra com o arrependimento dos pecadores."
    ]
  },
  {
    id: 'paschal_lamb',
    title: 'Cordeiro Pascal',
    shadow: 'O Sangue que Livra da Morte',
    reality: 'Cristo, o Cordeiro de Deus',
    color: 'border-l-rose-600',
    refs: ['Êxodo 12', 'João 1:29', '1 Coríntios 5:7'],
    paragraphs: [
      "O Cordeiro Pascal é uma das sombras mais precisas e detalhadas da obra redentora de Cristo. Instituído no Egito, o cordeiro deveria ser sem defeito, tipificando a pureza e a santidade absoluta de Jesus.",
      "O sangue do cordeiro aplicado nas vergas e umbrais das portas garantia que o anjo destruidor passasse por cima (Passover) daquela casa. Não era a bondade dos moradores que os salvava, mas a presença do sangue. Fomos salvos pelo sangue de Cristo.",
      "O cordeiro deveria ser assado no fogo, simbolizando o juízo de Deus que Cristo suportou em nosso lugar. Ele deveria ser comido inteiramente, indicando que devemos nos apropriar de Cristo em Sua totalidade pela fé.",
      "Nenhum osso do cordeiro pascal deveria ser quebrado. Essa profecia típica se cumpriu literalmente na cruz, quando os soldados quebraram as pernas dos ladrões, mas encontraram Jesus já morto e preservaram Seus ossos intactos.",
      "João Batista identificou Jesus como 'o Cordeiro de Deus que tira o pecado do mundo'. Paulo afirma categoricamente: 'Cristo, nossa Páscoa, foi sacrificado por nós'. Ele é o sacrifício definitivo que encerra todos os outros."
    ]
  },
  {
    id: 'elijah',
    title: 'Elias',
    shadow: 'O Profeta do Fogo e Arrebatamento',
    reality: 'Cristo, o Profeta Poderoso e Ascendido',
    color: 'border-l-orange-600',
    refs: ['1 Reis 17-19', '2 Reis 2', 'Mateus 17:1-13'],
    paragraphs: [
      "Elias é um tipo de Cristo em seu ministério profético confrontador e em sua ascensão gloriosa. Assim como Elias desafiou os profetas de Baal no Carmelo para restaurar a adoração ao verdadeiro Deus, Jesus confrontou as estruturas religiosas de Sua época para revelar o Pai.",
      "A provisão milagrosa de Elias (corvos, a viúva de Sarepta) aponta para Cristo como aquele que sustenta Seu povo em tempos de escassez. Jesus multiplicou pães e peixes, provando ser a fonte de todo suprimento.",
      "O arrebatamento de Elias em um redemoinho e carros de fogo é uma das sombras mais claras da Ascensão de Cristo. Elias subiu ao céu vivo, prefigurando o retorno de Jesus ao Pai após Sua ressurreição, onde Ele agora intercede por nós.",
      "Elias apareceu com Moisés no Monte da Transfiguração para conversar com Jesus sobre Sua 'partida' (êxodo). Isso mostra que Elias, representando os profetas, testifica que Jesus é o cumprimento de todas as profecias.",
      "A promessa do retorno de 'Elias' antes do Dia do Senhor, cumprida parcialmente em João Batista, aponta para o ministério preparatório que antecede a manifestação de Cristo em glória."
    ]
  },
  {
    id: 'elisha',
    title: 'Eliseu',
    shadow: 'O Profeta da Porção Dobrada',
    reality: 'Cristo, o Doador do Espírito e Realizador de Milagres',
    color: 'border-l-emerald-600',
    refs: ['2 Reis 2-13', 'João 14:12'],
    paragraphs: [
      "Eliseu, o sucessor de Elias, recebeu uma 'porção dobrada' do espírito de seu mestre. Isso tipifica o ministério de Cristo que, após Sua ascensão, enviou o Espírito Santo para que Seus discípulos fizessem 'obras maiores'.",
      "O ministério de Eliseu foi marcado por milagres de vida e restauração (ressurreição do filho da sunamita, purificação das águas, multiplicação de azeite). Isso reflete perfeitamente o ministério terreno de Jesus, que passou fazendo o bem e curando a todos.",
      "A cura de Naamã, o leproso, por meio da obediência simples de mergulhar no Jordão, ilustra a salvação pela fé em Cristo. A lepra (pecado) é purificada não por rituais complexos, mas pelo lavar regenerador da Palavra.",
      "O milagre do machado que flutuou mostra o poder de Deus sobre as leis da natureza para recuperar o que estava perdido. Jesus veio buscar e salvar o que se havia perdido, revertendo a queda e suas consequências.",
      "Mesmo após a morte, os ossos de Eliseu deram vida a um cadáver que os tocou. Isso aponta para o poder vivificante que emana da morte de Cristo; Sua morte trouxe vida eterna para todos os que n'Ele creem."
    ]
  },
  {
    id: 'job_type',
    title: 'Jó',
    shadow: 'O Sofredor Justo',
    reality: 'Cristo, o Homem de Dores',
    color: 'border-l-slate-700',
    refs: ['Jó 1-2', 'Jó 19:25', 'Hebreus 2:10-18'],
    paragraphs: [
      "Jó é um tipo de Cristo em Seu sofrimento imerecido e em Sua paciência triunfante. Descrito como 'íntegro e reto', Jó foi entregue a uma provação extrema por permissão divina, perdendo tudo, exceto sua fé.",
      "O sofrimento de Jó não foi resultado de seu próprio pecado, mas serviu a um propósito cósmico maior, silenciando as acusações de Satanás. Jesus, o único verdadeiramente justo, sofreu a agonia máxima para desmascarar e vencer o acusador de nossos irmãos.",
      "Os 'amigos' de Jó, que o acusaram falsamente em sua dor, lembram os líderes religiosos que zombaram de Jesus na cruz. Em meio ao abandono, Jó clamou: 'Eu sei que o meu Redentor vive', antecipando a esperança da ressurreição.",
      "A restauração final de Jó, onde ele recebeu o dobro de tudo o que tinha, prefigura a exaltação de Cristo após Sua humilhação. Jesus recebeu um nome que está acima de todo nome e toda autoridade no céu e na terra.",
      "A intercessão de Jó por seus amigos que o haviam ofendido é uma sombra da oração de Jesus: 'Pai, perdoa-lhes, pois não sabem o que fazem'. O sofredor torna-se o intercessor vitorioso."
    ]
  },
  {
    id: 'esther',
    title: 'Ester',
    shadow: 'A Rainha Intercessora',
    reality: 'Cristo, o Nosso Advogado e Intercessor',
    color: 'border-l-pink-500',
    refs: ['Ester 4-8', 'Hebreus 7:25', '1 João 2:1'],
    paragraphs: [
      "Ester tipifica Cristo em Sua disposição de se identificar com Seu povo em perigo e interceder por eles diante do Rei, mesmo sob risco de morte. Sua frase 'se perecer, pereci' ecoa a entrega total de Jesus.",
      "O decreto de morte contra os judeus, arquitetado por Hamã, representa a condenação que pesava sobre a humanidade devido ao pecado. Ester, em sua posição real, era a única que podia intervir.",
      "Para salvar seu povo, Ester teve que se apresentar diante do Rei sem ser chamada, o que poderia significar sua morte. Jesus entrou na presença do Pai, levando sobre Si nossos pecados, para obter para nós o 'cetro de ouro' da graça e aceitação.",
      "A vitória de Ester resultou na inversão do decreto: o que era para ser um dia de extermínio tornou-se o dia de Purim, uma celebração de livramento. A cruz de Cristo inverteu nossa sentença de morte em um decreto de vida eterna.",
      "Assim como Ester preparou um banquete para revelar o inimigo e salvar seu povo, Jesus nos prepara a Mesa do Senhor e o Banquete das Bodas do Cordeiro, celebrando nossa redenção final."
    ]
  },
  {
    id: 'nehemiah',
    title: 'Neemias',
    shadow: 'O Reconstrutor dos Muros',
    reality: 'Cristo, o Restaurador da Nossa Herança',
    color: 'border-l-stone-600',
    refs: ['Neemias 1-6', 'Efésios 2:19-22'],
    paragraphs: [
      "Neemias, o copeiro do rei que deixou o palácio para reconstruir os muros de Jerusalém, é um tipo de Cristo que deixou Sua glória celestial para restaurar a humanidade caída e em ruínas.",
      "A tristeza de Neemias pelas ruínas de sua cidade reflete o choro de Jesus sobre Jerusalém e Sua compaixão pelas multidões desgarradas. Ele veio para reconstruir o que o pecado havia destruído.",
      "Neemias enfrentou oposição ferrenha de Sambalate e Tobias, que usaram zombaria e ameaças para parar a obra. Jesus enfrentou a oposição constante das trevas, mas afirmou: 'Edificarei a minha igreja, e as portas do inferno não prevalecerão contra ela'.",
      "A estratégia de Neemias de trabalhar com uma mão na obra e outra na espada tipifica a vida cristã em Cristo: edificação e guerra espiritual simultâneas. Jesus nos equipa com Sua Palavra e Seu Espírito para a vitória.",
      "A conclusão dos muros em apenas 52 dias trouxe temor aos inimigos e glória a Deus. A obra consumada de Cristo na cruz e na ressurreição é a nossa segurança inabalável, os muros de salvação que nos protegem eternamente."
    ]
  },
  {
    id: 'daniel_type',
    title: 'Daniel',
    shadow: 'O Profeta Amado e o Reino de Deus',
    reality: 'Cristo, o Filho do Homem e Rei dos Reis',
    color: 'border-l-blue-600',
    refs: ['Daniel 6', 'Daniel 7:13-14', 'Mateus 24'],
    paragraphs: [
      "Daniel é um tipo de Cristo em Sua integridade inabalável em meio a um mundo hostil (Babilônia) e em Sua revelação dos mistérios do Reino de Deus. Ele foi um 'homem muito amado' pelo céu.",
      "A cova dos leões é uma das sombras mais fortes da morte e ressurreição. Daniel foi lançado na cova por causa de sua fidelidade a Deus, selado com uma pedra, mas saiu ileso na manhã seguinte. Jesus foi colocado no sepulcro, selado, mas ressuscitou vitorioso sobre a morte.",
      "A visão de Daniel do 'Filho do Homem' vindo com as nuvens do céu e recebendo domínio eterno é a base para o título que Jesus mais usou para Si mesmo. Ele é o cumprimento da visão de Daniel sobre o Reino que jamais será destruído.",
      "A sabedoria de Daniel, que excedia a de todos os magos e astrólogos, aponta para Cristo, em quem estão todos os tesouros da sabedoria. Ele interpreta não apenas sonhos, mas o destino eterno da humanidade.",
      "A intercessão de Daniel pelo seu povo em cativeiro (Daniel 9) mostra o coração do Mediador. Ele se identificou com os pecados da nação, embora fosse justo, clamando por misericórdia e restauração."
    ]
  },
  {
    id: 'manna',
    title: 'Maná',
    shadow: 'O Pão do Céu no Deserto',
    reality: 'Cristo, o Pão Vivo que Desceu do Céu',
    color: 'border-l-slate-300',
    refs: ['Êxodo 16', 'João 6:31-58'],
    paragraphs: [
      "O Maná foi o alimento sobrenatural que sustentou Israel por quarenta anos no deserto. Jesus identifica explicitamente o maná como um tipo de Si mesmo no discurso do 'Pão da Vida'.",
      "O maná era pequeno, redondo e branco, simbolizando a humildade, a perfeição e a pureza de Cristo. Ele vinha do céu durante a noite, assim como Jesus veio ao mundo em meio às trevas espirituais.",
      "O maná deveria ser colhido diariamente, indicando nossa dependência contínua da graça de Cristo. Não podemos viver hoje com a experiência de ontem; precisamos nos alimentar de Jesus a cada momento.",
      "Enquanto o maná físico apenas sustentava a vida terrena e aqueles que o comeram morreram, Jesus é o Pão Vivo que, se alguém dele comer, viverá para sempre. Ele satisfaz a fome mais profunda da alma.",
      "Um pote de maná foi guardado dentro da Arca da Aliança, no Lugar Santíssimo, como memorial. Cristo, nosso alimento celestial, agora está oculto com Deus, mas um dia se manifestará em glória para Seus santos."
    ]
  },
  {
    id: 'stricken_rock',
    title: 'Rocha Ferida',
    shadow: 'A Fonte de Água no Deserto',
    reality: 'Cristo, a Rocha da Nossa Salvação',
    color: 'border-l-slate-500',
    refs: ['Êxodo 17:1-7', 'Números 20:1-13', '1 Coríntios 10:4'],
    paragraphs: [
      "A Rocha Ferida em Refidim é um dos tipos mais profundos da obra de Cristo. Quando o povo teve sede, Deus ordenou que Moisés ferisse a rocha com sua vara. Ao ser ferida, a rocha jorrou água em abundância para saciar a sede de milhões.",
      "Paulo afirma categoricamente em 1 Coríntios 10:4: 'e a rocha era Cristo'. A vara de Moisés representa a vara do juízo da Lei. Cristo teve que ser ferido pelo juízo de Deus na cruz para que o Espírito Santo (a Água Viva) pudesse fluir para nós.",
      "Na segunda vez que o povo teve sede, em Cades, Deus ordenou que Moisés apenas 'falasse' à rocha. Moisés, em sua ira, feriu a rocha novamente, o que foi um erro grave. Cristo foi ferido apenas uma vez; agora, basta falarmos com Ele em oração para recebermos Sua graça.",
      "A água da rocha seguiu o povo pelo deserto. Jesus prometeu que aquele que beber da água que Ele der, nunca mais terá sede, e essa água se tornará nele uma fonte a jorrar para a vida eterna.",
      "A rocha é um símbolo de estabilidade e refúgio. Jesus é a nossa Rocha Inabalável, o fundamento sobre o qual edificamos nossa vida e o abrigo seguro contra as tempestades do juízo."
    ]
  },
  {
    id: 'bronze_serpent',
    title: 'Serpente de Bronze',
    shadow: 'O Olhar que Cura a Morte',
    reality: 'Cristo Levantado na Cruz',
    color: 'border-l-orange-700',
    refs: ['Números 21:4-9', 'João 3:14-15'],
    paragraphs: [
      "A Serpente de Bronze é um tipo paradoxal e poderoso. Quando o povo pecou e foi picado por serpentes venenosas, Deus ordenou que Moisés fizesse uma serpente de bronze e a levantasse em uma haste. Quem olhasse para ela, viveria.",
      "Jesus usou este exato evento para explicar Sua missão a Nicodemos: 'E, como Moisés levantou a serpente no deserto, assim importa que o Filho do homem seja levantado'. A serpente de bronze não tinha veneno, mas tinha a aparência do que causava a morte.",
      "Cristo, embora sem pecado, 'se fez pecado por nós'. Na cruz, Ele assumiu a forma da nossa maldição para nos livrar dela. O bronze na Bíblia simboliza o juízo; a serpente de bronze representa o pecado já julgado.",
      "A cura não vinha de um esforço humano, de remédios ou de orações complexas, mas de um simples olhar de fé. Da mesma forma, a salvação em Cristo é obtida pelo olhar da fé para Aquele que foi levantado em nosso lugar.",
      "A serpente de bronze foi preservada por séculos, mas depois tornou-se objeto de idolatria e teve que ser destruída. Isso nos ensina que o foco deve estar sempre na Realidade (Cristo) e não apenas no símbolo ou no meio de graça."
    ]
  },
  {
    id: 'cities_refuge',
    title: 'Cidades de Refúgio',
    shadow: 'O Abrigo para o Culpado',
    reality: 'Cristo, o Nosso Refúgio Seguro',
    color: 'border-l-indigo-400',
    refs: ['Números 35', 'Josué 20', 'Hebreus 6:18'],
    paragraphs: [
      "As seis Cidades de Refúgio foram estabelecidas para proteger aquele que cometesse um homicídio involuntário do 'vingador do sangue'. Elas prefiguram Cristo como o único lugar onde o pecador culpado pode encontrar segurança contra o juízo divino.",
      "As estradas para as cidades de refúgio deveriam ser mantidas limpas e bem sinalizadas, para que nada impedisse a fuga do necessitado. Jesus é o Caminho acessível a todos, e a mensagem do Evangelho é o sinal claro que aponta para Ele.",
      "As portas das cidades de refúgio nunca se fechavam. Jesus está sempre de braços abertos, afirmando: 'o que vem a mim de maneira nenhuma o lançarei fora'. Não há tempo ou condição que impeça o acesso ao Seu refúgio.",
      "O refugiado deveria permanecer na cidade até a morte do sumo sacerdote da época, após o que estaria livre. Nossa liberdade total e eterna foi garantida pela morte do nosso Grande Sumo Sacerdote, Jesus Cristo.",
      "Diferente das cidades de terra, que protegiam apenas o inocente por acidente, Jesus recebe o pecador deliberado que se arrepende, transformando sua culpa em perdão e sua fuga em habitação segura."
    ]
  },
  {
    id: 'samson_type',
    title: 'Sansão',
    shadow: 'O Libertador Solitário',
    reality: 'Cristo, o Vencedor na Morte',
    color: 'border-l-amber-700',
    refs: ['Juízes 13-16', 'Hebreus 11:32'],
    paragraphs: [
      "Sansão é um tipo de Cristo em sua força sobrenatural e em sua vitória final alcançada através da morte. Seu nascimento foi anunciado por um anjo, assim como o de Jesus, marcando-o como um nazireu de Deus desde o ventre.",
      "Sansão lutou sozinho contra os inimigos de seu povo. Jesus, no Calvário, 'pisou sozinho o lagar', enfrentando o poder das trevas sem o auxílio de ninguém para conquistar a nossa libertação.",
      "A traição de Sansão por alguém que ele amava (Dalila) e sua entrega aos filisteus ecoa a traição de Jesus por Judas e Sua entrega aos gentios. Sansão foi humilhado, cegado e ridicularizado, assim como o Salvador.",
      "O clímax da vida de Sansão foi sua morte. Ao derrubar as colunas do templo de Dagom, ele matou mais inimigos na sua morte do que em toda a sua vida. Jesus, ao morrer na cruz, destruiu aquele que tinha o poder da morte, o diabo.",
      "Embora Sansão fosse um homem falho, sua inclusão na galeria da fé em Hebreus 11 destaca que ele foi um instrumento da força de Deus. Jesus é o Libertador perfeito, sem falhas, cuja força é a nossa salvação eterna."
    ]
  },
  {
    id: 'samuel_type',
    title: 'Samuel',
    shadow: 'O Profeta, Sacerdote e Juiz',
    reality: 'Cristo, o Nosso Ofício Triplo',
    color: 'border-l-slate-600',
    refs: ['1 Samuel 1-3', 'Atos 3:24'],
    paragraphs: [
      "Samuel é um tipo de Cristo por reunir em sua pessoa os ofícios de profeta, sacerdote e juiz. Ele marcou a transição entre o período dos juízes e a monarquia, assim como Jesus marca a transição da Lei para a Graça.",
      "O nascimento de Samuel foi uma resposta direta à oração de uma mulher estéril e sofrida (Ana). Jesus é o cumprimento do anseio de séculos de uma humanidade estéril e sem esperança, o Filho dado em resposta à promessa divina.",
      "Samuel cresceu no templo, servindo diante do Senhor desde a infância. Jesus, aos doze anos, já afirmava que deveria estar 'nos negócios de meu Pai', dedicando Sua vida inteiramente ao serviço divino.",
      "Como profeta, a palavra de Samuel nunca 'caía por terra'. Como sacerdote, ele intercedia constantemente pelo povo e oferecia sacrifícios aceitáveis. Como juiz, ele trazia justiça e ordem a Israel. Jesus exerce esses três ofícios de forma suprema e eterna.",
      "Samuel ungiu os primeiros reis de Israel, Saul e Davi. Jesus é o Ungido (Messias) que não apenas unge outros, mas é o próprio Rei dos Reis, a quem todos os profetas e sacerdotes apontavam."
    ]
  },
  {
    id: 'gideon_type',
    title: 'Gideão',
    shadow: 'O Libertador Improvável',
    reality: 'Cristo, a Vitória da Fraqueza',
    color: 'border-l-yellow-700',
    refs: ['Juízes 6-8', '2 Coríntios 12:9'],
    paragraphs: [
      "Gideão tipifica Cristo na vitória alcançada através da fraqueza e da redução humana. Chamado de 'homem valente' enquanto se escondia, ele mostra que a força de Deus se aperfeiçoa na nossa debilidade.",
      "A redução do exército de Gideão de 32.000 para apenas 300 homens foi um decreto divino para que Israel não se orgulhasse de sua própria força. Jesus venceu o mundo não com exércitos, mas através da fraqueza da cruz.",
      "As armas de Gideão — trombetas, cântaros vazios e tochas — são profundamente simbólicas. O cântaro precisava ser quebrado para que a luz brilhasse. O corpo de Cristo foi 'quebrado' na cruz para que a luz da salvação brilhasse para o mundo.",
      "O som da trombeta de Gideão causou confusão no arraial inimigo. A pregação do Evangelho (a trombeta de Deus) desfaz as obras das trevas e liberta os cativos pelo poder da Palavra.",
      "Gideão recusou ser rei sobre Israel, afirmando que 'o Senhor reinará sobre vós'. Jesus, embora Rei por direito, veio primeiro como servo, apontando sempre para a glória do Pai e o Reino celestial."
    ]
  },
  {
    id: 'ruth_type',
    title: 'Rute',
    shadow: 'A Gentia na Linhagem Real',
    reality: 'A Igreja Gentílica Unida a Cristo',
    color: 'border-l-orange-300',
    refs: ['Rute 1-4', 'Mateus 1:5', 'Efésios 2:11-13'],
    paragraphs: [
      "Rute é um tipo da Igreja gentílica que, embora estrangeira e sem direitos naturais às promessas de Israel, é atraída pela graça e unida ao Redentor. Sua decisão de seguir Noemi e o Deus de Israel prefigura a conversão dos gentios.",
      "Rute foi colher sobras nos campos de Boaz, reconhecendo sua própria pobreza e necessidade. Nós chegamos a Cristo reconhecendo nossa falência espiritual, buscando apenas as 'migalhas' da Sua misericórdia.",
      "A atitude de Rute de se deitar aos pés de Boaz na eira é um gesto de submissão e pedido de proteção (redenção). A Igreja se prostra aos pés de Jesus, buscando o abrigo de Suas asas e Sua redenção legal.",
      "A união de Rute com Boaz transformou sua identidade de 'moabita' para 'mãe em Israel'. Em Cristo, nós que estávamos longe fomos trazidos para perto e feitos membros da família de Deus.",
      "Rute é uma das poucas mulheres mencionadas na genealogia de Jesus em Mateus 1. Isso prova que a graça de Deus sempre incluiu os gentios e que o Messias veio para ser o Salvador de todo o mundo."
    ]
  },
  {
    id: 'holy_incense',
    title: 'Incenso Sagrado',
    shadow: 'A Fragrância da Oração',
    reality: 'A Intercessão Perfeita de Cristo',
    color: 'border-l-yellow-400',
    refs: ['Êxodo 30:34-38', 'Salmos 141:2', 'Apocalipse 8:3-4'],
    paragraphs: [
      "O Incenso Sagrado, queimado continuamente no Altar de Ouro diante do véu, tipifica a intercessão de Cristo por Seu povo. Sua composição era única e exclusiva para Deus, simbolizando a perfeição e a pureza das orações do Messias.",
      "O fogo que queimava o incenso vinha do Altar de Bronze (sacrifício). Isso ensina que a intercessão de Jesus é baseada em Sua obra consumada na cruz. Ele intercede por nós porque primeiro morreu por nós.",
      "A fragrância do incenso preenchia o Tabernáculo, tornando a atmosfera agradável a Deus. As orações de Jesus em nosso favor são um 'cheiro suave' que garante que sejamos aceitos na presença do Pai.",
      "O incenso era queimado 'perpetuamente'. Hebreus 7:25 afirma que Jesus 'vive sempre para interceder' por nós. Não há um momento sequer em que não estejamos sendo sustentados por Suas orações celestiais.",
      "Assim como o incenso subia em direção ao céu, as orações de Cristo elevam nossas próprias petições e adoração, tornando-as aceitáveis através da Sua mediação perfeita."
    ]
  },
  {
    id: 'anointing_oil',
    title: 'Azeite da Unção',
    shadow: 'O Selo da Consagração',
    reality: 'O Espírito Santo sobre o Messias',
    color: 'border-l-amber-500',
    refs: ['Êxodo 30:22-33', 'Isaías 61:1', 'Atos 10:38'],
    paragraphs: [
      "O Azeite da Santa Unção era usado para consagrar o Tabernáculo, seus utensílios e os sacerdotes. Ele tipifica a pessoa e a obra do Espírito Santo, que unge e capacita Cristo para Sua missão redentora.",
      "O título 'Cristo' ou 'Messias' significa literalmente 'O Ungido'. Jesus foi ungido com o Espírito Santo e com poder para curar, libertar e pregar as boas novas, cumprindo a tipologia do azeite sagrado.",
      "A composição do azeite incluía especiarias preciosas (mirra, cinamomo, cálamo e cássia), representando as diversas virtudes e frutos do Espírito manifestos na vida de Jesus.",
      "O azeite não deveria ser derramado sobre 'carne de estranho', indicando que o Espírito Santo é concedido apenas àqueles que pertencem à família de Deus através da união com Cristo.",
      "A unção que estava sobre Jesus, a Cabeça, flui agora para a Igreja, Seu Corpo. Nós recebemos a 'unção do Santo' para conhecermos a verdade e vivermos para Sua glória."
    ]
  },
  {
    id: 'shewbread',
    title: 'Pães da Proposição',
    shadow: 'O Pão da Presença',
    reality: 'Cristo, o Sustento da Comunhão',
    color: 'border-l-orange-200',
    refs: ['Levítico 24:5-9', 'João 6:35', '1 Coríntios 10:16-17'],
    paragraphs: [
      "Os doze Pães da Proposição (ou Pães da Presença) eram colocados semanalmente sobre a Mesa de Ouro no Lugar Santo. Eles representam Cristo como o sustento espiritual e o centro da comunhão entre Deus e Seu povo.",
      "Havia doze pães, um para cada tribo de Israel, indicando que Cristo é suficiente para todo o Seu povo. Ninguém é excluído da mesa da Sua provisão e comunhão.",
      "Os pães eram feitos de flor de farinha e cobertos com incenso puro, simbolizando a humanidade perfeita e a vida sem pecado de Jesus, que é totalmente agradável ao Pai.",
      "Somente os sacerdotes podiam comer os pães, e deveriam fazê-lo no Lugar Santo. Como 'reino de sacerdotes', nós nos alimentamos de Cristo através da Palavra e da oração, em um ambiente de santidade e presença divina.",
      "A mesa dos pães aponta para a Ceia do Senhor, onde celebramos nossa união com Cristo e uns com os outros como um só corpo, nutridos pelo mesmo Pão Vivo."
    ]
  },
  {
    id: 'golden_lampstand',
    title: 'Candelabro de Ouro',
    shadow: 'A Luz no Lugar Santo',
    reality: 'Cristo, a Luz do Mundo',
    color: 'border-l-yellow-300',
    refs: ['Êxodo 25:31-40', 'João 8:12', 'Apocalipse 1:12-20'],
    paragraphs: [
      "O Candelabro de Ouro (Menorah) era a única fonte de luz no interior do Tabernáculo. Ele tipifica Cristo como a verdadeira Luz que ilumina todo homem e revela as coisas espirituais de Deus.",
      "O candelabro era feito de uma só peça de ouro batido, representando a unidade e a divindade de Cristo. Suas decorações em forma de amêndoas falam de vida ressurreta e vigilância espiritual.",
      "As sete lâmpadas simbolizam a plenitude e a perfeição da iluminação do Espírito Santo em Cristo. Sem a luz do candelabro, os sacerdotes não poderiam ver para servir; sem Cristo, estamos em trevas espirituais totais.",
      "O candelabro deveria ser mantido aceso continuamente. Jesus é a luz inextinguível que brilha nas trevas, e as trevas não prevaleceram contra ela.",
      "Em Apocalipse, Jesus é visto caminhando entre os sete candeeiros de ouro, que representam as igrejas. Ele é a fonte da nossa luz e Aquele que nos capacita a brilhar como luminares no mundo."
    ]
  },
  {
    id: 'brazen_altar',
    title: 'Altar de Bronze',
    shadow: 'O Lugar do Sacrifício',
    reality: 'A Cruz de Cristo',
    color: 'border-l-orange-800',
    refs: ['Êxodo 27:1-8', 'Hebreus 13:10-12'],
    paragraphs: [
      "O Altar de Bronze, situado no pátio externo, era o primeiro objeto encontrado ao entrar no Tabernáculo. Ele tipifica a Cruz de Cristo como o lugar necessário de sacrifício e expiação pelo pecado.",
      "O bronze simboliza o juízo divino sobre o pecado. No altar, o fogo ardia continuamente, consumindo as ofertas substitutivas. Jesus suportou o fogo do juízo de Deus na cruz para que não fôssemos consumidos.",
      "Ninguém poderia se aproximar de Deus sem passar pelo altar. Da mesma forma, não há acesso ao Pai senão através do sacrifício de Jesus. A cruz é a porta de entrada para a vida espiritual.",
      "Os chifres do altar eram lugares de refúgio e poder. O sacrifício de Cristo é a nossa força e a nossa segurança contra a condenação.",
      "O sangue derramado na base do altar purificava o adorador. O sangue de Jesus, derramado no Calvário, nos purifica de todo pecado e nos habilita a servir ao Deus vivo."
    ]
  },
  {
    id: 'brazen_laver',
    title: 'Pia de Bronze',
    shadow: 'A Lavagem da Purificação',
    reality: 'Cristo, a Purificação pela Palavra',
    color: 'border-l-blue-300',
    refs: ['Êxodo 30:17-21', 'Efésios 5:26', 'Tito 3:5'],
    paragraphs: [
      "A Pia de Bronze ficava entre o Altar e o Tabernáculo. Nela, os sacerdotes lavavam as mãos e os pés antes de servir. Ela tipifica a purificação contínua que recebemos através de Cristo e Sua Palavra.",
      "A pia era feita dos espelhos das mulheres, indicando que a Palavra de Deus funciona como um espelho que nos mostra nossas manchas e a necessidade de limpeza espiritual.",
      "Diferente do Altar (que fala de regeneração única), a Pia fala de santificação diária. Jesus afirmou: 'Aquele que já se banhou não necessita de lavar senão os pés'. Precisamos do lavar diário da Palavra.",
      "A água na pia representa o Espírito Santo e a Palavra agindo juntos para nos purificar. Jesus santifica Sua Igreja pelo 'lavar da água, pela palavra'.",
      "Sem a lavagem na pia, os sacerdotes morriam ao entrar no santuário. A santidade é essencial para a comunhão com Deus, e Cristo é Aquele que nos torna santos e irrepreensíveis diante d'Ele."
    ]
  },
  {
    id: 'ark_covenant',
    title: 'Arca da Aliança',
    shadow: 'O Trono da Presença Divina',
    reality: 'Cristo, a Plenitude de Deus',
    color: 'border-l-yellow-600',
    refs: ['Êxodo 25:10-22', 'Hebreus 9:4-5', 'Romanos 3:25'],
    paragraphs: [
      "A Arca da Aliança era o objeto mais sagrado do Tabernáculo, guardada no Lugar Santíssimo. Ela tipifica a pessoa de Jesus Cristo em Sua divindade, humanidade e papel como nosso Propiciatório.",
      "A arca era feita de madeira de acácia (humanidade incorruptível de Jesus) revestida de ouro puro (Sua divindade absoluta). Ela continha a Lei, o Maná e a Vara de Arão, todos cumpridos perfeitamente em Cristo.",
      "A tampa da arca era o Propiciatório (Kapporet), onde o sangue era aspergido no Dia da Expiação. Jesus é o nosso Propiciatório, o lugar onde a justiça de Deus e Sua misericórdia se encontram através do Seu sangue.",
      "Sobre a arca estavam os Querubins de glória, olhando para o sangue. Os anjos desejam observar o mistério da redenção operada por Cristo em favor dos homens.",
      "A Arca guiava Israel no deserto e abria caminho no Jordão. Jesus é Aquele que nos guia em nossa jornada terrena e nos conduz com segurança através da morte para a Canaã celestial."
    ]
  },
  {
    id: 'tabernacle_veil',
    title: 'O Véu do Tabernáculo',
    shadow: 'A Barreira entre o Santo e o Profano',
    reality: 'A Carne de Cristo Rasgada por Nós',
    color: 'border-l-purple-600',
    refs: ['Êxodo 26:31-33', 'Mateus 27:51', 'Hebreus 10:19-20'],
    paragraphs: [
      "O Véu que separava o Lugar Santo do Lugar Santíssimo era uma tapeçaria magnífica de azul, púrpura, carmesim e linho fino, com querubins bordados. Ele tipifica a humanidade perfeita de Jesus Cristo, que ocultava Sua glória divina.",
      "O véu servia como uma barreira que impedia o acesso direto à presença de Deus devido ao pecado. Hebreus 10:20 identifica explicitamente o véu como a 'carne de Cristo'. Para que o caminho fosse aberto, o véu precisava ser rasgado.",
      "No momento da morte de Jesus, o véu do Templo rasgou-se de alto a baixo por mão divina. Isso simboliza que, através da morte de Sua carne, o acesso ao Pai foi plenamente liberado para todos os crentes.",
      "As cores do véu são simbólicas: o azul fala de Sua origem celestial; a púrpura de Sua realeza; o carmesim de Seu sacrifício; e o linho branco de Sua justiça imaculada.",
      "Hoje, entramos com ousadia no santuário pelo novo e vivo caminho que Ele nos consagrou pelo véu, isto é, pela Sua carne. Não há mais barreira entre o redimido e o seu Deus."
    ]
  },
  {
    id: 'priestly_garments',
    title: 'Vestes Sacerdotais',
    shadow: 'A Glória e o Ornamento do Mediador',
    reality: 'A Justiça e Perfeição de Cristo',
    color: 'border-l-blue-200',
    refs: ['Êxodo 28', 'Isaías 61:10', 'Apocalipse 19:8'],
    paragraphs: [
      "As vestes do Sumo Sacerdote foram desenhadas por Deus para 'glória e ornamento'. Elas tipificam a beleza moral, a justiça e a autoridade de Jesus Cristo em Seu papel como nosso Mediador.",
      "O Éfode de ouro e cores preciosas representa a dignidade real e divina de Jesus. O Peitoral do Juízo, com as doze pedras, mostra que Ele leva Seu povo sobre o coração, amando-os individualmente.",
      "A Mitra com a lâmina de ouro gravada 'Santidade ao Senhor' indica que Jesus é o nosso representante perfeitamente santo diante de Deus, cobrindo nossas imperfeições com Sua santidade.",
      "As romãs e campainhas na orla do manto falam do fruto e do testemunho do Espírito na vida de Cristo. O som das campainhas anunciava que o sacerdote estava vivo e servindo; a ressurreição de Jesus é o som da nossa vitória.",
      "Cristo nos reveste com Suas 'vestes de salvação' e o 'manto de justiça'. Como sacerdotes reais, somos cobertos pela Sua beleza e aceitos na presença do Rei."
    ]
  },
  {
    id: 'scapegoat_type',
    title: 'Bode Expiatório',
    shadow: 'O Carregador de Pecados no Deserto',
    reality: 'Cristo, que Leva Nossos Pecados para Longe',
    color: 'border-l-slate-400',
    refs: ['Levítico 16', 'Isaías 53:4-6', 'João 1:29'],
    paragraphs: [
      "No Dia da Expiação (Yom Kippur), dois bodes eram usados. O primeiro era sacrificado pelo pecado, mas o segundo, o 'bode emissário' (Azazel), tinha os pecados do povo confessados sobre sua cabeça e era levado para o deserto.",
      "Este ritual tipifica dois aspectos da obra de Cristo: Sua morte para satisfazer a justiça de Deus e Sua capacidade de levar nossos pecados para longe, para nunca mais serem lembrados.",
      "O bode levado ao deserto representa o esquecimento divino. 'Quanto está longe o oriente do ocidente, tanto afasta de nós as nossas transgressões'. Jesus removeu a nossa culpa totalmente.",
      "Jesus foi levado para fora da cidade de Jerusalém, para o Calvário, cumprindo a tipologia do bode que era levado para um lugar solitário. Ele sofreu o isolamento e o abandono para que nunca fôssemos abandonados por Deus.",
      "Ao olhar para Cristo, vemos Aquele que 'levou sobre si as nossas enfermidades e as nossas dores carregou'. Ele é o Cordeiro que morre e o Bode que remove a mancha do pecado."
    ]
  },
  {
    id: 'red_heifer',
    title: 'Novilha Ruiva',
    shadow: 'As Cinzas da Purificação',
    reality: 'O Sangue de Cristo que Purifica a Consciência',
    color: 'border-l-red-800',
    refs: ['Números 19', 'Hebreus 9:13-14'],
    paragraphs: [
      "A Novilha Ruiva era um sacrifício único cujas cinzas eram misturadas com água para purificar aqueles que tivessem tido contato com a morte. Ela tipifica a eficácia contínua do sacrifício de Cristo para limpar nossa consciência.",
      "A novilha deveria ser inteiramente ruiva, sem defeito e que nunca tivesse levado jugo. Isso aponta para a pureza de Cristo e Sua total liberdade da escravidão do pecado ou da lei humana.",
      "Ela era queimada fora do arraial, assim como Jesus sofreu fora das portas de Jerusalém. Suas cinzas eram guardadas como um suprimento perpétuo de purificação, indicando que o valor do sacrifício de Jesus nunca se esgota.",
      "Hebreus argumenta que, se as cinzas de uma novilha purificavam a carne, quanto mais o sangue de Cristo purificará nossa consciência das obras mortas para servirmos ao Deus vivo.",
      "A água da separação (misturada com as cinzas) é uma imagem do Espírito Santo aplicando a obra consumada de Cristo ao nosso coração, mantendo-nos limpos para a comunhão diária."
    ]
  },
  {
    id: 'water_springs',
    title: 'Manancial de Águas',
    shadow: 'A Vida no Deserto',
    reality: 'Cristo, a Fonte de Água Viva',
    color: 'border-l-blue-500',
    refs: ['Salmos 36:9', 'Jeremias 2:13', 'João 4:10-14', 'João 7:37-39'],
    paragraphs: [
      "Deus é frequentemente chamado de 'Manancial de Águas Vivas' no Antigo Testamento. Jesus reivindica essa tipologia para Si mesmo ao oferecer 'água viva' à mulher samaritana e ao convidar os sedentos a virem a Ele no último dia da festa.",
      "Um manancial é uma fonte inesgotável que brota da terra. Jesus é a fonte da vida espiritual que não depende de circunstâncias externas. N'Ele, temos um suprimento constante de graça e renovo.",
      "A água viva limpa, sacia a sede e produz vida onde há deserto. Onde quer que o rio de Deus (Cristo) chegue, tudo viverá. Ele transforma o deserto da alma em um jardim regado.",
      "A rejeição do manancial por cisternas rotas (ídolos) é o grande pecado de Israel. Jesus nos convida a abandonar as fontes secas do mundo e bebermos da plenitude da Sua presença.",
      "No Apocalipse, o Cordeiro nos guia para as 'fontes das águas da vida'. Cristo é o Manancial eterno que satisfará nossa sede de Deus por toda a eternidade."
    ]
  },
  {
    id: 'solomon_temple',
    title: 'Templo de Salomão',
    shadow: 'A Casa da Glória Permanente',
    reality: 'Cristo e a Igreja Glorificada',
    color: 'border-l-amber-600',
    refs: ['1 Reis 6-8', 'João 2:19-21', 'Apocalipse 21:22'],
    paragraphs: [
      "O Templo de Salomão, em sua magnificência e esplendor, tipifica Cristo como a habitação definitiva da glória de Deus e a Igreja como Seu corpo glorificado. Diferente do Tabernáculo móvel, o Templo era uma estrutura fixa e majestosa.",
      "Jesus identificou Seu próprio corpo como o verdadeiro Templo: 'Destruí este templo, e em três dias o levantarei'. Ele é o lugar onde Deus e o homem se encontram perfeitamente e para sempre.",
      "As pedras do templo foram preparadas na pedreira para que não se ouvisse som de martelo no local da construção. Isso prefigura como Deus está preparando 'pedras vivas' (nós) no mundo para serem ajustadas perfeitamente no Seu templo espiritual eterno.",
      "A glória de Deus (Shekinah) encheu o templo de tal forma que os sacerdotes não podiam ministrar. Em Cristo, habita corporalmente toda a plenitude da divindade, e Sua glória brilha através da Sua Igreja.",
      "Na Nova Jerusalém, não haverá templo físico, pois 'o seu templo é o Senhor Deus Todo-Poderoso, e o Cordeiro'. Cristo é a habitação eterna e a glória central de todo o universo redimido."
    ]
  },
  {
    id: 'jerusalem_city',
    title: 'Cidade de Jerusalém',
    shadow: 'A Cidade do Grande Rei',
    reality: 'A Noiva de Cristo, a Nova Jerusalém',
    color: 'border-l-slate-400',
    refs: ['Salmos 48', 'Gálatas 4:26', 'Hebreus 12:22', 'Apocalipse 21'],
    paragraphs: [
      "Jerusalém (Sião) é tipificada como a cidade escolhida por Deus para Sua habitação e o trono de Seu Rei. Ela prefigura a Igreja em sua segurança, beleza e destino final como a Nova Jerusalém.",
      "Jerusalém era cercada por montes, simbolizando a proteção divina. 'Como estão os montes à roda de Jerusalém, assim o Senhor está em volta do seu povo'. Jesus é a nossa muralha de fogo e nossa segurança inabalável.",
      "A cidade era o lugar das festas e da alegria de todo o povo. A Igreja em Cristo é o lugar da verdadeira alegria espiritual, onde celebramos a vitória do nosso Rei e a comunhão dos santos.",
      "A Jerusalém terrena foi palco da rejeição e morte de Jesus, mas a 'Jerusalém lá de cima é livre'. Cristo está preparando para nós uma cidade que tem fundamentos, da qual Deus é o arquiteto e edificador.",
      "A Nova Jerusalém desce do céu como uma noiva adornada para o seu marido. A tipologia da cidade culmina na união eterna e gloriosa de Cristo com Sua Igreja, onde Ele reinará para todo o sempre em justiça e paz."
    ]
  }
];

// Funil Único
import { addTextToStudio } from '../core/studioFunnel';

const TypologyTab: React.FC<{ userState: UserState, setUserState: any, captureTarget?: CaptureTarget | null }> = ({ userState, setUserState, captureTarget }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleInject = (entry: TypologyEntry) => {
    addTextToStudio(`[TIPOLOGIA - ${entry.title}]\nSOMBRA: ${entry.shadow}\nREALIDADE: ${entry.reality}\n\n${entry.paragraphs.join('\n\n')}`);
  };

  const sendToStudio = async (entry: TypologyEntry) => {
    const sermons = await getSermons();
    let target = sermons.find(s => s.status === 'draft') || (sermons.length > 0 ? sermons[0] : null);
    
    if (!target) {
      target = {
        id: `sermon_${Date.now()}`,
        title: `Estudo: ${entry.title}`,
        type: 'expository',
        date: new Date().toISOString(),
        tags: ['Tipologia'],
        blocks: [],
        status: 'draft',
        version: 1,
        folder: 'Estudos de Tipologia'
      };
    }

    const newBlock: SermonBlock = {
      id: `type_${Date.now()}`,
      type: 'point',
      title: `Tipologia Completa: ${entry.title}`,
      content: `SOMBRA: ${entry.shadow}\nREALIDADE: ${entry.reality}\n\n${entry.paragraphs.join('\n\n')}`
    };

    await saveSermon({ ...target, blocks: [...target.blocks, newBlock] });
    alert(`Enviado para o Estúdio: ${target.title}`);
  };

  return (
    <div className="space-y-10 animate-in fade-in pb-40">
      <div className="bg-slate-900 p-10 md:p-14 rounded-[50px] md:rounded-[70px] text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/40 via-transparent to-amber-500/10 pointer-events-none"></div>
        <div className="relative z-10 w-20 h-20 bg-white/10 rounded-[28px] flex items-center justify-center text-amber-400 shadow-2xl border border-white/10 backdrop-blur-md">
           {ICON_TYPOLOGY('w-10 h-10')}
        </div>
        <div className="relative z-10 flex-1 text-center md:text-left">
          <span className="text-amber-400 font-black uppercase tracking-[0.5em] text-[9px] mb-2 block">Tipologia Dabar • 42 Sombras Reais</span>
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-1 leading-tight">Tipos e Sombras de Cristo</h2>
          <p className="text-slate-400 font-black uppercase text-[10px] tracking-widest italic">A Revelação de Jesus no Antigo Testamento</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {TYPOLOGY_DATA.map((entry) => (
          <div 
            key={entry.id}
            className={`bg-white dark:bg-slate-800 rounded-[50px] border border-slate-100 dark:border-slate-700 shadow-sm transition-all overflow-hidden border-l-[12px] ${entry.color} ${selectedId === entry.id ? 'ring-2 ring-indigo-500/20 shadow-xl' : 'hover:shadow-md'}`}
          >
            <button 
              onClick={() => setSelectedId(selectedId === entry.id ? null : entry.id)}
              className="w-full p-8 md:p-12 text-left flex justify-between items-center group"
            >
              <div className="flex-1">
                 <div className="flex items-center gap-4 mb-3">
                   <h3 className="text-2xl md:text-4xl font-black text-slate-800 dark:text-white uppercase italic tracking-tighter leading-none">{entry.title}</h3>
                 </div>
              </div>
              <div className={`p-4 rounded-full transition-transform ${selectedId === entry.id ? 'rotate-180 bg-slate-100 dark:bg-slate-700' : 'bg-slate-50 dark:bg-slate-900 group-hover:scale-110'}`}>
                <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </button>

            {selectedId === entry.id && (
              <div className="px-8 md:px-12 pb-12 space-y-10 animate-in slide-in-from-top-4">
                 <div className="space-y-8 max-w-4xl">
                    {entry.paragraphs.map((p, i) => (
                      <p key={i} className="bible-text text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-200 text-justify">
                        {p}
                      </p>
                    ))}
                 </div>
                 <div className="pt-10 border-t border-slate-50 dark:border-slate-700 flex flex-wrap gap-4">
                    {captureTarget && (
                      <button 
                        onClick={() => handleInject(entry)}
                        className="bg-amber-500 text-slate-950 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl flex items-center gap-3"
                      >🎯 Injetar no Alvo</button>
                    )}
                    <button 
                      onClick={() => sendToStudio(entry)}
                      className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl hover:bg-indigo-700 transition-all flex items-center gap-3"
                    >
                      {ICON_SERMON('w-5 h-5')} Capturar Todo Conteúdo
                    </button>
                 </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypologyTab;
