import React from 'react';

import Input from './Input';

import styles from './FilterResultsOptions.module.css';

const filterResultsOptions = (props) => {
  const { options, changeHandler } = props;

  const optionInputs = options.map(option => <Input option={option} key={option.name} changeHandler={changeHandler} />);

  return (
    <div className={styles.filterResultsOptions}>
      {optionInputs}
    </div>
  );
};

export default filterResultsOptions;
