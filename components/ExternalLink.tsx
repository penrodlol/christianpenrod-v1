import { AnchorHTMLAttributes, FC } from 'react';
import styled, { css } from 'styled-components';
import { Svg } from './Svg';

const Wrapper = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 0.2rem;
  align-items: center;
  justify-content: start;

  svg {
    align-self: start;
    height: 90%;
    transform: translateY(-0.05rem);
  }
`;

const Anchor = styled.a<ExternalLinkProps>(
  ({ theme, underline }) => css`
    text-decoration: ${underline ? 'underline' : 'none'};
    color: inherit;
    text-decoration-color: ${theme.primary.base};
    text-decoration-thickness: 0.135em;
    text-underline-offset: 0.175em;
  `,
);

export interface ExternalLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  underline: boolean;
}

export const ExternalLink: FC<ExternalLinkProps> = (props) => (
  <Wrapper>
    <InnerWrapper>
      <Anchor {...props} target="_blank">
        {props.children}
      </Anchor>
      <Svg name="external" fill="var(--primary-base)" width={20} height={20} />
    </InnerWrapper>
  </Wrapper>
);
