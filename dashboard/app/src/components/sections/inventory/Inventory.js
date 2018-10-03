import React, { Component } from 'react';
import SimpleTable from '../../../components/table/SimpleTable';

class Inventory extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Inventory</h1>
        <SimpleTable />
      </React.Fragment>
    );
  }
}

export default Inventory;
