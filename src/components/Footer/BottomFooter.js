import React from 'react';

import styles from './BottomFooter.module.css';

const bottomFooter = () => {
  const linksText = [
    { text: `${String.fromCharCode(169)} 2017 Pool Pros` }, // 169 is copy right symbol - &#169;
    { text: 'Privacy Policy' },
    { text: 'Terms and Conditions' },
  ];

  const links = linksText.map((link, index) => {
    return (
      <li key={index}>
        <a href="_blank">{ link.text }</a>
      </li>
    );
  });

  return (
    <div className={styles.bottomFooter}>
      <div className={styles.bottomFooterCommercial}>
        <ul>
          <li>
            <a href="_blank">Dealers and Distributors</a>
          </li>
          <li>
            <a href="_blank">
              Commercial Service
              <img src="/images/action-commercial-icon.png" alt="Commerical Login" title="Commerical Login" />
            </a>
          </li>
        </ul>
      </div>
      
      <div className={styles.bottomFooterLinks}>
        <ul>{ links }</ul>
      </div>
    </div>
  );
};

export default bottomFooter;
