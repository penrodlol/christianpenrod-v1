import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  background: var(--sunflower2);
  color: var(--text-offset);
  font-size: var(--font-size-0);
  font-weight: var(--font-weight-6);
  border-radius: var(--radius-6);
  padding: var(--size-1) var(--size-2);
  width: max-content;
  white-space: nowrap;

  * {
    color: var(--text-offset);
    text-decoration: none;
  }
`;

export const Chip: FC = ({ children }) => <Wrapper>{children}</Wrapper>;
