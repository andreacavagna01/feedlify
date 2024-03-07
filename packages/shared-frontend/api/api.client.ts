import axios from 'axios';


const API_ROOT = 'http://localhost:3000';

interface IOptions {
  absoluteUrl: boolean;
}


export const api = {
  get(url: string, options: IOptions = { absoluteUrl: false }) {
    return axios
      .get(buildUrl(url,options.absoluteUrl), {
        headers: getHeaders(),
      })
      .then((response) => {
        return response.data?.data;
      })
      .catch((error) => {
        // eslint-disable-next-line promise/no-return-wrap
        return Promise.reject(error?.response?.data || error?.response || error);
      });
  },

  put(url: string, payload: any) {
    return axios
      .put(`${API_ROOT}${url}`, payload, {
        headers: getHeaders(),
      })
      .then((response) => response.data?.data)
      .catch((error) => {
        // eslint-disable-next-line promise/no-return-wrap
        return Promise.reject(error?.response?.data || error?.response || error);
      });
  },

  post(url: string, payload: any) {
    return axios
      .post(`${API_ROOT}${url}`, payload, { headers: getHeaders() })
      .then((response) => response.data?.data)
      .catch((error) => {
        // eslint-disable-next-line promise/no-return-wrap
        return Promise.reject(error?.response?.data || error?.response || error);
      });
  },

  patch(url: string, payload: any) {
    return axios
      .patch(`${API_ROOT}${url}`, payload, {
        headers: getHeaders(),
      })
      .then((response) => response.data?.data)
      .catch((error) => {
        // eslint-disable-next-line promise/no-return-wrap
        return Promise.reject(error?.response?.data || error?.response || error);
      });
  },

  delete(url: string, payload = {}) {
    return axios
      .delete(`${API_ROOT}${url}`, {
        ...payload,
        headers: getHeaders(),
      })
      .then((response) => response.data?.data)
      .catch((error) => {
        // eslint-disable-next-line promise/no-return-wrap
        return Promise.reject(error?.response?.data || error?.response || error);
      });
  },
}

function getHeaders() {
  return undefined;
 /* const token = localStorage.getItem('auth_token');

  return token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : undefined;*/
}

function buildUrl(url: string, absoluteUrl: boolean) {
  return absoluteUrl ? url : `${API_ROOT}${url}`;
}