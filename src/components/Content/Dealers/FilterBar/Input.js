import React from 'react';

import styles from './Input.module.css';

const input = (props) => {
  const { option, changeHandler } = props;

  return (
    <div className={styles.input}>
      <input
      className={styles.checkbox}
        type="checkbox"
        name={option.name}
        defaultChecked={option.isActive}
        onChange={changeHandler}
      />
      <span className={styles.inputSpan} />
      <label className={styles.label} htmlFor={option.name}>{ option.label }</label>
    </div>
  );
};

export default input;
