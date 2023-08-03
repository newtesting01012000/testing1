import logo from "./logo.svg";
import "./App.css";

const PassingProsComponent = (props) => {
  const { isBoolean, ...rest } = props;
  return <div {...rest}>{isBoolean ? "True" : "False"}</div>;
};

function App() {
  const definedProps = { isBoolean: true };
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

        <PassingProsComponent {...definedProps}>123</PassingProsComponent>
      </header>
    </div>
  );
}

export default App;
