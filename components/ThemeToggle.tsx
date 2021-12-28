import { THEME_KEY } from '@const/storage';
import gsap from 'gsap';
import React, { createRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Svg, SvgName } from './Svg';
import { Theme, ThemeProviderContext } from './Theme/ThemeProvider';

const Wrapper = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
`;

interface SvgState {
  source: SvgName;
  target: SvgName;
}

export const ThemeToggle = () => {
  const [svgs, setSvgs] = useState<SvgState>();

  const sunRef = createRef<SVGSVGElement>();
  const moonRef = createRef<SVGSVGElement>();
  const sunPath = useRef<SVGPathElement>();
  const moonPath = useRef<SVGPathElement>();
  const tl = useRef<gsap.core.Timeline>();

  useEffect(() => {
    tl.current = gsap.timeline();

    return () => {
      tl.current?.kill();
    };
  }, []);

  useEffect(() => {
    sunPath.current = sunRef.current?.firstChild as SVGPathElement;
    moonPath.current = moonRef.current?.firstChild as SVGPathElement;
  }, [sunRef, moonRef]);

  useEffect(() => {
    const id = localStorage.getItem(THEME_KEY) as Theme;

    setSvgs({
      source: id === 'dark' ? 'moon' : 'sun',
      target: id === 'dark' ? 'sun' : 'moon',
    });
  }, []);

  function animateToggle(id: Theme) {
    const source = svgs?.source === 'moon' ? moonPath.current : sunPath.current;
    const target = id === 'dark' ? sunPath.current : moonPath.current;

    tl.current?.to(source as SVGPathElement, { morphSVG: target });
  }

  return (
    <>
      {svgs && (
        <ThemeProviderContext.Consumer>
          {({ id, toggleTheme }) => (
            <Wrapper
              aria-label={`Toggle ${id} mode`}
              onClick={() => {
                if (tl.current?.isActive()) return;

                toggleTheme();
                animateToggle(id);
              }}
            >
              <Svg
                name={svgs.source}
                ref={svgs.source === 'sun' ? sunRef : moonRef}
              />
              <Svg
                name={svgs.target}
                ref={svgs.target === 'moon' ? moonRef : sunRef}
                display="none"
              />
            </Wrapper>
          )}
        </ThemeProviderContext.Consumer>
      )}
    </>
  );
};
