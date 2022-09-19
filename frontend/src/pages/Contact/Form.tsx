import React from 'react';
import styles from './Contact.module.scss';
import { useForm } from 'react-hook-form';

import { Button, FormError, Input, Textarea } from '../../components';

interface IFormСontact {
  name: string;
  email: string;
  text: string;
}

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IFormСontact>({ mode: 'onBlur' });

  const onSubmit = async () => {
    // await addDoc(collection(database, 'contact-messages'), {
    //   ...data,
    //   date: getCurrentDate(),
    // }).then(alert('Ваше сообщение отправлено'));
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: '', email: '', text: '' });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <Input<IFormСontact>
            placeholder="ФИО"
            label="name"
            register={register}
            rules={{
              required: 'Имя обязательно к заполнению',
              minLength: { value: 3, message: 'Минимум 3 символов' },
            }}
          />
          <FormError error={errors.name} />
        </div>
        <div className={styles.input}>
          <Input<IFormСontact>
            placeholder="Почта"
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
      </div>
      <div className={styles.textarea}>
        <Textarea<IFormСontact>
          placeholder="Сообщение"
          label="text"
          register={register}
          rules={{
            required: 'Сообщение обязателено к заполнению',
            minLength: { value: 40, message: 'Минимум 30 символов' },
          }}
        />
        <FormError error={errors.text} />
      </div>
      <Button state="black" type="submit">
        Отправить
      </Button>
    </form>
  );
};

export default Form;
