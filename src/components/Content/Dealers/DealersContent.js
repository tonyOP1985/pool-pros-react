import React, { useState } from 'react';

import dealers from './../../../dealers.json';

import FilterBar from './FilterBar/FilterBar';

import styles from './DealersContent.module.css';

const DealerContent = () => {
  const [checkedOptions, setCheckedOptions] = useState([]);
  console.log(dealers.dealers);
  const addCheckedOptions = (option) => {
    if (checkedOptions.includes(option)) {
      const index = checkedOptions.indexOf(option);
      const updatedOptions = checkedOptions.splice(index, 1);
      setCheckedOptions(updatedOptions);
      return;
    }

    setCheckedOptions([...checkedOptions, option]);
  };

  const filteredDealers = (options) => {
    if (!checkedOptions.length) return dealers.dealers;

    return dealers.dealers.filter((pro) => {
      return checkedOptions.every(item => pro.data.certifications.includes(item));
    });
  };

  const filteredDealersLenght = filteredDealers().length;

  return (
    <section className={styles.dealerContent}>
      <FilterBar dealersLen={filteredDealersLenght} />
    </section>
  );
};

export default DealerContent;
