import './App.scss'
import React from 'react'

function App() {
  const [input, setInput] = React.useState('');
  const [error, setError] = React.useState(false);
  const OPERATORS = ['+', '-', '/', '*', '='];

  function getLastInput() {
    return input.trim().split(' ').at(-1) || '';
  }

  function isOperator(input) {
    return OPERATORS.includes(input);
  }

  function handleNumberClick(num) {
    const isZero = ['0', '000'].includes(num);
    const lastInput = getLastInput();
    const isLastInputOperator = isOperator(lastInput);

    if (isZero) {
      if (isLastInputOperator) {
        setInput(prev => prev + '0');
      } else {
        if (lastInput !== '0' && lastInput !== '') {
          setInput(prev => prev + num);
        }
      }
    } else {
      if (input === '' || input === '0') {
        setInput(num);
      } else if (input.endsWith(' 0')) {
        setInput(prev => prev.slice(0, -1) + num);
      } else {
        setInput(prev => prev + num);
      }
    }
  }

  function calculate() {
    const previousInput = input;
    try {
      return eval(input).toString();
    } catch (error) {
      setError(true);
      setTimeout(() => setError(false), 1000);
      return previousInput;
    }
  }

  function handleOperationClick(op) {
    let newInput = '';
    if (input === '') {
      newInput = '0';
    }

    if (op === '=') {
      newInput += calculate();
    } else {
      const lastInput = getLastInput();
      const isLastInputOperator = isOperator(lastInput);
      
      if ((lastInput === '' || isLastInputOperator) && op !== '-') {
        if (lastInput === '-') {
          const secondLastInput = input.trim().split(' ').at(-2) || '';
          const secondLastInputIsOperator = OPERATORS.includes(secondLastInput);
          if (secondLastInputIsOperator) {
            newInput += input.slice(0, -5) + ` ${op} `;
          } else {
            newInput += input.slice(0, -3) + ` ${op} `;
          }
        } else {
          newInput += input.slice(0, -3) + ` ${op} `;
        }
      } else {
        if (lastInput === '-' && op === '-') {
          newInput += input.slice(0, -3) + ` ${op} `;
        } else {
          newInput += isLastInputOperator ? input + `${op} ` : input + ` ${op} `;
        }
      }
    }

    setInput(newInput);
  }

  function handleDecimalClick() {
    if (!input.split(' ')?.at(-1)?.includes('.')) {
      setInput(prev => prev + '.');
    }
  }

  function handleClearClick() {
    setInput('');
  }

  return (
    <>
      <div className="container">
        <div className="calculator">
          <div className="display" id="display">{input || '0'}</div>
          <div className="buttons">
            <button className="btn clear" id="clear" onClick={handleClearClick}>AC</button>
            <button className="btn operator" id="divide" onClick={() => handleOperationClick('/')}>/</button>
            <button className="btn operator" id="multiply" onClick={() => handleOperationClick('*')}>*</button>
            <button className="btn operator" id="subtract" onClick={() => handleOperationClick('-')}>-</button>
            <button onClick={() => handleNumberClick('7')} className="btn" id="seven">7</button>
            <button onClick={() => handleNumberClick('8')} className="btn" id="eight">8</button>
            <button onClick={() => handleNumberClick('9')} className="btn" id="nine">9</button>
            <button className="btn operator" id="add" onClick={() => handleOperationClick('+')}>+</button>
            <button onClick={() => handleNumberClick('4')} className="btn" id="four">4</button>
            <button onClick={() => handleNumberClick('5')} className="btn" id="five">5</button>
            <button onClick={() => handleNumberClick('6')} className="btn" id="six">6</button>
            <button className="btn" id="decimal" onClick={handleDecimalClick}>.</button>
            <button onClick={() => handleNumberClick('1')} className="btn" id="one">1</button>
            <button onClick={() => handleNumberClick('2')} className="btn" id="two">2</button>
            <button onClick={() => handleNumberClick('3')} className="btn" id="three">3</button>
            <button className="btn equals" id="equals" onClick={() => handleOperationClick('=')}>=</button>
            <button onClick={() => handleNumberClick('0')} className="btn" id="zero">0</button>
          </div>
        </div>
        <p>Coded by Brunno Mota</p>
      </div>
    </>
  )
}

export default App
