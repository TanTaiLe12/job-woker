import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authSlice from './modules/authSlice';

const rootReducer = combineReducers({
  auth: authSlice,
});

export default configureStore({
  reducer: rootReducer,
});
