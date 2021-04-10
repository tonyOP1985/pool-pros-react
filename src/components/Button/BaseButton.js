import React from 'react';

import styles from './BaseButton.module.css';

const baseButton = () => {
  const largeBtnText = 'Find A Pool Pro';
  const smallBtnText  = 'Find a Pro';

  return (
    <button className={styles.baseButton}>
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
