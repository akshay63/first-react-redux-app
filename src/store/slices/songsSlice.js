import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    //'song' + '/' + 'addSong' = 'song/addSong'
    addSong(state, action) {
      state.push(action.payload);
    },
    //'song' + '/' + 'removeSong' = 'song/removeSong'
    removeSong(state, action) {
      //action === string //song that we want to remove
      // state.pop(action.payload);❌Since its immer, we can use JS splice method
      state.splice(state.indexOf(action.payload), 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
