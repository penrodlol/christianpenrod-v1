import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { Welcome } from '../components/Welcome';

const HomeWrapper = styled.div`
  width: max-content;
  margin: 0 auto;
  margin-top: 100px;
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
        <HomeWrapper>
          <Welcome />
        </HomeWrapper>
      </main>
    </div>
  );
};

export default Home;
