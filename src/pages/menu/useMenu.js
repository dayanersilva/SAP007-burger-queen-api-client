// import { getProducts } from "../../services/api";
// import { useState } from "react";
import { getProducts } from "../../services/api";
// import { getRole } from "../../Local/localStorageAndURL";


const useProducts = () => {

    const handleButtonTypeClick = (e) => {
     getProducts('/products')
      .then(res => res.json());
      console.log('products');
    };

    return {handleButtonTypeClick};

};
export default useProducts;