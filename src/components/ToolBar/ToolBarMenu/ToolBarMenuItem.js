import React from 'react';

import styles from './ToolBarMenuItem.module.css';

const toolBarMenuItem = (props) => {
  const { link } = props;

  const menuItemsList = link.menuItems.map((item, index) => <li key={index} >{item}</li>)

  return (
    <div className={styles.toolBarItem}>
      <button className={styles.toolBarMenuButton}>
        <span>{link.menuTitle}</span>
        <img
          src="./images/down-arrow.png"
          alt={link.menuTitle}
          title={link.menuTitle}
          height="12"
        />
      </button>
      <ul className={styles.meunLinkItem}>
        { menuItemsList }
      </ul>
    </div>
  )
};

export default toolBarMenuItem;
