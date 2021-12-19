import { PageHead } from '@components/PageHead';
import type { NextPage } from 'next';
import styled from 'styled-components';

const Wrapper = styled.main``;

const Projects: NextPage = () => {
  return (
    <>
      <PageHead title="Projects" />
      <Wrapper></Wrapper>
    </>
  );
};

export default Projects;
