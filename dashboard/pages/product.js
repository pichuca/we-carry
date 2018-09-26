import {withRouter} from 'next/router'
import Layout from '../components/commons/Layout.js'

const headerStyle = {
    color: '#0076ff',
    fontWeight: 600,
};

const Content = withRouter((props) => (
    <div>
        <h1 style={headerStyle}>{props.router.query.sku}</h1>
        <h2 style={headerStyle}>{props.router.query.name}</h2>
    </div>
))

const Product = () => (
    <Layout>
        <Content />
    </Layout>
)

export default Product
