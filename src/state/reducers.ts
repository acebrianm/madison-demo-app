import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { Picture } from '../api/pictures/types';

export interface PictureState {
  pictures: Picture[];
}

const initialState: PictureState = {
  pictures: [],
};

const picturesSlice = createSlice({
  name: 'pictures',
  initialState,
  reducers: {
    setPictures(state, action: PayloadAction<Picture[]>) {
      state.pictures = action.payload;
    },
  },
});

export const { setPictures } = picturesSlice.actions;
export default picturesSlice.reducer;
