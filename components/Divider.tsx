import { FC } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<DividerProps>(
  ({ theme, gap }) => css`
    background: ${theme.primary.base};
    border-radius: ${theme.rounded.base};
    height: 0.3rem;
    margin: ${gap ? `${gap}em 0` : '0.7rem 0'};
  `,
);

export interface DividerProps {
  gap?: number;
}

export const Divider: FC<DividerProps> = ({ gap }) => <Wrapper gap={gap} />;
