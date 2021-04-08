import React from 'react';

import styles from './ToolBarMenuItem.module.css';

const toolBarMenuItem = (props) => (
  <button className={styles.toolBarMenuItem}>
    <span>{props.text}</span>
    <img
      src="images/down-arrow.png"
      alt={props.text}
      title={props.text}
      height="12"
    />
  </button>
);

export default toolBarMenuItem;
