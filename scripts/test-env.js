/* Test variable value */
const { spawn } = require('child_process');

console.log("process.env.context =", process.env.CONTEXT);

const command = 'cp';
const args = ['-v', `example/assets/${ process.env.CONTEXT }/*`, 'example/'];

const child = spawn(command, args);

child.stdout.on('data', (data) => {
  console.log(`build-command stdout:\n${data}`);
});

child.on('error', (code, data) => {
  console.error(`build-command error(${code}):\n${data}`);
  throw new Error('build-command failed');
});
