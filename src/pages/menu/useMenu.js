// import { getProducts } from "../../services/api";
import { useState, useEffect } from "react";
import ProductsCards from "../../components/productInfo";
import { getProducts } from "../../services/api";
// import { getRole } from "../../Local/localStorageAndURL";


const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [showMenu, setShowMenu] = useState('');

  const getData = () => {
    const data = getProducts('/products').then(data => data);
    setProducts(data);
  };

  useEffect(() => {
    return getData();
  }, []);
  
  const valueBtn = (e) => {
    console.log(showMenu);
    setShowMenu(e.target.value);
  }

    const handleButtonTypeClick = (e) => {
      console.log(products);
      if (valueBtn === 'breakfast') {
      console.log(valueBtn);
      return products.type['breakfast'].map((item) =>(
        <ProductsCards
          key={item.id}
          name={item.name}
          flavor={item.flavor}
          complement={item.complement}
          price={(item.price).toFixed(2)}
          image={item.image}	
          qtd={item.qtd}
        ></ProductsCards>
      ))
      } else if ( valueBtn === 'all-day') {
        console.log(valueBtn);
        return products.type['all-day'].map((item) =>(
          <ProductsCards
            key={item.id}
            name={item.name}
            flavor={item.flavor}
            complement={item.complement}
            price={(item.price).toFixed(2)}
            image={item.image}	
            qtd={item.qtd}
          ></ProductsCards>
        ))
      }
    };

    return {handleButtonTypeClick};

};
export default useProducts;