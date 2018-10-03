import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Form from '../../form/Form';

import './Entry.css';

const Entry = () => (
  <div className="entry">
    <h2>Pedido de ingreso nuevo:</h2>
    <h4>Completa los datos para realizar tu pedido de nuevo ingreso de mercadería.</h4>
    <Card className="entry-form-wrapper">
      <Form />
      <Button variant="outlined">
          Ingresar
      </Button>
    </Card>
  </div>
);

export default Entry;