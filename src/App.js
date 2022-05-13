import './App.css';
//import fetch from 'fetch';
import { useState } from 'react';
import Training from './Training';

const inputStyle = { color: 'blue' };
const hStyle = { color: 'green' };
export default function App() {
  const download = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: 'GET',
      hesders: {},
    })
      .then((response) => {
        response
          .arrayBuffer()
          .then(function (buffer) {
            const url = window.URL.createObjectURL(new Blob([buffer]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'image.png');
            document.body.appendChild(link);
            link.click();
          })
          .catch(() => {
            console.log('Import of web vitals failed');
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [images, setImages] = useState('aag');
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
          style={inputStyle}
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
          style={inputStyle}
          value={bottomText}
          onChange={(event) => setBottomText(event.currentTarget.value)}
        />
      </label>
      <br />
      <br />
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
      <label>
        Choose template
        <br />
        <input
          style={inputStyle}
          value={images}
          onChange={(event) => setImages(event.currentTarget.value)}
        />
      </label>
      <br />
      <br />
      <a href={url} download onClick={(e) => download(e)}>
        <button>Download</button>
      </a>
      <br />
      <br />
      <Training />
    </div>
  );
}
