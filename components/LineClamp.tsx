import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<LineClampProps>`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${({ maxLines }) => maxLines};
  -webkit-box-orient: vertical;
`;

export interface LineClampProps {
  maxLines: number;
}

export const LineClamp: FC<LineClampProps> = ({ children, maxLines }) => (
  <Wrapper maxLines={maxLines}>{children}</Wrapper>
);
