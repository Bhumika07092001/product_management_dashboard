import React from "react";
import EditProduct from "../components/EditProduct";
import { useParams } from "react-router-dom";

const EditProductView = () => {
  const { id } = useParams();
  return <EditProduct id={id} />;
};

export default EditProductView;
