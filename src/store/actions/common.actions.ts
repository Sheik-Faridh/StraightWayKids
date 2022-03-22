import { createAsyncThunk } from '@reduxjs/toolkit';
import commonService from 'services/common.service';
import { FETCH_COMMON_DETAILS } from 'store/types/common.types';
import { CommonDetailsRes } from 'typings';

export const fetchCommonDetails = createAsyncThunk(FETCH_COMMON_DETAILS, () => {
	return commonService.get<CommonDetailsRes>();
});
