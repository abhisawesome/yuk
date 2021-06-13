import Head from 'next/head';
import Login from '../components/login';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Load Balancer</title>
        <meta name="description" content="Configure reverse proxy easily" />
      </Head>
      <main >
          <Login />
      </main>
    </div>
  );
}

export default Home
