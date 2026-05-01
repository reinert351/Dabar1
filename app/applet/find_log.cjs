const fs = require('fs');
const { execSync } = require('child_process');
try {
  const stdout = execSync('find / -name "overview.txt" 2>/dev/null');
  console.log(stdout.toString());
} catch(e) {}
