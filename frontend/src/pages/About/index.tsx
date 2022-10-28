import React from 'react';

import { Collection } from '../../components';

import Info from './Info';
import Performance from './Performance';

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <main className="main">
      <Info />
      <Collection />
      <Performance />
    </main>
  );
};
