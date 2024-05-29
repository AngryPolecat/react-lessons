import { NavLink } from 'react-router-dom';
import styles from './NotFound.module.css';

export const NotFound = ({ error }) => {
  return (
    <div className={styles.containerTextError}>
      <div className={styles.textError}>
        {error}.{' '}
        <NavLink className={styles.link} to={'/'}>
          Назад
        </NavLink>
      </div>
    </div>
  );
};
