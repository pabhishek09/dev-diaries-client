const Common = {

};

const dev = {
  apiBaseUrl: 'http://localhost:4000/api/'
};

const prod = {
  apiBaseUrl: 'https://dev-diaries.herokuapp.com/api/'
}

const envConfig = process.env.NODE_ENV === 'production' ? prod: dev;

const Config = { Common, ...envConfig };

export default Config;
