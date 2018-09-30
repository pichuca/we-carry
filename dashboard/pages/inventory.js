import Layout from '../components/commons/Layout.js'
import CustomTable from '../components/commons/Table.js'
import Button from '@material-ui/core/Button'

import './css/inventory.css'

const headerStyle = {
  color: '#0076ff',
  fontWeight: 600,
};

const buttonStyles = {
  color: '#0076ff',
  border: '0',
  marginRight: '15px',
  textDecoration: 'capitalize',
}

const inventoryColumns = [
  {
    dataField: 'image',
    text: '',
  },
  {
    dataField: 'SKU',
    text: 'SKU o # de referencia',
  },
  {
    dataField: 'name',
    text: 'Nombre',
  },
  {
    dataField: 'availability',
    text: 'Disponibilidad',
  },
  {
    dataField: 'ordered',
    text: 'Pedidos',
  }
];

const inventoryProducts = [
  {
      SKU: '12345',
      name: 'Remera dryfit [ADIDAS]',
      availability: '32/76',
      orders: '11',
  },
];

const emptyMessage = 'No hay productos para mostrar en su inventario.';

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedFilter: null
    };
  }

  handleFilterClick(event) {
    const clickedFilterID = event.currentTarget.id;
    this.setState({
      clicked: clickedFilterID,
    });
  }

  render() {
    const Filter = () => {
      return (
        <div className="ui-filter">
          <div className="ui-filter-buttons">
             <Button id="all" style={buttonStyles} className={this.state.clicked === 'all' ? 'selected' : ''} variant="outlined" onClick={this.handleFilterClick.bind(this)}>
               All
             </Button>
             <Button id="withStock" style={buttonStyles} className={this.state.clicked === 'withStock' ? 'selected' : ''} variant="outlined" onClick={this.handleFilterClick.bind(this)}>
               Con Stock
             </Button>
             <Button id="lastInStock" style={buttonStyles} className={this.state.clicked === 'lastInStock' ? 'selected' : ''} variant="outlined" onClick={this.handleFilterClick.bind(this)}>
               Por agotarse
             </Button>
             <Button id="noStock" style={buttonStyles} className={this.state.clicked === 'noStock' ? 'selected' : ''}  variant="outlined" onClick={this.handleFilterClick.bind(this)}>
               Sin Stock
             </Button>
          </div>
        </div>
      );
    }
    return (
      <Layout>
        <h1 style={headerStyle}>Inventario</h1>
        <Filter />
        <CustomTable tableHeads={inventoryColumns} cols={inventoryProducts} type={'inventory'} />
      </Layout>
    );
  }
}

export default Inventory;
