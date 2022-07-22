import React from 'react';
import styles from './Auth.module.scss';
import clsx from 'clsx';
import AuthForm from './Form';
import { FormCondition, IContentOptions } from '../types';

const Auth: React.FC = () => {
  const [formCondition, setFormCondition] = React.useState<FormCondition>('login');

  const contentOptions = React.useMemo<IContentOptions>(() => {
    switch (formCondition) {
      case 'login':
        return {
          title: 'LEVINA KITCHEN',
          text: 'Войдите на сайт, чтобы иметь возможность создавать и комментировать посты',
        };
      case 'registration':
        return { title: 'Регистрация' };
      case 'recovery':
        return { title: 'Восстановление пароля' };
    }
  }, [formCondition]);

  return (
    <div className={styles.content}>
      <h4 className={styles.title}>{contentOptions.title}</h4>
      {contentOptions.text && <p className={styles.text}>{contentOptions.text}</p>}
      <AuthForm formCondition={formCondition} setFormCondition={setFormCondition} />
      {formCondition !== 'registration' && (
        <div className={styles.bottom}>
          <p className={styles.subtitle}>Ещё нет аккаунта на сайте?</p>
          <span
            className={clsx(styles.click, styles.subtitle)}
            onClick={() => setFormCondition('registration')}>
            Зарегестрироваться
          </span>
        </div>
      )}
    </div>
  );
};

export default Auth;
