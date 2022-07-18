import React, { useState } from "react";
import Sum from "./Sum";
import "./App.css";

function App(){
  const [num1, setnum1] = useState(null);
  const [num2, setnum2] = useState(null);

  const inputHandler1 = (e1) => {
    setnum1(e1.target.value);
    console.log(num1);
  };

  const inputHandler2 = (e2) => {
    setnum2(e2.target.value);
    console.log(num2);
  };

  return (
    <body className="Body">
      <div className="Container" >
      <div>
      <h2 className="Title">SUM OF TWO NUMBERS</h2>
      <div>
      <input className="Inputs"
        onChange={inputHandler1}
        value={num1 ? num1 : ""}
        type="number" placeholder="Enter Number 1"
      />
      </div>
      <div >
       
      <input className="Inputs"
        onChange={inputHandler2}
        value={num2 ? num2: ""}
        type="number" placeholder="Enter Number 2"
      />
      </div>
      <Sum value1={num1 ? num1 : ""} value2={num2 ? num2 : ""} />
      </div>
      </div>
      </body>
    
    
  );
};

export default App;
