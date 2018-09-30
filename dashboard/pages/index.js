import Head from 'next/head'
import Inventory from './inventory';

const Index = () => (
  <div className="app-container">
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet" />
      <title>We Carry - Dashboard</title>
    </Head>
    <Inventory />
  </div>
)  
export default Index