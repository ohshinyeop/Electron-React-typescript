import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('appRuntime', {
  send: (channel: string, data: any) => {
    ipcRenderer.send(channel, data);
  },
  subscribe: (channel: string, listener: any) => {
    const subscription = (event: any, ...args: any[]) => listener(...args);
    ipcRenderer.on(channel, subscription);

    return () => {
      ipcRenderer.removeListener(channel, subscription);
    };
  },
  invoke: (channel: string, data: any) => {
    return ipcRenderer.invoke(channel, data);
  },
  on: (channel: string, listener: any) => {
    ipcRenderer.on(channel, listener);
  },
});
