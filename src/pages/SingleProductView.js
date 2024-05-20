import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";
import { ProductDataContext } from "../ProductDataContext";
import "./styles/SingleProductView.css";

const SingleProductView = () => {
  const { id } = useParams();
  const { currentProduct, setCurrentProduct } = useContext(ProductDataContext);
  useEffect(() => {
    console.log("fetching product with id:", id);
    fetch(`http://localhost:3000/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("single product data:", data);
        setCurrentProduct({
          id: data.id,
          name: data.name,
          price: data.price,
        });
        console.log("single product data:", data);
      })
      .catch((e) => {
        console.error("Error fetching products:", e);
      });
  }, []);
  return (
    <div className="single-product-container">
      <h1 className="single-product-title">Product Detail</h1>
      <SingleProduct product={currentProduct} />
    </div>
  );
};

export default SingleProductView;
