import React from 'react'

import styles from './CallToAction.module.css';

const callToAction = (props) => {
  const { image, action, text, index } = props;

  return (
    <li className={styles.listItem}>
      <img
        className={styles.circlImg}
        src={`/images/${image}`}
        alt={`Step-${index + 1}`}
      />
      <div className={styles.actionText} >
        <h1>{ action }</h1>
        <p>{ text }</p>
      </div>
    </li>
  );
};

export default callToAction;
