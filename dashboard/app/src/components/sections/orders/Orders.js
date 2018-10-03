import React, { Component } from 'react';
import EnancedTableOrders from '../../../components/table/EnancedTable.orders';

class Orders extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Pedidos</h1>
        <EnancedTableOrders />
      </React.Fragment>
    );
  }
}

export default Orders;
