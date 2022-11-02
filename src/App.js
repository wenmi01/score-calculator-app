// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Helmet } from 'react-helmet';

import ScoreCalculator from './components/ScoreCalculator';

function App() {
  return (
    // <div className="App">
    <div className="App">
      <Helmet>
        <title>Score Calculator App</title>
      </Helmet>
      <ScoreCalculator />

      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
