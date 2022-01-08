import gsap from 'gsap';
import { FC, useEffect, useRef } from 'react';
import { Svg } from './Svg';

export interface CopyToClipboardProps {
  copyTarget: HTMLElement | null | undefined;
}

export const CopyToClipboard: FC<CopyToClipboardProps> = ({ copyTarget }) => {
  const clipboardRef = useRef<SVGSVGElement>(null);
  const checkRef = useRef<SVGSVGElement>(null);
  const clipboardEl = gsap.utils.selector(clipboardRef);
  const checkEl = gsap.utils.selector(checkRef);
  const tl = useRef<gsap.core.Timeline>();

  async function copyToClipboard() {
    if (tl.current?.isActive()) return;

    const source = clipboardEl('path')[0] as unknown as SVGPathElement;
    const target = checkEl('path')[0] as unknown as SVGPathElement;

    tl.current
      ?.to(source, {
        stroke: 'var(--success-base)',
        fill: 'var(--success-base)',
        morphSVG: target,
        onStart: () => {
          if (copyTarget) navigator.clipboard.writeText(copyTarget.innerText);
        },
      })
      .to(source, {
        stroke: 'var(--text-faded)',
        fill: 'transparent',
        morphSVG: source,
        delay: 0.8,
      });
  }

  useEffect(() => {
    tl.current = gsap.timeline();

    return () => {
      tl.current?.kill();
    };
  }, []);

  return (
    <div>
      <Svg
        ref={clipboardRef}
        name="clipboard"
        aria-label="Copy to clipboard"
        stroke="var(--text-faded)"
        fill="transparent"
        width={27}
        height={27}
        opacity={0.5}
        cursor="pointer"
        onClick={copyToClipboard}
      />
      <Svg
        ref={checkRef}
        name="check"
        visibility="hidden"
        width={30}
        height={30}
        opacity={0.5}
      />
    </div>
  );
};
