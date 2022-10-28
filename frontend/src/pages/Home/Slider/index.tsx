import React from 'react';
import styles from './Slider.module.scss';
import clsx from 'clsx';

import { slides } from '../../../utils/constants';

const Slider: React.FC = () => {
  const [activeSlide, setActiveSlide] = React.useState(1);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (activeSlide === 2) {
        setActiveSlide(0);
      } else {
        setActiveSlide(activeSlide + 1);
      }
    }, 10000);

    return () => clearInterval(timer);
  });

  return (
    <section className={styles.top}>
      <div className={styles.inner}>
        <div className={styles.slider}>
          {slides.map((slide, index) => (
            <div
              className={clsx(styles.slide, index !== activeSlide && styles.invisible)}
              key={index}>
              <img className={styles.background} src={slide.bgUrl} alt="background" />
              <div className={styles.item}>
                <img className={styles.img} src={slide.imgUrl} alt="img" />
                <div className={styles.info}>
                  <h2 className={styles.title}>{slide.name}</h2>
                  <p className={styles.text}>{slide.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ul className={styles.dots}>
          {Array.from({ length: 3 }, (_, index) => (
            <li className={styles.dot} key={index}>
              <button
                className={clsx(styles.button, index === activeSlide && styles.active)}
                onClick={() => setActiveSlide(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Slider;
