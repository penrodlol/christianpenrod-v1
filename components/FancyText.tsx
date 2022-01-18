import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.strong`
  color: var(--text-emphasis);
  font-family: var(--font-serif);
  font-size: var(--font-size-3);
`;

export const FancyText: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
