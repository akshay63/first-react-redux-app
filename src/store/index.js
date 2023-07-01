import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";
// console.log(songsSlice.actions.addSong('Obssessed'));

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
});

console.log(store.getState());

export { store, addSong, removeSong, addMovie, removeMovie, reset };
