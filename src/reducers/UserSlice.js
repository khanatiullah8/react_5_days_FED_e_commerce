import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  username: 'user',
  email: 'user1@gmail.com',
  password: 'user1@',
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
  }
})

export default userSlice.reducer;
export const {logIn, logOut} = userSlice.actions;