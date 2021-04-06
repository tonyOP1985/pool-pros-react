import React from 'react';

import TopBarButton from './TopBarButton/TopBarButton';
import TopBarIconButton from './TopBarIconButton/TopBarIconButton';

import styles from './TopBar.module.css';

const topBar = () => (
  <div className={styles.topBar}>
    <div className={styles.topBarContainer}>
      <TopBarButton text="Dealers and Distributors" />
      <TopBarButton text="Commercial Service">
        <TopBarIconButton />
      </TopBarButton>
    </div>
  </div>
);

export default topBar;
