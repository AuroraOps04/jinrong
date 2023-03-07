import axios from 'axios';
import Cookie from 'js-cookie';
const service = axios.create();
service.interceptors.request.use((config) => {
  if (config.url.indexOf('loginPhone') < 0) {
    config.headers['Authorization'] = `${Cookie.get('token')}`;
  }
  return config;
});

export default service;
