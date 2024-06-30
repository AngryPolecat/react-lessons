import styles from './ButtonTodo.module.css';

export const ButtonTodo = ({ action, idTodo, children }) => {
  return (
    <button
      type="button"
      className={styles.buttonTodo}
      onClick={action}
      data-id={idTodo}
    >
      {children}
    </button>
  );
};
