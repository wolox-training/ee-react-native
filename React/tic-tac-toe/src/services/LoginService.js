import api from '../config/api';

export const login = async user => {
  const response = await api.get('/users', { email: user.email });
  if (response.ok) {
    if (response.data.length > 0) {
      if (response.data[0].password === user.password) {
        response.data = response.data[0].token;
      } else {
        response.ok = false;
        response.problem = 'Password is incorrect';
      }
    } else {
      response.ok = false;
      response.problem = 'Email not registered yet';
    }
  }
  return response;
};
