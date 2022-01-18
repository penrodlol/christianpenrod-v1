import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: -webkit-linear-gradient(var(--brand1), hsl(265, 80%, 77%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const GradientText: FC = ({ children }) => <Wrapper>{children}</Wrapper>;
