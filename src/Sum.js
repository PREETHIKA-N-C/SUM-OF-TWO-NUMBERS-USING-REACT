import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import "./App.css";

function Sum(props){
  const [total, setTotal] = useState(null);

  const sum = (val1, val2) => {
    let num1 = parseInt(val1);
    let num2 = parseInt(val2);
    setTotal(num1 + num2);
  };

  return (
    <div>
      <Button variant="secondary" className="mr-2 Button" onClick={() => sum(props.value1, props.value2)}>
       ADD
      </Button>
      <div className="Total">
      <p>RESULT: {total > 0 ? total : ""}</p>
      </div>
    </div>
  );
};

export default Sum;
