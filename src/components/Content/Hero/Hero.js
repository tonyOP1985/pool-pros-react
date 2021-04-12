import React from 'react';

import styles from './Hero.module.css';

const hero = () => (
  <section className={styles.jumbotron} >
    <div className={styles.jumbotronOverlay}>
      <div className={styles.jumbotronMessageMain}>
        <h1>Is your pool ready for Summer?</h1>
      </div>
      <div className={styles.jumbotronMessageTag}>
        <p>A pool pro is ready to help!</p>
      </div>
      <div className={styles.jumbotronMessageHR}>
        <hr />
      </div>
      <div className={styles.jumbotronMessageSub}>
        <p>Choose a pro that's close to your home from the list below.</p>
      </div>
    </div>
  </section>
);

export default hero;
