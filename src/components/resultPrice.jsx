import React from "react";

const ResultPrice = (total) => {
  return (
    <div className="total-area">
      <p>R$ {total.value},00</p>
    </div>
  );
};

export default ResultPrice;
