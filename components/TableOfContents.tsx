import { TOC } from '@interfaces/post';
import gsap from 'gsap';
import { FC } from 'react';
import { Tween } from 'react-gsap';
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
  cursor: pointer;
`;

const IntroductionHeader = styled.h2`
  position: fixed;
  top: 0;
  z-index: -1;
`;

export interface TableOfContentsProps {
  toc: TOC;
}

export const TableOfContents: FC<TableOfContentsProps> = ({ toc }) => {
  return (
    <Wrapper>
      <Title>Table of Contents</Title>
      <Divider gap={1} />
      <Contents>
        {toc.map(({ id, label }, index) => {
          const trigger = `#${id}-header`;
          const nextId = toc.find((_, target) => target === index + 1)?.id;
          const endTrigger = `#${nextId}-header`;
          const baseST: ScrollTrigger.Vars = {
            trigger,
            start: 'top 30%',
            toggleActions: 'restart reset restart reset',
          };

          return (
            <Tween
              key={id}
              to={{
                color: 'var(--text-emphasis)',
                scrollTrigger: nextId
                  ? { ...baseST, endTrigger, end: 'top 30%' }
                  : baseST,
              }}
            >
              <Item
                id={id}
                aria-label={`Jump to '${label}' section within blog post.`}
                onClick={() =>
                  gsap
                    .to(window, {
                      scrollTo: { y: index === 0 ? 0 : trigger, offsetY: 100 },
                      duration: 0,
                    })
                    .kill()
                }
              >
                {index + 1}. {label}
              </Item>
            </Tween>
          );
        })}
      </Contents>
      <IntroductionHeader id="introduction-header" />
    </Wrapper>
  );
};
