import styles from './components.module.css';

const OrderProducts = ({ id, qtd, name, flavor, complement }) => {
  return (
    <div className={styles.orderItemPlaced} key={id}>
      <p>{qtd}</p>
      <div>
        <p>{name}</p>
        {flavor !== null || complement !== null ? (
          <section>
            <p>- {flavor}</p>
            <p>- {complement}</p>
          </section>
        ) : null}
      </div>
    </div>
  );
};

export default OrderProducts;
