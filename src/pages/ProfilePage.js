import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import user, { updatePhoto } from "../features/user";

const ProfilePage = () => {
  const dis = useDispatch();
  const photoRef = useRef();
  const userState = useSelector((state) => state.user.value);

  function changePhoto() {
    const email = userState.currentUser.email;
    const imageUrl = photoRef.current.value;

    const userIndex = userState.allUsers.findIndex((x) => x.email === email);

    let userUpdated = { ...userState.currentUser };
    userUpdated.image = imageUrl;

    dis(
      updatePhoto({
        index: userIndex,
        current: userUpdated,
      })
    );
  }

  return (
    <div
      style={{
        border: "2px solid black",
        backgroundColor: "rgb(255, 254, 247)",
        borderRadius: "5px",
      }}
    >
      <div style={{ padding: "5px" }}>Logged In as {}</div>
      <div style={{ width: "300px", height: "300px" }}>
        <img
          style={{ width: "100%", padding: "5px" }}
          src={userState.currentUser.image}
          alt=""
        />
      </div>
      <input
        className="input"
        ref={photoRef}
        type="text"
        placeholder="add your photo link here"
      />
      <h3>{userState.currentUser.user}</h3>
      <button className="btnStyle" onClick={changePhoto}>
        Change photo
      </button>
    </div>
  );
};

export default ProfilePage;
