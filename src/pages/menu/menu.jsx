import React from 'react';
import useProducts from "./useMenu";
import ProductsCards from '../../components/productInfo';

const Menu = () => {
  const {
    handleButtonTypeClick,
    productsFiltered, 
    handleAddItem, 
    items
  } = useProducts();
  return (
    <main className='menu'>
      <p> MENU </p>
      <div className='menu-type'>
        <button className='btn-menu' onClick={handleButtonTypeClick} value={'breakfast'}>Café da manhã</button>
        <button className='btn-menu' onClick={handleButtonTypeClick} value={'all-day'}>All Day</button>
        <button className='btn-menu' onClick={handleButtonTypeClick} value={'drinks'}>Bebidas</button>
      </div>    
      <section className='products-list'>
        <ul>
          {items.map((item, index) => <li className='cart' key={index}>{item.name} {item.qtd} </li>)}
        </ul>
        {productsFiltered().map((elem, index) => {
          return (
            <ProductsCards
            key={index}
            image={elem.image}
            name={elem.name}
            flavor={elem.flavor}
            complement={elem.complement}
            price={elem.price}
            onClick={() => handleAddItem(elem)}
            />
          )
        })}
      </section>
    </main>
  );
};
export default Menu;