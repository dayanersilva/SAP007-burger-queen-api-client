import { URL, getToken } from "../Local/localStorageAndURL.js";

export const createUser = (endpoint, elements) => {
  return fetch(`${URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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
  return fetch(`${URL}${endpoint}`, {
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
  return fetch(`${URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken(),
    },
  })
    .then(res => res.json());
};

export const sendOrder = (endpoint, orderInfo, items) => {
  return fetch(`${URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken()
    },
    body: JSON.stringify({
      client: orderInfo.client,
      table: orderInfo.table,
      products: items,
    })
  })
};

export const getOrders = (endpoint) => {
  return fetch(`${URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken()
    },
  }).then((res) => res.json())
};

export const updateOrderStatus = (endpoint, id, status) => {
  id = id.toString();
  return fetch(`${URL}${endpoint}${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken(),
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST',
    },
    body: JSON.stringify({
      status
    })
  }).then((res) => res.json())
};