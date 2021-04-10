import React from 'react';

import styles from './ToolBarMenuButton.module.css';

const toolBarMenuButton = (props) => {
  const { text } = props;

  return (
    <button className={styles.toolBarMenuButton}>
      <span>{text}</span>
      <img
        src="images/down-arrow.png"
        alt={text}
        title={text}
        height="12"
      />
    </button>
  );
};

export default toolBarMenuButton;
