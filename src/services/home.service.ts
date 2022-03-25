import axios, { AxiosInstance, AxiosResponse } from 'axios';
import client from 'services';
import url from 'config/url';

class HomeService {
	client: AxiosInstance = client;

	async get<T>(): Promise<T> {
		try {
			const res: AxiosResponse<T> = await this.client.get(url.home);
			return res.data;
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				console.log('Error Occurred on fetching home page data');
				console.log(error.response.data);
			}
			throw new Error('Failed to get the home page details');
		}
	}
}

export default new HomeService();
