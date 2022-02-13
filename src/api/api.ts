import axios from 'axios';

// Create Axios Instance
const axiosInstance = axios.create({
  baseURL: 'https://www.cheapshark.com',
});

export default axiosInstance;
