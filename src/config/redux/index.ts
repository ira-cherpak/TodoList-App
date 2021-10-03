import { combineReducers, configureStore } from '@reduxjs/toolkit';
import listReducer from '../../modules/list/redux';
import profileReducer from '../../modules/profile/redux';

const rootReducer = combineReducers({
  list: listReducer,
  user: profileReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
