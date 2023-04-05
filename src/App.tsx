import React from 'react';
import logo from './logo.svg';
import './App.css';
import appRuntime from './ipc/appRuntime';

function App() {
  const connectSsh = () => {
    appRuntime.invoke('connectSsh', {});
  };

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
