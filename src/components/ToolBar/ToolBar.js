import React from 'react';

import ToolBarTitle from './ToolBarTitle';

import styles from './ToolBar.module.css';

const toolBar = () => (
  <nav className={styles.toolBar}>
    <ToolBarTitle />

  </nav>
);

export default toolBar;
