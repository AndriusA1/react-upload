import React from "react";
import "./MiniGame.css";

const MiniGame = ({ photo }) => {
  return (
    <div className="profile">
      <div
        className="profile-photo"
        style={{ backgroundImage: `url('${photo}')` }}
      ></div>
      <div>
        <div className="profile-hp">
          <div className="profile-hp-slider"></div>
        </div>
      </div>
    </div>
  );
};

export default MiniGame;
