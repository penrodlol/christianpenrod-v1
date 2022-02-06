import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { titleCase } from '@utils/functions';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styled from 'styled-components';

const NAME = 'Christian Penrod';

const Main = styled.main`
  > :first-child {
    padding-top: var(--size-7);
  }
`;

export const Layout: FC = ({ children }) => {
  const { asPath } = useRouter();

  const page = titleCase(asPath.replace('/', ''));
  const title = page ? `${NAME} - ${page}` : NAME;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={`${page || 'Home'} page of christianpenrod.com.`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
