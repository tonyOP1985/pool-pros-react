import React from 'react';

import styles from './Hero.module.css';

const hero = () => (
  <section className={styles.jumbotron} >
    <div className={styles.jumbotronOverlay}></div>
    {/* <div class="jumbotron-overlay">
      <div class="jumbotron__message-main">
        <h1>Is your pool ready for Summer?</h1>
      </div>
      <div class="jumbotron__message-tag">
        <p>A pool pro is ready to help!</p>
      </div>
      <div class="jumbotron__message-hr">
        <hr>
      </div>
      <div class="jumbotron__message-sub">
        <p>Choose a pro that's close to your home from the list below.</p>
      </div>
    </div> */}
  </section>
);

export default hero;
