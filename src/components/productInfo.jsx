import styles from "./components.module.css";

const ProductsCards = ({ image, name, price, onClick }) => {
  return (
    <li className={styles.card}>
      <section>
        <h3>{name}</h3>
      </section>
      <section className={styles.infos}>
        <picture>
          <img src={image} alt="Item" className={styles.imageProduct} />
        </picture>
        <div className={styles.btnAndPrice}>
          <p>Preço: R${price}</p>
          <button className={styles.addProduct} onClick={onClick}>
            Adicionar
          </button>
        </div>
      </section>
    </li>
  );
};

export default ProductsCards;
