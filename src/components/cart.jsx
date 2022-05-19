import React from "react";

const Cart = ({ name, flavor, complement, price, qtd}) => {
    return (
        <section className='card-cart'>
            <ul className='items'>
                <li className='item-name'>{name}</li>
                <section className='add-item'>
                <li  className='flavor' value='sabor'>Sabor: {flavor}</li>
                <li className='complement' name='complemento'>Complemento: {`${complement !== null ? complement : '' }`}</li>
                </section>
                <li>Preço: R${price},00</li>
                <li>Quantidade: {qtd} </li>
            </ul>
        </section>
    );
};

export default Cart;