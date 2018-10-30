import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Table from '../../table/EnancedTable.entries';

import './Entries.css';

class Entries extends Component {
  render() {
    return (
      <div className="entries">
        <h1>Ingresos de mercadería</h1>
        <Link to="/entry">
          <Button variant="contained" className="entry-button">Nuevo ingreso</Button>
        </Link>
        <Table />
      </div>
    );
  }
}

export default Entries;
