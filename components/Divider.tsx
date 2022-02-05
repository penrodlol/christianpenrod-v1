import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: var(--brand-1);
  border-radius: var(--radius-2);
  height: var(--size-1);
  margin: var(--size-3) 0;
`;

export const Divider = () => <Wrapper />;
