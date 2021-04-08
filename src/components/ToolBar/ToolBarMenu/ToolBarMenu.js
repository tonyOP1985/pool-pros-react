import React from 'react';

import ToolBarMenuItem from './ToolBarMenuItem';

import styles from './ToolBarMenu.module.css';

import menuLinks from '../../../menuLinks';

const toolBarMenu = () => {
  const menuItems = menuLinks.map(link => 
    <ToolBarMenuItem key={link.id} text={link.menuTitle} />
  );

  return (
    <div className={styles.toolBarMenu}>
      {menuItems}
    </div>
  );
};

export default toolBarMenu;
