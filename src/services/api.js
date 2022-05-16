import { URL, getToken } from "../Local/localStorageAndURL.js";

export const createUser = (endpoint, elements) => {
  return fetch(`${URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": getToken(),
    },
    body: JSON.stringify({
      name: elements.name,
      email: elements.email,
      password: elements.password,
      role: elements.role,
      restaurant: "Burguer Programmer",
    }),
  });
};

export const loginUser = (endpoint, elements) => {
  return fetch(`${URL}${endpoint}` , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: elements.email,
      password: elements.password,
    })
  });
};

export const getProducts = (endpoint) => {
  return fetch(`${URL}${endpoint}` , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken(),
    },
  })
  .then(res => res.json());
};