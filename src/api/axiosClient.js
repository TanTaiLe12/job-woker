import axios from 'axios';
import { getToken } from '~/utils/auth';

const axiosClient = axios.create({
  baseURL: '',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response.headers.authorization) {
      response.data.token = response.headers.authorization;
    }
    const {
      data: { data },
    } = response;
    if (data) {
      return data;
    }

    return response.data;
  },
  (error) => {
    const { response } = error;
    switch (response?.status) {
      case 404:
        console.log('404 error handler!');
        break;
      case 500:
        if (process.env.NODE_ENV === 'production') {
          console.log('500 error handler!');
        }
        break;
      case 429:
      case 401:
        // new AuthLSDB().accessToken().remove();
        // new AuthLSDB().userAuth().remove();
        // Refresh application -> redirect to login page
        // window.location.href = '/login';
        break;
      default:
        const dError = {
          status: response.status,
          textStatus: response.textStatus,
          message: response?.data?.message || '',
        };
        console.error('App Error:', dError);
    }

    return Promise.reject(error);
  },
);

export default axiosClient;
