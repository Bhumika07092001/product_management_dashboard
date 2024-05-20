import React, { createContext, useState } from "react";

export const ProductDataContext = createContext();

const ProductDataProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({
    id: "",
    name: "",
    price: "",
  });
  return (
    <ProductDataContext.Provider
      value={{ productList, setProductList, currentProduct, setCurrentProduct }}
    >
      {children}
    </ProductDataContext.Provider>
  );
};

export { ProductDataProvider };
