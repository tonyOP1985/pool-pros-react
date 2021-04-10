import React from 'react';

import styles from './ToolBarButton.module.css';

const baseButton = () => {
  const largeBtnText = 'Find A Pool Pro';
  const smallBtnText  = 'Find a Pro';

  return (
    <button className={styles.toolBarButton}>
      <img
        src="images/location-icon.png"
        alt={largeBtnText}
        title={largeBtnText}
      />
      <span className={styles.btnTextLarge} >{largeBtnText}</span>
      <span className={styles.btnTextSmall} >{smallBtnText}</span>
    </button>
  );
};

export default baseButton;
