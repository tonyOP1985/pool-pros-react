import React from 'react';

import FilterResultsOptions from './FilterResultsOptions';

import styles from './FilterBar.module.css';

const filterBar = (props) => {
  const { dealersLen, options, changeHandler, toggleShowOptions, showOptions } = props;

  const text = dealersLen > 1 ? 'dealers' : 'dealer';

  const filterResultsClasses = showOptions ? `${styles.filterResultsContainer} ${styles.addHeight}` : `${styles.filterResultsContainer}`;

  return (
    <div id="filterBar" className={filterResultsClasses}>
      <div className={`${styles.filterResultsText} ${styles.large}`}>
        <h1 className={styles.filterResultsTextNumber}>
          { dealersLen } { text }
        </h1>
        <h1 className={styles.filterResultsTextTitle}>Filter Results</h1>
      </div>
      <div className={`${styles.filterResultsText} ${styles.small}`}>
        <h1 className={styles.filterResultsTextNumber}>
          { dealersLen } { text }
        </h1>
        <button className={styles.filterButton} onClick={toggleShowOptions}>
          <h4>Filter Results</h4>
          <span className={styles.filterIcon}>&#9662;</span>
        </button>
      </div>
      <FilterResultsOptions
        options={options}
        toggleOptions={showOptions}
        changeHandler={changeHandler}
        showOptions={showOptions}
      />
    </div>
  );
};

export default filterBar;
