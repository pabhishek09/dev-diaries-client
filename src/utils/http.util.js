import axios from 'axios';
import Config from '../Config';

const apiBaseUrl = Config.apiBaseUrl;

const Http = {
  get: ({endpoint, qs}) => {
    let url = apiBaseUrl + endpoint;
    console.log(url);
    return axios.get(url);
  }, post: () => {

  }, put: () => {

  }, delete: () => {

  }
};

export default Http;
