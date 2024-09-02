import React from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './App.css';
import CourseList from '../CourseList/CourseList';


function App({ isLoggedIn, displayDrawer }) {

  return (
    <>
      <div className="App">
        <div className="App-head">
          <Header />
          <Notifications displayDrawer={displayDrawer} />
        </div>

        <div className="App-body border">
          {isLoggedIn === false ? <Login /> : <CourseList />}
        </div>
        <div className="App-footer border">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
