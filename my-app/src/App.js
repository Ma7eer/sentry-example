import logo from './logo.svg';
import './App.css';

function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}

function App() {
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
        <br />
        <button 
          className="error-button"
          onClick={() => {
            throw new UserException("I did this on purpose. Don't worry");
          }}
          >Throw Error</button>
      </header>
    </div>
  );
}

export default App;
