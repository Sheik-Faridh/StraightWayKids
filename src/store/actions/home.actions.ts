import { createAsyncThunk } from '@reduxjs/toolkit';
import homeService from 'services/home.service';
import { FETCH_HOME_PAGE } from 'store/types/home.types';
import { HomePageRes } from 'typings';

export const fetchHomePageData = createAsyncThunk(FETCH_HOME_PAGE, () => {
	return homeService.get<HomePageRes>();
});
