import { darkmodeState } from 'atoms/darkmode.atom';
import { DARKMODE_KEY } from 'const/storage';
import gsap from 'gsap';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Svg, SvgName } from './Svg';

const Wrapper = styled.button`
  cursor: pointer;
  border-radius: 0.1rem;
  border: none;
  background: transparent;
`;

const tl = gsap.timeline();

interface SvgState {
  source: SvgName;
  target: SvgName;
}

export const ThemeToggle = () => {
  const [darkmode, setDarkMode] = useRecoilState(darkmodeState);
  const [initialSvg, setInitialSvg] = useState<SvgState>();

  const sunRef = createRef<SVGSVGElement>();
  const moonRef = createRef<SVGSVGElement>();
  const sunPath = useRef<SVGPathElement>();
  const moonPath = useRef<SVGPathElement>();

  useEffect(() => {
    sunPath.current = sunRef.current?.firstChild as SVGPathElement;
    moonPath.current = moonRef.current?.firstChild as SVGPathElement;
  }, [sunRef, moonRef]);

  useEffect(() => {
    const persisted = localStorage.getItem(DARKMODE_KEY) === 'true';

    setDarkMode(persisted);
    setInitialSvg({
      source: persisted ? 'sun' : 'moon',
      target: persisted ? 'moon' : 'sun',
    });
  }, [setDarkMode]);

  function handleToggleTheme() {
    if (tl.isActive()) return;

    setDarkMode(!darkmode);

    const source =
      initialSvg?.source === 'moon' ? moonPath.current : sunPath.current;
    const target = darkmode ? moonPath.current : sunPath.current;

    tl.to(source as SVGPathElement, { morphSVG: target });
  }

  return (
    <>
      {initialSvg != null && (
        <Wrapper onClick={handleToggleTheme}>
          <Svg
            name={initialSvg.source}
            ref={initialSvg.source === 'sun' ? sunRef : moonRef}
            aria-label={`Toggle ${initialSvg.source} mode`}
          />
          <Svg
            name={initialSvg.target}
            ref={initialSvg.target === 'moon' ? moonRef : sunRef}
            aria-label={`Toggle ${initialSvg.target} mode`}
            display="none"
          />
        </Wrapper>
      )}
    </>
  );
};
