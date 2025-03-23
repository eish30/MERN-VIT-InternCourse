import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ selectedProduct }) => {
  const { id } = useParams();

  if (!selectedProduct || selectedProduct.id !== Number(id)) {
    return <p className="text-center p-10">Product not found.</p>;
  }

  return (
    <section className="p-10 text-center">
      <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
      <img src={selectedProduct.image} alt={selectedProduct.name} className="mx-auto mt-4" />
      <p className="text-lg">{selectedProduct.price}</p>
    </section>
  );
};

export default ProductDetails;
