import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <>
      <footer className={css(styles.footer)}>
        Copyright {getFooterCopy()} &copy; {getFullYear()}
      </footer>
    </>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: '20px 0',
    display: 'flex',
    justifyContent: 'center',
    fontStyle: 'italic',
  },
});

export default Footer;
