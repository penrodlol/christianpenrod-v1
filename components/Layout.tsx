import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { FC } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  > :first-child {
    padding-top: var(--size-7);
  }
`;

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
