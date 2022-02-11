import gsap from 'gsap';
import { FC } from 'react';
import styled from 'styled-components';
import { Divider } from './Divider';

const Title = styled.summary`
  font-size: var(--font-size-4);
  list-style: none;
`;

const Contents = styled.ol`
  display: grid;
  gap: var(--size-3);
  color: var(--text-2);
`;

const Item = styled.a`
  color: var(--text-2);
  font-size: var(--font-size-1);
  cursor: pointer;

  &:hover {
    color: var(--text-1);
  }
`;

function toHeader(raw: string) {
  return raw.toLowerCase().replace(/ /g, '-');
}

export interface TableOfContentsProps {
  headers: Array<string>;
}

export const TableOfContents: FC<TableOfContentsProps> = ({ headers }) => {
  function goTo(id: string) {
    const target = id === 'introduction' ? 0 : `#${id}`;
    const tween = gsap.to(window, {
      scrollTo: {
        y: target,
        offsetY: 100,
        autoKill: true,
      },
      ease: 'back.inOut(0.8)',
      duration: 1,
      onComplete: () => {
        tween.kill();
      },
    });
  }

  return (
    <details open>
      <Title>Table of Contents</Title>
      <Divider />
      <Contents>
        {headers.map((item, index) => (
          <li key={item}>
            <Item
              aria-label={`Jump to '${item}' section within blog post.`}
              onClick={() => goTo(toHeader(item))}
            >
              {index + 1}. {item}
            </Item>
          </li>
        ))}
      </Contents>
    </details>
  );
};
