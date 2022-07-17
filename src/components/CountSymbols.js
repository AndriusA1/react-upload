import { useRef, useState, useEffect } from "react";
// - - - - - useRef - - - - -

const CountSymbols = () => {
  const letters = useRef();
  const [getSymbol, setSymbol] = useState(0);

  function countIt() {
    setSymbol(letters.current.value.length);
  }
  return (
    <div>
      <h2>you just typed {getSymbol} symbol(s)</h2>
      <input
        ref={letters}
        onChange={countIt}
        type="text"
        placeholder="text "
      ></input>
      <button onClick={countIt}>count all of them</button>
    </div>
  );
};

export default CountSymbols;
