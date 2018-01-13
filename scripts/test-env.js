/* Test variable value */
const { spawn } = require('child_process');

console.log("process.env.context =", process.env.CONTEXT);

const command = `cp -v example/assets/${ process.env.CONTEXT }/* example/`;
const options = {
  stdio: 'inherit',
  shell: true
};

const child = spawn(command, options);
