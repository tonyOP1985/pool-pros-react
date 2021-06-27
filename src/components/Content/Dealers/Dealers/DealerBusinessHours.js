import React from 'react';

import styles from './DealerBusinessHours.module.css';

const dealerBusinessHours = (props) => {
  const { dealer } = props;
  const { weekHours } = dealer;

  const proClosed = (hours) => {
    if (hours === '') return '- Closed';
    else if (hours === 'On Call') return '- On Call';
    else return hours;
  };

  return (
    <div className={styles.dealerBusinessHours}>
      <h1>Business Hours</h1>
      <ul>
        <li>Weekdays { proClosed(weekHours.mon) }</li>
        <li>Saturdays { proClosed(weekHours.sat) }</li>
        <li>Sundays { proClosed(weekHours.sun) }</li>
      </ul>
    </div>
  );
};

export default dealerBusinessHours;
