import axios from 'axios';

const baseURL = 'http://192.168.1.113:8080';

export const api = axios.create({
  baseURL,
  timeout: 8000,
});

export const post = (url: string, data: Record<string | number, any>): Promise<any> => axios.post(`${baseURL}${url}`, data);

export const get = (url: string, data: Record<string | number, any>): Promise<any> => axios.get(`${baseURL}${url}`, data);
