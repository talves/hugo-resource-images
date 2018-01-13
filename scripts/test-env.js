/* Test variable value */
const { spawn } = require('child_process');

console.log("process.env.context =", process.env.CONTEXT);

const command = `ls -l`;
const options = {
  stdio: 'inherit',
  shell: true
};

const child = spawn(command, options);

child.on('exit', function (code, signal) {
  console.log('test-env process exited with ' +
              `code ${code} and signal ${signal}`);
  if (code !== 0) throw `error in command`;
});