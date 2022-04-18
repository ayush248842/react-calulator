import React, { useState } from "react";

function App() {

  // Input String
  const [calc, setCalc] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

  };

  // For Digit Buttons
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button className="onHover" key={i} onClick={() => updateCalc(i.toString())}>
          {i}
        </button>
      );
    }
    return digits;
  };

  // For Calculating Input String
  const calculate = () => {
    setCalc(eval(calc).toString()); 
  };

  const deleteLast = () => {
    if(calc === ""){
      return;
    }

    const value = calc.slice(0,-1);

    setCalc(value);
  };

  return (
    <div className="App">
      {/* Calculator Container */}
      <div className="calculator">
        {/* Display Screen Container*/}
        <div className="display">{calc || "0"}</div>
        {/* Operator Buttons Container*/}
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>
        {/* Digit Buttons Container */}
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button className="period" onClick={() => updateCalc(".")}>.</button>
          <button className="equal" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
