import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.h2`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  pointer-events: none;
`;

const Anchor = styled.a`
  color: ${({ theme }) => theme.text.emphasis};
`;

export const BlogPostSectionHeader: FC = ({ children }) => {
  const id = (children?.valueOf() as string).toLowerCase().replace(/ /g, '-');

  return (
    <Wrapper id={`${id}-header`}>
      <Anchor href={`#${id}`} aria-label={`Blog post section: ${id}`}>
        {children}
      </Anchor>
    </Wrapper>
  );
};
