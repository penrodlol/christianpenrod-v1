import { gsap } from 'gsap';
import { ButtonHTMLAttributes, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;
`;

const HamburgerItem = styled.div`
  border-radius: var(--rounded);
  background: -webkit-linear-gradient(
    47deg,
    var(--primary),
    hsl(265, 80%, 77%)
  );
  height: 0.3rem;
  width: 2.5rem;

  &:not(&:last-child) {
    margin-bottom: 0.6rem;
  }
`;

const tl = gsap.timeline({
  defaults: { duration: 0.8, ease: 'elastic' },
  paused: true,
});

export const Hamburger = (props: ButtonHTMLAttributes<HTMLDivElement>) => {
  const [status, setStatus] = useState(false);
  const top = useRef<HTMLDivElement>(null);
  const bottom = useRef<HTMLDivElement>(null);

  function animate() {
    // prettier-ignore
    tl
      .to(top.current, {
        onStart: () => { setStatus(!status) },
        rotate: status ? 0 : '45deg',
        translateY: status ? 0 : '0.125rem',
      }, 0)
      .to(bottom.current, {
          rotate: status ? 0 : '-45deg',
          translateY: status ? 0 : '-0.125rem',
          marginTop: status ? 0 : '-0.6rem',
      }, 0)
      .play(0)
      .eventCallback('onComplete', () => {
        tl.pause().clear();
      });
  }

  return (
    <Wrapper id="hamburger" tabIndex={0} {...props} onClick={animate}>
      {['top', 'bottom'].map((item, index) => (
        <HamburgerItem key={item} ref={index === 0 ? top : bottom} />
      ))}
    </Wrapper>
  );
};
