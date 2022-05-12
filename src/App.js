import './App.css';
import { useState } from 'react';

const hStyle = { color: 'green' };
export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [images, setImages] = useState('');
  const [url, setUrl] = useState(
    'https://api.memegen.link/images/aag/foo/bar.png',
  );
  const meme = {
    name: 'Meme generator',
    profileImageUrl: 'https://api.memegen.link/images/aag/foo/bar.png',
  };
  const templates = [
    { id: 1, pic: 'aag' },
    { id: 2, pic: 'ackbar' },
    { id: 3, pic: 'afraid' },
    { id: 4, pic: 'agnes' },
    { id: 5, pic: 'doge' },
  ];

  return (
    <div className="App">
      <img src={url} alt="My meme generator" />
      <h1 style={hStyle}>{meme.name}</h1>
      <label>
        Choose a template{' '}
        <select
          value={images}
          onChange={(event) => setImages(event.currentTarget.value)}
        >
          {templates.map((template) => (
            <option value={template.pic} key={template.id}>
              {template.pic}
            </option>
          ))}
        </select>
      </label>
      <br />
      <br />

      <label>
        Top meme Text
        <br />
        <input
          value={topText}
          onChange={(event) => setTopText(event.currentTarget.value)}
        />
      </label>
      <br />
      <br />
      <label>
        Bottom meme Text
        <br />
        <input
          value={bottomText}
          onChange={(event) => setBottomText(event.currentTarget.value)}
        />
      </label>
      <button
        onClick={() => {
          setUrl(
            `https://api.memegen.link/images/${images}/${topText}/${bottomText}.jpg`,
          );
        }}
      >
        Generate
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
