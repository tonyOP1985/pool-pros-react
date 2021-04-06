import React from 'react';

import styles from './TopBarButton.module.css';

const topBarButton = (props) => (
  <button className={styles.topBarButton}>{props.text}{props.children}</button>
);

export default topBarButton;
