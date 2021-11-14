import { Header } from '@Components/Header/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { Welcome } from '../components/Welcome';

const HomeContent = styled.div`
  width: max-content;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 60px;
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
