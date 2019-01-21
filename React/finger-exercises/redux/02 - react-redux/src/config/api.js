import { create } from 'apisauce';

const api = create({
  baseURL: process.env.API_BASE_URL,
  timeout: 2000
});

export default api;
