import axios from 'axios';
import { API_ROOT } from '../config';
export const Api = {
    get(url, options = { absoluteUrl: false }) {
        return axios
            .get(buildUrl(url, options.absoluteUrl), {
            headers: getHeaders(),
        })
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            return Promise.reject(error?.response?.data || error?.response || error);
        });
    },
    put(url, payload) {
        return axios
            .put(`${API_ROOT}${url}`, payload, {
            headers: getHeaders(),
        })
            .then((response) => response.data?.data)
            .catch((error) => {
            return Promise.reject(error?.response?.data || error?.response || error);
        });
    },
    post(url, payload) {
        return axios
            .post(`${API_ROOT}${url}`, payload, { headers: getHeaders() })
            .then((response) => response.data)
            .catch((error) => {
            return Promise.reject(error?.response?.data || error?.response || error);
        });
    },
    patch(url, payload) {
        return axios
            .patch(`${API_ROOT}${url}`, payload, {
            headers: getHeaders(),
        })
            .then((response) => response.data)
            .catch((error) => {
            return Promise.reject(error?.response?.data || error?.response || error);
        });
    },
    delete(url, payload = {}) {
        return axios
            .delete(`${API_ROOT}${url}`, {
            ...payload,
            headers: getHeaders(),
        })
            .then((response) => response.data)
            .catch((error) => {
            return Promise.reject(error?.response?.data || error?.response || error);
        });
    },
};
function getHeaders() {
    return undefined;
}
function buildUrl(url, absoluteUrl) {
    return absoluteUrl ? url : `${API_ROOT}${url}`;
}
