import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import { PageListTodos } from './components/pages/PageListTodos';
import { PageTodo } from './components/pages/PageTodo';
import { NotFound } from './components/pages/NotFound';

export const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<PageListTodos />} />
        <Route path="/task/:id" element={<PageTodo />} />
        <Route path="/404" element={<NotFound error="Задача не найдена" />} />
        <Route path="*" element={<NotFound error="Страница не найдена" />} />
      </Routes>
    </div>
  );
};
