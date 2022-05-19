import React from "react";

const ResultPrice = (total) => {
  return (
  <div className='total-area'>
    <p>Total:</p>
    <p>R${total.value},00</p>
  </div>
  )
}

export default ResultPrice;