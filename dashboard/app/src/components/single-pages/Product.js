import React from 'react';
import './Product.css';

const Product = ({ match }) => (
  <div className="product">
    <div className="image-wrapper">
      <img src="" alt="" />
    </div>
    <h3>SKU #: {match.params.sku}</h3>
    <h3>nombre de producto: {match.params.name}</h3>
    <h3>Disponibilidad: {match.params.availability}</h3>
  </div>
);

export default Product;