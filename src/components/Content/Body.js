import React from 'react';

import Hero from './Hero/Hero';
import CallToActions from './CallToAction/CallToActions';

const body = () => {
  const actionsText = [
    {
      image: '1-circle.png',
      action: 'Choose a pro',
      text: 'Click "Find a Pro" at the top, then choose a pro from the list below.',
    },
    {
      image: '2-circle.png',
      action: 'Contact a pro',
      text: 'Email a pro to make an appointment for pool & spa services or installation.',
    },
    {
      image: '3-circle.png',
      action: 'A pro visits',
      text: 'A pro will visit your home and assess your pool & spa needs.',
    },
  ];

  return (
    <main>
      <Hero />
      <CallToActions actions={actionsText} />
    </main>
  );
};

export default body;
