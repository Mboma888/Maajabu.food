#!/usr/bin/env node
const { execSync } = require('child_process');
const { cpSync, mkdirSync, existsSync } = require('fs');
const { join } = require('path');

function run(cmd) {
  console.log('> ' + cmd);
  execSync(cmd, { stdio: 'inherit' });
}

try {
  // 1) Compile TypeScript using tsc
  run('npx tsc');

  // 2) Ensure dist exists
  const dist = join(process.cwd(), 'dist');
  if (!existsSync(dist)) mkdirSync(dist, { recursive: true });

  // 3) Copy public/* into dist/ (Node 16+ provides cpSync with recursive)
  const publicDir = join(process.cwd(), 'public');
  if (existsSync(publicDir)) {
    cpSync(publicDir, dist, { recursive: true });
    console.log('Copied public/ → dist/');
  } else {
    console.log('No public/ directory to copy.');
  }

  // 4) Copy index.html (if exists) to dist/
  const indexHtml = join(process.cwd(), 'index.html');
  if (existsSync(indexHtml)) {
    cpSync(indexHtml, join(dist, 'index.html'));
    console.log('Copied index.html → dist/index.html');
  }

  // 5) Commit and push dist changes
  try {
    run('git add dist');
    run('git commit -m "AI: build and updated dist folder"');
    run('git push');
  } catch (err) {
    console.log('Git commit/push step failed or there are no changes to commit.');
  }

  console.log('\nBuild script complete. Dist is ready for deployment.');
} catch (err) {
  console.error(err);
  process.exit(1);
}
