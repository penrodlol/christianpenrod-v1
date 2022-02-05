import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.strong`
  color: var(--brand-1);
  font-family: var(--font-fancy);
  font-weight: var(--font-weight-7);
`;

export const FancyText: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
