import axios, { AxiosInstance, AxiosResponse } from 'axios';
import client from 'services';

class CommonService {
	client: AxiosInstance = client;

	async get<T>(): Promise<T> {
		try {
			const res: AxiosResponse<T> = await this.client.get(
				'ecfa918e32c89a43df63'
			);
			return res.data;
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				console.log('Error Occurred on fetching home page data');
				console.log(error.response.data);
			}
			throw new Error('Failed to get the general details');
		}
	}
}

export default new CommonService();
