import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: -webkit-linear-gradient(47deg, var(--primary), var(--tertiary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const GradientText: FC = ({ children }) => <Wrapper>{children}</Wrapper>;
