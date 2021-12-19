import { FC } from 'react';
import styled from 'styled-components';
import { GradientText } from './GradientText';

const Wrapper = styled.div`
  width: max-content;
  margin-left: 1rem;
`;

const Page = styled.h1`
  line-height: 0.8em;
  --tt-key: pagetitle-page;

  /* prettier-ignore */
  @keyframes pagetitle-page {
    0%, 30% { font-size: 2em; }
    100% { font-size: 2.5em; }
  }
`;

const Title = styled.h2`
  --tt-key: pagetitle-title;

  /* prettier-ignore */
  @keyframes pagetitle-title {
    0%, 30% { font-size: 1.3em; }
    100% { font-size: 1.8em; }
  }
`;

export interface PageTitleProps {
  page: string;
  title: string;
}

export const PageTitle: FC<PageTitleProps> = ({ page, title }) => {
  return (
    <Wrapper>
      <GradientText>
        <Page>{page}</Page>
      </GradientText>
      <Title>{title}</Title>
    </Wrapper>
  );
};
