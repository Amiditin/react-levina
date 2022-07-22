import React from 'react';
import styles from './Footer.module.scss';

import { contacts, menu, socials } from '../../utils/constants';
import { Link } from 'react-router-dom';
import FooterForm from './Form';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className="container">
          <div className={styles.content}>
            <div className={styles.info}>
              <h6 className={styles.title}>Контакты</h6>
              <p className={styles.text}>
                Если у вас отались вопросы, то напишите нам, ответим в ближайшее время!
              </p>
              <a className={styles.email} href={`mailto:${contacts.email}`}>
                <img src="/img/tools-icons/envelope.svg" alt="envelope" />
                {contacts.email}
              </a>
              <FooterForm />
            </div>
            <ul className={styles.social}>
              {socials.map((social, index) => (
                <li key={index}>
                  <a className={styles.link} href={social.linkUrl} target="_blank" rel="noreferrer">
                    <img src={social.iconUrl} alt={social.name} />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
            <nav className={styles.menu}>
              <ul>
                {menu.map((item, index) => (
                  <li key={index}>
                    <Link className={styles.link} to={item.path}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className="container">
          <p>{contacts.copyright}</p>
        </div>
      </div>
    </footer>
  );
};
