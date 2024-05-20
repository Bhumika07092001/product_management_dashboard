import React from "react";
import "./styles/ProductList.css";

const ProductList = ({ product }) => {
  const handleViewProduct = (id) => {
    window.location.href = `/single-product/${id}`;
  };
  return (
    <div className="product-overview">
      <h2 className="product-name">{product.name}</h2>
      <button
        className="view-button"
        onClick={() => {
          handleViewProduct(product.id);
        }}
      >
        View
      </button>
    </div>
  );
};

export default ProductList;
