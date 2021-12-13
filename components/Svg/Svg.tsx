import {
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  SVGAttributes,
} from 'react';
import { SvgName, SVGS } from './svgs';

export interface SvgProps extends SVGAttributes<SVGElement> {
  name: SvgName;
}

const SvgComponent = (
  props: PropsWithChildren<SvgProps>,
  ref: ForwardedRef<SVGSVGElement>,
) => {
  const svg = SVGS.get(props.name);

  return (
    <svg
      viewBox={svg?.viewBox || '0 0 20 20'}
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="var(--primary-base)"
      ref={ref}
      {...props}
    >
      {svg?.pathAttrs?.map((attrs, i) => (
        <path key={`${props.name}-${i}`} {...attrs} />
      ))}
      <title>{props.name}</title>
    </svg>
  );
};

export const Svg = forwardRef(SvgComponent);
