import React, { useState } from 'react';

import ToolBarTitle from './ToolBarTitle';
import ToolBarMenu from './ToolBarMenu/ToolBarMenu';
import ToolBarButton from '../Button/ToolBarButton';
import NavDrawerActivator from './NavDrawerActivator';
import NavDrawer from './NavDrawer/NavDrawer';

import styles from './ToolBar.module.css';

const ToolBar = () => {
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState([
    { subOpen: false },
    { subOpen: false },
    { subOpen: false },
    { subOpen: false },
  ]);

  const onClickHandler = (bool) => setOpen(bool);
  const openNavDrawerHandler = (index) => {
    const show = [...openDrawer];
    show[index].subOpen = !show[index].subOpen;
    setOpenDrawer(show);
  };

  return (
    <header className={styles.toolBar}>
      <ToolBarTitle />
      <ToolBarMenu />
      <ToolBarButton />
      <NavDrawerActivator clickHandler={onClickHandler} />
      <NavDrawer
        activator={open}
        clickHandler={onClickHandler}
        subNavClickHandler={openNavDrawerHandler}
        openDrawers={openDrawer}
      />
    </header>
  )
};

export default ToolBar;
