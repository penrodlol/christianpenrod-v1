import { PageHead } from '@components/PageHead';
import type { NextPage } from 'next';
import styled from 'styled-components';

const Wrapper = styled.main``;

const About: NextPage = () => {
  return (
    <>
      <PageHead title="About" />
      <Wrapper></Wrapper>
    </>
  );
};

export default About;
