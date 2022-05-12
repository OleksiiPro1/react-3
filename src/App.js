import './App.css';

const hStyle = { color: 'green' };
export default function App() {
  const meme = {
    name: 'Meme generator',
    profileImageUrl: 'https://api.memegen.link/images/aag/foo/bar.png',
  };
  const templates = [
    { id: 1, pic: 'aag' },
    { id: 2, pic: 'ackbar' },
    { id: 3, pic: 'afraid' },
    { id: 4, pic: 'agnes' },
  ];

  return (
    <div className="App">
      <img src={meme.profileImageUrl} alt="My meme generator" />
      <h1 style={hStyle}>{meme.name}</h1>
      {templates.map((template) => (
        <select key={template.id}>
          {template.id}
          {template.pic}
        </select>
      ))}

      <label>
        Top meme Text
        <br />
        <input type="text1" />
      </label>
      <br />
      <label>
        Bottom meme Text
        <br />
        <input type="text2" />
      </label>
    </div>
  );
}
