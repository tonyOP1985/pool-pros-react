import React from 'react';

import Input from './Input';

import styles from './FilterResultsOptions.module.css';

const filterResultsOptions = (props) => {
  const { options, changeHandler, showOptions } = props;

  const optionInputs = options.map(option => <Input option={option} key={option.name} changeHandler={changeHandler} />);
  const optionClasses = showOptions ? `${styles.filterResultsOptions} ${styles.showOptions}` : `${styles.filterResultsOptions}`;

  return (
    <div className={optionClasses}>
      {optionInputs}
    </div>
  );
};

export default filterResultsOptions;
