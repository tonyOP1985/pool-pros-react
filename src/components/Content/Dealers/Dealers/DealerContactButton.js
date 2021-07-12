import React from 'react';

import styles from './DealerContactButton.module.css';

const dealerContactButton = () => {
  return (
    <div className={styles.dealerContactButton}>
      <p>Can't talk? Click below to send an email.</p>
      <button>
        <img src="./images/email-icon.png" alt="email" />
        <span>Contact this Pro</span>
      </button>
    </div>
  );
};

export default dealerContactButton;
