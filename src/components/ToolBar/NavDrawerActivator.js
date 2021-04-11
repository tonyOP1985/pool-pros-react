import React from 'react';

import styles from './NavDrawerActivator.module.css';

const navDrawerActivator = () => {
  return (
    <img
      className={styles.navDrawerActivator}
      src="/images/menu-icon-mobile.png"
      alt="Menu-Icon"
    />
  );
};

export default navDrawerActivator;
