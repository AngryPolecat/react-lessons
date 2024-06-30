import styles from './Button.module.css';

export const Button = ({ children, action, name, modeFilter = false }) => {
  return (
    <button
      type="button"
      className={`${styles.buttons} ${modeFilter ? styles.filtration : ''}`}
      onClick={action}
      name={name}
    >
      {children}
    </button>
  );
};
