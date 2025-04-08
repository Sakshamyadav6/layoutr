import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: false,
  name: "",
  email: "",
  token: "",
  avatar: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.avatar = action.payload.avatar;
    },
  },
});
export const { login } = authSlice.actions;
export default authSlice.reducer;
