import React from "react";
import useProducts from "./useMenu";
import ProductsCards from "../../components/productInfo";
import Cart from "../../components/cart";
import ResultPrice from "../../components/resultPrice";
import MenuHamburguer from "../../components/menuHamburguer";
import { useNavigate } from "react-router-dom";

import logoroxo from "../../img/logoroxo.png";
import styles from "./menu.module.css";

const Menu = () => {
  const navigate = useNavigate();
  const {
    handleButtonTypeClick,
    productsFiltered,
    handleAddItem,
    handleSelectComplement,
    handleSelectFlavor,
    handleDeleteProducts,
    handleSendToKitchen,
    handleOrderChange,
    productsType,
    total,
    items,
  } = useProducts();
  return (
    <div className={styles.root}>
      <main>
        <nav className={styles.navBar}>
          <div className={styles.menuHamburguer}>
            <MenuHamburguer />
          </div>
          <picture>
            <img
              src={logoroxo}
              alt="Quem disse Burguer"
              className={styles.logoroxo}
            />
          </picture>
        </nav>
        <section className={styles.attendantTabe}>
          <section className={styles.orderingTab}>
            <div>
              <div className={styles.orderSelection}>
                <button
                  className={styles.selectionButton}
                  onClick={handleButtonTypeClick}
                  value={"breakfast"}
                >
                  Café da manhã
                </button>
                <button
                  className={styles.selectionButton}
                  onClick={handleButtonTypeClick}
                  value={"hamburguer"}
                >
                  Hambúrgueres
                </button>
                <button
                  className={styles.selectionButton}
                  onClick={handleButtonTypeClick}
                  value={"side"}
                >
                  Acompanhamentos
                </button>
                <button
                  className={styles.selectionButton}
                  onClick={handleButtonTypeClick}
                  value={"drinks"}
                >
                  Bebidas
                </button>
              </div>
              {productsType === "hamburguer" ? (
                <section className={styles.flavorAndComplementSelection}>
                  <select
                    className={styles.selectFlavor}
                    defaultValue={"escolher o sabor"}
                    onChange={handleSelectFlavor}
                  >
                    <option value="escolher o sabor">Sabor</option>
                    <option value="carne">Carne</option>
                    <option value="frango">Frango</option>
                    <option value="vegetariano">Vegetariano</option>
                  </select>
                  <div
                    defaultValue={"complemento"}
                    className={styles.selectComplement}
                    onChange={handleSelectComplement}
                  >
                    <input
                      type="radio"
                      name="check"
                      value="queijo"
                      className={styles.cheeseComplement}
                      onChange={handleSelectComplement}
                    />{" "}
                    Queijo
                    <input
                      type="radio"
                      name="check"
                      value="ovo"
                      className={styles.eggComplement}
                      onChange={handleSelectComplement}
                    />{" "}
                    Ovo
                  </div>
                </section>
              ) : (
                ""
              )}
            </div>
            <ul className={styles.productList}>
              {productsFiltered().map((element, index) => {
                return (
                  <ProductsCards
                    key={index}
                    image={element.image}
                    name={element.name}
                    flavor={element.flavor}
                    complement={element.complement}
                    price={element.price}
                    onClick={() => handleAddItem(element)}
                  />
                );
              })}
            </ul>
          </section>
          <section className={styles.orderSection}>
            <div className={styles.orderSectionTitle}>
              <h3 className={styles.hColor}>Pedido</h3>
            </div>
            <div className={styles.clientInformation}>
              <input
                className={styles.clientName}
                type="text"
                placeholder="NOME"
                name="client"
                autoComplete="off"
                onChange={handleOrderChange}
              />
              <select
                className={styles.clientTable}
                defaultValue={"0"}
                autoComplete="off"
                name="table"
                onChange={handleOrderChange}
              >
                <option value="0"> MESA </option>
                <option value="1">Mesa 1</option>
                <option value="2">Mesa 2</option>
                <option value="3">Mesa 3</option>
                <option value="4">Mesa 4</option>
                <option value="5">Mesa 5</option>
                <option value="6">Mesa 6</option>
                <option value="7">Mesa 7</option>
                <option value="8">Mesa 8</option>
                <option value="9">Mesa 9</option>
                <option value="10">Mesa 10</option>
              </select>
            </div>
            <ul>
              {items.map((item, index) => {
                return (
                  <Cart
                    key={index}
                    name={item.name}
                    flavor={item.flavor}
                    complement={item.complement}
                    price={item.price}
                    qtd={item.qtd}
                    onClick={() => handleDeleteProducts(item)}
                  />
                );
              })}
            </ul>
            <section className={styles.finalization}>
              <div className={styles.totalOrder}>
                <h4>SUB-TOTAL</h4>
                <ResultPrice value={total} />
              </div>
              <button
                className={styles.finalizeOrder}
                onClick={handleSendToKitchen}
              >
                Finalizar pedido
              </button>
            </section>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Menu;
