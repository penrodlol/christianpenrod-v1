import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { FC } from 'react';
import styled from 'styled-components';
import { PageHead } from './PageHead';

const Main = styled.main`
  > :first-child {
    padding-top: var(--size-7);
  }
`;

export const Layout: FC = ({ children }) => {
  return (
    <>
      <PageHead />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
