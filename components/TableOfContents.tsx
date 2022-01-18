import { FC } from 'react';
import styled from 'styled-components';
import { Divider } from './Divider';

export const Wrapper = styled.aside`
  position: sticky;
  top: var(--size-11);
  right: 0;
  z-index: var(--surface2);
  max-width: max-content;
`;

const Title = styled.span`
  letter-spacing: var(--font-letterspacing-3);
  font-size: var(--font-size-3);
`;

const Contents = styled.nav`
  display: grid;
  gap: var(--size-3);
`;

const Item = styled.a`
  color: var(--text1);
  font-size: 0.9em;
  cursor: pointer;
`;

const IntroductionHeader = styled.h2`
  position: fixed;
  top: 0;
  z-index: -1;
`;

export interface TableOfContentsProps {
  toc: Array<string>;
}

export const TableOfContents: FC<TableOfContentsProps> = ({ toc }) => {
  return (
    <Wrapper>
      <Title>Table of Contents</Title>
      <Divider />
      <Contents>
        {toc.map((item, index) => (
          <Item
            key={item}
            id={item}
            aria-label={`Jump to '${item}' section within blog post.`}
          >
            {index + 1}. {item}
          </Item>
        ))}
      </Contents>
      <IntroductionHeader id="introduction-header" />
    </Wrapper>
  );
};
