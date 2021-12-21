import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.secondary.base};
  font-size: 0.8em;
  font-weight: 600;
  width: max-content;
  color: black;
  padding: 0.3rem 0.8rem;
  margin: 0.3rem 0;
  border-radius: 12rem;
`;

export const Chip: FC = ({ children }) => <Wrapper>{children}</Wrapper>;
