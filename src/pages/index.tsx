import Head from 'next/head';
import Create from '../components/create-form';

export default function Home() {
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
