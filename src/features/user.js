import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      allUsers: [],
      currentUser: null,
    },
  },
  reducers: {
    addUser: ({ value }, { payload }) => {
      const user = {
        email: payload.email,
        password: payload.passOne,
        image:
          "https://didys.bg/wp-content/uploads/2022/02/your_picture_here.png",
      };
      value.allUsers.push(user);
    },
    setCurrentUser: ({ value }, { payload }) => {
      value.currentUser = payload;
    },
    updatePhoto: ({ value }, { payload }) => {
      const { index, current } = payload;
      value.allUsers[index] = current;
      value.currentUser = current;
    },
  },
});

export const { addUser, setCurrentUser, updatePhoto } = userSlice.actions;
export default userSlice.reducer;
