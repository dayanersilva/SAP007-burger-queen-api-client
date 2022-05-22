import { useEffect } from "react";
import useKitchen from "./useKitchen"
import OrderCard from "../../components/orderCards";
import styles from './kitchen.module.css';
import MenuHamburguer from '../../components/menuHamburguer.jsx';
import logoroxo from '../../img/logoroxo.png';

const Kitchen = () => {
  const { setOrders, getData, ordersFiltered, handleStatus, orders, orderStatus, error, } = useKitchen();

  useEffect(() => {
    const interval = setInterval(() => {
      return getData();
    }, 5000);
    return () => clearInterval(interval);
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
  }, [orderStatus]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.root}>
      <main>
        <nav>
          <section className={styles.navBar}>
            <div className={styles.menuHamburguer}>
              <MenuHamburguer />
            </div>
            <picture>
              <img src={logoroxo} alt="Quem disse Burguer ?" className={styles.logoroxo} />
            </picture>
          </section>
        </nav>
        <ul className={styles.wishList}>
          {ordersFiltered().map((elem) => {
            const clientProducts = elem.Products;
            const product = clientProducts.map((product) => product);
            return (
              <li key={elem.id}>
                <OrderCard
                  id={elem.id}
                  name={elem.client_name}
                  table={elem.table}
                  status={elem.status}
                  createdAt={elem.createdAt}
                  onClick={() => handleStatus(elem)}
                  products={product}
                  error={error}
                />
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};
export default Kitchen;