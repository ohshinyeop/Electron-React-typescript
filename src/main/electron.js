/* eslint-disable @typescript-eslint/no-var-requires */

const { app, BrowserWindow, protocol } = require('electron');
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const { runJar } = require('./backendCommand');

function createWindow() {
  const window = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.resolve(__dirname, 'preload.js'),
      webviewTag: true,
    },
  });

  console.log('isDev', isDev);
  if (isDev) {
    window.loadURL('http://localhost:3000');
  } else {
    window.loadURL(
      url.format({
        pathname:
          'index.html' /* Attention here: origin is path.join(__dirname, 'index.html') */,
        protocol: 'file',
        slashes: true,
      }),
    );
  }
}

app.on('ready', createWindow);

app.whenReady().then(() => {
  console.log('app.whenReady');
  runJar();
  protocol.interceptFileProtocol('file', (request, callback) => {
    const url = request.url.substr(7); /* all urls start with 'file://' */
    const filePath = isDev
      ? path.join(__dirname, `/../../build/${url}`)
      : path.normalize(`${__dirname}/${url}`);
    callback({ path: path.normalize(`${filePath}`) });
  });
});
