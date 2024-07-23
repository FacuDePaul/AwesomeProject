import axios from 'axios';
import Config from 'react-native-config';
axios.defaults.baseURL = Config.BASE_URL;
axios.defaults.timeout = Config.TIME_OUT;
axios.defaults.headers.common = {
  Accept: 'application/json', // el formato que espero que la info vuelva
  'Content-Type': 'application/json', // el formato en que le mando la info
};
// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    //console.log('config:', config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    console.log('response:', response.data.values);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axios;
