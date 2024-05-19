import styles from './Button.module.css';

export const Button = ({ children, action, name, mode = false }) => {
  return (
    <button
      type="button"
      className={`${styles.buttons} ${mode ? styles.filtration : ''}`}
      onClick={action}
      name={name}
    >
      {children}
    </button>
  );
};
