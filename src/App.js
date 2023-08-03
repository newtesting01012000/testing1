import logo from "./logo.svg";
import "./App.css";

const PassingProsComponent = ({ prop1, prop2 }) => {
  //const { isBoolean, ...rest } = props;
  //return <div {...rest}>{isBoolean ? "True" : "False"}</div>;
  return (
    <div>
      {prop1}
      {prop2}
    </div>
  );
};

function App() {
  const definedProps = { isBoolean: true };
  const entry = 1;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <PassingProsComponent prop1="1" prop2="2">
          123
        </PassingProsComponent>
        <PassingProsComponent prop1="1" prop3="2">
          123
        </PassingProsComponent>
      </header>
    </div>
  );
}

export default App;
