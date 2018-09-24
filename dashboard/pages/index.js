import Head from 'next/head'
import Layout from '../components/commons/Layout.js';

const headerStyle = {
    color: '#0076ff',
    fontWeight: 600,
};

const Index = () => (
  <div className="app-container">
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet" />
      <title>We Carry - Dashboard</title>
    </Head>
    <Layout>
        <h1 style={headerStyle}>We Carry dashboard</h1>
    </Layout>
  </div>
)  
export default Index