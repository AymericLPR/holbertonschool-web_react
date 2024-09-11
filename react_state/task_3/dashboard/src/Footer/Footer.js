import React, { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';

function Footer() {
  const { user } = useContext(AppContext);

  return (
    <>
      <footer className={css(styles.footer)}>
        {user.isLoggedIn && (
          <p>
            <a href="/contact">Contact us</a>
          </p>
        )}
        <p>Copyright {getFooterCopy()} &copy; {getFullYear()}</p>
      </footer>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: '20px 0',
    display: 'flex',
    textAlign: 'center',
    fontStyle: 'italic',
    flexDirection: 'column',
  },
});

export default Footer;
