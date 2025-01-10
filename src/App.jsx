import './App.scss'
import React from 'react'

function App() {
  const [display, setDisplay] = React.useState(0);
  const [currentNumber, setCurrentNumber] = React.useState(null);

  const handleNumbers = (e) => {
    const value = (e.target.innerText);
    setDisplay(prev => prev == "0" ? value : prev += value);
  }

  function clearDisplay () {
    setDisplay('0');
    setCurrentNumber(0);
  }
  function handleOperators () {
    setCurrentNumber(display);
    setDisplay('0');
  }
  function handleEquals () {
    const result = eval(`${currentNumber} ${display}`);
    setDisplay(result);
  }
  function handleDecimal () {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  }
  function  handleAdd () {
    handleOperators();
    setDisplay('+');
  }
  function handleSubtract () {
    handleOperators();
    setDisplay('-');
  }
  function handleMultiply () {
    handleOperators();
    setDisplay('*');
  }
  function handleDivide () {
    handleOperators();
    setDisplay('/');
  }

  
  return (













    
    <>
      <div className="container ">
        <div className="calculator">
          <div className="display" id="display">{display}</div>
          <div className="buttons">
            <button className="btn clear" id="clear" onClick={clearDisplay}>AC</button>
            <button className="btn operator" id="divide" onClick={handleDivide}>/</button>
            <button className="btn operator" id="multiply" onClick={handleMultiply}>*</button>
            <button className="btn operator" id="subtract" onClick={handleSubtract}>-</button>
            <button onClick={handleNumbers}className="btn" id="seven">7</button>
            <button onClick={handleNumbers}className="btn" id="eight">8</button>
            <button onClick={handleNumbers}className="btn" id="nine">9</button>
            <button className="btn operator" id="add" onClick={handleAdd}>+</button>
            <button onClick={handleNumbers}className="btn" id="four">4</button>
            <button onClick={handleNumbers}className="btn" id="five">5</button>
            <button onClick={handleNumbers}className="btn" id="six">6</button>
            <button className="btn" id="decimal" onClick={handleDecimal}>.</button>
            <button onClick={handleNumbers}className="btn" id="one">1</button>
            <button onClick={handleNumbers}className="btn" id="two">2</button>
            <button onClick={handleNumbers} className="btn" id="three">3</button>
            <button className="btn equals" id="equals" onClick={handleEquals}>=</button>
            <button onClick={handleNumbers} className="btn" id="zero">0</button>
          </div>
        </div>
        <p>Coded by Brunno Mota</p>
      </div>
    </>
  )
}

export default App
