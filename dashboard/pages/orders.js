import Layout from '../components/commons/Layout.js'
import CustomTable from '../components/commons/Table.js'

const headerStyle = {
    color: '#0076ff',
    fontWeight: 600,
};

const inventoryColumns = [
    {
        dataField: 'SKU',
        text: 'SKU o # de referencia',
    },
    {
        dataField: 'buyer',
        text: 'Comprador',
    },
    {
        dataField: 'products',
        text: 'Productos',
    },
    {
        dataField: 'tracking',
        text: 'Tracking',
    },
    {
        dataField: 'status',
        text: 'Estado',
    }
];

const inventoryProducts = [
    {
        SKU: '12345',
        buyer: { name: 'Antonio Sanchez', email: 'antoniosanchez@gmail.com'},
        products: ['producto 1', 'producto 2', 'producto 3'],
        tracking: 'Link a pagina de tracking',
        status: 'En camino',
        key: 1,
    },
];

export default () => (
  <Layout>
    <h1 style={headerStyle}>Pedidos</h1>
    <CustomTable tableHeads={inventoryColumns} cols={inventoryProducts} type={'orders'} />
  </Layout>
)