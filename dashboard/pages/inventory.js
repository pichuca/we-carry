import Layout from '../components/commons/Layout.js'
import CustomTable from '../components/commons/Table.js'
import Button from '@material-ui/core/Button'

const headerStyle = {
  color: '#0076ff',
  fontWeight: 600,
};

const buttonStyles = {
  color: '#0076ff',
  border: '0',
  marginRight: '15px',
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
    this.state = {};
  }

  handleFilterClick(event) {
    console.log(event.currentTarget);
    console.log('Click on filter button');
  }

  render() {
    const Filter = (props) => {
      return (
        <div className="ui-filter">
          <div className="ui-filter-buttons">
           {props.list.map((button, index) => {
             return <Button style={buttonStyles} variant="outlined" onClick={this.handleFilterClick} key={index}>{button.label}</Button>
           })}
          </div>
        </div>
      );
    }
    const buttonList = [{label: 'Todos'}, {label: 'Con stock'}, {label: 'Por agotarse'}, {label: 'Sin stock'}]
    return (
      <Layout>
        <h1 style={headerStyle}>Inventario</h1>
        <Filter list={buttonList} />
        <CustomTable tableHeads={inventoryColumns} cols={inventoryProducts} type={'inventory'} />
      </Layout>
    );
  }
}

export default Inventory;
