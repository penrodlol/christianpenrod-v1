import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.primary.base};
  border-radius: ${({ theme }) => theme.rounded.base};
  height: 0.3rem;
  margin: 0.7rem 0;
`;

export const Divider = () => <Wrapper />;
