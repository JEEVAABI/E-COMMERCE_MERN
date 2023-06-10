import React from 'react';
import Product from './product';
import data from './data.json';

const Products = () => {
  return (
    <div>
      <h2>Featured Products</h2>
      <div>
        {data.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
    // <section className="products">
    //   <h2 className="products__title">Featured Products</h2>
    //   <div className="products__list">
    //     {data.products.map((product) => (
    //       <Product key={product.id} product={product} />
    //     ))}
    //   </div>
    // </section>
  );
};

export default Products;
