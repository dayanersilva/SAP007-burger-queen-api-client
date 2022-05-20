import React from 'react';
import { useEffect } from 'react';
import useOrder from './useOrder';
import OrderCard from '../../components/orderCards';

const Order =  () => {
    const { getData, ordersFiltered, handleStatus } = useOrder();

      useEffect(() => {
        const interval = setInterval(() => {
          return getData();
        }, 500);
        return () => clearInterval(interval);
      }, [])

    return (
      <main className='request'>
         <p> PEDIDOS </p>
          <section className='orders-list'>
            {ordersFiltered().map((elem) => {
              const clientProducts = elem.Products;
              const product = clientProducts.map((product) => product)
              return (
                <div key={elem.id}>
                  <OrderCard
                    id={elem.id}
                    name={elem.client_name}
                    table={elem.table}
                    status={elem.status}
                    createdAt={elem.createdAt}
                    updatedAt={elem.updatedAt}
                    onClick={() => handleStatus(elem)}
                    nameButton={'Servir pedido'}
                    products={product}
                  />
                </div>
              )
            })}
          </section>
      </main> 
    )
};
export default Order;