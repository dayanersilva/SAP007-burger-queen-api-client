import { useState } from "react";
import { getOrders, updateOrderStatus } from "../../services/api";
import { getRole } from "../../Local/localStorageAndURL";

const useOrder = () => {
  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState([]);
  const [error, setError] = useState('');

  const sortById = (data) => {
    return data.sort((a, b) => {
      return b.id - a.id
    });
  };

  const getData = () => {
    getOrders('/orders')
      .then((data) => sortById(data))
      .then((newData) => setOrders(newData));
  };

  const ordersFiltered = () => {
    return orders.filter((item) => item.status === 'finalizado');
  };

  const handleStatus = (elem) => {
    if (getRole() === 'attendent') {
      updateOrderStatus('/orders/', elem.id, 'servido')
        .then(() => setOrderStatus([...orderStatus, { id: elem.id, status: 'servido' }]));
    } else {
      setError('Apenas o(a) atendente pode servir o pedido');
    }

  };

  return {
    getData,
    ordersFiltered,
    handleStatus,
    error,
  };
};

export default useOrder;