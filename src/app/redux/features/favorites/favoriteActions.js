import {
  addToFavorites, removeFromFavorites, clearFavorites
  } from "./favoriteSlice";
  import axios from "axios";

  const URL_BASE = "http://localhost:3000";

  export const addFavorite = (userId, bookId) => async (dispatch) => {
    try {
      const response = await axios.post(`${URL_BASE}/users/${userId}/favorites`, { bookId });
      dispatch(addToFavorites(response.data));
    } catch (error) {
      console.error('Error adding favorite:', error);
     
    }
  };
  
  export const removeFavorite = (userId, bookId) => async (dispatch) => {
    try {
      await axios.delete(`${URL_BASE}/users/${userId}/favorites/${bookId}`);
      console.log(userId, "rem")
      dispatch(removeFromFavorites(bookId));
    } catch (error) {
      console.error('Error removing favorite:', error);
    
    }
  };
  
  export const fetchFavorites = (userId) => async (dispatch) => {
    try {
      const response = await axios.get(`${URL_BASE}/users/${userId}/favorites`);
      console.log(userId, "fectch")
      dispatch(clearFavorites());
      dispatch(addToFavorites(response.data));
    } catch (error) {
      console.error('Error fetching favorites:', error);
     
    }
  };


  // export const getFavorites = () => async (dispatch, getState) => {
  //   try {
  //     const { user } = getState().auth;
  //     const response = await axios.get(`${URL_BASE}/users/${user._id}/favorites`);
  //     const favorites = response.data;
  //     dispatch(setFavorites(favorites)); 
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };



  