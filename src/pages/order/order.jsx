import { useEffect } from 'react';
import useOrder from './useOrder';
import OrderCard from '../../components/orderCards';
import styles from '../kitchen/kitchen.module.css';
import MenuHamburguer from "../../components/menuHamburguer.jsx";
import logoroxo from '../../img/logo.png';

const Order = () => {
  const { getData, ordersFiltered, handleStatus, error } = useOrder();

  useEffect(() => {
    const interval = setInterval(() => {
      return getData();
    }, 500);
    return () => clearInterval(interval);
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
            const product = clientProducts.map((product) => product)
            return (
              <li key={elem.id}>
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
                  error={error}
                />
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  );
};
export default Order;