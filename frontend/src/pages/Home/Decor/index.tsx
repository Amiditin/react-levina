import React from 'react';
import styles from './Decor.module.scss';

interface DecorProps {}

const Decor: React.FC<DecorProps> = () => {
  return (
    <section className={styles.decor}>
      <img className={styles.bg} src="/img/content/decor-bg.jpg" alt="background" />
      <div className="container">
        <div className={styles.info}>
          <h2 className={styles.title}>Выделяем бюджет</h2>
          <p className={styles.text}>
            Сколько стоит хорошая кухня? Всё зависит от многих параметров. Первый — размеры.
            Логично, что чем больше площадь, тем дороже. Второй — материалы. Когда речь идет о
            качественных материалах, каменной столешнице, европейской фурнитуре, а не их дешевых
            аналогах, цена тоже возрастает.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Decor;
