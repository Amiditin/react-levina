import React from 'react';

import Decor from './Decor';
import NewCollection from './NewCollection';
import Slider from './Slider';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <main className="main">
      <Slider />
      <NewCollection />
      <Decor />
    </main>
  );
};
