import axios from 'axios';

import {apiBase} from 'config';

const instance = axios.create({
  baseURL: apiBase,
  timeout: 60000
});

const request = (method, url, data) => {
  return new Promise((resolve, reject) => {
    (() => {
      if (method === 'get') {
        return instance.request({
          url, method, params: data, headers: {}
        });
      } else {
        return instance.request({
          url, method, data, headers: {}
        });
      }
    })()
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err.response);
    })
  ;
  });
};

export default {
  get: (endpoint, data) => {
    return request('get', endpoint, data);
  },
  post: (endpoint, data) => {
    return request('post', endpoint, data);
  },
  put: (endpoint, data) => {
    return request('put', endpoint, data);
  },
  del: (endpoint, data) => {
    return request('delete', endpoint, data);
  },
};
