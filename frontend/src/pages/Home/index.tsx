import React from 'react';
import ChoiceCompany from './ChoiceCompany';

import Decor from './Decor';
import Gallery from './Gallery';
import NewCollection from './NewCollection';
import Slider from './Slider';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <main className="main">
      <Slider />
      <NewCollection />
      <Decor />
      <Gallery />
      <ChoiceCompany />
    </main>
  );
};
