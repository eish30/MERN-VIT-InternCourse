import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: "$999", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Phone", price: "$699", image: "https://via.placeholder.com/150" },
];

const Products = ({ setSelectedProduct }) => {
  return (
    <section className="p-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 text-center">
          <img src={product.image} alt={product.name} className="mx-auto" />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p>{product.price}</p>
          <Link
            to={`/product/${product.id}`}
            className="bg-blue-500 text-white p-2 mt-2 inline-block rounded"
            onClick={() => setSelectedProduct(product)}
          >
            View Details
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Products;
