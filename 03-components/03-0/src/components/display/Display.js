import styles from './Display.module.css';

export const Display = ({ children, flag }) => {
  return (
    <div className={`${styles.display} ${flag ? ' ' + styles.result : ''}`}>
      {children}
    </div>
  );
};
