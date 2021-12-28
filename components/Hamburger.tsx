import { gsap } from 'gsap';
import {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;
`;

const HamburgerItem = styled.div`
  border-radius: ${({ theme }) => theme.rounded.base};
  background: -webkit-linear-gradient(
    ${({ theme }) => `47deg, ${theme.primary.base}, hsl(265, 80%, 77%)`}
  );
  height: 0.3rem;
  width: 2.5rem;

  &:not(&:last-child) {
    margin-bottom: 0.6rem;
  }
`;

const HamburgerComponent = (
  props: ButtonHTMLAttributes<HTMLDivElement>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const [status, setStatus] = useState(false);
  const hamburgerEl = gsap.utils.selector(ref);
  const tl = useRef<gsap.core.Timeline>();

  useEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 0.8, ease: 'elastic' },
      paused: true,
    });

    return () => {
      tl.current?.kill();
    };
  }, []);

  function animate() {
    const items = hamburgerEl('div');

    // prettier-ignore
    tl.current
      ?.to(items[0], {
        onStart: () => { setStatus(!status) },
        rotate: status ? 0 : '45deg',
        translateY: status ? 0 : '0.125rem',
      }, 0)
      .to(items[1], {
          rotate: status ? 0 : '-45deg',
          translateY: status ? 0 : '-0.125rem',
          marginTop: status ? 0 : '-0.6rem',
      }, 0)
      .play(0)
      .eventCallback('onComplete', () => {
        tl.current?.pause().clear();
      });
  }

  return (
    <Wrapper id="hamburger" tabIndex={0} ref={ref} {...props} onClick={animate}>
      {['top', 'bottom'].map((item) => (
        <HamburgerItem key={item} />
      ))}
    </Wrapper>
  );
};

export const Hamburger = forwardRef(HamburgerComponent);
