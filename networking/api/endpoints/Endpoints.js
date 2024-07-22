import api from '../api';
export default loginWS = {
login: async function (mail, password, deviceToken ) {
 return await api.post('/login', {
 mail,
 password,
 token: deviceToken , //puedo especificar la key
 });
 },
 deleteNode : async function (nodeId) {
 return await api.delete(`/nodes/${nodeId}`);
 },
}
//optional parameters
const params = {}
if (this.mail) { params.mail = this.mail }
return await api.post('/login', {
 params
 });
