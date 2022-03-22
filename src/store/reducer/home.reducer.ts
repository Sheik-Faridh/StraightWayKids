import { createReducer } from '@reduxjs/toolkit';
import { fetchHomePageData } from 'store/actions/home.actions';
import { HomePageRes } from 'typings';

const initialState = {} as HomePageRes;

const homeReducer = createReducer(initialState, (builder) => {
	builder.addCase(fetchHomePageData.fulfilled, (state, action) => {
		return action.payload;
	});
});

export default homeReducer;
