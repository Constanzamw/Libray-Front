import {
  setFavorites
  } from "./favoriteSlice";
  import axios from "axios";

  const URL_BASE = "http://localhost:3000";

  
  export const getFavorites = () => async (dispatch, getState) => {
    try {
      const { user } = getState().auth;
      const response = await axios.get(`${URL_BASE}/users/${user._id}/favorites`);
      const favorites = response.data;
      dispatch(setFavorites(favorites)); 
    } catch (error) {
      console.error('Error:', error);
    }
  };



  