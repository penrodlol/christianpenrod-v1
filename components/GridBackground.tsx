import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--grid-background-surface);
  background-image: paint(grid-background);
`;

export const GridBackground: FC = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
