import { createSlice } from '@reduxjs/toolkit';

/**
 * Workspace for init state
 */
const initialState = {};

/**
 * Workspace for reducer
 */
const reducers = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers,
});

export const {} = authSlice.actions;

export default authSlice.reducer;
