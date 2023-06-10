import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img className="product__image" src={product.image} alt={product.name} />
      <h3 className="product__name">{product.name}</h3>
      <p className="product__price">${product.price}</p>
    </div>
  );
};

export default Product;
