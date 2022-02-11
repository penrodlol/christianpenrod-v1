import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<SpacerProps>(
  ({ size }) => `margin: var(--size-${size || 8})`,
);

export interface SpacerProps {
  size?: number;
}

export const Spacer: FC<SpacerProps> = ({ size }) => (
  <Wrapper size={size}></Wrapper>
);
