import api from '../config/api';

export const login = email => api.get('/users', email);
