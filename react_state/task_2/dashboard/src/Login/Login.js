import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function Login({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className={css(styles['App-body'])}>
      <form className={css(styles['App-body-notification-container'])} onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Login"
            disabled={!email || !password}
          />
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
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
  'App-body': {
    padding: '10px',
  },
});

export default Login;
