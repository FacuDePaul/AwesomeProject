import axios from '../Api';

const meli = {
  search: async function (search) {
    return await axios.get(`/sites/MLA/search?q=${search}#json`);
  },
  item: async function (itemId) {
    return await axios.get(`/items/${itemId}`);
  },
};

export default meli;
