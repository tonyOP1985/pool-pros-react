import React from 'react'

import SubMenu from './SubMenu';

import menuLinks from '../../../menuLinks';

import styles from './NavDrawer.module.css';

const navDrawer = (props) => {
  const { activator, clickHandler, subNavClickHandler, openDrawers } = props;

  const navDrawerClasses = activator ? `${styles.navDrawer} ${styles.open}` : `${styles.navDrawer}`;

  const subMenus = menuLinks.map((item, index) => {
    return (
      <SubMenu
        key={item.id}
        menuData={item}
        clickHandler={subNavClickHandler}
        index={index}
        openDrawers={openDrawers}
      />
    );
  }); 

  return (
    <div className={navDrawerClasses}>
      <ul>
        <li className={styles.navClose}>
          <span onClick={() => clickHandler(false)}>&#10006;</span>
          <a href="_blank">Home</a>
        </li>
        { subMenus }
      </ul>
    </div>
  );
};

export default navDrawer;
