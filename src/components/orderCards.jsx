import React from "react";
import OrderProducts from "./orderProduct";
import { TimeOrInterval } from "./time/time";
import { initialStatus } from "./time/date";

const nameButton = (status) => {
  if (status === "pending") {
    return "Iniciar preparo";
  } else if (status === "preparando") {
    return "Finalizar preparo";
  } else {
    return "Servir pedido";
  }
};

const OrderCard = ({
  id,
  name,
  table,
  status,
  createdAt,
  updatedAt,
  onClick,
  products,
}) => (
  <section className="order-card">
    <p className="order-header"> Pedido N°{id}</p>
    <div className="cards-info">
      <TimeOrInterval
        createdAt={createdAt}
        updatedAt={updatedAt}
        status={status}
      />
      Nome:
      <p className="order-info">{name}</p>
      Mesa:
      <p className="order-info">{table}</p>
      Status:
      <p className="order-info">{initialStatus(status)}</p>
      Itens:
    </div>
    <div className="order-products">
      {products.map((elem) => {
        return (
          <OrderProducts
            key={elem.id}
            qtd={elem.qtd}
            name={elem.name}
            flavor={elem.flavor}
            complement={elem.complement}
          />
        );
      })}
    </div>
    <button className="order-button" onClick={onClick}>
      {nameButton(status)}
    </button>
  </section>
);

export default OrderCard;
