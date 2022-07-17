import React from "react";
import { useDispatch } from "react-redux";
import { changeName } from "../features/user";

const UserUpdate = () => {
  const dispatch = useDispatch();
  function update() {
    dispatch(changeName("john"));
  }

  return (
    <div>
      <button onClick={update}>update user</button>
    </div>
  );
};

export default UserUpdate;
