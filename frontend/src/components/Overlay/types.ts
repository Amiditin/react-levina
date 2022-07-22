export type FormCondition = 'login' | 'registration' | 'recovery';

export interface IButtonsOptions {
  formCondition: FormCondition;
  firstButton: 'Войти' | 'Зарегистрироваться' | 'Сбросить пароль';
  secondButton: 'Забыли пароль?' | 'Отмена?';
}

export interface IFormAuth {
  email: string;
  fullName?: string;
  password?: string;
  passwordAgain?: string;
}

export interface IContentOptions {
  title: string;
  text?: string;
}
