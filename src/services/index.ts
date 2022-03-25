import axios from 'axios';
import url from 'config/url';

const client = axios.create({
	baseURL: url.baseUrl,
	timeout: 15000,
});

export default client;
