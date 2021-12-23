import { TOC } from '@interfaces/post';
import { gsap } from 'gsap';
import { FC } from 'react';
import styled from 'styled-components';
import { Divider } from './Divider';

export const Wrapper = styled.aside`
  position: sticky;
  top: 8.2rem;
  right: 0;
  z-index: 10;
`;

const Title = styled.h4`
  letter-spacing: 0.2em;
  font-size: 1.1em;
`;

const Contents = styled.nav`
  display: grid;
  gap: 0.7rem;
`;

const Item = styled.a`
  color: ${({ theme }) => theme.text.faded};
  font-size: 0.85em;
  font-weight: 400;
  cursor: pointer;
`;

export interface TableOfContentsProps {
  toc: TOC;
  active?: string;
}

export const TableOfContents: FC<TableOfContentsProps> = ({ toc }) => {
  return (
    <Wrapper>
      <Title>Table of Contents</Title>
      <Divider gap={1} />
      <Contents>
        <Item
          aria-label={`Jump to 'Introduction' section within blog post.`}
          onClick={() =>
            gsap.to(window, {
              scrollTo: 0,
              ease: 'power2',
            })
          }
        >
          1. Introduction
        </Item>
        {toc.map(({ id, label }, index) => (
          <Item
            key={id}
            href={`#${id}`}
            aria-label={`Jump to '${label}' section within blog post.`}
            onClick={() =>
              gsap.to(window, {
                scrollTo: { y: `#${id}-header`, offsetY: 100 },
                ease: 'power2',
              })
            }
          >
            {index + 2}. {label}
          </Item>
        ))}
      </Contents>
    </Wrapper>
  );
};
