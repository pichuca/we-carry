import React from 'react';

const Product = ({ match }) => (
  <div>
    <h3>SKU #: {match.params.sku}</h3>
    <h3>{match.params.name}</h3>
    <h3>Disponibilidad: {match.params.availability}</h3>
  </div>
);

export default Product;