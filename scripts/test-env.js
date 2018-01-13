/* Test variable value */
console.log("process.env.context =", process.env.CONTEXT);

const { spawn } = require('child_process');
const child = spawn('ls', {
  stdio: 'inherit',
  shell: true
});
