import { useState, useEffect } from "react";
import { getProducts } from "../../services/api";


const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [productsType, setProductsType] = useState();
  const [flavor, setFlavor] = useState();
  const [complement, setComplement] = useState('');


  const getData = async () => {
    const data = await getProducts('/products');
    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleButtonTypeClick = (e) => {
    setProductsType(e.target.value);
  }
  const handleSelectFlavor = (e) => setFlavor(e.target.value);
  const handleSelectComplement = (e) => setComplement(e.target.value);

  const productsFiltered = () => {
    if (productsType === 'breakfast') {
      return products.filter((elem) => elem.type === 'breakfast')
    } else if( productsType === 'hamburguer') {
      // if(flavor !== '') {
        let filterHamburguer = products.filter((elem) => elem.flavor === flavor)
        if(complement !== '' ){
          return filterHamburguer.filter((elem) => elem.complement === complement)
        }
        return filterHamburguer;
    } else if (productsType === 'side' || productsType === 'drinks') {
      return products.filter((elem) => elem.sub_type === productsType)
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

  return { handleButtonTypeClick, productsFiltered, handleAddItem, handleSelectFlavor, handleSelectComplement, productsType, items }
};
export default useProducts;