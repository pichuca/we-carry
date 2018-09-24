import Head from 'next/head'
import Layout from '../components/commons/Layout.js';

const Index = () => (
  <div className="app-container">
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet" />
      <title>We Carry - Dashboard</title>
    </Head>
    <Layout>
        <p>We Carry dashboard</p>
    </Layout>
  </div>
)  
export default Index