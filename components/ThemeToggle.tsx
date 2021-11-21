import gsap from 'gsap';
import { createRef, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Svg } from './Svg/Svg';

const Wrapper = styled.button`
  cursor: pointer;
  border-radius: 0.1rem;
  border: none;
  background: transparent;
`;

const tl = gsap.timeline();

export const ThemeToggle = () => {
  const [theme, toggleTheme] = useState(false);

  const sunRef = createRef<SVGSVGElement>();
  const moonRef = createRef<SVGSVGElement>();
  const sunPath = useRef<SVGPathElement>();
  const moonPath = useRef<SVGPathElement>();

  useLayoutEffect(() => {
    sunPath.current = sunRef.current?.firstChild as SVGPathElement;
    moonPath.current = moonRef.current?.firstChild as SVGPathElement;
  }, [sunRef, moonRef]);

  function handleToggleTheme() {
    if (tl.isActive()) return;

    toggleTheme(!theme);

    tl.to(sunPath.current as SVGPathElement, {
      morphSVG: theme ? sunPath.current : moonPath.current,
    });
  }

  return (
    <Wrapper onClick={handleToggleTheme}>
      <Svg name="sun" ref={sunRef} aria-label="Toggle light mode" />
      <Svg name="moon" ref={moonRef} aria-label="Toggle dark mode" />
    </Wrapper>
  );
};
