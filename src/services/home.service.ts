import axios, { AxiosInstance, AxiosResponse } from 'axios';
import client from 'services';

class HomeService {
	client: AxiosInstance = client;

	async get<T>(): Promise<T> {
		try {
			const res: AxiosResponse<T> = await this.client.get(
				'3880ac4b77f92bc1d41d'
			);
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
