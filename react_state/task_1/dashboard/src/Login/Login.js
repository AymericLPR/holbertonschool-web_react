import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email }, this.validateForm);
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password }, this.validateForm);
  }

  validateForm() {
    const { email, password } = this.state;
    this.setState({ enableSubmit: email !== '' && password !== '' });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (

      <div className={css(styles['App-body'])}>
        <form className={css(styles['App-body-notification-container'])} onSubmit={this.handleLoginSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Login"
              disabled={!this.state.enableSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

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
