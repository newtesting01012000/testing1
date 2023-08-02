import logo from "./logo.svg";
import "./App.css";

function App() {
  const newMapArrayWeird = [123, 234, 5555];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {newMapArrayWeird.map((item) => (
          <div>{item}</div>
        ))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactt
        </a>
      </header>
    </div>
  );
}

export default App;
