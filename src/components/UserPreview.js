import React from "react";
import { useSelector } from "react-redux";

const UserPreview = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      <div>{user.name}</div>
      <div>{user.age}</div>
      <div>{user.email}</div>
    </div>
  );
};

export default UserPreview;
