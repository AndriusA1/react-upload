import { useState } from "react";

const ProfileCard = ({ profile }) => {
  const BtnArea = {
    display: "flex",
    flexDirection: "column",
  };
  const BtnStyle = {
    margin: "3px",
    padding: "5px",
    cursor: "pointer",
  };
  const [getState, setState] = useState(profile);

  const updateUser = (key, value) => {
    const newUserName = { ...getState };
    newUserName[key] = value;
    setState(newUserName);
  };

  return (
    <div
      style={{
        border: "1px solid black",
        width: "300px",
        height: "322px",
        margin: "10px 0px 0px 100px",
      }}
    >
      <h3 style={{ marginRight: "175px" }}>name: {getState.name} </h3>
      <h3 style={{ marginRight: "175px" }}>age: {getState.age}</h3>
      <h3 style={{ marginRight: "175px" }}>city: {getState.city} </h3>
      <div style={BtnArea}>
        <h4 style={{ color: "black" }}>u can change:</h4>
        <button onClick={() => updateUser("name", "petras")} style={BtnStyle}>
          name
        </button>
        <button onClick={() => updateUser("age", 20)} style={BtnStyle}>
          age
        </button>
        <button onClick={() => updateUser("city", "nida")} style={BtnStyle}>
          city
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
