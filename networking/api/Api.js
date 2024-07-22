import axios from 'axios';
import Config from 'react-native-config';
axios.defaults.baseURL = Config.BASE_URL;
axios.defaults.timeout = Config.TIME_OUT;
axios.defaults.headers.common = {
  Accept: 'application/json', // el formato que espero que la info vuelva
  'Content-Type': 'application/json', // el formato en que le mando la info
};
function setClientToken(token) {
  axios.defaults.headers.common = {Authorization: 'bearer ' + {token}};
}
export default axios;
