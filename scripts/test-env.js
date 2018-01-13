/* Test variable value */
console.log("process.env.context =", process.env.CONTEXT);

const { spawn } = require('child_process');

const child = spawn('ls && mkdir temp && cp -v content/* temp/ && ls', {
  stdio: 'inherit',
  shell: true
});
