import styles from './Message.module.css';

export const Message = ({ children }) => {
  return (
    <div className={`${styles.message} ${!children ? styles.hidden : ''}`}>
      {children}
    </div>
  );
};
