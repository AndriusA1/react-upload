import { useState } from "react";

const ChangeColorName = ({ item }) => {
  const [getcolor, setcolor] = useState(`#ffffff`);
  function btn() {
    setcolor(item.hex);
  }

  return (
    <div
      style={{
        backgroundColor: getcolor,
        padding: "9px",
        margin: "5px",
        border: `1px solid black`,
        display: `flex`,
        justifyContent: "space-between",
      }}
    >
      <div>{item.name}</div>
      <div>{item.hex}</div>
      <button onClick={btn} style={{ cursor: "pointer" }}>
        get color
      </button>
    </div>
  );
};

export default ChangeColorName;
