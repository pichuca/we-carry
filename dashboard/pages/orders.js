import Layout from '../components/commons/Layout.js'

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
        buyer: 'Antonio Sanchez',
        products: ['producto 1', 'producto 2', 'producto 3'],
        tracking: 'Link a pagina de tracking',
        status: 'En camino',
        key: 1,
    },
];

export default () => (
  <Layout>
    <p>Pedidos</p>
  </Layout>
)