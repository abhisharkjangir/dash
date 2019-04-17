import axios from 'axios';
import qs from 'query-string';
import ENV from '../constants/config';
import { getLocalStorage } from './common';

// FETCH TOKEN from localStorage for every request
const getAuthToken = () => {
  const user = getLocalStorage('user');
  if(user && user.token) {
    return user.token;
  }
  return null;
}

const Axios = (baseURL) => {
  // AXIOS CONFIGRATION
  let config = {
    baseURL : baseURL || ENV.BASE_URL,
    // timeout : 5000, //
    paramsSerializer: function(queryParams) {
      return qs.stringify(queryParams)
    }
  };

  // CREATE NEW AXIOS INSTANCE
  let axiosInstance = axios.create(config);

  // REQUEST INTERCEPTOR
  axiosInstance.interceptors.request.use((config) => {
    config.headers['token'] =  getAuthToken();
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  // RESPONSE INTERCEPTOR
  axiosInstance.interceptors.response.use((response) => {
    if (response.data.success) { // RESPONSE_CODE CAN BE CAHNGE

    }
    return response;
  }, (error) => {
    return Promise.reject(error);
  });
  return axiosInstance;
}

// EXPORT A NEW AXIOS INSTANCE
export default Axios(ENV.URL);
