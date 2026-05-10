import { Territory } from '../types';

export const BIBLICAL_TERRITORIES: Territory[] = [
  {
    id: 'israel_kingdom',
    name: 'Reino de Israel (Norte)',
    era: 'kings',
    color: '#3b82f6',
    coordinates: [
      [
        [34.8, 33.3], // Lebanon coast
        [35.6, 33.3],
        [35.8, 32.5],
        [35.4, 32.0],
        [34.8, 32.0],
        [34.8, 33.3] // Close polygon
      ]
    ]
  },
  {
    id: 'judah_kingdom',
    name: 'Reino de Judá (Sul)',
    era: 'kings',
    color: '#c2410c',
    coordinates: [
      [
        [34.7, 32.0],
        [35.4, 32.0],
        [35.4, 31.0],
        [34.4, 31.0],
        [34.7, 32.0]
      ]
    ]
  },
  {
    id: 'roman_empire',
    name: 'Império Romano',
    era: 'church',
    color: '#b91c1c',
    coordinates: [
      [
        [-9.0, 43.0], // Iberia
        [0.0, 50.0], // Gaul
        [15.0, 48.0], // Germania/Italy border
        [28.0, 45.0], // Dacia/Thrace
        [35.0, 41.0], // Anatolia
        [36.0, 31.0], // Levant
        [30.0, 31.0], // Egypt
        [-9.0, 34.0], // Mauretania
        [-9.0, 43.0]
      ]
    ]
  },
  {
    id: 'babylonian_empire',
    name: 'Império Babilônico',
    era: 'exile',
    color: '#8b5cf6',
    coordinates: [
      [
        [34.0, 31.0], // Judah
        [36.0, 35.0], // Syria
        [40.0, 36.0], // Upper mesopotamia
        [48.0, 32.0], // Sumer/Elam
        [46.0, 30.0], // Persian gulf
        [38.0, 30.0], // Arabian desert edge
        [34.0, 31.0]
      ]
    ]
  },
  {
    id: 'assyrian_empire',
    name: 'Império Assírio',
    era: 'kings',
    color: '#475569',
    coordinates: [
      [
        [30.0, 30.0], // Egypt
        [35.0, 38.0], // Levant/Anatolia
        [43.0, 37.0], // Nineveh/Assur
        [48.0, 32.0], // Susa
        [45.0, 30.0], // Persian Gulf
        [30.0, 30.0]
      ]
    ]
  },
  {
    id: 'medo_persian_empire',
    name: 'Império Medo-Persa',
    era: 'exile',
    color: '#059669',
    coordinates: [
      [
        [22.0, 42.0], // Thracia/Greece
        [35.0, 40.0], // Anatolia
        [50.0, 42.0], // Caspian Sea
        [70.0, 35.0], // Indus Valley
        [65.0, 25.0], // Persian Gulf East
        [30.0, 28.0], // Egypt/Libya
        [22.0, 42.0]
      ]
    ]
  },
  {
    id: 'greek_empire',
    name: 'Império Grego (Alexandre)',
    era: 'exile',
    color: '#0ea5e9',
    coordinates: [
      [
        [15.0, 45.0], // Macedonia
        [30.0, 40.0], // Troy
        [45.0, 42.0], // Mesopotamia
        [72.0, 35.0], // Border of India
        [60.0, 20.0], // Arabian Sea
        [30.0, 25.0], // Egypt (Alexandria)
        [15.0, 45.0]
      ]
    ]
  },
  {
    id: 'egyptian_empire',
    name: 'Império Egípcio (Novo Reino)',
    era: 'exodus',
    color: '#10b981',
    coordinates: [
      [
        [28.0, 22.0], // Upper Egypt
        [31.0, 31.0], // Nile Delta
        [35.0, 35.0], // Canaan/Levant
        [37.0, 36.0], // Up to Carchemish
        [38.0, 33.0], // Syrian Desert edge
        [34.0, 28.0], // Sinai
        [31.0, 24.0], // Red Sea Coast
        [28.0, 22.0]
      ]
    ]
  }
];
