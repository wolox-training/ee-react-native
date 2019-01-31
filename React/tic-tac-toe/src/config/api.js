import { create } from 'apisauce';

const API_BASE_URL = 'http://localhost:3333';

const api = create({
  baseURL: API_BASE_URL,
  timeout: 20000
});

export default api;
