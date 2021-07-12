import React from 'react';

import styles from './DealerPhoneNumber.module.css';

const dealerPhoneNumber = (props) => {
  const { dealer } = props;

  const formattedNumber = () => dealer.phone1.replace(/-/g, '.');

  return (
    <div className={styles.phoneWrapper}>
      <button className={styles.dealerInfoPhone}>
        <img src="./images/phone-icon-mobile.png" alt="phone" />
        <span>Tap to call</span>
        <span>{ formattedNumber() }</span>
      </button>
      <div className={styles.dealerInfoPhoneMedium}>
        <img src="./images/phone-icon-desktop.png" alt="phone" />
        <span>{ formattedNumber() }</span>
      </div>
    </div>
  );
};

export default dealerPhoneNumber;
