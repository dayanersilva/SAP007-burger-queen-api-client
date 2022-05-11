const URL = 'lab-api-bq.herokuapp.com/';

export const createUser = (endpoint, email, password) => {
    return fetch(`${URL}${endpoint}` , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    });
  };