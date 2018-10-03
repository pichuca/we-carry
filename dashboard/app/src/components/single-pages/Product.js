import React from 'react';
import Paper from '@material-ui/core/Paper';

import './Product.css';

const Product = ({ match }) => (
  <div className="product">
    <div className="image-wrapper">
      <img src="" alt="" />
    </div>
    <h2>{match.params.name}</h2>
    <h3>SKU #: <span>{match.params.sku}</span></h3>
    <h3>Disponibilidad: <span>{match.params.availability}</span></h3>
    <div className="technical-details">
      <Paper className="wrapper">
        <h4>Pesos:</h4>
        <h4>Dimensiones:</h4>
        <h4>Precios:</h4>
      </Paper>
    </div>
  </div>
);

export default Product;