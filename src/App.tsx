import React from 'react';
import './App.css';

function App() {
  const adidas_logo = 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg'
  return (
    <div className="App">
      <header className="App-header">
        <img src={adidas_logo} className="App-logo" alt="logo" />
        <p>
          Interview Frontend Engineer
        </p>
      </header>
    </div>
  );
}

export default App;
