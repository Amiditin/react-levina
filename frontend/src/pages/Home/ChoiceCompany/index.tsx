import clsx from 'clsx';
import React from 'react';
import styles from './ChoiceCompany.module.scss';

import { choiceCompany } from '../../../utils/constants';

interface ChoiceCompanyProps {}

const ChoiceCompany: React.FC<ChoiceCompanyProps> = () => {
  console.log(styles[choiceCompany[0].type]);

  return (
    <section className={styles.choiceCompany}>
      <div className="container">
        <h3 className={styles.title}>Как выбрать компанию</h3>
        <div className={styles.items}>
          <div className={styles.box}>
            <div className={clsx(styles.item, styles[choiceCompany[0].type])}>
              <img className={styles.img} src={choiceCompany[0].imgUrl} alt="icon" />
              <h6 className={styles.name}>{choiceCompany[0].name}</h6>
              <p className={styles.text}>{choiceCompany[0].text}</p>
            </div>
            <div className={clsx(styles.item, styles[choiceCompany[1].type])}>
              <img className={styles.img} src={choiceCompany[1].imgUrl} alt="icon" />
              <h6 className={styles.name}>{choiceCompany[1].name}</h6>
              <p className={styles.text}>{choiceCompany[1].text}</p>
            </div>
          </div>
          <div className={clsx(styles.item, styles[choiceCompany[2].type])}>
            <img className={styles.img} src={choiceCompany[2].imgUrl} alt="icon" />
            <h6 className={styles.name}>{choiceCompany[2].name}</h6>
            <p className={styles.text}>{choiceCompany[2].text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoiceCompany;
