import { useState } from "react";

const SumByPressButton = () => {
  const [getState, setState] = useState(3);
  function click() {
    setState(getState + 3);
  }
  return (
    <div>
      <h3>{getState}</h3>
      <button onClick={click}>add sum</button>
    </div>
  );
};

export default SumByPressButton;
