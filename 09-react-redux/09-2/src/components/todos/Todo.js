import { useDispatch } from 'react-redux';
import styles from './Todo.module.css';
import { completeTodo } from '../../actions/complete-todo';
import { removeTodo } from '../../actions/remove-todo';
import { saveTitleTodo } from '../../actions/save-title-todo';
import { useState } from 'react';
import { ButtonTodo } from '../menu/ButtonTodo';

export const Todo = ({ todo }) => {
  const { id, title, completed } = todo;
  const [modeEditTodo, setModeEditTodo] = useState(false);
  const [updatedTextTodo, setUpdatedTextTodo] = useState(title);
  const dispatch = useDispatch();

  const callMenuTodo = ({ target }) => {
    setModeEditTodo(!modeEditTodo);
  };

  const handlerComplitedTodo = ({ target }) => {
    dispatch(completeTodo(target.dataset.id, todo));
  };

  const handlerSaveTextTodo = ({ target }) => {
    setModeEditTodo(!modeEditTodo);
    dispatch(saveTitleTodo(target.dataset.id, todo, updatedTextTodo));
  };

  const handlerRemoveTodo = ({ target }) => {
    dispatch(removeTodo(target.dataset.id));
  };

  const handlerUpdateTextTodo = ({ target }) => {
    setUpdatedTextTodo(target.value);
  };

  return (
    <div className={styles.todo}>
      <div className={`${styles.idTodo} ${completed ? styles.completed : ''}`}>
        {id}
      </div>
      {modeEditTodo ? (
        <>
          <input
            type="text"
            value={updatedTextTodo}
            className={styles.inputTodo}
            onChange={handlerUpdateTextTodo}
          />
          <ButtonTodo action={handlerSaveTextTodo} idTodo={id}>
            &#9745;
          </ButtonTodo>
          <ButtonTodo action={handlerRemoveTodo} idTodo={id}>
            &#9746;
          </ButtonTodo>
          <ButtonTodo action={callMenuTodo} idTodo={id}>
            &#9776;
          </ButtonTodo>
        </>
      ) : (
        <>
          <div
            className={`${styles.bodyTodo} ${
              completed ? styles.completed : ''
            }`}
            onClick={handlerComplitedTodo}
            data-id={id}
          >
            {title}
          </div>
          <ButtonTodo action={callMenuTodo} idTodo={id}>
            &#9776;
          </ButtonTodo>
        </>
      )}
    </div>
  );
};
