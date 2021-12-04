import { Header } from '@components/Header/Header';
import { Welcome } from '@components/Welcome';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

const HomeContent = styled.div`
  padding: 0 1.5rem;
  padding-top: 2.5rem;
  min-width: 15.625rem;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Christian Penrod</title>
        <meta name="description" content="Christian Penrod Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header></Header>
        <HomeContent>
          <Welcome />
        </HomeContent>
      </main>
    </div>
  );
};

export default Home;
