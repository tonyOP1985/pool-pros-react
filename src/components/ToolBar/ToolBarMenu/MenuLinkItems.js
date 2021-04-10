import React from 'react';

// import styles from './MenuLinkItems.module.css';

const menuLinkItems = (props) => {
  const { menuItems } = props;

  const menuItemsList = menuItems.map((item, index) => <li key={index} >{item}</li>)

  return (
    <ul>
      { menuItemsList }
    </ul>
  );
};

export default menuLinkItems;
