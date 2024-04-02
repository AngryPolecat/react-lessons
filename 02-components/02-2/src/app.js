import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlerStepButtonClick = ({ target }) => {
    setActiveIndex(parseInt(target.id));
  };

  const handlerNextButton = () => {
    setActiveIndex(activeIndex + 1);
  };

  const handlerStartButton = () => {
    setActiveIndex(0);
  };

  const handlerBackButton = () => {
    setActiveIndex(activeIndex - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles['steps-content']}>
            {data[activeIndex].content}
          </div>
          <ul className={styles['steps-list']}>
            {data.map(({ id, title }, idx) => {
              return (
                <li
                  className={
                    styles['steps-item'] +
                    (activeIndex >= idx ? ' ' + styles.done : '') +
                    (activeIndex === idx ? ' ' + styles.active : '')
                  }
                  key={id}
                >
                  <button
                    id={idx}
                    className={styles['steps-item-button']}
                    onClick={handlerStepButtonClick}
                  >
                    {parseInt(id)}
                  </button>
                  {title}
                </li>
              );
            })}
          </ul>
          <div className={styles['buttons-container']}>
            <button
              className={styles.button}
              disabled={activeIndex === 0 ? true : false}
              onClick={handlerBackButton}
            >
              Назад
            </button>
            {activeIndex !== data.length - 1 ? (
              <button className={styles.button} onClick={handlerNextButton}>
                Далее
              </button>
            ) : (
              <button className={styles.button} onClick={handlerStartButton}>
                Начать сначало
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
