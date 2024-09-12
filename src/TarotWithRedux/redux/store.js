// store.js
import {configureStore} from '@reduxjs/toolkit';
import tarotReducer from './reducers';

export const store = configureStore({
    reducer: {
        tarot: tarotReducer,
    },
});