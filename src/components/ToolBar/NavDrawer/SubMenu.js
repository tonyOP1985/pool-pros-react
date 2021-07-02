import React from 'react';

import styles from './SubMenu.module.css';

const subMenu = (props) => {
  const { menuData, clickHandler, index, openDrawers } = props;

  const menuLinks = menuData.menuItems.map((item, idx) => <li className={styles.navSubItem} key={idx}>{ item }</li>);

  const subMenuSmallStyles = openDrawers[index].subOpen ? `${styles.navSubmenuSm} ${styles.openSubMenu}` : `${styles.navSubmenuSm}`;

  return (
    <li className={styles.navMenuItemSm}>
      <div
        className={styles.navMenuItemLink}
        onClick={() => clickHandler(index)}
      >
        { menuData.menuTitle }
      </div>
      <ul className={subMenuSmallStyles}>
        <li className={styles.subNavClose} onClick={() => clickHandler(index)}>
          <span>&#10006;</span>
          <h4>{ menuData.menuTitle }</h4>
        </li>
        { menuLinks }
      </ul>
    </li>
  );
};

export default subMenu;
