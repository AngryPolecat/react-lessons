import { useState } from 'react';
import styles from './App.module.css';
import { Form } from './components/form/Form';
import { Message } from './components/message/Message';

export const App = () => {
  const [message, setMessage] = useState('');

  return (
    <div className={styles.app}>
      <Message>{message}</Message>
      <Form onShowMessage={setMessage} />
    </div>
  );
};
