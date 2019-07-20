import axios from 'axios';
import Config from '../Config';

const apiBaseUrl = Config.apiBaseUrl;

const Http = {

  get: async ({endpoint, qs}) => {
    let url = apiBaseUrl + endpoint;
    const res = await axios.get(url);
    return res.data;
  }, 
  
  post: async ({endpoint, body}) => {
    let url = apiBaseUrl + endpoint;
    const res = await axios.post(url, body);
    return res.data;
  }
};

export default Http;
