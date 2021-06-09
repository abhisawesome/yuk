import Head from 'next/head';
import Create from '../components/Form';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Load Balancer</title>
        <meta name="description" content="Configure load balancer easily" />
      </Head>
      <main >
        <Create />
      </main>
    </div>
  );
}

export default Home
