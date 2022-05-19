import { useState, useEffect } from "react";
//import ProductsCards from "../../components/productInfo";
import { getProducts } from "../../services/api";


const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [showMenu, setShowMenu] = useState();

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
    }
    console.log(products)
    return []
  }

  return { handleButtonTypeClick, productsFiltered }
};
export default useProducts;