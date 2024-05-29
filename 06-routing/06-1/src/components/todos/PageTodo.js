import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { URL } from '../../config';
import styles from './PageTodo.module.css';
import { PanelTodo } from '../menu/PanelTodo';

export const PageTodo = ({
  onRemoveTodo,
  onCompleteTodo,
  onUpdateTextTodo,
}) => {
  const [textTodo, setTextTodo] = useState('');
  const [modeEditingTextTodo, setModeEditingTextTodo] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${URL}/${params.id}`)
      .then((response) => response.json())
      .then((result) => {
        !result.id ? navigate('/404') : setTextTodo(result.title);
      });
  }, [params.id, navigate]);

  const handlerClickButtonBack = () => {
    navigate('/');
  };

  const handlerRemoveTodo = () => {
    onRemoveTodo(params.id);
    navigate('/');
  };

  const handlerCompleteTodo = () => {
    onCompleteTodo(params.id);
    navigate('/');
  };

  const handlerChangeModeEditingText = () => {
    setModeEditingTextTodo(!modeEditingTextTodo);
  };

  const handlerChangeTextTodo = ({ target }) => {
    setTextTodo(target.value);
  };

  const handlerSaveTextTodo = () => {
    setModeEditingTextTodo(!modeEditingTextTodo);
    onUpdateTextTodo(textTodo, params.id);
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
        onClickButtonComplete={handlerCompleteTodo}
        onClickButtonUpdate={handlerChangeModeEditingText}
        modeEditingText={modeEditingTextTodo}
        onClickButtonSaveText={handlerSaveTextTodo}
      />
    </div>
  );
};
