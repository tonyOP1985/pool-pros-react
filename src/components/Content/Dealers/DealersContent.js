import React, { useState } from 'react';

import dealers from './../../../dealers.json';

import FilterBar from './FilterBar/FilterBar';

import styles from './DealersContent.module.css';

const DealerContent = () => {
  const [options, setOptions] = useState([
    { name: 'service', label: 'Service', isActive: false },
    { name: 'installation', label: 'Installation', isActive: false },
    { name: 'residential', label: 'Residential', isActive: false },
    { name: 'commercial', label: 'Commercial', isActive: false },
  ]);

  const filteredDealers = () => {
    const checkedOptions = options.filter(({ isActive }) => isActive);

    if (!checkedOptions.length) return dealers.dealers;

    return dealers.dealers.filter((pro) => {
      return checkedOptions.every(({ label }) => pro.data.certifications.includes(`${label} Pro`));
    });
  };

  const filteredDealersLength = filteredDealers().length;

  const handleInputChange = (event) => {
    const { name } = event.target;

    const idx = options.findIndex(opt => opt.name === name);
    setOptions(options.map((option, index) => {
      return index === idx ? { ...option, isActive: !option.isActive } : option;
    }));
  };

  return (
    <section className={styles.dealerContent}>
      <FilterBar dealersLen={filteredDealersLength} options={options} changeHandler={handleInputChange} />
    </section>
  );
};

export default DealerContent;
