import React from 'react';
import { performances } from '../../../utils/constants';
import styles from './Performance.module.scss';

interface PerformanceProps {}

const Performance: React.FC<PerformanceProps> = () => {
  return (
    <section className={styles.performance}>
      <img className={styles.bg} src="/img/content/performance-bg.jpg" alt="bg" />
      <div className="container-fluid">
        <div className={styles.inner}>
          <img className={styles.img} src="/img/content/performance-decor.jpg" alt="img-decor" />
          <div className={styles.content}>
            <h3 className={styles.title}>Качество работы</h3>
            <p className={styles.text}>
              Когда установщики просят проверить качество работы, нужно обратить внимание даже на
              мелкие детали. Итак, вам нужно осмотреть:
            </p>
            <ul>
              {performances.map((item, index) => (
                <li className={styles.item} key={index}>
                  <div className={styles.itemContent}>
                    <p>{item.text}</p>
                    <span>{item.percent}</span>
                  </div>
                  <div className={styles.line} style={{ width: item.percent }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
