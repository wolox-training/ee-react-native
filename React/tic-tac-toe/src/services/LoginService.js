import api from '../config/api';

export const login = user => api.get('/users', user);
