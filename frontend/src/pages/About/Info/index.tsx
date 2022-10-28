import React from 'react';
import styles from './Info.module.scss';

interface InfoProps {}

const Info: React.FC<InfoProps> = () => {
  return (
    <section className={styles.info}>
      <img className={styles.bg} src="/img/content/about-bg.jpg" alt="bg" />
      <div className={styles.prev}>
        <div className="container">
          <h2 className={styles.prevTitle}>О нас</h2>
        </div>
      </div>
      <div className={styles.content}>
        <div className="container">
          <h3 className={styles.title}>
            Когда вы выбираете стиль кухни, нужно определиться насчет дизайн-проекта.
          </h3>
          <div className={styles.text}>
            <p>
              Как правило, обратиться к готовым рещениям подходит владельцам стандартных планировок:
              без дополнительных выступов, углов и необычных размеров. Также готовые решения
              выбирают покупатели, которые не планируют встроенную бытовую технику. Соответственно,
              такой подход дешевле.
            </p>
            <p>
              Индивидуальный дизайн-проект предпочтительнее для тех, кому хочется всё организовать
              под себя: встроить технику, установить дополнительные ящики, шкафчики, полочки и
              максимально рационально использовать пространство. Если вам ближе второй вариант, то
              дизайнер студии должен проконсультировать по всем вопросам — от выбора материалов до
              вытяжки. Ребята поделились своим опытом.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
