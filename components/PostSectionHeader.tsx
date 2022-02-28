import Link from '@svg/link.svg';
import HashLink from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { Media } from './Media';

const Wrapper = styled.h2`
  --tt-key: post-section-header-wrapper;

  position: relative;
  margin-bottom: var(--size-3);
  color: var(--guava-2);
  scroll-margin-top: var(--size-10);

  svg {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: calc(var(--size-8) * -1);
    opacity: 0;
  }

  &:hover {
    svg {
      animation: var(--animation-fade-in) forwards;
    }
  }

  /* prettier-ignore */
  @keyframes post-section-header-wrapper {
    0%, 40% { font-size: var(--font-size-5); }
    100% { font-size: var(--font-size-6); }
  }
`;

export const PostSectionHeader: FC = ({ children }) => {
  const id = (children?.valueOf() as string).toLowerCase().replace(/ /g, '-');

  return (
    <Wrapper id={id}>
      <Media greaterThanOrEqual="md">
        <HashLink
          href={{ hash: id }}
          passHref
          aria-label={`Blog post section: ${id}`}
        >
          <a>
            <Link width={35} height={35} />
          </a>
        </HashLink>
      </Media>
      {children}
    </Wrapper>
  );
};
