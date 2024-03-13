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
          console.log('Datos del usuario recibidos:', action.payload);
          state.isAuthenticated = true;
          state.user = action.payload;
        },
        logout(state) {
          state.isAuthenticated = false;
          state.user = null;
        },
        register(state, action) {
          state.isAuthenticated = true;
          state.user = action.payload;
        },
      },
    });


export const { login, logout,register } = authSlice.actions;


export default authSlice.reducer;