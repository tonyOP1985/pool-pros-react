import React from 'react';

import styles from './Input.module.css';

const input = (props) => {
  const { option } = props;

  return (
    <div className={styles.input}>
      <input
        className={styles.checkbox}
        type="checkbox"
        name="service"
        value={option}
      />
      <span className={styles.inputSpan} />
      <label className={styles.label} htmlFor="service">{ option }</label>
    </div>
  );
};

export default input;
