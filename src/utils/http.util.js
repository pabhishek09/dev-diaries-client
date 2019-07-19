import axios from 'axios';
import Config from '../Config';

const apiBaseUrl = Config.apiBaseUrl;

const Http = {

  get: async ({endpoint, qs}) => {
    let url = apiBaseUrl + endpoint;
    console.log(url);
    const res = await axios.get(url);
    return res.data;
  }, 
  
  post: ({endpoint, data}) => {
    let url = apiBaseUrl + endpoint;
    console.log(url);
    return axios.post(url);
  }, 
  
  put: ({endpoint, data}) => {
    let url = apiBaseUrl + endpoint;
    console.log(url);
    return axios.put(url);

  }
};

export default Http;
