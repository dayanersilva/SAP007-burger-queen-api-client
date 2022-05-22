import cancel from '../img/cancel.png';
import styles from "./components.module.css";

const Cart = ({ name, flavor, complement, price, qtd, type, onClick }) => {
  return (
    <li className={styles.order}>
      <div className={styles.orderContainer}>
        <p>{qtd}</p>
        <div className={styles.orderInformation}>
          <p>{name}</p>
          {type === "hamburguer" ? (
            <section>
              <p value="sabor">- {flavor}</p>
              <p name="complemento">
                - {`${complement !== null ? complement : ""}`}
              </p>
            </section>
          ) : ''}
        </div>
      </div>
      <div className={styles.priceContainerAndDelete}>
        <p>R$ {price},00</p>
        <button className={styles.deleteItem} onClick={onClick}>
          <img src={cancel} alt='Botão de excluir item' />
        </button>
      </div>
    </li>
  );
};

export default Cart;
