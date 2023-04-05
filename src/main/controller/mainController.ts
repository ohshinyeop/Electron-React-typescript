import { ipcMain } from 'electron';
import { runJar, connectSsh } from '../service/mainService';

export const init = () => {
  ipcMain.on('connectSsh', async (event, arg) => {
    const result = await connectSsh();
    event.sender.send('connectSsh-result', result);
  });
};
