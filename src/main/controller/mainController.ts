import { ipcMain } from 'electron';
import { runJar, connectSsh } from '../service/mainService';

export const init = () => {
  ipcMain.handle('connectSsh', (event, arg) => {
    connectSsh();
  });
};
