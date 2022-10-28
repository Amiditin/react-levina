import React from 'react';
import styles from './Overlay.module.scss';
import clsx from 'clsx';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setOverlayOpened } from '../../redux/overlay/slice';
import { getUser } from '../../redux/auth/thunk';

import OverlayAuth from './Auth';
import OverlayUser from './User';

export const Overlay: React.FC = () => {
  const { opened } = useAppSelector((state) => state.overlay);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const overlayRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // console.log(localStorage.getItem('token'));
    // localStorage.getItem('token') && dispatch(getUser());
  }, []);

  return (
    <div
      className={clsx(styles.overlay, opened && styles.visible)}
      onClick={(event) => event.target === overlayRef.current && dispatch(setOverlayOpened(false))}
      ref={overlayRef}>
      <div className={styles.rightsideMenu}>
        <img
          className={styles.closeIcon}
          src="/img/tools-icons/close.svg"
          alt="close"
          onClick={() => dispatch(setOverlayOpened(false))}
        />
        {user ? <OverlayUser user={user} /> : <OverlayAuth />}
      </div>
    </div>
  );
};

// TODO: поменять closeIcon на более жирную
