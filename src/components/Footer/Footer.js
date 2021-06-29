import React from 'react';

import TopFooter from './TopFooter';
import BottomFooter from './BottomFooter';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <TopFooter />
      <BottomFooter />
    </footer>
  );
};

export default Footer;
