import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.h2`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: var(--size-3);
  pointer-events: none;
  --tt-key: post-section-header-wrapper;

  /* prettier-ignore */
  @keyframes post-section-header-wrapper {
    0%, 40% { font-size: var(--font-size-5); }
    100% { font-size: var(--font-size-6); }
  }
`;

const Anchor = styled.a`
  color: var(--guava-2);
`;

export const PostSectionHeader: FC = ({ children }) => {
  const id = (children?.valueOf() as string).toLowerCase().replace(/ /g, '-');

  return (
    <Wrapper id={id}>
      <Anchor href={`#${id}`} aria-label={`Blog post section: ${id}`}>
        {children}
      </Anchor>
    </Wrapper>
  );
};
