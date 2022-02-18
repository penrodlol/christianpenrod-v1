import { FC } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.span<SpacerProps>(
  ({ size }) => css`
    display: block;
    margin: var(--size-${size || 8});
  `,
);

export interface SpacerProps {
  size?: number;
}

export const Spacer: FC<SpacerProps> = ({ size }) => (
  <Wrapper size={size}></Wrapper>
);
