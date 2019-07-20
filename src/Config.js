const Common = {

};

const dev = {
  apiBaseUrl: 'http://localhost:4000/api/',
  authUrl: 'http://localhost:4000/api/user/authenticate?code='
};

const prod = {
  apiBaseUrl: 'https://dev-diaries.herokuapp.com/api/',
  authUrl: 'https://dev-diaries.herokuapp.com/api/user/authenticate?code='
}

const envConfig = process.env.NODE_ENV === 'production' ? prod: dev;

const Config = { Common, ...envConfig };

export default Config;
