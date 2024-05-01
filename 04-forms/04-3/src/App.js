import styles from './App.module.css';
import { Form } from './components/form/Form';

export const App = () => {
  return (
    <div className={styles.app}>
      <Form />
    </div>
  );
};
