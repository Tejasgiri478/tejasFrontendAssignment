import React from "react";
import ProductList from "./features/products/ProductList";
import ProductForm from "./features/products/ProductForm";

const App = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Management System</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
        <ProductForm />
      </div>

      <ProductList />
    </div>
  );
};

export default App;
