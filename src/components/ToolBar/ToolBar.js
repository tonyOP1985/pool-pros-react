import React from 'react';

import ToolBarTitle from './ToolBarTitle';
import ToolBarMenu from './ToolBarMenu/ToolBarMenu';
import ToolBarButton from '../Button/ToolBarButton';
import NavDrawerActivator from './NavDrawerActivator';

import styles from './ToolBar.module.css';

const toolBar = () => {
  return (
    <nav className={styles.toolBar}>
      <ToolBarTitle />
      <ToolBarMenu />
      <ToolBarButton />
      <NavDrawerActivator />
    </nav>
  )
};

export default toolBar;
