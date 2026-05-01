/**
 * Fix: Added React import to resolve 'Cannot find namespace React' error when using React.FC.
 */
import React from 'react';

export type PrayerType = 'lament' | 'confession' | 'intercession' | 'gratitude' | 'petition' | 'warfare' | 'sovereignty';

export interface BiblicalPrayer {
  id: string;
  title: string;
  ref: string;
  author: string;
  type: PrayerType;
  context: string;
  structure: string[];
  petition: string;
  foundation: string;
  result: string;
  application: string;
}

export interface PrayerModuleManifest {
  id: string;
  name: string;
  icon: string;
  component: React.FC<any>;
}