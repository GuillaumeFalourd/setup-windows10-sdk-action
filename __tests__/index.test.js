const process = require('process');
const cp = require('child_process');
const path = require('path');

test('test runs', () => {
  process.env['INPUT_WINSDK_BUILD_VERSION'] = '12345';
  const ip = path.join(__dirname, '..', 'src', 'index.js');
  console.log(cp.execSync(`node ${ip}`).toString());
});
