import React, { Component } from 'react';
import EnancedTable from '../../../components/table/EnancedTable';

class Inventory extends Component {
  componentDidMount() {
    // TODO:
  }
  render() {
    return (
      <React.Fragment>
        <h1>Inventario</h1>
        <EnancedTable />
      </React.Fragment>
    );
  }
}

export default Inventory;
