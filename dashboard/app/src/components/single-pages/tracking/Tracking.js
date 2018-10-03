import React from 'react';
import Stepper from '../../stepper/Stepper';

import './Tracking.css';

const Tracking = ({ match }) => (
  <div className="tracking">
    <div className="image-wrapper">
      <img src="" alt="" />
    </div>
    <h2>¿Dónde esta tu producto?</h2>
    <h4>SKU#: {match.params.sku}</h4>
    <Stepper className="tracking-steps" />
  </div>
);

export default Tracking;