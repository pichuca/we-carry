import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Table from '../../table/EnancedTable.entries';

class Entries extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Ingresos de mercadería</h1>
        <Link to="/entry">
          <Button className="entry-button">Nuevo ingreso</Button>
        </Link>
        <Table />
      </React.Fragment>
    );
  }
}

export default Entries;
