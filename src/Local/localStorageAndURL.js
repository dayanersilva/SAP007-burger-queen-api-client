export const URL = 'https://lab-api-bq.herokuapp.com';

//criando o token e o role
export const TokenAndRole = (token, role) => {
  localStorage.setItem('token', token);
  localStorage.setItem('role', role);
}

export const getToken = () => localStorage.getItem('token');
export const getRole = () => localStorage.getItem('role');
