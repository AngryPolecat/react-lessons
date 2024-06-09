import styles from './Button.module.css';

export const Button = ({
  children,
  action,
  name,
  modeButtonFilter = false,
}) => {
  return (
    <button
      type="button"
      className={`${styles.buttons} ${
        modeButtonFilter ? styles.filtration : ''
      }`}
      onClick={action}
      name={name}
    >
      {children}
    </button>
  );
};
