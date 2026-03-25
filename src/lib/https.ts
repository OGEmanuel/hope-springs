import axios from 'axios';

export const axiosInstance = axios.create({
  timeout: 20000,
});

axiosInstance.interceptors.request.use(async config => {
  return config;
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('API Response Error:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      url: error.config?.url,
      baseURL: error.config?.baseURL,
      fullURL: `${error.config?.baseURL}${error.config?.url}`,
      data: error.response?.data,
      message: error.message,
    });

    return Promise.reject(error);
  },
);

const https = axiosInstance;

export { https };