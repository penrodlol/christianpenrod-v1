import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--primary);
  height: 0.3rem;
  border-radius: var(--rounded);
  margin: 0.7rem 0;
`;

export const Divider = () => <Wrapper />;
