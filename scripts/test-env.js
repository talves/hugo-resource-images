/* Test variable value */
console.log("process.env.context =", process.env.CONTEXT);

const { spawn } = require('child_process');
const child = spawn('ls', {
  stdio: 'inherit',
  shell: true
});

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`child stderr:\n${data}`);
});
