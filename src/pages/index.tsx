import Head from 'next/head';
import Root from '../components/Root';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Load Balancer</title>
        <meta name="description" content="Configure reverse proxy easily" />
      </Head>
      <main >
          <Root />
      </main>
    </div>
  );
}

export default Home
