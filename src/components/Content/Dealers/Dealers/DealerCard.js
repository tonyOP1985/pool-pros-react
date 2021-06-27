import React from 'react';

import DealerPhoneNumber from './DealerPhoneNumber';
import DealerContactButton from './DealerContactButton';
import DealerBusinessHours from './DealerBusinessHours';
import DealerCertifications from './DealerCertifications';

import styles from './DealerCard.module.css';
/**
 * 
 * DealerCard
 *    Certifications
 */

const dealerCard = (props) => {
  const { dealer } = props;

  return (
    <div className={styles.dealerCard}>
      <h1 className={styles.dealerCardHeader}>{ dealer.name }</h1>
      <hr />
      <DealerPhoneNumber dealer={dealer} />
      <DealerContactButton />
      <DealerBusinessHours dealer={dealer} />
      <DealerCertifications dealer={dealer} />
    </div>
    // Certifications
  );
};

export default dealerCard;
