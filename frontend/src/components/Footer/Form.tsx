import React from 'react';
import styles from './Footer.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button, FormError, Input } from '../';
interface IFormInput {
  email: string;
}

const Form: React.FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IFormInput>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);

    // await addDoc(collection(database, 'subscribe-emeil'), {
    //   ...data,
    //   date: getCurrentDate(),
    // }).then(alert('Вы подписались на рассылку!'));
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email: '' });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.input}>
        <h6 className={styles.title}>Подписаться на рассылку</h6>
        <Input<IFormInput>
          placeholder="example@gmail.com"
          type="email"
          label="email"
          register={register}
          rules={{
            required: 'Почта обязательна к заполнению',
            minLength: { value: 5, message: 'Минимум 7 символов' },
          }}
        />
        <FormError error={errors.email} />
      </div>
      <Button state="black" type="submit">
        Подтвердить
      </Button>
    </form>
  );
};

export default Form;
