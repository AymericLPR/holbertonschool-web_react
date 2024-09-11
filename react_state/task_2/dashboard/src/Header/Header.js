import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/logo.jpg';
import { AppContext } from '../App/AppContext';

function Header() {
  const { user, logOut } = useContext(AppContext);

  return (
    <header className={css(styles['App-header'])}>
      <img src={logo} className={css(styles['App-logo'])} alt="logo" />
      <div className={css(styles['App-header-text'])}>
      <h1 className={css(styles['App-header-title'])}>School dashboard</h1>
      {user.isLoggedIn && (
        <div id="logoutSection" className={css(styles['App-logout'])}>
          Welcome {user.email} (<a href="#logout" onClick={logOut}> logout </a>)
        </div>
      )}
      </div>
    </header>
  );
}

const styles = StyleSheet.create({
  'App-logo': {
    height: '30vmin',
    pointerEvents: 'none',
  },
  'App-header': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 'calc(10px + 2vmin)',
    color: '#E1003C',
    fontWeight: 'bolder',
  },
  'App-header-title': {
    fontSize: 'calc(10px + 3vmin)',
    color: '#E1003C',
    fontWeight: 'bolder',
  },
  'App-header-text':{
    display: 'flex',
    flexDirection: 'column',
    fontSize: 'calc(10px + 2vmin)',
    fontWeight: 'bolder',
    color: "black",
  },

});

export default Header;
