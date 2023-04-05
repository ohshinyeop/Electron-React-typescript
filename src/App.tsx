import React from 'react';
import appRuntime from './ipc/appRuntime';
import { ipcRenderer } from 'electron';
import styles from './App.module.scss';

function App() {
  const connectSsh = async () => {
    appRuntime.send('connectSsh', {});
  };
  appRuntime.on('connectSsh-result', (event, res) => {
    console.log(res);
  });

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        electron react with jar
        <button onClick={connectSsh}>Connect ssh</button>
      </header>
    </div>
  );
}

export default App;
