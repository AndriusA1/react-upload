import { useState } from "react";

const NumbersSum = ({ number }) => {
  const itemStyle = {
    border: "2px solid black",
    width: 200,
    height: 300,
    marginLeft: 20,
  };
  const sumStyle = {
    border: "1px solid black",
    margin: "35px 30px 10px 30px",
    padding: "10px 5px 10px 15px",
  };
  const [getState, setState] = useState(number);

  function btnClick() {
    setState(getState * 5);
  }
  return (
    <div style={itemStyle}>
      <div>
        <h2>number: {number} </h2>
        <h1 style={sumStyle}>{getState} </h1>
        <button
          onClick={btnClick}
          style={{
            marginTop: "100px",
          }}
        >
          sum
        </button>
      </div>
    </div>
  );
};

export default NumbersSum;
