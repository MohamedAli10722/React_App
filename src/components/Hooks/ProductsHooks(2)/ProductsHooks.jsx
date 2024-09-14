import React, { useState } from "react";
import { products } from "../../lab2/Products/ProductData";
import ButtonsHooks from "./ButtonsHooks";

const ProductsHooks = () => {
  const [product, setProduct] = useState(products);

  const addNewProduct = () => {
    const newProduct = {
      id: product.length + 1,
      name: `Product ${product.length + 1}`,
      price: `$${(product.length + 1) * 10}`,
    };
    setProduct([...product, newProduct]);
  };

  return (
    <div>
      <h2>Products</h2>
      <button onClick={addNewProduct}>Add New Product</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {product.map((TheProduct) => (
          <div
            key={TheProduct.id}
            style={{
              border: "1px solid gray",
              borderRadius: "10px",
              margin: "10px",
              padding: "10px",
              width: "200px",
            }}
          >
            <h3>{TheProduct.name}</h3>
            <p>Price: {TheProduct.price}</p>
            <div>
              <ButtonsHooks />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsHooks;
