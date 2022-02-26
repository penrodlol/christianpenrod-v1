import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  --grid-surface: var(--surface-2);
  --grid-surface-lines: hsla(230, 14%, 41%, 0.349);

  background: var(--surface-2);
  background-image: paint(grid-surface);
  max-width: var(--size-xl);
  margin: 0 auto;
`;

export const GridSurface: FC = ({ children }) => <Wrapper>{children}</Wrapper>;
