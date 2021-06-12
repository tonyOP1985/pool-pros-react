import React from 'react';

import styles from './FilterBar.module.css';

const filterBar = (props) => {
  const { dealersLen } = props;

  const text = dealersLen > 1 ? 'dealers' : 'dealer';

  return (
    <div className={styles.filterResultsContainer}>
      <div className={styles.filterResultsText}>
        <h1>{ dealersLen } { text }</h1>
        <h1>Filter Results</h1>
      </div>
    </div>
  );
};

export default filterBar;
