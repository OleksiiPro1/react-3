import './App.css';
import { useEffect, useState } from 'react';

const hStyle = { color: 'red' };
function App() {
  useEffect(() => {
    fetch('https://api.memegen.link/templates')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div className="App">
      <h1 style={hStyle}>Meme generator</h1>
      <label>
        Top meme Text
        <br />
        <input type="text" />
      </label>
      <br />
      <label>
        Bottom meme Text
        <br />
        <input type="text" />
      </label>
    </div>
  );
}

export default App;
