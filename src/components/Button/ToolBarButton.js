import React from 'react';
import { Link } from 'react-scroll';

import styles from './ToolBarButton.module.css';

const baseButton = () => {
  const largeBtnText = 'Find A Pool Pro';
  const smallBtnText  = 'Find a Pro';

  return (
    <Link
      to="filterBar"
      smooth={true}
      duration={500}
      className={styles.toolBarButton}
    >
      <img
        src="./images/location-icon.png"
        alt={largeBtnText}
        title={largeBtnText}
      />
      <span className={styles.btnTextLarge} >{largeBtnText}</span>
      <span className={styles.btnTextSmall} >{smallBtnText}</span>
    </Link>
  );
};

export default baseButton;
