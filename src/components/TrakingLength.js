import { useRef, useState, useEffect } from "react";

// - - - - - useEffect- - - - -

const TrakingLength = () => {
  const inp = useRef();
  const [getWord, setWord] = useState(0);
  const [getColor, setColor] = useState(`white`);
  const trakingLength = () => {
    setWord(inp.current.value.length);
  };
  useEffect(() => {
    if (getWord < 5) {
      setColor(`white`);
    }
    if (getWord >= 5 && getWord < 8) {
      setColor(`green`);
    }
    if (getWord >= 8 && getWord < 10) {
      setColor(`blue`);
    }
    if (getWord >= 10 && getWord < 13) {
      setColor(`orange`);
    }
    if (getWord >= 13) {
      setColor(`yellow`);
    }
    if (getWord > 17) {
      setColor(`white`);
    }
  }, [getWord]);
  return (
    <div>
      <h2>length: {getWord}</h2>
      <input
        style={{ backgroundColor: getColor }}
        ref={inp}
        onChange={trakingLength}
        type="text"
        placeholder="ur text here"
      ></input>
    </div>
  );
};

export default TrakingLength;
