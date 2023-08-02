import logo from "./logo.svg";
import "./App.css";

const PassingProsComponent = (props) => {
  const { isDisabled, ...rest } = props;
  return (
    <div>
      {isDisabled}
      {...rest}
    </div>
  );
};

function App({ ...props }) {
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
          Learn Reac
        </a>

        <PassingProsComponent {...props}>123</PassingProsComponent>
      </header>
    </div>
  );
}

export default App;
