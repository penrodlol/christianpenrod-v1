import Eye from '@svg/eye.svg';
import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: var(--text-1);
  font-size: var(--font-size-3);
  letter-spacing: var(--font-letterspacing-4);
  background: var(--surface-2);
  padding: var(--size-2) var(--size-4);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-2);
  max-width: max-content;
  display: flex;
  gap: var(--size-2);
  align-items: center;
`;

export interface HitCounterProps {
  count: number;
}

export const HitCounter: FC<HitCounterProps> = ({ count }) => (
  <Wrapper>
    <Eye width={25} height={25} />
    <span>{count.toString().padStart(6, '0')}</span>
  </Wrapper>
);
