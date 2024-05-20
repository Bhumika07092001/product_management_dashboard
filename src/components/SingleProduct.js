import React, { useContext } from "react";
import "./styles/SingleProduct.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const SingleProduct = ({ product }) => {
  const handleEdit = (id) => {
    window.location.href = `/edit-product/${id}`;
  };
  const handleDelete = () => {
    console.log("delete item id:", product.id);
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log("product deleted successfully", res);
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      })
      .catch((e) => {
        console.error("Error deleting product:", e);
      });
  };
  return (
    <>
      <div className="product-container">
        <h2 className="product-id">
          <i>Product ID:</i>
          {product.id}
        </h2>
        <h2 className="product-name">
          <i>Product Name:</i>
          {product.name}
        </h2>
        <h2 className="product-price">
          <i>Price:</i>
          {product.price}
        </h2>
        <button
          className="delete-button"
          onClick={() => {
            handleDelete(product.id);
          }}
        >
          <DeleteIcon />
        </button>
        <button
          className="edit-button"
          onClick={() => {
            handleEdit(product.id);
          }}
        >
          <EditIcon />
        </button>
      </div>
    </>
  );
};

export default SingleProduct;
