import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  books: [],
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    createBookStart(state) {
      state.loading = true;
      state.error = null;
    },
    createBookSuccess(state, action) {
      state.loading = false;
      state.books.push(action.payload);
    },
    createBookFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateBookStart(state) {
      state.loading = true;
      state.error = null;
    },
    updateBookSuccess(state, action) {
      state.loading = false;
      const updatedBook = action.payload;
      state.books = state.books.map((book) =>
        book._id === updatedBook._id ? updatedBook : book
      );
    },
    updateBookFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { createBookStart, createBookSuccess ,createBookFailure,updateBookStart,  updateBookSuccess,  updateBookFailure } = bookSlice.actions;

 export default bookSlice.reducer;


// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   favorites: [],
// };

// const favoritesSlice = createSlice({
//   name: 'favorites',
//   initialState,
//   reducers: {
//     setFavorites(state, action) {
//       state.favorites = action.payload;
//     },
//   },
// });

// export const { setFavorites } = favoritesSlice.actions;

// export default favoritesSlice.reducer;