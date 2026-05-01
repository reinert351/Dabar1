
import { PrayerModuleManifest } from './domain/types';
import PrayersListPage from './pages/PrayersListPage';

export const BiblicalPrayersModule: PrayerModuleManifest = {
  id: 'biblical-prayers',
  name: 'Orações Analisadas',
  icon: '🙏',
  component: PrayersListPage
};

export default BiblicalPrayersModule;
