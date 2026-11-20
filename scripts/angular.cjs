// Angular 11 uses Webpack 4, which needs this compatibility flag on Node 17+.
const { spawnSync } = require('child_process');
const major = Number(process.versions.node.split('.')[0]);
const flags = major >= 17 ? ['--openssl-legacy-provider'] : [];
const result = spawnSync(process.execPath, [...flags, require.resolve('@angular/cli/bin/ng'), ...process.argv.slice(2)], {
  stdio: 'inherit', env: process.env
});
if (result.error) { console.error(result.error.message); }
process.exit(result.status === null ? 1 : result.status);
