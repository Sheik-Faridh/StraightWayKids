import { configureStore } from '@reduxjs/toolkit';
import reducer from 'store/reducer';

const store = configureStore({ reducer });

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;
