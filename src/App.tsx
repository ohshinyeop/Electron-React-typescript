import React from 'react';
import logo from './logo.svg';
import './App.css';
import appRuntime from './ipc/appRuntime';

function App() {
  const sendMail = () => {
    appRuntime.invoke('connectSsh', {});
  };

  return (
    <div className="App">
      <header className="App-header">electron react with jar</header>
      <button onClick={sendMail}>button</button>
    </div>
  );
}

export default App;
