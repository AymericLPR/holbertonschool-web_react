import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';


function App() {
  const isIndex = true;
  const footerCopy = getFooterCopy(isIndex);

  return (
    <div className="MainContainer">
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
    </div>
    <footer className="App-footer">{footerCopy} &copy; {getFullYear()}</footer>
    </div>
  );
}

export default App;
