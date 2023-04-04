import { exec } from "child_process";
import { NodeSSH } from "node-ssh";

export const runJar = () => {
  console.log("Running jar");
  const server = "./example.jar";
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
    console.log("Failed to launch server process.");
  }
};

export const connectSsh = () => {
  const ssh = new NodeSSH();
  ssh
    .connect({
      host: "192.168.0.75",
      username: "bitnine32",
      port: 22,
      password: "32bihdyggsetj3!",
      readyTimeout: 5000,
    })
    .then(() => {
      ssh.execCommand("ifconfig", {}).then((result) => {
        console.log("STDOUT: " + result.stdout);
        console.log("STDERR: " + result.stderr);
      });
    });
};

module.exports = {
  runJar,
  connectSsh,
};
