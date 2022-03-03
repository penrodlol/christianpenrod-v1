import HashLink from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { Divider } from './Divider';

const Title = styled.h3`
  font-size: var(--font-size-4);
`;

const Contents = styled.ol`
  display: grid;
  gap: var(--size-3);
  color: var(--text-2);
`;

const Item = styled.a`
  color: var(--text-2);
  font-size: var(--font-size-1);
  border-radius: var(--radius-2);

  &:where(:hover, :focus-visible, :focus:not(:focus-visible)) {
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
  return (
    <nav>
      <Title>Table of Contents</Title>
      <Divider />
      <Contents>
        {headers.map((item, index) => (
          <li key={item}>
            <HashLink href={{ hash: toHeader(item) }} passHref>
              <Item aria-label={`Jump to '${item}' section within blog post.`}>
                {index + 1}. {item}
              </Item>
            </HashLink>
          </li>
        ))}
      </Contents>
    </nav>
  );
};
