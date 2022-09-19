import React from 'react';
import styles from './Contact.module.scss';
import { socials, contacts } from '../../utils/constants';

import ContactForm from './Form';
import ContactMap from './Map';

interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
  return (
    <main className="main">
      <ContactMap />
      <section className={styles.contact}>
        <div className="container">
          <h3 className={styles.title}>Контакты</h3>
          <div className={styles.content}>
            <ul className={styles.social}>
              {socials.map((social, index) => (
                <li className={styles.socialItem} key={index}>
                  <a className={styles.link} href={social.linkUrl} target="_blank" rel="noreferrer">
                    <img
                      className={styles.icon}
                      src={social.iconUrl}
                      alt={social.name}
                      title={social.title}
                    />
                  </a>
                </li>
              ))}
            </ul>
            <p className={styles.text}>
              Нашли опечатку? <br />
              Остались вопросы? <br />
              Напишите нам, ответим в ближайшее время! <br />
              Общий отдел:
            </p>
            <a className={styles.phone} href={`tel:+7${contacts.phone}`}>
              {contacts.phoneCustom}
            </a>
            <div className={styles.street}>{contacts.street}</div>
            <div className={styles.city}>{contacts.city}</div>
            <a className={styles.email} href={`mailto:${contacts.email}`}>
              <img src="/img/tools-icons/envelope.svg" alt="envelope" />
              {contacts.email}
            </a>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};
