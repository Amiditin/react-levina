import React from 'react';
import styles from './Contact.module.scss';
import clsx from 'clsx';

interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => (
  <div className={styles.contact}>Contact Component</div>
);
