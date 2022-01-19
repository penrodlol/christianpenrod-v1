import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  PropsWithChildren,
} from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: var(--size-7);
  z-index: var(--layer-5);
  background: transparent;
`;

const Trigger = styled.input`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: var(--size-7);
  inset: 0;
  opacity: 0;

  &:checked ~ {
    #top {
      transform: rotate(45deg);
    }

    #bottom {
      transform: rotate(-45deg);
    }
  }
`;

const Item = styled.span`
  background: -webkit-linear-gradient(47deg, var(--brand1), hsl(265, 80%, 77%));
  width: 2.5rem;
  height: 0.35rem;
  border-radius: var(--radius-2);
  transform: rotate(0);
  transition: all 0.5s var(--ease-squish-4);
  position: relative;
  transform-origin: 9px;
`;

const HamburgerComponent = (
  props: PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>,
  ref: ForwardedRef<HTMLInputElement>,
) => (
  <Wrapper>
    <Trigger ref={ref} {...props} type="checkbox" />
    <Item id="top" />
    <Item id="bottom" />
  </Wrapper>
);

export const Hamburger = forwardRef(HamburgerComponent);
