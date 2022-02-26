import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: var(--size-md);
  margin: 0 auto;
  padding-left: var(--size-6);
  padding-right: var(--size-6);
`;

const Page = styled.h1`
  line-height: var(--font-lineheight-3);
  --tt-key: pagetitle-page;

  /* prettier-ignore */
  @keyframes pagetitle-page {
    0%, 30% { font-size: var(--font-size-6); }
    100% { font-size: var(--font-size-7); }
  }
`;

const Title = styled.h2`
  color: var(--text-2);
  --tt-key: pagetitle-title;

  /* prettier-ignore */
  @keyframes pagetitle-title {
    0%, 30% { font-size: var(--font-size-4); }
    100% { font-size: var(--font-size-5); }
  }
`;

export interface PageTitleProps {
  page: string;
  title: string;
}

export const PageTitle: FC<PageTitleProps> = ({ page, title }) => {
  return (
    <Wrapper>
      <Page>{page}</Page>
      <Title>{title}</Title>
    </Wrapper>
  );
};
