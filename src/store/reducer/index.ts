import { combineReducers } from '@reduxjs/toolkit';
import commonReducer from './common.reducer';
import homeReducer from './home.reducer';

const rootReducer = combineReducers({
	home: homeReducer,
	common: commonReducer,
});

export default rootReducer;
