import React from 'react';

import styles from './BaseButton.module.css';

const baseButton = (props) => (
  <button className={styles.baseButton}>
    <img
      src="images/location-icon.png"
      alt={props.text}
      title={props.text}
    />
    <span>{props.text}</span>
  </button>
);

export default baseButton;
