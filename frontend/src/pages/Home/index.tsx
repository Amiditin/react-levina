import React from 'react';
import styles from './Home.module.scss';
import Slider from './Slider';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <main className="main">
      <Slider />
    </main>
  );
};
