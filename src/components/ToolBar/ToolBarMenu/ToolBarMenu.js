import React from 'react';

import ToolBarMenuItem from './ToolBarMenuItem';

import styles from './ToolBarMenu.module.css';

import menuLinks from '../../../menuLinks';

const toolBarMenu = () => {
  const menuItems = menuLinks.map(link => {
    return (
      <div className={styles.toolBarMenuItems} key={link.id}>
        <ToolBarMenuItem link={link} />
      </div>
    );
  });

  return (
    <div className={styles.toolBarMenu}>
      {menuItems}
    </div>
  );
};

export default toolBarMenu;
