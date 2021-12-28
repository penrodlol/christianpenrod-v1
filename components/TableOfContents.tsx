import { TOC } from '@interfaces/post';
import gsap from 'gsap';
import { createRef, FC, useEffect } from 'react';
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

function getTrigger(id: string) {
  return `#${id}-header`;
}

export interface TableOfContentsProps {
  toc: TOC;
}

export const TableOfContents: FC<TableOfContentsProps> = ({ toc }) => {
  const contentsRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const tweens: Array<gsap.core.Tween> = [];

    gsap.utils
      .selector(contentsRef)<HTMLAnchorElement>('a')
      .forEach((a) => {
        const nextAnchor = a.nextElementSibling as HTMLAnchorElement;
        const baseST: ScrollTrigger.Vars = {
          trigger: getTrigger(a.id),
          start: 'top 30%',
          toggleActions: 'restart reset restart reset',
        };

        const tween = gsap.to(a, {
          color: 'var(--text-emphasis)',
          scrollTrigger: nextAnchor
            ? {
                ...baseST,
                endTrigger: `#${nextAnchor.id}-header`,
                end: 'top 30%',
              }
            : baseST,
        });

        tweens.push(tween);
      });

    return () => {
      tweens.forEach((tween) => tween.kill());
    };
  });

  return (
    <Wrapper>
      <Title>Table of Contents</Title>
      <Divider gap={1} />
      <Contents ref={contentsRef}>
        {toc.map((item, index) => (
          <Item
            key={item.id}
            id={item.id}
            aria-label={`Jump to '${item.label}' section within blog post.`}
            onClick={() =>
              gsap
                .to(window, {
                  scrollTo: {
                    y: index === 0 ? 0 : getTrigger(item.id),
                    offsetY: 100,
                  },
                  duration: 0,
                })
                .kill()
            }
          >
            {index + 1}. {item.label}
          </Item>
        ))}
      </Contents>
      <IntroductionHeader id="introduction-header" />
    </Wrapper>
  );
};
