const Common = {

};

const dev = {
  apiBaseUrl: 'http://localhost:4000/api/'
};

const prod = {
  apiBaseUrl: 'https://dev-diaries.herokuapp.com/api/'
}
console.log('STAGE', process.env.NODE_ENV);
const envConfig = process.env.NODE_ENV === 'production' ? prod: dev;
console.log(envConfig);

const Config = { Common, ...envConfig };

export default Config;
