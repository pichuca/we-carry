import Layout from '../components/commons/Layout.js'
import CustomTable from '../components/commons/Table.js'

const headerStyle = {
  color: '#0076ff',
  fontWeight: 600,
};

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

export default () => (
  <Layout>
    <h1 style={headerStyle}>Inventario</h1>
    <CustomTable tableHeads={inventoryColumns} cols={inventoryProducts} type={'inventory'} />
  </Layout>
)