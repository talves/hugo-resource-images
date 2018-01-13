/* Test variable value */
console.log("process.env.context =", process.env.CONTEXT);

const command = ``

const { spawn } = require('child_process');

const child = spawn('ls && mkdir temp && cp -v content/* temp/', {
  stdio: 'inherit',
  shell: true
});

child.stderr.on('data', (data) => {
  console.error(`test-env stderr:\n${data}`);
});
