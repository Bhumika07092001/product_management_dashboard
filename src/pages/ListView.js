import React, { useEffect, useState, useContext } from "react";
import ProductListView from "../components/ProductList";
import { ProductDataContext } from "../ProductDataContext";
import AddIcon from "@mui/icons-material/Add";
import "./styles/ListView.css";
const ListView = () => {
  const { productList, setProductList } = useContext(ProductDataContext);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProductList(data);
        console.log("data:", data[1]);
      })
      .catch((e) => {
        console.error("Error fetching products:", e);
      });
  }, []);
  return (
    <div className="product-list">
      <h2 className="list-title">Product Management Dashboard</h2>
      <button
        className="add-button"
        onClick={() => (window.location.href = "/create-product")}
      >
        <AddIcon />
      </button>
      <div className="product-items">
        {productList.map((product, i) => (
          <ProductListView key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ListView;
