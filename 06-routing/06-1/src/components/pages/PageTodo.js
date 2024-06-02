import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { URL } from '../../config';
import styles from './PageTodo.module.css';
import { PanelTodo } from '../menu/PanelTodo';

export const PageTodo = () => {
  const [currentTodo, setCurrentTodo] = useState({});
  const [textTodo, setTextTodo] = useState('');
  const [modeEditingTextTodo, setModeEditingTextTodo] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${URL}/${params.id}`)
      .then((response) => response.json())
      .then((result) => {
        setCurrentTodo(result);
        !result.id ? navigate('/404') : setTextTodo(result.title);
      });
  }, [params.id, navigate]);

  const handlerClickButtonBack = () => {
    navigate('/');
  };

  const handlerСompleteTodo = () => {
    fetch(`${URL}/${params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        ...currentTodo,
        completed: !currentTodo.completed,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Задача завершена');
      })
      .finally(() => navigate('/'));
  };

  const handlerChangeModeEditingText = () => {
    setModeEditingTextTodo(!modeEditingTextTodo);
  };

  const handlerChangeTextTodo = ({ target }) => {
    setTextTodo(target.value);
  };

  const handlerSaveTextTodo = () => {
    setModeEditingTextTodo(!modeEditingTextTodo);
    fetch(`${URL}/${params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        ...currentTodo,
        title: textTodo,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Задача обновлена');
      });
  };

  const handlerRemoveTodo = () => {
    fetch(`${URL}/${params.id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Задача удалена');
      })
      .finally(() => navigate('/'));
  };

  return (
    <div className={styles.pageTodo}>
      <header className={styles.header}>Задача №{params.id}</header>
      {!modeEditingTextTodo ? (
        <div className={styles.bodyTodo}>{textTodo}</div>
      ) : (
        <div className={styles.containerTextArea}>
          <textarea value={textTodo} onChange={handlerChangeTextTodo} />
        </div>
      )}
      <PanelTodo
        onClickButtonBack={handlerClickButtonBack}
        onClickButtonDelete={handlerRemoveTodo}
        onClickButtonComplete={handlerСompleteTodo}
        onClickButtonUpdate={handlerChangeModeEditingText}
        modeEditingText={modeEditingTextTodo}
        onClickButtonSaveText={handlerSaveTextTodo}
      />
    </div>
  );
};
