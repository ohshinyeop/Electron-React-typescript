import React from 'react';
import './App.css';
import appRuntime from './ipc/appRuntime';
import { ipcRenderer } from 'electron';

function App() {
  const connectSsh = async () => {
    appRuntime.send('connectSsh', {});
  };
  appRuntime.on('connectSsh-result', (event, res) => {
    console.log(res);
  });

  return (
    <div className="App">
      <header className="App-header">
        electron react with jar
        <button onClick={connectSsh}>Connect ssh</button>
      </header>
    </div>
  );
}

export default App;
