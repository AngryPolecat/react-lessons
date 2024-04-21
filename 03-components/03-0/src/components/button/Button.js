import styles from './Button.module.css';

export const Button = ({ onClickButton, children, status }) => {
  return (
    <div
      className={`${styles.buttons} ${
        status === 'inactive' ? ' ' + styles.disabled : ''
      }`}
      data-value={children}
      onClick={onClickButton}
    >
      {children}
    </div>
  );
};
