import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dev.doc-aid.in/ims-reshita-backend/api',
  // withCredentials: true
});

export default axiosInstance;
