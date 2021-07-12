import React from 'react';

import styles from './DealerCertifications.module.css';

const dealerCertifications = (props) => {
  const { dealer } = props;

  const certImage = [
    { name: 'Installation', image: 'star-installation-pro.png' },
    { name: 'Commercial', image: 'users-commercial-pro.png' },
    { name: 'Residential', image: 'home-residential-pro.png' },
    { name: 'Service', image: 'gear-service-pro.png' }
  ];

  const addCertImage = (cert) => {
    let newStr = (cert.replace(/pro/i, '')).trim();
    let imageUrl = certImage.find(i => newStr === i.name).image;
    return `./images/${imageUrl}`;
  };

  const certs = dealer.certifications.map((cert, index) => {
    return (
      <li key={index}>
        <img src={addCertImage(cert)} alt={cert} />
        <span>{ cert }</span>
      </li>
    );
  });

  return (
    <div className={styles.dealerCertifications}>
      <ul>{ certs }</ul>
    </div>
  );
};

export default dealerCertifications;
