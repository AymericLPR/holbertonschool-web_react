import logo from './logo.jpg';
import favicon from './favicon.ico';
import './App.css';

function App() {
  return (
    <div className="MainContainer">
    <div className="App">
      <link rel="icon" href={favicon} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
    </div>
    <footer className="App-footer">Copyright 2020 - holberton School</footer>
    </div>
  );
}

export default App;
