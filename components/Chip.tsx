import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  --_chip-font-size: 1.1em;

  background: var(--guava-2);
  font-size: var(--_chip-font-size);
  font-weight: var(--font-weight-8);
  letter-spacing: var(--font-letterspacing-2);
  border-radius: var(--radius-6);
  padding-block: var(--size-1);
  padding-inline: var(--size-2);
  width: max-content;
  white-space: nowrap;
  color: #000;
`;

export const Chip: FC = ({ children }) => <Wrapper>{children}</Wrapper>;
