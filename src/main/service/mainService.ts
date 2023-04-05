import { exec } from 'child_process';
import { NodeSSH } from 'node-ssh';

export const runJar = () => {
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

export const connectSsh = async () => {
  const ssh = new NodeSSH();
  await ssh.connect({
    host: '192.168.0.75',
    username: '12345',
    port: 22,
    password: '12345!',
    readyTimeout: 5000,
  });

  const result = await ssh.execCommand('ifconfig', {}).then(async (result) => {
    console.log('STDOUT: ' + result.stdout);
    console.log('STDERR: ' + result.stderr);
    return result.stdout;
  });

  return result;
};
