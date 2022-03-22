import { createReducer } from '@reduxjs/toolkit';
import { fetchCommonDetails } from 'store/actions/common.actions';
import { CommonDetailsRes } from 'typings';

const initialState = {} as CommonDetailsRes;

const commonReducer = createReducer(initialState, (builder) => {
	builder.addCase(fetchCommonDetails.fulfilled, (state, action) => {
		return action.payload;
	});
});

export default commonReducer;
