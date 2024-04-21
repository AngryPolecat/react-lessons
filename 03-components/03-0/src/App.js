import styles from './App.module.css';
import { useState } from 'react';
import { Button } from './components/button/Button';
import { Display } from './components/display/Display';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = [
  {
    id: 'clear',
    value: 'C',
    status: 'active',
    func: null,
  },
  {
    id: 'result',
    value: '=',
    status: 'active',
    func: null,
  },
  {
    id: 'plus',
    value: '+',
    status: 'active',
    func: (a, b) => parseInt(a) + parseInt(b),
  },
  {
    id: 'minus',
    value: '-',
    status: 'active',
    func: (a, b) => parseInt(a) - parseInt(b),
  },
  {
    id: 'button5',
    value: 'X',
    status: 'inactive',
    func: null,
  },
  {
    id: 'button6',
    value: 'X',
    status: 'inactive',
    func: null,
  },
];

export const App = () => {
  const [operandOne, setOperandOne] = useState(0);
  const [operandTwo, setOperandOTwo] = useState('');
  const [operator, setOperator] = useState('');
  const [flagResult, setFlagResult] = useState(false);

  const handlerOperatorButton = ({ target }) => {
    const value = target.dataset.value;
    setFlagResult(false);
    if (value === 'C') {
      setOperandOne(0);
      setOperandOTwo('');
      setOperator('');
    }
    if (!operator && (value === '+' || value === '-')) {
      setOperator(value);
    }
    if (value === '=' && operandOne && operandTwo && operator) {
      setOperandOne(
        operators
          .find((item) => item.value === operator)
          .func(operandOne, operandTwo)
      );
      setFlagResult(true);
      setOperandOTwo('');
      setOperator('');
    }
  };

  const handlerNumberButton = ({ target }) => {
    const value = target.dataset.value;
    if (operator) {
      parseInt(operandTwo)
        ? setOperandOTwo((operandTwo) => operandTwo + value)
        : setOperandOTwo(value);
    } else {
      !flagResult && parseInt(operandOne)
        ? setOperandOne((operandOne) => operandOne + value)
        : setOperandOne(value);
    }
    setFlagResult(false);
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>Calculator</header>
        <Display
          flag={flagResult}
        >{`${operandOne}${operator}${operandTwo}`}</Display>
        <div className={styles.containerButtons}>
          <div className={styles.containerNumberButtons}>
            {numbers.map((button, idx) => (
              <Button
                key={idx}
                onClickButton={handlerNumberButton}
                status={'active'}
              >
                {button}
              </Button>
            ))}
          </div>
          <div className={styles.containerOperatorButtons}>
            {operators.map(({ id, value, status }) => (
              <Button
                status={status}
                key={id}
                onClickButton={handlerOperatorButton}
              >
                {value}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
