import { API_ROOT } from '../config';
export const Api = {
    get(url, options = { absoluteUrl: false }) {
        const config = {
            method: 'GET',
            headers: getHeaders()
        };
        return window
            .fetch(buildUrl(url, options.absoluteUrl), config)
            .then(response => response.json());
    },
    put(url, payload) {
        return window.fetch(`${API_ROOT}${url}`, {
            method: 'PUT',
            body: payload,
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });
    },
    post(url, payload) {
        return window.fetch(`${API_ROOT}${url}`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });
    },
    patch(url, payload) {
        return window.fetch(`${API_ROOT}${url}`, {
            method: 'PATCH',
            body: payload,
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });
    },
    delete(url, payload = {}) {
        return window.fetch(`${API_ROOT}${url}`, {
            method: 'DELETE',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });
    }
};
function getHeaders() {
    return undefined;
}
function buildUrl(url, absoluteUrl) {
    return absoluteUrl ? url : `${API_ROOT}${url}`;
}
