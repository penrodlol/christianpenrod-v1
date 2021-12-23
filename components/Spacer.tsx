import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<SpacerProps>`
  margin: ${({ size }) => size || 3}em 0;
`;

export interface SpacerProps {
  size: number;
}

export const Spacer: FC<SpacerProps> = ({ size }) => (
  <Wrapper size={size}></Wrapper>
);
