import styles from './Button.module.css';

export const Button = ({
  children,
  action,
  name,
  modeButtonFilter = false,
  title = '',
  typeButton = '',
}) => {
  return (
    <button
      type="button"
      className={`${styles.buttons} ${
        modeButtonFilter ? styles.filtration : ''
      } ${typeButton ? styles.buttonsTodo : ''}`}
      onClick={action}
      name={name}
      title={title}
    >
      {children}
    </button>
  );
};
