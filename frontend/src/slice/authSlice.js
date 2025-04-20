import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: false,
  name: "",
  email: "",
  token: "",
  avatar: "",
  role: "user",
  createdAt: "",
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
      state.role = action.payload.role;
      state.createdAt = action.payload.createdAt;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.name = "";
      state.email = "";
      state.token = "";
      state.avatar = "";
      state.role = "";
      state.createdAt = "";
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
