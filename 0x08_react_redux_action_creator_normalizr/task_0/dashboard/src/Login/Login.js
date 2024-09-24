import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function App() {
  return (
    <>
      <div className={css(styles['App-body'])}>
        <p>Login to access the full dashboard</p>
        <div className={css(styles['App-body-notification-container'])}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
          <button>OK</button>
        </div>
      </div>
    </>
  );
}

const styles = StyleSheet.create({
  'App-body': {
    padding: '10px',
  },
  'App-body-notification-container': {
    flexGrow: 1,
    gap: '15px',
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      button: {
        display: 'inline-block',
      },
    },
  },
});

export default App;
