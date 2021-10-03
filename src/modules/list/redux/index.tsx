import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Item} from '../types';

interface ListState {
  offset: number;
  limit: number;
  item: Item[]
}

const initialState: ListState = {
  offset: 0,
  limit: 10,
  item: [],
};

const slice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setListItem: (state, action: PayloadAction<Item[]>) => {
      state.item = action.payload;
    }
  },
});

export const listActions = slice.actions;

export default slice.reducer;
