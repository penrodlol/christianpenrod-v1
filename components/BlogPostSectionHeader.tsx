import gsap from 'gsap';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { Svg } from './Svg';

const Wrapper = styled.h2(
  ({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    pointer-events: none;

    svg {
      display: none;
      position: absolute;
      left: -2.5rem;
      bottom: 0.2rem;
    }

    @media screen and (min-width: ${theme.breakpoint.sm}) {
      pointer-events: unset;
      cursor: pointer;

      &:hover {
        svg {
          display: block;
        }
      }
    }
  `,
);

const Anchor = styled.a`
  color: ${({ theme }) => theme.text.emphasis};
`;

export const BlogPostSectionHeader: FC = ({ children }) => {
  const id = (children?.valueOf() as string).toLowerCase().replace(/ /g, '-');

  return (
    <Wrapper id={`${id}-header`}>
      <Svg name="link" width={30} height={30} />
      <Anchor
        href={`#${id}`}
        aria-label={`Blog post section: ${id}`}
        onClick={() =>
          gsap.to(window, {
            scrollTo: {
              y: `#${id}-header`,
              offsetY: 100,
              autoKill: true,
            },
            ease: 'power2',
          })
        }
      >
        {children}
      </Anchor>
    </Wrapper>
  );
};
