import React from 'react';

import styles from './TopBarIconButton.module.css'

const topBarIconButton = () => (
  <img
    src="./images/action-commercial-icon.png"
    alt="Login"
    title="Login"
    height="12"
    className={styles.topBarIcon}
  />
);

export default topBarIconButton;
