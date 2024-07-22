import api from '../api';

const loginWS = {
  login: async function (mail, password, deviceToken) {
    return await api.post('/login', {
      mail,
      password,
      token: deviceToken, //puedo especificar la key
    });
  },
  deleteNode: async function (nodeId) {
    return await api.delete(`/nodes/${nodeId}`);
  },
};

export default loginWS;
