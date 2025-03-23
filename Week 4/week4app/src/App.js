import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products setSelectedProduct={setSelectedProduct} />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={<ProductDetails selectedProduct={selectedProduct} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
