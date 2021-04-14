import React from 'react';

import CallToAction from './CallToAction';

import styles from './CallToActions.module.css';

const callToActions = (props) => {
  const { actions } = props;
  
  const callsToAction = actions.map(({ image, text, action }, index) => {
    return (
      <CallToAction
        key={index}
        image={image}
        text={text}
        action={action}
        index={index}
      />
    );
  });

  return (
    <section className={styles.steps} >
      <ul className={styles.step} >{ callsToAction }</ul>
    </section>
  );
};

export default callToActions;
