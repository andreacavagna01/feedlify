import axios from 'axios';
import { API_ROOT } from '../config';

interface IOptions {
  absoluteUrl: boolean;
}


export const Api = {
  get(url: string, options: IOptions = { absoluteUrl: false }) {
    const config = {
      method: 'GET',
      headers: getHeaders()
    }
    return window
      .fetch(buildUrl(url,options.absoluteUrl), config,)
      .then(response => response.json())
  },

  put(url: string, payload: any) {
    return window.fetch(`${API_ROOT}${url}`, {
      method: 'PUT',
      body: payload,
      headers: {'Content-Type': 'application/json; charset=UTF-8'} 
    })
  },

  post(url: string, payload: any) {
    return window.fetch(`${API_ROOT}${url}`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json; charset=UTF-8'} 
    })
  },

  patch(url: string, payload: any) {
    return window.fetch(`${API_ROOT}${url}`, {
      method: 'PATCH',
      body: payload,
      headers: {'Content-Type': 'application/json; charset=UTF-8'} 
    })
  },

  delete(url: string, payload = {}) {
    return window.fetch(`${API_ROOT}${url}`, {
      method: 'DELETE',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json; charset=UTF-8'} 
    })
  }
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