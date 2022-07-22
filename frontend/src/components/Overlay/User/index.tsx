import React from 'react';
import styles from './User.module.scss';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';

import { logoutUser } from '../../../redux/auth/slice';
import { setOverlayOpened } from '../../../redux/overlay/slice';
import { IUser } from '../../../redux/auth/types';

type UserProps = {
  user: IUser;
};

const User: React.FC<UserProps> = ({ user }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.content}>
      <h4 className={styles.title}>Добро пожаловать</h4>
      <div className={styles.user}>
        <img
          className={styles.avatar}
          src={user.avatarUrl ? user.avatarUrl : '/img/avatar.jpg'}
          alt="avatar"
        />
        <div className={styles.info}>
          <p className={styles.name}>{user.fullName}</p>
          <p className={styles.email}>{user.email}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <Link to="blog/create">
          <button className="button-tab" onClick={() => dispatch(setOverlayOpened(false))}>
            Создать пост
          </button>
        </Link>
        <button className="button-black" onClick={() => dispatch(logoutUser())}>
          Выйти
        </button>
      </div>
    </div>
  );
};

export default User;
