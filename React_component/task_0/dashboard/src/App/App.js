import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { getLatestNotification } from '../utils/utils';
import './App.css';
import CourseList from '../CourseList/CourseList';

class App extends Component {
  render() {
    const { isLoggedIn, displayDrawer } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];

    return (
      <>
        <div className="App">
          <div className="App-head">
            <Header />
            <Notifications displayDrawer={displayDrawer} listNotifications={listNotifications} />
          </div>

          <div className="App-body border">
            {isLoggedIn === false ? <Login /> : <CourseList listCourses={listCourses} />}
          </div>

          <div className="App-footer border">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default App;
