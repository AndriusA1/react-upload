import { useState } from "react";

const TriggeringFuncColor = ({ add, num }) => {
  function sendArg() {
    add(num);
  }
  return (
    <div>
      <button style={{ margin: "3px" }} onClick={sendArg}>
        add {num}
      </button>
    </div>
  );
};

export default TriggeringFuncColor;
