import React from 'react';

import styles from './NavDrawerActivator.module.css';

const navDrawerActivator = (props) => {
  const { clickHandler } = props;

  return (
    <img
      className={styles.navDrawerActivator}
      src="./images/menu-icon-mobile.png"
      alt="Menu-Icon"
      onClick={() => clickHandler(true)}
    />
  );
};

export default navDrawerActivator;
