import React from 'react';

import ToolBarTitle from './ToolBarTitle';
import ToolBarMenu from './ToolBarMenu/ToolBarMenu';
import BaseButton from '../Button/BaseButton';

import styles from './ToolBar.module.css';

const toolBar = () => {
  return (
    <nav className={styles.toolBar}>
      <ToolBarTitle />
      <ToolBarMenu />
      <BaseButton />
    </nav>
  )
};

export default toolBar;
