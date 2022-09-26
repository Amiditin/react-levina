import React from 'react';
import NewCollection from './NewCollection';

import Slider from './Slider';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <main className="main">
      <Slider />
      <NewCollection />
    </main>
  );
};
