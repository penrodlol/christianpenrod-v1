import { FC } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<DividerProps>(
  ({ size }) => css`
    background-color: var(--brand-1);
    border-radius: var(--radius-2);
    height: var(--size-1);
    margin: var(--size-${size || '3'}) 0;
  `,
);

export interface DividerProps {
  size?: number;
}

export const Divider: FC<DividerProps> = (props) => <Wrapper {...props} />;
