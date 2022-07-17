import React from "react";

const UseRef = () => {
  return (
    <div>
      <div className="displayArea">
        <h3>symbols in input count:</h3>
        <div
          style={{
            width: "100px",
            height: "30px",
            marginBottom: `3px`,
            border: "1px solid black",
          }}
          className="display"
        ></div>
      </div>

      <div className="inputArea">
        <input type="text" placeholder="text here" />
        <button style={{ marginLeft: `3px` }} type="button">
          count
        </button>
      </div>
    </div>
  );
};

export default UseRef;
