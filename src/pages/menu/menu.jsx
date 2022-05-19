import React, {useState} from 'react';
import useProducts from "./useMenu";
import ProductsCards from '../../components/productInfo';

const Menu = () => {
  const [items, setItems] = useState([]);
  const {
    handleButtonTypeClick,
    productsFiltered
  } = useProducts();
  const handleAddItem = (product) => {
    console.log(product)
    const productIndex = items.findIndex((item) => {
      return item.id === product.id
    })
    if(productIndex === -1) {
      setItems([...items, {...product, qtd: 1}])
    } else {
      items[productIndex].qtd += 1
      setItems([...items])
    }
  }
  return (
    <main className='main'>
      <p> MENU </p>
      <div className='menu-types'>
        <button className='menu-button' onClick={handleButtonTypeClick} value={'breakfast'}>Café da manhã</button>
        <button className='menu-button' onClick={handleButtonTypeClick} value={'all-day'}>All Day</button>
      </div>    
      <div>
        <ul>
          {items.map((item, index) => <li key={index}>{item.name} {item.qtd} </li>)}
        </ul>
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
          )
        })}
      </div>
    </main>
  );
};
export default Menu;