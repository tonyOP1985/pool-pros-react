import React from 'react';

import styles from './TopFooter.module.css';

const topFooter = () => {

  const socialMediaIconsData = [
    { text: 'Facebook', src: './images/facebook-icon.png', className: 'facebook' },
    { text: 'Twitter', src: './images/twitter-icon.png', className: 'twitter' },
    { text: 'YouTube', src: './images/youtube-icon.png', className: 'youtube' },
  ];

  const socialMediaIcons = socialMediaIconsData.map(icon => {
    return (
      <a key={icon.text} href="_blank">
        <img src={icon.src} alt={icon.text} title={icon.title} className={styles[icon.className]}/>
      </a>
    );
  });

  return (
    <div className={styles.topFooter}>
      <div className={styles.logo}>
        <img src="./images/pool-pros-logo-footer.png" alt="Pool Pros" title="Pool Pros" />
      </div>
      <div className={styles.socialMedia}>
        <h1>Connect with us</h1>
        <div className={styles.socialIcons}>
          { socialMediaIcons }
        </div>
      </div>
    </div>
  );
};

export default topFooter;
