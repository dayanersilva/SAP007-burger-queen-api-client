import React from "react";

const ResultPrice = (total) => {
  return (
    <article className="total-area">
      <p>R$ {total.value},00</p>
    </article>
  );
};

export default ResultPrice;
