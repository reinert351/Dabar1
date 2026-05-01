const { execSync } = require('child_process');
try {
  execSync('git checkout data/pericopes.ts');
  console.log('Restored data/pericopes.ts');
} catch (e) {
  console.error('Failed to restore:', e.message);
}
