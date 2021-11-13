import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: -webkit-linear-gradient(45deg, var(--accent-100), #cab4e6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const GradientText = ({ children }: PropsWithChildren<{}>) => (
  <Wrapper>{children}</Wrapper>
);
