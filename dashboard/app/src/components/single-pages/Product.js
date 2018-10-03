import React from 'react';

const Product = ({ match }) => (
  <div>
    <h3>SKU: {match.params.sku}</h3>
  </div>
);

export default Product;