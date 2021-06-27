import React from 'react';

import DealerCard from './DealerCard';


import styles from './Dealers.module.css';

const dealers = (props) => {
  const { dealers } = props;

  const dealersList = dealers.map(dealer => {
    return <DealerCard key={dealer.data.companyID} dealer={dealer.data} />;
  });

  return (
    <div className={styles.dealers}>
      { dealersList }
    </div>
  );
};

export default dealers;
