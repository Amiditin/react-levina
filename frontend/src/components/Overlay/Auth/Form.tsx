import React from 'react';
import styles from './Auth.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../../hooks/redux';
import { loginUser, registerUser } from '../../../redux/auth/thunk';
import { Button, FormError, Input } from '../../';
import { FormCondition, IButtonsOptions, IFormAuth } from '../types';

interface FormAuthProps {
  formCondition: FormCondition;
  setFormCondition: React.Dispatch<React.SetStateAction<FormCondition>>;
}

const FormAuth: React.FC<FormAuthProps> = ({ formCondition, setFormCondition }) => {
  const dispatch = useAppDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormAuth>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<IFormAuth> = (data) => {
    const { email, fullName, password, passwordAgain } = data;
    switch (formCondition) {
      case 'login':
        if (password) dispatch(loginUser({ email, password }));
        break;
      case 'registration':
        if (password !== passwordAgain) return alert('Пароли не совпадают!');
        if (fullName && password) dispatch(registerUser({ email, fullName, password }));
        break;
      case 'recovery':
        // if (password) dispatch(loginUser({ email, password }));
        break;
    }
  };

  React.useEffect(() => {
    reset({ email: '', fullName: '', password: '', passwordAgain: '' });
  }, [formCondition, reset]);

  const buttonsOptions = React.useMemo<IButtonsOptions>(() => {
    switch (formCondition) {
      case 'login':
        return {
          formCondition: 'recovery',
          firstButton: 'Войти',
          secondButton: 'Забыли пароль?',
        };
      case 'registration':
        return {
          formCondition: 'login',
          firstButton: 'Зарегистрироваться',
          secondButton: 'Отмена?',
        };
      case 'recovery':
        return {
          formCondition: 'login',
          firstButton: 'Сбросить пароль',
          secondButton: 'Отмена?',
        };
    }
  }, [formCondition]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {formCondition === 'registration' && (
        <div className={styles.input}>
          <Input<IFormAuth>
            placeholder="Имя на сайте"
            label="fullName"
            register={register}
            rules={{
              required: 'Имя обязательно к заполнению',
              minLength: { value: 3, message: 'Минимум 3 символов' },
            }}
          />
          <FormError error={errors.fullName} />
        </div>
      )}
      <div className={styles.input}>
        <Input<IFormAuth>
          placeholder="Ваш e-mail"
          type="email"
          label="email"
          register={register}
          rules={{
            required: 'Почта обязательна к заполнению',
            minLength: { value: 7, message: 'Минимум 7 символов' },
          }}
        />
        <FormError error={errors.email} />
      </div>
      {formCondition !== 'recovery' && (
        <div className={styles.input}>
          <Input<IFormAuth>
            placeholder="Пароль"
            type="password"
            label="password"
            register={register}
            rules={{
              required: 'Пароль обязателен к заполнению',
              minLength: { value: 5, message: 'Минимум 5 символов' },
            }}
          />
          <FormError error={errors.password} />
        </div>
      )}
      {formCondition === 'registration' && (
        <div className={styles.input}>
          <Input<IFormAuth>
            placeholder="Пароль ещё раз"
            type="password"
            label="passwordAgain"
            register={register}
            rules={{
              required: 'Пароль обязателен к заполнению',
              minLength: { value: 5, message: 'Минимум 5 символов' },
            }}
          />
          <FormError error={errors.password} />
        </div>
      )}
      <div className={styles.buttons}>
        <Button state="black" type="submit">
          {buttonsOptions.firstButton}
        </Button>
        <span
          className={styles.click}
          onClick={() => setFormCondition(buttonsOptions.formCondition)}>
          {buttonsOptions.secondButton}
        </span>
      </div>
    </form>
  );
};

export default FormAuth;
