/* eslint-disable @typescript-eslint/no-var-requires */
const { contextBridge, ipcRenderer } = require('electron');
export {};

contextBridge.exposeInMainWorld('appRuntime', {
  send: (channel, data) => {
    ipcRenderer.send(channel, data);
  },
  subscribe: (channel, listener) => {
    const subscription = (event, ...args) => listener(...args);
    ipcRenderer.on(channel, subscription);

    return () => {
      ipcRenderer.removeListener(channel, subscription);
    };
  },
  invoke: (channel, data) => {
    return ipcRenderer.invoke(channel, data);
  },
});
