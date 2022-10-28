import React from 'react';
import styles from './NewCollection.module.scss';

import { Collection } from '../../../components';

interface NewCollectionProps {}

const NewCollection: React.FC<NewCollectionProps> = () => {
  return (
    <section className={styles.newCollection}>
      <div className="container-fluid">
        <h3 className={styles.title}>Новинки в нашей коллекции</h3>
        <p className={styles.text}>
          Дизайн кухни должен передавать ваш характер, ведь именно в этой комнате собирается вся
          семья и гости.
        </p>
      </div>
      <Collection />
    </section>
  );
};

export default NewCollection;
