import { create } from 'apisauce';

const api = create({
  baseURL: process.env.API_BASE_URL,
  timeout: 20000
});

export default api;
