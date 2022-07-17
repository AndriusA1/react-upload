import { useState } from "react";
import colors from "../assets/colors.json";

const ChangeColor = () => {
  const [getState, setState] = useState(`red`);
  function btnClick() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex].hex;

    setState(randomColor);
  }
  return (
    <div
      style={{
        border: "1px solid black",
        width: 300,
        height: 200,
        backgroundColor: getState,
      }}
    >
      <button onClick={btnClick} style={{ marginTop: 145, marginLeft: 135 }}>
        change color
      </button>
    </div>
  );
};

export default ChangeColor;
