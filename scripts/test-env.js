/* Test variable value */
console.log("process.env.context =", process.env.CONTEXT);

const { spawn } = require('child_process');

const child = spawn('console.log', ['-v', 'content/*', `${ process.env.CONTEXT }/`]);

child.stdout.on('data', (data) => {
  console.log(`test-env stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`test-env stderr:\n${data}`);
});