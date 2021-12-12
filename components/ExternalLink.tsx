import { AnchorHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text.base};
`;

export const ExternalLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props,
) => (
  <Wrapper {...props} target="_blank">
    {props.children}
  </Wrapper>
);
