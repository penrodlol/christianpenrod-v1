import { gsap } from 'gsap';
import { ButtonHTMLAttributes, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  z-index: 9999999999;
  cursor: pointer;
  border-radius: 0.1rem;
`;

const HamburgerItem = styled.div`
  height: 0.3rem;
  width: 2.5rem;
  border-radius: 0.1em;
  background: var(--light-100);
  &:not(&:last-child) {
    margin-bottom: 0.6rem;
  }
`;

export const Hamburger = (props: ButtonHTMLAttributes<HTMLDivElement>) => {
  const [status, setStatus] = useState(false);
  const timeline = gsap.timeline({
    defaults: { duration: 0.8, ease: 'elastic' },
  });
  const top = useRef<HTMLDivElement>(null);
  const bottom = useRef<HTMLDivElement>(null);

  function animate() {
    // prettier-ignore
    timeline
      .to(top.current, {
        onStart: () => { setStatus(!status) },
        rotate: status ? 0 : '45deg',
        translateY: status ? 0 : '0.125rem',
      })
      .to(bottom.current, {
          rotate: status ? 0 : '-45deg',
          translateY: status ? 0 : '-0.125rem',
          marginTop: status ? 0 : '-0.6rem'
      }, 0);
  }

  return (
    <Wrapper className="ring" tabIndex={0} {...props} onClick={animate}>
      {['top', 'bottom'].map((item, index) => (
        <HamburgerItem key={item} ref={index === 0 ? top : bottom} />
      ))}
    </Wrapper>
  );
};
