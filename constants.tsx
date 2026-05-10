
import React from 'react';

export const APP_NAME = "Dabar";
export const BIBLE_VERSION = "ACF";

// ... Manter BIBLE_METADATA e ÍCONES existentes ...

export const ICON_DIARY = (className?: string) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
);

export const ICON_DNA = (className?: string) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

export const ICON_FLASHCARDS = (className?: string) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

export const ICON_HYMNAL = (className?: string) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
  </svg>
);

// ... Manter os outros ícones inalterados ...
export const ICON_DEEP_MAP = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /> </svg> );
export const ICON_BIBLE = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> </svg> );
export const ICON_HERESIES = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 15c-.77 1.333.192 3 1.732 3z" /> </svg> );
export const ICON_TYPOLOGY = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> </svg> );
export const ICON_MEASURES = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /> </svg> );
export const ICON_TABERNACLE = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10zM9 21v-4a3 3 0 016 0v4" /> </svg> );
export const ICON_LIBRARY = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /> </svg> );
export const ICON_ASSISTANT = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /> </svg> );
export const ICON_COACH = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /> </svg> );
export const ICON_STRONG = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5c1.382 0 2.67.456 3.71 1.232L19 4" /> </svg> );
export const ICON_THEME = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /> </svg> );
export const ICON_CHRONOLOGY = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /> </svg> );
export const ICON_MAPS = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /> </svg> );
export const ICON_SERMON = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11l-8 8-4-4 8-8 4 4zM5 19h14" /> </svg> );
export const ICON_STUDY = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /> </svg> );
export const ICON_DIFFERENTIALS = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z" /> </svg> );
export const ICON_SETTINGS = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15a 3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.4 15a 1.65 1.65 0 0 0 0.33 1.82l 0.06 0.06a 2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-0.06-0.06a 1.65 1.65 0 0 0-1.82-0.33 1.65 1.65 0 0 0-1 1.51V21a 2 2 0 0 1-2 2 2 2 0 0 1-2-2v-0.09a 1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82 0.33l-0.06 0.06a 2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l 0.06-0.06a 1.65 1.65 0 0 0 0.33-1.82 1.65 1.65 0 0 0-1.51-1H3a 2 2 0 0 1-2-2 2 2 0 0 1 2-2h0.09a 1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-0.33-1.82l-0.06-0.06a 2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l 0.06 0.06a 1.65 1.65 0 0 0 1.82 0.33H9a 1.65 1.65 0 0 0 1-1.51V3a 2 2 0 0 1 2-2 2 2 0 0 1 2 2v0.09a 1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-0.33l 0.06-0.06a 2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-0.06 0.06a 1.65 1.65 0 0 0-0.33 1.82V9a 1.65 1.65 0 0 0 1.51 1H21a 2 2 0 0 1 2 2 2 2 0 0 1-2 2h-0.09a 1.65 1.65 0 0 0-1.51 1z" /> </svg> );
export const ICON_NOTE = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> </svg> );
export const ICON_DEVOTIONAL = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z" /> </svg> );
export const ICON_QUOTES = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4" /> </svg> );
export const ICON_MESSAGES = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /> </svg> );
export const ICON_REVIVAL = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /> </svg> );
export const ICON_COUNCIL = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> </svg> );
export const ICON_CUSTOMS = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /> </svg> );
export const ICON_ESCHATOLOGY = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0zM12 2v2m0 16v2m10-10h-2M4 12H2m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636" /> </svg> );
export const ICON_ARCHEOLOGY = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /> </svg> );
export const ICON_VALUES = (className?: string) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

export const ICON_GENEALOGIES = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6m14-5a2 2 0 11-4 0 2 2 0 014 0zM8 7a2 2 0 11-4 0 2 2 0 014 0zm12 10a2 2 0 11-4 0 2 2 0 014 0zM8 17a2 2 0 11-4 0 2 2 0 014 0z" /> </svg> );
export const ICON_CREEDS = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4m14-4a2 2 0 100-4 2 2 0 000 4zm0 12a2 2 0 100-4 2 2 0 000 4zM6 8a2 2 0 100-4 2 2 0 000 4zm0 12a2 2 0 100-4 2 2 0 000 4z" /> </svg> );
export const ICON_HEROES = (className?: string) => ( <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /> </svg> );

export const BIBLE_METADATA: Record<string, { id: string; name: string; abbreviation: string; chapters: number; category: string; }> = {
  "GEN": { id: "GEN", name: "Gênesis", abbreviation: "GN", chapters: 50, category: "Pentateuco" },
  "EXO": { id: "EXO", name: "Êxodo", abbreviation: "EX", chapters: 40, category: "Pentateuco" },
  "LEV": { id: "LEV", name: "Levítico", abbreviation: "LV", chapters: 27, category: "Pentateuco" },
  "NUM": { id: "NUM", name: "Números", abbreviation: "NM", chapters: 36, category: "Pentateuco" },
  "DEU": { id: "DEU", name: "Deuteronômio", abbreviation: "DT", chapters: 34, category: "Pentateuco" },
  "JOS": { id: "JOS", name: "Josué", abbreviation: "JS", chapters: 24, category: "Históricos" },
  "JDG": { id: "JDG", name: "Juízes", abbreviation: "JZ", chapters: 21, category: "Históricos" },
  "RUT": { id: "RUT", name: "Rute", abbreviation: "RT", chapters: 4, category: "Históricos" },
  "1SA": { id: "1SA", name: "1 Samuel", abbreviation: "1Sm", chapters: 31, category: "Históricos" },
  "2SA": { id: "2SA", name: "2 Samuel", abbreviation: "2Sm", chapters: 24, category: "Históricos" },
  "1KI": { id: "1KI", name: "1 Reis", abbreviation: "1Rs", chapters: 22, category: "Históricos" },
  "2KI": { id: "2KI", name: "2 Reis", abbreviation: "2Rs", chapters: 25, category: "Históricos" },
  "1CH": { id: "1CH", name: "1 Crônicas", abbreviation: "1Cr", chapters: 29, category: "Históricos" },
  "2CH": { id: "2CH", name: "2 Crônicas", abbreviation: "2Cr", chapters: 36, category: "Históricos" },
  "EZR": { id: "EZR", name: "Esdras", abbreviation: "Ed", chapters: 10, category: "Históricos" },
  "NEH": { id: "NEH", name: "Neemias", abbreviation: "Ne", chapters: 13, category: "Históricos" },
  "EST": { id: "EST", name: "Ester", abbreviation: "Et", chapters: 10, category: "Históricos" },
  "JOB": { id: "JOB", name: "Jó", abbreviation: "Jó", chapters: 42, category: "Poéticos" },
  "PSA": { id: "PSA", name: "Salmos", abbreviation: "Sl", chapters: 150, category: "Poéticos" },
  "PRO": { id: "PRO", name: "Provérbios", abbreviation: "Pv", chapters: 31, category: "Poéticos" },
  "ECC": { id: "ECC", name: "Eclesiastes", abbreviation: "Ec", chapters: 12, category: "Poéticos" },
  "SNG": { id: "SNG", name: "Cantares", abbreviation: "Ct", chapters: 8, category: "Poéticos" },
  "ISA": { id: "ISA", name: "Isaías", abbreviation: "Is", chapters: 66, category: "Profetas Maiores" },
  "JER": { id: "JER", name: "Jeremias", abbreviation: "Jr", chapters: 52, category: "Profetas Maiores" },
  "LAM": { id: "LAM", name: "Lamentações", abbreviation: "Lm", chapters: 5, category: "Profetas Maiores" },
  "EZE": { id: "EZE", name: "Ezequiel", abbreviation: "Ez", chapters: 48, category: "Profetas Maiores" },
  "DAN": { id: "DAN", name: "Daniel", abbreviation: "Dn", chapters: 12, category: "Profetas Maiores" },
  "HOS": { id: "HOS", name: "Oseias", abbreviation: "Os", chapters: 14, category: "Profetas Menores" },
  "JOE": { id: "JOE", name: "Joel", abbreviation: "Jl", chapters: 3, category: "Profetas Menores" },
  "AMO": { id: "AMO", name: "Amós", abbreviation: "Am", chapters: 9, category: "Profetas Menores" },
  "OBA": { id: "OBA", name: "Obadias", abbreviation: "Ob", chapters: 1, category: "Profetas Menores" },
  "JON": { id: "JON", name: "Jonas", abbreviation: "Jn", chapters: 4, category: "Profetas Menores" },
  "MIC": { id: "MIC", name: "Miqueias", abbreviation: "Mq", chapters: 7, category: "Profetas Menores" },
  "NAH": { id: "NAH", name: "Naum", abbreviation: "Na", chapters: 3, category: "Profetas Menores" },
  "HAB": { id: "HAB", name: "Habacuque", abbreviation: "Hc", chapters: 3, category: "Profetas Menores" },
  "ZEP": { id: "ZEP", name: "Sofonia", abbreviation: "Sf", chapters: 3, category: "Profetas Menores" },
  "HAG": { id: "HAG", name: "Ageu", abbreviation: "Ag", chapters: 2, category: "Profetas Menores" },
  "ZEC": { id: "ZEC", name: "Zacarias", abbreviation: "Zc", chapters: 14, category: "Profetas Menores" },
  "MAL": { id: "MAL", name: "Malaquias", abbreviation: "Ml", chapters: 4, category: "Profetas Menores" },
  "MAT": { id: "MAT", name: "Mateus", abbreviation: "Mt", chapters: 28, category: "Evangelhos" },
  "MRK": { id: "MRK", name: "Marcos", abbreviation: "Mc", chapters: 16, category: "Evangelhos" },
  "LUK": { id: "LUK", name: "Lucas", abbreviation: "Lc", chapters: 24, category: "Evangelhos" },
  "JHN": { id: "JHN", name: "João", abbreviation: "Jo", chapters: 21, category: "Evangelhos" },
  "ACT": { id: "ACT", name: "Atos", abbreviation: "At", chapters: 28, category: "Histórico NT" },
  "ROM": { id: "ROM", name: "Romanos", abbreviation: "Rm", chapters: 16, category: "Epístolas Paulinas" },
  "1CO": { id: "1CO", name: "1 Coríntios", abbreviation: "1Co", chapters: 16, category: "Epístolas Paulinas" },
  "2CO": { id: "2CO", name: "2 Coríntios", abbreviation: "2Co", chapters: 13, category: "Epístolas Paulinas" },
  "GAL": { id: "GAL", name: "Gálatas", abbreviation: "Gl", chapters: 6, category: "Epístolas Paulinas" },
  "EPH": { id: "EPH", name: "Efésios", abbreviation: "Ef", chapters: 6, category: "Epístolas Paulinas" },
  "PHI": { id: "PHI", name: "Filipenses", abbreviation: "Fp", chapters: 4, category: "Epístolas Paulinas" },
  "COL": { id: "COL", name: "Colossenses", abbreviation: "Cl", chapters: 4, category: "Epístolas Paulinas" },
  "1TH": { id: "1TH", name: "1 Tessalonicenses", abbreviation: "1Ts", chapters: 5, category: "Epístolas Paulinas" },
  "2TH": { id: "2TH", name: "2 Tessalonicenses", abbreviation: "2Ts", chapters: 3, category: "Epístolas Paulinas" },
  "1TI": { id: "1TI", name: "1 Timóteo", abbreviation: "1Tm", chapters: 6, category: "Epístolas Paulinas" },
  "2TI": { id: "2TI", name: "2 Timóteo", abbreviation: "2Tm", chapters: 4, category: "Epístolas Paulinas" },
  "TIT": { id: "TIT", name: "Tito", abbreviation: "Tt", chapters: 3, category: "Epístolas Paulinas" },
  "PHM": { id: "PHM", name: "Filemom", abbreviation: "Fm", chapters: 1, category: "Epístolas Paulinas" },
  "HEB": { id: "HEB", name: "Hebreus", abbreviation: "Hb", chapters: 13, category: "Epístolas Gerais" },
  "JAM": { id: "JAM", name: "Tiago", abbreviation: "Tg", chapters: 5, category: "Epístolas Gerais" },
  "1PE": { id: "1PE", name: "1 Pedro", abbreviation: "1Pe", chapters: 5, category: "Epístolas Gerais" },
  "2PE": { id: "2PE", name: "2 Pedro", abbreviation: "2Pe", chapters: 3, category: "Epístolas Gerais" },
  "1JN": { id: "1JN", name: "1 João", abbreviation: "1Jo", chapters: 5, category: "Epístolas Gerais" },
  "2JN": { id: "2JN", name: "2 João", abbreviation: "2Jo", chapters: 1, category: "Epístolas Gerais" },
  "3JN": { id: "3JN", name: "3 João", abbreviation: "3Jo", chapters: 1, category: "Epístolas Gerais" },
  "JUD": { id: "JUD", name: "Judas", abbreviation: "Jd", chapters: 1, category: "Epístolas Gerais" },
  "REV": { id: "REV", name: "Apocalipse", abbreviation: "Ap", chapters: 22, category: "Revelação" }
};
