"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // 
    isAuthenticated: false,
    user: null,
 
  };


export const authSlice  = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
          state.isAuthenticated = true;
          state.user = action.payload;
        },
        logout(state) {
          state.isAuthenticated = false;
          state.user = null;
        },
      },
    });
//     reducers: {
//         getUser: (state, action) => {
//             state.logedInUser = action.payload;
//           },
//           getUserFavorites: (state, action) => {
//             state.logedInUser.favorites = action.payload;
//           },
//     }
// })  

export const { login, logout } = authSlice.actions;
// export const {
//     getUser,
//     getUserFavorites
// } = userSlice.actions;

export default authSlice.reducer;