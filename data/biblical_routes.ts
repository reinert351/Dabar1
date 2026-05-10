import { MapRoute } from '../types';

export const BIBLICAL_ROUTES: MapRoute[] = [
  {
    id: 'paulo-1-viagem',
    title: '1ª Viagem Missionária de Paulo',
    character: 'Paulo e Barnabé',
    historicalContext: 'A primeira grande expansão do evangelho para o mundo gentio, partindo de Antioquia da Síria.',
    distanceKm: 2200,
    points: [
      { order: 1, name: 'Antioquia da Síria', lat: 36.2023, lng: 36.1604, description: 'Ponto de partida da missão enviada pelo Espírito Santo.', verses: ['Atos 13:1-3'], imageUrl: 'https://images.unsplash.com/photo-1548543604-a87c9909abec?q=80&w=1200' },
      { order: 2, name: 'Selêucia', lat: 36.1264, lng: 35.9144, description: 'Porto de embarque para Chipre.', verses: ['Atos 13:4'] },
      { order: 3, name: 'Salamina (Chipre)', lat: 35.1856, lng: 33.9022, description: 'Pregação nas sinagogas dos judeus.', verses: ['Atos 13:5'] },
      { order: 4, name: 'Pafos (Chipre)', lat: 34.7720, lng: 32.4231, description: 'Encontro com o proconsul Sérgio Paulo e o mágico Elimas.', verses: ['Atos 13:6-12'] },
      { order: 5, name: 'Perge (Panfília)', lat: 36.9531, lng: 30.8525, description: 'João Marcos deixa o grupo e volta para Jerusalém.', verses: ['Atos 13:13'] },
      { order: 6, name: 'Antioquia da Pisídia', lat: 38.3039, lng: 31.1853, description: 'Grande sermão de Paulo na sinagoga.', verses: ['Atos 13:14-52'] },
      { order: 7, name: 'Icônio', lat: 37.8749, lng: 32.4933, description: 'Muitos creram, mas houve forte oposição.', verses: ['Atos 14:1-7'] },
      { order: 8, name: 'Listra', lat: 37.5256, lng: 32.4089, description: 'Cura de um coxo; Paulo é apedrejado e dado como morto.', verses: ['Atos 14:8-20'] },
      { order: 9, name: 'Derbe', lat: 37.3486, lng: 33.2500, description: 'Pregação do evangelho e muitos discípulos feitos.', verses: ['Atos 14:21'] }
    ]
  },
  {
    id: 'paulo-2-viagem',
    title: '2ª Viagem Missionária de Paulo',
    character: 'Paulo e Silas',
    historicalContext: 'A chegada do evangelho à Europa e a fundação de igrejas centrais como Filipos, Tessalônica e Corinto.',
    distanceKm: 4500,
    points: [
      { order: 1, name: 'Antioquia da Síria', lat: 36.2023, lng: 36.1604, description: 'Início da segunda viagem missionária.', verses: ['Atos 15:36-40'], imageUrl: 'https://images.unsplash.com/photo-1548543604-a87c9909abec?q=80&w=1200' },
      { order: 2, name: 'Listra', lat: 37.5256, lng: 32.4089, description: 'Paulo encontra Timóteo, que se junta à viagem.', verses: ['Atos 16:1-3'] },
      { order: 3, name: 'Trôade', lat: 39.7525, lng: 26.1605, description: 'Paulo tem a visão do varão macedônio chamando-os para a Europa.', verses: ['Atos 16:8-10'], imageUrl: 'https://images.unsplash.com/photo-1599427303058-f06cbdf4bb20?q=80&w=1200' },
      { order: 4, name: 'Filipos', lat: 41.0122, lng: 24.2858, description: 'Conversão de Lídia e o carcereiro; Paulo e Silas são presos.', verses: ['Atos 16:11-40'], imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200' },
      { order: 5, name: 'Tessalônica', lat: 40.6401, lng: 22.9444, description: 'Pregação na sinagoga e perseguição gerando o tumulto.', verses: ['Atos 17:1-9'] },
      { order: 6, name: 'Beria', lat: 40.5234, lng: 22.1989, description: 'Os judeus bereanos recebem a palavra e examinam as Escrituras.', verses: ['Atos 17:10-15'] },
      { order: 7, name: 'Atenas', lat: 37.9838, lng: 23.7275, description: 'Discurso de Paulo no Areópago sobre o "Deus desconhecido".', verses: ['Atos 17:16-34'], imageUrl: 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?q=80&w=1200' },
      { order: 8, name: 'Corinto', lat: 37.9060, lng: 22.8790, description: 'Paulo trabalha com Áquila e Priscila; fundação da igreja.', verses: ['Atos 18:1-18'], imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200' },
      { order: 9, name: 'Éfeso', lat: 37.9496, lng: 27.3400, description: 'Breve visita de Paulo no caminho de volta.', verses: ['Atos 18:19-21'], imageUrl: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=1200' },
      { order: 10, name: 'Cesareia', lat: 32.5015, lng: 34.8925, description: 'Desembarque antes de subir a Jerusalém e concluir a viagem.', verses: ['Atos 18:22'] }
    ]
  },
  {
    id: 'paulo-3-viagem',
    title: '3ª Viagem Missionária de Paulo',
    character: 'Paulo',
    historicalContext: 'Foco na província da Ásia, especialmente em Éfeso, reforçando a as igrejas estabelecidas.',
    distanceKm: 4000,
    points: [
      { order: 1, name: 'Antioquia da Síria', lat: 36.2023, lng: 36.1604, description: 'Partida para fortalecer os discípulos na Galácia e Frígia.', verses: ['Atos 18:23'], imageUrl: 'https://images.unsplash.com/photo-1548543604-a87c9909abec?q=80&w=1200' },
      { order: 2, name: 'Éfeso', lat: 37.9496, lng: 27.3400, description: 'Três anos de ministério com grande impacto e tumulto.', verses: ['Atos 19:1-41'], imageUrl: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=1200' },
      { order: 3, name: 'Macedônia / Filipos', lat: 41.0122, lng: 24.2858, description: 'Visita para encorajar as igrejas macedônias.', verses: ['Atos 20:1-2'] },
      { order: 4, name: 'Corinto (Grécia)', lat: 37.9060, lng: 22.8790, description: 'Três meses na Grécia antes de voltar pela Macedônia.', verses: ['Atos 20:2-3'] },
      { order: 5, name: 'Trôade', lat: 39.7525, lng: 26.1605, description: 'Êutico cai da janela e é milagrosamente ressuscitado.', verses: ['Atos 20:6-12'], imageUrl: 'https://images.unsplash.com/photo-1599427303058-f06cbdf4bb20?q=80&w=1200' },
      { order: 6, name: 'Mileto', lat: 37.5302, lng: 27.2764, description: 'Despedida emocionante dos presbíteros de Éfeso.', verses: ['Atos 20:15-38'] },
      { order: 7, name: 'Tiro', lat: 33.2705, lng: 35.1963, description: 'Paulo é avisado pelos irmãos para não ir a Jerusalém.', verses: ['Atos 21:3-6'] },
      { order: 8, name: 'Cesareia', lat: 32.5015, lng: 34.8925, description: 'Hospeda-se na casa de Filipe; o profeta Ágabo faz sua previsão.', verses: ['Atos 21:8-14'] },
      { order: 9, name: 'Jerusalém', lat: 31.7683, lng: 35.2137, description: 'Fim da viagem, culminando com a prisão de Paulo.', verses: ['Atos 21:15-17'] }
    ]
  },
  {
    id: 'paulo-viagem-roma',
    title: 'A Viagem de Paulo a Roma',
    character: 'Paulo (como prisioneiro)',
    historicalContext: 'A viagem final, cheia de tempestades e perigos, para apelar a César.',
    distanceKm: 3400,
    points: [
      { order: 1, name: 'Cesareia', lat: 32.5015, lng: 34.8925, description: 'Após estar preso por dois anos, Paulo embarca para Roma.', verses: ['Atos 27:1-2'] },
      { order: 2, name: 'Sidom', lat: 33.5606, lng: 35.3725, description: 'Parada onde Paulo pode visitar seus amigos.', verses: ['Atos 27:3'] },
      { order: 3, name: 'Mirra (Lícia)', lat: 36.2464, lng: 29.9822, description: 'O centurião encontra um navio de Alexandria.', verses: ['Atos 27:5-6'] },
      { order: 4, name: 'Bons Portos (Creta)', lat: 34.9317, lng: 24.8183, description: 'Aviso ignorado por Paulo sobre o perigo de continuar a navegação.', verses: ['Atos 27:8-12'] },
      { order: 5, name: 'Malta', lat: 35.8989, lng: 14.5146, description: 'Naufrágio durante a tempestade Euroaquilão; Paulo sobrevive à mordida de uma cobra.', verses: ['Atos 28:1-10'] },
      { order: 6, name: 'Siracusa', lat: 37.0755, lng: 15.2866, description: 'Os viajantes passam três dias nesta cidade portuária da Sicília.', verses: ['Atos 28:12'] },
      { order: 7, name: 'Roma', lat: 41.9028, lng: 12.4964, description: 'Desembarque e vida em prisão domiciliar, onde escreve cartas.', verses: ['Atos 28:16-31'] }
    ]
  },
  {
    id: 'abraao-jornada',
    era: 'patriarchs',
    title: 'A Jornada de Abraão',
    character: 'Abraão',
    historicalContext: 'A peregrinação do patriarca Abraão desde Ur dos Caldeus até Canaã, marcando o início da aliança de Deus com Israel.',
    distanceKm: 2500,
    points: [
      { order: 1, name: 'Ur dos Caldeus', lat: 30.9622, lng: 46.1044, description: 'Terra natal de Abrão. Início de sua jornada com seu pai Terá e sua família.', verses: ['Gênesis 11:31'] },
      { order: 2, name: 'Harã', lat: 36.8622, lng: 39.0436, description: 'Onde Terá morre e Abrão recebe o chamado divino para ir à terra prometida aos 75 anos.', verses: ['Gênesis 12:1-4'] },
      { order: 3, name: 'Siquém', lat: 32.2133, lng: 35.2711, description: 'Primeira parada em Canaã. Deus aparece a Abrão e promete a terra à sua descendência. Ele constrói um altar.', verses: ['Gênesis 12:6-7'] },
      { order: 4, name: 'Betel e Ai', lat: 31.9333, lng: 35.2167, description: 'Abrão ergue um acampamento entre Betel e Ai e constrói outro altar ao Senhor.', verses: ['Gênesis 12:8'] },
      { order: 5, name: 'Egito', lat: 29.8489, lng: 31.2536, description: 'Devido à fome em Canaã, Abrão desce ao Egito, onde Sarai é levada ao palácio do Faraó.', verses: ['Gênesis 12:10-20'] },
      { order: 6, name: 'Neguebe e Betel', lat: 31.9333, lng: 35.2167, description: 'Retorno do Egito muito rico; Ló se separa de Abrão e vai para as planícies do Jordão.', verses: ['Gênesis 13:1-12'] },
      { order: 7, name: 'Hebrom (Carvalhais de Manre)', lat: 31.5298, lng: 35.0917, description: 'Abrão se estabelece perto de Hebrom. Ele abriga os 3 anjos e Deus reafirma a promessa de um filho.', verses: ['Gênesis 13:18', 'Gênesis 18:1'] },
      { order: 8, name: 'Berseba', lat: 31.2444, lng: 34.7958, description: 'Tratado com Abimeleque. Plantou uma tamargueira e invocou o nome do Senhor Eterno.', verses: ['Gênesis 21:31-33'] },
      { order: 9, name: 'Monte Moriá (Jerusalém)', lat: 31.7770, lng: 35.2354, description: 'O sacrifício de Isaque, a maior prova de fé de Abraão (o lugar que Deus proverá).', verses: ['Gênesis 22:2-14'] },
      { order: 10, name: 'Hebrom (Caverna de Macpela)', lat: 31.5298, lng: 35.0917, description: 'Morte e sepultamento de Sara, e mais tarde de Abraão.', verses: ['Gênesis 23:19', 'Gênesis 25:9'] }
    ]
  },
  {
    id: 'exodo-egito',
    era: 'exodus',
    title: 'A Rota do Êxodo (Tradicional)',
    character: 'Moisés e o Povo de Israel',
    historicalContext: 'A libertação do povo de Israel da escravidão no Egito rumo à Terra Prometida.',
    distanceKm: 800,
    points: [
      { order: 1, name: 'Ramessés', lat: 30.7933, lng: 31.8356, description: 'Ponto de partida da saída do Egito.', verses: ['Êxodo 12:37'], elevation: 10 },
      { order: 2, name: 'Sucote', lat: 30.5500, lng: 32.1000, description: 'Primeiro acampamento após sair de Ramessés.', verses: ['Êxodo 13:20'], elevation: 5 },
      { order: 3, name: 'Pi-Hairote (Mar Vermelho)', lat: 29.8000, lng: 32.5000, description: 'Abertura do Mar Vermelho e destruição do exército egípcio.', verses: ['Êxodo 14:2'], elevation: 0 },
      { order: 4, name: 'Mara', lat: 29.2833, lng: 32.8833, description: 'As águas amargas tornam-se doces.', verses: ['Êxodo 15:23'], elevation: 20 },
      { order: 5, name: 'Elim', lat: 29.1167, lng: 33.0167, description: 'Local com doze fontes de água e setenta palmeiras.', verses: ['Êxodo 15:27'], elevation: 50 },
      { order: 6, name: 'Refidim', lat: 28.7000, lng: 33.6000, description: 'Água da rocha e batalha contra os Amalequitas.', verses: ['Êxodo 17:1'], elevation: 800 },
      { order: 7, name: 'Monte Sinai', lat: 28.5392, lng: 33.9750, description: 'Entrega dos Dez Mandamentos.', verses: ['Êxodo 19:1'], imageUrl: 'https://images.unsplash.com/photo-1544955378-01968800ba86?q=80&w=1200', elevation: 2285 },
      { order: 8, name: 'Cades-Barneia', lat: 30.6500, lng: 34.4167, description: 'Envio dos doze espias; rebelião do povo.', verses: ['Números 13:26'], elevation: 300 },
      { order: 9, name: 'Monte Nebo', lat: 31.7650, lng: 35.7258, description: 'Moisés vê a Terra Prometida antes de morrer.', verses: ['Deuteronômio 34:1'], imageUrl: 'https://images.unsplash.com/photo-1574944490159-f703db5d5641?q=80&w=1200', elevation: 817 }
    ]
  },
  {
    id: 'jesus-galileia',
    title: 'Ministério na Galileia',
    character: 'Jesus Cristo',
    historicalContext: 'O período central do ministério de Jesus, onde a maioria dos milagres e ensinos ocorreu.',
    distanceKm: 150,
    points: [
      { order: 1, name: 'Nazaré', lat: 32.7019, lng: 35.3033, description: 'Cidade onde Jesus cresceu e foi rejeitado na sinagoga.', verses: ['Lucas 4:16-30'], elevation: 350 },
      { order: 2, name: 'Caná', lat: 32.7470, lng: 35.3340, description: 'Primeiro milagre: a transformação da água em vinho.', verses: ['João 2:1-11'], elevation: 200 },
      { order: 3, name: 'Cafarnaum', lat: 32.8810, lng: 35.5750, description: 'O centro do ministério de Jesus na Galileia.', verses: ['Mateus 4:13'], elevation: -210 },
      { order: 4, name: 'Bem-Aventuranças', lat: 32.8806, lng: 35.5558, description: 'Local tradicional do Sermão do Monte.', verses: ['Mateus 5:1'], elevation: -150 },
      { order: 5, name: 'Tabga', lat: 32.8736, lng: 35.5489, description: 'Milagre da multiplicação dos pães e peixes.', verses: ['Marcos 6:30-44'], elevation: -210 },
      { order: 6, name: 'Betsaida', lat: 32.9039, lng: 35.6178, description: 'Cura de um cego e terra natal de Filipe, André e Pedro.', verses: ['Marcos 8:22'], elevation: -208 },
      { order: 7, name: 'Corazim', lat: 32.9142, lng: 35.5653, description: 'Uma das cidades onde Jesus realizou muitos milagres.', verses: ['Mateus 11:21'], elevation: 50 },
      { order: 8, name: 'Tiberíades', lat: 32.7936, lng: 35.5312, description: 'Navegação e pregação nas margens do mar.', verses: ['João 6:23'], elevation: -210 }
    ]
  }
];
