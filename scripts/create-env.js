const fs = require('fs')
const path = require('path')
/* Test variable value */
const { spawn } = require('child_process');

const writepath = path.join(__dirname, '.' + 'env')
const writefile = `API_KEY = ${process.env.API_KEY}\n`
console.log(`${writepath} of ${writefile}`)
fs.writeFileSync(
  writepath,
  './.env'
)

console.log("process.env.context =", process.env.CONTEXT);

const command = `more .env`;
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