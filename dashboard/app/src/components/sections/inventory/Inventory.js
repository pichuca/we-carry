import React, { Component } from 'react';
import EnancedTable from '../../../components/table/EnancedTable';

class Inventory extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Inventory</h1>
        <EnancedTable />
      </React.Fragment>
    );
  }
}

export default Inventory;
