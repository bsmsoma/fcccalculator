import './App.scss'

function App() {
  

  return (
    <>
      <div className="container ">
        <div className="calculator">
          <div className="display" id="display">0</div>
          <div className="buttons">
            <button className="btn clear" id="clear">AC</button>
            <button className="btn operator" id="divide">/</button>
            <button className="btn operator" id="multiply">*</button>
            <button className="btn operator" id="minus">-</button>
            <button className="btn" id="serven">7</button>
            <button className="btn" id="eight">8</button>
            <button className="btn" id="nine">9</button>
            <button className="btn operator" id="plus">+</button>
            <button className="btn" id="five">4</button>
            <button className="btn" id="five">5</button>
            <button className="btn" id="six">6</button>
            <button className="btn" id="decimal">.</button>
            <button className="btn" id="one">1</button>
            <button className="btn" id="two">2</button>
            <button className="btn" id="three">3</button>
            <button className="btn equals" id="equals">=</button>
            <button className="btn" id="zero">0</button>
          </div>
        </div>
        <p>Coded by Brunno Mota</p>
      </div>
    </>
  )
}

export default App
