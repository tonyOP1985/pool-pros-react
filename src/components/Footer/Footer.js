import React from 'react';

import TopFooter from './TopFooter';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <TopFooter />
    </footer>
  );
};

export default Footer;
