import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/logo.jpg';


function Header() {
  return (
    <>
      <header className={css(styles['App-header'])}>
        <img src={logo} className={css(styles['App-logo'])} alt="logo" />
        <h1>School dashboard</h1>
      </header>
    </>
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
    fontSize: 'calc(10px + 2vmin)',
    color: '#E1003C',
    fontWeight: 'bolder',
  }

});

export default Header;
