import React from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.css';


function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body border">
          <Login />
        </div>
        <div className="App-footer border">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
