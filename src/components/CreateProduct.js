import React from "react";
import { useState } from "react";
import "./styles/CreateProduct.css";

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
  });
  const handleSave = () => {
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => {
        if (response.ok) {
          console.log("product saved successfully");
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.error("Error creating product:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <div className="product-form">
      <h2 className="form-title">Create Product</h2>
      <label className="form-label">
        Name:
        <input
          type="text"
          name="name"
          value={newProduct.name}
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
          value={newProduct.price}
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

export default CreateProduct;
