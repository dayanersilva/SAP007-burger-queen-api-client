import React from "react";
import { useEffect } from "react";
import useKitchen from "./useKitchen"
import OrderCard from "../../components/orderCards";

const Kitchen = () => {
    const { setOrders, getData, ordersFiltered, handleStatus, orders, orderStatus} = useKitchen();
  
    useEffect(() => {
      const interval = setInterval(() => {
        return getData();
      }, 50);
      return () => clearInterval(interval);
    }, [])
  
    useEffect(() => {
      if (orderStatus.status === 'finalizado') {
        return orderStatus.map((order) => {
          const foundOrder = orders.map((elem) => elem).findIndex((item) => item.id === order.id);
          if (foundOrder !== -1) {
            const removed = orders
            removed.splice(foundOrder, 1)
            setOrders([...removed])
          }
          return orders;
        })
      }
    }, [orderStatus]);
  
    return ( 
    <main className='kitchen-main'>
      <p>KITCHEN</p>
      <div className='orders-list'>
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
                onClick={() => handleStatus(elem)}
                products={product}
              />
            </div>
          )
        }
        )}
      </div>

    </main>
   )
}
export default Kitchen;