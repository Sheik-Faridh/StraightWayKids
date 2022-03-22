import axios from 'axios';

const client = axios.create({
	baseURL: 'https://api.npoint.io',
	timeout: 15000,
});

export default client;
