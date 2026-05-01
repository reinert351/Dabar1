const { execSync } = require('child_process');
try {
  const stdout = execSync('git log -p data/apocrypha_data.ts');
  console.log(stdout.toString().slice(0, 5000));
} catch (e) {
  console.error(e.message);
}
