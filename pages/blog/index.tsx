import { PageHead } from '@components/PageHead';
import type { NextPage } from 'next';
import styled from 'styled-components';

const Wrapper = styled.main``;

const Blog: NextPage = () => {
  return (
    <>
      <PageHead page="Blog" />
      <Wrapper></Wrapper>
    </>
  );
};

export default Blog;
