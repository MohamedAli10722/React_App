import React from "react";
import { products } from "./ProductData";
import CounterComponent from "../Buttons/TwoButtons";

const TheProducts = () => {
  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{ border: "1px solid #ccc", padding: "10px" }}
          >
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <CounterComponent />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheProducts;
