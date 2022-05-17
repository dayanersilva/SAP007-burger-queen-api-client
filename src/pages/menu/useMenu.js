import { useState, useEffect } from "react";
import { getProducts } from "../../services/api";


const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [showMenu, setShowMenu] = useState();
  const [items, setItems] = useState([]);

  const getData = async () => {
    const data = await getProducts('/products');
    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleButtonTypeClick = (e) => {
    setShowMenu(e.target.value)
  };

  const productsFiltered = () => {
    if (showMenu === 'breakfast') {
      return products.filter((elem) => elem.type === 'breakfast')
    } else if (showMenu === 'all-day') {
      return products.filter((elem) => elem.type === 'all-day')
    } else if (showMenu === 'drinks') {
      return products.filter((elem) => elem.sub_type === 'drinks')
    }
    return []
  }

  const handleAddItem = (product) => {
    const productIndex = items.findIndex((item) => {
      return item.id === product.id
    })
    if(productIndex === -1) {
      setItems([...items, {...product, qtd: 1}])
    } else {
      items[productIndex].qtd += 1
      setItems([...items])
    }
  };

  return { handleButtonTypeClick, productsFiltered, handleAddItem, items }
};
export default useProducts;