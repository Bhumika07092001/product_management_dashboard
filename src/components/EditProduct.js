import React from "react";
import { useState } from "react";
import "./styles/EditProduct.css";

const EditProduct = ({ id }) => {
  const [editProduct, setEditProduct] = useState({ name: "", price: "" });

  const handleSave = () => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editProduct),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "/";
          console.log("product updated successfully");
        }
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProduct({ ...editProduct, [name]: value });
  };

  return (
    <div className="product-form">
      <h2 className="form-title">Edit Product</h2>
      <label className="form-label">
        Name:
        <input
          type="text"
          name="name"
          value={editProduct.name}
          onChange={(e) => {
            handleChange(e);
          }}
          required
          className="form-input"
        />
      </label>
      <label className="form-label">
        Price:
        <input
          type="number"
          name="price"
          value={editProduct.price}
          onChange={(e) => {
            handleChange(e);
          }}
          required
          className="form-input"
        />
      </label>
      <button className="form-button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default EditProduct;
