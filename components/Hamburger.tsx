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
  border: none;
  border-radius: var(--radius-2);
`;

const Trigger = styled.input`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: var(--size-7);
  inset: 0;
  opacity: 0;
  cursor: pointer;

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
  background: var(--brand-1);
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
