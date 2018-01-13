/* Test variable value */
console.log("process.env.context =", process.env.CONTEXT);

const { spawn } = require('child_process');

let ls = spawn('ls', {
  stdio: 'inherit',
  shell: true
});

const child = spawn('cp -v content/* temp/', {
  stdio: 'inherit',
  shell: true
});

ls = spawn('ls', {
  stdio: 'inherit',
  shell: true
});
