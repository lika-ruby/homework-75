
import './App.css';

const myName = "Mariia"
const site = {
  name: "Youtube",
  url: "https://www.youtube.com/"
}
const a = 13
const b = 25
const sum = a + b
const colors = ["pink", "yellow", "lightblue"]

function App() {
  return (
    <div className="App">
      <h1>{myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={'https://senfil.net/uploads/posts/2015-08/1439921233_0.jpg'} alt={"Кіт сверепий"} width={400} />
      <a target='blanc' href={site.url}>{site.name}</a>
      <p>{sum}</p>
      <ul>
        {colors.map((color) => {
          return <li key={color}>{color}</li>
        })}
      </ul>

    </div>
  );
}

export default App;
