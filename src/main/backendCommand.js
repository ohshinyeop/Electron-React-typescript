// eslint-disable-next-line @typescript-eslint/no-var-requires
const { exec } = require('child_process');

const runJar = () => {
  console.log('Running jar');
  const server = './example.jar';
  const serverProcess = exec(
    `java -jar ${server} output.log`,
    function (error, stdout, stderr) {
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);

      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    },
  );
  if (serverProcess.pid) {
    console.log(`Server PID: ${serverProcess.pid}`);
  } else {
    console.log('Failed to launch server process.');
  }
};
exports.runJar = runJar;
