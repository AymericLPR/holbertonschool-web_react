import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { AppContext, defaultUser, defaultLogOut } from './AppContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: defaultUser,
    };
  }

  handleLogout = () => {
    this.setState({
      user: defaultUser,
    });
  };

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  handleLoginSubmit = (email, password) => {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  };

  render() {
    const { displayDrawer, user } = this.state;
    const { isLoggedIn } = user;

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
      <AppContext.Provider value={{ user, logOut: this.handleLogout }}>
        <div className={css(styles.App)}>
          <div className={css(styles['App-head'])}>
            <Header />
            <Notifications
              displayDrawer={displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
              listNotifications={listNotifications}
            />
          </div>
          <div className={css(styles['App-body'], styles.border)}>
            {!isLoggedIn ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login onSubmit={this.handleLoginSubmit} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            )}
          </div>

          <BodySection title="News from the School">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </BodySection>

          <div className={css(styles.border)}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '75vh',
  },
  'App-head': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0 10px',
    '@media (max-width: 600px)': {
      flexDirection: 'column-reverse',
    },
  },
  'App-body': {
    flexGrow: 1,
    gap: '5px',
  },
  border: {
    borderTop: '5px solid #E1003C',
    padding: '5px 0',
  },
});

App.defaultProps = {
  isLoggedIn: false,
  logOut: defaultLogOut,
};

export default App;
