import { useState, useEffect } from "react";
import { getProducts, sendOrder } from "../../services/api";
import { getRole } from '../../Local/localStorageAndURL'


const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [items, setItems] = useState([]);
  const [productsType, setProductsType] = useState('breakfast');
  const [flavor, setFlavor] = useState();
  const [complement, setComplement] = useState('');
  const [total, setTotal] = useState(0);
  const [orderInfo, setOrderInfo] = useState({ client: '', table: '' });
  const [orderError, setOrderError] = useState('');

  //função que busca os produtos la na api 
  const getData = async () => {
    const data = await getProducts('/products');
    setProducts(data);
  };

  // useEffect usado para renderizar na pagina eja colocar na tela o que pegou da API, sem dependencias
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
    } else if (productsType === 'hamburguer') {
      let filterHamburguer = products.filter((elem) => elem.flavor === flavor);
      if (complement !== '') {
        filterHamburguer = filterHamburguer.filter((elem) => elem.complement === complement)
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
    if (productIndex === -1) {
      setItems([...items, { ...product, qtd: 1 }])
    } else {
      items[productIndex].qtd += 1
      setItems([...items])

    }
  };

  //carrinho de compras
  const handleDeleteProducts = (elem) => {
    const foundItem = items.findIndex((item) => item.id === elem.id);
    if (foundItem !== -1) {
      const qtd = items[foundItem].qtd
      if (qtd === 1) {
        const removed = items
        removed.splice(foundItem, 1)
        setItems([...removed])
      } else {
        const newArr = items;
        newArr[foundItem].qtd--;
        setItems([...newArr])
      }
    } else {
      setItems(
        [...items,
        {
          id: elem.id,
          qtd: elem.qtd,
          name: elem.name,
          price: elem.price,
          flavor: elem.flavor
        }]);
    }
  };

  //valor do carrinho
  useEffect(() => {
    const sum = (previousValue, currentValue) => previousValue + currentValue;
    setTotal(() => {
      const price = items.map((elem) => elem.qtd * elem.price);
      return price.reduce(sum, 0);
    })
  }, [items]);

  //buscando valore e informacoes do cliente e da mesa 
  const handleOrderChange = (e) => {
    return setOrderInfo(() => {
      const auxValues = { ...orderInfo };
      auxValues[e.target.name] = e.target.value;
      return auxValues;
    });
  };

  //enviando pedido pra cozinha
  const handleSendToKitchen = () => {
    if (getRole() === 'attendent') {
      sendOrder('/orders', orderInfo, items)
        .then((res => res.json()))
        .then((data) => {
          if (data.code === 400) {
            setOrderError('Preencher nome e mesa do cliente')
          } else {
            setItems([]);
            setFlavor('');
            setComplement('');
            setOrderError('');
            setOrderInfo({ client: '', table: '' });
          }
        });
    } else {
      setOrderError('Apenas o/a atendente fazer um pedido')
    }
  };

  return { handleButtonTypeClick, productsFiltered, handleAddItem, handleSelectFlavor, handleDeleteProducts, handleSelectComplement, handleSendToKitchen, handleOrderChange, productsType, items, total, orderError, orderInfo, flavor, }
};
export default useProducts;