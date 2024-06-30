import styles from './Loader.module.css';

export const Loader = () => {
  console.log(1);
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};
